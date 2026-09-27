import type { AiRequest } from "./limits.ts";

const INSTRUCTIONS: Record<AiRequest["tool"], string> = {
  "ai-prompt-generator":
    "Write one polished prompt the user can paste into another model. Use the topic, goal, audience, tone, and extra instructions they provided. Return only the prompt. Do not explain it.",
  "prompt-to-image":
    "Turn the user's description into one detailed image-generation prompt. Include subject, setting, lighting, and style when those details are present. Return only the prompt. Do not say that an image was created.",
  "prompt-to-video":
    "Turn the user's description into one detailed video-generation prompt. Cover subject, environment, action, camera, movement, lighting, visual style, duration, and aspect ratio when the user supplied them. Return only the prompt. Do not say that a video was rendered.",
  "ai-article-detector":
    "Analyze the writing patterns in the submitted text. Describe sentence rhythm, repetition, vocabulary, and stock phrasing. This is a writing-pattern analysis, not an authorship verdict. Do not say the text was definitely written by a person or by AI. Do not give a percentage score.",
  "ai-article-compressor":
    "Shorten the submitted article while keeping the main meaning and important facts. Follow the requested compression level. Return only the shorter article.",
  "ai-text-humanizer":
    "Rewrite the submitted text in plain, direct sentences. Keep the same facts, names, and numbers. Replace stock phrasing with simpler wording. Do not add new claims. Do not shorten it into a summary. Return only the rewritten text. Do not say the result was written by a person. Do not say it will pass, fool, or evade an AI detector. Do not give a score.",
};

export function buildModelPrompt(request: AiRequest): string {
  const lines = Object.entries(request.options)
    .filter(([, value]) => value !== "")
    .map(([key, value]) => `${key}: ${value}`);
  return [INSTRUCTIONS[request.tool], "", "User input:", request.input, lines.length > 0 ? `\nDetails:\n${lines.join("\n")}` : ""]
    .filter((part) => part !== "")
    .join("\n");
}
