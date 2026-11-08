import assert from "node:assert/strict";
import { writeFileSync } from "node:fs";
import {
  calculatePaint,
  optimizeContainers,
  paintSummary,
  CAN_SIZES,
  METRES,
  LITRES,
  convertLength,
  CURRENCIES,
} from "../../src/lib/tools/paint.ts";
import { buildPaintPdf } from "../../src/lib/tools/paint-pdf.ts";
import { PDFDocument } from "pdf-lib";
const near = (a, b) => assert(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const face = (width = "4", height = "3", count = "1") => ({
  width,
  height,
  count,
});
const room = (
  name = "Room",
  length = "4",
  width = "4",
  height = "3",
  ceiling = false,
  openings = [],
) => ({ name, length, width, height, ceiling, openings });
const base = {
  project: "Interior Walls",
  unit: "m",
  output: "L",
  walls: [face("4", "3", "4")],
  openings: [face(".9", "2.1"), face("1.5", "1")],
  rooms: [room()],
  ceiling: { length: "4", width: "4" },
  coverage: "10",
  coverageBasis: "m2/L",
  coats: "2",
  waste: "10",
  price: "",
  currency: "USD",
  cans: [],
};
function calc(patch = {}) {
  const r = calculatePaint({ ...base, ...patch });
  assert(r.ok, r.error);
  return r;
}
const example = calc();
near(example.area, 44.61);
near(example.coatArea, 89.22);
near(example.baseLitres, 8.922);
near(example.litres, 9.8142);
assert.equal(example.litres.toFixed(2), "9.81");
near(calc({ walls: [face()], openings: [] }).area, 12);
near(calc({ walls: [face(), face("5", "2", "2")], openings: [] }).area, 32);
near(
  calc({ project: "Entire Room", rooms: [room(), room("Ignored")] }).area,
  48,
);
near(
  calc({
    project: "Multiple Rooms",
    rooms: [room(), room("Second", "2", "3", "2", true)],
  }).area,
  74,
);
const clamped = calc({
  project: "Multiple Rooms",
  rooms: [
    room("First", "1", "1", "1", false, [face("99", "99")]),
    room("Second", "2", "3", "2"),
  ],
});
near(clamped.area, 20);
assert(clamped.parts.every((p) => p.area >= 0));
near(calc({ project: "Ceiling" }).area, 16);
near(
  calc({
    project: "Entire Room",
    rooms: [room("With ceiling", "4", "4", "3", true)],
  }).area,
  64,
);
near(calc({ project: "Exterior Walls" }).litres, example.litres);
near(calc({ project: "Feature Wall", walls: [face()], openings: [] }).area, 12);
near(
  calc({ project: "Doors and Windows", walls: [face(".9", "2.1", "2")] }).area,
  3.78,
);
near(calc({ openings: [] }).area, 48);
const over = calc({ openings: [face("100", "100")] });
near(over.area, 0);
assert(over.warnings.length);
assert(over.parts.every((p) => p.area >= 0));
for (const coats of [1, 2, 3, 4, 7])
  near(
    calc({ coats: String(coats), openings: [], waste: "0" }).litres,
    (48 * coats) / 10,
  );
near(calc({ coverage: "5", openings: [], waste: "0" }).litres, 19.2);
near(
  calc({
    coverage: "350",
    coverageBasis: "ft2/USgal",
    openings: [],
    waste: "0",
  }).coverage,
  (350 * METRES.ft ** 2) / LITRES["US gal"],
);
for (const unit of Object.keys(METRES)) {
  const converted = face(
    String(4 / METRES[unit]),
    String(3 / METRES[unit]),
    "4",
  );
  near(calc({ unit, walls: [converted], openings: [] }).area, 48);
  near(Number(convertLength(convertLength("4", "m", unit), unit, "m")), 4);
}
near(LITRES["US gal"], 3.785411784);
near(LITRES["Imp gal"], 4.54609);
assert.notEqual(LITRES["US gal"], LITRES["Imp gal"]);
for (const output of Object.keys(LITRES)) {
  const r = calc({ output, price: "10" });
  near(r.cost, (r.purchaseLitres / LITRES[output]) * 10);
  assert(paintSummary(r).includes(output));
}
for (const currency of CURRENCIES) {
  const r = calc({ currency, price: "2.50" });
  assert.equal(r.currency, currency);
  assert(paintSummary(r).includes(currency));
}
for (const patch of [
  { walls: [] },
  { walls: [face("", "3")] },
  { walls: [face("-1", "3")] },
  { walls: [face("0", "3")] },
  { walls: [face("NaN", "3")] },
  { walls: [face("Infinity", "3")] },
  { walls: [face("4", "3", "1.5")] },
  { coats: "0" },
  { coats: "2.5" },
  { coverage: "0" },
  { coverage: "" },
  { price: "-1" },
  { waste: "-1" },
  { rooms: [], project: "Multiple Rooms" },
])
  assert(!calculatePaint({ ...base, ...patch }).ok, JSON.stringify(patch));
near(
  calc({ walls: [face("1.25", "2.5")], openings: [], waste: "0" }).area,
  3.125,
);
near(calc({ price: "0" }).cost, 0);
for (const waste of [0, 5, 10, 15])
  near(calc({ waste: String(waste) }).litres, 8.922 * (1 + waste / 100));
const byId = (id) => CAN_SIZES.find((c) => c.id === id);
let plan = optimizeContainers(9.8142, [byId("5L"), byId("1L")]);
assert(plan.ok);
near(plan.litres, 10);
assert.equal(plan.count, 2);
plan = optimizeContainers(10, [
  { ...byId("10L"), price: 100 },
  { ...byId("5L"), price: 30 },
]);
assert(plan.ok);
near(plan.cost, 60);
assert.equal(plan.count, 2);
plan = optimizeContainers(10, [byId("10L"), byId("5L")]);
assert(plan.ok);
assert.equal(plan.count, 1);
assert.equal(plan.cost, undefined);
plan = optimizeContainers(3.7, [
  { ...byId("1US"), price: 100 },
  { ...byId("5L"), price: 1 },
]);
assert(plan.ok);
near(plan.litres, LITRES["US gal"]);
assert(!optimizeContainers(1, []).ok);
assert(!optimizeContainers(5001, CAN_SIZES).ok);
plan = optimizeContainers(0, CAN_SIZES);
assert(plan.ok);
assert.equal(plan.count, 0);
assert.throws(() =>
  optimizeContainers(1, [{ id: "fake", litres: 2, label: "fake" }]),
);
assert(!calculatePaint({ ...base, cans: [{ ...byId("1L"), price: -1 }] }).ok);
const partial = calc({ cans: [{ ...byId("5L"), price: 10 }, byId("1L")] });
assert(partial.plan.ok);
assert.equal(partial.plan.cost, undefined);
// Exhaustive two-group oracle for supported sizes and random-like deterministic needs.
const options = [byId("2.5L"), byId("1US"), byId("5US")];
for (let step = 1; step <= 50; step++) {
  const need = step * 0.497;
  const p = optimizeContainers(need, options);
  assert(p.ok);
  let best = Infinity;
  for (let a = 0; a <= 20; a++)
    for (let b = 0; b <= 10; b++)
      for (let c = 0; c <= 2; c++) {
        const volume =
          a * 2.5 + b * LITRES["US gal"] + c * 5 * LITRES["US gal"];
        if (volume + 1e-9 >= need) best = Math.min(best, volume);
      }
  near(p.litres, best);
  assert(p.litres + 1e-9 >= need);
}
const priced = calc({ cans: [{ ...byId("10L"), price: 25 }], price: "999" });
near(priced.cost, 25);
assert.equal(priced.costBasis, "Selected container prices");
const summary = paintSummary(priced);
assert.match(summary, /Labour, primer/);
assert.match(summary, /9.81 L/);
assert.match(summary, /1 x 10 L/);
const pdf = await buildPaintPdf(summary);
const document = await PDFDocument.load(pdf);
assert(document.getPageCount() >= 1);
if (process.argv[2]) writeFileSync(process.argv[2], pdf);
console.log(
  "PASS: paint engine, example 9.8142 -> 9.81, all seven projects, room clamping, coverage/coats/waste, exact unit constants, six currencies, invalid inputs, exhaustive optimizer oracle and actual PDF generation",
);

// Preserve Ali’s exact FAQ wording/order; schema is checked against rendered text.
import { paintContent } from "../../src/data/paint-content.ts";
assert.deepEqual(paintContent.faqs.map(({ question }) => question), [
  "How much paint do I need for a 10x10 room?",
  "How do I calculate paint for four walls?",
  "How many litres of paint do I need per square metre?",
  "How much paint is needed for two coats?",
  "How much paint does one gallon cover?",
  "Should I subtract doors and windows?",
  "How much exterior paint do I need?",
  "How do I calculate ceiling paint?",
  "What is the difference between interior and exterior paint?",
  "How much paint wastage should I allow?",
  "What is the coverage of Dulux paint?",
  "What is Dulux Weathershield used for?",
  "Where can I find a Dulux colour chart?",
  "What is Dulux Painters White?",
  "What is EasyClean paint?"
]);
assert.equal((320 * 0.09290304 * 2 / 10 * 1.1).toFixed(2), "6.54");
assert.match(paintContent.faqs[0].answer, /8 ft walls/);
assert.match(paintContent.faqs[0].answer, /6\.54 L/);
assert.match(paintContent.faqs[10].answer, /not Dulux specifications/);
console.log("PASS: exact fifteen owner FAQ questions/order and explicit 10x10-room arithmetic/assumptions");
