import Link from "next/link";
import { Mail, Globe, Link2 } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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

const socialLinks = [
  { href: "https://linkedin.com/in/vishalkumarsahu", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com/vishalkumarsahu", icon: TwitterIcon, label: "Twitter" },
  { href: "https://github.com/vishalkumarsahu", icon: GithubIcon, label: "GitHub" },
  { href: "mailto:vishal@example.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t py-12 mt-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Link
              href="/"
              className="text-lg font-bold"
              style={{ color: "var(--accent)" }}
            >
              Vishal Kumar Sahu
            </Link>
            <p
              className="text-sm"
              style={{ color: "var(--foreground-muted)" }}
            >
              Product Marketing Lead
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  color: "var(--foreground-muted)",
                  background: "transparent",
                }}
                aria-label={link.label}
                id={`footer-${link.label.toLowerCase()}`}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--foreground-muted)" }}
          >
            © {new Date().getFullYear()} Vishal Kumar Sahu. Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover"
              style={{ fontSize: "inherit" }}
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
