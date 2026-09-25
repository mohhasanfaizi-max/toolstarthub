import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { publicAiError } from "./errors.ts";
import { OUTPUT_TOKENS, type AiToolId } from "./limits.ts";

export { publicAiError };

export const DEFAULT_GEMINI_MODEL = "gemini-3.5-flash-lite";

export function geminiModelName(): string {
  const configured = process.env.GEMINI_MODEL?.trim();
  return configured || DEFAULT_GEMINI_MODEL;
}

export async function generateGeminiText(prompt: string, tool: AiToolId): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("AI is not configured.");
  }
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: geminiModelName(),
    contents: prompt,
    config: {
      maxOutputTokens: OUTPUT_TOKENS[tool],
      thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
    },
  });
  const text = response.text?.trim() ?? "";
  if (!text) throw new Error("The AI service returned an empty result.");
  return text;
}
