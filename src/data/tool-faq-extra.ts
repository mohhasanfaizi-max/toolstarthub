import type { ToolFaq } from "./tool-content.ts";

/**
 * Extra English FAQs for tool pages that had only three, written around the
 * questions people ask search engines and AI assistants ("how do I…",
 * "what is…"). They are appended after the tool's own FAQs, so they show on
 * the page and in its FAQPage structured data.
 */
export const extraToolFaqs: Record<string, ToolFaq[]> = {
  "percentage-calculator": [
    {
      question: "How do I calculate a percentage of a number?",
      answer:
        "Multiply the number by the percent, then divide by 100. For example, 15% of 80 is 80 × 15 ÷ 100 = 12.",
    },
    {
      question: "How do I find what percent one number is of another?",
      answer:
        "Divide the part by the whole and multiply by 100. For example, 12 out of 40 is 12 ÷ 40 × 100 = 30%.",
    },
  ],
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
  "age-calculator": [
    {
      question: "How do I calculate my exact age?",
      answer:
        "Count the full years since your birth date, then the full months since your last birthday, then the remaining days. The Age Calculator does this from the dates you enter.",
    },
    {
      question: "How is age counted for someone born on February 29?",
      answer:
        "The count follows the real calendar, so leap days are handled by the dates themselves instead of by a fixed 365-day year.",
    },
  ],
  "word-counter": [
    {
      question: "How many words is a 5-minute speech?",
      answer:
        "Speaking pace varies, but around 130 to 150 words per minute is a common rule of thumb, so a 5-minute speech is often about 650 to 750 words.",
    },
    {
      question: "How is reading time estimated?",
      answer:
        "The word count is divided by about 225 words per minute. It is an estimate for an average reader, not a measured reading speed.",
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
  "json-formatter": [
    {
      question: "How do I fix invalid JSON?",
      answer:
        "Check the error position, then look for single quotes, a trailing comma before } or ], comments, or a missing comma between items. Standard JSON needs double quotes around keys and strings.",
    },
    {
      question: "What is the difference between formatting and minifying JSON?",
      answer:
        "Formatting adds line breaks and indentation so people can read it. Minifying removes that whitespace to make the file smaller. The data is the same either way.",
    },
  ],
  "image-compressor": [
    {
      question: "How do I reduce an image's file size without losing quality?",
      answer:
        "Resize it to the size you actually display first, then use JPEG or WebP and lower the quality in small steps while you compare the preview. Quality around 70 to 85 often looks close to the original for photos.",
    },
    {
      question: "Which is smaller, JPEG, PNG, or WebP?",
      answer:
        "For photos, WebP is usually smallest, then JPEG. PNG is lossless and is often much larger for photos, but it suits logos, screenshots, and images that need transparency.",
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
  "qr-code-generator": [
    {
      question: "Do QR codes made here expire?",
      answer:
        "No. The text or link is stored directly in the pattern, with no redirect service in between, so the code works for as long as the link itself works.",
    },
    {
      question: "How do I make a QR code for a website?",
      answer:
        "Paste the full address, including https://, generate the code, download the PNG, and test it with a phone camera before you print it.",
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
};
