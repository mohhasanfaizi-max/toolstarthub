import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { formatMessage, localizePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

export function Header({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header/95 backdrop-blur-sm">
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 lg:grid-cols-[1fr_auto_1fr]">
        <Logo
          compact
          href={localizePath("/", locale)}
          label={formatMessage(messages.header.logoHome, {
            name: siteConfig.name,
          })}
        />
        <div className="justify-self-center">
          <HeaderNav locale={locale} />
        </div>
        <div className="flex items-center justify-end gap-0.5 sm:gap-2">
          <HeaderSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          {/* Longer translated labels need the extra room before showing the CTA. */}
          <div
            className={locale === "en" ? "hidden lg:block" : "hidden xl:block"}
          >
            <Button href={localizePath("/tools", locale)} size="sm">
              {messages.client.nav.exploreTools}
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
