export type TextResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: "\u00A0",
};

export function encodeHtml(input: string): TextResult {
  return {
    ok: true,
    output: input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;"),
  };
}

export function decodeHtml(input: string): TextResult {
  try {
    const output = input.replace(
      /&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]+);/g,
      (match, entity: string) => {
        if (entity[0] === "#") {
          const code =
            entity[1] === "x" || entity[1] === "X"
              ? Number.parseInt(entity.slice(2), 16)
              : Number.parseInt(entity.slice(1), 10);
          if (!Number.isInteger(code) || code < 0 || code > 0x10ffff) {
            return match;
          }
          return String.fromCodePoint(code);
        }
        return NAMED_ENTITIES[entity] ?? match;
      },
    );
    return { ok: true, output };
  } catch {
    return { ok: false, error: "That HTML could not be decoded." };
  }
}
