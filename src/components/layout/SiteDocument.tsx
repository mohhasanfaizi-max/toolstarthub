import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConsentManager } from "@/components/analytics/ConsentManager";
import { GoogleAnalyticsRouteChange } from "@/components/analytics/GoogleAnalyticsRouteChange";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { I18nProvider } from "@/i18n/client";
import { localeInfo, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";
import { consentDefaultsScript } from "@/lib/consent";
import { cn } from "@/lib/cn";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-plus-jakarta",
  // Match the previous system stack so swap does not jump layout.
  fallback: [
    "Segoe UI",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

const themeScript = `(function(){try{var t=localStorage.getItem("tsh-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light");}catch(e){}})();`;

/**
 * The html document for one locale: lang/dir, early inline scripts (theme and
 * Consent Mode defaults, both run before first paint), header, footer and the
 * consent banner. English sections and the [locale] tree each render it from
 * their own layout, so the root app/layout.tsx only passes children through.
 */
export function SiteDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const messages = getMessages(locale);
  const info = localeInfo[locale];

  return (
    <html
      lang={info.tag}
      dir={info.dir}
      className={plusJakarta.variable}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "flex min-h-full flex-col antialiased",
          // Latin locales use Plus Jakarta; ar/ur keep the Arabic stack in CSS.
          info.dir === "ltr" ? plusJakarta.className : null,
        )}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
        <I18nProvider locale={locale} messages={messages.client}>
          <Suspense fallback={null}>
            <GoogleAnalyticsRouteChange />
          </Suspense>
          <SkipLink label={messages.header.skip} />
          <Header locale={locale} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} />
          <ConsentManager />
        </I18nProvider>
      </body>
    </html>
  );
}
