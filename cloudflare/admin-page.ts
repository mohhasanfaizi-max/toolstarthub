// /admin/comments for the Cloudflare deployment. Same behaviour as
// src/app/admin/comments/page.tsx (Vercel), rendered as plain HTML so the
// Worker does not need React. Forms post to the same /api/admin/* routes.
import { ADMIN_COOKIE, verifySession } from "../src/lib/comments/auth";
import { adminPassword, commentsEnabled } from "../src/lib/comments/config";
import { listForAdmin, type AdminComment, type CommentStatus } from "../src/lib/comments/db";

const ERRORS: Record<string, string> = {
  bad: "Wrong password.",
  limit: "Too many attempts. Try again in 15 minutes.",
  config: "Comments are not configured (DATABASE_URL and ADMIN_PASSWORD are required).",
  db: "The database is unavailable.",
  auth: "Your session expired. Sign in again.",
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function cookie(request: Request, name: string): string | undefined {
  return request.headers.get("cookie")?.split(/;\s*/).find((c) => c.startsWith(`${name}=`))?.slice(name.length + 1);
}

const css = `body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:0;color:#0f172a;background:#fff}
main{max-width:56rem;margin:0 auto;padding:2.5rem 1rem}h1{font-size:1.5rem;margin:0}h2{font-size:1.125rem;margin:2rem 0 .75rem}
.row{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:space-between}
.btn{border:1px solid #cbd5e1;border-radius:999px;padding:.25rem .75rem;font-size:.75rem;background:#fff;color:inherit;text-decoration:none;cursor:pointer}
.on{background:#047857;border-color:#047857;color:#fff}.ok{border-color:#047857;color:#065f46}.warn{border-color:#d97706;color:#92400e}.bad{border-color:#b91c1c;color:#b91c1c}
ul{list-style:none;padding:0}li{border:1px solid #e2e8f0;border-radius:1rem;padding:1rem;margin:.75rem 0;font-size:.875rem}
.muted{color:#64748b;font-weight:400}.err{color:#b91c1c}.body{white-space:pre-wrap;overflow-wrap:anywhere}
input[type=password]{border:1px solid #cbd5e1;border-radius:.75rem;padding:.5rem .75rem}form.login{display:flex;flex-direction:column;gap:.75rem;max-width:24rem;margin-top:1.5rem}
.primary{background:#047857;color:#fff;border:0;border-radius:999px;padding:.5rem 1rem;font-size:.875rem;cursor:pointer}`;

function page(body: string, status = 200): Response {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Admin | Tools Star Hub</title><meta name="robots" content="noindex, nofollow, nocache"><meta name="googlebot" content="noindex, nofollow">
<style>${css}</style></head><body><main id="main">${body}</main></body></html>`;
  return new Response(html, { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "private, no-store" } });
}

export async function renderAdminPage(request: Request): Promise<Response> {
  const params = new URL(request.url).searchParams;
  const error = params.get("e") ? ERRORS[params.get("e")!] : undefined;
  if (!commentsEnabled() || !adminPassword()) return page(`<h1>Comments admin</h1><p>${ERRORS.config}</p>`);
  if (!verifySession(cookie(request, ADMIN_COOKIE), adminPassword())) {
    return page(`<h1>Comments admin</h1>${error ? `<p role="alert" class="err">${esc(error)}</p>` : ""}
<form method="post" action="/api/admin/login" class="login"><label for="admin-password">Password</label>
<input id="admin-password" name="password" type="password" required autocomplete="current-password">
<button type="submit" class="primary">Sign in</button></form>`);
  }
  const s = params.get("status");
  const status: CommentStatus = s === "approved" || s === "removed" ? s : "pending";
  let rows: AdminComment[] = [];
  let dbError = false;
  try {
    rows = await listForAdmin(status, params.get("tool") || undefined);
  } catch {
    dbError = true;
  }
  const byTool = new Map<string, AdminComment[]>();
  for (const row of rows) byTool.set(row.toolSlug, [...(byTool.get(row.toolSlug) ?? []), row]);
  const nav = (["pending", "approved", "removed"] as const)
    .map((x) => `<a href="/admin/comments?status=${x}" class="btn${x === status ? " on" : ""}"${x === status ? ' aria-current="page"' : ""}>${x}</a>`)
    .join(" ");
  const sections = [...byTool.entries()].map(([tool, list]) => {
    const items = list.map((c) => {
      const when = new Date(c.createdAt).toLocaleString("en-GB", { timeZone: "Asia/Dubai" });
      const btns = [
        status !== "approved" ? `<button name="action" value="approve" class="btn ok">Approve</button>` : "",
        status !== "removed" ? `<button name="action" value="remove" class="btn warn">Remove</button>` : "",
        status === "removed" ? `<button name="action" value="restore" class="btn">Restore to pending</button>` : "",
        status === "removed" ? `<button name="action" value="delete" class="btn bad">Delete permanently</button>` : "",
      ].join(" ");
      return `<li><p><strong>${esc(c.name)}${c.rating ? ` · ${c.rating}/5` : ""}</strong> <span class="muted">· ${esc(when)} (Dubai)</span></p>
<p class="body">${esc(c.body)}</p><form method="post" action="/api/admin/comments"><input type="hidden" name="id" value="${esc(c.id)}"><input type="hidden" name="back" value="${status}">${btns}</form></li>`;
    });
    return `<section><h2><a href="/tools/${esc(tool)}">${esc(tool)}</a> <span class="muted">(${list.length})</span></h2><ul>${items.join("")}</ul></section>`;
  });
  return page(`<div class="row"><h1>Comments admin</h1><form method="post" action="/api/admin/logout"><button class="btn">Sign out</button></form></div>
<nav aria-label="Comment status" style="margin-top:1rem">${nav}</nav>
${dbError ? `<p role="alert" class="err">${ERRORS.db}</p>` : ""}${rows.length === 0 && !dbError ? `<p class="muted">No ${status} comments.</p>` : ""}${sections.join("")}`);
}
