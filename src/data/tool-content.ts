import { aiToolContent } from "./ai-tool-content.ts";
import { extraToolContent } from "./extra-tool-content.ts";
import { financeToolContent } from "./finance-tool-content.ts";
import { nextToolContent } from "./next-tool-content.ts";
import { extraToolFaqs } from "./tool-faq-extra.ts";

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

export const toolContent: Record<string, ToolContent> = {
  "percentage-calculator": {
    about:
      "Find a percent of a number, what percent one number is of another, or a percent increase or decrease. Students and anyone checking a grade or a price change can do that arithmetic here. Discount, sales tax, and tip each have their own calculator.",
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
    limitations:
      "This page only calculates a percent of a number, one number as a percent of another, or a percent increase or decrease. It does not calculate a discount, sales tax, or a tip. A result is the arithmetic of the numbers you enter, and dividing by zero is rejected.",
    faqs: [
      {
        question: "Is the Percentage Calculator free?",
        answer:
          "Yes. You can find a percent of a number, what percent one number is of another, or a percent increase or decrease here without paying or creating an account.",
      },
      {
        question: "What happens if I use 0?",
        answer:
          "0% of a number is 0. Finding what percent a number is of 0 is not possible, so the tool asks for a different second number.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The numbers you type are calculated in this browser tab. Tools Star Hub does not send those numbers to a server or save them in local storage.",
      },
    ],
  },
  "age-calculator": {
    about:
      "Count years, months, and days from a date of birth to today, or to another date you pick. Use it for a birthday, an anniversary, or the age someone will be on a future day. A date before the birthday is rejected, and a leap-day birthday follows the calendar instead of a 365-day year.",
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
    limitations:
      "The count runs from the birth date to today, or to another date you choose. A date earlier than the birthday is rejected. This is calendar arithmetic, not a medical age or a legal age for a contract.",
    faqs: [
      {
        question: "Is the Age Calculator free?",
        answer:
          "Yes. Counting years, months, and days from a date of birth does not require payment or an account.",
      },
      {
        question: "Can I calculate age on a future date?",
        answer:
          "Yes, as long as that date is not before the date of birth.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The dates stay in this tab while the age is counted. They are not sent to a server or written to local storage.",
      },
    ],
  },
  "percentage-change-calculator": {
    about:
      "Compare an original number with a new one and see the percent increase or decrease. Use it when a price, a score, or a measurement moved and you need the size of that move. Going from 80 to 100 is a 25% increase, while 100 back to 80 is a 20% decrease, because the starting numbers differ.",
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
    limitations:
      "An original value of 0 is rejected, because the change is divided by that starting number. When both values are 0, the result is 0%. This page does not find a percent of a number or a discounted price.",
    faqs: [
      {
        question: "Is the Percentage Change Calculator free?",
        answer:
          "Yes. Comparing an original value with a new value to get the percent increase or decrease is free, and no account is required.",
      },
      {
        question: "Why can’t I use 0 as the original value?",
        answer:
          "Dividing by zero is undefined. If both values are 0, the change is 0%. Any other new value from 0 cannot be expressed as a finite percentage.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Both values are used only for the division on this page. Nothing is uploaded or stored.",
      },
    ],
  },
  "discount-calculator": {
    about:
      "Take a percent off a price and see the amount saved and the final price. Shoppers and anyone writing a sale price can use it when the offer is a simple percent off. Type plain numbers: a currency symbol is rejected, and the discount cannot go above 100%.",
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
    limitations:
      "Type the price and the percent as plain numbers. A currency symbol is invalid, and a discount above 100% is rejected. Sales tax and a tip split are not part of this subtraction.",
    faqs: [
      {
        question: "Is the Discount Calculator free?",
        answer:
          "Yes. Taking a percent off a price and showing the amount saved is free here, with no signup.",
      },
      {
        question: "Can I enter a currency symbol?",
        answer:
          "Enter numbers only. Adding a symbol such as $ or € will be treated as invalid input.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The price and the percent stay on this page for the subtraction. They are not posted to a server or saved in local storage.",
      },
    ],
  },
  "word-counter": {
    about:
      "See words, characters, sentences, paragraphs, and a rough reading time for text you paste. Writers checking a caption, an abstract, or a short post can watch the totals update as they type. Reading time assumes about 225 words per minute, which is an estimate, not a measured speed.",
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
    limitations:
      "Words are groups of non-space characters, and sentences split on . ! ? and …. Reading time assumes about 225 words per minute. That is an estimate, not a measured reading speed. The counter does not check grammar or identify an author.",
    faqs: [
      {
        question: "Is the Word Counter free?",
        answer:
          "Yes. Counting words, characters, sentences, and paragraphs in text you paste is free, and you do not need an account.",
      },
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
    about:
      "Count characters, words, and lines, with a separate total that leaves spaces out. Use it when a form, a social post, or a meta description has a character cap. One emoji counts as one character, and this page does not split the text into sentences the way the word counter does.",
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
    limitations:
      "A character is one Unicode code point, so a single emoji counts as one even if it is drawn from several symbols. Spaces stay in the main total and drop out of the without-spaces total. Sentence boundaries are not detected here.",
    faqs: [
      {
        question: "Is the Character Counter free?",
        answer:
          "Yes. You can count characters, words, and lines as you type without paying or creating an account.",
      },
      {
        question: "Does this leave my computer?",
        answer:
          "No. The text stays in your browser and is not sent to a server.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The counts are produced in this tab. Clearing the box removes the text from the page, and it is not written to local storage.",
      },
    ],
  },
  "json-formatter": {
    about:
      "Pretty-print JSON, minify it, or check that it parses. Developers reading a one-line API response use it to see the structure or to catch a syntax error. Comments and trailing commas fail, and this page does not convert the JSON to CSV.",
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
    limitations:
      "Standard JSON is required: double quotes, no comments, and no trailing commas. A document that is too large for the page is rejected. This formatter does not turn JSON into CSV and does not load a URL.",
    faqs: [
      {
        question: "Is the JSON Formatter free?",
        answer:
          "Yes. Pretty-printing, minifying, or validating JSON in this browser is free, and you do not need an account.",
      },
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
    about:
      "Encode text to Base64, or decode a Base64 string back to text, using UTF-8. Developers embedding a short string, or checking a value that is only encoded, can round-trip it here. Anyone can decode the result, so this is not a way to hide a password.",
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
    limitations:
      "Anyone can decode the result, because Base64 is not encryption. Input is treated as text and converted with UTF-8. A file drop is not accepted, and a broken Base64 string is rejected instead of guessed.",
    faqs: [
      {
        question: "Is the Base64 Encoder free?",
        answer:
          "Yes. Encoding text to Base64 and decoding it back is free here, with no signup.",
      },
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
    about:
      "Convert a length, a weight, or a temperature from one unit to another. Use it for a recipe, a shipment, or a weather reading when you already know the number and only need the other unit. Currency, area, and volume are not on this page, and a temperature below absolute zero is rejected.",
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
    limitations:
      "Length, weight, and temperature are the only conversions on this page. It does not convert currency, area, or volume. Temperature below absolute zero is rejected. Length and mass use fixed factors, so the result can show more decimal places than a measuring tool would.",
    faqs: [
      {
        question: "Is the Unit Converter free?",
        answer:
          "Yes. You can convert length, weight, and temperature here without paying or creating an account.",
      },
      {
        question: "Are these exact conversions?",
        answer:
          "Length and mass use international standard factors, such as 1 inch = 2.54 centimeters exactly. Temperature uses the standard formulas.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The value and units you choose are converted in this browser tab. Tools Star Hub does not send that value to a server or save it in local storage.",
      },
    ],
  },
  "utm-builder": {
    about:
      "Add utm_source, utm_medium, and utm_campaign to a link, plus optional term and content. Marketers labeling a campaign link use it before the URL goes into an ad or an email. A blank field is left off the link, and this page does not record a visit or shorten the address.",
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
    limitations:
      "A blank source, medium, or campaign is left off the link instead of being written as an empty parameter. The page does not shorten the address, and it does not record a visit. Text that is not a website URL is rejected.",
    faqs: [
      {
        question: "Is the UTM Builder free?",
        answer:
          "Yes. Adding utm_source, utm_medium, and utm_campaign to a link is free, and no account is required.",
      },
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
    about:
      "Reduce a JPG, PNG, or WebP by re-encoding it at a quality from 10 to 100. Use it before attaching a photo to an email or a page when the file is larger than you want. PNG stays lossless, so a flat graphic may barely shrink, and compressing a JPEG again can add artifacts.",
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
    limitations:
      "GIF, HEIC, and SVG files are rejected. An image must be 25 MB or smaller, and neither side can exceed 8192 pixels. PNG is re-encoded without a lossy quality control, so a flat graphic may barely shrink. JPEG and WebP quality runs from 10 to 100, and compressing a JPEG again can add artifacts.",
    faqs: [
      {
        question: "Is the Image Compressor free?",
        answer:
          "Yes. Reducing a JPG, PNG, or WebP in this browser is free, and no account is required.",
      },
      {
        question: "Is my image uploaded?",
        answer:
          "No. The JPG, PNG, or WebP is re-encoded in this tab at the quality you set. The file is not sent to Tools Star Hub.",
      },
      {
        question: "Which formats are supported?",
        answer:
          "You can open JPG, PNG and WebP. You can save as JPG, PNG or WebP if this browser can encode that format. GIF, HEIC and SVG are not supported.",
      },
    ],
  },
  "image-resizer": {
    about:
      "Set a new width and height for a JPG, PNG, or WebP, with the proportions locked unless you turn that lock off. Use it when a photo must fit a pixel size, such as 1200 by 630. If you need to cut out a region instead of scaling the whole picture, use the Image Cropper.",
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
    limitations:
      "JPG, PNG, and WebP are the formats that open. Width and height have to be whole pixels from 1 through 8192. Turning the aspect lock off can stretch the picture. Cropping, rotation, and background removal are not available.",
    faqs: [
      {
        question: "Is the Image Resizer free?",
        answer:
          "Yes. Changing an image’s width and height in this browser is free, with no account.",
      },
      {
        question: "Does this upload my photo?",
        answer:
          "No. The new width and height are drawn in this tab. The photo is not posted to a server.",
      },
      {
        question: "Why is there a size limit?",
        answer:
          "Very large dimensions can freeze a tab. This tool stops at 8192 pixels on each side.",
      },
    ],
  },
  "image-cropper": {
    about:
      "Drag a box over a JPG, PNG, or WebP and download the original pixels inside it. Use it for a square profile photo or a 16:9 cover when you only need a frame. The ratios are free, 1:1, 4:3, and 16:9, and the page does not rotate or filter the photo.",
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
    limitations:
      "Rotation, filters, and a healing brush are not on this page. The frame can be free, 1:1, 4:3, or 16:9, and the download is the original pixels inside that frame. GIF, HEIC, and SVG files do not open. A file over 25 MB, or a side longer than 8192 pixels, is turned away.",
    faqs: [
      {
        question: "Is the Image Cropper free?",
        answer:
          "Yes. Cropping a JPG, PNG, or WebP in this browser does not require payment or an account.",
      },
      {
        question: "Is the photo uploaded?",
        answer:
          "No. The crop is drawn in this tab from the file you picked. The photo is not sent to Tools Star Hub.",
      },
      {
        question: "Can I crop on a phone?",
        answer:
          "Yes. Drag the box with a finger. Handles are large enough to tap. The preview stays within the screen width.",
      },
    ],
  },
  "image-converter": {
    about:
      "Turn a JPG into a PNG, or a PNG into a JPG. Use it when a form or a site accepts only one of those formats. A clear PNG background is filled with the color you choose before it becomes a JPEG, and WebP is not converted here.",
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
    limitations:
      "JPG cannot store a transparent pixel, so a clear PNG background is filled with the color you choose before the JPEG is written. The reverse direction, JPG to PNG, keeps damage that JPEG already introduced. WebP, GIF, and HEIC are not converted here.",
    faqs: [
      {
        question: "Is the Image Converter free?",
        answer:
          "Yes. Turning a JPG into a PNG, or a PNG into a JPG, is free here, with no signup.",
      },
      {
        question: "Is PNG to JPG lossless?",
        answer:
          "No. JPEG is a lossy format. Fine detail and sharp edges may change, and transparency becomes a solid background.",
      },
      {
        question: "Is the file uploaded?",
        answer:
          "No. JPG and PNG conversion stays on this page. The file is not posted to a server.",
      },
    ],
  },
  "uuid-generator": {
    about:
      "Create random UUID version 4 values, from 1 to 100 at a time. Test data and temporary record IDs are the usual reason to generate a batch. These are not sequential keys and not passwords, and the page cannot tell whether a value already exists in another system.",
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
    limitations:
      "One click produces at most 100 values. They are random version-4 identifiers, not sequential keys and not a password. The page cannot tell you whether the same value already exists in another system.",
    faqs: [
      {
        question: "Is the UUID Generator free?",
        answer:
          "Yes. Creating UUID version 4 values in this browser is free, and you do not need an account.",
      },
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
    about:
      "Percent-encode a string with encodeURIComponent, or decode a percent-encoded string. Developers putting a query value into a URL use it when spaces, ampersands, or slashes must be escaped. The result is not encrypted, and a half-finished sequence such as %E0 fails on decode.",
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
    limitations:
      "encodeURIComponent is the encoder, so ?, &, and / are escaped. That is stricter than encodeURI. The output is not a secret. On the way back, a half-finished sequence such as %E0 is rejected.",
    faqs: [
      {
        question: "Is the URL Encoder free?",
        answer:
          "Yes. Percent-encoding a string, or decoding one, costs nothing and does not ask for an account.",
      },
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
    about:
      "Turn Unix seconds or milliseconds into a date, or turn a date and time back into a timestamp. Use it when a log stores an epoch number and you need the clock time, or the reverse. The unit you pick is the unit that is converted, and named cities belong on the Time Zone Converter.",
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
    limitations:
      "The unit you select is the unit that is converted. Milliseconds typed in as seconds are not quietly corrected. A date the browser cannot represent is rejected. Named cities and a second time zone are a different tool.",
    faqs: [
      {
        question: "Is the Unix Timestamp Converter free?",
        answer:
          "Yes. Turning epoch seconds or milliseconds into a date, and a date back into a timestamp, is free, with no account.",
      },
      {
        question: "Does this use my timezone?",
        answer:
          "The local readout uses this browser’s timezone. UTC and ISO 8601 are timezone-independent. Date → timestamp can be interpreted as local or UTC.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The number or the date is converted in this tab. It is not posted anywhere and not saved in local storage.",
      },
    ],
  },
  "slug-generator": {
    about:
      "Turn a title into a lowercase, hyphenated permalink. Writers naming a post use it before the address goes into a CMS. Latin accents are removed, letters such as 你好 stay, and the result is not a check that the address is unused.",
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
    limitations:
      "Latin accents are removed, while letters such as 你好 remain. The result is a permalink shape, not proof that the address is unused. Some site builders delete non-Latin letters; this page does not.",
    faqs: [
      {
        question: "Is the Slug Generator free?",
        answer:
          "Yes. Turning a title into a hyphenated permalink is free, and you do not need an account.",
      },
      {
        question: "Will this match every CMS?",
        answer:
          "Most sites accept hyphenated lowercase slugs. Some strip non-Latin letters; this tool keeps them when they are letters or numbers.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The title is rewritten in this tab. It is not uploaded and not stored in local storage.",
      },
    ],
  },
  "case-converter": {
    about:
      "Switch text among uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, and kebab-case. Developers renaming identifiers, and editors fixing a headline, can recase a paste in one step. Sentence case follows English punctuation, so it will not apply another language’s capitalization rules.",
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
    limitations:
      "Sentence case follows English punctuation, not the capitalization rules of other languages. camelCase, snake_case, and kebab-case keep letter and number groups and drop the punctuation between them.",
    faqs: [
      {
        question: "Is the Case Converter free?",
        answer:
          "Yes. Switching text among uppercase, lowercase, title case, and the code-style cases is free, with no account.",
      },
      {
        question: "Does sentence case work in every language?",
        answer:
          "No. It follows a basic English punctuation pattern. It will not apply language-specific rules.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The text you paste is recased in this tab. It is not uploaded and not written to local storage.",
      },
    ],
  },
  "lorem-ipsum-generator": {
    about:
      "Generate placeholder paragraphs, sentences, or words from a fixed Latin word list. Designers filling a mockup use it when the real copy is not written yet. The first paragraph starts with the classic opening line, and a request stops at 20 paragraphs, 50 sentences, or 500 words.",
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
    limitations:
      "The output is placeholder Latin from a fixed word list, not a translation and not copy for a real product. Paragraphs stop at 20, sentences at 50, and words at 500.",
    faqs: [
      {
        question: "Is the Lorem Ipsum Generator free?",
        answer:
          "Yes. Generating placeholder paragraphs, sentences, or words is free, and no account is required.",
      },
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
    about:
      "Render PDF pages as JPEG images, for the first page, a selection, or every page. Use it for a cover thumbnail or a set of page pictures. The download is JPEG only, a password-protected file will not open, and rendering stops at 20 MB, 40 pages, and a longest edge of 4,096 pixels.",
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
    limitations:
      "The download is JPEG, not PNG. A password-protected file will not open. Rendering stops at 20 MB, 40 pages, and a longest edge of 4,096 pixels. Pages you leave unselected are not drawn.",
    faqs: [
      {
        question: "Is the PDF to JPG converter free?",
        answer:
          "Yes. Rendering PDF pages to JPEG images in this browser is free, with no account.",
      },
      {
        question: "Is the PDF uploaded?",
        answer:
          "No. Selected pages are rendered to JPEG in this tab. The PDF is not sent anywhere.",
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
    about:
      "Type a 3-digit, 6-digit, or 8-digit hex color and see RGB and HSL. Designers copying a color from CSS use it when they have a hex value and need the other writings. #336699 is rgb(51, 102, 153), and a word such as red is not accepted.",
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
    limitations:
      "Only 3-digit, 6-digit, and 8-digit hex is accepted, with or without #. A word such as red, or an rgb() string, is not converted. HSL on the page is calculated from that hex. It is not a second field you can edit.",
    faqs: [
      {
        question: "Is the Hex to RGB converter free?",
        answer:
          "Yes. Converting hex to RGB and HSL is free, and no account is required.",
      },
      {
        question: "Do I need the #?",
        answer: "No. FFFFFF and #FFFFFF are treated the same.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The hex string is converted in this tab. It is not sent to a server or saved in local storage.",
      },
    ],
  },
  "color-picker": {
    about:
      "Pick a color with the browser’s color control, or type a hex value, and copy HEX, RGB, and HSL. Designers grabbing one opaque color for CSS use it when they do not need to sample a photo. Alpha is not available, and sampling pixels from an image is the Image Color Analyzer.",
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
    limitations:
      "The native control supplies an opaque sRGB color. Alpha is not available, and a pixel is not sampled from a photograph. HEX, RGB, and HSL are three writings of that same color.",
    faqs: [
      {
        question: "Is the Color Picker free?",
        answer:
          "Yes. Choosing a color and copying HEX, RGB, or HSL does not require payment or an account.",
      },
      {
        question: "Does this use a large color-picker library?",
        answer:
          "No. It uses the browser’s native color input plus hex parsing in this page.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The color you pick stays in this tab. It is not uploaded and not written to local storage.",
      },
    ],
  },
  "qr-code-generator": {
    about:
      "Encode plain text or a URL as a QR code PNG, up to 1,200 characters. Use it for a short link you want someone to scan. Wi-Fi, email, and contact layouts are on QR Code Generator Pro, and a long string makes a dense pattern some cameras miss.",
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
    limitations:
      "Plain text or a URL is encoded, and the text must be 1,200 characters or shorter. Wi-Fi, email, and contact layouts are on QR Code Generator Pro. A long string makes a dense pattern that some cameras miss.",
    faqs: [
      {
        question: "Is the QR Code Generator free?",
        answer:
          "Yes. Building a QR image from text or a URL in this browser is free, with no account.",
      },
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
    about:
      "Read the first QR code from the camera or from a PNG or JPG. Use it when you want the text on the page before you decide to open a link. The camera stays off until you press Start camera, and other barcode families are not decoded.",
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
    limitations:
      "The first code the reader finds is the one shown. Other barcode families are not decoded. A link stays on the page until you press Open link, and the camera stays off until you press Start camera.",
    faqs: [
      {
        question: "Is the QR Code Scanner free?",
        answer:
          "Yes. Reading a QR code from the camera or from an image is free, and no account is required.",
      },
      {
        question: "Are camera frames uploaded?",
        answer:
          "No. Frames after Start camera, and a PNG or JPG you choose, are decoded in this tab. Neither is sent to Tools Star Hub.",
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
    about:
      "Escape HTML characters so they can be shown as text, or turn common entities back into characters. Use it when a tutorial or a comment needs to display a tag instead of running it. <div> becomes &lt;div&gt;, and the markup is never executed on this page.",
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
    limitations:
      "The encoder escapes characters so they can be shown as text. Decode recognizes common named entities and numeric references. An uncommon named entity can remain as typed. The markup is never executed.",
    faqs: [
      {
        question: "Is the HTML Encoder / Decoder free?",
        answer:
          "Yes. Escaping HTML characters, or turning entities back into characters, is free, with no signup.",
      },
      {
        question: "Will my HTML run on this page?",
        answer:
          "No. Input is never executed and is never inserted with innerHTML.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Encoding and decoding happen in this tab. The text is not posted to a server or saved in local storage.",
      },
    ],
  },
  "html-minifier": {
    about:
      "Remove HTML comments and collapse spaces between tags. Use it when page source should be smaller before you publish. Text inside pre, textarea, script, and style is left alone, and more than 400,000 characters is refused.",
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
    limitations:
      "Comments are removed and spaces between tags are collapsed. Text inside pre, textarea, script, and style is left as it was. Markup that depends on spaces anywhere else can still change. More than 400,000 characters is refused.",
    faqs: [
      {
        question: "Is the HTML Minifier free?",
        answer:
          "Yes. Minifying HTML in this browser is free, and you do not need an account.",
      },
      {
        question: "Is the minified HTML always equivalent?",
        answer:
          "No. The pass is intentionally conservative, but HTML that depends on whitespace in unexpected places can still change. Check the result before publishing.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The HTML is minified in this tab. It is not uploaded and not written to local storage.",
      },
    ],
  },
  "css-minifier": {
    about:
      "Drop CSS comments and spare spaces between tokens. Front-end work that ships a stylesheet can use it for a shorter file before a build step. Selectors are not merged, spaces inside strings and calc() stay, and vendor prefixes are not added.",
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
    limitations:
      "Comments are deleted and spare spaces between tokens are dropped. Spaces inside strings, url() values, and calc() stay. Selectors are not merged, and vendor prefixes are not added. A stylesheet longer than 400,000 characters is refused.",
    faqs: [
      {
        question: "Is the CSS Minifier free?",
        answer:
          "Yes. You can minify a stylesheet in this browser without paying or creating an account.",
      },
      {
        question: "Can this break my stylesheet?",
        answer:
          "Unusual hacks or files that are not CSS can still fail. Valid everyday stylesheets should minify cleanly. Review the output if you rely on exotic syntax.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The CSS stays in this tab while it is minified. It is not sent to a server or saved in local storage.",
      },
    ],
  },
  "javascript-minifier": {
    about:
      "Parse JavaScript with Terser, then compress and mangle it. Use it when a small script should be shorter and you want a parser rather than find-and-replace. The script is not run, and TypeScript comes back as an error.",
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
    limitations:
      "Terser parses the source, then compresses and mangles it. The script is not run. TypeScript, and JavaScript the parser cannot read, come back as an error rather than a shorter file. Constant expressions are not evaluated during the pass.",
    faqs: [
      {
        question: "Is the JavaScript Minifier free?",
        answer:
          "Yes. Parsing and minifying JavaScript in this browser is free, with no account.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The source is minified in this tab. It is not uploaded and not saved in local storage.",
      },
    ],
  },
  "password-generator": {
    about:
      "Generate a password from 8 to 64 characters, using the character types you choose. Use it when a new account needs a mixed string you have not reused. The strength label estimates from length and set size, and it does not check whether a site was breached.",
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
    limitations:
      "Length has to be a whole number from 8 to 64, and at least one character type must stay on. The strength label estimates from length and set size. It does not check reuse, phishing, or a breached site. Ambiguous characters can be left out; the rest of the symbol list is fixed.",
    faqs: [
      {
        question: "Is the Password Generator free?",
        answer:
          "Yes. Generating a password from 8 to 64 characters is free, and no account is required.",
      },
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
    about:
      "Turn up to 20 JPG or PNG images into one PDF, in the order you set. Use it for a stack of scans or screenshots that should be a single file. WebP is not included, a side longer than 2,000 pixels is downsampled, and Fill can crop the picture to cover the page.",
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
    limitations:
      "JPG and PNG are accepted, up to 20 images. WebP is not. A side longer than 2,000 pixels is downsampled before it is embedded. Page size is A4, Letter, or the image’s own size, and Fill can crop the picture so it covers the page.",
    faqs: [
      {
        question: "Is the Image to PDF tool free?",
        answer:
          "Yes. You can turn JPG and PNG images into a PDF here without paying or signing up.",
      },
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
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The images are assembled into a PDF in this tab. They are not posted to a server or written to local storage.",
      },
    ],
  },
  "pdf-merger": {
    about:
      "Join two to ten PDFs in the order you arrange, up to 80 pages combined. Use it when a cover and a report should be one file. A password-protected PDF will not open, and forms are not flattened.",
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
    limitations:
      "At least two PDFs are required, and no more than 10. The combined page count has to stay at 80 or below. A password-protected file will not open. Forms are not flattened, and encryption is not removed.",
    faqs: [
      {
        question: "Is the PDF Merger free?",
        answer:
          "Yes. Combining PDFs in this browser does not require payment or an account.",
      },
      {
        question: "Can I merge a locked PDF?",
        answer:
          "Not if it is password-protected. Unlock the file in a PDF reader first.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The files are joined in this tab. They are not uploaded and not kept in local storage.",
      },
    ],
  },
  "pdf-splitter": {
    about:
      "Copy selected pages into a new PDF, using ranges such as 1-3,6. The original file on your device stays as it was. A reversed range such as 5-2 is rejected, and the new file can hold at most 80 pages.",
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
    limitations:
      "Page numbers start at 1. A reversed range such as 5-2 is rejected, and so is a page that is not in the file. The new PDF can hold at most 80 pages. The original file on your device is left unchanged.",
    faqs: [
      {
        question: "Is the PDF Splitter free?",
        answer:
          "Yes. Copying chosen pages into a new PDF is free, with no signup.",
      },
      {
        question: "Does this delete pages from my original?",
        answer:
          "No. It builds a separate PDF. Your original file stays on your device.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The selected pages are copied in this tab. The file is not sent anywhere and not stored in local storage.",
      },
    ],
  },
  "pdf-page-counter": {
    about:
      "Read how many pages a PDF has, along with the file name and size. Use it when you need the count before you split or merge. Blank pages and covers are included, and a password-protected or damaged file is not counted.",
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
    limitations:
      "Blank pages and covers are included in the count. A file that is not a PDF, a damaged file, or a password-protected file is not counted. Files over 20 MB are refused. The page does not extract, split, or reorder pages.",
    faqs: [
      {
        question: "Is the PDF Page Counter free?",
        answer:
          "Yes. Reading a PDF’s page count costs nothing, and you do not create an account.",
      },
      {
        question: "Why can’t a file be counted?",
        answer:
          "The file may not be a PDF, may be damaged, or may be password-protected.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The page count is read in this tab. The PDF is not posted to a server or saved in local storage.",
      },
    ],
  },
  "image-color-analyzer": {
    about:
      "List 3 to 10 dominant colors from a JPG, PNG, or WebP, with each color’s share of the sampled pixels. Use it when you want a starting palette from a photo. The image is reduced to a 96-pixel edge first, so a rare color can be missed.",
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
    limitations:
      "The photo is reduced to a 96-pixel edge before pixels are grouped, and nearly transparent pixels are skipped. You can ask for 3 to 10 colors. The share is of those sampled pixels. GIF and HEIC files do not open, and a file over 25 MB or a side over 8192 pixels is refused.",
    faqs: [
      {
        question: "Is the Image Color Analyzer free?",
        answer:
          "Yes. Listing dominant colors from a JPG, PNG, or WebP is free, with no account.",
      },
      {
        question: "Are the percentages exact?",
        answer:
          "No. They describe sampled, quantized pixels from a smaller copy of the image. Fine details and rare colors can be missed.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Sampling stays in this tab. The photo is not uploaded and not written to local storage.",
      },
    ],
  },
  "color-contrast-checker": {
    about:
      "Compare two solid colors and show the WCAG 2 contrast ratio for normal and large text. Designers checking a button label against its background use it before they ship the pair. Black on white is 21:1, and a photograph behind the text is outside the calculation.",
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
    limitations:
      "The result is the WCAG 2 contrast ratio of two colors the parser can read. A pass is not a full accessibility audit. Font size is not read from a stylesheet, and a color the parser rejects produces no ratio.",
    faqs: [
      {
        question: "Is the Color Contrast Checker free?",
        answer:
          "Yes. Checking a foreground and background pair against WCAG contrast ratios is free, with no account.",
      },
      {
        question: "Does a pass mean my UI is accessible?",
        answer:
          "No. It only means that color pair meets that contrast threshold. Other requirements still apply.",
      },
      {
        question: "Which ratios are AA and AAA?",
        answer:
          "Normal text uses 4.5:1 for AA and 7:1 for AAA. Large text uses 3:1 for AA and 4.5:1 for AAA. The page marks each of those four results separately.",
      },
      {
        question: "Does a background photo count?",
        answer:
          "No. The ratio uses the two solid colors you enter. A photograph behind the text, or a translucent layer, is outside the calculation.",
      },
    ],
  },
  "css-gradient-generator": {
    about:
      "Build a linear, radial or conic CSS gradient from color stops, for a background or for text, and copy the CSS or a ready HTML snippet. Use it when a section, button or heading needs a gradient and you want the code written for you. You need two to eight stops, and positions round to whole percents.",
    howTo: [
      "Choose Background or Text, then linear, radial or conic.",
      "Set the angle for linear and conic, or the shape and center for radial. Conic also has a center.",
      "Set colors and positions for each stop, or start from a preset.",
      "For text, type the words and pick size, weight, font and alignment.",
      "Copy the CSS or the HTML snippet, with a CSS class or inline styles.",
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
      {
        title: "A conic color wheel",
        body: "background: conic-gradient(from 0deg, #ff6b6b 0%, #feca57 25%, #48dbfb 50%, #ff9ff3 75%, #ff6b6b 100%);",
      },
    ],
    explanation:
      "Stops are sorted by position and written as valid CSS color stops. Gradient text uses background-clip: text inside an @supports rule, with the first stop as a solid color fallback, so older browsers still show readable text. Text you type is escaped in the HTML snippet and is not added to share links.",
    limitations:
      "Two to eight color stops are supported. Positions are rounded to whole percents from 0 to 100, and a color the parser cannot read stops the CSS until it is fixed. Radial gradients have no angle in CSS, so they use a shape and center instead. Repeating gradients, layered gradients, and a gradient you paste in are not generated.",
    faqs: [
      {
        question: "Is the CSS Gradient Generator free?",
        answer:
          "Yes. Building linear, radial or conic gradients and gradient text is free, runs in your browser, and needs no account.",
      },
      {
        question: "How does the gradient text work?",
        answer:
          "The CSS paints the gradient as the text background and clips it to the letters with background-clip: text. Browsers that cannot clip show the first stop as a solid text color instead.",
      },
      {
        question: "Should I copy the CSS or the HTML?",
        answer:
          "Copy the CSS to add it to your stylesheet. Copy the HTML for a quick snippet, either with a class and a style block or with inline styles.",
      },
      {
        question: "Why is there no angle for radial gradients?",
        answer:
          "CSS radial gradients spread out from a center and have no direction. You set the shape (circle or ellipse) and the center point instead. Linear and conic gradients use an angle.",
      },
      {
        question: "What does the share link keep?",
        answer:
          "The link keeps the gradient type, angle, center, stops, mode and text settings. The words you type for gradient text stay on your page and are not put in the link.",
      },
      {
        question: "Will older browsers understand the CSS?",
        answer:
          "The copy is standard CSS without vendor prefixes, except -webkit-background-clip for text, which some browsers still need. Conic gradients need a browser from 2020 or later.",
      },
    ],
  },
  "box-shadow-generator": {
    about:
      "Tune one CSS box-shadow and copy the declaration, with a preview that uses the same numbers. Use it when a card or a button needs a drop shadow or an inset shadow. Offsets, blur, and spread become whole pixels, and stacked shadows have to be combined in your stylesheet.",
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
    limitations:
      "The generator writes a single box-shadow. Comma-separated layers are not assembled for you. Offsets, blur, and spread are rounded to whole pixels, and a color the parser rejects yields no declaration. The preview is a sample box, not an element from your page.",
    faqs: [
      {
        question: "Is the Box Shadow Generator free?",
        answer:
          "Yes. Tuning one CSS box-shadow and copying the declaration is free, with no signup.",
      },
      {
        question: "Can I stack several shadows?",
        answer:
          "This version generates one shadow. You can combine copied values manually in your stylesheet if you need layers.",
      },
      {
        question: "Are the pixel values rounded?",
        answer:
          "Offsets, blur, and spread become whole pixels in the copied CSS. A fractional slider position does not stay fractional.",
      },
      {
        question: "Does inset change the color?",
        answer:
          "Inset only draws the shadow inside the box. Color and opacity stay at the values you set.",
      },
    ],
  },
  "qr-code-generator-pro": {
    about:
      "Build a QR code for plain text, Wi-Fi, email, phone, SMS, or a vCard contact, with color and error-correction controls. Use it when a phone should join a network or save a contact from a scan. A missing network name is rejected, and the encoded text still has to stay within 1,200 characters.",
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
    limitations:
      "The types are plain text, Wi-Fi, email, phone, SMS, and a vCard 3.0 contact. A missing network name, an email that fails the simple check, or a phone number outside digits and optional + ( ) is rejected before a code is drawn. The encoded text still has to stay within 1,200 characters.",
    faqs: [
      {
        question: "Is the QR Code Generator Pro free?",
        answer:
          "Yes. Building a Wi-Fi, email, phone, SMS, contact, or text QR code is free, and no account is required.",
      },
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
    about:
      "Draw 1 to 200 integers or decimals between bounds you set. Use it for a casual draw, such as five unique numbers from 1 to 10. Unique mode works only for whole numbers, and asking for more unique values than the range contains is rejected.",
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
    limitations:
      "Each bound has to stay within ±1,000,000,000, and the count has to be a whole number from 1 to 200. Unique mode works only for integers, and it refuses a count larger than the range. Decimals are rounded to six places. This is a casual draw, not a lottery draw or a key generator.",
    faqs: [
      {
        question: "Is the Random Number Generator free?",
        answer:
          "Yes. Drawing integers or decimals in this browser is free, with no signup.",
      },
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
    about:
      "Rewrite a PDF with Low, Balanced, or Strong compression and compare the sizes. Use Balanced on a text report when the words should stay selectable. Strong turns each page into a JPEG, so a smaller file is not guaranteed and the text is no longer selectable.",
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
    limitations:
      "A smaller file is not guaranteed. Balanced compression can leave an already-compressed PDF about the same size. Strong compression turns each page into a JPEG, so the text is no longer selectable. A very large PDF can be slow or fail if the device is low on memory.",
    faqs: [
      {
        question: "Is the PDF Compressor free?",
        answer:
          "Yes. You can compress a PDF in this browser without paying or creating an account.",
      },
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
    about:
      "Extract the text layer from a PDF, from all pages, one page, or a range such as 1-3,5. Use it on a born-digital invoice when you want to paste the words into an editor. A scanned page with no text layer comes back empty, because this page does not run OCR.",
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
    limitations:
      "The extractor reads a stored text layer. It does not run OCR, so a scanned page can come back blank. Files over 20 MB, or documents over 80 pages, are refused. A password-protected PDF does not open. Line breaks are rebuilt from glyph positions, so a tight layout can come out uneven.",
    faqs: [
      {
        question: "Is the PDF to Text tool free?",
        answer:
          "Yes. Extracting a text layer from a PDF is free, and you do not need an account.",
      },
      {
        question: "Does this upload my PDF?",
        answer:
          "No. The text layer is read in this tab. The file is not posted to a server.",
      },
      {
        question: "Why is the output empty?",
        answer:
          "The page may be an image with no text layer, or the file may be encrypted. This converter does not include OCR.",
      },
    ],
  },
  "pdf-metadata": {
    about:
      "Show a PDF’s standard Info fields, such as title, author, and creator, and download a copy with those fields cleared. Use it when an old author name should not travel with the file. Page text, comments, and embedded images stay, so clearing Info fields is not a full wipe.",
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
    limitations:
      "The viewer lists filename, size, page count, and the standard Info fields when they exist: title, author, subject, keywords, creator, producer, and dates. Remove metadata clears those fields in a new download. Page text, comments, embedded files, and images stay. Documents over 80 pages are refused, and a password-protected file will not open.",
    faqs: [
      {
        question: "Is the PDF Metadata Viewer / Remover free?",
        answer:
          "Yes. Viewing PDF Info fields, and clearing them in a new download, is free, with no account.",
      },
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
    about:
      "Turn pasted text into an A4 or Letter PDF, with wrapping, an optional title, and optional page numbers. Use it for meeting notes that should be a simple document. Characters Helvetica cannot draw become a question mark, and input longer than 100,000 characters is refused.",
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
    limitations:
      "Pages use Helvetica. Characters that font cannot draw become “?”. Input longer than 100,000 characters is refused. Font size stays between 8 and 24 points, and the page size is A4 or Letter. Images and styled HTML are not placed in the document.",
    faqs: [
      {
        question: "Is the Text to PDF converter free?",
        answer:
          "Yes. Turning pasted text into a PDF does not require payment or an account.",
      },
      {
        question: "Can I use any language?",
        answer:
          "Latin text usually works. Many other scripts are outside Helvetica’s coverage and will show as “?”. This is a font limit, not a language filter.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The PDF is built in this tab from the text you paste. That text is not uploaded and not saved in local storage.",
      },
    ],
  },
  "markdown-to-html": {
    about:
      "Turn common Markdown into HTML source: headings, emphasis, links, lists, code fences, and simple tables. Writers moving a README into a page use it when they need the tags, not a rendered view. Raw HTML in the Markdown is escaped, and the reverse direction is the HTML to Markdown converter.",
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
    limitations:
      "Headings, emphasis, links, images, lists, quotes, code fences, rules, and simple tables are converted. Raw HTML in the Markdown is escaped, and a javascript: link is dropped. There is no rendered preview. More than 400,000 characters is refused.",
    faqs: [
      {
        question: "Is the Markdown to HTML converter free?",
        answer:
          "Yes. Converting Markdown to HTML source is free, and no signup is required.",
      },
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
    about:
      "Turn common HTML tags into Markdown: headings, links, lists, images, and tables. Use it when a blog excerpt or a CMS export should become a .md file. Script, style, and iframe blocks are skipped, and nested layouts can flatten.",
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
    limitations:
      "Headings, paragraphs, links, emphasis, lists, quotes, code, images, tables, and rules map to Markdown. Script, style, iframe, object, embed, and noscript blocks are skipped. Nested layouts can flatten. More than 400,000 characters is refused.",
    faqs: [
      {
        question: "Is the HTML to Markdown converter free?",
        answer:
          "Yes. Turning common HTML into Markdown is free, with no account.",
      },
      {
        question: "Is the HTML executed?",
        answer:
          "No. It never becomes live DOM on this page. Script, style and iframe contents are skipped.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Conversion stays in this tab. The HTML is not posted to a server or stored in local storage.",
      },
    ],
  },
  "text-diff": {
    about:
      "Paste an original and a revision and compare them by line or by word. Editors checking two drafts of the same paragraph use line mode for whole-line changes and word mode when a sentence was edited in place. Each side has to stay under 200,000 characters and under 4,000 lines or words.",
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
    limitations:
      "Each side must stay under 200,000 characters and under 4,000 lines or words, depending on the mode. The view labels added, removed, and unchanged blocks. It does not merge files, and it does not open a Word document.",
    faqs: [
      {
        question: "Is the Text Diff Checker free?",
        answer:
          "Yes. Comparing two texts line by line or word by word is free, and you do not need an account.",
      },
      {
        question: "How do I compare two text files?",
        answer:
          "Paste each version into a panel, choose Lines or Words, then Compare. You can copy a +/- view of the result.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Both panels are compared in this tab. The text is not sent to a server or saved in local storage.",
      },
    ],
  },
  "duplicate-line-remover": {
    about:
      "Keep the first copy of each line and drop the repeats, in the order you pasted them. Use it on a mailing list or a log where the same row appears more than once. With case-insensitive matching and trim, apple and Apple become one line, and the first spelling is the one that stays.",
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
    limitations:
      "The first matching line is kept, in the order you pasted. Case, trim, and empty-line options change what counts as the same line. Later repeats are counted and dropped. More than 400,000 characters is refused. The input box itself is not rewritten.",
    faqs: [
      {
        question: "Is the Duplicate Line Remover free?",
        answer:
          "Yes. Removing repeated lines while keeping the first copy is free, with no signup.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Deduping runs in this tab. The list is not uploaded and not written to local storage.",
      },
      {
        question: "Does it change the original box?",
        answer:
          "No. Input stays as you pasted it. The unique list appears in the result box after you run the operation.",
      },
    ],
  },
  "whitespace-remover": {
    about:
      "Clean extra spaces, tabs, and blank lines using only the options you turn on. Use it on a pasted log or a list that picked up stray indentation. Trim-each-line overrides the separate leading and trailing boxes, and leaving those options off keeps the indentation.",
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
    limitations:
      "Only the options you turn on are applied. Trim-each-line overrides the separate leading and trailing boxes for that pass. Remove blank lines drops every empty row, while collapse blank lines keeps one empty row between blocks. More than 400,000 characters is refused.",
    faqs: [
      {
        question: "Is the Whitespace Remover free?",
        answer:
          "Yes. Cleaning extra spaces, tabs, and blank lines is free, and no account is required.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. The cleanup stays in this tab. The text is not posted anywhere and not kept in local storage.",
      },
      {
        question: "Will it destroy my indentation?",
        answer:
          "Only if you enable trim, leading-strip or tab conversion. Leave those off to keep indentation.",
      },
    ],
  },
  "line-sorter": {
    about:
      "Sort one item per line from A to Z, Z to A, by a leading number, or by length. Use it when a name list or a numbered export should be in order without a spreadsheet. Numeric order puts 10 after 2, and a line with no leading number sorts after the numbered lines.",
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
    limitations:
      "The modes are A to Z, Z to A, numeric ascending, numeric descending, shortest, and longest. Equal lines keep their original order. Numeric mode reads a leading number, and a line without one sorts after the numbered lines. More than 400,000 characters is refused.",
    faqs: [
      {
        question: "Is the Line Sorter free?",
        answer:
          "Yes. Sorting a list of lines is free, with no account.",
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. Sorting runs in this tab. The lines are not sent to a server or saved in local storage.",
      },
      {
        question: "Are empty lines kept?",
        answer:
          "Yes, unless you choose Ignore empty lines. They sort as empty strings in letter modes.",
      },
    ],
  },
};

export function getToolContent(slug: string): ToolContent | undefined {
  const content = toolContent[slug] ?? aiToolContent[slug] ?? nextToolContent[slug] ?? financeToolContent[slug] ?? extraToolContent[slug];
  // Extra English FAQs (tool-faq-extra.ts) are appended after the tool's own.
  const extraFaqs = extraToolFaqs[slug];
  return content && extraFaqs ? { ...content, faqs: [...content.faqs, ...extraFaqs] } : content;
}
