import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List",
  description: "Curated collection of books on marketing, business, technology, and personal growth recommended by Vishal Kumar Sahu.",
};

export default function ReadingListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
