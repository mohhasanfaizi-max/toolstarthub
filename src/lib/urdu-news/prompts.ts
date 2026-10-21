import { glossaryPromptLines } from "./glossary.ts";
import type { VersionId } from "./types.ts";

const SHARED_RULES = `Rules:
- Use only facts written in the Urdu. Do not add, guess, or infer background.
- Names, numbers, dates, places, amounts, and quotes come from the Urdu. Do not round a number, convert a currency, or change a date.
- Keep quotations as quotations.
- Keep attribution verbs faithful. "Claimed" stays claimed. "Alleged" stays alleged. Do not upgrade a verb to confirmed.
- If a word is unclear, mark it in [brackets]. Do not guess it.
- Write neutral news English.
- Convert Urdu digits ۰-۹ and Arabic-Indic digits ٠-٩ to Western digits 0-9.
- The glossary spellings win. If a glossary Urdu form appears, use its English spelling exactly.`;

export function translationPrompt(urdu: string): string {
  return `Translate this Pakistani Urdu news article into English for an editor.

${SHARED_RULES}

Lengths:
- brief: exactly 2 sentences. Key facts only: who, what, when, where. No quotations. 25 to 40 words.
- medium: 60 to 100 words. Include the key facts, the main quote, and the key date or figure.
- average: translate every sentence. Do not drop a sentence. Editors see this version labeled Full.

Return title, versions.brief, versions.medium, versions.average, and facts.
Each version has subtitle, body, and meta_description. The meta description is taken from that version and adds no new facts.
title is a news headline.
The body is only the news paragraphs. Do not put the title, subtitle, permalink, meta title, or meta description inside the body, and do not add labels there.
facts lists each person, place, number, date, and quote you used. type is person, place, number, date, or quote. english and urdu are the forms you used. in_brief, in_medium, and in_average say whether that fact appears in that version.

Glossary:
${glossaryPromptLines(urdu)}

Urdu article:
${urdu}`;
}

export function factCheckPrompt(urdu: string, versions: Record<VersionId, string>): string {
  return `Compare the Urdu source with each English version. Report only real problems. Do not report style, a shorter length, or a word choice that keeps the same meaning.

A real problem is only one of these:
- a changed name, number, date, place, or amount
- a fact that was not in the Urdu
- a quote that was changed or dropped
- a change in meaning
- a sentence from the Urdu that is missing in average (the full translation)

version is brief, medium, or average.
type is name, number, date, place, amount, added_fact, quote, meaning, or missing_sentence.
If there is no real problem, return an empty issues array.

Urdu:
${urdu}

brief:
${versions.brief}

medium:
${versions.medium}

average:
${versions.average}`;
}

export function expandPrompt(urdu: string, version: VersionId, text: string): string {
  return `Expand the selected English body into a news article with one headline, one intro paragraph, and body paragraphs.

${SHARED_RULES}
Do not invent background, names, numbers, dates, or quotes. If the selected version is shorter than the Urdu, you may restore facts that are in the Urdu and missing from the selection. Do not add anything the Urdu does not say.
The headline is its own field. The intro and body paragraphs are only the news prose. Do not repeat the headline, title, subtitle, permalink, meta title, or meta description inside those paragraphs. Do not add labels or headings inside them.

Selected version (${version === "average" ? "full" : version}):
${text}

Glossary:
${glossaryPromptLines(urdu)}

Urdu source:
${urdu}`;
}

export function humanizePrompt(urdu: string, text: string): string {
  return `Rewrite this news body so it reads naturally. Vary the sentence lengths. Use plain wording. Do not use stock phrases such as "in today's digital world", "let's dive into", "it is important to note", or "unlock the power".

Keep every fact, name, number, date, and quote exact. Do not add or remove a fact. Do not change an attribution verb. Keep a [bracket] note if the word is still unclear.
Return only the news paragraphs. Do not include a title, subtitle, permalink, meta title, meta description, headline, or any label. Do not add headings.

Glossary:
${glossaryPromptLines(urdu)}

English:
${text}

Urdu, for checking facts only:
${urdu}`;
}
