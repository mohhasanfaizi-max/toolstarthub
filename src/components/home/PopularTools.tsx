import { HomeHeading } from "@/components/home/HomeHeading";
import { HomeToolCard } from "@/components/home/HomeToolCard";
import { Section } from "@/components/ui/Section";
import { localizePath, type Locale } from "@/i18n/config";
import { getMessages, getTool } from "@/i18n/server";

const popularSlugs = [
  "pdf-to-jpg",
  "pdf-to-text",
  "image-compressor",
  "markdown-to-html",
  "json-formatter",
  "percentage-calculator",
] as const;

export function PopularTools({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  const tools = popularSlugs.flatMap((slug) => {
    const tool = getTool(slug, locale);
    return tool ? [tool] : [];
  });

  return (
    <Section
      id="popular-tools"
      className="scroll-mt-20 !py-14 sm:!py-16 lg:!py-20"
      ariaLabelledby="popular-tools-heading"
    >
      <HomeHeading
        id="popular-tools-heading"
        title={t.popularTitle}
        description={t.popularDescription}
        href={localizePath("/tools", locale)}
        linkLabel={t.viewAllTools}
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <HomeToolCard key={tool.slug} tool={tool} prominent />
        ))}
      </div>
    </Section>
  );
}
