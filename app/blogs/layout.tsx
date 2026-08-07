import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read thoughts and insights on product marketing, competitive intelligence, go-to-market strategies, and marketing optimization in the AI era by Vishal Kumar Sahu.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
