"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentLoadingTask, PDFDocumentProxy } from "pdfjs-dist";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo, ImagePreview } from "@/components/tools/ImagePreview";
import {
  ProgressBar,
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { formatBytes } from "@/lib/tools/image";
import {
  DEFAULT_PDF_DPI,
  MAX_PDF_EDGE,
  MAX_PDF_PAGES,
  type PdfDpi,
  type PdfPageMode,
  parsePageSelection,
  pdfScaleForPage,
  pdfScaleFromDpi,
  PDF_THUMB_SCALE,
  validatePdfFile,
} from "@/lib/tools/pdf";

type OutputFormat = "jpg" | "png" | "webp";

type PdfOutput = {
  page: number;
  blob: Blob;
  url: string;
  name: string;
  width: number;
  height: number;
};

const FORMAT_MIME: Record<OutputFormat, string> = {
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

const FORMAT_EXT: Record<OutputFormat, string> = {
  jpg: "jpg",
  png: "png",
  webp: "webp",
};

export function PdfToJpgTool() {
  const [file, setFile] = useState<File | null>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState<PdfPageMode>("first");
  const [selected, setSelected] = useState<number[]>([1]);
  const [rangeText, setRangeText] = useState("1-3");
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState<OutputFormat>("jpg");
  const [dpi, setDpi] = useState<PdfDpi>(DEFAULT_PDF_DPI);
  const [password, setPassword] = useState("");
  const [needsPassword, setNeedsPassword] = useState(false);
  const [thumbs, setThumbs] = useState<Array<{ page: number; url: string }>>([]);
  const [outputs, setOutputs] = useState<PdfOutput[]>([]);
  const [zipBlob, setZipBlob] = useState<Blob | null>(null);
  const [zipName, setZipName] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [percent, setPercent] = useState(0);
  const objectUrls = useRef<string[]>([]);
  const taskRef = useRef<PDFDocumentLoadingTask | null>(null);

  function trackUrl(url: string) {
    objectUrls.current.push(url);
    return url;
  }

  function revokeAll() {
    for (const url of objectUrls.current) {
      URL.revokeObjectURL(url);
    }
    objectUrls.current = [];
  }

  function revokeTracked(urls: readonly string[]) {
    if (urls.length === 0) {
      return;
    }
    const drop = new Set(urls);
    for (const url of drop) {
      URL.revokeObjectURL(url);
    }
    objectUrls.current = objectUrls.current.filter((url) => !drop.has(url));
  }

  async function releasePdf() {
    const task = taskRef.current;
    taskRef.current = null;
    setDoc(null);
    if (task) {
      await task.destroy();
    }
  }

  useEffect(() => {
    return () => {
      revokeAll();
      void taskRef.current?.destroy();
    };
  }, []);

  async function loadPdf(nextFile: File, nextPassword = "") {
    const validated = validatePdfFile(nextFile);
    if (!validated.ok) {
      setError(validated.error);
      return;
    }

    setBusy(true);
    setError("");
    setOutputs([]);
    setZipBlob(null);
    setZipName("");
    setThumbs([]);
    setProgress("Reading PDF…");
    try {
      await releasePdf();
      revokeAll();
      const data = new Uint8Array(await nextFile.arrayBuffer());
      const { ensurePdfJsRuntime } = await import("@/lib/tools/pdf-js-runtime");
      ensurePdfJsRuntime();
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.entry.mjs";
      const task = pdfjs.getDocument({
        data,
        password: nextPassword || undefined,
        wasmUrl: "/pdfjs/wasm/",
        enableXfa: false,
        disableAutoFetch: true,
        disableStream: true,
      });
      taskRef.current = task;
      const loaded = await task.promise;
      if (loaded.numPages > MAX_PDF_PAGES) {
        await releasePdf();
        setError(`This tool converts up to ${MAX_PDF_PAGES} pages. Split the PDF first.`);
        setFile(null);
        setPageCount(0);
        setNeedsPassword(false);
        return;
      }

      setFile(nextFile);
      setDoc(loaded);
      setPageCount(loaded.numPages);
      setSelected([1]);
      setRangeText(loaded.numPages > 1 ? `1-${Math.min(loaded.numPages, 3)}` : "1");
      setMode("first");
      setNeedsPassword(false);

      const previewCount = Math.min(loaded.numPages, 12);
      const nextThumbs: Array<{ page: number; url: string }> = [];
      for (let pageNumber = 1; pageNumber <= previewCount; pageNumber += 1) {
        setProgress(`Rendering preview ${pageNumber} of ${previewCount}…`);
        const rendered = await renderPage(loaded, pageNumber, PDF_THUMB_SCALE, 70, "jpg");
        nextThumbs.push({ page: pageNumber, url: trackUrl(URL.createObjectURL(rendered.blob)) });
      }
      setThumbs(nextThumbs);
    } catch (caught) {
      const kind = passwordKind(caught);
      if (kind) {
        setFile(nextFile);
        setNeedsPassword(true);
        setPageCount(0);
        setThumbs([]);
        setOutputs([]);
        setZipBlob(null);
        setError(
          kind === "incorrect"
            ? "That password is not correct. Try again. The password stays in this tab."
            : "This PDF is password-protected. Enter the password below. The password stays in this tab and is not sent anywhere.",
        );
        void releasePdf();
      } else {
        revokeAll();
        void releasePdf();
        setFile(null);
        setPageCount(0);
        setNeedsPassword(false);
        setThumbs([]);
        setOutputs([]);
        setZipBlob(null);
        setError(pdfErrorMessage(caught));
      }
    } finally {
      setBusy(false);
      setProgress("");
      setPercent(0);
    }
  }

  async function convert() {
    if (!doc) {
      setError(needsPassword ? "Enter the PDF password and unlock the file first." : "Choose a PDF file.");
      return;
    }
    const pages = parsePageSelection(mode, pageCount, selected, rangeText);
    if (!pages.ok) {
      setError(pages.error);
      return;
    }

    setBusy(true);
    setError("");
    setZipBlob(null);
    setZipName("");
    const nextOutputs: PdfOutput[] = [];
    const createdUrls: string[] = [];
    const scale = pdfScaleFromDpi(dpi);
    const ext = FORMAT_EXT[format];
    const baseName = (file?.name ?? "page").replace(/\.pdf$/i, "");
    try {
      for (let index = 0; index < pages.pages.length; index += 1) {
        const pageNumber = pages.pages[index] ?? 1;
        setProgress(`Converting page ${pageNumber} (${index + 1} of ${pages.pages.length})…`);
        setPercent(((index + 1) / pages.pages.length) * 100);
        const rendered = await renderPage(doc, pageNumber, scale, quality, format);
        const name = `${baseName}-page-${pageNumber}.${ext}`;
        const url = trackUrl(URL.createObjectURL(rendered.blob));
        createdUrls.push(url);
        nextOutputs.push({
          page: pageNumber,
          blob: rendered.blob,
          url,
          name,
          width: rendered.width,
          height: rendered.height,
        });
      }
      setOutputs(nextOutputs);
      if (nextOutputs.length > 1) {
        const { createStoreZip, uniqueZipName, blobToUint8Array } = await import("@/lib/tools/store-zip");
        const used = new Set<string>();
        const entries = [];
        for (const item of nextOutputs) {
          entries.push({
            name: uniqueZipName(used, item.name),
            data: await blobToUint8Array(item.blob),
          });
        }
        setZipBlob(createStoreZip(entries));
        setZipName(`${baseName}-pages.zip`);
      }
    } catch (caught) {
      revokeTracked([...createdUrls, ...outputs.map((item) => item.url)]);
      setOutputs([]);
      setZipBlob(null);
      setError(pdfErrorMessage(caught));
    } finally {
      setBusy(false);
      setProgress("");
      setPercent(0);
    }
  }

  function reset() {
    void releasePdf();
    revokeAll();
    setFile(null);
    setPageCount(0);
    setMode("first");
    setSelected([1]);
    setRangeText("1-3");
    setQuality(80);
    setFormat("jpg");
    setDpi(DEFAULT_PDF_DPI);
    setPassword("");
    setNeedsPassword(false);
    setThumbs([]);
    setOutputs([]);
    setZipBlob(null);
    setZipName("");
    setError("");
    setProgress("");
    setPercent(0);
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-file"
        label="PDF file"
        accept="application/pdf,.pdf"
        prompt="Drag and drop a PDF here, or choose a file."
        fileName={file?.name}
        disabled={busy}
        hint={`Conversion stays in this browser. Limits: ${MAX_PDF_PAGES} pages, 20 MB, and a longest edge of ${MAX_PDF_EDGE.toLocaleString()} pixels.`}
        onFile={(next) => {
          setPassword("");
          setNeedsPassword(false);
          void loadPdf(next);
        }}
      />

      {needsPassword ? (
        <div className="mt-4 space-y-3">
          <ToolField id="pdf-password" label="PDF password">
            <input
              id="pdf-password"
              data-testid="pdf-password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={toolControlClass}
              disabled={busy}
            />
          </ToolField>
          <Button
            type="button"
            onClick={() => file && void loadPdf(file, password)}
            disabled={busy || !file || password.length === 0}
          >
            Unlock PDF
          </Button>
        </div>
      ) : null}

      {file && pageCount > 0 ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "File name", value: file.name },
              { label: "File size", value: formatBytes(file.size) },
              { label: "Pages", value: String(pageCount) },
            ]}
          />
          {thumbs.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {thumbs.map((thumb) => (
                <ImagePreview
                  key={thumb.page}
                  src={thumb.url}
                  alt={`Preview of page ${thumb.page}`}
                  caption={`Page ${thumb.page}`}
                />
              ))}
            </div>
          ) : null}
          {pageCount > thumbs.length ? (
            <p className="text-sm text-muted-foreground">
              Showing the first {thumbs.length} page previews. You can still convert later pages.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Pages to convert"
          name="pdf-pages"
          value={mode}
          onChange={setMode}
          options={[
            { id: "first", label: "First page" },
            { id: "selected", label: "Selected pages" },
            { id: "range", label: "Page range" },
            { id: "all", label: "All pages" },
          ]}
          columns="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
        />
      </div>

      {mode === "selected" && pageCount > 0 ? (
        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-foreground">Selected pages</legend>
          <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <label
                key={page}
                className="flex min-h-11 items-center justify-center gap-1 rounded-xl border border-border text-sm"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(page)}
                  onChange={(event) => {
                    setSelected((current) =>
                      event.target.checked
                        ? [...current, page]
                        : current.filter((item) => item !== page),
                    );
                  }}
                />
                {page}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {mode === "range" ? (
        <div className="mt-4">
          <ToolField id="pdf-range" label="Page range">
            <input
              id="pdf-range"
              data-testid="pdf-range"
              type="text"
              inputMode="text"
              placeholder="e.g. 1-3, 5"
              value={rangeText}
              onChange={(event) => setRangeText(event.target.value)}
              className={toolControlClass}
              disabled={busy}
            />
            <p className="mt-1 text-sm text-muted-foreground">
              Use commas and dashes, such as 1-3, 5. Pages must be between 1 and {pageCount || MAX_PDF_PAGES}.
            </p>
          </ToolField>
        </div>
      ) : null}

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Output format"
          name="pdf-format"
          value={format}
          onChange={setFormat}
          options={[
            { id: "jpg", label: "JPG" },
            { id: "png", label: "PNG" },
            { id: "webp", label: "WebP" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
        />
      </div>

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Resolution"
          name="pdf-dpi"
          value={String(dpi)}
          onChange={(value) => setDpi(Number(value) as PdfDpi)}
          options={[
            { id: "72", label: "72 DPI" },
            { id: "108", label: "108 DPI (default)" },
            { id: "150", label: "150 DPI" },
            { id: "300", label: "300 DPI" },
          ]}
          columns="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          108 DPI is the previous default scale (1.5×). If a page would exceed a longest edge of{" "}
          {MAX_PDF_EDGE.toLocaleString()} pixels, the image is scaled down to that edge.
        </p>
      </div>

      {format === "png" ? (
        <p className="mt-4 text-sm text-muted-foreground" data-testid="png-quality-note">
          PNG is lossless, so there is no quality slider for this format.
        </p>
      ) : (
        <div className="mt-4">
          <ToolField id="pdf-quality" label={format === "webp" ? "WebP quality" : "JPG quality"}>
            <input
              id="pdf-quality"
              type="range"
              min={10}
              max={100}
              value={quality}
              onChange={(event) => setQuality(Number(event.target.value))}
              className="mt-3 w-full"
            />
            <p className="mt-1 text-sm tabular-nums">{quality}</p>
          </ToolField>
        </div>
      )}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void convert()} disabled={busy || !doc}>
            {busy ? "Working…" : "Convert"}
          </Button>
          {zipBlob && zipName ? (
            <DownloadButton blob={zipBlob} fileName={zipName} label="Download all as ZIP" />
          ) : (
            <Button type="button" variant="secondary" disabled>
              Download all as ZIP
            </Button>
          )}
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {progress ? <ProgressBar value={percent} label={progress} /> : null}
        {error ? <ToolError>{error}</ToolError> : null}
        {zipBlob ? (
          <p className="text-sm text-foreground" data-testid="zip-ready">
            {outputs.length} pages are ready in {zipName}.
          </p>
        ) : null}
        {outputs.map((item) => (
          <div key={`${item.page}-${item.name}`} className="space-y-3 rounded-2xl border border-border p-4">
            <ImagePreview
              src={item.url}
              alt={`${format.toUpperCase()} of PDF page ${item.page}`}
              caption={`${item.name} · ${item.width}×${item.height} px · ${formatBytes(item.blob.size)}`}
            />
            <DownloadButton blob={item.blob} fileName={item.name} label={`Download page ${item.page}`} />
          </div>
        ))}
      </div>

      <ToolPrivacyNote>
        Pages are rendered in this tab. The PDF and any password you enter are not sent to Tools Star Hub.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

async function renderPage(
  pdf: PDFDocumentProxy,
  pageNumber: number,
  scale: number,
  quality: number,
  format: OutputFormat,
): Promise<{ blob: Blob; width: number; height: number }> {
  const page = await pdf.getPage(pageNumber);
  const base = page.getViewport({ scale: 1 });
  const usedScale = pdfScaleForPage(base.width, base.height, scale);
  const viewport = page.getViewport({ scale: usedScale });
  const canvas = document.createElement("canvas");
  const width = Math.max(1, Math.floor(viewport.width));
  const height = Math.max(1, Math.floor(viewport.height));
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("This browser could not create a drawing surface.");
  }
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  // pdf.js 6 replaces the context when a canvas is passed. Passing both makes
  // getContext() return null, so the page never renders. Keep this context.
  await page.render({
    canvas: null,
    canvasContext: context,
    viewport,
  }).promise;

  const mime = FORMAT_MIME[format];
  const blob = await new Promise<Blob | null>((resolve) => {
    if (format === "png") {
      canvas.toBlob(resolve, mime);
    } else {
      canvas.toBlob(resolve, mime, quality / 100);
    }
  });
  if (!blob) {
    throw new Error(`The page could not be turned into a ${format.toUpperCase()}.`);
  }
  return { blob, width, height };
}

function passwordKind(error: unknown): "need" | "incorrect" | null {
  const name = error instanceof Error ? error.name : "";
  const message = error instanceof Error ? error.message : "";
  const code =
    error && typeof error === "object" && "code" in error
      ? Number((error as { code: unknown }).code)
      : 0;
  if (name === "PasswordException" || /password/i.test(message)) {
    if (code === 2 || /incorrect/i.test(message)) {
      return "incorrect";
    }
    return "need";
  }
  return null;
}

function pdfErrorMessage(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  const message = error instanceof Error ? error.message : "";
  if (passwordKind(error)) {
    return "This PDF is password-protected. Enter the password below. The password stays in this tab and is not sent anywhere.";
  }
  if (/Invalid PDF|corrupt|Expected/i.test(message) || name === "InvalidPDFException") {
    return "That file could not be read as a PDF. It may be damaged.";
  }
  return "The PDF could not be rendered. Try a smaller file or fewer pages.";
}
