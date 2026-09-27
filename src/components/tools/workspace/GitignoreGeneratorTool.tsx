"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolOutput, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { GITIGNORE_PRESETS, generateGitignore, type GitignorePresetId } from "@/lib/tools/gitignore";

export function GitignoreGeneratorTool() {
  const [selected, setSelected] = useState<GitignorePresetId[]>(["node"]);
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof generateGitignore>>();

  function toggle(id: GitignorePresetId) {
    setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function generate() {
    const next = generateGitignore(selected, custom);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This writes .gitignore text in this tab. It does not change a repository.
      </p>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Templates</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {GITIGNORE_PRESETS.map((preset) => (
            <label key={preset.id} className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm">
              <input type="checkbox" checked={selected.includes(preset.id)} onChange={() => toggle(preset.id)} />
              {preset.title}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-4">
        <ToolField id="gitignore-custom" label="Custom patterns, one per line" hint="Blank lines are skipped.">
          <textarea id="gitignore-custom" value={custom} onChange={(event) => setCustom(event.target.value)} rows={4} spellCheck={false} className={`${toolControlClass} font-mono text-sm`} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={generate}>Generate</Button>
          <CopyButton value={result?.ok ? result.text : ""} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setSelected(["node"]); setCustom(""); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? <div className="mt-6"><ToolOutput label=".gitignore"><pre className="whitespace-pre-wrap font-mono text-sm">{result.text}</pre></ToolOutput></div> : null}
    </ToolPanel>
  );
}
