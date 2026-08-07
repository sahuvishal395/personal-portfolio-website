import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Vishal Kumar Sahu, a Growth & Product Marketing Lead. Discover core marketing principles, capabilities, and professional career milestones.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
