import { ADMIN_COOKIE, SESSION_TTL_MS, clientIp, createSession, hashIp, passwordMatches } from "@/lib/comments/auth";
import { redirectTo, sameOrigin } from "@/lib/comments/admin-request";
import { LOGIN_LIMIT, adminPassword, commentsEnabled, ipSalt } from "@/lib/comments/config";
import { loginAttempts, recordLoginFailure } from "@/lib/comments/db";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const secret = adminPassword();
  if (!secret || !commentsEnabled()) return redirectTo(request, "/admin/comments?e=config");
  if (!sameOrigin(request)) return new Response("Forbidden", { status: 403 });
  const ipHash = hashIp(clientIp(request.headers), ipSalt());
  try {
    if ((await loginAttempts(ipHash)) >= LOGIN_LIMIT.attempts) return redirectTo(request, "/admin/comments?e=limit");
  } catch {
    return redirectTo(request, "/admin/comments?e=db");
  }
  const form = await request.formData();
  const password = String(form.get("password") ?? "").slice(0, 200);
  if (!passwordMatches(password, secret)) {
    await recordLoginFailure(ipHash).catch(() => undefined);
    return redirectTo(request, "/admin/comments?e=bad");
  }
  const response = redirectTo(request, "/admin/comments");
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  response.headers.append(
    "Set-Cookie",
    `${ADMIN_COOKIE}=${createSession(secret)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_TTL_MS / 1000}${secure}`,
  );
  return response;
}
