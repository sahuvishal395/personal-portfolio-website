import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vishal Kumar Sahu, Growth & Product Marketing Lead. Available for inquiries, strategy consulting, and collaborations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
