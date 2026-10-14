import type { Metadata, ResolvingMetadata } from "next";
import { site } from "../data/site";

const path = "/influencer-marketing";
const title = "Influencer Marketing Case Study";
const description =
  "Influencer marketing alongside SEO: $1.3M budget, 100+ creators on LinkedIn, Instagram, YouTube and X, Apify scraping, automated outreach, Replit tracking app.";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // A child openGraph object replaces the parent's entirely, including the
  // image from app/opengraph-image.tsx, so carry that image over.
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

export default function InfluencerMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
