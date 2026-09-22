import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { getCategoryBySlug } from "@/data/categories";
import { getGuideContent } from "@/data/guide-content";
import { getGuideBySlug, guides } from "@/data/guides";
import { getToolBySlug } from "@/data/tools";
import type { Tool } from "@/data/types";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  createPageMetadata,
  faqJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createPageMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.route,
  });
}

export default async function GuidePage({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const category = getCategoryBySlug(guide.category);
  const content = getGuideContent(guide.slug);
  const relatedTools = guide.relatedToolSlugs
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((tool): tool is Tool => tool !== undefined);
  const relatedGuides = guides.filter((item) => item.slug !== guide.slug).slice(0, 4);

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
        data={articleJsonLd({
          title: guide.title,
          description: guide.description,
          path: guide.route,
        })}
      />
      {content?.faqs.length ? <JsonLd data={faqJsonLd(content.faqs)} /> : null}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: guide.title },
        ]}
      />
      {content ? (
        <GuideArticle
          title={guide.title}
          category={category}
          content={content}
        />
      ) : (
        <article className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg leading-7 text-muted-foreground">
            {guide.description}
          </p>
        </article>
      )}
      <RelatedTools tools={relatedTools} />
      {relatedGuides.length > 0 ? (
        <section aria-labelledby="related-guides-heading" className="mt-14">
          <h2
            id="related-guides-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Other guides
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
