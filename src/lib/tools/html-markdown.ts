import { decodeHtml } from "./html-codec.ts";

export const MAX_HTML_SOURCE_CHARS = 400_000;

export type HtmlMarkdownResult =
  | { ok: true; markdown: string }
  | { ok: false; error: string };

const SKIP_TAGS = new Set(["script", "style", "iframe", "object", "embed", "noscript"]);
const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

type Token =
  | { type: "text"; value: string }
  | { type: "tag"; name: string; closing: boolean; selfClosing: boolean; attrs: Record<string, string> };

export function htmlToMarkdown(input: string): HtmlMarkdownResult {
  if (input.trim() === "") {
    return { ok: false, error: "Enter some HTML." };
  }
  if (input.length > MAX_HTML_SOURCE_CHARS) {
    return {
      ok: false,
      error: "Keep HTML under 400,000 characters so the browser stays responsive.",
    };
  }

  const tokens = tokenize(input);
  const markdown = renderTokens(tokens).replace(/\n{3,}/g, "\n\n").trim();
  return { ok: true, markdown };
}

export const HTML_SAMPLE = `<h1>ToolsTartHub notes</h1>
<p>Convert <strong>HTML</strong> to <em>Markdown</em> locally.</p>
<ul>
  <li>Headings and lists</li>
  <li><a href="https://www.toolstarhub.com">A link</a></li>
  <li><code>inline code</code></li>
</ul>
<pre><code>function hello() {
  return "local";
}</code></pre>
<blockquote>Input is treated as text. It is not executed as HTML.</blockquote>
<table>
  <tr><th>Feature</th><th>Supported</th></tr>
  <tr><td>Tables</td><td>Yes</td></tr>
</table>
`;

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;
  while (index < source.length) {
    if (source.startsWith("<!--", index)) {
      const end = source.indexOf("-->", index + 4);
      index = end === -1 ? source.length : end + 3;
      continue;
    }
    if (source[index] === "<") {
      const tag = readTag(source, index);
      tokens.push(tag.token);
      index = tag.end;
      continue;
    }
    const next = source.indexOf("<", index);
    const end = next === -1 ? source.length : next;
    tokens.push({ type: "text", value: decodeEntities(source.slice(index, end)) });
    index = end;
  }
  return tokens;
}

function readTag(source: string, start: number): { token: Token; end: number } {
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
  const selfClosing = /\/\s*$/.test(inner) || VOID_TAGS.has((inner.replace(/^\//, "").split(/[\s>/]/, 1)[0] ?? "").toLowerCase());
  const name = (inner.replace(/^\//, "").split(/[\s>/]/, 1)[0] ?? "").toLowerCase();
  return {
    end: index,
    token: {
      type: "tag",
      name,
      closing,
      selfClosing,
      attrs: parseAttrs(inner.replace(/^\//, "")),
    },
  };
}

function parseAttrs(inner: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const pattern = /([:@\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(inner))) {
    const key = (match[1] ?? "").toLowerCase();
    const value = match[3] ?? match[4] ?? match[5] ?? "";
    attrs[key] = decodeEntities(value);
  }
  return attrs;
}

function renderTokens(tokens: Token[]): string {
  let output = "";
  let index = 0;
  let skipDepth = 0;
  const listType: Array<"ul" | "ol"> = [];
  let tableRow: string[] = [];
  let inRow = false;
  let inHeaderCell = false;
  const tableRows: Array<{ cells: string[]; header: boolean }> = [];
  let cellText = "";
  let inPre = false;

  const flushTable = () => {
    if (tableRows.length === 0) {
      return;
    }
    const header = tableRows.find((row) => row.header) ?? tableRows[0];
    const body = tableRows.filter((row) => row !== header);
    const cells = header?.cells ?? [];
    output += `\n\n| ${cells.join(" | ")} |\n| ${cells.map(() => "---").join(" | ")} |\n`;
    for (const row of body) {
      output += `| ${row.cells.join(" | ")} |\n`;
    }
    output += "\n";
    tableRows.length = 0;
  };

  while (index < tokens.length) {
    const token = tokens[index]!;
    if (token.type === "tag" && SKIP_TAGS.has(token.name)) {
      if (token.closing) {
        skipDepth = Math.max(0, skipDepth - 1);
      } else if (!token.selfClosing) {
        skipDepth += 1;
      }
      index += 1;
      continue;
    }
    if (skipDepth > 0) {
      index += 1;
      continue;
    }

    if (token.type === "text") {
      if (inRow) {
        cellText += token.value;
      } else if (inPre) {
        output += token.value;
      } else {
        output += collapseInline(token.value);
      }
      index += 1;
      continue;
    }

    switch (token.name) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6": {
        if (!token.closing) {
          output += `\n\n${"#".repeat(Number(token.name[1]))} `;
        } else {
          output += "\n\n";
        }
        break;
      }
      case "p":
        output += token.closing ? "\n\n" : "\n\n";
        break;
      case "br":
        output += "  \n";
        break;
      case "hr":
        output += "\n\n---\n\n";
        break;
      case "strong":
      case "b":
        output += "**";
        break;
      case "em":
      case "i":
        output += "*";
        break;
      case "code":
        if (!inPre) {
          output += "`";
        }
        break;
      case "pre":
        if (token.closing) {
          inPre = false;
          output += "\n```\n\n";
        } else {
          inPre = true;
          output += "\n\n```\n";
        }
        break;
      case "blockquote":
        if (!token.closing) {
          output += "\n\n> ";
        } else {
          output += "\n\n";
        }
        break;
      case "a":
        if (!token.closing) {
          output += "[";
        } else {
          const open = findOpenHref(tokens, index);
          output += `](${open || "#"})`;
        }
        break;
      case "img": {
        const alt = token.attrs.alt ?? "";
        const src = token.attrs.src ?? "";
        output += `![${alt}](${src})`;
        break;
      }
      case "ul":
      case "ol":
        if (token.closing) {
          listType.pop();
          output += "\n";
        } else {
          listType.push(token.name);
        }
        break;
      case "li":
        if (!token.closing) {
          const kind = listType[listType.length - 1] ?? "ul";
          output += kind === "ol" ? "\n1. " : "\n- ";
        }
        break;
      case "table":
        if (token.closing) {
          flushTable();
        }
        break;
      case "tr":
        if (token.closing) {
          tableRows.push({ cells: tableRow, header: tableRow.length > 0 && inHeaderCell });
          tableRow = [];
          inRow = false;
          inHeaderCell = false;
        } else {
          inRow = true;
          tableRow = [];
        }
        break;
      case "th":
      case "td":
        if (token.closing) {
          tableRow.push(cellText.trim());
          cellText = "";
          if (token.name === "th") {
            inHeaderCell = true;
          }
        } else {
          cellText = "";
          inRow = true;
        }
        break;
      default:
        break;
    }
    index += 1;
  }

  flushTable();
  return output;
}

function findOpenHref(tokens: Token[], closeIndex: number): string {
  for (let index = closeIndex; index >= 0; index -= 1) {
    const token = tokens[index];
    if (token?.type === "tag" && token.name === "a" && !token.closing) {
      return token.attrs.href ?? "";
    }
  }
  return "";
}

function collapseInline(value: string): string {
  return value.replace(/\s+/g, " ");
}

function decodeEntities(value: string): string {
  const decoded = decodeHtml(value);
  return decoded.ok ? decoded.output : value;
}
