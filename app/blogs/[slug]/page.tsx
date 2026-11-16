import {
  blogPosts,
  getBlogPost,
  lastModified,
  toSummary,
  type BlogEntity,
  type BlogPost,
} from "../../data/blogs";
import BlogPostClient from "./BlogPostClient";
import PostBody, { citedUrls, countWords } from "./PostBody";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import JsonLd, { personId, websiteId } from "../../components/JsonLd";
import { site } from "../../data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  // A child openGraph object replaces the parent's entirely, including the
  // image from app/opengraph-image.tsx, so carry that image over unless the
  // post has its own.
  const { openGraph } = await parent;
  const path = `/blogs/${post.slug}`;
  // Post titles stand on their own, without the name suffix, so they stay
  // short in search results.
  const title = post.metaTitle ?? post.title;
  const image = post.image && {
    url: post.image.social.src,
    width: post.image.social.width,
    height: post.image.social.height,
    alt: post.image.alt,
  };

  return {
    title: { absolute: title },
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: lastModified(post),
      authors: [site.name],
      section: post.section,
      tags: post.tags,
      images: image ? [image] : openGraph?.images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      ...(image && { images: [image] }),
    },
  };
}

const thing = (entity: BlogEntity) => ({
  "@type": "Thing",
  name: entity.name,
  ...(entity.sameAs && { sameAs: entity.sameAs }),
});

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${site.url}/blogs/${post.slug}`;
  const citations = citedUrls(post);

  const blogPosting = {
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    ...(post.image && {
      image: post.image.schema.map((image) => `${site.url}${image.src}`),
    }),
    datePublished: post.date,
    dateModified: lastModified(post),
    author: {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: site.url,
    },
    publisher: { "@type": "Person", "@id": personId, name: site.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(post.section && { articleSection: post.section }),
    keywords: post.tags,
    wordCount: countWords(post),
    ...(post.about && { about: post.about.map(thing) }),
    ...(post.mentions && { mentions: post.mentions.map(thing) }),
    ...(citations.length > 0 && { citation: citations }),
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
  };

  const breadcrumbs = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blogs` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  // Built from the same data as the visible FAQ section, so the two match.
  const faqPage = post.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [blogPosting, breadcrumbs, ...(faqPage ? [faqPage] : [])],
  };

  // Related posts are picked here, on the server, so the client bundle does
  // not carry every post body. Posts sharing the most tags come first; ties
  // keep the order of blogPosts.
  const sharedTags = (other: BlogPost) =>
    other.tags.filter((tag) => post.tags.includes(tag)).length;
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p, index) => ({ p, index, shared: sharedTags(p) }))
    .sort((a, b) => b.shared - a.shared || a.index - b.index)
    .slice(0, 2)
    .map(({ p }) => toSummary(p));

  return (
    <>
      <JsonLd data={structuredData} />
      <BlogPostClient
        post={toSummary(post)}
        updated={post.updated}
        related={related}
      >
        <PostBody post={post} />
      </BlogPostClient>
    </>
  );
}
