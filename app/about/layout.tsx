import type { Metadata, ResolvingMetadata } from "next";
import JsonLd, { personId, websiteId } from "../components/JsonLd";
import { site } from "../data/site";

const path = "/about";
const title = "About";
const description = `${site.name}: 3.5+ years in SEO at ${site.employer.name} (formerly ${site.employer.formerName}), from technical SEO and keyword research to GEO/AEO. Experience, skills and education.`;
const [firstName, ...lastNames] = site.shortName.split(" ");

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
      type: "profile",
      firstName,
      lastName: lastNames.join(" "),
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

const profilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}${path}#profilepage`,
  url: `${site.url}${path}`,
  name: `About ${site.name}`,
  description,
  inLanguage: "en",
  isPartOf: { "@id": websiteId },
  mainEntity: { "@type": "Person", "@id": personId, name: site.name },
  about: { "@id": personId },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={profilePage} />
      {children}
    </>
  );
}
