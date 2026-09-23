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
  showAction?: boolean;
};

export function ToolCard({
  tool,
  headingAs: Heading = "h3",
  className,
  showFavorite = true,
  showAction = false,
}: ToolCardProps) {
  const category = getToolCategory(tool);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgb(15_39_68/0.04),0_8px_24px_rgb(15_39_68/0.05)] transition-colors hover:border-accent/30 hover:bg-accent-soft/40",
        className,
      )}
    >
      <Link
        href={tool.route}
        className={cn(
          "flex h-full flex-col pr-14",
          showAction ? "pt-6 pb-6 pl-6" : "pt-5 pb-5 pl-5",
        )}
      >
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent",
            showAction && "transition-transform group-hover:-translate-y-0.5",
          )}
        >
          <Icon name={tool.icon} className="size-5" />
        </span>
        <Heading className="mt-4 text-base font-semibold text-foreground">
          {tool.name}
        </Heading>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {category ? <Badge tone="accent">{category.name}</Badge> : null}
          {tool.new ? <Badge tone="new">New</Badge> : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {tool.description}
        </p>
        {showAction ? (
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Open tool
            <Icon
              name="arrow-right"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        ) : null}
      </Link>
      {showFavorite ? (
        <div className="absolute right-2 top-2">
          <FavoriteButton slug={tool.slug} name={tool.name} />
        </div>
      ) : null}
    </article>
  );
}
