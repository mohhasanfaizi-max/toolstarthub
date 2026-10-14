"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { FavoriteButton } from "@/components/tools/FavoriteButton";
import { ToolSearch } from "@/components/tools/ToolSearch";
import { categories } from "@/data/categories";
import { popularToolSlugs } from "@/data/popular-tool-slugs";
import { getToolBySlug, getToolSlugSet } from "@/data/tools";
import type { CategorySlug, IconName, Tool } from "@/data/types";
import { useI18n } from "@/i18n/client";
import { pwaCopy } from "@/i18n/pwa-en";
import { isStandaloneApp, subscribeStandalone } from "@/lib/pwa/standalone";
import { getLocalStorage } from "@/lib/storage/safe-storage";
import { RECENTS_EVENT, readRecentTools } from "@/lib/storage/recents";

const validSlugs = getToolSlugSet();

const shortcutOrder: Array<{ slug: CategorySlug; icon: IconName; label?: string }> = [
  { slug: "calculators", icon: "calculator" },
  { slug: "image-tools", icon: "image" },
  { slug: "text-tools", icon: "text" },
  { slug: "developer-tools", icon: "code" },
  { slug: "seo-utilities", icon: "search", label: pwaCopy.seoShortcut },
  { slug: "ai-tools", icon: "bolt" },
];

function subscribeRecents(callback: () => void) {
  window.addEventListener(RECENTS_EVENT, callback);
  return () => window.removeEventListener(RECENTS_EVENT, callback);
}

function recentsSnapshot() {
  return JSON.stringify(readRecentTools(getLocalStorage(), validSlugs));
}

function emptyRecentsSnapshot() {
  return "[]";
}

function CompactTool({ tool }: { tool: Tool }) {
  const { messages } = useI18n();
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-3 shadow-[0_1px_2px_rgb(15_39_68/0.04)]">
      <Link href={tool.route} className="flex min-w-0 flex-1 items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon name={tool.icon} className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-foreground">{tool.name}</span>
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
            {messages.categoryNames[tool.category]}
          </span>
        </span>
      </Link>
      <FavoriteButton slug={tool.slug} name={tool.name} />
    </div>
  );
}

export function InstalledHome() {
  const { href, messages } = useI18n();
  const active = useSyncExternalStore(subscribeStandalone, isStandaloneApp, () => false);
  const recentsJson = useSyncExternalStore(subscribeRecents, recentsSnapshot, emptyRecentsSnapshot);

  if (!active) {
    return null;
  }

  const recents = JSON.parse(recentsJson) as Array<{ slug: string }>;
  const recentTools = recents.flatMap((item) => {
    const tool = getToolBySlug(item.slug);
    return tool ? [tool] : [];
  });
  const popularTools = popularToolSlugs.flatMap((slug) => {
    const tool = getToolBySlug(slug);
    return tool ? [tool] : [];
  });
  const shortcuts = shortcutOrder.flatMap((item) => {
    const category = categories.find((entry) => entry.slug === item.slug);
    return category ? [{ ...item, category }] : [];
  });

  return (
    <div className="pwa-app-home mx-auto max-w-lg px-4 pb-8 pt-5">
      <section aria-label={pwaCopy.searchLabel}>
        <ToolSearch variant="header" id="pwa-home-search" placeholder={pwaCopy.searchLabel} />
      </section>
      <section className="mt-5 rounded-3xl bg-accent px-5 py-6 text-accent-foreground shadow-[0_8px_24px_rgb(37_99_235/0.18)]">
        <p className="text-lg font-semibold tracking-tight">{pwaCopy.tagline}</p>
        <p className="mt-2 text-sm leading-6 text-white/85">
          Free tools in this browser, with no account.
        </p>
      </section>
      <section className="mt-8" aria-labelledby="pwa-categories-heading">
        <div className="flex items-center justify-between gap-3">
          <h2 id="pwa-categories-heading" className="text-base font-semibold text-foreground">
            {pwaCopy.categories}
          </h2>
          <Link href={href("/categories")} className="text-sm font-medium text-accent hover:underline">
            {pwaCopy.viewAll}
          </Link>
        </div>
        <ul className="mt-4 grid grid-cols-3 gap-3">
          {shortcuts.map((item) => (
            <li key={item.slug}>
              <Link
                href={href(item.category.route)}
                className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card px-2 py-3 text-center shadow-[0_1px_2px_rgb(15_39_68/0.04)] hover:border-accent/30 hover:bg-accent-soft/50"
              >
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <span className="text-xs font-medium leading-4 text-foreground">
                  {item.label ?? messages.categoryNames[item.slug]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8" aria-labelledby="pwa-popular-heading">
        <h2 id="pwa-popular-heading" className="text-base font-semibold text-foreground">
          {pwaCopy.popular}
        </h2>
        <ul className="mt-4 space-y-2">
          {popularTools.map((tool) => (
            <li key={tool.slug}>
              <CompactTool tool={tool} />
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8" aria-labelledby="pwa-recent-heading">
        <h2 id="pwa-recent-heading" className="text-base font-semibold text-foreground">
          {pwaCopy.recent}
        </h2>
        {recentTools.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-dashed border-border bg-muted px-4 py-8 text-center text-sm leading-6 text-muted-foreground">
            {pwaCopy.recentEmpty}
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {recentTools.map((tool) => (
              <li key={tool.slug}>
                <CompactTool tool={tool} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
