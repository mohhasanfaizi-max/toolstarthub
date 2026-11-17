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
  const [id, setId] = useState("");
  const [sourcePlatform, setSourcePlatform] = useState("");
  const [creativeFormat, setCreativeFormat] = useState("");
  const [marketingTactic, setMarketingTactic] = useState("");

  const result = buildUtmUrl({
    url,
    source,
    medium,
    campaign,
    term,
    content,
    id,
    sourcePlatform,
    creativeFormat,
    marketingTactic,
  });

  function reset() {
    setUrl("");
    setSource("");
    setMedium("");
    setCampaign("");
    setTerm("");
    setContent("");
    setId("");
    setSourcePlatform("");
    setCreativeFormat("");
    setMarketingTactic("");
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        {tx("This page builds a campaign URL in your browser. Google recommends utm_source, utm_medium, and utm_campaign on every tagged link. utm_id is optional and is useful when you import campaign data. Blank fields are left off the URL.")}{" "}
        <a
          href="https://support.google.com/analytics/answer/10917952"
          className="font-medium text-accent underline-offset-2 hover:underline"
          rel="noopener noreferrer"
        >
          {tx("Google Analytics help: URL builders")}
        </a>
        {" · "}
        <a
          href="https://ga-dev-tools.google/ga4/campaign-url-builder/"
          className="font-medium text-accent underline-offset-2 hover:underline"
          rel="noopener noreferrer"
        >
          {tx("Google's GA4 Campaign URL Builder")}
        </a>
        .
      </p>
      <div className="mt-4 grid gap-4">
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
          <ToolField
            id="utm-id"
            label={tx("Campaign ID (optional)")}
            hint={tx("Adds utm_id. Use the same campaign ID you use when you import campaign data into GA4.")}
          >
            <input
              id="utm-id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              className={toolControlClass}
              placeholder={tx("abc.123")}
              data-testid="utm-id"
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
        <div className="grid gap-4 sm:grid-cols-2">
          <ToolField
            id="utm-source-platform"
            label={tx("Source platform (optional)")}
            hint={tx("Adds utm_source_platform, for example Search Ads 360.")}
          >
            <input
              id="utm-source-platform"
              value={sourcePlatform}
              onChange={(event) => setSourcePlatform(event.target.value)}
              className={toolControlClass}
              placeholder={tx("Search Ads 360")}
            />
          </ToolField>
          <ToolField
            id="utm-creative-format"
            label={tx("Creative format (optional)")}
            hint={tx("Adds utm_creative_format. Google says this parameter is not currently reported in Analytics properties.")}
          >
            <input
              id="utm-creative-format"
              value={creativeFormat}
              onChange={(event) => setCreativeFormat(event.target.value)}
              className={toolControlClass}
              placeholder={tx("display")}
            />
          </ToolField>
          <ToolField
            id="utm-marketing-tactic"
            label={tx("Marketing tactic (optional)")}
            hint={tx("Adds utm_marketing_tactic. Google says this parameter is not currently reported in Analytics properties.")}
          >
            <input
              id="utm-marketing-tactic"
              value={marketingTactic}
              onChange={(event) => setMarketingTactic(event.target.value)}
              className={toolControlClass}
              placeholder={tx("remarketing")}
            />
          </ToolField>
        </div>
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
            <p className="break-all text-base font-medium leading-7" data-testid="utm-output">
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
