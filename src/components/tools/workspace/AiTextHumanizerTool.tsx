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
import { AiResult, useAiGenerate } from "@/components/tools/useAiGenerate";
import { humanizeText } from "@/lib/tools/humanize";

export function AiTextHumanizerTool() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");
  const ai = useAiGenerate();

  function run() {
    const result = humanizeText(text);
    if (!result.ok) {
      setError(result.error);
      setOutput("");
      return;
    }
    setError("");
    setOutput(result.text);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Rewrite text uses a fixed phrase list in your browser. Humanize with AI sends the text to Google&apos;s Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.
      </p>
      <div className="mt-4">
        <ToolField id="humanize-text" label="Draft">
          <textarea id="humanize-text" value={text} onChange={(event) => setText(event.target.value)} rows={10} className={`${toolControlClass} min-h-40 resize-y`} />
        </ToolField>
      </div>
      {error ? (
        <div className="mt-4">
          <ToolError>{error}</ToolError>
        </div>
      ) : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>Rewrite text</Button>
          <Button
            type="button"
            variant="secondary"
            disabled={ai.status === "loading"}
            onClick={() => void ai.run("ai-text-humanizer", text)}
          >
            Humanize with AI
          </Button>
          <CopyButton value={output} label="Copy rewritten draft" />
          <Button type="button" variant="ghost" onClick={() => { setText(""); setOutput(""); setError(""); }}>
            Clear
          </Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolOutput label="Rewritten draft">
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{output || "The rewritten draft will appear here."}</p>
        </ToolOutput>
      </div>
      <AiResult status={ai.status} text={ai.text} error={ai.error} label="AI rewrite" copyLabel="Copy AI rewrite" />
    </ToolPanel>
  );
}
