import { ADMIN_COOKIE, verifySession } from "@/lib/comments/auth";
import { redirectTo, sameOrigin } from "@/lib/comments/admin-request";
import { adminPassword } from "@/lib/comments/config";
import { moderate } from "@/lib/comments/db";

export const runtime = "nodejs";

function cookie(request: Request, name: string): string | undefined {
  return request.headers.get("cookie")?.split(/;\s*/).find((c) => c.startsWith(`${name}=`))?.slice(name.length + 1);
}

export async function POST(request: Request): Promise<Response> {
  if (!sameOrigin(request)) return new Response("Forbidden", { status: 403 });
  if (!verifySession(cookie(request, ADMIN_COOKIE), adminPassword())) return redirectTo(request, "/admin/comments?e=auth");
  const form = await request.formData();
  const id = String(form.get("id") ?? "");
  const action = String(form.get("action") ?? "");
  const back = String(form.get("back") ?? "pending");
  if (action === "approve" || action === "remove" || action === "restore" || action === "delete") {
    await moderate(id, action).catch(() => undefined);
  }
  return redirectTo(request, `/admin/comments?status=${encodeURIComponent(["pending", "approved", "removed"].includes(back) ? back : "pending")}`);
}
