import { ToolCard } from "@/components/tools/ToolCard";
import type { Tool } from "@/data/types";

type RelatedToolsProps = {
  tools: Tool[];
};

export function RelatedTools({ tools }: RelatedToolsProps) {
  if (tools.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-tools-heading" className="mt-14">
      <h2
        id="related-tools-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        Related tools
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
