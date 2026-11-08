import { tools } from "@/data/tools";
import { clientIp, hashIp } from "@/lib/comments/auth";
import { RATE_LIMIT, commentsEnabled, ipSalt } from "@/lib/comments/config";
import { insertPending, listApproved, recentByIp } from "@/lib/comments/db";
import { validateComment } from "@/lib/comments/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const slugs = new Set(tools.map((t) => t.slug));
const noStore = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" };

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const tool = url.searchParams.get("tool") ?? "";
  const page = Math.min(1000, Math.max(1, Number(url.searchParams.get("page")) || 1));
  if (!commentsEnabled()) return Response.json({ enabled: false }, { headers: noStore });
  if (!slugs.has(tool)) return Response.json({ enabled: true, error: "Unknown tool." }, { status: 400, headers: noStore });
  try {
    const result = await listApproved(tool, page);
    return Response.json({ enabled: true, page, ...(result ?? { comments: [], hasMore: false }) }, { headers: noStore });
  } catch {
    return Response.json({ enabled: true, error: "Comments are unavailable right now." }, { status: 503, headers: noStore });
  }
}

export async function POST(request: Request): Promise<Response> {
  if (!commentsEnabled()) return Response.json({ ok: false, error: "Comments are coming soon." }, { status: 503, headers: noStore });
  let input: Record<string, unknown>;
  try {
    const text = await request.text();
    if (text.length > 8_000) return Response.json({ ok: false, error: "That comment is too long." }, { status: 413, headers: noStore });
    input = JSON.parse(text) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400, headers: noStore });
  }
  const tool = typeof input.tool === "string" ? input.tool : "";
  if (!slugs.has(tool)) return Response.json({ ok: false, error: "Unknown tool." }, { status: 400, headers: noStore });
  const result = validateComment(input);
  if (!result.ok) {
    // Spam gets the same neutral response shape; nothing is stored.
    return Response.json({ ok: false, error: result.error }, { status: 400, headers: noStore });
  }
  try {
    const ipHash = hashIp(clientIp(request.headers), ipSalt());
    if ((await recentByIp(ipHash)) >= RATE_LIMIT.comments) {
      return Response.json({ ok: false, error: "You've sent several comments recently. Please try again later." }, { status: 429, headers: noStore });
    }
    await insertPending({ tool, ...result.value, ipHash });
    return Response.json({ ok: true, message: "Thanks, your comment will appear after review." }, { headers: noStore });
  } catch {
    return Response.json({ ok: false, error: "Comments are unavailable right now. Please try again later." }, { status: 503, headers: noStore });
  }
}
