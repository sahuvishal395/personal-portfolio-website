import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing",
  description: "End-to-end influencer marketing case study by Vishal Kumar Sahu — managing a $1.3M creator budget across nano, micro, and macro segments, covering creator sourcing, outreach, negotiation, onboarding, video production, and performance reporting.",
};

export default function InfluencerMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
