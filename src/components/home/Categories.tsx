import { Section } from "@/components/ui/Section";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <Section
      className="bg-muted"
      ariaLabelledby="explore-categories-heading"
    >
      <h2
        id="explore-categories-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Explore Categories
      </h2>
      <p className="mt-2 max-w-xl text-muted-foreground">
        Browse tools by task, from calculators to developer utilities.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </Section>
  );
}
