export type MinifyResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

const MAX_SOURCE = 400_000;
const PRESERVE = new Set(["pre", "textarea", "script", "style"]);

export function minifyHtml(input: string): MinifyResult {
  if (input.trim() === "") {
    return { ok: false, error: "Enter some HTML." };
  }
  if (input.length > MAX_SOURCE) {
    return {
      ok: false,
      error: "Keep HTML under 400,000 characters so the browser stays responsive.",
    };
  }

  let output = "";
  let index = 0;

  while (index < input.length) {
    if (input.startsWith("<!--", index)) {
      const end = input.indexOf("-->", index + 4);
      index = end === -1 ? input.length : end + 3;
      continue;
    }

    if (input[index] === "<") {
      const tag = readTag(input, index);
      output += collapseTag(tag.text);
      index = tag.end;
      const name = tag.name.toLowerCase();
      if (!tag.closing && !tag.selfClosing && PRESERVE.has(name)) {
        const closer = new RegExp(`</${name}\\s*>`, "i");
        const rest = input.slice(index);
        const match = closer.exec(rest);
        if (!match || match.index === undefined) {
          output += rest;
          break;
        }
        output += rest.slice(0, match.index);
        output += match[0];
        index += match.index + match[0].length;
      }
      continue;
    }

    let nextTag = input.indexOf("<", index);
    if (nextTag === -1) {
      nextTag = input.length;
    }
    output += collapseText(input.slice(index, nextTag));
    index = nextTag;
  }

  return { ok: true, output: output.trim() };
}

function readTag(source: string, start: number): {
  text: string;
  end: number;
  name: string;
  closing: boolean;
  selfClosing: boolean;
} {
  let index = start + 1;
  let quote = "";
  while (index < source.length) {
    const char = source[index];
    if (quote) {
      if (char === quote) {
        quote = "";
      }
    } else if (char === '"' || char === "'") {
      quote = char;
    } else if (char === ">") {
      index += 1;
      break;
    }
    index += 1;
  }

  const text = source.slice(start, index);
  const inner = text.slice(1, text.endsWith(">") ? -1 : undefined).trim();
  const closing = inner.startsWith("/");
  const selfClosing = /\/\s*$/.test(inner);
  const name = inner.replace(/^\//, "").split(/[\s>/]/, 1)[0] ?? "";
  return { text, end: index, name, closing, selfClosing };
}

function collapseTag(tag: string): string {
  let result = "";
  let quote = "";
  for (let index = 0; index < tag.length; index += 1) {
    const char = tag[index];
    if (quote) {
      result += char;
      if (char === quote) {
        quote = "";
      }
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      result += char;
      continue;
    }
    if (/\s/.test(char)) {
      if (result && !/\s/.test(result[result.length - 1] ?? "")) {
        result += " ";
      }
      continue;
    }
    result += char;
  }
  return result.replace(/\s+>/g, ">").replace(/\s+\/>/g, "/>");
}

function collapseText(text: string): string {
  if (text.trim() === "") {
    return text.includes("\n") ? "" : text.replace(/\s+/g, " ");
  }
  return text.replace(/\s+/g, " ");
}
