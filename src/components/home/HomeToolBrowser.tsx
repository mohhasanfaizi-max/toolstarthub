"use client";

import { useState } from "react";
import { HomeToolCard } from "@/components/home/HomeToolCard";
import type { Tool } from "@/data/types";

const filters = [
  { id: "all", label: "All" },
  { id: "pdf", label: "PDF" },
  { id: "images", label: "Images" },
  { id: "text-tools", label: "Text" },
  { id: "developer-tools", label: "Developer" },
  { id: "calculators", label: "Calculators" },
  { id: "seo-utilities", label: "Utilities" },
] as const;

type FilterId = (typeof filters)[number]["id"];

function isPdfTool(tool: Tool) {
  return /pdf/i.test(tool.slug) || /pdf/i.test(tool.name);
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
    filter === "seo-utilities"
  ) {
    return tool.category === filter;
  }
  return false;
}

export function HomeToolBrowser({ tools }: { tools: Tool[] }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = tools.filter((tool) => matches(tool, filter));

  return (
    <div>
      <div
        className="flex min-w-0 gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Filter tools"
      >
        {filters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={
                selected
                  ? "shrink-0 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground"
                  : "shrink-0 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              }
              onClick={() => setFilter(item.id)}
            >
              {item.label}
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
        <p className="mt-6 text-sm text-muted-foreground">No tools in this group.</p>
      ) : null}
    </div>
  );
}
