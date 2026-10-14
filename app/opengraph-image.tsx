import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark-theme tokens from app/globals.css.
const palette = {
  background: "#070b1a",
  card: "rgba(13, 20, 48, 0.85)",
  border: "#2a3665",
  foreground: "#eef1fa",
  secondary: "#9aa6c9",
  accent: "#ff8a93",
  accentStrong: "#ff4757",
};

// Three numbers from the CV (see app/data/seo.ts).
const proofs = [
  { value: "150+", label: "articles optimized" },
  { value: "118 → 1", label: "thin pages merged" },
  { value: "9th of 142", label: "for AI citation share" },
];

const [titleLead, ...titleRest] = site.title.split(" | ");
const domain = new URL(site.url).hostname.replace(/^www\./, "");

// Rendered once at build time with the default font that ships with next/og,
// so no font or network fetch is needed. Every glyph used here is in that font.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          backgroundColor: palette.background,
          backgroundImage:
            "radial-gradient(circle at 92% 6%, rgba(255, 71, 87, 0.22), rgba(7, 11, 26, 0) 42%), radial-gradient(circle at 4% 100%, rgba(76, 111, 255, 0.18), rgba(7, 11, 26, 0) 48%)",
          color: palette.foreground,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 48,
                height: 6,
                borderRadius: 3,
                backgroundColor: palette.accentStrong,
              }}
            />
            <div
              style={{
                marginLeft: 16,
                fontSize: 24,
                letterSpacing: 1,
                color: palette.accent,
              }}
            >
              {domain}
            </div>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 18,
              fontSize: 34,
              lineHeight: 1.25,
              letterSpacing: -0.5,
            }}
          >
            <div style={{ color: palette.accent }}>{titleLead}</div>
            {titleRest.length > 0 ? (
              <div style={{ marginLeft: 12, color: palette.secondary }}>
                {`| ${titleRest.join(" | ")}`}
              </div>
            ) : null}
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 26,
              letterSpacing: -0.5,
              color: palette.secondary,
            }}
          >
            {`${site.employer.name} (formerly ${site.employer.formerName}) · ${site.location}`}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {proofs.map((proof, index) => (
            <div
              key={proof.label}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: index === 0 ? 0 : 24,
                padding: "24px 28px",
                borderRadius: 20,
                border: `1px solid ${palette.border}`,
                backgroundColor: palette.card,
              }}
            >
              <div style={{ fontSize: 46, lineHeight: 1.1, letterSpacing: -1 }}>
                {proof.value}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 24,
                  letterSpacing: -0.5,
                  color: palette.secondary,
                }}
              >
                {proof.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
