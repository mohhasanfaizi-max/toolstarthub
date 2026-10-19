import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `About ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: `About ${siteConfig.name}`,
    accent: "brand",
    icon: "user",
  });
}
