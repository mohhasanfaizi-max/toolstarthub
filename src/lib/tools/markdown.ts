import { encodeHtml } from "./html-codec.ts";

export const MAX_MARKDOWN_CHARS = 400_000;

export type MarkdownResult =
  | { ok: true; html: string }
  | { ok: false; error: string };

export function markdownToHtml(input: string): MarkdownResult {
  if (input.trim() === "") {
    return { ok: false, error: "Enter some Markdown." };
  }
  if (input.length > MAX_MARKDOWN_CHARS) {
    return {
      ok: false,
      error: "Keep Markdown under 400,000 characters so the browser stays responsive.",
    };
  }

  const lines = input.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index] ?? "";

    if (/^\s*```/.test(line)) {
      const language = line.trim().slice(3).trim();
      const body: string[] = [];
      index += 1;
      while (index < lines.length && !/^\s*```/.test(lines[index] ?? "")) {
        body.push(lines[index] ?? "");
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      const className = language ? ` class="language-${escapeAttribute(language)}"` : "";
      html.push(`<pre><code${className}>${escapeText(body.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      html.push("<hr />");
      index += 1;
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1]?.length ?? 1;
      html.push(`<h${level}>${renderInline(heading[2] ?? "")}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\s*>/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^\s*>/.test(lines[index] ?? "")) {
        quote.push((lines[index] ?? "").replace(/^\s*>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote>${renderInline(quote.join("\n"))}</blockquote>`);
      continue;
    }

    if (isTableHeader(lines, index)) {
      const table = readTable(lines, index);
      html.push(table.html);
      index = table.next;
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index] ?? "")) {
        items.push(`<li>${renderInline((lines[index] ?? "").replace(/^\s*[-*+]\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index] ?? "")) {
        items.push(`<li>${renderInline((lines[index] ?? "").replace(/^\s*\d+\.\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    if (line.trim() === "") {
      index += 1;
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (
      index < lines.length &&
      (lines[index] ?? "").trim() !== "" &&
      !/^\s*```/.test(lines[index] ?? "") &&
      !/^(#{1,6})\s+/.test(lines[index] ?? "") &&
      !/^\s*[-*+]\s+/.test(lines[index] ?? "") &&
      !/^\s*\d+\.\s+/.test(lines[index] ?? "") &&
      !/^\s*>/.test(lines[index] ?? "") &&
      !/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[index] ?? "")
    ) {
      paragraph.push(lines[index] ?? "");
      index += 1;
    }
    html.push(`<p>${renderInline(paragraph.join("\n"))}</p>`);
  }

  return { ok: true, html: html.join("\n") };
}

export const MARKDOWN_SAMPLE = `# ToolsTartHub notes

Convert **Markdown** to *HTML* in your browser.

- Headings and lists
- [A link](https://toolstarhub.com)
- \`inline code\`

\`\`\`
function hello() {
  return "local";
}
\`\`\`

> Quotes stay as text. Raw HTML is escaped, not executed.

| Feature | Supported |
| --- | --- |
| Tables | Yes |
| Scripts | No |
`;

function isTableHeader(lines: string[], index: number): boolean {
  const header = lines[index] ?? "";
  const divider = lines[index + 1] ?? "";
  return (
    /^\s*\|?.+\|/.test(header) &&
    /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(divider)
  );
}

function readTable(lines: string[], start: number): { html: string; next: number } {
  const rows: string[][] = [];
  let index = start;
  while (index < lines.length && /^\s*\|?.+\|/.test(lines[index] ?? "")) {
    const line = lines[index] ?? "";
    if (index === start + 1 && /^\s*\|?\s*:?-{3,}/.test(line)) {
      index += 1;
      continue;
    }
    rows.push(splitRow(line));
    index += 1;
  }
  const header = rows[0] ?? [];
  const body = rows.slice(1);
  const head = `<thead><tr>${header.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead>`;
  const bodyHtml = `<tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody>`;
  return { html: `<table>${head}${bodyHtml}</table>`, next: index };
}

function splitRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}

function renderInline(source: string): string {
  const placeholders: string[] = [];
  let text = source;

  text = text.replace(/`([^`]+)`/g, (_, code: string) => {
    placeholders.push(`<code>${escapeText(code)}</code>`);
    return `\u0000${placeholders.length - 1}\u0000`;
  });

  text = text.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g, (_, alt: string, href: string) => {
    const safe = sanitizeHref(href);
    if (!safe) {
      return escapeText(`![${alt}](${href})`);
    }
    placeholders.push(`<img alt="${escapeAttribute(alt)}" src="${escapeAttribute(safe)}" />`);
    return `\u0000${placeholders.length - 1}\u0000`;
  });

  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g, (_, label: string, href: string) => {
    const safe = sanitizeHref(href);
    if (!safe) {
      return escapeText(`[${label}](${href})`);
    }
    placeholders.push(`<a href="${escapeAttribute(safe)}">${escapeText(label)}</a>`);
    return `\u0000${placeholders.length - 1}\u0000`;
  });

  text = escapeText(text);
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  text = text.replace(/(^|[\s(])_([^_]+)_/g, "$1<em>$2</em>");
  text = text.replace(/\n/g, "<br />");

  return text.replace(/\u0000(\d+)\u0000/g, (_, key: string) => placeholders[Number(key)] ?? "");
}

function hrefSecurityProbe(value: string): string {
  const compact = value.replace(/[\u0000-\u001F\u007F\s]+/g, "").replace(/\\/g, "/");
  if (!compact.includes("%")) {
    return compact;
  }
  try {
    return decodeURIComponent(compact);
  } catch {
    return compact;
  }
}

function isBlockedHref(value: string): boolean {
  return value.startsWith("//") || /^(javascript|vbscript|data):/i.test(value);
}

export function sanitizeHref(href: string): string | null {
  const trimmed = href.trim();
  if (trimmed === "") {
    return null;
  }
  if (isBlockedHref(trimmed) || isBlockedHref(hrefSecurityProbe(trimmed))) {
    return null;
  }
  if (/^(https?:|mailto:|\/|#)/i.test(trimmed)) {
    return trimmed;
  }
  return null;
}

function escapeText(value: string): string {
  const encoded = encodeHtml(value);
  return encoded.ok ? encoded.output : value;
}

function escapeAttribute(value: string): string {
  return escapeText(value).replace(/`/g, "&#96;");
}
