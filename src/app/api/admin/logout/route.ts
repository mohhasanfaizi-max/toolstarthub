import { ADMIN_COOKIE } from "@/lib/comments/auth";
import { redirectTo, sameOrigin } from "@/lib/comments/admin-request";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  if (!sameOrigin(request)) return new Response("Forbidden", { status: 403 });
  const response = redirectTo(request, "/admin/comments");
  response.headers.append("Set-Cookie", `${ADMIN_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`);
  return response;
}
