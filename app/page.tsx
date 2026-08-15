"use client";

import TypewriterText from "./components/TypewriterText";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Mail,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { getFeaturedPost } from "./data/blogs";
import { stats } from "./data/about";

const skillMarquee = [
  "Product Positioning",
  "Go-to-Market",
  "Competitive Intel",
  "Sales Enablement",
  "Content Strategy",
  "Customer Research",
  "Market Analysis",
  "Launch Planning",
  "Brand Strategy",
  "Storytelling",
  "Influencer Marketing",
  "Creator Campaigns",
  "AI & MarTech",
  "Data-Driven Marketing",
  "N8N Automation",
  "Claude AI",
  "Replit",
  "Apify",
  "AI Content Writing",
  "Prompt Engineering",
];

const quickLinks = [
  {
    href: "/about",
    icon: Briefcase,
    label: "About",
    body: "3+ years across GTM strategy, influencer marketing, and AI automation.",
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

export default function Home() {
  const featuredPost = getFeaturedPost();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* ─────────── Hero ─────────── */}
      <section className="mb-16 sm:mb-24">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-xl sm:text-3xl font-semibold mb-6"
          style={{ color: "var(--foreground-secondary)" }}
        >
          <TypewriterText
            strings={[
              "Growth & Product Marketing Lead",
              "GTM Strategist",
              "AI-Powered Marketer",
              "Marketing Thinker",
            ]}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
          style={{ color: "var(--foreground-secondary)" }}
        >
          I craft compelling narratives that bridge the gap between products and
          people. Specializing in go-to-market strategy, positioning, and
          building marketing engines that drive outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-1), var(--gradient-3))",
            }}
            id="cta-about"
          >
            About Me <ArrowRight size={16} />
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
        </motion.div>
      </section>

      {/* ─────────── Stat Strip ─────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="mb-16 sm:mb-24"
        id="stats-card"
      >
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={15} style={{ color: "var(--accent)" }} />
          <span className="eyebrow">Key Numbers</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
              className="glass-card p-5"
            >
              <div
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-medium leading-snug"
                style={{ color: "var(--foreground-muted)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─────────── Featured Work — Influencer Case Study ─────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 sm:mb-24"
      >
        <div className="flex items-center gap-2 mb-5">
          <Target size={15} style={{ color: "var(--accent)" }} />
          <span className="eyebrow">Featured Work</span>
        </div>

        <Link href="/influencer-marketing" className="block group">
          <div className="panel-card p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <h2
                  className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  Influencer Marketing at Scale
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed mb-5"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  A $1.3M creator budget and 100+ influencers onboarded across
                  LinkedIn, Instagram, YouTube, and X — run on tooling I built:
                  Apify profile scraping, automated filtering and outreach, and
                  a Replit app tracking budget and live performance.
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

              <div className="flex lg:flex-col gap-4 lg:gap-3 lg:pl-8 lg:border-l lg:min-w-[150px]"
                style={{ borderColor: "var(--border)" }}
              >
                {[
                  { v: "$1.3M", l: "Budget" },
                  { v: "100+", l: "Creators" },
                  { v: "4", l: "Platforms" },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      className="text-xl sm:text-2xl font-extrabold"
                      style={{ color: "var(--accent)" }}
                    >
                      {s.v}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </motion.section>

      {/* ─────────── Skills Marquee ─────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 sm:mb-24"
        id="skills-card"
      >
        <div className="flex items-center gap-2 mb-5">
          <Zap size={15} style={{ color: "var(--accent)" }} />
          <span className="eyebrow">Skills &amp; Expertise</span>
        </div>
        <div className="marquee-container py-2">
          <div className="marquee-track">
            {[...skillMarquee, ...skillMarquee].map((skill, i) => (
              <span key={i} className="tag-pill whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <hr className="web-divider" />

      {/* ─────────── Featured Post + Quick Links ─────────── */}
      <section className="grid md:grid-cols-3 gap-4 mb-16">
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 md:col-span-1"
            id="featured-blog-card"
          >
            <Link href={`/blogs/${featuredPost.slug}`} className="block group">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={15} style={{ color: "var(--accent)" }} />
                <span className="eyebrow">Featured Post</span>
              </div>
              <h3
                className="text-lg font-bold mb-2 transition-colors duration-200"
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
              className="glass-card p-6"
            >
              <Link href={q.href} className="block group">
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
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3
              className="text-2xl font-extrabold mb-2 tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Let&apos;s work together
            </h3>
            <p
              className="text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-1), var(--gradient-3))",
            }}
            id="cta-contact-bottom"
          >
            <Mail size={16} /> Say Hello
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
