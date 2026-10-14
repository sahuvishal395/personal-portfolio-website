import type { Metadata } from "next";
import HomeContent from "./components/HomeContent";

// Server Component so the route can export metadata; the interactive homepage
// lives in HomeContent ("use client"). Title and description come from the
// root layout. The relative canonical resolves against the root layout's
// `metadataBase`.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeContent />;
}
