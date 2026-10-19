import { categories, getCategoryBySlug } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import type { CategorySlug } from "@/data/types";
import { categoryOgIcon } from "@/lib/og-icons";
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
  const countLabel = count === 1 ? "1 free tool" : `${count} free tools`;
  return renderOgImage({
    eyebrow: category ? countLabel : "Category",
    title: category?.name ?? siteConfig.name,
    accent: category?.slug ?? "brand",
    icon: categoryOgIcon(category?.slug),
  });
}
