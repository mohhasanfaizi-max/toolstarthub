import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { contentBox, type PageMargin } from "./pdf-layout.ts";

export const MAX_TEXT_PDF_CHARS = 100_000;
export const TEXT_PDF_SIZES = ["a4", "letter"] as const;
export type TextPdfPageSize = (typeof TEXT_PDF_SIZES)[number];
export type TextPdfLineSpacing = "1" | "1.15" | "1.5" | "2";

const PAGE: Record<TextPdfPageSize, { width: number; height: number }> = {
  a4: { width: 595.28, height: 841.89 },
  letter: { width: 612, height: 792 },
};

const LINE_SPACING: Record<TextPdfLineSpacing, number> = {
  "1": 1,
  "1.15": 1.15,
  "1.5": 1.5,
  "2": 2,
};

export type TextToPdfOptions = {
  pageSize: TextPdfPageSize;
  margin: PageMargin;
  fontSize: number;
  lineSpacing: TextPdfLineSpacing;
  title: string;
  pageNumbers: boolean;
};

export function parseFontSize(raw: string): { ok: true; value: number } | { ok: false; error: string } {
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 8 || value > 24) {
    return { ok: false, error: "Use a font size between 8 and 24." };
  }
  return { ok: true, value: Math.round(value) };
}

export function toPdfSafeText(text: string): { text: string; replaced: number } {
  let replaced = 0;
  const mapped = Array.from(text, (char) => {
    const next = mapWinAnsiChar(char);
    if (next === "?" && !isWinAnsiChar(char)) {
      replaced += 1;
    }
    return next;
  }).join("");
  return { text: mapped, replaced };
}

export async function buildTextPdf(
  input: string,
  options: TextToPdfOptions,
): Promise<
  | { ok: true; bytes: Uint8Array; pageCount: number; replaced: number }
  | { ok: false; error: string }
> {
  if (input.trim() === "") {
    return { ok: false, error: "Enter some text to convert." };
  }
  if (input.length > MAX_TEXT_PDF_CHARS) {
    return {
      ok: false,
      error: `Keep text under ${MAX_TEXT_PDF_CHARS.toLocaleString()} characters so the tab stays usable.`,
    };
  }

  const fontSize = options.fontSize;
  if (fontSize < 8 || fontSize > 24) {
    return { ok: false, error: "Use a font size between 8 and 24." };
  }

  const safe = toPdfSafeText(input);
  const title = toPdfSafeText(options.title.trim());
  const pageSize = PAGE[options.pageSize];
  const box = contentBox(pageSize, options.margin);
  const leading = fontSize * LINE_SPACING[options.lineSpacing];
  const titleSize = Math.min(18, fontSize + 4);
  const footerSize = 9;
  const footerGap = options.pageNumbers ? 16 : 0;
  const usableHeight = Math.max(fontSize, box.height - footerGap);

  try {
    const pdf = await PDFDocument.create();
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const wrapped = wrapParagraphs(safe.text, (line) => font.widthOfTextAtSize(line, fontSize), box.width);
    const titleLines =
      title.text === ""
        ? []
        : wrapParagraphs(title.text, (line) => font.widthOfTextAtSize(line, titleSize), box.width);

    const lines: Array<{ text: string; size: number; leading: number }> = [
      ...titleLines.map((text) => ({
        text,
        size: titleSize,
        leading: titleSize * 1.25,
      })),
    ];
    if (titleLines.length > 0 && wrapped.length > 0) {
      lines.push({ text: "", size: fontSize, leading: fontSize * 0.6 });
    }
    for (const text of wrapped) {
      lines.push({ text, size: fontSize, leading });
    }
    if (lines.length === 0) {
      lines.push({ text: "", size: fontSize, leading });
    }

    const pages: Array<typeof lines> = [];
    let current: typeof lines = [];
    let used = 0;
    for (const line of lines) {
      const nextHeight = line.leading;
      if (current.length > 0 && used + nextHeight > usableHeight) {
        pages.push(current);
        current = [line];
        used = nextHeight;
      } else {
        current.push(line);
        used += nextHeight;
      }
    }
    if (current.length > 0) {
      pages.push(current);
    }

    const total = Math.max(1, pages.length);
    for (let index = 0; index < total; index += 1) {
      const page = pdf.addPage([pageSize.width, pageSize.height]);
      let y = box.y + box.height - fontSize;
      for (const line of pages[index] ?? []) {
        if (line.text) {
          page.drawText(line.text, {
            x: box.x,
            y,
            size: line.size,
            font,
            color: rgb(0.08, 0.1, 0.14),
          });
        }
        y -= line.leading;
      }
      if (options.pageNumbers) {
        const label = `${index + 1} / ${total}`;
        const width = font.widthOfTextAtSize(label, footerSize);
        page.drawText(label, {
          x: box.x + (box.width - width) / 2,
          y: Math.max(10, box.y - 4),
          size: footerSize,
          font,
          color: rgb(0.35, 0.4, 0.45),
        });
      }
    }

    return {
      ok: true,
      pageCount: total,
      replaced: safe.replaced + title.replaced,
      bytes: await pdf.save(),
    };
  } catch {
    return { ok: false, error: "The PDF could not be created from that text." };
  }
}

function wrapParagraphs(
  text: string,
  widthOf: (line: string) => number,
  maxWidth: number,
): string[] {
  const paragraphs = text.replace(/\r\n/g, "\n").split("\n");
  const lines: string[] = [];
  for (const paragraph of paragraphs) {
    if (paragraph === "") {
      lines.push("");
      continue;
    }
    lines.push(...wrapLine(paragraph, widthOf, maxWidth));
  }
  return lines;
}

function wrapLine(
  text: string,
  widthOf: (line: string) => number,
  maxWidth: number,
): string[] {
  const words = text.split(/(\s+)/);
  const lines: string[] = [];
  let current = "";

  const flush = () => {
    if (current !== "") {
      lines.push(current);
      current = "";
    }
  };

  for (const token of words) {
    if (token === "") {
      continue;
    }
    const candidate = current + token;
    if (current && widthOf(candidate) > maxWidth) {
      flush();
      if (widthOf(token) > maxWidth) {
        lines.push(...hardWrap(token, widthOf, maxWidth));
      } else {
        current = token.trimStart();
      }
    } else if (!current && widthOf(token) > maxWidth) {
      lines.push(...hardWrap(token, widthOf, maxWidth));
    } else {
      current = candidate;
    }
  }
  flush();
  return lines.length > 0 ? lines : [""];
}

function hardWrap(
  text: string,
  widthOf: (line: string) => number,
  maxWidth: number,
): string[] {
  const chars = Array.from(text);
  const lines: string[] = [];
  let current = "";
  for (const char of chars) {
    const candidate = current + char;
    if (current && widthOf(candidate) > maxWidth) {
      lines.push(current);
      current = char;
    } else {
      current = candidate;
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines;
}

function isWinAnsiChar(char: string): boolean {
  const code = char.codePointAt(0) ?? 0;
  if (code === 9 || code === 10 || code === 13) {
    return true;
  }
  if (code >= 32 && code <= 126) {
    return true;
  }
  if (code >= 160 && code <= 255) {
    return true;
  }
  return code === 0x20ac;
}

function mapWinAnsiChar(char: string): string {
  switch (char) {
    case "\u2018":
    case "\u2019":
      return "'";
    case "\u201C":
    case "\u201D":
      return '"';
    case "\u2013":
    case "\u2014":
      return "-";
    case "\u2026":
      return "...";
    case "\u00A0":
      return " ";
    case "\u20AC":
      return "\u20AC";
    default:
      return isWinAnsiChar(char) ? char : "?";
  }
}

