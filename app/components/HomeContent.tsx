"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Layers,
  LayoutGrid,
  Mail,
  Megaphone,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import TypewriterText from "./TypewriterText";
import { getFeaturedPost } from "../data/blogs";
import { stats } from "../data/about";
import { otherWins, seoCaseStudies } from "../data/seo";
import { site } from "../data/site";

// Module scope keeps the array reference stable, so the typewriter effect
// does not restart its dependencies on every render.
const heroRoles = [
  "SEO & Organic Growth",
  "Technical SEO",
  "GEO / AEO for AI Search",
  "Product Marketing Lead",
];

const skillMarquee = [
  "SEO Strategy",
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "GEO / AEO",
  "Site Migration",
  "Redirect Mapping",
  "Indexation & Crawl",
  "Keyword Research",
  "Content Gap Analysis",
  "Schema Markup",
  "Featured Snippets",
  "Link Building",
  "Backlink Audits",
  "AI Citation Tracking",
  "Google Search Console",
  "GA4",
  "Ahrefs",
  "Semrush",
  "SE Ranking",
  "Profound",
  "SEO Content Strategy",
  "Landing Page CRO",
  "Product Launches",
  "Influencer Marketing",
];

// The marquee CSS animates a fixed 30s loop sized for 20 pills. Scale the
// duration with the list so the scroll speed stays the same.
const marqueeDuration = `${Math.round((skillMarquee.length / 20) * 30)}s`;

const INFLUENCER_PATH = "/influencer-marketing";

// The influencer budget gets its own card in "Beyond SEO", so it is left out
// of the "Other wins" list next to it.
const influencerWin = otherWins.find((win) => win.href === INFLUENCER_PATH);
const moreWins = otherWins.filter((win) => win.href !== INFLUENCER_PATH);
const influencerBudget = influencerWin?.value ?? "$1.3M";

const influencerStats = [
  { value: influencerBudget, label: "Budget" },
  { value: "100+", label: "Creators" },
  { value: "4", label: "Platforms" },
];

const employer = `${site.employer.name} (formerly ${site.employer.formerName})`;

const gradientFill =
  "linear-gradient(135deg, var(--gradient-1), var(--gradient-3))";

const quickLinks = [
  {
    href: "/about",
    icon: Briefcase,
    label: "About",
    body: "3.5+ years in SEO and GEO/AEO at TestMu AI, plus product marketing and influencer campaigns.",
    cta: "Learn more",
  },
  {
    href: "/reading-list",
    icon: BookOpen,
    label: "Reading List",
    body: "Obviously Awesome · Zero to One · Made to Stick",
    cta: "View all",
  },
];

export default function HomeContent() {
  const featuredPost = getFeaturedPost();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* ─────────── Hero ─────────── */}
      <section className="mb-16 sm:mb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold"
              style={{
                background: "var(--accent-light)",
                color: "var(--accent)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
              />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-5"
            style={{ color: "var(--foreground)" }}
          >
            Hi, I&apos;m{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, var(--gradient-1), var(--gradient-3))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vishal
            </span>
          </motion.h1>

          {/* The typewriter starts empty and types on the client, so the full
              title is also in the HTML for screen readers and crawlers. */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-xl sm:text-3xl font-semibold mb-6"
            style={{ color: "var(--foreground-secondary)" }}
          >
            <span className="sr-only">{site.title}</span>
            <span aria-hidden="true">
              <TypewriterText strings={heroRoles} />
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
            style={{ color: "var(--foreground-secondary)" }}
          >
            SEO specialist at {employer}. I find where search demand is going
            unmet, then build pages that rank in Google, get cited by ChatGPT,
            Perplexity and Gemini, and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/seo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: gradientFill }}
              id="cta-seo"
            >
              See My SEO Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color: "var(--accent)",
                border: "2px solid var(--accent)",
                background: "transparent",
              }}
              id="cta-contact"
            >
              <Mail size={16} /> Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-2 py-3 text-sm"
              id="cta-about"
            >
              <span className="link-hover">About me</span>
            </Link>
          </motion.div>
        </div>

        {/* Key Numbers — fills the hero's right column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
          className="glass-card p-6 sm:p-8"
          id="stats-card"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={15} style={{ color: "var(--accent)" }} />
            <span className="eyebrow">Key Numbers</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.95 + i * 0.09, duration: 0.4 }}
                className="lg:flex lg:items-baseline lg:gap-3"
              >
                <div
                  className="text-3xl sm:text-4xl font-extrabold leading-none lg:min-w-[5.5rem]"
                  style={{ color: "var(--foreground)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-medium leading-snug mt-1 lg:mt-0"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────── Selected SEO Work ─────────── */}
      <section
        className="mb-16 sm:mb-24"
        id="seo-work"
        aria-labelledby="seo-work-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Search size={15} style={{ color: "var(--accent)" }} />
            <span className="eyebrow">Selected SEO Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2
              id="seo-work-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-balance"
              style={{ color: "var(--foreground)" }}
            >
              From site migration to AI search
            </h2>
            <p
              className="text-sm leading-relaxed md:max-w-md"
              style={{ color: "var(--foreground-secondary)" }}
            >
              {seoCaseStudies.length} projects at {employer}: the rebrand
              migration, technical SEO, keyword research, content, backlinks
              and AI search.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {seoCaseStudies.map((study, i) => {
            const metric = study.metrics[0];
            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="h-full"
              >
                <Link
                  href={`/seo#${study.slug}`}
                  className="glass-card group flex h-full flex-col p-5"
                  id={`home-seo-${study.slug}`}
                >
                  <span className="eyebrow mb-3">{study.category}</span>
                  <h3
                    className="text-base font-bold leading-snug mb-2 text-balance"
                    style={{ color: "var(--foreground)" }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-4 mb-4"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {study.summary}
                  </p>

                  <div className="mt-auto">
                    <div
                      className="pt-3 mb-3 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {metric ? (
                        <>
                          <div
                            className="text-2xl font-extrabold leading-none"
                            style={{ color: "var(--foreground)" }}
                          >
                            {metric.value}
                          </div>
                          <div
                            className="text-xs leading-snug mt-1"
                            style={{ color: "var(--foreground-muted)" }}
                          >
                            {metric.label}
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {study.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      Read case study
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* 8th cell: completes the second row and points to the full page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.45,
              delay: (seoCaseStudies.length % 4) * 0.06,
            }}
            className="h-full"
          >
            <Link
              href="/seo"
              className="group flex h-full flex-col justify-between gap-6 rounded-[14px] p-5 text-white shadow-sm hover:-translate-y-[3px] hover:shadow-lg"
              style={{
                background: gradientFill,
                transition:
                  "translate 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease",
              }}
              id="home-seo-all"
            >
              <LayoutGrid size={18} aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold leading-snug mb-2">
                  All SEO case studies
                </h3>
                <p className="text-sm leading-relaxed">
                  The context and the full list of what I did on each
                  project, on one page.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                View all
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────── Beyond SEO ─────────── */}
      <section
        className="mb-16 sm:mb-24"
        id="beyond-seo"
        aria-labelledby="beyond-seo-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Layers size={15} style={{ color: "var(--accent)" }} />
            <span className="eyebrow">Beyond SEO</span>
          </div>
          <h2
            id="beyond-seo-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Product marketing and influencer campaigns
          </h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Link
              href={INFLUENCER_PATH}
              className="panel-card group block h-full p-5 sm:p-6"
              id="home-influencer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <Megaphone
                      size={16}
                      className="mt-1.5 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    <h3
                      className="text-lg sm:text-xl font-extrabold tracking-tight"
                      style={{ color: "var(--foreground)" }}
                    >
                      Influencer Marketing at Scale
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    A {influencerBudget} influencer budget, handled from finding
                    creators to negotiating deals and producing videos, with
                    100+ creators across LinkedIn, Instagram, YouTube and X. I
                    built the tooling to run it: Apify scraping, automated
                    filtering and outreach, and a Replit tracking app.
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Read the case study
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>

                <div
                  className="flex sm:flex-col gap-5 sm:gap-3 sm:pl-6 sm:border-l sm:min-w-[120px]"
                  style={{ borderColor: "var(--border)" }}
                >
                  {influencerStats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="text-xl sm:text-2xl font-extrabold leading-tight"
                        style={{ color: "var(--foreground)" }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card h-full p-5 sm:p-6" id="other-wins-card">
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={15} style={{ color: "var(--accent)" }} />
                <h3
                  className="text-sm font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Other wins
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {moreWins.map((win) => (
                  <li
                    key={win.label}
                    className="flex items-baseline gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <span
                      className="text-lg font-extrabold leading-none min-w-[4.5rem] shrink-0"
                      style={{ color: "var(--foreground)" }}
                    >
                      {win.value}
                    </span>
                    <span
                      className="text-sm leading-snug min-w-0"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {win.href ? (
                        <Link href={win.href} className="link-hover">
                          {win.label}
                        </Link>
                      ) : (
                        win.label
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── Skills Marquee ─────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 sm:mb-24"
        id="skills-card"
        aria-labelledby="skills-heading"
      >
        <div className="flex items-center gap-2 mb-5">
          <Zap size={15} style={{ color: "var(--accent)" }} />
          <h2 id="skills-heading" className="eyebrow">
            Skills &amp; Tools
          </h2>
        </div>
        <div className="marquee-container py-2">
          <div
            className="marquee-track"
            style={{ animationDuration: marqueeDuration }}
          >
            {skillMarquee.map((skill) => (
              <span key={skill} className="tag-pill whitespace-nowrap">
                {skill}
              </span>
            ))}
            {/* Second copy makes the loop seamless; hide it from screen readers */}
            {skillMarquee.map((skill) => (
              <span
                key={`${skill}-loop`}
                className="tag-pill whitespace-nowrap"
                aria-hidden="true"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <hr className="web-divider" />

      {/* ─────────── Featured Post + Quick Links ─────────── */}
      <section
        className="grid md:grid-cols-3 gap-4 mb-16"
        aria-labelledby="more-heading"
      >
        <h2 id="more-heading" className="sr-only">
          Writing and more
        </h2>
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="glass-card group block h-full p-6"
              id="featured-blog-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={15} style={{ color: "var(--accent)" }} />
                <span className="eyebrow">Featured Post</span>
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {featuredPost.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3 line-clamp-3"
                style={{ color: "var(--foreground-secondary)" }}
              >
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <span
                  className="text-xs"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {featuredPost.readingTime}
                </span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold link-hover"
                  style={{ color: "var(--accent)" }}
                >
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {quickLinks.map((q, i) => {
          const Icon = q.icon;
          return (
            <motion.div
              key={q.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Link href={q.href} className="glass-card group block h-full p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={15} style={{ color: "var(--accent)" }} />
                  <span className="eyebrow">{q.label}</span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {q.body}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold link-hover"
                  style={{ color: "var(--accent)" }}
                >
                  {q.cta} <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </section>

      {/* ─────────── Contact CTA ─────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6 sm:p-10"
        id="contact-cta-card"
        aria-labelledby="contact-cta-heading"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="min-w-0">
            <h2
              id="contact-cta-heading"
              className="text-2xl font-extrabold mb-2 tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Let&apos;s work together
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Hiring for SEO, planning a site migration, or want your brand
              cited in AI answers? I&apos;d love to hear about it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg flex-shrink-0"
            style={{ background: gradientFill }}
            id="cta-contact-bottom"
          >
            <Mail size={16} /> Say Hello
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
