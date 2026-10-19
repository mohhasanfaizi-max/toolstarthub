import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";
import Image from "./opengraph-image";

export const alt = `All Tools — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default Image;
