import { encodeHtml } from "./html-codec.ts";

export type MetaTagInput = {
  title: string;
  description: string;
  canonical: string;
  index: boolean;
  follow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
};

export type MetaTagResult = { ok: true; html: string } | { ok: false; error: string };

const TITLE_MAX = 200;
const TEXT_MAX = 500;
const URL_MAX = 2000;

function clip(raw: string, max: number, field: string): { ok: true; value: string } | { ok: false; error: string } {
  const value = raw.trim();
  if (value.length > max) return { ok: false, error: `Enter a ${field} of ${max} characters or fewer.` };
  return { ok: true, value };
}

function httpUrl(raw: string, field: string): { ok: true; value: string } | { ok: false; error: string } {
  const limited = clip(raw, URL_MAX, field);
  if (!limited.ok) return limited;
  if (limited.value === "") return limited;
  try {
    const url = new URL(limited.value);
    if ((url.protocol !== "http:" && url.protocol !== "https:") || url.username !== "" || url.password !== "" || url.hostname === "") {
      return { ok: false, error: `Enter ${field} as an absolute http or https URL.` };
    }
  } catch {
    return { ok: false, error: `Enter ${field} as an absolute http or https URL.` };
  }
  return limited;
}

function attribute(value: string): string {
  const encoded = encodeHtml(value);
  return encoded.ok ? encoded.output : value;
}

export function generateMetaTags(input: MetaTagInput): MetaTagResult {
  const title = clip(input.title, TITLE_MAX, "title");
  if (!title.ok) return title;
  if (title.value === "") return { ok: false, error: "Enter a title." };
  const description = clip(input.description, TEXT_MAX, "description");
  if (!description.ok) return description;
  const canonical = httpUrl(input.canonical, "the canonical URL");
  if (!canonical.ok) return canonical;
  const ogTitle = clip(input.ogTitle, TITLE_MAX, "Open Graph title");
  if (!ogTitle.ok) return ogTitle;
  const ogDescription = clip(input.ogDescription, TEXT_MAX, "Open Graph description");
  if (!ogDescription.ok) return ogDescription;
  const ogImage = httpUrl(input.ogImage, "the Open Graph image URL");
  if (!ogImage.ok) return ogImage;
  const ogUrl = httpUrl(input.ogUrl, "the Open Graph URL");
  if (!ogUrl.ok) return ogUrl;
  if (input.ogType !== "" && input.ogType !== "website" && input.ogType !== "article") {
    return { ok: false, error: "Choose website, article, or no Open Graph type." };
  }
  if (input.twitterCard !== "" && input.twitterCard !== "summary" && input.twitterCard !== "summary_large_image") {
    return { ok: false, error: "Choose a Twitter card of summary or summary_large_image." };
  }
  const twitterTitle = clip(input.twitterTitle, TITLE_MAX, "Twitter title");
  if (!twitterTitle.ok) return twitterTitle;
  const twitterDescription = clip(input.twitterDescription, TEXT_MAX, "Twitter description");
  if (!twitterDescription.ok) return twitterDescription;
  const twitterImage = httpUrl(input.twitterImage, "the Twitter image URL");
  if (!twitterImage.ok) return twitterImage;
  if (input.twitterCard === "" && (twitterTitle.value !== "" || twitterDescription.value !== "" || twitterImage.value !== "")) {
    return { ok: false, error: "Choose a Twitter card before adding Twitter text or an image." };
  }

  const lines = [`<meta charset="utf-8">`, `<title>${attribute(title.value)}</title>`];
  if (description.value !== "") lines.push(`<meta name="description" content="${attribute(description.value)}">`);
  if (canonical.value !== "") lines.push(`<link rel="canonical" href="${attribute(canonical.value)}">`);
  lines.push(`<meta name="robots" content="${input.index ? "index" : "noindex"}, ${input.follow ? "follow" : "nofollow"}">`);
  if (ogTitle.value !== "") lines.push(`<meta property="og:title" content="${attribute(ogTitle.value)}">`);
  if (ogDescription.value !== "") lines.push(`<meta property="og:description" content="${attribute(ogDescription.value)}">`);
  if (ogImage.value !== "") lines.push(`<meta property="og:image" content="${attribute(ogImage.value)}">`);
  if (ogUrl.value !== "") lines.push(`<meta property="og:url" content="${attribute(ogUrl.value)}">`);
  if (input.ogType !== "") lines.push(`<meta property="og:type" content="${input.ogType}">`);
  if (input.twitterCard !== "") {
    lines.push(`<meta name="twitter:card" content="${input.twitterCard}">`);
    if (twitterTitle.value !== "") lines.push(`<meta name="twitter:title" content="${attribute(twitterTitle.value)}">`);
    if (twitterDescription.value !== "") lines.push(`<meta name="twitter:description" content="${attribute(twitterDescription.value)}">`);
    if (twitterImage.value !== "") lines.push(`<meta name="twitter:image" content="${attribute(twitterImage.value)}">`);
  }

  return { ok: true, html: `${lines.join("\n")}\n` };
}
