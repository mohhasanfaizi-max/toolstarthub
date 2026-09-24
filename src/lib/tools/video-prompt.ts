export type VideoPromptDraft = {
  subject: string;
  scene: string;
  action: string;
  environment: string;
  cameraMove: string;
  cameraAngle: string;
  lens: string;
  lighting: string;
  style: string;
  duration: string;
  aspectRatio: string;
  mood: string;
  audio: string;
  negative: string;
};

export type VideoPromptPreset = {
  id: string;
  label: string;
  draft: Partial<VideoPromptDraft>;
};

export const VIDEO_PROMPT_PRESETS: VideoPromptPreset[] = [
  { id: "cinematic", label: "Cinematic", draft: { style: "Cinematic", cameraMove: "Slow push in", mood: "Focused" } },
  { id: "commercial", label: "Product commercial", draft: { style: "Product commercial", cameraMove: "Orbit", lighting: "Clean studio light", duration: "6 seconds" } },
  { id: "social", label: "Social media", draft: { style: "Vertical social clip", aspectRatio: "9:16", duration: "8 seconds", cameraMove: "Handheld, slight movement" } },
  { id: "youtube", label: "YouTube", draft: { style: "YouTube opener", aspectRatio: "16:9", duration: "5 seconds", cameraMove: "Push in on the subject" } },
  { id: "documentary", label: "Documentary", draft: { style: "Documentary", cameraMove: "Locked off", mood: "Observational" } },
  { id: "travel", label: "Travel", draft: { style: "Travel film", cameraMove: "Gentle drift", mood: "Open" } },
  { id: "action", label: "Action", draft: { style: "Action", cameraMove: "Tracking", mood: "Urgent" } },
  { id: "fashion", label: "Fashion", draft: { style: "Fashion film", cameraMove: "Slow lateral move", lighting: "Hard rim light" } },
  { id: "nature", label: "Nature", draft: { style: "Nature film", cameraMove: "Static wide", mood: "Calm" } },
  { id: "historical", label: "Historical", draft: { style: "Period scene", lighting: "Practical lamps and window light", mood: "Lived-in" } },
  { id: "animation", label: "Animation", draft: { style: "Stylized animation", cameraMove: "Simple pan" } },
];

export const EMPTY_VIDEO_PROMPT: VideoPromptDraft = {
  subject: "",
  scene: "",
  action: "",
  environment: "",
  cameraMove: "",
  cameraAngle: "",
  lens: "",
  lighting: "",
  style: "",
  duration: "5 seconds",
  aspectRatio: "16:9",
  mood: "",
  audio: "",
  negative: "",
};

function clause(label: string, value: string): string | null {
  const trimmed = value.trim();
  return trimmed ? `${label}: ${trimmed}` : null;
}

export function buildVideoPrompt(
  draft: VideoPromptDraft,
): { ok: true; prompt: string; negative: string } | { ok: false; error: string } {
  if (!draft.subject.trim() && !draft.action.trim()) {
    return { ok: false, error: "Add a subject or an action before building the prompt." };
  }

  const parts = [
    clause("Subject", draft.subject),
    clause("Scene", draft.scene),
    clause("Action", draft.action),
    clause("Environment", draft.environment),
    clause("Camera movement", draft.cameraMove),
    clause("Camera angle", draft.cameraAngle),
    clause("Lens", draft.lens),
    clause("Lighting", draft.lighting),
    clause("Style", draft.style),
    clause("Duration", draft.duration),
    clause("Aspect ratio", draft.aspectRatio),
    clause("Mood", draft.mood),
    clause("Audio", draft.audio),
  ].filter((part): part is string => part !== null);

  return {
    ok: true,
    prompt: `${parts.join(". ")}. Keep it to one continuous shot.`,
    negative: draft.negative.trim(),
  };
}
