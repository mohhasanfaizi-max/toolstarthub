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

export function UtmBuilderTool() {
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
          label="Website URL"
          hint="Existing query parameters are kept. UTM values are added or updated."
        >
          <input
            id="utm-url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className={toolControlClass}
            placeholder="https://example.com/landing"
            autoComplete="url"
          />
        </ToolField>
        <div className="grid gap-4 sm:grid-cols-2">
          <ToolField id="utm-source" label="Campaign source">
            <input
              id="utm-source"
              value={source}
              onChange={(event) => setSource(event.target.value)}
              className={toolControlClass}
              placeholder="google"
            />
          </ToolField>
          <ToolField id="utm-medium" label="Campaign medium">
            <input
              id="utm-medium"
              value={medium}
              onChange={(event) => setMedium(event.target.value)}
              className={toolControlClass}
              placeholder="cpc"
            />
          </ToolField>
          <ToolField id="utm-campaign" label="Campaign name">
            <input
              id="utm-campaign"
              value={campaign}
              onChange={(event) => setCampaign(event.target.value)}
              className={toolControlClass}
              placeholder="spring-sale"
            />
          </ToolField>
          <ToolField id="utm-term" label="Campaign term (optional)">
            <input
              id="utm-term"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              className={toolControlClass}
              placeholder="running shoes"
            />
          </ToolField>
        </div>
        <ToolField id="utm-content" label="Campaign content (optional)">
          <input
            id="utm-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className={toolControlClass}
            placeholder="banner-a"
          />
        </ToolField>
      </div>

      <div className="mt-6">
        <ToolActions>
          <CopyButton value={result.ok ? result.url : ""} label="Copy URL" />
          <Button type="button" variant="secondary" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-6">
        {url.trim() === "" ? (
          <p className="text-sm text-muted-foreground">
            Enter a URL to generate a campaign link.
          </p>
        ) : result.ok ? (
          <ToolOutput label="Campaign URL">
            <p className="break-all text-base font-medium leading-7">
              {result.url}
            </p>
          </ToolOutput>
        ) : (
          <ToolError>{result.error}</ToolError>
        )}
      </div>
    </ToolPanel>
  );
}
