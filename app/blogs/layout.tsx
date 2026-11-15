import type { Metadata, ResolvingMetadata } from "next";
import { site } from "../data/site";

const path = "/blogs";
const title = "Blogs";
const description = `Posts by ${site.name} on SEO, generative engine optimization and AI search, plus product marketing, go-to-market strategy and storytelling.`;

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // A child openGraph object replaces the parent's entirely, including the
  // image from app/opengraph-image.tsx, so carry that image over. Post pages
  // in [slug] override title, canonical and openGraph with their own values.
  const { openGraph } = await parent;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title,
      description,
      images: openGraph?.images,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
