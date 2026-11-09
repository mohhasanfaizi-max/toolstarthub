"use client";

import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { Tool } from "@/data/types";
import {
  getCategoryAccent,
  toolHighlightBullets,
} from "@/lib/category-accents";
import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/cn";

type HomeToolCardProps = {
  tool: Tool;
  prominent?: boolean;
};

export function HomeToolCard({ tool, prominent = false }: HomeToolCardProps) {
  const { messages } = useI18n();
  const categoryName = messages.categoryNames[tool.category];
  const accent = getCategoryAccent(tool.category);
  const highlights = toolHighlightBullets(tool);

  return (
    <article
      className={cn(
        "home-card group flex h-full flex-col rounded-[1.15rem] border bg-card p-5 shadow-[0_1px_2px_rgb(15_39_68/0.04),0_10px_28px_rgb(15_39_68/0.06)]",
        accent.border,
        accent.hover,
        prominent && "ring-1 ring-accent/10",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-[0.85rem]",
            accent.tile,
          )}
        >
          <Icon name={tool.icon} className="size-5" />
        </span>
        {tool.featured ? (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            {messages.card.popular}
          </span>
        ) : tool.new ? (
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {messages.card.new}
          </span>
        ) : null}
      </div>
      <h3
        className={cn(
          "mt-4 text-base font-bold tracking-tight",
          accent.title,
        )}
      >
        <Link href={tool.route} className="hover:opacity-90">
          {tool.name}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {tool.description}
      </p>
      {highlights.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs leading-5 text-[#3d4f66] dark:text-muted-foreground"
            >
              <Icon
                name="check"
                className={cn("mt-0.5 size-3.5 shrink-0", accent.check)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {categoryName ? (
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {categoryName}
        </p>
      ) : null}
      <Link
        href={tool.route}
        className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform group-hover:translate-y-[-1px]"
      >
        {messages.card.openTool}
        <Icon
          name="arrow-right"
          className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
        />
      </Link>
    </article>
  );
}
