"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "../../data/blogs";
import { blogPosts } from "../../data/blogs";

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
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

  // Simple markdown-ish renderer
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-6 mb-5 space-y-1">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={i}>{line.replace("### ", "")}</h3>
        );
      } else if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={i}>{line.replace("## ", "")}</h2>
        );
      } else if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
        if (match) {
          listItems.push(`${match[1]}: ${match[2]}`);
        } else {
          listItems.push(line.replace(/^- /, ""));
        }
      } else if (line.startsWith("- ")) {
        listItems.push(line.replace(/^- /, ""));
      } else if (line.match(/^\d+\. /)) {
        flushList();
        const text = line.replace(/^\d+\.\s/, "");
        const boldMatch = text.match(/\*\*(.+?)\*\*:?\s*(.*)/);
        if (boldMatch) {
          listItems.push(`${boldMatch[1]}: ${boldMatch[2]}`);
        } else {
          listItems.push(text);
        }
      } else if (line.startsWith("> ")) {
        flushList();
        const quoteText = line.replace(/^>\s*"?/, "").replace(/"$/, "");
        elements.push(
          <blockquote key={i}>{quoteText}</blockquote>
        );
      } else if (line.trim() === "") {
        flushList();
      } else {
        flushList();
        // Simple bold/italic replacement
        const processed = line
          .replace(/\*\*(.+?)\*\*/g, "$1")
          .replace(/\*(.+?)\*/g, "$1");
        elements.push(
          <p key={i}>{processed}</p>
        );
      }
    }

    flushList();
    return elements;
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="reading-progress"
        style={{ width: `${readProgress}%` }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors duration-200 hover:gap-2.5"
          style={{ color: "var(--accent)" }}
          id="back-to-blogs"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-10">
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
            className="flex items-center gap-4"
          >
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-muted)" }}
            >
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: "var(--foreground-muted)" }}
            >
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Post Content */}
        <article className="prose-custom mb-16">
          {renderContent(post.content)}
        </article>

        {/* Divider */}
        <div
          className="h-px mb-12"
          style={{ background: "var(--border)" }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ color: "var(--foreground)" }}
            >
              More Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blogs/${relPost.slug}`}
                  className="glass-card p-5 group block"
                >
                  <span
                    className="text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {relPost.readingTime}
                  </span>
                  <h4
                    className="text-sm font-bold mt-1 group-hover:text-accent transition-colors duration-200 line-clamp-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {relPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
