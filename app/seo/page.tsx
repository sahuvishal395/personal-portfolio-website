"use client";

import PageTransition from "../components/PageTransition";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Calendar,
  CircleCheck,
  Code2,
  Download,
  FileText,
  Layers,
  ListChecks,
  MousePointerClick,
  Search,
  Share2,
  Sparkles,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { site } from "../data/site";
import { skillGroups, timeline } from "../data/about";
import {
  otherWins,
  seoCaseStudies,
  seoProcess,
  seoStats,
  seoToolkit,
  type OtherWin,
} from "../data/seo";

const employer = `${site.employer.name} (formerly ${site.employer.formerName})`;

// Role dates come from the CV timeline so the header can't drift from it.
const currentRole = timeline.find(
  (entry) =>
    entry.kind === "work" && entry.company.startsWith(site.employer.name),
);

// Short labels for the jump list. A case study missing here falls back to its
// category, so a new entry is never left out of the list.
const jumpLabels: Record<string, string> = {
  "rebrand-seo-migration": "Rebrand migration",
  "ai-search-geo-aeo": "AI search (GEO / AEO)",
  "templated-pages-indexation": "Indexation at scale",
  "technical-seo-audits": "Technical audits",
  "backlink-reclamation": "Backlink reclamation",
  "keyword-research-pipeline": "Keyword research",
  "content-featured-snippets": "Content & featured snippets",
};

const processIcons: Record<string, LucideIcon> = {
  "Find unmet demand": Search,
  "Fix the foundations": Wrench,
  "Build pages that rank": FileText,
  "Get cited by AI": Bot,
  "Convert the visit": MousePointerClick,
};

const toolkitIcons: Record<string, LucideIcon> = {
  "Search & analytics": BarChart3,
  "AI search": Bot,
  "Build & publish": Code2,
  Distribution: Share2,
};

// Only the search-focused skill groups belong on this page; tools are covered
// by the Toolkit section.
const searchSkillGroups = skillGroups.filter(
  (group) => group.label === "SEO" || group.label === "GEO / AEO",
);

const plainWins = otherWins.filter((win) => !win.href);
const linkedWins = otherWins.filter(
  (win): win is OtherWin & { href: string } => Boolean(win.href),
);

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function metricColumns(count: number) {
  if (count >= 4) return "grid-cols-2 sm:grid-cols-4";
  if (count === 3) return "grid-cols-2 sm:grid-cols-3";
  return "grid-cols-2";
}

export default function SeoCaseStudiesPage() {
  return (
    <PageTransition>
      <MotionConfig reducedMotion="user">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          {/* Header */}
          <header className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="eyebrow">Case Studies</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ color: "var(--foreground)" }}
            >
              SEO &amp; AI Search Case Studies
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
                <Briefcase size={14} style={{ color: "var(--accent)" }} />
                {employer}
              </span>
              {currentRole && (
                <span
                  className="inline-flex items-center gap-1.5 text-sm"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  <Calendar size={14} style={{ color: "var(--accent)" }} />
                  {currentRole.year}
                </span>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--foreground-secondary)" }}
            >
              I&apos;m an SEO specialist with{" "}
              <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
                3.5+ years
              </strong>{" "}
              at {employer}, a B2B software testing platform. I&apos;ve grown
              from the fundamentals of technical SEO, keyword research, content
              and link building into what search is becoming. That now
              includes{" "}
              <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
                GEO/AEO
              </strong>
              : making sure the brand is cited when buyers ask ChatGPT,
              Perplexity and Gemini for answers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base leading-relaxed mt-4"
              style={{ color: "var(--foreground-secondary)" }}
            >
              My approach is the same across both. I use Search Console, Ahrefs
              and Semrush to find where demand is going unmet, then build pages
              that rank, get cited and convert. The case studies below show how
              that works in practice.
            </motion.p>
          </header>

          {/* Key numbers */}
          <motion.section
            aria-label="Key numbers"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {seoStats.map((stat) => (
                <li key={stat.label} className="glass-card p-4 sm:p-5">
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium leading-snug"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Jump list */}
          <motion.nav
            aria-labelledby="seo-jump-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mb-12 sm:mb-16"
          >
            <div className="mb-4">
              <span id="seo-jump-label" className="eyebrow">
                On this page
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {seoCaseStudies.map((study, i) => (
                <li key={study.slug}>
                  <a href={`#${study.slug}`} className="tag-pill gap-2">
                    <span
                      aria-hidden="true"
                      className="font-mono"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {pad(i + 1)}
                    </span>
                    {jumpLabels[study.slug] ?? study.category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Case studies */}
          <div className="space-y-6 sm:space-y-8 mb-16">
            {seoCaseStudies.map((study, i) => {
              const titleId = `${study.slug}-title`;
              return (
                <motion.article
                  key={study.slug}
                  id={study.slug}
                  aria-labelledby={titleId}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-24"
                >
                  <div className="glass-card p-5 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-mono font-bold flex-shrink-0"
                        style={{
                          background: "var(--accent-light)",
                          color: "var(--accent)",
                        }}
                      >
                        {pad(i + 1)}
                      </span>
                      <span className="eyebrow">{study.category}</span>
                    </div>

                    <h2
                      id={titleId}
                      className="text-xl sm:text-2xl font-bold tracking-tight mb-3"
                      style={{ color: "var(--foreground)" }}
                    >
                      {study.title}
                    </h2>
                    <p
                      className="text-sm sm:text-base leading-relaxed mb-6"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {study.context}
                    </p>

                    <h3
                      className="flex items-center gap-2 text-base font-bold mb-3"
                      style={{ color: "var(--foreground)" }}
                    >
                      <ListChecks size={15} style={{ color: "var(--accent)" }} />
                      What I did
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {study.actions.map((action) => (
                        <li
                          key={action}
                          className="flex gap-3 text-sm sm:text-base leading-relaxed"
                          style={{ color: "var(--foreground-secondary)" }}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>

                    {study.result && (
                      <div
                        className="rounded-r-lg px-4 py-3 mb-6"
                        style={{
                          background: "var(--accent-light)",
                          borderLeft: "3px solid var(--accent)",
                        }}
                      >
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--foreground)" }}
                        >
                          <span
                            className="font-semibold"
                            style={{ color: "var(--accent)" }}
                          >
                            Result:
                          </span>{" "}
                          {study.result}
                        </p>
                      </div>
                    )}

                    {study.metrics.length > 0 && (
                      <ul
                        className={`grid ${metricColumns(study.metrics.length)} gap-3 mb-6`}
                      >
                        {study.metrics.map((metric) => (
                          <li
                            key={metric.label}
                            className="rounded-lg p-3 sm:p-4"
                            style={{
                              background: "var(--background-secondary)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            <div
                              className="text-xl sm:text-2xl font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {metric.value}
                            </div>
                            <div
                              className="text-xs font-medium leading-snug mt-1"
                              style={{ color: "var(--foreground-secondary)" }}
                            >
                              {metric.label}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul aria-label="Topics" className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <li key={tag}>
                          <span className="tag-pill">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* How I work */}
          <motion.section
            aria-labelledby="how-i-work"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-2">
              <Layers size={16} style={{ color: "var(--accent)" }} />
              <h2
                id="how-i-work"
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                How I Work
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--foreground-secondary)" }}
            >
              The same steps apply whether the goal is a Google ranking or a
              citation in an AI answer.
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div
                aria-hidden="true"
                className="absolute left-[7px] top-2 bottom-2 w-px"
                style={{ background: "var(--border)" }}
              />

              <ol className="space-y-6">
                {seoProcess.map((step, i) => {
                  const Icon = processIcons[step.title] ?? CircleCheck;
                  return (
                    <motion.li
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: i * 0.07, duration: 0.5 }}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <div
                        aria-hidden="true"
                        className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2"
                        style={{
                          borderColor: "var(--accent)",
                          background: "var(--background)",
                        }}
                      />

                      <div className="glass-card p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={15} style={{ color: "var(--accent)" }} />
                          <h3
                            className="text-base font-bold"
                            style={{ color: "var(--foreground)" }}
                          >
                            {step.title}
                          </h3>
                          <span
                            className="text-xs font-mono ml-auto"
                            style={{ color: "var(--foreground-muted)" }}
                          >
                            {pad(i + 1)}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--foreground-secondary)" }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </motion.section>

          {/* Toolkit */}
          <motion.section
            aria-labelledby="toolkit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <Wrench size={16} style={{ color: "var(--accent)" }} />
              <h2
                id="toolkit"
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Toolkit
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {seoToolkit.map((group) => {
                const Icon = toolkitIcons[group.label] ?? Wrench;
                return (
                  <div key={group.label} className="glass-card p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon size={15} style={{ color: "var(--accent)" }} />
                      <h3
                        className="text-base font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {group.label}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="tag-pill">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Capabilities */}
          {searchSkillGroups.length > 0 && (
            <motion.section
              aria-labelledby="capabilities"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-6">
                <Target size={16} style={{ color: "var(--accent)" }} />
                <h2
                  id="capabilities"
                  className="text-xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Capabilities
                </h2>
              </div>
              <div className="space-y-6">
                {searchSkillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="mb-3">
                      <span className="eyebrow">{group.label}</span>
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="tag-pill">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Beyond SEO */}
          <motion.section
            aria-labelledby="beyond-seo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} style={{ color: "var(--accent)" }} />
              <h2
                id="beyond-seo"
                className="text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Beyond SEO
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Other results from the same role at {site.employer.name}.
            </p>

            {plainWins.length > 0 && (
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {plainWins.map((win) => (
                  <li key={win.label} className="glass-card p-4">
                    <div
                      className="text-xl sm:text-2xl font-bold mb-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      {win.value}
                    </div>
                    <div
                      className="text-xs font-medium leading-snug"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {win.label}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {linkedWins.map((win) => (
              <Link
                key={win.label}
                href={win.href}
                className="glass-card group mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5"
              >
                <span
                  className="text-2xl sm:text-3xl font-bold flex-shrink-0"
                  style={{ color: "var(--foreground)" }}
                >
                  {win.value}
                </span>
                <span
                  className="flex-1 text-sm leading-relaxed"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {win.label}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold flex-shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  Read the case study
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </motion.section>

          {/* CTA */}
          <motion.section
            aria-labelledby="seo-cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <h2
                id="seo-cta-title"
                className="text-xl font-bold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Need SEO that holds up in AI search too?
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--foreground-secondary)" }}
              >
                Happy to talk through technical audits, site migrations,
                keyword research, or getting a brand cited in ChatGPT,
                Perplexity and Gemini answers.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                  }}
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
                <a
                  href={site.resumePdf}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--foreground-secondary)",
                  }}
                >
                  <Download size={16} /> Download Resume
                </a>
                <Link
                  href="/influencer-marketing"
                  className="link-hover inline-flex items-center gap-1.5 text-sm"
                >
                  Influencer marketing case study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </MotionConfig>
    </PageTransition>
  );
}
