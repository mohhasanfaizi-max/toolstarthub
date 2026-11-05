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
};
