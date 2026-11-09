import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/data/types";
import { formatNumber, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { cn } from "@/lib/cn";

type Stat = {
  icon: IconName;
  value: string;
  label: string;
};

/**
 * Compact facts strip for the tools hub — only real registry counts and
 * existing site truths (no invented numbers).
 */
export function ToolsStatsStrip({
  locale,
  toolCount,
  categoryCount,
}: {
  locale: Locale;
  toolCount: number;
  categoryCount: number;
}) {
  const messages = getMessages(locale);

  const stats: Stat[] = [
    {
      icon: "bolt",
      value: formatNumber(locale, toolCount),
      // Reuse the existing plural noun from category.cardCount templates.
      label: (
        (toolCount === 1
          ? messages.category.cardCount.one
          : undefined) ?? messages.category.cardCount.other
      )
        .replace("{count}", "")
        .trim() || (toolCount === 1 ? "tool" : "tools"),
    },
    {
      icon: "menu",
      value: formatNumber(locale, categoryCount),
      label: messages.footer.categories,
    },
    {
      icon: "shield",
      value: messages.home.trust[0],
      label: messages.home.trust[1],
    },
  ];

  return (
    <div
      className="mt-6 overflow-hidden rounded-[20px] border border-[#cfe0f8] bg-[linear-gradient(180deg,#eef4ff_0%,#f7faff_100%)] p-2 shadow-[0_1px_2px_rgb(15_39_68/0.04)] dark:border-[#1e3a8a]/70 dark:bg-[linear-gradient(180deg,#13203a_0%,#101827_100%)]"
      role="group"
      aria-label={messages.toolsPage.title}
    >
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        {stats.map((stat, index) => (
          <div
            key={`${stat.icon}-${stat.label}`}
            className={cn(
              "flex flex-1 items-center gap-3 px-4 py-3",
              index > 0 &&
                "border-t border-[#d7e4f6] sm:border-t-0 sm:border-s dark:border-[#243044]",
            )}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-sm dark:bg-[#3b82f6]">
              <Icon name={stat.icon} className="size-5 text-white" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold tracking-tight text-[#1e2a4a] dark:text-foreground">
                {stat.value}
              </p>
              <p className="truncate text-xs font-medium text-[#6b7c90] dark:text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
