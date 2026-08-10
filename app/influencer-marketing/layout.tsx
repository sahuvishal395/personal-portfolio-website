import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing",
  description: "Influencer marketing case study by Vishal Kumar Sahu — a $1.3M creator budget and 100+ influencers onboarded across LinkedIn, Instagram, YouTube, and X, run on a custom stack: Apify profile scraping, automated filtering and outreach, and a Replit-built app for budget and live performance tracking.",
};

export default function InfluencerMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
