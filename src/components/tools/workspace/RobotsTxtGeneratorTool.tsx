"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolActions, ToolError, ToolField, ToolOutput, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { generateRobotsTxt } from "@/lib/tools/robots-txt";

type Group = { id: number; userAgent: string; allow: string; disallow: string };

export function RobotsTxtGeneratorTool() {
  const [groups, setGroups] = useState<Group[]>([{ id: 1, userAgent: "*", allow: "", disallow: "/admin" }]);
  const [nextId, setNextId] = useState(2);
  const [sitemap, setSitemap] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof generateRobotsTxt>>();

  function update(id: number, patch: Partial<Group>) {
    setGroups((current) => current.map((group) => (group.id === id ? { ...group, ...patch } : group)));
  }

  function generate() {
    const next = generateRobotsTxt(groups.map((group) => ({ userAgent: group.userAgent, allowRaw: group.allow, disallowRaw: group.disallow })), sitemap);
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
        This writes robots.txt text from the rules you type. It does not test or publish a live site.
      </p>
      <div className="mt-4 space-y-3">
        {groups.map((group, index) => (
          <div key={group.id} className="space-y-3 rounded-lg border border-border p-3">
            <ToolField id={`agent-${group.id}`} label={`Group ${index + 1} user-agent`}>
              <input id={`agent-${group.id}`} value={group.userAgent} onChange={(event) => update(group.id, { userAgent: event.target.value })} className={toolControlClass} />
            </ToolField>
            <ToolField id={`allow-${group.id}`} label="Allow paths, one per line">
              <textarea id={`allow-${group.id}`} value={group.allow} onChange={(event) => update(group.id, { allow: event.target.value })} rows={2} className={toolControlClass} />
            </ToolField>
            <ToolField id={`disallow-${group.id}`} label="Disallow paths, one per line">
              <textarea id={`disallow-${group.id}`} value={group.disallow} onChange={(event) => update(group.id, { disallow: event.target.value })} rows={2} className={toolControlClass} />
            </ToolField>
            {groups.length > 1 ? <Button type="button" variant="ghost" onClick={() => setGroups((current) => current.filter((item) => item.id !== group.id))}>Remove group</Button> : null}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button type="button" variant="secondary" onClick={() => { setGroups((current) => [...current, { id: nextId, userAgent: "", allow: "", disallow: "" }]); setNextId((id) => id + 1); }}>Add group</Button>
      </div>
      <div className="mt-4">
        <ToolField id="robots-sitemap" label="Sitemap URL, optional">
          <input id="robots-sitemap" value={sitemap} onChange={(event) => setSitemap(event.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      {error ? <div className="mt-4"><ToolError>{error}</ToolError></div> : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={generate}>Generate</Button>
          <CopyButton value={result?.ok ? result.text : ""} label="Copy result" />
          <Button type="button" variant="ghost" onClick={() => { setGroups([{ id: 1, userAgent: "*", allow: "", disallow: "/admin" }]); setNextId(2); setSitemap(""); setError(""); setResult(undefined); }}>Reset</Button>
        </ToolActions>
      </div>
      {result?.ok ? <div className="mt-6"><ToolOutput label="robots.txt"><pre className="whitespace-pre-wrap text-sm">{result.text}</pre></ToolOutput></div> : null}
    </ToolPanel>
  );
}
