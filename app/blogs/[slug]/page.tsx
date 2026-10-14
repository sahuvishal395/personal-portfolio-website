import { blogPosts, getBlogPost } from "../../data/blogs";
import BlogPostClient from "./BlogPostClient";
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
  // image from app/opengraph-image.tsx, so carry that image over.
  const { openGraph } = await parent;
  const path = `/blogs/${post.slug}`;

  return {
    // Post titles stand on their own, without the name suffix, so they stay
    // short in search results.
    title: { absolute: post.title },
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
      images: openGraph?.images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${site.url}/blogs/${post.slug}`;
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: site.url,
    },
    publisher: { "@type": "Person", "@id": personId, name: site.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    keywords: post.tags,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
  };

  return (
    <>
      <JsonLd data={blogPosting} />
      <BlogPostClient post={post} />
    </>
  );
}
