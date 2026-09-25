import { publicAiError } from "./errors.ts";
import { handleAiGenerate } from "./handle-generate.ts";
import { maxInputLength } from "./limits.ts";
import { resetRateLimits } from "./rate-limit.ts";

type Assert = (condition: unknown, message: string) => void;

const sample = { tool: "ai-prompt-generator", input: "Write about leap-day age", options: { tone: "plain" } };

export async function runAiChecks(assert: Assert): Promise<void> {
  const previousKey = process.env.GEMINI_API_KEY;
  const previousMax = process.env.AI_RATE_LIMIT_MAX;
  const previousWindow = process.env.AI_RATE_LIMIT_WINDOW_MS;
  process.env.AI_RATE_LIMIT_MAX = "2";
  process.env.AI_RATE_LIMIT_WINDOW_MS = "60000";
  resetRateLimits();

  const malformed = await handleAiGenerate(null, "malformed", 1_000, async () => "unused");
  assert(malformed.status === 400 && malformed.body.success === false, "Malformed AI request is rejected");

  const badTool = await handleAiGenerate({ tool: "ai-chat", input: "hello" }, "bad-tool", 1_000, async () => "unused");
  assert(badTool.status === 400, "Invalid AI tool identifier is rejected");

  const missing = await handleAiGenerate({ tool: "ai-prompt-generator", options: {} }, "missing", 1_000, async () => "unused");
  assert(missing.status === 400, "Missing AI input is rejected");

  const wrongType = await handleAiGenerate({ tool: "prompt-to-image", input: 12 }, "type", 1_000, async () => "unused");
  assert(wrongType.status === 400, "Non-text AI input is rejected");

  const tooLong = await handleAiGenerate(
    { tool: "prompt-to-image", input: "a".repeat(maxInputLength("prompt-to-image") + 1) },
    "length",
    1_000,
    async () => "unused",
  );
  assert(tooLong.status === 400, "Oversized AI input is rejected");

  const hugeOption = await handleAiGenerate(
    { tool: "ai-prompt-generator", input: "topic", options: { tone: "t".repeat(1001) } },
    "option",
    1_000,
    async () => "unused",
  );
  assert(hugeOption.status === 400, "Oversized AI option is rejected");

  delete process.env.GEMINI_API_KEY;
  resetRateLimits();
  let missingCalls = 0;
  const unconfigured = await handleAiGenerate(sample, "no-key", 2_000, async () => {
    missingCalls += 1;
    return "should not run";
  });
  assert(unconfigured.status === 503 && missingCalls === 0, "Missing API key returns a configuration error");
  assert(!JSON.stringify(unconfigured.body).includes("GEMINI_API_KEY"), "Missing-key response hides the variable name");

  process.env.GEMINI_API_KEY = "test-not-a-secret";
  resetRateLimits();
  const success = await handleAiGenerate(sample, "ok", 3_000, async () => "A polished prompt.");
  assert(success.status === 200 && success.body.success === true && success.body.text === "A polished prompt.", "Successful provider text is returned");

  const provider = await handleAiGenerate(sample, "provider", 4_000, async () => {
    throw new Error("The AI model is unavailable right now. Try again later.");
  });
  assert(provider.status === 502 && provider.body.success === false, "Provider errors become a public failure");
  assert(!JSON.stringify(provider.body).includes("test-not-a-secret"), "Provider errors do not echo the test key");

  const secretish = await handleAiGenerate(sample, "secret", 5_000, async () => {
    throw new Error("request failed for key test-not-a-secret");
  });
  assert(
    secretish.status === 502 && secretish.body.success === false && !JSON.stringify(secretish.body).includes("test-not-a-secret"),
    "Unexpected provider errors are replaced",
  );

  resetRateLimits();
  const first = await handleAiGenerate(sample, "limit", 6_000, async () => "one");
  const second = await handleAiGenerate(sample, "limit", 6_100, async () => "two");
  const third = await handleAiGenerate(sample, "limit", 6_200, async () => "three");
  assert(first.status === 200 && second.status === 200 && third.status === 429, "Rate limit returns HTTP 429");

  assert(publicAiError({ status: 404 }).includes("unavailable"), "Unknown model maps to a public error");
  assert(publicAiError({ status: 429 }).includes("busy"), "Provider rate limit maps to a public error");

  if (previousKey === undefined) delete process.env.GEMINI_API_KEY;
  else process.env.GEMINI_API_KEY = previousKey;
  if (previousMax === undefined) delete process.env.AI_RATE_LIMIT_MAX;
  else process.env.AI_RATE_LIMIT_MAX = previousMax;
  if (previousWindow === undefined) delete process.env.AI_RATE_LIMIT_WINDOW_MS;
  else process.env.AI_RATE_LIMIT_WINDOW_MS = previousWindow;
  resetRateLimits();

  if (!process.env.GEMINI_API_KEY?.trim()) {
    console.log("Live Gemini test skipped: GEMINI_API_KEY is not set.");
    return;
  }
  if (process.env.GEMINI_LIVE_TEST !== "1") {
    console.log("Live Gemini test skipped. Set GEMINI_LIVE_TEST=1 to call the API.");
  }
}
