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

export function CharacterCounterTool() {
  const [text, setText] = useState("");
  const stats = getTextStats(text);

  return (
    <ToolPanel>
      <ToolField
        id="character-counter-text"
        label="Text"
        hint="Counts update as you type. Text stays in your browser."
      >
        <textarea
          id="character-counter-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={8}
          className={`${toolControlClass} min-h-36 resize-y`}
          placeholder="Type or paste text..."
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={() => setText("")}>
            Clear
          </Button>
          <CopyButton value={String(stats.characters)} label="Copy count" />
        </ToolActions>
      </div>

      <div className="mt-6">
        <ToolStatGrid
          items={[
            { label: "Characters", value: stats.characters },
            { label: "Characters without spaces", value: stats.charactersNoSpaces },
            { label: "Words", value: stats.words },
            { label: "Lines", value: stats.lines },
          ]}
        />
      </div>
    </ToolPanel>
  );
}
