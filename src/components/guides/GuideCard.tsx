import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { Guide } from "@/data/types";
import { cn } from "@/lib/cn";

type GuideCardProps = {
  guide: Guide;
  headingAs?: "h2" | "h3";
  className?: string;
};

export function GuideCard({
  guide,
  headingAs: Heading = "h3",
  className,
}: GuideCardProps) {
  return (
    <Link
      href={guide.route}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgb(15_39_68/0.04),0_8px_24px_rgb(15_39_68/0.05)] transition-colors hover:border-accent/30 hover:bg-accent-soft/40",
        className,
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-accent">
        Guide
      </p>
      <Heading className="mt-2 text-base font-semibold text-foreground">
        {guide.title}
      </Heading>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {guide.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Read guide
        <Icon
          name="arrow-right"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
