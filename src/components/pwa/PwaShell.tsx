"use client";

import { useEffect, useId, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Icon } from "@/components/icons/Icon";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import type { IconName } from "@/data/types";
import { useI18n } from "@/i18n/client";
import { pwaCopy } from "@/i18n/pwa-en";
import { cn } from "@/lib/cn";
import { startInstallPromptCapture } from "@/lib/pwa/install-prompt";
import { subscribeStandaloneMedia, syncStandaloneAttribute } from "@/lib/pwa/standalone";

function pathWithoutLocale(pathname: string, locale: string) {
  if (locale === "en") {
    return pathname;
  }
  const prefix = `/${locale}`;
  if (pathname === prefix) {
    return "/";
  }
  return pathname.startsWith(`${prefix}/`) ? pathname.slice(prefix.length) : pathname;
}

export function PwaStandaloneSync() {
  useLayoutEffect(() => {
    startInstallPromptCapture();
    syncStandaloneAttribute();
    return subscribeStandaloneMedia(syncStandaloneAttribute);
  }, []);
  return null;
}

export function PwaHeader() {
  const { href } = useI18n();
  return (
    <header className="pwa-app-chrome sticky top-0 z-40 border-b border-border bg-header/95 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between gap-3 px-4">
        <Logo compact href={href("/")} label={`${pwaCopy.home} — Tools Star Hub`} />
        <div className="flex items-center gap-0.5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function PwaBottomNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale, href } = useI18n();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreId = useId();
  const route = pathWithoutLocale(pathname, locale);
  const view = searchParams.get("view") ?? "";

  useEffect(() => {
    if (!moreOpen) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMoreOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [moreOpen]);

  const items: Array<{
    id: string;
    href?: string;
    label: string;
    icon: IconName;
    active: boolean;
    onClick?: () => void;
  }> = [
    {
      id: "home",
      href: href("/"),
      label: pwaCopy.home,
      icon: "home",
      active: route === "/",
    },
    {
      id: "categories",
      href: href("/categories"),
      label: pwaCopy.categories,
      icon: "menu",
      active: route === "/categories" || route.startsWith("/categories/"),
    },
    {
      id: "search",
      href: href("/tools"),
      label: pwaCopy.search,
      icon: "search",
      active: route === "/tools" && view !== "favorites",
    },
    {
      id: "saved",
      href: href("/tools?view=favorites"),
      label: pwaCopy.saved,
      icon: "star",
      active: route === "/tools" && view === "favorites",
    },
    {
      id: "more",
      label: pwaCopy.more,
      icon: "dots",
      active: moreOpen,
      onClick: () => setMoreOpen(true),
    },
  ];

  return (
    <>
      <nav
        className="pwa-app-chrome fixed inset-x-0 bottom-0 z-40 border-t border-border bg-header/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm"
        aria-label={pwaCopy.nav}
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {items.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex min-h-12 flex-col items-center justify-center gap-0.5 px-1 text-[11px] font-medium",
                    item.active ? "text-accent" : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={item.active ? "page" : undefined}
                >
                  <Icon name={item.icon} className="size-5" />
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className={cn(
                    "flex min-h-12 w-full flex-col items-center justify-center gap-0.5 px-1 text-[11px] font-medium",
                    item.active ? "text-accent" : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-expanded={moreOpen}
                  aria-controls={moreId}
                  onClick={item.onClick}
                >
                  <Icon name={item.icon} className="size-5" />
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {moreOpen ? (
        <div className="pwa-app-chrome fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/30"
            aria-label={pwaCopy.closeMore}
            onClick={() => setMoreOpen(false)}
          />
          <div
            id={moreId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${moreId}-title`}
            className="absolute inset-x-0 bottom-0 rounded-t-3xl border border-border bg-card pb-[env(safe-area-inset-bottom)] shadow-lg"
          >
            <div className="mx-auto max-w-lg px-5 pb-6 pt-4">
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
              <div className="flex items-center justify-between">
                <h2 id={`${moreId}-title`} className="text-base font-semibold text-foreground">
                  {pwaCopy.moreTitle}
                </h2>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label={pwaCopy.closeMore}
                  onClick={() => setMoreOpen(false)}
                >
                  <Icon name="close" className="size-5" />
                </button>
              </div>
              <ul className="mt-3 space-y-1">
                {[
                  { href: href("/tools"), label: pwaCopy.allTools },
                  { href: href("/guides"), label: pwaCopy.guides },
                  { href: href("/about"), label: pwaCopy.about },
                  { href: href("/contact"), label: pwaCopy.contact },
                  { href: href("/privacy"), label: pwaCopy.privacy },
                  { href: href("/terms"), label: pwaCopy.terms },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

