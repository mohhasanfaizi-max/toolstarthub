export type ImagePromptDraft = {
  subject: string;
  environment: string;
  style: string;
  composition: string;
  lighting: string;
  camera: string;
  palette: string;
  aspectRatio: string;
  mood: string;
  quality: string;
  negative: string;
};

export type ImagePromptPreset = {
  id: string;
  label: string;
  draft: Partial<ImagePromptDraft>;
};

export const IMAGE_PROMPT_PRESETS: ImagePromptPreset[] = [
  { id: "photo", label: "Photorealistic", draft: { style: "Photorealistic", quality: "Sharp detail, natural texture", camera: "50mm lens" } },
  { id: "cinematic", label: "Cinematic", draft: { style: "Cinematic still", lighting: "Soft side light", mood: "Quiet tension", camera: "Wide shot" } },
  { id: "illustration", label: "Illustration", draft: { style: "Editorial illustration", quality: "Clean shapes, visible line work" } },
  { id: "product", label: "Product photography", draft: { style: "Studio product photo", lighting: "Even softbox light", environment: "Plain backdrop", composition: "Centered product" } },
  { id: "portrait", label: "Portrait", draft: { style: "Portrait", camera: "Eye-level, 85mm look", lighting: "Window light" } },
  { id: "landscape", label: "Landscape", draft: { style: "Landscape photograph", composition: "Wide view with a clear foreground", camera: "Wide angle" } },
  { id: "architecture", label: "Architecture", draft: { style: "Architecture photograph", composition: "Straight vertical lines", lighting: "Late afternoon sun" } },
  { id: "fantasy", label: "Fantasy", draft: { style: "Fantasy illustration", mood: "Wonder", environment: "A place that could not be photographed" } },
  { id: "anime", label: "Anime", draft: { style: "Anime illustration", quality: "Clean line art" } },
  { id: "render", label: "3D render", draft: { style: "3D render", lighting: "Soft studio light", quality: "Clean materials, no plastic shine" } },
  { id: "thumbnail", label: "YouTube thumbnail", draft: { style: "Bold thumbnail", composition: "One subject, room for a short title", quality: "High contrast" } },
];

export const EMPTY_IMAGE_PROMPT: ImagePromptDraft = {
  subject: "",
  environment: "",
  style: "",
  composition: "",
  lighting: "",
  camera: "",
  palette: "",
  aspectRatio: "1:1",
  mood: "",
  quality: "",
  negative: "",
};

function clause(label: string, value: string): string | null {
  const trimmed = value.trim();
  return trimmed ? `${label}: ${trimmed}` : null;
}

export function buildImagePrompt(
  draft: ImagePromptDraft,
): { ok: true; prompt: string; negative: string } | { ok: false; error: string } {
  if (!draft.subject.trim()) {
    return { ok: false, error: "Describe the subject before building the prompt." };
  }

  const parts = [
    clause("Subject", draft.subject),
    clause("Setting", draft.environment),
    clause("Style", draft.style),
    clause("Composition", draft.composition),
    clause("Lighting", draft.lighting),
    clause("Camera", draft.camera),
    clause("Palette", draft.palette),
    clause("Mood", draft.mood),
    clause("Detail", draft.quality),
    clause("Aspect ratio", draft.aspectRatio),
  ].filter((part): part is string => part !== null);

  return {
    ok: true,
    prompt: parts.join(". ") + ".",
    negative: draft.negative.trim(),
  };
}
