import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Contact ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: `Contact ${siteConfig.name}`,
    accent: "brand",
    icon: "mail",
  });
}
