import type { Metadata, ResolvingMetadata } from "next";
import JsonLd, { personId, websiteId } from "../components/JsonLd";
import { site } from "../data/site";
import { seoCaseStudies } from "../data/seo";

const path = "/seo";
const pageUrl = `${site.url}${path}`;
const title = "SEO & AI Search Case Studies";
const description =
  "SEO case studies: rebrand migration, GEO/AEO citations, templated-page indexation, technical audits, backlink reclamation, keyword research, featured snippets.";

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

// Lists the case studies in page order. Each item links to the matching
// section anchor (id={study.slug}) on /seo.
const collectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  inLanguage: "en",
  isPartOf: { "@id": websiteId },
  author: { "@id": personId },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: seoCaseStudies.length,
    itemListElement: seoCaseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: study.title,
      description: study.summary,
      url: `${pageUrl}#${study.slug}`,
    })),
  },
};

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={collectionPage} />
      {children}
    </>
  );
}
