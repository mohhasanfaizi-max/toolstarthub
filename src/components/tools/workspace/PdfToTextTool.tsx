"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo } from "@/components/tools/ImagePreview";
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
import { loadPdfBytes } from "@/lib/tools/pdf-edit";
import { openPdfJsDocument, pdfClientError } from "@/lib/tools/pdf-js-client";
import {
  MAX_PDF_TEXT_PAGES,
  itemsToPlainText,
  joinExtractedPages,
  parsePdfTextPages,
  type PdfTextMode,
} from "@/lib/tools/pdf-text";
import { validatePdfFile } from "@/lib/tools/pdf";

export function PdfToTextTool() {
  const [file, setFile] = useState<File | null>(null);
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState<PdfTextMode>("all");
  const [selectedPage, setSelectedPage] = useState(1);
  const [range, setRange] = useState("1-1");
  const [text, setText] = useState("");
  const [emptyPages, setEmptyPages] = useState(0);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [percent, setPercent] = useState(0);
  const cancelled = useRef(false);

  useEffect(() => {
    return () => {
      cancelled.current = true;
    };
  }, []);

  async function loadFile(next: File) {
    const validated = validatePdfFile(next);
    if (!validated.ok) {
      setError(validated.error);
      return;
    }
    setBusy(true);
    setError("");
    setText("");
    setEmptyPages(0);
    setProgress("Reading PDF…");
    try {
      const loaded = await loadPdfBytes(next);
      if (!loaded.ok) {
        reset();
        setError(loaded.error);
        return;
      }
      if (loaded.pdf.pageCount > MAX_PDF_TEXT_PAGES) {
        reset();
        setError(`This tool extracts text from up to ${MAX_PDF_TEXT_PAGES} pages. Split the PDF first.`);
        return;
      }
      setFile(next);
      setBytes(loaded.pdf.bytes);
      setPageCount(loaded.pdf.pageCount);
      setSelectedPage(1);
      setRange(loaded.pdf.pageCount > 1 ? `1-${loaded.pdf.pageCount}` : "1");
    } catch (caught) {
      reset();
      setError(pdfClientError(caught));
    } finally {
      setBusy(false);
      setProgress("");
    }
  }

  function reset() {
    setFile(null);
    setBytes(null);
    setPageCount(0);
    setText("");
    setEmptyPages(0);
    setError("");
    setProgress("");
    setPercent(0);
  }

  async function extract() {
    if (!file || !bytes) {
      setError("Choose a PDF file.");
      return;
    }
    const pages = parsePdfTextPages(mode, pageCount, selectedPage, range);
    if (!pages.ok) {
      setError(pages.error);
      return;
    }

    setBusy(true);
    setError("");
    setText("");
    setEmptyPages(0);
    try {
      const { task, doc } = await openPdfJsDocument(bytes);
      try {
        const extracted: Array<{ page: number; text: string }> = [];
        for (let index = 0; index < pages.pages.length; index += 1) {
          if (cancelled.current) {
            return;
          }
          const pageNumber = pages.pages[index] ?? 1;
          setProgress(`Extracting page ${pageNumber} (${index + 1} of ${pages.pages.length})…`);
          setPercent(Math.round(((index + 1) / pages.pages.length) * 100));
          const page = await doc.getPage(pageNumber);
          const content = await page.getTextContent();
          const items = content.items.flatMap((item) =>
            "str" in item
              ? [{ str: item.str, transform: "transform" in item ? item.transform : undefined }]
              : [],
          );
          extracted.push({ page: pageNumber, text: itemsToPlainText(items) });
        }
        const joined = joinExtractedPages(extracted);
        setText(joined.text);
        setEmptyPages(joined.emptyPages);
      } finally {
        await task.destroy();
      }
    } catch (caught) {
      setError(pdfClientError(caught));
    } finally {
      setBusy(false);
      setProgress("");
    }
  }

  const textBlob = text ? new Blob([text], { type: "text/plain;charset=utf-8" }) : null;
  const downloadName = `${(file?.name ?? "document").replace(/\.pdf$/i, "")}.txt`;

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-text-file"
        label="PDF file"
        accept="application/pdf,.pdf"
        prompt="Drag and drop a PDF here, or choose a file."
        fileName={file?.name}
        disabled={busy}
        hint={`Extracts selectable text locally. Maximum ${MAX_PDF_TEXT_PAGES} pages and 20 MB. This is not OCR.`}
        onFile={(next) => void loadFile(next)}
      />

      {file ? (
        <div className="mt-6">
          <FileInfo
            items={[
              { label: "File name", value: file.name },
              { label: "File size", value: formatBytes(file.size) },
              { label: "Pages", value: String(pageCount) },
            ]}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Pages"
          name="pdf-text-pages"
          value={mode}
          onChange={setMode}
          columns="grid gap-2 sm:grid-cols-3"
          options={[
            { id: "all", label: "All pages" },
            { id: "page", label: "Selected page" },
            { id: "range", label: "Page range" },
          ]}
        />
      </div>

      {mode === "page" && pageCount > 0 ? (
        <div className="mt-4">
          <ToolField id="pdf-text-page" label="Page number">
            <input
              id="pdf-text-page"
              type="number"
              min={1}
              max={pageCount}
              value={selectedPage}
              onChange={(event) => setSelectedPage(Number(event.target.value))}
              className={toolControlClass}
            />
          </ToolField>
        </div>
      ) : null}

      {mode === "range" ? (
        <div className="mt-4">
          <ToolField id="pdf-text-range" label="Page range" hint="Example: 1-3,5">
            <input
              id="pdf-text-range"
              value={range}
              onChange={(event) => setRange(event.target.value)}
              className={toolControlClass}
            />
          </ToolField>
        </div>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void extract()} disabled={busy || !file}>
            {busy ? "Working…" : "Extract text"}
          </Button>
          <CopyButton value={text} label="Copy text" />
          <DownloadButton blob={textBlob} fileName={downloadName} label="Download .txt" />
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {progress ? <ProgressBar value={percent} label={progress} /> : null}
        {error ? <ToolError>{error}</ToolError> : null}
        {text !== "" || emptyPages > 0 ? (
          <ToolField
            id="pdf-text-output"
            label="Extracted text"
            hint={
              emptyPages > 0
                ? `${emptyPages} page${emptyPages === 1 ? "" : "s"} had no extractable text. Scanned or image-only PDFs need OCR, which this tool does not include.`
                : undefined
            }
          >
            <textarea
              id="pdf-text-output"
              value={text}
              readOnly
              rows={14}
              spellCheck={false}
              className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
            />
          </ToolField>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        This reads the PDF’s text layer. Scanned or image-only pages often produce little or no text
        because optical character recognition (OCR) is not included.
      </p>

      <ToolPrivacyNote>
        Your PDF is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
