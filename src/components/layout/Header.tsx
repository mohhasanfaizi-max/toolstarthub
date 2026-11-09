import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { Logo } from "@/components/ui/Logo";
import { formatMessage, localizePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

export function Header({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);
  const exploreLabel = messages.client.nav.exploreTools;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header/95 backdrop-blur-sm">
      <Container
        fullWidth
        className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-3 min-[1440px]:gap-5"
      >
        <Logo
          compact
          className="shrink-0"
          href={localizePath("/", locale)}
          label={formatMessage(messages.header.logoHome, {
            name: siteConfig.name,
          })}
        />
        <div className="min-w-0 justify-self-center">
          <HeaderNav locale={locale} />
        </div>
        <div className="flex shrink-0 items-center justify-end gap-0.5 sm:gap-1.5">
          <HeaderSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          {/* Keep CTA compact at 1280–1439 so all nav links fit with the logo name. */}
          <div
            className={locale === "en" ? "hidden lg:block" : "hidden xl:block"}
          >
            <Button
              href={localizePath("/tools", locale)}
              size="sm"
              className="shrink-0 gap-1.5 whitespace-nowrap px-2.5 min-[1440px]:px-3"
            >
              <Icon name="arrow-right" className="size-3.5 rtl:-scale-x-100" />
              <span className="max-[1439px]:sr-only">{exploreLabel}</span>
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
