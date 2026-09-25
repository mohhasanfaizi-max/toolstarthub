export const AI_TOOLS = [
  "ai-prompt-generator",
  "prompt-to-image",
  "prompt-to-video",
  "ai-article-detector",
  "ai-article-compressor",
] as const;

export type AiToolId = (typeof AI_TOOLS)[number];

const MAX_INPUT: Record<AiToolId, number> = {
  "ai-prompt-generator": 4000,
  "prompt-to-image": 2000,
  "prompt-to-video": 3000,
  "ai-article-detector": 12000,
  "ai-article-compressor": 12000,
};

const MAX_OPTION = 1000;
const MAX_OPTIONS = 16;

export const OUTPUT_TOKENS: Record<AiToolId, number> = {
  "ai-prompt-generator": 800,
  "prompt-to-image": 700,
  "prompt-to-video": 900,
  "ai-article-detector": 800,
  "ai-article-compressor": 1200,
};

export type AiRequest = {
  tool: AiToolId;
  input: string;
  options: Record<string, string>;
};

export type AiValidation = { ok: true; request: AiRequest } | { ok: false; error: string };

function isTool(value: string): value is AiToolId {
  return (AI_TOOLS as readonly string[]).includes(value);
}

export function validateAiRequest(body: unknown): AiValidation {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Send a JSON request with a tool and input." };
  }
  const record = body as Record<string, unknown>;
  if (typeof record.tool !== "string" || !isTool(record.tool)) {
    return { ok: false, error: "Choose one of the AI tools on this site." };
  }
  if (typeof record.input !== "string") {
    return { ok: false, error: "Enter the text you want the AI tool to use." };
  }
  const input = record.input.trim();
  if (input.length === 0) {
    return { ok: false, error: "Enter some text before using the AI feature." };
  }
  if (input.length > MAX_INPUT[record.tool]) {
    return { ok: false, error: "That text is too long for this AI feature. Shorten it and try again." };
  }

  const options: Record<string, string> = {};
  if (record.options !== undefined) {
    if (!record.options || typeof record.options !== "object" || Array.isArray(record.options)) {
      return { ok: false, error: "Options must be short text fields." };
    }
    const entries = Object.entries(record.options);
    if (entries.length > MAX_OPTIONS) {
      return { ok: false, error: "Too many options were sent." };
    }
    for (const [key, value] of entries) {
      if (key.length > 40 || typeof value !== "string") {
        return { ok: false, error: "Options must be short text fields." };
      }
      if (value.length > MAX_OPTION) {
        return { ok: false, error: "One of the options is too long." };
      }
      options[key] = value.trim();
    }
  }

  return { ok: true, request: { tool: record.tool, input, options } };
}

export function maxInputLength(tool: AiToolId): number {
  return MAX_INPUT[tool];
}
