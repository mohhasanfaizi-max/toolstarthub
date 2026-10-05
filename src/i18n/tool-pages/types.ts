import type { ToolContent } from "@/data/tool-content";
import type { ToolTextDictionary } from "@/i18n/tool-text";

/** Everything shown on one translated tool page, keyed by English slug. */
export type ToolPageTranslation = {
  /** Short answer shown under "What is …?". */
  answer: string;
  /** How-to, examples, explanation, FAQ and other long content. */
  content: ToolContent;
  /** Workspace strings keyed by their English source text. */
  ui: ToolTextDictionary;
  /** Optional short note shown above the workspace (e.g. English-only output). */
  note?: string;
};

export type ToolPageTranslations = Record<string, ToolPageTranslation>;
