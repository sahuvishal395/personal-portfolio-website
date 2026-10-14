import type { Metadata, ResolvingMetadata } from "next";
import { site } from "../data/site";

const path = "/blogs";
const title = "Blogs";
const description = `Posts on product marketing by ${site.name}: positioning in the AI era, go-to-market strategy, product storytelling and the metrics that matter.`;

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
