export const MAX_PDF_BYTES = 20 * 1024 * 1024;
export const MAX_PDF_PAGES = 40;
export const PDF_RENDER_SCALE = 1.5;
export const PDF_THUMB_SCALE = 0.35;
export const MAX_PDF_EDGE = 4096;
/** Default 108 DPI equals the existing 1.5 render scale (108 / 72). */
export const DEFAULT_PDF_DPI = 108;
export const PDF_DPI_PRESETS = [72, 108, 150, 300] as const;
export type PdfDpi = (typeof PDF_DPI_PRESETS)[number];
export type PdfPageMode = "first" | "selected" | "range" | "all";

export function pdfScaleFromDpi(dpi: number): number {
  return dpi / 72;
}

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

export function parsePageRange(
  input: string,
  pageCount: number,
): { ok: true; pages: number[] } | { ok: false; error: string } {
  if (pageCount < 1) {
    return { ok: false, error: "This PDF has no pages to convert." };
  }

  const parts = input.split(/[,;]+/).map((part) => part.trim()).filter(Boolean);
  if (parts.length === 0) {
    return { ok: false, error: "Enter a page range, such as 1-3, 5." };
  }

  const pages = new Set<number>();
  for (const part of parts) {
    const single = part.match(/^(\d+)$/);
    const span = part.match(/^(\d+)\s*[-–—]\s*(\d+)$/);
    let start: number;
    let end: number;
    if (single) {
      start = Number(single[1]);
      end = start;
    } else if (span) {
      start = Number(span[1]);
      end = Number(span[2]);
      if (start > end) {
        [start, end] = [end, start];
      }
    } else {
      return { ok: false, error: `“${part}” is not a valid page or range.` };
    }
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end > pageCount) {
      return { ok: false, error: `Pages must be between 1 and ${pageCount}.` };
    }
    for (let page = start; page <= end; page += 1) {
      pages.add(page);
    }
  }

  return { ok: true, pages: [...pages].sort((a, b) => a - b) };
}

export function parsePageSelection(
  mode: PdfPageMode,
  pageCount: number,
  selected: number[],
  rangeText = "",
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
  if (mode === "range") {
    return parsePageRange(rangeText, pageCount);
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
