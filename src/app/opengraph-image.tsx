import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: siteConfig.tagline,
    description: "Fast, free online tools for calculations, text, developers, images, PDFs, SEO and AI. No signup required.",
  });
}
