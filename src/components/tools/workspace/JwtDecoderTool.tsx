"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolOutput, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { decodeJwt } from "@/lib/tools/jwt-decode";

export function JwtDecoderTool() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof decodeJwt>>();

  function decode() {
    const next = decodeJwt(value);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const signatureNote = result?.ok
    ? result.signaturePresent
      ? result.signatureEmpty
        ? "A signature segment is present, but it is empty. It was not checked."
        : "A signature segment is present. It was not checked."
      : "No signature segment is present. Nothing was checked."
    : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-foreground">Decoding a JWT does not verify its signature or prove that the token is authentic.</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">The token stays in this browser. It is not sent, saved, or placed in the page address.</p>
      <div className="mt-4">
        <ToolField id="jwt-value" label="JWT">
          <textarea id="jwt-value" value={value} onChange={(event) => setValue(event.target.value)} rows={4} className={toolControlClass} spellCheck={false} autoComplete="off" />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={decode}>Decode</Button>
          <CopyButton value={result?.ok ? `${result.header}\n${result.payload}` : ""} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setValue(""); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <p className="text-sm leading-6 text-muted-foreground">{signatureNote}</p>
          <ToolOutput label="Header"><pre className="whitespace-pre-wrap text-sm">{result.header}</pre></ToolOutput>
          <ToolOutput label="Payload"><pre className="whitespace-pre-wrap text-sm">{result.payload}</pre></ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
