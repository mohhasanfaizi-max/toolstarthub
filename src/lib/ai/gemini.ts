import { BlockedReason, FinishReason, GoogleGenAI, ThinkingLevel, type GenerateContentResponse, type Schema } from "@google/genai";
import { publicAiError } from "./errors.ts";
import { OUTPUT_TOKENS, type AiToolId } from "./limits.ts";

export { publicAiError };

export const DEFAULT_GEMINI_MODEL = "gemini-3.5-flash-lite";

export function geminiConfigured(): boolean {
  return Boolean(process.env.GEMINI_API_KEY?.trim());
}

export function geminiModelName(): string {
  const configured = process.env.GEMINI_MODEL?.trim();
  return configured || DEFAULT_GEMINI_MODEL;
}

export class GeminiJsonError extends Error {
  readonly kind: "unconfigured" | "safety" | "rate" | "unavailable" | "empty" | "api";

  constructor(kind: GeminiJsonError["kind"]) {
    super(kind);
    this.name = "GeminiJsonError";
    this.kind = kind;
  }
}

function client(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) throw new GeminiJsonError("unconfigured");
  return new GoogleGenAI({ apiKey });
}

function safetyBlocked(response: GenerateContentResponse): boolean {
  const reason = response.promptFeedback?.blockReason;
  if (reason && reason !== BlockedReason.BLOCKED_REASON_UNSPECIFIED) return true;
  const finish = response.candidates?.[0]?.finishReason;
  return (
    finish === FinishReason.SAFETY ||
    finish === FinishReason.BLOCKLIST ||
    finish === FinishReason.PROHIBITED_CONTENT
  );
}

export async function generateGeminiText(prompt: string, tool: AiToolId): Promise<string> {
  if (!geminiConfigured()) {
    throw new Error("AI is not configured.");
  }
  const ai = client();
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

/** Structured JSON from the same Gemini client, model, and key as the other AI tools. */
export async function generateGeminiJsonText(prompt: string, schema: Schema, maxOutputTokens: number): Promise<string> {
  const ai = client();
  let response: GenerateContentResponse;
  try {
    response = await ai.models.generateContent({
      model: geminiModelName(),
      contents: prompt,
      config: {
        temperature: 0.2,
        maxOutputTokens,
        responseMimeType: "application/json",
        responseSchema: schema,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
      },
    });
  } catch (error) {
    const status = typeof error === "object" && error && "status" in error ? Number(error.status) : 0;
    if (status === 429) throw new GeminiJsonError("rate");
    if (status === 400 || status === 404) throw new GeminiJsonError("unavailable");
    throw new GeminiJsonError("api");
  }
  if (safetyBlocked(response)) throw new GeminiJsonError("safety");
  const text = response.text?.trim() ?? "";
  if (!text) throw new GeminiJsonError("empty");
  return text;
}
