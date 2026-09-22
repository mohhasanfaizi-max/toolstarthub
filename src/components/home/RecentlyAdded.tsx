import { Section } from "@/components/ui/Section";
import { ToolCard } from "@/components/tools/ToolCard";
import { getNewTools } from "@/data/tools";

export function RecentlyAdded() {
  const tools = getNewTools();

  return (
    <Section className="bg-muted" ariaLabelledby="recently-added-heading">
      <h2
        id="recently-added-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Recently Added
      </h2>
      <p className="mt-2 max-w-xl text-muted-foreground">
        Fresh additions to the collection, ready to use as they launch.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </Section>
  );
}
