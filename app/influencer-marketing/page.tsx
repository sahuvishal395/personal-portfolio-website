"use client";

import PageTransition from "../components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calendar,
  Download,
  Layers,
  Search,
  Send,
  Share2,
  FileText,
  UserPlus,
  Video,
} from "lucide-react";

const metrics = [
  { value: "$1.3M", label: "Creator budget managed" },
  { value: "3", label: "Creator tiers: nano, micro, macro" },
  { value: "4", label: "Publishing platforms" },
  { value: "7", label: "Stages owned end-to-end" },
];

const process = [
  {
    icon: Search,
    title: "Sourcing & Research",
    body: "Scraped, researched, and shortlisted creators against campaign fit, audience quality, and category relevance — building the pipeline before any outreach began.",
  },
  {
    icon: Send,
    title: "Outreach",
    body: "Ran first-contact outreach across the shortlist, briefing creators on the campaign, the product, and the deliverables expected.",
  },
  {
    icon: FileText,
    title: "Commercial Negotiation",
    body: "Negotiated deliverables, usage rights, and commercials directly with creators and their representatives to land terms that worked on both sides.",
  },
  {
    icon: UserPlus,
    title: "Onboarding",
    body: "Onboarded influencers across nano, micro, and macro segments, taking each from agreed terms to a briefed, campaign-ready collaborator.",
  },
  {
    icon: Video,
    title: "Video Production",
    body: "Collaborated with creators to script and produce campaign videos, shaping the narrative so the product landed naturally in each creator's own voice.",
  },
  {
    icon: Share2,
    title: "Cross-Platform Publishing",
    body: "Published campaign content across Instagram, Facebook, X, and LinkedIn, coordinating rollout timing across every channel.",
  },
  {
    icon: BarChart3,
    title: "Measurement & Reporting",
    body: "Measured campaign effectiveness on reach, engagement, CTR, and follower growth, then reported actionable insights back to leadership.",
  },
];

const platforms = ["Instagram", "Facebook", "X", "LinkedIn"];

const segments = [
  {
    tier: "Nano",
    note: "Smallest audiences, highest engagement rates and trust density.",
  },
  {
    tier: "Micro",
    note: "Mid-tier reach with strong niche authority and consistent conversion.",
  },
  {
    tier: "Macro",
    note: "Broadest reach, used to drive top-of-funnel awareness at scale.",
  },
];

const kpis = ["Reach", "Engagement", "CTR", "Follower Growth"];

const capabilities = [
  "Influencer Marketing",
  "Creator Sourcing & Outreach",
  "Creator Negotiation & Onboarding",
  "Campaign Budget Management",
  "Video Content Production",
  "Campaign Planning",
  "Cross-Platform Publishing",
  "Performance Reporting",
];

export default function InfluencerMarketingPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <span
              className="h-px flex-1 max-w-[40px]"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              Case Study
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Influencer Marketing
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <Briefcase size={14} style={{ color: "var(--accent)" }} />
              TestMu AI (formerly LambdaTest)
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <Calendar size={14} style={{ color: "var(--accent)" }} />
              2026
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base leading-relaxed"
            style={{ color: "var(--foreground-secondary)" }}
          >
            I own influencer marketing end-to-end at TestMu AI, managing a{" "}
            <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
              $1.3M creator budget
            </strong>{" "}
            across nano, micro, and macro segments. That means every stage sits
            with me — finding the right creators, getting them on board on the
            right terms, making the content with them, shipping it across
            platforms, and reporting on what it actually returned.
          </motion.p>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((m) => (
            <div key={m.label} className="glass-card p-5">
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {m.value}
              </div>
              <div
                className="text-xs font-medium leading-snug"
                style={{ color: "var(--foreground-muted)" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Layers size={16} style={{ color: "var(--accent)" }} />
            <h2
              className="text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              How I Run a Campaign
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{ background: "var(--border)" }}
            />

            <div className="space-y-6">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div
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
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--foreground-secondary)" }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Creator Segments
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {segments.map((s) => (
              <div key={s.tier} className="glass-card p-5">
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {s.tier}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platforms + KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          <div className="glass-card p-6">
            <h2
              className="text-base font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Where Campaigns Ship
            </h2>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p} className="tag-pill">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h2
              className="text-base font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              What I Measure
            </h2>
            <div className="flex flex-wrap gap-2">
              {kpis.map((k) => (
                <span key={k} className="tag-pill">
                  {k}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Capabilities
          </h2>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <span key={c} className="tag-pill">
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="glass-card p-6 sm:p-8"
        >
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: "var(--foreground)" }}
          >
            Planning a creator campaign?
          </h2>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--foreground-secondary)" }}
          >
            Happy to talk through sourcing, negotiation, or how to structure a
            budget across creator tiers.
          </p>
          <div className="flex flex-wrap gap-3">
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
              href="/vishal_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground-secondary)",
              }}
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
