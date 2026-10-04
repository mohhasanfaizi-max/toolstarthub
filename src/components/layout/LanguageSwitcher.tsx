"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons/Icon";
import { useI18n } from "@/i18n/client";
import {
  formatMessage,
  isLocalizedPath,
  localeInfo,
  locales,
  splitLocale,
  switchLocalePath,
} from "@/i18n/config";
import { cn } from "@/lib/cn";

/** Header language menu: a disclosure button with a list of real links. */
export function LanguageSwitcher() {
  const { locale, messages } = useI18n();
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const englishOnly = !isLocalizedPath(splitLocale(pathname).path);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        containerRef.current
          ?.querySelector<HTMLButtonElement>("button")
          ?.focus();
      }
    }
    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center justify-center gap-1 rounded-lg px-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={formatMessage(messages.language.current, {
          name: localeInfo[locale].name,
        })}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="globe" className="size-5" />
        <span className="hidden uppercase sm:inline" aria-hidden="true">
          {locale === "pt-br" ? "PT" : locale}
        </span>
      </button>
      {open ? (
        <div
          id={panelId}
          className="absolute end-0 top-full z-50 mt-2 w-60 rounded-xl border border-border bg-card p-2 shadow-lg"
        >
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {messages.language.label}
          </p>
          <ul className="max-h-[min(70vh,26rem)] overflow-y-auto">
            {locales.map((item) => {
              const current = item === locale;
              return (
                <li key={item}>
                  <Link
                    href={switchLocalePath(pathname, item)}
                    hrefLang={localeInfo[item].tag}
                    lang={localeInfo[item].tag}
                    aria-current={current ? "true" : undefined}
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted",
                      current && "bg-accent-soft font-medium text-accent",
                    )}
                  >
                    <span>{localeInfo[item].name}</span>
                    {current ? <Icon name="check" className="size-4" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          {englishOnly ? (
            <p className="px-3 pt-2 text-xs text-muted-foreground">
              {messages.language.englishOnly}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/** Footer list of languages (plain links, no script needed to use them). */
export function LanguageLinks({ heading }: { heading: string }) {
  const { locale } = useI18n();
  const pathname = usePathname() || "/";
  return (
    <nav aria-label={heading}>
      <h2 className="text-sm font-semibold text-white">{heading}</h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {locales.map((item) => (
          <li key={item}>
            <Link
              href={switchLocalePath(pathname, item)}
              hrefLang={localeInfo[item].tag}
              lang={localeInfo[item].tag}
              prefetch={false}
              aria-current={item === locale ? "true" : undefined}
              className={cn(
                "text-sm hover:text-white",
                item === locale ? "font-medium text-white" : "text-white/70",
              )}
            >
              {localeInfo[item].name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
