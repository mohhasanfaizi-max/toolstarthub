"use client";

import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ToolCardChecks } from "@/components/tools/ToolCardChecks";
import { ToolCardPreview } from "@/components/tools/ToolCardPreview";
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
  const subtitle = categoryName
    ? tool.featured
      ? `${categoryName} · ${messages.card.popular}`
      : tool.new
        ? `${categoryName} · ${messages.card.new}`
        : categoryName
    : tool.description;

  return (
    <article
      className={cn(
        "home-card group flex h-full flex-col rounded-[20px] border p-5 shadow-[0_2px_4px_rgb(15_39_68/0.04),0_12px_28px_rgb(15_39_68/0.07)]",
        accent.card,
        accent.border,
        accent.hover,
        prominent && "ring-1 ring-accent/10",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-[12px] shadow-sm",
            accent.tile,
          )}
        >
          <Icon name={tool.icon} className="size-5 text-white" />
        </span>
        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "text-[1.125rem] font-extrabold leading-snug tracking-tight sm:text-[1.25rem]",
              accent.title,
            )}
          >
            <Link href={tool.route} className="hover:opacity-90">
              {tool.name}
            </Link>
          </h3>
          <p className="mt-0.5 line-clamp-2 text-sm leading-5 text-[#6b7c90] dark:text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>

      <ToolCardPreview accent={accent} icon={tool.icon} />

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[#3d4f66] dark:text-muted-foreground">
        {tool.description}
      </p>

      <ToolCardChecks items={highlights} accent={accent} />

      <Link
        href={tool.route}
        className="mt-4 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-accent-foreground shadow-[0_8px_20px_rgb(37_99_235/0.28)] transition-transform group-hover:translate-y-[-1px] motion-reduce:group-hover:translate-y-0"
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
