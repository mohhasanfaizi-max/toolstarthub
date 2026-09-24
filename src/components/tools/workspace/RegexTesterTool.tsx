"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { REGEX_FLAGS, testRegularExpression, type RegexFlag } from "@/lib/tools/regex-test";

const FLAG_LABELS: Record<RegexFlag, string> = {
  g: "g global",
  i: "i ignore case",
  m: "m multiline",
  s: "s dot matches newline",
  u: "u unicode",
};

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState<RegexFlag[]>(["g"]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof testRegularExpression>>();

  function toggle(flag: RegexFlag) {
    setFlags((current) => (current.includes(flag) ? current.filter((item) => item !== flag) : [...current, flag]));
  }

  function run() {
    const next = testRegularExpression(pattern, flags.join(""), text);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  function reset() {
    setPattern("");
    setFlags(["g"]);
    setText("");
    setError("");
    setResult(undefined);
  }

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="regex-pattern" label="Regular expression">
          <input id="regex-pattern" value={pattern} onChange={(event) => setPattern(event.target.value)} spellCheck={false} className={`${toolControlClass} font-mono`} />
        </ToolField>
        <fieldset>
          <legend className="text-sm font-medium text-foreground">Flags</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {REGEX_FLAGS.map((flag) => (
              <label key={flag} className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 text-sm text-foreground">
                <input type="checkbox" checked={flags.includes(flag)} onChange={() => toggle(flag)} />
                {FLAG_LABELS[flag]}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-4">
        <ToolField id="regex-text" label="Test text">
          <textarea id="regex-text" value={text} onChange={(event) => setText(event.target.value)} rows={8} spellCheck={false} className={`${toolControlClass} min-h-36 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run}>Test expression</Button>
          <Button type="button" variant="ghost" onClick={reset}>Clear</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <ToolOutput label="Matches">
            <p className="text-sm leading-6">
              {result.matched
                ? result.truncated
                  ? "At least 50 matches. Showing the first 50."
                  : `${result.count} ${result.count === 1 ? "match" : "matches"}.`
                : "No match."}
            </p>
            {!result.global ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Without the g flag, only the first match is shown.</p>
            ) : null}
          </ToolOutput>
          {result.matches.length > 0 ? (
            <ul className="space-y-3">
              {result.matches.map((match, index) => (
                <li key={`${match.index}-${index}`} className="rounded-2xl border border-border px-4 py-3 text-sm leading-6">
                  <p className="font-mono break-all">{match.text === "" ? "(empty match)" : match.text}</p>
                  <p className="mt-1 text-muted-foreground">Starts at character {match.index}.</p>
                  {match.groups.some((group) => group !== "") ? (
                    <p className="mt-1">Groups: {match.groups.map((group, groupIndex) => `${groupIndex + 1}: ${group || "(empty)"}`).join(", ")}</p>
                  ) : null}
                  {match.named.length > 0 ? (
                    <p className="mt-1">Named: {match.named.map((group) => `${group.name}: ${group.value || "(empty)"}`).join(", ")}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      <p className="mt-6 text-sm leading-6 text-muted-foreground">
        A dot matches one character. * means zero or more, + means one or more, and ? means optional. Square brackets match one character from a set. Parentheses capture a group. A bar means or. ^ and $ mark the start and end of a line when the m flag is on. \d is a digit, \s is whitespace, and \w is a word character. This page only builds a RegExp. It does not run other JavaScript from the pattern box.
      </p>
    </ToolPanel>
  );
}
