import type { Metadata } from "next";
import HomeContent from "./components/HomeContent";
import { getFeaturedPost, toSummary } from "./data/blogs";

// Server Component so the route can export metadata; the interactive homepage
// lives in HomeContent ("use client"). Title and description come from the
// root layout. The relative canonical resolves against the root layout's
// `metadataBase`.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  // Passed as a summary so the client bundle does not carry every post body.
  const featured = getFeaturedPost();
  return <HomeContent featuredPost={featured && toSummary(featured)} />;
}
