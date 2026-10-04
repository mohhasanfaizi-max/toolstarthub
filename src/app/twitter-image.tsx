import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";
import OpenGraphImage from "./opengraph-image";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default OpenGraphImage;
