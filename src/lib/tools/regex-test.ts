export type RegexFlag = "g" | "i" | "m" | "s" | "u";

export const REGEX_FLAGS: RegexFlag[] = ["g", "i", "m", "s", "u"];

export type RegexMatch = {
  text: string;
  index: number;
  groups: string[];
  named: Array<{ name: string; value: string }>;
};

export type RegexTestResult =
  | {
      ok: true;
      matched: boolean;
      count: number;
      truncated: boolean;
      global: boolean;
      matches: RegexMatch[];
    }
  | { ok: false; error: string };

const MAX_PATTERN = 300;
const MAX_TEXT = 100_000;
const MAX_MATCHES = 50;

function toMatch(match: RegExpExecArray): RegexMatch {
  const named = match.groups
    ? Object.entries(match.groups).map(([name, value]) => ({ name, value: value ?? "" }))
    : [];
  return {
    text: match[0],
    index: match.index,
    groups: match.slice(1).map((group) => group ?? ""),
    named,
  };
}

export function testRegularExpression(
  pattern: string,
  flags: string,
  text: string,
): RegexTestResult {
  if (pattern === "") {
    return { ok: false, error: "Enter a regular expression." };
  }
  if (pattern.length > MAX_PATTERN) {
    return { ok: false, error: "That pattern is too long to test on this page." };
  }
  if (text.length > MAX_TEXT) {
    return { ok: false, error: "Paste a shorter sample. This page tests up to 100,000 characters." };
  }

  const unique = [...new Set(flags.split(""))];
  if (unique.some((flag) => !REGEX_FLAGS.includes(flag as RegexFlag))) {
    return { ok: false, error: "Use only the flags g, i, m, s, and u." };
  }
  const ordered = REGEX_FLAGS.filter((flag) => unique.includes(flag)).join("");

  let expression: RegExp;
  try {
    expression = new RegExp(pattern, ordered);
  } catch (error) {
    const message = error instanceof SyntaxError ? error.message : "";
    return {
      ok: false,
      error: message ? `That pattern is not valid: ${message}` : "That pattern is not a valid regular expression.",
    };
  }

  const global = ordered.includes("g");
  const matches: RegexMatch[] = [];
  const scanner = new RegExp(expression.source, global ? ordered : `${ordered}g`);
  let match = scanner.exec(text);
  let guard = 0;

  while (match && guard < MAX_TEXT) {
    guard += 1;
    if (!global && matches.length === 1) {
      break;
    }
    if (matches.length === MAX_MATCHES) {
      return {
        ok: true,
        matched: true,
        count: MAX_MATCHES,
        truncated: true,
        global,
        matches,
      };
    }
    matches.push(toMatch(match));
    if (match[0] === "") {
      scanner.lastIndex += 1;
    }
    match = scanner.exec(text);
  }

  return {
    ok: true,
    matched: matches.length > 0,
    count: matches.length,
    truncated: false,
    global,
    matches,
  };
}
