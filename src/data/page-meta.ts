import type { CategorySlug } from "./types.ts";

/**
 * English search-result descriptions for listing pages whose on-page summary
 * is too short for a meta description. Other languages keep their translated
 * descriptions.
 */
export const categoryMetaDescriptions: Record<CategorySlug, string> = {
  calculators:
    "Free online calculators for percentages, discounts, age, dates, loans, mortgages, savings, pay, GPA, area, and unit conversions. No signup needed.",
  "text-tools":
    "Free online text tools: count words and characters, change case, compare text, remove duplicates and line breaks, sort lines, and convert numbers.",
  "developer-tools":
    "Free developer tools in your browser: format JSON, encode Base64 and URLs, minify HTML, CSS and JS, test regex, decode JWTs, and build cron expressions.",
  "image-tools":
    "Free image and PDF tools that run in your browser: compress, resize, crop, and convert images, and merge, split, compress, or convert PDFs without uploading.",
  "seo-utilities":
    "Free SEO and utility tools: build UTM links, slugs, meta tags, and robots.txt, make or scan QR codes, generate passwords, and run a CPS click test.",
  "ai-tools":
    "Free AI writing tools: build prompts for text, images, and video, review writing patterns, and shorten or rewrite a draft, in your browser or with Gemini.",
};

/** English description for the All Tools page. */
export const toolsIndexMetaDescription =
  "Browse every free online tool on Tools Star Hub: calculators, text and developer tools, image and PDF tools, SEO utilities, and AI tools. No signup.";
