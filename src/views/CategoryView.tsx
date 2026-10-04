import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { ToolCard } from "@/components/tools/ToolCard";
import { RelatedGuides } from "@/components/guides/RelatedGuides";
import { categories } from "@/data/categories";
import { relatedCategorySlugs } from "@/data/discovery";
import { getGuidesByCategory } from "@/data/guides";
import type { Category } from "@/data/types";
import {
  formatMessage,
  formatPlural,
  localizePath,
  type Locale,
} from "@/i18n/config";
import {
  getCategory,
  getMessages,
  getTool,
  getToolsInCategory,
} from "@/i18n/server";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";
import { categoryMetaDescriptions } from "@/data/page-meta";

export function categoryStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function categoryMetadata(locale: Locale, slug: string) {
  const category = getCategory(slug, locale);
  if (!category) {
    return {};
  }
  const t = getMessages(locale).meta;
  const englishRoute = `/categories/${category.slug}`;
  return createPageMetadata({
    title: formatMessage(t.categoryTitle, { name: category.name }),
    description:
      locale === "en"
        ? categoryMetaDescriptions[category.slug]
        : category.shortDescription,
    path: englishRoute,
    locale,
    hreflang: true,
    // Share images are generated once per page in English and reused.
    shareImage: {
      route: englishRoute,
      alt: formatMessage(t.categoryShareAlt, { name: category.name }),
    },
  });
}

export function CategoryView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const category = getCategory(slug, locale);
  if (!category) {
    notFound();
  }
  const messages = getMessages(locale);
  const b = messages.breadcrumbs;
  const t = messages.category;
  const home = localizePath("/", locale);
  const categoriesPath = localizePath("/categories", locale);

  const categoryTools = getToolsInCategory(category.slug, locale);
  const startingTools = category.startingSlugs.flatMap((item) => {
    const tool = getTool(item, locale);
    return tool ? [tool] : [];
  });
  const relatedCategories = relatedCategorySlugs(category.slug)
    .map((item) => getCategory(item, locale))
    .filter((item): item is Category => item !== undefined);
  const relatedGuides =
    locale === "en" ? getGuidesByCategory(category.slug) : [];

  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: b.home, path: home },
          { name: b.categories, path: categoriesPath },
          { name: category.name, path: category.route },
        ])}
      />
      <JsonLd
        data={itemListJsonLd(
          category.name,
          categoryTools.map((tool) => ({ name: tool.name, path: tool.route })),
        )}
      />
      <Breadcrumbs
        label={b.label}
        items={[
          { name: b.home, href: home },
          { name: b.categories, href: categoriesPath },
          { name: category.name },
        ]}
      />
      <PageHeader
        className="mt-6"
        title={category.name}
        description={category.description}
      >
        <p className="mt-3 text-sm text-muted-foreground">
          {formatPlural(locale, categoryTools.length, t.pageCount)}
        </p>
      </PageHeader>
      <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
        <p>{category.intro}</p>
        <p>{category.audience}</p>
      </div>
      {startingTools.length > 0 ? (
        <section aria-labelledby="starting-points-heading" className="mt-8">
          <h2
            id="starting-points-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {t.starting}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {startingTools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={tool.route}
                  className="block rounded-2xl border border-border bg-card px-4 py-3 hover:border-accent/40"
                >
                  <span className="font-medium text-foreground">
                    {tool.name}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                    {tool.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {categoryTools.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
          {t.none}
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} headingAs="h2" />
          ))}
        </div>
      )}
      {relatedGuides.length > 0 ? (
        <RelatedGuides guides={relatedGuides} />
      ) : null}
      <section aria-labelledby="related-categories-heading" className="mt-14">
        <h2
          id="related-categories-heading"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {t.related}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCategories.map((item) => (
            <CategoryCard
              key={item.slug}
              category={item}
              locale={locale}
              headingAs="h3"
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
