"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo } from "@/components/tools/ImagePreview";
import { SortableFileList } from "@/components/tools/SortableFileList";
import {
  ToolActions,
  ToolError,
  ToolPanel,
  ToolPrivacyNote,
} from "@/components/tools/ToolForm";
import { formatBytes } from "@/lib/tools/image";
import { moveItem, removeAt } from "@/lib/tools/list";
import { bytesToPdfBlob, loadPdfBytes, mergePdfs, type LoadedPdf } from "@/lib/tools/pdf-edit";
import { MAX_MERGE_PAGES, MAX_MERGE_PDFS } from "@/lib/tools/pdf-layout";

type PdfItem = LoadedPdf & { id: string };

export function PdfMergerTool() {
  const [items, setItems] = useState<PdfItem[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [pdf, setPdf] = useState<Blob | null>(null);

  async function addFiles(files: File[]) {
    setError("");
    setPdf(null);
    const next = [...items];
    for (const file of files) {
      if (next.length >= MAX_MERGE_PDFS) {
        setError(`Merge up to ${MAX_MERGE_PDFS} PDFs at a time.`);
        break;
      }
      const loaded = await loadPdfBytes(file);
      if (!loaded.ok) {
        setError(loaded.error);
        continue;
      }
      next.push({ ...loaded.pdf, id: crypto.randomUUID() });
    }
    setItems(next);
  }

  async function merge() {
    setBusy(true);
    setError("");
    setPdf(null);
    try {
      const result = await mergePdfs(items);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setPdf(bytesToPdfBlob(result.bytes));
    } catch {
      setError("Those PDFs could not be merged. Try smaller files.");
    } finally {
      setBusy(false);
    }
  }

  const totalPages = items.reduce((sum, item) => sum + item.pageCount, 0);

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-merge-files"
        label="PDF files"
        accept="application/pdf,.pdf"
        multiple
        prompt="Drag and drop PDFs here, or choose files."
        fileName={items.length > 0 ? `${items.length} selected` : undefined}
        disabled={busy}
        hint={`Up to ${MAX_MERGE_PDFS} files and ${MAX_MERGE_PAGES} combined pages. Password-protected PDFs are not supported.`}
        onFiles={(files) => void addFiles(files)}
      />

      <SortableFileList
        items={items.map((item) => ({
          id: item.id,
          title: item.name,
          subtitle: `${item.pageCount} page${item.pageCount === 1 ? "" : "s"} · ${formatBytes(item.size)}`,
        }))}
        onMove={(from, to) => {
          setPdf(null);
          setItems((current) => moveItem(current, from, to));
        }}
        onRemove={(index) => {
          setPdf(null);
          setItems((current) => removeAt(current, index));
        }}
      />

      {items.length > 0 ? (
        <div className="mt-6">
          <FileInfo
            items={[
              { label: "Files", value: String(items.length) },
              { label: "Combined pages", value: String(totalPages) },
            ]}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void merge()} disabled={busy}>
            {busy ? "Merging…" : "Merge PDFs"}
          </Button>
          <DownloadButton blob={pdf} fileName="merged.pdf" label="Download PDF" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setItems([]);
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
        Your PDFs are processed in your browser and are not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
