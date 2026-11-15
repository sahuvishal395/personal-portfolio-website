"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import type { BlogPostSummary } from "../../data/blogs";
import { formatPostDate } from "../../data/dates";
import { site } from "../../data/site";
import styles from "./post.module.css";

interface Props {
  post: BlogPostSummary;
  updated?: string;
  related: BlogPostSummary[];
  // The post body, rendered on the server.
  children: React.ReactNode;
}

export default function BlogPostClient({ post, updated, related, children }: Props) {
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showUpdated = updated && updated !== post.date;

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${readProgress / 100})` }}
      />

      <div
        className={`${styles.enter} max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20`}
      >
        {/* Breadcrumb, matching the BreadcrumbList in the page's JSON-LD */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex flex-wrap items-center gap-1.5 text-sm"
            style={{ color: "var(--foreground-secondary)" }}
          >
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li>
              <Link
                href="/blogs"
                className="font-medium hover:underline underline-offset-4"
                style={{ color: "var(--accent)" }}
                id="back-to-blogs"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="line-clamp-1 max-w-[16rem] sm:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            {post.title}
          </h1>

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
            style={{ color: "var(--foreground-secondary)" }}
          >
            <span>
              By{" "}
              <Link
                href="/about"
                className="font-medium hover:underline underline-offset-4"
                style={{ color: "var(--foreground)" }}
                rel="author"
              >
                {site.name}
              </Link>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </span>
            {showUpdated && (
              <span>
                Updated <time dateTime={updated}>{formatPostDate(updated)}</time>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Post Content */}
        <div className="mb-16">{children}</div>

        {/* Divider */}
        <div
          className="h-px mb-12"
          style={{ background: "var(--border)" }}
        />

        {/* Related Posts */}
        {related.length > 0 && (
          <section aria-labelledby="more-articles">
            <h2
              id="more-articles"
              className="text-lg font-bold mb-6"
              style={{ color: "var(--foreground)" }}
            >
              More Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blogs/${relPost.slug}`}
                  className="glass-card p-5 group block"
                >
                  <span
                    className="text-xs"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {relPost.readingTime}
                  </span>
                  <h3
                    className="text-sm font-bold mt-1 group-hover:text-accent transition-colors duration-200 line-clamp-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {relPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
