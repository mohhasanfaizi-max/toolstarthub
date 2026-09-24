"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { compressArticle, type CompressionLevel } from "@/lib/tools/article-compress";

const levels: Array<{ id: CompressionLevel; label: string }> = [
  { id: "light", label: "Light compression" },
  { id: "medium", label: "Medium compression" },
  { id: "strong", label: "Strong compression" },
];

export function AiArticleCompressorTool() {
  const [text, setText] = useState("");
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");
  const [counts, setCounts] = useState("");

  function run() {
    const result = compressArticle(text, level);
    if (!result.ok) {
      setError(result.error);
      setOutput("");
      setCounts("");
      return;
    }
    setError("");
    setOutput(result.text);
    setCounts(`${result.beforeWords} words in, ${result.afterWords} words out. Read the shorter draft before you use it.`);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This shortens a draft with fixed rules in your browser. It does not call an AI model, and it does not claim the result will pass a detector.
      </p>
      <div className="mt-4">
        <ToolField id="compress-text" label="Article">
          <textarea id="compress-text" value={text} onChange={(event) => setText(event.target.value)} rows={10} className={`${toolControlClass} min-h-40 resize-y`} />
        </ToolField>
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Compression</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {levels.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={level === item.id}
              className={`min-h-11 rounded-xl border px-3 py-2 text-sm ${
                level === item.id
                  ? "border-accent bg-accent-soft font-medium text-foreground"
                  : "border-border bg-background text-foreground"
              }`}
              onClick={() => setLevel(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </fieldset>
      {error ? (
        <div className="mt-4">
          <ToolError>{error}</ToolError>
        </div>
      ) : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>Shorten article</Button>
          <CopyButton value={output} label="Copy shorter draft" />
          <Button type="button" variant="ghost" onClick={() => { setText(""); setOutput(""); setError(""); setCounts(""); setLevel("medium"); }}>
            Clear
          </Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolOutput label="Shorter draft">
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{output || "The shorter draft will appear here."}</p>
          {counts ? <p className="mt-3 text-sm text-muted-foreground">{counts}</p> : null}
        </ToolOutput>
      </div>
    </ToolPanel>
  );
}
