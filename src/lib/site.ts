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
    return parsed.origin;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

export const siteContact = {
  email: "eshigari110@gmail.com",
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
  name: "ToolsTartHub",
  domain: PRODUCTION_DOMAIN,
  url: resolveSiteUrl(),
  tagline: "Free Online Tools That Just Work",
  description:
    "Fast, free and easy-to-use online tools for calculations, text, developers, images, SEO and everyday tasks. No signup required.",
  shortDescription:
    "Fast, simple, accurate tools for calculations, text, developers, images, SEO and everyday tasks.",
  positioning: ["Fast", "Free", "No Signup", "Privacy Friendly"] as const,
  footerTagline: "Fast • Free • Private • No Signup",
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
