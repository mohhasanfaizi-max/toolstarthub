"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo } from "@/components/tools/ImagePreview";
import {
  ProgressBar,
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolPanel,
  ToolPrivacyNote,
  ToolStatGrid,
} from "@/components/tools/ToolForm";
import { formatBytes, sizeReductionPercent } from "@/lib/tools/image";
import {
  COMPRESS_PRESETS,
  MAX_COMPRESS_PAGES,
  MAX_RASTER_COMPRESS_PAGES,
  buildJpegPagePdf,
  compressPdfBytes,
  getCompressPreset,
  validateCompressFile,
  type CompressPreset,
} from "@/lib/tools/pdf-compress";
import { bytesToPdfBlob, loadPdfBytes } from "@/lib/tools/pdf-edit";
import { openPdfJsDocument, pdfClientError, renderPdfPageToJpeg } from "@/lib/tools/pdf-js-client";

export function PdfCompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [preset, setPreset] = useState<CompressPreset>("balanced");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [percent, setPercent] = useState(0);
  const [output, setOutput] = useState<{ blob: Blob; bytes: number; name: string } | null>(null);
  const cancelled = useRef(false);

  useEffect(() => {
    return () => {
      cancelled.current = true;
    };
  }, []);

  async function loadFile(next: File) {
    const validated = validateCompressFile(next);
    if (!validated.ok) {
      setError(validated.error);
      return;
    }
    setBusy(true);
    setError("");
    setOutput(null);
    setProgress("Reading PDF…");
    try {
      const loaded = await loadPdfBytes(next);
      if (!loaded.ok) {
        resetFile();
        setError(loaded.error);
        return;
      }
      if (loaded.pdf.pageCount > MAX_COMPRESS_PAGES) {
        resetFile();
        setError(`This tool accepts up to ${MAX_COMPRESS_PAGES} pages. Split the PDF first.`);
        return;
      }
      setFile(next);
      setBytes(loaded.pdf.bytes);
      setPageCount(loaded.pdf.pageCount);
    } catch (caught) {
      resetFile();
      setError(pdfClientError(caught));
    } finally {
      setBusy(false);
      setProgress("");
    }
  }

  function resetFile() {
    setFile(null);
    setBytes(null);
    setPageCount(0);
    setOutput(null);
  }

  async function compress() {
    if (!file || !bytes) {
      setError("Choose a PDF file.");
      return;
    }
    const info = getCompressPreset(preset);
    if (info.rasterizes && pageCount > MAX_RASTER_COMPRESS_PAGES) {
      setError(
        `Strong compression rasterizes up to ${MAX_RASTER_COMPRESS_PAGES} pages. Use Balanced, or split the PDF first.`,
      );
      return;
    }

    setBusy(true);
    setError("");
    setOutput(null);
    setPercent(8);
    try {
      if (!info.rasterizes) {
        setProgress("Rewriting PDF…");
        const result = await compressPdfBytes(bytes, preset);
        if (!result.ok) {
          setError(result.error);
          return;
        }
        setOutput({
          blob: bytesToPdfBlob(result.bytes),
          bytes: result.bytes.byteLength,
          name: replacementName(file.name),
        });
        setPercent(100);
        return;
      }

      setProgress("Opening PDF…");
      const { task, doc } = await openPdfJsDocument(bytes);
      try {
        const pages: Array<{ width: number; height: number; jpeg: Uint8Array }> = [];
        for (let page = 1; page <= doc.numPages; page += 1) {
          if (cancelled.current) {
            return;
          }
          setProgress(`Rasterizing page ${page} of ${doc.numPages}…`);
          setPercent(Math.round((page / doc.numPages) * 90));
          const rendered = await renderPdfPageToJpeg(doc, page, info.scale, info.jpegQuality);
          const jpeg = new Uint8Array(await rendered.blob.arrayBuffer());
          pages.push({ width: rendered.width, height: rendered.height, jpeg });
          await yieldUi();
        }
        setProgress("Building compressed PDF…");
        const built = await buildJpegPagePdf(pages);
        if (!built.ok) {
          setError(built.error);
          return;
        }
        setOutput({
          blob: bytesToPdfBlob(built.bytes),
          bytes: built.bytes.byteLength,
          name: replacementName(file.name),
        });
        setPercent(100);
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

  const reduction =
    file && output ? sizeReductionPercent(file.size, output.bytes) : null;
  const selected = getCompressPreset(preset);

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-compress-file"
        label="PDF file"
        accept="application/pdf,.pdf"
        prompt="Drag and drop a PDF here, or choose a file."
        fileName={file?.name}
        disabled={busy}
        hint={`Processed locally. Maximum ${MAX_COMPRESS_PAGES} pages and 20 MB. Strong compression is limited to ${MAX_RASTER_COMPRESS_PAGES} pages.`}
        onFile={(next) => void loadFile(next)}
      />

      {file ? (
        <div className="mt-6">
          <FileInfo
            items={[
              { label: "File name", value: file.name },
              { label: "Original size", value: formatBytes(file.size) },
              { label: "Pages", value: String(pageCount) },
            ]}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Compression"
          name="pdf-compress-preset"
          value={preset}
          onChange={(next) => {
            setPreset(next);
            setOutput(null);
          }}
          columns="grid gap-2"
          options={COMPRESS_PRESETS.map((item) => ({
            id: item.id,
            label: item.label,
          }))}
        />
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{selected.description}</p>
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void compress()} disabled={busy || !file}>
            {busy ? "Working…" : "Compress"}
          </Button>
          <DownloadButton blob={output?.blob ?? null} fileName={output?.name ?? "compressed.pdf"} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              resetFile();
              setError("");
              setProgress("");
              setPercent(0);
            }}
            disabled={busy}
          >
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {progress ? <ProgressBar value={percent} label={progress} /> : null}
        {error ? <ToolError>{error}</ToolError> : null}
        {output && file ? (
          <ToolStatGrid
            items={[
              { label: "Original size", value: formatBytes(file.size) },
              { label: "Output size", value: formatBytes(output.bytes) },
              {
                label: "Change",
                value: reductionLabel(reduction),
              },
            ]}
          />
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Compression is not guaranteed. Some PDFs are already small and may stay similar in size or
        even grow slightly after rewriting. Low and Balanced keep text and vectors. Strong replaces
        each page with a JPEG, so text is no longer selectable.
      </p>

      <ToolPrivacyNote>
        Your PDF is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

function replacementName(name: string): string {
  return `${name.replace(/\.pdf$/i, "")}-compressed.pdf`;
}

function reductionLabel(value: number | null): string {
  if (value === null) {
    return "—";
  }
  if (value > 0.05) {
    return `${value.toFixed(1)}% smaller`;
  }
  if (value < -0.05) {
    return `${Math.abs(value).toFixed(1)}% larger`;
  }
  return "Similar size";
}

function yieldUi(): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 0);
  });
}
