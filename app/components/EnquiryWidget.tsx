"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { MessageSquare, X } from "lucide-react";
import {
  aiSearchPostPaths,
  enquiryTopics,
  type EnquiryTrigger,
} from "../data/enquiry";
import { rememberVisit } from "./enquiryVisit";

// The form loads only when it's likely to be needed, so pages don't pay for it.
const loadPanel = () => import("./EnquiryPanel");
const preloadPanel = () => void loadPanel().catch(() => {});
const EnquiryPanel = dynamic(loadPanel, {
  ssr: false,
  // Stands in for the button while the form's code arrives on a slow network.
  loading: () => (
    <div
      role="status"
      className="fixed z-30 bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center h-12 px-4 rounded-full text-sm font-semibold shadow-lg bg-accent text-background print:hidden"
    >
      Opening...
    </div>
  ),
});

const DAY = 24 * 60 * 60 * 1000;
const DISMISSED_KEY = "enquiry:dismissedAt";
const SENT_KEY = "enquiry:sentAt";
const SESSION_KEY = "enquiry:shown";
const OFF_KEY = "enquiry:off";
const QUIET_AFTER_DISMISS = 30 * DAY;

// What shows by itself is a small invitation card, never the full form. It
// appears at most once per visit: after 35 seconds of visible time on a page,
// or at 55% scroll depth after the first 10 seconds. It shows only where it
// fits beside the page's content, and steps aside while it would cover text
// or the footer; otherwise only the button shows. Phones and tablets never
// get it, in line with Google's guidance on intrusive dialogs. After "Not
// now" it stays away for 30 days, and after a sent message for good.
// Add ?nopopup to a URL to switch it off for the visit (tests, screenshots).
const TEASER_AFTER_MS = 35_000;
const SCROLL_TRIGGER_MIN_MS = 10_000;
const SCROLL_TRIGGER_DEPTH = 0.55;
const PRELOAD_AFTER_MS = 8_000;
const TEASER_MIN_WIDTH = 1024;
const TEASER_WIDTH = 300;
const TEASER_HEIGHT = 150;
const EDGE = 24;

// The contact page already has the full form.
const HIDDEN_ON = ["/contact"];

function teaserFor(pathname: string) {
  if (aiSearchPostPaths.includes(pathname)) {
    return { headline: "Want to know if AI answers cite your brand?", topic: "GEO / AI search" };
  }
  if (pathname === "/seo") {
    return { headline: "Planning an SEO audit or a site migration?", topic: "SEO audit" };
  }
  if (pathname === "/about" || pathname === "/resume") {
    return { headline: "Hiring for an SEO or GEO role?", topic: "Hiring for a role" };
  }
  return { headline: "Got an SEO or AI search project?", topic: "" };
}

// True when the card can sit in the bottom-right corner without covering
// anything in <main> at the current scroll position, or the footer.
function teaserFits() {
  if (window.innerWidth < TEASER_MIN_WIDTH) return false;
  const footer = document.querySelector("footer");
  if (footer && footer.getBoundingClientRect().top < window.innerHeight) return false;
  const main = document.querySelector("main");
  if (!main) return false;
  const left = window.innerWidth - EDGE - TEASER_WIDTH - EDGE;
  const top = window.innerHeight - EDGE - TEASER_HEIGHT;
  const content = main.querySelectorAll<HTMLElement>(
    "h1,h2,h3,h4,p,li,td,th,blockquote,pre,img,video,figure,input,textarea,select,button,a,.glass-card"
  );
  for (const el of content) {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height || r.bottom <= top || r.top >= window.innerHeight) continue;
    if (r.right > left && !el.closest("[aria-hidden='true']")) return false;
  }
  return true;
}

function teaserAllowed() {
  if (window.innerWidth < TEASER_MIN_WIDTH) return false;
  try {
    if (sessionStorage.getItem(SESSION_KEY) || sessionStorage.getItem(OFF_KEY)) return false;
    if (localStorage.getItem(SENT_KEY)) return false;
    const dismissedAt = Number(localStorage.getItem(DISMISSED_KEY)) || 0;
    if (Date.now() - dismissedAt < QUIET_AFTER_DISMISS) return false;
  } catch {
    // Without storage it can't remember a "Not now", so it doesn't ask.
    return false;
  }
  return true;
}

function remember(key: string, storage: "local" | "session") {
  try {
    (storage === "local" ? localStorage : sessionStorage).setItem(key, String(Date.now()));
  } catch {}
}

// If the form's code fails to load (offline, a deploy in between), offer the
// contact page instead of letting the error take down the whole page.
class PanelBoundary extends Component<{ children: ReactNode; onClose: () => void }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div
        role="alert"
        className="fixed z-30 bottom-6 right-6 left-6 sm:left-auto sm:w-[300px] rounded-2xl border border-border bg-background text-foreground shadow-xl p-4 text-sm print:hidden"
      >
        The form didn&apos;t load.{" "}
        <Link href="/contact" className="font-semibold text-accent underline underline-offset-2" onClick={this.props.onClose}>
          Use the contact page
        </Link>{" "}
        instead.
      </div>
    );
  }
}

type Mode = "closed" | "teaser" | "panel";

export default function EnquiryWidget() {
  const pathname = usePathname();
  const hidden = HIDDEN_ON.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
  const [mode, setMode] = useState<Mode>("closed");
  // The page the invitation or form was opened on: navigating elsewhere
  // (for example to /contact and back) closes it instead of reviving it.
  const [openedOn, setOpenedOn] = useState("");
  // False while the invitation would cover content or the footer.
  const [teaserVisible, setTeaserVisible] = useState(true);
  const [panelTopic, setPanelTopic] = useState("");
  const [trigger, setTrigger] = useState<EnquiryTrigger>("launcher");
  // Move focus into the form only when the visitor asked for it.
  const [focusOnOpen, setFocusOnOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const teaser = teaserFor(pathname);
  const current: Mode = openedOn === pathname ? mode : "closed";

  const openPanel = useCallback(
    (topic: string, via: EnquiryTrigger) => {
      remember(SESSION_KEY, "session");
      setPanelTopic(topic);
      setTrigger(via);
      setFocusOnOpen(true);
      setOpenedOn(pathname);
      setMode("panel");
    },
    [pathname]
  );

  useEffect(() => {
    rememberVisit();
    try {
      if (new URLSearchParams(window.location.search).has("nopopup")) {
        sessionStorage.setItem(OFF_KEY, "1");
      }
    } catch {}
  }, []);

  // Any button on the site can open the form with a topic preselected:
  // window.dispatchEvent(new CustomEvent("open-enquiry", { detail: { topic } }))
  useEffect(() => {
    const onOpen = (event: Event) => {
      const wanted = (event as CustomEvent<{ topic?: string }>).detail?.topic;
      openPanel(enquiryTopics.find((t) => t === wanted) ?? "", "cta");
    };
    window.addEventListener("open-enquiry", onOpen);
    return () => window.removeEventListener("open-enquiry", onOpen);
  }, [openPanel]);

  // Each page gets its own timer, counting only time the tab is visible.
  useEffect(() => {
    if (hidden) return;
    let visibleMs = 0;

    const tryShow = () => {
      // Never swap the button out from under someone using it.
      if (document.activeElement === launcherRef.current) return;
      if (!teaserAllowed() || !teaserFits()) return;
      remember(SESSION_KEY, "session");
      setTeaserVisible(true);
      setOpenedOn(pathname);
      setMode("teaser");
    };

    const tick = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      visibleMs += 1000;
      if (visibleMs === PRELOAD_AFTER_MS) preloadPanel();
      if (visibleMs >= TEASER_AFTER_MS) tryShow();
    }, 1000);
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0 || visibleMs < SCROLL_TRIGGER_MIN_MS) return;
      if (window.scrollY / scrollable >= SCROLL_TRIGGER_DEPTH) tryShow();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(tick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hidden, pathname]);

  // While the invitation is up, keep it from covering anything.
  useEffect(() => {
    if (current !== "teaser") return;
    let frame = 0;
    const check = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (document.activeElement === launcherRef.current) return;
        setTeaserVisible(teaserFits());
      });
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [current]);

  const dismiss = useCallback(() => {
    remember(DISMISSED_KEY, "local");
    setMode("closed");
    // Give focus back to the button.
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }, []);

  const markSent = useCallback(() => remember(SENT_KEY, "local"), []);

  if (hidden) return null;

  if (current === "panel") {
    return (
      <PanelBoundary onClose={dismiss}>
        <EnquiryPanel
          initialTopic={panelTopic}
          trigger={trigger}
          focusOnOpen={focusOnOpen}
          onClose={dismiss}
          onSent={markSent}
        />
      </PanelBoundary>
    );
  }

  if (current === "teaser" && teaserVisible) {
    return (
      <aside
        aria-label="Enquiry invitation"
        className="fixed z-30 bottom-6 right-6 w-[300px] rounded-2xl border border-border bg-background text-foreground shadow-xl p-4 print:hidden"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss the invitation"
          className="absolute top-2 right-2 p-1.5 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-background-secondary focus-visible:outline-2 focus-visible:outline-accent"
        >
          <X size={16} aria-hidden="true" />
        </button>
        <p className="pr-7 text-sm font-bold leading-snug">{teaser.headline}</p>
        <p className="mt-1 text-xs text-foreground-secondary">
          Tell me what you&apos;re working on. It goes straight to my inbox.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => openPanel(teaser.topic, "teaser")}
            className="inline-flex items-center h-9 px-3.5 rounded-lg text-xs font-semibold bg-accent text-background hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Tell me about it
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex items-center h-9 px-3 rounded-lg text-xs font-medium text-foreground-secondary hover:text-foreground hover:bg-background-secondary focus-visible:outline-2 focus-visible:outline-accent"
          >
            Not now
          </button>
        </div>
      </aside>
    );
  }

  return (
    <button
      ref={launcherRef}
      type="button"
      onClick={() => openPanel("", "launcher")}
      onPointerEnter={preloadPanel}
      onPointerDown={preloadPanel}
      onFocus={preloadPanel}
      aria-haspopup="dialog"
      aria-label="Let's talk: open the enquiry form"
      className="fixed z-30 bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 h-12 px-4 rounded-full text-sm font-semibold shadow-lg transition-[translate,background-color]! duration-200! hover:-translate-y-0.5 print:hidden bg-accent text-background hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <MessageSquare size={18} aria-hidden="true" />
      <span>Let&apos;s talk</span>
    </button>
  );
}
