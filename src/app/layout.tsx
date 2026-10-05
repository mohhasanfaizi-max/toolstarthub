import type { Metadata, Viewport } from "next";
import { getGoogleSiteVerification, siteConfig } from "@/lib/site";
import "./globals.css";

const googleSiteVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: "%s — Tools Star Hub",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  keywords: [
    "online tools",
    "free calculators",
    "text tools",
    "developer tools",
    "image tools",
    "SEO tools",
    "no signup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

/**
 * Root layout. It only passes children through: the <html> document (lang,
 * dir, header, footer, consent) is rendered by SiteDocument from the English
 * section layouts, the English homepage and app/[locale]/layout.tsx, so each
 * language gets the right lang/dir attributes in static HTML.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
