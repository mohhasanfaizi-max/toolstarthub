import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { formatMessage, localizePath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

export function FinalCTA({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  return (
    <Section className="!pb-16 !pt-2 sm:!pb-20">
      <div className="rounded-xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t.ctaTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground">
          {formatMessage(t.ctaBody, { name: siteConfig.name })}
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button
            href={localizePath("/tools", locale)}
            size="lg"
            className="home-btn"
          >
            {t.ctaPrimary}
          </Button>
          <Button
            href={localizePath("/tools/pdf-to-jpg", locale)}
            variant="secondary"
            size="lg"
            className="home-btn"
          >
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
    </Section>
  );
}
