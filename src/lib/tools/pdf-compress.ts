import { PDFDocument } from "pdf-lib";
import { MAX_PDF_BYTES, MAX_PDF_PAGES, validatePdfFile } from "./pdf.ts";

export const MAX_COMPRESS_PAGES = 80;
export const MAX_RASTER_COMPRESS_PAGES = MAX_PDF_PAGES;

export type CompressPreset = "light" | "balanced" | "strong";

export type CompressPresetInfo = {
  id: CompressPreset;
  label: string;
  description: string;
  rasterizes: boolean;
  jpegQuality: number;
  scale: number;
};

export const COMPRESS_PRESETS: CompressPresetInfo[] = [
  {
    id: "light",
    label: "Low compression / higher quality",
    description:
      "Rewrites the PDF with object streams. Page content stays as vectors and text. Size often drops only a little.",
    rasterizes: false,
    jpegQuality: 0.82,
    scale: 1.35,
  },
  {
    id: "balanced",
    label: "Balanced",
    description:
      "Copies pages into a new PDF and drops unused objects. Text and vectors are kept. Compression is not guaranteed.",
    rasterizes: false,
    jpegQuality: 0.68,
    scale: 1.2,
  },
  {
    id: "strong",
    label: "Strong compression",
    description:
      "Renders each page to a JPEG and rebuilds the file. Selectable text and vector drawings are replaced by images.",
    rasterizes: true,
    jpegQuality: 0.52,
    scale: 1.05,
  },
];

export function getCompressPreset(id: CompressPreset): CompressPresetInfo {
  return COMPRESS_PRESETS.find((item) => item.id === id) ?? COMPRESS_PRESETS[1]!;
}

export async function compressPdfBytes(
  bytes: Uint8Array,
  preset: CompressPreset,
): Promise<{ ok: true; bytes: Uint8Array; pageCount: number } | { ok: false; error: string }> {
  if (preset === "strong") {
    return {
      ok: false,
      error: "Strong compression rasterizes pages in the browser and cannot run as a rewrite-only pass.",
    };
  }

  try {
    const source = await PDFDocument.load(bytes, { ignoreEncryption: false });
    const pageCount = source.getPageCount();
    if (pageCount < 1) {
      return { ok: false, error: "This PDF has no pages." };
    }
    if (pageCount > MAX_COMPRESS_PAGES) {
      return {
        ok: false,
        error: `This tool rewrites up to ${MAX_COMPRESS_PAGES} pages. Split the PDF first.`,
      };
    }

    if (preset === "light") {
      return {
        ok: true,
        pageCount,
        bytes: await source.save({ useObjectStreams: true }),
      };
    }

    const output = await PDFDocument.create();
    const copied = await output.copyPages(source, source.getPageIndices());
    for (const page of copied) {
      output.addPage(page);
    }
    return {
      ok: true,
      pageCount,
      bytes: await output.save({ useObjectStreams: true }),
    };
  } catch (error) {
    return { ok: false, error: compressError(error) };
  }
}

export async function buildJpegPagePdf(
  pages: Array<{ width: number; height: number; jpeg: Uint8Array }>,
): Promise<{ ok: true; bytes: Uint8Array } | { ok: false; error: string }> {
  if (pages.length === 0) {
    return { ok: false, error: "There are no pages to rebuild." };
  }
  if (pages.length > MAX_RASTER_COMPRESS_PAGES) {
    return {
      ok: false,
      error: `Strong compression handles up to ${MAX_RASTER_COMPRESS_PAGES} pages.`,
    };
  }

  try {
    const pdf = await PDFDocument.create();
    for (const page of pages) {
      const embedded = await pdf.embedJpg(page.jpeg);
      const width = Math.max(72, page.width);
      const height = Math.max(72, page.height);
      const next = pdf.addPage([width, height]);
      next.drawImage(embedded, { x: 0, y: 0, width, height });
    }
    return { ok: true, bytes: await pdf.save({ useObjectStreams: true }) };
  } catch {
    return { ok: false, error: "The compressed pages could not be written to a PDF." };
  }
}

export function validateCompressFile(
  file: { name: string; type: string; size: number } | null,
): { ok: true } | { ok: false; error: string } {
  const validated = validatePdfFile(file);
  if (!validated.ok) {
    return validated;
  }
  if (file && file.size > MAX_PDF_BYTES) {
    return {
      ok: false,
      error: "Keep PDFs at 20 MB or smaller so this browser tab stays usable.",
    };
  }
  return { ok: true };
}

function compressError(error: unknown): string {
  const message = error instanceof Error ? error.message : "";
  if (/password|encrypt/i.test(message)) {
    return "This PDF is password-protected. Unlock it first.";
  }
  if (/invalid|corrupt|failed to parse/i.test(message)) {
    return "That file could not be read as a PDF. It may be damaged.";
  }
  return "The PDF could not be compressed. Try a smaller file.";
}
