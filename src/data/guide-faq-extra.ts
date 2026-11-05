import type { GuideFaq } from "./guide-content.ts";

/**
 * Extra English FAQs for guide pages that sat under 20 questions.
 * Appended after each guide's own FAQs for the page and FAQPage JSON-LD.
 */
export const extraGuideFaqs: Record<string, GuideFaq[]> = {
  "how-to-add-line-numbers": [
    {
      question: "How do I add line numbers to a text file?",
      answer:
        "Paste the text into the Add Line Numbers tool, choose a starting number and a separator such as a period or a tab, then copy the result. Each original line keeps its words; only a prefix is added.",
    },
    {
      question: "What separator should I use between the number and the text?",
      answer:
        "A period and a space works for plain reading. A tab works better when you will paste into a spreadsheet. The tool lets you pick the separator before it numbers the lines.",
    },
    {
      question: "Do blank lines get a number?",
      answer:
        "Yes, unless the tool option you use skips empty lines. An empty line still occupies a row in the list, so numbering it keeps the count aligned with the original file.",
    },
    {
      question: "Can I number only a selected range of lines?",
      answer:
        "This page numbers every line in the box from the start value you set. To number a range, paste only that range, number it, then put it back into the full document.",
    },
    {
      question: "Will line numbers break code indentation?",
      answer:
        "They can if the separator uses spaces that look like indent. Prefer a tab separator, or strip the numbers again before you run the code.",
    },
    {
      question: "How do I remove line numbers I already added?",
      answer:
        "Delete the numeric prefix and its separator on each line, or paste into a tool that strips a leading number pattern. The Add Line Numbers tool only adds prefixes; it does not strip them.",
    },
    {
      question: "Is 01, 02 style padding supported?",
      answer:
        "The online tool writes ordinary integers from the start value. It does not zero-pad. If you need 01 and 02, add padding in a spreadsheet or a short script after you copy the result.",
    },
    {
      question: "Can I restart numbering after a heading?",
      answer:
        "Not automatically. Split the document at each heading, number each section from 1, then join the sections again.",
    },
    {
      question: "Do Windows and Mac line endings change the count?",
      answer:
        "The tool splits on line breaks in the pasted text. A CRLF or LF break still counts as one line, so the number of prefixes matches the lines you see.",
    },
    {
      question: "Why would someone number lines before sharing a draft?",
      answer:
        "Reviewers can point to a number instead of quoting a whole paragraph. Teachers and code reviewers use the same habit so comments stay short.",
    },
    {
      question: "Does numbering change character encoding?",
      answer:
        "No. The original characters stay as you pasted them. Only a prefix is inserted at the start of each line.",
    },
    {
      question: "Can I start numbering at 100 for an appendix?",
      answer:
        "Yes. Set the start value to 100, or any other whole number the tool accepts, before you generate the prefixes.",
    },
    {
      question: "What happens to trailing spaces on a line?",
      answer:
        "They stay on the line after the number prefix. Numbering does not trim the text.",
    },
    {
      question: "Is this the same as a word processor's line number gutter?",
      answer:
        "No. A gutter is a view setting in Word or a code editor. This tool writes the numbers into the text itself so they survive a plain-text paste.",
    },
    {
      question: "Can I number verses or list items the same way?",
      answer:
        "Yes, if each verse or item is already on its own line. Paste the list, pick a start number, and copy the numbered output.",
    },
    {
      question: "Does the tool upload my draft?",
      answer:
        "No. Line numbering runs in the browser. The text is not posted to a server for this step.",
    },
    {
      question: "Why did my sorted list look wrong after numbering?",
      answer:
        "If you number first and sort later, the sort may order by the number prefix. Sort the bare lines first, then add numbers, when you need alphabetical order.",
    },
  ],
  "how-to-write-a-video-prompt": [
    {
      question: "What belongs in an AI video prompt?",
      answer:
        "Name the subject, the action, the camera move, the lighting, and the length you want. Vague words such as cinematic alone leave the model guessing, so pair them with concrete details.",
    },
    {
      question: "How long should a video prompt be?",
      answer:
        "A short paragraph is usually enough. Cover who, what happens, where the camera sits, and the mood. Extra adjectives after that rarely help and can contradict each other.",
    },
    {
      question: "Should I describe camera movement?",
      answer:
        "Yes, when motion matters. Say dolly in, static wide shot, or handheld follow so the model does not invent a cut you did not want.",
    },
    {
      question: "Can I reuse an image prompt as a video prompt?",
      answer:
        "Partly. Keep the subject and style, then add time-based instructions such as the action and the camera path. A still prompt has no motion cues on its own.",
    },
    {
      question: "What is a negative prompt for video?",
      answer:
        "It is a list of things to avoid, such as text overlays, watermarks, or shaky framing. Only use it when the video tool you call supports that field.",
    },
    {
      question: "How do I keep a character consistent across clips?",
      answer:
        "Repeat the same short character description in every prompt, and keep wardrobe and age fixed. Changing those details between clips is what breaks continuity.",
    },
    {
      question: "Does aspect ratio belong in the prompt?",
      answer:
        "State it when the generator reads it from text. Many tools also have a separate 16:9 or 9:16 control, which overrides a conflicting phrase in the prompt.",
    },
    {
      question: "What frame rate should I mention?",
      answer:
        "Only when the tool accepts it. Saying 24 fps film look is a style cue; it does not guarantee the export frame rate on every platform.",
    },
    {
      question: "How do I ask for slow motion?",
      answer:
        "Say the action plays in slow motion, or give a speed such as half speed, and keep the rest of the scene simple so the model spends capacity on the motion.",
    },
    {
      question: "Should dialogue go in the prompt?",
      answer:
        "If the video model supports speech, quote a short line and name the speaker. Long scripts belong in a separate dialogue field when the product offers one.",
    },
    {
      question: "Why do my clips ignore the background I described?",
      answer:
        "Crowded prompts bury the setting. Put the location in the first sentence, then the action, so the background is not treated as optional detail.",
    },
    {
      question: "Can I prompt for a specific film stock or lens?",
      answer:
        "Yes, as a style hint, such as 35 mm anamorphic or GoPro wide angle. Results vary by model, so treat those words as preferences rather than guarantees.",
    },
    {
      question: "How do I avoid random text on screen?",
      answer:
        "Say no captions, no subtitles, and no logos when the tool allows exclusions. Also avoid quoting words you do not want rendered as graphics.",
    },
    {
      question: "Is a storyboard better than one long prompt?",
      answer:
        "For multi-shot scenes, yes. Write one prompt per shot with a shared character line, then stitch the clips in an editor.",
    },
    {
      question: "What does seed control do for video?",
      answer:
        "When a tool exposes a seed, the same seed plus the same prompt aims for a similar motion path. Changing either one usually produces a new clip.",
    },
    {
      question: "Does this page call a video model for me?",
      answer:
        "The guide explains how to write the brief. Generation happens only when you use a tool or service that sends the prompt to a model.",
    },
    {
      question: "How should I revise a weak first clip?",
      answer:
        "Change one instruction at a time, such as camera distance or lighting, and keep the subject line identical so you can see what actually improved.",
    },
  ],
  "what-is-base64": [
    {
      question: "When should I use Base64 instead of raw bytes?",
      answer:
        "Use it when a text-only channel must carry binary data, such as a data URL, an email attachment encoding, or a token field that only allows ASCII. Prefer raw bytes when the protocol already supports them.",
    },
    {
      question: "What characters appear in Base64?",
      answer:
        "Standard Base64 uses A–Z, a–z, 0–9, plus, and slash, with equals for padding. URL-safe variants swap plus and slash for hyphen and underscore.",
    },
    {
      question: "Why does Base64 end with one or two equals signs?",
      answer:
        "Padding fills the last block so its length is a multiple of four characters. One or two equals signs show that the final byte group was short.",
    },
    {
      question: "Is Base64 the same as encryption?",
      answer:
        "No. Encoding is reversible without a key. Anyone with a decoder can read it. Encryption needs a key or password to recover the original.",
    },
    {
      question: "Can Base64 hide a password safely?",
      answer:
        "No. A password in Base64 is still recoverable. Store passwords with a slow salted hash such as bcrypt or Argon2, not with encoding.",
    },
    {
      question: "Why is the encoded string longer than the input?",
      answer:
        "Every three bytes become four Base64 characters. That expansion is expected and is not a sign of compression or encryption.",
    },
    {
      question: "Does whitespace break decoding?",
      answer:
        "Many decoders, including the one on this site, strip spaces and line breaks first. Other decoders may reject whitespace, so keep the alphabet tidy when you share a value.",
    },
    {
      question: "What is a Base64 data URL?",
      answer:
        "It is a prefix such as data:image/png;base64, followed by encoded bytes. The page encodes or decodes the payload in the box; it does not add or remove that prefix for you.",
    },
    {
      question: "Can I Base64-encode a file by pasting its name?",
      answer:
        "No. The tool encodes the text you paste, not a file from disk. To encode a file, open it as text or use a dedicated file encoder.",
    },
    {
      question: "How does UTF-8 change the result?",
      answer:
        "Accented letters and emoji use more than one byte. Base64 of those bytes differs from a naive one-byte-per-character guess.",
    },
    {
      question: "What happens if the Base64 is invalid?",
      answer:
        "Decode fails instead of guessing. Missing padding or characters outside the alphabet are common causes.",
    },
    {
      question: "Is Base64 used inside JWTs?",
      answer:
        "JWT header and payload sections use Base64URL without padding. That is related to Base64 but not identical to the classic alphabet with plus and slash.",
    },
    {
      question: "Does encoding run on a server here?",
      answer:
        "No. The Base64 encoder and decoder on Tools Star Hub run in the browser.",
    },
    {
      question: "How large a string can I encode on this site?",
      answer:
        "Up to 750,000 characters for encode or decode. Longer pastes are rejected so the tab stays responsive.",
    },
    {
      question: "Should I compress before Base64?",
      answer:
        "If you control both ends and the payload is large, compressing first can shrink the final text because Base64 expands whatever bytes you give it.",
    },
  ],
  "what-is-robots-txt": [
    {
      question: "What is a robots.txt file for?",
      answer:
        "It tells cooperating crawlers which paths they may request. It is a public text file at the site root, not a firewall and not a way to hide private pages from people.",
    },
    {
      question: "Where must robots.txt live?",
      answer:
        "At https://example.com/robots.txt on the host you care about. A file in a subdirectory is not the site-wide robots file.",
    },
    {
      question: "What does User-agent mean?",
      answer:
        "It names which crawler the following rules apply to. A * group is the default for crawlers that do not match a more specific name.",
    },
    {
      question: "What is the difference between Allow and Disallow?",
      answer:
        "Disallow lists path prefixes a crawler should skip. Allow can reopen a more specific path under a broader disallow. Support varies slightly by crawler.",
    },
    {
      question: "Does robots.txt block users in a browser?",
      answer:
        "No. Anyone can still open a URL directly. Robots rules only guide crawlers that choose to obey them.",
    },
    {
      question: "Can robots.txt keep a page out of Google?",
      answer:
        "Disallow can stop crawling, but a URL may still appear in results without a snippet if other sites link to it. Use noindex when you need search exclusion after a crawl.",
    },
    {
      question: "How do I point crawlers to a sitemap?",
      answer:
        "Add a Sitemap: line with the full HTTPS URL of the sitemap. The generator on this site accepts that field when you build the file text.",
    },
    {
      question: "Should I disallow admin or cart URLs?",
      answer:
        "Often yes, when those paths waste crawl budget and are not meant for search. Do not rely on robots.txt alone for access control; protect them with login checks.",
    },
    {
      question: "What happens if two groups name different agents?",
      answer:
        "Each User-agent group keeps its own Allow and Disallow lines. A crawler uses the most specific group that matches its name.",
    },
    {
      question: "Is Crawl-delay still useful?",
      answer:
        "Some crawlers ignore it. Prefer Search Console crawl-rate settings for Google, and keep Crawl-delay only when you know a bot honors it.",
    },
    {
      question: "Does generating robots.txt publish it?",
      answer:
        "No. The tool writes text for you to download or copy. You still upload it to the site root on your host.",
    },
    {
      question: "Can a blank Disallow path block the whole site?",
      answer:
        "An empty Disallow value is commonly treated as allow everything. An empty Allow is not a substitute for a clear rule. Write explicit path prefixes.",
    },
    {
      question: "How do I test a robots.txt change?",
      answer:
        "Fetch the live /robots.txt URL after deploy, then use a crawler tester in Search Console or another bot's documentation. The generator does not probe your live host.",
    },
    {
      question: "Should staging sites have their own robots.txt?",
      answer:
        "Yes. Staging often disallows all crawlers so draft content is not indexed. Production should ship the rules you actually want.",
    },
    {
      question: "Are comments allowed in robots.txt?",
      answer:
        "Yes. Lines starting with # are comments. Keep rules themselves on their own lines so parsers stay simple.",
    },
    {
      question: "Does HTTPS vs HTTP change the file?",
      answer:
        "Each host origin has its own robots.txt. http:// and https:// are different origins, so publish the file on the origin users and crawlers use.",
    },
  ],
  "how-to-convert-time-zones": [
    {
      question: "How do I convert a meeting time to another zone?",
      answer:
        "Enter the local date and time, pick the source zone and the target zone, then read the converted clock time. The tool keeps the same instant while changing the label.",
    },
    {
      question: "What is UTC in a conversion?",
      answer:
        "UTC is the reference timeline without a daylight-saving shift. Converting through UTC is a reliable way to move between two local zones.",
    },
    {
      question: "Why did the calendar date change after conversion?",
      answer:
        "The same instant can fall on different local dates near midnight. Crossing the International Date Line or a large offset often moves the day.",
    },
    {
      question: "How do daylight saving changes affect the result?",
      answer:
        "Zones that observe DST shift their offset twice a year. A spring gap skips a local hour; a fall overlap repeats one. The converter follows the zone rules for that date.",
    },
    {
      question: "What is a spring-forward gap?",
      answer:
        "When clocks jump ahead, a local time such as 2:30 may not exist that night. The converter maps that gap to a valid nearby instant instead of inventing a clock reading.",
    },
    {
      question: "What is a fall-back repeated hour?",
      answer:
        "When clocks move back, one local hour occurs twice. The tool picks the offset that matches the zone database for the instant you entered.",
    },
    {
      question: "Should I store events in local time or UTC?",
      answer:
        "Store the instant in UTC or as an offset-aware value, then display it in each viewer's zone. Storing only a naive local string breaks when DST rules change.",
    },
    {
      question: "Does the converter use my laptop's zone automatically?",
      answer:
        "Only if you choose that zone. The page does not silently override the zones you select for the conversion.",
    },
    {
      question: "Can I convert timestamps as well as wall times?",
      answer:
        "Use the Unix timestamp converter when you already have seconds since epoch. Use the time zone converter when you start from a civil date and time.",
    },
    {
      question: "Why do two cities share a zone name but differ on some dates?",
      answer:
        "Zone identifiers such as America/New_York carry a full history of offsets. City labels on clocks are informal; the IANA name is what the math uses.",
    },
    {
      question: "How do I share a time that works worldwide?",
      answer:
        "Give the UTC instant or include an explicit offset such as 15:00 GMT+4. A bare 3pm without a zone is ambiguous.",
    },
    {
      question: "Does this tool count business days?",
      answer:
        "No. It converts one instant between zones. Use the business-days or date-difference tools to count days.",
    },
    {
      question: "Will a flight arrival look wrong after conversion?",
      answer:
        "Airlines publish local times for each airport. Convert each leg with that airport's zone rather than forcing one zone on the whole itinerary.",
    },
    {
      question: "Are historical dates supported?",
      answer:
        "The converter uses the browser's time-zone database for the date you enter. Very old civil times may follow rules that differ from modern offsets.",
    },
    {
      question: "Is my meeting data uploaded?",
      answer:
        "No. The conversion runs in the browser from the values you type.",
    },
    {
      question: "What format should I paste for the source time?",
      answer:
        "Use the date and time fields the form provides. Mixing a 12-hour clock string without AM/PM into a 24-hour field is a common source of errors.",
    },
  ],
  "how-to-count-days-between-dates": [
    {
      question: "How do I count days between two calendar dates?",
      answer:
        "Enter a start date and an end date in the date difference calculator. The tool reports the whole days between them using the calendar, not a fixed 30-day month.",
    },
    {
      question: "Is the end date included in the day count?",
      answer:
        "Most difference calculators count the span between the dates, so the end date is not added as an extra day unless the tool says it includes both endpoints. Read the result label on the page.",
    },
    {
      question: "Why is February sometimes 28 days and sometimes 29?",
      answer:
        "Leap years add 29 February. Any span that crosses that day is one day longer than the same span in a non-leap year.",
    },
    {
      question: "What is the difference between days and months in the result?",
      answer:
        "Days are exact whole midnights. Months vary in length, so a month count is a calendar breakdown, not days divided by 30.",
    },
    {
      question: "Does the time of day change the day count?",
      answer:
        "On a date-only tool, both values are treated as calendar dates. If you need hours as well, use a date-time difference instead.",
    },
    {
      question: "How do I count only weekdays?",
      answer:
        "Use the business days calculator, which skips Saturdays and Sundays. The plain day-count tool includes weekends.",
    },
    {
      question: "Can the start date be after the end date?",
      answer:
        "Yes. Many calculators then show a negative span or swap the labels. Check which convention the page uses before you rely on the sign.",
    },
    {
      question: "How many days are in a year for these tools?",
      answer:
        "The calendar year has 365 days, or 366 in a leap year. There is no single average baked into a simple day difference.",
    },
    {
      question: "Why do people say a month is 30 days?",
      answer:
        "It is a rough average for estimates. Exact tools count real calendar months, which may be 28 to 31 days.",
    },
    {
      question: "How do I measure age in days?",
      answer:
        "Put the birth date as the start and today as the end. Age tools may also break the same span into years, months, and days.",
    },
    {
      question: "Does a project deadline include the start day?",
      answer:
        "That is a policy choice. If work starts on day one, add one to a pure difference, or state inclusive dates explicitly in the brief.",
    },
    {
      question: "Can I count days across time zones?",
      answer:
        "Date-only counts ignore zones. If the event is an instant, convert both ends to the same zone first so the calendar dates match the meeting.",
    },
    {
      question: "What is an average-month figure on some calculators?",
      answer:
        "It is a convenience estimate that treats a month as a fixed length. It is useful for rough planning, not for legal day counts.",
    },
    {
      question: "How do holidays affect the count?",
      answer:
        "The basic day-difference tool does not remove holidays. Business-day tools usually skip only weekends unless you list extra holidays.",
    },
    {
      question: "Is my date input sent to a server?",
      answer:
        "No. The date difference calculator on this site runs in the browser.",
    },
    {
      question: "Which date format should I type?",
      answer:
        "Use the picker or the format the form accepts. Ambiguous numeric dates such as 03/04/2026 mean different days in the US and Europe, so prefer an unambiguous year-month-day when typing.",
    },
  ],
  "how-to-pick-a-color": [
    {
      question: "How do I pick a color for a website?",
      answer:
        "Open the color picker, choose a hue on the spectrum, adjust saturation and lightness, then copy the HEX or RGB value into your CSS. Check contrast against the background before you ship text colors.",
    },
    {
      question: "What is the difference between HEX and RGB?",
      answer:
        "They describe the same sRGB color in different notations. #ff0000 and rgb(255, 0, 0) are the same red. HSL is another way to write that color using hue, saturation, and lightness.",
    },
    {
      question: "When should I use HSL instead of HEX?",
      answer:
        "HSL is handy when you want to lighten or darken a brand color while keeping the same hue. HEX is the usual token stored in design systems and CSS variables.",
    },
    {
      question: "Can I sample a color from a photo?",
      answer:
        "Use an eyedropper in the picker if the tool offers one, or the image color analyzer for dominant colors from a file. Sampling reads pixels; it does not import a palette file by itself.",
    },
    {
      question: "How do I pick an accessible text color?",
      answer:
        "Choose the foreground and background, then run them through the contrast checker. Aim for at least 4.5:1 for normal body text under WCAG AA.",
    },
    {
      question: "What does opacity or alpha mean?",
      answer:
        "Alpha makes the color translucent. HEX8 or rgba() includes that channel. A transparent color still needs a backdrop to judge readability.",
    },
    {
      question: "Should brand colors be stored as HEX?",
      answer:
        "HEX is the common exchange format for web tokens. Keep a single source value and derive RGB or HSL when a tool needs them.",
    },
    {
      question: "How do I make a lighter tint of a color?",
      answer:
        "Raise lightness in HSL, or mix the color toward white in your design tool. Recheck contrast after you lighten a text color.",
    },
    {
      question: "What is a hue versus a shade?",
      answer:
        "Hue is the position on the color wheel, such as blue or green. A shade usually means a darker version of the same hue.",
    },
    {
      question: "Why does a printed color look different from the screen?",
      answer:
        "Screens use light (RGB) and printers use ink (CMYK). Convert and proof prints separately; a HEX value is not a press-ready ink formula.",
    },
    {
      question: "Can I enter a color by typing numbers?",
      answer:
        "Yes. Most pickers accept HEX such as #1a73e8 or RGB channels. Invalid HEX is rejected until you fix it.",
    },
    {
      question: "What does Reset do on the picker?",
      answer:
        "It returns the controls to the tool's default color so you can start again without reloading the page.",
    },
    {
      question: "How many colors should a simple UI use?",
      answer:
        "A primary, a neutral scale, and one accent is enough for most pages. Extra hues make contrast checks harder to keep consistent.",
    },
    {
      question: "Is the picked color uploaded?",
      answer:
        "No. The browser color picker on this site keeps values in the tab.",
    },
    {
      question: "How do I use the value in CSS?",
      answer:
        "Paste HEX into a property such as color: #1a73e8; or use rgb() / hsl() the same way. CSS variables are useful when the same token appears in several rules.",
    },
    {
      question: "Why do two monitors show different colors?",
      answer:
        "Display calibration and brightness differ. Design against contrast ratios and relative hierarchy, not against a single uncalibrated screen.",
    },
  ],
  "how-to-percent-encode-a-url": [
    {
      question: "What is percent-encoding in a URL?",
      answer:
        "It replaces unsafe or reserved characters with a percent sign and two hex digits. A space becomes %20 so the URL can travel as ASCII text.",
    },
    {
      question: "When should I encode a query value?",
      answer:
        "Encode values you place after = in a query string, especially if they contain spaces, ampersands, or non-ASCII text. Leave structural separators such as & and = that you add on purpose.",
    },
    {
      question: "What does %20 mean?",
      answer:
        "It is a space. Some forms still emit +, which many query parsers also treat as a space in application/x-www-form-urlencoded data.",
    },
    {
      question: "Should I encode the whole URL or only parts?",
      answer:
        "Encode components, not the entire string blindly. Encoding https:// would break the scheme. Tools often offer encodeURI versus encodeURIComponent for that reason.",
    },
    {
      question: "Which encode helper should I use for a query value?",
      answer:
        "Use the component-style encoder for a single query value or path segment, because it encodes separators such as : and /. Use a full-URL encoder only when you are cleaning an already-structured address and must leave those separators intact.",
    },
    {
      question: "What usually makes a percent-decode reject input?",
      answer:
        "Incomplete % sequences, non-hex digits after %, or truncated UTF-8 tails make decode reject the string. Fix the source encoding rather than guessing.",
    },
    {
      question: "Is a percent-encoded string secret?",
      answer:
        "No. Encoding is reversible. Anyone can decode %20 back to a space. It is not encryption.",
    },
    {
      question: "How do I encode non-English characters?",
      answer:
        "UTF-8 bytes are percent-encoded. For example, é becomes %C3%A9. The decoder must expect UTF-8 to restore the letter.",
    },
    {
      question: "Do I encode slashes in a file path inside a query?",
      answer:
        "Yes, when the slash is data inside a parameter value. A slash that separates path segments of the URL itself stays as /.",
    },
    {
      question: "Why are ? and & sometimes encoded?",
      answer:
        "When they appear inside a value, encoding stops them from starting a new query string or parameter. When they are real separators, leave them unencoded.",
    },
    {
      question: "Can I encode an empty string?",
      answer:
        "Yes. The result is still empty. There is nothing to replace, so the output matches the input.",
    },
    {
      question: "Should hashes in a fragment be encoded?",
      answer:
        "The # that starts a fragment stays. Characters inside the fragment follow the same component rules as other parts when you need to transport arbitrary text.",
    },
    {
      question: "Does this tool send my URL to a server?",
      answer:
        "No. Encoding and decoding run in the browser on Tools Star Hub.",
    },
    {
      question: "How do I fix a double-encoded URL?",
      answer:
        "Decode once and inspect. If you still see %25 sequences for every percent, decode again. Prefer encoding only at the last step before you ship the link.",
    },
    {
      question: "Are plus signs in emails affected?",
      answer:
        "In query values, + may be read as a space. If a plus must stay a plus, percent-encode it as %2B.",
    },
    {
      question: "What characters are usually safe without encoding?",
      answer:
        "Unreserved characters such as letters, digits, hyphen, period, underscore, and tilde typically stay as they are. Reserved characters depend on where they sit in the URL.",
    },
  ],

  "how-a-home-price-estimate-works": [
    {
      question: "What numbers go into a home affordability estimate?",
      answer:
        "Typical inputs are income, monthly debts, down payment, interest rate, and property tax or insurance assumptions. The calculator maps those into a loan size and an estimated price band.",
    },
    {
      question: "What is a debt-to-income ratio in plain terms?",
      answer:
        "It is the share of your gross monthly income already spoken for by debt payments. Lenders use it as a quick filter for how large a new mortgage payment might fit.",
    },
    {
      question: "Why do affordability tools show several percentage caps?",
      answer:
        "Rules of thumb such as 28% housing or 36% total debt are common starting points, not laws. Showing a few caps illustrates how sensitive the price is to that choice.",
    },
    {
      question: "Does a higher down payment always raise the price I can buy?",
      answer:
        "Usually yes, because less of the price must be financed. Taxes, insurance, and rate still matter, so the gain is not always one-for-one with the extra cash down.",
    },
    {
      question: "Are property taxes included in the estimate?",
      answer:
        "Many affordability calculators fold estimated tax and insurance into the monthly housing cost. If a field is missing, the price band can look higher than a full PITI payment allows.",
    },
    {
      question: "How is this different from a lender pre-approval?",
      answer:
        "A pre-approval reviews credit, income documents, and underwriting rules. This page is an educational estimate you can run yourself before talking to a lender.",
    },
    {
      question: "What happens if my debts already fill the ratio?",
      answer:
        "Little or no room remains for a new mortgage payment under that cap. Paying down revolving debt or raising income is how the estimate moves again.",
    },
    {
      question: "Should I use take-home pay or gross income?",
      answer:
        "Lender-style ratios usually start from gross income. For personal budgeting, rerun the numbers with take-home pay so the payment still fits groceries and savings.",
    },
    {
      question: "Do HOA fees change affordability?",
      answer:
        "Yes. Monthly HOA dues act like another housing cost. If the tool has no HOA field, subtract dues from the payment you are willing to carry.",
    },
    {
      question: "Can I use the estimate for an investment property?",
      answer:
        "Primary-home rules of thumb rarely match investment underwriting, which often needs larger down payments and different ratios. Treat this page as owner-occupant planning only.",
    },
    {
      question: "Why does a small rate change move the price so much?",
      answer:
        "Mortgage math is sensitive to rate because payments stretch over decades. A fraction of a percent changes how much principal a fixed payment can support.",
    },
    {
      question: "Is the estimated price the same as a bid I should offer?",
      answer:
        "No. It is a budget ceiling style figure. Inspections, repairs, closing costs, and local competition still shape what you should offer.",
    },
    {
      question: "How do closing costs fit into affordability?",
      answer:
        "Closing costs need cash beyond the down payment. Keep a separate reserve so the headline price does not consume every dollar you can bring to closing.",
    },
    {
      question: "What if my income varies month to month?",
      answer:
        "Use a conservative average or the income a lender is likely to count, not a single peak month. Variable earners often need a larger cash buffer than the raw ratio suggests.",
    },
    {
      question: "Does location change the calculator’s formula?",
      answer:
        "The payment math is similar, but tax, insurance, and HOA assumptions differ by market. Adjust those inputs when you compare cities.",
    },
    {
      question: "When should I ignore online affordability numbers?",
      answer:
        "Ignore them as a final answer when credit issues, gift funds, or special loan programs apply. Those cases need a human underwriter, not a generic ratio.",
    },
  ],
  "how-compound-interest-works": [
    {
      question: "What everyday accounts use compound interest?",
      answer:
        "Savings accounts, certificates of deposit, and many investment accounts credit earnings that can themselves earn later. Debt products can compound too when balances revolve.",
    },
    {
      question: "How do I read a compound interest growth chart?",
      answer:
        "Watch how the curve steepens over time when rates and contributions stay steady. Early years look slow; later years show interest-on-interest more clearly.",
    },
    {
      question: "What is the principal in a compounding example?",
      answer:
        "Principal is the balance that interest is calculated on. When interest is capitalized, it joins the principal for the next period.",
    },
    {
      question: "How does contribution timing change the final amount?",
      answer:
        "Deposits made at the beginning of a period usually have more time to compound than end-of-period deposits. Compare both modes if your tool offers the switch.",
    },
    {
      question: "Why do educators teach the rule of 72?",
      answer:
        "It gives a quick mental estimate of doubling time by dividing 72 by the annual percent rate. It is a teaching shortcut, not a replacement for a full schedule.",
    },
    {
      question: "Can compounding frequency be continuous?",
      answer:
        "Continuous compounding is a mathematical limit used in some formulas. Real consumer accounts typically credit daily or monthly instead.",
    },
    {
      question: "How should beginners compare two savings offers?",
      answer:
        "Align APY, fees, minimums, and withdrawal rules—not just the headline rate. A slightly lower APY with no fees can win after costs.",
    },
    {
      question: "What mistake do people make with monthly contributions?",
      answer:
        "They forget that the contribution amount must be sustainable for the whole timeline. An aggressive deposit that stops early underperforms a smaller deposit kept for years.",
    },
    {
      question: "Does compounding help short emergency funds?",
      answer:
        "A little, but emergency funds prioritize liquidity and safety over yield. Do not lock money you may need next month into long compounding products.",
    },
    {
      question: "How do I explain compound interest to a teenager?",
      answer:
        "Show a small deposit growing over several years next to the same deposit earning only simple interest. The gap is the “interest earning interest” story.",
    },
    {
      question: "Are advertised rates before or after compounding?",
      answer:
        "Marketing may show a nominal rate or an APY. APY already folds compounding into a yearly figure, which makes unequal schedules easier to compare.",
    },
    {
      question: "What role do time horizons play versus rate?",
      answer:
        "Extra years often matter as much as a slightly higher rate because exponents reward patience. Raising contributions can matter even more than tiny rate tweaks.",
    },
    {
      question: "Can I use compound interest math for inflation examples?",
      answer:
        "Yes. Inflation compounds buying-power loss the same way. A price that rises 3% a year illustrates why long-term goals need growth above inflation.",
    },
    {
      question: "Why might a calculator ignore leap days or exact calendars?",
      answer:
        "Many educational tools use equal periods for clarity. Bank ledgers may use day-count conventions that differ by a few dollars on large balances.",
    },
    {
      question: "Should windfalls go in before or after regular contributions in a model?",
      answer:
        "Add a windfall to the starting balance if it lands up front, or as a one-time contribution in the month it arrives. Placement changes how many periods it compounds.",
    },
    {
      question: "When is compound interest the wrong mental model?",
      answer:
        "Skip it for one-time fees, flat coupons, or short invoices that never capitalize interest. Those need simple arithmetic instead of growth curves.",
    },
  ],
  "how-much-to-save-for-a-goal": [
    {
      question: "How do I set a savings goal amount that is realistic?",
      answer:
        "Start from the purchase or buffer you need, add a contingency, then divide by months you actually have. If the monthly figure hurts, extend the timeline or trim the target.",
    },
    {
      question: "Should my goal calculator include investment returns?",
      answer:
        "Include returns only when the money will stay invested for the whole horizon and you accept market risk. For near-term cash goals, model zero return so you do not under-save.",
    },
    {
      question: "What is the difference between a fixed monthly deposit and a fixed end date?",
      answer:
        "One mode asks how much to save each month to hit a date. The other asks how long a chosen deposit will take. Use whichever question matches the decision you face.",
    },
    {
      question: "How do the sample rate rows help me plan?",
      answer:
        "Side-by-side rates show sensitivity. If 3% and 7% rows diverge a lot, your plan depends heavily on return assumptions and needs a wider safety margin.",
    },
    {
      question: "Can I count money I already saved toward the goal?",
      answer:
        "Yes. Enter it as a current balance so the remaining gap—and the required monthly deposit—shrinks. Leaving it out makes the plan look harder than it is.",
    },
    {
      question: "What if my income arrives biweekly instead of monthly?",
      answer:
        "Convert to a monthly average (biweekly pay × 26 ÷ 12) or save on each paycheck with an equivalent per-check amount. Consistency matters more than the calendar label.",
    },
    {
      question: "How should couples split a shared savings goal?",
      answer:
        "Agree on the target and timeline first, then split deposits by income share or fifty-fifty. Track the joint balance so neither person assumes the other filled a gap.",
    },
    {
      question: "Do I need a separate account for each goal?",
      answer:
        "Separate accounts or sub-accounts reduce accidental spending and clarify progress. A single account with labeled balances can work if you track carefully.",
    },
    {
      question: "What happens if I miss a month of contributions?",
      answer:
        "The timeline slips unless you catch up. Recalculate with the new balance and remaining months instead of guessing the old monthly figure still works.",
    },
    {
      question: "Should emergency funds and vacation goals share one bucket?",
      answer:
        "Better to separate them. Dipping into emergency cash for travel recreates the risk the emergency fund was meant to cover.",
    },
    {
      question: "How do taxes affect investment-based goals?",
      answer:
        "Taxable account growth may owe tax when you sell. Retirement wrappers have their own rules. Prefer after-tax estimates for spending goals outside sheltered accounts.",
    },
    {
      question: "Is it better to pay debt or save for the goal first?",
      answer:
        "High-interest debt often wins mathematically, while a small emergency buffer still deserves priority. Many people split cash: minimums plus debt attack, then goal deposits.",
    },
    {
      question: "Can I automate the plan without a special calculator?",
      answer:
        "Yes. Schedule transfers on payday for the monthly amount the plan needs. Automation beats perfect math that never leaves checking.",
    },
    {
      question: "Why did my goal show as already reached?",
      answer:
        "If the current balance meets or exceeds the target, no further deposit is required for that goal. Raise the target if you meant a larger buffer.",
    },
    {
      question: "How often should I revisit the savings plan?",
      answer:
        "Recheck after raises, moved deadlines, or big price changes. A quarterly glance keeps the monthly transfer aligned with reality.",
    },
    {
      question: "What contingency percent should I add on top of a sticker price?",
      answer:
        "Five to fifteen percent is a common range for travel, moving, or home projects where surprise costs appear. Larger uncertainty deserves a larger cushion.",
    },
  ],
  "how-to-add-hours-and-minutes": [
    {
      question: "How do I add hours and minutes without a calculator?",
      answer:
        "Add minutes first; if the sum reaches 60 or more, carry the extra hours. Then add the hour columns including that carry so the total stays in proper clock units.",
    },
    {
      question: "How do I subtract a shorter time from a longer one?",
      answer:
        "Borrow one hour (60 minutes) when the minutes on top are too small, then subtract hours. Digital tools do the borrow for you when you enter both durations.",
    },
    {
      question: "What is the difference between duration math and clock time?",
      answer:
        "Duration math adds lengths such as 1h 45m. Clock arithmetic lands on a time of day and must wrap at midnight. Use the tool that matches your question.",
    },
    {
      question: "How can I convert 150 minutes into hours and minutes?",
      answer:
        "Divide by 60 for whole hours and keep the remainder as minutes. 150 minutes becomes 2 hours and 30 minutes.",
    },
    {
      question: "Why did my total show more than 24 hours?",
      answer:
        "Duration totals are allowed to exceed a day when you sum shifts or videos. Convert to days only if you need that display; the minute total is still valid.",
    },
    {
      question: "Can I add negative minutes for corrections?",
      answer:
        "Yes when you are adjusting a draft total downward. A minus result means the correction was larger than the running total.",
    },
    {
      question: "How do timesheets use hour-minute addition?",
      answer:
        "Workers log each segment; payroll sums them and may round to the nearest five or fifteen minutes. Knowing exact sums helps you spot rounding surprises.",
    },
    {
      question: "What format should I type: 1:45 or 1h 45m?",
      answer:
        "Follow the field hints on the page. Many tools accept `h` and `m` labels or colon syntax; mixing formats in one box can confuse parsing.",
    },
    {
      question: "How do I average several durations?",
      answer:
        "Convert each to minutes, average the minutes, then convert back to hours and minutes. Averaging the hour parts alone ignores leftover minutes.",
    },
    {
      question: "Does daylight saving time affect duration addition?",
      answer:
        "Pure duration sums do not care about clock shifts. Problems appear only when you convert start/end clock stamps that cross a DST change.",
    },
    {
      question: "How can I check that a carry from minutes is correct?",
      answer:
        "Confirm minutes in the answer are under 60 and that hours increased by the number of times you subtracted 60 from the minute pile.",
    },
    {
      question: "Can I add hours across multiple people for billing?",
      answer:
        "Sum each person’s duration separately first, then add those totals if you need a combined figure. Keep per-person rows for invoices.",
    },
    {
      question: "Why is 1.5 hours not always written as 1:50?",
      answer:
        "Decimal hours use fractions of an hour: 1.5 means 1 hour 30 minutes. Colon notation 1:50 means 110 minutes. Mixing decimal and sexagesimal causes billing errors.",
    },
    {
      question: "How do video editors use runtime addition?",
      answer:
        "They sum clip lengths to estimate timeline length before export. Frame-accurate tools go further, but hour-minute sums catch rough pacing issues early.",
    },
    {
      question: "When is a spreadsheet better than a quick time adder?",
      answer:
        "Use a sheet when you have dozens of rows, need rounding rules, or must keep an audit trail. The online adder shines for a handful of durations.",
    },
    {
      question: "Can seconds be included in the same sum?",
      answer:
        "Convert seconds to minutes or use a tool with an explicit seconds field. Dropping seconds silently understates long multi-clip totals.",
    },
  ],
  "how-to-build-an-ai-prompt": [
    {
      question: "What makes a strong AI prompt?",
      answer:
        "Clear role, task, constraints, and output format beat vague wishes. State the audience, length, and what to avoid so the model wastes fewer tokens guessing.",
    },
    {
      question: "Should I put examples inside the prompt?",
      answer:
        "Yes when format matters. One or two short input/output samples often steer structure better than another paragraph of abstract instructions.",
    },
    {
      question: "How long should an AI prompt be?",
      answer:
        "Long enough to remove ambiguity, short enough to stay readable. If you need pages of policy, attach them as reference sections instead of one endless sentence.",
    },
    {
      question: "What is a system prompt versus a user prompt?",
      answer:
        "System prompts set standing rules for the assistant. User prompts ask for the specific task. Product UIs may hide the system layer while still applying it.",
    },
    {
      question: "How do I ask for JSON or a table from a model?",
      answer:
        "Say the exact schema or column list and forbid surrounding commentary if you need clean parsing. Provide a tiny example object when fields are easy to confuse.",
    },
    {
      question: "Why do vague adjectives hurt prompt results?",
      answer:
        "Words like “nice” or “better” are subjective. Replace them with measurable targets such as “eighth-grade reading level” or “under 120 words.”",
    },
    {
      question: "Can I reuse one prompt template across tasks?",
      answer:
        "Yes. Keep slots for topic, audience, and tone, then fill them per job. Templates speed teams up when everyone shares the same quality bar.",
    },
    {
      question: "How should I handle sensitive data in prompts?",
      answer:
        "Strip secrets, personal identifiers, and confidential figures before pasting into third-party models. Use placeholders when the structure matters more than the real values.",
    },
    {
      question: "What is prompt chaining?",
      answer:
        "It means breaking a big job into sequenced prompts—outline, then draft, then edit—so each step has a narrower goal and clearer evaluation.",
    },
    {
      question: "How do temperature or creativity settings interact with prompts?",
      answer:
        "Higher creativity settings explore more phrasings; lower ones stay closer to deterministic wording. Tighten the prompt when you need identical structure every run.",
    },
    {
      question: "Should I tell the model what not to do?",
      answer:
        "Negative constraints help when the model keeps adding disclaimers, markdown, or sales fluff you do not want. Pair them with a positive pattern to follow.",
    },
    {
      question: "How do I debug a prompt that suddenly got worse?",
      answer:
        "Diff your instruction changes, remove the last addition, and test with the same sample input. Model updates can also shift behavior even when your text is fixed.",
    },
    {
      question: "Is it useful to assign the model a role?",
      answer:
        "Role lines such as “you are a concise technical editor” bias vocabulary and priorities. Keep the role honest; exaggerated personas rarely beat clear tasks.",
    },
    {
      question: "Can prompts include evaluation criteria?",
      answer:
        "Yes. Ask the model to self-check against a checklist before finalizing, or run a second prompt that scores the draft. Criteria make failures easier to spot.",
    },
    {
      question: "How do multilingual prompts change the output language?",
      answer:
        "State the output language explicitly even if the input is mixed. Models sometimes mirror the dominant language in the prompt unless told otherwise.",
    },
    {
      question: "When should I stop tweaking the prompt and edit the draft?",
      answer:
        "Stop when remaining issues are factual polish or brand voice only you can supply. Endless prompt churn costs more than a two-minute human edit.",
    },
  ],
  "how-to-calculate-an-aspect-ratio": [
    {
      question: "What is an aspect ratio in simple terms?",
      answer:
        "It is the width-to-height relationship of a frame, written like 16:9 or 4:3. The numbers scale together so the shape stays the same when you resize.",
    },
    {
      question: "How do I simplify a ratio like 1920×1080?",
      answer:
        "Divide both sides by their greatest common divisor. 1920 and 1080 share 120, which simplifies to 16:9—the familiar widescreen ratio.",
    },
    {
      question: "How do I find a missing side when I know the ratio?",
      answer:
        "Solve proportionally. For 16:9 with width 1280, height = 1280 × 9 ÷ 16. Lock the ratio in an editor so you only type one side.",
    },
    {
      question: "What aspect ratio do most YouTube videos use?",
      answer:
        "Horizontal uploads are typically 16:9. Vertical shorts use 9:16. Matching the platform reduces letterboxing.",
    },
    {
      question: "Is 1:1 the same as square?",
      answer:
        "Yes. Width equals height. Social avatars and many product thumbnails use 1:1 so crops stay predictable.",
    },
    {
      question: "Why do phone photos not always match 16:9?",
      answer:
        "Phone sensors and shooting modes use ratios such as 4:3 or 19.5:9. Export settings may crop to another ratio later.",
    },
    {
      question: "Can aspect ratio tools resize my image file?",
      answer:
        "Ratio calculators usually only do the math. A separate resizer or crop tool applies new pixel dimensions to the file.",
    },
    {
      question: "What is the difference between aspect ratio and resolution?",
      answer:
        "Resolution is the pixel count (for example 3840×2160). Aspect ratio is the shape those pixels form (here still 16:9).",
    },
    {
      question: "How do ultrawide monitors express ratio?",
      answer:
        "Common ultrawide shapes include 21:9 and 32:9. Always confirm the native resolution so scaled UI does not look stretched.",
    },
    {
      question: "Why does a “fit” export add black bars?",
      answer:
        "Letterboxing preserves the source ratio inside a differently shaped frame. Stretching would fill the frame but distort subjects.",
    },
    {
      question: "How do I convert a ratio to a decimal?",
      answer:
        "Divide width by height. 16÷9 ≈ 1.778. Decimals help spreadsheets; colon form helps humans and camera menus.",
    },
    {
      question: "Do printers care about aspect ratio?",
      answer:
        "Yes. Photo paper sizes like 4×6 (2:3) crop differently than 8×10. Match shoot ratio to print ratio to avoid surprise trims.",
    },
    {
      question: "Can two resolutions share a ratio but look sharper?",
      answer:
        "Yes. 1280×720 and 1920×1080 are both 16:9, but the denser pixel grid carries more detail.",
    },
    {
      question: "How should designers document ratio in a brief?",
      answer:
        "Write both the ratio and target pixel size, such as “16:9 at 1920×1080.” Ratio alone does not tell production the export resolution.",
    },
    {
      question: "What happens if I enter decimal pixel sizes?",
      answer:
        "Real images use whole pixels. Round to integers after ratio math, and prefer even numbers when codecs expect them.",
    },
    {
      question: "Is cinematic 2.39:1 an aspect ratio too?",
      answer:
        "Yes. It is a wider theatrical shape. When you adapt that footage for 16:9 screens you must crop or pad.",
    },
  ],
};
