"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { site } from "../data/site";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/seo", label: "SEO" },
  { href: "/influencer-marketing", label: "Influencer" },
  { href: "/blogs", label: "Blogs" },
  { href: "/reading-list", label: "Reading List" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: site.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.github, label: "GitHub", icon: GithubIcon },
];

// A section stays active on its child pages (e.g. /blogs/some-post).
function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu after navigation. Adjusting state while rendering
  // (rather than in an effect) avoids a second, cascading render.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo — the full name is hidden at lg only, where all eight
                links share the row with the icons. */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              id="nav-logo"
            >
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                VKS
              </span>
              <span className="hidden sm:inline lg:hidden xl:inline text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors whitespace-nowrap">
                {site.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="relative px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap"
                    style={{
                      color: isActive
                        ? "var(--accent)"
                        : "var(--foreground-secondary)",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social + Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex p-2 rounded-lg transition-all duration-300 hover:scale-110 text-foreground-secondary hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}

              <span
                className="hidden lg:block w-px h-5 mx-1"
                style={{ background: "var(--border)" }}
              />

              <button
                onClick={toggleTheme}
                id="theme-toggle"
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{
                  color: "var(--foreground-secondary)",
                  background: "var(--background-secondary)",
                }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{
                  color: "var(--foreground-secondary)",
                  background: "var(--background-secondary)",
                }}
                id="mobile-menu-toggle"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 max-w-[85vw] overflow-y-auto p-6 pt-20"
              style={{
                background: "var(--background)",
                borderLeft: "1px solid var(--border)",
              }}
              id="mobile-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="Mobile" className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = isActivePath(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className="px-4 py-3 rounded-lg text-base font-medium transition-all"
                      style={{
                        color: isActive
                          ? "var(--accent)"
                          : "var(--foreground-secondary)",
                        background: isActive
                          ? "var(--accent-light)"
                          : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div
                className="mt-6 pt-6 border-t flex flex-wrap items-center gap-2"
                style={{ borderColor: "var(--border)" }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-foreground-secondary hover:text-accent"
                  >
                    <social.icon size={18} />
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
