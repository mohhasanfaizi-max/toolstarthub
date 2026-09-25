import { generateGeminiText, publicAiError } from "@/lib/ai/gemini";
import { handleAiGenerate } from "@/lib/ai/handle-generate";
import type { AiToolId } from "@/lib/ai/limits";

export const runtime = "nodejs";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "local";
}

export async function POST(request: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false, error: "Send a JSON request with a tool and input." }, { status: 400 });
  }

  const result = await handleAiGenerate(payload, clientKey(request), Date.now(), async (prompt, tool: AiToolId) => {
    try {
      return await generateGeminiText(prompt, tool);
    } catch (error) {
      if (error instanceof Error && error.message === "AI is not configured.") throw error;
      console.error("AI request failed");
      throw new Error(publicAiError(error));
    }
  });

  const headers = new Headers();
  if (result.retryAfterSeconds) headers.set("Retry-After", String(result.retryAfterSeconds));
  return Response.json(result.body, { status: result.status, headers });
}
