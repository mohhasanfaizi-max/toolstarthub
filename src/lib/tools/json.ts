export type JsonToolResult =
  | { ok: true; output: string }
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
