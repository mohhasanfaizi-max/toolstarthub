import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { localizePath, type Locale } from "@/i18n/config";
import { getCategories, getMessages } from "@/i18n/server";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export function categoriesMetadata(locale: Locale) {
  const t = getMessages(locale).meta;
  return createPageMetadata({
    title: t.categoriesTitle,
    description: t.categoriesDescription,
    path: "/categories",
    locale,
    hreflang: true,
  });
}

export function CategoriesView({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const b = messages.breadcrumbs;
  const home = localizePath("/", locale);
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: b.home, path: home },
          { name: b.categories, path: localizePath("/categories", locale) },
        ])}
      />
      <Breadcrumbs
        label={b.label}
        items={[{ name: b.home, href: home }, { name: b.categories }]}
      />
      <PageHeader
        className="mt-6"
        title={messages.categoriesPage.title}
        description={messages.categoriesPage.description}
      />
      <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
        {messages.categoriesPage.body}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {getCategories(locale).map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            locale={locale}
            headingAs="h2"
          />
        ))}
      </div>
    </Container>
  );
}
