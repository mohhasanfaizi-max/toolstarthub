import { resetRateLimits } from "../ai/rate-limit.ts";
import { checkTranslation } from "./checks.ts";
import { handleUrduNews, URDU_NEWS_MAX_CHARS, URDU_NEWS_RATE_MAX, urduNewsMessages } from "./handle.ts";
import { humanizePrompt } from "./prompts.ts";
import { cleanNewsBody } from "./text.ts";
import { readJsonWithRetry, UrduNewsCallError } from "./json.ts";
import { buildMetaDescription, buildMetaTitle, buildTitle, META_DESCRIPTION_MAX, META_TITLE_MAX, TITLE_MAX } from "./limits.ts";
import { extractNumbers, normalizeDigits } from "./numbers.ts";
import { buildPermalink, uniquePermalink } from "./permalink.ts";
import { countQuoteMarks } from "./quotes.ts";
import type { SchemaName } from "./schema.ts";

type Assert = (condition: unknown, message: string) => void;

const urdu =
  "عمران خان نے پیر کے روز لاہور میں کہا کہ صوبائی بجٹ 12 ارب روپے ہے۔ انہوں نے کہا کہ شہر اس سال دو کلینک کھولے گا۔";
const brief =
  "Imran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees and the city will open two clinics this year for residents who need care now.";
const medium =
  "Imran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees. He said, \"The city will open two clinics this year.\" The remark named Lahore and the figure of 12 billion rupees. He gave the update on Monday in Lahore. Residents who need care were the people he mentioned, and the clinics were the only project named in the remark.";
const full =
  "Imran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees. He said, \"The city will open two clinics this year.\"";

function translationFixture() {
  return {
    title: "<b>Imran Khan Speaks in Lahore on the Budget</b>",
    versions: {
      brief: { subtitle: "Budget remarks in Lahore", body: brief, meta_description: "Imran Khan spoke in Lahore about a 12 billion rupee provincial budget." },
      medium: { subtitle: "What Imran Khan said in Lahore", body: medium, meta_description: "Imran Khan said in Lahore that the provincial budget is 12 billion rupees." },
      average: { subtitle: "Full translation", body: full, meta_description: "Imran Khan said in Lahore that the city will open two clinics." },
    },
    facts: [
      { type: "person", english: "Imran Khan", urdu: "عمران خان", in_brief: true, in_medium: true, in_average: true },
      { type: "number", english: "12", urdu: "12", in_brief: true, in_medium: true, in_average: true },
    ],
  };
}

export async function runUrduNewsChecks(assert: Assert): Promise<void> {
  const permalink = buildPermalink("The Prime Minister of Pakistan Visits Lahore");
  assert(permalink === "prime-minister-pakistan-visits-lahore", "Permalink drops stopwords and stays hyphenated");
  assert(!permalink.split("-").some((word) => ["a", "an", "the", "of", "in", "on"].includes(word)), "Listed stopwords stay out");

  const dated = buildPermalink("Lahore Floods on 12 March 2024");
  assert(!dated.includes("march") && !dated.includes("2024"), "Permalink drops the month and the year");
  assert(dated.includes("lahore") && dated.includes("floods"), "Permalink keeps the place and the event");
  assert(dated.split("-").length >= 4 && dated.split("-").length <= 8, "Permalink stays within 4 to 8 words");
  assert(dated.length <= 60 && dated === dated.toLowerCase() && !dated.includes(" "), "Permalink is short lowercase ASCII");

  const urduTitle = buildPermalink("عمران خان لاہور");
  assert(urduTitle === "urdu-news-english-draft", "A title with no ASCII words gets a fallback permalink");
  assert(!/[\u0600-\u06FF]/.test(buildPermalink("لاہور Budget Talks Resume")), "Urdu characters are not copied into the permalink");

  const long = buildPermalink("Alpha Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliet");
  assert(long.split("-").length === 8 && long.length <= 60, "Permalink keeps at most 8 words and 60 characters");
  const used = new Set([long]);
  const second = uniquePermalink(long, used);
  assert(second !== long && second.endsWith("-2") && second.length <= 60, "A repeated permalink gets a session suffix");

  const titled = buildTitle("imran khan speaks in lahore on the budget");
  assert(titled.text === "Imran Khan Speaks in Lahore on the Budget", "Title case keeps short words lower");
  assert(titled.text.length <= TITLE_MAX, "Title stays within 70 characters");
  const hugeTitle = buildTitle(`${"Very ".repeat(30)}Long`);
  assert(hugeTitle.shortened && hugeTitle.text.length <= TITLE_MAX && !hugeTitle.text.endsWith(" "), "A long title is cut on a word boundary");

  const meta = buildMetaTitle("Imran Khan Speaks in Lahore on the Budget");
  assert(meta.text === "Imran Khan Speaks in Lahore on the Budget | Tools Star Hub", "Meta title adds the site suffix");
  assert(meta.text.length <= META_TITLE_MAX, "Meta title stays within 60 characters");
  const oversized = buildMetaTitle("International Monetary Fund Reviews Pakistan Budget Talks Today");
  assert(oversized.text.endsWith("| Tools Star Hub") && oversized.text.length <= META_TITLE_MAX, "A long meta title is shortened at a word");
  const oneWord = buildMetaTitle("Supercalifragilisticexpialidociousbudgetheadlineword");
  assert(!oneWord.text.includes("|") && oneWord.droppedSuffix && oneWord.text.length <= META_TITLE_MAX, "A single long word drops the meta suffix");

  const description = buildMetaDescription(`${"word ".repeat(80)}end`);
  assert(description.shortened && description.text.length <= META_DESCRIPTION_MAX && !description.text.endsWith(" "), "Meta description is cut on a word boundary");

  const mixedBody = [
    "Title: Imran Khan Speaks",
    "Subtitle: Budget remarks",
    "Imran Khan said the budget is 12 billion rupees.",
    "Meta description: Khan spoke about the budget.",
    "Permalink: imran-khan-budget",
    "Meta title: Imran Khan Speaks | Tools Star Hub",
  ].join("\n\n");
  assert(cleanNewsBody(mixedBody) === "Imran Khan said the budget is 12 billion rupees.", "Body drops SEO labels and keeps the paragraph");
  assert(
    cleanNewsBody("Body: Imran Khan said the budget is 12 billion rupees.") === "Imran Khan said the budget is 12 billion rupees.",
    "A Body label is removed and the paragraph stays",
  );
  assert(
    cleanNewsBody("The title of the bill stayed the same.").includes("title of the bill"),
    "A sentence that mentions a title stays in the body",
  );
  const humanPrompt = humanizePrompt(urdu, brief);
  assert(humanPrompt.includes("Return only the news paragraphs"), "Humanize asks for the body only");
  assert(!humanPrompt.includes("Return a headline"), "Humanize does not ask for a headline");

  assert(normalizeDigits("۱۲") === "12" && normalizeDigits("١٢") === "12", "Urdu and Arabic-Indic digits become Western digits");
  assert(extractNumbers("۱٬۲۰۰ and 3.5").join(",") === "1200,3.5", "Thousands separators are ignored and decimals stay");

  const clean = checkTranslation(urdu, {
    title: "Imran Khan Speaks in Lahore on the Budget",
    meta_title: "Imran Khan Speaks in Lahore on the Budget | Tools Star Hub",
    versions: {
      brief: { subtitle: "Lahore", body: brief, meta_description: "Imran Khan spoke in Lahore about 12 billion rupees." },
      medium: { subtitle: "Lahore", body: medium, meta_description: "Imran Khan spoke in Lahore about 12 billion rupees." },
      average: { subtitle: "Lahore", body: full, meta_description: "Imran Khan spoke in Lahore about 12 billion rupees." },
    },
  });
  assert(clean.status === "ok", `A matching draft passes (${clean.checks.filter((item) => item.level !== "ok").map((item) => item.message).join("; ")})`);
  assert(clean.checks.some((item) => item.level === "ok" && item.message.includes("no quotations")), "Brief with no quotes is recorded");

  const extraNumber = checkTranslation("لاہور میں 12 لوگ", {
    title: "Lahore",
    meta_title: "Lahore",
    versions: {
      brief: { subtitle: "", body: `${brief} The toll was 99.`, meta_description: "" },
      medium: { subtitle: "", body: medium, meta_description: "" },
      average: { subtitle: "", body: "Lahore reported 12.", meta_description: "" },
    },
  });
  assert(extraNumber.checks.some((item) => item.level === "error" && item.message.includes("99")), "A number missing from the Urdu is an error");
  assert(extraNumber.status === "needs_review", "Any error marks the draft needs review");

  const missingFull = checkTranslation("لاہور میں 12 اور 7", {
    title: "Lahore count",
    meta_title: "Lahore count",
    versions: {
      brief: { subtitle: "", body: brief, meta_description: "" },
      medium: { subtitle: "", body: medium, meta_description: "" },
      average: { subtitle: "", body: "Imran Khan spoke in Lahore about 12.", meta_description: "" },
    },
  });
  assert(missingFull.checks.some((item) => item.level === "warning" && item.message.includes("missing 7")), "A number missing from Full is a warning");

  const quotedBrief = checkTranslation(urdu, {
    title: "Imran Khan Speaks in Lahore on the Budget",
    meta_title: "Imran Khan",
    versions: {
      brief: { subtitle: "", body: `${brief.slice(0, 40)} “quote” ${brief}`, meta_description: "" },
      medium: { subtitle: "", body: medium, meta_description: "" },
      average: { subtitle: "", body: full, meta_description: "" },
    },
  });
  assert(countQuoteMarks("“quote” «a»") === 4, "Curly quotes and guillemets are counted");
  assert(quotedBrief.checks.some((item) => item.level === "error" && item.message.includes("Brief")), "Brief must not contain a quotation");

  let attempts = 0;
  const parsed = await readJsonWithRetry(
    async () => {
      attempts += 1;
      return attempts === 1 ? "not json" : "{\"ok\":true}";
    },
    (value) => {
      const record = value as { ok?: boolean };
      if (!record.ok) throw new Error("bad");
      return record;
    },
  );
  assert(parsed.ok === true && attempts === 2, "Bad JSON is retried once");

  let failedAttempts = 0;
  let failedKind = "";
  try {
    await readJsonWithRetry(async () => {
      failedAttempts += 1;
      return "still bad";
    }, () => {
      throw new Error("bad");
    });
  } catch (error) {
    failedKind = error instanceof UrduNewsCallError ? error.kind : "other";
  }
  assert(failedAttempts === 2 && failedKind === "bad_json", "A second bad JSON response stops");

  let safetyAttempts = 0;
  let safetyKind = "";
  try {
    await readJsonWithRetry(async () => {
      safetyAttempts += 1;
      throw new UrduNewsCallError("safety");
    }, () => ({ ok: true }));
  } catch (error) {
    safetyKind = error instanceof UrduNewsCallError ? error.kind : "other";
  }
  assert(safetyAttempts === 1 && safetyKind === "safety", "A safety block is not retried as bad JSON");

  resetRateLimits();
  const missingKey = await handleUrduNews({ action: "translate", urdu: "خبر" }, "missing-key", 1_000, async () => "{}", false);
  assert(missingKey.status === 503, "A missing Gemini key returns unavailable");
  assert(!JSON.stringify(missingKey.body).includes("GEMINI_API_KEY"), "The unavailable response hides the variable name");

  let generateCalls = 0;
  const generate = async (prompt: string, schema: SchemaName) => {
    generateCalls += 1;
    if (schema === "fact") return JSON.stringify({ issues: [] });
    if (schema === "translation") return JSON.stringify(translationFixture());
    if (prompt.includes("not used")) return "{}";
    return JSON.stringify({ text: brief });
  };

  const tooLong = await handleUrduNews(
    { action: "translate", urdu: "ا".repeat(URDU_NEWS_MAX_CHARS + 1) },
    "too-long",
    2_000,
    generate,
    true,
  );
  assert(tooLong.status === 400 && tooLong.body.success === false && generateCalls === 0, "Input over 8,000 characters is rejected");

  const empty = await handleUrduNews({ action: "translate", urdu: "  " }, "empty", 3_000, generate, true);
  assert(empty.status === 400 && empty.body.success === false && empty.body.error === urduNewsMessages.empty, "Blank Urdu is rejected");

  const translated = await handleUrduNews({ action: "translate", urdu }, "success", 4_000, generate, true);
  assert(translated.status === 200 && translated.body.success === true, "A valid translation request succeeds");
  if (translated.body.success) {
    assert(translated.body.permalink === "imran-khan-speaks-lahore-budget", "SEO permalink is built in code");
    assert(translated.body.meta_title === "Imran Khan Speaks in Lahore on the Budget | Tools Star Hub", "SEO meta title is built in code");
    assert(!JSON.stringify(translated.body).includes("<b>"), "HTML from the model is stripped");
    assert(translated.body.verification && (translated.body.verification as { status: string }).status === "ok", "The sample draft does not need review");
  }

  const humanized = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: medium },
    "humanize-body",
    4_500,
    async () =>
      JSON.stringify({
        text: "Title: Imran Khan Speaks\n\nSubtitle: Remarks\n\nImran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees.\n\nMeta description: Khan spoke about the budget.\nPermalink: imran-khan-budget",
      }),
    true,
  );
  assert(humanized.status === 200 && humanized.body.success === true, "Humanize succeeds");
  if (humanized.body.success) {
    const text = String(humanized.body.text);
    assert(text.includes("Imran Khan said in Lahore"), "Humanize keeps the news paragraph");
    assert(!/^(title|subtitle|permalink|meta description|meta title)\s*:/im.test(text), "Humanize body has no SEO labels");
  }

  const expanded = await handleUrduNews(
    { action: "expand", urdu, version: "medium", text: medium },
    "expand-body",
    4_600,
    async () =>
      JSON.stringify({
        headline: "Title: Imran Khan Speaks in Lahore",
        intro: "Subtitle: Budget remarks",
        paragraphs: ["Imran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees.", "Meta description: Khan spoke about the budget."],
      }),
    true,
  );
  assert(expanded.status === 200 && expanded.body.success === true, "Expand succeeds");
  if (expanded.body.success) {
    assert(expanded.body.headline === "Imran Khan Speaks in Lahore", "Expand headline stays outside the body");
    const body = String(expanded.body.body);
    assert(body.includes("Imran Khan said in Lahore"), "Expand body keeps the news paragraph");
    assert(!/^(title|subtitle|permalink|meta description|headline)\s*:/im.test(body), "Expand body has no SEO labels");
    assert(!body.includes("Imran Khan Speaks in Lahore"), "Expand body does not repeat the headline");
  }

  resetRateLimits();
  for (let index = 0; index < URDU_NEWS_RATE_MAX; index += 1) {
    const blockedAttempt = await handleUrduNews({}, "burst", 5_000, generate, true);
    assert(blockedAttempt.status === 400, "Invalid requests count toward the limit");
  }
  const blocked = await handleUrduNews({ action: "translate", urdu }, "burst", 5_000, generate, true);
  assert(blocked.status === 429 && blocked.body.success === false, "The 21st request in 15 minutes is rate limited");
  const later = await handleUrduNews({}, "burst", 5_000 + 15 * 60 * 1000, generate, true);
  assert(later.status === 400, "The limit resets after the window");
}
