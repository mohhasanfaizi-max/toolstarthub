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
import { CopyButton } from "@/components/tools/CopyButton";
import { buildUtmUrl } from "@/lib/tools/utm";
import { useTx } from "@/i18n/tool-text";

export function UtmBuilderTool() {
  const tx = useTx();
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");

  const result = buildUtmUrl({
    url,
    source,
    medium,
    campaign,
    term,
    content,
  });

  function reset() {
    setUrl("");
    setSource("");
    setMedium("");
    setCampaign("");
    setTerm("");
    setContent("");
  }

  return (
    <ToolPanel>
      <div className="grid gap-4">
        <ToolField
          id="utm-url"
          label={tx("Website URL")}
          hint={tx("Existing query parameters are kept. UTM values are added or updated.")}
        >
          <input
            id="utm-url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className={toolControlClass}
            placeholder={tx("https://example.com/landing")}
            autoComplete="url"
          />
        </ToolField>
        <div className="grid gap-4 sm:grid-cols-2">
          <ToolField id="utm-source" label={tx("Campaign source")}>
            <input
              id="utm-source"
              value={source}
              onChange={(event) => setSource(event.target.value)}
              className={toolControlClass}
              placeholder={tx("google")}
            />
          </ToolField>
          <ToolField id="utm-medium" label={tx("Campaign medium")}>
            <input
              id="utm-medium"
              value={medium}
              onChange={(event) => setMedium(event.target.value)}
              className={toolControlClass}
              placeholder={tx("cpc")}
            />
          </ToolField>
          <ToolField id="utm-campaign" label={tx("Campaign name")}>
            <input
              id="utm-campaign"
              value={campaign}
              onChange={(event) => setCampaign(event.target.value)}
              className={toolControlClass}
              placeholder={tx("spring-sale")}
            />
          </ToolField>
          <ToolField id="utm-term" label={tx("Campaign term (optional)")}>
            <input
              id="utm-term"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              className={toolControlClass}
              placeholder={tx("running shoes")}
            />
          </ToolField>
        </div>
        <ToolField id="utm-content" label={tx("Campaign content (optional)")}>
          <input
            id="utm-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className={toolControlClass}
            placeholder={tx("banner-a")}
          />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolActions>
          <CopyButton value={result.ok ? result.url : ""} label={tx("Copy URL")} />
          <Button type="button" variant="secondary" onClick={reset}>{tx("Reset")}</Button>
        </ToolActions>
      </div>

      <div className="mt-6">
        {url.trim() === "" ? (
          <p className="text-sm text-muted-foreground">{tx("Enter a URL to generate a campaign link.")}</p>
        ) : result.ok ? (
          <ToolOutput label={tx("Campaign URL")}>
            <p className="break-all text-base font-medium leading-7">
              {result.url}
            </p>
          </ToolOutput>
        ) : (
          <ToolError>{tx(result.error)}</ToolError>
        )}
      </div>
    </ToolPanel>
  );
}
