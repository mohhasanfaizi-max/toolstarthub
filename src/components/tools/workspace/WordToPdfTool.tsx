"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { FileDropZone } from "@/components/tools/FileDropZone";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { bytesToPdfBlob } from "@/lib/tools/pdf-edit";
import type { PageMargin } from "@/lib/tools/pdf-layout";
import {
  MAX_TEXT_PDF_CHARS,
  buildTextPdf,
  parseFontSize,
  type TextPdfLineSpacing,
  type TextPdfPageSize,
} from "@/lib/tools/text-to-pdf";
import { readDocxText, validateDocxFile } from "@/lib/tools/word-to-pdf";

export function WordToPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [pageSize, setPageSize] = useState<TextPdfPageSize>("a4");
  const [margin, setMargin] = useState<PageMargin>("medium");
  const [fontSize, setFontSize] = useState("12");
  const [lineSpacing, setLineSpacing] = useState<TextPdfLineSpacing>("1.5");
  const [pageNumbers, setPageNumbers] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [pdf, setPdf] = useState<Blob | null>(null);
  const [note, setNote] = useState("");

  function chooseFile(next: File) {
    const allowed = validateDocxFile(next);
    setPdf(null);
    setNote("");
    if (!allowed.ok) {
      setFile(null);
      setError(allowed.error);
      return;
    }
    setFile(next);
    setError("");
  }

  async function convert() {
    const size = parseFontSize(fontSize);
    if (!size.ok) {
      setError(size.error);
      setPdf(null);
      setNote("");
      return;
    }
    if (!file) {
      setError("Choose a .docx file.");
      setPdf(null);
      setNote("");
      return;
    }
    const allowed = validateDocxFile(file);
    if (!allowed.ok) {
      setError(allowed.error);
      setPdf(null);
      setNote("");
      return;
    }
    setBusy(true);
    setError("");
    setPdf(null);
    setNote("");
    try {
      const extracted = await readDocxText(new Uint8Array(await file.arrayBuffer()));
      if (!extracted.ok) {
        setError(extracted.error);
        return;
      }
      if (extracted.text.length > MAX_TEXT_PDF_CHARS) {
        setError(`Keep text under ${MAX_TEXT_PDF_CHARS.toLocaleString()} characters so the tab stays usable.`);
        return;
      }
      const result = await buildTextPdf(extracted.text, {
        pageSize,
        margin,
        fontSize: size.value,
        lineSpacing,
        title,
        pageNumbers,
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setPdf(bytesToPdfBlob(result.bytes));
      setNote(
        result.replaced > 0
          ? `Created ${result.pageCount} page${result.pageCount === 1 ? "" : "s"}. ${result.replaced} character${result.replaced === 1 ? " was" : "s were"} replaced because Helvetica does not cover every Unicode glyph.`
          : `Created ${result.pageCount} page${result.pageCount === 1 ? "" : "s"} using Helvetica.`,
      );
    } catch {
      setError("That file could not be read as a Word document.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This reads the words from a .docx file and places them in a plain PDF. Images, tables as grids, headers, footers, and text styling are left out. It is not a copy of the Word layout.
      </p>
      <div className="mt-4">
        <FileDropZone
          id="word-pdf-file"
          label="Word document"
          accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          hint="One .docx file, up to 20 MB. Older .doc files are not supported."
          prompt="Drag and drop a .docx file here, or choose a file."
          fileName={file?.name}
          disabled={busy}
          onFile={chooseFile}
        />
      </div>
      <div className="mt-4">
        <ToolField id="word-pdf-title" label="Title (optional)">
          <input id="word-pdf-title" value={title} onChange={(event) => setTitle(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ToolChoiceGroup
          legend="Page size"
          name="word-pdf-size"
          value={pageSize}
          onChange={setPageSize}
          options={[
            { id: "a4", label: "A4" },
            { id: "letter", label: "Letter" },
          ]}
        />
        <ToolChoiceGroup
          legend="Margins"
          name="word-pdf-margin"
          value={margin}
          onChange={setMargin}
          options={[
            { id: "none", label: "None" },
            { id: "small", label: "Small" },
            { id: "medium", label: "Medium" },
          ]}
        />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="word-pdf-font" label="Font size">
          <input
            id="word-pdf-font"
            type="number"
            min={8}
            max={24}
            value={fontSize}
            onChange={(event) => setFontSize(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
        <ToolChoiceGroup
          legend="Line spacing"
          name="word-pdf-leading"
          value={lineSpacing}
          onChange={setLineSpacing}
          columns="grid grid-cols-2 gap-2"
          options={[
            { id: "1", label: "1.0" },
            { id: "1.15", label: "1.15" },
            { id: "1.5", label: "1.5" },
            { id: "2", label: "2.0" },
          ]}
        />
      </div>
      <label className="mt-4 flex min-h-11 items-center gap-2 text-sm text-foreground">
        <input type="checkbox" checked={pageNumbers} onChange={(event) => setPageNumbers(event.target.checked)} />
        Show page numbers
      </label>
      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void convert()} disabled={busy}>
            {busy ? "Working…" : "Create PDF"}
          </Button>
          <DownloadButton blob={pdf} fileName="word.pdf" label="Download PDF" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setFile(null);
              setTitle("");
              setPdf(null);
              setError("");
              setNote("");
            }}
            disabled={busy}
          >
            Clear
          </Button>
        </ToolActions>
      </div>
      <div className="mt-4 space-y-3">
        {error ? <ToolError>{error}</ToolError> : null}
        {note ? <p className="text-sm leading-6 text-muted-foreground">{note}</p> : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        The PDF is built with Helvetica, a standard PDF font. Latin text usually prints as written. Characters outside that font’s coverage are replaced with “?” rather than claiming universal Unicode support.
      </p>
      <ToolPrivacyNote>The PDF is built in this tab from the .docx you choose. That file is not uploaded.</ToolPrivacyNote>
    </ToolPanel>
  );
}
