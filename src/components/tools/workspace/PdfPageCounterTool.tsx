"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FileDropZone } from "@/components/tools/FileDropZone";
import { FileInfo } from "@/components/tools/ImagePreview";
import {
  ToolActions,
  ToolError,
  ToolOutput,
  ToolPanel,
  ToolPrivacyNote,
} from "@/components/tools/ToolForm";
import { formatBytes } from "@/lib/tools/image";
import { countPdfPages } from "@/lib/tools/pdf-edit";

export function PdfPageCounterTool() {
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function loadFile(file: File) {
    setBusy(true);
    setError("");
    setPageCount(null);
    try {
      const counted = await countPdfPages(file);
      if (!counted.ok) {
        setName("");
        setSize(0);
        setError(counted.error);
        return;
      }
      setName(file.name);
      setSize(file.size);
      setPageCount(counted.pageCount);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-count-file"
        label="PDF file"
        accept="application/pdf,.pdf"
        prompt="Drag and drop a PDF here, or choose a file."
        fileName={name || undefined}
        disabled={busy}
        hint="Reads the page count locally. This is not a PDF editor."
        onFile={(file) => void loadFile(file)}
      />

      {pageCount !== null ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "File name", value: name },
              { label: "File size", value: formatBytes(size) },
            ]}
          />
          <ToolOutput label="Total pages">
            <p className="text-3xl font-semibold tabular-nums">{pageCount}</p>
          </ToolOutput>
        </div>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setName("");
              setSize(0);
              setPageCount(null);
              setError("");
            }}
            disabled={busy}
          >
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">{error ? <ToolError>{error}</ToolError> : null}</div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        The count comes from the PDF structure. Cover pages, blank pages and
        appendices are included. Encrypted files cannot be opened.
      </p>

      <ToolPrivacyNote>
        Your PDF is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
