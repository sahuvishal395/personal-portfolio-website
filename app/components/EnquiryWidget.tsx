"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MessageSquare } from "lucide-react";

// The form loads only when it's about to open, so pages don't pay for it.
const loadPanel = () => import("./EnquiryPanel");
const EnquiryPanel = dynamic(loadPanel, { ssr: false });

const DAY = 24 * 60 * 60 * 1000;

// After a visitor closes the panel or sends a message, don't open it on its
// own again for a while. The "Let's talk" button always stays available.
const DISMISSED_KEY = "enquiry:dismissedAt";
const SENT_KEY = "enquiry:sentAt";
const SESSION_KEY = "enquiry:shown";
const QUIET_AFTER_DISMISS = 7 * DAY;
const QUIET_AFTER_SEND = 60 * DAY;

// It opens on its own at most once per visit: after 35 seconds on a page, or
// once the reader is 55% of the way down (but not in the first 10 seconds).
// Only on wide screens, where it can't cover the main content: on phones
// Google treats pop-ups over content as intrusive, so there it waits for a tap.
const AUTO_OPEN_AFTER_MS = 35_000;
const SCROLL_TRIGGER_MIN_MS = 10_000;
const SCROLL_TRIGGER_DEPTH = 0.55;
const AUTO_OPEN_MIN_WIDTH = 1024;

// The contact page already has the full form.
const HIDDEN_ON = ["/contact"];

function readTime(key: string) {
  try {
    return Number(localStorage.getItem(key)) || 0;
  } catch {
    return 0;
  }
}

function writeTime(key: string) {
  try {
    localStorage.setItem(key, String(Date.now()));
  } catch {}
}

function markShownThisVisit() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {}
}

function autoOpenAllowed() {
  if (window.innerWidth < AUTO_OPEN_MIN_WIDTH) return false;
  const now = Date.now();
  if (now - readTime(DISMISSED_KEY) < QUIET_AFTER_DISMISS) return false;
  if (now - readTime(SENT_KEY) < QUIET_AFTER_SEND) return false;
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return false;
  } catch {}
  return true;
}

export default function EnquiryWidget() {
  const pathname = usePathname();
  const hidden = HIDDEN_ON.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
  const [open, setOpen] = useState(false);
  // Move focus into the form only when the visitor asked for it.
  const [focusOnOpen, setFocusOnOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Each page gets its own timer; the session flag keeps it to one auto-open
  // per visit, and opening the form by hand counts as that one.
  useEffect(() => {
    if (hidden || !autoOpenAllowed()) return;
    const start = Date.now();

    const autoOpen = () => {
      if (!autoOpenAllowed()) return;
      markShownThisVisit();
      setFocusOnOpen(false);
      setOpen(true);
    };

    const warm = window.setTimeout(() => void loadPanel(), 5_000);
    const timer = window.setTimeout(autoOpen, AUTO_OPEN_AFTER_MS);
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0 || Date.now() - start < SCROLL_TRIGGER_MIN_MS) return;
      if (window.scrollY / scrollable >= SCROLL_TRIGGER_DEPTH) autoOpen();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(warm);
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hidden, pathname]);

  const close = useCallback(() => {
    writeTime(DISMISSED_KEY);
    setOpen(false);
    // Give focus back to the button that opened the form.
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }, []);

  const markSent = useCallback(() => writeTime(SENT_KEY), []);

  if (hidden) return null;

  if (open) {
    return <EnquiryPanel focusOnOpen={focusOnOpen} onClose={close} onSent={markSent} />;
  }

  return (
    <button
      ref={launcherRef}
      type="button"
      onClick={() => {
        markShownThisVisit();
        setFocusOnOpen(true);
        setOpen(true);
      }}
      onPointerEnter={() => void loadPanel()}
      onFocus={() => void loadPanel()}
      aria-haspopup="dialog"
      aria-label="Let's talk: open the enquiry form"
      className="fixed z-30 bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 h-12 px-4 rounded-full text-sm font-semibold shadow-lg transition-transform duration-200 hover:-translate-y-0.5 print:hidden bg-accent text-background hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <MessageSquare size={18} aria-hidden="true" />
      <span className="hidden sm:inline">Let&apos;s talk</span>
    </button>
  );
}
