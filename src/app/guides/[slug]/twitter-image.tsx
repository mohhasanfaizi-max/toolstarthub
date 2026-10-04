import { articles } from "@/data/articles";
import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";
import Image from "./opengraph-image";

export const alt = `Guide preview — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default Image;
