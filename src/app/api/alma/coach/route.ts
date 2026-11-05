import { generateGeminiFreeform, geminiConfigured, publicAiError } from "@/lib/ai/gemini";
import { consumeRateLimit } from "@/lib/ai/rate-limit";
import { buildGeminiPrompt, ruleBasedCoach, type CoachContext } from "@/lib/tools/alma-coach";

export const runtime = "nodejs";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "local";
}

function readContext(value: unknown): CoachContext | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  const record = value as Record<string, unknown>;
  const context: CoachContext = {};
  const numbers = [
    "calorieTarget",
    "consumedCalories",
    "protein",
    "carbs",
    "fat",
    "proteinTarget",
    "carbTarget",
    "fatTarget",
    "bmr",
    "tdee",
    "mealCount",
    "waterMl",
  ] as const;
  for (const key of numbers) {
    const raw = record[key];
    if (typeof raw === "number" && Number.isFinite(raw)) {
      context[key] = raw;
    }
  }
  if (Array.isArray(record.topFoods)) {
    context.topFoods = record.topFoods.filter((item): item is string => typeof item === "string").slice(0, 12);
  }
  return context;
}

export async function POST(request: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false, error: "Send a JSON question." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ success: false, error: "Send a JSON question." }, { status: 400 });
  }
  const record = payload as Record<string, unknown>;
  if (typeof record.question !== "string" || record.question.trim().length === 0) {
    return Response.json({ success: false, error: "Enter a nutrition question first." }, { status: 400 });
  }
  if (record.question.length > 2000) {
    return Response.json({ success: false, error: "That question is too long. Shorten it and try again." }, { status: 400 });
  }

  const context = readContext(record.context);
  const limit = consumeRateLimit(`alma-coach:${clientKey(request)}`, Date.now());
  if (!limit.ok) {
    return Response.json(
      { success: false, error: "Too many coach requests. Wait a minute and try again." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const fallback = ruleBasedCoach(record.question, context);
  if (!geminiConfigured()) {
    return Response.json({ success: true, text: fallback.text, mode: "rules" });
  }

  try {
    const text = await generateGeminiFreeform(buildGeminiPrompt(record.question, context), 700);
    return Response.json({ success: true, text, mode: "gemini" });
  } catch (error) {
    console.error("Alma coach request fell back to rules");
    const publicMessage = publicAiError(error);
    if (publicMessage.includes("not configured")) {
      return Response.json({ success: true, text: fallback.text, mode: "rules" });
    }
    return Response.json({ success: true, text: fallback.text, mode: "rules", notice: "The AI service was unavailable, so Alma used its educational coach instead." });
  }
}
