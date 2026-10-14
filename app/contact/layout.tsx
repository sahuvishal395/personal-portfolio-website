import type { Metadata, ResolvingMetadata } from "next";
import { site } from "../data/site";

const path = "/contact";
const title = "Contact";
const description = `Contact ${site.name}, SEO and product marketing lead at ${site.employer.name} (formerly ${site.employer.formerName}), based in ${site.location}. Send a message or connect on LinkedIn.`;

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
