import { PDFDocument } from "pdf-lib";
import { MAX_MERGE_PAGES, MAX_MERGE_PDFS, MAX_SPLIT_PAGES } from "./pdf-layout.ts";
import { validatePdfBytes, validatePdfFile } from "./pdf.ts";

export type LoadedPdf = {
  name: string;
  size: number;
  pageCount: number;
  bytes: Uint8Array;
};

export async function loadPdfBytes(
  file: { name: string; type: string; size: number; arrayBuffer: () => Promise<ArrayBuffer> },
): Promise<{ ok: true; pdf: LoadedPdf } | { ok: false; error: string }> {
  const validated = validatePdfFile(file);
  if (!validated.ok) {
    return validated;
  }

  try {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const sniffed = validatePdfBytes(bytes);
    if (!sniffed.ok) {
      return sniffed;
    }
    const document = await PDFDocument.load(bytes, { ignoreEncryption: false });
    const pageCount = document.getPageCount();
    if (pageCount < 1) {
      return { ok: false, error: `${file.name} has no pages.` };
    }
    return {
      ok: true,
      pdf: {
        name: file.name,
        size: file.size,
        pageCount,
        bytes,
      },
    };
  } catch (error) {
    return { ok: false, error: pdfEditError(error, file.name) };
  }
}

export async function countPdfPages(
  file: { name: string; type: string; size: number; arrayBuffer: () => Promise<ArrayBuffer> },
): Promise<{ ok: true; pageCount: number } | { ok: false; error: string }> {
  const loaded = await loadPdfBytes(file);
  if (!loaded.ok) {
    return loaded;
  }
  return { ok: true, pageCount: loaded.pdf.pageCount };
}

export async function mergePdfs(
  files: LoadedPdf[],
): Promise<{ ok: true; bytes: Uint8Array } | { ok: false; error: string }> {
  if (files.length === 0) {
    return { ok: false, error: "Add at least two PDF files to merge." };
  }
  if (files.length === 1) {
    return { ok: false, error: "Add a second PDF. One file does not need merging." };
  }
  if (files.length > MAX_MERGE_PDFS) {
    return {
      ok: false,
      error: `Merge up to ${MAX_MERGE_PDFS} PDFs at a time.`,
    };
  }

  const totalPages = files.reduce((sum, file) => sum + file.pageCount, 0);
  if (totalPages > MAX_MERGE_PAGES) {
    return {
      ok: false,
      error: `Keep the combined page count at ${MAX_MERGE_PAGES} or fewer.`,
    };
  }

  try {
    const merged = await PDFDocument.create();
    for (const file of files) {
      const source = await PDFDocument.load(file.bytes, { ignoreEncryption: false });
      const pages = await merged.copyPages(source, source.getPageIndices());
      for (const page of pages) {
        merged.addPage(page);
      }
    }
    return { ok: true, bytes: await merged.save() };
  } catch (error) {
    return { ok: false, error: pdfEditError(error, "those PDFs") };
  }
}

export async function splitPdf(
  source: LoadedPdf,
  pages: number[],
): Promise<{ ok: true; bytes: Uint8Array } | { ok: false; error: string }> {
  if (pages.length === 0) {
    return { ok: false, error: "Select at least one page." };
  }
  if (pages.length > MAX_SPLIT_PAGES) {
    return {
      ok: false,
      error: `This tool copies up to ${MAX_SPLIT_PAGES} pages.`,
    };
  }
  if (pages.some((page) => page < 1 || page > source.pageCount)) {
    return { ok: false, error: "A selected page is outside this PDF." };
  }

  try {
    const document = await PDFDocument.load(source.bytes, { ignoreEncryption: false });
    const output = await PDFDocument.create();
    const copied = await output.copyPages(
      document,
      pages.map((page) => page - 1),
    );
    for (const page of copied) {
      output.addPage(page);
    }
    return { ok: true, bytes: await output.save() };
  } catch (error) {
    return { ok: false, error: pdfEditError(error, source.name) };
  }
}

export function bytesToPdfBlob(bytes: Uint8Array): Blob {
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return new Blob([buffer], { type: "application/pdf" });
}

function pdfEditError(error: unknown, label: string): string {
  const message = error instanceof Error ? error.message : "";
  if (/password|encrypt/i.test(message)) {
    return `${label} is password-protected. Unlock it first.`;
  }
  if (/invalid|corrupt|failed to parse/i.test(message)) {
    return `${label} could not be read as a PDF. It may be damaged.`;
  }
  return `${label} could not be processed. Try a smaller file.`;
}
