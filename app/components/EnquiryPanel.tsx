"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, Send, X } from "lucide-react";
import { site } from "../data/site";
import { enquiryTopics, type EnquiryTrigger } from "../data/enquiry";
import { currentVisit } from "./enquiryVisit";

type Status = "idle" | "sending" | "sent" | "error";

// What the visitor has typed survives closing and reopening the panel
// during the visit, so an accidental Escape or X loses nothing.
const draft = { name: "", email: "", topic: "", message: "" };

// 16px text on phones stops iOS Safari from zooming in on focus.
const fieldClass =
  "w-full px-3.5 py-2.5 rounded-xl text-base sm:text-sm bg-background-secondary border border-foreground-muted text-foreground placeholder:text-foreground-secondary outline-none transition-colors focus:border-accent";

const labelClass = "block text-xs font-semibold mb-1.5 text-foreground";

export default function EnquiryPanel({
  initialTopic,
  trigger,
  focusOnOpen,
  onClose,
  onSent,
}: {
  initialTopic: string;
  trigger: EnquiryTrigger;
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

  const [name, setName] = useState(draft.name);
  const [email, setEmail] = useState(draft.email);
  const [topic, setTopic] = useState(initialTopic || draft.topic);
  const [message, setMessage] = useState(draft.message);
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    Object.assign(draft, { name, email, topic, message });
  }, [name, email, topic, message]);

  useEffect(() => {
    openedAt.current = Date.now();
    if (focusOnOpen) nameRef.current?.focus();
  }, [focusOnOpen]);

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  // Escape closes the panel only when focus is inside it, so it doesn't
  // fight other components (the mobile menu) for the key.
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;
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
          hp: trap,
          source: "popup",
          trigger,
          page: window.location.pathname,
          ...currentVisit(),
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
      Object.assign(draft, { name: "", email: "", topic: "", message: "" });
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
  const sending = status === "sending";

  return (
    <motion.section
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-describedby={introId}
      onKeyDown={onKeyDown}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      // The height stops short of the fixed 64px navbar, so the close button
      // is never hidden under it on short screens or when zoomed in.
      className="fixed z-30 inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[380px] max-h-[calc(100dvh-5rem)] sm:max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-2xl border border-border bg-background text-foreground shadow-2xl print:hidden"
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
                  name="name"
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
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  // Same rule as the API, so the browser explains the problem
                  // before sending: a full address with a domain like .com.
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}"
                  title="A full email address, like name@company.com"
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
                  name="message"
                  required
                  rows={4}
                  maxLength={5000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} resize-none`}
                  placeholder="What are you working on, and what would a good outcome look like?"
                />
              </div>

              {/* Honeypot: never shown, so browser autofill leaves it alone,
                  but bots reading the HTML often fill it in. */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="enquiry-hp-confirm">Leave this field empty</label>
                <input
                  id="enquiry-hp-confirm"
                  name="hp-confirm"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={trap}
                  onChange={(e) => setTrap(e.target.value)}
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

              {/* aria-disabled rather than disabled: a disabled button drops
                  keyboard focus to the page while the message sends. */}
              <button
                type="submit"
                aria-disabled={sending}
                className={`w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-semibold bg-accent text-background hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  sending ? "opacity-70 cursor-wait" : ""
                }`}
              >
                {sending ? (
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
