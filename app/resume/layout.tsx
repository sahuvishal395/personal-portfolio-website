import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume of Vishal Kumar Sahu, Growth & Product Marketing Lead. Highlighting experience at TestMu AI, LambdaTest, Kraftshala, and Byju's.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
