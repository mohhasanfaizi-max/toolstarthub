export const MAX_PDF_BYTES = 20 * 1024 * 1024;
export const MAX_PDF_PAGES = 40;
export const PDF_RENDER_SCALE = 1.5;
export const PDF_THUMB_SCALE = 0.35;
export const MAX_PDF_EDGE = 4096;

export type PdfFileLike = {
  name: string;
  type: string;
  size: number;
};

export type PdfValidation =
  | { ok: true }
  | { ok: false; error: string };

export function looksLikePdf(bytes: ArrayBuffer | Uint8Array): boolean {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const limit = Math.min(view.length, 1024);
  for (let index = 0; index <= limit - 5; index += 1) {
    if (
      view[index] === 0x25 &&
      view[index + 1] === 0x50 &&
      view[index + 2] === 0x44 &&
      view[index + 3] === 0x46 &&
      view[index + 4] === 0x2d
    ) {
      return true;
    }
  }
  return false;
}

export function validatePdfBytes(
  bytes: ArrayBuffer | Uint8Array,
): PdfValidation {
  if (looksLikePdf(bytes)) {
    return { ok: true };
  }
  return {
    ok: false,
    error: "That file could not be read as a PDF. It may be damaged.",
  };
}

export function validatePdfFile(file: PdfFileLike | null): PdfValidation {
  if (!file) {
    return { ok: false, error: "Choose a PDF file." };
  }

  const isPdf =
    file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  if (!isPdf) {
    return { ok: false, error: "Use a PDF file." };
  }

  if (file.size <= 0) {
    return { ok: false, error: "That file is empty. Choose another PDF." };
  }

  if (file.size > MAX_PDF_BYTES) {
    return {
      ok: false,
      error: "Keep PDFs at 20 MB or smaller so this browser tab stays usable.",
    };
  }

  return { ok: true };
}

export function parsePageSelection(
  mode: "first" | "all" | "selected",
  pageCount: number,
  selected: number[],
): { ok: true; pages: number[] } | { ok: false; error: string } {
  if (pageCount < 1) {
    return { ok: false, error: "This PDF has no pages to convert." };
  }
  if (pageCount > MAX_PDF_PAGES) {
    return {
      ok: false,
      error: `This tool converts up to ${MAX_PDF_PAGES} pages. Split the PDF first.`,
    };
  }

  if (mode === "first") {
    return { ok: true, pages: [1] };
  }
  if (mode === "all") {
    return {
      ok: true,
      pages: Array.from({ length: pageCount }, (_, index) => index + 1),
    };
  }

  const pages = [...new Set(selected)]
    .filter((page) => Number.isInteger(page) && page >= 1 && page <= pageCount)
    .sort((a, b) => a - b);

  if (pages.length === 0) {
    return { ok: false, error: "Select at least one page." };
  }

  return { ok: true, pages };
}

export function pdfScaleForPage(width: number, height: number, requested: number): number {
  const longest = Math.max(width, height) * requested;
  if (longest <= MAX_PDF_EDGE) {
    return requested;
  }
  return requested * (MAX_PDF_EDGE / longest);
}
