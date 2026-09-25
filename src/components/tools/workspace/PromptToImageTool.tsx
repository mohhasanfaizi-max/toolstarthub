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
  buildImagePrompt,
  EMPTY_IMAGE_PROMPT,
  IMAGE_PROMPT_PRESETS,
  type ImagePromptDraft,
} from "@/lib/tools/image-prompt";

export function PromptToImageTool() {
  const [draft, setDraft] = useState<ImagePromptDraft>(EMPTY_IMAGE_PROMPT);
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState("");
  const [negative, setNegative] = useState("");
  const ai = useAiGenerate();

  function update(key: keyof ImagePromptDraft, value: string) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function generate() {
    const result = buildImagePrompt(draft);
    if (!result.ok) {
      setError(result.error);
      setPrompt("");
      setNegative("");
      return;
    }
    setError("");
    setPrompt(result.prompt);
    setNegative(result.negative);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        Build prompt writes an image prompt in your browser. Generate with AI sends your description to Google&apos;s Gemini API through ToolStarHub and returns a more detailed image prompt. This page does not render an image. The text is not stored.
      </p>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Style presets</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {IMAGE_PROMPT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className="min-h-11 rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground hover:bg-muted"
              onClick={() => setDraft((current) => ({ ...current, ...preset.draft }))}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {(
          [
            ["subject", "Subject", "prompt-image-subject"],
            ["environment", "Environment", "prompt-image-environment"],
            ["style", "Style", "prompt-image-style"],
            ["composition", "Composition", "prompt-image-composition"],
            ["lighting", "Lighting", "prompt-image-lighting"],
            ["camera", "Camera angle", "prompt-image-camera"],
            ["palette", "Colors", "prompt-image-palette"],
            ["aspectRatio", "Aspect ratio", "prompt-image-ratio"],
            ["mood", "Mood", "prompt-image-mood"],
            ["quality", "Quality and detail", "prompt-image-quality"],
          ] as const
        ).map(([key, label, id]) => (
          <ToolField key={key} id={id} label={label}>
            <input id={id} value={draft[key]} onChange={(event) => update(key, event.target.value)} className={toolControlClass} />
          </ToolField>
        ))}
      </div>
      <div className="mt-4">
        <ToolField id="prompt-image-negative" label="Negative prompt" hint="Things you want left out of the picture.">
          <textarea id="prompt-image-negative" value={draft.negative} onChange={(event) => update("negative", event.target.value)} rows={3} className={`${toolControlClass} min-h-20 resize-y`} />
        </ToolField>
      </div>
      {error ? (
        <div className="mt-4">
          <ToolError>{error}</ToolError>
        </div>
      ) : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={generate}>Build prompt</Button>
          <Button
            type="button"
            variant="secondary"
            disabled={ai.status === "loading"}
            onClick={() => {
              const input = [draft.subject, draft.environment, draft.style].filter(Boolean).join(". ");
              void ai.run("prompt-to-image", input, {
                subject: draft.subject,
                environment: draft.environment,
                style: draft.style,
                composition: draft.composition,
                lighting: draft.lighting,
                camera: draft.camera,
                colors: draft.palette,
                aspectRatio: draft.aspectRatio,
                mood: draft.mood,
                quality: draft.quality,
                negative: draft.negative,
              });
            }}
          >
            Generate with AI
          </Button>
          <CopyButton value={prompt} label="Copy prompt" />
          <CopyButton value={negative} label="Copy negative prompt" />
          <Button type="button" variant="ghost" onClick={() => { setDraft(EMPTY_IMAGE_PROMPT); setPrompt(""); setNegative(""); setError(""); }}>
            Clear
          </Button>
        </ToolActions>
      </div>
      <div className="mt-6 space-y-4">
        <ToolOutput label="Image prompt">
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{prompt || "The prompt will appear here."}</p>
        </ToolOutput>
        <ToolOutput label="Negative prompt">
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{negative || "Optional."}</p>
        </ToolOutput>
      </div>
      <AiResult status={ai.status} text={ai.text} error={ai.error} label="AI image prompt" copyLabel="Copy AI prompt" />
    </ToolPanel>
  );
}
