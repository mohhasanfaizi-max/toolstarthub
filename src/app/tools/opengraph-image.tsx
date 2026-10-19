import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `All Tools — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Tools",
    title: "All Tools",
    accent: "brand",
    icon: "hub",
  });
}
