"use client";

import type { CSSProperties, ReactNode } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Download, Globe, Mail, MapPin, Printer } from "lucide-react";
import {
  bio,
  coursework,
  education,
  skillGroups,
  timeline,
} from "../data/about";
import { site } from "../data/site";

// Summary as it reads on the CV.
const summary =
  "SEO specialist with 3.5+ years at TestMu AI (formerly LambdaTest), a B2B software testing platform, where I've grown from the fundamentals of technical SEO, keyword research, content and link building into what search is becoming. I also focus on GEO/AEO, making sure the brand is cited when buyers ask ChatGPT, Perplexity and Gemini for answers. My approach is the same across both: use Search Console, Ahrefs and Semrush to find where demand is going unmet, then build pages that rank, get cited and convert.";

// Work history in CV order. Kraftshala is training, so it is listed under
// Education & Certifications, as on the CV. The CV gives the bare job title,
// so drop the focus area the About page adds after " · ".
const experience = timeline
  .filter((entry) => entry.kind === "work")
  .map((entry) => ({ ...entry, role: entry.role.split(" · ")[0] }));

const websiteLabel = site.url.replace(/^https?:\/\//, "");

const iconStyle: CSSProperties = { color: "var(--accent)" };

type IconProps = { size?: number; className?: string; style?: CSSProperties };

function LinkedinIcon({ size = 16, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ContactItem({
  icon,
  href,
  external = false,
  children,
}: {
  icon: ReactNode;
  href?: string;
  external?: boolean;
  children: ReactNode;
}) {
  const content = (
    <>
      {icon}
      <span className="min-w-0 wrap-anywhere">{children}</span>
    </>
  );

  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 min-w-0">
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 min-w-0 hover:text-accent"
      {...(external
        ? { target: "_blank", rel: "me noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8 last:mb-0">
      <h2
        className="text-base sm:text-lg font-bold uppercase tracking-wider mb-3 pb-1"
        style={{
          color: "var(--foreground)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 leading-relaxed">
      <span
        aria-hidden="true"
        className="shrink-0"
        style={{ color: "var(--accent)" }}
      >
        •
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <PageTransition>
      <div className="resume-page max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Download Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="print-hide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <span className="eyebrow">Resume</span>
            <p
              className="text-sm mt-2"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Save this page as a PDF, or download the PDF version of my CV.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              }}
              id="resume-print-btn"
            >
              <Printer size={16} aria-hidden="true" /> Save as PDF
            </button>
            <a
              href={site.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color: "var(--accent)",
                border: "2px solid var(--accent)",
              }}
              id="resume-pdf-download"
            >
              <Download size={16} aria-hidden="true" /> Download PDF
            </a>
          </div>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card resume-content p-5 sm:p-10"
          id="resume-printable"
        >
          {/* Header */}
          <header
            className="text-center mb-8 pb-6"
            style={{ borderBottom: "2px solid var(--accent-strong)" }}
          >
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
              style={{ color: "var(--foreground)" }}
            >
              {site.name}
            </h1>
            <p
              className="text-base sm:text-lg font-medium mb-4"
              style={{ color: "var(--accent)" }}
            >
              {bio.title}
            </p>
            <address
              className="not-italic flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <ContactItem
                href={`mailto:${site.email}`}
                icon={
                  <Mail
                    size={14}
                    className="shrink-0"
                    style={iconStyle}
                    aria-hidden="true"
                  />
                }
              >
                {site.email}
              </ContactItem>
              <ContactItem
                icon={
                  <MapPin
                    size={14}
                    className="shrink-0"
                    style={iconStyle}
                    aria-hidden="true"
                  />
                }
              >
                {site.location}
              </ContactItem>
              <ContactItem
                href={site.url}
                icon={
                  <Globe
                    size={14}
                    className="shrink-0"
                    style={iconStyle}
                    aria-hidden="true"
                  />
                }
              >
                {websiteLabel}
              </ContactItem>
              <ContactItem
                href={site.linkedin}
                external
                icon={
                  <LinkedinIcon size={14} className="shrink-0" style={iconStyle} />
                }
              >
                linkedin.com{site.linkedinHandle}
              </ContactItem>
              <ContactItem
                href={site.github}
                external
                icon={
                  <GithubIcon size={14} className="shrink-0" style={iconStyle} />
                }
              >
                github.com{site.githubHandle}
              </ContactItem>
            </address>
          </header>

          <ResumeSection title="Summary">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-secondary)" }}
            >
              {summary}
            </p>
          </ResumeSection>

          <ResumeSection title="Professional Experience">
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={`${job.company}-${job.year}`}>
                  <div className="resume-keep flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {job.role}
                    </h3>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--accent)" }}
                    >
                      {job.year}
                    </span>
                  </div>
                  <p
                    className="resume-keep text-sm font-medium mb-2"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {job.company}
                  </p>
                  {job.highlights && job.highlights.length > 0 && (
                    <ul
                      className="space-y-1.5 text-sm"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {job.highlights.map((item) => (
                        <Bullet key={item}>{item}</Bullet>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Skills">
            <ul
              className="space-y-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              {skillGroups.map((group) => (
                <li key={group.label} className="leading-relaxed">
                  <strong
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {group.label}:
                  </strong>{" "}
                  {group.items.join(", ")}
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Education & Certifications">
            <ul
              className="space-y-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              {education.map((credential) => (
                <Bullet key={credential.title}>
                  {/* Titles with an issuing org are credentials; a title
                      without one (paid media) is a plain note. */}
                  <span
                    className={credential.org ? "font-medium" : undefined}
                    style={
                      credential.org ? { color: "var(--foreground)" } : undefined
                    }
                  >
                    {credential.title}
                  </span>
                  {credential.org ? `, ${credential.org}` : ""}
                  {credential.date ? `, ${credential.date}` : ""}
                </Bullet>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Coursework Highlights">
            <ul
              className="space-y-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              {coursework.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </ResumeSection>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @page {
          margin: 14mm 16mm;
        }

        @media print {
          .print-hide,
          nav,
          footer,
          .gradient-mesh,
          .web-overlay,
          .web-corner,
          .fire-glow,
          .fire-embers {
            display: none !important;
          }
          html,
          body {
            background: #fff !important;
          }
          main {
            padding-top: 0 !important;
          }
          .resume-page {
            max-width: none !important;
            padding: 0 !important;
          }
          /* Print in the light palette, whichever theme is on screen */
          .resume-content {
            --foreground: #111111;
            --foreground-secondary: #333333;
            --foreground-muted: #555555;
            --border: #d5d9e3;
            --accent: #b81f28;
            --accent-strong: #b81f28;
            background: #fff !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            overflow: visible !important;
            transform: none !important;
            padding: 0 !important;
          }
          .resume-content::before {
            display: none !important;
          }
          .resume-content a {
            color: inherit !important;
            text-decoration: none !important;
          }
          .resume-content li {
            break-inside: avoid;
          }
          .resume-content h2,
          .resume-keep {
            break-after: avoid;
          }
        }
      `}</style>
    </PageTransition>
  );
}
