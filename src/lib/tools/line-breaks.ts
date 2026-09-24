export type LineBreakMode = "spaces" | "remove" | "paragraphs";

export type LineBreakResult =
  | { ok: true; text: string }
  | { ok: false; error: string };

function normalizeNewlines(value: string): string {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

export function removeLineBreaks(source: string, mode: LineBreakMode): LineBreakResult {
  if (source.trim() === "") {
    return { ok: false, error: "Paste some text first." };
  }

  const text = normalizeNewlines(source);

  if (mode === "remove") {
    return { ok: true, text: text.replace(/\n+/g, "") };
  }

  if (mode === "spaces") {
    return {
      ok: true,
      text: text.replace(/\n+/g, " ").replace(/[ \t]{2,}/g, " ").trim(),
    };
  }

  const paragraphs = text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n+/g, " ").replace(/[ \t]{2,}/g, " ").trim())
    .filter((paragraph) => paragraph.length > 0);

  return { ok: true, text: paragraphs.join("\n\n") };
}
