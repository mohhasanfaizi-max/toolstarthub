import { Button } from "@/components/ui/Button";
import type { Tool } from "@/data/types";

type ToolPlaceholderProps = {
  tool: Tool;
};

export function ToolPlaceholder({ tool }: ToolPlaceholderProps) {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-muted/60 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-foreground">
        This workspace could not be loaded
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
        {tool.name} is listed in the catalog, but its interactive workspace is
        unavailable in this build. Try another tool in the same category.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/tools" variant="secondary">
          Browse other tools
        </Button>
        <Button href={`/categories/${tool.category}`} variant="ghost">
          View category
        </Button>
      </div>
    </div>
  );
}
