"use client";

import { useState } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { site } from "../data/site";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 5000);
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="eyebrow">Contact</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Let&apos;s{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base max-w-lg"
            style={{ color: "var(--foreground-secondary)" }}
          >
            Hiring for an SEO role, planning a site migration, or want your
            brand to show up in AI search? I&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle
                    size={48}
                    style={{ color: "var(--accent)" }}
                    className="mb-4"
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Message sent
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "var(--background-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "var(--background-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "var(--background-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                      placeholder="Tell me about the role or project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                    }}
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email Card */}
            <a
              href={`mailto:${site.email}`}
              className="glass-card p-5 flex items-center gap-4 group"
              id="contact-email-link"
            >
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ background: "var(--accent-light)" }}
              >
                <Mail size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Email
                </p>
                <p
                  className="text-sm font-medium wrap-anywhere"
                  style={{ color: "var(--foreground)" }}
                >
                  {site.email}
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 group"
              id="contact-linkedin"
            >
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ background: "var(--accent-light)", color: "var(--accent)" }}
              >
                <LinkedinIcon size={20} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  LinkedIn
                </p>
                <p
                  className="text-sm font-medium wrap-anywhere"
                  style={{ color: "var(--foreground)" }}
                >
                  {site.linkedinHandle}
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 group"
              id="contact-github"
            >
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ background: "var(--accent-light)" }}
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent)" }} aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  GitHub
                </p>
                <p
                  className="text-sm font-medium wrap-anywhere"
                  style={{ color: "var(--foreground)" }}
                >
                  {site.githubHandle}
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ background: "var(--accent-light)" }}
              >
                <MapPin size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Location
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  {site.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
