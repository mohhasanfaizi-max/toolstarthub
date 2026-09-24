"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolOutput, ToolPanel, ToolStatGrid, toolControlClass } from "@/components/tools/ToolForm";
import { parseAbsoluteUrl } from "@/lib/tools/url-parse";

export function UrlParserTool() {
  const [value, setValue] = useState("https://example.com:8080/docs/page?topic=tools&topic=hub#section");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof parseAbsoluteUrl>>();

  function calculate() {
    const next = parseAbsoluteUrl(value);
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  const summary = result?.ok ? `${result.protocol} ${result.hostname} ${result.pathname}` : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">The URL is parsed in your browser. It is not sent to another service.</p>
      <div className="mt-4">
        <ToolField id="url-value" label="Absolute URL">
          <textarea id="url-value" value={value} onChange={(event) => setValue(event.target.value)} rows={3} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={calculate}>Parse</Button>
          <CopyButton value={summary} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setValue("https://example.com:8080/docs/page?topic=tools&topic=hub#section"); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? (
        <div className="mt-6 space-y-4">
          <ToolStatGrid items={[
            { label: "Protocol", value: result.protocol },
            { label: "Hostname", value: result.hostname || "—" },
            { label: "Port", value: result.port || "—" },
            { label: "Path", value: result.pathname },
            { label: "Fragment", value: result.hash || "—" },
          ]} />
          <ToolOutput label="Query parameters">
            {result.params.length === 0 ? <p className="text-sm">No query parameters.</p> : (
              <ul className="space-y-1 text-sm">
                {result.params.map((param, index) => <li key={`${param.key}-${index}`}>{param.key} = {param.value === "" ? "(empty)" : param.value}</li>)}
              </ul>
            )}
          </ToolOutput>
        </div>
      ) : null}
    </ToolPanel>
  );
}
