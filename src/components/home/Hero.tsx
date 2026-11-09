import { HeroAside } from "@/components/home/HeroAside";
import { ToolSearch } from "@/components/tools/ToolSearch";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { getToolsByCategory, tools } from "@/data/tools";
import {
  formatMessage,
  formatNumber,
  localizePath,
  type Locale,
} from "@/i18n/config";
import { getCategories, getMessages, getTool } from "@/i18n/server";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

const popularSlugs = [
  "pdf-to-jpg",
  "image-compressor",
  "word-counter",
  "qr-code-generator",
  "percentage-calculator",
] as const;

/** Highest-value tools on the English homepage. Names and routes come from the registry. */
const valuableSlugs = [
  "urdu-news-translator",
  "ai-text-humanizer",
  "pdf-to-jpg",
  "pdf-compressor",
  "image-compressor",
  "word-counter",
  "qr-code-generator",
  "utm-builder",
] as const;

const featuredSlug = "urdu-news-translator";

const englishAudience =
  "For freelancers, students, digital marketers and news writers";

function HeroHeading({ text }: { text: string }) {
  // Keep exact English H1 wording; accent only the middle word visually.
  if (text === "Free Digital Tools") {
    return (
      <>
        Free{" "}
        <span className="bg-[linear-gradient(90deg,#2563eb_0%,#7c3aed_55%,#db2777_100%)] bg-clip-text text-transparent">
          Digital
        </span>{" "}
        Tools
      </>
    );
  }
  return text;
}

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);
  const t = messages.home;
  const slugs = locale === "en" ? valuableSlugs : popularSlugs;

  const resolved = slugs.flatMap((slug) => {
    const tool = getTool(slug, locale);
    return tool ? [tool] : [];
  });

  const featured =
    getTool(featuredSlug, locale) ??
    resolved[0] ??
    getTool("percentage-calculator", locale);

  const gridTools = resolved
    .filter((tool) => tool.slug !== featured?.slug)
    .slice(0, 6);

  const categoryItems = getCategories(locale).map((category) => ({
    category,
    count: getToolsByCategory(category.slug).length,
  }));

  const toolCount = tools.length;
  const categoryCount = categoryItems.length;
  const toolsWord =
    (
      (toolCount === 1 ? messages.category.cardCount.one : undefined) ??
      messages.category.cardCount.other
    )
      .replace("{count}", "")
      .trim() || (toolCount === 1 ? "tool" : "tools");

  const stats = [
    {
      icon: "bolt" as const,
      value: formatNumber(locale, toolCount),
      label: toolsWord,
    },
    {
      icon: "menu" as const,
      value: formatNumber(locale, categoryCount),
      label: messages.footer.categories,
    },
    {
      icon: "gift" as const,
      value: t.trust[0],
      label: t.trust[1],
    },
    {
      icon: "shield" as const,
      value: t.trust[2],
      label: t.trust[3],
    },
  ];

  return (
    <section className="home-hero relative overflow-hidden border-b border-border">
      {/* CSS-only décor: soft blobs + light dot grid (hidden from AT) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-hero-dots absolute inset-0 opacity-[0.55] dark:opacity-20" />
        <div className="absolute -start-16 top-10 size-56 rounded-full bg-[#bfdbfe]/45 blur-3xl dark:bg-[#1e3a8a]/35" />
        <div className="absolute -end-10 top-24 size-64 rounded-full bg-[#ddd6fe]/40 blur-3xl dark:bg-[#4c1d95]/30" />
        <div className="absolute bottom-0 start-1/3 size-72 rounded-full bg-[#bbf7d0]/30 blur-3xl dark:bg-[#14532d]/25" />
      </div>

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-12">
          <div className="home-enter flex w-full max-w-2xl flex-col text-center lg:mx-0 lg:max-w-none lg:text-start mx-auto">
            <p className="text-sm font-semibold tracking-wide text-accent">
              {siteConfig.name}
            </p>
            <h1 className="mx-auto mt-3 max-w-full text-balance text-[2.125rem] font-extrabold leading-[1.12] tracking-tight text-[#1e2a4a] sm:text-[2.5rem] md:text-[2.875rem] lg:mx-0 lg:text-5xl xl:text-6xl dark:text-foreground">
              <HeroHeading text={t.h1} />
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
              {formatMessage(t.intro, { name: siteConfig.name })}
            </p>
            {locale === "en" ? (
              <p className="mx-auto mt-3 max-w-xl text-balance text-sm font-medium leading-6 text-foreground sm:text-base lg:mx-0">
                {englishAudience}
              </p>
            ) : null}

            <div
              className="mt-7 overflow-hidden rounded-[20px] border border-[#cfe0f8] bg-white/80 p-1.5 shadow-[0_1px_2px_rgb(15_39_68/0.04),0_12px_28px_rgb(15_39_68/0.06)] backdrop-blur-sm dark:border-[#1e3a8a]/70 dark:bg-[#101827]/80"
              role="group"
              aria-label={siteConfig.name}
            >
              {/* 2×2 keeps labels readable in the left column at 1280–1440. */}
              <div className="grid grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-3 sm:gap-3 sm:px-4",
                      index % 2 === 1 &&
                        "border-s border-[#e2ebf7] dark:border-[#243044]",
                      index >= 2 &&
                        "border-t border-[#e2ebf7] dark:border-[#243044]",
                    )}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm">
                      <Icon name={stat.icon} className="size-4 text-white" />
                    </span>
                    <div className="min-w-0 text-start [overflow-wrap:normal] [word-break:normal] hyphens-none">
                      <p className="text-sm font-extrabold leading-snug tracking-tight text-[#1e2a4a] dark:text-foreground">
                        {stat.value}
                      </p>
                      <p className="line-clamp-2 text-[11px] font-medium leading-snug text-[#6b7c90] dark:text-muted-foreground sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-search mt-7 text-start">
              <ToolSearch variant="hero" />
            </div>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Button
                href={localizePath("/tools", locale)}
                size="lg"
                className="home-btn"
              >
                {t.ctaPrimary}
                <Icon
                  name="arrow-right"
                  className="size-4 rtl:-scale-x-100"
                />
              </Button>
              <Button
                href={localizePath("/guides", locale)}
                variant="secondary"
                size="lg"
                className="home-btn"
              >
                {t.allGuides}
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start">
              {t.trust.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <span className="flex size-4 items-center justify-center rounded-full bg-accent text-white">
                    <Icon
                      name="check"
                      className="size-2.5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Mobile: featured tool only, below CTAs — keeps LCP light */}
            {featured ? (
              <div className="mt-8 lg:hidden">
                <HeroAside
                  locale={locale}
                  featured={featured}
                  gridTools={[]}
                  categoryItems={[]}
                  featuredOnly
                />
              </div>
            ) : null}
          </div>

          {/* Desktop RHS: dense real tools column, top-aligned with left */}
          {featured ? (
            <div className="relative hidden min-h-0 lg:flex lg:flex-col">
              <HeroAside
                locale={locale}
                featured={featured}
                gridTools={gridTools}
                categoryItems={categoryItems}
                className="flex-1"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
