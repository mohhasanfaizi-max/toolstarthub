// Real component/hooks and engine with presentation + browser boundary stubs.
// Not browser E2E. No external network or clipboard/print side effects.
// PDF generation is tested natively in paint.mjs; here its boundary returns that real fixture to avoid cross-VM pdf-lib typed-array checks.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
import React from "react";
import { buildPaintPdf } from "../../src/lib/tools/paint-pdf.ts";
const downloadFixture = await buildPaintPdf(
  "Paint Calculator estimate\n9.81 L",
);
const nativeRequire = createRequire(import.meta.url),
  slots = [],
  cache = new Map();
let cursor = 0;
const hooks = {
  ...React,
  useState(initial) {
    const i = cursor++;
    if (!(i in slots))
      slots[i] = typeof initial === "function" ? initial() : initial;
    return [
      slots[i],
      (value) => {
        slots[i] = typeof value === "function" ? value(slots[i]) : value;
      },
    ];
  },
};
let copied = "",
  printed = "",
  downloads = [],
  revoked = [],
  cleanup,
  clipboardFails = false;
const document = {
  createElement(type) {
    return {
      type,
      style: {},
      remove() {},
      click() {
        downloads.push({ href: this.href, download: this.download });
      },
    };
  },
  body: { append() {} },
};
const popup = {
  opener: {},
  document: {
    title: "",
    createElement() {
      return { style: {}, textContent: "" };
    },
    body: {
      append(element) {
        printed = element.textContent;
      },
    },
  },
  focus() {},
  print() {
    assert(printed);
  },
};
const window = {
  open() {
    return popup;
  },
  setTimeout(fn, ms) {
    assert.equal(ms, 30000);
    cleanup = fn;
  },
};
const navigator = {
  clipboard: {
    async writeText(value) {
      if (clipboardFails) throw new Error("denied");
      copied = value;
    },
  },
};
function load(file) {
  file = resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const loadedModule = { exports: {} };
  cache.set(file, loadedModule);
  const output = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const require = (spec) => {
    if (spec === "@/lib/tools/paint-pdf")
      return {
        buildPaintPdf: async (summary) => {
          assert.match(summary, /9.81 L/);
          return downloadFixture;
        },
      };
    if (spec === "react") return hooks;
    if (spec.startsWith("@/components/"))
      return {
        Button: (props) => React.createElement("button", props, props.children),
      };
    if (spec.startsWith("@/") || spec.startsWith(".")) {
      const path = spec.startsWith("@/")
        ? resolve("src", spec.slice(2))
        : resolve(dirname(file), spec);
      return load(/\.tsx?$/.test(path) ? path : path + ".ts");
    }
    return nativeRequire(spec);
  };
  vm.runInNewContext(
    output,
    {
      require,
      module: loadedModule,
      exports: loadedModule.exports,
      window,
      document,
      navigator,
      console,
      Blob,
      Uint8Array,
      URL: {
        createObjectURL(blob) {
          assert.equal(blob.type, "application/pdf");
          return "blob:paint-test";
        },
        revokeObjectURL(url) {
          revoked.push(url);
        },
      },
      Intl,
      Number,
      Map,
      Set,
      Array,
      Math,
    },
    { filename: file },
  );
  return loadedModule.exports;
}
const { PaintCalculatorTool } = load(
  "src/components/tools/workspace/PaintCalculatorTool.tsx",
);
let tree;
function render() {
  cursor = 0;
  tree = PaintCalculatorTool();
}
function nodes(node) {
  if (node == null || typeof node === "boolean") return [];
  if (Array.isArray(node)) return node.flatMap(nodes);
  if (typeof node !== "object") return [node];
  if (typeof node.type === "function")
    return [node, ...nodes(node.type(node.props))];
  return [node, ...nodes(node.props?.children)];
}
function text(node) {
  return nodes(node)
    .filter((n) => typeof n === "string" || typeof n === "number")
    .join(" ");
}
function button(label) {
  const n = nodes(tree).find(
    (n) => n?.props?.onClick && text(n).replace(/\s+/g, " ").trim() === label,
  );
  assert(n, `button ${label}`);
  return n;
}
function click(label) {
  button(label).props.onClick();
  render();
}
function field(id, value) {
  const n = nodes(tree).find(
    (n) => n?.type === "input" && n?.props?.id === id && n.props.onChange,
  );
  assert(n, id);
  n.props.onChange({ target: { value } });
  render();
}
function select(label, value) {
  const n = nodes(tree).find((n) => n?.props?.["aria-label"] === label);
  assert(n, label);
  n.props.onChange({ target: { value } });
  render();
}
function checkLabel(label) {
  const n = nodes(tree).find(
    (n) => n?.type === "label" && text(n).replace(/\s+/g, " ").trim() === label,
  );
  assert(n, label);
  const input = nodes(n).find((n) => n?.type === "input");
  input.props.onChange({ target: { checked: !input.props.checked } });
  render();
}
render();
assert(!text(tree).includes("Your paint plan"));
click("Calculate");
assert(text(tree).includes("9.81 L"));
assert(text(tree).includes("44.61 m²"));
assert(text(tree).includes("Select the container sizes"));
checkLabel("5 L");
field("paint-can-5L", "12.");
assert.equal(
  nodes(tree).find((n) => n?.type === "input" && n.props.id === "paint-can-5L")
    .props.value,
  "12.",
);
field("paint-can-5L", "12.50");
click("Calculate");
assert(text(tree).includes("$25.00"));
click("Copy Results");
await new Promise((r) => setImmediate(r));
render();
assert.match(copied, /9.81 L/);
assert.match(copied, /2 x 5 L/);
click("Print");
assert.match(printed, /9.81 L/);
assert.equal(popup.opener, null);
click("Download PDF");
for (let i = 0; i < 100 && !downloads.length; i++)
  await new Promise((r) => setTimeout(r, 10));
render();
assert.equal(downloads[0]?.download, "toolstarhub-paint-estimate.pdf");
assert.equal(downloads[0]?.href, "blob:paint-test");
cleanup();
assert.deepEqual(revoked, ["blob:paint-test"]);
select("Measurement unit", "ft");
const width = nodes(tree).find(
  (n) => n?.type === "input" && n.props.id === "paint-wall-0-width",
).props.value;
assert(Math.abs(Number(width) * 0.3048 - 4) < 1e-9);
assert(
  !text(tree).includes("Your paint plan"),
  "changing inputs hides stale results",
);
click("Calculate");
assert(text(tree).includes("9.81 L"));
select("Project type", "Multiple Rooms");
click("Add room");
field("paint-room-1-length", "2");
field("paint-room-1-width", "3");
field("paint-room-1-height", "2");
click("Calculate");
assert(text(tree).includes("Room 2"));
click("Remove room 2");
field("paint-colour-search", "Irish");
assert(button("Irish Green"));
assert(
  !nodes(tree).some(
    (n) => n?.type === "button" && text(n).trim() === "Rich Navy",
  ),
);
field("paint-colour-search", "");
click("Rich Navy");
field("paint-hex", "#123456");
click("Copy HEX");
await new Promise((r) => setImmediate(r));
render();
assert.equal(copied, "#123456");
field("paint-hex", "not-a-hex");
assert.equal(button("Copy HEX").props.disabled, true);
clipboardFails = true;
field("paint-hex", "#123456");
click("Copy HEX");
await new Promise((r) => setImmediate(r));
render();
assert.match(text(tree), /Clipboard access was denied/);
click("Clear");
assert(!text(tree).includes("Your paint plan"));
assert.equal(
  nodes(tree).find(
    (n) => n?.type === "input" && n.props.id === "paint-wall-0-width",
  ).props.value,
  "",
);
click("Calculate");
assert(nodes(tree).some((n) => n?.props?.role === "alert"));
console.log(
  "PASS: component calculate/clear, exact example, decimal container prices, real PDF download boundary, copy/denial, safe print window, unit preservation, room controls, colour search/edit/copy and stale-result clearing; no browser E2E claimed",
);
