export type MinifyResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

const MAX_SOURCE = 400_000;
const IDENT = /[A-Za-z0-9_\u0080-\uffff-]/;

export function minifyCss(input: string): MinifyResult {
  if (input.trim() === "") {
    return { ok: false, error: "Enter some CSS." };
  }
  if (input.length > MAX_SOURCE) {
    return {
      ok: false,
      error: "Keep CSS under 400,000 characters so the browser stays responsive.",
    };
  }

  let output = "";
  let index = 0;

  while (index < input.length) {
    const char = input[index] ?? "";
    const next = input[index + 1] ?? "";

    if (char === "/" && next === "*") {
      const end = input.indexOf("*/", index + 2);
      index = end === -1 ? input.length : end + 2;
      continue;
    }

    if (char === '"' || char === "'") {
      const { text, end } = readString(input, index);
      output += text;
      index = end;
      continue;
    }

    if (char === "(" && /\burl$/i.test(output.replace(/\\$/, ""))) {
      const { text, end } = readParen(input, index);
      output += text;
      index = end;
      continue;
    }

    if (/\s/.test(char)) {
      const prev = output[output.length - 1] ?? "";
      let look = index;
      while (look < input.length && /\s/.test(input[look] ?? "")) {
        look += 1;
      }
      const upcoming = input[look] ?? "";
      if (needsSpace(prev, upcoming)) {
        output += " ";
      }
      index = look;
      continue;
    }

    output += char;
    index += 1;
  }

  return { ok: true, output: output.trim() };
}

function needsSpace(prev: string, next: string): boolean {
  if (!prev || !next) {
    return false;
  }
  if ("+-".includes(prev) || "+-".includes(next)) {
    return true;
  }
  if ("{};:,>~".includes(prev) || "{};:,>~".includes(next)) {
    return false;
  }
  if (prev === "(" || next === ")") {
    return false;
  }
  if (prev === ")" && (IDENT.test(next) || next === "(")) {
    return true;
  }
  return IDENT.test(prev) && (IDENT.test(next) || next === "(" || next === "*");
}

function readString(source: string, start: number): { text: string; end: number } {
  const quote = source[start];
  let index = start + 1;
  while (index < source.length) {
    if (source[index] === "\\") {
      index += 2;
      continue;
    }
    if (source[index] === quote) {
      index += 1;
      break;
    }
    index += 1;
  }
  return { text: source.slice(start, index), end: index };
}

function readParen(source: string, start: number): { text: string; end: number } {
  let index = start + 1;
  let quote = "";
  while (index < source.length) {
    const char = source[index] ?? "";
    if (quote) {
      if (char === "\\") {
        index += 2;
        continue;
      }
      if (char === quote) {
        quote = "";
      }
      index += 1;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      index += 1;
      continue;
    }
    if (char === ")") {
      index += 1;
      break;
    }
    index += 1;
  }
  return { text: source.slice(start, index), end: index };
}
