import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { CategorySlug } from "@/data/types";
import { OgGlyph, type OgIconName } from "@/lib/og-icons";
import { PRODUCTION_DOMAIN, siteConfig } from "@/lib/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/** One accent per category, plus the brand blue used on the home page and shared pages. */
export const ogAccents = {
  calculators: "#F5B942",
  "text-tools": "#2DD4BF",
  "developer-tools": "#818CF8",
  "image-tools": "#FB7185",
  "seo-utilities": "#A3E635",
  "ai-tools": "#E879F9",
  brand: "#60A5FA",
} as const;

export type OgAccent = CategorySlug | "brand";

type OgImageInput = {
  /** Coloured pill, for example "Guide · Calculators" or "Text Tools". */
  eyebrow?: string;
  title: string;
  accent?: OgAccent;
  icon?: OgIconName;
};

const TITLE_WIDTH = 740;
const MAX_TITLE_LINES = 3;
const INK = "#071422";

let fontData: Promise<ArrayBuffer> | undefined;

function loadInterBold(): Promise<ArrayBuffer> {
  fontData ??= readFile(join(process.cwd(), "src/lib/og/Inter-Bold.ttf")).then((buf) => {
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
  });
  return fontData;
}

function wordWidth(word: string, fontSize: number): number {
  return Math.max(fontSize, word.length * fontSize * 0.62 - Math.max(0, word.length - 1) * 1.4);
}

/** Largest size that wraps the title inside the text column, at most three lines. */
export function ogTitleSize(title: string): number {
  const words = title.trim().split(/\s+/).filter(Boolean);
  const sizes = [76, 68, 60, 54, 48, 42, 36];
  for (const size of sizes) {
    let lines = 1;
    let width = 0;
    let fits = true;
    for (const word of words) {
      const nextWord = wordWidth(word, size);
      if (nextWord > TITLE_WIDTH) {
        fits = false;
        break;
      }
      if (width === 0) {
        width = nextWord;
        continue;
      }
      const next = width + size * 0.32 + nextWord;
      if (next > TITLE_WIDTH) {
        lines += 1;
        width = nextWord;
      } else {
        width = next;
      }
    }
    if (fits && lines <= MAX_TITLE_LINES) {
      return size;
    }
  }
  return 36;
}

function clip(value: string, max: number): string {
  const text = value.trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

export async function renderOgImage({
  eyebrow,
  title,
  accent = "brand",
  icon = "hub",
}: OgImageInput) {
  const color = ogAccents[accent];
  const heading = clip(title.trim() || siteConfig.name, 120);
  const headingSize = ogTitleSize(heading);
  const pill = eyebrow ? clip(eyebrow, 42) : undefined;
  const font = await loadInterBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(145deg, #06101c 0%, #0c2344 58%, #14386c 100%)",
          fontFamily: "Inter",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -70,
            top: -90,
            width: 520,
            height: 520,
            borderRadius: 260,
            background: "#12315c",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 36,
            top: 150,
            width: 340,
            height: 340,
            borderRadius: 170,
            background: "#1a4e8c",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 250,
            top: -70,
            width: 180,
            height: 180,
            borderRadius: 40,
            background: "#0e2c56",
            transform: "rotate(18deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -90,
            bottom: -120,
            width: 280,
            height: 280,
            borderRadius: 140,
            background: "#0a1c36",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "48px 64px 42px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width={56} height={56} viewBox="0 0 32 32">
              <rect width={32} height={32} rx={8} fill="#2563EB" />
              <path d="M10 8h12v3.2h-4.4V24h-3.2V11.2H10V8z" fill="#ffffff" />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: -0.6,
                color: "#ffffff",
              }}
            >
              {siteConfig.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", width: TITLE_WIDTH }}>
              {pill ? (
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 22,
                      fontWeight: 700,
                      color: INK,
                      background: color,
                      borderRadius: 999,
                      padding: "10px 20px",
                    }}
                  >
                    {pill}
                  </div>
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  marginTop: pill ? 22 : 0,
                  width: TITLE_WIDTH,
                  maxHeight: Math.ceil(headingSize * 1.08 * MAX_TITLE_LINES) + 8,
                  overflow: "hidden",
                  fontSize: headingSize,
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: -1.5,
                  color: "#ffffff",
                }}
              >
                {heading}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: 236,
                height: 236,
                borderRadius: 52,
                alignItems: "center",
                justifyContent: "center",
                background: color,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 208,
                  height: 208,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#071422",
                }}
              >
                <OgGlyph name={icon} color={color} />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 84,
                height: 6,
                borderRadius: 6,
                background: color,
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                color: "#d5deea",
              }}
            >
              {PRODUCTION_DOMAIN}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [{ name: "Inter", data: font, weight: 700, style: "normal" }],
    },
  );
}
