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
import {
  buildAiPrompt,
  EMPTY_PROMPT_DRAFT,
  PROMPT_PRESETS,
  type PromptDraft,
} from "@/lib/tools/ai-prompt";
import { useTx } from "@/i18n/tool-text";

export function AiPromptGeneratorTool() {
  const tx = useTx();
  const [draft, setDraft] = useState<PromptDraft>(EMPTY_PROMPT_DRAFT);
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState("");
  const ai = useAiGenerate();

  function update(key: keyof PromptDraft, value: string) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function generate() {
    const result = buildAiPrompt(draft);
    if (!result.ok) {
      setError(result.error);
      setPrompt("");
      return;
    }
    setError("");
    setPrompt(result.prompt);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">{tx("Generate prompt builds a prompt in your browser. Generate with AI sends the fields you filled in to Google's Gemini API through ToolStarHub and returns a polished prompt. The text is not stored.")}</p>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">{tx("Presets")}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {PROMPT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className="min-h-11 rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground hover:bg-muted"
              onClick={() => setDraft((current) => ({ ...current, ...preset.draft }))}
            >
              {tx(preset.label)}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="prompt-use-case" label={tx("Platform or use case")}>
          <input id="prompt-use-case" value={draft.useCase} onChange={(event) => update("useCase", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-topic" label={tx("Topic")}>
          <input id="prompt-topic" value={draft.topic} onChange={(event) => update("topic", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-goal" label={tx("Goal")}>
          <input id="prompt-goal" value={draft.goal} onChange={(event) => update("goal", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-audience" label={tx("Audience")}>
          <input id="prompt-audience" value={draft.audience} onChange={(event) => update("audience", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-tone" label={tx("Tone")}>
          <input id="prompt-tone" value={draft.tone} onChange={(event) => update("tone", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-language" label={tx("Language")}>
          <input id="prompt-language" value={draft.language} onChange={(event) => update("language", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-format" label={tx("Output format")}>
          <input id="prompt-format" value={draft.format} onChange={(event) => update("format", event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="prompt-detail" label={tx("Level of detail")}>
          <select id="prompt-detail" value={draft.detail} onChange={(event) => update("detail", event.target.value)} className={toolControlClass}>
            <option value="Brief">{tx("Brief")}</option>
            <option value="Medium">{tx("Medium")}</option>
            <option value="High">{tx("High")}</option>
          </select>
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolField id="prompt-instructions" label={tx("Additional instructions")}>
          <textarea id="prompt-instructions" value={draft.instructions} onChange={(event) => update("instructions", event.target.value)} rows={4} className={`${toolControlClass} min-h-24 resize-y`} />
        </ToolField>
      </div>
      {error ? (
        <div className="mt-4">
          <ToolError>{tx(error)}</ToolError>
        </div>
      ) : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={generate}>{tx("Generate prompt")}</Button>
          <Button
            type="button"
            variant="secondary"
            disabled={ai.status === "loading"}
            onClick={() => {
              const input = [draft.topic, draft.goal, draft.instructions].filter(Boolean).join("\n");
              void ai.run("ai-prompt-generator", input, {
                topic: draft.topic,
                goal: draft.goal,
                audience: draft.audience,
                tone: draft.tone,
                language: draft.language,
                format: draft.format,
                detail: draft.detail,
                instructions: draft.instructions,
              });
            }}
          >{tx("Generate with AI")}</Button>
          <CopyButton value={prompt} label={tx("Copy prompt")} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setDraft(EMPTY_PROMPT_DRAFT);
              setPrompt("");
              setError("");
            }}
          >{tx("Clear")}</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolOutput label={tx("Prompt")}>
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{prompt || tx("The prompt will appear here.")}</p>
        </ToolOutput>
      </div>
      <AiResult status={ai.status} text={ai.text} error={ai.error} label={tx("AI prompt")} copyLabel={tx("Copy AI prompt")} />
    </ToolPanel>
  );
}
