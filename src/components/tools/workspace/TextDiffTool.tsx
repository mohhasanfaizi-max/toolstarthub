"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { diffText, formatDiffPlain, type DiffHunk, type DiffMode } from "@/lib/tools/text-diff";

export function TextDiffTool() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [mode, setMode] = useState<DiffMode>("lines");
  const [hunks, setHunks] = useState<DiffHunk[]>([]);
  const [added, setAdded] = useState(0);
  const [removed, setRemoved] = useState(0);
  const [unchanged, setUnchanged] = useState(0);
  const [error, setError] = useState("");
  const [ran, setRan] = useState(false);

  function compare() {
    const result = diffText(original, modified, mode);
    if (!result.ok) {
      setHunks([]);
      setRan(false);
      setError(result.error);
      return;
    }
    setError("");
    setHunks(result.hunks);
    setAdded(result.added);
    setRemoved(result.removed);
    setUnchanged(result.unchanged);
    setRan(true);
  }

  const plain = formatDiffPlain(hunks);
  const emptyBoth = original === "" && modified === "";

  return (
    <ToolPanel>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolField id="diff-original" label="Original">
          <textarea
            id="diff-original"
            value={original}
            onChange={(event) => setOriginal(event.target.value)}
            rows={12}
            spellCheck={false}
            className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
          />
        </ToolField>
        <ToolField id="diff-modified" label="Modified">
          <textarea
            id="diff-modified"
            value={modified}
            onChange={(event) => setModified(event.target.value)}
            rows={12}
            spellCheck={false}
            className={`${toolControlClass} min-h-48 resize-y font-mono text-sm`}
          />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolChoiceGroup
          legend="Compare"
          name="diff-mode"
          value={mode}
          onChange={setMode}
          options={[
            { id: "lines", label: "Lines" },
            { id: "words", label: "Words" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={compare}>
            Compare
          </Button>
          <CopyButton value={plain} label="Copy diff" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setOriginal("");
              setModified("");
              setHunks([]);
              setAdded(0);
              setRemoved(0);
              setUnchanged(0);
              setError("");
              setRan(false);
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4 space-y-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {ran ? (
          <>
            <ToolStatGrid
              items={[
                { label: "Added", value: added },
                { label: "Removed", value: removed },
                { label: "Unchanged", value: unchanged },
              ]}
            />
            <div>
              <p className="text-sm font-medium text-foreground">Result</p>
              {emptyBoth || hunks.length === 0 ? (
                <p className="mt-2 text-sm text-muted-foreground">
                  {emptyBoth ? "Both sides are empty." : "The two texts are the same."}
                </p>
              ) : (
                <ol className="mt-2 space-y-2">
                  {hunks.map((hunk, index) => (
                    <li
                      key={`${hunk.kind}-${index}`}
                      className={`rounded-xl border px-3 py-2 font-mono text-sm whitespace-pre-wrap break-words ${hunkClass(hunk.kind)}`}
                    >
                      <span className="mr-2 font-sans text-xs font-semibold uppercase tracking-wide">
                        {hunk.kind === "add" ? "Added" : hunk.kind === "remove" ? "Removed" : "Unchanged"}
                      </span>
                      {hunk.text}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Compared text is rendered as plain text, not HTML. Color is a hint; each block is also labeled
        Added, Removed, or Unchanged.
      </p>

      <ToolPrivacyNote>
        Your text is processed in your browser and is not uploaded to our server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

function hunkClass(kind: DiffHunk["kind"]): string {
  if (kind === "add") {
    return "border-emerald-300 bg-emerald-50 text-foreground dark:border-emerald-800 dark:bg-emerald-950/40";
  }
  if (kind === "remove") {
    return "border-red-300 bg-red-50 text-foreground dark:border-red-900 dark:bg-red-950/40";
  }
  return "border-border bg-muted text-foreground";
}
