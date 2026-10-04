import { notFound } from "next/navigation";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { isLocale, prefixedLocales } from "@/i18n/config";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") {
    notFound();
  }
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
