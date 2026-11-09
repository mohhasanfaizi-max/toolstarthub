import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ToolCardChecks } from "@/components/tools/ToolCardChecks";
import type { Category, Tool } from "@/data/types";
import {
  getCategoryAccent,
  toolHighlightBullets,
} from "@/lib/category-accents";
import { formatNumber, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { cn } from "@/lib/cn";

type HeroAsideProps = {
  locale: Locale;
  featured: Tool;
  gridTools: Tool[];
  categoryItems: Array<{ category: Category; count: number }>;
  /** When true, render only the featured card (mobile below CTAs). */
  featuredOnly?: boolean;
  className?: string;
};

export function HeroAside({
  locale,
  featured,
  gridTools,
  categoryItems,
  featuredOnly = false,
  className,
}: HeroAsideProps) {
  const messages = getMessages(locale);
  const featuredAccent = getCategoryAccent(featured.category);
  const highlights = toolHighlightBullets(featured);
  const categoryName = messages.client.categoryNames[featured.category];
  const oneLine =
    featured.description.split(/[.;]/)[0]?.trim() || featured.description;

  return (
    <aside
      className={cn(
        "flex h-full min-h-0 flex-col gap-3",
        className,
      )}
      aria-label={messages.home.popularTitle}
    >
      {/* Featured tool */}
      <article
        className={cn(
          "relative flex flex-col rounded-[20px] border p-4 shadow-[0_2px_4px_rgb(15_39_68/0.04),0_12px_28px_rgb(15_39_68/0.08)] sm:p-5",
          featuredAccent.card,
          featuredAccent.border,
        )}
      >
        <div className="absolute end-3 top-3 flex size-8 items-center justify-center rounded-lg bg-white/90 text-accent shadow-sm dark:bg-[#0f172a]/80">
          <span className="text-sm font-extrabold" aria-hidden="true">
            ★
          </span>
          <span className="sr-only">{messages.client.card.popular}</span>
        </div>
        <div className="flex items-start gap-3 pe-8">
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-[12px] text-white shadow-sm",
              featuredAccent.tile,
            )}
          >
            <Icon name={featured.icon} className="size-5 text-white" />
          </span>
          <div className="min-w-0">
            <h2
              className={cn(
                "text-lg font-extrabold leading-snug tracking-tight",
                featuredAccent.title,
              )}
            >
              <Link href={featured.route} className="hover:opacity-90">
                {featured.name}
              </Link>
            </h2>
            {categoryName ? (
              <p className="mt-0.5 text-xs font-medium text-[#6b7c90] dark:text-muted-foreground">
                {categoryName}
              </p>
            ) : null}
          </div>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#3d4f66] dark:text-muted-foreground">
          {oneLine}
        </p>
        <ToolCardChecks items={highlights} accent={featuredAccent} />
        <Link
          href={featured.route}
          className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-accent-foreground shadow-[0_8px_20px_rgb(37_99_235/0.28)] transition-transform hover:translate-y-[-1px] motion-reduce:hover:translate-y-0"
        >
          {messages.client.card.openTool}
          <Icon
            name="arrow-right"
            className="size-4 rtl:-scale-x-100"
          />
        </Link>
      </article>

      {featuredOnly ? null : (
        <>
          {/* Popular tools grid */}
          {gridTools.length > 0 ? (
            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">
                {messages.home.popularLabel}
              </p>
            <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {gridTools.map((tool) => {
                const accent = getCategoryAccent(tool.category);
                const cat = messages.client.categoryNames[tool.category];
                return (
                  <li key={tool.slug} className="min-w-0">
                    <Link
                      href={tool.route}
                      className={cn(
                        "flex h-full items-start gap-2.5 rounded-2xl border p-3 shadow-[0_1px_2px_rgb(15_39_68/0.04)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgb(15_39_68/0.08)] motion-reduce:hover:translate-y-0",
                        accent.card,
                        accent.border,
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-xl text-white",
                          accent.tile,
                        )}
                      >
                        <Icon name={tool.icon} className="size-4 text-white" />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block truncate text-sm font-bold leading-snug",
                            accent.title,
                          )}
                        >
                          {tool.name}
                        </span>
                        {cat ? (
                          <span className="mt-0.5 block truncate text-[11px] font-medium text-[#6b7c90] dark:text-muted-foreground">
                            {cat}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
          ) : null}

          {/* Browse by category */}
          {categoryItems.length > 0 ? (
            <div className="mt-auto rounded-2xl border border-[#cfe0f8] bg-white/75 p-3 dark:border-[#1e3a8a]/70 dark:bg-[#101827]/75">
              <p className="text-xs font-semibold tracking-wide text-[#1e2a4a] dark:text-foreground">
                {messages.home.categoriesTitle}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {categoryItems.map(({ category, count }) => {
                  const accent = getCategoryAccent(category.slug);
                  return (
                    <li key={category.slug}>
                      <Link
                        href={category.route}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                          accent.card,
                          accent.border,
                          accent.title,
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-5 items-center justify-center rounded-md text-white",
                            accent.tile,
                          )}
                        >
                          <Icon
                            name={category.icon}
                            className="size-3 text-white"
                          />
                        </span>
                        <span className="max-w-[7.5rem] truncate">
                          {category.name}
                        </span>
                        <span className="tabular-nums text-[10px] font-semibold opacity-80">
                          {formatNumber(locale, count)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </>
      )}
    </aside>
  );
}
