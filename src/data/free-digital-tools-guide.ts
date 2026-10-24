import type { GuideContent } from "./guide-content.ts";
import { freeDigitalToolsCatalog } from "./free-digital-tools-catalog.ts";

export type FreeToolSpan = { text: string; href?: string; code?: boolean };

export type FreeToolBlock =
  | { type: "p"; spans: readonly FreeToolSpan[]; id?: string }
  | { type: "ul"; items: readonly (readonly FreeToolSpan[])[] }
  | { type: "h3"; text: string; id?: string }
  | {
      type: "table";
      caption: string;
      headers: readonly string[];
      rows: readonly (readonly (readonly FreeToolSpan[])[])[];
    }
  | { type: "pre"; text: string }
  | { type: "directory" }
  | { type: "faq"; items: readonly { question: string; answer: readonly FreeToolSpan[] }[] };

export type FreeToolSection = {
  id: string;
  headingId: string;
  heading: string;
  blocks: readonly FreeToolBlock[];
};

/** Widened view of the generated catalog so optional links and anchors type-check. */
export const freeDigitalToolsSections = freeDigitalToolsCatalog.sections as unknown as readonly FreeToolSection[];

export const FREE_DIGITAL_TOOLS_SLUG = "free-digital-tools";
export const FREE_DIGITAL_TOOLS_TITLE = "Free Digital Tools";
export const FREE_DIGITAL_TOOLS_META_TITLE =
  "Free Digital Tools: 102 Free Online Tools for Work and Study";
export const FREE_DIGITAL_TOOLS_META_DESCRIPTION =
  "Free digital tools for work, study and content: 102 free online tools for PDFs, images, text, links, AI and calculators, explained one by one. No signup.";
export const FREE_DIGITAL_TOOLS_DATES = {
  published: "2026-10-23",
  modified: "2026-10-23",
} as const;

type Span = { readonly text: string };

function spanText(spans: readonly Span[]): string {
  return spans.map((span) => span.text).join("");
}

function wordCount(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function countArticleWords(): number {
  let total = wordCount(FREE_DIGITAL_TOOLS_TITLE);
  for (const section of freeDigitalToolsSections) {
    total += wordCount(section.heading);
    for (const block of section.blocks) {
      if (block.type === "p") total += wordCount(spanText(block.spans));
      if (block.type === "h3") total += wordCount(block.text);
      if (block.type === "pre") total += wordCount(block.text);
      if (block.type === "ul") {
        for (const item of block.items) total += wordCount(spanText(item));
      }
      if (block.type === "table") {
        total += wordCount(block.caption);
        for (const header of block.headers) total += wordCount(header);
        for (const row of block.rows) {
          for (const cell of row) total += wordCount(spanText(cell));
        }
      }
      if (block.type === "faq") {
        for (const item of block.items) {
          total += wordCount(item.question);
          total += wordCount(spanText(item.answer));
        }
      }
    }
  }
  return total;
}

function countCardWords(): number {
  let total = 0;
  for (const card of freeDigitalToolsCatalog.cards) {
    total += wordCount(card.name);
    total += wordCount(card.blurb);
  }
  return total;
}

/** Words in the humanized article: title, headings, prose, tables, and FAQ. */
export const freeDigitalToolsWordCount = countArticleWords();

/** Names and blurbs on the filterable tool cards. */
export const freeDigitalToolsCardWordCount = countCardWords();

function toolAnchorSlugs(): string[] {
  const slugs: string[] = [];
  for (const section of freeDigitalToolsSections) {
    for (const block of section.blocks) {
      if (block.type === "p" && block.id?.startsWith("tool-")) {
        slugs.push(block.id.slice("tool-".length));
      }
    }
  }
  return slugs;
}

export const freeDigitalToolSlugs: ReadonlySet<string> = new Set(
  freeDigitalToolsCatalog.cards.map((card) => card.slug),
);

function assertCatalogShape(): void {
  const cards = freeDigitalToolsCatalog.cards.map((card) => card.slug);
  const anchors = toolAnchorSlugs();
  if (cards.length !== 102 || new Set(cards).size !== 102) {
    throw new Error("Free Digital Tools catalog must list 102 unique tool cards");
  }
  if (anchors.length !== 102 || new Set(anchors).size !== 102) {
    throw new Error("Free Digital Tools catalog must include 102 unique #tool- anchors");
  }
  for (const slug of anchors) {
    if (!freeDigitalToolSlugs.has(slug)) {
      throw new Error(`Tool anchor #tool-${slug} has no directory card`);
    }
  }
  for (const slug of cards) {
    if (!anchors.includes(slug)) {
      throw new Error(`Directory card ${slug} has no #tool- anchor`);
    }
  }
  if (freeDigitalToolsFaqs().length !== 10) {
    throw new Error("Free Digital Tools guide must keep all 10 FAQs");
  }
  if (FREE_DIGITAL_TOOLS_META_TITLE.length !== 60) {
    throw new Error("Free Digital Tools document title must be 60 characters");
  }
  const descriptionLength = FREE_DIGITAL_TOOLS_META_DESCRIPTION.length;
  if (descriptionLength < 150 || descriptionLength > 160) {
    throw new Error("Free Digital Tools meta description must be 150–160 characters");
  }
}

export function freeDigitalToolsFaqs(): Array<{ question: string; answer: string }> {
  for (const section of freeDigitalToolsSections) {
    for (const block of section.blocks) {
      if (block.type === "faq") {
        return block.items.map((item) => ({
          question: item.question,
          answer: spanText(item.answer),
        }));
      }
    }
  }
  return [];
}

function openingParagraphs(): [string, string] {
  const section = freeDigitalToolsCatalog.sections.find((item) => item.id === "what-are");
  const paragraphs = section?.blocks.filter((block) => block.type === "p") ?? [];
  const first = paragraphs[0]?.type === "p" ? spanText(paragraphs[0].spans) : "";
  const second = paragraphs[1]?.type === "p" ? spanText(paragraphs[1].spans) : "";
  return [first, second];
}

function stepItems(): Array<{ title: string; body: string }> {
  const section = freeDigitalToolsCatalog.sections.find((item) => item.id === "guide");
  const list = section?.blocks.find((block) => block.type === "ul");
  if (list?.type !== "ul") return [];
  return list.items.map((item) => {
    const text = spanText(item);
    const match = text.match(/^\d+\s+(.+?)\s+—\s+(.+)$/);
    if (!match) return { title: text, body: text };
    return { title: match[1], body: match[2] };
  });
}

function paragraphById(id: string): string {
  for (const section of freeDigitalToolsSections) {
    for (const block of section.blocks) {
      if (block.type === "p" && block.id === id) return spanText(block.spans);
    }
  }
  return "";
}

function cellText(cell: readonly Span[]): string {
  return spanText(cell);
}

function projectSections(): NonNullable<GuideContent["sections"]> {
  const faqs = freeDigitalToolsFaqs();
  const moreQuestions = {
    id: "more-questions",
    heading: "More questions",
    paragraphs: [],
    subsections: faqs.slice(5).map((faq) => ({
      heading: faq.question,
      body: faq.answer,
    })),
  };

  const sections: NonNullable<GuideContent["sections"]> = [];
  for (const section of freeDigitalToolsSections) {
    if (section.id === "faq") {
      sections.push(moreQuestions);
      continue;
    }

    const paragraphs: string[] = [];
    const subsections: Array<{ heading: string; body: string }> = [];
    let table: NonNullable<GuideContent["sections"]>[number]["table"];
    let subsection: { heading: string; parts: string[] } | null = null;
    let skippedOpening = 0;

    const pushText = (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      if (subsection) subsection.parts.push(trimmed);
      else paragraphs.push(trimmed);
    };
    const flush = () => {
      if (!subsection) return;
      subsections.push({ heading: subsection.heading, body: subsection.parts.join("\n") });
      subsection = null;
    };

    for (const block of section.blocks) {
      if (block.type === "directory") continue;
      if (section.id === "guide" && block.type === "ul") continue;
      if (section.id === "what-are" && block.type === "p" && skippedOpening < 2) {
        skippedOpening += 1;
        continue;
      }
      if (block.type === "h3") {
        flush();
        subsection = { heading: block.text, parts: [] };
        continue;
      }
      if (block.type === "table" && !subsection && !table) {
        table = {
          caption: block.caption,
          headers: [...block.headers],
          rows: block.rows.map((row) => row.map((cell) => cellText(cell))),
        };
        continue;
      }
      if (block.type === "ul") {
        for (const item of block.items) pushText(spanText(item));
        continue;
      }
      if (block.type === "p") pushText(spanText(block.spans));
      if (block.type === "pre") pushText(block.text);
    }
    flush();
    if (!paragraphs.length && !table && !subsections.length) continue;
    sections.push({
      id: section.id,
      heading: section.heading,
      paragraphs,
      ...(table ? { table } : {}),
      ...(subsections.length ? { subsections } : {}),
    });
  }
  return sections;
}

/** Plain-text projection used by checks and llms.txt. The page renders the catalog. */
export function getFreeDigitalToolsGuideContent(): GuideContent {
  const [intro, why] = openingParagraphs();
  return {
    intro,
    why,
    stepsHeading: "How to use this guide",
    steps: stepItems(),
    examples: [
      {
        title: "15% of 80",
        body: paragraphById("tool-percentage-calculator"),
      },
    ],
    sections: projectSections(),
    faqs: freeDigitalToolsFaqs().slice(0, 5),
    cta: {
      before: "To count words in a draft, use the",
      linkLabel: "Word Counter",
      href: "/tools/word-counter",
      after: ".",
    },
  };
}

assertCatalogShape();
