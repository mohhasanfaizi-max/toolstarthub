export type JsonToolResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

export type JsonRepairResult =
  | { ok: true; output: string; changes: string[] }
  | { ok: false; error: string };

const MAX_JSON_CHARS = 750_000;

function parseJson(raw: string): { ok: true; value: unknown } | { ok: false; error: string } {
  const trimmed = raw.trim();

  if (trimmed === "") {
    return { ok: false, error: "Paste JSON to format, minify or validate." };
  }

  if (trimmed.length > MAX_JSON_CHARS) {
    return {
      ok: false,
      error: "This JSON is too large to process in the browser. Try a smaller snippet.",
    };
  }

  try {
    return { ok: true, value: JSON.parse(trimmed) };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid JSON.";
    return { ok: false, error: formatJsonError(message) };
  }
}

function formatJsonError(message: string): string {
  const position = message.match(/position\s+(\d+)/i)?.[1];
  if (position) {
    return `Invalid JSON at position ${position}. ${message}`;
  }
  return `Invalid JSON. ${message}`;
}

export function formatJson(raw: string): JsonToolResult {
  const parsed = parseJson(raw);
  if (!parsed.ok) {
    return parsed;
  }

  return { ok: true, output: JSON.stringify(parsed.value, null, 2) };
}

export function minifyJson(raw: string): JsonToolResult {
  const parsed = parseJson(raw);
  if (!parsed.ok) {
    return parsed;
  }

  return { ok: true, output: JSON.stringify(parsed.value) };
}

export function validateJson(raw: string): JsonToolResult {
  const parsed = parseJson(raw);
  if (!parsed.ok) {
    return parsed;
  }

  return { ok: true, output: "This JSON is valid." };
}

/**
 * Apply only conservative syntax fixes, then parse with JSON.parse.
 * Never evaluates the text. If the result is already valid JSON, values are
 * left unchanged and only formatting is applied.
 */
export function repairJson(raw: string): JsonRepairResult {
  const trimmed = raw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Paste JSON to format, minify or validate." };
  }
  if (trimmed.length > MAX_JSON_CHARS) {
    return {
      ok: false,
      error: "This JSON is too large to process in the browser. Try a smaller snippet.",
    };
  }

  const already = parseJson(trimmed);
  if (already.ok) {
    return {
      ok: true,
      output: JSON.stringify(already.value, null, 2),
      changes: [],
    };
  }

  const fixed = applySafeFixes(trimmed);
  const parsed = parseJson(fixed.text);
  if (!parsed.ok) {
    return {
      ok: false,
      error:
        "This could not be repaired safely. Repair only fixes comments, trailing commas, single quotes, and unquoted keys. It will not guess values or run the text as JavaScript.",
    };
  }

  return {
    ok: true,
    output: JSON.stringify(parsed.value, null, 2),
    changes: fixed.changes,
  };
}

function applySafeFixes(input: string): { text: string; changes: string[] } {
  let out = "";
  const flags = {
    comments: false,
    trailingCommas: false,
    singleQuotes: false,
    unquotedKeys: false,
  };
  let i = 0;
  const n = input.length;

  while (i < n) {
    const ch = input[i]!;

    if (ch === "/" && input[i + 1] === "/") {
      flags.comments = true;
      i += 2;
      while (i < n && input[i] !== "\n") i += 1;
      continue;
    }
    if (ch === "/" && input[i + 1] === "*") {
      flags.comments = true;
      i += 2;
      while (i < n && !(input[i] === "*" && input[i + 1] === "/")) i += 1;
      if (i < n) i += 2;
      continue;
    }

    if (ch === '"') {
      const { text, next } = readDoubleString(input, i);
      out += text;
      i = next;
      continue;
    }

    if (ch === "'") {
      const { text, next } = readSingleStringAsDouble(input, i);
      out += text;
      i = next;
      flags.singleQuotes = true;
      continue;
    }

    if (isIdentStart(ch)) {
      const start = i;
      i += 1;
      while (i < n && isIdentPart(input[i]!)) i += 1;
      const ident = input.slice(start, i);
      let j = i;
      while (j < n && /\s/.test(input[j]!)) j += 1;
      // Skip comments between key and colon
      while (j < n && input[j] === "/") {
        if (input[j + 1] === "/") {
          j += 2;
          while (j < n && input[j] !== "\n") j += 1;
          while (j < n && /\s/.test(input[j]!)) j += 1;
        } else if (input[j + 1] === "*") {
          j += 2;
          while (j < n && !(input[j] === "*" && input[j + 1] === "/")) j += 1;
          if (j < n) j += 2;
          while (j < n && /\s/.test(input[j]!)) j += 1;
        } else {
          break;
        }
      }
      if (input[j] === ":") {
        out += JSON.stringify(ident);
        flags.unquotedKeys = true;
        continue;
      }
      // Bare identifier used as a value — leave it so JSON.parse fails safely.
      out += ident;
      continue;
    }

    if (ch === ",") {
      // Look ahead over whitespace and comments for } or ]
      let j = i + 1;
      while (j < n) {
        if (/\s/.test(input[j]!)) {
          j += 1;
          continue;
        }
        if (input[j] === "/" && input[j + 1] === "/") {
          j += 2;
          while (j < n && input[j] !== "\n") j += 1;
          continue;
        }
        if (input[j] === "/" && input[j + 1] === "*") {
          j += 2;
          while (j < n && !(input[j] === "*" && input[j + 1] === "/")) j += 1;
          if (j < n) j += 2;
          continue;
        }
        break;
      }
      if (input[j] === "}" || input[j] === "]") {
        flags.trailingCommas = true;
        i += 1;
        continue;
      }
      out += ",";
      i += 1;
      continue;
    }

    out += ch;
    i += 1;
  }

  const changes: string[] = [];
  if (flags.comments) changes.push("Removed comments");
  if (flags.trailingCommas) changes.push("Removed trailing commas");
  if (flags.singleQuotes) changes.push("Converted single-quoted strings to double quotes");
  if (flags.unquotedKeys) changes.push("Quoted unquoted keys");
  return { text: out, changes };
}

function isIdentStart(ch: string): boolean {
  return /[A-Za-z_$]/.test(ch);
}

function isIdentPart(ch: string): boolean {
  return /[A-Za-z0-9_$]/.test(ch);
}

function readDoubleString(input: string, start: number): { text: string; next: number } {
  let i = start + 1;
  let text = '"';
  while (i < input.length) {
    const ch = input[i]!;
    text += ch;
    if (ch === "\\" && i + 1 < input.length) {
      text += input[i + 1];
      i += 2;
      continue;
    }
    if (ch === '"') {
      return { text, next: i + 1 };
    }
    i += 1;
  }
  return { text, next: i };
}

function readSingleStringAsDouble(input: string, start: number): { text: string; next: number } {
  let i = start + 1;
  let decoded = "";
  while (i < input.length) {
    const ch = input[i]!;
    if (ch === "\\" && i + 1 < input.length) {
      const next = input[i + 1]!;
      if (next === "'" || next === '"' || next === "\\") {
        decoded += next;
      } else if (next === "n") {
        decoded += "\n";
      } else if (next === "t") {
        decoded += "\t";
      } else if (next === "r") {
        decoded += "\r";
      } else {
        decoded += next;
      }
      i += 2;
      continue;
    }
    if (ch === "'") {
      return { text: JSON.stringify(decoded), next: i + 1 };
    }
    decoded += ch;
    i += 1;
  }
  // Unclosed string: return a deliberately invalid fragment so JSON.parse fails.
  return { text: JSON.stringify(decoded).slice(0, -1), next: i };
}
