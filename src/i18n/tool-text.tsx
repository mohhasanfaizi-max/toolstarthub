"use client";

import { createContext, useContext, useMemo } from "react";

/**
 * Tool workspace strings. Keys are the English source text, so a missing
 * translation simply falls back to English. Keys may contain {0}, {1}…
 * placeholders to translate messages built at runtime (for example
 * "{0} words"); captured parts are kept as they are.
 */
export type ToolTextDictionary = Record<string, string>;

type Pattern = { regex: RegExp; template: string; weight: number };
type Translator = <T>(value: T) => T;

const identity: Translator = (value) => value;
const ToolTextContext = createContext<Translator>(identity);

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function compilePatterns(dict: ToolTextDictionary): Pattern[] {
  const patterns: Pattern[] = [];
  for (const [key, template] of Object.entries(dict)) {
    if (!/\{\d\}/.test(key)) continue;
    const source = key
      .split(/(\{\d\})/)
      .map((part) => (/^\{\d\}$/.test(part) ? "([\\s\\S]+?)" : escapeRegex(part)))
      .join("");
    const weight = key.replace(/\{\d\}/g, "").length;
    patterns.push({ regex: new RegExp(`^${source}$`), template, weight });
  }
  // Most specific (longest literal text) first.
  return patterns.sort((a, b) => b.weight - a.weight);
}

export function createTranslator(dict: ToolTextDictionary): Translator {
  const patterns = compilePatterns(dict);
  const cache = new Map<string, string>();

  function translate(text: string): string {
    const cached = cache.get(text);
    if (cached !== undefined) return cached;
    const leading = text.match(/^\s*/)?.[0] ?? "";
    const trailing = text.slice(leading.length).match(/\s*$/)?.[0] ?? "";
    const core = text.slice(leading.length, text.length - trailing.length);
    let out = core ? dict[core] : undefined;
    if (out === undefined && core) {
      for (const pattern of patterns) {
        const match = pattern.regex.exec(core);
        if (match) {
          const groups = match.slice(1);
          // Placeholders are numbered in the order they appear in the key;
          // a captured part is only swapped when it is itself a known key.
          out = pattern.template.replace(/\{(\d)\}/g, (_, n: string) => {
            const value = groups[Number(n)] ?? "";
            return dict[value.trim()] ?? value;
          });
          break;
        }
      }
    }
    const result = out === undefined ? text : `${leading}${out}${trailing}`;
    if (cache.size > 500) cache.clear();
    cache.set(text, result);
    return result;
  }

  return ((value: unknown) =>
    typeof value === "string" ? translate(value) : value) as Translator;
}

export function ToolTextProvider({
  dict,
  children,
}: {
  dict: ToolTextDictionary | undefined;
  children: React.ReactNode;
}) {
  const translator = useMemo(
    () => (dict ? createTranslator(dict) : identity),
    [dict],
  );
  return (
    <ToolTextContext.Provider value={translator}>
      {children}
    </ToolTextContext.Provider>
  );
}

/** Returns tx(), which translates English workspace strings (non-strings pass through). */
export function useTx(): Translator {
  return useContext(ToolTextContext);
}
