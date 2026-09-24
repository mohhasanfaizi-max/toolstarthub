import { aiToolContent } from "./ai-tool-content.ts";
import { financeToolContent } from "./finance-tool-content.ts";
import { nextToolContent } from "./next-tool-content.ts";

export type ToolExample = {
  title: string;
  body: string;
};

export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolContent = {
  howTo: string[];
  examples: ToolExample[];
  explanation: string;
  faqs: ToolFaq[];
  about?: string;
  features?: string[];
  tips?: string[];
  limitations?: string;
};

const localProcessingFaq = {
  question: "Is my input sent to a server?",
  answer:
    "No. This tool runs in your browser. Tools Star Hub does not send this input to a server or save it in local storage.",
};

const freeFaq = (name: string): ToolFaq => ({
  question: `Is the ${name} free?`,
  answer: "Yes. You can use it without paying or creating an account.",
});

export const toolContent: Record<string, ToolContent> = {
  "percentage-calculator": {
    howTo: [
      "Choose the calculation you need: X% of Y, X as a percent of Y, or increase/decrease.",
      "Enter the two numbers. Use decimals if you need them.",
      "Press Calculate to see the result, then Reset to start again.",
    ],
    examples: [
      {
        title: "What is 15% of 80?",
        body: "15 ÷ 100 × 80 = 12.",
      },
      {
        title: "12 is what percent of 40?",
        body: "12 ÷ 40 × 100 = 30%.",
      },
      {
        title: "Increase 200 by 10%",
        body: "200 + 20 = 220.",
      },
    ],
    explanation:
      "A percentage is a number out of 100. “X% of Y” multiplies Y by X/100. “X is what percent of Y” divides X by Y and multiplies by 100. An increase or decrease applies that same fraction to the starting number.",
    faqs: [
      freeFaq("Percentage Calculator"),
      {
        question: "What happens if I use 0?",
        answer:
          "0% of a number is 0. Finding what percent a number is of 0 is not possible, so the tool asks for a different second number.",
      },
      localProcessingFaq,
    ],
  },
  "age-calculator": {
    howTo: [
      "Enter the date of birth.",
      "Optionally choose another date if you want the age on that day instead of today.",
      "Press Calculate to see years, months, days and total days.",
    ],
    examples: [
      {
        title: "Born 1 January 2000, calculated on 1 January 2026",
        body: "26 years, 0 months, 0 days.",
      },
      {
        title: "Leap-day birthday",
        body: "29 February 2000 to 28 February 2001 is 0 years, 11 months and 30 days, because 2001 is not a leap year.",
      },
    ],
    explanation:
      "Age is counted from the calendar date of birth to the selected date. The tool uses whole years, then remaining months, then remaining days. It does not divide total days by 365. Leap years are handled by the calendar, including 29 February.",
    faqs: [
      freeFaq("Age Calculator"),
      {
        question: "Can I calculate age on a future date?",
        answer:
          "Yes, as long as that date is not before the date of birth.",
      },
      localProcessingFaq,
    ],
  },
  "percentage-change-calculator": {
    howTo: [
      "Enter the original value and the new value.",
      "Press Calculate to see the percentage change.",
      "A positive result is an increase. A negative result is a decrease.",
    ],
    examples: [
      {
        title: "80 to 100",
        body: "The value rose by 20, which is a 25% increase.",
      },
      {
        title: "100 to 80",
        body: "The value fell by 20, which is a 20% decrease.",
      },
    ],
    explanation:
      "Percentage change is (new − original) ÷ original × 100. Going up 25% and then down 20% are not the same size of change, because the starting points are different.",
    faqs: [
      freeFaq("Percentage Change Calculator"),
      {
        question: "Why can’t I use 0 as the original value?",
        answer:
          "Dividing by zero is undefined. If both values are 0, the change is 0%. Any other new value from 0 cannot be expressed as a finite percentage.",
      },
      localProcessingFaq,
    ],
  },
  "discount-calculator": {
    howTo: [
      "Enter the original price as a number, without a currency symbol.",
      "Enter the discount percentage.",
      "Press Calculate to see the discount amount and the final price.",
    ],
    examples: [
      {
        title: "50 off by 20%",
        body: "The discount is 10. The final price is 40.",
      },
      {
        title: "A 100% discount",
        body: "The final price is 0.",
      },
    ],
    explanation:
      "The discount amount is original price × discount ÷ 100. The final price is the original price minus that amount. The tool does not assume a currency, so 19.99 means 19.99 in whatever unit you are using.",
    faqs: [
      freeFaq("Discount Calculator"),
      {
        question: "Can I enter a currency symbol?",
        answer:
          "Enter numbers only. Adding a symbol such as $ or € will be treated as invalid input.",
      },
      localProcessingFaq,
    ],
  },
  "word-counter": {
    howTo: [
      "Paste or type text in the box.",
      "Word, character, sentence and paragraph counts update as you type.",
      "Use Sample text to try the counter, Clear to empty the box, or Copy to copy your text.",
    ],
    examples: [
      {
        title: "A short sentence",
        body: "“Hello world.” is 2 words and 1 sentence.",
      },
      {
        title: "Blank lines",
        body: "Text separated by an empty line counts as two paragraphs.",
      },
    ],
    explanation:
      "Words are groups of non-space characters. Characters are Unicode code points, so letters, punctuation and most emoji each count as one character. Sentences are split on . ! ? and …. Paragraphs are non-empty blocks separated by line breaks. Reading time uses about 225 words per minute.",
    faqs: [
      freeFaq("Word Counter"),
      {
        question: "Is my text uploaded?",
        answer:
          "No. Counting runs in your browser. The text is not sent to Tools Star Hub or stored.",
      },
      {
        question: "How are extra spaces counted?",
        answer:
          "Repeated spaces do not create extra words. They do count as characters.",
      },
    ],
  },
  "character-counter": {
    howTo: [
      "Type or paste text in the box.",
      "Character, word and line counts update immediately.",
      "Copy the character count or clear the box when you are done.",
    ],
    examples: [
      {
        title: "Emoji and letters",
        body: "“A😀” is 2 characters: one letter and one emoji.",
      },
      {
        title: "Lines",
        body: "A line break starts a new line. An empty box is 0 lines.",
      },
    ],
    explanation:
      "Characters are counted as Unicode code points. Spaces are included in the main character count and excluded in the “without spaces” count. Lines follow the line breaks in the box, including a trailing blank line.",
    faqs: [
      freeFaq("Character Counter"),
      {
        question: "Does this leave my computer?",
        answer:
          "No. The text stays in your browser and is not sent to a server.",
      },
      localProcessingFaq,
    ],
  },
  "json-formatter": {
    howTo: [
      "Paste JSON into the input box.",
      "Choose Format to pretty-print, Minify to remove extra spaces, or Validate to check the syntax.",
      "Copy the result, or Clear to empty both boxes.",
    ],
    examples: [
      {
        title: "Valid object",
        body: '{"name":"Ada","id":1} formats with indented keys.',
      },
      {
        title: "Invalid JSON",
        body: "A trailing comma or missing quote shows an error, including a position when the browser reports one.",
      },
    ],
    explanation:
      "JSON is a text format for objects, arrays, strings, numbers, booleans and null. This tool uses the browser’s built-in JSON parser. It does not send your JSON anywhere. Very large documents may be rejected so the page stays usable.",
    faqs: [
      freeFaq("JSON Formatter"),
      {
        question: "Is my JSON uploaded?",
        answer:
          "No. Parsing and formatting happen in your browser.",
      },
      {
        question: "Why did formatting fail?",
        answer:
          "JSON must use double quotes, and it cannot include trailing commas or comments. The error message points to the problem when the parser provides a position.",
      },
    ],
  },
  "base64-encoder": {
    howTo: [
      "Paste text to encode, or Base64 to decode, in the input box.",
      "Press Encode or Decode.",
      "Copy the output, swap the boxes, or Clear both.",
    ],
    examples: [
      {
        title: "ASCII",
        body: "“Hi” encodes to SGk=.",
      },
      {
        title: "Unicode",
        body: "Accented letters and emoji are encoded with UTF-8 before Base64, so they round-trip correctly.",
      },
    ],
    explanation:
      "Base64 turns binary data into letters, numbers, + and /. It is encoding, not encryption: anyone can decode it. This tool converts text to UTF-8 bytes, then Base64, and the reverse for decoding.",
    faqs: [
      freeFaq("Base64 Encoder"),
      {
        question: "Is Base64 secure?",
        answer:
          "No. It only changes the representation of the data. Do not use it to hide passwords or private information.",
      },
      {
        question: "Does this leave my browser?",
        answer:
          "No. Encoding and decoding run locally.",
      },
    ],
  },
  "unit-converter": {
    howTo: [
      "Choose a category: length, weight/mass or temperature.",
      "Enter a value and choose the from and to units.",
      "The result updates as you type. Use Swap units to reverse the conversion.",
    ],
    examples: [
      {
        title: "Length",
        body: "1 meter = 100 centimeters = about 3.28084 feet.",
      },
      {
        title: "Temperature",
        body: "0°C = 32°F = 273.15 K.",
      },
    ],
    explanation:
      "Length and weight conversions multiply through a base unit (meter or kilogram). Temperature conversions are not simple multiples: they use the Celsius/Fahrenheit/Kelvin formulas and reject values below absolute zero.",
    faqs: [
      freeFaq("Unit Converter"),
      {
        question: "Are these exact conversions?",
        answer:
          "Length and mass use international standard factors, such as 1 inch = 2.54 centimeters exactly. Temperature uses the standard formulas.",
      },
      localProcessingFaq,
    ],
  },
  "utm-builder": {
    howTo: [
      "Enter the website URL, with or without https://.",
      "Fill in source, medium and campaign. Term and content are optional.",
      "Copy the generated URL. Existing query parameters on the original link are kept.",
    ],
    examples: [
      {
        title: "A simple campaign link",
        body: "https://example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale",
      },
      {
        title: "A URL that already has parameters",
        body: "https://example.com/page?ref=nav keeps ref=nav and adds the UTM fields beside it.",
      },
    ],
    explanation:
      "UTM parameters tell analytics tools where a visit came from. utm_source is the platform, utm_medium is the channel, and utm_campaign is the name of the promotion. utm_term and utm_content are optional. Values are URL-encoded so spaces and special characters stay valid.",
    faqs: [
      freeFaq("UTM Builder"),
      {
        question: "Will this overwrite my other query parameters?",
        answer:
          "No. Only the UTM fields you fill in are added or updated. Other parameters stay as they are.",
      },
      {
        question: "Does this tool call a tracking service?",
        answer:
          "No. It only builds a URL in your browser. Tracking happens later, if you use the link in an analytics setup.",
      },
    ],
  },
  "image-compressor": {
    howTo: [
      "Choose a JPG, PNG or WebP image. You can drag it onto the box or use the file picker.",
      "Set quality between 10 and 100. Lower values usually make a smaller JPEG or WebP file.",
      "Choose an output format, then press Compress.",
      "Compare the file sizes and download the result. Reset clears the image from this page.",
    ],
    examples: [
      {
        title: "A large JPEG photo",
        body: "A camera JPEG often shrinks at quality 70–80 with only a small visual change.",
      },
      {
        title: "A PNG with lots of flat color",
        body: "Re-encoding PNG with this tool is lossless and may not get much smaller. Converting that PNG to JPEG usually reduces size.",
      },
    ],
    explanation:
      "Compression runs in your browser with the Canvas API. JPEG and WebP use a quality setting. PNG is re-encoded as PNG, which is lossless, so the file may not shrink. This is not a specialized encoder such as pngquant, and JPEG is lossy: repeating compression can add artifacts.",
    faqs: [
      freeFaq("Image Compressor"),
      {
        question: "Is my image uploaded?",
        answer:
          "No. Your image is processed in your browser and is not uploaded to our server. It is not saved in local storage.",
      },
      {
        question: "Which formats are supported?",
        answer:
          "You can open JPG, PNG and WebP. You can save as JPG, PNG or WebP if this browser can encode that format. GIF, HEIC and SVG are not supported.",
      },
    ],
  },
  "image-resizer": {
    howTo: [
      "Upload a JPG, PNG or WebP image.",
      "Check the original width and height.",
      "Enter a new width or height. Leave aspect ratio locked to keep proportions.",
      "Press Resize, review the new size, then download or reset.",
    ],
    examples: [
      {
        title: "Halve a 2000×1000 image",
        body: "With aspect ratio locked, width 1000 sets height to 500.",
      },
      {
        title: "Unlocked dimensions",
        body: "Turning the lock off lets you set width and height independently, which can stretch the image.",
      },
    ],
    explanation:
      "Resizing draws the image onto a canvas at the size you choose. Width and height must be whole numbers from 1 to 8192 pixels. Locked aspect ratio updates the other side from the original proportions. Output JPEG, PNG or WebP uses the same in-browser encoder as the compressor.",
    faqs: [
      freeFaq("Image Resizer"),
      {
        question: "Does this upload my photo?",
        answer:
          "No. Your image is processed in your browser and is not uploaded to our server.",
      },
      {
        question: "Why is there a size limit?",
        answer:
          "Very large dimensions can freeze a tab. This tool stops at 8192 pixels on each side.",
      },
    ],
  },
  "image-cropper": {
    howTo: [
      "Upload a JPG, PNG or WebP image.",
      "Drag the crop box to move it. Use the handles to resize it.",
      "Choose Free, 1:1, 4:3 or 16:9 if you need a set shape.",
      "Press Crop, preview the result, then download or reset.",
    ],
    examples: [
      {
        title: "Square social crop",
        body: "Choose 1:1, place the box on the subject, then crop.",
      },
      {
        title: "Widescreen",
        body: "16:9 keeps a wide frame while you move the box over the original photo.",
      },
    ],
    explanation:
      "The crop box is mapped back to the original pixels, then that rectangle is drawn to a canvas. Aspect-ratio options keep the box in proportion. This is a simple cropper, not a full photo editor: there is no rotate, filter or healing brush.",
    faqs: [
      freeFaq("Image Cropper"),
      {
        question: "Is the photo uploaded?",
        answer:
          "No. Your image is processed in your browser and is not uploaded to our server.",
      },
      {
        question: "Can I crop on a phone?",
        answer:
          "Yes. Drag the box with a finger. Handles are large enough to tap. The preview stays within the screen width.",
      },
    ],
  },
  "image-converter": {
    howTo: [
      "Upload a JPG or PNG image.",
      "Choose JPG → PNG or PNG → JPG. The tool also lets you pick the output format directly.",
      "If you convert PNG to JPG, set a background color for transparent pixels. White is the default.",
      "Press Convert, then download the file.",
    ],
    examples: [
      {
        title: "JPG to PNG",
        body: "Useful when you need PNG for further editing. JPEG artifacts already in the file stay in the pixels.",
      },
      {
        title: "PNG with transparency to JPG",
        body: "JPG has no alpha channel. Transparent pixels are filled with the background color you choose.",
      },
    ],
    explanation:
      "JPG is a lossy photo format without transparency. PNG is lossless and can include transparency. Converting JPG to PNG does not restore quality that JPEG already discarded. Converting PNG to JPG is also lossy. The conversion uses the browser canvas and stays on your device.",
    faqs: [
      freeFaq("Image Converter"),
      {
        question: "Is PNG to JPG lossless?",
        answer:
          "No. JPEG is a lossy format. Fine detail and sharp edges may change, and transparency becomes a solid background.",
      },
      {
        question: "Is the file uploaded?",
        answer:
          "No. Your image is processed in your browser and is not uploaded to our server.",
      },
    ],
  },
  "uuid-generator": {
    howTo: [
      "Choose how many UUID v4 values to generate, from 1 to 100.",
      "Press Generate. Use Regenerate for a new set with the same count.",
      "Copy one value or copy all of them. Clear removes the list.",
    ],
    examples: [
      {
        title: "One identifier",
        body: "A UUID v4 looks like 3f2504e0-4f89-41d3-9a0c-0305e82c3301, with version 4 in the third group.",
      },
      {
        title: "A batch",
        body: "Generating 10 values is useful for test data. Each value is created separately.",
      },
    ],
    explanation:
      "A UUID is a 128-bit identifier. Version 4 uses random bits, with a fixed version and variant. This tool uses crypto.randomUUID() when the browser provides it, or crypto.getRandomValues() otherwise. It does not use Math.random(). UUIDs are unique with extremely high probability, not a proof of identity or a secret.",
    faqs: [
      freeFaq("UUID Generator"),
      {
        question: "Are these UUIDs uploaded?",
        answer:
          "No. Values are created in your browser and are not sent to a server.",
      },
      {
        question: "Can I generate more than 100?",
        answer:
          "Not in one click. The limit keeps the page from filling with a huge list.",
      },
    ],
  },
  "url-encoder": {
    howTo: [
      "Paste the text or encoded string into the input box.",
      "Press Encode to apply encodeURIComponent, or Decode to reverse it.",
      "Copy the result, swap the boxes, or clear both.",
    ],
    examples: [
      {
        title: "A space and an ampersand",
        body: "“a b&c” encodes to a%20b%26c.",
      },
      {
        title: "Unicode",
        body: "Accented letters and other scripts encode to UTF-8 percent sequences and decode back to the original text.",
      },
    ],
    explanation:
      "URL encoding (percent-encoding) represents characters that are not safe in a URL component. It is not encryption: anyone can decode the result. This tool uses the browser’s encodeURIComponent and decodeURIComponent, which encode more characters than encodeURI (including ?, &, and /).",
    faqs: [
      freeFaq("URL Encoder"),
      {
        question: "Why did decoding fail?",
        answer:
          "Incomplete sequences such as %E0%A4%A are invalid. The tool shows an error instead of crashing.",
      },
      {
        question: "Is my text sent to a server?",
        answer:
          "No. Encoding and decoding run in your browser.",
      },
    ],
  },
  "timestamp-converter": {
    howTo: [
      "For timestamp → date, enter a Unix value and choose seconds or milliseconds. The tool does not guess the unit.",
      "Press Convert to see local time, UTC and ISO 8601. Use Current timestamp to fill in now.",
      "For date → timestamp, enter a date and time and choose browser local time or UTC.",
    ],
    examples: [
      {
        title: "Seconds",
        body: "1710000000 seconds is 2024-03-09T16:00:00.000Z.",
      },
      {
        title: "Milliseconds",
        body: "1710000000000 milliseconds is the same instant. Using the wrong unit produces a date centuries away.",
      },
    ],
    explanation:
      "A Unix timestamp counts time from 1 January 1970 00:00:00 UTC. Some systems store seconds; JavaScript Date uses milliseconds. This tool labels the unit you chose. If the number looks like the other unit, it warns you but still converts with your selection.",
    faqs: [
      freeFaq("Unix Timestamp Converter"),
      {
        question: "Does this use my timezone?",
        answer:
          "The local readout uses this browser’s timezone. UTC and ISO 8601 are timezone-independent. Date → timestamp can be interpreted as local or UTC.",
      },
      localProcessingFaq,
    ],
  },
  "slug-generator": {
    howTo: [
      "Type or paste a title.",
      "The slug updates as you type.",
      "Copy the slug, or clear the box.",
    ],
    examples: [
      {
        title: "A blog title",
        body: "“How to Compress an Image Without Losing Quality” becomes how-to-compress-an-image-without-losing-quality.",
      },
      {
        title: "Accents and other scripts",
        body: "Latin accents are stripped (Café → cafe). Letters such as 你好 are kept, so the slug stays readable.",
      },
    ],
    explanation:
      "The generator trims the text, splits off combining marks after Unicode NFKD normalization, lowercases Latin letters, turns other separators into hyphens, and collapses repeats. It keeps Unicode letters and numbers instead of deleting every non-English character. The result is a practical permalink, not a guaranteed unique ID.",
    faqs: [
      freeFaq("Slug Generator"),
      {
        question: "Will this match every CMS?",
        answer:
          "Most sites accept hyphenated lowercase slugs. Some strip non-Latin letters; this tool keeps them when they are letters or numbers.",
      },
      localProcessingFaq,
    ],
  },
  "case-converter": {
    howTo: [
      "Paste text into the box.",
      "Choose a case. The output updates immediately.",
      "Copy the result or clear both boxes.",
    ],
    examples: [
      {
        title: "Title Case",
        body: "“hello world” becomes “Hello World”. Each word is capitalized.",
      },
      {
        title: "camelCase",
        body: "“Hello world example” becomes helloWorldExample.",
      },
    ],
    explanation:
      "UPPERCASE and lowercase use the English locale. Title Case capitalizes the first letter of each word. Sentence case lowercases the text, then capitalizes the start of the string and letters after . ! ? or … — a simple English-oriented rule, not a grammar checker for every language. camelCase, PascalCase, snake_case and kebab-case are built from letter and number groups.",
    faqs: [
      freeFaq("Case Converter"),
      {
        question: "Does sentence case work in every language?",
        answer:
          "No. It follows a basic English punctuation pattern. It will not apply language-specific rules.",
      },
      localProcessingFaq,
    ],
  },
  "lorem-ipsum-generator": {
    howTo: [
      "Choose paragraphs, sentences or words.",
      "Set a quantity within the shown limits, then press Generate.",
      "Copy the text, generate again, or reset to the defaults.",
    ],
    examples: [
      {
        title: "Three paragraphs",
        body: "The first paragraph starts with the classic “Lorem ipsum dolor sit amet…” line, then continues with shuffled words from a local word bank.",
      },
      {
        title: "Fifty words",
        body: "Useful for a short placeholder in a mockup.",
      },
    ],
    explanation:
      "Lorem ipsum is scrambled Latin used as dummy text so layout can be judged without real copy. This generator uses a local word list and the browser’s cryptographically strong random values. It does not call an external API. Quantity is capped so the page stays usable.",
    faqs: [
      freeFaq("Lorem Ipsum Generator"),
      {
        question: "Is the text downloaded from the internet?",
        answer:
          "No. Words are stored in this page and assembled in your browser.",
      },
      {
        question: "Why is there a maximum?",
        answer:
          "Very large blocks can freeze a tab. Paragraphs stop at 20, sentences at 50 and words at 500.",
      },
    ],
  },
  "pdf-to-jpg": {
    howTo: [
      "Upload a PDF from your device. The file stays in this browser tab.",
      "Check the file name, size and page count. Thumbnail previews appear for the first 12 pages.",
      "Choose first page, selected pages, or all pages. Adjust JPG quality if you need a smaller or sharper image.",
      "Press Convert, then download one page or all generated JPG files.",
    ],
    examples: [
      {
        title: "First page only",
        body: "Useful for a cover thumbnail. The tool renders page 1 at 1.5× scale, then encodes JPEG.",
      },
      {
        title: "Selected pages",
        body: "Tick the pages you need. Only those pages are rendered, which keeps memory use lower than converting everything.",
      },
    ],
    explanation:
      "PDF pages are rendered locally with PDF.js, then drawn to a canvas and saved as JPEG. There is no upload to a conversion API. To keep the tab stable, files are limited to 20 MB and 40 pages, render scale starts at 1.5×, and the longest edge is capped at 4,096 pixels. Password-protected PDFs are not opened.",
    faqs: [
      freeFaq("PDF to JPG converter"),
      {
        question: "Is the PDF uploaded?",
        answer:
          "No. Your PDF is processed in your browser and is not uploaded to our server.",
      },
      {
        question: "Why is there a page or size limit?",
        answer:
          "Rendering many large pages can exhaust memory and freeze the tab. Split very large PDFs first, or convert a smaller selection of pages.",
      },
      {
        question: "Can I open a password-protected PDF?",
        answer:
          "Not in this version. Unlock the file in a PDF reader, then convert the unlocked copy.",
      },
    ],
  },
  "hex-to-rgb": {
    howTo: [
      "Type a hex color, with or without #. 3-digit, 6-digit and 8-digit values are accepted.",
      "RGB, RGBA (when alpha is present), normalized HEX and HSL appear automatically.",
      "Copy any format, try an example, or reset the field.",
    ],
    examples: [
      {
        title: "#336699",
        body: "rgb(51, 102, 153). HSL is hsl(210, 50%, 40%).",
      },
      {
        title: "#fff",
        body: "3-digit hex expands to #ffffff, which is rgb(255, 255, 255).",
      },
      {
        title: "#336699cc",
        body: "8-digit hex includes alpha. The extra pair is about 80% opacity, shown as RGBA.",
      },
    ],
    explanation:
      "HEX writes red, green and blue as base-16 pairs. A 3-digit value doubles each digit. An 8-digit value adds an alpha pair. RGB uses 0–255 per channel. HSL describes the same color as hue, saturation and lightness. Conversion is arithmetic in the browser; it does not call a color API.",
    faqs: [
      freeFaq("Hex to RGB converter"),
      {
        question: "Do I need the #?",
        answer: "No. FFFFFF and #FFFFFF are treated the same.",
      },
      localProcessingFaq,
    ],
  },
  "color-picker": {
    howTo: [
      "Use the native color input, or type a hex value.",
      "Copy HEX, RGB or HSL.",
      "Reset returns the picker to the default blue.",
    ],
    examples: [
      {
        title: "HEX",
        body: "#2563eb is a six-digit hex color: two digits each for red, green and blue.",
      },
      {
        title: "RGB",
        body: "The same color is rgb(37, 99, 235).",
      },
      {
        title: "HSL",
        body: "HSL describes hue, saturation and lightness. It is useful when you want to lighten or saturate a color.",
      },
    ],
    explanation:
      "HEX is a compact CSS color written in hexadecimal. RGB lists the same channels as decimal numbers from 0 to 255. HSL uses hue (0–360), saturation and lightness. The picker uses the browser’s native color input, so the system color UI appears on phones and desktops. Values are converted locally.",
    faqs: [
      freeFaq("Color Picker"),
      {
        question: "Does this use a large color-picker library?",
        answer:
          "No. It uses the browser’s native color input plus hex parsing in this page.",
      },
      localProcessingFaq,
    ],
  },
  "qr-code-generator": {
    howTo: [
      "Paste text or a full URL, including https:// if it is a web link.",
      "Press Generate. A preview and an accessible description appear.",
      "Download the PNG, then reset if you need a different code.",
    ],
    examples: [
      {
        title: "A website",
        body: "https://example.com becomes a QR code that opens that address when scanned.",
      },
      {
        title: "Plain text",
        body: "A short note or Wi-Fi reminder can be encoded as text. Keep it under 1,200 characters so the pattern stays readable.",
      },
    ],
    explanation:
      "A QR code is a matrix barcode. This tool builds the pattern in your browser with a client-side library. The text is not sent to a QR API. Very long content makes a dense code that many cameras struggle to read, so length is capped.",
    faqs: [
      freeFaq("QR Code Generator"),
      {
        question: "Is the text uploaded?",
        answer:
          "No. The QR code is generated in your browser. The text is not sent to a server.",
      },
      {
        question: "Will every scanner read the PNG?",
        answer:
          "Most cameras can read a high-contrast PNG of a short URL. Tiny prints, low light, or very long text can fail.",
      },
    ],
  },
  "qr-code-scanner": {
    howTo: [
      "Press Start camera only if you want to scan with the device camera. Permission is requested at that moment, not on page load.",
      "Hold the code in view until a result appears, or press Stop camera to release the stream.",
      "If the camera is blocked, upload a PNG or JPG of the code instead.",
      "Copy the result. If it is an http(s) URL, Open link is offered. The page does not navigate by itself.",
    ],
    examples: [
      {
        title: "Camera scan",
        body: "After you start the camera, frames are decoded in the tab. The stream stops when a code is found or when you press Stop.",
      },
      {
        title: "Image upload",
        body: "A screenshot of a QR code can be decoded even when camera permission is denied.",
      },
    ],
    explanation:
      "Decoding uses a local JavaScript reader on camera frames or an uploaded image. Camera access starts only after you click Start camera. Tracks are stopped on Stop, successful scan, and when you leave the page. A detected URL is shown first; opening it is a separate action.",
    faqs: [
      freeFaq("QR Code Scanner"),
      {
        question: "Are camera frames uploaded?",
        answer:
          "No. Your camera frames and uploaded images are processed in your browser and are not uploaded to our server.",
      },
      {
        question: "Why didn’t it open the website automatically?",
        answer:
          "Automatic navigation to a scanned URL is unsafe. Review the text, then use Open link if you trust it.",
      },
      {
        question: "What if the image has more than one QR code?",
        answer:
          "This reader reports the first code it can decode. Crop the image if you need a specific code.",
      },
    ],
  },
  "html-encoder": {
    howTo: [
      "Paste HTML or encoded text into the input box.",
      "Choose HTML encode or HTML decode, then press the matching button.",
      "Copy the result, swap the two boxes, or clear both.",
    ],
    examples: [
      {
        title: "Encode a tag",
        body: "<div>Hello</div> becomes &lt;div&gt;Hello&lt;/div&gt; so it can be shown as text.",
      },
      {
        title: "Ampersands and quotes",
        body: "& is encoded as &amp;, double quotes as &quot;, and apostrophes as &#39;.",
      },
    ],
    explanation:
      "HTML encoding replaces characters that have special meaning in markup. Decoding turns common named entities and numeric character references back into characters. The tool treats your input as plain text. It does not run HTML or inject it into the page.",
    faqs: [
      freeFaq("HTML Encoder / Decoder"),
      {
        question: "Will my HTML run on this page?",
        answer:
          "No. Input is never executed and is never inserted with innerHTML.",
      },
      localProcessingFaq,
    ],
  },
  "html-minifier": {
    howTo: [
      "Paste HTML source into the left box.",
      "Press Minify. Character counts and an estimated reduction appear when there is output.",
      "Copy the result or clear both boxes.",
    ],
    examples: [
      {
        title: "Ordinary markup",
        body: "Comments are removed and extra whitespace between tags is collapsed.",
      },
      {
        title: "Whitespace-sensitive tags",
        body: "Content inside pre, textarea, script and style is left alone so formatting there is not destroyed.",
      },
    ],
    explanation:
      "This is a conservative minifier. It strips HTML comments and collapses whitespace outside preserved elements. Quoted attributes are kept. It does not rewrite the DOM, and it does not claim that every HTML document will behave identically after minification—especially pages that depend on formatting outside pre/textarea/script/style.",
    faqs: [
      freeFaq("HTML Minifier"),
      {
        question: "Is the minified HTML always equivalent?",
        answer:
          "No. The pass is intentionally conservative, but HTML that depends on whitespace in unexpected places can still change. Check the result before publishing.",
      },
      localProcessingFaq,
    ],
  },
  "css-minifier": {
    howTo: [
      "Paste CSS into the left box.",
      "Press Minify to remove comments and unnecessary whitespace.",
      "Compare the before/after counts, then copy or clear.",
    ],
    examples: [
      {
        title: "Rules and comments",
        body: "/* note */ .hero { color: #2563eb; } becomes .hero{color:#2563eb;}",
      },
      {
        title: "url() and strings",
        body: "Spaces inside quoted strings and url() values are kept. calc() and custom properties keep the spaces they need.",
      },
    ],
    explanation:
      "The CSS minifier walks the source as tokens rather than applying a single naive regex. It removes comments, then drops whitespace that is not required between identifiers, braces and operators. Strings, data URLs and escaped characters stay intact. It is conservative: it will not perform advanced optimizations such as merging selectors.",
    faqs: [
      freeFaq("CSS Minifier"),
      {
        question: "Can this break my stylesheet?",
        answer:
          "Unusual hacks or files that are not CSS can still fail. Valid everyday stylesheets should minify cleanly. Review the output if you rely on exotic syntax.",
      },
      localProcessingFaq,
    ],
  },
  "javascript-minifier": {
    howTo: [
      "Paste JavaScript into the left box.",
      "Press Minify. A parser compresses and mangles the source without running it.",
      "Copy the result or clear both boxes. Syntax errors are shown instead of output.",
    ],
    examples: [
      {
        title: "A small function",
        body: "function greet(name) { return \"Hello, \" + name; } is parsed, then shortened by removing whitespace and renaming locals where safe.",
      },
      {
        title: "Invalid source",
        body: "If the parser cannot read the file, you get an error. The tool does not try to “fix” broken JavaScript.",
      },
    ],
    explanation:
      "JavaScript cannot be minified safely with simple find-and-replace. This tool uses Terser in the browser to parse the source, then compress and mangle it. Your code is not executed with eval or new Function. Constant-expression evaluation is turned off so user expressions are not run during minify. Very large files are rejected so the tab stays responsive.",
    faqs: [
      freeFaq("JavaScript Minifier"),
      {
        question: "Does this run my JavaScript?",
        answer:
          "No. The source is parsed and rewritten. It is not executed in this page.",
      },
      {
        question: "Will every program minify?",
        answer:
          "Only syntactically valid JavaScript. Browser-incompatible syntax or truncated files will fail with a parser error.",
      },
      localProcessingFaq,
    ],
  },
  "password-generator": {
    howTo: [
      "Choose a length from 8 to 64 and the character types you want.",
      "Optionally exclude ambiguous characters such as O, 0, I, l and 1.",
      "Press Generate, then copy the password. Nothing is stored.",
    ],
    examples: [
      {
        title: "16 mixed characters",
        body: "A 16-character password that includes upper, lower, numbers and symbols has a large character space. The strength label is an estimate from length and set size.",
      },
      {
        title: "Letters only",
        body: "Turning off numbers and symbols shrinks the set. The generator still requires at least one selected type.",
      },
    ],
    explanation:
      "Each character is chosen with crypto.getRandomValues(), not Math.random(). The generator includes at least one character from every selected set, then fills the rest from the combined set using unbiased sampling. The strength label (Short / Moderate / Strong) is estimated from length × log2(set size). It is not a guarantee against guessing, reuse, or a leaked site.",
    faqs: [
      freeFaq("Password Generator"),
      {
        question: "Are passwords saved?",
        answer:
          "No. They are not stored, logged, put in the URL, or written to localStorage. Copy the value if you need it.",
      },
      {
        question: "Does Strong mean unhackable?",
        answer:
          "No. The meter is an estimate from length and character-set size. It does not account for reuse, phishing, or a compromised service.",
      },
    ],
  },
  "image-to-pdf": {
    howTo: [
      "Add one or more JPG or PNG images. You can drag files onto the drop zone.",
      "Reorder the list so pages appear in the order you want. Remove any image you do not need.",
      "Choose page size, orientation, margin and how each image should fit.",
      "Create the PDF, then download it. Nothing is uploaded.",
    ],
    examples: [
      {
        title: "A set of scans",
        body: "Drop several JPGs, move the cover to the top, choose A4 and Fit to page, then download.",
      },
      {
        title: "Screenshots at original size",
        body: "Choose Original / auto so each page follows the image. Very large images are downsampled first so the PDF stays manageable.",
      },
    ],
    explanation:
      "Each selected image becomes a page. Fit keeps the whole image visible. Fill covers the page and may crop. Original size uses the image dimensions when they fit, otherwise it falls back to fit. Processing stays in this browser; large sides are reduced before embedding so the file does not balloon.",
    faqs: [
      freeFaq("Image to PDF tool"),
      {
        question: "Are my photos uploaded?",
        answer:
          "No. Images are read and written to a PDF in your browser. They are not sent to Tools Star Hub.",
      },
      {
        question: "Why was my image resized?",
        answer:
          "Sides longer than 2000 pixels are downsampled before they are embedded. That keeps memory use and PDF size reasonable.",
      },
      localProcessingFaq,
    ],
  },
  "pdf-merger": {
    howTo: [
      "Add two or more PDF files.",
      "Confirm each file’s name, size and page count.",
      "Reorder the list if needed. The merged file follows this order.",
      "Merge and download. Password-protected PDFs cannot be opened.",
    ],
    examples: [
      {
        title: "Cover plus report",
        body: "Add cover.pdf then report.pdf, or use Up/Down to swap them, then merge.",
      },
      {
        title: "One file only",
        body: "A single PDF does not need merging. Add a second file first.",
      },
    ],
    explanation:
      "The merger copies pages from each document in list order using a local PDF library. It does not flatten forms or remove encryption. Combined page counts are capped so the tab stays usable.",
    faqs: [
      freeFaq("PDF Merger"),
      {
        question: "Can I merge a locked PDF?",
        answer:
          "Not if it is password-protected. Unlock the file in a PDF reader first.",
      },
      localProcessingFaq,
    ],
  },
  "pdf-splitter": {
    howTo: [
      "Choose one PDF. The page count is shown after it loads.",
      "Enter pages such as 1-3, 2,5,7 or 1-3,6,9-11, or tick individual pages.",
      "Create a new PDF that contains only those pages, then download it.",
    ],
    examples: [
      {
        title: "A contiguous range",
        body: "1-3 copies pages 1, 2 and 3 in that order.",
      },
      {
        title: "Mixed ranges",
        body: "1-3,6,9-11 copies 1, 2, 3, 6, 9, 10 and 11. Duplicates are ignored, keeping the first occurrence.",
      },
    ],
    explanation:
      "Page numbers start at 1. Reversed ranges such as 5-2 are rejected. Empty tokens and values outside the document are rejected. The new file is built locally; the original is not uploaded.",
    faqs: [
      freeFaq("PDF Splitter"),
      {
        question: "Does this delete pages from my original?",
        answer:
          "No. It builds a separate PDF. Your original file stays on your device.",
      },
      localProcessingFaq,
    ],
  },
  "pdf-page-counter": {
    howTo: [
      "Choose a PDF file.",
      "Read the page count, file name and size.",
      "Reset to clear the result.",
    ],
    examples: [
      {
        title: "A 12-page brochure",
        body: "After the file loads, the tool reports 12 pages along with the file name and size.",
      },
    ],
    explanation:
      "The count is read from the PDF structure in your browser. Blank pages and covers are included. This is not an editor and does not extract or rearrange pages.",
    faqs: [
      freeFaq("PDF Page Counter"),
      {
        question: "Why can’t a file be counted?",
        answer:
          "The file may not be a PDF, may be damaged, or may be password-protected.",
      },
      localProcessingFaq,
    ],
  },
  "image-color-analyzer": {
    howTo: [
      "Upload a JPG, PNG or WebP image.",
      "Choose how many dominant colors to show, from 3 to 10.",
      "Analyze, then copy HEX or RGB values from the swatches.",
    ],
    examples: [
      {
        title: "A photo of a blue sky",
        body: "Most sampled pixels fall into blue-ish buckets. The listed share is the portion of sampled pixels, not a laboratory measurement.",
      },
    ],
    explanation:
      "The image is downsampled, then similar pixels are grouped. The listed colors are averages of those groups. This is an approximation from processed pixels, not a mathematically exact palette or print proof.",
    faqs: [
      freeFaq("Image Color Analyzer"),
      {
        question: "Are the percentages exact?",
        answer:
          "No. They describe sampled, quantized pixels from a smaller copy of the image. Fine details and rare colors can be missed.",
      },
      localProcessingFaq,
    ],
  },
  "color-contrast-checker": {
    howTo: [
      "Pick a foreground color and a background color, or type HEX values.",
      "Read the contrast ratio and the AA/AAA results for normal and large text.",
      "Swap the colors if you need the inverse pair.",
    ],
    examples: [
      {
        title: "Black on white",
        body: "The ratio is 21:1, which meets every listed WCAG contrast criterion.",
      },
      {
        title: "Similar greys",
        body: "A pair such as #777777 on #999999 fails normal-text AA because the ratio is well below 4.5:1.",
      },
    ],
    explanation:
      "The tool uses WCAG 2 relative luminance. A pass means the pair meets the selected WCAG contrast criterion. Contrast is only one part of accessibility. Font size, weight, spacing and keyboard access still matter. The checker does not claim a design is universally accessible.",
    faqs: [
      freeFaq("Color Contrast Checker"),
      {
        question: "Does a pass mean my UI is accessible?",
        answer:
          "No. It only means that color pair meets that contrast threshold. Other requirements still apply.",
      },
    ],
  },
  "css-gradient-generator": {
    howTo: [
      "Choose linear or radial.",
      "Set colors and positions for each stop. Add or remove stops as needed.",
      "For linear gradients, set the angle. Copy the generated CSS.",
    ],
    examples: [
      {
        title: "A simple linear fill",
        body: "background: linear-gradient(90deg, #336699 0%, #ffffff 100%);",
      },
      {
        title: "A radial fill",
        body: "background: radial-gradient(circle, #336699 0%, #ffffff 100%);",
      },
    ],
    explanation:
      "Stops are sorted by position and written as valid CSS color stops. Only parsed hex colors are used in the preview, so user text is not executed as HTML or JavaScript.",
    faqs: [
      freeFaq("CSS Gradient Generator"),
      {
        question: "Can I paste arbitrary CSS?",
        answer:
          "No. The tool generates a background declaration from the controls. It does not run custom CSS or HTML.",
      },
    ],
  },
  "box-shadow-generator": {
    howTo: [
      "Adjust horizontal and vertical offset, blur, spread, color and opacity.",
      "Turn on inset if you want an inner shadow.",
      "Copy the CSS. The preview uses the same values.",
    ],
    examples: [
      {
        title: "A soft drop shadow",
        body: "box-shadow: 0 8px 24px rgba(15, 39, 68, 0.2);",
      },
    ],
    explanation:
      "Offset shifts the shadow. Blur softens the edge. Spread grows or shrinks the shadow before blur. Opacity is applied as RGBA. The preview and the copied CSS use the same computed value.",
    faqs: [
      freeFaq("Box Shadow Generator"),
      {
        question: "Can I stack several shadows?",
        answer:
          "This version generates one shadow. You can combine copied values manually in your stylesheet if you need layers.",
      },
    ],
  },
  "qr-code-generator-pro": {
    howTo: [
      "Choose a type: text/URL, Wi-Fi, email, phone, SMS or contact.",
      "Fill the fields for that type. Invalid values are rejected before a code is drawn.",
      "Optionally change colors, size, quiet zone and error correction, then generate and download a PNG.",
    ],
    examples: [
      {
        title: "Wi-Fi",
        body: "A WPA network named Cafe is encoded as WIFI:T:WPA;S:Cafe;P:Password;;",
      },
      {
        title: "Phone",
        body: "A number such as +1 202 555 0100 becomes a tel: payload without spaces.",
      },
    ],
    explanation:
      "Structured types are converted to the usual QR text formats (WIFI, mailto, tel, SMSTO, vCard 3.0). Generation uses the same local QR library as the basic generator. Contents are not stored, logged, or placed in the page URL.",
    faqs: [
      freeFaq("QR Code Generator Pro"),
      {
        question: "Is this different from the basic QR generator?",
        answer:
          "Yes. The basic tool encodes plain text or a URL. This version adds structured types, colors and error-correction controls. The basic tool is unchanged.",
      },
      {
        question: "Are Wi-Fi passwords saved?",
        answer:
          "No. They stay in this page until you reset or leave. They are not written to localStorage or sent to a server.",
      },
    ],
  },
  "random-number-generator": {
    howTo: [
      "Enter a minimum, maximum and how many numbers to produce.",
      "Choose integer or decimal. Optionally require unique integers.",
      "Generate, then copy the results.",
    ],
    examples: [
      {
        title: "Five unique integers from 1 to 10",
        body: "The tool draws without replacement. Asking for 11 unique values in that range is rejected.",
      },
      {
        title: "Decimals",
        body: "Values are rounded to six decimal places from a 32-bit unit interval. Unique mode is not offered for decimals.",
      },
    ],
    explanation:
      "Integers use crypto.getRandomValues() with rejection sampling so each value in the range is equally likely. That avoids a biased modulo. The generator is suitable for casual draws. It is not presented as cryptographic security for every statistical or security use.",
    faqs: [
      freeFaq("Random Number Generator"),
      {
        question: "Is this cryptographically secure?",
        answer:
          "It uses the Web Crypto CSPRNG for each sample, with unbiased integer selection. That is stronger than Math.random(). It is still not a complete design for lotteries, keys, or scientific sampling protocols.",
      },
      {
        question: "Why can’t I use unique mode with decimals?",
        answer:
          "Decimals are rounded to a fixed precision, so uniqueness is ambiguous. Use integers when you need a unique set.",
      },
    ],
  },
  "pdf-compressor": {
    howTo: [
      "Choose a PDF from your device. The file stays in this browser tab.",
      "Pick Low compression (rewrite, keep text), Balanced (copy pages into a new file), or Strong (rasterize pages to JPEG).",
      "Press Compress and check original size, output size and the change percentage.",
      "Download the result if it is useful. Reset to try another file or preset.",
    ],
    examples: [
      {
        title: "A text-heavy report",
        body: "Start with Balanced. Many already-compressed PDFs barely shrink. Strong would replace selectable text with images, which is usually the wrong trade for a report.",
      },
      {
        title: "A scan made of page photos",
        body: "Strong compression can reduce size by re-encoding pages as JPEG. Text will not stay selectable. Low and Balanced often change little on files that are already JPEG pages.",
      },
    ],
    explanation:
      "Low and Balanced rewrite PDF structure without turning pages into pictures, so vectors and text stay. Strong renders each page to a JPEG and rebuilds the document, which can shrink photo-heavy files and will destroy selectable text. Tools Star Hub does not claim a guaranteed reduction. Some files stay similar in size or grow slightly.",
    faqs: [
      freeFaq("PDF Compressor"),
      {
        question: "How do I compress a PDF?",
        answer:
          "Open the PDF Compressor, choose the file, pick a preset, then compress and download. Processing stays in your browser.",
      },
      {
        question: "Will every PDF get smaller?",
        answer:
          "No. If the file is already compressed, a rewrite can stay about the same size. Strong rasterization can even grow a simple text PDF.",
      },
      {
        question: "Is this lossless?",
        answer:
          "Low and Balanced keep page content as it is and only rewrite structure. That is not a promise of smaller files. Strong is lossy because pages become JPEG images.",
      },
    ],
  },
  "pdf-to-text": {
    howTo: [
      "Upload a PDF. Page count and file size appear after the file is read locally.",
      "Choose all pages, one page, or a range such as 1-3,5.",
      "Press Extract text. Copy the result or download a .txt file.",
      "If a page is blank in the output, it likely has no text layer.",
    ],
    examples: [
      {
        title: "A digital invoice",
        body: "Born-digital PDFs usually have a text layer. Extracting all pages gives a usable draft you can copy into a spreadsheet or editor.",
      },
      {
        title: "A photographed contract",
        body: "A scan stored as images often yields empty pages. This tool does not perform OCR. Use a dedicated OCR app if you need to read pictures of text.",
      },
    ],
    explanation:
      "PDF.js reads the text content stored in each page. That is not optical character recognition. Line breaks are reconstructed from glyph positions, which is readable for most born-digital files and imperfect for tightly designed layouts.",
    faqs: [
      freeFaq("PDF to Text tool"),
      {
        question: "Does this upload my PDF?",
        answer:
          "No. Your PDF is processed in your browser and is not uploaded to our server.",
      },
      {
        question: "Why is the output empty?",
        answer:
          "The page may be an image with no text layer, or the file may be encrypted. This converter does not include OCR.",
      },
    ],
  },
  "pdf-metadata": {
    howTo: [
      "Choose a PDF. Filename, size and page count are shown with any standard Info fields.",
      "Review Title, Author, Subject, Keywords, Creator, Producer and dates when they exist.",
      "Press Remove metadata to build a copy with those document Info fields cleared.",
      "Download the cleaned PDF. Keep the original if you still need the properties.",
    ],
    examples: [
      {
        title: "A file with an old author name",
        body: "The viewer shows Author and Creator when the Info dictionary has them. Removing metadata clears those fields in the new download, not in the file still on disk.",
      },
      {
        title: "An empty properties panel",
        body: "Many PDFs never set Title or Author. The tool still reports filename, size and page count.",
      },
    ],
    explanation:
      "PDF files can store a document Info dictionary (and sometimes other metadata streams). This tool reads common Info fields with pdf-lib and can copy pages into a new file so those fields are blank. That is not a forensic wipe. Body text, comments, embedded files and images can still identify a person or device.",
    faqs: [
      freeFaq("PDF Metadata Viewer / Remover"),
      {
        question: "What is PDF metadata?",
        answer:
          "It is extra information stored with the document, such as title, author, subject, keywords, creator, producer and dates. It is separate from the words on the pages.",
      },
      {
        question: "Does removing metadata make the PDF anonymous?",
        answer:
          "No. Clearing standard Info fields does not remove all possible identifying information from content, annotations, embedded objects, file history or other structures.",
      },
    ],
  },
  "text-to-pdf": {
    howTo: [
      "Paste or type the text. Optionally add a title.",
      "Choose A4 or Letter, a margin, font size and line spacing. Turn page numbers on if you want them.",
      "Press Create PDF. Long lines wrap. Extra pages are added as needed.",
      "Download the PDF. Clear the box when you are done; nothing is stored.",
    ],
    examples: [
      {
        title: "Meeting notes",
        body: "Paste a few paragraphs, keep medium margins and 12 pt type, then download. Page numbers help if the notes run past one page.",
      },
      {
        title: "A very long log",
        body: "The tool caps input so the tab stays usable. Split huge logs first. Characters that Helvetica cannot draw are replaced with “?”.",
      },
    ],
    explanation:
      "Pages are built with pdf-lib and the standard Helvetica font. Text is wrapped to the content box. Helvetica covers Latin and a limited set of extra characters, not every Unicode script. The tool reports how many characters were replaced rather than pretending the font is universal.",
    faqs: [
      freeFaq("Text to PDF converter"),
      {
        question: "Can I use any language?",
        answer:
          "Latin text usually works. Many other scripts are outside Helvetica’s coverage and will show as “?”. This is a font limit, not a language filter.",
      },
      localProcessingFaq,
    ],
  },
  "markdown-to-html": {
    howTo: [
      "Paste Markdown, or load the sample to see supported features.",
      "Press Convert to produce HTML source in the output box.",
      "Copy the HTML or download a .html file.",
      "Do not expect a live rendered preview. Output is shown as text so it cannot run in the page.",
    ],
    examples: [
      {
        title: "A README heading",
        body: "# Notes becomes <h1>Notes</h1>. **bold** and *italic* become strong and em. Links keep only http, https, mailto, / and # targets.",
      },
      {
        title: "Fenced code",
        body: "Triple backticks wrap a pre/code block. The contents are escaped so <script> in a fence is text, not a script.",
      },
    ],
    explanation:
      "The converter supports common Markdown: headings, paragraphs, emphasis, links, lists, quotes, inline code, fenced blocks, horizontal rules and simple tables. Raw HTML in the Markdown is escaped. javascript: links are dropped. There is no HTML preview on the page.",
    faqs: [
      freeFaq("Markdown to HTML converter"),
      {
        question: "How do I convert Markdown to HTML?",
        answer:
          "Paste Markdown into the left box and press Convert. Copy or download the HTML source. Conversion runs in your browser.",
      },
      {
        question: "Will HTML in my Markdown run?",
        answer:
          "No. Tags in the input are escaped. The output box is a textarea, not a live document.",
      },
    ],
  },
  "html-to-markdown": {
    howTo: [
      "Paste HTML source. It is treated as text, not loaded as a page.",
      "Press Convert. Common tags become Markdown; script and style blocks are skipped.",
      "Copy the Markdown or download a .md file.",
      "Use Sample to see a safe example that does not execute.",
    ],
    examples: [
      {
        title: "A blog excerpt",
        body: "<h2>Title</h2><p>Hello <strong>world</strong></p> becomes ## Title and a paragraph with **world**.",
      },
      {
        title: "Unwanted scripts",
        body: "A <script> block is ignored. The converter never evals or injects the markup into the document.",
      },
    ],
    explanation:
      "HTML is tokenized as source. Headings, paragraphs, links, emphasis, lists, quotes, code, pre, images, tables and rules map to Markdown. Nested layouts and custom elements may flatten. This is a practical subset, not a full HTML implementation.",
    faqs: [
      freeFaq("HTML to Markdown converter"),
      {
        question: "Is the HTML executed?",
        answer:
          "No. It never becomes live DOM on this page. Script, style and iframe contents are skipped.",
      },
      localProcessingFaq,
    ],
  },
  "text-diff": {
    howTo: [
      "Paste the original text on the left and the modified text on the right.",
      "Choose line comparison or word comparison.",
      "Press Compare. Added, removed and unchanged blocks are labeled, not only colored.",
      "Copy the plain diff if you need it in another editor. Clear both sides when finished.",
    ],
    examples: [
      {
        title: "Two versions of a paragraph",
        body: "Line mode highlights whole lines that changed. Word mode is better when a sentence was edited in place.",
      },
      {
        title: "Identical files",
        body: "If both sides match, the summary shows only unchanged content and no added or removed blocks.",
      },
    ],
    explanation:
      "The checker compares tokens in your browser. It does not send text anywhere and does not keep drafts in local storage. Differences are rendered as React text nodes, so user content cannot inject HTML. Very large inputs are rejected to keep the tab responsive.",
    faqs: [
      freeFaq("Text Diff Checker"),
      {
        question: "How do I compare two text files?",
        answer:
          "Paste each version into a panel, choose Lines or Words, then Compare. You can copy a +/- view of the result.",
      },
      localProcessingFaq,
    ],
  },
  "duplicate-line-remover": {
    howTo: [
      "Paste multiline text. The input is not changed until you run the tool.",
      "Optionally match case-insensitively, trim spaces before comparing, or drop empty lines.",
      "Press Remove duplicates. The first occurrence of each line is kept, in order.",
      "Copy or download the unique list. Clear both boxes when you are done.",
    ],
    examples: [
      {
        title: "A mailing list",
        body: "apple, Apple, apple with trim and case-insensitive matching become a single apple, keeping the first spelling you pasted.",
      },
      {
        title: "Blank lines",
        body: "Turn on Remove empty lines if you want only non-blank unique rows. Otherwise empty lines are a value like any other.",
      },
    ],
    explanation:
      "Each line is keyed by the comparison options. The first time a key appears it is kept; later repeats are counted as duplicates removed. Order of first occurrences is preserved.",
    faqs: [
      freeFaq("Duplicate Line Remover"),
      localProcessingFaq,
      {
        question: "Does it change the original box?",
        answer:
          "No. Input stays as you pasted it. The unique list appears in the result box after you run the operation.",
      },
    ],
  },
  "whitespace-remover": {
    howTo: [
      "Paste text that has extra spaces, tabs or blank lines.",
      "Select only the cleanups you want. Nothing runs until you press Clean text.",
      "Review line and character counts, then copy or download the result.",
      "Clear the boxes to discard the text. It is not saved.",
    ],
    examples: [
      {
        title: "Indented log lines",
        body: "Trim each line, or remove leading whitespace only if you need to keep trailing spaces.",
      },
      {
        title: "Mixed tabs and spaces",
        body: "Convert tabs to 2 or 4 spaces, then collapse repeated spaces if you want a single-space layout.",
      },
    ],
    explanation:
      "Each option is explicit. Trim-each-line overrides separate leading/trailing checkboxes for that pass. Remove blank lines drops every empty row; collapsing blank lines keeps a single empty row between blocks.",
    faqs: [
      freeFaq("Whitespace Remover"),
      localProcessingFaq,
      {
        question: "Will it destroy my indentation?",
        answer:
          "Only if you enable trim, leading-strip or tab conversion. Leave those off to keep indentation.",
      },
    ],
  },
  "line-sorter": {
    howTo: [
      "Paste one item per line.",
      "Choose A→Z, Z→A, numeric order or length. Set case, trim, empty-line and duplicate options as needed.",
      "Press Sort lines. Equal items keep their original relative order.",
      "Copy or download the sorted list.",
    ],
    examples: [
      {
        title: "Names",
        body: "A→Z with case-insensitive matching puts ada and Ada next to each other while keeping the first spelling’s position when they compare equal.",
      },
      {
        title: "Numbered rows",
        body: "Numeric ascending reads a leading number, so 10 follows 2. Lines without a number go after numbered lines.",
      },
    ],
    explanation:
      "Sorting is stable: when two lines compare equal, the earlier input line stays first. Numeric modes look at a leading integer or decimal. Optional dedupe uses the same comparison key as case and trim.",
    faqs: [
      freeFaq("Line Sorter"),
      localProcessingFaq,
      {
        question: "Are empty lines kept?",
        answer:
          "Yes, unless you choose Ignore empty lines. They sort as empty strings in letter modes.",
      },
    ],
  },
};

export function getToolContent(slug: string): ToolContent | undefined {
  return toolContent[slug] ?? aiToolContent[slug] ?? nextToolContent[slug] ?? financeToolContent[slug];
}
