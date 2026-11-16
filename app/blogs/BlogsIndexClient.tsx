"use client";

import { useState } from "react";
import Link from "next/link";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "../data/blogs";
import { formatPostDate } from "../data/dates";

interface Props {
  posts: BlogPostSummary[];
  tags: string[];
}

export default function BlogsIndexClient({ posts, tags: allTags }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

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
            <span className="eyebrow">Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Thoughts & Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base max-w-lg"
            style={{ color: "var(--foreground-secondary)" }}
          >
            Writing about SEO, generative engine optimization and AI search,
            plus product marketing and go-to-market strategy.
          </motion.p>
        </div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setSelectedTag(null)}
            className="tag-pill cursor-pointer transition-all duration-200"
            style={{
              background: !selectedTag ? "var(--accent)" : "var(--accent-light)",
              color: !selectedTag ? "var(--background)" : "var(--accent)",
            }}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className="tag-pill cursor-pointer transition-all duration-200"
              style={{
                background:
                  tag === selectedTag ? "var(--accent)" : "var(--accent-light)",
                color: tag === selectedTag ? "var(--background)" : "var(--accent)",
              }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="block glass-card p-6 group"
                id={`blog-card-${post.slug}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="inline-flex items-center gap-1 text-xs"
                        style={{ color: "var(--foreground-secondary)" }}
                      >
                        <Calendar size={12} aria-hidden="true" />
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      </span>
                      <span
                        className="inline-flex items-center gap-1 text-xs"
                        style={{ color: "var(--foreground-secondary)" }}
                      >
                        <Clock size={12} aria-hidden="true" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2
                      className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-200"
                      style={{ color: "var(--foreground)" }}
                    >
                      {post.title}
                    </h2>

                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag-pill" style={{ fontSize: "0.65rem" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="flex-shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div
            className="text-center py-20"
            style={{ color: "var(--foreground-muted)" }}
          >
            <p className="text-lg">No posts found for this tag.</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-2 link-hover text-sm"
              style={{ color: "var(--accent)" }}
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
