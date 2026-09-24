export type FindReplaceMode = "first" | "all";

export type FindReplaceResult =
  | { ok: true; text: string; count: number }
  | { ok: false; error: string };

export function findAndReplace(
  source: string,
  find: string,
  replacement: string,
  mode: FindReplaceMode,
  caseSensitive: boolean,
): FindReplaceResult {
  if (source === "") {
    return { ok: false, error: "Paste the text you want to change." };
  }
  if (find === "") {
    return { ok: false, error: "Enter the text to find." };
  }

  let count = 0;
  let text = "";
  let index = 0;
  const haystack = caseSensitive ? source : source.toLowerCase();
  const needle = caseSensitive ? find : find.toLowerCase();

  while (index <= source.length) {
    const found = haystack.indexOf(needle, index);
    if (found === -1) {
      text += source.slice(index);
      break;
    }
    text += source.slice(index, found) + replacement;
    count += 1;
    index = found + find.length;
    if (mode === "first") {
      text += source.slice(index);
      break;
    }
    if (find.length === 0) {
      break;
    }
  }

  return { ok: true, text, count };
}
