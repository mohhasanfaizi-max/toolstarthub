import { tools } from "@/data/tools";
import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";
import Image from "./opengraph-image";

export const alt = `Tool preview — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default Image;
