import { categories, getCategoryBySlug } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import type { CategorySlug } from "@/data/types";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Category preview — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const count = category ? getToolsByCategory(category.slug as CategorySlug).length : 0;
  return renderOgImage({
    eyebrow: category ? `Category · ${count} free tools` : "Category",
    title: category ? `${category.name}` : siteConfig.name,
    description: category?.shortDescription,
  });
}
