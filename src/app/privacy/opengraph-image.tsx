import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Privacy Policy — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Privacy Policy",
    accent: "brand",
    icon: "shield",
  });
}
