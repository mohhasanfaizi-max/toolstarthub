import { GeminiJsonError, geminiConfigured, generateGeminiJsonText } from "@/lib/ai/gemini";
import { handleUrduNews } from "@/lib/urdu-news/handle";
import { UrduNewsCallError } from "@/lib/urdu-news/json";
import { URDU_SCHEMAS, type SchemaName } from "@/lib/urdu-news/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "local";
}

export function GET(): Response {
  return Response.json({ available: geminiConfigured() });
}

export async function POST(request: Request): Promise<Response> {
  let payload: unknown = null;
  try {
    payload = await request.json();
  } catch {
    payload = null;
  }

  const result = await handleUrduNews(
    payload,
    clientKey(request),
    Date.now(),
    async (prompt, schema: SchemaName, maxOutputTokens) => {
      try {
        return await generateGeminiJsonText(prompt, URDU_SCHEMAS[schema], maxOutputTokens);
      } catch (error) {
        // Do not log the article. Gemini errors can echo the prompt.
        console.error("Urdu news translator request failed");
        if (error instanceof GeminiJsonError) throw new UrduNewsCallError(error.kind);
        throw new UrduNewsCallError("api");
      }
    },
    geminiConfigured(),
  );

  const headers = new Headers();
  if (result.retryAfterSeconds) headers.set("Retry-After", String(result.retryAfterSeconds));
  return Response.json(result.body, { status: result.status, headers });
}
