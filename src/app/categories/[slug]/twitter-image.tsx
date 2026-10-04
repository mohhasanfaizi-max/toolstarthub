import { categories } from "@/data/categories";
import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";
import Image from "./opengraph-image";

export const alt = `Category preview — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default Image;
