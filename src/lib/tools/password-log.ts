export const PASSWORD_LOG_COLUMNS = [
  "Site or app",
  "Username or email",
  "Password hint",
  "Date changed",
  "2FA",
  "Notes",
] as const;

const BLANK_ROWS = 12;

const SECURITY_NOTE =
  "This is a password log template, not a password manager or encrypted vault. Prefer a reputable password manager. If you use a spreadsheet or paper book, record a hint rather than the live password, keep the file offline, and never put it in a shared Google Sheet or email.";

export function passwordLogCsvTemplate(): string {
  const header = PASSWORD_LOG_COLUMNS.map(csvCell).join(",");
  const example = [
    "Example (replace me)",
    "you@example.com",
    "garden fence + year",
    "2026-11-14",
    "Yes, authenticator app",
    "Recovery codes in the sealed envelope",
  ]
    .map(csvCell)
    .join(",");
  const blanks = Array.from({ length: BLANK_ROWS }, () =>
    PASSWORD_LOG_COLUMNS.map(() => "").join(","),
  );
  // BOM helps Excel on Windows open UTF-8 CSV correctly.
  return `\uFEFF${csvCell("Security note")},${csvCell(SECURITY_NOTE)}\n${header}\n${example}\n${blanks.join("\n")}\n`;
}

export function passwordLogPrintHtml(): string {
  const headers = PASSWORD_LOG_COLUMNS.map((column) => `<th>${escapeHtml(column)}</th>`).join("");
  const exampleRow = [
    "Example (replace me)",
    "you@example.com",
    "garden fence + year",
    "",
    "Yes",
    "",
  ]
    .map((cell) => `<td>${escapeHtml(cell)}</td>`)
    .join("");
  const blank = PASSWORD_LOG_COLUMNS.map(() => "<td></td>").join("");
  const rows = [`<tr>${exampleRow}</tr>`, ...Array.from({ length: 16 }, () => `<tr>${blank}</tr>`)].join(
    "",
  );
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Offline password log — printable password book</title>
  <style>
    body { font-family: Georgia, serif; margin: 24px; color: #1e2a4a; }
    h1 { font-size: 22px; margin: 0 0 8px; }
    p { font-size: 13px; line-height: 1.5; max-width: 720px; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    th, td { border: 1px solid #c5d0e0; padding: 8px; font-size: 13px; }
    th { text-align: left; background: #f3f7fc; }
    tr { height: 2.4em; }
    @media print { button { display: none; } body { margin: 12mm; } }
  </style>
</head>
<body>
  <button type="button" onclick="window.print()">Print this password book</button>
  <h1>Offline password log</h1>
  <p>${escapeHtml(SECURITY_NOTE)}</p>
  <table>
    <thead><tr>${headers}</tr></thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;
}

function csvCell(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
