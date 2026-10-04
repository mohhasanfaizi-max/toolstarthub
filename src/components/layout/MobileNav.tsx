"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { categorySlugs } from "@/data/types";
import { useI18n } from "@/i18n/client";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { messages, href } = useI18n();
  const nav = messages.nav;
  const navLinks = [
    { href: "/", label: nav.home },
    { href: "/tools", label: nav.allTools },
    { href: "/categories", label: nav.categories },
    { href: "/#popular-tools", label: nav.popularTools },
    { href: "/about", label: nav.about },
    { href: "/guides", label: nav.guides },
    { href: "/#how-it-works", label: nav.howItWorks },
    { href: "/contact", label: nav.contact },
  ];

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
        className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? nav.closeMenu : nav.openMenu}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "menu"} className="size-5" />
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background"
        >
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-5 sm:px-6">
            <div onClick={() => setOpen(false)}>
              <Button href={href("/tools")} className="w-full">
                {nav.exploreTools}
              </Button>
            </div>
            <nav aria-label={nav.mobileNav}>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={href(link.href)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
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
                {nav.categories}
              </p>
              <ul className="mt-2 space-y-1">
                {categorySlugs.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={href(`/categories/${slug}`)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {messages.categoryNames[slug]}
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
