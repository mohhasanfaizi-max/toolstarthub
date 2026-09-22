"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import {
  generatePassword,
  parsePasswordLength,
  PASSWORD_DEFAULT,
  PASSWORD_MAX,
  PASSWORD_MIN,
} from "@/lib/tools/password";

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(String(PASSWORD_DEFAULT));
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
  const [password, setPassword] = useState("");
  const [meta, setMeta] = useState<{ bits: number; charsetSize: number; strengthLabel: string }>();
  const [error, setError] = useState("");

  function generate() {
    const parsed = parsePasswordLength(length);
    if (!parsed.ok) {
      setError(parsed.error);
      setPassword("");
      setMeta(undefined);
      return;
    }
    const next = generatePassword({
      length: parsed.value,
      uppercase,
      lowercase,
      numbers,
      symbols,
      excludeAmbiguous,
    });
    if (!next.ok) {
      setError(next.error);
      setPassword("");
      setMeta(undefined);
      return;
    }
    setError("");
    setPassword(next.password);
    setMeta({
      bits: next.bits,
      charsetSize: next.charsetSize,
      strengthLabel: next.strengthLabel,
    });
  }

  return (
    <ToolPanel>
      <ToolField
        id="password-length"
        label="Length"
        hint={`From ${PASSWORD_MIN} to ${PASSWORD_MAX} characters.`}
      >
        <input
          id="password-length"
          inputMode="numeric"
          value={length}
          onChange={(event) => setLength(event.target.value)}
          className={toolControlClass}
        />
      </ToolField>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-foreground">Character types</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <Option checked={uppercase} onChange={setUppercase} label="Uppercase letters" />
          <Option checked={lowercase} onChange={setLowercase} label="Lowercase letters" />
          <Option checked={numbers} onChange={setNumbers} label="Numbers" />
          <Option checked={symbols} onChange={setSymbols} label="Symbols" />
          <Option
            checked={excludeAmbiguous}
            onChange={setExcludeAmbiguous}
            label="Exclude ambiguous characters (O, 0, I, l, 1)"
          />
        </div>
      </fieldset>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={generate}>
            Generate
          </Button>
          <CopyButton value={password} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setPassword("");
              setMeta(undefined);
              setError("");
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {password ? (
          <ToolOutput label="Generated password">
            <p className="break-all font-mono text-lg font-semibold">{password}</p>
            {meta ? (
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Length: {password.length}</p>
                <p>Character set size: {meta.charsetSize}</p>
                <p>
                  Estimated entropy: {meta.bits.toFixed(0)} bits ({meta.strengthLabel})
                </p>
                <p>
                  This meter is an estimate from length and character set size. It is not a
                  guarantee of security.
                </p>
              </div>
            ) : null}
          </ToolOutput>
        ) : null}
      </div>

      <ToolPrivacyNote>
        Passwords are created with crypto.getRandomValues in your browser. They are not stored,
        logged, or sent to a server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

function Option({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      {label}
    </label>
  );
}
