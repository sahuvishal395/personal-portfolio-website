import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import JsonLd, { personId, websiteId } from "./components/JsonLd";
import { site } from "./data/site";
import { skillGroups } from "./data/about";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const employer = `${site.employer.name} (formerly ${site.employer.formerName})`;

const siteTitle = `${site.name} — SEO & Organic Growth Specialist`;
const siteDescription = `SEO specialist with 3.5+ years at ${employer}: technical SEO, site migration, keyword research, and GEO/AEO for AI search citations.`;

// Child routes set a short title such as "About". The same template is applied
// to <title>, og:title and twitter:title, so all three read "About | <name>".
const titleTemplate = `%s | ${site.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: siteTitle, template: titleTemplate },
  description: siteDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // No alternates.canonical here: it would be inherited by every route.
  // Each route sets its own canonical instead.
  // og:image comes from app/opengraph-image.tsx; twitter:image is filled in
  // from og:image by Next.js.
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: { default: siteTitle, template: titleTemplate },
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: { default: siteTitle, template: titleTemplate },
    description: siteDescription,
  },
};

const knowsAbout = Array.from(
  new Set([
    ...skillGroups
      .filter((group) => group.label === "SEO" || group.label === "GEO / AEO")
      .flatMap((group) => group.items),
    "Generative engine optimization (GEO)",
    "Answer engine optimization (AEO)",
    "Influencer marketing",
  ]),
);

const bbmku = {
  "@type": "CollegeOrUniversity",
  name: "Binod Bihari Mahto Koyalanchal University",
  alternateName: "BBMKU",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: `Portfolio of ${site.name}, ${site.title} at ${employer}: SEO and GEO/AEO case studies, resume, influencer marketing and writing on product marketing.`,
      inLanguage: "en",
      publisher: { "@id": personId },
      author: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: site.shortName,
      jobTitle: "Product Marketing Lead",
      description: `SEO specialist with 3.5+ years at ${employer}, a B2B software testing platform. Works across technical SEO, keyword research, content and link building, and GEO/AEO: making sure the brand is cited when buyers ask ChatGPT, Perplexity and Gemini for answers.`,
      url: site.url,
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      worksFor: {
        "@type": "Organization",
        name: site.employer.name,
        alternateName: site.employer.formerName,
        url: site.employer.url,
      },
      alumniOf: bbmku,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Bachelor of Commerce",
          credentialCategory: "degree",
          recognizedBy: bbmku,
          dateCreated: "2020",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Professional Certification in Digital Marketing & Strategy",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "IIDE" },
          dateCreated: "2024-12",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Digital Marketing",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "Kraftshala" },
          dateCreated: "2023-05",
        },
      ],
      knowsAbout,
      sameAs: [site.linkedin, site.github],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={structuredData} />
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1 relative z-10 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
