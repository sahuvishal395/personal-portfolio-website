import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Vishal Kumar Sahu, a Growth & Product Marketing Lead with end-to-end influencer marketing experience managing a $1.3M creator budget. Discover core marketing principles, capabilities, and career milestones.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
