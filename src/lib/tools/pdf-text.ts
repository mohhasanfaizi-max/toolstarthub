import { MAX_PDF_BYTES } from "./pdf.ts";
import { parsePageRanges } from "./pdf-range.ts";

export const MAX_PDF_TEXT_PAGES = 80;
export const MAX_PDF_TEXT_BYTES = MAX_PDF_BYTES;

export type PdfTextItem = {
  str: string;
  transform?: number[];
};

export type PdfTextMode = "all" | "page" | "range";

export function parsePdfTextPages(
  mode: PdfTextMode,
  pageCount: number,
  selectedPage: number,
  range: string,
): { ok: true; pages: number[] } | { ok: false; error: string } {
  if (pageCount < 1) {
    return { ok: false, error: "This PDF has no pages." };
  }
  if (pageCount > MAX_PDF_TEXT_PAGES) {
    return {
      ok: false,
      error: `This tool extracts text from up to ${MAX_PDF_TEXT_PAGES} pages. Split the PDF first.`,
    };
  }

  if (mode === "all") {
    return {
      ok: true,
      pages: Array.from({ length: pageCount }, (_, index) => index + 1),
    };
  }

  if (mode === "page") {
    if (!Number.isInteger(selectedPage) || selectedPage < 1 || selectedPage > pageCount) {
      return { ok: false, error: "Choose a page that exists in this PDF." };
    }
    return { ok: true, pages: [selectedPage] };
  }

  return parsePageRanges(range, pageCount);
}

export function itemsToPlainText(items: PdfTextItem[]): string {
  if (items.length === 0) {
    return "";
  }

  type Located = { x: number; y: number; str: string };
  const located: Located[] = items.map((item) => {
    const transform = item.transform ?? [];
    return {
      str: item.str,
      x: typeof transform[4] === "number" ? transform[4] : 0,
      y: typeof transform[5] === "number" ? transform[5] : 0,
    };
  });

  const sorted = [...located].sort((a, b) => {
    const yGap = b.y - a.y;
    if (Math.abs(yGap) > 2.5) {
      return yGap;
    }
    return a.x - b.x;
  });

  const lines: string[] = [];
  let current: Located[] = [];
  let currentY = sorted[0]?.y ?? 0;

  for (const item of sorted) {
    if (current.length > 0 && Math.abs(currentY - item.y) > 2.5) {
      lines.push(joinLine(current));
      current = [item];
      currentY = item.y;
    } else {
      current.push(item);
      currentY = item.y;
    }
  }
  if (current.length > 0) {
    lines.push(joinLine(current));
  }

  return lines.join("\n").replace(/[ \t]+\n/g, "\n").trimEnd();
}

export function joinExtractedPages(
  pages: Array<{ page: number; text: string }>,
): { text: string; emptyPages: number } {
  let emptyPages = 0;
  const parts: string[] = [];
  for (const page of pages) {
    const trimmed = page.text.trim();
    if (trimmed === "") {
      emptyPages += 1;
      parts.push(`--- Page ${page.page} ---\n`);
    } else {
      parts.push(`--- Page ${page.page} ---\n${page.text}`);
    }
  }
  return { text: parts.join("\n\n").trim(), emptyPages };
}

function joinLine(items: Array<{ x: number; str: string }>): string {
  const ordered = [...items].sort((a, b) => a.x - b.x);
  let line = "";
  let previousEnd = Number.NEGATIVE_INFINITY;
  for (const item of ordered) {
    if (line && item.x - previousEnd > 1.2 && !line.endsWith(" ") && !item.str.startsWith(" ")) {
      line += " ";
    }
    line += item.str;
    previousEnd = item.x + item.str.length;
  }
  return line.replace(/[ \t]+/g, " ").trimEnd();
}
