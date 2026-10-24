"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

const FILTERS = [
  "All",
  "Tracking",
  "SEO",
  "Content",
  "AI",
  "Design",
  "PDF",
  "Calculators",
  "Security",
] as const;

type FilterName = (typeof FILTERS)[number];

type ToolCard = {
  category: string;
  slug: string;
  name: string;
  blurb: string;
};

export function ToolDirectory({ cards }: { cards: readonly ToolCard[] }) {
  const [filter, setFilter] = useState<FilterName>("All");
  const shown = filter === "All" ? cards : cards.filter((card) => card.category === filter);
  const countLabel =
    filter === "All"
      ? `Showing all ${cards.length} tools`
      : `Showing ${shown.length} ${filter} ${shown.length === 1 ? "tool" : "tools"}`;

  return (
    <div id="tool-directory" className="mt-5 scroll-mt-24">
      <div role="group" aria-label="Filter tools" className="flex flex-wrap gap-2">
        {FILTERS.map((name) => {
          const pressed = filter === name;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(name)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                pressed
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-foreground hover:bg-muted",
              )}
            >
              {name}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
        {countLabel}
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {shown.map((card) => (
          <li key={card.slug}>
            <Link
              href={`/tools/${card.slug}`}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgb(15_39_68/0.04),0_8px_24px_rgb(15_39_68/0.05)] transition-colors hover:border-accent/30 hover:bg-accent-soft/40"
            >
              <span className="text-xs font-medium text-accent">{card.category}</span>
              <span className="mt-1 font-medium text-foreground">{card.name}</span>
              <span className="mt-1 text-sm leading-6 text-muted-foreground">{card.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
