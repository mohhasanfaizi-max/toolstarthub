import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    eyebrow: "Free tools",
    title: siteConfig.tagline,
    accent: "brand",
    icon: "hub",
  });
}
