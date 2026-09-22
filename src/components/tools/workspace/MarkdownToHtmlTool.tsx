"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { MARKDOWN_SAMPLE, markdownToHtml } from "@/lib/tools/markdown";

export function MarkdownToHtmlTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function convert() {
    const result = markdownToHtml(input);
    if (!result.ok) {
      setOutput("");
      setError(result.error);
      return;
    }
    setError("");
    setOutput(result.html);
  }

  const blob = output ? new Blob([output], { type: "text/html;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolField id="md-input" label="Markdown">
          <textarea
            id="md-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={14}
            spellCheck={false}
            className={`${toolControlClass} min-h-52 resize-y font-mono text-sm`}
            placeholder="Paste Markdown here"
          />
        </ToolField>
        <ToolField
          id="md-output"
          label="HTML"
          hint="Output is HTML source as text. It is not executed on this page."
        >
          <textarea
            id="md-output"
            value={output}
            readOnly
            rows={14}
            spellCheck={false}
            className={`${toolControlClass} min-h-52 resize-y font-mono text-sm`}
          />
        </ToolField>
      </div>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={convert}>
            Convert
          </Button>
          <Button type="button" variant="secondary" onClick={() => setInput(MARKDOWN_SAMPLE)}>
            Sample
          </Button>
          <CopyButton value={output} label="Copy HTML" />
          <DownloadButton blob={blob} fileName="converted.html" label="Download .html" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setInput("");
              setOutput("");
              setError("");
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">{error ? <ToolError>{error}</ToolError> : null}</div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Raw HTML inside Markdown is escaped, not run. Links are limited to http, https, mailto,
        in-page hashes and site paths. There is no live HTML preview, so untrusted Markdown cannot
        execute scripts here.
      </p>

      <ToolPrivacyNote>
        Your text is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
