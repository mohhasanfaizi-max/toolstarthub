export const toolQuickAnswers: Record<string, string> = {
  "percentage-calculator":
    "A percentage calculator helps you find percentages, percentage changes, and related values without doing the arithmetic by hand.",
  "percentage-change-calculator":
    "A percentage change calculator shows how much a number increased or decreased relative to its starting value.",
  "discount-calculator":
    "A discount calculator turns a list price and a percent off into the amount saved and the final price.",
  "age-calculator":
    "An age calculator counts years, months and days between a date of birth and today, or another date you choose.",
  "word-counter":
    "A word counter reports words, characters, sentences and a simple reading-time estimate for text you paste.",
  "character-counter":
    "A character counter tallies characters, words and lines as you type, including spaces unless you choose otherwise.",
  "case-converter":
    "A case converter changes text between uppercase, lowercase, title case, camelCase and similar styles.",
  "lorem-ipsum-generator":
    "A lorem ipsum generator creates placeholder paragraphs, sentences or words for layouts and drafts.",
  "json-formatter":
    "A JSON formatter checks whether JSON is valid, then pretty-prints or minifies it in your browser.",
  "image-compressor":
    "An image compressor reduces JPG, PNG and WebP file size on your device, without uploading the photo.",
  "image-resizer":
    "An image resizer changes width and height in the browser, with optional aspect-ratio lock.",
  "image-cropper":
    "An image cropper lets you select a region of a photo and export just that area.",
  "image-converter":
    "An image converter changes JPG, PNG and WebP files from one format to another locally.",
  "base64-encoder":
    "A Base64 encoder converts text to Base64 and back, using UTF-8, entirely in the browser.",
  "uuid-generator":
    "A UUID generator creates UUID v4 identifiers using the browser’s cryptographic random source.",
  "url-encoder":
    "A URL encoder applies encodeURIComponent or decodeURIComponent to a string you paste.",
  "timestamp-converter":
    "A Unix timestamp converter turns epoch seconds or milliseconds into dates, and dates back into timestamps.",
  "utm-builder":
    "A UTM builder adds campaign parameters to a URL so you can track traffic sources in analytics tools.",
  "unit-converter":
    "A unit converter changes length, weight, temperature and other common units using standard conversion factors.",
  "slug-generator":
    "A slug generator turns a title into a lowercase, hyphenated string that is safe to use in a URL.",
  "pdf-to-jpg":
    "PDF to JPG renders selected PDF pages to JPEG images in your browser, without uploading the document.",
  "hex-to-rgb":
    "Hex to RGB converts CSS hex colors to RGB and HSL values you can copy into stylesheets.",
  "color-picker":
    "A color picker lets you choose a color visually or from an image, then copy hex, RGB and HSL.",
  "qr-code-generator":
    "A QR code generator turns text or a URL into a downloadable QR image, created on your device.",
  "qr-code-scanner":
    "A QR code scanner reads a QR image you select and shows the decoded text locally.",
  "html-encoder":
    "An HTML encoder escapes or unescapes characters such as <, > and & so text is safe in HTML.",
  "html-minifier":
    "An HTML minifier removes comments and extra whitespace from HTML to reduce file size.",
  "css-minifier":
    "A CSS minifier compresses stylesheets by removing comments and unnecessary whitespace.",
  "javascript-minifier":
    "A JavaScript minifier shrinks JS source in the browser using Terser, without sending code to a server.",
  "password-generator":
    "A password generator builds random passwords from character sets you choose, using a cryptographic RNG.",
  "image-to-pdf":
    "Image to PDF places JPG, PNG or WebP images onto PDF pages in your browser, then downloads the file.",
  "pdf-merger":
    "A PDF merger combines several PDF files into one document, in the order you set, on your device.",
  "pdf-splitter":
    "A PDF splitter extracts selected pages or ranges into a new PDF without uploading the original.",
  "pdf-page-counter":
    "A PDF page counter reports how many pages a PDF contains after reading it locally.",
  "image-color-analyzer":
    "An image color analyzer samples pixels to approximate the dominant colors in a photo.",
  "color-contrast-checker":
    "A color contrast checker measures the WCAG contrast ratio between foreground and background colors.",
  "css-gradient-generator":
    "A CSS gradient generator builds linear or radial gradients and copies the CSS for your stylesheet.",
  "box-shadow-generator":
    "A box shadow generator lets you tune offset, blur, spread and color, then copy a CSS box-shadow value.",
  "qr-code-generator-pro":
    "QR Code Generator Pro creates QR codes for URLs, Wi-Fi, email, phone, SMS or contacts, with colors.",
  "random-number-generator":
    "A random number generator draws integers or decimals in a range using crypto.getRandomValues.",
  "pdf-compressor":
    "A PDF compressor rewrites or rasterizes a PDF in your browser to try to reduce file size. Smaller output is not guaranteed.",
  "pdf-to-text":
    "PDF to Text copies selectable text from PDF pages in your browser. Image-only scans usually produce little or no text because OCR is not included.",
  "pdf-metadata":
    "PDF metadata is extra document information such as title and author. This tool can show common Info fields and clear them in a downloaded copy.",
  "text-to-pdf":
    "Text to PDF places wrapped plain text onto A4 or Letter pages in your browser and downloads a PDF.",
  "markdown-to-html":
    "A Markdown to HTML converter turns headings, lists, links and code into HTML source locally, without executing the input.",
  "html-to-markdown":
    "An HTML to Markdown converter reads HTML as text and produces Markdown for common tags, without running the markup.",
  "text-diff":
    "A text diff checker compares original and modified text on your device and marks added, removed and unchanged lines or words.",
  "duplicate-line-remover":
    "A duplicate line remover keeps the first occurrence of each line and drops later repeats, with optional trim and case options.",
  "whitespace-remover":
    "A whitespace remover trims, collapses spaces, converts tabs and cleans blank lines according to the options you select.",
  "line-sorter":
    "A line sorter orders multiline text alphabetically, numerically or by length, with optional duplicate removal.",
};

export function getToolQuickAnswer(
  slug: string,
  fallbackName: string,
  fallbackDescription: string,
): string {
  return (
    toolQuickAnswers[slug] ??
    `${fallbackName} ${fallbackDescription.charAt(0).toLowerCase()}${fallbackDescription.slice(1)}`
  );
}
