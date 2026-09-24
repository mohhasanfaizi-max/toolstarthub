export type PromptDraft = {
  useCase: string;
  topic: string;
  goal: string;
  audience: string;
  tone: string;
  language: string;
  format: string;
  detail: string;
  instructions: string;
};

export type PromptPreset = {
  id: string;
  label: string;
  draft: Pick<PromptDraft, "useCase" | "tone" | "format" | "detail" | "instructions">;
};

export const PROMPT_PRESETS: PromptPreset[] = [
  {
    id: "blog",
    label: "Blog article",
    draft: {
      useCase: "Blog article",
      tone: "Clear and direct",
      format: "Article with short sections",
      detail: "Medium",
      instructions: "Open with the answer. Use short sections. Do not pad the ending.",
    },
  },
  {
    id: "seo",
    label: "SEO article",
    draft: {
      useCase: "Search article",
      tone: "Plain and specific",
      format: "Article that answers one question",
      detail: "Medium",
      instructions: "Answer the question in the first paragraph. Use the reader’s words. Do not stuff keywords.",
    },
  },
  {
    id: "social",
    label: "Social media post",
    draft: {
      useCase: "Social post",
      tone: "Conversational",
      format: "Short post",
      detail: "Brief",
      instructions: "One idea. One next step. No hashtag pile.",
    },
  },
  {
    id: "youtube-script",
    label: "YouTube script",
    draft: {
      useCase: "YouTube script",
      tone: "Spoken and concrete",
      format: "Script with a hook, middle, and close",
      detail: "Medium",
      instructions: "Write for the ear. Say what the viewer will see. Keep sentences short.",
    },
  },
  {
    id: "thumbnail",
    label: "YouTube thumbnail prompt",
    draft: {
      useCase: "Thumbnail description",
      tone: "Visual",
      format: "Image prompt",
      detail: "Brief",
      instructions: "Describe the subject, the words on the image, and the contrast. Leave space for a short title.",
    },
  },
  {
    id: "image",
    label: "Image generation",
    draft: {
      useCase: "Image prompt",
      tone: "Descriptive",
      format: "Single image prompt",
      detail: "High",
      instructions: "Name the subject, setting, light, and framing. Say what should stay out of the frame.",
    },
  },
  {
    id: "video",
    label: "Video generation",
    draft: {
      useCase: "Video prompt",
      tone: "Descriptive",
      format: "Shot description",
      detail: "High",
      instructions: "Describe the action, camera move, and length. One scene, not a full film.",
    },
  },
  {
    id: "product",
    label: "Product description",
    draft: {
      useCase: "Product description",
      tone: "Specific",
      format: "Short product copy",
      detail: "Medium",
      instructions: "Lead with what the product does. Mention who it is for. Do not invent specs.",
    },
  },
  {
    id: "email",
    label: "Email",
    draft: {
      useCase: "Email",
      tone: "Polite and brief",
      format: "Email with a subject line",
      detail: "Brief",
      instructions: "State the ask in the first lines. Include a subject line.",
    },
  },
  {
    id: "marketing",
    label: "Marketing copy",
    draft: {
      useCase: "Marketing copy",
      tone: "Direct",
      format: "Headline plus a short paragraph",
      detail: "Brief",
      instructions: "One claim you can support. One action. No fake numbers.",
    },
  },
  {
    id: "academic",
    label: "Academic/research prompt",
    draft: {
      useCase: "Research outline",
      tone: "Careful",
      format: "Outline with questions",
      detail: "High",
      instructions: "Ask for sources to be marked as unknown when they are not supplied. Do not invent citations.",
    },
  },
  {
    id: "coding",
    label: "Coding prompt",
    draft: {
      useCase: "Coding task",
      tone: "Precise",
      format: "Task, constraints, and expected result",
      detail: "High",
      instructions: "Name the language, the inputs, and what done looks like. Ask for a short explanation of the approach.",
    },
  },
];

export const EMPTY_PROMPT_DRAFT: PromptDraft = {
  useCase: "",
  topic: "",
  goal: "",
  audience: "",
  tone: "",
  language: "English",
  format: "",
  detail: "Medium",
  instructions: "",
};

export function buildAiPrompt(
  draft: PromptDraft,
): { ok: true; prompt: string } | { ok: false; error: string } {
  const topic = draft.topic.trim();
  const goal = draft.goal.trim();
  if (!topic && !goal) {
    return { ok: false, error: "Add a topic or a goal before generating a prompt." };
  }

  const lines = [
    "You are helping with a specific task. Follow the constraints below.",
    "",
    `Task: ${draft.useCase.trim() || "General writing"}`,
    topic ? `Topic: ${topic}` : null,
    goal ? `Goal: ${goal}` : null,
    draft.audience.trim() ? `Audience: ${draft.audience.trim()}` : null,
    draft.tone.trim() ? `Tone: ${draft.tone.trim()}` : null,
    `Language: ${draft.language.trim() || "English"}`,
    draft.format.trim() ? `Output format: ${draft.format.trim()}` : null,
    `Level of detail: ${draft.detail.trim() || "Medium"}`,
    draft.instructions.trim() ? `Extra instructions: ${draft.instructions.trim()}` : null,
    "",
    "If a fact is missing, say so instead of inventing it.",
  ].filter((line): line is string => line !== null);

  return { ok: true, prompt: lines.join("\n") };
}
