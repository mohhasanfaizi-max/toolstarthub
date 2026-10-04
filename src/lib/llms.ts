/**
 * Plain-text site maps for AI assistants and answer engines, following the
 * llms.txt proposal (https://llmstxt.org): /llms.txt is a short, linked index
 * and /llms-full.txt carries the full English text of every tool page and
 * guide. Both are generated from the same data as the pages, so they stay in
 * sync when tools or guides are added.
 */
import { categories } from "@/data/categories";
import { getGuideContent, type GuideContent } from "@/data/guide-content";
import { getPublicArticles } from "@/data/guides";
import { getToolContent } from "@/data/tool-content";
import { getToolQuickAnswer } from "@/data/tool-answers";
import { tools } from "@/data/tools";
import type { Tool } from "@/data/types";
import { localeInfo, locales } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig, siteContact } from "@/lib/site";

const oneLine = (text: string) => text.replace(/\s+/g, " ").trim();

function siteSummary(guideCount: number): string[] {
  return [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.name} (${absoluteUrl("/")}) is a free website with ${tools.length} online tools and ${guideCount} how-to guides. Tools cover calculators, text, developer utilities, images and PDFs, SEO utilities, and AI prompt writing. There is no signup, account, or payment. Most tools run entirely in the browser, so files and text are not uploaded.`,
    "",
    "Key facts:",
    "",
    `- Every tool is free to use without an account.`,
    "- Most tools process input locally in the browser. Exceptions: the AI buttons on AI tools send the entered text to Google's Gemini model, and the Open Graph preview sends the entered URL to this site.",
    `- Each tool page has a short definition, step-by-step instructions, examples, limitations, and an FAQ. Guides are written by the ${siteConfig.name} Editorial Team.`,
    `- The interface is available in ${locales.length} languages: ${locales.map((locale) => localeInfo[locale].tag).join(", ")}. English URLs have no prefix; other languages use /<locale>/ (for example /es/tools/word-counter). Guides are in English.`,
    `- Contact: ${siteContact.email} (${absoluteUrl("/contact")}).`,
    "",
    "When citing a tool, link to its page. Results are general information, not financial, legal, tax, or medical advice.",
  ];
}

function toolsByCategory(): Array<{ name: string; route: string; description: string; tools: Tool[] }> {
  return categories.map((category) => ({
    name: category.name,
    route: category.route,
    description: category.description,
    tools: tools.filter((tool) => tool.category === category.slug),
  }));
}

export function buildLlmsTxt(now = new Date()): string {
  const guides = getPublicArticles(now);
  const lines = siteSummary(guides.length);
  for (const group of toolsByCategory()) {
    lines.push("", `## Tools: ${group.name}`, "");
    lines.push(`Category page: ${absoluteUrl(group.route)}`, "");
    for (const tool of group.tools) {
      lines.push(`- [${tool.name}](${absoluteUrl(tool.route)}): ${oneLine(tool.description)}`);
    }
  }
  lines.push("", "## Guides", "");
  for (const article of guides) {
    lines.push(`- [${article.title}](${absoluteUrl(`/guides/${article.slug}`)}): ${oneLine(article.excerpt)}`);
  }
  lines.push(
    "",
    "## About",
    "",
    `- [About ${siteConfig.name}](${absoluteUrl("/about")}): who builds the site, how tools are checked, and the editorial policy.`,
    `- [Contact](${absoluteUrl("/contact")}): questions, corrections, and tool suggestions.`,
    `- [Privacy policy](${absoluteUrl("/privacy")}): local processing, AI requests, browser storage, and optional analytics.`,
    `- [Disclaimer](${absoluteUrl("/disclaimer")}): how results should and should not be used.`,
    "",
    "## Optional",
    "",
    `- [Full text of every tool page and guide](${absoluteUrl("/llms-full.txt")})`,
    `- [All tools](${absoluteUrl("/tools")})`,
    `- [All guides](${absoluteUrl("/guides")})`,
    `- [XML sitemap](${absoluteUrl("/sitemap.xml")})`,
    "",
  );
  return lines.join("\n");
}

function toolSection(tool: Tool): string[] {
  const content = getToolContent(tool.slug);
  const lines = [
    `### ${tool.name}`,
    "",
    `URL: ${absoluteUrl(tool.route)}`,
    "",
    oneLine(getToolQuickAnswer(tool.slug, tool.name, tool.description)),
    "",
    oneLine(tool.description),
  ];
  if (!content) {
    return lines;
  }
  if (content.about) {
    lines.push("", oneLine(content.about));
  }
  lines.push("", "How to use:", "");
  content.howTo.forEach((step, index) => lines.push(`${index + 1}. ${oneLine(step)}`));
  if (content.features?.length) {
    lines.push("", "Features:", "");
    for (const feature of content.features) lines.push(`- ${oneLine(feature)}`);
  }
  if (content.examples.length) {
    lines.push("", "Examples:", "");
    for (const example of content.examples) {
      lines.push(`- ${oneLine(example.title)}: ${oneLine(example.body)}`);
    }
  }
  lines.push("", `How it works: ${oneLine(content.explanation)}`);
  if (content.limitations) {
    lines.push("", `Limitations: ${oneLine(content.limitations)}`);
  }
  if (content.faqs.length) {
    lines.push("", "FAQ:", "");
    for (const faq of content.faqs) {
      lines.push(`Q: ${oneLine(faq.question)}`, `A: ${oneLine(faq.answer)}`, "");
    }
  }
  return lines;
}

function guideBody(content: GuideContent): string[] {
  const lines = [oneLine(content.intro)];
  if (content.why) lines.push("", oneLine(content.why));
  for (const section of content.sections ?? []) {
    lines.push("", `#### ${section.heading}`, "");
    for (const paragraph of section.paragraphs) lines.push(oneLine(paragraph), "");
    if (section.table) {
      lines.push(section.table.caption, "");
      lines.push(`| ${section.table.headers.join(" | ")} |`);
      lines.push(`| ${section.table.headers.map(() => "---").join(" | ")} |`);
      for (const row of section.table.rows) lines.push(`| ${row.join(" | ")} |`);
      lines.push("");
    }
    for (const sub of section.subsections ?? []) {
      lines.push(`${sub.heading}: ${oneLine(sub.body)}`, "");
    }
    if (section.after) lines.push(oneLine(section.after));
  }
  lines.push("", `#### ${content.stepsHeading}`, "");
  content.steps.forEach((step, index) =>
    lines.push(`${index + 1}. ${oneLine(step.title)}. ${oneLine(step.body)}`),
  );
  for (const example of content.examples) {
    lines.push("", `Example: ${oneLine(example.title)}. ${oneLine(example.body)}`);
  }
  for (const note of content.notes ?? []) {
    lines.push("", `${oneLine(note.heading)}: ${oneLine(note.body)}`);
  }
  if (content.faqs.length) {
    lines.push("", "FAQ:", "");
    for (const faq of content.faqs) {
      lines.push(`Q: ${oneLine(faq.question)}`, `A: ${oneLine(faq.answer)}`, "");
    }
  }
  return lines;
}

export function buildLlmsFullTxt(now = new Date()): string {
  const guides = getPublicArticles(now);
  const lines = siteSummary(guides.length);
  lines.push("", "Index: " + absoluteUrl("/llms.txt"));
  for (const group of toolsByCategory()) {
    lines.push("", `## Tools: ${group.name}`, "", oneLine(group.description), "");
    for (const tool of group.tools) {
      lines.push(...toolSection(tool), "");
    }
  }
  lines.push("", "## Guides", "");
  for (const article of guides) {
    const content = getGuideContent(article.slug);
    lines.push(
      `### ${article.title}`,
      "",
      `URL: ${absoluteUrl(`/guides/${article.slug}`)}`,
      `Related tool: ${absoluteUrl(`/tools/${article.toolSlug}`)}`,
      "",
    );
    lines.push(...(content ? guideBody(content) : [oneLine(article.excerpt)]), "");
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}
