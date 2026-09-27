export const GITIGNORE_PRESETS = [
  { id: "node", title: "Node", lines: ["node_modules/", "npm-debug.log*"] },
  { id: "next", title: "Next.js", lines: [".next/", "out/"] },
  { id: "env", title: "Environment files", lines: [".env", ".env.*"] },
  { id: "os", title: "Operating system", lines: [".DS_Store", "Thumbs.db"] },
  { id: "logs", title: "Logs", lines: ["*.log"] },
  { id: "build", title: "Build output", lines: ["dist/", "build/"] },
] as const;

export type GitignorePresetId = (typeof GITIGNORE_PRESETS)[number]["id"];

export type GitignoreResult = { ok: true; text: string } | { ok: false; error: string };

const MAX_CUSTOM_LINES = 50;
const MAX_CUSTOM_LENGTH = 200;

export function generateGitignore(presetIds: string[], customRaw: string): GitignoreResult {
  const known = new Set(GITIGNORE_PRESETS.map((preset) => preset.id));
  for (const id of presetIds) {
    if (!known.has(id as GitignorePresetId)) return { ok: false, error: "That template is not available." };
  }
  const selected = new Set(presetIds);

  const customLines: string[] = [];
  for (const line of customRaw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === "") continue;
    if (trimmed.length > MAX_CUSTOM_LENGTH) {
      return { ok: false, error: `Enter a custom pattern of ${MAX_CUSTOM_LENGTH} characters or fewer.` };
    }
    customLines.push(trimmed);
  }
  if (customLines.length > MAX_CUSTOM_LINES) {
    return { ok: false, error: `Enter up to ${MAX_CUSTOM_LINES} custom patterns.` };
  }

  const used = new Set<string>();
  const blocks: string[] = [];
  for (const preset of GITIGNORE_PRESETS) {
    if (!selected.has(preset.id)) continue;
    const lines = preset.lines.filter((line) => {
      if (used.has(line)) return false;
      used.add(line);
      return true;
    });
    if (lines.length > 0) blocks.push([`# ${preset.title}`, ...lines].join("\n"));
  }

  const custom = customLines.filter((line) => {
    if (used.has(line)) return false;
    used.add(line);
    return true;
  });
  if (custom.length > 0) blocks.push(["# Custom", ...custom].join("\n"));
  if (blocks.length === 0) return { ok: false, error: "Choose a template or add a custom pattern." };

  return { ok: true, text: `${blocks.join("\n\n")}\n` };
}
