import Link from "next/link";
import { notFound } from "next/navigation";
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
import { LocalizedToolDetails } from "@/components/tools/LocalizedToolDetails";
import { ToolPrivacyNote } from "@/components/tools/ToolPrivacyNote";
import { ToolWorkspace } from "@/components/tools/ToolWorkspace";
import { getGuidesForTool } from "@/data/guides";
import { getToolQuickAnswer } from "@/data/tool-answers";
import { getToolBySlug, tools } from "@/data/tools";
import {
  formatMessage,
  isToolPageIndexable,
  localizePath,
  toolContentLocales,
  type Locale,
} from "@/i18n/config";
import {
  getCategory,
  getMessages,
  getRelatedToolsFor,
  getTool,
} from "@/i18n/server";
import { getLocalizedToolPage } from "@/i18n/localized-tool-content";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqJsonLd,
  toolJsonLd,
} from "@/lib/seo";

export function toolStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function toolMetadata(locale: Locale, slug: string) {
  const tool = getTool(slug, locale);
  if (!tool) {
    return {};
  }
  const englishRoute = getToolBySlug(slug)?.route ?? `/tools/${slug}`;
  const indexable = isToolPageIndexable(locale);
  const localizedPage = getLocalizedToolPage(slug, locale);
  return createPageMetadata({
    title: localizedPage?.metaTitle ?? tool.metaTitle ?? tool.name,
    description: tool.description,
    path: englishRoute,
    keywords: tool.keywords,
    locale,
    // Alternates only once at least one other language has full tool content.
    hreflang: indexable && toolContentLocales.length > 1,
    noIndexFollow: !indexable,
    shareImage: {
      route: englishRoute,
      alt: formatMessage(getMessages(locale).meta.toolShareAlt, {
        name: tool.name,
      }),
    },
  });
}

export function ToolView({ locale, slug }: { locale: Locale; slug: string }) {
  const tool = getTool(slug, locale);
  if (!tool) {
    notFound();
  }
  const messages = getMessages(locale);
  const b = messages.breadcrumbs;
  const t = messages.toolPage;
  const english = locale === "en";
  const fullContent = isToolPageIndexable(locale);
  const home = localizePath("/", locale);
  const toolsPath = localizePath("/tools", locale);

  const category = getCategory(tool.category, locale);
  const relatedTools = getRelatedToolsFor(tool, locale);
  const relatedGuides = english ? getGuidesForTool(tool.slug) : [];
  const englishTool = getToolBySlug(slug) ?? tool;
  const faqs = getFaqsForTool(tool.slug, englishTool.name);
  // Tools that ship their own translations (e.g. CPS Test) show them here.
  const localizedPage = getLocalizedToolPage(tool.slug, locale);
  const quickAnswer =
    localizedPage?.quickAnswer ??
    (fullContent
      ? getToolQuickAnswer(tool.slug, tool.name, tool.description)
      : null);

  return (
    <Container className="py-10 sm:py-14">
      <RecentTracker slug={tool.slug} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: b.home, path: home },
          { name: b.tools, path: toolsPath },
          ...(category ? [{ name: category.name, path: category.route }] : []),
          { name: tool.name, path: tool.route },
        ])}
      />
      <JsonLd
        data={toolJsonLd({
          name: tool.name,
          description: tool.description,
          path: tool.route,
          locale,
        })}
      />
      {fullContent ? (
        <JsonLd data={faqJsonLd(localizedPage?.content.faqs ?? faqs)} />
      ) : null}
      <Breadcrumbs
        label={b.label}
        items={[
          { name: b.home, href: home },
          { name: b.tools, href: toolsPath },
          ...(category ? [{ name: category.name, href: category.route }] : []),
          { name: tool.name },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          {category ? (
            <Link href={category.route} className="rounded-full">
              <Badge tone="accent">{category.name}</Badge>
              <span className="sr-only"> {t.categorySr}</span>
            </Link>
          ) : null}
          {tool.new ? (
            <Badge tone="new">{messages.client.card.new}</Badge>
          ) : null}
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
        {quickAnswer ? (
          <section aria-labelledby="quick-answer-heading" className="mt-5">
            <h2
              id="quick-answer-heading"
              className="text-sm font-semibold text-foreground"
            >
              {formatMessage(t.whatIs, { name: tool.name })}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {quickAnswer}
            </p>
          </section>
        ) : null}
      </header>

      {/* Workspace labels are still English (PART 1B), so mark them as such. */}
      <div
        className="mt-8"
        lang={fullContent ? undefined : "en"}
        dir={fullContent ? undefined : "ltr"}
      >
        <ToolWorkspace tool={tool} />
      </div>
      <AdSlot placement="tool-intro" />

      <ToolPrivacyNote slug={tool.slug} locale={locale} />
      {localizedPage ? (
        <LocalizedToolDetails page={localizedPage} />
      ) : fullContent ? (
        <ToolDetails slug={tool.slug} toolName={tool.name} />
      ) : (
        <>
          <p className="mt-10 max-w-3xl rounded-2xl border border-border bg-muted px-4 py-3 text-sm leading-6 text-muted-foreground">
            {t.englishContent}
          </p>
          <div lang="en" dir="ltr">
            <ToolDetails slug={tool.slug} toolName={englishTool.name} />
          </div>
        </>
      )}
      <RelatedTools tools={relatedTools} heading={t.relatedTools} />
      {relatedGuides.length > 0 ? (
        <RelatedGuides guides={relatedGuides} />
      ) : null}
    </Container>
  );
}
