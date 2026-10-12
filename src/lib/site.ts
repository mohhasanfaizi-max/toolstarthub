export const PRODUCTION_ROOT_DOMAIN = "toolstarhub.com";
export const PRODUCTION_CANONICAL_HOST = "www.toolstarhub.com";
export const PRODUCTION_SITE_URL = "https://www.toolstarhub.com";
export const PRODUCTION_DOMAIN = PRODUCTION_ROOT_DOMAIN;

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return PRODUCTION_SITE_URL;
  }

  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return PRODUCTION_SITE_URL;
    }
    if (parsed.hostname === PRODUCTION_ROOT_DOMAIN || parsed.hostname === PRODUCTION_CANONICAL_HOST) {
      return PRODUCTION_SITE_URL;
    }
    return parsed.origin;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

export const siteContact = {
  email: "esd.shigri110@gmail.com",
  phoneDisplay: "+92 346 2559008",
  phoneE164: "+923462559008",
  whatsappUrl: "https://wa.me/923462559008",
} as const;

export function getPublicContactEmail(): string | null {
  const value = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return null;
  }
  return value;
}

export function getGoogleSiteVerification(): string | undefined {
  const value = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return value || undefined;
}

export const siteConfig = {
  name: "Tools Star Hub",
  domain: PRODUCTION_DOMAIN,
  url: resolveSiteUrl(),
  tagline: "Free Online Tools That Just Work",
  metaTitle: "Free PDF, Image, and Calculator Tools | Tools Star Hub",
  description:
    "Convert a PDF, compress an image, count words, or calculate a percent in your browser. Most tools stay on your device, with no account.",
  intro:
    "Need a percentage, a smaller photo, or a word count? Open the Percentage Calculator, Image Compressor, or Word Counter and finish the job in this browser. Convert PDF pages to JPG, or make a QR code from a link, without creating an account. Most tools run on your device. Gemini-powered tools and the Open Graph preview send only what you submit. Loan, wage, and paycheck pages are estimates from the numbers you type. They do not use tax tables or live lender rates. Search above, or pick a category and a named tool below.",
  shortDescription:
    "Fast, simple, accurate tools for calculations, text, developers, images, SEO and everyday tasks.",
  positioning: ["Fast", "Free", "No Signup", "Browser tools"] as const,
  footerTagline: "Fast • Free • Browser tools • No Signup",
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
