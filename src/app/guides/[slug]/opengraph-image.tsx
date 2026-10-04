import { articles, getArticleBySlug } from "@/data/articles";
import { getCategoryBySlug } from "@/data/categories";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `Guide preview — ${siteConfig.name}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const category = article ? getCategoryBySlug(article.category) : undefined;
  return renderOgImage({
    eyebrow: category ? `Guide · ${category.name}` : "Guide",
    title: article?.title ?? siteConfig.name,
    description: article?.excerpt,
  });
}
