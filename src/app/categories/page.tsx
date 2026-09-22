import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { categories } from "@/data/categories";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Categories",
  description:
    "Explore ToolsTartHub by category: calculators, text tools, developer tools, image tools, and SEO utilities.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <Container className="py-10 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Categories" }]}
      />
      <PageHeader
        className="mt-6"
        title="Categories"
        description="Choose a category to find the right tool faster."
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            headingAs="h2"
          />
        ))}
      </div>
    </Container>
  );
}
