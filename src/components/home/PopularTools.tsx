import { HomeHeading } from "@/components/home/HomeHeading";
import { HomeToolCard } from "@/components/home/HomeToolCard";
import { Section } from "@/components/ui/Section";
import { getToolBySlug } from "@/data/tools";

const popularSlugs = [
  "pdf-to-jpg",
  "pdf-to-text",
  "image-compressor",
  "markdown-to-html",
  "json-formatter",
  "percentage-calculator",
] as const;

export function PopularTools() {
  const tools = popularSlugs.flatMap((slug) => {
    const tool = getToolBySlug(slug);
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
        title="Popular Tools"
        description="Open a tool people use for files, images, text, and everyday calculations."
        href="/tools"
        linkLabel="View all tools"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <HomeToolCard key={tool.slug} tool={tool} prominent />
        ))}
      </div>
    </Section>
  );
}
