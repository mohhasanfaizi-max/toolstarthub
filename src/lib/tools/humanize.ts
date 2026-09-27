export const HUMANIZE_MAX_CHARS = 4000;

const RULES: Array<[RegExp, string]> = [
  [/\bin today's (?:digital|fast-paced|modern) world,?\s*/gi, ""],
  [/\bin the ever-evolving landscape of\b/gi, "in"],
  [/\bwhether you(?:'re| are) a beginner or an expert,?\s*/gi, ""],
  [/\bunlock the power of\b/gi, "use"],
  [/\brevolutionize your (?:workflow|process)\b/gi, "change how you work"],
  [/\blet's dive into\b/gi, "here is"],
  [/\blet's explore\b/gi, "here is"],
  [/\blet's take a closer look at\b/gi, "look at"],
  [/\bunderstanding the importance of\b/gi, "why"],
  [/\bhere's everything you need to know about\b/gi, "here is"],
  [/\bit is important to note that\b/gi, ""],
  [/\bit's worth noting that\b/gi, ""],
  [/\bit goes without saying that\b/gi, ""],
  [/\bneedless to say,?\s*/gi, ""],
  [/\bat the end of the day,?\s*/gi, ""],
  [/\bthat being said,?\s*/gi, ""],
  [/\bfirst and foremost\b/gi, "first"],
  [/\beach and every\b/gi, "every"],
  [/\bwhen it comes to\b/gi, "for"],
  [/\bin the realm of\b/gi, "in"],
  [/\bplays a (?:crucial|vital|key) role in\b/gi, "matters for"],
  [/\ba testament to\b/gi, "shows"],
  [/\bdelve into\b/gi, "look at"],
  [/\butilize\b/gi, "use"],
  [/\bin conclusion,?\s*/gi, ""],
  [/\bultimately,?\s*/gi, ""],
  [/\bnot only\s+(.{1,80}?)\s+but also\b/gi, "$1 and"],
];

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function humanizeText(text: string): { ok: true; text: string } | { ok: false; error: string } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { ok: false, error: "Paste a draft first." };
  }
  if (trimmed.length > HUMANIZE_MAX_CHARS) {
    return { ok: false, error: "That text is too long for this rewrite. Shorten it and try again." };
  }
  if (wordCount(trimmed) < 12) {
    return { ok: false, error: "Paste a longer draft. A few words is not enough to rewrite." };
  }

  let next = trimmed.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n");
  for (const [pattern, replacement] of RULES) {
    next = next.replace(pattern, replacement);
  }
  next = next
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/[ ]{2,}/g, " ")
    .replace(/\s+\n/g, "\n")
    .trim();

  if (!next) {
    return { ok: false, error: "Nothing was left after the rewrite. Try different wording." };
  }

  return { ok: true, text: next };
}
