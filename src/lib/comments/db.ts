import postgres from "postgres";
import { LOGIN_LIMIT, PAGE_SIZE, RATE_LIMIT, databaseUrl } from "./config";

export type CommentStatus = "pending" | "approved" | "removed";
export type PublicComment = { id: string; name: string; rating: number | null; body: string; createdAt: string };
export type AdminComment = PublicComment & { toolSlug: string; status: CommentStatus };

type Sql = ReturnType<typeof postgres>;
let client: Sql | null = null;
let ready: Promise<void> | null = null;

function sql(): Sql | null {
  const url = databaseUrl();
  if (!url) return null;
  // prepare:false keeps this compatible with Neon's pooled (PgBouncer) URL.
  client ??= postgres(url, { max: 1, prepare: false, idle_timeout: 20, connect_timeout: 10 });
  return client;
}

async function db(): Promise<Sql | null> {
  const s = sql();
  if (!s) return null;
  ready ??= (async () => {
    await s`CREATE TABLE IF NOT EXISTS tool_comments (
      id BIGSERIAL PRIMARY KEY,
      tool_slug TEXT NOT NULL,
      name VARCHAR(60) NOT NULL,
      rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
      body VARCHAR(1000) NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'removed')),
      ip_hash CHAR(64) NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      moderated_at TIMESTAMPTZ
    )`;
    await s`CREATE INDEX IF NOT EXISTS tool_comments_public_idx ON tool_comments (tool_slug, status, created_at DESC)`;
    await s`CREATE INDEX IF NOT EXISTS tool_comments_ip_idx ON tool_comments (ip_hash, created_at DESC)`;
    await s`CREATE TABLE IF NOT EXISTS admin_login_attempts (ip_hash CHAR(64) NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT now())`;
    await s`CREATE INDEX IF NOT EXISTS admin_login_attempts_idx ON admin_login_attempts (ip_hash, created_at DESC)`;
  })().catch((error) => {
    ready = null;
    throw error;
  });
  await ready;
  return s;
}

type Row = { id: string; tool_slug: string; name: string; rating: number | null; body: string; status: CommentStatus; created_at: Date };
const toPublic = (r: Row): PublicComment => ({ id: String(r.id), name: r.name, rating: r.rating, body: r.body, createdAt: new Date(r.created_at).toISOString() });

export async function listApproved(tool: string, page: number): Promise<{ comments: PublicComment[]; hasMore: boolean } | null> {
  const s = await db();
  if (!s) return null;
  const offset = (Math.max(1, page) - 1) * PAGE_SIZE;
  const rows = await s<Row[]>`SELECT id, tool_slug, name, rating, body, status, created_at FROM tool_comments
    WHERE tool_slug = ${tool} AND status = 'approved' ORDER BY created_at DESC, id DESC LIMIT ${PAGE_SIZE + 1} OFFSET ${offset}`;
  return { comments: rows.slice(0, PAGE_SIZE).map(toPublic), hasMore: rows.length > PAGE_SIZE };
}

export async function recentByIp(ipHash: string): Promise<number> {
  const s = await db();
  if (!s) return 0;
  const [row] = await s<{ n: number }[]>`SELECT count(*)::int AS n FROM tool_comments
    WHERE ip_hash = ${ipHash} AND created_at > now() - make_interval(mins => ${RATE_LIMIT.windowMinutes})`;
  return row?.n ?? 0;
}

export async function insertPending(c: { tool: string; name: string; rating: number | null; body: string; ipHash: string }): Promise<void> {
  const s = await db();
  if (!s) throw new Error("comments disabled");
  await s`INSERT INTO tool_comments (tool_slug, name, rating, body, ip_hash) VALUES (${c.tool}, ${c.name}, ${c.rating}, ${c.body}, ${c.ipHash})`;
}

export async function listForAdmin(status: CommentStatus, tool?: string): Promise<AdminComment[]> {
  const s = await db();
  if (!s) return [];
  const rows = tool
    ? await s<Row[]>`SELECT id, tool_slug, name, rating, body, status, created_at FROM tool_comments WHERE status = ${status} AND tool_slug = ${tool} ORDER BY created_at DESC LIMIT 200`
    : await s<Row[]>`SELECT id, tool_slug, name, rating, body, status, created_at FROM tool_comments WHERE status = ${status} ORDER BY tool_slug, created_at DESC LIMIT 200`;
  return rows.map((r) => ({ ...toPublic(r), toolSlug: r.tool_slug, status: r.status }));
}

export async function moderate(id: string, action: "approve" | "remove" | "restore" | "delete"): Promise<void> {
  const s = await db();
  if (!s || !/^\d+$/.test(id)) return;
  if (action === "delete") {
    // Hard delete only after a soft delete.
    await s`DELETE FROM tool_comments WHERE id = ${id} AND status = 'removed'`;
    return;
  }
  const status = action === "approve" ? "approved" : action === "remove" ? "removed" : "pending";
  await s`UPDATE tool_comments SET status = ${status}, moderated_at = now() WHERE id = ${id}`;
}

export async function loginAttempts(ipHash: string): Promise<number> {
  const s = await db();
  if (!s) return 0;
  const [row] = await s<{ n: number }[]>`SELECT count(*)::int AS n FROM admin_login_attempts
    WHERE ip_hash = ${ipHash} AND created_at > now() - make_interval(mins => ${LOGIN_LIMIT.windowMinutes})`;
  return row?.n ?? 0;
}

export async function recordLoginFailure(ipHash: string): Promise<void> {
  const s = await db();
  if (!s) return;
  await s`INSERT INTO admin_login_attempts (ip_hash) VALUES (${ipHash})`;
  await s`DELETE FROM admin_login_attempts WHERE created_at < now() - interval '1 day'`;
}
