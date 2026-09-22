"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
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
import { bytesToPdfBlob } from "@/lib/tools/pdf-edit";
import {
  emptyMetadataFields,
  hasDocumentMetadata,
  readPdfMetadata,
  stripPdfMetadata,
  type PdfMetadataFields,
} from "@/lib/tools/pdf-meta";

const FIELD_LABELS: Array<{ key: keyof PdfMetadataFields; label: string }> = [
  { key: "title", label: "Title" },
  { key: "author", label: "Author" },
  { key: "subject", label: "Subject" },
  { key: "keywords", label: "Keywords" },
  { key: "creator", label: "Creator" },
  { key: "producer", label: "Producer" },
  { key: "creationDate", label: "Creation date" },
  { key: "modificationDate", label: "Modification date" },
];

export function PdfMetadataTool() {
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [fields, setFields] = useState<PdfMetadataFields>(emptyMetadataFields());
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [cleaned, setCleaned] = useState<Blob | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");

  async function loadFile(file: File) {
    setBusy(true);
    setError("");
    setCleaned(null);
    setStatus("");
    try {
      const result = await readPdfMetadata(file);
      if (!result.ok) {
        setName("");
        setSize(0);
        setPageCount(0);
        setBytes(null);
        setFields(emptyMetadataFields());
        setError(result.error);
        return;
      }
      setName(result.meta.filename);
      setSize(result.meta.fileSize);
      setPageCount(result.meta.pageCount);
      setFields({
        title: result.meta.title,
        author: result.meta.author,
        subject: result.meta.subject,
        keywords: result.meta.keywords,
        creator: result.meta.creator,
        producer: result.meta.producer,
        creationDate: result.meta.creationDate,
        modificationDate: result.meta.modificationDate,
      });
      setBytes(result.bytes);
      setStatus(
        hasDocumentMetadata({
          title: result.meta.title,
          author: result.meta.author,
          subject: result.meta.subject,
          keywords: result.meta.keywords,
          creator: result.meta.creator,
          producer: result.meta.producer,
          creationDate: result.meta.creationDate,
          modificationDate: result.meta.modificationDate,
        })
          ? "Standard document metadata is shown below."
          : "No standard document Info fields were found.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function removeMetadata() {
    if (!bytes) {
      setError("Choose a PDF file.");
      return;
    }
    setBusy(true);
    setError("");
    setCleaned(null);
    try {
      const result = await stripPdfMetadata(bytes);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setCleaned(bytesToPdfBlob(result.bytes));
      setStatus("Standard document metadata fields were cleared in the downloadable copy.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    setName("");
    setSize(0);
    setPageCount(0);
    setFields(emptyMetadataFields());
    setBytes(null);
    setCleaned(null);
    setError("");
    setStatus("");
  }

  return (
    <ToolPanel>
      <FileDropZone
        id="pdf-meta-file"
        label="PDF file"
        accept="application/pdf,.pdf"
        prompt="Drag and drop a PDF here, or choose a file."
        fileName={name || undefined}
        disabled={busy}
        hint="Reads and can strip standard document Info fields locally. This is not a forensic sanitizer."
        onFile={(file) => void loadFile(file)}
      />

      {name ? (
        <div className="mt-6 space-y-4">
          <FileInfo
            items={[
              { label: "File name", value: name },
              { label: "File size", value: formatBytes(size) },
              { label: "Pages", value: String(pageCount) },
            ]}
          />
          <dl className="grid gap-3 sm:grid-cols-2">
            {FIELD_LABELS.map((field) => (
              <div key={field.key} className="rounded-2xl bg-accent-soft px-4 py-4">
                <dt className="text-sm text-muted-foreground">{field.label}</dt>
                <dd className="mt-1 break-words text-sm text-foreground">
                  {fields[field.key] || "—"}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void removeMetadata()} disabled={busy || !bytes}>
            {busy ? "Working…" : "Remove metadata"}
          </Button>
          <DownloadButton
            blob={cleaned}
            fileName={name ? name.replace(/\.pdf$/i, "") + "-cleaned.pdf" : "cleaned.pdf"}
            label="Download cleaned PDF"
          />
          <Button type="button" variant="ghost" onClick={reset} disabled={busy}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {status ? (
          <ToolOutput label="Status">
            <p>{status}</p>
          </ToolOutput>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Removing Title, Author, Subject and similar Info fields does not make a PDF anonymous or
        forensically clean. Page content, annotations, embedded files, images, and other structures
        can still contain identifying information.
      </p>

      <ToolPrivacyNote>
        Your PDF is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
