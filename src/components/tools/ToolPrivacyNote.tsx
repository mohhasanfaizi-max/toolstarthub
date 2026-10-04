import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/server";

const aiSlugs = new Set([
  "ai-prompt-generator",
  "prompt-to-image",
  "prompt-to-video",
  "ai-article-detector",
  "ai-article-compressor",
]);

export function ToolPrivacyNote({
  slug,
  locale = "en",
}: {
  slug?: string;
  locale?: Locale;
}) {
  const t = getMessages(locale).toolPage.privacy;
  const usesGemini = slug ? aiSlugs.has(slug) : false;
  const humanizer = slug === "ai-text-humanizer";
  const fetchesPage = slug === "open-graph-preview";
  const [before, after] = t.see.split("{link}");
  return (
    <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
      {humanizer
        ? t.humanizer
        : usesGemini
          ? t.gemini
          : fetchesPage
            ? t.fetch
            : t.browser}{" "}
      {before}
      <Link href="/privacy" className="font-medium text-accent hover:underline">
        {t.link}
      </Link>
      {after}
    </p>
  );
}
