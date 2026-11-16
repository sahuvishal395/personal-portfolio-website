"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, Send, X } from "lucide-react";
import { site } from "../data/site";
import { enquiryTopics } from "../data/enquiry";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full px-3.5 py-2.5 rounded-xl text-sm bg-background-secondary border border-border text-foreground placeholder:text-foreground-muted outline-none transition-colors focus:border-accent";

const labelClass = "block text-xs font-semibold mb-1.5 text-foreground";

export default function EnquiryPanel({
  focusOnOpen,
  onClose,
  onSent,
}: {
  focusOnOpen: boolean;
  onClose: () => void;
  onSent: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const introId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  // When the form appeared; sent with the message so the API can drop bots
  // that post instantly.
  const openedAt = useRef(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    openedAt.current = Date.now();
    if (focusOnOpen) nameRef.current?.focus();
  }, [focusOnOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    setAnnouncement("Sending your message");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          company,
          source: "popup",
          page: window.location.pathname,
          elapsedMs: Date.now() - openedAt.current,
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          response.status === 400 || response.status === 429
            ? data.error
            : ""
        );
      }
      setStatus("sent");
      setAnnouncement("Message sent");
      onSent();
    } catch (err) {
      const reason =
        err instanceof Error && err.message
          ? err.message
          : "That didn't send. Please try again in a minute.";
      setStatus("error");
      setError(reason);
      setAnnouncement(reason);
    }
  };

  const firstName = name.trim().split(/\s+/)[0];

  return (
    <motion.section
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-describedby={introId}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed z-30 inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[380px] max-h-[85dvh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-background text-foreground shadow-2xl print:hidden"
    >
      <div className="relative p-5 sm:p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close the enquiry form"
          className="absolute top-3 right-3 p-2 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-background-secondary focus-visible:outline-2 focus-visible:outline-accent"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <p className="sr-only" role="status" aria-live="polite">
          {announcement}
        </p>

        {status === "sent" ? (
          <div className="py-6 text-center">
            <CheckCircle size={40} className="mx-auto mb-3 text-accent" aria-hidden="true" />
            <h2
              id={titleId}
              ref={doneRef}
              tabIndex={-1}
              className="text-lg font-bold mb-2 outline-none"
            >
              Thanks{firstName ? `, ${firstName}` : ""}!
            </h2>
            <p id={introId} className="text-sm text-foreground-secondary mb-5">
              Your message is in my inbox. I&apos;ll reply to {email.trim()}.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm font-semibold border border-border hover:bg-background-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground-secondary">
              <span className="inline-block w-7 h-0.5 rounded-sm" style={{ background: "var(--accent-strong)" }} aria-hidden="true" />
              Work with me
            </p>
            <h2 id={titleId} className="mt-2 pr-8 text-lg font-bold leading-snug">
              Got an SEO or AI search project?
            </h2>
            <p id={introId} className="mt-1.5 text-sm text-foreground-secondary">
              Tell me what you&apos;re working on. Your message goes straight to
              my inbox, and I reply by email.
            </p>

            <form onSubmit={submit} className="mt-4 space-y-3.5">
              <div>
                <label htmlFor="enquiry-name" className={labelClass}>
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="enquiry-name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="enquiry-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </div>

              <fieldset>
                <legend className={labelClass}>
                  What do you need help with?{" "}
                  <span className="font-normal text-foreground-secondary">(optional)</span>
                </legend>
                <div className="flex flex-wrap gap-1.5">
                  {enquiryTopics.map((option) => {
                    const selected = topic === option;
                    return (
                      <label
                        key={option}
                        className={`cursor-pointer select-none rounded-full px-3 py-1.5 text-xs font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                          selected
                            ? "bg-accent text-background"
                            : "bg-accent-light text-accent hover:bg-accent/15"
                        }`}
                      >
                        <input
                          type="radio"
                          name="enquiry-topic"
                          value={option}
                          checked={selected}
                          onChange={() => setTopic(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="enquiry-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="enquiry-message"
                  required
                  rows={4}
                  maxLength={5000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} resize-none`}
                  placeholder="What are you working on, and what would a good outcome look like?"
                />
              </div>

              {/* Honeypot: hidden from people, often filled in by bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden">
                <label htmlFor="enquiry-company">Company</label>
                <input
                  id="enquiry-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-accent">
                  {error} You can also email me at{" "}
                  <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                    {site.email}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" /> Send enquiry
                  </>
                )}
              </button>

              <p className="text-xs text-foreground-secondary text-center">
                I only use your email to reply to you.
              </p>
            </form>
          </>
        )}
      </div>
    </motion.section>
  );
}
