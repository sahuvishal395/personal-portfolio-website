"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/influencer-marketing", label: "Influencer" },
  { href: "/blogs", label: "Blogs" },
  { href: "/reading-list", label: "Reading List" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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
              <span className="hidden sm:inline text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                Vishal Kumar Sahu
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative px-3 py-2 text-sm font-medium transition-colors rounded-lg"
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

            {/* Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/vishal-sahu-a56526238"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:text-accent"
                style={{
                  color: "var(--foreground-secondary)",
                }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href="https://github.com/sahuvishal395/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:text-accent"
                style={{
                  color: "var(--foreground-secondary)",
                }}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <span className="hidden md:block w-px h-5 mx-1" style={{ background: "var(--border)" }} />

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
                className="md:hidden p-2 rounded-lg"
                style={{
                  color: "var(--foreground-secondary)",
                  background: "var(--background-secondary)",
                }}
                id="mobile-menu-toggle"
                aria-label="Toggle menu"
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
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 p-6 pt-20"
              style={{
                background: "var(--background)",
                borderLeft: "1px solid var(--border)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
