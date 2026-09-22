import { calculateAge, parseISODate } from "./age.ts";
import { decodeBase64, encodeBase64 } from "./base64.ts";
import { convertCase } from "./case-convert.ts";
import { colorFromRgb, parseCssColor } from "./color.ts";
import { fitCropToAspect, moveCrop, resizeCrop } from "./crop.ts";
import { minifyCss } from "./css-minify.ts";
import { calculateDiscount } from "./discount.ts";
import { decodeHtml, encodeHtml } from "./html-codec.ts";
import { minifyHtml } from "./html-minify.ts";
import {
  formatBytes,
  heightForWidth,
  inferImageType,
  looksLikeSupportedImage,
  parseDimension,
  parseHexColor,
  parseQuality,
  sizeReductionPercent,
  validateImageFile,
  widthForHeight,
} from "./image.ts";
import { minifyJavaScript } from "./javascript-minify.ts";
import { formatJson, minifyJson, validateJson } from "./json.ts";
import { generateLorem } from "./lorem.ts";
import { minifyStats } from "./minify-stats.ts";
import {
  generatePassword,
  parsePasswordLength,
  PASSWORD_MAX,
} from "./password.ts";
import { looksLikePdf, parsePageSelection, pdfScaleForPage, validatePdfBytes, validatePdfFile } from "./pdf.ts";
import { calculatePercentage } from "./percentage.ts";
import { calculatePercentageChange } from "./percentage-change.ts";
import { looksLikeUrl, validateQrText } from "./qr.ts";
import { slugify } from "./slug.ts";
import { getTextStats } from "./text-stats.ts";
import {
  currentUnix,
  dateTimeToUnix,
  looksLikeMilliseconds,
  parseUnixTimestamp,
} from "./timestamp.ts";
import {
  convertLinear,
  convertTemperature,
  lengthUnits,
} from "./units.ts";
import { decodeUrlComponent, encodeUrlComponent } from "./url-codec.ts";
import { buildUtmUrl } from "./utm.ts";
import { generateUuids, isUuidV4, UUID_MAX } from "./uuid.ts";
import { BOX_SHADOW_DEFAULT, buildBoxShadowCss } from "./box-shadow.ts";
import { analyzePixels, parseColorCount } from "./color-analyze.ts";
import { evaluateContrast } from "./contrast.ts";
import { buildGradientCss, defaultGradient } from "./gradient.ts";
import { validateImagePdfList } from "./image-to-pdf.ts";
import { moveItem } from "./list.ts";
import { countPdfPages, mergePdfs, splitPdf } from "./pdf-edit.ts";
import { imageDrawRect, pageDimensions } from "./pdf-layout.ts";
import { parsePageRanges } from "./pdf-range.ts";
import { compressPdfBytes } from "./pdf-compress.ts";
import { itemsToPlainText, joinExtractedPages, parsePdfTextPages } from "./pdf-text.ts";
import { hasDocumentMetadata, readPdfMetadata, stripPdfMetadata } from "./pdf-meta.ts";
import { buildTextPdf, toPdfSafeText } from "./text-to-pdf.ts";
import { markdownToHtml, sanitizeHref } from "./markdown.ts";
import { htmlToMarkdown } from "./html-markdown.ts";
import { diffText } from "./text-diff.ts";
import { removeDuplicateLines } from "./duplicate-lines.ts";
import { DEFAULT_WHITESPACE_OPTIONS, cleanWhitespace } from "./whitespace.ts";
import { sortLines } from "./line-sort.ts";
import { encodeQrPayload } from "./qr-payload.ts";
import {
  generateRandomNumbers,
  parseRandomBound,
  parseRandomCount,
  RANDOM_COUNT_MAX,
} from "./random.ts";
import { PDFDocument } from "pdf-lib";
import { memoryStorage } from "../storage/safe-storage.ts";
import {
  readFavoriteSlugs,
  toggleFavoriteSlug,
} from "../storage/favorites.ts";
import {
  RECENTS_MAX,
  readRecentTools,
  recordRecentTool,
} from "../storage/recents.ts";
import {
  boundedSearchParams,
  MAX_SHARE_QUERY_LENGTH,
  parseBoxShadowParams,
  parseContrastParams,
  parseGradientParams,
  SENSITIVE_PARAM_KEYS,
} from "./url-state.ts";
import { serializeJsonLd } from "../serialize-json-ld.ts";
import { searchTools, tools, getRelatedTools, getToolBySlug, getNewTools } from "../../data/tools.ts";
import { filterToolsByDiscovery } from "../../data/discovery.ts";
import { categories } from "../../data/categories.ts";
import { guides } from "../../data/guides.ts";
import { getToolContent } from "../../data/tool-content.ts";
import { toolQuickAnswers } from "../../data/tool-answers.ts";
import { PRODUCTION_SITE_URL, siteConfig, siteContact } from "../site.ts";
import { getGuideContent } from "../../data/guide-content.ts";
import {
  bannedPhraseIssues,
  collectText,
  markdownFormattingIssues,
} from "../content-style.ts";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function almostEqual(a: number, b: number, digits = 8) {
  return Math.abs(a - b) < 10 ** -digits;
}

const of = calculatePercentage({ mode: "of", x: "15", y: "80" });
assert(of.ok && of.result === 12, "15% of 80 should be 12");

const empty = calculatePercentage({ mode: "of", x: "", y: "10" });
assert(!empty.ok, "Empty percentage input should fail");

const invalid = calculatePercentage({ mode: "of", x: "nope", y: "10" });
assert(!invalid.ok, "Invalid percentage input should fail");

const zeroWhole = calculatePercentage({ mode: "is-what", x: "5", y: "0" });
assert(!zeroWhole.ok, "X is what percent of 0 should fail");

const isWhat = calculatePercentage({ mode: "is-what", x: "12", y: "40" });
assert(isWhat.ok && isWhat.result === 30, "12 is 30% of 40");

const increase = calculatePercentage({
  mode: "change-by",
  x: "10",
  y: "200",
  direction: "increase",
});
assert(increase.ok && increase.result === 220, "200 increased by 10% should be 220");

const decrease = calculatePercentage({
  mode: "change-by",
  x: "10",
  y: "200",
  direction: "decrease",
});
assert(decrease.ok && decrease.result === 180, "200 decreased by 10% should be 180");

const changeUp = calculatePercentageChange("80", "100");
assert(changeUp.ok && changeUp.change === 25, "80 to 100 is +25%");

const changeDown = calculatePercentageChange("100", "80");
assert(changeDown.ok && changeDown.change === -20, "100 to 80 is -20%");

const changeZero = calculatePercentageChange("0", "10");
assert(!changeZero.ok, "Change from 0 to 10 should fail");

const changeBothZero = calculatePercentageChange("0", "0");
assert(changeBothZero.ok && changeBothZero.change === 0, "0 to 0 is 0%");

const discount = calculateDiscount("50", "20");
assert(
  discount.ok && discount.discountAmount === 10 && discount.finalPrice === 40,
  "20% off 50 should be 10 off and 40 final",
);

const discountOver = calculateDiscount("50", "150");
assert(!discountOver.ok, "Discount over 100% should fail");

const negativePrice = calculateDiscount("-5", "10");
assert(!negativePrice.ok, "Negative price should fail");

const sameDay = calculateAge("2000-01-01", "2000-01-01");
assert(
  sameDay.ok &&
    sameDay.years === 0 &&
    sameDay.months === 0 &&
    sameDay.days === 0 &&
    sameDay.totalDays === 0,
  "Same-day age should be 0",
);

const fullYears = calculateAge("2000-01-01", "2026-01-01");
assert(fullYears.ok && fullYears.years === 26 && fullYears.totalDays === 9497, "2000-01-01 to 2026-01-01");

const leap = calculateAge("2000-02-29", "2001-02-28");
assert(
  leap.ok && leap.years === 0 && leap.months === 11 && leap.days === 30,
  "Leap day to next non-leap Feb 28",
);

const invalidDate = parseISODate("2023-02-29");
assert(invalidDate === null, "2023-02-29 is not a valid date");

const future = calculateAge("2026-09-21", "2026-09-20");
assert(!future.ok, "Birth after as-of should fail");

const emptyText = getTextStats("");
assert(
  emptyText.words === 0 &&
    emptyText.characters === 0 &&
    emptyText.sentences === 0 &&
    emptyText.paragraphs === 0 &&
    emptyText.lines === 0,
  "Empty text stats should be zero",
);

const spaced = getTextStats("  hello   world  ");
assert(spaced.words === 2, "Multiple spaces should not create extra words");

const unicode = getTextStats("A😀");
assert(unicode.characters === 2, "Letter plus emoji should be 2 characters");

const sentences = getTextStats("Hello. How are you? Fine!");
assert(sentences.sentences === 3, "Three sentences should be counted");

const paragraphs = getTextStats("One\n\nTwo");
assert(paragraphs.paragraphs === 2, "Blank line should split paragraphs");

const lines = getTextStats("a\nb\n");
assert(lines.lines === 3, "Trailing newline should add a line");

const formatted = formatJson('{"a":1}');
assert(formatted.ok && formatted.output.includes("\n"), "Valid JSON should format");

const nested = formatJson('{"a":{"b":[1,2]}}');
assert(nested.ok, "Nested JSON should format");

const invalidJson = formatJson("{");
assert(!invalidJson.ok && invalidJson.error.includes("Invalid JSON"), "Invalid JSON should error");

const emptyJson = formatJson("");
assert(!emptyJson.ok, "Empty JSON should error");

const minified = minifyJson('{\n  "a": 1\n}');
assert(minified.ok && minified.output === '{"a":1}', "Minify should remove whitespace");

const validMessage = validateJson("[1,2,3]");
assert(validMessage.ok, "Array JSON should validate");

const escaped = formatJson('{"q":"He said \\"hi\\""}');
assert(escaped.ok, "Escaped quotes should parse");

const encoded = encodeBase64("Hi");
assert(encoded.ok && encoded.output === "SGk=", "Hi should encode to SGk=");

const unicodeB64 = encodeBase64("Émoji 😀");
assert(unicodeB64.ok, "Unicode should encode");
const decodedUnicode = decodeBase64(unicodeB64.output);
assert(decodedUnicode.ok && decodedUnicode.output === "Émoji 😀", "Unicode should round-trip");

const emptyB64 = decodeBase64("");
assert(!emptyB64.ok, "Empty Base64 should fail");

const invalidB64 = decodeBase64("@@@");
assert(!invalidB64.ok, "Invalid Base64 should fail");

const meters = convertLinear("1", "meter", "centimeter", lengthUnits);
assert(meters.ok && meters.value === 100, "1 meter should be 100 cm");

const inches = convertLinear("1", "inch", "centimeter", lengthUnits);
assert(inches.ok && almostEqual(inches.value, 2.54), "1 inch should be 2.54 cm");

const freezing = convertTemperature("0", "celsius", "fahrenheit");
assert(freezing.ok && almostEqual(freezing.value, 32), "0 C should be 32 F");

const kelvin = convertTemperature("0", "celsius", "kelvin");
assert(kelvin.ok && almostEqual(kelvin.value, 273.15), "0 C should be 273.15 K");

const belowZero = convertTemperature("-300", "celsius", "kelvin");
assert(!belowZero.ok, "Below absolute zero should fail");

const utm = buildUtmUrl({
  url: "https://example.com/",
  source: "google",
  medium: "cpc",
  campaign: "sale",
  term: "",
  content: "",
});
assert(
  utm.ok &&
    utm.url === "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale",
  "Basic UTM URL should match",
);

const withExisting = buildUtmUrl({
  url: "https://example.com/page?ref=nav",
  source: "newsletter",
  medium: "email",
  campaign: "launch",
  term: "",
  content: "",
});
assert(
  withExisting.ok &&
    withExisting.url.includes("ref=nav") &&
    withExisting.url.includes("utm_source=newsletter"),
  "Existing query params should be kept",
);

const spacedUtm = buildUtmUrl({
  url: "example.com",
  source: "google ads",
  medium: "cpc",
  campaign: "spring sale",
  term: "running shoes",
  content: "",
});
assert(
  spacedUtm.ok && spacedUtm.url.includes("utm_source=google+ads"),
  "Spaces in UTM values should be encoded",
);

const badUrl = buildUtmUrl({
  url: "not a url",
  source: "x",
  medium: "y",
  campaign: "z",
  term: "",
  content: "",
});
assert(!badUrl.ok, "Invalid URL should fail");

assert(
  validateImageFile(null).ok === false,
  "Empty image selection should fail",
);
assert(
  !validateImageFile({ name: "notes.txt", type: "text/plain", size: 12 }).ok,
  "Unsupported image type should fail",
);
assert(
  inferImageType({ name: "photo.JPG", type: "", size: 10 }) === "image/jpeg",
  "JPG extension should infer JPEG",
);
assert(
  validateImageFile({ name: "empty.png", type: "image/png", size: 0 }).ok === false,
  "Empty image file should fail",
);
assert(
  validateImageFile({
    name: "huge.jpg",
    type: "image/jpeg",
    size: 26 * 1024 * 1024,
  }).ok === false,
  "Oversized image should fail",
);
assert(
  validateImageFile({ name: "ok.webp", type: "image/webp", size: 1200 }).ok,
  "WebP should be accepted",
);
assert(formatBytes(0) === "0 B", "0 bytes should format");
assert(formatBytes(2048) === "2.0 KB", "2048 bytes should be 2.0 KB");
assert(sizeReductionPercent(100, 40) === 60, "60% reduction");
assert(sizeReductionPercent(0, 10) === null, "Reduction from 0 should be null");
assert(!parseDimension("", "width").ok, "Empty width should fail");
assert(!parseDimension("0", "width").ok, "Zero width should fail");
assert(!parseDimension("-1", "height").ok, "Negative height should fail");
assert(!parseDimension("12.5", "width").ok, "Decimal width should fail");
assert(parseDimension("800", "width").ok, "800 width should pass");
assert(!parseQuality(5).ok, "Quality below 10 should fail");
assert(parseQuality(80).ok, "Quality 80 should pass");
assert(!parseHexColor("#fff").ok, "Short hex should fail");
assert(parseHexColor("#ffffff").ok, "White hex should pass");
assert(heightForWidth(100, 200, 100) === 50, "Locked height from width");
assert(widthForHeight(50, 200, 100) === 100, "Locked width from height");

const freeCrop = fitCropToAspect(200, 100, "free");
assert(freeCrop.width <= 200 && freeCrop.height <= 100, "Free crop should fit");
const squareCrop = fitCropToAspect(200, 100, "1:1");
assert(squareCrop.width === squareCrop.height, "1:1 crop should be square");
const wideCrop = fitCropToAspect(100, 100, "16:9");
assert(wideCrop.width > wideCrop.height, "16:9 crop should be wide");
const fourThree = fitCropToAspect(400, 400, "4:3");
assert(
  Math.abs(fourThree.width / fourThree.height - 4 / 3) < 0.05,
  "4:3 crop should keep ratio",
);
const moved = moveCrop({ x: 10, y: 10, width: 20, height: 20 }, 1000, 0, 100, 100);
assert(moved.x + moved.width <= 100, "Moved crop should stay in bounds");
const resized = resizeCrop(
  { x: 10, y: 10, width: 40, height: 40 },
  "se",
  10,
  10,
  200,
  200,
  "1:1",
);
assert(resized.width === resized.height, "Resized 1:1 crop should stay square");

const oneUuid = generateUuids("1");
assert(oneUuid.ok && oneUuid.values.length === 1 && isUuidV4(oneUuid.values[0]), "Single UUID v4");
const manyUuids = generateUuids("5");
assert(manyUuids.ok && manyUuids.values.length === 5, "Five UUIDs");
assert(new Set(manyUuids.values).size === 5, "UUIDs should not all match");
assert(!generateUuids("0").ok, "Zero UUIDs should fail");
assert(!generateUuids(String(UUID_MAX + 1)).ok, "Over-limit UUIDs should fail");
assert(!generateUuids("1.5").ok, "Fractional UUID count should fail");

const encodedUrl = encodeUrlComponent("a b&c");
assert(encodedUrl.ok && encodedUrl.output === "a%20b%26c", "Spaces and ampersands should encode");
const unicodeUrl = encodeUrlComponent("Café 東京");
assert(unicodeUrl.ok && decodeUrlComponent(unicodeUrl.output).ok, "Unicode URL should round-trip");
assert(!decodeUrlComponent("%E0%A4%A").ok, "Malformed percent encoding should fail");
const emptyDecode = decodeUrlComponent("");
assert(emptyDecode.ok && emptyDecode.output === "", "Empty decode is empty");

const epoch = parseUnixTimestamp("0", "seconds");
assert(epoch.ok && epoch.iso === "1970-01-01T00:00:00.000Z", "Epoch seconds");
const epochMs = parseUnixTimestamp("0", "milliseconds");
assert(epochMs.ok && epochMs.iso === "1970-01-01T00:00:00.000Z", "Epoch milliseconds");
const known = parseUnixTimestamp("1710000000", "seconds");
assert(known.ok && known.iso === "2024-03-09T16:00:00.000Z", "Known second timestamp");
const knownMs = parseUnixTimestamp("1710000000000", "milliseconds");
assert(knownMs.ok && knownMs.iso === "2024-03-09T16:00:00.000Z", "Known millisecond timestamp");
assert(!parseUnixTimestamp("", "seconds").ok, "Empty timestamp should fail");
assert(!parseUnixTimestamp("nope", "milliseconds").ok, "Invalid timestamp should fail");
assert(looksLikeMilliseconds(1710000000000), "1.71e12 looks like milliseconds");
const utcDate = dateTimeToUnix("2024-03-09", "16:00:00", "utc");
assert(utcDate.ok && utcDate.seconds === 1710000000, "UTC date to timestamp");
assert(!dateTimeToUnix("", "12:00", "local").ok, "Empty date should fail");
assert(!dateTimeToUnix("2024-03-09", "25:00", "utc").ok, "Invalid time should fail");
const now = currentUnix();
assert(now.milliseconds >= now.seconds * 1000, "Current timestamp should be coherent");

assert(
  slugify("How to Compress an Image Without Losing Quality") ===
    "how-to-compress-an-image-without-losing-quality",
  "Title should slugify",
);
assert(slugify("  hello   world  ") === "hello-world", "Multiple spaces become one hyphen");
assert(slugify("Hello!!!World") === "hello-world", "Punctuation becomes hyphens");
assert(slugify("Café déjà vu") === "cafe-deja-vu", "Accents should be stripped");
assert(slugify("你好 世界") === "你好-世界", "CJK letters should be kept");
assert(slugify("") === "", "Empty slug stays empty");
assert(slugify("---") === "", "Only punctuation becomes empty");

assert(convertCase("hello", "upper") === "HELLO", "Uppercase");
assert(convertCase("HELLO", "lower") === "hello", "Lowercase");
assert(convertCase("hello world", "title") === "Hello World", "Title case");
assert(
  convertCase("HELLO. HOW ARE YOU?", "sentence") === "Hello. How are you?",
  "Sentence case",
);
assert(convertCase("Hello world example", "camel") === "helloWorldExample", "camelCase");
assert(convertCase("Hello world example", "pascal") === "HelloWorldExample", "PascalCase");
assert(convertCase("Hello world example", "snake") === "hello_world_example", "snake_case");
assert(convertCase("Hello world example", "kebab") === "hello-world-example", "kebab-case");
assert(convertCase("", "camel") === "", "Empty case conversion");
assert(convertCase("  multiple   spaces  ", "kebab") === "multiple-spaces", "Case converter whitespace");
assert(convertCase("Émile 😀 test", "camel").startsWith("emile"), "Unicode case conversion");

const seeded = (() => {
  let i = 0;
  return () => {
    i += 1;
    return (i % 10) / 10;
  };
})();
const loremWords = generateLorem("words", "8", seeded);
assert(loremWords.ok && loremWords.output.split(/\s+/).length === 8, "8 lorem words");
const loremSentences = generateLorem("sentences", "2", seeded);
assert(loremSentences.ok && loremSentences.output.includes("Lorem ipsum"), "Classic opening sentence");
const loremParagraphs = generateLorem("paragraphs", "2", seeded);
assert(loremParagraphs.ok && loremParagraphs.output.split(/\n\n/).length === 2, "Two paragraphs");
assert(!generateLorem("words", "0", seeded).ok, "Zero lorem words should fail");
assert(!generateLorem("paragraphs", "21", seeded).ok, "Over-limit paragraphs should fail");
assert(!generateLorem("sentences", "", seeded).ok, "Empty lorem quantity should fail");

const hex = parseCssColor("#336699");
assert(hex.ok && hex.color.rgbCss === "rgb(51, 102, 153)", "#336699 to RGB");
assert(hex.ok && hex.color.hex === "#336699", "#336699 stays normalized");
const shortHex = parseCssColor("fff");
assert(shortHex.ok && shortHex.color.rgbCss === "rgb(255, 255, 255)", "3-digit hex");
const alphaHex = parseCssColor("#336699cc");
assert(alphaHex.ok && alphaHex.color.hasAlpha, "8-digit hex has alpha");
assert(!parseCssColor("xyz").ok, "Invalid hex should fail");
assert(!parseCssColor("").ok, "Empty hex should fail");

assert(!validatePdfFile(null).ok, "Missing PDF should fail");
assert(!validatePdfFile({ name: "a.png", type: "image/png", size: 10 }).ok, "Non-PDF should fail");
assert(
  !validatePdfFile({ name: "a.pdf", type: "application/pdf", size: 21 * 1024 * 1024 }).ok,
  "Oversized PDF should fail",
);
assert(validatePdfFile({ name: "a.pdf", type: "application/pdf", size: 1024 }).ok, "Valid PDF name");

const firstPage = parsePageSelection("first", 5, []);
assert(firstPage.ok && firstPage.pages.join() === "1", "First page selection");
const allPages = parsePageSelection("all", 3, []);
assert(allPages.ok && allPages.pages.join() === "1,2,3", "All pages selection");
const selectedPages = parsePageSelection("selected", 4, [3, 1, 1, 9]);
assert(selectedPages.ok && selectedPages.pages.join() === "1,3", "Selected pages are unique and in range");
assert(!parsePageSelection("selected", 4, []).ok, "Empty selected pages should fail");
assert(!parsePageSelection("all", 41, []).ok, "Too many pages should fail");
assert(pdfScaleForPage(10000, 10000, 1.5) < 1.5, "Huge pages should downscale");

assert(!validateQrText("").ok, "Empty QR text should fail");
assert(!validateQrText("a".repeat(1201)).ok, "Overlong QR text should fail");
assert(validateQrText("https://example.com").ok, "URL QR text");
assert(looksLikeUrl("https://example.com"), "https looks like a URL");
assert(!looksLikeUrl("javascript:alert(1)"), "javascript: is not treated as a link");
assert(!looksLikeUrl("not a url"), "plain text is not a URL");

const htmlEncoded = encodeHtml('<div class="x">Hello & welcome</div>');
assert(
  htmlEncoded.ok && htmlEncoded.output === "&lt;div class=&quot;x&quot;&gt;Hello &amp; welcome&lt;/div&gt;",
  "HTML encode tags and entities",
);
const htmlDecoded = decodeHtml("&lt;div&gt;Hello&#39;s café&lt;/div&gt;");
assert(htmlDecoded.ok && htmlDecoded.output === "<div>Hello's café</div>", "HTML decode entities and unicode");

const htmlMin = minifyHtml("<div>\n  <h1>Hello</h1>\n  <!--x-->\n  <pre>\n  keep\n</pre>\n</div>");
assert(htmlMin.ok && htmlMin.output.includes("<pre>\n  keep\n</pre>"), "HTML minify keeps pre");
assert(htmlMin.ok && !htmlMin.output.includes("<!--"), "HTML minify strips comments");
assert(
  htmlMin.ok && htmlMin.output.startsWith("<div><h1>Hello</h1>"),
  "HTML minify collapses outer space",
);
assert(!minifyHtml("   ").ok, "Empty HTML minify should fail");

const cssMin = minifyCss("/* c */ .hero { color: #2563eb; background: url(\"/a.png\"); } @media screen and (min-width: 768px) { .hero { padding: calc(1rem + 2px); } }");
assert(cssMin.ok && cssMin.output.includes(".hero{color:#2563eb;"), "CSS minify removes space in rules");
assert(cssMin.ok && cssMin.output.includes('url("/a.png")'), "CSS minify keeps url strings");
assert(cssMin.ok && cssMin.output.includes("@media screen and (min-width:768px)"), "CSS minify keeps and (");
assert(cssMin.ok && cssMin.output.includes("calc(1rem + 2px)"), "CSS minify keeps calc spaces");
assert(!minifyCss(" ").ok, "Empty CSS minify should fail");

const stats = minifyStats("aaaaaa", "aaa");
assert(stats.reduction === 50, "Minify reduction is 50%");

assert(!parsePasswordLength("").ok, "Empty password length should fail");
assert(!parsePasswordLength("7").ok, "Short password length should fail");
assert(!parsePasswordLength(String(PASSWORD_MAX + 1)).ok, "Long password length should fail");
assert(parsePasswordLength("16").ok, "Default password length");
assert(
  !generatePassword({
    length: 16,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    excludeAmbiguous: true,
  }).ok,
  "Password needs a character set",
);
const password = generatePassword({
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  excludeAmbiguous: true,
});
assert(password.ok && password.password.length === 16, "Password length is 16");
assert(password.ok && !/[O0Il1]/.test(password.password), "Ambiguous password characters excluded");
assert(password.ok && password.charsetSize > 0, "Password charset size is reported");

const jsMin = await minifyJavaScript(`function greet(name) {
  const message = "Hello, " + name;
  return message;
}`);
assert(jsMin.ok && jsMin.output.includes("Hello, "), "JS minify keeps string");
assert(jsMin.ok && jsMin.output.length < 80, "JS minify shortens source");
assert(!(await minifyJavaScript("")).ok, "Empty JS minify should fail");
assert(!(await minifyJavaScript("function (")).ok, "Invalid JS minify should fail");

const emptyImages = validateImagePdfList([]);
assert(!emptyImages.ok, "Image to PDF rejects an empty list");
assert(
  !validateImagePdfList([{ name: "notes.txt", type: "text/plain", size: 12 }]).ok,
  "Image to PDF rejects unsupported files",
);
assert(
  validateImagePdfList([{ name: "a.jpg", type: "image/jpeg", size: 1200 }]).ok,
  "Image to PDF accepts a JPEG",
);
assert(
  JSON.stringify(moveItem(["a", "b", "c"], 2, 0)) === JSON.stringify(["c", "a", "b"]),
  "File reorder moves the last item first",
);

const rangeSimple = parsePageRanges("1-3", 10);
assert(rangeSimple.ok && rangeSimple.pages.join(",") === "1,2,3", "Range 1-3");
const rangeMixed = parsePageRanges("1-3,5,8-10", 12);
assert(
  rangeMixed.ok && rangeMixed.pages.join(",") === "1,2,3,5,8,9,10",
  "Mixed page ranges",
);
assert(parsePageRanges("2,5,7", 10).ok, "Comma page list");
assert(!parsePageRanges("5-2", 10).ok, "Reversed range rejected");
assert(!parsePageRanges("0", 10).ok, "Page 0 rejected");
assert(!parsePageRanges("1-3,99", 10).ok, "Out of range rejected");
assert(!parsePageRanges("", 10).ok, "Empty range rejected");
assert(!parsePageRanges("1,,3", 10).ok, "Empty token rejected");

const samplePdf = await PDFDocument.create();
samplePdf.addPage();
samplePdf.addPage();
samplePdf.addPage();
const sampleBytes = await samplePdf.save();
const sampleFile = {
  name: "sample.pdf",
  type: "application/pdf",
  size: sampleBytes.byteLength,
  arrayBuffer: async () => {
    const copy = new Uint8Array(sampleBytes.byteLength);
    copy.set(sampleBytes);
    return copy.buffer;
  },
};
const counted = await countPdfPages(sampleFile);
assert(counted.ok && counted.pageCount === 3, "PDF page count is 3");

const secondPdf = await PDFDocument.create();
secondPdf.addPage();
const secondBytes = await secondPdf.save();
const merged = await mergePdfs([
  { name: "a.pdf", size: sampleBytes.byteLength, pageCount: 3, bytes: sampleBytes },
  { name: "b.pdf", size: secondBytes.byteLength, pageCount: 1, bytes: secondBytes },
]);
assert(merged.ok, "PDF merge of two files");
if (merged.ok) {
  const mergedDoc = await PDFDocument.load(merged.bytes);
  assert(mergedDoc.getPageCount() === 4, "Merged PDF has 4 pages");
}
assert(
  !(await mergePdfs([
    { name: "a.pdf", size: 1, pageCount: 1, bytes: sampleBytes },
  ])).ok,
  "Single PDF merge rejected",
);

const split = await splitPdf(
  { name: "a.pdf", size: sampleBytes.byteLength, pageCount: 3, bytes: sampleBytes },
  [1, 3],
);
assert(split.ok, "PDF split");
if (split.ok) {
  const splitDoc = await PDFDocument.load(split.bytes);
  assert(splitDoc.getPageCount() === 2, "Split PDF has 2 pages");
}

assert(!validatePdfFile({ name: "notes.txt", type: "text/plain", size: 12 }).ok, "Non-PDF rejected");
assert(!validatePdfFile({ name: "empty.pdf", type: "application/pdf", size: 0 }).ok, "Empty PDF rejected");
assert(validatePdfFile({ name: "ok.pdf", type: "application/pdf", size: 1200 }).ok, "PDF type accepted");

const invalidPdfFile = {
  name: "broken.pdf",
  type: "application/pdf",
  size: 8,
  arrayBuffer: async () => new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]).buffer,
};
assert(!(await countPdfPages(invalidPdfFile)).ok, "Corrupt PDF page count fails");
assert(!(await readPdfMetadata(invalidPdfFile)).ok, "Corrupt PDF metadata fails");

const metaSource = await PDFDocument.create();
metaSource.addPage();
metaSource.setTitle("Quarterly notes");
metaSource.setAuthor("Ada");
metaSource.setSubject("Review");
metaSource.setKeywords(["alpha", "beta"]);
metaSource.setCreator("Editor");
metaSource.setProducer("ToolsTartHub tests");
const metaBytes = await metaSource.save();
const metaFile = {
  name: "meta.pdf",
  type: "application/pdf",
  size: metaBytes.byteLength,
  arrayBuffer: async () => {
    const copy = new Uint8Array(metaBytes.byteLength);
    copy.set(metaBytes);
    return copy.buffer;
  },
};
const metaRead = await readPdfMetadata(metaFile);
assert(metaRead.ok && metaRead.meta.pageCount === 1, "Metadata page count");
assert(metaRead.ok && metaRead.meta.title === "Quarterly notes", "Metadata title");
assert(metaRead.ok && metaRead.meta.author === "Ada", "Metadata author");
assert(metaRead.ok && hasDocumentMetadata(metaRead.meta), "Metadata fields present");
const stripped = await stripPdfMetadata(metaRead.ok ? metaRead.bytes : metaBytes);
assert(stripped.ok, "Metadata strip succeeds");
if (stripped.ok) {
  const cleaned = await PDFDocument.load(stripped.bytes);
  assert((cleaned.getTitle() ?? "") === "", "Stripped title is empty");
  assert((cleaned.getAuthor() ?? "") === "", "Stripped author is empty");
  assert(cleaned.getPageCount() === 1, "Stripped PDF keeps pages");
}

const light = await compressPdfBytes(sampleBytes, "light");
assert(light.ok && light.pageCount === 3, "Light compress rewrites pages");
const balanced = await compressPdfBytes(sampleBytes, "balanced");
assert(balanced.ok && balanced.pageCount === 3, "Balanced compress copies pages");
assert(!(await compressPdfBytes(sampleBytes, "strong")).ok, "Strong rewrite-only path is rejected");

const extracted = itemsToPlainText([
  { str: "Hello", transform: [1, 0, 0, 1, 10, 100] },
  { str: "world", transform: [1, 0, 0, 1, 40, 100] },
  { str: "Next", transform: [1, 0, 0, 1, 10, 80] },
]);
assert(extracted.includes("Hello") && extracted.includes("world"), "PDF text items join a line");
assert(extracted.includes("\n"), "PDF text items start a new line on y change");
const pdfTextPages = parsePdfTextPages("all", 3, 1, "");
assert(pdfTextPages.ok && pdfTextPages.pages.join(",") === "1,2,3", "PDF text all pages");
assert(parsePdfTextPages("page", 3, 2, "").ok, "PDF text selected page");
assert(!parsePdfTextPages("page", 3, 9, "").ok, "PDF text page out of range");
assert(parsePdfTextPages("range", 5, 1, "1-2,4").ok, "PDF text range");
const joined = joinExtractedPages([
  { page: 1, text: "Hello" },
  { page: 2, text: "   " },
]);
assert(joined.emptyPages === 1 && joined.text.includes("Hello"), "Empty PDF text pages counted");

const safe = toPdfSafeText("Hello — café \u4e2d");
assert(safe.text.includes("Hello") && safe.text.includes("-"), "Smart punctuation mapped");
assert(safe.replaced >= 1, "Unsupported glyphs are counted");
const madePdf = await buildTextPdf("Hello world\nSecond line", {
  pageSize: "a4",
  margin: "medium",
  fontSize: 12,
  lineSpacing: "1.5",
  title: "Notes",
  pageNumbers: true,
});
assert(madePdf.ok && madePdf.pageCount >= 1, "Text to PDF creates a document");
if (madePdf.ok) {
  const loadedTextPdf = await PDFDocument.load(madePdf.bytes);
  assert(loadedTextPdf.getPageCount() === madePdf.pageCount, "Text PDF page count matches");
}
assert(!(await buildTextPdf("   ", {
  pageSize: "letter",
  margin: "small",
  fontSize: 12,
  lineSpacing: "1",
  title: "",
  pageNumbers: false,
})).ok, "Empty text to PDF fails");

const md = markdownToHtml("# Title\n\nHello **bold** and *em* and `code`.\n\n- one\n- two\n\n[site](https://toolstarthub.com)\n\n```\n<script>nope</script>\n```\n");
assert(md.ok && md.html.includes("<h1>") && md.html.includes("<strong>bold</strong>"), "Markdown headings and bold");
assert(md.ok && md.html.includes("<em>em</em>") && md.html.includes("<code>code</code>"), "Markdown italic and code");
assert(md.ok && md.html.includes("<ul>") && md.html.includes("&lt;script&gt;"), "Markdown list and escaped fence");
assert(md.ok && md.html.includes('href="https://toolstarthub.com"'), "Markdown safe link");
assert(!markdownToHtml("").ok, "Empty markdown fails");
assert(sanitizeHref("javascript:alert(1)") === null, "javascript: href rejected");
assert(sanitizeHref(" javascript:alert(1)") === null, "javascript: with leading whitespace rejected");
assert(sanitizeHref("java\nscript:alert(1)") === null, "javascript: with embedded whitespace rejected");
assert(sanitizeHref("JaVaScRiPt:alert(1)") === null, "javascript: scheme is case-insensitive");
assert(sanitizeHref("vbscript:msgbox(1)") === null, "vbscript: href rejected");
assert(sanitizeHref("data:text/html,hi") === null, "data: href rejected");
assert(sanitizeHref("//attacker.example") === null, "protocol-relative href rejected");
assert(sanitizeHref("  //attacker.example") === null, "protocol-relative href with whitespace rejected");
assert(sanitizeHref("/\t/attacker.example") === null, "protocol-relative href with a tab rejected");
assert(sanitizeHref("/\\attacker.example") === null, "backslash protocol-relative href rejected");
assert(sanitizeHref("/%2Fattacker.example") === null, "percent-encoded protocol-relative href rejected");
assert(sanitizeHref("/%2f%2Fattacker.example") === null, "percent-encoded slash pair rejected");
assert(sanitizeHref("/about") === "/about", "root-relative path allowed");
assert(sanitizeHref("/tools/pdf") === "/tools/pdf", "nested site path allowed");
assert(sanitizeHref("/foo/bar?x=1") === "/foo/bar?x=1", "site path with query allowed");
assert(sanitizeHref("https://example.com") === "https://example.com", "https href allowed");
assert(sanitizeHref("http://example.com") === "http://example.com", "http href allowed");
assert(sanitizeHref("mailto:test@example.com") === "mailto:test@example.com", "mailto href allowed");
assert(sanitizeHref("#section") === "#section", "hash href allowed");
const protocolRelative = markdownToHtml("[go](//attacker.example)");
assert(
  protocolRelative.ok && !protocolRelative.html.includes("<a ") && protocolRelative.html.includes("//attacker.example"),
  "protocol-relative markdown link stays text",
);

const htmlMd = htmlToMarkdown("<h2>Hello</h2><p>This is <strong>bold</strong> and <em>italic</em>.</p><ul><li>One</li></ul><script>alert(1)</script><a href=\"https://toolstarthub.com\">Site</a>");
assert(htmlMd.ok && htmlMd.markdown.includes("## Hello"), "HTML heading to markdown");
assert(htmlMd.ok && htmlMd.markdown.includes("**bold**") && htmlMd.markdown.includes("*italic*"), "HTML emphasis");
assert(htmlMd.ok && htmlMd.markdown.includes("- One"), "HTML list");
assert(htmlMd.ok && !htmlMd.markdown.includes("alert(1)"), "Script content skipped");
assert(htmlMd.ok && htmlMd.markdown.includes("[Site](https://toolstarthub.com)"), "HTML link");
assert(!htmlToMarkdown("").ok, "Empty HTML fails");

const lineDiff = diffText("alpha\nbeta\ngamma", "alpha\ndelta\ngamma", "lines");
assert(lineDiff.ok && lineDiff.removed === 1 && lineDiff.added === 1, "Line diff counts");
assert(lineDiff.ok && lineDiff.hunks.some((hunk) => hunk.kind === "remove" && hunk.text.includes("beta")), "Line diff removed beta");
const sameDiff = diffText("same", "same", "lines");
assert(sameDiff.ok && sameDiff.added === 0 && sameDiff.removed === 0, "Identical texts have no edits");
const wordDiff = diffText("hello world", "hello there", "words");
assert(wordDiff.ok && wordDiff.added >= 1 && wordDiff.removed >= 1, "Word diff");
const emptyDiff = diffText("", "", "lines");
assert(emptyDiff.ok && emptyDiff.hunks.length === 0, "Empty both sides");

const dupes = removeDuplicateLines("Apple\napple\nApple\n\nPear", {
  caseInsensitive: true,
  trim: true,
  dropEmpty: true,
});
assert(dupes.ok && dupes.output === "Apple\nPear", "Duplicates removed, first kept");
assert(dupes.ok && dupes.originalLines === 5 && dupes.uniqueLines === 2, "Duplicate stats");
assert(dupes.ok && dupes.duplicatesRemoved === 2, "Two duplicate apples removed");
assert(removeDuplicateLines("a\na", { caseInsensitive: false, trim: false, dropEmpty: false }).ok, "Exact duplicate match");

const trimmed = cleanWhitespace("  hello   world\t\n\n\nNext  ", {
  ...DEFAULT_WHITESPACE_OPTIONS,
  collapseSpaces: true,
  tabsToSpaces: true,
  collapseBlankLines: true,
});
assert(trimmed.ok && trimmed.output.includes("hello world"), "Collapsed spaces");
assert(trimmed.ok && !trimmed.output.includes("\n\n\n"), "Collapsed blank lines");
const leading = cleanWhitespace("   indented", {
  ...DEFAULT_WHITESPACE_OPTIONS,
  trimLines: false,
  trimLeading: true,
  trimTrailing: false,
  trimDocument: false,
});
assert(leading.ok && leading.output === "indented", "Leading whitespace removed");

const az = sortLines("b\na\nc", {
  mode: "az",
  caseInsensitive: true,
  trim: false,
  ignoreEmpty: false,
  removeDuplicates: false,
});
assert(az.ok && az.output === "a\nb\nc", "A-Z sort");
const za = sortLines("a\nb", { mode: "za", caseInsensitive: true, trim: false, ignoreEmpty: false, removeDuplicates: false });
assert(za.ok && za.output === "b\na", "Z-A sort");
const nums = sortLines("10 apples\n2 apples\nbanana", {
  mode: "num-asc",
  caseInsensitive: true,
  trim: true,
  ignoreEmpty: false,
  removeDuplicates: false,
});
assert(nums.ok && nums.output.startsWith("2 apples"), "Numeric sort uses leading number");
const stable = sortLines("b\na\nb", {
  mode: "az",
  caseInsensitive: true,
  trim: false,
  ignoreEmpty: false,
  removeDuplicates: false,
});
assert(stable.ok && stable.output === "a\nb\nb", "Stable sort keeps equal order");
const dedupedSort = sortLines("b\na\nb", {
  mode: "az",
  caseInsensitive: true,
  trim: false,
  ignoreEmpty: false,
  removeDuplicates: true,
});
assert(dedupedSort.ok && dedupedSort.output === "a\nb", "Sort can drop duplicates");
const lengthSort = sortLines("tool\nhi\nrocks", {
  mode: "short",
  caseInsensitive: true,
  trim: false,
  ignoreEmpty: false,
  removeDuplicates: false,
});
assert(lengthSort.ok && lengthSort.output.startsWith("hi"), "Shortest first");

const red = colorFromRgb(255, 0, 0);
assert(red.hex === "#ff0000", "RGB to HEX");
assert(red.rgbCss === "rgb(255, 0, 0)", "RGB css");
const pixels = new Uint8ClampedArray([
  255, 0, 0, 255,
  255, 0, 0, 255,
  0, 0, 255, 255,
  0, 0, 255, 0,
]);
const dominant = analyzePixels(pixels, 3);
assert(dominant[0]?.color.hex === "#ff0000", "Dominant color is red");
assert(!parseColorCount("2").ok, "Color count below minimum");
assert(parseColorCount("5").ok, "Color count 5");

const contrast = evaluateContrast("#000000", "#ffffff");
assert(contrast.ok && contrast.result.ratio === 21, "Black on white is 21:1");
assert(contrast.ok && contrast.result.ratioLabel === "21:1", "Contrast label 21:1");
assert(contrast.ok && contrast.result.normalAa === "pass", "Black/white passes AA");
const weak = evaluateContrast("#777777", "#999999");
assert(weak.ok && weak.result.normalAa === "fail", "Similar greys fail AA");

const linear = buildGradientCss(defaultGradient());
assert(
  linear.ok && linear.css === "background: linear-gradient(90deg, #336699 0%, #ffffff 100%);",
  "Linear gradient CSS",
);
const radial = buildGradientCss({
  ...defaultGradient(),
  type: "radial",
  stops: [
    ...defaultGradient().stops,
    { id: "mid", color: "#000000", position: 50 },
  ],
});
assert(
  radial.ok && radial.css === "background: radial-gradient(circle, #336699 0%, #000000 50%, #ffffff 100%);",
  "Radial gradient with three stops",
);

const shadow = buildBoxShadowCss(BOX_SHADOW_DEFAULT);
assert(
  shadow.ok && shadow.css === "box-shadow: 0 8px 24px 0 rgba(15, 39, 68, 0.2);",
  "Default box-shadow CSS",
);

const wifi = encodeQrPayload({
  kind: "wifi",
  ssid: "Cafe;Net",
  password: "p@ss,word",
  security: "WPA",
});
assert(
  wifi.ok && wifi.text === "WIFI:T:WPA;S:Cafe\\;Net;P:p@ss\\,word;;",
  "Wi-Fi QR payload",
);
const emailQr = encodeQrPayload({ kind: "email", email: "a@example.com" });
assert(emailQr.ok && emailQr.text === "mailto:a@example.com", "Email QR payload");
const phoneQr = encodeQrPayload({ kind: "phone", phone: "+1 202-555-0100" });
assert(phoneQr.ok && phoneQr.text === "tel:+12025550100", "Phone QR payload");

assert(!parseRandomBound("", "minimum").ok, "Empty random min");
assert(!parseRandomCount("0").ok, "Random count 0 rejected");
assert(!parseRandomCount(String(RANDOM_COUNT_MAX + 1)).ok, "Random count too high");
assert(
  !generateRandomNumbers({ min: 10, max: 1, count: 1, mode: "integer", unique: false }).ok,
  "min > max rejected",
);
assert(
  !generateRandomNumbers({ min: 1, max: 3, count: 5, mode: "integer", unique: true }).ok,
  "Impossible unique count rejected",
);
const ints = generateRandomNumbers({
  min: 5,
  max: 5,
  count: 3,
  mode: "integer",
  unique: false,
});
assert(ints.ok && ints.values.every((value) => value === 5), "Integer bounds respected");
const uniqueInts = generateRandomNumbers({
  min: 1,
  max: 3,
  count: 3,
  mode: "integer",
  unique: true,
});
assert(
  uniqueInts.ok &&
    [...uniqueInts.values].sort((a, b) => a - b).join(",") === "1,2,3",
  "Unique integers cover the range",
);

const a4 = pageDimensions("a4", "portrait", 100, 200);
assert(Math.round(a4.width) === 595 && Math.round(a4.height) === 842, "A4 portrait size");
const fitted = imageDrawRect(
  { x: 0, y: 0, width: 100, height: 100 },
  200,
  100,
  "fit",
);
assert(fitted.width === 100 && fitted.height === 50, "Fit keeps aspect ratio");

assert(tools.length === 50, "Registry has 50 tools");
assert(new Set(tools.map((tool) => tool.slug)).size === 50, "Tool slugs are unique");
assert(getNewTools().length === 4, "Homepage recently added stays at 4 tools");
assert(
  tools.every((tool) => tool.status === "available"),
  "No coming-soon tools",
);

for (const tool of tools) {
  assert(getToolContent(tool.slug), `${tool.slug} has tool content`);
  assert(toolQuickAnswers[tool.slug], `${tool.slug} has a quick answer`);
}

const pdfHits = searchTools("pdf").map((tool) => tool.slug);
for (const slug of [
  "pdf-to-jpg",
  "image-to-pdf",
  "pdf-merger",
  "pdf-splitter",
  "pdf-page-counter",
  "pdf-compressor",
  "pdf-to-text",
  "pdf-metadata",
  "text-to-pdf",
]) {
  assert(pdfHits.includes(slug), `pdf search should include ${slug}`);
}

const colorHits = searchTools("color").map((tool) => tool.slug);
for (const slug of [
  "hex-to-rgb",
  "color-picker",
  "image-color-analyzer",
  "color-contrast-checker",
  "css-gradient-generator",
]) {
  assert(colorHits.includes(slug), `color search should include ${slug}`);
}

const qrHits = searchTools("qr").map((tool) => tool.slug);
for (const slug of [
  "qr-code-generator",
  "qr-code-scanner",
  "qr-code-generator-pro",
]) {
  assert(qrHits.includes(slug), `qr search should include ${slug}`);
}

assert(
  searchTools("Percentage Calculator")[0]?.slug === "percentage-calculator",
  "Exact name search ranks the tool first",
);
assert(
  searchTools("PERCENTAGE").some((tool) => tool.slug === "percentage-calculator"),
  "Search is case-insensitive",
);
assert(searchTools("json").some((tool) => tool.slug === "json-formatter"), "Partial json match");
assert(searchTools("xyzzy-no-such-tool").length === 0, "Unknown query has no results");
assert(searchTools("").length === 50, "Empty query returns all tools");
assert(searchTools("compress pdf")[0]?.slug === "pdf-compressor", "compress pdf ranks compressor");
assert(searchTools("extract text").some((tool) => tool.slug === "pdf-to-text"), "extract text finds PDF to Text");
assert(searchTools("remove pdf metadata").some((tool) => tool.slug === "pdf-metadata"), "metadata search");
assert(searchTools("markdown html").some((tool) => tool.slug === "markdown-to-html"), "markdown html search");
assert(searchTools("html markdown").some((tool) => tool.slug === "html-to-markdown"), "html markdown search");
assert(searchTools("compare text").some((tool) => tool.slug === "text-diff"), "compare text finds diff");
assert(searchTools("duplicate lines").some((tool) => tool.slug === "duplicate-line-remover"), "duplicate lines search");
assert(searchTools("remove whitespace").some((tool) => tool.slug === "whitespace-remover"), "whitespace search");
assert(searchTools("sort lines").some((tool) => tool.slug === "line-sorter"), "sort lines search");
assert(searchTools("text pdf").some((tool) => tool.slug === "text-to-pdf"), "text pdf search");
assert(
  searchTools("Calculators").some((tool) => tool.category === "calculators"),
  "Category name is searchable",
);

const validSlugs = new Set(tools.map((tool) => tool.slug));
const favoriteStore = memoryStorage();
const added = toggleFavoriteSlug(favoriteStore, "json-formatter", validSlugs);
assert(added.favorited && added.slugs.includes("json-formatter"), "Favorite add");
const again = readFavoriteSlugs(favoriteStore, validSlugs);
assert(again.includes("json-formatter"), "Favorite persists in storage");
const removed = toggleFavoriteSlug(favoriteStore, "json-formatter", validSlugs);
assert(!removed.favorited && !removed.slugs.includes("json-formatter"), "Favorite remove");
const unavailable = toggleFavoriteSlug(null, "age-calculator", validSlugs);
assert(unavailable.favorited, "Favorite works without localStorage for the session");
assert(
  !toggleFavoriteSlug(favoriteStore, "not-a-tool", validSlugs).favorited,
  "Unknown slug cannot be favorited",
);

const recentStore = memoryStorage();
recordRecentTool(recentStore, "json-formatter", validSlugs, 100);
recordRecentTool(recentStore, "age-calculator", validSlugs, 200);
recordRecentTool(recentStore, "json-formatter", validSlugs, 300);
const recents = readRecentTools(recentStore, validSlugs);
assert(recents[0]?.slug === "json-formatter", "Most recent tool is first");
assert(
  recents.filter((item) => item.slug === "json-formatter").length === 1,
  "Recent tools are de-duplicated",
);
for (let index = 0; index < 12; index += 1) {
  recordRecentTool(recentStore, tools[index % tools.length].slug, validSlugs, 400 + index);
}
assert(readRecentTools(recentStore, validSlugs).length <= RECENTS_MAX, "Recent tools respect max");
const memoryOnly = recordRecentTool(null, "unit-converter", validSlugs, 1);
assert(
  memoryOnly.entries.some((item) => item.slug === "unit-converter"),
  "Recents work without localStorage for the session",
);

const contrastParsed = parseContrastParams(
  new URLSearchParams("fg=%23000000&bg=%23ffffff"),
);
assert(
  contrastParsed.foreground === "#000000" && contrastParsed.background === "#ffffff",
  "Contrast URL params parse",
);
const contrastInvalid = parseContrastParams(new URLSearchParams("fg=not-a-color&bg=%23ffffff"));
assert(
  contrastInvalid.foreground === undefined && contrastInvalid.background === "#ffffff",
  "Invalid contrast fg is ignored",
);
const gradientParsed = parseGradientParams(
  new URLSearchParams("type=radial&angle=45&stops=%23ff0000@0,%230000ff@100"),
);
assert(
  gradientParsed.type === "radial" &&
    gradientParsed.angle === 45 &&
    gradientParsed.stops?.length === 2,
  "Gradient URL params parse",
);
const shadowParsed = parseBoxShadowParams(
  new URLSearchParams("x=4&y=8&blur=12&spread=1&color=%230f2744&opacity=0.4&inset=1"),
);
assert(
  shadowParsed.offsetX === 4 &&
    shadowParsed.inset === true &&
    shadowParsed.opacity === 0.4,
  "Box shadow URL params parse",
);
const shadowInvalid = parseBoxShadowParams(new URLSearchParams("x=nope&blur=999"));
assert(shadowInvalid.offsetX === undefined && shadowInvalid.blur === 80, "Invalid shadow x ignored, blur clamped");
assert(
  !SENSITIVE_PARAM_KEYS.some((key) =>
    ["fg", "bg", "type", "angle", "stops", "x", "y", "blur", "spread", "color", "opacity", "inset"].includes(
      key,
    ),
  ),
  "Shareable keys are not sensitive parameter names",
);

for (const tool of tools) {
  for (const relatedSlug of tool.relatedSlugs ?? []) {
    assert(
      getToolBySlug(relatedSlug),
      `${tool.slug} related slug ${relatedSlug} exists`,
    );
  }
  const related = getRelatedTools(tool);
  assert(!related.some((item) => item.slug === tool.slug), `${tool.slug} does not self-link`);
  assert(related.length >= 3 && related.length <= 6, `${tool.slug} has 3–6 related tools`);
  assert(
    new Set(related.map((item) => item.slug)).size === related.length,
    `${tool.slug} related tools are unique`,
  );
}

const pdfTools = filterToolsByDiscovery(tools, "pdf");
assert(pdfTools.length === 9, "PDF discovery filter has 9 tools");
const colorTools = filterToolsByDiscovery(tools, "color");
assert(colorTools.length >= 5, "Color discovery filter has at least 5 tools");
const qrTools = filterToolsByDiscovery(tools, "qr");
assert(qrTools.length === 3, "QR discovery filter has 3 tools");

for (const category of categories) {
  const count = tools.filter((tool) => tool.category === category.slug).length;
  assert(count > 0, `${category.slug} has tools`);
}

assert(guides.every((guide) => guide.relatedToolSlugs.every((slug) => getToolBySlug(slug))), "Guides link to real tools");

for (const guide of guides) {
  const content = getGuideContent(guide.slug);
  assert(content, `${guide.slug} has guide content`);
  assert(content.intro.trim().length > 0, `${guide.slug} has a direct intro`);
  assert(content.why.trim().length > 0, `${guide.slug} explains why the method is useful`);
  assert(content.steps.length >= 3, `${guide.slug} has numbered steps`);
  assert(content.examples.length >= 1, `${guide.slug} has a practical example`);
  assert(
    content.faqs.length >= 3 && content.faqs.length <= 5,
    `${guide.slug} has 3–5 FAQs`,
  );
  assert(content.cta.href.startsWith("/tools/"), `${guide.slug} CTAs to a tool`);
  const blob = collectText(content).join("\n");
  assert(!markdownFormattingIssues(blob), `${guide.slug} ${markdownFormattingIssues(blob) ?? ""}`.trim());
  assert(!bannedPhraseIssues(blob), `${guide.slug} ${bannedPhraseIssues(blob) ?? ""}`.trim());
}

const sitemapPaths = new Set([
  "/",
  "/tools",
  "/categories",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  ...tools.map((tool) => tool.route),
  ...categories.map((category) => category.route),
  ...guides.map((guide) => guide.route),
]);
assert(![...sitemapPaths].some((path) => path.includes("?")), "Sitemap paths have no query strings");
assert(
  tools.every((tool) => sitemapPaths.has(tool.route)),
  "All 50 tool routes are in the sitemap set",
);
assert(
  !sitemapPaths.has("/tools?view=favorites") && ![...sitemapPaths].some((path) => path.includes("q=")),
  "Favorites and search URLs are not in the sitemap",
);
assert(
  new Set(
    [...sitemapPaths].map((path) =>
      path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    ),
  ).size === sitemapPaths.size,
  "Sitemap URLs are unique",
);
if (!process.env.NEXT_PUBLIC_SITE_URL) {
  assert(
    siteConfig.url === PRODUCTION_SITE_URL,
    "Default site URL is the production domain",
  );
  assert(
    siteConfig.url === "https://toolstarthub.com",
    "Canonical production URL is https://toolstarthub.com",
  );
}
assert(siteContact.email === "eshigari110@gmail.com", "Public contact email");
assert(siteContact.phoneE164 === "+923462559008", "Public contact phone");
assert(siteContact.phoneDisplay === "+92 346 2559008", "Public phone display");
assert(siteContact.whatsappUrl === "https://wa.me/923462559008", "WhatsApp contact link");
assert(
  siteConfig.url.startsWith("https://") &&
    !siteConfig.url.includes("localhost") &&
    !siteConfig.url.includes("127.0.0.1"),
  "Site URL is HTTPS and not a local development host",
);
assert(
  !siteConfig.url.includes("toolstarhub.com") &&
    !PRODUCTION_SITE_URL.includes("toolstarhub.com"),
  "Misspelled toolstarhub.com is not used as the site URL",
);

const pdfMagic = new TextEncoder().encode("%PDF-1.7\n");
assert(looksLikePdf(pdfMagic), "PDF magic bytes are detected");
assert(validatePdfBytes(pdfMagic).ok, "Valid PDF header passes byte validation");
assert(!looksLikePdf(new TextEncoder().encode("<html>")), "HTML is not treated as a PDF");
assert(!validatePdfBytes(new Uint8Array([0, 1, 2, 3, 4])).ok, "Random bytes fail PDF validation");

const jpegHeader = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 0, 0, 0, 0, 0, 0, 0]);
const pngHeader = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]);
const webpHeader = new Uint8Array([
  0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50,
]);
assert(looksLikeSupportedImage(jpegHeader), "JPEG magic is detected");
assert(looksLikeSupportedImage(pngHeader), "PNG magic is detected");
assert(looksLikeSupportedImage(webpHeader), "WebP magic is detected");
assert(!looksLikeSupportedImage(new TextEncoder().encode("<svg xmlns='n'></svg>")), "SVG is not a supported image sniff");

const jsonLd = serializeJsonLd({ html: "</script><script>alert(1)</script>" });
assert(!jsonLd.includes("</script>"), "JSON-LD does not emit a raw script closer");
assert(jsonLd.includes("\\u003c"), "JSON-LD escapes angle brackets");

const huge = new URLSearchParams();
huge.set("fg", `#${"a".repeat(MAX_SHARE_QUERY_LENGTH)}`);
assert(boundedSearchParams(huge).toString() === "", "Oversized share URLs fall back empty");
assert(
  !SENSITIVE_PARAM_KEYS.includes("fg" as (typeof SENSITIVE_PARAM_KEYS)[number]),
  "Share color params are not treated as private payloads",
);

console.log("All tool calculation checks passed.");
