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
  "how-to-calculate-square-footage": [
    {
      question: "How do I calculate square footage of a room?",
      answer:
        "Multiply length by width for a rectangular room using the same units. Convert inches to feet first so you do not mix measurements.",
    },
    {
      question: "How do I measure an L-shaped room?",
      answer:
        "Split it into two rectangles, compute each area, then add them. Sketch the shape so you do not double-count the overlapping strip.",
    },
    {
      question: "Should I use interior or exterior wall measurements?",
      answer:
        "For flooring, measure the floor space inside the walls. For some building estimates, exterior dimensions are specified—follow the project brief.",
    },
    {
      question: "How do I convert square meters to square feet?",
      answer:
        "Multiply square meters by about 10.764. The calculator can apply the factor so you avoid hand-rounding errors.",
    },
    {
      question: "Do closets count in apartment square footage?",
      answer:
        "Listing practices vary by market. Measure them separately so you can include or exclude them depending on the rule you were given.",
    },
    {
      question: "How accurate is a phone measure app for square feet?",
      answer:
        "Good enough for rough planning, not always for contracts. Recheck critical walls with a tape before ordering materials.",
    },
    {
      question: "How much flooring waste should I add?",
      answer:
        "Many installers add five to ten percent for cuts and mistakes. Complex patterns or diagonal layouts may need more.",
    },
    {
      question: "Can I calculate square footage from a blueprint scale?",
      answer:
        "Yes if you trust the scale bar. Convert scaled lengths to real feet, then multiply. Verify one known dimension on site when possible.",
    },
    {
      question: "What if a room has a bay window or niche?",
      answer:
        "Treat bumps as extra rectangles or triangles and add their area. Ignoring them under-orders flooring.",
    },
    {
      question: "How do I find square footage of a triangle section?",
      answer:
        "Use one-half base times height for right or clear triangular regions. Add that to the rectangular parts of the floor plan.",
    },
    {
      question: "Is ceiling height part of square footage?",
      answer:
        "No. Square footage is area, not volume. Height matters for paint volume or HVAC, which use cubic measurements.",
    },
    {
      question: "How should real-estate listings treat unfinished space?",
      answer:
        "Unfinished basements and garages are often listed separately from finished living area. Keep those totals distinct in your notes.",
    },
    {
      question: "Can I sum rooms to match the unit’s listed size?",
      answer:
        "Sometimes common areas or wall thickness explain gaps. A small difference is normal; large gaps deserve a remeasure.",
    },
    {
      question: "Do I measure in inches then convert, or in decimal feet?",
      answer:
        "Either works if you stay consistent. Many people measure feet plus inches, convert each length to decimal feet, then multiply.",
    },
    {
      question: "How is square footage used for material estimates?",
      answer:
        "Flooring, tile, and sod are sold by area. Your total square feet—plus waste—drives how many boxes or pallets to buy.",
    },
    {
      question: "When is a professional measurement worth it?",
      answer:
        "Before expensive custom flooring, legal disputes, or appraisals. A laser measure from a pro reduces costly ordering mistakes.",
    }
  ],
  "how-to-compare-renting-and-buying": [
    {
      question: "How do I compare renting versus buying a home?",
      answer:
        "Add expected rent over your stay, then compare it with purchase costs: down payment opportunity cost, mortgage interest, taxes, insurance, fees, and maintenance, minus equity built.",
    },
    {
      question: "What is total rent in a rent-vs-buy comparison?",
      answer:
        "It is the sum of monthly rent payments across the years you model, sometimes with assumed rent increases. It is the cash you will not get back as equity.",
    },
    {
      question: "Does a rising home value automatically mean buying wins?",
      answer:
        "Not always. High transaction costs, interest, and short ownership periods can erase appreciation gains. Run the timeline you actually expect to stay.",
    },
    {
      question: "Are property taxes included automatically?",
      answer:
        "Only if you enter them. Many simple comparisons need you to add tax, insurance, and HOA assumptions yourself.",
    },
    {
      question: "How do closing costs affect the buy side?",
      answer:
        "They are cash at purchase and again at sale. Short stays make those frictions more painful relative to renting.",
    },
    {
      question: "What opportunity cost should I apply to a down payment?",
      answer:
        "Imagine that cash invested elsewhere at a conservative return. Buying ties it up in home equity, which matters in a fair comparison.",
    },
    {
      question: "Should maintenance be a percent of home value?",
      answer:
        "A common planning rule is about one percent of value per year, adjusted for age of the home. New builds may need less at first; old homes more.",
    },
    {
      question: "How do I treat security deposits on the rent side?",
      answer:
        "Deposits are usually refundable and therefore not pure cost, aside from time value or deductions. Do not count them like rent unless they are non-refundable.",
    },
    {
      question: "What role does the length of stay play?",
      answer:
        "The longer you stay, the more fixed purchase costs can be amortized. Moving in under a few years often favors renting in break-even charts.",
    },
    {
      question: "Can I include landlord flexibility as a dollar amount?",
      answer:
        "Hard quantitatively, but you can note job-move flexibility as a qualitative factor when the numeric gap is small.",
    },
    {
      question: "How should I model rent increases?",
      answer:
        "Pick a modest annual percent and sensitivity-test higher and lower. Optimistic flat rent can bias the chart toward renting.",
    },
    {
      question: "Do mortgage principal payments count as a cost?",
      answer:
        "Principal builds equity, so many models treat it as savings rather than pure expense. Interest, tax, and fees remain costs.",
    },
    {
      question: "What if I pay cash for the house?",
      answer:
        "You avoid interest but still face taxes, insurance, maintenance, and the opportunity cost of that large cash outlay.",
    },
    {
      question: "How do HOA fees change the comparison?",
      answer:
        "Add them to ownership cash flows every month. High HOAs can erase the gap that looked favorable for buying.",
    },
    {
      question: "Should investment property rules use this calculator?",
      answer:
        "This framing is for a primary residence lifestyle choice. Investment deals need rent income, vacancy, and different tax treatment.",
    },
    {
      question: "When are non-financial factors decisive?",
      answer:
        "When numbers are close. Schools, stability, customization, and landlord risk can reasonably override a small modeled gap.",
    }
  ],
  "how-to-convert-csv-to-json": [
    {
      question: "How do I convert CSV to JSON online?",
      answer:
        "Paste or upload the CSV, confirm the delimiter and header row, then export JSON as an array of objects or nested structure depending on the tool mode.",
    },
    {
      question: "Why must commas inside quotes stay in one field?",
      answer:
        "CSV rules treat quoted commas as part of the value, not as separators. A correct parser keeps “Smith, Jane” as a single cell.",
    },
    {
      question: "How are double quotes escaped inside a CSV cell?",
      answer:
        "Standard CSV doubles them—`\"\"` inside a quoted field means one literal quote. Broken escaping is a top cause of shifted columns.",
    },
    {
      question: "What does an empty cell become in JSON?",
      answer:
        "Often an empty string, sometimes `null`, depending on the converter. Check the option so downstream code gets the type it expects.",
    },
    {
      question: "What if a closing quote is missing?",
      answer:
        "Parsers may merge following lines into one field or throw an error. Fix the source CSV before trusting the JSON.",
    },
    {
      question: "Should the first row always be treated as headers?",
      answer:
        "When it contains column names, yes—those names become JSON keys. If the file has no header, enable auto keys like `column1`.",
    },
    {
      question: "Can I convert TSV the same way?",
      answer:
        "Yes if you set the delimiter to tab. Forcing comma mode on a tab file will smash all columns into one.",
    },
    {
      question: "How do I keep leading zeros in ZIP codes?",
      answer:
        "Quote those cells or force text types. Bare numbers in JSON drop leading zeros unless stored as strings.",
    },
    {
      question: "Is JSON smaller than CSV for the same data?",
      answer:
        "Often larger because keys repeat on every object. CSV is denser; JSON is usually easier for APIs and nested data.",
    },
    {
      question: "Can nested JSON be created from flat CSV?",
      answer:
        "Only with naming conventions or a mapping step. A plain converter emits flat objects unless you post-process.",
    },
    {
      question: "What character encoding should I use?",
      answer:
        "UTF-8 avoids mojibake for non-English text. Re-export from the spreadsheet as UTF-8 CSV if accents look wrong.",
    },
    {
      question: "How large a CSV can a browser convert?",
      answer:
        "Megabyte-scale files are usually fine; multi-hundred-megabyte sheets belong in a script or database import.",
    },
    {
      question: "Why do row counts differ after conversion?",
      answer:
        "Skipped blank lines, malformed quotes, or header handling can drop or merge rows. Diff the counts before shipping.",
    },
    {
      question: "Should dates stay as strings in JSON?",
      answer:
        "Storing ISO strings is safest across languages. Converting to epoch numbers is fine when every consumer agrees.",
    },
    {
      question: "Can I convert JSON back to CSV?",
      answer:
        "Yes with a complementary tool, but nested objects need flattening rules. Round-trips may not be perfectly symmetric.",
    },
    {
      question: "Is my spreadsheet data uploaded to convert?",
      answer:
        "Browser converters can keep data on-device. Still avoid pasting regulated personal data on shared computers.",
    }
  ],
  "how-to-convert-roman-numerals": [
    {
      question: "How do I convert Roman numerals to numbers?",
      answer:
        "Enter the Roman string and the tool maps symbols like I, V, X, L, C, D, and M with subtractive pairs such as IV and IX to a decimal value.",
    },
    {
      question: "Why is 4 written as IV instead of IIII?",
      answer:
        "Standard Roman numeral rules use subtractive notation for 4 and 9 variants. Clocks sometimes show IIII for style, but converters expect IV.",
    },
    {
      question: "What is the usual maximum for online Roman converters?",
      answer:
        "Many educational tools cap around 3,999 (MMMCMXCIX) because classic notation lacks a standard overline mode for larger values.",
    },
    {
      question: "What does XVI equal in decimal?",
      answer:
        "XVI is 16: X for ten plus V for five plus I for one. Reading left to right with additive and subtractive rules yields the decimal total.",
    },
    {
      question: "Can I convert Arabic numbers to Roman numerals too?",
      answer:
        "Most converters work both ways. Enter a decimal to see the canonical Roman form using standard subtractive rules.",
    },
    {
      question: "Are lowercase Roman numerals accepted?",
      answer:
        "Often yes—they are normalized to uppercase. Prefer uppercase in formal outlines and legal clauses.",
    },
    {
      question: "Why was my numeral rejected as invalid?",
      answer:
        "Out-of-order symbols, four identical letters in a row where rules forbid them, or unknown characters trigger errors. Fix the spelling and retry.",
    },
    {
      question: "How do subtractive pairs work?",
      answer:
        "A smaller unit before a larger one means subtraction: IX is 9, XL is 40, CD is 400. Only specific pairs are allowed in standard form.",
    },
    {
      question: "Do Roman numerals use zero?",
      answer:
        "Classical Roman numerals have no zero symbol. Year and outline systems simply start at I.",
    },
    {
      question: "Where are Roman numerals still used today?",
      answer:
        "Book prefaces, monarch names, clock faces, film sequels, and outline numbering still use them for tradition and style.",
    },
    {
      question: "Can I write numbers as English words in the same tool?",
      answer:
        "Not in a pure Roman converter. Use a number-to-words tool if you need “fourteen” instead of XIV.",
    },
    {
      question: "Is IC a valid way to write 99?",
      answer:
        "No under standard rules. Ninety-nine is XCIX. Arbitrary subtractive shortcuts are rejected by strict converters.",
    },
    {
      question: "How do I teach kids Roman numerals quickly?",
      answer:
        "Memorize I, V, X, L, C values first, then practice additive strings like VIII before introducing subtractive IV and IX.",
    },
    {
      question: "Why do copyright years on films use Roman numerals?",
      answer:
        "Tradition and aesthetics. Converters help viewers decode MCM-style years without memorizing every combination.",
    },
    {
      question: "Can Unicode Roman characters confuse a converter?",
      answer:
        "Sometimes. Prefer plain ASCII I and V letters. Special Unicode numeral code points may not match the parser’s alphabet.",
    },
    {
      question: "Are Roman numerals case-sensitive for meaning?",
      answer:
        "Meaning does not change with case, but style guides pick one. Academic outlines often use lowercase for sub-lists.",
    }
  ],
  "how-to-convert-salary-to-hourly": [
    {
      question: "How do I convert salary to an hourly rate?",
      answer:
        "Divide annual salary by the hours you work in a year—often 2,080 for 40 hours × 52 weeks. Adjust the hour count if your schedule differs.",
    },
    {
      question: "How do I turn an hourly wage into an annual salary?",
      answer:
        "Multiply the hourly rate by hours per week, then by weeks worked per year. Include paid time off only if you want a fully loaded figure.",
    },
    {
      question: "How many hours is a standard full-time year?",
      answer:
        "2,080 hours is the common 40×52 assumption. Some people use 1,920 or similar after unpaid time off—state your assumption beside the number.",
    },
    {
      question: "How is overtime counted in these estimates?",
      answer:
        "Basic converters use straight time only. Overtime at 1.5× needs a separate calculation on those hours.",
    },
    {
      question: "Do hourly conversions include income tax withholding?",
      answer:
        "Usually not. Gross salary-to-hourly math ignores income tax, FICA, and benefits. Net pay requires a paycheck estimator.",
    },
    {
      question: "Should salaried exempt workers still compute an hourly equivalent?",
      answer:
        "Yes for budgeting comparisons and side-gig pricing. Legal overtime eligibility is a separate labor-law question.",
    },
    {
      question: "How do I handle a 9/80 or compressed schedule?",
      answer:
        "Use your actual hours paid per pay period, annualized. Do not assume five 8-hour days if that is not your roster.",
    },
    {
      question: "Can I convert monthly salary to hourly?",
      answer:
        "Multiply monthly pay by 12 to annualize, then divide by annual hours. Or divide monthly pay by hours worked that month for a rough spot rate.",
    },
    {
      question: "What about bonuses and commissions?",
      answer:
        "Add expected variable pay to the annual figure before dividing if you want an all-in hourly equivalent. Keep base and variable visible separately for clarity.",
    },
    {
      question: "How should contractors price versus salary equivalents?",
      answer:
        "Contract rates often need to cover benefits, taxes, and downtime. A straight salary-to-hourly split understates a healthy contractor rate.",
    },
    {
      question: "Does paid vacation change the divisor?",
      answer:
        "If you are paid while off, many people still use 2,080. If unpaid leave is common, reduce hours so the hourly figure stays honest.",
    },
    {
      question: "How do I compare two job offers fairly?",
      answer:
        "Convert both to the same hourly or annual basis, then subtract commute costs and benefits differences—not just the headline wage.",
    },
    {
      question: "Why do job boards show different hourly conversions?",
      answer:
        "They may assume different weekly hours or include estimated tips. Read the footnote before comparing.",
    },
    {
      question: "Can I estimate daily rates from salary?",
      answer:
        "Divide annual pay by workdays in your year (often ~260 on a 5-day calendar). Confirm holidays and PTO policies.",
    },
    {
      question: "Is the hourly figure what appears on a paycheck?",
      answer:
        "Not necessarily. Withholding and benefit deductions lower net pay. Use gross conversions for offer math unless labeled net.",
    },
    {
      question: "When is salary-to-hourly conversion misleading?",
      answer:
        "When hours are highly variable, on-call, or tipped. Track real hours for a few weeks before relying on the equivalent rate.",
    }
  ],
  "how-to-count-business-days": [
    {
      question: "How do I count business days between two dates?",
      answer:
        "Exclude weekends and any holidays you mark, then count the remaining weekdays in the range. Confirm whether the end date is inclusive.",
    },
    {
      question: "Does a holiday count as a business day?",
      answer:
        "No when you add it to the holiday list. Regional holidays differ, so customize the calendar for your country or company.",
    },
    {
      question: "What counts as a weekend in the calculator?",
      answer:
        "Typically Saturday and Sunday. Some Middle East schedules differ; use a tool that supports your weekend definition if needed.",
    },
    {
      question: "Does the end date count in the total?",
      answer:
        "It depends on the mode—inclusive versus exclusive end. Shipping and SLA policies should state which convention they use.",
    },
    {
      question: "How is this different from calendar day difference?",
      answer:
        "Calendar difference counts every day including weekends. Business-day counts skip non-working days for operations timelines.",
    },
    {
      question: "Can I count business days across months and years?",
      answer:
        "Yes. The counter walks each day in the span, so month length and year boundaries are handled automatically.",
    },
    {
      question: "How do half-days or partial shutdowns work?",
      answer:
        "Most simple counters are all-or-nothing per date. Model a half-day as a custom note; do not expect fractional business days unless the tool supports them.",
    },
    {
      question: "Should federal holidays match my company calendar?",
      answer:
        "Not always. Banks, schools, and private firms close on different sets. Load the calendar your SLA actually follows.",
    },
    {
      question: "How do I find a date that is N business days after today?",
      answer:
        "Use add/subtract business-day mode rather than span count. Start from today and step forward skipping weekends and holidays.",
    },
    {
      question: "Do time zones affect business-day counts?",
      answer:
        "Date-only counts use calendar dates. If a deadline is timestamped, convert to the working timezone before choosing the date boundary.",
    },
    {
      question: "Can I exclude only Sundays but keep Saturdays?",
      answer:
        "Only if the tool lets you customize weekends. Default Western calendars drop both weekend days.",
    },
    {
      question: "Why do two business-day tools disagree by one?",
      answer:
        "Inclusive end dates, holiday lists, or treating today as day zero cause off-by-one results. Align those settings.",
    },
    {
      question: "How are business days used in shipping estimates?",
      answer:
        "Carriers quote transit in business days so weekends do not look like travel time. Order cutoffs still depend on the ship-by clock.",
    },
    {
      question: "Can I count business days for HR leave policies?",
      answer:
        "Yes, but follow the employee handbook. Some policies count calendar days for leave even when operations use business days.",
    },
    {
      question: "What if my holiday list is empty?",
      answer:
        "Then only weekends are skipped. Add holidays before relying on the number for legal or customer deadlines.",
    },
    {
      question: "Is today included when I count from today to Friday?",
      answer:
        "Inclusive modes include both ends; exclusive modes may drop one. Pick the convention your contract language uses.",
    }
  ],
  "how-to-repeat-a-word-or-line": [
    {
      question: "How many times can I safely duplicate a phrase?",
      answer:
        "Stay within what your browser can hold in memory. Thousands of short lines are usually fine; millions of long paragraphs can freeze the tab, so build large lists in batches.",
    },
    {
      question: "Should I put a newline or a comma between copies?",
      answer:
        "Newlines create a vertical list. Commas or spaces keep copies on one line for CSV-like strings. Match the format the next app expects.",
    },
    {
      question: "Can I duplicate a whole paragraph for testing?",
      answer:
        "Yes. Paste the paragraph as the source, set the count, and generate. Each copy includes the full paragraph text you supplied.",
    },
    {
      question: "Why duplicate text instead of typing it again?",
      answer:
        "Duplication keeps spelling identical across test cases and saves time when you need long filler that still matches a real phrase.",
    },
    {
      question: "Does duplication help with UI overflow checks?",
      answer:
        "Developers often paste repeated strings to see whether labels truncate or wrap. Use realistic character sets, not only “asdf”.",
    },
    {
      question: "How do I avoid mangling markdown when repeating?",
      answer:
        "Repeat plain lines, then wrap the block in markdown fences afterward. Repeating already-fenced blocks can nest backticks incorrectly.",
    },
    {
      question: "Can I create a chorus line for lyrics this way?",
      answer:
        "Yes for identical refrain lines. Numbering verses still needs a separate pass if each line must differ.",
    },
    {
      question: "What if my destination strips repeated characters?",
      answer:
        "Some filters collapse runs of the same character. Insert varied separators or slight differences if a spam filter eats the paste.",
    },
    {
      question: "Is repeating a secure way to make passwords?",
      answer:
        "No. Repeated phrases are easy to guess. Use a password generator for secrets.",
    },
    {
      question: "How do I share only part of a long repeated output?",
      answer:
        "Generate, then select the slice you need in the result box before copying. Lower the count next time to avoid excess.",
    },
    {
      question: "Can spreadsheets import newline-separated repeats?",
      answer:
        "Yes. Paste into a column when each copy sits on its own line. Use a comma separator when you need a single cell list.",
    },
    {
      question: "Does the guide replace the Text Repeater tool?",
      answer:
        "No. The guide explains when and how to duplicate strings; the tool performs the join with your count and separator.",
    },
    {
      question: "Why might mobile keyboards struggle with huge pastes?",
      answer:
        "Mobile browsers have tighter memory and clipboard limits. Prefer smaller counts on phones.",
    },
    {
      question: "Can I repeat lines that already include numbers?",
      answer:
        "Yes, but every copy will share the same numbers. Renumber afterward if each row must be unique.",
    },
    {
      question: "How should teachers use repeated lines?",
      answer:
        "For handwriting practice sheets or identical prompt lines. Avoid accidental plagiarism tasks that ask students to submit unchanged filler.",
    },
    {
      question: "What is a practical upper bound for classroom use?",
      answer:
        "A few dozen lines usually suffice for worksheets. Larger dumps belong in files students download, not in a chat box.",
    }
  ],
  "how-to-read-text-from-a-photo": [
    {
      question: "How do I turn a photo of a page into editable text?",
      answer:
        "Open the Image to Text tool, choose a sharp photo of the page, run recognition, then copy the text into your editor and fix mistakes.",
    },
    {
      question: "Why crop before running OCR on a photo?",
      answer:
        "Cropping removes hands, tables, and wallpaper that confuse the engine. A tight crop around the paragraph usually raises accuracy.",
    },
    {
      question: "What lighting works best for document photos?",
      answer:
        "Diffuse daylight or evenly lit indoor light without glare. Harsh flash on glossy paper creates hotspots that hide letters.",
    },
    {
      question: "Can phone screenshots be read the same way?",
      answer:
        "Yes when the font is clear. Crop out status bars and overlapping windows so the engine focuses on the words.",
    },
    {
      question: "How do I handle a curved book page?",
      answer:
        "Flatten the book as much as possible or photograph one flatter half at a time. Strong curves warp characters and lower accuracy.",
    },
    {
      question: "Should I convert HEIC photos first?",
      answer:
        "If the tool rejects HEIC, export JPEG or PNG from your phone photos app, then retry. Widely supported formats avoid decoder surprises.",
    },
    {
      question: "Why are numbers in tables often wrong?",
      answer:
        "Thin rules and dense grids confuse OCR. Crop each cell region or retype critical figures after a first pass.",
    },
    {
      question: "Can I OCR text from a whiteboard photo?",
      answer:
        "Sometimes, when marker contrast is strong and the board is square to the camera. Smudged or low-contrast writing often fails.",
    },
    {
      question: "Is OCR allowed on copyrighted pages?",
      answer:
        "Owning a photo does not grant unlimited rights to redistribute the text. Use extracts under fair personal study rules and cite sources when publishing.",
    },
    {
      question: "How do I OCR multiple pages quickly?",
      answer:
        "Process one clear image at a time, or convert a multi-page PDF with a PDF text workflow when a text layer already exists.",
    },
    {
      question: "What proofreading checklist should I use?",
      answer:
        "Check names, totals, punctuation, and lookalike characters. Read the output aloud for short passages when accuracy matters.",
    },
    {
      question: "Does higher megapixels always help?",
      answer:
        "Only if the text is sharp. A blurry 12 MP shot loses to a smaller but crisp crop.",
    },
    {
      question: "Can colored text on colored backgrounds be read?",
      answer:
        "Low contrast pairs struggle. Increase contrast in a photo editor or print to black-on-white before OCR.",
    },
    {
      question: "How is this different from typing the page?",
      answer:
        "OCR is faster for long clear print. Typing wins for short notes, messy handwriting, or when every character must be perfect on the first try.",
    },
    {
      question: "Where should I store sensitive OCR results?",
      answer:
        "In your own documents with appropriate access controls. Clear the browser tool when finished if the photo showed private data.",
    },
    {
      question: "Do I need an internet connection after models load?",
      answer:
        "Recognition can continue locally depending on the tool build. Keep the tab open so model files stay available during the run.",
    }
  ],
  "how-to-read-a-jwt": [
    {
      question: "How do I inspect claims inside a JSON Web Token?",
      answer:
        "Paste the compact token into a JWT decoder to view the header and payload JSON. Confirm timestamps and audience before you debug an API failure.",
    },
    {
      question: "Why should I never treat decode as login success?",
      answer:
        "Anyone can decode the payload of a standard signed JWT. Only a successful signature check with the right key proves authenticity.",
    },
    {
      question: "How do I read the exp claim in human time?",
      answer:
        "Copy the Unix seconds value into a timestamp converter to see the local expiration moment. Compare it with the server clock that rejected the call.",
    },
    {
      question: "What should I look for in the header first?",
      answer:
        "Check alg and kid. Unexpected algorithms or missing key ids often explain verification failures in libraries.",
    },
    {
      question: "Can payloads contain private personal data?",
      answer:
        "They can, and anyone who obtains the token can read those claims. Prefer opaque identifiers over raw emails or secrets inside JWTs.",
    },
    {
      question: "How do line-wrapped tokens from email break parsers?",
      answer:
        "Extra spaces or newlines invalidate Base64URL segments. Rejoin into a single three-part string before decoding.",
    },
    {
      question: "What does an invalid token character usually mean?",
      answer:
        "You may have copied a bearer prefix, quotes, or a truncated log line. Strip “Bearer ” and paste only the JWT itself.",
    },
    {
      question: "How do nbf and iat differ from exp?",
      answer:
        "iat is issued-at, nbf is not-before, and exp is expiration. A token used too early or too late fails even when the signature is fine.",
    },
    {
      question: "Should product managers read JWTs in support tickets?",
      answer:
        "Only with redaction. Live access tokens can be replayed. Prefer screenshots of non-secret claims or expired fixtures.",
    },
    {
      question: "What is a nested JWT?",
      answer:
        "Some systems put another token string inside a claim. Decode outer then inner layers carefully and keep track of which signature applies.",
    },
    {
      question: "How do I compare two tokens quickly?",
      answer:
        "Decode both and diff the JSON claims. Matching kids with different payloads can reveal refresh versus access tokens.",
    },
    {
      question: "Why might aud validation fail after a migrate?",
      answer:
        "APIs often expect an exact audience string. Old tokens minted for a previous API identifier will decode but still be rejected.",
    },
    {
      question: "Is encrypted JWE the same as a signed JWT?",
      answer:
        "No. JWE encrypts payload contents; a signed JWT only signs readable claims. This how-to targets signed JWT inspection.",
    },
    {
      question: "What tools pair well with JWT reading?",
      answer:
        "A Base64 helper for odd segments and a JSON formatter for prettier claims both help when a library output is messy.",
    },
    {
      question: "How should engineers document a failing token?",
      answer:
        "Record alg, kid, aud, exp, and error message—not the raw signature—in tickets whenever possible.",
    },
    {
      question: "When is building a custom debugger worth it?",
      answer:
        "When your team inspects tokens daily with custom claims. For occasional support, a trusted browser decoder is enough.",
    }
  ],
  "how-to-click-faster": [
    {
      question: "How can I raise my clicks per second score?",
      answer:
        "Relax your hand, use a consistent rhythm, and practice short timed runs. Warm up with slower accurate clicks before chasing peak CPS.",
    },
    {
      question: "Does mouse polling rate affect CPS tests?",
      answer:
        "Higher polling can feel snappier, but technique and fatigue matter more for most people. Update firmware only from the maker’s site.",
    },
    {
      question: "Should I practice on a trackpad or a mouse?",
      answer:
        "Practice on the device you will use in games or drills. Trackpad CPS and mouse CPS are different skills.",
    },
    {
      question: "How long should a CPS practice session last?",
      answer:
        "Short sets of 5–10 seconds with rests beat long grinding sessions that inflame wrists. Stop if you feel pain.",
    },
    {
      question: "Is dragging the mouse while clicking helpful?",
      answer:
        "Some jitter styles move slightly between clicks. Excessive movement can miss targets in real games even if a blank CPS pad scores high.",
    },
    {
      question: "Can keyboard bindings replace rapid clicking?",
      answer:
        "For some titles, yes—ability keys matter more than raw CPS. Check whether the game counts mouse CPS for the action you care about.",
    },
    {
      question: "Why do scores drop after the first second?",
      answer:
        "Burst speed fades as muscles tire. Train endurance with slightly longer runs once short bursts are consistent.",
    },
    {
      question: "Do browser CPS tests match in-game click registration?",
      answer:
        "Not always. Games add their own input pipelines and anti-cheat rules. Use the test as practice, not as a guarantee.",
    },
    {
      question: "How do I avoid cheating accusations while training?",
      answer:
        "Skip hardware macros and software click spammers in online games that ban them. Practice legal techniques only.",
    },
    {
      question: "What desk setup helps sustained clicking?",
      answer:
        "A stable mousepad, forearm support, and a sensor that does not stutter on the surface reduce missed inputs.",
    },
    {
      question: "Should beginners learn butterfly clicking first?",
      answer:
        "Master clean single clicks first. Advanced alternating-finger methods come after you can click without tension.",
    },
    {
      question: "Can warm hands change results?",
      answer:
        "Cold stiff fingers slow down. A short warm-up improves comfort more than any settings tweak.",
    },
    {
      question: "How do I track progress over a week?",
      answer:
        "Record best and average scores for the same test length each day. Compare like with like rather than mixing 1-second and 10-second modes.",
    },
    {
      question: "Is a lighter mouse switch always better?",
      answer:
        "Lighter switches can raise raw CPS but may increase accidental clicks. Prefer what you can control under game pressure.",
    },
    {
      question: "Do mobile tap tests translate to PC CPS?",
      answer:
        "Touch tapping trains different muscles. Use them for phone games; use a mouse test for PC aim.",
    },
    {
      question: "When should I see a clinician about wrist pain?",
      answer:
        "If pain, numbness, or lingering soreness appears, rest and seek medical advice. No high score is worth an injury.",
    }
  ],
  "how-to-estimate-a-car-loan-payment": [
    {
      question: "What numbers do I need before estimating a car payment?",
      answer:
        "Start with the negotiated price, trade-in equity, cash down payment, expected rate, and term in months. Add fees the dealer itemizes when you want a closer estimate.",
    },
    {
      question: "How does term length change a car loan payment?",
      answer:
        "Longer terms lower the monthly amount but usually raise total interest. Shorter terms cost more each month and less overall if the rate is similar.",
    },
    {
      question: "Should I include extended warranties in the loan amount?",
      answer:
        "If you finance them, yes—they increase the amount financed and the payment. Paying products in cash keeps the loan smaller.",
    },
    {
      question: "How do credit scores influence the rate I should model?",
      answer:
        "Stronger credit usually receives lower APR offers. Model a conservative rate until a lender gives a real quote.",
    },
    {
      question: "What is gap insurance doing to my monthly cost?",
      answer:
        "When financed, gap adds to principal. It does not change the interest formula beyond the higher balance.",
    },
    {
      question: "Can I estimate payments before visiting a dealer?",
      answer:
        "Yes. Use an auto loan calculator with a realistic price and rate band so you shop with a budget ceiling.",
    },
    {
      question: "How should trade-in equity be applied?",
      answer:
        "Positive equity reduces the amount you finance; negative equity can be rolled into the new loan and raise the payment. Confirm both numbers in writing.",
    },
    {
      question: "Do promotional zero-interest offers change the workflow?",
      answer:
        "Enter 0% only when you truly qualify. Many ads exclude lower credit tiers or require short terms.",
    },
    {
      question: "Why is the out-the-door price better than the sticker?",
      answer:
        "Taxes, documentation fees, and add-ons sit on top of MSRP. Financing the out-the-door figure avoids an undercounted payment.",
    },
    {
      question: "How often should I recalculate during negotiation?",
      answer:
        "Every time price, term, or rate changes. Small print changes can swing the monthly number more than shoppers expect.",
    },
    {
      question: "Is leasing estimated the same way as buying?",
      answer:
        "No. Leases use residual value and money factor math. Use a loan estimator only when you plan to finance a purchase.",
    },
    {
      question: "What payment-to-income guideline do advisors mention?",
      answer:
        "Rules of thumb vary; many coaches suggest keeping total car costs modest relative to take-home pay. Pick a number you can sustain with insurance and fuel.",
    },
    {
      question: "How do balloon payments affect the monthly figure?",
      answer:
        "Some contracts lower monthly dues by leaving a large final amount due. Model that balloon explicitly so the low payment does not surprise you later.",
    },
    {
      question: "Can I prepay a car loan without recalculating from scratch?",
      answer:
        "Extra principal shortens the schedule; ask the servicer for an updated payoff. Online estimators approximate the effect if you lower the balance and remaining term.",
    },
    {
      question: "Why might dealer and bank quotes disagree?",
      answer:
        "Markup on buy rates, fee packaging, and required products differ. Compare APRs and total amount financed line by line.",
    },
    {
      question: "When is paying cash better than financing?",
      answer:
        "When you can buy without draining emergency savings and when loan interest exceeds what that cash would earn elsewhere. Run both paths with real numbers.",
    }
  ],
  "how-to-generate-a-random-number": [
    {
      question: "How do I pick a random integer in a range?",
      answer:
        "Set the minimum and maximum, choose integer mode, then generate. Confirm whether both ends are included before you rely on the draw.",
    },
    {
      question: "When should I allow duplicate random numbers?",
      answer:
        "Allow duplicates for independent rolls such as damage dice. Demand unique values when sampling without replacement, like raffle winners.",
    },
    {
      question: "How do I draw several random numbers at once?",
      answer:
        "Set the count of results if the tool supports lists, or generate repeatedly while recording outputs. Unique mode must have a range large enough for the count.",
    },
    {
      question: "Is a browser random number good for lotteries?",
      answer:
        "Casual games are fine. High-stakes or cryptographic needs require a CSPRNG and audited process, not a toy spinner.",
    },
    {
      question: "Can I generate random decimals?",
      answer:
        "Yes when the tool offers a decimal mode. Unique constraints are harder with dense fractional ranges, so many UIs limit uniqueness to integers.",
    },
    {
      question: "How do teachers use classroom random picks?",
      answer:
        "Set the range to roster size, draw unique indexes, and map numbers to names. Publish the method so students trust fairness.",
    },
    {
      question: "Why reroll if the UI looks stuck on one value?",
      answer:
        "True randomness can repeat. If uniqueness was required, enable that mode instead of assuming a bug.",
    },
    {
      question: "Should seed values be used?",
      answer:
        "Seeds help reproduce a sequence for tests. Leave seeds off when you want unpredictable classroom or game draws.",
    },
    {
      question: "How is a random number different from a UUID?",
      answer:
        "A random integer is a small numeric draw. A UUID is a longer identifier meant for uniqueness across systems, not a 1–10 pick.",
    },
    {
      question: "Can I favor some numbers over others?",
      answer:
        "A uniform generator should not bias outcomes. Weighted picks need a different algorithm than a flat min–max draw.",
    },
    {
      question: "What range limits are practical on the web?",
      answer:
        "Stay within what the UI documents. Extreme bounds can overflow display formatting even when math still works.",
    },
    {
      question: "How do I share a draw so others can verify it?",
      answer:
        "Screenshot the inputs and result, or use a seeded generator everyone can rerun. Agree on rules before the draw.",
    },
    {
      question: "Are animated number wheels more random?",
      answer:
        "Animation is cosmetic. Randomness comes from the underlying generator, not the spinning graphic.",
    },
    {
      question: "Can spreadsheets replace a web random tool?",
      answer:
        "Yes with RAND or RANDBETWEEN. Spreadsheet recalculation habits differ, so freeze values when you need a fixed draw.",
    },
    {
      question: "What should I avoid when picking winners?",
      answer:
        "Do not silently exclude participants after seeing the number. Document eligibility before generating.",
    },
    {
      question: "How do I generate a random number between 1 and 100 quickly?",
      answer:
        "Set min 1 and max 100 in integer mode and click once. Repeat only if your rules allow redraws.",
    }
  ],
  "how-to-read-a-url": [
    {
      question: "How do I break a long link into readable parts?",
      answer:
        "Paste it into a URL parser to see scheme, host, path, query keys, and fragment separately. That view beats scanning one dense string.",
    },
    {
      question: "What should I check first when a link looks suspicious?",
      answer:
        "Confirm the host spelling and the path. Lookalikes in the domain are a common phishing trick before any query parameters matter.",
    },
    {
      question: "How do tracking parameters show up in a URL?",
      answer:
        "They appear after ? as key=value pairs such as utm_source. Parsing lists them so you can strip or keep them intentionally.",
    },
    {
      question: "Why might two links that look alike behave differently?",
      answer:
        "A single query flag or trailing slash can change server routing. Compare parsed components side by side.",
    },
    {
      question: "What is a URL scheme?",
      answer:
        "It is the leading protocol such as https: or mailto:. It tells the browser how to handle the rest of the string.",
    },
    {
      question: "When is a port number important?",
      answer:
        "Non-default ports point to alternate services on the same host. Missing a required port can hit the wrong app.",
    },
    {
      question: "How do I explain query strings to a teammate?",
      answer:
        "Describe them as optional instructions after the path. Parsing demos make the metaphor concrete in a meeting.",
    },
    {
      question: "Can a fragment open a section on the page?",
      answer:
        "Yes, ids after # often scroll to a heading. They usually stay client-side and may not appear in server logs.",
    },
    {
      question: "Why do shared links from apps look encoded?",
      answer:
        "Apps percent-encode spaces and punctuation for safety. Decoding those segments restores readable titles.",
    },
    {
      question: "How should writers shorten links for print?",
      answer:
        "Prefer a clean canonical path without personal tokens. Parsing helps you spot session ids you must not print.",
    },
    {
      question: "What does a data: or javascript: scheme imply?",
      answer:
        "Those are special schemes, not normal websites. Treat unexpected schemes as unsafe in untrusted content.",
    },
    {
      question: "How do CDNs affect the path you see?",
      answer:
        "Paths may include cache-busting hashes or image transforms. Parsing separates host branding from path noise.",
    },
    {
      question: "Is reading a URL the same as visiting it?",
      answer:
        "No. Parsing inspects the string locally. Visiting sends a request and can trigger tracking.",
    },
    {
      question: "How can support teams use URL parsing?",
      answer:
        "Ask customers for the full link, parse it, and verify environment hosts or ticket ids without clicking blindly.",
    },
    {
      question: "What belongs in documentation about links?",
      answer:
        "Document required query keys and example hosts. Pair docs with a parser so examples stay honest.",
    },
    {
      question: "When should I rebuild a URL instead of editing by hand?",
      answer:
        "When encoding errors keep appearing. Change fields in a structured editor, then copy the rebuilt link.",
    }
  ],
  "how-to-check-an-open-graph-preview": [
    {
      question: "How do I preview how a link will look when shared?",
      answer:
        "Use an Open Graph preview tool with a public https URL. It reads og tags and shows title, description, and image fields platforms expect.",
    },
    {
      question: "Why must the page be publicly reachable?",
      answer:
        "Crawlers on the internet cannot see localhost or private VPNs. Deploy a staging host that allows the preview fetch.",
    },
    {
      question: "What tags should I verify for a clean card?",
      answer:
        "Check og:title, og:description, og:image, and og:url at minimum. Add og:type when the platform docs recommend it.",
    },
    {
      question: "How do I fix a stale Facebook share image?",
      answer:
        "Update the og:image, confirm the new file is live, then use the platform’s debugger refresh so caches drop the old asset.",
    },
    {
      question: "Why is my preview image cropped oddly?",
      answer:
        "Platforms expect roughly 1.91:1 for large link cards. Provide a large enough image with safe margins around the focal point.",
    },
    {
      question: "Can meta descriptions replace og:description?",
      answer:
        "Some platforms fall back, but matching both keeps search snippets and share cards aligned. Prefer an explicit og:description.",
    },
    {
      question: "What if the title looks fine in HTML but wrong on share?",
      answer:
        "A crawler may be reading outdated HTML or a different locale URL. Confirm the exact URL you paste into the previewer.",
    },
    {
      question: "Do query parameters create separate previews?",
      answer:
        "They can if the server returns different og tags per query. Canonicalize when you want one card for many tracking URLs.",
    },
    {
      question: "How long should I wait after publishing new tags?",
      answer:
        "CDN and platform caches vary from minutes to days. Recheck after a hard refresh in the official debugger.",
    },
    {
      question: "Why did the preview time out?",
      answer:
        "Slow servers, blocking bot rules, or geographic firewalls can stop the fetch. Allow reputable crawlers and speed up TTFB.",
    },
    {
      question: "Is Open Graph enough for X or LinkedIn?",
      answer:
        "Open Graph covers many cases; some networks also read their own tags. Still start with solid og basics.",
    },
    {
      question: "Can client-rendered apps expose og tags?",
      answer:
        "Only if the HTML response includes them or a prerender layer injects them. Pure client inserts often miss crawlers.",
    },
    {
      question: "How do I QA several language versions?",
      answer:
        "Preview each localized URL. Titles and images should match that language’s content, not the default locale.",
    },
    {
      question: "What does a missing image look like in practice?",
      answer:
        "Shares show a blank or generic thumbnail. Users skip those links more often, so treat missing og:image as a release blocker.",
    },
    {
      question: "Should every blog post define og:type article?",
      answer:
        "It helps some platforms classify content. Follow the network’s current documentation for article versus website.",
    },
    {
      question: "How is checking a preview different from editing meta tags?",
      answer:
        "Tag editors help you write markup; preview tools validate what crawlers actually receive on the live URL.",
    }
  ],
  "how-to-check-color-contrast": [
    {
      question: "How do I test text contrast for accessibility?",
      answer:
        "Pick the text color and the background color in a contrast checker and read the ratio against WCAG AA and AAA thresholds.",
    },
    {
      question: "What ratio should body text meet?",
      answer:
        "WCAG AA generally expects at least 4.5:1 for normal text and 3:1 for large text. AAA is stricter at 7:1 for normal text.",
    },
    {
      question: "What counts as large text for contrast rules?",
      answer:
        "Roughly 18pt regular or 14pt bold text qualifies as large under WCAG guidance. Confirm with the current WCAG definitions you follow.",
    },
    {
      question: "How do I fix a failing color pair?",
      answer:
        "Darken the text, lighten the background, or both until the ratio passes. Recheck hover and disabled states too.",
    },
    {
      question: "Do links need their own contrast check?",
      answer:
        "Yes against the background, and they also need a non-color cue such as underline when color alone marks them as links.",
    },
    {
      question: "Can I rely on brand guidelines alone?",
      answer:
        "Brand palettes still have to pass on real UI backgrounds. Check each usage rather than assuming a hex is safe everywhere.",
    },
    {
      question: "How does opacity affect contrast?",
      answer:
        "Semi-transparent text blends with whatever sits behind it. Sample the effective on-screen color, not only the raw hex.",
    },
    {
      question: "Should charts and data visualizations meet the same ratios?",
      answer:
        "Critical labels should. Some non-text graphics use additional patterns because color alone is not enough.",
    },
    {
      question: "Does a gradient background complicate the test?",
      answer:
        "Yes. Test against the lightest and darkest areas the text crosses, or place text on a solid scrim.",
    },
    {
      question: "Can icons use lower contrast than text?",
      answer:
        "UI component guidance often allows 3:1 for non-text contrast. Text inside icons still follows text thresholds.",
    },
    {
      question: "How do dark mode themes change the workflow?",
      answer:
        "Retest every pair in both themes. A pass in light mode can fail when backgrounds invert.",
    },
    {
      question: "Is automated CSS scanning enough?",
      answer:
        "It helps catch many issues, but manual checks still matter for images, overlays, and canvas text.",
    },
    {
      question: "Why do similar grey pairs fail?",
      answer:
        "Low luminance difference yields a low ratio even when hues look related. Increase separation rather than tweaking hue alone.",
    },
    {
      question: "What color formats can I paste into checkers?",
      answer:
        "Hex and RGB are common; some tools accept HSL. Convert consistently so teammates compare the same values.",
    },
    {
      question: "Does passing one control mean the page is accessible?",
      answer:
        "No. Contrast is one requirement among structure, keyboard use, and more. Treat a pass as necessary, not complete.",
    },
    {
      question: "How often should design systems recheck contrast?",
      answer:
        "Whenever tokens change. A single palette update can invalidate dozens of components.",
    }
  ],
  "how-to-convert-text-to-morse-code": [
    {
      question: "How do I convert English text into Morse code?",
      answer:
        "Type or paste the phrase into a Morse tool, then copy the dots and dashes it produces. Letters become standard International Morse sequences.",
    },
    {
      question: "How are letters and words separated in Morse?",
      answer:
        "Letter gaps are shorter pauses; words are often shown with a slash or wider gap in text form. Follow the separator the tool documents.",
    },
    {
      question: "Can Morse tools translate code back into letters?",
      answer:
        "Many offer decode as well as encode. Paste well-spaced Morse and correct any malformed sequences the decoder rejects.",
    },
    {
      question: "Does punctuation have Morse equivalents?",
      answer:
        "Common marks do, but support varies. Unsupported characters are usually skipped or flagged rather than guessed.",
    },
    {
      question: "Is Morse case-sensitive?",
      answer:
        "No. Encoding typically uppercases letters first so “hello” and “HELLO” produce the same code.",
    },
    {
      question: "How was Morse used historically?",
      answer:
        "Operators sent it over telegraph wires and radio. Learning the patterns still helps amateur radio and classroom demos.",
    },
    {
      question: "Can I practice listening, not only reading?",
      answer:
        "Use an audio trainer that beeps dit and dah lengths. Visual dots alone build recognition slower for on-air use.",
    },
    {
      question: "What speed should beginners start at?",
      answer:
        "Start slow enough to hear distinct dits and dahs, then increase. Rushing early creates bad habits.",
    },
    {
      question: "Are numbers included in International Morse?",
      answer:
        "Yes, digits 0–9 have standard patterns. Mixed call signs rely on both letters and numbers.",
    },
    {
      question: "Why do some charts show different symbols?",
      answer:
        "American Morse and other variants differ. Stick to International Morse unless a niche context requires otherwise.",
    },
    {
      question: "Can I Morse-encode passwords for fun?",
      answer:
        "You can, but it is not encryption. Anyone with a chart can read it.",
    },
    {
      question: "How do I share Morse in plain text chats?",
      answer:
        "Copy the dot-dash string with clear word separators. Avoid fonts that merge punctuation oddly.",
    },
    {
      question: "What mistakes break decoding?",
      answer:
        "Missing spaces between letters or using the wrong dash character confuses parsers. Keep spacing consistent.",
    },
    {
      question: "Is learning Morse still required for licenses?",
      answer:
        "Many modern amateur licenses dropped Morse tests, but the skill remains useful and popular as a hobby.",
    },
    {
      question: "How long are typical dit and dah lengths?",
      answer:
        "A dah lasts about three dits, with standard gaps between elements, letters, and words in timing rules.",
    },
    {
      question: "Should classrooms grade exact spacing?",
      answer:
        "Yes for decode accuracy. Teach separators explicitly so students do not run words together.",
    }
  ],
  "how-to-escape-html": [
    {
      question: "How do I escape HTML so tags show as text?",
      answer:
        "Run the markup through an HTML encoder that turns characters like <, >, and & into entities. Paste the result where you need literal code samples.",
    },
    {
      question: "When should I encode HTML instead of sanitizing it?",
      answer:
        "Encode when you want to display source code safely. Sanitize or strip when you must allow limited HTML rendering from untrusted users.",
    },
    {
      question: "Why is encoding & required before other entities?",
      answer:
        "Ampersands start entities. Leaving them raw can break parsing or create unintended sequences in the middle of text.",
    },
    {
      question: "What is the difference between encoding and minifying?",
      answer:
        "Encoding changes characters into entities for safe display. Minifying removes whitespace and shortens code without entity-escaping content.",
    },
    {
      question: "Can I decode entities back to markup?",
      answer:
        "Yes with a decoder that understands named and numeric entities. Only decode content you trust before rendering.",
    },
    {
      question: "How do blogs safely show code snippets?",
      answer:
        "Escape the snippet, then place it inside a code block styled by CSS. That prevents the browser from executing sample tags.",
    },
    {
      question: "Do quotes need encoding inside attributes?",
      answer:
        "Yes when the value is wrapped in the same quote style. Attribute-safe encoding prevents breaking out of the attribute.",
    },
    {
      question: "Is escaping enough to stop all XSS?",
      answer:
        "Context-aware escaping is a major control, but apps also need CSP, careful APIs, and safe frameworks. Do not rely on one replace call alone.",
    },
    {
      question: "What entities appear most often?",
      answer:
        "&lt; &gt; &amp; &quot; and &#39; cover many cases. Rich text may need more named entities.",
    },
    {
      question: "Should I escape entire HTML documents for email?",
      answer:
        "Email clients differ. Prefer tested templates and escape user-supplied fragments rather than double-encoding whole messages.",
    },
    {
      question: "How do Markdown and HTML escaping interact?",
      answer:
        "Markdown processors may still pass raw HTML. Escape or disable raw HTML when untrusted authors contribute.",
    },
    {
      question: "Can browsers show entities without decoding?",
      answer:
        "In normal HTML they decode for display. Inside <pre> or after encoding, you can make the entity text visible.",
    },
    {
      question: "Why did my decoder reject a string?",
      answer:
        "Broken numeric entities or truncated sequences fail parsers. Fix the entity syntax and try again.",
    },
    {
      question: "Is this the same as URL encoding?",
      answer:
        "No. URL encoding uses percent-codes for links. HTML escaping uses entities for markup safety.",
    },
    {
      question: "How should teams review escaped content?",
      answer:
        "Check that samples still teach the right tags after escaping, and that production pages never accidentally double-escape readable copy.",
    },
    {
      question: "When is a visual editor safer than manual escaping?",
      answer:
        "When non-developers publish often. Editors that escape on insert reduce copy-paste mistakes.",
    }
  ],
  "how-to-find-and-replace-text": [
    {
      question: "How do I replace a word everywhere in a document?",
      answer:
        "Paste the text into a find-and-replace tool, enter the target word and its replacement, choose replace-all, then copy the result back.",
    },
    {
      question: "When should I use regular expressions for replace?",
      answer:
        "Use regex when patterns vary, such as phone formats or repeated whitespace. Prefer plain text replace for simple fixed words.",
    },
    {
      question: "How do I delete every match instead of replacing?",
      answer:
        "Leave the replacement empty if the tool treats that as deletion, or replace with a single space when you need spacing preserved.",
    },
    {
      question: "Why does replacing “cat” also change “catalog”?",
      answer:
        "Substring matches alter “cat” inside “catalog”. Enable whole-word matching when available, or tighten the pattern.",
    },
    {
      question: "Should I replace case-sensitively?",
      answer:
        "Yes when capitalization carries meaning. Case-insensitive mode catches Title Case and lowercase together but can over-match.",
    },
    {
      question: "How can I replace only the first occurrence?",
      answer:
        "Choose a first-only mode if offered, or replace manually once. Blind replace-all is risky in legal text.",
    },
    {
      question: "What is a safe workflow for large files?",
      answer:
        "Work on a copy, run replace, spot-check critical sections, then overwrite the original. Keep version history.",
    },
    {
      question: "Can find-and-replace fix inconsistent spelling?",
      answer:
        "Yes for known variants. Maintain a short checklist of brand spellings so teammates apply the same map.",
    },
    {
      question: "How do line breaks affect matching?",
      answer:
        "Some patterns do not cross lines unless you enable multiline modes. Normalize breaks first when cleaning pasted email.",
    },
    {
      question: "Is browser find-and-replace enough for code?",
      answer:
        "Editors with project-wide search are safer for repos. A webpage tool suits one-off clipboard cleanup.",
    },
    {
      question: "How do I avoid breaking URLs while replacing?",
      answer:
        "Include surrounding punctuation in tests, or exclude http regions with careful regex. Preview before all-replace.",
    },
    {
      question: "What does a rejected input usually mean?",
      answer:
        "Empty find strings or invalid regex syntax are common causes. Fix the pattern and retry.",
    },
    {
      question: "Can I replace across many files at once here?",
      answer:
        "This guide focuses on one text blob. Use an IDE or sed-like workflow for trees of files.",
    },
    {
      question: "How should translators use replace tools?",
      answer:
        "Replace glossary terms consistently, but review gendered or context-sensitive words manually.",
    },
    {
      question: "Does replace change formatting marks?",
      answer:
        "Plain-text tools ignore rich formatting. Paste back into a word processor carefully if styles matter.",
    },
    {
      question: "When is manual editing better than replace-all?",
      answer:
        "When matches need human judgment, such as names that collide with common words. Search, then decide case by case.",
    }
  ],
  "how-to-turn-a-number-into-words": [
    {
      question: "How do I write a number in words for a form?",
      answer:
        "Type the digits into a number-to-words tool and copy the phrase it returns. Proofread hyphens and “hundred” placement before submitting.",
    },
    {
      question: "When do legal documents require amounts in words?",
      answer:
        "Checks and some contracts use words to deter alterations. Follow the exact template your bank or counsel provides.",
    },
    {
      question: "How should I handle cents on a check?",
      answer:
        "Many people write dollars in words and cents as a fraction over 100. Confirm local banking custom.",
    },
    {
      question: "Why do American and British wordings differ?",
      answer:
        "UK English often inserts “and” (two hundred and five). U.S. forms frequently omit it. Match the audience.",
    },
    {
      question: "Can I convert phone numbers to words?",
      answer:
        "Not usefully—phone numbers are digit strings, not quantities. Keep them numeric.",
    },
    {
      question: "What is a safe maximum for automated wording?",
      answer:
        "Stay inside the converter’s documented range. Beyond that, wording rules and overflow errors become likely.",
    },
    {
      question: "How do teachers check student conversions?",
      answer:
        "Compare against a trusted key and watch place-value mistakes around teens and tens.",
    },
    {
      question: "Should I hyphenate twenty-one?",
      answer:
        "Yes in standard American style for twenty-one through ninety-nine when used as compound numbers.",
    },
    {
      question: "Can words be converted back to digits reliably?",
      answer:
        "Only with a careful parser and unambiguous input. Prefer keeping the original digits beside the words.",
    },
    {
      question: "How do I write years like 2026 in words?",
      answer:
        "Styles vary (two thousand twenty-six versus twenty twenty-six). Pick one style guide and stay consistent.",
    },
    {
      question: "Do leading zeros in codes get spoken?",
      answer:
        "Quantity converters drop them. For codes, read each digit aloud instead of using number-to-words.",
    },
    {
      question: "Is this helpful for accessibility subtitles?",
      answer:
        "Sometimes, when a voiceover must speak amounts. Keep digits on screen too for skimmers.",
    },
    {
      question: "What about roman numerals?",
      answer:
        "Use a roman converter instead. Number-to-words targets English phrases, not XIV-style output.",
    },
    {
      question: "How should finance teams QA converter output?",
      answer:
        "Spot-check boundaries (19/20, 99/100, 999/1000) and negative or decimal cases your process allows.",
    },
    {
      question: "Can I batch-convert a column of numbers?",
      answer:
        "Spreadsheet formulas or scripts scale better. The web tool suits one-off amounts.",
    },
    {
      question: "Why keep digits even after writing words?",
      answer:
        "Digits reduce ambiguity in machine systems; words help humans catch tampering. Using both is common on checks.",
    }
  ],
  "what-a-paycheck-estimate-includes": [
    {
      question: "What pieces make up a paycheck estimate?",
      answer:
        "Start with gross pay, then subtract estimated tax withholding and deductions. The remainder is an approximate net or take-home figure.",
    },
    {
      question: "How is gross pay different from net pay?",
      answer:
        "Gross is before taxes and deductions. Net is what you receive after those amounts are taken out.",
    },
    {
      question: "What are pre-tax deductions examples?",
      answer:
        "Common ones include traditional 401(k) contributions and some insurance premiums. They reduce taxable wages in many systems.",
    },
    {
      question: "What are post-tax deductions?",
      answer:
        "Items taken after tax withholding, such as Roth contributions or certain garnishments, depending on the plan.",
    },
    {
      question: "Why is an online estimate not a tax filing?",
      answer:
        "Filings use annual forms, credits, and jurisdiction rules a simple paycheck model cannot know. Treat the result as planning only.",
    },
    {
      question: "How does pay frequency change each check?",
      answer:
        "Weekly, biweekly, semimonthly, and monthly splits divide annual pay differently. Enter the frequency that matches your job.",
    },
    {
      question: "Should overtime be in the estimate?",
      answer:
        "Include expected overtime in gross when you want a realistic check. Irregular OT makes month-to-month net swing.",
    },
    {
      question: "How do benefits affect take-home pay?",
      answer:
        "Employer benefits may not leave your check, but employee-paid premiums do. Model the employee share as a deduction.",
    },
    {
      question: "What withholding percent should I try first?",
      answer:
        "Use a conservative placeholder until you have a W-4-style projection. Adjust after you see real paystubs.",
    },
    {
      question: "Can bonuses be estimated the same way?",
      answer:
        "Bonus withholding can use flat supplemental rates. A regular paycheck model may under- or over-estimate a bonus check.",
    },
    {
      question: "Why do two paycheck tools disagree?",
      answer:
        "State taxes, local levies, and FICA assumptions differ. Compare line items, not only the final net.",
    },
    {
      question: "How should freelancers read these estimates?",
      answer:
        "Freelancers often lack wage withholding. Use self-employment tax planning instead of employee paycheck defaults.",
    },
    {
      question: "What if deductions are unknown?",
      answer:
        "Run a gross-only scenario first, then add known deductions one at a time so you see each impact.",
    },
    {
      question: "Does filing status belong in a simple estimator?",
      answer:
        "Full tax engines ask for it. Lightweight percent-based tools skip it and are correspondingly rougher.",
    },
    {
      question: "How often should I revisit the estimate?",
      answer:
        "After raises, benefit changes, or new W-4 elections. Old assumptions drift quickly.",
    },
    {
      question: "When do I need a tax professional?",
      answer:
        "For multi-state work, equity compensation, or complex credits. Estimators cannot replace personalized advice.",
    }
  ],
  "how-to-find-the-mean-median-and-mode": [
    {
      question: "How do I calculate the mean of a list?",
      answer:
        "Add the numbers and divide by how many there are. An average calculator can do the arithmetic after you paste the list.",
    },
    {
      question: "When is the median better than the mean?",
      answer:
        "When outliers pull the mean—like one huge salary in a small sample. The median mid-point stays more typical.",
    },
    {
      question: "What is the mode in a data set?",
      answer:
        "The value that appears most often. Some lists have no mode, one mode, or several modes that tie.",
    },
    {
      question: "How do I find the median of an even-sized list?",
      answer:
        "Sort the numbers, then average the two middle values. That pair’s mean becomes the median.",
    },
    {
      question: "Can I paste numbers with commas?",
      answer:
        "Most list tools accept commas, spaces, or new lines. Avoid thousand separators that look like extra numbers.",
    },
    {
      question: "What is a bimodal distribution?",
      answer:
        "A set with two different values tied for most frequent. Report both modes rather than forcing a single answer.",
    },
    {
      question: "Do negative numbers work in averages?",
      answer:
        "Yes. Signs are part of the values. A mean can be negative when negatives dominate.",
    },
    {
      question: "How should teachers introduce these three measures?",
      answer:
        "Start with a tiny list students can compute by hand, then show how outliers move mean more than median.",
    },
    {
      question: "Can I average percentages directly?",
      answer:
        "Only when each percentage shares the same base. Different sample sizes need a weighted approach.",
    },
    {
      question: "What happens if I include blank lines?",
      answer:
        "Skip empties so they do not count as zeros unless you truly mean zero values.",
    },
    {
      question: "How many numbers can I average at once?",
      answer:
        "Enough for browser memory; enormous pastes may lag. Sample or summarize upstream if needed.",
    },
    {
      question: "Is the mean always between min and max?",
      answer:
        "For ordinary arithmetic means of real numbers, yes. Other “averages” like RMS can behave differently.",
    },
    {
      question: "When does a list have no mode at all?",
      answer:
        "When every value appears once. Say “no mode” instead of picking arbitrarily.",
    },
    {
      question: "How do weighted averages differ?",
      answer:
        "Each value is multiplied by a weight before dividing by total weight. Use them for credits or unequal group sizes.",
    },
    {
      question: "Why did 1,000 split into two numbers?",
      answer:
        "A comma thousand separator can be read as a list break. Remove grouping commas before pasting.",
    },
    {
      question: "How are these measures used day to day?",
      answer:
        "Means for typical cost, medians for home prices, modes for most common shoe size—pick the measure that answers your question.",
    }
  ],
  "how-to-generate-lorem-ipsum": [
    {
      question: "How do I generate placeholder text for a mockup?",
      answer:
        "Open a lorem ipsum generator, choose paragraphs or words, then copy the result into your layout. Replace it with real copy before launch.",
    },
    {
      question: "Why do designers use lorem ipsum?",
      answer:
        "It looks like readable prose without distracting reviewers with draft messaging. Layout, type, and spacing stay the focus.",
    },
    {
      question: "Should placeholder text start with the classic phrase?",
      answer:
        "Many generators begin with “Lorem ipsum dolor sit amet…”. You can trim the opening if your component needs a shorter headline.",
    },
    {
      question: "How much placeholder text is too much?",
      answer:
        "Generate only what the mock needs. Huge dumps slow reviews and hide spacing issues in small components.",
    },
    {
      question: "Can I use real draft copy instead?",
      answer:
        "Yes, and it often improves stakeholder feedback. Lorem is a stand-in when real copy is not ready.",
    },
    {
      question: "Does lorem ipsum affect SEO if left live?",
      answer:
        "Published placeholder text looks unprofessional and can waste crawl budget. Never ship it on production pages.",
    },
    {
      question: "How do I generate a single sentence?",
      answer:
        "Request a small word count or one sentence mode if available, then trim manually for headlines.",
    },
    {
      question: "Is lorem ipsum Latin that means something coherent?",
      answer:
        "It is scrambled classical Latin used as filler. Do not treat it as a meaningful translation.",
    },
    {
      question: "Can developers seed tests with lorem?",
      answer:
        "Yes for UI tests that need text length variety. Prefer fixtures with known lengths for assertions.",
    },
    {
      question: "What is the difference between words and paragraphs mode?",
      answer:
        "Words mode targets a count; paragraphs mode wraps filler into blocks. Pick based on whether you need article-like spacing.",
    },
    {
      question: "Should accessibility reviews use lorem?",
      answer:
        "Use real language when testing screen readers. Lorem hides pronunciation and localization issues.",
    },
    {
      question: "How do I avoid repeating the same paragraph?",
      answer:
        "Increase variety settings or regenerate. Some tools cycle a fixed pool—spot-check for obvious loops.",
    },
    {
      question: "Can I localize placeholder text?",
      answer:
        "Use language-specific filler when testing non-English layouts so line breaks match target scripts.",
    },
    {
      question: "Why set a maximum length in generators?",
      answer:
        "To keep browser tabs responsive and discourage dumping megabytes of filler into design files.",
    },
    {
      question: "Is counting characters the same as generating lorem?",
      answer:
        "No. Character counters measure your real text; generators invent filler. Use both at different stages.",
    },
    {
      question: "When should I delete placeholder strings from code?",
      answer:
        "Before merge to production branches. Search the repo for “Lorem ipsum” as a release checklist item.",
    }
  ],
  "how-to-make-a-simple-favicon": [
    {
      question: "How do I create a basic favicon for a website?",
      answer:
        "Make a simple square icon—letter, logo mark, or color block—export PNG or ICO sizes, then link them in your site’s head.",
    },
    {
      question: "What size should I export first?",
      answer:
        "32×32 is a common tab size; also offer 16×16 and a larger apple-touch icon. Start from a clean square master.",
    },
    {
      question: "Which HTML tags load a favicon?",
      answer:
        "Use rel=\"icon\" for the browser tab file and rel=\"apple-touch-icon\" for home-screen icons. Paths must match deployed files.",
    },
    {
      question: "Why is my new favicon not updating?",
      answer:
        "Browsers cache favicons aggressively. Hard-refresh, try a private window, or bump the file name/query string.",
    },
    {
      question: "Should a favicon be detailed?",
      answer:
        "No. Tiny sizes hide fine detail. Bold shapes and high contrast read better than full logos.",
    },
    {
      question: "Can I use a transparent background?",
      answer:
        "Yes for PNGs. Test on both light and dark browser chrome so the mark stays visible.",
    },
    {
      question: "Do I need an ICO and a PNG?",
      answer:
        "Modern browsers accept PNG icons; ICO still helps older environments. Shipping both is a safe default.",
    },
    {
      question: "How do I make a letter favicon quickly?",
      answer:
        "Pick a brand color, place one uppercase letter centered, and export square PNGs. Keep padding so the glyph does not clip.",
    },
    {
      question: "Should the favicon match the Open Graph image?",
      answer:
        "They should feel related, but OG images are large marketing cards. Do not shrink a busy OG art into a 16px icon.",
    },
    {
      question: "Can emoji be a favicon?",
      answer:
        "Some setups allow it, but rendering differs by OS. A designed PNG is more consistent.",
    },
    {
      question: "What about dark-mode favicons?",
      answer:
        "Optional. If your mark disappears on dark UI, provide a variant or add a light halo.",
    },
    {
      question: "How many sizes are enough for most sites?",
      answer:
        "A small set covering tab, taskbar, and touch icons covers typical needs without an icon sprawl.",
    },
    {
      question: "Does a generator upload my logo?",
      answer:
        "Prefer tools that process in-browser. Check the privacy note before dropping sensitive brand files.",
    },
    {
      question: "Why does the favicon form reject some hex colors?",
      answer:
        "Colors need a valid hex such as #3366ff. Shorthand must still parse; stray text fails validation.",
    },
    {
      question: "Can staging and production use different icons?",
      answer:
        "Yes—distinct favicons help teammates see which environment they have open.",
    },
    {
      question: "Do search engines show favicons?",
      answer:
        "Many result layouts can show a site icon. Keep the file reachable and up to date for branding in SERPs.",
    }
  ],
  "how-to-rate-a-password": [
    {
      question: "How can I check whether a password is strong enough?",
      answer:
        "Paste it into a strength checker that estimates length, character variety, and patterns. Use the rating as guidance, then store the password in a manager.",
    },
    {
      question: "What does entropy in bits mean for passwords?",
      answer:
        "It is a rough measure of unpredictability. Higher bits generally mean harder guessing, but real attacks also use leak lists.",
    },
    {
      question: "Why do short digit PINs score poorly?",
      answer:
        "There are few combinations, so they fall quickly to guessing. Prefer longer passphrases for important accounts.",
    },
    {
      question: "Is a longer password always better?",
      answer:
        "Length helps, but predictable phrases still fail. Randomness and uniqueness across sites matter as much as length.",
    },
    {
      question: "Should every password include symbols?",
      answer:
        "Symbols can grow the character set, yet a long random passphrase can beat a short symbol salad. Follow site rules without reusing old tricks.",
    },
    {
      question: "How is rating different from generating a password?",
      answer:
        "Generators create new secrets. Raters critique one you already typed. Use generation for new accounts and rating to audit old ones.",
    },
    {
      question: "Can strength tools see my password later?",
      answer:
        "Choose checkers that run locally and clear when you leave. Avoid pasting production passwords into untrusted sites.",
    },
    {
      question: "Why might two strength meters disagree?",
      answer:
        "They weigh patterns, dictionaries, and entropy differently. Treat any “strong” label as advisory.",
    },
    {
      question: "Do composition rules guarantee safety?",
      answer:
        "Requiring one uppercase and one number does not stop “Password1!”. Aim for unique, high-entropy secrets.",
    },
    {
      question: "Are passphrases scored like passwords?",
      answer:
        "Good meters reward length from multiple words. Avoid famous quotes and song lyrics.",
    },
    {
      question: "Should I reuse a strong password?",
      answer:
        "No. A leak on one site would expose the others. Use a manager to keep unique passwords.",
    },
    {
      question: "When is it time to change a password right away?",
      answer:
        "After a breach notice, phishing, or shared-device exposure. Update the manager entry and enable MFA.",
    },
    {
      question: "Can substitutions like @ for a fool checkers?",
      answer:
        "Often those patterns are in dictionaries. Randomness beats clever substitutions.",
    },
    {
      question: "How do spaces affect a score?",
      answer:
        "Spaces can enlarge the set for passphrases. They do not help if the phrase itself is common.",
    },
    {
      question: "Is “Strong” enough for banking?",
      answer:
        "Use a unique strong password plus multi-factor authentication. Strength alone is not a complete control.",
    },
    {
      question: "What is a practical workflow for better passwords?",
      answer:
        "Generate in a manager, never reuse, enable MFA, and only use online raters on throwaway test strings when possible.",
    }
  ],
  "how-to-find-dominant-colors": [
    {
      question: "How do I extract the main colors from a photo?",
      answer:
        "Upload the image, choose how many colors to return, and copy the hex values you want for a palette or brand board.",
    },
    {
      question: "Why might a small accent color be missing from the list?",
      answer:
        "Dominant-color tools rank by area and clustering. Tiny accents can fall below the cutoff—raise the color count or sample a crop.",
    },
    {
      question: "What does each percentage next to a color mean?",
      answer:
        "It estimates how much of the image that cluster covers. Treat it as approximate, not a lab measurement.",
    },
    {
      question: "Which image file types usually open?",
      answer:
        "Common web formats like JPEG, PNG, and WebP. Very large RAW files may need an export first.",
    },
    {
      question: "Can I copy hex codes into CSS from the result?",
      answer:
        "Yes—paste the hex into stylesheets, design tokens, or a contrast checker next.",
    },
    {
      question: "How many colors should I request for a logo?",
      answer:
        "Start with 3–5. Logos are simple; too many clusters add noise.",
    },
    {
      question: "Does lighting affect the dominant palette?",
      answer:
        "Strongly. Shadows and filters shift clusters. Sample a neutrally lit crop when brand accuracy matters.",
    },
    {
      question: "Will compression artifacts invent odd colors?",
      answer:
        "Heavy JPEG artifacts can. Prefer a cleaner source image when possible.",
    },
    {
      question: "Can I analyze a screenshot of a UI?",
      answer:
        "Yes—useful for matching an existing interface palette quickly.",
    },
    {
      question: "How do transparent PNGs behave?",
      answer:
        "Transparent pixels are usually ignored or treated as a backdrop depending on the analyzer. Check whether a checkerboard shows through.",
    },
    {
      question: "Should I flatten layered design files first?",
      answer:
        "Export a flat PNG or JPEG. Layered source files are not typical inputs.",
    },
    {
      question: "Can two similar blues merge into one swatch?",
      answer:
        "Clustering often merges near colors. Increase the requested count or crop to the region you care about.",
    },
    {
      question: "Is this a replacement for a spectrophotometer?",
      answer:
        "No. It is a fast web approximation for design work, not print lab calibration.",
    },
    {
      question: "How do I build a palette for slides from a photo?",
      answer:
        "Pull 3–4 dominant hexes, check contrast for text, then lock them as theme colors.",
    },
    {
      question: "Does the analyzer store my uploads?",
      answer:
        "Processing is meant for the session; download what you need before closing the tab.",
    },
    {
      question: "What if the photo is mostly grayscale?",
      answer:
        "You may get a short list of grays. Add a colorful crop if you need accent suggestions.",
    }
  ],
  "how-to-read-a-cron-expression": [
    {
      question: "How do I read a five-field cron schedule at a glance?",
      answer:
        "Map minute, hour, day-of-month, month, and day-of-week left to right. Asterisks mean “every” for that field.",
    },
    {
      question: "What does an asterisk mean in each field?",
      answer:
        "It matches every valid value—every minute, every hour, and so on—within that field’s range.",
    },
    {
      question: "How do I limit a cron job to Monday through Friday?",
      answer:
        "Set the day-of-week field to 1-5 (or MON-FRI where names are allowed) and keep other fields as needed.",
    },
    {
      question: "How do day-of-month and day-of-week fields interact?",
      answer:
        "Both constrain the calendar day. Some schedulers OR them when both are set—read your engine’s docs carefully.",
    },
    {
      question: "What does a step such as */15 mean in a field?",
      answer:
        "They mean every N units starting from the field’s minimum—for minutes, */15 is :00, :15, :30, :45.",
    },
    {
      question: "Why avoid scheduling everything at midnight?",
      answer:
        "Many jobs collide at 00:00, causing load spikes. Stagger off-peak minutes when you can.",
    },
    {
      question: "Which timezone does a crontab schedule follow?",
      answer:
        "It uses the host timezone unless the platform documents UTC. Confirm before trusting “9 AM” labels.",
    },
    {
      question: "Can I test a cron expression before deploying?",
      answer:
        "Yes—use a generator or explainer, then dry-run in staging. Watch the first few live fires.",
    },
    {
      question: "How are comma lists and hyphen ranges written in cron?",
      answer:
        "Lists use commas (1,15); ranges use hyphens (1-5). You can combine them with steps where supported.",
    },
    {
      question: "Why was a six-field expression rejected?",
      answer:
        "Classic Unix cron has five fields; a leading seconds field is non-standard. Match the dialect your runner expects.",
    },
    {
      question: "What happens if a job runs longer than its interval?",
      answer:
        "Overlapping runs can pile up. Use locks or skip-if-running flags in the job wrapper.",
    },
    {
      question: "Where else do cron-like schedules show up besides crontab?",
      answer:
        "No—CI schedulers, Kubernetes CronJobs, and cloud schedulers reuse similar syntax with small dialect differences.",
    },
    {
      question: "Where should secrets live if a job is launched by cron?",
      answer:
        "No. Load secrets from the environment or a vault so process lists and logs do not leak them.",
    },
    {
      question: "What five-field pattern fires daily at 09:00?",
      answer:
        "Use 0 9 * * * for minute 0 of hour 9 every day, then confirm timezone.",
    },
    {
      question: "What does Sunday as 7 mean versus 0?",
      answer:
        "Some dialects allow both 0 and 7 for Sunday. Prefer the form your scheduler documents.",
    },
    {
      question: "Does installing a crontab change anything until the daemon reloads?",
      answer:
        "The cron daemon picks up crontab edits on its schedule. Verify with a harmless test job.",
    }
  ],
  "how-to-read-a-unix-timestamp": [
    {
      question: "How do I convert a Unix timestamp to a readable date?",
      answer:
        "Paste the number into a converter, confirm seconds versus milliseconds, and read the local or UTC breakdown.",
    },
    {
      question: "What is the Unix epoch?",
      answer:
        "It is 1970-01-01T00:00:00Z—the zero point for Unix time counting.",
    },
    {
      question: "How can I tell seconds from milliseconds?",
      answer:
        "Second stamps are ~10 digits today; millisecond stamps are ~13. Reusing the same digits in the wrong unit lands centuries off.",
    },
    {
      question: "Does converting a timestamp change the instant?",
      answer:
        "No. You only change how the same instant is displayed across time zones.",
    },
    {
      question: "Why do seconds and milliseconds disagree when I reuse digits?",
      answer:
        "Interpreting a 13-digit value as seconds shoots far into the future. Match the unit the API documented.",
    },
    {
      question: "What inputs are usually rejected?",
      answer:
        "Non-numeric text, empty values, or numbers outside the supported range.",
    },
    {
      question: "Should logs store UTC or local time?",
      answer:
        "Store UTC (or Unix seconds) and render local time in the UI to avoid DST ambiguity.",
    },
    {
      question: "How do leap seconds affect Unix time?",
      answer:
        "Most systems smear or ignore leap seconds. Do not expect civil leap-second exactness from Unix stamps.",
    },
    {
      question: "Can I convert ISO-8601 strings the other way?",
      answer:
        "Yes—parsers turn ISO strings into timestamps. Keep the offset (Z or ±HH:MM) intact.",
    },
    {
      question: "Why might two machines show different local clocks for one stamp?",
      answer:
        "Time zone settings differ. The underlying UTC instant is the same.",
    },
    {
      question: "What is a negative Unix timestamp?",
      answer:
        "It counts seconds before 1970. Support varies—confirm before relying on it.",
    },
    {
      question: "Do databases store timestamps as integers?",
      answer:
        "Often as epoch seconds/millis or as typed timestamp columns. Know which your schema uses.",
    },
    {
      question: "How do I compare two events across time zones?",
      answer:
        "Compare their UTC instants or Unix values, not their wall-clock strings.",
    },
    {
      question: "Why does “today at midnight” jump after DST changes?",
      answer:
        "Local midnight is not a fixed UTC offset year-round in DST regions.",
    },
    {
      question: "Can spreadsheets corrupt large millisecond values?",
      answer:
        "Yes—precision limits can round them. Keep stamps as text or use proper date types.",
    },
    {
      question: "Is the converter storing the times I paste?",
      answer:
        "Conversion stays in the page session for your review.",
    }
  ],
  "how-to-rewrite-stock-phrasing": [
    {
      question: "How do I soften AI-sounding stock phrases in a draft?",
      answer:
        "Paste the text, run a humanize or rewrite pass, then manually restore any precise claims the pass blurred.",
    },
    {
      question: "Will a rewrite button make the draft pass every AI detector?",
      answer:
        "No. Detectors disagree and evolve. Aim for clearer human voice, not evasion.",
    },
    {
      question: "When should I rewrite myself instead of using a helper?",
      answer:
        "When the topic needs your lived detail, confidential nuance, or a voice only you can supply.",
    },
    {
      question: "Why might the next sentence start lowercase after a rewrite?",
      answer:
        "Some passes break sentence boundaries. Capitalize and fix punctuation in a quick proofread.",
    },
    {
      question: "Does a repeated sentence always get removed?",
      answer:
        "Not always. Deduplicate obvious loops yourself if the tool leaves them.",
    },
    {
      question: "Can I rewrite stock phrasing in just one paragraph?",
      answer:
        "Yes—process that paragraph alone so the rest of the structure stays untouched.",
    },
    {
      question: "Might a rewrite pass alter product names or specs?",
      answer:
        "It might. Lock product names and specs in a quick pass afterward.",
    },
    {
      question: "Does a softened draft count as original authorship?",
      answer:
        "No. It is an edit of existing prose. You remain responsible for accuracy and attribution.",
    },
    {
      question: "Why does a rewrite sometimes sound flatter?",
      answer:
        "Smoothing hedges can remove energy. Add concrete examples back in.",
    },
    {
      question: "Does a second rewrite pass usually help?",
      answer:
        "Often it just drifts. Prefer one pass plus manual edits.",
    },
    {
      question: "Can the helper invent facts I never wrote?",
      answer:
        "It should not, but verify every number and proper noun.",
    },
    {
      question: "Should quoted citations be left alone during a rewrite?",
      answer:
        "Leave quotations intact. Rewrite surrounding prose only.",
    },
    {
      question: "How does softening AI cadence differ from paraphrasing?",
      answer:
        "Paraphrase aims for new wording of the same meaning; humanize targets stock AI cadence. Overlap exists.",
    },
    {
      question: "Does the same workflow work for emails and LinkedIn posts?",
      answer:
        "Yes for tone cleanup. Keep personal details you alone would know.",
    },
    {
      question: "How can I soften stock phrasing without an online helper?",
      answer:
        "Read aloud, cut filler transitions, and swap generic claims for specifics from your notes.",
    },
    {
      question: "Does the draft get kept after I close the tab?",
      answer:
        "Keep your own copy. Do not rely on the page as long-term storage.",
    }
  ],
  "how-to-shorten-an-article": [
    {
      question: "How do I cut word count without dropping the thesis?",
      answer:
        "Compress in stages, then check that every key claim and citation still appears before you publish.",
    },
    {
      question: "Does using Shorten article upload my draft?",
      answer:
        "Follow the privacy note on the page—local passes stay put; optional AI shorten may send text to a model.",
    },
    {
      question: "Will a shorter version always keep every fact?",
      answer:
        "No. Aggressive compression can omit details. Diff against the original for must-keep facts.",
    },
    {
      question: "Is the article saved on a server after shortening?",
      answer:
        "Treat the session as temporary. Copy the result into your CMS or files.",
    },
    {
      question: "Should I shorten before or after peer review?",
      answer:
        "Review for accuracy first, then shorten so reviewers see the full evidence trail.",
    },
    {
      question: "How do I preserve headings while cutting fluff?",
      answer:
        "Keep the outline, compress paragraph bodies, and restore any heading that vanished.",
    },
    {
      question: "Can I set a hard maximum word count?",
      answer:
        "Use channel limits as targets. Iterate compression levels until you are under the cap.",
    },
    {
      question: "What if the short version changes my conclusion?",
      answer:
        "Reject that output. Re-run milder compression or edit by hand to restore the conclusion.",
    },
    {
      question: "Do figures and captions survive compression?",
      answer:
        "Caption text may shrink or vanish. Reattach captions from the source draft.",
    },
    {
      question: "Is shortening the same as summarizing for executives?",
      answer:
        "Related but not identical. Executive summaries may reorder priorities; compression usually keeps sequence.",
    },
    {
      question: "How should quotes be handled when cutting length?",
      answer:
        "Keep short essential quotes; paraphrase the rest with attribution.",
    },
    {
      question: "Can SEO keyword density fall too far?",
      answer:
        "Yes. After compressing, reintroduce primary phrases naturally where missing.",
    },
    {
      question: "What is a safe workflow for newsroom edits?",
      answer:
        "Compress → fact-check → legal/quote check → headline pass.",
    },
    {
      question: "Does bullet-heavy content compress cleanly?",
      answer:
        "Lists may merge into prose. Rebuild bullets if scannability matters.",
    },
    {
      question: "Should I tell readers the piece was shortened?",
      answer:
        "For transparency in some formats (abridged), yes. For routine edits, usually unnecessary.",
    },
    {
      question: "How do I compare the long and short drafts quickly?",
      answer:
        "Use a text diff tool side by side, focusing on deleted numbers and names.",
    }
  ],
  "how-to-turn-a-word-document-into-a-pdf": [
    {
      question: "How do I convert a Word file to PDF in the browser?",
      answer:
        "Choose the .docx, wait for conversion, then download the PDF and spot-check layout before sharing.",
    },
    {
      question: "What happens to tables during conversion?",
      answer:
        "Tables usually carry over, but column widths can shift. Complex nested tables need a visual check.",
    },
    {
      question: "What happens to pictures in the document?",
      answer:
        "Images embed in the PDF when conversion succeeds. Very large images may increase file size.",
    },
    {
      question: "Why do some glyphs turn into replacement characters?",
      answer:
        "Missing fonts or encoding issues can substitute glyphs. Embed fonts in Word or use common Unicode fonts.",
    },
    {
      question: "Do hard page breaks in Word become new PDF pages?",
      answer:
        "Hard page breaks typically do. Soft layout differences can still move content across pages.",
    },
    {
      question: "How close will the PDF layout be to Word?",
      answer:
        "Close for simple docs; exact pixel parity is not guaranteed across engines.",
    },
    {
      question: "How well do legacy .doc files convert compared with .docx?",
      answer:
        "Support is weaker for legacy .doc. Re-save as .docx when conversion fails.",
    },
    {
      question: "Will the PDF carry the fonts my document used?",
      answer:
        "Depends on the converter. If text looks substituted, embed fonts before converting.",
    },
    {
      question: "Is batch conversion of many Word files supported?",
      answer:
        "Batch support varies. Convert one-by-one when quality checks matter.",
    },
    {
      question: "Do I need a desktop Word install for browser conversion?",
      answer:
        "Browser converters do not require a local Word install.",
    },
    {
      question: "What happens to comments and tracked changes?",
      answer:
        "Often they are omitted or flattened. Accept or reject changes in Word first if you need a clean PDF.",
    },
    {
      question: "Can this flow add a PDF open password?",
      answer:
        "If the tool lacks that control, protect the PDF in a dedicated PDF utility afterward.",
    },
    {
      question: "Why might the PDF file size differ from the Word file?",
      answer:
        "Image recompression and font embedding change size either way.",
    },
    {
      question: "Will headers and footers still appear after converting?",
      answer:
        "Usually yes, but margins can differ. Check first and last pages.",
    },
    {
      question: "Is the PDF a good place for further deep edits?",
      answer:
        "PDFs are poorer for deep edits. Keep the Word source as the master.",
    },
    {
      question: "What should I try when Word-to-PDF conversion fails?",
      answer:
        "Re-export a simpler .docx, remove broken fields, or split a huge file, then try again.",
    }
  ],
  "how-to-write-a-box-shadow": [
    {
      question: "How do I create a CSS box-shadow from offsets and blur?",
      answer:
        "Set x/y offsets, blur, optional spread and color, then copy the box-shadow declaration into your stylesheet.",
    },
    {
      question: "What does blur radius control on a shadow?",
      answer:
        "Larger blur softens and widens the shadow. Zero blur makes a hard edge.",
    },
    {
      question: "What does spread radius add?",
      answer:
        "Spread expands or contracts the shadow shape before blur. Positive spread grows it; negative shrinks it.",
    },
    {
      question: "How do X and Y offsets shift a box shadow?",
      answer:
        "Positive x moves the shadow right; positive y moves it down. Negatives go the other way.",
    },
    {
      question: "When is an inset box-shadow the better choice?",
      answer:
        "For pressed buttons, wells, or inner glows. Inset draws the shadow inside the border box.",
    },
    {
      question: "Can I stack several layered shadows on one element?",
      answer:
        "Yes—comma-separate multiple box-shadow values for depth.",
    },
    {
      question: "Why might the generator show whole pixels?",
      answer:
        "Some UIs round for preview clarity. You can edit decimals in the final CSS if needed.",
    },
    {
      question: "How can I style a soft elevated card shadow?",
      answer:
        "Use small offsets, medium blur, slight spread, and a low-opacity neutral color.",
    },
    {
      question: "Does adding a box-shadow grow the element’s layout box?",
      answer:
        "No—shadows paint outside without changing layout flow (unlike outline in some cases).",
    },
    {
      question: "Is it practical to animate box-shadow in CSS?",
      answer:
        "Yes with transitions or keyframes, but heavy shadows can be costly—test on mobile.",
    },
    {
      question: "How is opacity applied in the shadow color?",
      answer:
        "Use rgba()/hsla() alpha, or modern rgb() with alpha, so the shadow can sit lightly on any background.",
    },
    {
      question: "Do box shadows curve with rounded corners?",
      answer:
        "Yes—box-shadow follows the curve of the border box.",
    },
    {
      question: "Which colors work best for a neutral drop shadow?",
      answer:
        "Soft black or gray with low alpha. Colored shadows can match brand accents sparingly.",
    },
    {
      question: "Will the generator preview look identical on every page element?",
      answer:
        "Previews approximate one box. Parent backgrounds and filters can change perception.",
    },
    {
      question: "Does copying box-shadow CSS send it to a server?",
      answer:
        "Generation stays local; you paste the CSS into your own project.",
    },
    {
      question: "How do I clear a box-shadow from an element?",
      answer:
        "Set box-shadow: none; or delete the declaration.",
    }
  ],
  "how-to-write-a-css-gradient": [
    {
      question: "How do I build a linear gradient for a background?",
      answer:
        "Pick two or more color stops, set direction or angle, then copy the linear-gradient(...) into background-image.",
    },
    {
      question: "How do linear gradients differ from radial ones?",
      answer:
        "Linear blends along a line; radial blends outward from a center. Choose based on the shape you want.",
    },
    {
      question: "Can gradient stops include alpha transparency?",
      answer:
        "Yes—use stops with alpha so the underlying background shows through.",
    },
    {
      question: "How can text be filled with a CSS gradient?",
      answer:
        "Clip a background gradient to the text (background-clip: text) with transparent fill where supported.",
    },
    {
      question: "When are CSS gradients preferable to gradient image files?",
      answer:
        "Often yes—smaller, resolution-independent, and easy to theme. Images still help for complex artwork.",
    },
    {
      question: "Does the generator support Tailwind-style output?",
      answer:
        "If a Tailwind mode exists, copy that class-friendly snippet; otherwise adapt the raw CSS.",
    },
    {
      question: "Why might the CSS panel stay empty at first?",
      answer:
        "The tool needs at least two valid colors to emit a gradient function.",
    },
    {
      question: "Does the writer support conic-gradient output?",
      answer:
        "When the mode is offered, yes—conic sweeps around a center. Otherwise approximate with other types.",
    },
    {
      question: "How are fractional stop percentages handled?",
      answer:
        "They are kept or rounded per the UI. Fine positions help smooth multi-stop blends.",
    },
    {
      question: "Do I still need vendor prefixes on modern gradient CSS?",
      answer:
        "Modern syntax is widely supported. Add prefixes only if your browser targets require them.",
    },
    {
      question: "How many color stops should I use?",
      answer:
        "Two for simple fades; three to five for richer blends. Too many can look muddy.",
    },
    {
      question: "Can I repeat a gradient?",
      answer:
        "repeating-linear-gradient / repeating-radial-gradient tile the pattern—useful for stripes.",
    },
    {
      question: "How do I mirror a gradient direction quickly?",
      answer:
        "Invert the angle or swap to the opposite keyword (e.g., to left vs to right).",
    },
    {
      question: "Do gradients affect performance?",
      answer:
        "Usually cheap versus large images. Huge animated gradients can still cost GPU time.",
    },
    {
      question: "Should brand colors use exact hex stops?",
      answer:
        "Yes—paste brand tokens so marketing stays consistent across pages.",
    },
    {
      question: "Is gradient CSS generated on a server here?",
      answer:
        "Stop editing and CSS assembly run in the browser session.",
    }
  ],
  "how-to-write-a-gitignore-file": [
    {
      question: "How do I generate a starter .gitignore for my stack?",
      answer:
        "Select language/OS templates, add custom patterns, then download or copy the file into the repo root.",
    },
    {
      question: "What is the purpose of a .gitignore in a repo?",
      answer:
        "It tells Git which untracked paths to skip so build junk and secrets stay out of commits.",
    },
    {
      question: "Which directory should hold the main .gitignore?",
      answer:
        "Usually at the repository root. Nested ignore files can apply to subfolders.",
    },
    {
      question: "How do I stop Git from tracking node_modules?",
      answer:
        "Add a node_modules/ pattern (from a Node template or custom line) and commit the .gitignore.",
    },
    {
      question: "How do leading and trailing slashes change a gitignore pattern?",
      answer:
        "A leading slash anchors to the file’s directory; a trailing slash marks a directory.",
    },
    {
      question: "How do negation rules bring a file back after a broad ignore?",
      answer:
        "Yes with a negation pattern starting with !—order matters.",
    },
    {
      question: "Why does an already-tracked file ignore the new gitignore rule?",
      answer:
        "Ignore rules do not untrack files already in the index. Remove them from the index while keeping the working copy.",
    },
    {
      question: "Should .env secrets be listed in .gitignore?",
      answer:
        "Yes in almost every app repo. Commit an .env.example without secrets instead.",
    },
    {
      question: "How do I ignore .DS_Store and similar OS junk?",
      answer:
        "Include macOS/Windows/Linux templates so .DS_Store and Thumbs.db stay out.",
    },
    {
      question: "Can a single gitignore combine several language templates?",
      answer:
        "Yes—combine templates, then prune patterns you do not need.",
    },
    {
      question: "Can gitignore patterns use wildcard globs?",
      answer:
        "Yes—*, **, and character classes work per gitignore rules.",
    },
    {
      question: "What kinds of paths are a bad fit for .gitignore?",
      answer:
        "Do not use it to hide files that must be shared. Also avoid ignoring the ignore file itself by mistake.",
    },
    {
      question: "How do I ignore every file with a given extension?",
      answer:
        "Use a pattern like *.log or *.tmp at the appropriate directory scope.",
    },
    {
      question: "How does .gitignore differ from .git/info/exclude?",
      answer:
        "No—exclude is local to your clone and not committed. Prefer .gitignore for team rules.",
    },
    {
      question: "Does generating a gitignore also create a Git commit?",
      answer:
        "No. You still add and commit .gitignore yourself.",
    },
    {
      question: "How are comments written inside a gitignore file?",
      answer:
        "Start a line with # for a comment.",
    }
  ],
  "how-to-write-an-image-prompt": [
    {
      question: "How do I write a strong text-to-image prompt?",
      answer:
        "Name the subject, setting, style, lighting, lens/camera, mood, and aspect ratio. Keep one clear focal idea.",
    },
    {
      question: "What is a negative prompt used for?",
      answer:
        "It lists things to avoid—extra limbs, watermarks, blurry text—when the model supports negatives.",
    },
    {
      question: "Why is there no image preview on the prompt writer?",
      answer:
        "It builds prompt text for you to paste into an image model elsewhere.",
    },
    {
      question: "Does using Build prompt send the brief to a server?",
      answer:
        "Local assembly stays in the browser; follow any AI-assist privacy note if present.",
    },
    {
      question: "Can a negative prompt alone describe the image?",
      answer:
        "You still need a positive subject prompt. Negatives alone do not describe the image.",
    },
    {
      question: "Should I mention camera gear in the prompt?",
      answer:
        "Optional—lens and shot type can steer realism. Skip them for pure illustration styles.",
    },
    {
      question: "How long should an image prompt be?",
      answer:
        "Long enough to constrain the scene, short enough to stay coherent. Cut conflicting adjectives.",
    },
    {
      question: "Can I reuse a prompt template across subjects?",
      answer:
        "Yes—keep slots for subject, style, and lighting, then swap the subject each time.",
    },
    {
      question: "Do different models read the same prompt identically?",
      answer:
        "No. Weights and defaults differ—tweak per model after the first tries.",
    },
    {
      question: "How do I ask for a specific aspect ratio?",
      answer:
        "State it in the prompt and set the generator’s ratio control to match when available.",
    },
    {
      question: "Should brand logos appear in AI images?",
      answer:
        "Avoid trademarked logos unless you have rights and the model policy allows them.",
    },
    {
      question: "How do I reduce random text in generated images?",
      answer:
        "Add “no text, no watermark” to negatives and avoid asking for fine lettering.",
    },
    {
      question: "Can I describe multiple subjects clearly?",
      answer:
        "Yes—specify counts and positions (“two cats on a sofa, left and right”). Ambiguity breeds merges.",
    },
    {
      question: "Is seed control part of the prompt?",
      answer:
        "Seeds are usually UI settings, not prompt words. Reuse seeds in the model for consistency.",
    },
    {
      question: "How should I iterate when results miss?",
      answer:
        "Change one variable at a time—style, lighting, or composition—then compare.",
    },
    {
      question: "Are image prompts stored after the tab closes?",
      answer:
        "Keep your own copy; treat the session as temporary.",
    }
  ],
  "how-to-write-meta-tags": [
    {
      question: "How do I generate title and description meta tags?",
      answer:
        "Enter title, description, and optional social fields, then copy the HTML into your page head.",
    },
    {
      question: "What length works well for a meta description?",
      answer:
        "Aim roughly 140–160 characters for comfort. Search engines may rewrite snippets anyway.",
    },
    {
      question: "Should the HTML title match the visible H1?",
      answer:
        "They should align in topic, not always verbatim. Titles can include brand; H1 can be more specific.",
    },
    {
      question: "What does a canonical link tag do?",
      answer:
        "It points to the preferred URL for duplicate or parameterized pages so ranking signals consolidate.",
    },
    {
      question: "Do indexable pages need their own titles and descriptions?",
      answer:
        "Yes for indexable pages. Duplicated titles/descriptions waste snippet space.",
    },
    {
      question: "Which robots meta values are used most often?",
      answer:
        "index,follow for normal pages; noindex for thin or private utilities when appropriate.",
    },
    {
      question: "Do Open Graph tags make a normal meta description unnecessary?",
      answer:
        "No—they complement them for social previews. Keep both when you care about sharing.",
    },
    {
      question: "Can Twitter Card meta be produced alongside Open Graph?",
      answer:
        "When fields are provided, yes—card type, title, description, and image.",
    },
    {
      question: "Why might the generator reject a character in the title field?",
      answer:
        "Some generators block control characters or overly long strings. Simplify punctuation and length.",
    },
    {
      question: "Does clicking generate deploy meta tags live?",
      answer:
        "No. You must paste or deploy the markup yourself.",
    },
    {
      question: "Where should the brand name sit in an HTML title?",
      answer:
        "Often at the end after a separator, unless brand recognition should lead.",
    },
    {
      question: "Do meta keywords still help in Google Search?",
      answer:
        "Generally ignored by Google. Focus on titles, descriptions, and content quality.",
    },
    {
      question: "What does the og:url property declare?",
      answer:
        "It declares the canonical social URL for the share preview.",
    },
    {
      question: "Should each language version get its own meta tags?",
      answer:
        "Yes—localize titles/descriptions and use hreflang alongside correct language URLs.",
    },
    {
      question: "How can I verify meta and social tags on the live page?",
      answer:
        "Use a social debugger or rich-result tester, and view source on the live URL.",
    },
    {
      question: "When should utility pages use noindex?",
      answer:
        "Often yes if they add little unique value and dilute the crawl budget.",
    }
  ],
  "what-a-writing-pattern-check-can-tell-you": [
    {
      question: "What can a writing-pattern check reveal about a draft?",
      answer:
        "It highlights even pacing, stock transitions, and low variation—clues to revise, not proof of who wrote it.",
    },
    {
      question: "Why is there no single guilt score on careful tools?",
      answer:
        "A fake percent overstates certainty. Qualitative pattern notes are more honest.",
    },
    {
      question: "Can polished human prose look statistically even?",
      answer:
        "Yes. Formal editing can resemble model regularity. Read flags as revision prompts.",
    },
    {
      question: "Does an optional AI analyze step see different text than the local check?",
      answer:
        "It may use another model pass. Compare outputs and trust your own judgment on facts.",
    },
    {
      question: "What happens to the draft after you close the tab?",
      answer:
        "Keep your own copy. Do not treat the page as archival storage.",
    },
    {
      question: "How should teachers use pattern checks ethically?",
      answer:
        "As conversation starters with process evidence—not as sole academic integrity proof.",
    },
    {
      question: "What edits reduce “AI-like” cadence?",
      answer:
        "Vary sentence length, swap generic transitions, and add concrete specifics only you know.",
    },
    {
      question: "Should confidential client text go into online checkers?",
      answer:
        "Prefer redacted samples. Read privacy notes before pasting sensitive material.",
    },
    {
      question: "How do pattern checks differ from plagiarism scanners?",
      answer:
        "Plagiarism matches known sources; pattern tools estimate stylistic regularity.",
    },
    {
      question: "Can I analyze one section at a time?",
      answer:
        "Yes—narrow pastes show which parts feel most templated.",
    },
    {
      question: "Do bullet lists skew pattern readings?",
      answer:
        "They can. Check prose bodies separately from dense lists or tables.",
    },
    {
      question: "Is a “human” label certification?",
      answer:
        "No. Labels are heuristics that can miss edited machine text and flag humans.",
    },
    {
      question: "How should multilingual drafts be treated?",
      answer:
        "English-trained heuristics may misread other languages—use bilingual review.",
    },
    {
      question: "What process artifacts help after a flag?",
      answer:
        "Outlines, notes, version history, and cited sources show authentic work better than any score.",
    },
    {
      question: "Can code mixed with prose confuse a checker?",
      answer:
        "Yes. Separate code blocks from narrative before judging style.",
    },
    {
      question: "When should I stop checking and just revise?",
      answer:
        "When flags repeat the same advice—apply it once thoroughly, then proof for meaning.",
    }
  ],
  "what-is-a-uuid": [
    {
      question: "What is a UUID used for in applications?",
      answer:
        "It is a 128-bit identifier for records, sessions, or resources when you need uniqueness without a central counter.",
    },
    {
      question: "What does UUID version 4 mean in day-to-day use?",
      answer:
        "Version 4 fills most bits randomly (with version/variant bits set), which is the common “random UUID” people mean.",
    },
    {
      question: "Do freshly generated UUID v4 values arrive in order?",
      answer:
        "No. Random v4 values do not increase in order, unlike some time-based versions.",
    },
    {
      question: "Can two independently minted UUID v4 values collide?",
      answer:
        "It is theoretically possible but astronomically unlikely for honest random generators.",
    },
    {
      question: "Should I treat a UUID like a password to protect?",
      answer:
        "Not by itself—UUIDs identify; they do not authenticate. Do not treat them as passwords.",
    },
    {
      question: "How is a UUID usually written as readable text?",
      answer:
        "As eight-four-four-four-twelve hexadecimal groups, e.g. 123e4567-e89b-42d3-a456-426614174000.",
    },
    {
      question: "How does a UUID compare with an auto-increment primary key?",
      answer:
        "Auto-increment is short and ordered but needs a central allocator; UUIDs are wider and easy to mint offline.",
    },
    {
      question: "Should new public APIs prefer UUID v1 or v4?",
      answer:
        "v4 is the usual default for random ids. Prefer specialized versions only when you need their properties.",
    },
    {
      question: "Can UUIDs be used as safe file names?",
      answer:
        "Yes, though some filesystems dislike uppercase or require stripping braces. Stick to lowercase hex with hyphens.",
    },
    {
      question: "Are hyphenated UUIDs safe to put in URL paths?",
      answer:
        "Yes when hex/hyphen form is used. URL-encode if your format includes braces or other punctuation.",
    },
    {
      question: "How many UUIDs can I mint in one click here?",
      answer:
        "Stay within the on-page control (bulk limits apply). Generate again if you need more batches.",
    },
    {
      question: "Do freshly created UUIDs leave my browser?",
      answer:
        "Generation is intended to stay in the browser; nothing needs a server round-trip.",
    },
    {
      question: "What is the variant nibble inside a UUID for?",
      answer:
        "It marks the RFC layout family so parsers know how to interpret the bits.",
    },
    {
      question: "Can I sort UUID v4 values by creation time?",
      answer:
        "No—random order. Use ULID/UUIDv7-style schemes when sortable ids matter.",
    },
    {
      question: "Should every database primary key be a UUID?",
      answer:
        "They help distribution and merges, but indexes are wider. Choose based on scale and ops needs.",
    },
    {
      question: "How do I check that a string is a valid UUID?",
      answer:
        "Check length, hex characters, hyphen positions, and version/variant nibbles when strict.",
    }
  ],
  "how-a-loan-payment-is-calculated": [
    {
      question: "How do lenders compute a fixed monthly loan payment?",
      answer:
        "They amortize principal and interest over the term so each payment is level while the interest/principal split shifts.",
    },
    {
      question: "Which fields does a payment estimate require?",
      answer:
        "Loan amount, interest rate, and term—plus fees if you model them separately.",
    },
    {
      question: "How does stretching the term change the monthly bill?",
      answer:
        "Payments usually fall while total interest rises because you borrow the money longer.",
    },
    {
      question: "What does amortization mean for borrowers?",
      answer:
        "It is the schedule that pays interest due and gradually reduces principal to zero by the final payment.",
    },
    {
      question: "Does a basic P&I calculator fold in taxes and insurance?",
      answer:
        "Often not—those escrow items are separate from pure principal-and-interest math.",
    },
    {
      question: "How do voluntary extra payments change payoff timing?",
      answer:
        "Extra principal cuts interest and can shorten the term; confirm the lender applies it to principal.",
    },
    {
      question: "How do fixed-rate and variable-rate loans differ?",
      answer:
        "Fixed stays set; variable can move with an index, changing future payments.",
    },
    {
      question: "Should the rate field be APR or the note rate?",
      answer:
        "Use the rate the formula expects—often the nominal note rate—while APR is a broader cost measure.",
    },
    {
      question: "Can I simulate a promotional zero-interest installment?",
      answer:
        "Yes by setting rate to 0; payment then splits principal evenly across months.",
    },
    {
      question: "Why does early interest take most of each payment?",
      answer:
        "Interest is charged on the current balance, which is highest at the start.",
    },
    {
      question: "How trustworthy is a web loan payment sketch?",
      answer:
        "Good for education; lenders may round differently or add fees not in the toy model.",
    },
    {
      question: "Can one amortizing formula cover auto and personal loans?",
      answer:
        "Yes for simple amortizing loans. Leases and revolving credit use other formulas.",
    },
    {
      question: "What if I deliberately round each payment upward?",
      answer:
        "You may finish slightly early and pay a bit less interest; the last payment adjusts.",
    },
    {
      question: "Does paying every other week change total interest?",
      answer:
        "Paying half more often can equal an extra monthly payment per year—model it explicitly.",
    },
    {
      question: "How do financed origination fees show up in the payment?",
      answer:
        "If financed into principal they raise the balance; if paid upfront they may not change P&I.",
    }
  ],
  "how-a-mortgage-payment-is-estimated": [
    {
      question: "How do I ballpark a monthly mortgage P&I bill?",
      answer:
        "Enter home price or loan amount, rate, and term; read the amortizing payment before taxes and insurance.",
    },
    {
      question: "What usually makes up a full monthly housing payment?",
      answer:
        "Principal, interest, and frequently taxes, insurance, and PMI when required.",
    },
    {
      question: "How does putting more money down change the payment?",
      answer:
        "It lowers the loan amount (and may remove PMI), so the monthly P&I drops.",
    },
    {
      question: "Which mortgage term lengths should I compare first?",
      answer:
        "Compare 30-year and 15-year side by side for payment vs total interest tradeoffs.",
    },
    {
      question: "How do optional principal prepayments help a mortgage?",
      answer:
        "They reduce balance faster, cut interest, and can shorten the schedule when applied correctly.",
    },
    {
      question: "Is the APR figure the same rate the formula wants?",
      answer:
        "Not always—APR includes certain fees. The amortizing formula usually wants the note rate.",
    },
    {
      question: "Can this simple estimate model an adjustable-rate loan?",
      answer:
        "Simple tools assume a fixed rate. ARMs need rate-reset assumptions beyond a single payment.",
    },
    {
      question: "Why does interest dominate the earliest mortgage payments?",
      answer:
        "The balance is largest then, so interest takes most of the fixed payment.",
    },
    {
      question: "How close is an online mortgage sketch to a real quote?",
      answer:
        "Useful for ballparks; closing disclosures and lender quotes are authoritative.",
    },
    {
      question: "What does PMI mean and when is it charged?",
      answer:
        "Private mortgage insurance often applies when the down payment is small; it can drop after enough equity.",
    },
    {
      question: "Can investors use the same P&I estimate for rentals?",
      answer:
        "As a rough P&I sketch yes; investor products may price risk differently.",
    },
    {
      question: "How do mortgage discount points change the payment?",
      answer:
        "Points buy a lower rate (for a fee), which can reduce the monthly P&I if you keep the loan long enough.",
    },
    {
      question: "What if I round each mortgage payment up a few dollars?",
      answer:
        "Extra dollars typically hit principal and trim interest over time.",
    },
    {
      question: "Does a biweekly mortgage program change lifetime totals?",
      answer:
        "It can create an extra full payment each year—confirm with your servicer’s program rules.",
    },
    {
      question: "Are property taxes baked into the headline P&I number?",
      answer:
        "Only if you explicitly add tax/insurance fields; many quotes show P&I alone.",
    }
  ],
  "how-long-to-pay-off-a-credit-card": [
    {
      question: "How do I project months to clear a card balance?",
      answer:
        "Enter balance, APR, and planned monthly payment; read months and total interest from the payoff model.",
    },
    {
      question: "What payment finishes a card by a chosen deadline?",
      answer:
        "Solve for the payment that amortizes the balance by your deadline at the given APR.",
    },
    {
      question: "Why is relying on the card minimum risky?",
      answer:
        "It barely covers interest, so payoff stretches for years and interest piles up.",
    },
    {
      question: "Does statement compounding change the payoff sketch?",
      answer:
        "Most consumer estimates assume monthly compounding aligned with statements—close enough for planning.",
    },
    {
      question: "How do fresh purchases disrupt a payoff plan?",
      answer:
        "New charges reset the plan; freeze spending or include ongoing purchases in the model.",
    },
    {
      question: "Should fees be added into the starting balance field?",
      answer:
        "Yes—late fees and similar increase what you owe and should be in the balance field.",
    },
    {
      question: "What if each month I send only the interest portion?",
      answer:
        "The principal never falls, so you never finish and interest continues forever.",
    },
    {
      question: "Can I sketch a temporary 0% intro APR window?",
      answer:
        "Set APR to 0 for that period, then switch to the go-to rate afterward in a staged plan.",
    },
    {
      question: "How much total interest will a plan cost me?",
      answer:
        "Payoff tools show cumulative interest; compare scenarios before choosing a payment.",
    },
    {
      question: "Does paying the card every two weeks help much?",
      answer:
        "Paying sooner reduces average balance slightly; the bigger lever is raising the total monthly amount.",
    },
    {
      question: "How do balance-transfer offers change the math?",
      answer:
        "A lower promo APR can help if fees do not erase the savings—model fee + new rate.",
    },
    {
      question: "Why do real-world payoff dates often slip?",
      answer:
        "Missed payments, new purchases, rate changes, or fees not in the original estimate.",
    },
    {
      question: "Can one screen pay off several cards together?",
      answer:
        "Usually you model one balance; avalanche/snowball methods prioritize across cards manually.",
    },
    {
      question: "What if a planned payment cannot cover interest charges?",
      answer:
        "The balance grows—raise the payment above interest before a payoff date exists.",
    },
    {
      question: "Does the payoff sketch contact my card issuer?",
      answer:
        "No—it is a local projection, not an account action.",
    }
  ],
  "how-to-add-sales-tax": [
    {
      question: "How do I add sales tax onto a pre-tax price?",
      answer:
        "Multiply price by the rate percent, divide by 100 for tax, then add tax to the price for the total.",
    },
    {
      question: "How do I recover the pre-tax amount from a tax-inclusive total?",
      answer:
        "Divide the total by (1 + rate as a decimal) to back out the net price.",
    },
    {
      question: "Does this page look up my local sales-tax rate?",
      answer:
        "No—you enter the rate that applies to the purchase.",
    },
    {
      question: "May the price field be a negative number?",
      answer:
        "No meaningful retail price is negative; use positive amounts.",
    },
    {
      question: "Is restaurant tip part of sales-tax math?",
      answer:
        "Tips are separate from sales tax unless a local rule says otherwise.",
    },
    {
      question: "Why omit currency symbols from the inputs?",
      answer:
        "Numbers are unitless currency amounts; add $, €, etc. when you write receipts.",
    },
    {
      question: "Can I enter a zero percent tax rate?",
      answer:
        "Yes—for untaxed items the tax is 0 and total equals the price.",
    },
    {
      question: "Where is the sales-tax arithmetic computed?",
      answer:
        "In the browser session on the page.",
    },
    {
      question: "Should shipping charges be taxed?",
      answer:
        "Depends on jurisdiction and item type—check local rules rather than assuming.",
    },
    {
      question: "How should discounts interact with tax?",
      answer:
        "Many places tax the discounted price; apply discounts before tax unless rules differ.",
    },
    {
      question: "How do stacked city and state taxes work?",
      answer:
        "Add rates only the way your locality defines (combined rate or stacked bases).",
    },
    {
      question: "Do VAT systems use the same add-on formula?",
      answer:
        "VAT is often embedded differently; this guide targets US-style add-on sales tax.",
    },
    {
      question: "How should printed receipts present the tax line?",
      answer:
        "List net, tax rate/amount, and gross total so customers see the breakdown.",
    },
    {
      question: "Can I run the same math for foreign-currency invoices?",
      answer:
        "Yes for arithmetic; currency conversion is a separate step.",
    },
    {
      question: "Why might a cash register disagree by one cent?",
      answer:
        "Rounding per line vs on the subtotal differs—match the register’s policy.",
    }
  ],
  "how-to-calculate-a-tip": [
    {
      question: "How do I figure an 18–20% restaurant tip?",
      answer:
        "Multiply the bill by 0.18 or 0.20 for the tip, then add it to the bill for the total.",
    },
    {
      question: "How do friends divide a tipped check evenly?",
      answer:
        "Add tip to the bill, then divide the grand total by the number of people.",
    },
    {
      question: "Can diners share an uneven check fairly?",
      answer:
        "Have each person cover their items, then tip on the full pre-tip total or on their share—agree first.",
    },
    {
      question: "What if the bill amount field stays empty?",
      answer:
        "The calculator needs a bill amount; enter the pre-tip total from the receipt.",
    },
    {
      question: "Why might three equal shares miss the exact total?",
      answer:
        "Cent rounding can leave a leftover penny—assign the extra cent to someone.",
    },
    {
      question: "Can the party size be a fraction of a person?",
      answer:
        "Party size should be a whole number of people; use custom amounts for odd splits.",
    },
    {
      question: "Does the calculator lock me into one tip percent?",
      answer:
        "It offers common presets; you can type another percent when local norms differ.",
    },
    {
      question: "Is the restaurant bill amount uploaded anywhere?",
      answer:
        "Tip math stays in the browser session.",
    },
    {
      question: "Should diners tip on the pre-tax or post-tax total?",
      answer:
        "Customs vary—some tip on pre-tax, some on post-tax. Follow house or local norms.",
    },
    {
      question: "How do I tip when automatic gratuity is already listed?",
      answer:
        "If gratuity is already included, add more only for exceptional service—avoid double-tipping blindly.",
    },
    {
      question: "What is a quick mental trick for about 20%?",
      answer:
        "Take 10% by moving the decimal, then double it.",
    },
    {
      question: "How should delivery-driver tips be handled?",
      answer:
        "Tip drivers separately from restaurant service; apps may suggest amounts—adjust for distance and effort.",
    },
    {
      question: "Can I leave a flat tip instead of a percentage?",
      answer:
        "Yes—flat tips work for coffee counters or small checks.",
    },
    {
      question: "What if the receipt already suggests tip amounts?",
      answer:
        "Treat suggestions as optional; compute what you intend before signing.",
    },
    {
      question: "How do group dining apps change the split workflow?",
      answer:
        "Itemize first, then tip on the shared pre-tip total so percentages stay fair.",
    }
  ],
  "how-to-calculate-age": [
    {
      question: "How do I get years, months, and days from two dates?",
      answer:
        "Enter birth date and as-of date; read the breakdown the calculator returns.",
    },
    {
      question: "Why can two sites disagree by a day?",
      answer:
        "Inclusive vs exclusive day counting and timezone cutovers differ—align the as-of date.",
    },
    {
      question: "Can I measure age only in total days?",
      answer:
        "Yes—many age tools also show a total-days figure beside Y/M/D.",
    },
    {
      question: "How should forms store birth dates?",
      answer:
        "Store ISO dates (YYYY-MM-DD) and compute age at runtime for the relevant as-of day.",
    },
    {
      question: "Does the calculator need hours and minutes?",
      answer:
        "Usually dates alone suffice; add time only when hour-level precision matters.",
    },
    {
      question: "How do insurance ages sometimes differ?",
      answer:
        "Some products use age-last-birthday or age-nearest; read the policy definition.",
    },
    {
      question: "Can I compare two people’s ages quickly?",
      answer:
        "Calculate each against the same as-of date, then subtract the year totals.",
    },
    {
      question: "What if only the birth month and year are known?",
      answer:
        "Pick a conventional day (often the 1st or 15th) and note the assumption.",
    },
    {
      question: "How do schools define “age by September 1”?",
      answer:
        "Use the cutoff date as the as-of date, not today.",
    },
    {
      question: "Is age calculation the same worldwide?",
      answer:
        "The Y/M/D breakdown method is common; legal age definitions still vary by jurisdiction.",
    },
    {
      question: "Can I use this for anniversary milestones?",
      answer:
        "Yes—set the as-of date to the anniversary you care about.",
    },
    {
      question: "Why might months show as 0 right after a birthday?",
      answer:
        "The month counter resets when the year increments on the birthday.",
    },
    {
      question: "Do time zones change someone’s age overnight?",
      answer:
        "Civil age usually follows the local calendar date where the event is observed.",
    },
    {
      question: "How accurate is a browser age tool?",
      answer:
        "Accurate for standard Gregorian dates; confirm leap-day edge cases you care about.",
    },
    {
      question: "Does entering birth dates upload them?",
      answer:
        "Age math on this page is intended to stay in the browser session.",
    }
  ],
  "how-to-calculate-gpa": [
    {
      question: "How do I compute a term GPA from letter grades?",
      answer:
        "List each course’s grade and credit hours, convert letters to points, then do credit-weighted average.",
    },
    {
      question: "What 4.0 scale mapping is typical in the US?",
      answer:
        "Commonly A=4.0, B=3.0, C=2.0, D=1.0, F=0—plus +/- variants when your school uses them.",
    },
    {
      question: "How do credit hours weight the average?",
      answer:
        "Multiply points by credits per course, sum, then divide by total credits attempted.",
    },
    {
      question: "Can I include a course I withdrew from?",
      answer:
        "Only if your school counts it; many W grades are excluded from GPA.",
    },
    {
      question: "How does an F affect the semester average?",
      answer:
        "It contributes 0 points but still adds credits attempted, pulling GPA down.",
    },
    {
      question: "What is a weighted high-school GPA?",
      answer:
        "Honors/AP courses may use a 5.0-style scale; unweighted stays on 4.0.",
    },
    {
      question: "How do I estimate GPA after next semester’s grades?",
      answer:
        "Add planned courses to the cumulative points/credits and recompute.",
    },
    {
      question: "Should I round mid-calculation or only at the end?",
      answer:
        "Keep full precision until the end; round to the places your transcript uses.",
    },
    {
      question: "Can percentage grades convert to GPA here?",
      answer:
        "If you have a school map (e.g., 93–100=A), convert to letters/points first.",
    },
    {
      question: "How do transfer credits factor in?",
      answer:
        "Policies vary—some omit transfers from institutional GPA.",
    },
    {
      question: "What if two courses share the same name but different terms?",
      answer:
        "Treat each enrollment separately unless a retake policy replaces the old grade.",
    },
    {
      question: "Is GPA the same as a percentage average?",
      answer:
        "No—GPA is point-based and credit-weighted; percentages are a different scale.",
    },
    {
      question: "How many courses can I enter at once?",
      answer:
        "Enter a full term or cumulative list up to the tool’s practical limit.",
    },
    {
      question: "Why might my unofficial GPA differ from the registrar?",
      answer:
        "Rounding, excluded courses, or weighting rules—trust the official transcript.",
    },
    {
      question: "Does GPA math upload my grades?",
      answer:
        "Calculation on this page is meant to stay in the browser session.",
    }
  ],
  "how-to-calculate-percentage": [
    {
      question: "How do I take a percentage of a whole number?",
      answer:
        "Multiply the whole by the percent, then divide by 100 (or multiply by the decimal form).",
    },
    {
      question: "How do I turn a fraction into a percent?",
      answer:
        "Divide part by whole, then multiply by 100.",
    },
    {
      question: "How do I apply a percent increase to a price?",
      answer:
        "Multiply the price by (1 + percent/100).",
    },
    {
      question: "How do I apply a percent discount?",
      answer:
        "Multiply by (1 − percent/100), or subtract percent×price/100 from the price.",
    },
    {
      question: "What is the percent if 25 is the part and 200 the whole?",
      answer:
        "25/200×100 = 12.5%.",
    },
    {
      question: "How do percentage points differ from percent change?",
      answer:
        "Points are absolute differences between percents; percent change is relative to a start value.",
    },
    {
      question: "Can I calculate percentages with decimals?",
      answer:
        "Yes—decimals work the same way as whole numbers.",
    },
    {
      question: "What if the whole is zero?",
      answer:
        "You cannot divide by zero—percent of/as a fraction of zero is undefined.",
    },
    {
      question: "How do I reverse a percent to find the original whole?",
      answer:
        "Divide the part by the percent as a decimal (part / (percent/100)).",
    },
    {
      question: "Are percentages capped at 100?",
      answer:
        "Not always—values can exceed 100% when the part is larger than the whole.",
    },
    {
      question: "How should I round money percentages?",
      answer:
        "Follow currency rounding rules (often two decimals) after the percent math.",
    },
    {
      question: "Can I stack two percent discounts?",
      answer:
        "Apply them sequentially on the remaining balance—do not simply add the percents.",
    },
    {
      question: "Is percent the same in every country?",
      answer:
        "The math is universal; tax-inclusive pricing customs differ.",
    },
    {
      question: "How do I check a calculator result by hand?",
      answer:
        "Recompute part = whole × percent/100 and compare.",
    },
    {
      question: "Does percentage math leave my browser?",
      answer:
        "The calculator is intended to run in the page session.",
    }
  ],
  "how-to-clean-and-compare-text": [
    {
      question: "How do I spot edits between two drafts?",
      answer:
        "Paste the old text on one side and the new on the other, then run the diff.",
    },
    {
      question: "Should I normalize quotes before comparing?",
      answer:
        "Yes—curly vs straight quotes create noisy diffs; standardize first.",
    },
    {
      question: "How do I ignore trivial whitespace changes?",
      answer:
        "Trim lines or collapse spaces before diffing when formatting is not the point.",
    },
    {
      question: "When is word-level diff better than line-level?",
      answer:
        "Word mode highlights small edits inside a paragraph; line mode suits code or lists.",
    },
    {
      question: "Can I compare code snippets this way?",
      answer:
        "Yes—paste both versions; for repos prefer git diff for history.",
    },
    {
      question: "How do I prepare OCR text for a cleaner diff?",
      answer:
        "Fix broken line breaks and hyphenation first so the diff focuses on real wording.",
    },
    {
      question: "What does a large red/green block usually mean?",
      answer:
        "A whole paragraph was removed or rewritten rather than lightly edited.",
    },
    {
      question: "Should I sort lines before comparing lists?",
      answer:
        "If order does not matter, sorting both sides reduces false shuffle noise.",
    },
    {
      question: "Can diffs help with translation QA?",
      answer:
        "They highlight changed segments; still have a human review meaning.",
    },
    {
      question: "How do I copy only the changed sentences?",
      answer:
        "Scan the highlighted hunks and extract those spans into your notes.",
    },
    {
      question: "Does a diff prove plagiarism?",
      answer:
        "No—it only shows textual differences; similarity tools are a different analysis.",
    },
    {
      question: "What limit should I expect for each side?",
      answer:
        "Very large pastes may slow the tab—compare chapters in chunks if needed.",
    },
    {
      question: "Is cleaning text required before every diff?",
      answer:
        "Not required, but cleaning punctuation and breaks makes reviews faster.",
    },
    {
      question: "Can I diff right-to-left languages?",
      answer:
        "Yes if Unicode text pastes correctly; confirm your font renders the script.",
    },
    {
      question: "Does comparing text upload the drafts?",
      answer:
        "Diffing on this page is meant to stay in the browser session.",
    }
  ],
  "how-to-convert-hex-to-rgb": [
    {
      question: "How do I read RGB channels from a brand hex code?",
      answer:
        "Paste the hex into the converter and note the red, green, and blue 0–255 values.",
    },
    {
      question: "Why do design tools show both hex and RGB?",
      answer:
        "Hex is compact for CSS; RGB makes channel math and accessibility tweaks easier.",
    },
    {
      question: "How do I use the RGB result in CSS?",
      answer:
        "Write rgb(r, g, b) or rgba(r, g, b, a) using the converted channels.",
    },
    {
      question: "What does a hex pair like 80 mean in decimal?",
      answer:
        "Each two hex digits map to 0–255; 80₁₆ is 128₁₀.",
    },
    {
      question: "Can I convert colors for an email template?",
      answer:
        "Yes—many email clients accept hex or RGB in inline CSS.",
    },
    {
      question: "How do I check contrast after converting?",
      answer:
        "Drop the RGB or hex into a contrast checker with your text color.",
    },
    {
      question: "Why might two hex codes look identical on a display?",
      answer:
        "Nearby values can be indistinguishable; rely on numbers for exact brand match.",
    },
    {
      question: "How do I handle hex from a PDF brand guide?",
      answer:
        "Copy carefully—watch for O/0 and l/1 misreads when typing by eye.",
    },
    {
      question: "Is RGB enough for print design?",
      answer:
        "Print often needs CMYK; treat RGB/hex as screen values unless converted for press.",
    },
    {
      question: "Can I convert a list of hex swatches quickly?",
      answer:
        "Convert one by one here, or script a batch offline for large palettes.",
    },
    {
      question: "What is the RGB for pure black and white?",
      answer:
        "Black is rgb(0,0,0); white is rgb(255,255,255).",
    },
    {
      question: "How does alpha change the written color?",
      answer:
        "Alpha controls opacity; underlying background shows through when alpha < 1.",
    },
    {
      question: "Should developers store hex or RGB in tokens?",
      answer:
        "Either works—pick one source of truth and generate the other as needed.",
    },
    {
      question: "Why convert before adjusting brightness?",
      answer:
        "Channel math is clearer in RGB/HSL than in raw hex strings.",
    },
    {
      question: "Does hex→RGB conversion upload my palette?",
      answer:
        "Conversion is intended to stay in the browser session.",
    }
  ],
  "how-to-convert-json-to-csv": [
    {
      question: "How do I export JSON records as a spreadsheet-friendly CSV?",
      answer:
        "Paste an array of objects, convert to CSV, then open the file in Excel or Google Sheets.",
    },
    {
      question: "Why should keys be consistent across every object?",
      answer:
        "Shared keys become columns. Inconsistent keys create sparse rows with blanks.",
    },
    {
      question: "How do I flatten nested address fields first?",
      answer:
        "Lift nested properties into top-level keys (or stringify them) before converting.",
    },
    {
      question: "Can trailing commas in JSON break the conversion?",
      answer:
        "Yes—strict JSON forbids trailing commas. Fix syntax, then convert.",
    },
    {
      question: "How are dates represented in the CSV cells?",
      answer:
        "Whatever string/number form the JSON used; spreadsheets may auto-format on import.",
    },
    {
      question: "Should I sort objects before creating the CSV?",
      answer:
        "Optional—sort in JSON or after import if you need a stable row order.",
    },
    {
      question: "How do I keep leading zeros in ID fields?",
      answer:
        "Prefix with a tab or force text format in the spreadsheet after import.",
    },
    {
      question: "What if a value contains commas and quotes?",
      answer:
        "Proper CSV escaping wraps fields and doubles quotes—use the converter’s output as-is.",
    },
    {
      question: "Can I convert JSON Lines (NDJSON)?",
      answer:
        "Wrap lines into an array first, or use a tool that accepts NDJSON natively.",
    },
    {
      question: "How do Unicode characters survive the export?",
      answer:
        "UTF-8 CSV keeps them; pick UTF-8 when the spreadsheet asks for an encoding.",
    },
    {
      question: "Is a root-level JSON array required?",
      answer:
        "Most converters expect an array of row objects. Wrap a lone object in [ ] if needed.",
    },
    {
      question: "How do empty strings differ from null in the sheet?",
      answer:
        "Both may look blank; null often becomes an empty cell while \"\" is an empty string.",
    },
    {
      question: "Can I drop columns I do not need after conversion?",
      answer:
        "Yes—delete columns in the spreadsheet or strip keys from the JSON first.",
    },
    {
      question: "What is a quick check that the CSV looks right?",
      answer:
        "Confirm header count matches key count and spot-check a few row values.",
    },
    {
      question: "Does this guide’s converter send JSON to a server?",
      answer:
        "The matching on-site tool is designed to convert in the browser session.",
    }
  ],
  "how-to-convert-units": [
    {
      question: "How do I convert meters to feet on this page?",
      answer:
        "Enter the meter value, choose meters→feet, and read the result.",
    },
    {
      question: "How do temperature conversions differ from length?",
      answer:
        "Temperature uses offset formulas (C↔F↔K), not simple multiply-by factors.",
    },
    {
      question: "Can I convert kilometers to miles for a road trip?",
      answer:
        "Yes—enter km and select miles as the target unit.",
    },
    {
      question: "Why do some conversions show many decimals?",
      answer:
        "Factors are exact or high-precision; round to the digits your task needs.",
    },
    {
      question: "How do I convert pounds to kilograms for a recipe?",
      answer:
        "Enter pounds, choose kg, and use the output in your ingredient list.",
    },
    {
      question: "Are imperial and US liquid gallons the same?",
      answer:
        "No—clarify which gallon you need; converters may label them separately.",
    },
    {
      question: "Can I chain conversions through a middle unit?",
      answer:
        "Usually unnecessary—pick the direct pair when available.",
    },
    {
      question: "How should scientists treat significant figures?",
      answer:
        "Round to match input precision rather than copying every decimal digit.",
    },
    {
      question: "Is nautical mile the same as a statute mile?",
      answer:
        "No—nautical miles are longer; choose the correct mile type.",
    },
    {
      question: "How do I convert square meters to square feet?",
      answer:
        "Use area mode if offered; do not apply a linear factor to area by mistake.",
    },
    {
      question: "Can I convert bits and bytes here?",
      answer:
        "Only if data-size units are listed; otherwise use a dedicated data converter.",
    },
    {
      question: "Why might two converters disagree slightly?",
      answer:
        "Rounding rules or deprecated factors; prefer standards-based constants.",
    },
    {
      question: "How do cooking volume conversions work?",
      answer:
        "Cup/tablespoon factors assume standard US measures unless labeled otherwise.",
    },
    {
      question: "Should I convert currency with a unit tool?",
      answer:
        "No—currency needs live rates; use a FX source instead.",
    },
    {
      question: "Does unit conversion upload my numbers?",
      answer:
        "Math on this page is meant to stay in the browser session.",
    }
  ],
  "how-to-count-characters": [
    {
      question: "How do I check a draft against a character limit?",
      answer:
        "Paste the text and read the character total (and spaces option if shown).",
    },
    {
      question: "Do punctuation marks add to the character count?",
      answer:
        "Yes—periods, commas, and symbols each count as characters.",
    },
    {
      question: "How should I count for SMS-length planning?",
      answer:
        "Use the character total and remember multi-segment SMS rules for long texts.",
    },
    {
      question: "Can I count characters without spaces?",
      answer:
        "If the tool offers a no-spaces metric, toggle it; otherwise remove spaces first.",
    },
    {
      question: "Why do some platforms count links differently?",
      answer:
        "Social networks may shorten URLs; the raw paste count can differ from their UI.",
    },
    {
      question: "How do emojis affect platform limits?",
      answer:
        "Many systems treat an emoji as more than one code unit—check the platform’s rule.",
    },
    {
      question: "Is a newline one character or two?",
      answer:
        "It depends on LF vs CRLF in the paste; normalize breaks if you need a strict count.",
    },
    {
      question: "How can writers hit an exact SEO title length?",
      answer:
        "Paste candidates and trim until the counter matches your target band.",
    },
    {
      question: "Do leading and trailing spaces count?",
      answer:
        "Yes unless you trim first—trim when those spaces will not be published.",
    },
    {
      question: "How does this differ from a word count?",
      answer:
        "Character count tallies symbols; word count groups alphanumeric tokens.",
    },
    {
      question: "Can I count only the visible on-screen text?",
      answer:
        "Paste just that span; avoid including hidden template fields.",
    },
    {
      question: "Why might Word and this counter disagree?",
      answer:
        "Different rules for hyphens, emojis, or breaks—compare settings, not just totals.",
    },
    {
      question: "Is there a maximum paste size for counting?",
      answer:
        "Huge pastes may slow the tab; count long books in chapters if needed.",
    },
    {
      question: "How do I count characters in a PDF?",
      answer:
        "Copy the text out first; PDFs are not counted as binary here.",
    },
    {
      question: "Does character counting upload my draft?",
      answer:
        "Counting on this page is intended to stay in the browser session.",
    }
  ],
  "how-to-create-a-utm-url": [
    {
      question: "How do I build a campaign link with UTM tags?",
      answer:
        "Enter the base URL plus source, medium, and campaign, then copy the tagged link.",
    },
    {
      question: "What is utm_source typically used for?",
      answer:
        "It names the platform or referrer (newsletter, twitter, partner).",
    },
    {
      question: "What should I put in utm_medium?",
      answer:
        "The channel type such as email, cpc, social, or affiliate.",
    },
    {
      question: "Is utm_campaign required for every link?",
      answer:
        "Strongly recommended so reports group by initiative; some stacks require it.",
    },
    {
      question: "Can I add utm_content and utm_term too?",
      answer:
        "Yes—content differentiates creatives; term is often for paid keywords.",
    },
    {
      question: "How do spaces in campaign names get encoded?",
      answer:
        "They become %20 or + in the query string—prefer hyphens in values.",
    },
    {
      question: "Will UTM tags break my existing query string?",
      answer:
        "A good builder merges carefully; avoid duplicating the same UTM keys.",
    },
    {
      question: "Should UTM values be lowercase?",
      answer:
        "Lowercase helps reporting consistency; avoid mixed-case duplicates.",
    },
    {
      question: "Do UTM parameters affect SEO rankings directly?",
      answer:
        "They are for analytics; use consistent canonical URLs to avoid duplicate-content confusion.",
    },
    {
      question: "Can I tag links inside QR codes?",
      answer:
        "Yes—build the UTM URL first, then encode that full URL in the QR.",
    },
    {
      question: "How do I keep vanity paths while tagging?",
      answer:
        "Tag the final destination URL, or tag a short link that redirects there.",
    },
    {
      question: "What happens if I forget https:// on the base URL?",
      answer:
        "Add a valid scheme so clicks resolve; many builders prepend https:// when missing.",
    },
    {
      question: "Should internal nav links get UTM tags?",
      answer:
        "Usually no—UTMs are for external campaigns, not every in-site click.",
    },
    {
      question: "How do I verify a tagged URL before sending?",
      answer:
        "Open it and confirm the landing page plus query params in the address bar.",
    },
    {
      question: "Does the UTM builder send my campaign names to a tracker?",
      answer:
        "Building on this page is meant to stay local; your analytics tool records visits later when people click.",
    }
  ],
  "how-to-estimate-fuel-cost": [
    {
      question: "How do I estimate gasoline cost for a planned drive?",
      answer:
        "Enter distance, vehicle efficiency (mpg or L/100km), and fuel price per unit.",
    },
    {
      question: "Should I use tank average mpg or the dashboard instant reading?",
      answer:
        "Use a realistic average for the trip type (city/highway mix), not a momentary spike.",
    },
    {
      question: "How do I convert a round trip into the distance field?",
      answer:
        "Double the one-way miles/km, or run the estimate twice and add.",
    },
    {
      question: "Can I compare hybrid versus gas car costs?",
      answer:
        "Run the same distance and fuel price with each vehicle’s efficiency.",
    },
    {
      question: "What fuel price should travelers use?",
      answer:
        "Use a local station average along the route, not an outdated home price.",
    },
    {
      question: "How does roof cargo change fuel use?",
      answer:
        "It often worsens efficiency—lower the mpg input to reflect real drag.",
    },
    {
      question: "Can I estimate cost per kilometer as well?",
      answer:
        "Divide total fuel cost by distance after the estimate.",
    },
    {
      question: "Do tolls and parking belong in this fuel math?",
      answer:
        "No—add them separately as trip budget lines.",
    },
    {
      question: "How accurate are sticker mpg figures?",
      answer:
        "They are lab estimates; real-world driving is often less efficient.",
    },
    {
      question: "What if I only know liters used on a past trip?",
      answer:
        "Cost ≈ liters × price; efficiency ≈ liters per distance for future forecasts.",
    },
    {
      question: "Should electric drivers use this gas tool?",
      answer:
        "Not for kWh charging—use an electricity trip-cost calculator instead.",
    },
    {
      question: "How do headwinds or mountains affect the estimate?",
      answer:
        "Efficiency drops—pad distance cost or reduce mpg for tough routes.",
    },
    {
      question: "Can I plan multi-leg trips with different prices?",
      answer:
        "Estimate each leg with its distance and local price, then sum.",
    },
    {
      question: "Why might my receipt disagree with the forecast?",
      answer:
        "Different price, detours, idle time, or HVAC load vs the assumed mpg.",
    },
    {
      question: "Does the fuel estimator upload my trip details?",
      answer:
        "Calculation on this page is meant to stay in the browser session.",
    }
  ],
  "how-to-generate-a-password": [
    {
      question: "How do I create a unique login secret for a new account?",
      answer:
        "Generate a long random password, copy it into a password manager, then save the account there.",
    },
    {
      question: "Why prefer a manager over a notebook?",
      answer:
        "Managers encrypt many credentials, autofill accurately, and reduce reuse.",
    },
    {
      question: "Should every account get a different password?",
      answer:
        "Yes—reuse lets one breach unlock others.",
    },
    {
      question: "How do character classes improve strength?",
      answer:
        "Mixing upper, lower, digits, and symbols expands the search space when length is fixed.",
    },
    {
      question: "When is a long passphrase better than symbols?",
      answer:
        "When you must type from memory; random words can be long yet memorable.",
    },
    {
      question: "How do I handle sites that ban symbols?",
      answer:
        "Generate with letters/digits only at maximum allowed length and enable 2FA.",
    },
    {
      question: "What is a practical minimum length today?",
      answer:
        "At least 12–16 characters when the site allows; longer is better.",
    },
    {
      question: "Should I change passwords on a fixed calendar?",
      answer:
        "Change after suspected compromise or shared exposure; arbitrary monthly resets are outdated advice for strong unique passwords.",
    },
    {
      question: "How do I recover if I forget a generated password?",
      answer:
        "Use the manager’s vault or the site’s reset flow—do not recycle an old password.",
    },
    {
      question: "Are browser-saved passwords okay?",
      answer:
        "Built-in managers are fine if the device is locked; dedicated managers help across devices.",
    },
    {
      question: "How should teams share access without Slack pasting?",
      answer:
        "Use shared vault items with permissions and auditing.",
    },
    {
      question: "Does “password1” style variation help?",
      answer:
        "No—predictable patterns fall quickly; use true randomness.",
    },
    {
      question: "Can I generate offline instead of in a tab?",
      answer:
        "Yes—local managers and OS tools avoid browser surfaces for ultra-sensitive use.",
    },
    {
      question: "What role does two-factor authentication play?",
      answer:
        "2FA limits damage if a password leaks; enable it wherever available.",
    },
    {
      question: "Does generating passwords on this page store them?",
      answer:
        "Generation is intended to stay in the session; save results only in your manager.",
    }
  ],
  "how-to-hash-text": [
    {
      question: "How do I fingerprint a string with SHA-256?",
      answer:
        "Paste the text, select SHA-256, and copy the hex digest for comparison or storage of the fingerprint.",
    },
    {
      question: "Why can’t I decrypt a hash back to text?",
      answer:
        "Hashes are one-way; only brute-force or dictionary guessing can try to find an input.",
    },
    {
      question: "When should I prefer SHA-256 over older digests?",
      answer:
        "For new integrity checks and signatures; avoid MD5/SHA-1 for security uses.",
    },
    {
      question: "How do checksums protect downloaded files?",
      answer:
        "Publish the digest with the file; recompute locally and compare before trusting the bits.",
    },
    {
      question: "Is hashing equal to locking a file with a password?",
      answer:
        "No—encryption protects confidentiality; hashing verifies integrity or derives keys.",
    },
    {
      question: "Why does changing one character rewrite the whole digest?",
      answer:
        "Avalanche effect—good hashes spread tiny input changes across the output.",
    },
    {
      question: "Can I hash binary files the same way as text?",
      answer:
        "Yes with a file-capable hasher; this text tool is for string inputs.",
    },
    {
      question: "Should API secrets be stored as bare hashes?",
      answer:
        "Use specialized secret storage or KDFs; a fast hash alone is not enough for passwords.",
    },
    {
      question: "What is a salt in password hashing?",
      answer:
        "Random per-password data that stops precomputed rainbow tables.",
    },
    {
      question: "How do developers compare hashes safely?",
      answer:
        "Use constant-time compare helpers so timing leaks less information.",
    },
    {
      question: "Can two different texts share a digest?",
      answer:
        "Collisions are theoretically possible; strong algorithms make them impractical to find.",
    },
    {
      question: "Why show a hash for empty input?",
      answer:
        "The empty string has a defined digest—clear the field if you did not mean to hash.",
    },
    {
      question: "Is hex the only way to display a digest?",
      answer:
        "Hex is common; Base64 is also used in some protocols.",
    },
    {
      question: "How does HMAC differ from a plain hash?",
      answer:
        "HMAC mixes a secret key so only key holders can authenticate the message.",
    },
    {
      question: "Does hashing text on this page upload it?",
      answer:
        "Hashing is meant to run in the browser session.",
    }
  ],
  "how-to-plan-a-debt-payoff": [
    {
      question: "What is the difference between snowball and avalanche payoff?",
      answer:
        "Snowball pays smallest balances first for quick wins; avalanche pays highest interest rates first to cut cost.",
    },
    {
      question: "How do I choose an extra monthly payment amount?",
      answer:
        "Start with a fixed surplus after essentials, enter it as extra payment, and compare months saved in the plan.",
    },
    {
      question: "Can I model more than two credit cards?",
      answer:
        "Yes—add each debt with balance, rate, and minimum so the schedule can order them by your chosen method.",
    },
    {
      question: "What if my interest rate is variable?",
      answer:
        "Use today’s rate as a snapshot and revisit the plan when the rate changes; the math is not a lender quote.",
    },
    {
      question: "How do minimum payments affect the timeline?",
      answer:
        "Higher minimums shrink principal faster; entering realistic minima keeps the payoff date honest.",
    },
    {
      question: "Should I include student loans with consumer debt?",
      answer:
        "You can list them together for a cash-flow view, or plan federal loans separately if their rules differ.",
    },
    {
      question: "What does “months to debt free” assume?",
      answer:
        "Steady on-time payments at the amounts you entered, without new charges or fee surprises.",
    },
    {
      question: "Can I pause a debt in the plan temporarily?",
      answer:
        "Remove or zero its payment while modeling a hardship month, then restore it when comparing long-term options.",
    },
    {
      question: "How accurate is the interest saved estimate?",
      answer:
        "It is an illustration from your inputs, not a bank statement; actual interest depends on posting dates and fees.",
    },
    {
      question: "What if I get a windfall like a bonus?",
      answer:
        "Apply it as a one-time principal payment on the target debt, then rerun the schedule with the new balance.",
    },
    {
      question: "Does balance transfer fit into this guide’s workflow?",
      answer:
        "Model the new rate and fees as a separate debt or updated rate after the transfer posts.",
    },
    {
      question: "How do I avoid underpaying after a rate change?",
      answer:
        "Update the APR field and confirm the new minimum so the plan does not assume the old cost.",
    },
    {
      question: "Can couples combine debts in one payoff chart?",
      answer:
        "Yes—list shared and individual debts you both agree to fund, and decide whose income covers extras.",
    },
    {
      question: "Why might payoff take longer than the chart shows?",
      answer:
        "Late fees, new spending, or skipped extras extend the date; keep payments matching the plan.",
    },
    {
      question: "Is this a substitute for credit counseling?",
      answer:
        "No—it is a planning calculator. Seek a counselor or advisor for hardship programs and legal options.",
    }
  ],
  "how-to-remove-line-breaks": [
    {
      question: "How do I join lines from a pasted PDF paragraph?",
      answer:
        "Paste the broken text, remove line breaks, and copy the rejoined paragraph for editing.",
    },
    {
      question: "Will double line breaks between paragraphs stay?",
      answer:
        "Settings vary—many tools keep blank lines as paragraph separators while joining single breaks inside a block.",
    },
    {
      question: "Can I remove breaks only inside selected sentences?",
      answer:
        "Process the selection alone, or paste just that block so untouched regions stay as they are.",
    },
    {
      question: "What about soft returns from word processors?",
      answer:
        "They usually arrive as ordinary newline characters and are removed the same way as hard breaks.",
    },
    {
      question: "Does the tool delete spaces when joining lines?",
      answer:
        "Good removers insert a space when needed so words do not smash together across former line ends.",
    },
    {
      question: "How do I clean chat logs with one word per line?",
      answer:
        "Paste the log and strip breaks to form sentences; review spacing if timestamps sat on their own lines.",
    },
    {
      question: "Can I keep bullet lists while fixing paragraphs?",
      answer:
        "Strip breaks on paragraph blocks separately; leaving list lines alone preserves each bullet.",
    },
    {
      question: "Why do some lines still wrap after removal?",
      answer:
        "Your editor’s window width wraps display only; the underlying text may already be a single logical line.",
    },
    {
      question: "Are Mac, Windows, and Linux endings treated alike?",
      answer:
        "Yes—CR, LF, and CRLF are normalized so mixed pastes still join correctly.",
    },
    {
      question: "Can I undo after removing breaks?",
      answer:
        "Use the browser or editor undo, or keep the original paste in another tab before running the tool.",
    },
    {
      question: "Will it affect markdown code fences?",
      answer:
        "Removing breaks inside fenced code can ruin formatting—limit the paste to prose sections.",
    },
    {
      question: "How do I prepare text for a single-line CSV cell?",
      answer:
        "Join lines first, then escape quotes as your spreadsheet requires before saving the CSV.",
    },
    {
      question: "Is there a difference between trim and remove breaks?",
      answer:
        "Trim clears edge whitespace; remove breaks targets newline characters inside the body.",
    },
    {
      question: "Can poetry or address blocks be left unchanged?",
      answer:
        "Skip those stanzas—only run the remover on prose that was wrapped unintentionally.",
    },
    {
      question: "Does joining lines change hyphenation at margins?",
      answer:
        "End-of-line hyphens may remain; delete stray hyphens manually if a word was split across lines.",
    }
  ],
  "how-to-scan-a-qr-code": [
    {
      question: "How do I scan a QR code with my device camera?",
      answer:
        "Allow camera access, point at the code, and wait for the decoder to show the payload text or URL.",
    },
    {
      question: "Can I upload a screenshot instead of using the camera?",
      answer:
        "Yes—choose an image file that contains a clear QR code if the scanner supports file input.",
    },
    {
      question: "What if the code is blurry or too small?",
      answer:
        "Move closer, improve lighting, or upload a sharper crop; damaged codes may not decode.",
    },
    {
      question: "Do QR codes for Wi-Fi work in the browser scanner?",
      answer:
        "The scanner can show the Wi-Fi payload text; connecting still depends on the OS or a helper app.",
    },
    {
      question: "Can I scan codes on a computer monitor?",
      answer:
        "Yes—aim the camera at the screen or capture a screenshot and upload that image.",
    },
    {
      question: "What payloads besides URLs can appear?",
      answer:
        "Plain text, phone numbers, SMS drafts, email drafts, Wi-Fi configs, and other formats the QR holds.",
    },
    {
      question: "Is offline scanning possible?",
      answer:
        "If decoding runs locally in the page, you can scan without uploading frames; network is only needed to open links.",
    },
    {
      question: "How do I know the link is safe before opening?",
      answer:
        "Read the decoded URL fully, check the domain, and avoid opening unexpected shortened links.",
    },
    {
      question: "Why does permission keep getting denied?",
      answer:
        "Site or OS settings blocked the camera—reset permissions for the site and try a secure (HTTPS) page.",
    },
    {
      question: "Can I scan inverted or stylized QR codes?",
      answer:
        "High-contrast standard codes work best; heavy design or low contrast often fails.",
    },
    {
      question: "Does distance from the code matter?",
      answer:
        "Yes—fill most of the frame without cropping quiet zones around the square.",
    },
    {
      question: "What is the quiet zone on a QR code?",
      answer:
        "The empty margin around the pattern; covering it with text or edges can prevent a successful scan.",
    },
    {
      question: "Can one image with two QR codes be processed?",
      answer:
        "Some scanners return multiple payloads; others only read the clearest code—crop if needed.",
    },
    {
      question: "Will a damaged printed corner still scan?",
      answer:
        "QR codes have error correction, but severe damage or missing finder patterns can still fail.",
    },
    {
      question: "How do I copy the decoded text after a scan?",
      answer:
        "Use the copy control next to the result, or select the text and copy it into your notes.",
    }
  ],
  "how-to-test-a-regular-expression": [
    {
      question: "How do I see all matches highlighted in the sample text?",
      answer:
        "Enter the pattern and test string, then read the match list or highlights the tester shows.",
    },
    {
      question: "What does the global flag change?",
      answer:
        "With global matching enabled, the engine finds every match; without it, often only the first is returned.",
    },
    {
      question: "When should I turn on case-insensitive matching?",
      answer:
        "Use it when letter case should not matter, such as matching Room and room with one pattern.",
    },
    {
      question: "How do capture groups appear in the results?",
      answer:
        "Each group’s substring is listed beside the full match so you can verify what parentheses captured.",
    },
    {
      question: "What if my pattern has a syntax error?",
      answer:
        "The tester shows an error instead of matches—fix brackets, escapes, and quantifiers before retrying.",
    },
    {
      question: "Can I test multiline anchors like ^ and $?",
      answer:
        "Yes—enable multiline mode so ^ and $ match line starts and ends, not only the whole string edges.",
    },
    {
      question: "How do I match digits without catching letters?",
      answer:
        "Use a digit class such as \\d or [0-9], and add boundaries if you need whole numbers only.",
    },
    {
      question: "Why is my match empty even though something looks right?",
      answer:
        "Check for greedy quantifiers, wrong flags, or hidden spaces; simplify the pattern until a match appears.",
    },
    {
      question: "Can I paste a long log file as the test subject?",
      answer:
        "Yes within browser limits; very large texts may run slowly, so sample a representative slice first.",
    },
    {
      question: "How do lazy quantifiers differ in the tester?",
      answer:
        "Lazy forms match as little as possible; compare *? versus * on the same sample to see the span change.",
    },
    {
      question: "Is JavaScript regex the same as other languages?",
      answer:
        "Core syntax is similar, but details differ—validate critical patterns in the language you ship.",
    },
    {
      question: "How can I escape a literal dot or slash?",
      answer:
        "Prefix special characters with a backslash, such as \\. for a period, so they are not metacharacters.",
    },
    {
      question: "Do replacements run inside this how-to’s tool?",
      answer:
        "Focus here is matching and groups; use a replace-capable editor if you need substitution previews.",
    },
    {
      question: "Can I share patterns with teammates safely?",
      answer:
        "Copy the pattern and a short sample string into docs; the tester itself does not publish your session.",
    },
    {
      question: "What is a quick check for email-shaped text?",
      answer:
        "Start with a simple character pattern for teaching, then harden it in production code with proper validation libraries.",
    }
  ],
  "how-to-work-with-pdfs-in-your-browser": [
    {
      question: "Which PDF jobs can I do without installing software?",
      answer:
        "Common browser tools cover compress, merge, split, count pages, and related previews depending on the suite.",
    },
    {
      question: "How do I keep text selectable after compression?",
      answer:
        "Choose a mode that recompresses streams without rasterizing pages when that option is offered.",
    },
    {
      question: "What is a practical size limit for browser PDF tools?",
      answer:
        "Limits vary by tool and device memory; large scanned books may need desktop software instead.",
    },
    {
      question: "Can I merge files that have different page sizes?",
      answer:
        "Usually yes—the merged file keeps each page’s original dimensions unless a tool normalizes them.",
    },
    {
      question: "How do I extract only a page range?",
      answer:
        "Use split or extract with start and end page numbers, then download the smaller PDF.",
    },
    {
      question: "Are annotations and forms preserved?",
      answer:
        "Some operations keep them; others flatten or drop interactive features—spot-check the output.",
    },
    {
      question: "What if a PDF is encrypted?",
      answer:
        "Unlock it with the owner password in a capable reader first; many browser tools cannot process locked files.",
    },
    {
      question: "Does processing happen on my device?",
      answer:
        "Prefer tools that state client-side processing when privacy matters; read each tool’s upload policy.",
    },
    {
      question: "How can I reduce a scanned PDF’s file size?",
      answer:
        "Compression that downsamples images usually helps scans more than compressing already-efficient text PDFs.",
    },
    {
      question: "Can I convert a PDF to images in the browser?",
      answer:
        "Where a PDF-to-image tool is available, pick the format and resolution, then download the pages.",
    },
    {
      question: "Why does merge order matter?",
      answer:
        "Pages concatenate in the order you add files—reorder before running merge if chapters must follow a sequence.",
    },
    {
      question: "How do I verify page count after splitting?",
      answer:
        "Open the result or use a page-counter tool to confirm each file has the pages you expected.",
    },
    {
      question: "Will fonts embed correctly after edits?",
      answer:
        "Most compress/merge paths keep embedded fonts; converting to images removes live text entirely.",
    },
    {
      question: "Can I work from a phone browser?",
      answer:
        "Many tools work on mobile browsers, though large files are easier on desktop with more memory.",
    },
    {
      question: "What should I do before sharing a compressed PDF?",
      answer:
        "Open it, check clarity of scans, and confirm links or forms you still need are intact.",
    }
  ],
  "what-is-json": [
    {
      question: "What does JSON stand for?",
      answer:
        "JavaScript Object Notation—a text format for structured data used widely in APIs and config files.",
    },
    {
      question: "Which data types can appear in JSON?",
      answer:
        "Objects, arrays, strings, numbers, booleans, and null—no functions or undefined values.",
    },
    {
      question: "Why must property names use double quotes?",
      answer:
        "The JSON spec requires double-quoted keys; single quotes make the document invalid.",
    },
    {
      question: "How do arrays differ from objects in JSON?",
      answer:
        "Arrays are ordered lists in square brackets; objects are key/value maps in curly braces.",
    },
    {
      question: "Can JSON hold comments?",
      answer:
        "Standard JSON does not allow comments; use a sidecar doc or a JSONC variant only if your stack supports it.",
    },
    {
      question: "What causes a trailing comma error?",
      answer:
        "A comma after the last item in an array or object—remove it to make the document valid.",
    },
    {
      question: "Is pretty-printed JSON different from minified JSON?",
      answer:
        "Only whitespace changes; parsers treat equivalent structures the same either way.",
    },
    {
      question: "How do I represent nested data?",
      answer:
        "Place objects or arrays as values inside other objects or arrays to any practical depth.",
    },
    {
      question: "Can numbers be quoted as strings?",
      answer:
        "You may store digits inside strings, but then they are text—math needs true JSON numbers.",
    },
    {
      question: "What is UTF-8’s role with JSON?",
      answer:
        "JSON text is Unicode; UTF-8 is the common encoding on the wire and in files.",
    },
    {
      question: "How do APIs use JSON day to day?",
      answer:
        "Clients send and receive JSON bodies over HTTP, then parse them into native structures.",
    },
    {
      question: "Why reject NaN or Infinity in JSON numbers?",
      answer:
        "The JSON number grammar does not include those IEEE values; use null or strings if you must flag them.",
    },
    {
      question: "Can I map JSON to classes automatically?",
      answer:
        "Many languages offer parsers and schema tools; always validate untrusted input before use.",
    },
    {
      question: "How is JSON different from XML?",
      answer:
        "JSON is lighter for nested data structures; XML adds elements, attributes, and a different tooling ecosystem.",
    },
    {
      question: "What should I validate before shipping a JSON file?",
      answer:
        "Parse it with a strict parser, confirm required keys, and check types against your schema.",
    }
  ],
  "how-to-count-pdf-pages": [
    {
      question: "How do I see the page count for a PDF on my computer?",
      answer:
        "Open the counter, choose the PDF, and read the reported page total once processing finishes.",
    },
    {
      question: "Does the count include cover pages?",
      answer:
        "Yes—every page in the file counts, including covers, blanks, and appendices.",
    },
    {
      question: "Can I count pages in a scanned PDF?",
      answer:
        "Yes—scans still have page objects; image-only pages are counted like text pages.",
    },
    {
      question: "What if the file is corrupted?",
      answer:
        "The tool may fail to open it; try re-exporting the PDF from the original app.",
    },
    {
      question: "Will bookmarks change the page total?",
      answer:
        "No—bookmarks are navigation aids; the count follows actual pages in the document.",
    },
    {
      question: "Can I check several PDFs one after another?",
      answer:
        "Yes—run each file separately and note the totals; clear the previous file before the next.",
    },
    {
      question: "How accurate is the number for print shops?",
      answer:
        "It matches the PDF’s page objects; confirm facing-page or spread setups if the shop bills differently.",
    },
    {
      question: "Does rotating a page alter the count?",
      answer:
        "No—rotation changes orientation only; the number of pages stays the same.",
    },
    {
      question: "What about PDFs created from many images?",
      answer:
        "Each image page still counts as one page unless they were combined onto shared sheets.",
    },
    {
      question: "Can I count pages offline?",
      answer:
        "If the counter runs locally in the browser, you can work without uploading the file to a server.",
    },
    {
      question: "Why might two apps show different totals?",
      answer:
        "Rare repair tools or viewer bugs differ; re-save a clean PDF and count again.",
    },
    {
      question: "Do attachments inside a PDF add pages?",
      answer:
        "Embedded files are not extra pages unless they appear as pages in the main document.",
    },
    {
      question: "Is there a maximum file size?",
      answer:
        "Large files can hit memory limits; split huge PDFs before counting if the tool errors.",
    },
    {
      question: "Can I use the count to estimate printing cost?",
      answer:
        "Yes—multiply pages by the shop’s per-page rate, and clarify color versus grayscale separately.",
    },
    {
      question: "Does the tool modify my PDF while counting?",
      answer:
        "Counting should be read-only; download or overwrite only if you use a different edit tool afterward.",
    }
  ],
  "significant-figures-calculator": [
    {
      question: "How do I enter a number to count its significant figures?",
      answer:
        "Type the value, including decimals or scientific notation if needed, then read the significant-figure count.",
    },
    {
      question: "Why do leading zeros not count as significant?",
      answer:
        "They only place the decimal point, as in 0.0032, which has two significant figures.",
    },
    {
      question: "When are trailing zeros significant?",
      answer:
        "Trailing zeros are significant when a decimal point is shown, such as 2.50 having three significant figures.",
    },
    {
      question: "How should I write ambiguous zeros in whole numbers?",
      answer:
        "Use scientific notation, like 1.20 × 10^3, to show that trailing zeros are intentional.",
    },
    {
      question: "What rule applies when multiplying measured values?",
      answer:
        "The product should match the fewest significant figures among the factors.",
    },
    {
      question: "What rule applies when adding measured values?",
      answer:
        "The sum follows the least precise decimal place among the addends, not the significant-figure count alone.",
    },
    {
      question: "Can I round a long calculator result to N significant figures?",
      answer:
        "Yes—choose the target count and apply standard rounding so the reported value matches your precision.",
    },
    {
      question: "Does the calculator treat exact counts differently?",
      answer:
        "Exact counted integers can have infinite precision in theory; follow your lab’s instructions for those cases.",
    },
    {
      question: "How do I handle numbers in scientific notation?",
      answer:
        "Count digits in the coefficient only; the power of ten does not add significant figures.",
    },
    {
      question: "Why did 100 and 1.00×10^2 get different counts?",
      answer:
        "Without a decimal, 100 is ambiguous; scientific notation clarifies how many zeros are significant.",
    },
    {
      question: "Can this help with chemistry homework?",
      answer:
        "Yes for counting and rounding practice; still show work if your teacher requires manual steps.",
    },
    {
      question: "What if I paste units with the number?",
      answer:
        "Enter the bare number; units are separate from significant-figure rules.",
    },
    {
      question: "How precise should lab reports show results?",
      answer:
        "Match the instrument and calculation rules your course specifies; do not overstate precision.",
    },
    {
      question: "Is rounding the same as truncating?",
      answer:
        "No—rounding looks at the next digit; truncating just cuts off digits and biases results.",
    },
    {
      question: "Can I check intermediate steps before the final round?",
      answer:
        "Keep extra digits during multi-step work, then round once for the final reported value when that is the policy.",
    }
  ],
  "common-json-errors-and-how-to-fix-them": [
    {
      question: "How do I find the line that broke my JSON parse?",
      answer:
        "Read the parser’s line and column hint, open that spot, and fix commas, quotes, or brackets there.",
    },
    {
      question: "Why do single quotes around keys fail?",
      answer:
        "JSON requires double quotes for keys and strings; replace single quotes before parsing.",
    },
    {
      question: "What fixes an unescaped backslash in a path?",
      answer:
        "Double the backslash or switch to forward slashes so the string stays valid JSON.",
    },
    {
      question: "How can trailing commas sneak in from JavaScript style?",
      answer:
        "JS allows trailing commas in objects; JSON does not—delete the comma after the last property.",
    },
    {
      question: "Why does capital True fail while true works?",
      answer:
        "JSON literals are lowercase true, false, and null only; other capitalizations are invalid.",
    },
    {
      question: "What should I do when the response is an HTML error page?",
      answer:
        "Inspect status codes and Content-Type; fix the endpoint so it returns application/json instead of an HTML body.",
    },
    {
      question: "How do I encode newlines inside a string value?",
      answer:
        "Use \\n inside the JSON string rather than a raw line break unless you are using a relaxed format.",
    },
    {
      question: "Can duplicate keys cause confusing results?",
      answer:
        "Parsers may keep the last duplicate silently; remove duplicates so intent is clear.",
    },
    {
      question: "How do I validate NDJSON differently from one JSON document?",
      answer:
        "Parse each line as its own JSON value; a wrapper array is a different shape than newline-delimited rows.",
    },
    {
      question: "What is a quick check before sending JSON to an API?",
      answer:
        "Run it through a strict formatter or parser locally and confirm required fields and types.",
    }
  ],
  "debt-snowball-vs-avalanche": [
    {
      question: "How do I compare snowball and avalanche on the same debts?",
      answer:
        "Enter identical balances, rates, and extras, then switch methods to compare months and interest.",
    },
    {
      question: "When is snowball emotionally easier to stick with?",
      answer:
        "When small wins keep you motivated; clearing a tiny balance first can build momentum.",
    },
    {
      question: "When does avalanche usually win on cost?",
      answer:
        "When rate gaps are large and you reliably pay extras toward the highest APR first.",
    },
    {
      question: "Should I include a 0% promo balance in avalanche math?",
      answer:
        "Yes—model the promo end date mentally; a 0% APR ranks last for avalanche until the rate jumps.",
    },
    {
      question: "How does the size of the extra payment change the gap?",
      answer:
        "Larger extras shrink both timelines; the interest gap between methods often widens when extras are small.",
    },
    {
      question: "Can I switch methods mid-plan?",
      answer:
        "Yes—update remaining balances and pick a new order; consistency matters more than purity.",
    },
    {
      question: "What if two debts share the same APR?",
      answer:
        "Break ties by balance or convenience; avalanche treats equal rates as indifferent on interest.",
    },
    {
      question: "How should couples pick a method together?",
      answer:
        "Agree on the goal—speed of wins versus dollars saved—then lock the payment amount you both fund.",
    },
    {
      question: "Does balance transfer change which method is better?",
      answer:
        "After a transfer, rerun with the new rate and fees; the better method can flip.",
    },
    {
      question: "Is either method a substitute for a budget?",
      answer:
        "No—both need a real surplus; without extras, minimums alone decide the timeline.",
    }
  ],
  "dynamic-vs-static-qr-codes": [
    {
      question: "What is the core difference between static and dynamic QR codes?",
      answer:
        "Static codes embed the final payload; dynamic codes point at a short URL you can retarget later.",
    },
    {
      question: "When is a static code the better choice?",
      answer:
        "Use static for Wi-Fi, fixed text, or a URL that will never need to change after printing.",
    },
    {
      question: "When should I prefer a dynamic code?",
      answer:
        "Choose dynamic for campaigns, print runs, or posters where the destination may change.",
    },
    {
      question: "Do I need a server for static QR content?",
      answer:
        "No—once printed, the payload is in the pattern; scanning does not depend on your hosting.",
    },
    {
      question: "Why might a dynamic code stop working?",
      answer:
        "If the redirect service expires, is deleted, or goes offline, scans fail until you restore the link.",
    },
    {
      question: "Can I gather scan analytics with static codes?",
      answer:
        "Not from the code itself; you would need destination-page analytics or a tagged URL.",
    },
    {
      question: "How do short redirect links affect design space?",
      answer:
        "Shorter payloads make simpler QR patterns that are easier to style and scan from farther away.",
    },
    {
      question: "Is reprinting required after a URL change?",
      answer:
        "Static codes need a reprint; dynamic codes can keep the same printed pattern with a new target.",
    },
    {
      question: "Are dynamic codes always paid?",
      answer:
        "Many hosts charge for redirects and analytics; static generation can stay free for fixed payloads.",
    },
    {
      question: "What should I test before a large print order?",
      answer:
        "Scan from multiple phones, distances, and lighting, and confirm dynamic redirects still land correctly.",
    }
  ],
  "15-year-vs-30-year-mortgage": [
    {
      question: "How should I compare 15-year and 30-year payments side by side?",
      answer:
        "Enter the same loan amount and rate assumptions for each term, then compare payment, interest, and payoff date.",
    },
    {
      question: "Why is the 15-year payment higher even at a lower rate?",
      answer:
        "You repay principal over fewer years, so each month must cover more principal.",
    },
    {
      question: "What cash-flow flexibility does a 30-year term add?",
      answer:
        "Lower required payments free budget for emergencies, though total interest is usually higher if you only pay the minimum.",
    },
    {
      question: "Can extra payments on a 30-year loan mimic a 15-year payoff?",
      answer:
        "Yes—consistent principal prepayments can shorten the schedule; confirm there is no prepayment penalty.",
    },
    {
      question: "How do rates typically differ between the two terms?",
      answer:
        "15-year quotes are often lower than 30-year quotes from the same lender, but always compare live offers.",
    },
    {
      question: "What equity builds faster on a 15-year loan?",
      answer:
        "More of each early payment goes to principal, so equity usually grows quicker than on a 30-year schedule.",
    },
    {
      question: "Should taxes and insurance change which term I pick?",
      answer:
        "They affect the full housing payment either way; compare principal-and-interest first, then add escrow estimates.",
    },
    {
      question: "How do I stress-test a 15-year payment?",
      answer:
        "Ask whether the higher payment still works if income drops; if not, a 30-year with voluntary extras may fit better.",
    },
    {
      question: "What role does expected time in the home play?",
      answer:
        "Short stays may favor lower payments; long stays increase the value of interest savings from a shorter term.",
    },
    {
      question: "Is refinancing from 30-year to 15-year common?",
      answer:
        "Yes when rates and budget allow; run new payment numbers before closing costs lock you in.",
    }
  ],
  "cumulative-gpa-vs-semester-gpa": [
    {
      question: "How do I combine old credits with a new semester in the calculator?",
      answer:
        "Enter prior quality points and credit hours, then add the new term’s courses so the cumulative result updates.",
    },
    {
      question: "Why can’t I just average four semester GPAs?",
      answer:
        "Semesters with different credit loads must be credit-weighted; a straight average of GPAs is usually wrong.",
    },
    {
      question: "What is quality points in GPA math?",
      answer:
        "Each course’s grade points times its credit hours; cumulative GPA is total quality points over total credits.",
    },
    {
      question: "How does a light elective term affect cumulative GPA?",
      answer:
        "Fewer credits move the cumulative number less than a heavy term with the same semester GPA.",
    },
    {
      question: "Can retaken courses replace old grades in cumulative GPA?",
      answer:
        "Policies differ by school—some replace, some average; follow your registrar’s rule, not a generic tool default.",
    },
    {
      question: "Do transfer credits always enter my cumulative GPA?",
      answer:
        "Often credits transfer without grade points; check whether your school includes them in GPA.",
    },
    {
      question: "How do I project the GPA I need next term?",
      answer:
        "Enter current cumulative totals and planned credits, then test grade scenarios until the target appears.",
    },
    {
      question: "Is weighted high-school GPA the same as college cumulative GPA?",
      answer:
        "No—high-school weighting and college 4.0 scales differ; do not mix them in one average.",
    },
    {
      question: "What if my school uses a 4.3 scale for A+?",
      answer:
        "Select the matching scale in the calculator so A+ is not understated as 4.0.",
    },
    {
      question: "Should scholarships look at semester or cumulative GPA?",
      answer:
        "Many renew on cumulative GPA; read each award’s term-versus-cumulative requirement.",
    }
  ],
  "how-many-working-days-in-2027": [
    {
      question: "How do I count 2027 working days with the business-days tool?",
      answer:
        "Set the year or date range to 2027, add holiday dates you observe, and read the weekday total minus holidays.",
    },
    {
      question: "Which federal holidays fall in 2027?",
      answer:
        "Use the year’s official list—including observances when a holiday shifts from a weekend—and enter those dates.",
    },
    {
      question: "Do I exclude Saturdays and Sundays automatically?",
      answer:
        "Business-day mode typically skips weekends; confirm the tool’s weekend setting matches your workplace.",
    },
    {
      question: "How should companies that close on Christmas Eve adjust the count?",
      answer:
        "Add December 24 as an extra holiday if your policy gives that day off.",
    },
    {
      question: "Can I get a monthly working-day breakdown for 2027?",
      answer:
        "Run each month as its own range, or filter the year view if the calculator shows monthly totals.",
    },
    {
      question: "What if my team works Sunday–Thursday?",
      answer:
        "Weekend definitions change—adjust which days count as non-working before trusting the total.",
    },
    {
      question: "How do observed Monday holidays affect July 4th week?",
      answer:
        "When the holiday is observed on Monday, that Monday drops from working days even if July 4 is Sunday.",
    },
    {
      question: "Should contractors use federal holidays?",
      answer:
        "Only if the contract says so; otherwise enter the client’s holiday calendar.",
    },
    {
      question: "How accurate is a count without local state holidays?",
      answer:
        "Federal-only counts miss state or company days; add every extra closure you truly observe.",
    },
    {
      question: "Can I reuse the 2027 list for payroll accruals?",
      answer:
        "Yes as a planning input—still align with HR’s official calendar before locking policies.",
    }
  ],
  "how-to-calculate-a-discount": [
    {
      question: "How do I apply a percent off and then see the savings amount?",
      answer:
        "Enter the original price and discount percent; read both the final price and the money saved.",
    },
    {
      question: "How should stacked coupon discounts be applied?",
      answer:
        "Apply them in the order the store states—usually one after another on the reduced price, not added percents.",
    },
    {
      question: "Can I calculate the pre-discount price from a sale tag?",
      answer:
        "Yes—enter the sale price and percent off, then solve backward for the original when the tool supports it.",
    },
    {
      question: "Does sales tax change the discount percent?",
      answer:
        "Tax is usually added after the discounted price; the percent off still refers to the pre-tax item price unless noted.",
    },
    {
      question: "How do I compare 25% off versus $20 off?",
      answer:
        "Run both against the same original price and pick the lower final price.",
    },
    {
      question: "What is a quick mental check for 15% off?",
      answer:
        "Take 10% then half of that 10% and add them; subtract the sum from the original.",
    },
    {
      question: "How do member-only prices fit in?",
      answer:
        "Treat the member price as another discount scenario and compare it to the public sale percent.",
    },
    {
      question: "Why might online and in-store finals differ?",
      answer:
        "Rounding, tax jurisdiction, or excluded fees can change the receipt even with the same listed percent.",
    },
    {
      question: "Can I include shipping in the discount base?",
      answer:
        "Only if the promotion says so; most item discounts exclude shipping.",
    },
    {
      question: "How do I handle a discount cap like “up to $50 off”?",
      answer:
        "Compute the percent savings, then clamp the dollar savings at the cap before subtracting.",
    }
  ],
  "how-to-calculate-weighted-average": [
    {
      question: "How do I enter values and weights in a weighted average?",
      answer:
        "List each value with its weight, multiply, sum those products, then divide by the sum of weights.",
    },
    {
      question: "What if my weights are percentages that total 100?",
      answer:
        "Convert them to decimals or use 100 as the total weight; both approaches match if applied consistently.",
    },
    {
      question: "How do course credits act as weights in GPA?",
      answer:
        "Each grade’s points are weighted by credit hours, which is a classic weighted average.",
    },
    {
      question: "Why can a weighted average sit outside the simple mean of two groups?",
      answer:
        "Larger groups pull harder; combining group means needs the original sizes as weights.",
    },
    {
      question: "Can weights be greater than one?",
      answer:
        "Yes—weights are relative. Only the ratios matter, not a 0–1 limit.",
    },
    {
      question: "How do I find the missing score to hit a target average?",
      answer:
        "Algebraically solve for the unknown value given remaining weight, or trial values in the calculator.",
    },
    {
      question: "What happens with a zero weight?",
      answer:
        "That item contributes nothing; ensure you did not mean a missing mandatory component.",
    },
    {
      question: "Should survey Likert scores use weighted averages?",
      answer:
        "They can if response options carry numeric weights; document the coding.",
    },
    {
      question: "How do I weight returns in a simple portfolio example?",
      answer:
        "Weight each asset’s return by its portfolio share, then sum the weighted returns.",
    },
    {
      question: "Can negative weights appear?",
      answer:
        "Rare in schoolwork; in finance they can mean short positions—know the context before using them.",
    }
  ],
  "how-to-change-text-case": [
    {
      question: "How do I convert a paragraph to sentence case cleanly?",
      answer:
        "Paste the text, choose Sentence case, then fix proper nouns the converter cannot know.",
    },
    {
      question: "When should I use Title Case versus sentence case?",
      answer:
        "Title Case fits headlines and book titles; sentence case fits ordinary body sentences.",
    },
    {
      question: "How do I turn a phrase into kebab-case for a slug?",
      answer:
        "Choose kebab-case or lowercase-with-hyphens so spaces become hyphens and letters go lowercase.",
    },
    {
      question: "Will ALL CAPS pasted from a PDF normalize?",
      answer:
        "Yes—run lower case or sentence case, then restore acronyms that should stay uppercase.",
    },
    {
      question: "Can I convert programming identifiers between cases?",
      answer:
        "Use camelCase, PascalCase, or snake_case modes when offered; verify reserved words afterward.",
    },
    {
      question: "Do emoji and symbols change in case conversion?",
      answer:
        "They stay as-is; only alphabetic characters shift case.",
    },
    {
      question: "How should I handle brand names like iPhone?",
      answer:
        "Re-apply the official capitalization after bulk conversion.",
    },
    {
      question: "Is there a risk converting code comments in bulk?",
      answer:
        "Yes—identifiers inside comments might change; convert prose separately from code.",
    },
    {
      question: "Can I keep intentional mid-word capitals?",
      answer:
        "Most converters will alter them; protect those tokens before running Title Case.",
    },
    {
      question: "Does line-wrapping in the editor mean case changed?",
      answer:
        "No—wrapping is display only; check the actual characters after conversion.",
    }
  ],
  "how-to-convert-html-to-markdown": [
    {
      question: "How do I convert an HTML snippet into Markdown on this page?",
      answer:
        "Paste the HTML, run convert, then copy the Markdown and spot-check headings, links, and lists.",
    },
    {
      question: "Will semantic tags like article or section become Markdown?",
      answer:
        "They usually unwrap to their text and inner Markdown; there is no single Markdown twin for every HTML5 sectioning tag.",
    },
    {
      question: "How are images represented after conversion?",
      answer:
        "img tags typically become Markdown image syntax with alt text and the src URL when both are present.",
    },
    {
      question: "What happens to inline styles and classes?",
      answer:
        "Most converters drop class and style attributes because plain Markdown cannot express them.",
    },
    {
      question: "Can I keep a raw HTML table if Markdown tables look wrong?",
      answer:
        "Some pipelines allow embedded HTML tables; otherwise simplify the table before converting.",
    },
    {
      question: "Why did my headings shift levels?",
      answer:
        "Browsers and converters map h1–h6 to # through ######; nested section markup can look like a level jump.",
    },
    {
      question: "Are definition lists supported?",
      answer:
        "Basic Markdown has no standard definition-list syntax; those tags may flatten to paragraphs.",
    },
    {
      question: "How do blockquotes convert?",
      answer:
        "blockquote content usually becomes lines prefixed with > in Markdown.",
    },
    {
      question: "Will JavaScript-rendered HTML convert correctly?",
      answer:
        "Only the HTML you paste is converted—copy the post-render DOM if the source page builds content with scripts.",
    },
    {
      question: "Is the HTML uploaded during conversion?",
      answer:
        "Conversion is meant to run in the browser session; keep sensitive markup offline if needed.",
    }
  ],
  "how-to-write-a-url-slug": [
    {
      question: "Should I strip years from news slugs?",
      answer:
        "Keep a year only when it disambiguates evergreen titles; otherwise shorter topical slugs age better.",
    },
    {
      question: "How do I slugify titles with ampersands?",
      answer:
        "Replace & with “and” or drop it so the slug stays readable without encoded characters.",
    },
    {
      question: "Do trailing slashes belong in the slug field?",
      answer:
        "No—the slug is the path segment; your host adds or normalizes trailing slashes separately.",
    },
    {
      question: "Should category folders sit before the slug?",
      answer:
        "Many CMS paths use /category/slug; keep the slug itself free of duplicated category words.",
    },
    {
      question: "How do I handle duplicate draft titles?",
      answer:
        "Add a short disambiguator (product, city, or year) so each published slug stays unique.",
    },
    {
      question: "Is transliteration better than dropping accents?",
      answer:
        "Transliterate when readers search Latin keywords; some sites keep Unicode if the stack supports it.",
    },
    {
      question: "Can query strings be part of a slug?",
      answer:
        "No—slugs exclude ? and & parameters; keep tracking tags out of the path.",
    },
    {
      question: "Should I update slugs when retitling lightly?",
      answer:
        "Avoid churn for tiny title edits; change slugs when the topic truly shifts, then redirect.",
    },
    {
      question: "How short is too short for a slug?",
      answer:
        "Single generic words collide often; two or three clear tokens usually balance clarity and length.",
    },
    {
      question: "Do ebook or PDF vanity URLs follow the same rules?",
      answer:
        "Yes—human-readable hyphenated segments still help sharing even for download landing pages.",
    }
  ],
  "how-to-remove-duplicate-lines": [
    {
      question: "Does letter case affect duplicate detection?",
      answer:
        "Exact matching is usually case-sensitive; normalize case first if “Email” and “email” should collapse.",
    },
    {
      question: "Can I dedupe while keeping the original order?",
      answer:
        "First-seen order is typical: earlier unique lines stay, later repeats drop.",
    },
    {
      question: "How do I prepare a messy spreadsheet column?",
      answer:
        "Paste one column of values, trim spaces if needed, then remove duplicate lines before reimporting.",
    },
    {
      question: "Will Windows and Unix line endings confuse matches?",
      answer:
        "Normalize line breaks first so the same text is not kept twice for CRLF vs LF only.",
    },
    {
      question: "Can I dedupe multiline addresses?",
      answer:
        "This tool compares whole lines; join address blocks onto one line each before deduping.",
    },
    {
      question: "What if duplicates are separated by blank lines?",
      answer:
        "Blank lines are separate entries; remove blanks or duplicates in two passes as needed.",
    },
    {
      question: "Is fuzzy matching available for near-duplicates?",
      answer:
        "No—near matches need manual cleanup or a specialized fuzzy tool.",
    },
    {
      question: "How should I dedupe tagged lists with prefixes?",
      answer:
        "Strip differing prefixes first, or duplicates with tags will look unique.",
    },
    {
      question: "Does sorting before dedupe change results?",
      answer:
        "Sort only if you want alphabetical output; uniqueness itself does not require sorting.",
    },
    {
      question: "Can I undo after removing duplicates?",
      answer:
        "Keep the original paste in another tab or undo in your editor before closing the page.",
    }
  ],
  "how-to-remove-extra-spaces-from-text": [
    {
      question: "Will non-breaking spaces be cleaned?",
      answer:
        "Many cleaners treat regular spaces; paste into a plain field first if NBSP characters linger.",
    },
    {
      question: "How do I preserve markdown code fences?",
      answer:
        "Skip minifying indented code blocks; clean prose separately from fenced samples.",
    },
    {
      question: "Can I collapse spaces but keep paragraph breaks?",
      answer:
        "Choose a mode that trims within lines while leaving blank lines that mark paragraphs.",
    },
    {
      question: "Why do double spaces appear after periods?",
      answer:
        "Old typing habits insert them; collapsing whitespace usually reduces them to one.",
    },
    {
      question: "Is it safe for poetry with intentional gaps?",
      answer:
        "No—artistic spacing should be edited by hand so deliberate gaps survive.",
    },
    {
      question: "How do leading spaces in lists behave?",
      answer:
        "Trimming lines can remove indentation that markdown or code relies on—preview first.",
    },
    {
      question: "Can I strip spaces around commas in CSV?",
      answer:
        "Yes for simple files, but quoted fields with internal spaces need a CSV-aware editor.",
    },
    {
      question: "Do zero-width characters count as spaces?",
      answer:
        "They are not normal spaces; use a dedicated Unicode cleaner if copy/paste inserts them.",
    },
    {
      question: "Should I clean before or after spellcheck?",
      answer:
        "Clean first so spellcheck is not distracted by double spaces and stray tabs.",
    },
    {
      question: "Will cleaning change my byte size much?",
      answer:
        "Prose often shrinks modestly; code with heavy indentation can shrink more.",
    }
  ],
  "how-to-sort-lines-of-text": [
    {
      question: "How do I sort case-insensitively?",
      answer:
        "Lowercase a copy for ordering, or use a case-insensitive mode if the tool offers one.",
    },
    {
      question: "Can I sort by the second column of a TSV?",
      answer:
        "Not directly—extract that column, sort it with keys, or use a spreadsheet for field sorts.",
    },
    {
      question: "Where do blank lines go after sorting?",
      answer:
        "They usually cluster at the start or end depending on how empty strings compare.",
    },
    {
      question: "How should version strings like 1.10 vs 1.2 sort?",
      answer:
        "Plain text puts 1.10 before 1.2; use numeric or natural sort when available.",
    },
    {
      question: "Can I randomize lines instead of sorting?",
      answer:
        "This guide focuses on ordered sorts; shuffling needs a separate randomize step.",
    },
    {
      question: "Does locale change alphabetical order?",
      answer:
        "Accent and language rules can; stick to one locale when comparing team outputs.",
    },
    {
      question: "How do I sort dates written as text?",
      answer:
        "Prefer ISO YYYY-MM-DD so lexicographic order matches chronology.",
    },
    {
      question: "Will sorting ruin paired name/email lines?",
      answer:
        "Keep pairs on one line (name, email) so they move together when sorted.",
    },
    {
      question: "Can I sort descending numbers for leaderboards?",
      answer:
        "Use numeric sort with reverse order so 100 appears above 20.",
    },
    {
      question: "Should I trim before sorting names?",
      answer:
        "Yes—leading spaces can push entries out of true alphabetical position.",
    }
  ],
  "how-to-minify-javascript": [
    {
      question: "Should I minify during local development?",
      answer:
        "Keep readable sources while coding; minify for production builds or bandwidth checks.",
    },
    {
      question: "Does minification replace a bundler?",
      answer:
        "No—bundlers resolve modules and trees; minifiers mainly shrink already-bundled output.",
    },
    {
      question: "Will const and let be rewritten to var?",
      answer:
        "Modern minifiers usually keep block scoping; they compress names and whitespace instead.",
    },
    {
      question: "Can I minify already-minified vendor files again?",
      answer:
        "Re-minifying rarely helps and can break files that expect specific formatting.",
    },
    {
      question: "How do license comments survive?",
      answer:
        "Some tools keep @license banners when configured; this quick minify may strip all comments.",
    },
    {
      question: "Is Unicode in strings safe?",
      answer:
        "Yes—string contents remain; only identifiers and whitespace around code are compressed.",
    },
    {
      question: "What about template literals with spacing?",
      answer:
        "Spaces inside template strings stay; only outer code formatting is removed.",
    },
    {
      question: "Should source maps ship to users?",
      answer:
        "Keep maps private or on protected URLs if you generate them elsewhere; this tool may not emit maps.",
    },
    {
      question: "Can minified code hide secrets?",
      answer:
        "No—minification is not encryption; never put API secrets in front-end JavaScript.",
    },
    {
      question: "Why did a regex break after minify?",
      answer:
        "Rare parser edge cases happen—compare the original, fix the pattern, and minify again.",
    }
  ],
  "how-to-convert-markdown-to-html": [
    {
      question: "Do footnotes convert in this Markdown flavor?",
      answer:
        "Support varies; if footnotes stay plain text, use a flavor that documents footnote syntax.",
    },
    {
      question: "How are images turned into HTML?",
      answer:
        "Standard ![alt](url) becomes an img tag; ensure URLs are reachable where you publish.",
    },
    {
      question: "Can I keep class names on paragraphs?",
      answer:
        "Basic conversion rarely adds custom classes; wrap output in your own CSS later.",
    },
    {
      question: "Why did my autolink stay unclickable?",
      answer:
        "Some parsers need explicit [text](url) markdown; bare URLs may remain plain.",
    },
    {
      question: "Does YAML front matter get converted?",
      answer:
        "Strip front matter before converting if you only want the article body as HTML.",
    },
    {
      question: "How do I preview responsive tables?",
      answer:
        "Paste the HTML into a page with your stylesheet; raw tags alone do not include layout CSS.",
    },
    {
      question: "Do GitHub-style task lists become input checkboxes?",
      answer:
        "Only if the Markdown engine implements them; otherwise they appear as plain list text.",
    },
    {
      question: "Can I convert Markdown that embeds KaTeX?",
      answer:
        "Math usually needs a separate renderer; this step focuses on standard Markdown to HTML.",
    },
    {
      question: "Should I sanitize HTML before displaying user input?",
      answer:
        "Yes—treat converted HTML as untrusted if authors can inject raw tags.",
    },
    {
      question: "Does conversion change smart quotes?",
      answer:
        "Text is preserved as written; typographic quotes remain characters in the HTML output.",
    }
  ],
  "how-to-minify-css": [
    {
      question: "Should I minify CSS before or after Autoprefixer?",
      answer:
        "Run Autoprefixer on readable CSS first, then minify the prefixed output for production.",
    },
    {
      question: "Can minification break CSS custom properties?",
      answer:
        "Values inside var() stay intact; problems usually come from earlier hand edits, not whitespace removal.",
    },
    {
      question: "How do source maps relate to minified CSS?",
      answer:
        "Build tools can emit CSS maps; this paste minifier focuses on compressed text without maps.",
    },
    {
      question: "Is it safe to minify print-only stylesheets?",
      answer:
        "Yes—same rules apply; keep media queries intact so print styles still target correctly.",
    },
    {
      question: "Will @import URLs be inlined?",
      answer:
        "No—imports remain references; bundlers handle inlining separately.",
    },
    {
      question: "Can I minify Tailwind’s generated CSS?",
      answer:
        "Yes after the utility build; do not hand-minify Tailwind source configs.",
    },
    {
      question: "Why keep a non-minified copy in git?",
      answer:
        "Readable CSS is easier to review; ship minified artifacts from CI instead of editing them.",
    },
    {
      question: "Do comments with /*! license */ survive?",
      answer:
        "Some pipelines preserve bang comments; assume this quick minify may strip them unless noted.",
    },
    {
      question: "How much smaller will gzip make it afterward?",
      answer:
        "Minify first, then gzip/brotli on the server—both layers stack for transfer size.",
    },
    {
      question: "Can nested CSS from modern browsers be minified?",
      answer:
        "If your syntax is valid nested CSS, minifiers that understand it will compress safely; invalid nesting fails earlier.",
    }
  ],
  "how-to-minify-html": [
    {
      question: "Should I minify server-rendered templates or static output?",
      answer:
        "Prefer minifying the final HTML response or build output so template logic stays readable.",
    },
    {
      question: "Can minification affect accessibility attributes?",
      answer:
        "Valid attributes remain; avoid aggressive optional-tag removal if your tooling is unsure.",
    },
    {
      question: "How do conditional IE comments behave?",
      answer:
        "Legacy conditional comments are uncommon now; many minifiers strip ordinary comments including them.",
    },
    {
      question: "Is pretty-printed HTML bad for SEO?",
      answer:
        "Search engines care about content, not indentation; minify for speed, not ranking tricks.",
    },
    {
      question: "Will it reorder my attributes?",
      answer:
        "Most simple minifiers only remove whitespace; attribute order usually stays the same.",
    },
    {
      question: "Can I minify email HTML?",
      answer:
        "Be careful—email clients are fragile. Test thoroughly or use an email-safe minifier profile.",
    },
    {
      question: "Does removing whitespace break inline SVG?",
      answer:
        "SVG can be sensitive to spaces in text nodes; preview rendered output after minifying.",
    },
    {
      question: "Should JSON-LD script blocks be minified?",
      answer:
        "You can compact JSON inside script tags, but keep it valid JSON so rich results still parse.",
    },
    {
      question: "How do I compare before-and-after sizes fairly?",
      answer:
        "Compare UTF-8 byte lengths of the full documents, then re-check transferred size with compression on.",
    },
    {
      question: "Can HTML minification replace image optimization?",
      answer:
        "No—it only shrinks markup. Compress media separately for real gains.",
    }
  ],
  "how-to-convert-text-to-pdf": [
    {
      question: "Can I set custom margins for printed text?",
      answer:
        "Use the margin controls if offered; otherwise expect sensible default page margins around the body text.",
    },
    {
      question: "How do line wraps differ from my editor?",
      answer:
        "PDF width and font size drive wrapping—preview a page before trusting exact line breaks.",
    },
    {
      question: "Will tabs expand like in a code editor?",
      answer:
        "Tabs may become spaces or stay narrow; convert code to spaces first for predictable alignment.",
    },
    {
      question: "Can I add a header on every page?",
      answer:
        "If header fields exist, fill them; otherwise the body title may appear only on the first page.",
    },
    {
      question: "Does dark-mode text color affect the PDF?",
      answer:
        "Exported PDFs usually use dark text on white regardless of the site theme.",
    },
    {
      question: "How should I handle very long paragraphs?",
      answer:
        "They wrap automatically; insert blank lines yourself when you need visual breaks.",
    },
    {
      question: "Is copy-paste from the PDF lossless?",
      answer:
        "Text PDFs usually allow copying, though ligatures or odd fonts can occasionally alter characters.",
    },
    {
      question: "Can I choose landscape orientation?",
      answer:
        "Pick landscape when the control is available; otherwise the default portrait page is used.",
    },
    {
      question: "What happens to emoji in the PDF?",
      answer:
        "If the embedded font lacks glyphs, emoji may become boxes—stick to supported characters when fidelity matters.",
    },
    {
      question: "Are downloads stored on ToolStarHub servers?",
      answer:
        "Generation is meant to stay in your browser session; keep sensitive drafts offline if required.",
    }
  ],
  "json-vs-xml-vs-yaml": [
    {
      question: "When is XML still the better choice?",
      answer:
        "Choose XML for document-centric data, mixed content, or ecosystems that already standardize on schemas and namespaces.",
    },
    {
      question: "Why do APIs prefer JSON over YAML?",
      answer:
        "JSON parses unambiguously in browsers and has broad first-class support; YAML’s indentation is better for humans editing configs.",
    },
    {
      question: "Can XML attributes replace nested elements?",
      answer:
        "Attributes suit simple scalars; nested elements fit repeated or complex structures—style guides differ by schema.",
    },
    {
      question: "How do I migrate a YAML config to JSON?",
      answer:
        "Parse YAML with a trusted library, then serialize JSON—watch duplicate keys and unquoted special values.",
    },
    {
      question: "Is binary JSON (BSON) interchangeable with JSON?",
      answer:
        "No—BSON adds types and is not plain text JSON; convert explicitly when crossing systems.",
    },
    {
      question: "Do XML namespaces work in JSON?",
      answer:
        "JSON has no native namespaces; encode them as property naming conventions if you must map across.",
    },
    {
      question: "Why is YAML sensitive to whitespace errors?",
      answer:
        "Indentation defines structure; a one-space slip can nest keys incorrectly without a loud syntax error.",
    },
    {
      question: "Can I validate YAML with a JSON Schema?",
      answer:
        "Some toolchains allow it after conversion; native YAML schema efforts exist but JSON Schema is more common.",
    },
    {
      question: "Which format supports streaming large payloads best?",
      answer:
        "JSON and XML both have streaming parsers; YAML is usually loaded as a whole document.",
    },
    {
      question: "Should I pretty-print JSON in git repos?",
      answer:
        "Pretty-printed JSON improves diffs; minify only for wire transfer if size matters.",
    }
  ],
  "md5-vs-sha-256": [
    {
      question: "Why do download pages still show MD5 sums?",
      answer:
        "Legacy habit and speed—prefer SHA-256 when both are published, especially for security-sensitive files.",
    },
    {
      question: "Can I truncate a SHA-256 digest safely?",
      answer:
        "Shorter prefixes raise collision risk; keep the full hex string for verification.",
    },
    {
      question: "Does hashing encrypt my file?",
      answer:
        "No—hashes are one-way fingerprints. Anyone can recompute them from the same bytes.",
    },
    {
      question: "How do salted passwords relate to SHA-256?",
      answer:
        "Password storage needs slow KDFs (bcrypt, scrypt, Argon2), not a bare SHA-256 of the password.",
    },
    {
      question: "What is a rainbow table in this context?",
      answer:
        "Precomputed hash lookups for common inputs; salts and slow hashing defeat them.",
    },
    {
      question: "Is SHA-512 always stronger than SHA-256?",
      answer:
        "SHA-512 has a larger digest; for most file integrity checks SHA-256 is already standard and sufficient.",
    },
    {
      question: "Can hardware acceleration change the hash value?",
      answer:
        "No—correct implementations must match the same digest regardless of CPU instructions used.",
    },
    {
      question: "How should I compare two digests visually?",
      answer:
        "Compare full strings case-insensitively; do not stop at the first few hex characters.",
    },
    {
      question: "Does zip compression alter a file’s hash?",
      answer:
        "Yes if bytes change. Hash the exact artifact you distribute, not an unrelated archive layout.",
    },
    {
      question: "Why might Git show a different checksum concept?",
      answer:
        "Git object IDs hash content with headers; they are not raw MD5/SHA-256 of the working-tree file alone.",
    }
  ],
  "regex-cheat-sheet-email-phone-url": [
    {
      question: "Should I validate email only with regex on the server?",
      answer:
        "Use regex as a first pass, then send a confirmation message—RFC-complete email regex is impractical.",
    },
    {
      question: "How do I allow optional country codes in phones?",
      answer:
        "Make the +country segment optional and constrain digit lengths per your market’s rules.",
    },
    {
      question: "Why do URL patterns accidentally match markdown links?",
      answer:
        "Trailing punctuation and parentheses confuse naive patterns—trim common wrappers after the match.",
    },
    {
      question: "Can I ban disposable email domains with regex alone?",
      answer:
        "Regex cannot keep up with domain lists; maintain an allow/deny list separately.",
    },
    {
      question: "What flags help multiline phone lists?",
      answer:
        "Use multiline mode with ^ and $ per line, or split lines before testing each number.",
    },
    {
      question: "How do internationalized domain names affect URL regex?",
      answer:
        "IDNs may appear as punycode; decide whether to allow Unicode host labels explicitly.",
    },
    {
      question: "Is \\d safe for phone digits in all locales?",
      answer:
        "\\d may match more than ASCII 0–9 in Unicode modes—use [0-9] when you need ASCII only.",
    },
    {
      question: "Should capture groups extract the TLD from URLs?",
      answer:
        "You can, but maintaining TLD lists is brittle; prefer a real URL parser when available.",
    },
    {
      question: "How do I test patterns without pasting production data?",
      answer:
        "Use synthetic examples that cover edge cases—plus addresses, extensions, and long query strings.",
    },
    {
      question: "Can possessive quantifiers speed up email checks?",
      answer:
        "They can reduce backtracking in some engines, but clarity and tests matter more than micro-tweaks.",
    }
  ],
  "how-to-translate-urdu-news-into-english": [
    {
      question: "Should I translate headlines separately from body copy?",
      answer:
        "Often yes—headlines are denser; review them after the body so tone stays natural in English.",
    },
    {
      question: "How do I handle Urdu poetry or idioms in news?",
      answer:
        "Prefer sense-for-sense English and note cultural idioms briefly instead of forced word swaps.",
    },
    {
      question: "Can mixed English loanwords stay untranslated?",
      answer:
        "Keep widely known loanwords when readers expect them; translate obscure terms for clarity.",
    },
    {
      question: "Why might names of officials look inconsistent?",
      answer:
        "Transliteration varies—pick one Latin spelling per person and reuse it through the article.",
    },
    {
      question: "Does Brief mode drop important figures?",
      answer:
        "Shorter modes compress detail; verify numbers against the Urdu source before publishing.",
    },
    {
      question: "How should I treat embedded tweets or quotes?",
      answer:
        "Translate surrounding narration; keep quoted social text accurate or clearly marked if left bilingual.",
    },
    {
      question: "Is machine output enough for legal notices?",
      answer:
        "No—sensitive or legal text needs a human reviewer fluent in both languages.",
    },
    {
      question: "Can I paste columns from a PDF newspaper?",
      answer:
        "Clean broken line wraps first so sentences are contiguous before translation.",
    },
    {
      question: "How do date formats change in English?",
      answer:
        "Convert to a clear English order (for example 5 November 2026) so international readers are not confused.",
    },
    {
      question: "Should agency bylines be translated?",
      answer:
        "Keep recognizable agency names in their usual English form (AFP, Reuters) when standard.",
    }
  ],
  "what-is-pdf-a-and-when-you-need-it": [
    {
      question: "Do courts always require PDF/A filings?",
      answer:
        "Many prefer or mandate PDF/A, but rules vary—check the clerk’s technical standards before filing.",
    },
    {
      question: "Can fonts be missing in a valid PDF/A?",
      answer:
        "No—needed fonts must be embedded so the file renders the same years later.",
    },
    {
      question: "Is PDF/A good for interactive forms?",
      answer:
        "Basic archival levels restrict some interactivity; confirm the level your archive allows.",
    },
    {
      question: "How does PDF/A relate to long-term digital preservation?",
      answer:
        "It constrains features that break over time, favoring self-contained, predictable documents.",
    },
    {
      question: "Can I convert an existing PDF to PDF/A easily?",
      answer:
        "Converters exist, but failures happen when fonts, encryption, or media violate the profile.",
    },
    {
      question: "Does color management matter for PDF/A?",
      answer:
        "Yes—profiles and output intents help keep colors reproducible in archival viewers.",
    },
    {
      question: "Should marketing flyers be saved as PDF/A?",
      answer:
        "Usually unnecessary—use PDF/A for records retention, not everyday promotional PDFs.",
    },
    {
      question: "What happens if JavaScript is present?",
      answer:
        "Most PDF/A levels disallow or strip active JavaScript because it is not archival-safe.",
    },
    {
      question: "Is PDF/A-4 aimed at newer PDF versions?",
      answer:
        "PDF/A-4 aligns with newer PDF editions; pick the level your repository documents support.",
    },
    {
      question: "Can scanned images alone satisfy PDF/A?",
      answer:
        "Image-only scans can, if the file meets embedding and metadata rules for the chosen level.",
    }
  ],
  "how-to-reduce-pdf-size-for-email": [
    {
      question: "Should I downsample images before compressing the PDF?",
      answer:
        "For photo-heavy decks, resize large images first, then run compression for smaller attachments.",
    },
    {
      question: "Why do corporate gateways reject some “small” PDFs?",
      answer:
        "Policy filters may block by type or reputation, not only size—ask IT if compression is not enough.",
    },
    {
      question: "Can OCR increase file size after a scan?",
      answer:
        "Hidden text layers add bytes; balance searchability against attachment limits.",
    },
    {
      question: "Is ZIP better than PDF compression for email?",
      answer:
        "Some clients block ZIPs; a lean PDF is often safer for recipients.",
    },
    {
      question: "How do fonts affect PDF weight?",
      answer:
        "Embedded font subsets help fidelity but add size—standard fonts keep files lighter.",
    },
    {
      question: "Will printing to PDF from a browser shrink slides?",
      answer:
        "Sometimes, but quality varies; dedicated compression after export is more predictable.",
    },
    {
      question: "Can I remove unused pages to save space?",
      answer:
        "Yes—delete or extract only needed pages before compressing the remainder.",
    },
    {
      question: "Does grayscale conversion help much?",
      answer:
        "For color scans, grayscale can cut size noticeably when color is not required.",
    },
    {
      question: "What quality setting should invoices use?",
      answer:
        "Keep text sharp—moderate compression that still leaves amounts readable under zoom.",
    },
    {
      question: "Are cloud “email large file” links an alternative?",
      answer:
        "Yes when policy allows; still compress if the recipient needs an attached PDF offline.",
    }
  ],
  "how-to-convert-jpg-to-png-and-png-to-jpg": [
    {
      question: "When should I keep PNG instead of converting to JPG?",
      answer:
        "Keep PNG for sharp UI graphics, screenshots with text, or images that need transparency.",
    },
    {
      question: "Does repeated JPG re-encoding hurt quality?",
      answer:
        "Yes—each lossy save can add artifacts; convert from the best master you still have.",
    },
    {
      question: "Can I batch-rename outputs after conversion?",
      answer:
        "Downloads keep clear names; rename in your file manager if you need a project convention.",
    },
    {
      question: "Why convert PNG screenshots to JPG for email?",
      answer:
        "Photos and soft gradients shrink more as JPG; screenshots with text may look worse—preview first.",
    },
    {
      question: "Is WebP a better middle ground?",
      answer:
        "Often for the web, but use JPG/PNG when a recipient or printer demands those formats.",
    },
    {
      question: "Do color profiles survive conversion?",
      answer:
        "Behavior varies; for print-critical work, verify color in the destination app.",
    },
    {
      question: "Can animated PNGs convert cleanly to JPG?",
      answer:
        "JPG is a still format—you will get a single frame, not animation.",
    },
    {
      question: "Should product photos on white use JPG or PNG?",
      answer:
        "JPG is usually enough for soft photos; PNG helps if you need a truly flat transparent cutout later.",
    },
    {
      question: "How do I avoid muddy text after JPG conversion?",
      answer:
        "Raise quality or stay on PNG when the frame is mostly text and hard edges.",
    },
    {
      question: "Does conversion change EXIF orientation flags?",
      answer:
        "Viewers may normalize rotation; check the pixels if a phone photo looks sideways afterward.",
    }
  ],
  "how-to-convert-pdf-pages-to-jpg": [
    {
      question: "How do I export only pages 3 through 5?",
      answer:
        "Set the page range before rendering so you do not download unused images.",
    },
    {
      question: "Why are JPG pages larger than the PDF?",
      answer:
        "Raster pages store every pixel; vector PDFs stay compact until flattened to images.",
    },
    {
      question: "Can I raise DPI for poster prints?",
      answer:
        "Higher render resolution yields larger, sharper JPGs suitable for print—watch file size.",
    },
    {
      question: "Will form field values appear in the JPG?",
      answer:
        "Filled appearances usually rasterize; interactive form logic does not carry over.",
    },
    {
      question: "How should I zip many page images?",
      answer:
        "Use Download all when offered, or select the folder of JPGs and compress them locally.",
    },
    {
      question: "Do crop boxes affect what gets rendered?",
      answer:
        "Yes—visible page boxes determine the frame; unexpected crops often come from trim boxes.",
    },
    {
      question: "Can password-protected PDFs convert?",
      answer:
        "Unlock or remove the password first; encrypted files cannot be rasterized here.",
    },
    {
      question: "Is JPG ideal for diagrams with thin lines?",
      answer:
        "Thin lines can softens—try higher quality or PNG if edges look blocky.",
    },
    {
      question: "How do facing pages in spreads export?",
      answer:
        "Each PDF page becomes its own JPG unless the file already flattened a spread onto one page.",
    },
    {
      question: "Should I flatten layers before converting?",
      answer:
        "If optional content hides art, flatten or enable those layers so the JPG matches the intended view.",
    }
  ],
  "how-to-convert-images-to-pdf": [
    {
      question: "Can I mix portrait and landscape photos in one PDF?",
      answer:
        "Yes—auto orientation or manual rotation keeps each page upright before export.",
    },
    {
      question: "How do I make a photo booklet with equal margins?",
      answer:
        "Choose fit mode so entire images show with consistent padding instead of aggressive cropping.",
    },
    {
      question: "Will HEIC from iPhone convert on desktop browsers?",
      answer:
        "Support varies by browser; convert HEIC to JPG first if the tool cannot decode it.",
    },
    {
      question: "Can I add page numbers to the photo PDF?",
      answer:
        "This flow focuses on image pages; add numbers in a PDF editor afterward if required.",
    },
    {
      question: "What order should scanned homework pages use?",
      answer:
        "Sort filenames or drag pages so problem sets stay sequential before creating the PDF.",
    },
    {
      question: "Does fill mode crop important edges?",
      answer:
        "Fill covers the page and may crop overflow—switch to fit when you must see the whole image.",
    },
    {
      question: "How large can a vacation album PDF get?",
      answer:
        "Dozens of high-res photos grow quickly; compress images first if you need emailable size.",
    },
    {
      question: "Are annotations from the source photos kept?",
      answer:
        "Only pixel content is placed on pages—separate sidecar notes are not imported.",
    },
    {
      question: "Can I password-protect the resulting PDF?",
      answer:
        "Encryption is a separate step in a PDF editor after you download the file.",
    },
    {
      question: "Should screenshots use PNG before making a PDF?",
      answer:
        "PNG keeps UI text crisp; JPG may blur interface edges inside the PDF.",
    }
  ],
  "how-to-extract-one-page-from-a-pdf": [
    {
      question: "Does extraction copy bookmarks from the parent file?",
      answer:
        "Usually only the chosen page content is saved; bookmarks covering other pages are dropped.",
    },
    {
      question: "Can I extract a page range as one file?",
      answer:
        "Yes when the splitter allows ranges—enter start and end so contiguous pages stay together.",
    },
    {
      question: "Will annotations on that page survive?",
      answer:
        "Most visible annotations remain with the page; behavior can differ for complex markup.",
    },
    {
      question: "How do I extract the last page quickly?",
      answer:
        "Enter the final page number from the viewer’s page count rather than guessing.",
    },
    {
      question: "Does extraction reduce file size a lot?",
      answer:
        "One page is smaller than the whole document, though shared fonts may still add overhead.",
    },
    {
      question: "Can I extract pages from a portfolio PDF?",
      answer:
        "Portfolio attachments differ—open embedded files individually if page extract cannot see them.",
    },
    {
      question: "Why is the extracted page rotated?",
      answer:
        "It inherits the page’s rotate flag; rotate in a viewer if your printer expects upright output.",
    },
    {
      question: "Is batch extraction of many singles supported?",
      answer:
        "Split into single-page files when you need every page separately, then keep the one you want.",
    },
    {
      question: "Do digital signatures remain valid after extract?",
      answer:
        "Splitting usually breaks signature coverage—treat extracted pages as new unsigned files.",
    },
    {
      question: "Can I extract to replace a damaged page elsewhere?",
      answer:
        "Yes—export the good page, then use merge tools to rebuild a clean document.",
    }
  ],
  "title-tag-length": [
    {
      question: "How do mobile SERPs truncate titles differently?",
      answer:
        "Narrow screens may show fewer pixels—front-load unique meaning so early words still make sense.",
    },
    {
      question: "Should keyword stuffing fill leftover characters?",
      answer:
        "No—irrelevant extras look spammy and may be rewritten by Google anyway.",
    },
    {
      question: "Can pipe separators waste precious width?",
      answer:
        "They are fine in moderation; multiple pipes plus a long brand can push key words out of view.",
    },
    {
      question: "Do numbers in titles improve click-through?",
      answer:
        "Specific years or counts can help when accurate; avoid clickbait that the page does not deliver.",
    },
    {
      question: "How often should I rewrite title tags?",
      answer:
        "Refresh when the page intent changes or CTR is weak—not on a rigid weekly schedule.",
    },
    {
      question: "Is 70 characters ever acceptable?",
      answer:
        "Pixel width matters more than character myths; test previews rather than forcing a hard 70.",
    },
    {
      question: "Should localized pages share one title?",
      answer:
        "No—each language or region needs its own accurate title and unique snippet.",
    },
    {
      question: "Do title tags affect social share cards?",
      answer:
        "Social platforms often prefer og:title; keep both aligned to avoid mismatched headlines.",
    },
    {
      question: "Can I A/B test titles inside Google Search Console?",
      answer:
        "GSC reports performance after changes; true experiments need careful logging of what you shipped.",
    },
    {
      question: "Why did Google rewrite my carefully crafted title?",
      answer:
        "It may pull other on-page text if it thinks that better matches the query—improve clarity on-page too.",
    }
  ],
  "rule-of-72-explained": [
    {
      question: "How do I estimate years to double at 9%?",
      answer:
        "Divide 72 by 9 to get about 8 years—a quick approximation of compounding growth.",
    },
    {
      question: "Can I reverse the rule to find a needed return?",
      answer:
        "Yes—divide 72 by your target years to estimate the annual rate that roughly doubles money.",
    },
    {
      question: "Does inflation need a separate rule-of-72 pass?",
      answer:
        "You can apply it to inflation to see purchasing-power half-life, separate from investment doubling.",
    },
    {
      question: "Why do fees change the doubling story?",
      answer:
        "Net return after fees is what matters—run the rule on the rate you actually keep.",
    },
    {
      question: "Is the rule useful for irregular contributions?",
      answer:
        "It assumes a lump sum compounding; new deposits need a savings schedule calculator instead.",
    },
    {
      question: "How far off is it at very high rates?",
      answer:
        "Error grows as rates get extreme; use exact compound formulas when precision matters.",
    },
    {
      question: "Can I apply it to population or traffic growth?",
      answer:
        "Any steady percentage growth can use the same mental math, with the same caveats.",
    },
    {
      question: "Does daily compounding break the rule?",
      answer:
        "More frequent compounding raises effective yield slightly—adjust the rate or switch to exact math.",
    },
    {
      question: "How should students remember 72 vs 69.3?",
      answer:
        "72 is friendlier for mental division; 69.3 ties to the natural-log rule of 70 for continuous growth.",
    },
    {
      question: "Where does the rule fail for debt snowballs?",
      answer:
        "Minimum payments and changing balances need amortization tools, not a single doubling shortcut.",
    }
  ],
  "how-to-draw-names-for-secret-santa": [
    {
      question: "Should I draw names before or after collecting wishlists?",
      answer:
        "Collect wishlists first when you can—givers shop faster once they know both their recipient and preferences.",
    },
    {
      question: "How do I handle a last-minute new coworker?",
      answer:
        "Add them and regenerate if the group agrees, or run a tiny side draw so existing pairs stay intact.",
    },
    {
      question: "Can I print assignments without showing everyone else’s matches?",
      answer:
        "Export or copy one pairing at a time into sealed notes so only each giver sees their recipient.",
    },
    {
      question: "What naming format works best for large offices?",
      answer:
        "Use first name plus last initial or team so duplicates like “Alex” stay unique in the list.",
    },
    {
      question: "Does a seed or redo button change fairness?",
      answer:
        "Each valid shuffle should be equally fair; redo only when constraints or dropouts require a new graph.",
    },
    {
      question: "How should international teams pick a ship-by date?",
      answer:
        "Work backward from the party using the slowest postal lane, then add a buffer for customs.",
    },
    {
      question: "Can kids’ groups use the same draw rules?",
      answer:
        "Yes—simplify exclusions and have an adult manage private reveals so surprises stay intact.",
    },
    {
      question: "What if someone wants to gift as a pair?",
      answer:
        "Treat the couple as one giver entry only if your rules allow joint gifts; otherwise keep separate draws.",
    },
    {
      question: "Should organizers participate in the draw?",
      answer:
        "They can, but use private delivery so seeing the full list is unnecessary.",
    },
    {
      question: "How do I archive this year’s pairings?",
      answer:
        "Save a private copy for dispute checks, then delete public posts after gifts are exchanged.",
    }
  ],
  "secret-santa-rules-and-gift-ideas": [
    {
      question: "How do theme nights change gift ideas?",
      answer:
        "Announce the theme with the budget—books, snacks, or handmade—so everyone shops in the same spirit.",
    },
    {
      question: "Should regifting be allowed?",
      answer:
        "Only if the group agrees upfront and items are new or clearly welcome; otherwise skip it.",
    },
    {
      question: "What is a good backup gift if shipping fails?",
      answer:
        "Keep a small gift-card option ready so remote participants are not empty-handed on the day.",
    },
    {
      question: "How do dietary limits affect food gifts?",
      answer:
        "Ask for allergies on the wishlist form and prefer sealed, labeled treats when in doubt.",
    },
    {
      question: "Can charity donations replace physical gifts?",
      answer:
        "Yes when the group votes for it—name the charity and proof expectations in the rules.",
    },
    {
      question: "How strict should “no spoilers” chats be?",
      answer:
        "Ban recipient names in public channels; use DMs only with the organizer for logistics.",
    },
    {
      question: "What if two people buy nearly identical gifts?",
      answer:
        "Wishlists with specifics reduce clashes; still allow returns or swaps after the reveal if needed.",
    },
    {
      question: "Should kids wrap gifts differently from adults?",
      answer:
        "Use sturdy bags and name tags kids can read; adults can handle fancier wrapping separately.",
    },
    {
      question: "How do I set a white-elephant hybrid rule?",
      answer:
        "Decide whether stealing is allowed after the Secret Santa reveal—or keep the events separate.",
    },
    {
      question: "When should thank-you notes go out?",
      answer:
        "Within a week of the exchange is polite, especially for shipped gifts across time zones.",
    }
  ],
  "how-many-words-is-a-5-minute-speech": [
    {
      question: "How many words fit a 7-minute school speech?",
      answer:
        "At about 130 wpm you need roughly 900 words; at 150 wpm closer to 1,050—time a rehearsal to confirm.",
    },
    {
      question: "Does pausing for slides change the word budget?",
      answer:
        "Yes—subtract time for demos and laughter so the script is shorter than a pure talk.",
    },
    {
      question: "Should I write a full script or bullet cards?",
      answer:
        "Scripts hit exact timing; cards feel natural but need extra rehearsals to stay near five minutes.",
    },
    {
      question: "How do quotes affect speaking time?",
      answer:
        "Slow down for quotations—count them in the word total and leave a buffer.",
    },
    {
      question: "What pace suits a solemn memorial talk?",
      answer:
        "Aim slower than a sales pitch, often near 110–120 wpm, so emotion has room.",
    },
    {
      question: "Can I judge length by pages instead of words?",
      answer:
        "Double-spaced pages vary by font; word count plus a timed read is more reliable.",
    },
    {
      question: "How much time should Q&A leave after five minutes?",
      answer:
        "If the slot is five minutes total, keep the speech under four so questions fit.",
    },
    {
      question: "Do filler words inflate delivery time?",
      answer:
        "They can—edit fillers in rehearsal so the timed script matches the stage version.",
    },
    {
      question: "How should bilingual speeches split minutes?",
      answer:
        "Decide the minute split first, then write each language section to that budget.",
    },
    {
      question: "Is teleprompter speed the same as podium pace?",
      answer:
        "Prompters tempt rushing—lock a wpm target and practice with the same device.",
    }
  ],
  "how-to-estimate-unemployment-benefits": [
    {
      question: "Should overtime be included in base-period wages?",
      answer:
        "If it was reported as UI-covered wages, include it; exclude reimbursements your state ignores.",
    },
    {
      question: "How do I estimate if I worked in two states?",
      answer:
        "Filing usually follows where you worked or live per agency rules—run each state’s math separately then read official guidance.",
    },
    {
      question: "Does severance change the weekly benefit amount?",
      answer:
        "It more often shifts when benefits start than the weekly rate; confirm with your determination.",
    },
    {
      question: "Can I model a part-time return to work?",
      answer:
        "Use the weekly benefit estimate first, then apply your state’s earnings disregard rules manually.",
    },
    {
      question: "Why enter wages by quarter instead of a yearly total?",
      answer:
        "Many formulas use high-quarter or average-quarter wages, so quarterly detail matters.",
    },
    {
      question: "Are tips counted the same as hourly wages?",
      answer:
        "Only when reported for UI—undeclared cash tips may not appear in the wage record.",
    },
    {
      question: "How should federal employees treat this estimate?",
      answer:
        "Federal claims follow different wage sources; treat this as a rough private-sector style check only.",
    },
    {
      question: "What if my employer reported wrong wages?",
      answer:
        "Dispute through your agency with pay stubs—the calculator cannot correct employer filings.",
    },
    {
      question: "Do training extensions appear here?",
      answer:
        "Basic estimates cover regular UI weeks; special extensions need separate program notices.",
    },
    {
      question: "Should I subtract health insurance premiums?",
      answer:
        "No—enter gross covered wages, not take-home pay after deductions.",
    }
  ],
  "how-to-view-and-remove-pdf-metadata": [
    {
      question: "Can removed metadata be recovered later?",
      answer:
        "A cleaned download should omit the cleared fields; keep the original if you still need them.",
    },
    {
      question: "Do embedded file attachments count as metadata?",
      answer:
        "Attachments are separate payloads—removing document info fields may not strip embedded files.",
    },
    {
      question: "Will XMP packets always clear with basic cleanup?",
      answer:
        "Many cleaners target common info dictionaries; stubborn XMP may need a stricter tool.",
    },
    {
      question: "Should legal exhibits keep author fields?",
      answer:
        "Follow counsel guidance—some filings want identifiable authorship, others prefer minimal properties.",
    },
    {
      question: "Does cleaning metadata flatten form fields?",
      answer:
        "Info cleanup should not flatten forms; page content stays unless you run other tools.",
    },
    {
      question: "Can phone-scan apps add hidden GPS tags?",
      answer:
        "Images inside PDFs may carry EXIF; document properties and image EXIF are different layers.",
    },
    {
      question: "Why might Preview and Acrobat show different fields?",
      answer:
        "Viewers surface different property panels; compare Producer, Creator, and custom keys carefully.",
    },
    {
      question: "Is batch cleaning many PDFs supported?",
      answer:
        "This flow is one file at a time; script a desktop tool when you need hundreds of cleans.",
    },
    {
      question: "Do digital signatures conflict with metadata edits?",
      answer:
        "Changing the file after signing usually invalidates the signature—clean before signing.",
    },
    {
      question: "Should invoices keep title metadata for search?",
      answer:
        "Helpful titles improve desktop search; strip only sensitive custom fields you do not need.",
    }
  ],
  "open-graph-image-size": [
    {
      question: "Should blog posts and products share one og:image?",
      answer:
        "Unique images perform better; a brand fallback is fine when a page lacks custom art.",
    },
    {
      question: "How much safe margin should text keep inside 1200×630?",
      answer:
        "Keep headlines away from the outer edges so crops on some apps do not clip letters.",
    },
    {
      question: "Do LinkedIn and Facebook prefer different ratios?",
      answer:
        "Both handle ~1.91:1 well; always spot-check each network’s debugger after upload.",
    },
    {
      question: "Can I overlay a logo without hurting clarity?",
      answer:
        "Yes—place a compact logo in a corner with contrast, not over the focal subject.",
    },
    {
      question: "Why cache old images after I replace the file?",
      answer:
        "Networks cache aggressively—change the filename or query string and re-scrape.",
    },
    {
      question: "Is 600×315 still acceptable?",
      answer:
        "It meets older minimums but looks soft on retina feeds; prefer 1200×630 when you can.",
    },
    {
      question: "Should og:image:alt describe the graphic?",
      answer:
        "Provide concise alt text for accessibility and clearer previews where platforms use it.",
    },
    {
      question: "Do animated GIFs work as og:image?",
      answer:
        "Most large networks expect a still image; use a representative frame instead.",
    },
    {
      question: "How do I test before publishing the CMS change?",
      answer:
        "Point the preview tool at a staging URL with absolute image links that are publicly reachable.",
    },
    {
      question: "Can dark-mode art confuse light-mode feeds?",
      answer:
        "Design for average feed backgrounds—ensure contrast works on both light and dark UIs.",
    }
  ],
  "how-to-make-a-youtube-thumbnail-that-matches-your-banner": [
    {
      question: "Should faces be larger on thumbnails than on banners?",
      answer:
        "Yes—thumbnails shrink in the browse grid, so faces and words need more scale than channel art.",
    },
    {
      question: "How do I reuse banner brand colors in the thumbnail?",
      answer:
        "Sample the same hex palette so the upload feels like one identity across art and episodes.",
    },
    {
      question: "Can end-screen templates clash with thumbnail style?",
      answer:
        "Keep fonts and color blocking consistent so cards and thumbs feel related without copying layout.",
    },
    {
      question: "How many words belong on a thumbnail?",
      answer:
        "Three to five strong words usually beat a full sentence at small sizes.",
    },
    {
      question: "Should every episode use the identical layout frame?",
      answer:
        "A repeating frame builds recognition; swap the episode-specific photo or number each time.",
    },
    {
      question: "Do YouTube A/B tests need matching banner colors?",
      answer:
        "Tests compare thumbs; still keep brand hues close so winners do not look off-brand on the channel page.",
    },
    {
      question: "What export color space should I use?",
      answer:
        "sRGB JPG or PNG is the practical choice for YouTube uploads.",
    },
    {
      question: "How do I avoid safe-area conflicts with timestamps?",
      answer:
        "Keep critical art out of the bottom-right where duration badges sit.",
    },
    {
      question: "Can I match Shorts covers to long-form thumbs?",
      answer:
        "Use the same fonts and colors, but compose vertically for Shorts’ taller preview.",
    },
    {
      question: "Should the banner include the video title too?",
      answer:
        "No—banners stay evergreen; put episode titles on thumbnails only.",
    }
  ],
  "how-to-merge-pdf-files": [
    {
      question: "Can I merge files that use different page sizes?",
      answer:
        "Yes—pages keep their own sizes unless you later normalize them in an editor.",
    },
    {
      question: "How do I insert a cover PDF at the front?",
      answer:
        "Place the cover file first in the merge order before combining.",
    },
    {
      question: "Will bookmarks from each file survive?",
      answer:
        "Some mergers preserve bookmarks; verify in a viewer if navigation matters.",
    },
    {
      question: "Can I merge scanned and text PDFs together?",
      answer:
        "Yes—output contains both page types; OCR remains only where it already existed.",
    },
    {
      question: "What if one file is already a portfolio?",
      answer:
        "Flatten or extract portfolio documents first so merge sees ordinary pages.",
    },
    {
      question: "Does merging re-compress images?",
      answer:
        "Usually pages are copied; size drops more from removing dupes than from new compression.",
    },
    {
      question: "How should I name the merged download?",
      answer:
        "Include project and date so teammates can tell versions apart.",
    },
    {
      question: "Can I undo a bad page order after merging?",
      answer:
        "Split or rearrange with a PDF organizer, or rematch from the original files.",
    },
    {
      question: "Are form fields still fillable after a merge?",
      answer:
        "AcroForm fields may remain, but name collisions can break scripts—test interactive files.",
    },
    {
      question: "Is there a privacy risk merging confidential decks?",
      answer:
        "Work locally and avoid uploading sensitive PDFs to third-party services when policy forbids it.",
    }
  ],
  "how-to-copy-text-out-of-a-pdf": [
    {
      question: "Why is extracted text missing spaces?",
      answer:
        "Some PDFs store glyphs without clear spacing cues—cleanup in an editor may be needed.",
    },
    {
      question: "Can I pull text from only even pages?",
      answer:
        "Extract the full range, then delete odd sections, or split even pages first if your tool allows filters.",
    },
    {
      question: "Do footnotes stay next to their references?",
      answer:
        "Reading order can scramble footnotes; verify academic exports carefully.",
    },
    {
      question: "How should I handle multi-language PDFs?",
      answer:
        "Extraction keeps Unicode when fonts encode it; mojibake means the PDF lacks proper Unicode maps.",
    },
    {
      question: "Will copy include hidden optional-content layers?",
      answer:
        "Hidden layers may be skipped—enable or flatten content before extracting if text is missing.",
    },
    {
      question: "Can I export straight to a .txt file?",
      answer:
        "Yes—use download or paste into an editor and save as plain text.",
    },
    {
      question: "Why are bullet symbols weird characters?",
      answer:
        "Custom dingbat fonts often lack Unicode mapping; replace bullets manually after extract.",
    },
    {
      question: "Is OCR automatic for every scan?",
      answer:
        "Image-only scans need OCR; native text PDFs extract without it.",
    },
    {
      question: "How do line numbers in transcripts behave?",
      answer:
        "They become ordinary text—strip or keep them depending on your editing needs.",
    },
    {
      question: "Can extraction capture filled form answers?",
      answer:
        "Appearing values often extract; complex widget-only data may need flattening first.",
    }
  ],
  "how-to-split-a-pdf": [
    {
      question: "How do I split every page into its own file?",
      answer:
        "Choose a single-page split mode or enter each page as its own range when building outputs.",
    },
    {
      question: "Can I split before and after a cover sheet?",
      answer:
        "Make ranges that isolate page 1, then another range for the remaining body pages.",
    },
    {
      question: "Does splitting preserve PDF/A status?",
      answer:
        "Not guaranteed—revalidate if archival compliance still matters after the split.",
    },
    {
      question: "What happens to document-level JavaScript?",
      answer:
        "Document scripts may not carry into every shard; test interactive PDFs after splitting.",
    },
    {
      question: "Can I split by file-size target?",
      answer:
        "This tool splits by page ranges; compress afterward if email size is the real goal.",
    },
    {
      question: "How should I label many output files?",
      answer:
        "Include the source name and page span in each filename for easy reassembly.",
    },
    {
      question: "Is extracting the same as deleting pages?",
      answer:
        "Extraction saves chosen pages; deletion rebuilds a file without the removed ones—pick the intent you need.",
    },
    {
      question: "Can landscape and portrait pages split together?",
      answer:
        "Yes—orientation stays per page inside each output file.",
    },
    {
      question: "Why did a split PDF lose search highlights I had saved?",
      answer:
        "Viewer-specific markups are not always embedded; export comments first if you need them.",
    },
    {
      question: "Do split files share the original password?",
      answer:
        "Unlocked splits are typically open; re-encrypt outputs if confidentiality still applies.",
    }
  ],
  "how-to-find-graduation-year-by-birthday": [
    {
      question: "How do mid-year moves between states affect the year?",
      answer:
        "The new district’s cutoff and placement decision win—rerun with that cutoff after enrollment confirms.",
    },
    {
      question: "Can preschool delay change high-school graduation?",
      answer:
        "Yes—entering kindergarten a year later usually shifts the entire K–12 timeline by one year.",
    },
    {
      question: "Should I count transitional kindergarten as grade one?",
      answer:
        "Follow the district’s labeling; TK often sits before kindergarten without advancing the cohort alone.",
    },
    {
      question: "How do I model a planned gap year after grade 12?",
      answer:
        "The calculator targets diploma year; add the gap manually when planning college matriculation.",
    },
    {
      question: "What if the school uses continuous promotion?",
      answer:
        "Birthday cutoffs still set entry; promotion policies may adjust later years—ask the counselor.",
    },
    {
      question: "Can homeschool transcripts use the same projection?",
      answer:
        "Use it as a planning scaffold, then align course credits with your state’s homeschool rules.",
    },
    {
      question: "Do international GCSEs map cleanly to this timeline?",
      answer:
        "Not always—map ages to local leaving exams instead of forcing a US grade-12 label.",
    },
    {
      question: "How should twins with different start waivers be entered?",
      answer:
        "Run each child separately with the start year their school actually assigned.",
    },
    {
      question: "Can I estimate elementary promotion years too?",
      answer:
        "Yes—once kindergarten start is fixed, add successive grade years for milestones.",
    },
    {
      question: "Why might summer birthday cutoffs feel unfair?",
      answer:
        "Policy aims at age bands, not individual readiness—districts may offer assessments for edge cases.",
    }
  ],
  "how-to-convert-gpa-to-percentage": [
    {
      question: "Does a 4.3 scale convert the same as a 4.0 scale?",
      answer:
        "No—confirm the scale maximum before converting, or percentages will be wrong.",
    },
    {
      question: "How should plus/minus grades enter the math?",
      answer:
        "Use your school’s grade points for A−/B+ rather than collapsing them to whole letters.",
    },
    {
      question: "Can percentage conversion help WES evaluations?",
      answer:
        "Evaluators use their own methods—submit official transcripts rather than DIY conversions alone.",
    },
    {
      question: "Why do Indian percentage systems disagree with US GPA maps?",
      answer:
        "Different country formulas exist; never assume one linear map fits every university.",
    },
    {
      question: "Should pass/fail courses affect the percentage?",
      answer:
        "Usually exclude them from GPA-based conversions unless your institution says otherwise.",
    },
    {
      question: "How do I convert term GPA versus cumulative GPA?",
      answer:
        "Convert the specific GPA you need; term and cumulative figures are different inputs.",
    },
    {
      question: "Is 75% always a 3.0?",
      answer:
        "Not universally—some schools map bands differently, so prefer published tables when available.",
    },
    {
      question: "Can I convert percentage back to GPA?",
      answer:
        "Only with the same scale rules in reverse; ambiguous bands need the registrar’s chart.",
    },
    {
      question: "Do weighted AP points belong in percentage claims?",
      answer:
        "Say whether the GPA was weighted; converting a weighted GPA without note misleads readers.",
    },
    {
      question: "What rounding should applications use?",
      answer:
        "Follow the form’s instructions—many want two decimal GPA places and whole-number percents.",
    }
  ],
  "daltons-law-of-partial-pressures-explained": [
    {
      question: "How does Dalton's law relate to mole fraction?",
      answer:
        "For ideal mixtures, each partial pressure equals the mole fraction times the total pressure.",
    },
    {
      question: "Can I apply Dalton's law inside a scuba tank?",
      answer:
        "Divers use it for planning, but real-gas and temperature effects still matter at high pressure.",
    },
    {
      question: "Why subtract water vapor for gases collected over water?",
      answer:
        "The vapor contributes its own partial pressure, so dry-gas pressure is total minus vapor pressure.",
    },
    {
      question: "Does altitude change oxygen's mole fraction in air?",
      answer:
        "Dry air’s mole fraction stays near 21%; partial pressure falls as total atmospheric pressure falls.",
    },
    {
      question: "How should lab reports show unit consistency?",
      answer:
        "Keep every pressure in the same unit before adding or multiplying by mole fractions.",
    },
    {
      question: "What breaks Dalton's law in ammonia absorption?",
      answer:
        "When a gas dissolves or reacts strongly, composition and pressure no longer follow a simple ideal sum.",
    },
    {
      question: "Is volume percent equal to mole percent here?",
      answer: "For ideal gases at the same T and P, yes; real gases can deviate.",
    },
    {
      question: "Can I find total pressure from known partials?",
      answer:
        "Add the partial pressures of all components when Dalton’s assumptions hold.",
    },
    {
      question: "How do temperature changes enter the story?",
      answer:
        "They can change vapor pressures and real-gas behavior even if mole fractions stay fixed.",
    },
    {
      question: "Should students memorize 760 mmHg as 1 atm?",
      answer:
        "It is a common conversion; still prefer the unit your problem states explicitly.",
    }
  ],
  "fantasy-cricket-points-system-explained": [
    {
      question: "Do wicket bonuses stack with bowling figures?",
      answer:
        "Usually yes—check whether extras like maiden or LBW bonuses are separate line items in your app.",
    },
    {
      question: "How are substitute fielders scored?",
      answer:
        "Most contests ignore pure substitutes unless they become playing replacements under the rules.",
    },
    {
      question: "Why publish different T20 and ODI sheets?",
      answer:
        "Scoring rates differ by format, so economy and strike-rate bands are tuned separately.",
    },
    {
      question: "Can legacy Classic rules differ from small-league apps?",
      answer:
        "Yes—always open that contest’s scoring tab instead of assuming Dream11 defaults.",
    },
    {
      question: "How should rain-shortened matches be handled?",
      answer:
        "Follow the operator’s abandoned/reduced rules; points may be voided or pro-rated.",
    },
    {
      question: "Do byes and leg-byes give batting points?",
      answer:
        "Typically no batting run points; confirm extras treatment in the official sheet.",
    },
    {
      question: "Is a run-out credited to a specific fielder?",
      answer:
        "Some systems award the assisting fielder; others only track the dismissal type for the batter.",
    },
    {
      question: "How do impact players change fantasy lineups?",
      answer:
        "Only players who actually feature under tournament rules can score—bench IDs stay at zero.",
    },
    {
      question: "Should I track balls faced for strike-rate bonuses?",
      answer: "Yes when your sheet pays SR bands—enter balls faced along with runs.",
    },
    {
      question: "Can two platforms disagree on the same ball?",
      answer:
        "Stat feeds and revision windows differ; wait for final scores before disputing a few points.",
    }
  ],
  "how-long-unemployment-benefits-last": [
    {
      question: "What is a benefit year versus weeks payable?",
      answer:
        "The benefit year is the claim window; weeks payable are how many weekly checks that window can hold.",
    },
    {
      question: "Do dependents add extra weeks in most states?",
      answer:
        "Dependents more often change the weekly amount than the week count—check your state table.",
    },
    {
      question: "Can seasonal layoffs use the same duration rules?",
      answer:
        "Monetary duration follows the same statutes; eligibility still depends on wages and separation reasons.",
    },
    {
      question: "How do shared-work programs affect week counts?",
      answer:
        "Partial benefits may use different accounting—read the shared-work notice, not only full UI charts.",
    },
    {
      question: "Should I bank unused weeks across jobs?",
      answer:
        "Unused weeks usually expire with the benefit year; a new claim needs a new base period.",
    },
    {
      question: "Do military claims follow state week charts?",
      answer:
        "UCX claims have federal overlays—confirm with the agency handling your military wages.",
    },
    {
      question: "How accurate are 2026 duration tables online?",
      answer:
        "Laws change—verify against your state workforce site when planning finances.",
    },
    {
      question: "Can refusing suitable work cut remaining weeks?",
      answer: "Disqualifications can pause or end payable weeks until you requalify.",
    },
    {
      question: "Does filing late shorten my entitlement?",
      answer:
        "Late filing can cost early weeks; total potential entitlement is still set by statute and wages.",
    },
    {
      question: "How should I calendar the final payable week?",
      answer:
        "Count certified weeks from your start date, excluding waiting weeks your state does not pay.",
    }
  ],
  "how-to-calculate-fantasy-points": [
    {
      question: "How do I score a player across two sports tabs?",
      answer:
        "Keep separate rule presets per sport, then enter only that sport’s counting stats.",
    },
    {
      question: "Can I model PPR versus standard football quickly?",
      answer:
        "Clone the football rules and change the reception points field, then compare totals.",
    },
    {
      question: "What if my league awards points for yards in 10-yard blocks?",
      answer:
        "Convert yards into block counts before entry, or scale the per-yard rule to match.",
    },
    {
      question: "Do decimal totals mean I made a mistake?",
      answer:
        "Not if half-points or per-yard rates are allowed—match your league’s precision.",
    },
    {
      question: "How should I treat voided plays?",
      answer:
        "Remove those stats and recalculate after official scoring corrections post.",
    },
    {
      question: "Can I share a rule preset as text?",
      answer:
        "Copy the point values into a note for teammates when local storage will not sync.",
    },
    {
      question: "Why reset stats without resetting rules?",
      answer: "Clearing stats keeps your custom sheet ready for the next box score.",
    },
    {
      question: "How do I handle dual-position eligibility?",
      answer:
        "Use one scoring pass; eligibility only matters for roster slots, not the arithmetic.",
    },
    {
      question: "Should bonuses for long touchdowns be separate rows?",
      answer:
        "Add a bonus field when your league pays them, then enter how many times they hit.",
    },
    {
      question: "Can I calculate a whole lineup salary cap here?",
      answer:
        "This tool totals fantasy points, not draft salaries—track cap elsewhere.",
    }
  ],
  "how-to-calculate-partial-pressure": [
    {
      question: "How do I convert a percent composition to mole fraction?",
      answer:
        "Divide the percent by 100 (21% oxygen → 0.21) before multiplying by total pressure.",
    },
    {
      question: "When should I pick mixture mode over ideal-gas mode?",
      answer:
        "Use mixture mode when you know total pressure and composition; use ideal-gas when you have n, V, and T.",
    },
    {
      question: "Can torr and mmHg be treated as equal here?",
      answer:
        "For ordinary lab work they are treated as equal; keep labels consistent in the report.",
    },
    {
      question: "What if my mole fractions sum to 0.99?",
      answer:
        "Round-off is common—renormalize or add the missing component before trusting the total.",
    },
    {
      question: "How precise should R be for class problems?",
      answer:
        "Use the R value matching your units (for example L·atm) as stated in the tool or textbook.",
    },
    {
      question: "Does gauge pressure work in these formulas?",
      answer: "Convert to absolute pressure first by adding atmospheric pressure.",
    },
    {
      question: "Can I solve for volume given partial pressure?",
      answer:
        "Rearrange the ideal-gas relation with that gas’s moles, T, and its partial pressure.",
    },
    {
      question: "Why reject a mole fraction of 1.2?",
      answer:
        "Fractions cannot exceed 1 for a single component in a simple mixture model.",
    },
    {
      question: "How do I report scientific notation answers?",
      answer:
        "Keep significant figures from your inputs; scientific notation is fine for tiny pressures.",
    },
    {
      question: "Are dissolved oxygen problems in water different?",
      answer:
        "Yes—use Henry’s law for solubility, not Dalton’s gas-mixture shortcut alone.",
    }
  ],
  "how-to-combine-scanned-pages-into-one-pdf": [
    {
      question: "Should I scan at 300 DPI for text documents?",
      answer:
        "300 DPI is a solid default for readable text; go higher only if you need fine print.",
    },
    {
      question: "How do I fix a page that uploaded upside down?",
      answer:
        "Rotate that image before merging, or rotate the page after in a PDF viewer.",
    },
    {
      question: "Can I insert a blank separator page?",
      answer: "Add a blank white image in the sequence where you need a divider.",
    },
    {
      question: "Why are colors dull after combining phone photos?",
      answer:
        "Auto HDR and compression differ per shot—retake under the same lighting when color matters.",
    },
    {
      question: "Is Letter better than A4 for US forms?",
      answer: "Match the form’s stated size so margins align when printed.",
    },
    {
      question: "How can I keep file size email-friendly?",
      answer: "Compress the finished PDF or downsize photos before combining.",
    },
    {
      question: "Can receipts of different widths share one PDF?",
      answer: "Yes—fit mode letterboxes each image on the chosen page size.",
    },
    {
      question: "Do I need OCR before emailing a scan packet?",
      answer:
        "Only if recipients must search or copy text; image-only PDFs are fine for print.",
    },
    {
      question: "What order should double-sided scans use?",
      answer:
        "Capture fronts in order, then backs, or use a duplex workflow that already interleaves sides.",
    },
    {
      question: "Can I password-protect the combined scan?",
      answer:
        "Add encryption in a PDF editor after download if confidentiality requires it.",
    }
  ],
  "how-to-compress-an-image-without-losing-quality": [
    {
      question: "When is lossless PNG recompression enough?",
      answer:
        "UI graphics and screenshots often shrink with lossless tools without changing pixels.",
    },
    {
      question: "Does converting to WebP always look identical?",
      answer:
        "Near-lossless modes look very close; always flick between original and export on a sharp display.",
    },
    {
      question: "How do I keep logos crisp while shrinking photos?",
      answer:
        "Treat logos as PNG/SVG and photos as JPG/WebP instead of one setting for everything.",
    },
    {
      question: "Should I strip EXIF to save kilobytes?",
      answer:
        "Removing metadata can help a little and improves privacy; it does not replace real compression.",
    },
    {
      question: "Why does a second pass barely help?",
      answer:
        "The first lossy pass already discarded detail—further passes add artifacts more than savings.",
    },
    {
      question: "Is chroma subsampling noticeable on text?",
      answer:
        "It can blur colored text on flat backgrounds—raise quality or use PNG for UI.",
    },
    {
      question: "Can I target a maximum dimension and a quality together?",
      answer:
        "Yes—resize to the display size first, then compress for the cleanest bytes.",
    },
    {
      question: "Do retina displays need 2× pixel dimensions?",
      answer:
        "If you serve 2× assets, compress carefully so the larger pixel grid does not waste bandwidth.",
    },
    {
      question: "How should product zooms be handled?",
      answer:
        "Keep a higher-quality master for zoom; ship a lighter derivative for listing grids.",
    },
    {
      question: "Is GIF still useful for short clips?",
      answer:
        "Short muted clips are often smaller as MP4/WebM; GIF remains for simple animations.",
    }
  ],
  "how-to-crop-an-image": [
    {
      question: "How do I crop for an Instagram portrait post?",
      answer:
        "Set a 4:5 ratio and frame the subject before exporting the cropped PNG or JPG.",
    },
    {
      question: "Can I crop from the center automatically?",
      answer:
        "Choose a centered preset when available, or drag the box until the focus sits mid-frame.",
    },
    {
      question: "Why did my crop export look softer?",
      answer:
        "Shrinking then upscaling softens edges—export at the crop’s native pixel size.",
    },
    {
      question: "Should I crop before or after color correction?",
      answer:
        "Either works; many editors color-correct first so histograms use the final framing.",
    },
    {
      question: "How do rule-of-thirds guides help?",
      answer:
        "Align eyes or horizons on the guide intersections for a steadier composition.",
    },
    {
      question: "Can I crop animated GIFs frame by frame here?",
      answer: "This flow targets still images—use a GIF editor for multi-frame crops.",
    },
    {
      question: "What if I need the same crop on many photos?",
      answer:
        "Note the ratio and approximate offsets, or batch-crop in a dedicated desktop tool.",
    },
    {
      question: "Does cropping change DPI metadata?",
      answer:
        "Pixel dimensions change; DPI tags may stay or reset depending on the encoder.",
    },
    {
      question: "How do I crop out a watermark cleanly?",
      answer:
        "Crop only if the watermark sits outside the keep region; otherwise content-aware edits are needed.",
    },
    {
      question: "Can circular social avatars be cropped as squares first?",
      answer: "Yes—export a square, then the platform applies its circular mask.",
    }
  ],
  "how-to-make-a-custom-qr-code": [
    {
      question: "How dark should the foreground be on colored codes?",
      answer:
        "Keep strong contrast with the background; pale-on-pale codes fail outdoor scans.",
    },
    {
      question: "Can I put a logo over the center modules?",
      answer:
        "Yes with higher error correction and a modest logo that leaves most modules readable.",
    },
    {
      question: "Should Wi-Fi codes include the network type?",
      answer: "Yes—WPA/WPA2 vs nopass must match or phones will not join.",
    },
    {
      question: "Do MECARD and vCard both store phone numbers?",
      answer:
        "Both can; vCard is richer for multiple fields when contacts apps support it.",
    },
    {
      question: "What canvas size is safe for stickers?",
      answer: "Export large, then scale down in print software so modules stay sharp.",
    },
    {
      question: "Can dynamic short links sit inside a static QR?",
      answer:
        "The QR can point at a short URL you control; retarget the short link without reprinting.",
    },
    {
      question: "Why reject low-contrast brand colors?",
      answer:
        "Scanners need luminance difference; tweak until the preview warning clears.",
    },
    {
      question: "Is round-module styling always scannable?",
      answer:
        "Heavy styling can break finders—test on iOS and Android before a big print run.",
    },
    {
      question: "How much quiet zone is enough?",
      answer: "Leave a clear margin of roughly four modules so edges are not crowded.",
    },
    {
      question: "Can one Pro code hold a calendar event?",
      answer:
        "If event text or a URL is supported in the payload list, encode that; otherwise link to an ICS file.",
    }
  ],
  "how-to-make-a-qr-code": [
    {
      question: "How do I test a code before ordering signs?",
      answer:
        "Print a draft at final size and scan from the expected distance with multiple phones.",
    },
    {
      question: "Should restaurant menus use short URLs?",
      answer:
        "Yes—shorter payloads keep modules larger and easier to scan in dim dining rooms.",
    },
    {
      question: "Can I encode a plain Wi-Fi string without Pro?",
      answer:
        "Paste a valid WIFI: payload as text if you already have one; Pro helpers just build it for you.",
    },
    {
      question: "Why avoid putting QR codes on reflective glass alone?",
      answer:
        "Glare hides modules—add a matte backing or place codes where lighting is controlled.",
    },
    {
      question: "Do stickers need UV coating?",
      answer:
        "Outdoor stickers last longer with protective laminate; retest scans after finishing.",
    },
    {
      question: "How small can a code be on a business card?",
      answer:
        "Keep it large enough that modules stay distinct—tiny dense codes frustrate cameras.",
    },
    {
      question: "Can UTM parameters live in the QR URL?",
      answer:
        "Yes for campaign tracking; watch length so the pattern does not get too dense.",
    },
    {
      question: "Should I frame the code with a call-to-action?",
      answer:
        "A short “Scan for menu” label builds trust without changing the encoded data.",
    },
    {
      question: "What if a scanner shows a phishing warning?",
      answer: "Use reputable HTTPS destinations and avoid look-alike domains.",
    },
    {
      question: "Can I reuse one PNG across flyers and slides?",
      answer:
        "Yes—keep a master PNG and place it at different physical sizes as needed.",
    }
  ],
  "how-to-make-a-youtube-banner": [
    {
      question: "How wide is the full YouTube banner canvas?",
      answer:
        "Design on the large TV-oriented canvas, then keep critical art inside the overlapping safe area.",
    },
    {
      question: "Should seasonal overlays cover the channel avatar?",
      answer:
        "Avoid stacking busy art behind the circular avatar zone so the profile photo stays clear.",
    },
    {
      question: "Can I match banner fonts to video end screens?",
      answer:
        "Reuse the same type family so the channel feels consistent from art to video chrome.",
    },
    {
      question: "How many focal points should a banner have?",
      answer:
        "One primary message plus logo is enough; extra icons get cropped on phones.",
    },
    {
      question: "Do wordmarks need more padding than icons?",
      answer:
        "Yes—text needs extra safe margin because device crops differ left and right.",
    },
    {
      question: "Can stock photos be used commercially on banners?",
      answer:
        "Only with a license that allows YouTube channel art; keep proof of license.",
    },
    {
      question: "Should CTAs on banners duplicate video titles?",
      answer:
        "Keep banners evergreen; put episode-specific CTAs on thumbnails instead.",
    },
    {
      question: "How do I export for both desktop and TV?",
      answer: "One correctly sized export covers both if the safe area is respected.",
    },
    {
      question: "Will a 72 dpi label hurt YouTube quality?",
      answer: "Pixel dimensions matter more than DPI metadata for screen art.",
    },
    {
      question: "Can I animate the banner file itself?",
      answer: "Channel art is still; use video intros or community posts for motion.",
    }
  ],
  "how-to-reduce-image-size-to-100kb": [
    {
      question: "What if 100KB is still required after resizing to 1200px wide?",
      answer:
        "Lower JPG/WebP quality in small steps until the download is under the cap.",
    },
    {
      question: "Can I hit 100KB with a transparent logo?",
      answer:
        "Transparent PNGs rarely reach tiny budgets—use a flat JPG on a solid background when forms demand it.",
    },
    {
      question: "Should I check size in KB or KiB?",
      answer:
        "Confirm whether the form means 100×1000 or 100×1024 bytes; browsers often show KiB.",
    },
    {
      question: "How do phone screenshots get under 100KB?",
      answer:
        "Crop UI chrome, resize down, then apply stronger compression than you would for a hero photo.",
    },
    {
      question: "Is 100KB enough for a passport photo upload?",
      answer:
        "Some portals want both dimension and file-size caps—meet both, not only kilobytes.",
    },
    {
      question: "Why does my editor show a different size than the OS?",
      answer:
        "Unsaved previews differ from exported files—always check the downloaded artifact.",
    },
    {
      question: "Can progressive JPGs help perceived speed?",
      answer:
        "They can improve loading feel but may not shrink below 100KB by themselves.",
    },
    {
      question: "What quality floor looks acceptable for faces?",
      answer:
        "Stay high enough that eyes stay clear; if you cannot, reduce pixel size first.",
    },
    {
      question: "Do online compressors upload my ID scans?",
      answer:
        "Prefer on-device tools for sensitive IDs; assume uploads are stored if you use a remote service.",
    },
    {
      question: "How do I batch many files to 100KB?",
      answer:
        "Script a quality ladder per image, or process them one by one when counts are small.",
    }
  ],
};
