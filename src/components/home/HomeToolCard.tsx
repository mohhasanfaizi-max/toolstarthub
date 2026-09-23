import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { getToolCategory } from "@/data/tools";
import type { Tool } from "@/data/types";
import { cn } from "@/lib/cn";

type HomeToolCardProps = {
  tool: Tool;
  prominent?: boolean;
};

export function HomeToolCard({ tool, prominent = false }: HomeToolCardProps) {
  const category = getToolCategory(tool);

  return (
    <article
      className={cn(
        "home-card group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-[0_1px_2px_rgb(15_39_68/0.04)]",
        prominent && "border-accent/20 bg-accent-soft/30",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Icon name={tool.icon} className="size-5" />
        </span>
        {tool.featured ? (
          <span className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent">
            Popular
          </span>
        ) : tool.new ? (
          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            New
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
        <Link href={tool.route} className="hover:text-accent">
          {tool.name}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {tool.description}
      </p>
      {category ? (
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {category.name}
        </p>
      ) : null}
      <Link
        href={tool.route}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
      >
        Open tool
        <Icon
          name="arrow-right"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
