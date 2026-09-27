"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolChoiceGroup, ToolError, ToolField, ToolOutput, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { generateMetaTags } from "@/lib/tools/meta-tags";

export function MetaTagGeneratorTool() {
  const [title, setTitle] = useState("Sample page");
  const [description, setDescription] = useState("A short description of the page.");
  const [canonical, setCanonical] = useState("");
  const [index, setIndex] = useState<"index" | "noindex">("index");
  const [follow, setFollow] = useState<"follow" | "nofollow">("follow");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [ogType, setOgType] = useState<"" | "website" | "article">("");
  const [twitterCard, setTwitterCard] = useState<"" | "summary" | "summary_large_image">("");
  const [twitterTitle, setTwitterTitle] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof generateMetaTags>>();

  function generate() {
    const next = generateMetaTags({
      title,
      description,
      canonical,
      index: index === "index",
      follow: follow === "follow",
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      ogType,
      twitterCard,
      twitterTitle,
      twitterDescription: "",
      twitterImage: "",
    });
    if (!next.ok) {
      setError(next.error);
      setResult(undefined);
      return;
    }
    setError("");
    setResult(next);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">
        This writes HTML for the head of a page. It does not fetch a live URL or check how a site will share.
      </p>
      <div className="mt-4 grid gap-4">
        <ToolField id="meta-title" label="Title">
          <input id="meta-title" value={title} onChange={(event) => setTitle(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="meta-description" label="Description">
          <textarea id="meta-description" value={description} onChange={(event) => setDescription(event.target.value)} rows={3} className={toolControlClass} />
        </ToolField>
        <ToolField id="meta-canonical" label="Canonical URL, optional">
          <input id="meta-canonical" value={canonical} onChange={(event) => setCanonical(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolChoiceGroup legend="Robots index" name="meta-index" value={index} onChange={setIndex} options={[{ id: "index", label: "index" }, { id: "noindex", label: "noindex" }]} />
        <ToolChoiceGroup legend="Robots follow" name="meta-follow" value={follow} onChange={setFollow} options={[{ id: "follow", label: "follow" }, { id: "nofollow", label: "nofollow" }]} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolField id="meta-og-title" label="Open Graph title, optional">
          <input id="meta-og-title" value={ogTitle} onChange={(event) => setOgTitle(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="meta-og-description" label="Open Graph description, optional">
          <input id="meta-og-description" value={ogDescription} onChange={(event) => setOgDescription(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="meta-og-image" label="Open Graph image URL, optional">
          <input id="meta-og-image" value={ogImage} onChange={(event) => setOgImage(event.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="meta-og-url" label="Open Graph URL, optional">
          <input id="meta-og-url" value={ogUrl} onChange={(event) => setOgUrl(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4">
        <ToolChoiceGroup
          legend="Open Graph type"
          name="meta-og-type"
          value={ogType}
          onChange={setOgType}
          columns="grid gap-2 sm:grid-cols-3"
          options={[{ id: "", label: "None" }, { id: "website", label: "website" }, { id: "article", label: "article" }]}
        />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ToolChoiceGroup
          legend="Twitter card"
          name="meta-twitter-card"
          value={twitterCard}
          onChange={setTwitterCard}
          columns="grid gap-2"
          options={[{ id: "", label: "None" }, { id: "summary", label: "summary" }, { id: "summary_large_image", label: "summary_large_image" }]}
        />
        <ToolField id="meta-twitter-title" label="Twitter title, optional">
          <input id="meta-twitter-title" value={twitterTitle} onChange={(event) => setTwitterTitle(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={generate}>Generate</Button>
          <CopyButton value={result?.ok ? result.html : ""} label="Copy HTML" />
          <Button type="button" variant="ghost" onClick={() => { setTitle("Sample page"); setDescription("A short description of the page."); setCanonical(""); setIndex("index"); setFollow("follow"); setOgTitle(""); setOgDescription(""); setOgImage(""); setOgUrl(""); setOgType(""); setTwitterCard(""); setTwitterTitle(""); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? <div className="mt-6"><ToolOutput label="Head tags"><pre className="whitespace-pre-wrap font-mono text-sm">{result.html}</pre></ToolOutput></div> : null}
    </ToolPanel>
  );
}
