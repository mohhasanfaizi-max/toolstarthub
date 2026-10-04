import mammoth from "mammoth";

export const MAX_DOCX_BYTES = 20 * 1024 * 1024;

type DocxFileLike = { name: string; size: number } | null;

export function validateDocxFile(
  file: DocxFileLike,
): { ok: true } | { ok: false; error: string } {
  if (!file) {
    return { ok: false, error: "Choose a .docx file." };
  }
  if (!file.name.toLowerCase().endsWith(".docx")) {
    return { ok: false, error: "Use a .docx file. This tool does not read .doc files." };
  }
  if (file.size <= 0) {
    return { ok: false, error: "That file is empty." };
  }
  if (file.size > MAX_DOCX_BYTES) {
    return { ok: false, error: "Keep the file at 20 MB or smaller so this browser tab stays usable." };
  }
  return { ok: true };
}

export async function readDocxText(
  bytes: Uint8Array,
): Promise<{ ok: true; text: string } | { ok: false; error: string }> {
  try {
    // Copy the view's bytes into a standalone ArrayBuffer (same bytes as before).
    const arrayBuffer: ArrayBuffer = bytes.slice().buffer;
    // Node's mammoth reads `buffer`. The browser build reads `arrayBuffer`.
    const input = { buffer: bytes, arrayBuffer };
    const result = await mammoth.extractRawText(input);
    const text = typeof result.value === "string" ? result.value : "";
    if (text.trim() === "") {
      return { ok: false, error: "That document has no text to convert." };
    }
    return { ok: true, text };
  } catch {
    return { ok: false, error: "That file could not be read as a Word document." };
  }
}
