"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { searchTools } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
import { cn } from "@/lib/cn";

type ToolSearchProps = {
  variant?: "hero" | "header" | "page";
  initialQuery?: string;
  id?: string;
};

export function ToolSearch({
  variant = "hero",
  initialQuery = "",
  id,
}: ToolSearchProps) {
  const router = useRouter();
  const generatedId = useId();
  const inputId = id ?? `tool-search-${generatedId}`;
  const listId = `${inputId}-results`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const results = query.trim() ? searchTools(query).slice(0, 8) : [];
  const showResults = open && query.trim().length > 0;

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function submitSearch(value = query) {
    const nextQuery = value.trim();
    setOpen(false);

    if (nextQuery) {
      router.push(`/tools?q=${encodeURIComponent(nextQuery)}`);
      return;
    }

    router.push("/tools");
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (!showResults) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(results.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        index <= 0 ? Math.max(results.length - 1, 0) : index - 1,
      );
    } else if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      router.push(results[activeIndex].route);
      setOpen(false);
    }
  }

  const isHero = variant === "hero";

  return (
    <div ref={containerRef} className={cn("relative w-full", isHero && "mx-auto max-w-2xl")}>
      <form
        role="search"
        action="/tools"
        onSubmit={(event) => {
          event.preventDefault();
          submitSearch();
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          Search for a tool
        </label>
        <div
          className={cn(
            "flex items-center gap-2 rounded-2xl border bg-card shadow-sm",
            isHero
              ? "border-border px-4 py-3 sm:px-5 sm:py-4"
              : "border-border px-3 py-2",
          )}
        >
          <Icon name="search" className="size-5 text-muted-foreground" />
          <input
            id={inputId}
            name="q"
            type="search"
            value={query}
            autoComplete="off"
            placeholder="Search for a tool..."
            role="combobox"
            aria-autocomplete="list"
            aria-controls={listId}
            aria-expanded={showResults}
            aria-activedescendant={
              showResults && results[activeIndex]
                ? `${listId}-${results[activeIndex].slug}`
                : undefined
            }
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
              setActiveIndex(0);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            className={cn(
              "min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground",
              isHero ? "text-base sm:text-lg" : "text-sm",
            )}
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setOpen(false);
              }}
              className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Clear search"
            >
              <Icon name="close" className="size-4" />
            </button>
          ) : null}
        </div>
      </form>

      {showResults ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Search suggestions"
          className="absolute z-40 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-border bg-card p-2 shadow-lg"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-muted-foreground">
              No tools found
            </li>
          ) : (
            results.map((tool, index) => {
              const category = getCategoryBySlug(tool.category);

              return (
                <li key={tool.slug} role="option" aria-selected={index === activeIndex}>
                  <Link
                    id={`${listId}-${tool.slug}`}
                    href={tool.route}
                    className={cn(
                      "flex items-start gap-3 rounded-xl px-3 py-2.5",
                      index === activeIndex && "bg-muted",
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mt-0.5 flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon name={tool.icon} className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-foreground">
                        {tool.name}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {category?.name}
                        {category ? " · " : ""}
                        {tool.description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      ) : null}
    </div>
  );
}
