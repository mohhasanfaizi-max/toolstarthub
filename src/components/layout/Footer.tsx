import Link from "next/link";
import { CookieSettingsButton } from "@/components/analytics/CookieSettingsButton";
import { LanguageLinks } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { formatMessage, localizePath, type Locale } from "@/i18n/config";
import { getCategories, getMessages } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const messages = getMessages(locale);
  const t = messages.footer;
  const nav = messages.client.nav;
  const footerLinks = [
    { href: "/tools", label: nav.allTools },
    { href: "/tools?view=favorites", label: t.favorites },
    { href: "/categories", label: nav.categories },
    { href: "/guides", label: nav.guides },
    { href: "/about", label: nav.about },
    { href: "/contact", label: nav.contact },
  ];
  const legalLinks = [
    { href: "/privacy", label: t.privacy },
    { href: "/terms", label: t.terms },
    { href: "/disclaimer", label: t.disclaimer },
  ];
  const linkClass = "text-sm text-white/70 hover:text-white";

  return (
    <footer className="mt-auto bg-footer text-footer-foreground">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo
              inverted
              href={localizePath("/", locale)}
              label={formatMessage(messages.header.logoHome, {
                name: siteConfig.name,
              })}
            />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              {t.blurb}
            </p>
            <p className="mt-4 text-sm font-medium text-white/90">
              {t.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{t.explore}</h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizePath(link.href, locale)}
                    className={linkClass}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{t.categories}</h2>
            <ul className="mt-4 space-y-2">
              {getCategories(locale).map((category) => (
                <li key={category.slug}>
                  <Link href={category.route} className={linkClass}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{t.legal}</h2>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className={`text-start ${linkClass}`} />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <LanguageLinks heading={t.languages} />
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>{formatMessage(t.rights, { year, name: siteConfig.name })}</p>
        </div>
      </Container>
    </footer>
  );
}
