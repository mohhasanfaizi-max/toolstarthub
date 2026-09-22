"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolField,
  ToolOutput,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { slugify } from "@/lib/tools/slug";

const SAMPLE = "How to Compress an Image Without Losing Quality";

export function SlugGeneratorTool() {
  const [input, setInput] = useState("");
  const slug = slugify(input);

  return (
    <ToolPanel>
      <ToolField
        id="slug-input"
        label="Title or text"
        hint="Accents are stripped from Latin letters. Other letters, such as Chinese, are kept."
      >
        <textarea
          id="slug-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          className={`${toolControlClass} min-h-28 resize-y`}
          placeholder={SAMPLE}
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={() => setInput(SAMPLE)}>
            Example
          </Button>
          <CopyButton value={slug} label="Copy slug" />
          <Button type="button" variant="ghost" onClick={() => setInput("")}>
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-6">
        <ToolOutput label="Generated slug">
          <p className="break-all font-mono text-lg font-semibold">
            {slug || "—"}
          </p>
        </ToolOutput>
      </div>
    </ToolPanel>
  );
}
