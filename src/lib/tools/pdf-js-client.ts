import type { PDFDocumentLoadingTask, PDFDocumentProxy } from "pdfjs-dist";
import { pdfScaleForPage, validatePdfBytes } from "./pdf.ts";

export async function openPdfJsDocument(data: Uint8Array): Promise<{
  task: PDFDocumentLoadingTask;
  doc: PDFDocumentProxy;
}> {
  const sniffed = validatePdfBytes(data);
  if (!sniffed.ok) {
    throw new Error("Invalid PDF");
  }
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";
  const task = pdfjs.getDocument({
    data,
    wasmUrl: "/pdfjs/wasm/",
    enableXfa: false,
    disableAutoFetch: true,
    disableStream: true,
  });
  const doc = await task.promise;
  return { task, doc };
}

export async function renderPdfPageToJpeg(
  pdf: PDFDocumentProxy,
  pageNumber: number,
  scale: number,
  quality: number,
): Promise<{ blob: Blob; width: number; height: number }> {
  const page = await pdf.getPage(pageNumber);
  const base = page.getViewport({ scale: 1 });
  const usedScale = pdfScaleForPage(base.width, base.height, scale);
  const viewport = page.getViewport({ scale: usedScale });
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.floor(viewport.width));
  canvas.height = Math.max(1, Math.floor(viewport.height));
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("This browser could not create a drawing surface.");
  }
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({
    canvasContext: context,
    canvas,
    viewport,
  }).promise;

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/jpeg", quality);
  });
  if (!blob) {
    throw new Error("The page could not be encoded as JPEG.");
  }
  return { blob, width: base.width, height: base.height };
}

export function pdfClientError(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  const message = error instanceof Error ? error.message : "";
  if (name === "PasswordException" || /password/i.test(message)) {
    return "This PDF is password-protected. This tool cannot open locked files.";
  }
  if (/Invalid PDF|corrupt|Expected/i.test(message) || name === "InvalidPDFException") {
    return "That file could not be read as a PDF. It may be damaged.";
  }
  return "The PDF could not be processed. Try a smaller file or fewer pages.";
}
