"use client";

import { useEffect, useRef, useState } from "react";

type PublicComment = { id: string; name: string; rating: number | null; body: string; createdAt: string };
type Phase = "idle" | "loading" | "off" | "ready" | "error";

const NAME_MAX = 60;
const BODY_MAX = 1000;
const field = "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600";

/**
 * Feedback section at the end of every tool page. Loads only when scrolled
 * near. Hidden entirely while comments are disabled/misconfigured (no
 * DATABASE_URL) or the API errors — reappears automatically once secrets
 * are set and `/api/comments` returns enabled. Comments are plain text;
 * links are never made clickable. Admin UI stays intact.
 */
export function ToolComments({ tool }: { tool: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [body, setBody] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{ ok: boolean; text: string }>();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "400px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let active = true;
    void (async () => {
      try {
        const response = await fetch(`/api/comments?tool=${encodeURIComponent(tool)}&page=${page}`);
        const data = (await response.json()) as { enabled?: boolean; comments?: PublicComment[]; hasMore?: boolean; error?: string };
        if (!active) return;
        if (data.enabled === false) return setPhase("off");
        if (!response.ok) return setPhase("error");
        setComments((current) => (page === 1 ? data.comments ?? [] : [...current, ...(data.comments ?? [])]));
        setHasMore(Boolean(data.hasMore));
        setPhase("ready");
      } catch {
        if (active) setPhase("error");
      }
    })();
    return () => {
      active = false;
    };
  }, [visible, page, tool]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setNotice(undefined);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool, name, rating: rating || null, body, website, startedAt }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string; error?: string };
      if (data.ok) {
        setNotice({ ok: true, text: data.message ?? "Thanks, your comment will appear after review." });
        setBody("");
        setRating("");
      } else {
        setNotice({ ok: false, text: data.error ?? "Your comment could not be sent." });
      }
    } catch {
      setNotice({ ok: false, text: "Your comment could not be sent. Please try again later." });
    } finally {
      setSending(false);
    }
  }

  // Draft/hidden until the API reports comments are enabled.
  if (phase === "off" || phase === "error") return null;

  if (phase !== "ready") {
    return <div ref={ref} aria-hidden="true" className="h-px w-px" />;
  }

  return (
    <section aria-labelledby="tool-comments-title" className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50/30 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/10 sm:p-6">
      <h2 id="tool-comments-title" className="text-xl font-semibold tracking-tight text-foreground">Feedback and comments</h2>
      <form onSubmit={submit} className="relative mt-4 grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="tc-name" className="text-sm font-medium text-foreground">Name</label>
            <input id="tc-name" required maxLength={NAME_MAX} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label htmlFor="tc-rating" className="text-sm font-medium text-foreground">Was this tool helpful? (optional)</label>
            <select id="tc-rating" value={rating} onChange={(e) => setRating(e.target.value)} className={`mt-1 ${field}`}>
              <option value="">No rating</option>
              {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} of 5</option>)}
            </select>
          </div>
        </div>
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="tc-website">Website</label>
          <input id="tc-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div>
          <label htmlFor="tc-body" className="text-sm font-medium text-foreground">Comment</label>
          <textarea id="tc-body" required maxLength={BODY_MAX} rows={4} value={body} onChange={(e) => setBody(e.target.value)} aria-describedby="tc-help" className={`mt-1 ${field}`} />
          <p id="tc-help" className="mt-1 text-xs text-muted-foreground">
            {body.length}/{BODY_MAX} · Comments are reviewed before they appear. Don&apos;t include personal information or links.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" disabled={sending} className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
            {sending ? "Sending…" : "Post comment"}
          </button>
          <p role="status" className={`text-sm ${notice?.ok ? "text-emerald-800 dark:text-emerald-200" : "text-amber-800 dark:text-amber-200"}`}>{notice?.text}</p>
        </div>
      </form>
      {comments.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">No comments yet.</p>
      ) : (
        <ul className="mt-6 space-y-3">
          {comments.map((c) => (
            <li key={c.id} className="rounded-2xl border border-border bg-background p-4 text-sm">
              <p className="font-medium text-foreground">
                {c.name}
                {c.rating ? <span className="ml-2 text-amber-700 dark:text-amber-300" aria-label={`Rated ${c.rating} of 5`}>{"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}</span> : null}
                <span className="ml-2 text-xs font-normal text-muted-foreground"><time dateTime={c.createdAt}>{new Date(c.createdAt).toLocaleDateString()}</time></span>
              </p>
              <p className="mt-2 whitespace-pre-wrap break-words text-foreground">{c.body}</p>
            </li>
          ))}
        </ul>
      )}
      {hasMore ? (
        <button type="button" onClick={() => setPage((p) => p + 1)} className="mt-4 rounded-full border border-border px-4 py-2 text-sm hover:border-amber-400">
          Show older comments
        </button>
      ) : null}
    </section>
  );
}
