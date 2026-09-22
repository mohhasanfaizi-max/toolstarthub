import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ToolCard } from "@/components/tools/ToolCard";
import { getFeaturedTools } from "@/data/tools";
import { Icon } from "@/components/icons/Icon";

export function PopularTools() {
  const tools = getFeaturedTools();

  return (
    <Section ariaLabelledby="popular-tools-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="popular-tools-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Popular Tools
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Start with the most requested calculators, text tools and developer
            utilities.
          </p>
        </div>
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          View all tools
          <Icon name="arrow-right" className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </Section>
  );
}
