/**
 * Secret Santa draw logic. Everything runs in the browser: names, wishlists and
 * assignments are never sent anywhere and assignments are never persisted.
 */

export type Wishlist = {
  ideas?: string;
  categories?: string;
  hobbies?: string;
  colors?: string;
  avoid?: string;
  links?: string;
};

export type Participant = {
  id: string;
  name: string;
  /** Optional, kept only in memory for a possible future delivery feature. */
  email?: string;
  wishlist?: Wishlist;
};

/** One-way rule: `giverId` must not draw `receiverId`. A mutual rule is two of these. */
export type Exclusion = {
  id: string;
  giverId: string;
  receiverId: string;
};

export type Assignment = { giverId: string; receiverId: string };

export const CURRENCIES = ["USD", "GBP", "EUR", "AED", "CAD", "AUD"] as const;
export type Currency = (typeof CURRENCIES)[number];

export type EventSettings = {
  eventName: string;
  exchangeDate: string;
  budgetMin: string;
  budgetMax: string;
  currency: Currency;
  description: string;
  theme: string;
  wishlistInstructions: string;
  messageTemplate: string;
};

export const MIN_PARTICIPANTS = 3;
export const MAX_PARTICIPANTS = 200;
export const MAX_NAME_LENGTH = 60;
export const DEFAULT_MAX_ITERATIONS = 200_000;
export const SETTINGS_STORAGE_KEY = "tsh-secret-santa-settings-v1";

export const DEFAULT_TEMPLATE = [
  "Hello {giver}!",
  "",
  "You are participating in the {event} exchange.",
  "",
  "Your Secret Santa recipient is: {recipient}.",
  "",
  "Gift budget: {budget}.",
  "",
  "Exchange date: {date}.",
  "",
  "Have fun choosing a thoughtful gift!",
].join("\n");

export const DEFAULT_SETTINGS: EventSettings = {
  eventName: "",
  exchangeDate: "",
  budgetMin: "",
  budgetMax: "",
  currency: "USD",
  description: "",
  theme: "",
  wishlistInstructions: "",
  messageTemplate: DEFAULT_TEMPLATE,
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  AED: "AED ",
  CAD: "CA$",
  AUD: "A$",
};

export type RandomFn = () => number;

/** Uniform [0, 1) from crypto.getRandomValues when available. */
export const secureRandom: RandomFn = () => {
  const c = globalThis.crypto;
  if (c && typeof c.getRandomValues === "function") {
    const buf = new Uint32Array(1);
    c.getRandomValues(buf);
    return buf[0] / 0x1_0000_0000;
  }
  return Math.random();
};

export function createId(random: RandomFn = secureRandom): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  return `p-${Math.floor(random() * 1e12).toString(36)}-${Date.now().toString(36)}`;
}

export function shuffle<T>(items: readonly T[], random: RandomFn = secureRandom): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Trims and collapses internal whitespace. */
export function normalizeName(raw: string): string {
  return raw.replace(/\s+/g, " ").trim();
}

/** One name per line; blank lines are dropped. */
export function parseBulkNames(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map(normalizeName)
    .filter((name) => name.length > 0);
}

export function makeParticipants(names: string[], random: RandomFn = secureRandom): Participant[] {
  return names.map((name) => ({ id: createId(random), name: normalizeName(name) }));
}

const nameKey = (name: string) => normalizeName(name).toLocaleLowerCase();

/** Labels that keep two people with the same name apart, e.g. "Sam (2)". */
export function displayNames(participants: Participant[]): Map<string, string> {
  const counts = new Map<string, number>();
  for (const p of participants) counts.set(nameKey(p.name), (counts.get(nameKey(p.name)) ?? 0) + 1);
  const seen = new Map<string, number>();
  const out = new Map<string, string>();
  for (const p of participants) {
    const key = nameKey(p.name);
    if ((counts.get(key) ?? 0) > 1) {
      const n = (seen.get(key) ?? 0) + 1;
      seen.set(key, n);
      out.set(p.id, `${p.name} (${n})`);
    } else {
      out.set(p.id, p.name);
    }
  }
  return out;
}

export type ValidationResult = { ok: boolean; errors: string[]; warnings: string[] };

export function validateInput(participants: Participant[], settings?: Partial<EventSettings>): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const ids = new Set<string>();
  participants.forEach((p, index) => {
    if (!p.id || ids.has(p.id)) errors.push(`Participant ${index + 1} has a missing or repeated internal ID.`);
    ids.add(p.id);
    if (!normalizeName(p.name)) errors.push(`Participant ${index + 1} has a blank name.`);
    if (normalizeName(p.name).length > MAX_NAME_LENGTH) {
      errors.push(`"${normalizeName(p.name).slice(0, 20)}…" is longer than ${MAX_NAME_LENGTH} characters.`);
    }
    if (p.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email.trim())) {
      errors.push(`The email for ${normalizeName(p.name) || `participant ${index + 1}`} does not look valid.`);
    }
  });
  if (participants.length < MIN_PARTICIPANTS) {
    errors.push(`Add at least ${MIN_PARTICIPANTS} participants. You have ${participants.length}.`);
  }
  if (participants.length > MAX_PARTICIPANTS) {
    errors.push(`This version supports up to ${MAX_PARTICIPANTS} participants.`);
  }
  const counts = new Map<string, number>();
  for (const p of participants) {
    const key = nameKey(p.name);
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  for (const [key, count] of counts) {
    if (count > 1) {
      const shown = participants.find((p) => nameKey(p.name) === key)?.name ?? key;
      warnings.push(
        `${count} people are called "${shown}". They are kept apart internally and labelled (1), (2), but adding a surname initial makes the cards clearer.`,
      );
    }
  }
  if (settings) {
    const min = settings.budgetMin?.trim() ? Number(settings.budgetMin) : null;
    const max = settings.budgetMax?.trim() ? Number(settings.budgetMax) : null;
    if (min !== null && (!Number.isFinite(min) || min < 0)) errors.push("The minimum budget must be a number of 0 or more.");
    if (max !== null && (!Number.isFinite(max) || max < 0)) errors.push("The maximum budget must be a number of 0 or more.");
    if (min !== null && max !== null && Number.isFinite(min) && Number.isFinite(max) && min > max) {
      errors.push("The minimum budget is higher than the maximum budget.");
    }
  }
  return { ok: errors.length === 0, errors, warnings };
}

/** allowed[i] = indexes of participants that participant i may give to. */
function allowedMatrix(participants: Participant[], exclusions: Exclusion[]): number[][] {
  const index = new Map(participants.map((p, i) => [p.id, i]));
  const blocked = participants.map(() => new Set<number>());
  for (const rule of exclusions) {
    const g = index.get(rule.giverId);
    const r = index.get(rule.receiverId);
    if (g !== undefined && r !== undefined) blocked[g].add(r);
  }
  return participants.map((_, g) =>
    participants.map((__, r) => r).filter((r) => r !== g && !blocked[g].has(r)),
  );
}

/** Maximum bipartite matching (Kuhn). Returns matchOfGiver (receiver index or -1). */
function maxMatching(allowed: number[][], random?: RandomFn): number[] {
  const n = allowed.length;
  const giverOf = new Array<number>(n).fill(-1);
  const receiverOf = new Array<number>(n).fill(-1);
  const adj = random ? allowed.map((row) => shuffle(row, random)) : allowed;
  const order = random ? shuffle(adj.map((_, i) => i), random) : adj.map((_, i) => i);
  const tryAugment = (g: number, seen: boolean[]): boolean => {
    for (const r of adj[g]) {
      if (seen[r]) continue;
      seen[r] = true;
      if (giverOf[r] === -1 || tryAugment(giverOf[r], seen)) {
        giverOf[r] = g;
        receiverOf[g] = r;
        return true;
      }
    }
    return false;
  };
  for (const g of order) tryAugment(g, new Array<boolean>(n).fill(false));
  return receiverOf;
}

/**
 * Finds a group of givers whose combined allowed recipients are fewer than the
 * group (Hall's condition fails), so the explanation can name real people.
 */
function hallWitness(allowed: number[][], receiverOf: number[]): { givers: number[]; receivers: number[] } | null {
  const n = allowed.length;
  const free = receiverOf.findIndex((r) => r === -1);
  if (free === -1) return null;
  const giverOf = new Array<number>(n).fill(-1);
  receiverOf.forEach((r, g) => {
    if (r !== -1) giverOf[r] = g;
  });
  const givers = new Set<number>([free]);
  const receivers = new Set<number>();
  const queue = [free];
  while (queue.length) {
    const g = queue.shift()!;
    for (const r of allowed[g]) {
      if (receivers.has(r)) continue;
      receivers.add(r);
      const next = giverOf[r];
      if (next !== -1 && !givers.has(next)) {
        givers.add(next);
        queue.push(next);
      }
    }
  }
  return { givers: [...givers], receivers: [...receivers] };
}

const listNames = (names: string[]) =>
  names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

export type ExclusionValidation = { ok: boolean; errors: string[]; warnings: string[] };

export function validateExclusions(participants: Participant[], exclusions: Exclusion[]): ExclusionValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const ids = new Set(participants.map((p) => p.id));
  const labels = displayNames(participants);
  const seen = new Set<string>();
  for (const rule of exclusions) {
    if (!ids.has(rule.giverId) || !ids.has(rule.receiverId)) {
      errors.push("An exclusion refers to someone who is no longer in the list. Remove that rule.");
      continue;
    }
    if (rule.giverId === rule.receiverId) {
      errors.push(`An exclusion pairs ${labels.get(rule.giverId)} with themselves. Nobody can draw their own name anyway, so remove it.`);
    }
    const key = `${rule.giverId}>${rule.receiverId}`;
    if (seen.has(key)) {
      warnings.push(`The rule ${labels.get(rule.giverId)} → ${labels.get(rule.receiverId)} is listed twice.`);
    }
    seen.add(key);
  }
  if (errors.length || participants.length < MIN_PARTICIPANTS) {
    return { ok: errors.length === 0, errors, warnings };
  }
  const allowed = allowedMatrix(participants, exclusions);
  allowed.forEach((row, g) => {
    if (row.length === 0) {
      errors.push(`${labels.get(participants[g].id)} is excluded from everyone else, so they have nobody to give to.`);
    }
  });
  participants.forEach((p, r) => {
    if (!allowed.some((row) => row.includes(r))) {
      errors.push(`Everyone else is excluded from ${labels.get(p.id)}, so nobody can give them a gift.`);
    }
  });
  if (errors.length === 0) {
    const receiverOf = maxMatching(allowed);
    const witness = hallWitness(allowed, receiverOf);
    if (witness) {
      const g = witness.givers.map((i) => labels.get(participants[i].id) ?? "");
      const r = witness.receivers.map((i) => labels.get(participants[i].id) ?? "");
      errors.push(
        `No valid draw exists with these rules. ${listNames(g)} (${g.length} people) can only give to ${listNames(r) || "nobody"} (${r.length} ${r.length === 1 ? "person" : "people"}) between them. Remove or relax a rule involving them.`,
      );
    }
  }
  return { ok: errors.length === 0, errors, warnings };
}

export type GenerateResult =
  | { ok: true; assignments: Assignment[]; iterations: number; method: "backtracking" | "matching" }
  | { ok: false; error: string; iterations: number };

/**
 * Randomised backtracking: givers with the fewest options go first (random tie
 * break), candidate recipients are shuffled, and dead ends are undone. If the
 * iteration cap is reached, a randomised augmenting-path matching is used,
 * which always finds a valid draw when one exists. Every result is verified.
 */
export function generateAssignments(
  participants: Participant[],
  exclusions: Exclusion[],
  options: { random?: RandomFn; maxIterations?: number } = {},
): GenerateResult {
  const random = options.random ?? secureRandom;
  const maxIterations = options.maxIterations ?? DEFAULT_MAX_ITERATIONS;
  const input = validateInput(participants);
  if (!input.ok) return { ok: false, error: input.errors.join(" "), iterations: 0 };
  const rules = validateExclusions(participants, exclusions);
  if (!rules.ok) return { ok: false, error: rules.errors.join(" "), iterations: 0 };

  const allowed = allowedMatrix(participants, exclusions);
  const n = participants.length;
  const order = shuffle(allowed.map((_, i) => i), random).sort((a, b) => allowed[a].length - allowed[b].length);
  const used = new Array<boolean>(n).fill(false);
  const receiverOf = new Array<number>(n).fill(-1);
  let iterations = 0;
  let capped = false;

  const solve = (depth: number): boolean => {
    if (depth === n) return true;
    const g = order[depth];
    for (const r of shuffle(allowed[g], random)) {
      if (used[r]) continue;
      iterations += 1;
      if (iterations > maxIterations) {
        capped = true;
        return false;
      }
      used[r] = true;
      receiverOf[g] = r;
      if (solve(depth + 1)) return true;
      used[r] = false;
      receiverOf[g] = -1;
      if (capped) return false;
    }
    return false;
  };

  let method: "backtracking" | "matching" = "backtracking";
  let found = solve(0);
  if (!found) {
    const matched = maxMatching(allowed, random);
    if (matched.every((r) => r !== -1)) {
      matched.forEach((r, g) => (receiverOf[g] = r));
      found = true;
      method = "matching";
    }
  }
  if (!found) {
    return {
      ok: false,
      error: "No valid draw could be found with these rules. Remove or relax an exclusion and try again.",
      iterations,
    };
  }
  const assignments = participants.map((p, g) => ({ giverId: p.id, receiverId: participants[receiverOf[g]].id }));
  const check = verifyAssignments(participants, exclusions, assignments);
  if (!check.ok) {
    return { ok: false, error: `The draw failed verification: ${check.errors.join(" ")}`, iterations };
  }
  return { ok: true, assignments, iterations, method };
}

export function verifyAssignments(
  participants: Participant[],
  exclusions: Exclusion[],
  assignments: Assignment[],
): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  const ids = new Set(participants.map((p) => p.id));
  const gives = new Map<string, number>();
  const receives = new Map<string, number>();
  for (const a of assignments) {
    if (!ids.has(a.giverId) || !ids.has(a.receiverId)) errors.push("An assignment refers to an unknown participant.");
    if (a.giverId === a.receiverId) errors.push("Someone was assigned to themselves.");
    gives.set(a.giverId, (gives.get(a.giverId) ?? 0) + 1);
    receives.set(a.receiverId, (receives.get(a.receiverId) ?? 0) + 1);
  }
  for (const id of ids) {
    if (gives.get(id) !== 1) errors.push("Every participant must give exactly one gift.");
    if (receives.get(id) !== 1) errors.push("Every participant must receive exactly one gift.");
  }
  if (assignments.length !== participants.length) errors.push("The number of assignments does not match the participants.");
  const blocked = new Set(exclusions.map((e) => `${e.giverId}>${e.receiverId}`));
  for (const a of assignments) {
    if (blocked.has(`${a.giverId}>${a.receiverId}`)) errors.push("An exclusion rule was broken.");
  }
  return { ok: errors.length === 0, errors: [...new Set(errors)] };
}

export type EventState = {
  participants: Participant[];
  exclusions: Exclusion[];
  assignments: Assignment[] | null;
  settings: EventSettings;
};

/** A fresh, empty event. The caller also removes saved settings from storage. */
export function resetEvent(): EventState {
  return { participants: [], exclusions: [], assignments: null, settings: { ...DEFAULT_SETTINGS } };
}

/** Removing someone also removes their rules and invalidates the draw. */
export function removeParticipant(state: EventState, id: string): EventState {
  return {
    ...state,
    participants: state.participants.filter((p) => p.id !== id),
    exclusions: state.exclusions.filter((e) => e.giverId !== id && e.receiverId !== id),
    assignments: null,
  };
}

export function addExclusion(
  exclusions: Exclusion[],
  giverId: string,
  receiverId: string,
  mutual: boolean,
  random: RandomFn = secureRandom,
): Exclusion[] {
  if (!giverId || !receiverId || giverId === receiverId) return exclusions;
  const has = (g: string, r: string) => exclusions.some((e) => e.giverId === g && e.receiverId === r);
  const next = exclusions.slice();
  if (!has(giverId, receiverId)) next.push({ id: createId(random), giverId, receiverId });
  if (mutual && !has(receiverId, giverId)) next.push({ id: createId(random), giverId: receiverId, receiverId: giverId });
  return next;
}

export function formatBudget(settings: Pick<EventSettings, "budgetMin" | "budgetMax" | "currency">): string {
  const sym = CURRENCY_SYMBOLS[settings.currency] ?? "";
  const fmt = (v: string) => `${sym}${Number(v).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  const min = settings.budgetMin.trim();
  const max = settings.budgetMax.trim();
  if (min && max) return min === max ? fmt(min) : `${fmt(min)} to ${fmt(max)}`;
  if (max) return `up to ${fmt(max)}`;
  if (min) return `at least ${fmt(min)}`;
  return "";
}

export function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export function formatWishlist(w?: Wishlist): string {
  if (!w) return "";
  const parts: [string, string | undefined][] = [
    ["Gift ideas", w.ideas],
    ["Favourite categories", w.categories],
    ["Hobbies and interests", w.hobbies],
    ["Preferred colours", w.colors],
    ["Would rather not receive", w.avoid],
    ["Links", w.links],
  ];
  return parts
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`)
    .join("\n");
}

/**
 * Fills the editable template. Lines whose placeholder is empty (no budget,
 * no date) are dropped so the message never says "Gift budget: .".
 */
export function buildMessage(
  template: string,
  giver: string,
  recipient: string,
  settings: EventSettings,
  recipientWishlist?: Wishlist,
): string {
  const values: Record<string, string> = {
    giver,
    recipient,
    event: settings.eventName.trim() || "Secret Santa",
    budget: formatBudget(settings),
    date: settings.exchangeDate ? formatDate(settings.exchangeDate) : "",
    theme: settings.theme.trim(),
    description: settings.description.trim(),
    wishlist: formatWishlist(recipientWishlist),
  };
  const lines = template.split("\n").filter((line) => {
    const keys = [...line.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).filter((k) => k in values);
    return keys.length === 0 || keys.some((k) => values[k] !== "");
  });
  const out = lines.join("\n").replace(/\{(\w+)\}/g, (all, key: string) => (key in values ? values[key] : all));
  return out.replace(/\n{3,}/g, "\n\n").trim();
}

const csvCell = (value: string) => {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return /[",\n\r]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
};

/** Organizer-only CSV. Spreadsheet formula prefixes are neutralised. */
export function assignmentsToCsv(participants: Participant[], assignments: Assignment[], settings: EventSettings): string {
  const labels = displayNames(participants);
  const byId = new Map(participants.map((p) => [p.id, p]));
  const rows = [["Giver", "Recipient", "Recipient wishlist", "Event", "Budget", "Exchange date"]];
  for (const a of assignments) {
    rows.push([
      labels.get(a.giverId) ?? "",
      labels.get(a.receiverId) ?? "",
      formatWishlist(byId.get(a.receiverId)?.wishlist).replace(/\n/g, "; "),
      settings.eventName.trim(),
      formatBudget(settings),
      settings.exchangeDate ? formatDate(settings.exchangeDate) : "",
    ]);
  }
  return rows.map((row) => row.map(csvCell).join(",")).join("\r\n") + "\r\n";
}

/** Only event settings are saved, never names, emails, wishlists or assignments. */
export function serializeSettings(settings: EventSettings): string {
  return JSON.stringify(settings);
}

export function parseSavedSettings(raw: string | null): EventSettings {
  if (!raw) return { ...DEFAULT_SETTINGS };
  try {
    const data = JSON.parse(raw) as Partial<Record<keyof EventSettings, unknown>>;
    const out = { ...DEFAULT_SETTINGS };
    for (const key of Object.keys(DEFAULT_SETTINGS) as (keyof EventSettings)[]) {
      const v = data[key];
      if (typeof v === "string" && v.length <= 4000) (out as Record<string, string>)[key] = v;
    }
    if (!(CURRENCIES as readonly string[]).includes(out.currency)) out.currency = "USD";
    return out;
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}
