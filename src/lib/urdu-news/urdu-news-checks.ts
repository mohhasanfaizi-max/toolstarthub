import { resetRateLimits } from "../ai/rate-limit.ts";
import { checkDraftText, checkTranslation, withFactCheck } from "./checks.ts";
import { handleUrduNews, URDU_DRAFT_MAX_CHARS, URDU_NEWS_MAX_CHARS, URDU_NEWS_RATE_MAX, urduNewsMessages } from "./handle.ts";
import { humanizePrompt, translationPrompt } from "./prompts.ts";
import { cleanNewsBody, countWords, englishOnlyRewrite, firstSentences } from "./text.ts";
import { readJsonWithRetry, UrduNewsCallError, withDeadline } from "./json.ts";
import { applySeo, buildMetaDescription, buildMetaTitle, buildTitle, META_DESCRIPTION_MAX, META_TITLE_MAX, TITLE_MAX } from "./limits.ts";
import { extractNumbers, normalizeDigits, numberValues } from "./numbers.ts";
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

function words(count: number): string {
  return Array.from({ length: count }, () => "word").join(" ");
}

function translationFixture() {
  const shortBrief = "Imran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees.";
  return {
    title: "<b>Imran Khan Speaks in Lahore on the Budget</b>",
    versions: {
      brief: { subtitle: "Budget remarks in Lahore", body: shortBrief, meta_description: "Imran Khan spoke in Lahore about a 12 billion rupee provincial budget." },
      medium: { subtitle: "What Imran Khan said in Lahore", body: full, meta_description: "Imran Khan said in Lahore that the provincial budget is 12 billion rupees." },
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
  assert(meta.text === "Imran Khan Speaks in Lahore on the Budget | Tools Star Hub", "Meta title adds the site suffix when the line fits");
  assert(meta.text.length <= META_TITLE_MAX && !meta.droppedSuffix, "A short meta title keeps the suffix inside 60 characters");

  const fitsAlone = buildMetaTitle("Imran Khan Speaks in Lahore on the Budget Today");
  assert(fitsAlone.text === "Imran Khan Speaks in Lahore on the Budget Today", "A title that fits in 60 characters drops the suffix instead of being cut");
  assert(fitsAlone.droppedSuffix && fitsAlone.text.length <= META_TITLE_MAX, "The unsuffixed title stays within 60 characters");

  const petrol = "Prime Minister Shehbaz Sharif Announces 10 Rupees Reduction in Petrol";
  const petrolMeta = buildMetaTitle(petrol);
  assert(
    petrolMeta.text === "Prime Minister Shehbaz Sharif Announces 10 Rupees Reduction",
    "A long petrol headline is cut on a word with no site suffix",
  );
  assert(!petrolMeta.text.endsWith("10") && !petrolMeta.text.includes("|"), "The petrol meta title does not end on 10 or keep the suffix");
  assert(petrolMeta.droppedSuffix && petrolMeta.text.length <= META_TITLE_MAX, "The petrol meta title stays within 60 characters");

  const endsOnNumber = buildMetaTitle("Prime Minister Shehbaz Sharif Confirms Petrol Relief of 10 Rupees Today");
  assert(
    endsOnNumber.text === "Prime Minister Shehbaz Sharif Confirms Petrol Relief",
    "A cut meta title does not stop on a number or on of",
  );
  const endsOnIn = buildMetaTitle("Prime Minister Announces a Nationwide Cut of 10 Rupees in Petrol Prices");
  assert(endsOnIn.text === "Prime Minister Announces a Nationwide Cut of 10 Rupees", "A cut meta title does not stop on in");
  const endsOnAnd = buildMetaTitle("Government Approves Immediate Relief of 10 in Petrol and Diesel Prices");
  assert(endsOnAnd.text === "Government Approves Immediate Relief of 10 in Petrol", "A cut meta title does not stop on and");

  const oversized = buildMetaTitle("International Monetary Fund Reviews Pakistan Budget Talks Today");
  assert(
    oversized.text === "International Monetary Fund Reviews Pakistan Budget Talks",
    "A title over 60 characters is cut on a word and drops the suffix",
  );
  assert(!oversized.text.includes("|") && oversized.text.length <= META_TITLE_MAX, "The cut meta title has no suffix and stays within 60 characters");

  const oneWord = buildMetaTitle("Supercalifragilisticexpialidociousbudgetheadlineword");
  assert(oneWord.text === "Supercalifragilisticexpialidociousbudgetheadlineword" && oneWord.droppedSuffix, "A title that fits alone drops the suffix");
  const hugeWord = buildMetaTitle("A".repeat(70));
  assert(!hugeWord.text.includes("|") && hugeWord.text.length === META_TITLE_MAX && hugeWord.droppedSuffix, "One word longer than 60 characters is cut to 60");

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
  assert(humanPrompt.includes("Do not copy the Urdu"), "Humanize forbids copying the Urdu");
  assert(humanPrompt.includes("The reply is English only"), "Humanize asks for English");
  assert(
    humanPrompt.indexOf("English to rewrite:") > humanPrompt.indexOf("Do not output this text:"),
    "The English body is the last source in the humanize prompt",
  );
  assert(!humanPrompt.includes("Return a headline"), "Humanize does not ask for a headline");
  assert(englishOnlyRewrite(urdu, urdu) === null, "A Urdu echo is not an English rewrite");
  assert(
    englishOnlyRewrite(urdu, `${brief}\n\n${urdu}`)?.includes("Imran Khan") && !englishOnlyRewrite(urdu, `${brief}\n\n${urdu}`)?.includes("عمران"),
    "A pasted Urdu copy is removed from an English rewrite",
  );

  const lengthRule = "Never add words or facts to reach a length. If the Urdu is short, Brief and Medium may be as short as the facts allow, even identical to Full.";
  const hospitalUrdu = "وزیراعظم نے کہا کہ دو نئے ہسپتال بنائے جائیں گے۔";
  const hospitalPrompt = translationPrompt(hospitalUrdu);
  assert(hospitalPrompt.includes(lengthRule), "The translation prompt forbids padding a short story");
  assert(!hospitalPrompt.includes("25 to 40 words") && !hospitalPrompt.includes("60 to 100 words"), "Word ranges are not written as targets");
  assert(hospitalPrompt.includes("at most 40 words") && hospitalPrompt.includes("at most 100 words"), "Brief and Medium keep upper limits");

  const quotedSentences = 'He said, "Go now. Then wait." The plan is two clinics.';
  assert(firstSentences(quotedSentences, 2) === quotedSentences, "A period inside a quotation does not end the sentence");
  assert(firstSentences("One clinic. Two clinics. Three clinics.", 2) === "One clinic. Two clinics.", "The first two sentences stop before the third");
  assert(firstSentences('He said, "Go now." Then he left.', 1) === 'He said, "Go now."', "A closing quotation can end the sentence");

  const hospitalFull = "The prime minister said that two new hospitals will be built.";
  const paddedBrief = "The prime minister said that two new hospitals will be built in the healthcare sector over the next two years to improve access.";
  const paddedMedium = `${paddedBrief} Officials said the work starts next month and finishes within three years. The healthcare sector will receive new staff.`;
  assert(countWords(hospitalFull) <= 25 && countWords(paddedBrief) > countWords(hospitalFull) && countWords(paddedMedium) > countWords(hospitalFull), "The hospital fixture is one short sentence with padded drafts");
  const capped = applySeo({
    title: "Two New Hospitals",
    versions: {
      brief: { subtitle: "Hospitals", body: paddedBrief, meta_description: "The prime minister said two hospitals will be built." },
      medium: { subtitle: "Hospitals", body: paddedMedium, meta_description: "The prime minister said two hospitals will be built." },
      average: { subtitle: "Hospitals", body: hospitalFull, meta_description: "The prime minister said two hospitals will be built." },
    },
  });
  assert(capped.versions.brief.body === hospitalFull && capped.versions.medium.body === hospitalFull, "Padded brief and medium on a short story are replaced with Full");
  assert(capped.versions.brief.word_count === countWords(hospitalFull) && capped.versions.medium.word_count === countWords(hospitalFull), "The replaced versions are not longer than Full");
  assert(
    capped.notes.some((note) => note.level === "info" && note.message.includes("first two sentences")) &&
      capped.notes.some((note) => note.level === "info" && note.message.includes("Medium uses Full")),
    "Replacing a padded short story adds info checks",
  );
  assert(!capped.notes.some((note) => note.level === "warning"), "A short story replacement is not a warning");

  const exactFull = `${hospitalFull} ${words(14)}`;
  assert(countWords(exactFull) === 25, "The boundary fixture is 25 words");
  const exact = applySeo({
    title: "Two New Hospitals",
    versions: {
      brief: { subtitle: "Hospitals", body: words(30), meta_description: "The prime minister said two hospitals will be built." },
      medium: { subtitle: "Hospitals", body: hospitalFull, meta_description: "The prime minister said two hospitals will be built." },
      average: { subtitle: "Hospitals", body: exactFull, meta_description: "The prime minister said two hospitals will be built." },
    },
  });
  assert(exact.versions.brief.body === exactFull && exact.versions.brief.word_count <= 25, "A 25-word Full caps a longer brief at the first two sentences");
  assert(exact.versions.medium.body === hospitalFull, "Medium that is already no longer than Full stays as written");

  const midFull = `Imran Khan said the budget is 12 billion rupees. ${words(40)}`;
  const midBrief = words(20);
  const midMedium = words(80);
  assert(countWords(midFull) > 25 && countWords(midFull) <= 60 && countWords(midMedium) > countWords(midFull), "The mid-length fixture sits between the brief and medium floors");
  const mid = applySeo({
    title: "Budget Update",
    versions: {
      brief: { subtitle: "Budget", body: midBrief, meta_description: "A budget update." },
      medium: { subtitle: "Budget", body: midMedium, meta_description: "A budget update." },
      average: { subtitle: "Budget", body: midFull, meta_description: "A budget update." },
    },
  });
  assert(mid.versions.brief.body === midBrief, "Brief is left alone when it does not exceed Full");
  assert(mid.versions.medium.body === midFull, "Medium is replaced with Full when Full is at or below 60 words");
  assert(mid.notes.some((note) => note.level === "info" && note.message.includes("Medium uses Full")), "The medium replacement is an info check");
  assert(!mid.notes.some((note) => note.message.includes("first two sentences")), "Brief is not replaced when it is already shorter than Full");

  const suffix = applySeo({
    title: "Imran Khan Speaks in Lahore on the Budget Today",
    versions: {
      brief: { subtitle: "Lahore", body: words(30), meta_description: "Imran Khan spoke in Lahore." },
      medium: { subtitle: "Lahore", body: words(70), meta_description: "Imran Khan spoke in Lahore." },
      average: { subtitle: "Lahore", body: words(80), meta_description: "Imran Khan spoke in Lahore." },
    },
  });
  assert(suffix.notes.some((note) => note.level === "info" && note.message.includes("| Tools Star Hub")), "Dropping the meta title suffix is an info check");
  assert(!suffix.notes.some((note) => note.level === "warning" && note.message.includes("Tools Star Hub")), "Dropping the meta title suffix is not a warning");

  const lengthDraft = (briefBody: string, mediumBody: string, fullBody: string) => ({
    title: "Two Hospitals",
    meta_title: "Two Hospitals",
    versions: {
      brief: { subtitle: "", body: briefBody, meta_description: "" },
      medium: { subtitle: "", body: mediumBody, meta_description: "" },
      average: { subtitle: "", body: fullBody, meta_description: "" },
    },
  });
  const shortStory = checkTranslation(hospitalUrdu, lengthDraft(hospitalFull, hospitalFull, hospitalFull));
  assert(!shortStory.checks.some((item) => item.message.includes("range is")), "A short Full does not warn that Brief or Medium is below the range");
  assert(
    shortStory.status === "ok",
    `A faithful short story passes (${shortStory.checks.filter((item) => item.level !== "ok" && item.level !== "info").map((item) => item.message).join("; ")})`,
  );
  const longFull = `${hospitalFull} ${words(70)}`;
  const longStory = checkTranslation(hospitalUrdu, lengthDraft(words(10), longFull, longFull));
  assert(
    longStory.checks.some((item) => item.level === "warning" && item.message.includes("range is 25 to 40")),
    "A long story still warns when Brief is under 25 words",
  );
  const overBrief = checkTranslation(hospitalUrdu, lengthDraft(words(45), words(70), words(90)));
  assert(
    overBrief.checks.some((item) => item.level === "warning" && item.message.includes("range is 25 to 40")),
    "Brief over 40 words still warns",
  );

  assert(normalizeDigits("۱۲") === "12" && normalizeDigits("١٢") === "12", "Urdu and Arabic-Indic digits become Western digits");
  assert(extractNumbers("۱٬۲۰۰ and 3.5").join(",") === "1200,3.5", "Thousands separators are ignored and decimals stay");

  const urduWordNumbers: Record<string, string> = {
    ایک: "1",
    دو: "2",
    تین: "3",
    چار: "4",
    پانچ: "5",
    چھ: "6",
    سات: "7",
    آٹھ: "8",
    نو: "9",
    دس: "10",
    گیارہ: "11",
    بارہ: "12",
    تیرہ: "13",
    چودہ: "14",
    پندرہ: "15",
    سولہ: "16",
    سترہ: "17",
    اٹھارہ: "18",
    انیس: "19",
    بیس: "20",
    پچاس: "50",
  };
  for (const [word, digit] of Object.entries(urduWordNumbers)) {
    assert(numberValues(`شہر ${word} کلینک`).includes(digit), `${word} counts as ${digit}`);
  }
  assert(numberValues("نوجوان آیا").includes("9") === false, "نو inside a longer word is not a number");
  assert(numberValues("یہ نو بجے ہے").includes("9"), "A whole word نو counts as 9");
  assert(numberValues("دو ہزار روپے").includes("2000") && !numberValues("دو ہزار روپے").includes("2"), "دو ہزار is 2000, not a bare 2");
  assert(numberValues("تین سو").includes("300"), "تین سو is 300");
  assert(numberValues("دس ہزار").includes("10000"), "دس ہزار is 10000");
  assert(numberValues("ایک لاکھ").includes("100000"), "ایک لاکھ is 100000");
  assert(numberValues("دو کروڑ").includes("20000000"), "دو کروڑ is 20000000");
  assert(numberValues("تین ارب").includes("3000000000"), "تین ارب is 3000000000");
  assert(numberValues("ہزار").includes("1000") && numberValues("سو").includes("100"), "A bare ہزار or سو keeps its value");
  assert(numberValues("twenty clinics").includes("20") && !numberValues("twenty").includes("2"), "English twenty counts as 20, not 2");
  assert(numberValues("The city will open two clinics.").includes("2"), "English two counts as 2");

  const wordMatch = checkDraftText("شہر دو کلینک کھولے گا", "The city will open 2 clinics.", "article");
  assert(!wordMatch.checks.some((item) => item.message.includes("2,") || item.message.includes("check: 2")), "دو in the Urdu covers an English 2");

  const smallWarning = checkDraftText("شہر کلینک کھولے گا", "The city will open 2 clinics.", "article");
  assert(
    smallWarning.checks.some((item) => item.level === "warning" && item.message === "check: 2 may be written in words in the Urdu"),
    "A small English number missing from the Urdu is a warning",
  );
  assert(!smallWarning.checks.some((item) => item.level === "error" && item.message.includes("2")), "That small number is not an error by itself");

  const largeError = checkDraftText("شہر کلینک کھولے گا", "The city will open 20 clinics.", "article");
  assert(
    largeError.checks.some((item) => item.level === "error" && item.message === "The article has 20, which is not in the Urdu."),
    "A number above 10 that is missing from the Urdu stays an error",
  );

  const flagged = withFactCheck(smallWarning, [{ version: "medium", type: "number", detail: "The number 2 was added." }]);
  assert(
    flagged.checks.some((item) => item.level === "error" && item.message === "check: 2 may be written in words in the Urdu"),
    "A small number the fact check also flags becomes an error",
  );

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

  const hospital = await handleUrduNews(
    { action: "translate", urdu: hospitalUrdu },
    "short-story",
    4_200,
    async (_prompt, schema) => {
      if (schema === "fact") return JSON.stringify({ issues: [] });
      return JSON.stringify({
        title: "Two New Hospitals",
        versions: {
          brief: { subtitle: "Hospitals", body: paddedBrief, meta_description: "The prime minister said two hospitals will be built." },
          medium: { subtitle: "Hospitals", body: paddedMedium, meta_description: "The prime minister said two hospitals will be built." },
          average: { subtitle: "Hospitals", body: hospitalFull, meta_description: "The prime minister said two hospitals will be built." },
        },
        facts: [],
      });
    },
    true,
  );
  assert(hospital.status === 200 && hospital.body.success === true, "A padded short story still returns a translation");
  if (hospital.body.success) {
    const versions = hospital.body.versions as { brief: { body: string }; medium: { body: string } };
    const verification = hospital.body.verification as { status: string; checks: Array<{ level: string; message: string }> };
    assert(versions.brief.body === hospitalFull && versions.medium.body === hospitalFull, "The API stores the unpadded brief and medium");
    assert(verification.status === "ok", "An info check does not mark the short story needs review");
    assert(
      verification.checks.some((item) => item.level === "info" && item.message.includes("first two sentences")),
      "The API reports the brief cap as info",
    );
    assert(!verification.checks.some((item) => item.level === "warning" && item.message.includes("range is")), "The API does not warn that the short story is below the range");
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

  const probe = await handleUrduNews(
    { action: "humanize", text: medium, version: "medium" },
    "humanize-probe",
    4_700,
    async () => {
      throw new Error("should not call");
    },
    true,
  );
  assert(
    probe.status === 400 && probe.body.success === false && probe.body.error === urduNewsMessages.invalid,
    "Humanize without urdu and with version is rejected",
  );

  let versionCalls = 0;
  const versionInstead = await handleUrduNews(
    { action: "humanize", urdu, version: "medium", text: medium },
    "humanize-version",
    4_710,
    async () => {
      versionCalls += 1;
      return JSON.stringify({ text: medium });
    },
    true,
  );
  assert(versionInstead.status === 400 && versionCalls === 0, "Humanize does not read version in place of target");

  const blankDraft = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: "   " },
    "humanize-empty",
    4_720,
    async () => {
      throw new Error("should not call");
    },
    true,
  );
  assert(blankDraft.status === 400 && blankDraft.body.success === false && blankDraft.body.error === urduNewsMessages.draftEmpty, "Empty English draft is rejected");

  const longDraft = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: "word ".repeat(URDU_DRAFT_MAX_CHARS) },
    "humanize-long",
    4_730,
    async () => {
      throw new Error("should not call");
    },
    true,
  );
  assert(longDraft.status === 400 && longDraft.body.success === false && longDraft.body.error === urduNewsMessages.draftLong, "A draft over 16,000 characters is rejected");

  const shortRewrite = "Imran Khan said in Lahore on Monday that the budget is 12 billion rupees.";
  const short = await handleUrduNews(
    { action: "humanize", urdu, target: "brief", text: shortRewrite },
    "humanize-short",
    4_740,
    async () => JSON.stringify({ text: shortRewrite }),
    true,
  );
  assert(short.status === 200 && short.body.success === true && short.body.text === shortRewrite, "A short English draft can be returned when it is already English");

  const longEnglish = `${medium} ${words(400)}`;
  const longOk = await handleUrduNews(
    { action: "humanize", urdu, target: "average", text: longEnglish },
    "humanize-long-ok",
    4_745,
    async () => JSON.stringify({ text: longEnglish }),
    true,
  );
  assert(longOk.status === 200 && longOk.body.success === true && longOk.body.text === longEnglish, "A long English draft is accepted");

  let echoCalls = 0;
  const quoted = 'Imran Khan said in Lahore on Monday that the provincial budget is 12 billion rupees. He said, "The city will open two clinics this year."';
  const echoed = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: medium },
    "humanize-echo",
    4_750,
    async () => {
      echoCalls += 1;
      if (echoCalls === 1) return JSON.stringify({ text: urdu });
      return JSON.stringify({ text: quoted });
    },
    true,
  );
  assert(echoed.status === 200 && echoed.body.success === true && echoCalls === 2, "A Urdu echo is retried once");
  if (echoed.body.success) {
    const text = String(echoed.body.text);
    assert(!/[\u0600-\u06FF]/.test(text), "The retry is English, not the Urdu rewritten into the body");
    assert(text.includes("Imran Khan") && text.includes("Lahore") && text.includes("Monday") && text.includes("12"), "Names, the place, the date, and the figure stay");
    assert(text.includes("The city will open two clinics this year."), "The quote stays");
  }

  let urduCalls = 0;
  const stillUrdu = await handleUrduNews(
    { action: "humanize", urdu, target: "article", text: medium },
    "humanize-urdu",
    4_760,
    async () => {
      urduCalls += 1;
      return JSON.stringify({ text: urdu });
    },
    true,
  );
  assert(
    stillUrdu.status === 502 && stillUrdu.body.success === false && stillUrdu.body.error === urduNewsMessages.notEnglish,
    "Urdu rewritten as the body is an error",
  );
  assert(!("text" in stillUrdu.body) && urduCalls === 2, "A failed humanize has no fake body and retries once");

  const timedOut = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: medium },
    "humanize-timeout",
    4_770,
    async () => {
      throw new UrduNewsCallError("timeout");
    },
    true,
  );
  assert(timedOut.status === 504 && timedOut.body.success === false && timedOut.body.error === urduNewsMessages.timeout, "A Gemini timeout is a clear error");
  assert(!("text" in timedOut.body), "A timeout has no fake body");

  const failedCall = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: medium },
    "humanize-fail",
    4_780,
    async () => {
      throw new UrduNewsCallError("api");
    },
    true,
  );
  assert(failedCall.status === 502 && failedCall.body.success === false && failedCall.body.error === urduNewsMessages.failed, "A Gemini failure is a clear error");
  assert(!("text" in failedCall.body), "A Gemini failure has no fake body");

  const badHumanize = await handleUrduNews(
    { action: "humanize", urdu, target: "medium", text: medium },
    "humanize-bad-json",
    4_790,
    async () => "not-json",
    true,
  );
  assert(badHumanize.status === 502 && badHumanize.body.success === false && badHumanize.body.error === urduNewsMessages.badJson, "Unreadable humanize JSON is an error");
  assert(!("text" in badHumanize.body), "Unreadable humanize JSON has no fake body");

  const invalidTarget = await handleUrduNews(
    { action: "humanize", urdu, target: "full", text: medium },
    "humanize-full-label",
    4_800,
    async () => {
      throw new Error("should not call");
    },
    true,
  );
  assert(invalidTarget.status === 400 && invalidTarget.body.success === false && invalidTarget.body.error === urduNewsMessages.invalid, "The Full label is not a humanize target");

  let deadlineHit = false;
  try {
    await withDeadline(new Promise((resolve) => setTimeout(() => resolve("late"), 40)), 10);
  } catch (error) {
    deadlineHit = error instanceof UrduNewsCallError && error.kind === "timeout";
  }
  assert(deadlineHit, "A hung Gemini call times out");
  assert(await withDeadline(Promise.resolve("ok"), 50) === "ok", "A finished Gemini call is returned");

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
