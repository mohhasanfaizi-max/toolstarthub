import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { Category } from "@/data/types";
import { getToolsByCategory } from "@/data/tools";
import { cn } from "@/lib/cn";

type CategoryCardProps = {
  category: Category;
  headingAs?: "h2" | "h3";
  className?: string;
};

export function CategoryCard({
  category,
  headingAs: Heading = "h3",
  className,
}: CategoryCardProps) {
  const count = getToolsByCategory(category.slug).length;

  return (
    <Link
      href={category.route}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgb(15_39_68/0.04),0_8px_24px_rgb(15_39_68/0.05)] transition-colors hover:border-accent/30 hover:bg-accent-soft/40",
        className,
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Icon name={category.icon} className="size-5" />
      </span>
      <Heading className="mt-4 text-lg font-semibold text-foreground">
        {category.name}
      </Heading>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {count} tool{count === 1 ? "" : "s"}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {category.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Browse tools
        <Icon
          name="arrow-right"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
