import Link from "next/link";
import { localizePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { cn } from "@/lib/cn";

export function HeaderNav({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);
  const nav = messages.client.nav;
  const links = [
    { href: "/", label: nav.home, priority: "primary" as const },
    { href: "/tools", label: nav.allTools, priority: "primary" as const },
    { href: "/categories", label: nav.categories, priority: "primary" as const },
    { href: "/guides", label: nav.guides, priority: "primary" as const },
    {
      href: "/guides/free-digital-tools",
      label: nav.freeDigitalTools,
      priority: "secondary" as const,
    },
    {
      href: "/tools/urdu-news-translator",
      label: nav.urduTranslator,
      priority: "secondary" as const,
    },
    {
      href: "/#popular-tools",
      label: nav.popularTools,
      priority: "secondary" as const,
    },
    { href: "/about", label: nav.about, priority: "primary" as const },
    { href: "/contact", label: nav.contact, priority: "primary" as const },
  ];

  return (
    <nav
      className="hidden max-w-full overflow-x-auto xl:block [scrollbar-width:none]"
      aria-label={messages.header.primaryNav}
    >
      <ul className="flex items-center gap-0">
        {links.map((link) => (
          <li
            key={link.href}
            className={cn(
              link.priority === "secondary" && "hidden min-[1440px]:list-item",
            )}
          >
            <Link
              href={localizePath(link.href, locale)}
              className="inline-flex whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground min-[1440px]:px-2 min-[1440px]:text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
