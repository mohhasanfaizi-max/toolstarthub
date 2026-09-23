"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { categories } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";

const links = [
  { href: "/categories", label: "Categories" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
];

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex items-center gap-1">
        <li
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={(event) => {
              if (event.detail === 0) {
                setOpen((value) => !value);
                return;
              }
              setOpen(true);
            }}
          >
            Tools
            <Icon name="arrow-right" className="size-3.5 rotate-90" />
          </button>
          {open ? (
            <div
              id={panelId}
              className="absolute left-0 top-full z-40 w-[40rem] pt-2"
            >
              <div className="rounded-xl border border-border bg-card p-4 shadow-[0_12px_40px_rgb(15_39_68/0.12)]">
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => {
                    const preview = getToolsByCategory(category.slug).slice(0, 3);

                    return (
                      <div key={category.slug} className="rounded-lg p-3 hover:bg-muted">
                        <Link
                          href={category.route}
                          className="text-sm font-semibold text-foreground"
                          onClick={() => setOpen(false)}
                        >
                          {category.name}
                        </Link>
                        <ul className="mt-2 space-y-1">
                          {preview.map((tool) => (
                            <li key={tool.slug}>
                              <Link
                                href={tool.route}
                                className="block truncate text-sm text-muted-foreground hover:text-foreground"
                                onClick={() => setOpen(false)}
                              >
                                {tool.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <Link
                    href="/tools"
                    className="text-sm font-medium text-accent hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    All tools
                  </Link>
                  <Link
                    href="/guides"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Guides
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </li>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
