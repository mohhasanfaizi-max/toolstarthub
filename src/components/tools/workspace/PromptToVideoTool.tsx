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
  buildVideoPrompt,
  EMPTY_VIDEO_PROMPT,
  VIDEO_PROMPT_PRESETS,
  type VideoPromptDraft,
} from "@/lib/tools/video-prompt";
import { useTx } from "@/i18n/tool-text";

const fields = [
  ["subject", "Video subject", "prompt-video-subject"],
  ["scene", "Scene", "prompt-video-scene"],
  ["action", "Action", "prompt-video-action"],
  ["environment", "Environment", "prompt-video-environment"],
  ["cameraMove", "Camera movement", "prompt-video-move"],
  ["cameraAngle", "Camera angle", "prompt-video-angle"],
  ["lens", "Lens", "prompt-video-lens"],
  ["lighting", "Lighting", "prompt-video-lighting"],
  ["style", "Visual style", "prompt-video-style"],
  ["duration", "Duration", "prompt-video-duration"],
  ["aspectRatio", "Aspect ratio", "prompt-video-ratio"],
  ["mood", "Mood", "prompt-video-mood"],
] as const;

export function PromptToVideoTool() {
  const tx = useTx();
  const [draft, setDraft] = useState<VideoPromptDraft>(EMPTY_VIDEO_PROMPT);
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState("");
  const [negative, setNegative] = useState("");
  const ai = useAiGenerate();

  function update(key: keyof VideoPromptDraft, value: string) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function generate() {
    const result = buildVideoPrompt(draft);
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
      <p className="text-sm leading-6 text-muted-foreground">{tx("Build prompt writes a video prompt in your browser. Generate with AI sends your description to Google's Gemini API through ToolStarHub and returns a shot prompt. This page does not render a video. The text is not stored.")}</p>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">{tx("Presets")}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {VIDEO_PROMPT_PRESETS.map((preset) => (
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
        {fields.map(([key, label, id]) => (
          <ToolField key={key} id={id} label={tx(label)}>
            <input id={id} value={draft[key]} onChange={(event) => update(key, event.target.value)} className={toolControlClass} />
          </ToolField>
        ))}
      </div>
      <div className="mt-4 grid gap-4">
        <ToolField id="prompt-video-audio" label={tx("Audio or dialogue")}>
          <textarea id="prompt-video-audio" value={draft.audio} onChange={(event) => update("audio", event.target.value)} rows={3} className={`${toolControlClass} min-h-20 resize-y`} />
        </ToolField>
        <ToolField id="prompt-video-negative" label={tx("Negative prompt")}>
          <textarea id="prompt-video-negative" value={draft.negative} onChange={(event) => update("negative", event.target.value)} rows={3} className={`${toolControlClass} min-h-20 resize-y`} />
        </ToolField>
      </div>
      {error ? (
        <div className="mt-4">
          <ToolError>{tx(error)}</ToolError>
        </div>
      ) : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={generate}>{tx("Build prompt")}</Button>
          <Button
            type="button"
            variant="secondary"
            disabled={ai.status === "loading"}
            onClick={() => {
              const input = [draft.subject, draft.scene, draft.action, draft.environment].filter(Boolean).join(". ");
              void ai.run("prompt-to-video", input, {
                subject: draft.subject,
                scene: draft.scene,
                environment: draft.environment,
                action: draft.action,
                camera: [draft.cameraMove, draft.cameraAngle, draft.lens].filter(Boolean).join(", "),
                lighting: draft.lighting,
                style: draft.style,
                duration: draft.duration,
                aspectRatio: draft.aspectRatio,
                mood: draft.mood,
                audio: draft.audio,
                negative: draft.negative,
              });
            }}
          >{tx("Generate with AI")}</Button>
          <CopyButton value={prompt} label={tx("Copy prompt")} />
          <CopyButton value={negative} label={tx("Copy negative prompt")} />
          <Button type="button" variant="ghost" onClick={() => { setDraft(EMPTY_VIDEO_PROMPT); setPrompt(""); setNegative(""); setError(""); }}>{tx("Clear")}</Button>
        </ToolActions>
      </div>
      <div className="mt-6 space-y-4">
        <ToolOutput label={tx("Video prompt")}>
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{prompt || tx("The prompt will appear here.")}</p>
        </ToolOutput>
        <ToolOutput label={tx("Negative prompt")}>
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{negative || tx("Optional.")}</p>
        </ToolOutput>
      </div>
      <AiResult status={ai.status} text={ai.text} error={ai.error} label={tx("AI video prompt")} copyLabel={tx("Copy AI prompt")} />
    </ToolPanel>
  );
}
