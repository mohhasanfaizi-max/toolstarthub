"use client";

import { Noto_Naskh_Arabic, Noto_Nastaliq_Urdu } from "next/font/google";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ToolActions, ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { checkDraftText, checkTranslation, withFactCheck } from "@/lib/urdu-news/checks";
import { matchingGlossary } from "@/lib/urdu-news/glossary";
import { uniquePermalink } from "@/lib/urdu-news/permalink";
import { countWords, englishOnlyRewrite } from "@/lib/urdu-news/text";
import type { ExpandedArticle, FactIssue, FactRow, Verification, VerificationCheck, VersionCopy, VersionId } from "@/lib/urdu-news/types";

const nastaliq = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  fallback: ["Noto Naskh Arabic", "serif"],
});

const naskh = Noto_Naskh_Arabic({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
  preload: false,
});

const urduFontFamily = `${nastaliq.style.fontFamily}, ${naskh.style.fontFamily}, serif`;

const VERSIONS: Array<{ id: VersionId; label: string }> = [
  { id: "brief", label: "Brief" },
  { id: "medium", label: "Medium" },
  { id: "average", label: "Full" },
];

const EMPTY_VERSION: VersionCopy = { subtitle: "", body: "", meta_description: "", word_count: 0 };

type Versions = Record<VersionId, VersionCopy>;

const EMPTY_VERSIONS: Versions = {
  brief: { ...EMPTY_VERSION },
  medium: { ...EMPTY_VERSION },
  average: { ...EMPTY_VERSION },
};

function messageFor(status: number, error: string): string {
  if (status === 429) return error || "Too many translation requests. Wait a few minutes and try again.";
  if (status === 503) return "The translator is temporarily unavailable.";
  return error || "The translator could not finish that request. Try again in a moment.";
}

function reviewStatus(checks: VerificationCheck[]): Verification["status"] {
  return checks.some((check) => check.level === "warning" || check.level === "error") ? "needs_review" : "ok";
}

function infoNotes(data: Record<string, unknown>): VerificationCheck[] {
  const verification = data.verification;
  if (!verification || typeof verification !== "object" || !("checks" in verification)) return [];
  const checks = verification.checks;
  if (!Array.isArray(checks)) return [];
  return checks.flatMap((check) => {
    if (!check || typeof check !== "object" || !("level" in check) || !("message" in check)) return [];
    if (check.level !== "info" || typeof check.message !== "string") return [];
    return [{ level: "info" as const, message: check.message }];
  });
}

function articleCheckText(article: ExpandedArticle): string {
  return [article.headline, article.body].filter(Boolean).join("\n\n");
}

function CopyRow({
  id,
  label,
  hint,
  value,
  copied,
  onCopy,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  copied: string;
  onCopy: (id: string, value: string) => void;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor={id}>
          {label}
        </label>
        <Button type="button" variant="secondary" disabled={!value.trim()} onClick={() => void onCopy(id, value)}>
          {copied === id ? "Copied" : "Copy"}
        </Button>
      </div>
      <div className="mt-1">{children}</div>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

export function UrduNewsTranslatorTool() {
  const [urdu, setUrdu] = useState("");
  const [available, setAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<"translate" | "expand" | "humanize" | null>(null);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [title, setTitle] = useState("");
  const [permalink, setPermalink] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [versions, setVersions] = useState<Versions>(EMPTY_VERSIONS);
  const [facts, setFacts] = useState<FactRow[]>([]);
  const [selected, setSelected] = useState<VersionId>("medium");
  const [article, setArticle] = useState<ExpandedArticle | null>(null);
  const [factIssues, setFactIssues] = useState<FactIssue[] | null>(null);
  const [factFresh, setFactFresh] = useState(false);
  const [serverInfo, setServerInfo] = useState<VerificationCheck[]>([]);
  const [approved, setApproved] = useState(false);
  const [copied, setCopied] = useState("");
  const [notice, setNotice] = useState("");
  const usedPermalinks = useRef(new Set<string>());
  const busy = useRef(false);

  useEffect(() => {
    let active = true;
    fetch("/api/urdu-news-translator")
      .then((response) => response.json())
      .then((data: { available?: boolean }) => {
        if (active) setAvailable(data.available !== false);
      })
      .catch(() => {
        if (active) setAvailable(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const glossaryCount = matchingGlossary(urdu).length;

  const verification = useMemo(() => {
    if (!ready) return null;
    const base = checkTranslation(urdu, { title, meta_title: metaTitle, versions });
    const extra = article ? checkDraftText(urdu, articleCheckText(article), "article").checks : [];
    const notes = factFresh ? serverInfo : [];
    const merged = { status: "ok" as const, checks: [...notes, ...base.checks, ...extra] };
    return factFresh ? withFactCheck(merged, factIssues) : { status: reviewStatus(merged.checks), checks: merged.checks };
  }, [ready, urdu, title, metaTitle, versions, article, factFresh, factIssues, serverInfo]);

  function markEdited() {
    setApproved(false);
    setFactFresh(false);
  }

  function updateVersion(id: VersionId, patch: Partial<VersionCopy>) {
    setVersions((current) => {
      const next = { ...current[id], ...patch };
      next.word_count = countWords(next.body);
      return { ...current, [id]: next };
    });
    markEdited();
  }

  async function post(body: unknown): Promise<Record<string, unknown>> {
    const response = await fetch("/api/urdu-news-translator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let data: Record<string, unknown> = {};
    try {
      data = (await response.json()) as Record<string, unknown>;
    } catch {
      data = {};
    }
    if (response.status === 503) setAvailable(false);
    if (!response.ok || data.success === false) {
      throw new Error(messageFor(response.status, typeof data.error === "string" ? data.error : ""));
    }
    return data;
  }

  async function run(kind: "translate" | "expand" | "humanize", body: unknown) {
    if (busy.current || available === false) return;
    busy.current = true;
    setLoading(kind);
    setError("");
    setNotice("");
    try {
      const data = await post(body);
      if (kind === "translate") {
        const nextPermalink = uniquePermalink(String(data.permalink ?? ""), usedPermalinks.current);
        usedPermalinks.current.add(nextPermalink);
        const nextVersions = data.versions as Versions;
        setTitle(String(data.title ?? ""));
        setPermalink(nextPermalink);
        setMetaTitle(String(data.meta_title ?? ""));
        setVersions(nextVersions);
        setFacts(Array.isArray(data.facts) ? (data.facts as FactRow[]) : []);
        setFactIssues(Array.isArray(data.fact_issues) ? (data.fact_issues as FactIssue[]) : data.fact_issues === null ? null : []);
        setServerInfo(infoNotes(data));
        setFactFresh(true);
        setSelected("medium");
        setArticle(null);
        setReady(true);
        setApproved(false);
      } else if (kind === "expand" && typeof data.headline === "string" && typeof data.body === "string") {
        setArticle({ headline: data.headline, body: data.body });
        setApproved(false);
      } else if (kind === "humanize" && typeof data.text === "string") {
        const text = englishOnlyRewrite(urdu, data.text);
        const target = body && typeof body === "object" && "target" in body ? body.target : undefined;
        const previous = target === "article"
          ? article?.body ?? ""
          : target === "brief" || target === "medium" || target === "average"
            ? versions[target].body
            : "";
        if (!text) {
          setError("The rewrite was not English. Try again.");
        } else {
          if (target === "article") {
            setArticle((current) => (current ? { ...current, body: text } : current));
          } else if (target === "brief" || target === "medium" || target === "average") {
            setVersions((current) => ({
              ...current,
              [target]: { ...current[target], body: text, word_count: countWords(text) },
            }));
          }
          setNotice(text === previous ? "The rewrite kept this wording." : "Body rewritten.");
          setFactFresh(false);
          setApproved(false);
        }
      }
    } catch (caught) {
      const offline = caught instanceof TypeError;
      setError(offline ? "The translator could not be reached. Check your connection and try again." : caught instanceof Error ? caught.message : "The translator could not finish that request. Try again in a moment.");
    } finally {
      busy.current = false;
      setLoading(null);
    }
  }

  function approve() {
    if (!verification) return;
    if (verification.status === "needs_review" && !window.confirm("Some checks need review. Read the Verification list, then press OK to approve.")) return;
    setApproved(true);
  }

  function packageText(): string {
    const blocks = [
      `Title: ${title}`,
      `Permalink: ${permalink}`,
      `Meta title: ${metaTitle}`,
      ...VERSIONS.flatMap((item) => [
        "",
        item.label,
        `Subtitle: ${versions[item.id].subtitle}`,
        versions[item.id].body,
        `Meta description: ${versions[item.id].meta_description}`,
      ]),
    ];
    if (article) {
      blocks.push("", "Expanded article", `Headline: ${article.headline}`, article.body);
    }
    return blocks.join("\n");
  }

  async function rememberCopy(label: string, value: string) {
    const ok = await copyText(value);
    setCopied(ok ? label : "");
    if (!ok) setError("The browser blocked copying. Select the text and copy it manually.");
  }

  const disabled = loading !== null || available === false;
  const selectedBody = versions[selected].body;

  return (
    <ToolPanel>
      {available === false ? (
        <p className="mb-4 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100" role="status">
          The translator is temporarily unavailable.
        </p>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        <section aria-labelledby="urdu-source-heading">
          <h2 id="urdu-source-heading" className="text-lg font-semibold text-foreground">1. Translate</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Paste the Urdu news story. Brief, Medium, and Full use only facts from that text.
          </p>
          <div className="mt-4">
            <ToolField id="urdu-news" label="Urdu news">
              <textarea
                id="urdu-news"
                dir="rtl"
                lang="ur"
                value={urdu}
                rows={12}
                disabled={loading !== null}
                style={{ fontFamily: urduFontFamily, fontSize: "21px", lineHeight: 2 }}
                className={`${toolControlClass} min-h-72 resize-y`}
                onChange={(event) => {
                  setUrdu(event.target.value);
                  if (ready) markEdited();
                }}
              />
            </ToolField>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Glossary matches: {glossaryCount}</p>
          <div className="mt-4">
            <ToolActions>
              <Button type="button" disabled={disabled || urdu.trim().length === 0} onClick={() => void run("translate", { action: "translate", urdu })}>
                {loading === "translate" ? "Translating…" : "Translate"}
              </Button>
              <Button
                type="button"
                variant="secondary"
                disabled={loading !== null}
                onClick={() => {
                  setUrdu("");
                  setReady(false);
                  setTitle("");
                  setPermalink("");
                  setMetaTitle("");
                  setVersions(EMPTY_VERSIONS);
                  setFacts([]);
                  setArticle(null);
                  setFactIssues(null);
                  setFactFresh(false);
                  setApproved(false);
                  setError("");
                  setSelected("medium");
                }}
              >
                Clear
              </Button>
            </ToolActions>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            These are drafts only. An editor must review the English before publishing.
          </p>
        </section>

        <section aria-labelledby="english-draft-heading">
          <h2 id="english-draft-heading" className="text-lg font-semibold text-foreground">English draft</h2>
          {loading ? (
            <p className="mt-3 text-sm text-muted-foreground" role="status" aria-live="polite">
              {loading === "translate" ? "Translating the article…" : loading === "expand" ? "Expanding the selected draft…" : "Rewriting the body…"}
            </p>
          ) : null}
          {error ? (
            <div className="mt-3">
              <ToolError>{error}</ToolError>
            </div>
          ) : null}
          {!ready ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground">The three English versions will appear here.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {verification?.status === "needs_review" ? (
                <p className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100" role="status">
                  This draft needs review. Read the verification report before you approve it.
                </p>
              ) : null}
              <CopyRow id="draft-title" label="Title" hint={`${title.length}/70`} value={title} copied={copied} onCopy={rememberCopy}>
                <input id="draft-title" value={title} className={toolControlClass} onChange={(event) => { setTitle(event.target.value); markEdited(); }} />
              </CopyRow>
              <CopyRow id="draft-permalink" label="Permalink" value={permalink} copied={copied} onCopy={rememberCopy}>
                <input id="draft-permalink" value={permalink} className={toolControlClass} onChange={(event) => { setPermalink(event.target.value); setApproved(false); }} />
              </CopyRow>
              <CopyRow id="draft-meta-title" label="Meta title" hint={`${metaTitle.length}/60`} value={metaTitle} copied={copied} onCopy={rememberCopy}>
                <input id="draft-meta-title" value={metaTitle} className={toolControlClass} onChange={(event) => { setMetaTitle(event.target.value); markEdited(); }} />
              </CopyRow>
              <div className="grid gap-3">
                {VERSIONS.map((item) => {
                  const version = versions[item.id];
                  const active = selected === item.id;
                  return (
                    <article key={item.id} className={`rounded-2xl border p-4 ${active ? "border-accent bg-accent-soft" : "border-border bg-background"}`}>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-medium text-foreground">{item.label}</h3>
                        <span className="text-xs text-muted-foreground">{version.word_count} words</span>
                      </div>
                      <div className="mt-3">
                        <CopyRow id={`${item.id}-subtitle`} label="Subtitle" value={version.subtitle} copied={copied} onCopy={rememberCopy}>
                          <input id={`${item.id}-subtitle`} value={version.subtitle} className={toolControlClass} onChange={(event) => updateVersion(item.id, { subtitle: event.target.value })} />
                        </CopyRow>
                      </div>
                      <div className="mt-3">
                        <CopyRow id={`${item.id}-body`} label="Body" value={version.body} copied={copied} onCopy={rememberCopy}>
                          <textarea id={`${item.id}-body`} value={version.body} rows={6} className={`${toolControlClass} resize-y`} onChange={(event) => updateVersion(item.id, { body: event.target.value })} />
                        </CopyRow>
                      </div>
                      <div className="mt-3">
                        <CopyRow id={`${item.id}-meta`} label="Meta description" hint={`${version.meta_description.length}/155`} value={version.meta_description} copied={copied} onCopy={rememberCopy}>
                          <textarea id={`${item.id}-meta`} value={version.meta_description} rows={3} className={`${toolControlClass} resize-y`} onChange={(event) => updateVersion(item.id, { meta_description: event.target.value })} />
                        </CopyRow>
                      </div>
                      <div className="mt-3">
                        <Button type="button" variant={active ? "primary" : "secondary"} aria-pressed={active} onClick={() => { setSelected(item.id); setApproved(false); }}>
                          Use this
                        </Button>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">2. Expand news</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Build a fuller article from the selected version, using only the Urdu.</p>
                <div className="mt-3">
                  <Button type="button" variant="secondary" disabled={disabled || !selectedBody} onClick={() => void run("expand", { action: "expand", urdu, version: selected, text: selectedBody })}>
                    {loading === "expand" ? "Expanding…" : "Expand news"}
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">3. Humanize</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Optional. Rewrite the selected body, or the expanded body, without changing a fact. Title, subtitle, permalink, and meta fields stay as they are.</p>
                <div className="mt-3">
                  <Button
                    type="button"
                    variant="secondary"
                    disabled={disabled || (!article && !selectedBody)}
                    onClick={() => void run("humanize", article
                      ? { action: "humanize", urdu, target: "article", text: article.body }
                      : { action: "humanize", urdu, target: selected, text: selectedBody })}
                  >
                    {loading === "humanize" ? "Rewriting…" : "Humanize"}
                  </Button>
                </div>
                {notice ? <p className="mt-2 text-sm text-muted-foreground" role="status">{notice}</p> : null}
              </div>
              {article ? (
                <div className="space-y-3 rounded-2xl border border-border p-4">
                  <h3 className="font-medium text-foreground">Expanded article</h3>
                  <CopyRow id="expand-headline" label="Headline" value={article.headline} copied={copied} onCopy={rememberCopy}>
                    <input id="expand-headline" value={article.headline} className={toolControlClass} onChange={(event) => { setArticle({ ...article, headline: event.target.value }); setApproved(false); }} />
                  </CopyRow>
                  <CopyRow id="expand-body" label="Body" value={article.body} copied={copied} onCopy={rememberCopy}>
                    <textarea id="expand-body" value={article.body} rows={8} className={`${toolControlClass} resize-y`} onChange={(event) => { setArticle({ ...article, body: event.target.value }); setApproved(false); }} />
                  </CopyRow>
                </div>
              ) : null}
            </div>
          )}
        </section>
      </div>

      {ready ? (
        <div className="mt-8 space-y-6">
          <section aria-labelledby="facts-heading">
            <h2 id="facts-heading" className="text-lg font-semibold text-foreground">Facts</h2>
            {facts.length === 0 ? (
              <p className="mt-2 text-sm text-muted-foreground">No facts were listed.</p>
            ) : (
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[40rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-2 py-2 font-medium">Type</th>
                      <th className="px-2 py-2 font-medium">English</th>
                      <th className="px-2 py-2 font-medium">Urdu</th>
                      <th className="px-2 py-2 font-medium">Brief</th>
                      <th className="px-2 py-2 font-medium">Medium</th>
                      <th className="px-2 py-2 font-medium">Full</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facts.map((fact, index) => (
                      <tr key={`${fact.type}-${fact.english}-${index}`} className="border-b border-border">
                        <td className="px-2 py-2">{fact.type}</td>
                        <td className="px-2 py-2">{fact.english}</td>
                        <td className="px-2 py-2" dir="rtl" lang="ur">{fact.urdu}</td>
                        <td className="px-2 py-2">{fact.in_brief ? "✓" : "–"}</td>
                        <td className="px-2 py-2">{fact.in_medium ? "✓" : "–"}</td>
                        <td className="px-2 py-2">{fact.in_average ? "✓" : "–"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {verification ? (
            <section aria-labelledby="verification-heading">
              <h2 id="verification-heading" className="text-lg font-semibold text-foreground">Verification</h2>
              <ul className="mt-3 space-y-2">
                {verification.checks.map((check, index) => (
                  <li key={`${check.level}-${index}`} className="text-sm leading-6 text-foreground">
                    <span aria-hidden="true">{check.level === "ok" ? "✓" : check.level === "info" ? "i" : check.level === "warning" ? "!" : "✕"} </span>
                    {check.message}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section aria-labelledby="approval-heading" className="rounded-2xl border border-border bg-muted px-4 py-4">
            <h2 id="approval-heading" className="text-base font-semibold text-foreground">Approval</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {approved ? "Approved for copying. An edit or a new selection clears this." : "Each field copies on its own. Copy and Copy all stay off until you approve the draft."}
            </p>
            <div className="mt-3">
              <ToolActions>
                <Button type="button" disabled={!verification || approved} onClick={approve}>Approve</Button>
                <Button type="button" variant="secondary" disabled={!approved || !selectedBody} onClick={() => void rememberCopy("selection", selectedBody)}>
                  {copied === "selection" ? "Copied" : "Copy"}
                </Button>
                <Button type="button" variant="secondary" disabled={!approved} onClick={() => void rememberCopy("all", packageText())}>
                  {copied === "all" ? "Copied" : "Copy all"}
                </Button>
              </ToolActions>
            </div>
          </section>
        </div>
      ) : null}
    </ToolPanel>
  );
}
