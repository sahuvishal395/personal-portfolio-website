"use client";

import BentoCard from "./components/BentoCard";
import TypewriterText from "./components/TypewriterText";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Mail,
  Sparkles,
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
  "AI & MarTech",
  "Data-Driven Marketing",
];

export default function Home() {
  const featuredPost = getFeaturedPost();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Bento Grid Layout */}
      <div className="bento-grid">
        {/* ─── Hero Card (spans 3 cols, 2 rows) ─── */}
        <BentoCard span={3} rowSpan={2} delay={0} id="hero-card">
          <div className="flex flex-col justify-between h-full min-h-[280px]">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Hi, I&apos;m{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
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
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl sm:text-2xl font-medium mb-6"
                style={{ color: "var(--foreground-secondary)" }}
              >
                <TypewriterText
                  strings={[
                    "Product Marketing Lead",
                    "GTM Strategist",
                    "Storyteller",
                    "Marketing Thinker",
                  ]}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-base max-w-lg leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                I craft compelling narratives that bridge the gap between
                products and people. Specializing in go-to-market strategy,
                positioning, and building marketing engines that drive outcomes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                }}
                id="cta-about"
              >
                About Me <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  background: "transparent",
                }}
                id="cta-contact"
              >
                <Mail size={16} /> Get in Touch
              </Link>
            </motion.div>
          </div>
        </BentoCard>

        {/* ─── Stats Card ─── */}
        <BentoCard span={1} rowSpan={2} delay={0.15} id="stats-card">
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} style={{ color: "var(--accent)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--foreground-muted)" }}
              >
                Key Numbers
              </span>
            </div>
            <div className="space-y-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* ─── Skills Marquee Card (spans 2) ─── */}
        <BentoCard span={2} delay={0.25} id="skills-card">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={16} style={{ color: "var(--accent)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--foreground-muted)" }}
            >
              Skills & Expertise
            </span>
          </div>
          <div className="marquee-container py-2">
            <div className="marquee-track">
              {[...skillMarquee, ...skillMarquee].map((skill, i) => (
                <span
                  key={i}
                  className="tag-pill whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* ─── Featured Blog Card (spans 2) ─── */}
        {featuredPost && (
          <BentoCard span={2} delay={0.3} id="featured-blog-card">
            <Link href={`/blogs/${featuredPost.slug}`} className="block group">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} style={{ color: "var(--accent)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Featured Post
                </span>
              </div>
              <h3
                className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-200"
                style={{ color: "var(--foreground)" }}
              >
                {featuredPost.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3 line-clamp-2"
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
                  className="inline-flex items-center gap-1 text-xs font-medium link-hover"
                  style={{ color: "var(--accent)" }}
                >
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </BentoCard>
        )}

        {/* ─── About Preview Card ─── */}
        <BentoCard span={1} delay={0.35} id="about-preview-card">
          <Link href="/about" className="block group">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} style={{ color: "var(--accent)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--foreground-muted)" }}
              >
                About
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Product Marketing Lead with 6+ years of experience in GTM
              strategy, positioning, and storytelling.
            </p>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium link-hover"
              style={{ color: "var(--accent)" }}
            >
              Learn more <ArrowRight size={12} />
            </span>
          </Link>
        </BentoCard>

        {/* ─── Reading List Preview Card ─── */}
        <BentoCard span={1} delay={0.4} id="reading-preview-card">
          <Link href="/reading-list" className="block group">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={16} style={{ color: "var(--accent)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--foreground-muted)" }}
              >
                Reading List
              </span>
            </div>
            <div className="space-y-2 mb-4">
              {["Obviously Awesome", "Zero to One", "Made to Stick"].map(
                (book) => (
                  <div
                    key={book}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {book}
                  </div>
                )
              )}
            </div>
            <span
              className="inline-flex items-center gap-1 text-xs font-medium link-hover"
              style={{ color: "var(--accent)" }}
            >
              View all <ArrowRight size={12} />
            </span>
          </Link>
        </BentoCard>

        {/* ─── Contact CTA Card (spans 2) ─── */}
        <BentoCard span={2} delay={0.45} id="contact-cta-card">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h3
                className="text-lg font-bold mb-1"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              }}
              id="cta-contact-bottom"
            >
              <Mail size={16} /> Say Hello
            </Link>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
