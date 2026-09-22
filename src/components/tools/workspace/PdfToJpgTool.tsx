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
} from "@/components/tools/ToolForm";
import { formatBytes } from "@/lib/tools/image";
import {
  MAX_PDF_PAGES,
  parsePageSelection,
  pdfScaleForPage,
  PDF_RENDER_SCALE,
  PDF_THUMB_SCALE,
  validatePdfFile,
} from "@/lib/tools/pdf";

type Mode = "first" | "selected" | "all";

type PdfOutput = {
  page: number;
  blob: Blob;
  url: string;
  name: string;
};

export function PdfToJpgTool() {
  const [file, setFile] = useState<File | null>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState<Mode>("first");
  const [selected, setSelected] = useState<number[]>([1]);
  const [quality, setQuality] = useState(80);
  const [thumbs, setThumbs] = useState<Array<{ page: number; url: string }>>([]);
  const [outputs, setOutputs] = useState<PdfOutput[]>([]);
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

  async function loadPdf(nextFile: File) {
    const validated = validatePdfFile(nextFile);
    if (!validated.ok) {
      setError(validated.error);
      return;
    }

    setBusy(true);
    setError("");
    setOutputs([]);
    setThumbs([]);
    setProgress("Reading PDF…");
    try {
      await releasePdf();
      revokeAll();
      const data = new Uint8Array(await nextFile.arrayBuffer());
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";
      const task = pdfjs.getDocument({
        data,
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
        return;
      }

      setFile(nextFile);
      setDoc(loaded);
      setPageCount(loaded.numPages);
      setSelected([1]);
      setMode("first");

      const previewCount = Math.min(loaded.numPages, 12);
      const nextThumbs: Array<{ page: number; url: string }> = [];
      for (let pageNumber = 1; pageNumber <= previewCount; pageNumber += 1) {
        setProgress(`Rendering preview ${pageNumber} of ${previewCount}…`);
        const blob = await renderPage(loaded, pageNumber, PDF_THUMB_SCALE, 70);
        nextThumbs.push({ page: pageNumber, url: trackUrl(URL.createObjectURL(blob)) });
      }
      setThumbs(nextThumbs);
    } catch (caught) {
      void releasePdf();
      setFile(null);
      setPageCount(0);
      setError(pdfErrorMessage(caught));
    } finally {
      setBusy(false);
      setProgress("");
      setPercent(0);
    }
  }

  async function convert() {
    if (!doc) {
      setError("Choose a PDF file.");
      return;
    }
    const pages = parsePageSelection(mode, pageCount, selected);
    if (!pages.ok) {
      setError(pages.error);
      return;
    }

    setBusy(true);
    setError("");
    const nextOutputs: PdfOutput[] = [];
    try {
      for (let index = 0; index < pages.pages.length; index += 1) {
        const pageNumber = pages.pages[index] ?? 1;
        setProgress(`Converting page ${pageNumber} (${index + 1} of ${pages.pages.length})…`);
        setPercent(((index + 1) / pages.pages.length) * 100);
        const blob = await renderPage(doc, pageNumber, PDF_RENDER_SCALE, quality);
        const name = `${(file?.name ?? "page").replace(/\.pdf$/i, "")}-page-${pageNumber}.jpg`;
        nextOutputs.push({
          page: pageNumber,
          blob,
          url: trackUrl(URL.createObjectURL(blob)),
          name,
        });
      }
      setOutputs(nextOutputs);
    } catch (caught) {
      setOutputs([]);
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
    setQuality(80);
    setThumbs([]);
    setOutputs([]);
    setError("");
    setProgress("");
    setPercent(0);
  }

  function downloadAll() {
    outputs.forEach((item, index) => {
      window.setTimeout(() => {
        const anchor = document.createElement("a");
        anchor.href = item.url;
        anchor.download = item.name;
        document.body.append(anchor);
        anchor.click();
        anchor.remove();
      }, index * 250);
    });
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
        hint={`JPG conversion stays in this browser. Maximum ${MAX_PDF_PAGES} pages and 20 MB.`}
        onFile={(next) => void loadPdf(next)}
      />

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
            { id: "all", label: "All pages" },
          ]}
          columns="grid gap-2 sm:grid-cols-3"
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

      <div className="mt-4">
        <ToolField id="pdf-quality" label="JPG quality">
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

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void convert()} disabled={busy}>
            {busy ? "Working…" : "Convert"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={downloadAll}
            disabled={outputs.length === 0 || busy}
          >
            Download all
          </Button>
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {progress ? <ProgressBar value={percent} label={progress} /> : null}
        {error ? <ToolError>{error}</ToolError> : null}
        {outputs.map((item) => (
          <div key={item.page} className="space-y-3 rounded-2xl border border-border p-4">
            <ImagePreview src={item.url} alt={`JPG of PDF page ${item.page}`} caption={item.name} />
            <DownloadButton blob={item.blob} fileName={item.name} label={`Download page ${item.page}`} />
          </div>
        ))}
      </div>

      <ToolPrivacyNote>
        Your PDF is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

async function renderPage(
  pdf: PDFDocumentProxy,
  pageNumber: number,
  scale: number,
  quality: number,
): Promise<Blob> {
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
    canvas.toBlob(resolve, "image/jpeg", quality / 100);
  });
  if (!blob) {
    throw new Error("The page could not be turned into a JPG.");
  }
  return blob;
}

function pdfErrorMessage(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  const message = error instanceof Error ? error.message : "";
  if (name === "PasswordException" || /password/i.test(message)) {
    return "This PDF is password-protected. This tool cannot open locked files.";
  }
  if (/Invalid PDF|corrupt|Expected/i.test(message) || name === "InvalidPDFException") {
    return "That file could not be read as a PDF. It may be damaged.";
  }
  return "The PDF could not be rendered. Try a smaller file or fewer pages.";
}
