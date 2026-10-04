import Link from "next/link";
import { localizePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";

export function HeaderNav({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);
  const nav = messages.client.nav;
  const links = [
    { href: "/", label: nav.home },
    { href: "/tools", label: nav.allTools },
    { href: "/categories", label: nav.categories },
    { href: "/guides", label: nav.guides },
    { href: "/#popular-tools", label: nav.popularTools },
    { href: "/about", label: nav.about },
  ];

  return (
    <nav className="hidden lg:block" aria-label={messages.header.primaryNav}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={localizePath(link.href, locale)}
              className="inline-flex whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground xl:px-3"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
