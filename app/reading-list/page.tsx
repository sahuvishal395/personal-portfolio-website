"use client";

import { useState } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { BookOpen, Star, ExternalLink } from "lucide-react";
import { readingList, categories } from "../data/reading-list";

export default function ReadingListPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? readingList
      : readingList.filter((item) => item.category === selectedCategory);

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
            <span
              className="h-px flex-1 max-w-[40px]"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              Reading List
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Books That Shaped My Thinking
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base max-w-lg"
            style={{ color: "var(--foreground-secondary)" }}
          >
            A curated collection of books that have influenced my approach to
            product marketing, strategy, and leadership.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="tag-pill cursor-pointer transition-all duration-200"
              style={{
                background:
                  cat === selectedCategory
                    ? "var(--accent)"
                    : "var(--accent-light)",
                color: cat === selectedCategory ? "white" : "var(--accent)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Book Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <div className="glass-card p-5 h-full flex gap-4">
                {/* Book Color Block */}
                <div
                  className="flex-shrink-0 w-3 rounded-full"
                  style={{ background: item.coverColor }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className="text-sm font-bold leading-tight"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </h3>
                    {item.link && item.link !== "#" && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-1 rounded transition-colors duration-200"
                        style={{ color: "var(--foreground-muted)" }}
                        aria-label={`View ${item.title}`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  <p
                    className="text-xs mb-2"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    by {item.author}
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={
                          j < item.rating ? "star-filled" : "star-empty"
                        }
                        fill={j < item.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {item.note}
                  </p>

                  <span
                    className="inline-block mt-2 text-xs tag-pill"
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
