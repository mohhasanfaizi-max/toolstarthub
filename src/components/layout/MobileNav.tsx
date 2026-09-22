"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { categories } from "@/data/categories";

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/tools?view=favorites", label: "Favorites" },
  { href: "/categories", label: "Categories" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-xl text-foreground hover:bg-muted"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "menu"} className="size-5" />
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background shadow-lg"
        >
          <div className="mx-auto max-w-6xl space-y-5 px-4 py-5 sm:px-6">
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Categories
              </p>
              <ul className="mt-2 space-y-1">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={category.route}
                      className="block rounded-xl px-3 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
