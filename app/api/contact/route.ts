import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { site } from '../../data/site';
import { enquiryTopics } from '../../data/enquiry';

// Length limits keep one request from producing a huge email.
const MAX = { name: 100, email: 254, message: 5000, page: 200 };

// Both forms send how long the visitor spent filling them in. Real people
// take longer than this; faster posts are almost always bots.
const MIN_FILL_MS = 2500;

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

// At most 5 messages per IP every 10 minutes. Serverless instances don't
// share memory, so this only slows bursts; the honeypot and timing checks
// do most of the filtering.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const recentByIp = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  if (recentByIp.size > 1000) recentByIp.clear();
  recentByIp.set(ip, recent);
  return recent.length > LIMIT;
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

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: a field real visitors never see or fill in.
  if (text(body.company).trim()) return sent();
  const elapsedMs = Number(body.elapsedMs);
  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) return sent();

  const name = oneLine(text(body.name));
  const email = text(body.email).trim();
  const message = text(body.message).replace(/\r\n?/g, '\n').trim();
  const topic = (enquiryTopics as readonly string[]).includes(text(body.topic))
    ? text(body.topic)
    : '';
  const source = body.source === 'popup' ? 'Enquiry pop-up' : 'Contact page';
  const pagePath = oneLine(text(body.page));
  const page =
    pagePath.startsWith('/') && pagePath.length <= MAX.page ? pagePath : '';

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required' },
      { status: 400 }
    );
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json(
      { error: 'Please check your name, email address and message.' },
      { status: 400 }
    );
  }

  const ip =
    (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() ||
    'unknown';
  if (rateLimited(ip)) {
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
  const where = page ? `${source} on ${page}` : source;
  const pageLink = page
    ? ` on <a href="${escapeHtml(site.url + page)}">${escapeHtml(page)}</a>`
    : '';

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
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #0d1330;">
          <h2 style="margin: 0 0 12px; font-size: 18px;">New enquiry from your website</h2>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td style="color: #46527a;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="color: #46527a;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="color: #46527a;">Topic</td><td>${escapeHtml(label)}</td></tr>
            <tr><td style="color: #46527a;">Sent from</td><td>${escapeHtml(source)}${pageLink}</td></tr>
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
