import { notFound } from "next/navigation";
import Link from "next/link";
import { ShareCardImage } from "@/components/seo/ShareCardImage";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { getCategoryBySlug } from "@/data/categories";
import { getArticleBySlug } from "@/data/articles";
import { getGuideContent } from "@/data/guide-content";
import {
  FREE_DIGITAL_TOOLS_META_DESCRIPTION,
  FREE_DIGITAL_TOOLS_META_TITLE,
  FREE_DIGITAL_TOOLS_SLUG,
  freeDigitalToolsFaqs,
  freeDigitalToolsWordCount,
} from "@/data/free-digital-tools-guide";
import { FreeDigitalToolsArticle } from "@/components/guides/FreeDigitalToolsArticle";
import { getGuideDates } from "@/data/guide-dates";
import { guideMetaDescriptions } from "@/data/guide-meta";
import { getPublicGuideBySlug, getRelatedPublicArticles, toGuide } from "@/data/guides";
import { isPubliclyVisible } from "@/lib/content/publication";
import { getToolBySlug } from "@/data/tools";
import type { Tool } from "@/data/types";
import { collectText } from "@/lib/content-style";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";
import {
  EDITORIAL_TEAM_NAME,
  guideArticleJsonLd,
  howToJsonLd,
} from "@/lib/structured-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const now = new Date();
  const guide = getPublicGuideBySlug(slug, now);

  if (!guide) {
    return {};
  }

  const article = getArticleBySlug(slug);
  const dates = getGuideDates(slug, article?.publishedAt ?? article?.publishAt);
  const catalogGuide = slug === FREE_DIGITAL_TOOLS_SLUG;
  const description = catalogGuide
    ? FREE_DIGITAL_TOOLS_META_DESCRIPTION
    : article?.metaDescription || guideMetaDescriptions[slug] || guide.description;
  const base = createPageMetadata({
    title: catalogGuide ? FREE_DIGITAL_TOOLS_META_TITLE : article?.metaTitle || guide.title,
    description,
    path: guide.route,
    keywords: article
      ? [article.primaryKeyword, ...article.secondaryKeywords]
      : undefined,
    shareImage: { route: guide.route, alt: catalogGuide ? FREE_DIGITAL_TOOLS_META_TITLE : guide.title },
  });
  const category = getCategoryBySlug(guide.category);
  return {
    ...base,
    ...(catalogGuide ? { title: { absolute: FREE_DIGITAL_TOOLS_META_TITLE } } : {}),
    authors: catalogGuide
      ? [{ name: "Ali Ahmed", url: absoluteUrl("/about") }]
      : [{ name: EDITORIAL_TEAM_NAME, url: absoluteUrl("/about#editorial-team") }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      ...(dates.published ? { publishedTime: dates.published } : {}),
      ...(dates.modified ? { modifiedTime: dates.modified } : {}),
      authors: [absoluteUrl(catalogGuide ? "/about" : "/about#editorial-team")],
      ...(category && !catalogGuide ? { section: category.name } : {}),
    },
  };
}

export default async function GuidePage({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const now = new Date();
  const article = getArticleBySlug(slug);
  if (!article || !isPubliclyVisible(article, now)) {
    notFound();
  }
  const guide = toGuide(article);

  const category = getCategoryBySlug(guide.category);
  const content = getGuideContent(guide.slug);
  const relatedTools = guide.relatedToolSlugs
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((tool): tool is Tool => tool !== undefined);
  const relatedGuides = getRelatedPublicArticles(article, now).map(toGuide);
  const dates = getGuideDates(guide.slug, article.publishedAt ?? article.publishAt);
  const catalogGuide = guide.slug === FREE_DIGITAL_TOOLS_SLUG;
  const description =
    article.metaDescription || guideMetaDescriptions[guide.slug] || guide.description;

  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: guide.route },
        ])}
      />
      <JsonLd
        data={guideArticleJsonLd({
          title: guide.title,
          description,
          path: guide.route,
          datePublished: dates.published,
          dateModified: dates.modified,
          keywords: [article.primaryKeyword, ...article.secondaryKeywords],
          section: catalogGuide ? undefined : category?.name,
          tools: relatedTools.map((tool) => ({ name: tool.name, path: tool.route })),
          wordCount: catalogGuide
            ? freeDigitalToolsWordCount
            : content
              ? collectText(content).join(" ").split(/\s+/).filter(Boolean).length
              : undefined,
          personAuthor: catalogGuide
            ? { name: "Ali Ahmed", url: absoluteUrl("/about") }
            : undefined,
        })}
      />
      {content?.steps.length && !catalogGuide ? (
        <JsonLd
          data={howToJsonLd({
            name: content.stepsHeading,
            description: guide.description,
            path: guide.route,
            steps: content.steps.map((step) => ({ name: step.title, text: step.body })),
            toolName: relatedTools[0]?.name,
            stepAnchors: true,
          })}
        />
      ) : null}
      {catalogGuide ? (
        <JsonLd data={faqJsonLd(freeDigitalToolsFaqs())} />
      ) : content?.faqs.length ? (
        <JsonLd data={faqJsonLd(content.faqs)} />
      ) : null}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: guide.title },
        ]}
      />
      {catalogGuide ? (
        <FreeDigitalToolsArticle
          route={guide.route}
          pageTitle={FREE_DIGITAL_TOOLS_META_TITLE}
          published={dates.published}
          modified={dates.modified}
        />
      ) : content ? (
        <GuideArticle
          title={guide.title}
          pageTitle={article.metaTitle || guide.title}
          route={guide.route}
          category={category}
          content={content}
          published={dates.published}
          modified={dates.modified}
        />
      ) : (
        <article className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg leading-7 text-muted-foreground">
            {guide.description}
          </p>
          <ShareCardImage route={guide.route} title={article.metaTitle || guide.title} />
        </article>
      )}
      <RelatedTools tools={relatedTools} />
      {relatedGuides.length > 0 ? (
        <section aria-labelledby="related-guides-heading" className="mt-14">
          <h2
            id="related-guides-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Related guides
          </h2>
          <ul className="mt-4 space-y-2">
            {relatedGuides.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.route}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Container>
  );
}
