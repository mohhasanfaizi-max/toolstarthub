import { handleOgPreview } from "@/lib/og/handle-preview";

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
    return Response.json({ success: false, error: "Send a JSON request with a url." }, { status: 400 });
  }

  const result = await handleOgPreview(payload, clientKey(request), Date.now());
  const headers = new Headers();
  if (result.retryAfterSeconds) headers.set("Retry-After", String(result.retryAfterSeconds));
  return Response.json(result.body, { status: result.status, headers });
}
