import { missingGlossaryNames } from "./glossary.ts";
import { BRIEF_MAX_WORDS, BRIEF_MIN_WORDS, MEDIUM_MAX_WORDS, MEDIUM_MIN_WORDS, META_DESCRIPTION_MAX, META_TITLE_MAX, TITLE_MAX } from "./limits.ts";
import { numberValues, requiredNumbers } from "./numbers.ts";
import { countQuoteMarks } from "./quotes.ts";
import { countWords } from "./text.ts";
import type { FactIssue, Verification, VerificationCheck, VersionId } from "./types.ts";

export type CheckedVersion = {
  subtitle: string;
  body: string;
  meta_description: string;
};

export type CheckedDraft = {
  title: string;
  meta_title: string;
  versions: Record<VersionId, CheckedVersion>;
};

const VERSION_LABEL: Record<VersionId, string> = {
  brief: "Brief",
  medium: "Medium",
  average: "Full",
};

function statusOf(checks: VerificationCheck[]): Verification["status"] {
  return checks.some((check) => check.level === "warning" || check.level === "error") ? "needs_review" : "ok";
}

function finish(checks: VerificationCheck[]): Verification {
  return { status: statusOf(checks), checks };
}

function isSmallCount(value: string): boolean {
  return /^(?:[1-9]|10)$/.test(value);
}

function addedNumberChecks(urdu: string, english: string, label: string): VerificationCheck[] {
  const source = new Set(numberValues(urdu));
  const extra = [...new Set(numberValues(english))].filter((value) => !source.has(value));
  if (extra.length === 0) {
    return [{ level: "ok", message: `${label} uses only numbers that appear in the Urdu.` }];
  }
  return extra.map((value) => {
    if (isSmallCount(value)) {
      return { level: "warning" as const, message: `check: ${value} may be written in words in the Urdu` };
    }
    return { level: "error" as const, message: `${label} has ${value}, which is not in the Urdu.` };
  });
}

function bracketCheck(english: string, label: string): VerificationCheck {
  if (english.includes("[") || english.includes("]")) {
    return { level: "warning", message: `${label} marks an unclear word in brackets. Confirm it before publishing.` };
  }
  return { level: "ok", message: `${label} has no bracketed words.` };
}

function glossaryCheck(urdu: string, english: string): VerificationCheck[] {
  const missing = missingGlossaryNames(urdu, english);
  if (missing.length === 0) {
    return [{ level: "ok", message: "Glossary names found in the Urdu use the glossary spelling." }];
  }
  return missing.map((entry) => ({
    level: "warning",
    message: `The Urdu includes ${entry.urdu}, but the English is missing “${entry.english}”.`,
  }));
}

function lengthChecks(draft: CheckedDraft): VerificationCheck[] {
  const checks: VerificationCheck[] = [];
  const briefWords = countWords(draft.versions.brief.body);
  const mediumWords = countWords(draft.versions.medium.body);
  const fullWords = countWords(draft.versions.average.body);
  if (briefWords > BRIEF_MAX_WORDS) {
    checks.push({ level: "warning", message: `Brief is ${briefWords} words. The range is 25 to 40.` });
  } else if (briefWords < BRIEF_MIN_WORDS && fullWords > BRIEF_MIN_WORDS) {
    checks.push({ level: "warning", message: `Brief is ${briefWords} words. The range is 25 to 40.` });
  }
  if (mediumWords > MEDIUM_MAX_WORDS) {
    checks.push({ level: "warning", message: `Medium is ${mediumWords} words. The range is 60 to 100.` });
  } else if (mediumWords < MEDIUM_MIN_WORDS && fullWords > MEDIUM_MIN_WORDS) {
    checks.push({ level: "warning", message: `Medium is ${mediumWords} words. The range is 60 to 100.` });
  }
  if (draft.title.length > TITLE_MAX) {
    checks.push({ level: "warning", message: "The title is over 70 characters." });
  }
  if (draft.meta_title.length > META_TITLE_MAX) {
    checks.push({ level: "warning", message: "The meta title is over 60 characters." });
  }
  for (const id of ["brief", "medium", "average"] as const) {
    if (draft.versions[id].meta_description.length > META_DESCRIPTION_MAX) {
      checks.push({ level: "warning", message: `${VERSION_LABEL[id]} meta description is over 155 characters.` });
    }
  }
  return checks;
}

export function checkTranslation(urdu: string, draft: CheckedDraft): Verification {
  const checks: VerificationCheck[] = [];
  const english = [
    draft.title,
    draft.meta_title,
    ...Object.values(draft.versions).flatMap((version) => [version.subtitle, version.body, version.meta_description]),
  ].join("\n");

  checks.push(...addedNumberChecks(urdu, english, "The English"));

  const sourceNumbers = requiredNumbers(urdu);
  const fullNumbers = new Set(numberValues(draft.versions.average.body));
  const missing = [...new Set(sourceNumbers)].filter((value) => !fullNumbers.has(value));
  if (missing.length === 0) {
    checks.push({ level: "ok", message: "Full includes the numbers found in the Urdu." });
  } else {
    for (const value of missing) {
      checks.push({ level: "warning", message: `Full is missing ${value} from the Urdu.` });
    }
  }

  const briefQuotes = countQuoteMarks(
    `${draft.versions.brief.subtitle} ${draft.versions.brief.body} ${draft.versions.brief.meta_description}`,
  );
  if (briefQuotes > 0) {
    checks.push({ level: "error", message: "Brief includes a quotation. Brief must not quote anyone." });
  } else {
    checks.push({ level: "ok", message: "Brief has no quotations." });
  }

  checks.push(...lengthChecks(draft));

  const sourceWords = countWords(urdu);
  const fullWords = countWords(draft.versions.average.body);
  if (sourceWords > 0 && fullWords < sourceWords * 0.7) {
    checks.push({
      level: "warning",
      message: `Full is ${fullWords} words, under 70% of the Urdu word count (${sourceWords}).`,
    });
  } else {
    checks.push({ level: "ok", message: "Full is at least 70% of the Urdu word count." });
  }

  checks.push(bracketCheck(english, "The English"));
  checks.push(...glossaryCheck(urdu, english));
  return finish(checks);
}

export function checkDraftText(urdu: string, english: string, target: VersionId | "article"): Verification {
  const label = target === "article" ? "The article" : VERSION_LABEL[target];
  const checks: VerificationCheck[] = [...addedNumberChecks(urdu, english, label)];
  if (target === "average") {
    const missing = [...new Set(requiredNumbers(urdu))].filter((value) => !new Set(numberValues(english)).has(value));
    for (const value of missing) {
      checks.push({ level: "warning", message: `Full is missing ${value} from the Urdu.` });
    }
    const sourceWords = countWords(urdu);
    const fullWords = countWords(english);
    if (sourceWords > 0 && fullWords < sourceWords * 0.7) {
      checks.push({
        level: "warning",
        message: `Full is ${fullWords} words, under 70% of the Urdu word count (${sourceWords}).`,
      });
    }
  }
  if (target === "brief" && countQuoteMarks(english) > 0) {
    checks.push({ level: "error", message: "Brief includes a quotation. Brief must not quote anyone." });
  }
  checks.push(bracketCheck(english, label));
  checks.push(...glossaryCheck(urdu, english));
  return finish(checks);
}

function factCheckFlagsNumber(issues: FactIssue[], value: string): boolean {
  return issues.some((issue) => (issue.type === "number" || issue.type === "amount") && numberValues(issue.detail).includes(value));
}

export function withFactCheck(verification: Verification, issues: FactIssue[] | null): Verification {
  const checks = verification.checks.map((check) => {
    const small = /^check: (\d+) may be written in words in the Urdu$/.exec(check.message);
    if (!small || !issues || !factCheckFlagsNumber(issues, small[1])) return check;
    return { level: "error" as const, message: check.message };
  });
  if (issues === null) {
    checks.push({ level: "warning", message: "The fact check could not be read. Review the draft yourself." });
  } else if (issues.length === 0) {
    checks.push({
      level: "ok",
      message: "The fact check found no changed names, numbers, dates, places, quotes, or missing sentences.",
    });
  } else {
    for (const issue of issues) {
      const label = VERSION_LABEL[issue.version] ?? "Draft";
      checks.push({ level: "error", message: `${label}: ${issue.detail}` });
    }
  }
  return finish(checks);
}
