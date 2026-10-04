"use client";

import { useState } from "react";
import { HomeToolCard } from "@/components/home/HomeToolCard";
import type { Tool } from "@/data/types";
import { useI18n } from "@/i18n/client";

const filters = [
  "all",
  "pdf",
  "images",
  "text-tools",
  "developer-tools",
  "calculators",
  "seo-utilities",
  "ai-tools",
] as const;

type FilterId = (typeof filters)[number];

function isPdfTool(tool: Tool) {
  return /pdf/i.test(tool.slug);
}

function matches(tool: Tool, filter: FilterId) {
  if (filter === "all") {
    return true;
  }
  if (filter === "pdf") {
    return isPdfTool(tool);
  }
  if (filter === "images") {
    return tool.category === "image-tools" && !isPdfTool(tool);
  }
  if (
    filter === "text-tools" ||
    filter === "developer-tools" ||
    filter === "calculators" ||
    filter === "seo-utilities" ||
    filter === "ai-tools"
  ) {
    return tool.category === filter;
  }
  return false;
}

export function HomeToolBrowser({ tools }: { tools: Tool[] }) {
  const { messages } = useI18n();
  const t = messages.home;
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = tools.filter((tool) => matches(tool, filter));

  return (
    <div>
      <div
        className="flex min-w-0 gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label={t.filterAria}
      >
        {filters.map((id) => {
          const selected = filter === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={
                selected
                  ? "shrink-0 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground"
                  : "shrink-0 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              }
              onClick={() => setFilter(id)}
            >
              {t.filters[id]}
            </button>
          );
        })}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((tool) => (
          <HomeToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">{t.noToolsInGroup}</p>
      ) : null}
    </div>
  );
}
