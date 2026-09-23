import { HomeHeading } from "@/components/home/HomeHeading";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { Section } from "@/components/ui/Section";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <Section className="!py-14 sm:!py-16 lg:!py-20" ariaLabelledby="explore-categories-heading">
      <HomeHeading
        id="explore-categories-heading"
        title="Browse by category"
        description="Calculators, text, developer utilities, images and PDFs, and website tools."
        href="/categories"
        linkLabel="All categories"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            className="home-card h-full rounded-xl"
          />
        ))}
      </div>
    </Section>
  );
}
