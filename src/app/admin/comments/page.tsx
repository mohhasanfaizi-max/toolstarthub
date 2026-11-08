import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySession } from "@/lib/comments/auth";
import { adminPassword, commentsEnabled } from "@/lib/comments/config";
import { listForAdmin, type CommentStatus } from "@/lib/comments/db";

export const dynamic = "force-dynamic";

const ERRORS: Record<string, string> = {
  bad: "Wrong password.",
  limit: "Too many attempts. Try again in 15 minutes.",
  config: "Comments are not configured (DATABASE_URL and ADMIN_PASSWORD are required).",
  db: "The database is unavailable.",
  auth: "Your session expired. Sign in again.",
};

const box = "mx-auto w-full max-w-4xl px-4 py-10";
const btn = "rounded-full border px-3 py-1 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600";

export default async function AdminCommentsPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const error = params.e ? ERRORS[params.e] : undefined;
  if (!commentsEnabled() || !adminPassword()) {
    return <main id="main" className={box}><h1 className="text-2xl font-semibold">Comments admin</h1><p className="mt-4">{ERRORS.config}</p></main>;
  }
  const jar = await cookies();
  if (!verifySession(jar.get(ADMIN_COOKIE)?.value, adminPassword())) {
    return (
      <main id="main" className={box}>
        <h1 className="text-2xl font-semibold">Comments admin</h1>
        {error ? <p role="alert" className="mt-4 text-red-700">{error}</p> : null}
        <form method="post" action="/api/admin/login" className="mt-6 flex max-w-sm flex-col gap-3">
          <label htmlFor="admin-password" className="text-sm font-medium">Password</label>
          <input id="admin-password" name="password" type="password" required autoComplete="current-password" className="rounded-xl border border-border bg-background px-3 py-2" />
          <button type="submit" className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800">Sign in</button>
        </form>
      </main>
    );
  }
  const status: CommentStatus = params.status === "approved" || params.status === "removed" ? params.status : "pending";
  let rows: Awaited<ReturnType<typeof listForAdmin>> = [];
  let dbError = false;
  try {
    rows = await listForAdmin(status, params.tool || undefined);
  } catch {
    dbError = true;
  }
  const byTool = new Map<string, typeof rows>();
  for (const row of rows) byTool.set(row.toolSlug, [...(byTool.get(row.toolSlug) ?? []), row]);
  return (
    <main id="main" className={box}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Comments admin</h1>
        <form method="post" action="/api/admin/logout"><button className={`${btn} border-border`}>Sign out</button></form>
      </div>
      <nav aria-label="Comment status" className="mt-4 flex gap-2">
        {(["pending", "approved", "removed"] as const).map((s) => (
          <a key={s} href={`/admin/comments?status=${s}`} aria-current={s === status ? "page" : undefined}
            className={`${btn} ${s === status ? "border-emerald-700 bg-emerald-700 text-white" : "border-border"}`}>{s}</a>
        ))}
      </nav>
      {dbError ? <p role="alert" className="mt-4 text-red-700">{ERRORS.db}</p> : null}
      {rows.length === 0 && !dbError ? <p className="mt-6 text-muted-foreground">No {status} comments.</p> : null}
      {[...byTool.entries()].map(([tool, list]) => (
        <section key={tool} className="mt-8">
          <h2 className="text-lg font-semibold">
            <a href={`/tools/${tool}`} className="underline underline-offset-2">{tool}</a> <span className="text-sm text-muted-foreground">({list.length})</span>
          </h2>
          <ul className="mt-3 space-y-3">
            {list.map((c) => (
              <li key={c.id} className="rounded-2xl border border-border p-4 text-sm">
                <p className="font-medium">{c.name}{c.rating ? ` · ${c.rating}/5` : ""} <span className="font-normal text-muted-foreground">· {new Date(c.createdAt).toLocaleString("en-GB", { timeZone: "Asia/Dubai" })} (Dubai)</span></p>
                <p className="mt-2 whitespace-pre-wrap break-words">{c.body}</p>
                <form method="post" action="/api/admin/comments" className="mt-3 flex flex-wrap gap-2">
                  <input type="hidden" name="id" value={c.id} />
                  <input type="hidden" name="back" value={status} />
                  {status !== "approved" ? <button name="action" value="approve" className={`${btn} border-emerald-700 text-emerald-800`}>Approve</button> : null}
                  {status !== "removed" ? <button name="action" value="remove" className={`${btn} border-amber-600 text-amber-800`}>Remove</button> : null}
                  {status === "removed" ? <button name="action" value="restore" className={`${btn} border-border`}>Restore to pending</button> : null}
                  {status === "removed" ? <button name="action" value="delete" className={`${btn} border-red-700 text-red-700`}>Delete permanently</button> : null}
                </form>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
