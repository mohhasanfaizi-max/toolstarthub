import {
  addExclusion,
  assignmentsToCsv,
  buildMessage,
  DEFAULT_SETTINGS,
  DEFAULT_TEMPLATE,
  displayNames,
  generateAssignments,
  makeParticipants,
  normalizeName,
  parseBulkNames,
  parseSavedSettings,
  removeParticipant,
  resetEvent,
  serializeSettings,
  validateExclusions,
  validateInput,
  verifyAssignments,
  type Exclusion,
  type Participant,
} from "./secret-santa.ts";

type Assert = (condition: unknown, message: string) => void;

/** Small deterministic PRNG so failures can be reproduced. */
function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function runSecretSantaChecks(assert: Assert): void {
  // Participants
  assert(normalizeName("  Sarah   Jones ") === "Sarah Jones", "Names are trimmed and spaces collapsed");
  assert(parseBulkNames("Alex\n\n  Sam \r\nPriya\n   \n").join("|") === "Alex|Sam|Priya", "Bulk add: one name per line, blanks dropped");
  const people = makeParticipants(["Alex", "Sam", "Sam", "Priya"]);
  assert(new Set(people.map((p) => p.id)).size === 4, "Each participant gets a unique ID");
  const labels = displayNames(people);
  assert(labels.get(people[1].id) === "Sam (1)" && labels.get(people[2].id) === "Sam (2)", "Duplicate names are labelled apart");
  const dupCheck = validateInput(people);
  assert(dupCheck.ok && dupCheck.warnings.length === 1, "Duplicate names warn but do not block");
  assert(!validateInput(makeParticipants(["A", "B"])).ok, "Fewer than 3 participants rejected");
  assert(validateInput(makeParticipants(["A", "B", "C"])).ok, "3 participants accepted");
  const blank: Participant[] = [...makeParticipants(["A", "B", "C"]), { id: "x", name: "   " }];
  assert(!validateInput(blank).ok, "Blank names rejected");
  const edited = people.map((p) => (p.id === people[0].id ? { ...p, name: "Alexandra" } : p));
  assert(edited[0].name === "Alexandra" && edited[0].id === people[0].id, "Editing a name keeps the ID");
  assert(!validateInput([...makeParticipants(["A", "B", "C"]), { id: "e", name: "D", email: "nope" }]).ok, "Bad optional email rejected");
  assert(!validateInput(makeParticipants(["A", "B", "C"]), { budgetMin: "50", budgetMax: "20" }).ok, "Min budget above max rejected");

  // Removal drops rules and the draw
  let state = { ...resetEvent(), participants: people };
  state.exclusions = addExclusion([], people[0].id, people[3].id, true);
  assert(state.exclusions.length === 2, "Mutual exclusion adds two one-way rules");
  assert(addExclusion(state.exclusions, people[0].id, people[3].id, true).length === 2, "Duplicate rules are not added twice");
  assert(addExclusion([], people[0].id, people[0].id, false).length === 0, "Self exclusion is not added");
  state = removeParticipant(state, people[3].id);
  assert(state.participants.length === 3 && state.exclusions.length === 0 && state.assignments === null, "Removing someone removes their rules");

  // Reset
  const fresh = resetEvent();
  assert(fresh.participants.length === 0 && fresh.exclusions.length === 0 && fresh.assignments === null, "Reset clears the event");
  assert(fresh.settings.messageTemplate === DEFAULT_TEMPLATE && fresh.settings !== DEFAULT_SETTINGS, "Reset returns fresh default settings");

  // Algorithm: many random draws across sizes and rules
  const rand = seeded(42);
  for (const size of [3, 4, 5, 8, 12, 30, 100]) {
    const group = makeParticipants(Array.from({ length: size }, (_, i) => `P${i}`), rand);
    let rules: Exclusion[] = [];
    if (size >= 4) {
      for (let i = 0; i + 1 < size; i += 2) rules = addExclusion(rules, group[i].id, group[i + 1].id, true, rand);
    }
    for (let run = 0; run < 40; run += 1) {
      const result = generateAssignments(group, rules, { random: rand });
      assert(result.ok, `Draw succeeds for ${size} people`);
      if (!result.ok) break;
      const v = verifyAssignments(group, rules, result.assignments);
      assert(v.ok, `Draw for ${size} passes verification`);
      assert(result.assignments.every((a) => a.giverId !== a.receiverId), `No self assignment (${size})`);
      assert(new Set(result.assignments.map((a) => a.receiverId)).size === size, `Unique recipients (${size})`);
      assert(new Set(result.assignments.map((a) => a.giverId)).size === size, `Everyone gives once (${size})`);
    }
  }

  // Randomness: a 4-person draw produces more than one outcome
  const four = makeParticipants(["A", "B", "C", "D"]);
  const outcomes = new Set<string>();
  for (let i = 0; i < 200; i += 1) {
    const r = generateAssignments(four, [], { random: rand });
    if (r.ok) outcomes.add(r.assignments.map((a) => a.receiverId).join());
  }
  assert(outcomes.size === 9, "All 9 derangements of 4 people appear");

  // One-way exclusion respected exactly
  const [a, b, c] = makeParticipants(["Ann", "Ben", "Cara"]);
  const oneWay = addExclusion([], a.id, b.id, false);
  for (let i = 0; i < 30; i += 1) {
    const r = generateAssignments([a, b, c], oneWay, { random: rand });
    assert(r.ok && r.assignments.find((x) => x.giverId === a.id)?.receiverId === c.id, "One-way rule: Ann never draws Ben");
  }

  // Impossible combinations are explained, not ignored
  const mutualTriangle = addExclusion(addExclusion([], a.id, b.id, true), a.id, c.id, true);
  const bad = validateExclusions([a, b, c], mutualTriangle);
  assert(!bad.ok && bad.errors.some((e) => e.includes("Ann")), "Excluding someone from everyone is explained by name");
  assert(!generateAssignments([a, b, c], mutualTriangle).ok, "Impossible rules return no draw");
  const three = addExclusion([], a.id, b.id, true);
  const hall = validateExclusions([a, b, c], three);
  assert(!hall.ok && /No valid draw|nobody/.test(hall.errors.join(" ")), "Hidden impossibility in 3 people detected");
  const quad = makeParticipants(["W", "X", "Y", "Z"]);
  let tight: Exclusion[] = [];
  for (const g of quad.slice(0, 3)) for (const r of quad.slice(0, 3)) if (g !== r) tight = addExclusion(tight, g.id, r.id, false);
  const tv = validateExclusions(quad, tight);
  assert(!tv.ok && tv.errors.some((e) => e.includes("can only give to Z")), "Hall violation names the bottleneck");
  assert(!validateExclusions([a, b, c], [{ id: "r", giverId: a.id, receiverId: "gone" }]).ok, "Rule for removed person rejected");

  // Iteration cap falls back to matching, still verified
  const big = makeParticipants(Array.from({ length: 40 }, (_, i) => `Q${i}`), rand);
  const capped = generateAssignments(big, [], { random: rand, maxIterations: 5 });
  assert(capped.ok && capped.method === "matching" && verifyAssignments(big, [], capped.assignments).ok, "Iteration cap falls back to a verified matching");

  // Verification catches broken results
  assert(!verifyAssignments([a, b, c], [], [{ giverId: a.id, receiverId: a.id }, { giverId: b.id, receiverId: c.id }, { giverId: c.id, receiverId: b.id }]).ok, "Verify rejects self assignment");
  assert(!verifyAssignments([a, b, c], [], [{ giverId: a.id, receiverId: b.id }, { giverId: b.id, receiverId: b.id }, { giverId: c.id, receiverId: a.id }]).ok, "Verify rejects duplicate recipients");
  assert(!verifyAssignments([a, b, c], oneWay, [{ giverId: a.id, receiverId: b.id }, { giverId: b.id, receiverId: c.id }, { giverId: c.id, receiverId: a.id }]).ok, "Verify rejects broken exclusion");

  // Messages
  const settings = { ...DEFAULT_SETTINGS, eventName: "Christmas Secret Santa", budgetMax: "25", exchangeDate: "2026-12-24" };
  const msg = buildMessage(DEFAULT_TEMPLATE, "Sarah", "Alex", settings);
  assert(msg.includes("Hello Sarah!") && msg.includes("recipient is: Alex.") && msg.includes("Gift budget: up to $25.") && msg.includes("December 24, 2026"), "Message template fills values");
  const noBudget = buildMessage(DEFAULT_TEMPLATE, "Sarah", "Alex", DEFAULT_SETTINGS);
  assert(!noBudget.includes("Gift budget") && !noBudget.includes("Exchange date"), "Empty budget and date lines are dropped");
  const wish = buildMessage("{recipient} wishlist:\n{wishlist}", "S", "Alex", DEFAULT_SETTINGS, { ideas: "Books", avoid: "Socks" });
  assert(wish.includes("Gift ideas: Books") && wish.includes("Would rather not receive: Socks"), "Recipient wishlist included");
  const aed = buildMessage("{budget}", "S", "A", { ...DEFAULT_SETTINGS, budgetMin: "50", budgetMax: "100", currency: "AED" });
  assert(aed === "AED 50 to AED 100", "AED budget range formats");

  // CSV
  const draw = generateAssignments([a, b, c], [], { random: rand });
  assert(draw.ok, "Draw for CSV");
  if (draw.ok) {
    const csv = assignmentsToCsv([{ ...a, name: "=HYPERLINK(1)" }, b, c], draw.assignments, settings);
    const lines = csv.trim().split("\r\n");
    assert(lines.length === 4 && lines[0].startsWith("Giver,Recipient"), "CSV has a header and one row per giver");
    assert(csv.includes("'=HYPERLINK(1)") && !/(^|,)=HYPERLINK/m.test(csv), "CSV neutralises formula injection");
  }

  // Storage: settings only
  const saved = serializeSettings({ ...settings, currency: "GBP" });
  assert(!/Sarah|Alex|giverId|receiverId/.test(saved), "Saved data holds settings only");
  assert(parseSavedSettings(saved).currency === "GBP" && parseSavedSettings(saved).eventName === "Christmas Secret Santa", "Settings round-trip");
  assert(parseSavedSettings("{bad json").currency === "USD", "Corrupt storage falls back to defaults");
  assert(parseSavedSettings(JSON.stringify({ currency: "XYZ" })).currency === "USD", "Unknown currency falls back to USD");
}
