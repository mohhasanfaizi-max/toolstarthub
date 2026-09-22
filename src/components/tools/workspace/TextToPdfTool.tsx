"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/tools/DownloadButton";
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

export function TextToPdfTool() {
  const [input, setInput] = useState("");
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

  async function convert() {
    const size = parseFontSize(fontSize);
    if (!size.ok) {
      setError(size.error);
      setPdf(null);
      return;
    }
    setBusy(true);
    setError("");
    setPdf(null);
    setNote("");
    try {
      const result = await buildTextPdf(input, {
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
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolPanel>
      <ToolField
        id="text-pdf-input"
        label="Text"
        hint={`Plain text only. Maximum ${MAX_TEXT_PDF_CHARS.toLocaleString()} characters.`}
      >
        <textarea
          id="text-pdf-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={12}
          className={`${toolControlClass} min-h-48 resize-y`}
          placeholder="Paste or type the text to place on PDF pages."
        />
      </ToolField>

      <div className="mt-4">
        <ToolField id="text-pdf-title" label="Title (optional)">
          <input
            id="text-pdf-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ToolChoiceGroup
          legend="Page size"
          name="text-pdf-size"
          value={pageSize}
          onChange={setPageSize}
          options={[
            { id: "a4", label: "A4" },
            { id: "letter", label: "Letter" },
          ]}
        />
        <ToolChoiceGroup
          legend="Margins"
          name="text-pdf-margin"
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
        <ToolField id="text-pdf-font" label="Font size">
          <input
            id="text-pdf-font"
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
          name="text-pdf-leading"
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
        <input
          type="checkbox"
          checked={pageNumbers}
          onChange={(event) => setPageNumbers(event.target.checked)}
        />
        Show page numbers
      </label>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void convert()} disabled={busy}>
            {busy ? "Working…" : "Create PDF"}
          </Button>
          <DownloadButton blob={pdf} fileName="text.pdf" label="Download PDF" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
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
        The PDF is built with Helvetica, a standard PDF font. Latin text usually prints as written.
        Characters outside that font’s coverage are replaced with “?” rather than claiming universal
        Unicode support.
      </p>

      <ToolPrivacyNote>
        Your text is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
