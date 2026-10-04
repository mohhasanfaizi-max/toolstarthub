import type { ToolContent } from "../../data/tool-content.ts";

/** Section headings for a translated tool page (ToolDetails is English-only). */
export type LocalizedDetailHeadings = {
  about: string;
  howTo: string;
  examples: string;
  features: string;
  howItWorks: string;
  tips: string;
  limitations: string;
  faq: string;
  /** Sentence with a {link} placeholder for the disclaimer link. */
  disclaimer: string;
  disclaimerLink: string;
};

/** Everything a tool page needs in one language. */
export type LocalizedToolPage = {
  metaTitle: string;
  quickAnswer: string;
  headings: LocalizedDetailHeadings;
  content: Required<Pick<ToolContent, "about" | "features" | "tips" | "limitations">> & ToolContent;
};
