import { ImageResponse } from "next/og";
import { PRODUCTION_CANONICAL_HOST, siteConfig } from "@/lib/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

type OgImageInput = {
  /** Small label above the title, for example "Tool · Calculators". */
  eyebrow?: string;
  title: string;
  description?: string;
};

function clip(value: string, max: number): string {
  const text = value.trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export function renderOgImage({ eyebrow, title, description }: OgImageInput) {
  const heading = clip(title, 90);
  const headingSize = heading.length > 60 ? 54 : heading.length > 36 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
          padding: "64px 72px",
          borderTop: "12px solid #2563eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#2563eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#0b1f3a" }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow ? (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#1d4ed8",
                  background: "#dbeafe",
                  borderRadius: 999,
                  padding: "8px 20px",
                }}
              >
                {clip(eyebrow, 48)}
              </div>
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              marginTop: eyebrow ? 24 : 0,
              fontSize: headingSize,
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#0b1f3a",
              maxWidth: 1040,
            }}
          >
            {heading}
          </div>
          {description ? (
            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: 28,
                lineHeight: 1.35,
                color: "#475569",
                maxWidth: 1000,
              }}
            >
              {clip(description, 150)}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#2563eb",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.footerTagline}</div>
          <div style={{ display: "flex", color: "#475569" }}>{PRODUCTION_CANONICAL_HOST}</div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}
