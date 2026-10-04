import Link from "next/link";
import { ToolSearch } from "@/components/tools/ToolSearch";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { formatMessage, type Locale } from "@/i18n/config";
import { getMessages, getTool } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

const popularSlugs = [
  "pdf-to-jpg",
  "image-compressor",
  "word-counter",
  "qr-code-generator",
  "percentage-calculator",
] as const;

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getMessages(locale).home;
  const popular = popularSlugs.flatMap((slug) => {
    const tool = getTool(slug, locale);
    return tool ? [{ href: tool.route, label: tool.name }] : [];
  });

  return (
    <section className="home-hero border-b border-border">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="home-enter mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-accent">{siteConfig.name}</p>
          <h1 className="mx-auto mt-3 max-w-[18ch] text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[2.375rem] md:text-[2.75rem] lg:text-5xl xl:text-6xl">
            {t.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {formatMessage(t.intro, { name: siteConfig.name })}
          </p>
          <div className="home-search mt-8 text-start">
            <ToolSearch variant="hero" />
          </div>
          {popular.length > 0 ? (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
              <span className="font-medium text-foreground">
                {t.popularLabel}
              </span>
              {popular.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2.5 py-1.5 text-muted-foreground hover:bg-card hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {t.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Icon
                  name="check"
                  className="size-4 text-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
