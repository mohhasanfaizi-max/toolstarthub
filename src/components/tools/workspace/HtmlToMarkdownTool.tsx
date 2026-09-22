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
import { HTML_SAMPLE, htmlToMarkdown } from "@/lib/tools/html-markdown";

export function HtmlToMarkdownTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function convert() {
    const result = htmlToMarkdown(input);
    if (!result.ok) {
      setOutput("");
      setError(result.error);
      return;
    }
    setError("");
    setOutput(result.markdown);
  }

  const blob = output ? new Blob([output], { type: "text/markdown;charset=utf-8" }) : null;

  return (
    <ToolPanel>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolField
          id="html-md-input"
          label="HTML source"
          hint="Treated as text. Script and style blocks are ignored."
        >
          <textarea
            id="html-md-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={14}
            spellCheck={false}
            className={`${toolControlClass} min-h-52 resize-y font-mono text-sm`}
            placeholder="Paste HTML source here"
          />
        </ToolField>
        <ToolField id="html-md-output" label="Markdown">
          <textarea
            id="html-md-output"
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
          <Button type="button" variant="secondary" onClick={() => setInput(HTML_SAMPLE)}>
            Sample
          </Button>
          <CopyButton value={output} label="Copy Markdown" />
          <DownloadButton blob={blob} fileName="converted.md" label="Download .md" />
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
        The HTML is parsed as source text in this tab. It is not injected into the page and is not
        executed. Complex or invalid markup may convert only the tags this tool understands.
      </p>

      <ToolPrivacyNote>
        Your text is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
