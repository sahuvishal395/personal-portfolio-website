"use client";

import PageTransition from "../components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Heart, Download, ArrowRight } from "lucide-react";
import { bio, timeline, skills } from "../data/about";

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

export default function AboutPage() {
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
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <Briefcase size={14} style={{ color: "var(--accent)" }} />
              {bio.tagline}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <MapPin size={14} style={{ color: "var(--accent)" }} />
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
            {bio.summary.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="/vishal_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              }}
              id="resume-download"
            >
              <Download size={16} /> Download Resume
            </a>
            <Link
              href="/influencer-marketing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground-secondary)",
              }}
            >
              Influencer Marketing Case Study <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Heart size={16} style={{ color: "var(--accent)" }} />
            <h2
              className="text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              My Philosophy
            </h2>
          </div>
          <div
            className="glass-card p-6 sm:p-8"
          >
            {bio.philosophy.split("\n").map((line, i) => {
              if (line.startsWith("•")) {
                return (
                  <p
                    key={i}
                    className="text-sm leading-relaxed ml-2 mb-2"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    • {parseInlineBold(line.slice(2))}
                  </p>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.03, duration: 0.3 }}
                className="tag-pill"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2
            className="text-xl font-bold mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Career Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{ background: "var(--border)" }}
            />

            <div className="space-y-8">
              {timeline.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
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
                    <span
                      className="text-xs font-mono font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      {entry.year}
                    </span>
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
                    <div className="flex flex-wrap gap-1.5">
                      {entry.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tag-pill"
                          style={{ fontSize: "0.65rem" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
