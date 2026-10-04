import { Benefits } from "@/components/home/Benefits";
import { Categories } from "@/components/home/Categories";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HelpfulGuides } from "@/components/home/HelpfulGuides";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PopularTools } from "@/components/home/PopularTools";
import { Pricing } from "@/components/home/Pricing";
import { ToolCatalog } from "@/components/home/ToolCatalog";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import {
  createPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function homeMetadata(locale: Locale) {
  const t = getMessages(locale).meta;
  return createPageMetadata({
    title: `${siteConfig.name} — ${t.tagline}`,
    description: t.description,
    path: "/",
    locale,
    hreflang: true,
  });
}

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd
        data={websiteJsonLd(locale, getMessages(locale).meta.description)}
      />
      <JsonLd data={organizationJsonLd()} />
      <Hero locale={locale} />
      <PopularTools locale={locale} />
      <ToolCatalog locale={locale} />
      <Categories locale={locale} />
      <Benefits locale={locale} />
      <HowItWorks locale={locale} />
      {/* Guides are English-only for now (Part 2). */}
      {locale === "en" ? <HelpfulGuides /> : null}
      <Pricing locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
