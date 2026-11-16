import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { site } from '../../data/site';
import { enquiryTopics, enquiryTriggers } from '../../data/enquiry';

// Length limits keep one request from producing a huge email.
const MAX = { name: 100, email: 254, message: 5000, page: 200 };

// Both forms send how long the visitor spent filling them in. Real people
// take longer than this; faster posts are almost always bots.
const MIN_FILL_MS = 2500;

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

// At most 5 messages per IP every 10 minutes and 20 a day, which keeps one
// sender from using up Gmail's daily sending quota. Serverless instances
// don't share memory, so this only slows bursts; the honeypot, timing and
// origin checks do most of the filtering.
const BURST_WINDOW_MS = 10 * 60 * 1000;
const BURST_LIMIT = 5;
const DAY_WINDOW_MS = 24 * 60 * 60 * 1000;
const DAY_LIMIT = 20;
const recentByIp = new Map<string, number[]>();

// Only accepted messages count, so rejected retries don't extend the wait.
function rateLimited(ip: string) {
  const now = Date.now();
  const today = (recentByIp.get(ip) ?? []).filter((t) => now - t < DAY_WINDOW_MS);
  const burst = today.filter((t) => now - t < BURST_WINDOW_MS).length;
  if (burst >= BURST_LIMIT || today.length >= DAY_LIMIT) {
    recentByIp.set(ip, today);
    return true;
  }
  if (recentByIp.size > 1000) recentByIp.clear();
  today.push(now);
  recentByIp.set(ip, today);
  return false;
}

function text(value: unknown) {
  return typeof value === 'string' ? value : '';
}

// One line with no control characters: safe for the subject and table cells.
function oneLine(value: string) {
  return value.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Bots get the same success response, so they can't tell they were filtered.
const sent = () =>
  NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

// A site path such as /blogs/geo-tools, or '' if the value isn't one.
function sitePath(value: unknown) {
  const path = text(value).trim();
  return path.length <= MAX.page && /^\/[\w\-./]*$/.test(path) ? path : '';
}

// Dropped messages are logged without personal data, so a silent filter
// can still be spotted in the Vercel logs.
function logDropped(reason: string, body: Record<string, unknown>) {
  console.warn(
    `Contact form: dropped (${reason}) source=${oneLine(text(body.source)).slice(0, 20)} page=${sitePath(body.page)}`
  );
}

export async function POST(request: Request) {
  // Only this site's own pages may post here. Browsers send Origin with
  // cross-site requests, and requiring JSON forces a CORS preflight that
  // other sites can't pass, so they can't make visitors' browsers send mail.
  const origin = request.headers.get('origin');
  if (origin) {
    let originHost = '';
    try {
      originHost = new URL(origin).host;
    } catch {}
    if (originHost !== request.headers.get('host')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }
  if (!/^application\/json\s*(;|$)/i.test(request.headers.get('content-type') ?? '')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 415 });
  }
  if (Number(request.headers.get('content-length') ?? 0) > 20_000) {
    return NextResponse.json({ error: 'Message too long' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: a field real visitors never see or fill in.
  if (text(body.hp).trim()) {
    logDropped('honeypot', body);
    return sent();
  }
  // A page opened before the forms sent this field can't pass the check;
  // tell that visitor to reload rather than silently dropping the message.
  if (body.elapsedMs === undefined) {
    return NextResponse.json(
      { error: 'Please reload the page and send your message again.' },
      { status: 400 }
    );
  }
  const elapsedMs = Number(body.elapsedMs);
  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) {
    logDropped('too fast', body);
    return sent();
  }

  const name = oneLine(text(body.name));
  const email = text(body.email).trim();
  const message = text(body.message).replace(/\r\n?/g, '\n').trim();
  const topic = (enquiryTopics as readonly string[]).includes(text(body.topic))
    ? text(body.topic)
    : '';
  const source = body.source === 'popup' ? 'Enquiry pop-up' : 'Contact page';
  const page = sitePath(body.page);
  const trigger = Object.hasOwn(enquiryTriggers, text(body.trigger))
    ? enquiryTriggers[text(body.trigger) as keyof typeof enquiryTriggers]
    : '';
  // How the visit started: landing path, referring hostname, utm_source.
  const landing = sitePath(body.landing);
  const referrer = /^[a-z0-9.-]{1,100}$/i.test(text(body.referrer)) ? text(body.referrer) : '';
  const utm = /^[\w.-]{1,60}$/.test(text(body.utm)) ? text(body.utm) : '';

  const invalid = (error: string) =>
    NextResponse.json({ error }, { status: 400 });
  if (!name || !email || !message) {
    return invalid('Please fill in your name, email and message.');
  }
  if (name.length > MAX.name) {
    return invalid('Please shorten your name to 100 characters.');
  }
  if (email.length > MAX.email || !EMAIL_RE.test(email)) {
    return invalid('Please enter a full email address, like name@company.com.');
  }
  if (message.length > MAX.message) {
    return invalid('Please keep your message under 5,000 characters.');
  }

  const ip =
    (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() ||
    'unknown';
  if (rateLimited(ip)) {
    logDropped('rate limit', body);
    return NextResponse.json(
      { error: 'Too many messages. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.error('Contact form: SMTP_EMAIL or SMTP_PASSWORD is not set');
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  const label = topic || 'General';
  const via = trigger && trigger !== 'contact page' ? ` (${trigger})` : '';
  const where = `${source}${via}${page ? ` on ${page}` : ''}`;
  const pageLink = page
    ? ` on <a href="${escapeHtml(site.url + page)}">${escapeHtml(page)}</a>`
    : '';
  const visit = [
    landing && `landed on ${landing}`,
    referrer ? `from ${referrer}` : landing && 'directly or from an app',
    utm && `utm_source=${utm}`,
  ]
    .filter(Boolean)
    .join(', ');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: { name: 'Website enquiry', address: process.env.SMTP_EMAIL },
      to: site.email,
      replyTo: { name, address: email },
      subject: `[Website] ${label} enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${label}`,
        `Sent from: ${where}`,
        ...(visit ? [`Visit: ${visit}`] : []),
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #0d1330;">
          <h2 style="margin: 0 0 12px; font-size: 18px;">New enquiry from your website</h2>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td style="color: #46527a;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="color: #46527a;">Email</td><td><a href="mailto:${escapeHtml(encodeURIComponent(email).replace(/%40/g, '@'))}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="color: #46527a;">Topic</td><td>${escapeHtml(label)}</td></tr>
            <tr><td style="color: #46527a;">Sent from</td><td>${escapeHtml(source + via)}${pageLink}</td></tr>
            ${visit ? `<tr><td style="color: #46527a;">Visit</td><td>${escapeHtml(visit)}</td></tr>` : ''}
          </table>
          <p style="margin: 16px 0 6px; color: #46527a;">Message</p>
          <div style="white-space: pre-wrap; border-left: 4px solid #e23636; padding: 8px 12px; background: #f1f3fa;">${escapeHtml(message)}</div>
          <p style="margin-top: 16px; font-size: 12px; color: #8590b3;">Reply to this email to answer ${escapeHtml(name)} directly.</p>
        </div>
      `,
    });

    return sent();
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
