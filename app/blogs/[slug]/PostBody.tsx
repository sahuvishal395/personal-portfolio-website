import Link from "next/link";
import type { ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getBlogPost,
  lastModified,
  plannedPostSlugs,
  type BlogPost,
} from "../../data/blogs";
import { formatPostDate } from "../../data/dates";
import { site } from "../../data/site";
import styles from "./post.module.css";

// A line containing only this marker places the table of contents.
const TOC_MARKER = "[[toc]]";

const TAKEAWAYS_ID = "key-takeaways";
const FAQ_ID = "faq";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node.props as { children?: ReactNode }).children);
  }
  return "";
}

// Heading ids are derived from the heading text, with a counter for repeats.
// The table of contents and the rendered headings each get their own
// generator and see the same headings in the same order, so the ids match.
function idGenerator() {
  const seen = new Map<string, number>();
  return (text: string) => {
    const base = slugify(text) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

// Plain text of a markdown heading line, for the table of contents.
function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

function tocEntries(markdown: string) {
  const nextId = idGenerator();
  return markdown
    .split("\n")
    .filter((line) => /^#{2,3} /.test(line))
    .map((line) => {
      const text = stripInlineMarkdown(line.replace(/^#{2,3} /, ""));
      return { level: line.startsWith("### ") ? 3 : 2, text, id: nextId(text) };
    })
    .filter((entry) => entry.level === 2);
}

// Words a reader sees in the post body, for wordCount in structured data.
export function countWords(post: BlogPost): number {
  const text = [
    post.summary ?? "",
    post.content.replace(TOC_MARKER, ""),
    ...(post.keyTakeaways ?? []),
    ...(post.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
  ]
    .join(" ")
    .replace(/\]\([^)]*\)/g, " ");
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

// External sources linked from the post body, for `citation` in structured
// data.
export function citedUrls(post: BlogPost): string[] {
  const urls = Array.from(post.content.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g), (m) => m[1]);
  return Array.from(new Set(urls));
}

export default function PostBody({ post }: { post: BlogPost }) {
  const [intro, rest] = post.content.includes(TOC_MARKER)
    ? post.content.split(TOC_MARKER)
    : ["", post.content];
  const nextHeadingId = idGenerator();

  const components: Components = {
    h2: ({ children }) => <h2 id={nextHeadingId(textOf(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={nextHeadingId(textOf(children))}>{children}</h3>,
    a: ({ href = "", children }) => {
      if (href.startsWith("/")) {
        const slug = href.match(/^\/blogs\/([^/?#]+)/)?.[1];
        if (slug && !getBlogPost(slug)) {
          if (plannedPostSlugs.has(slug)) return <>{children}</>;
          throw new Error(`Post "${post.slug}" links to a missing post: ${href}`);
        }
        return <Link href={href}>{children}</Link>;
      }
      if (href.startsWith("#")) return <a href={href}>{children}</a>;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    table: ({ children }) => (
      <div className={styles.tableWrap} role="region" aria-label="Table" tabIndex={0}>
        <table>{children}</table>
      </div>
    ),
  };

  const toc = [
    ...tocEntries(`${intro}\n${rest}`),
    ...(post.keyTakeaways?.length ? [{ id: TAKEAWAYS_ID, text: "Key takeaways" }] : []),
    ...(post.faqs?.length ? [{ id: FAQ_ID, text: "Frequently asked questions" }] : []),
  ];
  const showToc = post.content.includes(TOC_MARKER) && toc.length > 2;
  const modified = lastModified(post);

  return (
    <article className={`prose-custom ${styles.article}`}>
      {post.summary && (
        <div className={styles.answer}>
          <p>{post.summary}</p>
        </div>
      )}

      {intro.trim() && (
        <div className={styles.md}>
          <Markdown remarkPlugins={[remarkGfm]} components={components}>
            {intro}
          </Markdown>
        </div>
      )}

      {showToc && (
        <nav className={styles.toc} aria-labelledby="toc-title">
          <p id="toc-title" className={styles.tocTitle}>
            In this guide
          </p>
          <ol>
            {toc.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className={styles.tocLink}>
                  {entry.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className={styles.md}>
        <Markdown remarkPlugins={[remarkGfm]} components={components}>
          {rest}
        </Markdown>
      </div>

      {post.keyTakeaways && post.keyTakeaways.length > 0 && (
        <section className={styles.takeaways} aria-labelledby={TAKEAWAYS_ID}>
          <h2 id={TAKEAWAYS_ID}>Key takeaways</h2>
          <ul>
            {post.keyTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {post.faqs && post.faqs.length > 0 && (
        <section className={styles.faq} aria-labelledby={FAQ_ID}>
          <h2 id={FAQ_ID}>Frequently asked questions</h2>
          {post.faqs.map((faq) => (
            <div key={faq.question} className={styles.faqItem}>
              <h3 id={`faq-${slugify(faq.question)}`}>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      )}

      {post.summary && (
        <aside className={styles.author} aria-label="About the author">
          <p className={styles.authorName}>
            Written by <Link href="/about">{site.name}</Link>
          </p>
          <p className={styles.authorBio}>{site.authorBio}</p>
          <p className={styles.updated}>
            Last updated: <time dateTime={modified}>{formatPostDate(modified)}</time>
          </p>
        </aside>
      )}
    </article>
  );
}
