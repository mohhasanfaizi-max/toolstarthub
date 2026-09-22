"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ToolCard } from "@/components/tools/ToolCard";
import { ToolSearch } from "@/components/tools/ToolSearch";
import {
  discoveryFilters,
  filterToolsByDiscovery,
  isDiscoveryFilterId,
  type DiscoveryFilterId,
} from "@/data/discovery";
import { getToolBySlug, getToolSlugSet, searchTools, tools } from "@/data/tools";
import { getLocalStorage } from "@/lib/storage/safe-storage";
import {
  FAVORITES_EVENT,
  readFavoriteSlugs,
} from "@/lib/storage/favorites";
import {
  RECENTS_EVENT,
  readRecentTools,
} from "@/lib/storage/recents";
import type { Tool } from "@/data/types";
import { cn } from "@/lib/cn";

type SortId = "name" | "newest" | "category";

const validSlugs = getToolSlugSet();

function subscribeLocalTools(callback: () => void) {
  window.addEventListener(FAVORITES_EVENT, callback);
  window.addEventListener(RECENTS_EVENT, callback);
  return () => {
    window.removeEventListener(FAVORITES_EVENT, callback);
    window.removeEventListener(RECENTS_EVENT, callback);
  };
}

function getLocalToolsSnapshot() {
  return JSON.stringify({
    favorites: readFavoriteSlugs(getLocalStorage(), validSlugs),
    recents: readRecentTools(getLocalStorage(), validSlugs),
  });
}

function getEmptyLocalToolsSnapshot() {
  return JSON.stringify({ favorites: [], recents: [] });
}

function isSortId(value: string): value is SortId {
  return value === "name" || value === "newest" || value === "category";
}

function sortTools(items: Tool[], sort: SortId): Tool[] {
  const copy = [...items];
  if (sort === "name") {
    return copy.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "newest") {
    return copy.sort((a, b) => Number(b.new) - Number(a.new) || a.name.localeCompare(b.name));
  }
  return copy.sort(
    (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name),
  );
}

export function ToolsCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").slice(0, 120);
  const filterParam = searchParams.get("filter") ?? "all";
  const sortParam = searchParams.get("sort") ?? "name";
  const view = searchParams.get("view");
  const filter: DiscoveryFilterId = isDiscoveryFilterId(filterParam)
    ? filterParam
    : "all";
  const sort: SortId = isSortId(sortParam) ? sortParam : "name";
  const favoritesOnly = view === "favorites";

  const localSnapshot = useSyncExternalStore(
    subscribeLocalTools,
    getLocalToolsSnapshot,
    getEmptyLocalToolsSnapshot,
  );
  const localState = JSON.parse(localSnapshot) as {
    favorites: string[];
    recents: Array<{ slug: string; timestamp: number }>;
  };
  const favoriteSlugs = localState.favorites;
  const recents = localState.recents;

  function updateParams(patch: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(patch)) {
      if (!value || (key === "filter" && value === "all") || (key === "sort" && value === "name")) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  }

  const searched = searchTools(query);
  const filtered = favoritesOnly
    ? searched.filter((tool) => favoriteSlugs.includes(tool.slug))
    : filterToolsByDiscovery(searched, filter);
  const results = sortTools(filtered, sort);

  const recentTools = recents
    .map((entry) => getToolBySlug(entry.slug))
    .filter((tool): tool is Tool => tool !== undefined);

  const favoriteTools = favoriteSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => tool !== undefined);

  const showDiscoverySections = !query && !favoritesOnly && filter === "all";

  return (
    <div>
      <div className="max-w-xl">
        <ToolSearch key={query} variant="page" initialQuery={query} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2" role="toolbar" aria-label="Filter tools">
        {discoveryFilters.map((item) => {
          const selected = !favoritesOnly && filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium",
                selected
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground",
              )}
              aria-pressed={selected}
              onClick={() =>
                updateParams({
                  filter: item.id,
                  view: null,
                })
              }
            >
              {item.label}
            </button>
          );
        })}
        <button
          type="button"
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm font-medium",
            favoritesOnly
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground",
          )}
          aria-pressed={favoritesOnly}
          onClick={() =>
            updateParams({
              view: favoritesOnly ? null : "favorites",
              filter: null,
            })
          }
        >
          Favorites
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {favoritesOnly
            ? `${results.length} favorite${results.length === 1 ? "" : "s"}`
            : query
              ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”`
              : `${results.length} of ${tools.length} tools`}
        </p>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort
          <select
            className="min-h-10 rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground"
            value={sort}
            onChange={(event) => updateParams({ sort: event.target.value })}
          >
            <option value="name">Name</option>
            <option value="newest">Newest</option>
            <option value="category">Category</option>
          </select>
        </label>
      </div>

      {showDiscoverySections ? (
        <>
          <section className="mt-10" aria-labelledby="recent-tools-heading">
            <h2
              id="recent-tools-heading"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Recently used
            </h2>
            {recentTools.length === 0 ? (
              <p className="mt-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
                Tools you use will appear here.
              </p>
            ) : (
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {recentTools.map((tool) => (
                  <li key={`recent-${tool.slug}`}>
                    <Link
                      href={tool.route}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent-soft/40"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {favoriteTools.length > 0 ? (
            <section className="mt-10" aria-labelledby="favorite-tools-heading">
              <div className="flex items-center justify-between gap-3">
                <h2
                  id="favorite-tools-heading"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Favorites
                </h2>
                <button
                  type="button"
                  className="text-sm font-medium text-accent hover:underline"
                  onClick={() => updateParams({ view: "favorites", filter: null })}
                >
                  View all
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {favoriteTools.slice(0, 6).map((tool) => (
                  <Link
                    key={`fav-${tool.slug}`}
                    href={tool.route}
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent-soft/40"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : null}

      <section className="mt-10" aria-labelledby="all-tools-heading">
        <h2
          id="all-tools-heading"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {favoritesOnly
            ? "Favorites"
            : query
              ? "Search results"
              : filter === "all"
                ? "All tools"
                : discoveryFilters.find((item) => item.id === filter)?.label ?? "Tools"}
        </h2>
        {results.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
            {favoritesOnly
              ? "You haven't favorited any tools yet."
              : query
                ? "No tools found"
                : "No tools in this category yet."}
          </p>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} headingAs="h2" />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
