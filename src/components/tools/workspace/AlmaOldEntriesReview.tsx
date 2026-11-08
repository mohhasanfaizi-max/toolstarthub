"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { STORAGE_KEY, type AlmaState } from "@/lib/tools/alma-foods";
import {
  ALMA_BACKUP_KEY,
  applyFixes,
  listCandidates,
  makeBackup,
  parseBackup,
  proposeFix,
  type ProductLookup,
  type Review,
} from "@/lib/tools/alma-oldfix";

// Session cache: one lookup per barcode per page session.
const lookupCache = new Map<string, ProductLookup>();
const LOOKUP_GAP_MS = 700;

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function download(name: string, text: string) {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function fmt(value: number | undefined) {
  return value === undefined ? "—" : String(Math.round(value * 100) / 100);
}

export function AlmaOldEntriesReview({
  state,
  onApply,
  onRestore,
  onClose,
}: {
  state: AlmaState;
  onApply: (next: AlmaState) => void;
  onRestore: (raw: string) => void;
  onClose: () => void;
}) {
  const candidates = useMemo(() => listCandidates(state), [state]);
  const [lookups, setLookups] = useState<Record<string, ProductLookup>>({});
  const [progress, setProgress] = useState("Checking products on Open Food Facts…");
  const [done, setDone] = useState(false);
  const [deselected, setDeselected] = useState<Set<string>>(new Set());
  const [applied, setApplied] = useState<string>();
  const [backup, setBackup] = useState(() => (typeof window === "undefined" ? null : parseBackup(readStorage(ALMA_BACKUP_KEY))));
  const started = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let cancelled = false;
    void (async () => {
      const codes = [...new Set(candidates.map((c) => /^off-(\d{8,14})-/.exec(c.entry.foodId)?.[1]).filter((c): c is string => Boolean(c)))];
      const result: Record<string, ProductLookup> = {};
      let paused: string | undefined;
      for (const [index, code] of codes.entries()) {
        if (cancelled) return;
        if (paused) {
          result[code] = { ok: false, reason: paused };
          continue;
        }
        const cached = lookupCache.get(code);
        if (cached) {
          result[code] = cached;
          continue;
        }
        setProgress(`Checking product ${index + 1} of ${codes.length} on Open Food Facts…`);
        try {
          const response = await fetch(`/api/alma/product?code=${code}`);
          const data = (await response.json()) as ProductLookup;
          if (response.status === 429) {
            paused = "Open Food Facts asked us to slow down; this product was not checked. Try the review again later.";
            result[code] = { ok: false, reason: paused };
          } else {
            result[code] = data;
            if (response.ok || response.status === 400) lookupCache.set(code, data);
          }
        } catch {
          result[code] = { ok: false, reason: "the product lookup failed; try again later." };
        }
        if (index < codes.length - 1) await new Promise((r) => setTimeout(r, LOOKUP_GAP_MS));
      }
      if (cancelled) return;
      setLookups(result);
      setDone(true);
      setProgress("");
    })();
    return () => {
      cancelled = true;
      started.current = false;
    };
    // Lookups run once per opening; later state changes do not refetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reviews: Review[] = useMemo(
    () => (done ? candidates.map((ref) => proposeFix(ref, lookups[/^off-(\d{8,14})-/.exec(ref.entry.foodId)?.[1] ?? ""])) : []),
    [done, candidates, lookups],
  );
  const fixes = reviews.filter((r): r is Extract<Review, { kind: "fix" }> => r.kind === "fix");
  const flags = reviews.filter((r): r is Extract<Review, { kind: "flag" }> => r.kind === "flag");

  const selected = new Set(fixes.map((f) => f.ref.entry.id).filter((id) => !deselected.has(id)));

  function accept(ids: Set<string>) {
    if (ids.size === 0) return;
    const raw = readStorage(STORAGE_KEY) ?? JSON.stringify(state);
    const next = makeBackup(raw);
    try {
      window.localStorage.setItem(ALMA_BACKUP_KEY, JSON.stringify(next));
    } catch {
      setApplied("Could not save a backup in this browser, so nothing was changed.");
      return;
    }
    setBackup(next);
    onApply(applyFixes(state, reviews, ids));
    setApplied(`Updated ${ids.size} ${ids.size === 1 ? "entry" : "entries"}. A backup was saved first; use Undo to restore it exactly.`);
  }

  function undo() {
    if (!backup) return;
    onRestore(backup.data);
    setApplied("Restored your diary exactly as it was before the fix.");
  }

  const toggle = (id: string) =>
    setDeselected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section aria-labelledby="alma-oldfix-title" className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 text-sm dark:border-emerald-900 dark:bg-emerald-950/20">
      <h3 id="alma-oldfix-title" ref={headingRef} tabIndex={-1} className="text-base font-semibold text-foreground focus:outline-none">
        Review old packaged-food entries
      </h3>
      <p className="mt-1 text-muted-foreground">
        Packaged-food servings saved before 7 Nov 2026 were counted as 100 g. For each one, Alma looks up the product&apos;s
        barcode on Open Food Facts once, and proposes new values only when the label gives a gram serving and the stored
        per-100 g calories still match. Nothing changes until you accept. Vitamins and minerals on these entries are not
        changed; delete and re-add an item for accurate micronutrients.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button type="button" variant="secondary" onClick={() => download(`alma-diary-${new Date().toISOString().slice(0, 10)}.json`, readStorage(STORAGE_KEY) ?? JSON.stringify(state))}>
          Download backup
        </Button>
        {backup ? (
          <Button type="button" variant="ghost" onClick={undo}>
            Undo last fix ({new Date(backup.createdAt).toLocaleString()})
          </Button>
        ) : null}
      </div>
      <p role="status" className="mt-3 text-muted-foreground">
        {applied ?? (progress || (done && candidates.length === 0 ? "No old packaged-food serving entries found." : ""))}
      </p>
      {done && !applied && fixes.length > 0 ? (
        <fieldset className="mt-3">
          <legend className="font-medium text-foreground">Proposed corrections</legend>
          <ul className="mt-2 space-y-2">
            {fixes.map((fix) => {
              const e = fix.ref.entry;
              const id = `oldfix-${e.id}`;
              return (
                <li key={e.id} className="rounded-xl border border-amber-200 bg-background px-3 py-2">
                  <label htmlFor={id} className="flex items-start gap-3">
                    <input id={id} type="checkbox" className="mt-1 h-4 w-4 accent-emerald-700" checked={selected.has(e.id)} onChange={() => toggle(e.id)} />
                    <span>
                      <span className="font-medium">{e.name}</span>{" "}
                      <span className="text-muted-foreground">
                        · {fix.ref.date} · {fix.ref.meal} · {e.servings} serving{e.servings === 1 ? "" : "s"} of {fix.servingGrams} g
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        Now: {fmt(e.grams)} g · {fmt(e.calories)} kcal · P {fmt(e.protein)} · C {fmt(e.carbs)} · F {fmt(e.fat)}
                      </span>
                      <span className="block text-xs font-medium text-emerald-800 dark:text-emerald-200">
                        Proposed: {fmt(fix.proposed.grams)} g · {fmt(fix.proposed.calories)} kcal · P {fmt(fix.proposed.protein)} · C {fmt(fix.proposed.carbs)} · F {fmt(fix.proposed.fat)}
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
      ) : null}
      {done && !applied && flags.length > 0 ? (
        <div className="mt-3">
          <p className="font-medium text-foreground">Not changed</p>
          <ul className="mt-2 space-y-2">
            {flags.map((flag) => (
              <li key={flag.ref.entry.id} className="rounded-xl border border-border bg-background px-3 py-2">
                <span className="font-medium">{flag.ref.entry.name}</span>{" "}
                <span className="text-muted-foreground">· {flag.ref.date} · {flag.ref.meal}</span>
                <span className="block text-xs text-amber-800 dark:text-amber-200">{flag.reason}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {done && !applied && fixes.length > 0 ? (
          <>
            <Button type="button" onClick={() => accept(new Set(fixes.map((f) => f.ref.entry.id)))}>Accept all</Button>
            <Button type="button" variant="secondary" disabled={selected.size === 0} onClick={() => accept(selected)}>
              Accept selected ({selected.size})
            </Button>
          </>
        ) : null}
        <Button type="button" variant="ghost" onClick={onClose}>{applied ? "Close" : "Cancel"}</Button>
      </div>
    </section>
  );
}
