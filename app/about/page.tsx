"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Download,
  GraduationCap,
  Layers,
  MapPin,
  Route,
  type LucideIcon,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import {
  bio,
  coursework,
  education,
  skillGroups,
  timeline,
} from "../data/about";
import { site } from "../data/site";

// SEO and GEO / AEO lead the skills section; the other groups follow in a
// compact list underneath.
const LEAD_SKILL_LABELS = ["SEO", "GEO / AEO"];
const leadSkillGroups = skillGroups.filter((group) =>
  LEAD_SKILL_LABELS.includes(group.label),
);
const otherSkillGroups = skillGroups.filter(
  (group) => !LEAD_SKILL_LABELS.includes(group.label),
);

const summaryParagraphs = bio.summary
  .split(/\n\s*\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean);

type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] };

// Lines starting with "•" become list items, blank lines separate
// paragraphs, and every other line is a paragraph of its own.
function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    const last = blocks[blocks.length - 1];
    if (line.startsWith("•")) {
      const item = line.slice(1).trim();
      if (last?.kind === "list") {
        last.items.push(item);
      } else {
        blocks.push({ kind: "list", items: [item] });
      }
    } else {
      blocks.push({ kind: "paragraph", text: line });
    }
  }
  return blocks;
}

const approachBlocks = parseBlocks(bio.philosophy);

// Helper to parse **bold** markdown in text
function parseInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "var(--foreground)", fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Sections below the header fade in as they scroll into view.
const reveal: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

function SectionHeading({
  id,
  icon: Icon,
  children,
}: {
  id: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Icon
        size={16}
        className="shrink-0"
        style={{ color: "var(--accent)" }}
        aria-hidden="true"
      />
      <h2
        id={id}
        className="text-xl font-bold"
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </h2>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li
      className="flex gap-2 text-sm leading-relaxed"
      style={{ color: "var(--foreground-secondary)" }}
    >
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

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="eyebrow">About Me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            {bio.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
          >
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <Briefcase
                size={14}
                className="shrink-0"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              />
              {bio.tagline}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <MapPin
                size={14}
                className="shrink-0"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              />
              {bio.location}
            </span>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {summaryParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Resume download + case studies */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3"
          >
            <a
              href={site.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              }}
              id="resume-download"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
            <Link
              href="/seo"
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color: "var(--accent)",
                border: "2px solid var(--accent)",
              }}
              id="about-seo-case-studies"
            >
              SEO Case Studies <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/influencer-marketing"
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground-secondary)",
              }}
              id="about-influencer-case-study"
            >
              Influencer Marketing Case Study{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </header>

        {/* How I Approach SEO */}
        <motion.section
          {...reveal}
          className="mb-16"
          aria-labelledby="approach-heading"
        >
          <SectionHeading id="approach-heading" icon={Compass}>
            How I Approach SEO
          </SectionHeading>
          <div className="glass-card p-6 sm:p-8 space-y-4">
            {approachBlocks.map((block, i) =>
              block.kind === "list" ? (
                <ul key={i} className="space-y-3">
                  {block.items.map((item) => (
                    <Bullet key={item}>{parseInlineBold(item)}</Bullet>
                  ))}
                </ul>
              ) : (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {parseInlineBold(block.text)}
                </p>
              ),
            )}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          {...reveal}
          className="mb-16"
          aria-labelledby="skills-heading"
        >
          <SectionHeading id="skills-heading" icon={Layers}>
            Skills &amp; Expertise
          </SectionHeading>

          {/* SEO and GEO / AEO first, in the primary panel */}
          <div className="panel-card p-5 sm:p-6 mb-6 space-y-5">
            {leadSkillGroups.map((group) => (
              <div key={group.label}>
                <h3
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-2.5"
                  style={{ color: "var(--accent)" }}
                >
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag-pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {otherSkillGroups.map((group) => (
              <div
                key={group.label}
                className="sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-4 sm:items-start"
              >
                <h3
                  className="text-xs font-bold uppercase tracking-[0.14em] mb-2 sm:mb-0 sm:pt-1.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="tag-pill"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Career Timeline */}
        <motion.section
          {...reveal}
          className="mb-16"
          aria-labelledby="career-heading"
        >
          <SectionHeading id="career-heading" icon={Route}>
            Career Journey
          </SectionHeading>
          <div className="relative">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{ background: "var(--border)" }}
            />

            <ol className="space-y-8">
              {timeline.map((entry, i) => (
                <motion.li
                  key={`${entry.company}-${entry.year}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2"
                    style={{
                      borderColor: "var(--accent)",
                      background: "var(--background)",
                    }}
                  />

                  <div className="glass-card p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        {entry.year}
                      </span>
                      {entry.kind === "education" && (
                        <span
                          className="text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md"
                          style={{
                            background: "var(--accent-light)",
                            color: "var(--accent)",
                          }}
                        >
                          Training
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-base font-bold mt-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      {entry.role}
                    </h3>
                    <p
                      className="text-sm font-medium mb-2"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {entry.company}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {entry.description}
                    </p>
                    {entry.highlights && entry.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {entry.highlights.map((item) => (
                          <Bullet key={item}>{item}</Bullet>
                        ))}
                      </ul>
                    )}
                    <ul className="flex flex-wrap gap-1.5">
                      {entry.skills.map((skill) => (
                        <li
                          key={skill}
                          className="tag-pill"
                          style={{ fontSize: "0.65rem" }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section {...reveal} aria-labelledby="education-heading">
          <SectionHeading id="education-heading" icon={GraduationCap}>
            Education &amp; Certifications
          </SectionHeading>
          <div className="glass-card p-6 sm:p-8">
            <ul className="space-y-4">
              {education.map((credential) => (
                <li
                  key={credential.title}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6"
                >
                  <div className="min-w-0">
                    {/* Titles with an issuing org are credentials; a title
                        without one (paid media) is a plain note. */}
                    <p
                      className={`text-sm leading-snug ${
                        credential.org ? "font-semibold" : ""
                      }`}
                      style={{
                        color: credential.org
                          ? "var(--foreground)"
                          : "var(--foreground-secondary)",
                      }}
                    >
                      {credential.title}
                    </p>
                    {credential.org && (
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {credential.org}
                      </p>
                    )}
                  </div>
                  {credential.date && (
                    <span
                      className="text-xs font-mono font-medium sm:pt-0.5 sm:whitespace-nowrap"
                      style={{ color: "var(--accent)" }}
                    >
                      {credential.date}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <h3
                className="text-sm font-bold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Coursework highlights
              </h3>
              <ul className="space-y-2">
                {coursework.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
