"use client";

import { useState } from "react";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolError, ToolOutput } from "@/components/tools/ToolForm";

export type AiStatus = "idle" | "loading" | "success" | "error" | "limited";

export function useAiGenerate() {
  const [status, setStatus] = useState<AiStatus>("idle");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  async function run(tool: string, input: string, options?: Record<string, string>) {
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool, input, options }),
      });
      const data = (await response.json()) as { success?: boolean; text?: string; error?: string };
      if (response.status === 429) {
        setStatus("limited");
        setText("");
        setError(data.error || "Too many AI requests. Wait a minute and try again.");
        return;
      }
      if (!response.ok || !data.success || !data.text) {
        setStatus("error");
        setText("");
        setError(data.error || "The AI request could not be completed.");
        return;
      }
      setStatus("success");
      setText(data.text);
    } catch {
      setStatus("error");
      setText("");
      setError("The AI request could not be completed.");
    }
  }

  return { status, text, error, run };
}

export function AiResult({
  status,
  text,
  error,
  label,
  copyLabel,
}: {
  status: AiStatus;
  text: string;
  error: string;
  label: string;
  copyLabel?: string;
}) {
  if (status === "idle") return null;
  return (
    <div className="mt-6 space-y-3">
      {status === "loading" ? <p className="text-sm text-muted-foreground">Working on the AI request…</p> : null}
      {error ? <ToolError>{error}</ToolError> : null}
      {status === "success" ? (
        <ToolOutput label={label}>
          <p className="whitespace-pre-wrap break-words text-sm leading-6">{text}</p>
          {copyLabel ? (
            <div className="mt-3">
              <CopyButton value={text} label={copyLabel} />
            </div>
          ) : null}
        </ToolOutput>
      ) : null}
    </div>
  );
}
