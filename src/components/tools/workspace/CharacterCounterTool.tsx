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
import { useTx } from "@/i18n/tool-text";

export function CharacterCounterTool() {
  const tx = useTx();
  const [text, setText] = useState("");
  const stats = getTextStats(text);

  return (
    <ToolPanel>
      <ToolField
        id="character-counter-text"
        label={tx("Text")}
        hint={tx("Counts update as you type. Text stays in your browser.")}
      >
        <textarea
          id="character-counter-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={8}
          className={`${toolControlClass} min-h-36 resize-y`}
          placeholder={tx("Type or paste text...")}
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={() => setText("")}>{tx("Clear")}</Button>
          <CopyButton value={String(stats.characters)} label={tx("Copy count")} />
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
