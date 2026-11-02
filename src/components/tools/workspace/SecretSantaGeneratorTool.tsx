"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  addExclusion,
  assignmentsToCsv,
  buildMessage,
  CURRENCIES,
  DEFAULT_TEMPLATE,
  displayNames,
  formatBudget,
  formatDate,
  formatWishlist,
  generateAssignments,
  makeParticipants,
  MAX_NAME_LENGTH,
  MIN_PARTICIPANTS,
  normalizeName,
  parseBulkNames,
  parseSavedSettings,
  removeParticipant,
  resetEvent,
  serializeSettings,
  SETTINGS_STORAGE_KEY,
  validateExclusions,
  validateInput,
  type Assignment,
  type Currency,
  type EventSettings,
  type Exclusion,
  type Participant,
  type Wishlist,
} from "@/lib/tools/secret-santa";

/* Festive palette: deep green, warm red, cream, white and a little gold. */
const GREEN = "#14532d";
const card = "rounded-3xl border border-[#C9A227]/40 bg-[#FFFDF7] p-5 text-[#1c2a21] shadow-sm sm:p-7";
const input =
  "mt-1.5 w-full min-h-11 rounded-xl border border-[#14532d]/25 bg-white px-3 py-2.5 text-base text-[#1c2a21] placeholder:text-[#5b6b60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] sm:text-sm";
const label = "block text-sm font-medium text-[#1c2a21]";
const btnGreen =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#14532d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0f3f22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none";
const btnRed =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#991b1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none";
const btnGhost =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#14532d]/30 bg-white px-4 py-2 text-sm font-medium text-[#14532d] transition-colors hover:bg-[#F7F0D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none";
const btnDanger =
  "inline-flex min-h-11 items-center justify-center rounded-xl border border-[#b91c1c]/40 bg-white px-4 py-2 text-sm font-medium text-[#991b1b] transition-colors hover:bg-[#fdecec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] motion-reduce:transition-none";
const h2 = "text-lg font-semibold tracking-tight text-[#14532d]";

function Alert({ tone, children }: { tone: "error" | "warn" | "ok" | "info"; children: React.ReactNode }) {
  const tones = {
    error: "border-[#b91c1c]/30 bg-[#fdecec] text-[#7f1d1d]",
    warn: "border-[#C9A227]/50 bg-[#FBF8EC] text-[#4a3b08]",
    ok: "border-[#14532d]/30 bg-[#e9f5ec] text-[#14532d]",
    info: "border-[#14532d]/15 bg-[#f6f3ea] text-[#33443a]",
  };
  return <div className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${tones[tone]}`}>{children}</div>;
}

function CopyBtn({ text, children }: { text: string; children: React.ReactNode }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("fail");
    }
    window.setTimeout(() => setState("idle"), 2000);
  }
  return (
    <button type="button" className={btnGhost} onClick={copy}>
      {state === "done" ? "Copied" : state === "fail" ? "Copy failed – select and copy manually" : children}
      <span className="sr-only" aria-live="polite">
        {state === "done" ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}

function download(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const WISH_FIELDS: { key: keyof Wishlist; label: string; placeholder: string }[] = [
  { key: "ideas", label: "Gift ideas", placeholder: "A paperback thriller, good coffee" },
  { key: "categories", label: "Favourite categories", placeholder: "Books, kitchen, games" },
  { key: "hobbies", label: "Hobbies and interests", placeholder: "Hiking, baking" },
  { key: "colors", label: "Preferred colours", placeholder: "Green, navy" },
  { key: "avoid", label: "Would rather not receive", placeholder: "Scented candles" },
  { key: "links", label: "Shopping links", placeholder: "Paste links, one per line" },
];

export function SecretSantaGeneratorTool() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [exclusions, setExclusions] = useState<Exclusion[]>([]);
  const [assignments, setAssignments] = useState<Assignment[] | null>(null);
  const [settings, setSettings] = useState<EventSettings>(() => resetEvent().settings);
  const [loaded, setLoaded] = useState(false);
  const [single, setSingle] = useState("");
  const [bulk, setBulk] = useState("");
  const [addError, setAddError] = useState("");
  const [ruleGiver, setRuleGiver] = useState("");
  const [ruleReceiver, setRuleReceiver] = useState("");
  const [ruleMutual, setRuleMutual] = useState(true);
  const [ruleError, setRuleError] = useState("");
  const [genError, setGenError] = useState("");
  const [generating, setGenerating] = useState(false);
  const [revealed, setRevealed] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [notice, setNotice] = useState("");
  const [printIds, setPrintIds] = useState<string[] | null>(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  // Settings only are read from and written to this browser.
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of browser storage after mount
      setSettings(parseSavedSettings(window.localStorage.getItem(SETTINGS_STORAGE_KEY)));
    } catch {
      /* storage unavailable */
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(SETTINGS_STORAGE_KEY, serializeSettings(settings));
    } catch {
      /* storage full or blocked */
    }
  }, [settings, loaded]);

  useEffect(() => {
    if (!printIds) return;
    const done = () => setPrintIds(null);
    window.addEventListener("afterprint", done, { once: true });
    const t = window.setTimeout(() => window.print(), 50);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("afterprint", done);
    };
  }, [printIds]);

  const labels = useMemo(() => displayNames(participants), [participants]);
  const inputCheck = useMemo(() => validateInput(participants, settings), [participants, settings]);
  const ruleCheck = useMemo(() => validateExclusions(participants, exclusions), [participants, exclusions]);
  const byId = useMemo(() => new Map(participants.map((p) => [p.id, p])), [participants]);
  const budget = formatBudget(settings);

  function invalidate() {
    setAssignments(null);
    setRevealed(null);
    setShowAll(false);
  }
  function setField<K extends keyof EventSettings>(key: K, value: EventSettings[K]) {
    setSettings((s) => ({ ...s, [key]: value }));
  }

  function addNames(names: string[]) {
    const tooLong = names.find((n) => n.length > MAX_NAME_LENGTH);
    if (names.length === 0) {
      setAddError("Type a name first. Blank names are not added.");
      return false;
    }
    if (tooLong) {
      setAddError(`Names can be up to ${MAX_NAME_LENGTH} characters.`);
      return false;
    }
    setParticipants((list) => [...list, ...makeParticipants(names)]);
    setAddError("");
    invalidate();
    return true;
  }
  function updateParticipant(id: string, patch: Partial<Participant>) {
    setParticipants((list) => list.map((p) => (p.id === id ? { ...p, ...patch } : p)));
    if ("name" in patch) invalidate();
  }
  function updateWish(id: string, key: keyof Wishlist, value: string) {
    setParticipants((list) => list.map((p) => (p.id === id ? { ...p, wishlist: { ...p.wishlist, [key]: value } } : p)));
  }
  function remove(id: string) {
    const next = removeParticipant({ participants, exclusions, assignments, settings }, id);
    setParticipants(next.participants);
    setExclusions(next.exclusions);
    invalidate();
  }
  function clearList() {
    if (participants.length === 0) return;
    if (!window.confirm("Remove every participant and exclusion rule? The current draw will be lost.")) return;
    setParticipants([]);
    setExclusions([]);
    invalidate();
  }
  function addRule() {
    if (!ruleGiver || !ruleReceiver) {
      setRuleError("Choose both people for the rule.");
      return;
    }
    if (ruleGiver === ruleReceiver) {
      setRuleError("Choose two different people. Nobody can draw their own name anyway.");
      return;
    }
    setExclusions((list) => addExclusion(list, ruleGiver, ruleReceiver, ruleMutual));
    setRuleError("");
    setRuleGiver("");
    setRuleReceiver("");
    invalidate();
  }

  function generate() {
    setGenError("");
    setNotice("");
    if (!inputCheck.ok || !ruleCheck.ok) {
      setGenError([...inputCheck.errors, ...ruleCheck.errors].join(" "));
      return;
    }
    setGenerating(true);
    // Yield one frame so the loading state is visible on large groups.
    window.setTimeout(() => {
      const trimmed = participants.map((p) => ({ ...p, name: normalizeName(p.name) }));
      const result = generateAssignments(trimmed, exclusions);
      setGenerating(false);
      if (!result.ok) {
        setGenError(result.error);
        setAssignments(null);
        return;
      }
      setParticipants(trimmed);
      setAssignments(result.assignments);
      setRevealed(null);
      setShowAll(false);
      setNotice(`Draw complete and verified: ${result.assignments.length} givers, ${result.assignments.length} different recipients, no one drew themselves and every exclusion was respected.`);
      window.setTimeout(() => resultsRef.current?.focus(), 0);
    }, 30);
  }

  function messageFor(a: Assignment) {
    return buildMessage(
      settings.messageTemplate,
      labels.get(a.giverId) ?? "",
      labels.get(a.receiverId) ?? "",
      settings,
      byId.get(a.receiverId)?.wishlist,
    );
  }

  function toggleShowAll() {
    if (!showAll && !window.confirm("Show every pairing on screen? Anyone who can see this screen will see who drew whom.")) return;
    setShowAll((v) => !v);
    setRevealed(null);
  }

  function downloadCsv() {
    if (!assignments) return;
    if (!window.confirm("The CSV lists every pairing. It is for the organizer only. Download it?")) return;
    download("secret-santa-organizer.csv", new Blob([assignmentsToCsv(participants, assignments, settings)], { type: "text/csv;charset=utf-8" }));
  }

  async function downloadPdf() {
    if (!assignments) return;
    if (!window.confirm("The PDF lists every pairing. It is for the organizer only. Download it?")) return;
    setPdfBusy(true);
    try {
      const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
      const doc = await PDFDocument.create();
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const bold = await doc.embedFont(StandardFonts.HelveticaBold);
      // Standard PDF fonts only cover Latin text; other characters become "?".
      const safe = (s: string) =>
        [...s]
          .map((ch) => {
            try {
              font.encodeText(ch);
              return ch;
            } catch {
              return "?";
            }
          })
          .join("");
      let page = doc.addPage([595, 842]);
      let y = 790;
      const line = (text: string, size = 11, f = font) => {
        if (y < 60) {
          page = doc.addPage([595, 842]);
          y = 790;
        }
        page.drawText(safe(text).slice(0, 110), { x: 50, y, size, font: f, color: rgb(0.08, 0.2, 0.12) });
        y -= size + 8;
      };
      line(settings.eventName.trim() || "Secret Santa", 18, bold);
      line("Organizer list - keep private", 10);
      if (budget) line(`Budget: ${budget}`);
      if (settings.exchangeDate) line(`Exchange date: ${formatDate(settings.exchangeDate)}`);
      y -= 8;
      for (const a of assignments) line(`${labels.get(a.giverId)}  ->  ${labels.get(a.receiverId)}`);
      const bytes = await doc.save();
      download("secret-santa-organizer.pdf", new Blob([bytes as BlobPart], { type: "application/pdf" }));
    } catch {
      setGenError("The PDF could not be created in this browser. Use the CSV download or Print all cards and choose Save as PDF.");
    } finally {
      setPdfBusy(false);
    }
  }

  function deleteSaved() {
    if (!window.confirm("Delete the event settings saved in this browser?")) return;
    try {
      window.localStorage.removeItem(SETTINGS_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setSettings(resetEvent().settings);
    setNotice("Saved settings deleted from this browser.");
  }
  function resetAll() {
    if (!window.confirm("Reset the whole event? Participants, rules, settings and the draw will be cleared, and saved settings deleted.")) return;
    const fresh = resetEvent();
    try {
      window.localStorage.removeItem(SETTINGS_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setParticipants(fresh.participants);
    setExclusions(fresh.exclusions);
    setSettings(fresh.settings);
    setAssignments(null);
    setRevealed(null);
    setShowAll(false);
    setGenError("");
    setNotice("Event reset. Nothing from it is stored in this browser.");
  }

  const invitation = [
    `You're invited to ${settings.eventName.trim() || "our Secret Santa gift exchange"}!`,
    settings.description.trim(),
    budget ? `Gift budget: ${budget}.` : "",
    settings.exchangeDate ? `Exchange date: ${formatDate(settings.exchangeDate)}.` : "",
    settings.theme.trim() ? `Theme: ${settings.theme.trim()}.` : "",
    settings.wishlistInstructions.trim(),
    "The organizer will send you the name of the person you are buying for.",
  ]
    .filter(Boolean)
    .join("\n");

  const printList = printIds && assignments ? assignments.filter((a) => printIds.includes(a.giverId)) : [];

  return (
    <div className="ss-tool space-y-6 rounded-[2rem] bg-[#f4efe2] p-3 sm:p-5" style={{ ["--ss-green" as string]: GREEN }}>
      {printIds ? (
        <style>{`@media print{body *{visibility:hidden!important}.ss-print-area,.ss-print-area *{visibility:visible!important}.ss-print-area{position:absolute;left:0;top:0;width:100%}.ss-print-card{break-after:page;page-break-after:always}.ss-print-card:last-child{break-after:auto;page-break-after:auto}}`}</style>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#14532d] px-5 py-4 text-white">
        <p className="text-sm leading-6">
          <span aria-hidden="true">🎁 </span>
          <strong className="font-semibold text-[#F7F0D8]">Free, no login.</strong> Names and pairings stay in this browser and are never sent to a server.
        </p>
        <p className="text-sm font-medium text-[#F7F0D8]" aria-live="polite">
          {participants.length} {participants.length === 1 ? "participant" : "participants"}
        </p>
      </div>

      {/* 1. Participants */}
      <section aria-labelledby="ss-participants" className={card}>
        <h2 id="ss-participants" className={h2}>1. Add participants</h2>
        <p className="mt-1 text-sm leading-6 text-[#3f4f45]">Add at least {MIN_PARTICIPANTS} people. Each person gets a hidden internal ID, so two people with the same name are kept apart.</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (addNames(parseBulkNames(single))) setSingle("");
            }}
          >
            <label htmlFor="ss-single" className={label}>Add one name</label>
            <div className="flex gap-2">
              <input id="ss-single" className={input} value={single} maxLength={MAX_NAME_LENGTH} onChange={(e) => setSingle(e.target.value)} placeholder="e.g. Sarah" autoComplete="off" />
              <button type="submit" className={`${btnGreen} mt-1.5 shrink-0`}>Add</button>
            </div>
          </form>
          <div>
            <label htmlFor="ss-bulk" className={label}>Add several names (one per line)</label>
            <textarea id="ss-bulk" className={`${input} min-h-24`} rows={3} value={bulk} onChange={(e) => setBulk(e.target.value)} placeholder={"Sarah\nAlex\nPriya"} />
            <button
              type="button"
              className={`${btnGhost} mt-2`}
              onClick={() => {
                if (addNames(parseBulkNames(bulk))) setBulk("");
              }}
            >
              Add all names
            </button>
          </div>
        </div>
        {addError ? <div className="mt-3" role="alert"><Alert tone="error">{addError}</Alert></div> : null}

        {participants.length === 0 ? (
          <p className="mt-5 rounded-2xl border border-dashed border-[#14532d]/30 px-4 py-6 text-center text-sm text-[#3f4f45]">No participants yet. Add names above to start your Secret Santa draw.</p>
        ) : (
          <ul className="mt-5 space-y-2">
            {participants.map((p, i) => (
              <li key={p.id} className="rounded-2xl border border-[#14532d]/15 bg-white px-3 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-7 text-sm font-semibold text-[#14532d]" aria-hidden="true">{i + 1}.</span>
                  <label htmlFor={`ss-name-${p.id}`} className="sr-only">Name of participant {i + 1}</label>
                  <input
                    id={`ss-name-${p.id}`}
                    className={`${input} mt-0 min-w-0 flex-1`}
                    value={p.name}
                    maxLength={MAX_NAME_LENGTH}
                    onChange={(e) => updateParticipant(p.id, { name: e.target.value })}
                    onBlur={(e) => updateParticipant(p.id, { name: normalizeName(e.target.value) })}
                    aria-invalid={!normalizeName(p.name)}
                  />
                  <button type="button" className={btnDanger} onClick={() => remove(p.id)} aria-label={`Remove ${p.name || `participant ${i + 1}`}`}>Remove</button>
                </div>
                {!normalizeName(p.name) ? <p className="mt-1 text-sm text-[#991b1b]">This name is blank. Type a name or remove the row.</p> : null}
                <details className="mt-2">
                  <summary className="cursor-pointer rounded text-sm font-medium text-[#14532d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]">Wishlist and email (optional)</summary>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {WISH_FIELDS.map((f) => (
                      <div key={f.key}>
                        <label htmlFor={`ss-${f.key}-${p.id}`} className={label}>{f.label}</label>
                        <input id={`ss-${f.key}-${p.id}`} className={input} value={p.wishlist?.[f.key] ?? ""} maxLength={500} placeholder={f.placeholder} onChange={(e) => updateWish(p.id, f.key, e.target.value)} />
                      </div>
                    ))}
                    <div>
                      <label htmlFor={`ss-email-${p.id}`} className={label}>Email (optional, not used to send anything)</label>
                      <input id={`ss-email-${p.id}`} type="email" className={input} value={p.email ?? ""} onChange={(e) => updateParticipant(p.id, { email: e.target.value })} placeholder="name@example.com" autoComplete="off" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#3f4f45]">A wishlist is shown only on its owner&apos;s Secret Santa&apos;s card. This version never sends email; the address is kept in this tab only.</p>
                </details>
              </li>
            ))}
          </ul>
        )}
        {inputCheck.warnings.length ? <div className="mt-3 space-y-2">{inputCheck.warnings.map((w) => <Alert key={w} tone="warn">{w}</Alert>)}</div> : null}
        {participants.length > 0 ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#3f4f45]">
              Total: <strong className="text-[#14532d]">{participants.length}</strong>
              {participants.length < MIN_PARTICIPANTS ? ` – add ${MIN_PARTICIPANTS - participants.length} more to draw.` : ""}
            </p>
            <button type="button" className={btnDanger} onClick={clearList}>Clear list</button>
          </div>
        ) : null}
      </section>

      {/* 2. Settings */}
      <section aria-labelledby="ss-settings" className={card}>
        <h2 id="ss-settings" className={h2}>2. Exchange settings (optional)</h2>
        <p className="mt-1 text-sm leading-6 text-[#3f4f45]">None of these are required. They fill in the messages and cards, and are saved in this browser only.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="ss-event" className={label}>Event name</label>
            <input id="ss-event" className={input} value={settings.eventName} maxLength={100} onChange={(e) => setField("eventName", e.target.value)} placeholder="Office Christmas Secret Santa" />
          </div>
          <div>
            <label htmlFor="ss-date" className={label}>Gift exchange date</label>
            <input id="ss-date" type="date" className={input} value={settings.exchangeDate} onChange={(e) => setField("exchangeDate", e.target.value)} />
          </div>
          <div>
            <label htmlFor="ss-currency" className={label}>Currency</label>
            <select id="ss-currency" className={input} value={settings.currency} onChange={(e) => setField("currency", e.target.value as Currency)}>
              {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="ss-min" className={label}>Minimum budget</label>
            <input id="ss-min" type="number" inputMode="decimal" min={0} className={input} value={settings.budgetMin} onChange={(e) => setField("budgetMin", e.target.value)} placeholder="15" />
          </div>
          <div>
            <label htmlFor="ss-max" className={label}>Maximum budget</label>
            <input id="ss-max" type="number" inputMode="decimal" min={0} className={input} value={settings.budgetMax} onChange={(e) => setField("budgetMax", e.target.value)} placeholder="25" />
          </div>
          <div>
            <label htmlFor="ss-theme" className={label}>Gift theme</label>
            <input id="ss-theme" className={input} value={settings.theme} maxLength={100} onChange={(e) => setField("theme", e.target.value)} placeholder="Something handmade" />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <label htmlFor="ss-desc" className={label}>Event description</label>
            <textarea id="ss-desc" className={`${input} min-h-20`} rows={2} maxLength={600} value={settings.description} onChange={(e) => setField("description", e.target.value)} placeholder="Gifts are opened at the team lunch." />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <label htmlFor="ss-wishinst" className={label}>Wishlist instructions</label>
            <textarea id="ss-wishinst" className={`${input} min-h-20`} rows={2} maxLength={600} value={settings.wishlistInstructions} onChange={(e) => setField("wishlistInstructions", e.target.value)} placeholder="Send the organizer three gift ideas by December 1." />
          </div>
        </div>
      </section>

      {/* 3. Exclusions */}
      <section aria-labelledby="ss-rules" className={card}>
        <h2 id="ss-rules" className={h2}>3. Exclusions (optional)</h2>
        <p className="mt-1 text-sm leading-6 text-[#3f4f45]">
          A <strong>one-way</strong> rule stops the first person drawing the second, but the second may still draw the first. A <strong>mutual</strong> rule blocks both directions, which suits couples and siblings.
        </p>
        {participants.length < 2 ? (
          <p className="mt-4 text-sm text-[#3f4f45]">Add participants first, then choose who should not draw whom.</p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <div>
              <label htmlFor="ss-rule-g" className={label}>This person</label>
              <select id="ss-rule-g" className={input} value={ruleGiver} onChange={(e) => setRuleGiver(e.target.value)}>
                <option value="">Choose…</option>
                {participants.map((p) => <option key={p.id} value={p.id}>{labels.get(p.id) || "(blank)"}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="ss-rule-r" className={label}>must not draw</label>
              <select id="ss-rule-r" className={input} value={ruleReceiver} onChange={(e) => setRuleReceiver(e.target.value)}>
                <option value="">Choose…</option>
                {participants.filter((p) => p.id !== ruleGiver).map((p) => <option key={p.id} value={p.id}>{labels.get(p.id) || "(blank)"}</option>)}
              </select>
            </div>
            <button type="button" className={btnGreen} onClick={addRule}>Add rule</button>
            <label className="flex min-h-11 items-center gap-2 text-sm text-[#1c2a21] sm:col-span-3">
              <input type="checkbox" className="h-5 w-5 accent-[#14532d]" checked={ruleMutual} onChange={(e) => setRuleMutual(e.target.checked)} />
              Mutual – they also can&apos;t draw each other the other way round
            </label>
          </div>
        )}
        {ruleError ? <div className="mt-3" role="alert"><Alert tone="error">{ruleError}</Alert></div> : null}
        {exclusions.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {exclusions.map((r) => (
              <li key={r.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#14532d]/15 bg-white px-3 py-2 text-sm">
                <span><strong>{labels.get(r.giverId)}</strong> will not draw <strong>{labels.get(r.receiverId)}</strong></span>
                <button type="button" className={btnDanger} onClick={() => { setExclusions((l) => l.filter((x) => x.id !== r.id)); invalidate(); }} aria-label={`Remove rule ${labels.get(r.giverId)} will not draw ${labels.get(r.receiverId)}`}>Remove</button>
              </li>
            ))}
          </ul>
        ) : null}
        {participants.length >= MIN_PARTICIPANTS && !ruleCheck.ok ? (
          <div className="mt-3 space-y-2" role="alert">{ruleCheck.errors.map((e) => <Alert key={e} tone="error">{e}</Alert>)}</div>
        ) : null}
        {ruleCheck.warnings.map((w) => <div key={w} className="mt-2"><Alert tone="warn">{w}</Alert></div>)}
      </section>

      {/* 4. Generate */}
      <section aria-labelledby="ss-generate" className={`${card} text-center`}>
        <h2 id="ss-generate" className="sr-only">4. Generate the draw</h2>
        <button type="button" className={btnRed} onClick={generate} disabled={generating} aria-busy={generating}>
          {generating ? "Drawing names…" : assignments ? "Draw again" : "Generate Secret Santa"}
        </button>
        <p className="mt-2 text-xs text-[#3f4f45]">Drawing again replaces the current pairings.</p>
        <div className="mt-3 text-left" aria-live="polite">
          {genError ? <Alert tone="error"><span role="alert">{genError}</span> Edit the participants or rules above and try again.</Alert> : null}
          {notice ? <Alert tone="ok">{notice}</Alert> : null}
        </div>
      </section>

      {/* 5. Results */}
      {assignments ? (
        <section aria-labelledby="ss-results" className={card}>
          <h2 id="ss-results" ref={resultsRef} tabIndex={-1} className={`${h2} focus:outline-none`}>5. Assignments (hidden)</h2>
          <Alert tone="info">
            Pairings are hidden. Reveal one at a time, copy or print that person&apos;s card, then hide it. On a shared screen anyone nearby can see what is revealed, so this is not the same as private delivery. Pairings are not saved: closing or reloading the page discards them.
          </Alert>
          <ul className="mt-4 space-y-2">
            {assignments.map((a) => {
              const open = showAll || revealed === a.giverId;
              const giver = labels.get(a.giverId) ?? "";
              const wish = formatWishlist(byId.get(a.receiverId)?.wishlist);
              return (
                <li key={a.giverId} className="rounded-2xl border border-[#14532d]/15 bg-white px-4 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm">
                      <strong className="text-[#14532d]">{giver}</strong>
                      {open ? <> gives to <strong className="text-[#b91c1c]">{labels.get(a.receiverId)}</strong></> : <span className="text-[#3f4f45]"> – recipient hidden</span>}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {!showAll ? (
                        <button type="button" className={btnGhost} aria-expanded={open} onClick={() => setRevealed(open ? null : a.giverId)}>
                          {open ? "Hide" : `Reveal for ${giver}`}
                        </button>
                      ) : null}
                      <CopyBtn text={messageFor(a)}>Copy message</CopyBtn>
                      <button type="button" className={btnGhost} onClick={() => setPrintIds([a.giverId])}>Print card</button>
                    </div>
                  </div>
                  {open ? (
                    <div className="mt-3 rounded-xl bg-[#FBF8EC] p-3">
                      <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-6 text-[#1c2a21]">{messageFor(a)}</pre>
                      {wish && !settings.messageTemplate.includes("{wishlist}") ? (
                        <p className="mt-2 whitespace-pre-wrap text-sm text-[#33443a]"><strong>{labels.get(a.receiverId)}&apos;s wishlist</strong>{"\n"}{wish}</p>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-6">
            <label htmlFor="ss-template" className={label}>Message template</label>
            <p className="text-xs leading-5 text-[#3f4f45]">Placeholders: {"{giver} {recipient} {event} {budget} {date} {theme} {description} {wishlist}"}. A line whose placeholder is empty is left out.</p>
            <textarea id="ss-template" className={`${input} min-h-48 font-mono`} rows={9} value={settings.messageTemplate} onChange={(e) => setField("messageTemplate", e.target.value)} />
            <button type="button" className={`${btnGhost} mt-2`} onClick={() => setField("messageTemplate", DEFAULT_TEMPLATE)}>Restore default message</button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button type="button" className={btnGhost} onClick={() => setPrintIds(assignments.map((a) => a.giverId))}>Print all cards (one per page)</button>
            <button type="button" className={btnGhost} onClick={downloadCsv}>Download organizer CSV</button>
            <button type="button" className={btnGhost} onClick={downloadPdf} disabled={pdfBusy} aria-busy={pdfBusy}>{pdfBusy ? "Creating PDF…" : "Download organizer PDF"}</button>
            <button type="button" className={btnGhost} aria-pressed={showAll} onClick={toggleShowAll}>{showAll ? "Hide full list" : "Show full list (organizer)"}</button>
            {revealed ? <button type="button" className={btnGhost} onClick={() => setRevealed(null)}>Hide all</button> : null}
          </div>
          <p className="mt-2 text-xs leading-5 text-[#3f4f45]">Tip: in the print dialog choose “Save as PDF” to make a separate PDF card for each person.</p>
        </section>
      ) : null}

      {/* 6. Sharing and data */}
      <section aria-labelledby="ss-share" className={card}>
        <h2 id="ss-share" className={h2}>{assignments ? "6." : "5."} Invitation and your data</h2>
        <p className="mt-1 text-sm leading-6 text-[#3f4f45]">Send this invitation before the draw. It contains no pairings.</p>
        <pre className="mt-3 whitespace-pre-wrap break-words rounded-xl bg-[#FBF8EC] p-3 font-sans text-sm leading-6">{invitation}</pre>
        <div className="mt-3 flex flex-wrap gap-2">
          <CopyBtn text={invitation}>Copy invitation</CopyBtn>
          <button type="button" className={btnDanger} onClick={deleteSaved}>Delete saved settings</button>
          <button type="button" className={btnDanger} onClick={resetAll}>Reset event</button>
        </div>
        <p className="mt-3 text-xs leading-5 text-[#3f4f45]">
          This browser saves only the event settings and message template (in localStorage). Names, emails, wishlists and pairings are never saved, never added to the page address and never sent to Tools Star Hub or anyone else.
        </p>
      </section>

      {printIds ? (
        <div className="ss-print-area hidden print:block" aria-hidden="true">
          {printList.map((a) => (
            <div key={a.giverId} className="ss-print-card p-10 text-black">
              <p style={{ color: GREEN }} className="text-2xl font-bold">{settings.eventName.trim() || "Secret Santa"}</p>
              <pre className="mt-6 whitespace-pre-wrap font-sans text-base leading-7">{messageFor(a)}</pre>
              {formatWishlist(byId.get(a.receiverId)?.wishlist) && !settings.messageTemplate.includes("{wishlist}") ? (
                <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-6">{`${labels.get(a.receiverId)}'s wishlist\n${formatWishlist(byId.get(a.receiverId)?.wishlist)}`}</pre>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
