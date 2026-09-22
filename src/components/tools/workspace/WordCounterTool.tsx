"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CopyButton } from "@/components/tools/CopyButton";
import { getTextStats } from "@/lib/tools/text-stats";

const SAMPLE =
  "ToolsTartHub counts words in your browser.\n\nPaste a paragraph, a list, or a full draft. Multiple spaces and blank lines are handled cleanly.";

export function WordCounterTool() {
  const [text, setText] = useState("");
  const stats = getTextStats(text);

  return (
    <ToolPanel>
      <ToolField
        id="word-counter-text"
        label="Text"
        hint="Counting happens in your browser. Nothing is sent to a server."
      >
        <textarea
          id="word-counter-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={10}
          className={`${toolControlClass} min-h-40 resize-y`}
          placeholder="Paste or type text here..."
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={() => setText(SAMPLE)}>
            Sample text
          </Button>
          <Button type="button" variant="secondary" onClick={() => setText("")}>
            Clear
          </Button>
          <CopyButton value={text} label="Copy text" />
        </ToolActions>
      </div>

      <div className="mt-6">
        <ToolStatGrid
          items={[
            { label: "Words", value: stats.words },
            { label: "Characters", value: stats.characters },
            { label: "Characters without spaces", value: stats.charactersNoSpaces },
            { label: "Sentences", value: stats.sentences },
            { label: "Paragraphs", value: stats.paragraphs },
            {
              label: "Reading time",
              value:
                stats.words === 0
                  ? "0 min"
                  : `${stats.readingMinutes} min`,
            },
          ]}
        />
      </div>
    </ToolPanel>
  );
}
