"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo } from "@/components/tools/ImagePreview";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { formatBytes } from "@/lib/tools/image";
import { bytesToPdfBlob, loadPdfBytes, splitPdf, type LoadedPdf } from "@/lib/tools/pdf-edit";
import { MAX_SPLIT_PAGES } from "@/lib/tools/pdf-layout";
import { parsePageRanges } from "@/lib/tools/pdf-range";

export function PdfSplitterTool() {
  const [source, setSource] = useState<LoadedPdf | null>(null);
  const [range, setRange] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [pdf, setPdf] = useState<Blob | null>(null);
  const parsedSelection = source ? parsePageRanges(range, source.pageCount) : null;
  const checkedPages = parsedSelection?.ok ? parsedSelection.pages : [];

  async function loadFile(file: File) {
    setBusy(true);
    setError("");
    setPdf(null);
    try {
      const loaded = await loadPdfBytes(file);
      if (!loaded.ok) {
        setSource(null);
        setError(loaded.error);
        return;
      }
      if (loaded.pdf.pageCount > MAX_SPLIT_PAGES) {
        setSource(null);
        setError(`This tool copies up to ${MAX_SPLIT_PAGES} pages. Split the file elsewhere first.`);
        return;
      }
      setSource(loaded.pdf);
      setRange("");
    } finally {
      setBusy(false);
    }
  }

  function togglePage(page: number, checked: boolean) {
    const current = parsedSelection?.ok ? parsedSelection.pages : [];
    const next = checked
      ? [...current, page]
      : current.filter((item) => item !== page);
    const unique = [...new Set(next)].sort((a, b) => a - b);
    setRange(unique.join(","));
    setPdf(null);
  }

  async function split() {
    if (!source) {
      setError("Choose a PDF file.");
      return;
    }
    const parsed = parsePageRanges(range, source.pageCount);
    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }
    setBusy(true);
    setError("");
    setPdf(null);
    try {
      const result = await splitPdf(source, parsed.pages);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setPdf(bytesToPdfBlob(result.bytes));
    } catch {
      setError("Those pages could not be copied. Try a smaller PDF.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-split-file"
        label="PDF file"
        accept="application/pdf,.pdf"
        prompt="Drag and drop a PDF here, or choose a file."
        fileName={source?.name}
        disabled={busy}
        hint={`Copies selected pages locally. Maximum ${MAX_SPLIT_PAGES} pages.`}
        onFile={(file) => void loadFile(file)}
      />

      {source ? (
        <div className="mt-6">
          <FileInfo
            items={[
              { label: "File name", value: source.name },
              { label: "File size", value: formatBytes(source.size) },
              { label: "Pages", value: String(source.pageCount) },
            ]}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolField
          id="pdf-split-range"
          label="Pages"
          hint="Examples: 1-3, 2,5,7 or 1-3,6,9-11"
        >
          <input
            id="pdf-split-range"
            value={range}
            onChange={(event) => {
              setRange(event.target.value);
              setPdf(null);
            }}
            className={toolControlClass}
            placeholder="1-3,5,8-10"
            autoComplete="off"
          />
        </ToolField>
      </div>

      {source ? (
        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-foreground">Or pick pages</legend>
          <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
            {Array.from({ length: source.pageCount }, (_, index) => index + 1).map((page) => (
              <label
                key={page}
                className="flex min-h-11 items-center justify-center gap-1 rounded-xl border border-border text-sm"
              >
                <input
                  type="checkbox"
                  checked={checkedPages.includes(page)}
                  onChange={(event) => togglePage(page, event.target.checked)}
                />
                {page}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void split()} disabled={busy}>
            {busy ? "Splitting…" : "Create PDF"}
          </Button>
          <DownloadButton blob={pdf} fileName="split.pdf" label="Download PDF" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setSource(null);
              setRange("");
              setError("");
              setPdf(null);
            }}
            disabled={busy}
          >
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">{error ? <ToolError>{error}</ToolError> : null}</div>

      <ToolPrivacyNote>
        Your PDF is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
