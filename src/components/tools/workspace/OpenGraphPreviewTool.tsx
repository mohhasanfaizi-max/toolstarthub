"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ToolActions, ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import type { OpenGraphPreview } from "@/lib/og/extract-preview";
import { useTx } from "@/i18n/tool-text";

type PreviewStatus = "idle" | "loading" | "success" | "error";

const PUBLIC_FAILURE = "That page could not be previewed.";

function isPreview(value: unknown): value is OpenGraphPreview {
  if (typeof value !== "object" || value === null) return false;
  const preview = value as OpenGraphPreview;
  return typeof preview.title === "string" && typeof preview.openGraph?.title === "string" && typeof preview.twitter?.card === "string";
}

export function OpenGraphPreviewTool() {
  const tx = useTx();
  const show = (value: string) => (value.trim() === "" ? tx("Not found") : value);
  const [url, setUrl] = useState("https://example.com/");
  const [status, setStatus] = useState<PreviewStatus>("idle");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<OpenGraphPreview>();
  const [imageFailed, setImageFailed] = useState(false);

  async function check() {
    const trimmed = url.trim();
    if (trimmed === "") {
      setStatus("error");
      setPreview(undefined);
      setError("Enter an http or https page URL.");
      return;
    }
    setStatus("loading");
    setError("");
    setPreview(undefined);
    setImageFailed(false);
    try {
      const response = await fetch("/api/og/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const data = (await response.json()) as { success?: boolean; error?: string; preview?: unknown };
      if (!response.ok || !data.success || !isPreview(data.preview)) {
        setStatus("error");
        setError(typeof data.error === "string" && data.error !== "" ? data.error : PUBLIC_FAILURE);
        return;
      }
      setStatus("success");
      setPreview(data.preview);
    } catch {
      setStatus("error");
      setError(PUBLIC_FAILURE);
    }
  }

  const title = preview ? preview.openGraph.title || preview.title : "";
  const description = preview ? preview.openGraph.description || preview.description : "";
  const image = preview ? preview.openGraph.image || preview.twitter.image : "";

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">{tx("Check preview sends the URL to this site. The site reads that public page's title and share tags and does not save the page. A private address or a non-http URL is rejected.")}</p>
      <div className="mt-4">
        <ToolField id="og-url" label={tx("Page URL")}>
          <input id="og-url" inputMode="url" value={url} onChange={(event) => setUrl(event.target.value)} spellCheck={false} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{tx(error)}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={() => void check()} disabled={status === "loading"}>
            {tx(status === "loading" ? "Checking…" : "Check preview")}
          </Button>
          <Button type="button" variant="ghost" onClick={() => { setUrl("https://example.com/"); setStatus("idle"); setError(""); setPreview(undefined); setImageFailed(false); }}>{tx("Reset")}</Button>
        </ToolActions>
      </div>
      {status === "loading" ? <p className="mt-6 text-sm text-muted-foreground">{tx("Checking the page…")}</p> : null}
      {status === "success" && preview ? (
        <article className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
          {image !== "" && !imageFailed ? (
            <img src={image} alt="" referrerPolicy="no-referrer" className="max-h-56 w-full bg-muted object-contain" onError={() => setImageFailed(true)} />
          ) : null}
          <div className="space-y-4 p-4 sm:p-5">
            <div>
              <h2 className="text-lg font-semibold text-foreground">{show(title)}</h2>
              <p className="mt-1 break-all text-sm text-muted-foreground">{preview.finalUrl}</p>
            </div>
            <p className="text-sm leading-6 text-foreground">{show(description)}</p>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-foreground">{tx("Image")}</dt>
                <dd className="mt-1 break-all text-muted-foreground">{imageFailed ? tx("The image address was found, but it did not load.") : show(image)}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">{tx("Twitter card")}</dt>
                <dd className="mt-1 text-muted-foreground">{show(preview.twitter.card)}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">{tx("Twitter title")}</dt>
                <dd className="mt-1 text-muted-foreground">{show(preview.twitter.title)}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">{tx("Twitter description")}</dt>
                <dd className="mt-1 text-muted-foreground">{show(preview.twitter.description)}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-foreground">{tx("Twitter image")}</dt>
                <dd className="mt-1 break-all text-muted-foreground">{show(preview.twitter.image)}</dd>
              </div>
            </dl>
          </div>
        </article>
      ) : null}
    </ToolPanel>
  );
}
