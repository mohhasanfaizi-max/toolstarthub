import { getCategoryBySlug } from "@/data/categories";
import { getToolBySlug, tools } from "@/data/tools";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Tool preview — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  const category = tool ? getCategoryBySlug(tool.category) : undefined;
  return renderOgImage({
    eyebrow: category ? `Free tool · ${category.name}` : "Free tool",
    title: tool?.name ?? siteConfig.name,
    description: tool?.description,
  });
}
