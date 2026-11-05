import type { ToolFaq } from "./tool-content.ts";

/**
 * Extra English FAQs for tool pages that had only three, written around the
 * questions people ask search engines and AI assistants ("how do I…",
 * "what is…"). They are appended after the tool's own FAQs, so they show on
 * the page and in its FAQPage structured data.
 */
export const extraToolFaqs: Record<string, ToolFaq[]> = {
  "percentage-change-calculator": [
    {
      question: "What is the formula for percentage change?",
      answer:
        "Percentage change = (new value − original value) ÷ original value × 100. A positive result is an increase and a negative result is a decrease.",
    },
    {
      question: "Why is a rise from 80 to 100 not the same as a drop from 100 to 80?",
      answer:
        "The change is divided by the starting number. 20 out of 80 is a 25% rise, while 20 out of 100 is a 20% drop.",
    },
  ],
  "discount-calculator": [
    {
      question: "How do I calculate a discount?",
      answer:
        "Multiply the price by the discount percent and divide by 100 to get the amount off, then subtract it from the price. 25% off $80 is $20 off, so you pay $60.",
    },
    {
      question: "Are two discounts of 20% the same as 40% off?",
      answer:
        "No. A second 20% is taken from the already reduced price, so 20% off and then another 20% off is 36% off in total, not 40%.",
    },
  ],
  "character-counter": [
    {
      question: "Do spaces count as characters?",
      answer:
        "Yes, in the main total. The counter also shows a second total without spaces, which some forms and assignments ask for.",
    },
    {
      question: "How many characters is an emoji?",
      answer:
        "On this page a single emoji counts as one Unicode character. Some apps count certain emoji as two or more, so their limit can differ slightly.",
    },
  ],
  "case-converter": [
    {
      question: "What is the difference between title case and sentence case?",
      answer:
        "Title case capitalizes the first letter of each word, as in a headline. Sentence case capitalizes only the first letter of each sentence, as in normal writing.",
    },
    {
      question: "What are camelCase, snake_case, and kebab-case?",
      answer:
        "They are naming styles used in code. camelCase joins words with capitals (myVariableName), snake_case uses underscores (my_variable_name), and kebab-case uses hyphens (my-variable-name).",
    },
  ],
  "lorem-ipsum-generator": [
    {
      question: "What does lorem ipsum mean?",
      answer:
        "Lorem ipsum is scrambled Latin used as placeholder text. It looks like real copy, so a layout can be judged without readers focusing on the words.",
    },
    {
      question: "When should I use placeholder text?",
      answer:
        "Use it for mockups, templates, and font tests. Replace it with real copy before a page goes live, because placeholder text tells visitors nothing.",
    },
  ],
  "image-resizer": [
    {
      question: "How do I resize an image without stretching it?",
      answer:
        "Keep the aspect ratio locked and change only the width or the height. The other side is calculated so the picture keeps its proportions.",
    },
    {
      question: "Does resizing an image reduce its file size?",
      answer:
        "Usually, yes. Fewer pixels means less data to store. For the smallest file, resize first and then compress the result.",
    },
  ],
  "image-cropper": [
    {
      question: "What aspect ratio should I crop to?",
      answer:
        "Use 1:1 for profile pictures and square posts, 16:9 for video thumbnails and widescreen banners, and 4:3 for many slides and older displays. Free lets you choose any shape.",
    },
    {
      question: "Does cropping reduce image quality?",
      answer:
        "No. Cropping removes the pixels outside the frame and keeps the pixels inside it, so the area you keep is not blurred.",
    },
  ],
  "image-converter": [
    {
      question: "Should I use PNG or JPG?",
      answer:
        "Use JPG for photos, where a smaller file matters more than perfect edges. Use PNG for logos, screenshots, text, and anything that needs a transparent background.",
    },
    {
      question: "Why did my transparent background turn white?",
      answer:
        "JPG cannot store transparency, so transparent pixels are filled with a background color when you convert PNG to JPG. White is the default, and you can choose another color.",
    },
  ],
  "base64-encoder": [
    {
      question: "What is Base64 used for?",
      answer:
        "Base64 turns bytes into plain letters, digits, + and /, so data can travel through systems that expect text, such as email attachments, data URLs, and some API fields.",
    },
    {
      question: "Why is Base64 text longer than the original?",
      answer:
        "Every 3 bytes become 4 characters, so Base64 output is about one third larger than the input.",
    },
  ],
  "uuid-generator": [
    {
      question: "What is a UUID v4?",
      answer:
        "A UUID is a 128-bit identifier written as 36 characters, such as 123e4567-e89b-42d3-a456-426614174000. Version 4 fills almost all of those bits at random.",
    },
    {
      question: "Can two random UUIDs be the same?",
      answer:
        "In theory, yes, but with 122 random bits the chance is so small that UUID v4 values are treated as unique in practice.",
    },
  ],
  "url-encoder": [
    {
      question: "What does %20 mean in a URL?",
      answer:
        "%20 is the percent-encoded form of a space. Percent-encoding writes a character as % followed by its byte value in hexadecimal.",
    },
    {
      question: "What is the difference between encodeURI and encodeURIComponent?",
      answer:
        "encodeURI leaves characters such as / ? & and = alone so a whole address still works. encodeURIComponent escapes them too, which is what you want for a single query value. This tool uses encodeURIComponent.",
    },
  ],
  "timestamp-converter": [
    {
      question: "What is a Unix timestamp?",
      answer:
        "A Unix timestamp is the number of seconds since 00:00:00 UTC on January 1, 1970. Many systems store it in milliseconds instead, which is the same value times 1,000.",
    },
    {
      question: "How can I tell if a timestamp is in seconds or milliseconds?",
      answer:
        "Current timestamps in seconds have 10 digits, while timestamps in milliseconds have 13. Pick the matching unit before you convert.",
    },
  ],
  "utm-builder": [
    {
      question: "What are UTM parameters?",
      answer:
        "UTM parameters are tags added to a link, such as utm_source, utm_medium, and utm_campaign, that tell analytics tools where a visit came from.",
    },
    {
      question: "Which UTM parameters are required?",
      answer:
        "Source, medium, and campaign are the usual minimum. Term and content are optional and help tell keywords or ad versions apart.",
    },
  ],
  "unit-converter": [
    {
      question: "How do I convert Celsius to Fahrenheit?",
      answer:
        "Multiply the Celsius value by 9/5 and add 32. For example, 20 °C is 20 × 9 ÷ 5 + 32 = 68 °F.",
    },
    {
      question: "How many centimeters are in an inch?",
      answer:
        "One inch is exactly 2.54 centimeters, so 12 inches (one foot) is 30.48 centimeters.",
    },
  ],
  "slug-generator": [
    {
      question: "What is a URL slug?",
      answer:
        "A slug is the readable part of a web address that names a page, such as how-to-make-bread in example.com/blog/how-to-make-bread.",
    },
    {
      question: "What makes a good slug for SEO?",
      answer:
        "Keep it short, lowercase, and descriptive, with words separated by hyphens. Avoid dates or filler words if the page may be updated later.",
    },
  ],
  "hex-to-rgb": [
    {
      question: "How do I convert a hex color to RGB?",
      answer:
        "Split the six digits into three pairs and convert each pair from hexadecimal to a number from 0 to 255. #FF8000 is red 255, green 128, blue 0.",
    },
    {
      question: "What does an 8-digit hex color mean?",
      answer:
        "The last two digits are the alpha channel, which sets opacity. #FF000080 is red at about 50% opacity.",
    },
  ],
  "color-picker": [
    {
      question: "What is the difference between HEX, RGB, and HSL?",
      answer:
        "They describe the same color in different ways. HEX and RGB give red, green, and blue amounts. HSL gives hue, saturation, and lightness, which is easier to adjust by hand.",
    },
    {
      question: "How do I use a picked color in CSS?",
      answer:
        "Copy the value and paste it into a CSS property, for example color: #1E90FF; or background: rgb(30, 144, 255);.",
    },
  ],
  "html-encoder": [
    {
      question: "What are HTML entities?",
      answer:
        "HTML entities are codes such as &lt; for < and &amp; for & that let a page show those characters as text instead of reading them as markup.",
    },
    {
      question: "When should I encode HTML?",
      answer:
        "Encode text when you want to display code on a page, or when user input is shown inside HTML, so tags appear as text instead of running.",
    },
  ],
  "html-minifier": [
    {
      question: "Does minifying HTML improve page speed?",
      answer:
        "It makes the file smaller, which can help a little, especially without compression. Servers that already use gzip or Brotli see a smaller gain.",
    },
    {
      question: "What does an HTML minifier remove?",
      answer:
        "This one removes comments and collapses spaces between tags, while leaving the contents of pre, textarea, script, and style unchanged.",
    },
  ],
  "css-minifier": [
    {
      question: "Why minify CSS?",
      answer:
        "A smaller stylesheet downloads faster. Minifying removes comments and spare whitespace without changing what the rules do.",
    },
    {
      question: "Can I un-minify CSS later?",
      answer:
        "You can reformat it, but removed comments are gone. Keep your original, readable file and publish the minified copy.",
    },
  ],
  "password-generator": [
    {
      question: "How long should a password be?",
      answer:
        "Longer is stronger. Many security guides suggest at least 12 to 16 characters for important accounts, with a different password for each site.",
    },
    {
      question: "Is it safe to use an online password generator?",
      answer:
        "This one creates the password in your browser with crypto.getRandomValues and does not send or store it. Save it in a password manager rather than in a note.",
    },
  ],
  "pdf-merger": [
    {
      question: "How do I combine PDF files into one?",
      answer:
        "Add two or more PDFs, put them in the order you want, then merge and download the single combined file.",
    },
    {
      question: "Does merging PDFs reduce quality?",
      answer:
        "No. Pages are copied into the new file as they are, so text and images are not re-compressed.",
    },
  ],
  "pdf-splitter": [
    {
      question: "How do I extract pages from a PDF?",
      answer:
        "Enter the pages you want, such as 1-3,6, and download a new PDF that holds only those pages. The original file is not changed.",
    },
    {
      question: "Can I split a PDF into separate files?",
      answer:
        "Each run creates one new PDF from the pages you choose. Repeat with a different range for each file you need.",
    },
  ],
  "pdf-page-counter": [
    {
      question: "How do I check how many pages a PDF has?",
      answer:
        "Open the file here and the page count appears without uploading it. Blank pages and covers are included in the count.",
    },
    {
      question: "Can I count pages in several PDFs?",
      answer:
        "Count them one after another. Each file is read on your device and is not uploaded.",
    },
  ],
  "image-color-analyzer": [
    {
      question: "How do I find the main colors in an image?",
      answer:
        "Upload a JPG, PNG, or WebP and choose how many colors to list, from 3 to 10. Similar pixels are grouped and each color shows its share.",
    },
    {
      question: "Can I get the hex code of a color in a photo?",
      answer:
        "Yes. Each listed color can be copied as HEX or RGB, ready for a design tool or CSS.",
    },
  ],
  "qr-code-generator-pro": [
    {
      question: "How do I make a QR code for Wi-Fi?",
      answer:
        "Choose Wi-Fi, enter the network name, the password, and the security type, then download the code. Phones that scan it can join without typing the password.",
    },
    {
      question: "Can I change the colors of a QR code?",
      answer:
        "Yes, but keep strong contrast, with a dark pattern on a light background, so cameras can still read it. Test the code before you print it.",
    },
  ],
  "random-number-generator": [
    {
      question: "How do I pick a random number between 1 and 10?",
      answer:
        "Set the minimum to 1 and the maximum to 10, keep integers selected, and generate. Each whole number in the range has the same chance.",
    },
    {
      question: "How do I draw numbers without repeats?",
      answer:
        "Turn on unique mode. It works for integers, and the count cannot be larger than the number of values in the range.",
    },
  ],
  "pdf-to-text": [
    {
      question: "How do I copy text from a PDF?",
      answer:
        "Open the PDF here to extract its text layer, then copy or download the text. The file stays on your device.",
    },
    {
      question: "Why does a scanned PDF give no text?",
      answer:
        "A scanned page is a picture of text with no text layer to read. It needs OCR (optical character recognition), which this tool does not run.",
    },
  ],
  "pdf-metadata": [
    {
      question: "How do I see who created a PDF?",
      answer:
        "Open the file and read the Author, Creator, and Producer fields, along with the creation and modification dates, when the document includes them.",
    },
    {
      question: "Should I remove metadata before sharing a PDF?",
      answer:
        "If the fields show a name, a company, or software you would rather not share, clearing them is a sensible step. Text inside the pages is not changed.",
    },
  ],
  "text-to-pdf": [
    {
      question: "How do I turn a text file into a PDF?",
      answer:
        "Paste the text, choose A4 or Letter, the font size, margins, and page numbers, then create and download the PDF.",
    },
    {
      question: "Why do some characters show as a question mark?",
      answer:
        "The PDF uses the Helvetica font, which cannot draw every script or emoji. Characters it cannot draw are replaced with ?.",
    },
  ],
  "markdown-to-html": [
    {
      question: "What is Markdown?",
      answer:
        "Markdown is a plain-text format where symbols mark formatting, such as # for a heading, ** for bold, and - for a list item. It is easy to write and converts cleanly to HTML.",
    },
    {
      question: "Does this support tables and code blocks?",
      answer:
        "Yes. Simple tables, fenced code blocks, headings, lists, links, images, and quotes are converted.",
    },
  ],
  "html-to-markdown": [
    {
      question: "Why convert HTML to Markdown?",
      answer:
        "Markdown is easier to edit and review than HTML, and many documentation sites, wikis, and note apps use it.",
    },
    {
      question: "Does the conversion keep links and images?",
      answer:
        "Yes. Links become [text](url) and images become ![alt](src). Scripts, styles, and embedded frames are skipped.",
    },
  ],
  "text-diff": [
    {
      question: "What is a diff?",
      answer:
        "A diff is a list of the differences between two versions of a text: what was added, what was removed, and what stayed the same.",
    },
    {
      question: "Should I use line mode or word mode?",
      answer:
        "Use line mode for code, lists, and files where whole lines change. Use word mode when a sentence was edited in place.",
    },
  ],
  "duplicate-line-remover": [
    {
      question: "How do I remove duplicates from a list?",
      answer:
        "Paste the list with one item per line and run the tool. The first copy of each line is kept in its original order and later repeats are dropped.",
    },
    {
      question: "Can it ignore differences in case or spaces?",
      answer:
        "Yes. Turn on the case and trim options so lines such as Apple and apple, or lines with extra spaces, count as the same.",
    },
  ],
  "whitespace-remover": [
    {
      question: "How do I remove double spaces from text?",
      answer:
        "Turn on the option that collapses repeated spaces. Runs of spaces inside each line become a single space.",
    },
    {
      question: "How do I delete empty lines?",
      answer:
        "Use remove blank lines to drop every empty line, or collapse blank lines to keep one empty line between paragraphs.",
    },
  ],
  "line-sorter": [
    {
      question: "How do I sort a list alphabetically?",
      answer:
        "Paste one item per line and choose A to Z, or Z to A for reverse order. Lines that are equal keep their original order.",
    },
    {
      question: "How do I sort lines by number?",
      answer:
        "Choose numeric ascending or descending. Each line is sorted by the number at its start, so 2 comes before 10.",
    },
  ],
  "ai-prompt-generator": [
    {
      question: "What makes a good AI prompt?",
      answer:
        "Say what you want, who it is for, the tone, the format, and the length. A clear goal and an example of the output usually help more than extra adjectives.",
    },
    {
      question: "Can I use the prompt in ChatGPT, Gemini, or Claude?",
      answer:
        "Yes. The result is plain text you can paste into any chat assistant. Different models may still answer the same prompt differently.",
    },
  ],
  "prompt-to-image": [
    {
      question: "How do I write a good image prompt?",
      answer:
        "Start with the subject, then add the setting, lighting, camera or art style, color palette, mood, and aspect ratio. Be specific about what matters and leave out the rest.",
    },
    {
      question: "What is a negative prompt?",
      answer:
        "A negative prompt lists things that should stay out of the image, such as text, extra fingers, or blur. Not every image model reads one.",
    },
  ],
  "prompt-to-video": [
    {
      question: "How do I write a prompt for an AI video?",
      answer:
        "Describe one shot: the subject, the action, the setting, the camera move, the lens, the light, and the length. Short, concrete prompts usually work better than long stories.",
    },
    {
      question: "Which video models can use these prompts?",
      answer:
        "The output is plain text, so you can paste it into any text-to-video tool. Each model follows camera and timing directions in its own way.",
    },
  ],
  "ai-article-detector": [
    {
      question: "Are AI detectors accurate?",
      answer:
        "No detector can prove who wrote a text. Pattern-based scores can flag human writing and miss edited AI writing, so treat any result as a prompt to review, not as evidence.",
    },
    {
      question: "What patterns does this tool look at?",
      answer:
        "It reports sentence length, how varied the vocabulary is, and repeated phrases, so you can see where a draft sounds flat or repetitive.",
    },
  ],
  "ai-article-compressor": [
    {
      question: "How do I shorten an article without losing meaning?",
      answer:
        "Cut wordy phrases first, then repeated points, then whole sentences that do not add anything. Compare the result with the original before you use it.",
    },
    {
      question: "Which compression level should I choose?",
      answer:
        "Light only swaps wordy phrases. Medium also drops repeats. Strong can skip sentences that start the same way, so check it more carefully.",
    },
  ],
  "tip-calculator": [
    {
      question: "How do I calculate a 20% tip?",
      answer:
        "Multiply the bill by 0.20. On a $45 bill, the tip is $9 and the total is $54. An easy check is 10% (move the decimal point) times two.",
    },
    {
      question: "How do I split a bill with a tip?",
      answer:
        "Add the tip to the bill, then divide the total by the number of people. The calculator shows the tip, the total, and the amount per person.",
    },
  ],
  "sales-tax-calculator": [
    {
      question: "How do I calculate sales tax?",
      answer:
        "Multiply the price by the tax rate and divide by 100, then add the result to the price. $50 at 8% is $4 tax, so the total is $54.",
    },
    {
      question: "How do I find the price before tax?",
      answer:
        "Divide the total by 1 plus the rate as a decimal. A $54 total at 8% tax is 54 ÷ 1.08 = $50 before tax.",
    },
  ],
  "date-difference-calculator": [
    {
      question: "How do I count the days between two dates?",
      answer:
        "Choose the start and end dates and calculate. The total days are the exact count, and weeks and years, months, and days describe the same span.",
    },
    {
      question: "Is the end date included in the count?",
      answer:
        "The count is the number of days from the start date to the end date, so the start day itself is not added. Add 1 if you need to include both days.",
    },
  ],
  "find-and-replace": [
    {
      question: "How do I replace a word everywhere in a text?",
      answer:
        "Enter the word to find and its replacement, choose Replace all, and copy the result. Turn on case-sensitive search if capitals matter.",
    },
    {
      question: "Does find and replace support regular expressions?",
      answer:
        "No. It matches the exact text you type. For pattern matching, test the pattern in the Regex Tester first.",
    },
  ],
  "remove-line-breaks": [
    {
      question: "How do I remove line breaks from text copied from a PDF?",
      answer:
        "Paste the text and choose the option that keeps paragraph breaks. Single line breaks inside a paragraph become spaces, and blank lines between paragraphs stay.",
    },
    {
      question: "What is the difference between replacing and removing line breaks?",
      answer:
        "Replacing turns each break into a space so words stay apart. Removing deletes the break, which joins the end of one line to the start of the next.",
    },
  ],
  "add-line-numbers": [
    {
      question: "How do I number lines in text?",
      answer:
        "Paste the text, set the starting number and the separator, such as a period and a space, then add numbers and copy the result.",
    },
    {
      question: "Are empty lines numbered?",
      answer:
        "Yes. Every real line break starts a new numbered line, including empty lines and a trailing empty line at the end.",
    },
  ],
  "json-to-csv": [
    {
      question: "How do I open JSON in Excel?",
      answer:
        "Convert the JSON array to CSV here, download data.csv, and open that file in Excel or Google Sheets. Each object becomes a row and each key becomes a column.",
    },
    {
      question: "What happens to nested objects?",
      answer:
        "Nested objects are not flattened into extra columns. Flatten them first if you need each nested field in its own column.",
    },
  ],
  "csv-to-json": [
    {
      question: "How do I convert a spreadsheet to JSON?",
      answer:
        "Save or export the sheet as CSV with a header row, paste it here, and convert. Each row becomes an object that uses the headers as keys.",
    },
    {
      question: "Are numbers converted to JSON numbers?",
      answer:
        "No. CSV has no data types, so every cell becomes a JSON string, such as \"42\", and an empty cell becomes an empty string. Convert numbers in your own code if you need them.",
    },
  ],
  "regex-tester": [
    {
      question: "What does the g flag do in a regex?",
      answer:
        "The g (global) flag finds every match instead of stopping at the first one. Without it, only the first match is shown.",
    },
    {
      question: "What is a capture group?",
      answer:
        "Parentheses in a pattern create a capture group, which saves the part of the match inside them. (\\d{4})-(\\d{2}) captures the year and the month separately.",
    },
  ],
  "hash-generator": [
    {
      question: "What is SHA-256 used for?",
      answer:
        "SHA-256 creates a fixed 64-character fingerprint of data. It is used to check that a file or message has not changed, and in digital signatures.",
    },
    {
      question: "Should I hash passwords with SHA-256?",
      answer:
        "Not on its own. Password storage should use a slow, salted algorithm such as bcrypt, scrypt, or Argon2, because plain SHA-256 can be guessed very quickly.",
    },
  ],
  "javascript-minifier": [
    {
      question: "How do I minify JavaScript online?",
      answer:
        "Paste valid JavaScript into the minifier, press Minify, then copy the shorter output. The source is parsed with Terser in the browser and is not executed.",
    },
    {
      question: "Does minifying JavaScript make it run faster?",
      answer:
        "It mainly reduces download size by removing whitespace and shortening names. Runtime speed is usually unchanged unless the smaller file loads noticeably sooner.",
    },
    {
      question: "Will TypeScript minify here?",
      answer:
        "No. TypeScript syntax is rejected with a parser error. Compile or strip types to plain JavaScript first.",
    },
    {
      question: "What is mangling in a minifier?",
      answer:
        "Mangling renames local variables to shorter identifiers where it is safe. It is part of how Terser shrinks the file after parsing.",
    },
    {
      question: "Can minification break my code?",
      answer:
        "It can if the code relies on Function.toString(), dynamic property names that were renamed, or invalid syntax the parser cannot read. Test the output before you deploy.",
    },
    {
      question: "Does this tool evaluate my expressions while minifying?",
      answer:
        "Constant-expression evaluation is turned off here so user expressions are not run during the minify pass.",
    },
    {
      question: "How large a script can I paste?",
      answer:
        "Very large files are rejected so the tab stays responsive. Split bundles or minify during your build for multi-megabyte inputs.",
    },
    {
      question: "Is source-map generation included?",
      answer:
        "No. This page returns minified text only. Generate source maps in your bundler when you need them.",
    },
    {
      question: "Should I minify code I still edit by hand?",
      answer:
        "Keep a readable source file for editing. Minify only the copy you ship to browsers.",
    },
    {
      question: "What happens on a syntax error?",
      answer:
        "You see a parser error instead of output. The tool does not attempt to repair broken JavaScript.",
    },
    {
      question: "Does minifying remove console.log calls?",
      answer:
        "Not by default on this page. Dropping console calls is a separate compress option in some build pipelines.",
    },
    {
      question: "Can I minify ES modules with import and export?",
      answer:
        "Modern syntax the parser understands can minify. If the parser version rejects a newer feature, compile that feature down first.",
    },
    {
      question: "Is the original formatting recoverable?",
      answer:
        "No. Minification discards whitespace and comments. Keep the original file under version control.",
    },
    {
      question: "Why use a parser instead of deleting spaces myself?",
      answer:
        "Blind find-and-replace can break strings and regexes. A parser knows where whitespace is safe to remove.",
    },
    {
      question: "Does minify change license comments?",
      answer:
        "Important license banners may be stripped unless a build tool is configured to keep them. Check the output when a license header must remain.",
    },
    {
      question: "Is my JavaScript uploaded for minification?",
      answer:
        "No. Terser runs in this tab. The source is not posted to a server or saved in local storage.",
    },
  ],
  "color-contrast-checker": [
    {
      question: "How do I check color contrast for accessibility?",
      answer:
        "Enter a foreground color and a background color, then read the contrast ratio and the AA/AAA marks for normal and large text. The math follows WCAG 2 relative luminance.",
    },
    {
      question: "What contrast ratio do I need for body text?",
      answer:
        "WCAG AA needs at least 4.5:1 for normal text. AAA needs 7:1. Large text has lower thresholds of 3:1 for AA and 4.5:1 for AAA.",
    },
    {
      question: "What counts as large text in WCAG?",
      answer:
        "Large text is at least 18 point regular or 14 point bold, roughly 24px regular or 18.66px bold. The checker reports large-text results separately from normal text.",
    },
    {
      question: "Does a pass mean the whole page is accessible?",
      answer:
        "No. Contrast is only one requirement. Focus order, labels, keyboard use, and motion settings still matter.",
    },
    {
      question: "Can I test a gradient background?",
      answer:
        "The ratio uses two solid colors. For a gradient, test text against the lightest and darkest stops that sit behind the letters.",
    },
    {
      question: "Why is black on white 21:1?",
      answer:
        "That is the maximum contrast between pure black and pure white in the WCAG formula. No pair of sRGB colors scores higher.",
    },
    {
      question: "Do link colors need their own check?",
      answer:
        "Yes. Check link text against the page background, and check visited or hover styles if they change the color.",
    },
    {
      question: "How do I fix a failing pair?",
      answer:
        "Darken the text, lighten the background, or both, then recheck. Small HEX tweaks near the threshold often recover a pass.",
    },
    {
      question: "Does opacity change the ratio?",
      answer:
        "The checker uses the solid colors you enter. If the real UI blends with a layer behind, sample the blended result or test the effective colors.",
    },
    {
      question: "Are brand colors exempt from contrast rules?",
      answer:
        "No. Brand guidelines still need a readable pair for text. Keep a darker or lighter brand variant for body copy when the primary swatch fails.",
    },
    {
      question: "Can icons use a lower ratio?",
      answer:
        "UI component contrast guidance differs from text. When an icon carries meaning without a text label, aim for clear contrast against its background.",
    },
    {
      question: "Does the tool read colors from my CSS file?",
      answer:
        "No. You paste or pick the two colors. It does not crawl a stylesheet.",
    },
    {
      question: "What color formats are accepted?",
      answer:
        "HEX values and the picker are the usual inputs. A color the parser rejects produces no ratio until you correct it.",
    },
    {
      question: "Should charts use the same thresholds?",
      answer:
        "Text on charts should still meet text contrast. Adjacent data colors also need enough separation so viewers can tell series apart.",
    },
    {
      question: "Is contrast checking done on a server?",
      answer:
        "No. The calculation runs in the browser from the two colors you provide.",
    },
    {
      question: "Why did two similar greys fail?",
      answer:
        "Low luminance difference yields a low ratio. Pairs such as #777 on #999 often fall well under 4.5:1 for normal text.",
    },
  ],
  "box-shadow-generator": [
    {
      question: "How do I create a CSS box-shadow?",
      answer:
        "Adjust offset, blur, spread, color, and opacity in the generator, then copy the box-shadow declaration into your stylesheet. The preview uses the same values.",
    },
    {
      question: "What does blur radius do?",
      answer:
        "Blur softens the edge of the shadow. Zero blur makes a hard edge; larger blur makes a softer, wider falloff.",
    },
    {
      question: "What does spread radius do?",
      answer:
        "Spread grows or shrinks the shadow before blur is applied. Positive spread expands it; negative spread pulls it in.",
    },
    {
      question: "How do horizontal and vertical offsets work?",
      answer:
        "Positive X moves the shadow right; positive Y moves it down. Negative values move it left or up.",
    },
    {
      question: "When should I use an inset shadow?",
      answer:
        "Use inset for pressed buttons, wells, or inner highlights. The shadow draws inside the box instead of outside.",
    },
    {
      question: "Can this generator build multiple layered shadows?",
      answer:
        "It writes one shadow at a time. Copy each layer and join them with commas in CSS if you need a stack.",
    },
    {
      question: "Why are my values whole pixels?",
      answer:
        "Offsets, blur, and spread are rounded to whole pixels in the copied CSS so the declaration stays tidy and predictable.",
    },
    {
      question: "How do I make a soft card shadow?",
      answer:
        "Start with a small Y offset, a large blur, slight spread, and low opacity, such as 0 8px 24px with about 20% opacity.",
    },
    {
      question: "Does box-shadow affect layout size?",
      answer:
        "No. Shadows paint outside the box and do not change the element's width or height in normal flow.",
    },
    {
      question: "Can I animate a box-shadow?",
      answer:
        "Yes, with CSS transitions or animations on the box-shadow property. Prefer animating opacity or elevation tokens when performance matters.",
    },
    {
      question: "How is opacity applied in the output?",
      answer:
        "Opacity is built into the color as RGBA in the copied rule, matching the preview.",
    },
    {
      question: "Will a shadow follow border-radius?",
      answer:
        "Yes. The shadow follows the curve of the box's border radius in modern browsers.",
    },
    {
      question: "What color should a neutral shadow use?",
      answer:
        "A dark blue-grey at low opacity often looks more natural than pure black. Adjust to match the page background.",
    },
    {
      question: "Does the preview match every element on my site?",
      answer:
        "The preview is a sample box. Font size, width, and neighboring elements on your page can change how strong the shadow feels.",
    },
    {
      question: "Is the CSS uploaded when I copy it?",
      answer:
        "No. Generation stays in the browser. Copying only writes to your clipboard when you choose.",
    },
    {
      question: "How do I remove a shadow later?",
      answer:
        "Set box-shadow: none; on the element, or remove the declaration from the rule.",
    },
  ],
  "word-to-pdf": [
    {
      question: "How do I convert a Word document to PDF in the browser?",
      answer:
        "Choose a .docx file, start the conversion, then download the PDF. The file is processed in the browser and is not uploaded to Tools Star Hub for storage.",
    },
    {
      question: "Does .doc (old Word) work the same as .docx?",
      answer:
        "The tool expects modern .docx. An older .doc file is often rejected. Open it in Word or LibreOffice and save as .docx first.",
    },
    {
      question: "Will the PDF match my Word layout exactly?",
      answer:
        "Complex layouts, unusual fonts, and embedded objects may shift. Review the PDF after conversion when pixel-perfect print layout matters.",
    },
    {
      question: "Are fonts embedded in the PDF?",
      answer:
        "Embedding depends on what the converter can access in the browser. Missing fonts may fall back to substitutes and change line breaks.",
    },
    {
      question: "Can I convert several Word files at once?",
      answer:
        "Convert one document at a time on this page. Batch conversion belongs in a desktop app or a dedicated batch service.",
    },
    {
      question: "Does conversion need Microsoft Word installed?",
      answer:
        "No. The browser-based converter does not require the Word desktop app.",
    },
    {
      question: "What happens to images inside the document?",
      answer:
        "Images included in the .docx are carried into the PDF when the converter can read them. Very large images may be resampled.",
    },
    {
      question: "Are comments and tracked changes kept?",
      answer:
        "Conversion focuses on the document body. Review comments and tracked changes in Word before you convert if you need a clean deliverable.",
    },
    {
      question: "Can I password-protect the PDF here?",
      answer:
        "This page converts to a standard PDF download. Add a password in a PDF editor afterward if you need one.",
    },
    {
      question: "Is my document stored on a server?",
      answer:
        "No. The Word file is not kept on Tools Star Hub after you convert. Work stays in the browser session.",
    },
    {
      question: "Why is the PDF larger or smaller than the .docx?",
      answer:
        "PDF and Word package images and fonts differently. Size alone does not mean pages were dropped.",
    },
    {
      question: "Do headers and footers survive conversion?",
      answer:
        "They usually appear when the converter supports them. Check the first and last pages after download.",
    },
    {
      question: "Can I edit the PDF after converting?",
      answer:
        "You can open it in a PDF editor. For major text edits, change the Word source and convert again.",
    },
    {
      question: "What if conversion fails?",
      answer:
        "Try re-saving the file as .docx, remove unusual add-ins content, and convert again. A corrupted archive inside the .docx will also fail.",
    },
    {
      question: "Does this tool print the document?",
      answer:
        "It builds a PDF file for download. Printing is optional afterward from your PDF viewer.",
    },
    {
      question: "Is there a page limit?",
      answer:
        "Very large documents may hit browser memory limits. Split huge files or convert on the desktop if the tab runs out of memory.",
    },
  ],

  "ai-text-humanizer": [
    {
      question: "How does an AI text humanizer work?",
      answer:
        "It rewrites phrasing, rhythm, and word choice so the draft reads more like everyday writing while trying to keep your meaning. Results vary by model and by how stiff or repetitive the original text was.",
    },
    {
      question: "When should I use a humanizer instead of rewriting myself?",
      answer:
        "Use it when you need a faster first pass on stiff AI drafts, product blurbs, or translated copy. Always review the output yourself for facts, tone, and claims before you publish.",
    },
    {
      question: "Will humanizing change technical terms or brand names?",
      answer:
        "It may soften surrounding sentences, but you should check that product names, numbers, and jargon stay exact. Re-paste any term the rewrite mangled before you ship the text.",
    },
    {
      question: "Can I humanize only one paragraph of a longer article?",
      answer:
        "Yes. Paste just that paragraph, run the tool, then drop the result back into the full draft. Shorter chunks are easier to review and less likely to drift off-topic.",
    },
    {
      question: "Does a humanizer fix grammar and spelling too?",
      answer:
        "It often smooths awkward phrasing, but it is not a dedicated proofreader. Run a spell check afterward if the draft will go to customers or a teacher.",
    },
    {
      question: "Is humanized text the same as original writing?",
      answer:
        "No. It is still derived from your source draft. Schools and publishers may treat heavy AI editing under their own policies, so follow those rules when they apply.",
    },
    {
      question: "Why does the rewrite sometimes sound flatter than the original?",
      answer:
        "Humanizers often prefer plain words and shorter sentences. If you need punchier marketing voice, keep a few of your original phrases or edit the result by hand.",
    },
    {
      question: "How long can the pasted text be?",
      answer:
        "Browser tools usually work best on a few hundred to a few thousand words at a time. Very long articles may need chunking so the rewrite stays coherent.",
    },
    {
      question: "Does the tool store my draft after I leave the page?",
      answer:
        "This page is built for on-page rewriting; treat anything sensitive as private and avoid pasting secrets. Clear the box when you are done if you share the device.",
    },
    {
      question: "Can I use it for emails and LinkedIn posts?",
      answer:
        "Yes, for tone cleanup on short professional copy. Still verify names, dates, and offers so the smoother wording does not invent details you did not write.",
    },
    {
      question: "What is the difference between humanize and paraphrase?",
      answer:
        "Paraphrase focuses on saying the same idea with different words. Humanize additionally targets patterns that sound machine-generated, such as repetitive cadence or stock transitions.",
    },
    {
      question: "Will detectors always label humanized text as human?",
      answer:
        "No. Detectors are imperfect and update often. Do not rely on any rewrite tool as a guarantee that content will pass a specific detector.",
    },
    {
      question: "Should I humanize academic citations and quotes?",
      answer:
        "Leave quoted material and citation strings alone. Rewrite only the surrounding explanation so you do not alter someone else’s exact words.",
    },
    {
      question: "Does running humanize twice improve the result?",
      answer:
        "A second pass can soften leftover stock phrases, but it can also wash out voice. Compare both versions and keep the clearer one.",
    },
    {
      question: "Can the humanizer invent facts I never wrote?",
      answer:
        "Rewrites sometimes fill gaps with plausible wording. Check every number, claim, and proper noun against your source before publishing.",
    },
    {
      question: "Is there an offline way to soften AI phrasing?",
      answer:
        "Yes: cut filler openers, vary sentence length, replace vague adjectives with specifics, and read the draft aloud. Those edits often beat a second automated pass.",
    },
  ],
  "average-calculator": [
    {
      question: "How do I calculate the mean of a list of numbers?",
      answer:
        "Add every value, then divide by how many values you entered. That quotient is the arithmetic mean, which most people simply call the average.",
    },
    {
      question: "What is the difference between mean, median, and mode?",
      answer:
        "The mean is the sum divided by the count. The median is the middle value after sorting. The mode is the value that appears most often.",
    },
    {
      question: "When should I use the median instead of the mean?",
      answer:
        "Use the median when a few extreme values would pull the mean up or down, such as incomes or house prices. The middle value is less sensitive to outliers.",
    },
    {
      question: "Can I paste numbers separated by commas or spaces?",
      answer:
        "Yes. The calculator accepts common separators so you can paste from a spreadsheet cell list or a quick note. Invalid tokens are usually ignored or flagged.",
    },
    {
      question: "Does order matter when I calculate an average?",
      answer:
        "Not for the mean. Order matters for finding the median because the list must be sorted first, but the final median does not care how you typed the rows.",
    },
    {
      question: "How do I average percentages correctly?",
      answer:
        "If each percentage came from the same-sized group, a simple mean is fine. If group sizes differ, weight each percentage by its group size instead of averaging the percents alone.",
    },
    {
      question: "What happens if I include zero in the list?",
      answer:
        "Zero still counts as a value. It lowers the mean and can become the mode if it appears most often. Do not drop zeros unless they were empty cells you meant to skip.",
    },
    {
      question: "Can this calculator find a weighted average?",
      answer:
        "This page focuses on unweighted mean, median, and mode. For grades or portfolio weights, multiply each value by its weight, sum those products, then divide by the total weight.",
    },
    {
      question: "Why is my mean a long decimal?",
      answer:
        "Division often produces repeating decimals. Round only for display; keep full precision if you will feed the result into another calculation.",
    },
    {
      question: "How many numbers can I enter at once?",
      answer:
        "Small classroom or spreadsheet lists work well in the browser. Extremely large datasets belong in a spreadsheet or statistics package.",
    },
    {
      question: "Is the average always between the smallest and largest values?",
      answer:
        "Yes for the arithmetic mean of real numbers. If your result sits outside that range, a separator or sign was probably misread.",
    },
    {
      question: "What is a bimodal dataset?",
      answer:
        "It is a set with two different values tied for most frequent. Some tools report both modes; others say there is no single mode.",
    },
    {
      question: "Do negative numbers work in an average calculator?",
      answer:
        "Yes. Losses, temperatures, and signed scores are valid inputs. The mean can be negative when negatives dominate the sum.",
    },
    {
      question: "How is average used in everyday decisions?",
      answer:
        "People average test scores, monthly spending, commute times, and sports stats to summarize a list in one number. Pair it with the range when outliers matter.",
    },
    {
      question: "Should blank lines count toward the average?",
      answer:
        "No. Empty entries are not numbers. Remove blanks before calculating so the count matches the values you actually measured.",
    },
    {
      question: "Can I compare two averages from different sample sizes?",
      answer:
        "You can compare the numbers, but the smaller sample is noisier. Note the counts beside each average so readers do not over-read a tiny group.",
    },
  ],
  "compound-interest-calculator": [
    {
      question: "What inputs do I need for a compound interest estimate?",
      answer:
        "You typically need a starting balance, an annual rate, a compounding frequency, a time span, and optional regular contributions. The calculator compounds the balance over each period you choose.",
    },
    {
      question: "How does annual percentage yield relate to the stated rate?",
      answer:
        "APY reflects compounding within a year, so it can be higher than the nominal annual rate when interest is added more than once a year. Compare APYs when offers use different compounding schedules.",
    },
    {
      question: "Should I enter the rate as 5 or 0.05?",
      answer:
        "Most consumer calculators expect a percent such as 5 for five percent. If a field asks for a decimal rate, it will say so; entering the wrong form will skew every period.",
    },
    {
      question: "What is the difference between starting balance and contribution?",
      answer:
        "The starting balance is money already invested. Contributions are amounts you add on a schedule. Both can earn interest after they are in the account, depending on timing rules.",
    },
    {
      question: "Does more frequent compounding always grow faster?",
      answer:
        "Yes for the same nominal rate, more frequent compounding grows a little faster, but the gap between daily and continuous is often small. Rate and time still dominate the result.",
    },
    {
      question: "Can I model withdrawing money with this calculator?",
      answer:
        "Many growth calculators assume deposits only. For drawdowns, use a loan or retirement withdrawal tool, or enter negative contributions only if the page explicitly supports them.",
    },
    {
      question: "Why does doubling the rate not exactly double the final balance?",
      answer:
        "Interest earns interest, so growth is exponential in the rate and time, not a straight line. Fees, contribution timing, and compounding frequency also change the path.",
    },
    {
      question: "How long does it take money to double with compound interest?",
      answer:
        "A rough rule of 72 divides 72 by the annual percent rate for an approximate doubling time. The calculator’s timeline is more precise when contributions or odd rates are involved.",
    },
    {
      question: "Are taxes and fees included in the projection?",
      answer:
        "Typical online estimators show gross growth before taxes, account fees, or early-withdrawal penalties. Subtract those separately when you need a take-home estimate.",
    },
    {
      question: "What compounding frequency should I pick for a savings account?",
      answer:
        "Match the bank’s stated schedule—daily, monthly, or quarterly. If you are unsure, monthly is a common middle ground for rough planning, then confirm on the account disclosure.",
    },
    {
      question: "Can compound interest work against me on debt?",
      answer:
        "Yes. Credit cards and some loans add interest on unpaid balances, so debt can grow the same way savings do. Paying more than the minimum reduces the balance that compounds.",
    },
    {
      question: "Why do two calculators disagree slightly on the same inputs?",
      answer:
        "They may round differently, apply contributions at the start versus end of a period, or treat the last partial period another way. Read each tool’s assumptions under the result.",
    },
    {
      question: "Is past market return a safe rate to enter?",
      answer:
        "No. Historical averages are not guarantees. For planning, try a few conservative rates and treat the chart as a scenario, not a promise.",
    },
    {
      question: "How do I include an employer match in the estimate?",
      answer:
        "Add the match to your contribution amount for periods when it applies, or raise the starting balance if the match is a one-time deposit. Keep the match rules in mind so you do not overstate it.",
    },
    {
      question: "Does inflation change the calculator’s output?",
      answer:
        "The raw balance is usually in today’s dollars of contribution, not inflation-adjusted buying power. For real growth, subtract an inflation assumption after you see the nominal total.",
    },
    {
      question: "When is simple interest a better model than compound interest?",
      answer:
        "Some short-term notes and classroom examples pay simple interest only. If interest is never added to the balance during the term, use a simple-interest formula instead.",
    },
  ],
  "cron-expression-generator": [
    {
      question: "What is a cron expression used for?",
      answer:
        "A cron expression is a compact schedule string that tells a job runner when to fire—hourly backups, nightly reports, or weekly cleanups. Each field narrows minutes, hours, days, months, and weekdays.",
    },
    {
      question: "How many fields does a standard cron expression have?",
      answer:
        "Classic Unix cron uses five fields: minute, hour, day of month, month, and day of week. Some systems add a sixth seconds field; this generator focuses on the common five-field form.",
    },
    {
      question: "What does an asterisk mean in cron?",
      answer:
        "An asterisk means every value in that field. `* * * * *` would mean every minute. Narrow other fields when you only want a specific hour or weekday.",
    },
    {
      question: "How do I run a job every day at 9:00?",
      answer:
        "Use `0 9 * * *` for minute 0 of hour 9 on every day of the month and every weekday. Confirm the server’s timezone so 9:00 is the clock you intend.",
    },
    {
      question: "What is the difference between day-of-month and day-of-week?",
      answer:
        "Day-of-month picks calendar dates such as the 1st. Day-of-week picks Sunday through Saturday. Setting both can mean “either” or “both,” depending on the cron implementation.",
    },
    {
      question: "Can I use names like MON instead of numbers?",
      answer:
        "Some cron flavors accept short day or month names; others require numbers only. If this generator rejects a name, switch to numeric fields for wider compatibility.",
    },
    {
      question: "How do step values like */15 work?",
      answer:
        "A step runs every N units within the field. `*/15` in the minute field means minutes 0, 15, 30, and 45. Combine ranges and steps only when your cron dialect allows it.",
    },
    {
      question: "Why should I avoid scheduling everything at midnight?",
      answer:
        "Many jobs default to 00:00, which creates load spikes. Offset non-urgent tasks by a few minutes or hours so servers and APIs are less likely to contend.",
    },
    {
      question: "Does cron use the server timezone or UTC?",
      answer:
        "It uses whatever timezone the scheduler process sees, often the machine’s local zone unless you configure UTC. Document the zone next to the expression in your runbook.",
    },
    {
      question: "How do I express “weekdays only” in cron?",
      answer:
        "Set the day-of-week field to Monday through Friday (commonly `1-5` when Sunday is 0). Keep day-of-month as `*` unless you also need a calendar constraint.",
    },
    {
      question: "What happens if my cron job runs longer than the interval?",
      answer:
        "A second instance may start while the first is still running unless you add locking. Use a mutex, flock, or a queue worker so overlapping runs do not corrupt data.",
    },
    {
      question: "Can I test a cron expression before deploying it?",
      answer:
        "Yes. Generate the string here, then confirm next-run times in your platform’s cron UI or a dry-run linter. Always verify on a staging job before production.",
    },
    {
      question: "Why was my six-field expression rejected?",
      answer:
        "This tool targets five-field Unix cron. Platforms that want seconds need a different dialect. Drop the seconds field or use that platform’s native scheduler syntax.",
    },
    {
      question: "How do lists and ranges appear in a field?",
      answer:
        "Lists use commas (`1,15`) and ranges use hyphens (`9-17`). You can combine them when the daemon supports it, such as `1,15,20-22`.",
    },
    {
      question: "Is crontab the only place cron expressions appear?",
      answer:
        "No. CI systems, Kubernetes CronJobs, cloud schedulers, and app frameworks reuse similar strings. Always check that product’s field count and Sunday numbering.",
    },
    {
      question: "Should secrets go inside a cron command line?",
      answer:
        "Prefer environment files or a secret manager. Crontab and process lists can expose commands to other users on the host.",
    },
  ],
  "favicon-generator": [
    {
      question: "What size should a favicon be?",
      answer:
        "Classic favicons are 16×16 and 32×32 pixels. Many sites also ship 180×180 for Apple touch icons. Generating a few square PNGs covers most browsers and home-screen bookmarks.",
    },
    {
      question: "What file formats work for favicons?",
      answer:
        "ICO bundles multiple sizes in one file; PNG works well for modern browsers. SVG favicons are supported in some browsers but not all, so keep a PNG or ICO fallback.",
    },
    {
      question: "How do I add a favicon to my website?",
      answer:
        "Upload the icon files to your site root or asset folder, then link them in the HTML head with `rel=\"icon\"` (and `apple-touch-icon` when you ship a 180px PNG).",
    },
    {
      question: "Why does my new favicon not show up?",
      answer:
        "Browsers cache favicons aggressively. Hard-refresh, try a private window, or bump the file name or query string after you replace the icon.",
    },
    {
      question: "Should a favicon be a logo or a letter?",
      answer:
        "Either works if it stays readable at 16 pixels. Busy logos turn to mush; a simple mark or monogram usually survives the tiny tab size better.",
    },
    {
      question: "Do I need a separate dark-mode favicon?",
      answer:
        "Optional but helpful. Light glyphs disappear on light tabs; some sites ship alternate icons or choose colors with contrast on both themes.",
    },
    {
      question: "Can I make a favicon from a large PNG?",
      answer:
        "Yes. Start from a sharp square image, then downscale. Upscaling a tiny source stays blurry, so keep a high-resolution master.",
    },
    {
      question: "What is the difference between favicon.ico and apple-touch-icon?",
      answer:
        "`favicon.ico` covers browser tabs and bookmarks. The Apple touch icon is the larger home-screen icon on iOS. Many generators export both from one design.",
    },
    {
      question: "Will a transparent background work?",
      answer:
        "Often yes for PNG icons. On some tabs transparency shows the browser chrome through the mark, so test light and dark UI before you ship.",
    },
    {
      question: "How many favicon sizes do I really need?",
      answer:
        "A solid baseline is 16, 32, and 180 pixels plus an ICO or PNG for `rel=\"icon\"`. Progressive web apps may add more icons via the web manifest.",
    },
    {
      question: "Can emoji work as a favicon?",
      answer:
        "You can render an emoji to a square canvas and export PNG sizes. Check clarity at 16px; not every emoji stays recognizable that small.",
    },
    {
      question: "Does the generator upload my logo to a server?",
      answer:
        "This page builds icons in the browser from what you provide. Prefer non-confidential artwork if you are unsure about any network path on your device.",
    },
    {
      question: "Why was my hex color rejected?",
      answer:
        "Favicon color fields usually expect a full hex such as `#ffffff`. Shorthand or missing `#` can fail validation depending on the form.",
    },
    {
      question: "Should the favicon match my Open Graph image?",
      answer:
        "They share brand colors, but OG images are large social previews and favicons are tiny tab marks. Design each for its size instead of reusing one file for both.",
    },
    {
      question: "Can I change favicons per environment?",
      answer:
        "Yes. Staging sites often use a different color or badge so tabs are not confused with production. Point each environment’s head tags at its own icon files.",
    },
    {
      question: "Do search engines use my favicon in results?",
      answer:
        "Some search result layouts show a favicon beside the site name. Keep the file crawlable, square, and stable so crawlers can pick it up.",
    },
  ],
  "gitignore-generator": [
    {
      question: "What does a .gitignore file do?",
      answer:
        "It tells Git which files and folders to leave untracked, such as dependencies, build output, and local env files. Patterns keep secrets and clutter out of commits.",
    },
    {
      question: "Where should I put .gitignore in a repository?",
      answer:
        "Place a root `.gitignore` at the top of the project so rules apply everywhere. You can add nested ignore files in subfolders for package-specific exceptions.",
    },
    {
      question: "How do I ignore node_modules in Git?",
      answer:
        "Add a `node_modules/` line (with the trailing slash for the folder). Regenerate or paste that pattern from a Node template if you are starting a new app.",
    },
    {
      question: "What is the difference between a slash at the start and the end of a pattern?",
      answer:
        "A leading slash anchors the pattern to the folder that contains the ignore file. A trailing slash marks a directory. `build/` ignores build directories; `/build` is root-only.",
    },
    {
      question: "Can I un-ignore a file that matches a broader rule?",
      answer:
        "Yes. Use `!` negation patterns after the broad ignore, such as ignoring `dist/*` then `!dist/.gitkeep`. Order matters; later rules can re-include.",
    },
    {
      question: "Why is a file still tracked after I added it to .gitignore?",
      answer:
        "Git only ignores untracked paths. If the file was already committed, remove it from the index with `git rm --cached` while keeping the working copy, then commit.",
    },
    {
      question: "Should .env files be ignored?",
      answer:
        "Yes in almost every app that stores secrets there. Commit an `.env.example` with placeholder keys instead of real credentials.",
    },
    {
      question: "How do OS junk files get ignored?",
      answer:
        "Templates often include `.DS_Store`, `Thumbs.db`, and editor swap files. Add a Global or operating-system template so those never clutter reviews.",
    },
    {
      question: "Can one .gitignore cover multiple languages?",
      answer:
        "Yes. Stack templates—for example Node plus Python plus a custom section—so monorepos ignore each ecosystem’s artifacts without fighting.",
    },
    {
      question: "Do ignore patterns support globs?",
      answer:
        "Yes. `*` matches within a path segment and `**` can match across folders in modern Git. Test tricky globs with `git check-ignore -v` on a sample path.",
    },
    {
      question: "What should I not put in .gitignore?",
      answer:
        "Do not ignore source you intend to share, lockfiles your team relies on, or CI config. Ignoring `package-lock.json` by accident is a common footgun.",
    },
    {
      question: "How do I ignore all files of one extension?",
      answer:
        "Use a pattern like `*.log` or `*.tmp`. Be careful with `*.js` in mixed projects; you might hide source. Prefer build output folders when possible.",
    },
    {
      question: "Is .gitignore the same as .git/info/exclude?",
      answer:
        "Both use the same pattern syntax, but `exclude` is local to your clone and is not committed. Use `.gitignore` for rules the whole team should share.",
    },
    {
      question: "Will the generator commit the file for me?",
      answer:
        "No. It builds the text for you to save as `.gitignore` and commit yourself. That keeps review control in your normal Git workflow.",
    },
    {
      question: "How do I comment lines inside .gitignore?",
      answer:
        "Start a line with `#` for a comment. Blank lines are fine for grouping templates such as dependencies, build, and secrets.",
    },
    {
      question: "Can ignored files still be sent to a remote another way?",
      answer:
        "Yes—zip uploads, Docker build contexts, or misconfigured CI can still include them. Keep a separate deploy allowlist when secrets are nearby.",
    },
  ],
  "image-to-pdf": [
    {
      question: "How do I convert images to a PDF in the browser?",
      answer:
        "Add one or more JPG, PNG, or similar files, set page size and fit options, then download the PDF. The pages follow the order you arranged in the list.",
    },
    {
      question: "Which image formats can become a PDF?",
      answer:
        "Common formats such as JPG, PNG, and WebP usually work. If a format fails, convert it to JPG or PNG first, then build the PDF.",
    },
    {
      question: "Can I rearrange pages before downloading?",
      answer:
        "Yes when the tool shows a sortable list. Drag images into the order you want so the PDF matches that sequence.",
    },
    {
      question: "What is the difference between fit and fill on a page?",
      answer:
        "Fit keeps the whole image visible and may leave margins. Fill covers the page and may crop edges. Pick fit for documents and fill for full-bleed photos.",
    },
    {
      question: "Will large photos be downscaled in the PDF?",
      answer:
        "Very large images may be resized so the file stays manageable. Check the tool note under the preview if a size limit applied.",
    },
    {
      question: "Does PNG transparency stay transparent in the PDF?",
      answer:
        "Transparency is often flattened onto a white background in simple converters. Export a JPG with a background if you need a guaranteed opaque page.",
    },
    {
      question: "Can I mix portrait and landscape images?",
      answer:
        "Yes. Each image becomes its own page with its orientation unless you force a single page size that rotates or letterboxes content.",
    },
    {
      question: "Is Image to PDF the same as scanning a paper document?",
      answer:
        "No. This builds a PDF from existing image files. A scanner creates those images first; you can still combine phone photos of pages here afterward.",
    },
    {
      question: "How many photos can one PDF hold before the browser struggles?",
      answer:
        "Browser memory sets a practical ceiling. Dozens of phone photos usually work; hundreds of high-resolution shots may need several smaller PDFs.",
    },
    {
      question: "What page sizes are typical for photo PDFs?",
      answer:
        "A4 and Letter are common for printing. Square or custom sizes help photo books; match the size your printer or client expects.",
    },
    {
      question: "Will text inside a photo be selectable in the PDF?",
      answer:
        "Not by default. A photo of text is still an image. You need OCR in another tool if you want searchable text.",
    },
    {
      question: "Can I password-protect the PDF this page creates?",
      answer:
        "This converter focuses on building pages from images. Add a password later in a PDF editor if you need one.",
    },
    {
      question: "Why is my PDF much larger than the photos?",
      answer:
        "Uncompressed embedding and high pixel counts inflate size. Compress the PDF afterward or shrink images before conversion.",
    },
    {
      question: "Do EXIF camera details stay in the PDF?",
      answer:
        "Many converters strip or ignore photo metadata when embedding. Do not rely on this flow to preserve EXIF.",
    },
    {
      question: "Can I convert a single screenshot to PDF?",
      answer:
        "Yes. Upload one image and download a one-page PDF—useful for receipts and error messages you need to archive.",
    },
    {
      question: "Are my photos uploaded to convert them?",
      answer:
        "This tool is designed to work in the browser with your files. Prefer non-sensitive images if you are unsure about any network path on your device.",
    }
  ],
  "loan-calculator": [
    {
      question: "What inputs does a loan payment calculator need?",
      answer:
        "Principal, annual interest rate, and term length are the core fields. Some pages also take fees or extra payments to refine the schedule.",
    },
    {
      question: "How does a longer term change my monthly payment?",
      answer:
        "Spreading the same principal over more months lowers the payment but usually raises total interest. Compare both payment and lifetime interest before choosing.",
    },
    {
      question: "What is amortization in plain language?",
      answer:
        "It is the schedule that splits each payment into interest and principal. Early payments are interest-heavy; later ones retire more principal.",
    },
    {
      question: "Does this calculator include taxes and insurance?",
      answer:
        "Most simple loan calculators show principal and interest only. Mortgages often need separate tax and insurance estimates for a full PITI figure.",
    },
    {
      question: "How do extra payments affect payoff?",
      answer:
        "Extra principal shortens the term and cuts interest if the lender applies it correctly. Confirm there is no prepayment penalty on your contract.",
    },
    {
      question: "What is the difference between fixed and variable rates?",
      answer:
        "Fixed rates stay the same for the term. Variable rates can move with an index, so the payment estimate here is only a snapshot at today’s rate.",
    },
    {
      question: "Should I enter APR or the nominal interest rate?",
      answer:
        "Use the rate the tool’s label asks for. APR folds in some fees for comparison shopping; the amortization formula often uses the note rate.",
    },
    {
      question: "Can I model a zero-interest loan?",
      answer:
        "Yes when the rate field accepts 0. The payment is then principal divided by the number of months, aside from any separate fees.",
    },
    {
      question: "Why does the first month’s interest look large?",
      answer:
        "Interest is charged on the full starting balance. As principal falls, the interest portion of each fixed payment shrinks.",
    },
    {
      question: "How accurate is an online loan estimate?",
      answer:
        "It is a planning figure, not a lender quote. Origination fees, credit-based pricing, and escrow can change what you actually pay.",
    },
    {
      question: "Can I use this for auto loans and personal loans?",
      answer:
        "Yes for standard amortizing loans. Dealer add-ons, balloon payments, or interest-only periods need a different model.",
    },
    {
      question: "What happens if I round the payment up?",
      answer:
        "Paying a few dollars more each month accelerates principal reduction. Recalculate the payoff date after you pick a rounded amount.",
    },
    {
      question: "Does biweekly payment scheduling change the math?",
      answer:
        "Biweekly plans can create thirteen “monthly” equivalents per year. Convert carefully so you do not understate how much you send annually.",
    },
    {
      question: "How do loan fees change the monthly payment?",
      answer:
        "Fees added to principal raise the amount financed and the payment. Fees paid in cash at closing may not change the monthly figure.",
    },
    {
      question: "Is a lower payment always better?",
      answer:
        "Not if it comes from a much longer term with far more interest. Balance cash-flow comfort against total cost.",
    },
    {
      question: "When should I talk to a lender instead of a calculator?",
      answer:
        "When credit issues, cosigners, variable income, or special programs apply. Underwriting rules beat generic formulas.",
    }
  ],
  "meta-tag-generator": [
    {
      question: "What are meta tags used for?",
      answer:
        "They describe a page to browsers and crawlers—title, description, robots rules, and social preview fields. Good tags help snippets and link previews look intentional.",
    },
    {
      question: "How long should a meta description be?",
      answer:
        "Aim for about 150–160 characters so search snippets are less likely to truncate. Write for humans first; packing keywords alone rarely helps.",
    },
    {
      question: "Should the HTML title match the visible page heading?",
      answer:
        "They can share wording, but they are different elements. The title sits in the document head for tabs and search results, while the H1 is the on-page heading readers see.",
    },
    {
      question: "What does a canonical meta or link tag do?",
      answer:
        "It points crawlers at the preferred URL when similar pages exist. Use it to consolidate signals on the main version of the content.",
    },
    {
      question: "Should every page have unique meta tags?",
      answer:
        "Yes whenever possible. Duplicate titles and descriptions make snippets harder to tell apart and can look careless in search results.",
    },
    {
      question: "What robots values are common?",
      answer:
        "`index, follow` is the default-friendly choice. `noindex` keeps a page out of search results; use it for thank-you pages and thin admin screens.",
    },
    {
      question: "Do Open Graph tags replace standard meta description?",
      answer:
        "No. OG tags mainly drive social previews. Keep both a normal description and `og:title` / `og:description` when you care about shares.",
    },
    {
      question: "Can I generate Twitter Card tags here too?",
      answer:
        "Many generators output Twitter fields alongside Open Graph. Confirm the card type your site actually supports before pasting.",
    },
    {
      question: "Why was a character rejected in my title?",
      answer:
        "Some fields disallow raw characters that must be escaped in HTML, or they enforce length limits. Encode ampersands and keep titles concise.",
    },
    {
      question: "Does generating tags publish them to my site?",
      answer:
        "No. The tool writes markup for you to paste into your theme, CMS, or SEO plugin. Nothing goes live until you deploy that HTML.",
    },
    {
      question: "Should brand name go at the start or end of the title?",
      answer:
        "Often at the end after a separator so the unique page topic appears first in truncated tabs. Test how your brand looks in a real SERP preview.",
    },
    {
      question: "Are meta keywords still useful for Google?",
      answer:
        "Mainstream search engines have long ignored meta keywords for ranking. Focus on title, description, and clear on-page content instead.",
    },
    {
      question: "What is og:url for?",
      answer:
        "It declares the canonical social URL for the share. Keep it absolute (https) so platforms do not guess the wrong path.",
    },
    {
      question: "Can multilingual sites use different meta per language?",
      answer:
        "Yes. Each language URL should carry its own title and description, plus proper `hreflang` elsewhere in the head.",
    },
    {
      question: "How do I preview tags after installing them?",
      answer:
        "Use an Open Graph debugger or this site’s preview tool on the live URL. Cache delays mean you may need a scrape refresh.",
    },
    {
      question: "Should thin utility pages get noindex?",
      answer:
        "Often yes for login walls, cart steps, and filtered faceted URLs that create duplicates. Keep indexable pages to ones you want ranking.",
    }
  ],
  "open-graph-preview": [
    {
      question: "What does an Open Graph preview show?",
      answer:
        "It reads OG and related meta tags to approximate how a link card may appear—title, description, and image. Platforms can still override or crop differently.",
    },
    {
      question: "Why do I need a public URL for the preview?",
      answer:
        "The checker fetches the page like a social crawler would. Localhost and private IPs are blocked because remote fetchers cannot reach them.",
    },
    {
      question: "What if my preview image is wrong?",
      answer:
        "Confirm `og:image` is absolute, publicly reachable, and large enough. Then refresh the platform’s cache after you fix the tag.",
    },
    {
      question: "Does the preview download my whole website?",
      answer:
        "It requests the URL you enter to read head tags, not to mirror the site. Still avoid pasting non-public staging links that expose secrets.",
    },
    {
      question: "Why did the check time out?",
      answer:
        "Slow servers, blocked bots, or network filters can prevent a timely response. Retry later or test headers with a simpler static page.",
    },
    {
      question: "Is Open Graph only for Facebook?",
      answer:
        "OG started at Facebook but many apps reuse the same tags. LinkedIn, Slack, and others read similar fields with their own quirks.",
    },
    {
      question: "What size should og:image be for a clean card?",
      answer:
        "A landscape image around 1200×630 (about 1.91:1) is a widely compatible target. Avoid tiny images that platforms reject.",
    },
    {
      question: "Can HTTPS pages still fail the preview?",
      answer:
        "Yes—certificate problems, bot walls, or missing tags still break cards. View source and confirm the OG tags are in the initial HTML.",
    },
    {
      question: "Do query parameters change the preview?",
      answer:
        "If the server returns different meta for different query strings, cards can diverge. Prefer clean canonical URLs for sharing.",
    },
    {
      question: "Why is the title truncated on mobile shares?",
      answer:
        "Apps reserve limited space. Keep `og:title` concise so the important words survive cropping.",
    },
    {
      question: "Should og:description match the meta description?",
      answer:
        "They can match, but you may tune OG copy for social tone while keeping the search description more factual.",
    },
    {
      question: "How do I force Facebook to refresh a card?",
      answer:
        "Use Meta’s Sharing Debugger scrape tool after you update tags. Other platforms have their own clear-cache endpoints.",
    },
    {
      question: "Can JavaScript-injected meta tags be read?",
      answer:
        "Many crawlers only see the first HTML response. Put critical OG tags in server-rendered HTML, not only in client-side scripts.",
    },
    {
      question: "What does a missing og:image look like?",
      answer:
        "Platforms may pick a random on-page image or show a blank card. Explicit `og:image` tags prevent that surprise.",
    },
    {
      question: "Is this preview identical to Instagram or X?",
      answer:
        "No. Each network crops and styles cards differently. Treat this as a diagnostic for tags, not a pixel-perfect mock of every app.",
    },
    {
      question: "Do I need og:type on every page?",
      answer:
        "Setting `website` or `article` helps consumers classify the object. It is small markup with clearer intent for scrapers.",
    }
  ],
  "password-strength-checker": [
    {
      question: "How does a password strength checker score a password?",
      answer:
        "It estimates entropy from length and character variety, then labels weak through strong. It does not prove a password is unguessable in the real world.",
    },
    {
      question: "Is a longer password always stronger?",
      answer:
        "Length helps a lot, especially with random words or characters. A long but predictable phrase can still be weak if it is famous or personal.",
    },
    {
      question: "Why are digits-only passwords rated poorly?",
      answer:
        "Ten digits give a tiny character pool. Attackers try numeric patterns quickly, so short PINs fail most strength rubrics.",
    },
    {
      question: "Does this tool check Have I Been Pwned or leak lists?",
      answer:
        "Not unless a page explicitly says it queries an online breach API. Local scoring alone does not know whether your password already leaked.",
    },
    {
      question: "Should I include symbols in every password?",
      answer:
        "Symbols expand the search space when the password is otherwise random. A long passphrase of unrelated words can also be strong without dense symbols.",
    },
    {
      question: "What is password entropy in bits?",
      answer:
        "It is a rough measure of how many guesses a random attacker might need. Higher bits generally mean harder brute force, assuming true randomness.",
    },
    {
      question: "Is “Strong” enough for a bank login?",
      answer:
        "Use a unique password or passphrase plus multi-factor authentication. Strength labels are guidance, not a substitute for MFA.",
    },
    {
      question: "Why does adding a space change the score?",
      answer:
        "Spaces count as another character class in some pools, raising entropy slightly. More important is overall length and unpredictability.",
    },
    {
      question: "Can the checker see my password after I leave?",
      answer:
        "This page is built to rate what you type locally. Still avoid entering production passwords on shared computers.",
    },
    {
      question: "How is strength checking different from generating a password?",
      answer:
        "Checking rates a candidate you already chose. A generator creates a fresh random secret so you are not reusing old patterns.",
    },
    {
      question: "Are password tips the same for passphrases?",
      answer:
        "Passphrases rely on several unrelated words and enough length. Avoid famous quotes and keyboard walks even if the phrase is long.",
    },
    {
      question: "Why might two checkers disagree?",
      answer:
        "They use different dictionaries, entropy models, and banned-list heuristics. Treat disagreement as a signal to lengthen or randomize further.",
    },
    {
      question: "Should I reuse a strong password across sites?",
      answer:
        "No. A leak on one site would expose the others. Use a password manager to store unique secrets.",
    },
    {
      question: "Do composition rules like “one uppercase” guarantee strength?",
      answer:
        "Mandatory patterns can make passwords predictable. Modern guidance favors length and uniqueness over rigid complexity theater.",
    },
    {
      question: "Can common substitutions like @ for a fool checkers?",
      answer:
        "Often those tricks are in attacker dictionaries. Randomness beats leetspeak on a weak base word.",
    },
    {
      question: "When should I change a password immediately?",
      answer:
        "Change it after a breach notice, phishing, or shared-device exposure—even if the checker still called it strong.",
    }
  ],
  "pdf-compressor": [
    {
      question: "How do I compress a PDF for email?",
      answer:
        "Open the file in the compressor, choose a compression level, and download the smaller result. Then confirm it is under your mail host’s attachment limit.",
    },
    {
      question: "Will compressing a PDF always reduce quality?",
      answer:
        "Image-heavy PDFs may lose some visual fidelity at stronger settings. Text-based PDFs often shrink with little visible change when streams are optimized.",
    },
    {
      question: "Why did my PDF barely get smaller?",
      answer:
        "It may already be optimized, or mostly text with little redundant data. Scanned photo pages shrink more than digitally created text PDFs.",
    },
    {
      question: "Is PDF compression lossless?",
      answer:
        "It depends on the mode. Some optimizations preserve content exactly; stronger modes recompress images and are lossy. Read the option label before you choose.",
    },
    {
      question: "Will text stay searchable after compression?",
      answer:
        "Often yes if the tool keeps the text layer. Extreme image flattening can turn pages into pictures and remove searchability.",
    },
    {
      question: "What is a good size target for Gmail attachments?",
      answer:
        "Stay comfortably under the common 25 MB cap, including encoding overhead. When still too large, split the PDF or share a link instead.",
    },
    {
      question: "Can I compress a password-protected PDF?",
      answer:
        "Usually you must unlock it first. Protected files block rewriting until the password is supplied in a tool that supports it.",
    },
    {
      question: "Should I split or compress a huge PDF?",
      answer:
        "Try compression first for email. Split by sections when recipients only need part of the document or when compression plateaus.",
    },
    {
      question: "Why is the output sometimes larger?",
      answer:
        "Re-encoding can add overhead if images were already tiny or if metadata grew. Keep the original when that happens.",
    },
    {
      question: "How large a PDF can the browser open?",
      answer:
        "Memory limits vary by device. Very large scanned books may fail in-tab; try fewer pages or a desktop app then.",
    },
    {
      question: "Does compression remove PDF metadata?",
      answer:
        "Not always. Use a metadata tool if you need authors, titles, or hidden fields cleared separately.",
    },
    {
      question: "Is compressing the same as converting to PDF/A?",
      answer:
        "No. PDF/A is an archival standard with stricter rules. Compression only aims to reduce bytes.",
    },
    {
      question: "Can I compress PDFs made from phone photos?",
      answer:
        "Yes, and they often shrink a lot because camera images are large. Lower image quality settings help when readability remains acceptable.",
    },
    {
      question: "Will forms and annotations survive compression?",
      answer:
        "Simple optimizers keep them; aggressive rewrite modes might not. Spot-check interactive fields after compressing.",
    },
    {
      question: "How many times should I recompress the same file?",
      answer:
        "Once is usually enough. Repeated lossy passes can degrade scans without much more size savings.",
    },
    {
      question: "Are my PDF files uploaded to compress them?",
      answer:
        "This compressor is built for in-browser processing. Avoid highly sensitive files on shared devices regardless of the path.",
    }
  ]
};
