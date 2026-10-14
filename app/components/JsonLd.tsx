import { site } from "../data/site";

// Stable node ids, so structured data on every page can point at the same
// Person and WebSite defined once in the root layout.
export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;

type JsonLdProps = {
  data: Record<string, unknown>;
};

// Renders schema.org JSON-LD as a plain <script>, per the Next.js JSON-LD
// guide. "<" is escaped to < so no string value can close the tag early.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
