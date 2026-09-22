export const MAX_LINE_TOOL_CHARS = 400_000;

export type DuplicateLineOptions = {
  caseInsensitive: boolean;
  trim: boolean;
  dropEmpty: boolean;
};

export type DuplicateLineResult =
  | {
      ok: true;
      output: string;
      originalLines: number;
      uniqueLines: number;
      duplicatesRemoved: number;
    }
  | { ok: false; error: string };

export function removeDuplicateLines(
  input: string,
  options: DuplicateLineOptions,
): DuplicateLineResult {
  const limited = limitText(input);
  if (!limited.ok) {
    return limited;
  }

  const lines = splitLines(input);
  const seen = new Set<string>();
  const kept: string[] = [];
  let duplicatesRemoved = 0;

  for (const line of lines) {
    if (options.dropEmpty && line.trim() === "") {
      continue;
    }
    const key = comparisonKey(line, options);
    if (seen.has(key)) {
      duplicatesRemoved += 1;
      continue;
    }
    seen.add(key);
    kept.push(line);
  }

  return {
    ok: true,
    output: kept.join("\n"),
    originalLines: lines.length,
    uniqueLines: kept.length,
    duplicatesRemoved,
  };
}

export function limitText(input: string): { ok: true } | { ok: false; error: string } {
  if (input.length > MAX_LINE_TOOL_CHARS) {
    return {
      ok: false,
      error: "Keep text under 400,000 characters so the browser stays responsive.",
    };
  }
  return { ok: true };
}

export function splitLines(input: string): string[] {
  if (input === "") {
    return [];
  }
  return input.replace(/\r\n/g, "\n").split("\n");
}

function comparisonKey(line: string, options: DuplicateLineOptions): string {
  let value = options.trim ? line.trim() : line;
  if (options.caseInsensitive) {
    value = value.toLowerCase();
  }
  return value;
}
