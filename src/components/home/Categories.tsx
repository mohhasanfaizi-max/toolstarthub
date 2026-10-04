import { HomeHeading } from "@/components/home/HomeHeading";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { Section } from "@/components/ui/Section";
import { localizePath, type Locale } from "@/i18n/config";
import { getCategories, getMessages } from "@/i18n/server";

export function Categories({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  return (
    <Section
      className="!py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="explore-categories-heading"
    >
      <HomeHeading
        id="explore-categories-heading"
        title={t.categoriesTitle}
        description={t.categoriesDescription}
        href={localizePath("/categories", locale)}
        linkLabel={t.allCategories}
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {getCategories(locale).map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            locale={locale}
            className="home-card h-full rounded-xl"
          />
        ))}
      </div>
    </Section>
  );
}
