import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Search and AI crawlers that are explicitly welcome. Every one of them gets
 * the same rules as everyone else; listing them by name makes the permission
 * unambiguous for bots that look for their own user-agent group.
 */
const welcomedCrawlers = [
  // Search engines
  "Googlebot",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  // AI search, answer engines and training opt-in tokens
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "Bytespider",
  "cohere-ai",
  "MistralAI-User",
  "DuckAssistBot",
  "YouBot",
];

// Search result and favorites views (/tools?q=…, /tools?view=…) and API
// endpoints are not pages worth indexing.
const disallow = ["/tools?", "/api/"];

export default function robots(): MetadataRoute.Robots {
  const canonicalHost = new URL(siteConfig.url).host;

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: welcomedCrawlers, allow: "/", disallow },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: canonicalHost,
  };
}
