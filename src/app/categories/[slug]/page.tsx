import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { ToolCard } from "@/components/tools/ToolCard";
import { RelatedGuides } from "@/components/guides/RelatedGuides";
import {
  categories,
  getCategoryBySlug,
} from "@/data/categories";
import { relatedCategorySlugs } from "@/data/discovery";
import { getGuidesByCategory } from "@/data/guides";
import { getToolBySlug, getToolsByCategory } from "@/data/tools";
import type { Category } from "@/data/types";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  itemListJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return createPageMetadata({
    title: `${category.name} – Free Online Tools`,
    description: category.shortDescription,
    path: category.route,
  });
}

export default async function CategoryPage({
  params,
}: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(category.slug);
  const startingTools = category.startingSlugs.flatMap((slug) => {
    const tool = getToolBySlug(slug);
    return tool ? [tool] : [];
  });
  const relatedCategories = relatedCategorySlugs(category.slug)
    .map((item) => getCategoryBySlug(item))
    .filter((item): item is Category => item !== undefined);
  const relatedGuides = getGuidesByCategory(category.slug);

  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
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
        items={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/categories" },
          { name: category.name },
        ]}
      />
      <PageHeader
        className="mt-6"
        title={category.name}
        description={category.description}
      >
        <p className="mt-3 text-sm text-muted-foreground">
          {`${categoryTools.length} ${categoryTools.length === 1 ? "tool" : "tools"} in this category.`}
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
            Useful starting points
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {startingTools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={tool.route}
                  className="block rounded-2xl border border-border bg-card px-4 py-3 hover:border-accent/40"
                >
                  <span className="font-medium text-foreground">{tool.name}</span>
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
          No tools in this category yet.
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
          Related categories
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCategories.map((item) => (
            <CategoryCard key={item.slug} category={item} headingAs="h3" />
          ))}
        </div>
      </section>
    </Container>
  );
}
