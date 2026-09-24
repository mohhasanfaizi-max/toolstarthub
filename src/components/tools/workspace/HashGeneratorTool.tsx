"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { HASH_ALGORITHMS, hashText, type HashAlgorithm } from "@/lib/tools/hash";

export function HashGeneratorTool() {
  const [text, setText] = useState("");
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA-256");
  const [error, setError] = useState("");
  const [hex, setHex] = useState("");
  const [busy, setBusy] = useState(false);

  async function run() {
    setBusy(true);
    const result = await hashText(text, algorithm);
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      setHex("");
      return;
    }
    setError("");
    setHex(result.hex);
  }

  function reset() {
    setText("");
    setAlgorithm("SHA-256");
    setError("");
    setHex("");
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This creates a one-way hash for checking that text has not changed. It does not encrypt the text, and it does not store a password.
      </p>
      <div className="mt-4">
        <ToolField id="hash-text" label="Text">
          <textarea id="hash-text" value={text} onChange={(event) => setText(event.target.value)} rows={6} spellCheck={false} className={`${toolControlClass} min-h-28 resize-y font-mono text-sm`} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Algorithm"
          name="hash-algorithm"
          value={algorithm}
          onChange={setAlgorithm}
          columns="grid gap-2 sm:grid-cols-3"
          options={HASH_ALGORITHMS.map((item) => ({ id: item, label: item }))}
        />
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={run} disabled={busy}>{busy ? "Working" : "Create hash"}</Button>
          <CopyButton value={hex} label="Copy result" />
          <Button type="button" variant="ghost" onClick={reset}>Clear</Button>
        </ToolActions>
      </div>
      <div className="mt-6">
        <ToolOutput label={hex ? algorithm : "Hash"}>
          <p className="break-all font-mono text-sm leading-6">{hex || "The hash will appear here."}</p>
        </ToolOutput>
      </div>
      <ToolPrivacyNote>
        Hashing runs in your browser with Web Crypto. MD5 and SHA-1 are not offered here. They are legacy hashes and a poor choice for new integrity checks.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
