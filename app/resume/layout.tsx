import type { Metadata, ResolvingMetadata } from "next";
import { site } from "../data/site";

const path = "/resume";
const title = "Resume";
const description = `Resume: ${site.title} at ${site.employer.name} (formerly ${site.employer.formerName}). Technical SEO, GEO/AEO, site migration and keyword research.`;

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

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
