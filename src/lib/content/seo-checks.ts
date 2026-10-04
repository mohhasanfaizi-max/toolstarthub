import { getArticleBySlug } from "../../data/articles.ts";
import { getPublicGuides } from "../../data/guides.ts";
import { guideDates } from "../../data/guide-dates.ts";
import { guideMetaDescriptions } from "../../data/guide-meta.ts";
import { getToolContent } from "../../data/tool-content.ts";
import { extraToolFaqs } from "../../data/tool-faq-extra.ts";
import { toolMetaDescriptions } from "../../data/tool-meta.ts";
import { getToolBySlug } from "../../data/tools.ts";
import { bannedPhraseIssues, collectText, markdownFormattingIssues } from "../content-style.ts";

type Assert = (condition: unknown, message: string) => asserts condition;

/** Search-snippet and structured-data inputs stay valid as content changes. */
export function runSeoContentChecks(assert: Assert) {
  for (const [slug, description] of Object.entries(toolMetaDescriptions)) {
    assert(getToolBySlug(slug), `tool-meta: ${slug} is a real tool`);
    assert(
      description.length >= 110 && description.length <= 160,
      `tool-meta: ${slug} description is 110–160 characters (${description.length})`,
    );
  }

  const guides = getPublicGuides(new Date());
  const guideSlugs = new Set(guides.map((guide) => guide.slug));
  for (const [slug, description] of Object.entries(guideMetaDescriptions)) {
    assert(guideSlugs.has(slug), `guide-meta: ${slug} is a public guide`);
    assert(
      description.length >= 110 && description.length <= 160,
      `guide-meta: ${slug} description is 110–160 characters (${description.length})`,
    );
  }
  for (const guide of guides) {
    const article = getArticleBySlug(guide.slug);
    const dates = guideDates[guide.slug];
    // A new guide needs a guide-dates.ts entry or its own publishedAt/publishAt.
    assert(
      dates || article?.publishedAt || article?.publishAt,
      `guide-dates: ${guide.slug} has a published date (add it to guide-dates.ts)`,
    );
    if (dates) {
      assert(
        !Number.isNaN(Date.parse(dates.published)) && !Number.isNaN(Date.parse(dates.modified)),
        `guide-dates: ${guide.slug} dates are valid ISO dates`,
      );
    }
  }

  for (const [slug, faqs] of Object.entries(extraToolFaqs)) {
    const content = getToolContent(slug);
    assert(content, `tool-faq-extra: ${slug} is a tool with content`);
    const questions = content.faqs.map((faq) => faq.question.toLowerCase());
    assert(new Set(questions).size === questions.length, `tool-faq-extra: ${slug} has no duplicate questions`);
    assert(content.faqs.length <= 8, `tool-faq-extra: ${slug} keeps the FAQ to 8 questions or fewer`);
    const blob = collectText(faqs).join("\n");
    assert(!markdownFormattingIssues(blob), `tool-faq-extra: ${slug} ${markdownFormattingIssues(blob) ?? ""}`);
    assert(!bannedPhraseIssues(blob), `tool-faq-extra: ${slug} ${bannedPhraseIssues(blob) ?? ""}`);
  }
}
