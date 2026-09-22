import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/icons/Icon";
import { FavoriteButton } from "@/components/tools/FavoriteButton";
import { getToolCategory } from "@/data/tools";
import type { Tool } from "@/data/types";
import { cn } from "@/lib/cn";

type ToolCardProps = {
  tool: Tool;
  headingAs?: "h2" | "h3";
  className?: string;
  showFavorite?: boolean;
};

export function ToolCard({
  tool,
  headingAs: Heading = "h3",
  className,
  showFavorite = true,
}: ToolCardProps) {
  const category = getToolCategory(tool);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgb(15_39_68/0.04),0_8px_24px_rgb(15_39_68/0.05)] transition-colors hover:border-accent/30 hover:bg-accent-soft/40",
        className,
      )}
    >
      <Link
        href={tool.route}
        className="flex h-full flex-col p-5 pr-14"
      >
        <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon name={tool.icon} className="size-5" />
        </span>
        <Heading className="mt-4 text-base font-semibold text-foreground">
          {tool.name}
        </Heading>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {category ? <Badge tone="accent">{category.name}</Badge> : null}
          {tool.new ? <Badge tone="new">New</Badge> : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {tool.description}
        </p>
      </Link>
      {showFavorite ? (
        <div className="absolute right-2 top-2">
          <FavoriteButton slug={tool.slug} name={tool.name} />
        </div>
      ) : null}
    </article>
  );
}
