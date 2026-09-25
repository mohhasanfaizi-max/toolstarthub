import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdSlot } from "@/components/ads/AdSlot";
import { RelatedGuides } from "@/components/guides/RelatedGuides";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { FavoriteButton } from "@/components/tools/FavoriteButton";
import { RecentTracker } from "@/components/tools/RecentTracker";
import { ToolDetails, getFaqsForTool } from "@/components/tools/ToolDetails";
import { ToolPrivacyNote } from "@/components/tools/ToolPrivacyNote";
import { ToolWorkspace } from "@/components/tools/ToolWorkspace";
import { getCategoryBySlug } from "@/data/categories";
import { getGuidesForTool } from "@/data/guides";
import { getToolQuickAnswer } from "@/data/tool-answers";
import {
  getRelatedTools,
  getToolBySlug,
  tools,
} from "@/data/tools";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqJsonLd,
  toolJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  return createPageMetadata({
    title: tool.metaTitle ?? tool.name,
    description: tool.description,
    path: tool.route,
    keywords: tool.keywords,
  });
}

export default async function ToolPage({
  params,
}: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getRelatedTools(tool);
  const relatedGuides = getGuidesForTool(tool.slug);
  const faqs = getFaqsForTool(tool.slug, tool.name);
  const quickAnswer = getToolQuickAnswer(tool.slug, tool.name, tool.description);

  return (
    <Container className="py-10 sm:py-14">
      <RecentTracker slug={tool.slug} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          ...(category
            ? [{ name: category.name, path: category.route }]
            : []),
          { name: tool.name, path: tool.route },
        ])}
      />
      <JsonLd
        data={toolJsonLd({
          name: tool.name,
          description: tool.description,
          path: tool.route,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          ...(category
            ? [{ name: category.name, href: category.route }]
            : []),
          { name: tool.name },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          {category ? (
            <Link href={category.route} className="rounded-full">
              <Badge tone="accent">{category.name}</Badge>
              <span className="sr-only"> category</span>
            </Link>
          ) : null}
          {tool.new ? <Badge tone="new">New</Badge> : null}
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {tool.name}
          </h1>
          <FavoriteButton slug={tool.slug} name={tool.name} />
        </div>
        <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
          {tool.description}
        </p>
        <section aria-labelledby="quick-answer-heading" className="mt-5">
          <h2 id="quick-answer-heading" className="text-sm font-semibold text-foreground">
            {`What is ${tool.name}?`}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{quickAnswer}</p>
        </section>
      </header>

      <div className="mt-8">
        <ToolWorkspace tool={tool} />
      </div>
      <AdSlot placement="tool-intro" />

      <ToolPrivacyNote slug={tool.slug} />
      <ToolDetails slug={tool.slug} toolName={tool.name} />
      <RelatedTools tools={relatedTools} />
      <RelatedGuides guides={relatedGuides} />
    </Container>
  );
}
