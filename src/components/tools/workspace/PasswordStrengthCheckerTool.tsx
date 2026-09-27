"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { checkPasswordStrength } from "@/lib/tools/password-strength";

export function PasswordStrengthCheckerTool() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof checkPasswordStrength>>();

  function check() {
    const next = checkPasswordStrength(password);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok
    ? `${result.length} characters, ${result.label}, ${result.bits.toFixed(0)} bits`
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        The rating uses the character types in the password you type. It stays in this tab. It is not uploaded and it is not compared with a breach list.
      </p>
      <div className="mt-4">
        <ToolField id="strength-password" label="Password">
          <input
            id="strength-password"
            type={visible ? "text" : "password"}
            value={password}
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
      </div>
      <label className="mt-3 flex min-h-11 items-center gap-2 text-sm">
        <input type="checkbox" checked={visible} onChange={(event) => setVisible(event.target.checked)} />
        Show password
      </label>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={check}>Check</Button>
          <CopyButton value={summary} label="Copy rating" />
          <Button type="button" variant="ghost" onClick={() => { setPassword(""); setVisible(false); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6">
          <ToolStatGrid items={[
            { label: "Rating", value: result.label },
            { label: "Length", value: String(result.length) },
            { label: "Estimated bits", value: result.bits.toFixed(0) },
            { label: "Character types", value: result.classes.join(", ") },
          ]} />
        </div>
      ) : null}
    </ToolPanel>
  );
}
