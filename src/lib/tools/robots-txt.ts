export type RobotsGroupInput = { userAgent: string; allowRaw: string; disallowRaw: string };

export type RobotsResult = { ok: true; text: string } | { ok: false; error: string };

function paths(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== "");
}

export function generateRobotsTxt(groups: RobotsGroupInput[], sitemapRaw: string): RobotsResult {
  const filled = groups.filter((group) => group.userAgent.trim() !== "" || group.allowRaw.trim() !== "" || group.disallowRaw.trim() !== "");
  if (filled.length === 0) return { ok: false, error: "Add at least one user-agent group." };

  const blocks: string[] = [];
  for (let index = 0; index < filled.length; index += 1) {
    const group = filled[index];
    const agent = group.userAgent.trim();
    if (agent === "") return { ok: false, error: `Group ${index + 1} needs a user-agent.` };
    const lines = [`User-agent: ${agent}`];
    for (const path of paths(group.allowRaw)) lines.push(`Allow: ${path}`);
    for (const path of paths(group.disallowRaw)) lines.push(`Disallow: ${path}`);
    blocks.push(lines.join("\n"));
  }

  const sitemap = sitemapRaw.trim();
  if (sitemap !== "") {
    try {
      const url = new URL(sitemap);
      if ((url.protocol !== "http:" && url.protocol !== "https:") || !url.hostname) {
        return { ok: false, error: "Enter a sitemap as an absolute http or https URL." };
      }
    } catch {
      return { ok: false, error: "Enter a sitemap as an absolute http or https URL." };
    }
    blocks.push(`Sitemap: ${sitemap}`);
  }

  return { ok: true, text: `${blocks.join("\n\n")}\n` };
}
