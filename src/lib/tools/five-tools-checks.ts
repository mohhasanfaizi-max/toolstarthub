import { BANNER_TEMPLATES, SAFE_RECT, gradientPoints, wrapText } from "./banner-templates.ts";
import { calculateFantasyPoints, DEFAULT_RULES, parseSavedRules } from "./fantasy-points.ts";
import { ageOn, calculateGraduation, parseIsoDate } from "./graduation.ts";
import { convertPressure, daltonPartialPressure, idealGasPressure, mixturePartialPressures, totalFromPartials } from "./partial-pressure.ts";
import { estimateUnemployment } from "./unemployment.ts";
import { SUPPORTED_STATES, UNSUPPORTED_STATES } from "./unemployment-states.ts";

type Assert = (condition: unknown, message: string) => void;
const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));

export function runFiveToolsChecks(assert: Assert): void {
  // Partial pressure
  assert(near(convertPressure(1, "atm", "Pa"), 101325), "1 atm = 101325 Pa");
  assert(near(convertPressure(1, "atm", "mmHg"), 760), "1 atm = 760 mmHg");
  assert(near(convertPressure(1, "bar", "kPa"), 100), "1 bar = 100 kPa");
  assert(near(convertPressure(760, "mmHg", "bar"), 1.01325), "760 mmHg = 1.01325 bar");
  const d = daltonPartialPressure("0.21", "1", "atm");
  assert(d.ok && near(d.partialPressure, 0.21), "Dalton O2 in air");
  assert(!daltonPartialPressure("1.2", "1", "atm").ok, "Mole fraction above 1 rejected");
  assert(!daltonPartialPressure("0.5", "0", "atm").ok, "Zero total pressure rejected");
  const mix = mixturePartialPressures([{ name: "N2", moles: "3" }, { name: "O2", moles: "1" }], "200");
  assert(mix.ok && near(mix.rows[0].partialPressure, 150) && near(mix.fractionSum, 1), "Mixture partials sum to total");
  const tot = totalFromPartials(["0.78", "0.21", "0.01"], "atm");
  assert(tot.ok && near(tot.total, 1), "Total from partials");
  const ig = idealGasPressure("1", "273.15", "K", "22.414", "L");
  assert(ig.ok && near(ig.pascals, 101325, 1e-3), "1 mol at STP in 22.414 L ≈ 1 atm");
  assert(!idealGasPressure("1", "-300", "C", "1", "L").ok, "Below absolute zero rejected");

  // Fantasy
  const f = calculateFantasyPoints(DEFAULT_RULES.cricket, { run: "45", four: "4", six: "2", wicket: "1", catch: "1" });
  assert(f.ok && f.total === 45 + 4 + 4 + 25 + 8, "Cricket default breakdown total");
  const neg = calculateFantasyPoints(DEFAULT_RULES.football, { goal: "1", yellow: "1", "own-goal": "1" });
  assert(neg.ok && neg.total === 2, "Negative rules subtract");
  const bb = calculateFantasyPoints(DEFAULT_RULES.basketball, { rebound: "3" });
  assert(bb.ok && bb.total === 3.6, "Decimal rule values round to cents");
  assert(!calculateFantasyPoints(DEFAULT_RULES.football, { goal: "-1" }).ok, "Negative stat rejected");
  assert(parseSavedRules("not json") === null && parseSavedRules('[{"id":"a","label":"A","points":2}]')?.length === 1, "Saved rules parse safely");

  // Graduation
  const leap = parseIsoDate("2016-02-29")!;
  assert(ageOn(leap, { year: 2021, month: 2, day: 28 }) === 4, "Feb 29 birthday not reached on Feb 28 in common year");
  assert(ageOn(leap, { year: 2021, month: 3, day: 1 }) === 5, "Feb 29 birthday reached on Mar 1");
  assert(parseIsoDate("2023-02-29") === null, "Invalid date rejected");
  const base = { entryAge: 5, cutoffMonth: 9, cutoffDay: 1, startMonth: 9, endMonth: 6, schoolYears: 13, furtherYears: 0 };
  const onCutoff = calculateGraduation({ ...base, birth: "2015-09-01" });
  assert(onCutoff.ok && onCutoff.entryYear === 2020 && onCutoff.schoolGraduationYear === 2033, "Birthday on cutoff enters that year");
  const dayAfter = calculateGraduation({ ...base, birth: "2015-09-02" });
  assert(dayAfter.ok && dayAfter.entryYear === 2021 && dayAfter.schoolGraduationYear === 2034, "Day after cutoff waits a year");
  const single = calculateGraduation({ ...base, birth: "2015-03-10", startMonth: 1, endMonth: 12, cutoffMonth: 6, cutoffDay: 30, schoolYears: 12 });
  assert(single.ok && single.entryYear === 2020 && single.schoolGraduationYear === 2031, "Calendar-year school graduates in same year");
  const cur = calculateGraduation({ ...base, birth: "2012-05-05", current: { academicStartYear: 2026, yearNumber: 6 }, furtherYears: 4 });
  assert(cur.ok && cur.entryYear === 2021 && cur.schoolGraduationYear === 2034 && cur.furtherGraduationYear === 2038, "Current-level mode");
  const leapCut = calculateGraduation({ ...base, birth: "2016-02-29", cutoffMonth: 2, cutoffDay: 28 });
  assert(leapCut.ok && leapCut.entryYear === 2022, "Feb 29 child is not 5 on Feb 28, 2021");

  // Unemployment
  assert(SUPPORTED_STATES.length === 4 && SUPPORTED_STATES.length + UNSUPPORTED_STATES.length === 51, "4 supported + 47 unsupported = 50 states + DC");
  const caMax = estimateUnemployment("CA", ["20000", "15000", "10000", "5675"]);
  assert(caMax.ok && caMax.weekly === 450 && caMax.maxTotal === 11700, "CA max $450, 26 weeks");
  const caMin = estimateUnemployment("CA", ["900", "300", "0", "0"]);
  assert(caMin.ok && caMin.eligible && caMin.weekly === 40, "CA minimum $40");
  const caMid = estimateUnemployment("CA", ["5200", "0", "0", "0"]);
  assert(caMid.ok && caMid.weekly === 200 && caMid.maxTotal === 2600, "CA half of wages caps total");
  assert((() => { const r = estimateUnemployment("CA", ["1000", "0", "0", "0"]); return r.ok && !r.eligible; })(), "CA below threshold ineligible");
  const nyMax = estimateUnemployment("NY", ["30000", "25000", "20000", "10000"]);
  assert(nyMax.ok && nyMax.weekly === 869, "NY max $869");
  const nyMin = estimateUnemployment("NY", ["3500", "2000", "200", "100"]);
  assert(nyMin.ok && nyMin.weekly === 140, "NY minimum $140");
  const txMax = estimateUnemployment("TX", ["20000", "1", "1", "1"]);
  assert(txMax.ok && txMax.weekly === 619, "TX max $619");
  const txMin = estimateUnemployment("TX", ["1000", "500", "0", "0"]);
  assert(txMin.ok && txMin.weekly === 76, "TX min $76");
  const txMid = estimateUnemployment("TX", ["10000", "8000", "7000", "5000"]);
  assert(txMid.ok && txMid.weekly === 400 && txMid.maxTotal === 8100, "TX example $400, 27% cap");
  const flMax = estimateUnemployment("FL", ["10000", "9000", "8000", "7000"]);
  assert(flMax.ok && flMax.weekly === 275 && flMax.maxTotal === 3300 && flMax.maxWeeks === 12, "FL max $275, $3,300");
  const flEx = estimateUnemployment("FL", ["0", "6317.03", "4712.63", "765.17"]);
  assert(flEx.ok && flEx.weekly === 242, "FL agency example $242");
  const flMin = estimateUnemployment("FL", ["800", "800", "800", "1000"]);
  assert(flMin.ok && flMin.weekly === 38, "FL low wages rounds down");
  assert(!estimateUnemployment("OH", ["1", "1", "1", "1"]).ok, "Unsupported state refused");
}

export function runBannerChecks(assert: Assert): void {
  assert(BANNER_TEMPLATES.length === 15, "15 banner templates");
  assert(new Set(BANNER_TEMPLATES.map((t) => t.id)).size === 15, "Template ids unique");
  assert(SAFE_RECT.x === 507 && SAFE_RECT.y === 508.5, "Safe area centred");
  const g = gradientPoints(90, 0, 0, 100, 50);
  assert(near(g.x0, 0) && near(g.x1, 100) && near(g.y0, 25), "90° gradient runs left to right");
  assert(wrapText("aa bb cc", 5, (s) => s.length).length === 2, "Text wraps by width");
}
