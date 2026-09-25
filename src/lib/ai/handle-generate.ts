import { buildModelPrompt } from "./prompts.ts";
import { consumeRateLimit } from "./rate-limit.ts";
import { validateAiRequest, type AiToolId } from "./limits.ts";

export type AiGenerateResult = {
  status: number;
  body: { success: true; text: string } | { success: false; error: string };
  retryAfterSeconds?: number;
};

export async function handleAiGenerate(
  payload: unknown,
  clientKey: string,
  now: number,
  generate: (prompt: string, tool: AiToolId) => Promise<string>,
): Promise<AiGenerateResult> {
  const parsed = validateAiRequest(payload);
  if (!parsed.ok) return { status: 400, body: { success: false, error: parsed.error } };

  const limit = consumeRateLimit(clientKey, now);
  if (!limit.ok) {
    return {
      status: 429,
      retryAfterSeconds: limit.retryAfterSeconds,
      body: { success: false, error: "Too many AI requests. Wait a minute and try again." },
    };
  }

  if (!process.env.GEMINI_API_KEY?.trim()) {
    return { status: 503, body: { success: false, error: "AI generation is not available on this site yet." } };
  }

  try {
    const text = await generate(buildModelPrompt(parsed.request), parsed.request.tool);
    return { status: 200, body: { success: true, text } };
  } catch (error) {
    const message = error instanceof Error && error.message.startsWith("The AI")
      ? error.message
      : "The AI request could not be completed. Try again later.";
    return { status: 502, body: { success: false, error: message } };
  }
}
