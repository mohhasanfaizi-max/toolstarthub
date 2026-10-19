import type { GuideContent } from "./guide-content.ts";

export const phase3DevGuides: Record<string, GuideContent> = {
  "what-is-json": {
    intro:
      "JSON is a text format for objects and arrays. A value can be an object, an array, a string, a number, true, false, or null. Keys and strings use double quotes. {\"name\":\"Ada\",\"id\":1} is valid JSON. The JSON Formatter pretty-prints it with two-space indents. A trailing comma, a comment, or a single-quoted key is not valid JSON, and the page reports the error instead of guessing.",
    why:
      "APIs, config files, and browser tools pass data as JSON because the shape is strict and easy to parse. When a paste fails, the failure is usually a comma, a quote, or a comment left over from another language. Formatting the text makes the structure visible. It does not change the values.",
    stepsHeading: "How to read and check JSON",
    sections: [
      {
        id: "shape",
        heading: "What does valid JSON look like?",
        paragraphs: [
          "An object is a set of keys and values inside braces. An array is an ordered list inside brackets. Strings use double quotes. Numbers are plain digits, with an optional minus and fraction. true, false, and null are lowercase. There is no trailing comma after the last item.",
          "Pretty-printing {\"name\":\"Ada\",\"id\":1} inserts a line break after the opening brace, indents name and id by two spaces, and keeps the same two fields. Minifying removes that extra space. Both forms parse as the same JSON.",
        ],
      },
      {
        id: "errors",
        heading: "Why does a familiar-looking paste fail?",
        paragraphs: [
          "{\"a\":1,} fails. The formatter reports invalid JSON at position 7 and says it expected a double-quoted property name. The comma after 1 leaves the parser looking for another key. Delete that comma.",
          "{name: \"Ada\"} also fails, at position 1, because the key is not in double quotes. Comments with slashes, and strings in single quotes, fail for the same reason. They are allowed in some JavaScript files. They are not JSON. The page does not strip them for you.",
        ],
      },
      {
        id: "use",
        heading: "What can you do with JSON after it parses?",
        paragraphs: [
          "Validate only checks the text. A successful check says This JSON is valid. Format and minify rewrite the spacing. Neither step sends the text to a server. The box accepts up to 750,000 characters.",
          "An array of objects can become CSV. A single object cannot, until you wrap it in an array. JSON is also a common way to store settings. It is not a programming language, and it does not run code when you format it.",
          "Numbers are not quoted. \"1\" is a string and 1 is a number, and they stay different after formatting. true, false, and null must be lowercase. True and FALSE are not JSON literals. If a field looks right in a spreadsheet and fails here, check the quotes and the case before you look for a deeper problem.",
        ],
      },
    ],
    steps: [
      {
        title: "Paste the text",
        body: "Include the outer braces or brackets. A fragment such as \"name\": \"Ada\" is not a complete JSON value.",
      },
      {
        title: "Validate or format",
        body: "Validate reports success or the first problem. Format rewrites valid JSON with two-space indents. Minify puts it back on a tight line.",
      },
      {
        title: "Read the position when it fails",
        body: "The message names a character position. Count from the start of the text, or look at the column it mentions, and check the comma or quote there.",
      },
      {
        title: "Copy the result you meant",
        body: "Formatting does not rename keys or drop fields. If a field disappeared, it was not in the text you pasted.",
      },
    ],
    examples: [
      {
        title: "A small object",
        body: "{\"name\":\"Ada\",\"id\":1} formats as a brace, then \"name\": \"Ada\", then \"id\": 1, then a closing brace. Validation of that text says This JSON is valid.",
      },
      {
        title: "A trailing comma",
        body: "{\"a\":1,} is rejected at position 7. The parser expected another double-quoted property name after the comma. Removing the comma makes {\"a\":1}, which is valid.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "JavaScript object notation is looser",
        body: "A trailing comma, a comment, or an unquoted key can be legal in a JavaScript file and still be illegal JSON. This page follows JSON.",
      },
      {
        heading: "One object is not a table",
        body: "The CSV converter on this site wants an array of objects. A valid object still needs brackets around it before that conversion.",
      },
    ],
    faqs: [
      {
        question: "Is {\"name\":\"Ada\",\"id\":1} valid JSON?",
        answer:
          "Yes. The formatter pretty-prints it with two-space indents, and validation says This JSON is valid.",
      },
      {
        question: "Why does {\"a\":1,} fail?",
        answer:
          "The trailing comma is not allowed. The page reports invalid JSON at position 7 and expected a double-quoted property name.",
      },
      {
        question: "Can I use single quotes?",
        answer:
          "No. JSON strings and keys use double quotes. {name: \"Ada\"} fails at position 1.",
      },
      {
        question: "Does formatting change the data?",
        answer:
          "It changes spacing only. Keys, numbers, and strings stay the same. Minify removes the spacing again.",
      },
      {
        question: "Is the JSON uploaded?",
        answer:
          "No. Format, minify, and validate run in the browser. The box limit is 750,000 characters.",
      },
    ],
    cta: {
      before: "To pretty-print, minify, or validate a snippet, use the",
      linkLabel: "JSON Formatter",
      href: "/tools/json-formatter",
      after: ". It runs in the browser.",
    },
    alsoSee: [
      {
        before: "To turn an array of objects into rows, read",
        linkLabel: "How to turn a JSON array into CSV",
        href: "/guides/how-to-convert-json-to-csv",
        after: ".",
      },
      {
        before: "JSON is not an encoding like",
        linkLabel: "Base64",
        href: "/guides/what-is-base64",
        after: ". Base64 wraps bytes. JSON describes values.",
      },
    ],
  },
  "how-to-test-a-regular-expression": {
    intro:
      "A regular expression is a pattern that searches text. The Regex Tester on this site uses JavaScript regular expressions. The pattern \\d+ with the g flag finds 12 and 4 in Room 12 and room 4. The first match starts at index 5. The second starts at index 17. The page shows up to 50 matches and rejects a pattern longer than 300 characters.",
    why:
      "A pattern that looks right in your head can miss a digit, stop too early, or match more than you wanted. Testing it against a real sample shows the matches and their positions before you put the pattern in code. The flags change that result. Guessing the flags is a common way to get a different match count.",
    stepsHeading: "How to test a regular expression",
    sections: [
      {
        id: "flags",
        heading: "Which flags does this tester allow?",
        paragraphs: [
          "Only g, i, m, s, and u. Any other flag is rejected with Use only the flags g, i, m, s, and u. The g flag finds every match. Without it, a search in JavaScript would stop after one match, but this page still scans with a global copy so it can list matches. The global marker on the result tells you whether g was selected.",
          "i ignores letter case. m changes how ^ and $ treat line starts and ends. s lets a dot match a newline. u turns on Unicode mode. Leave a flag off unless you need that behavior. Extra flags are a different pattern.",
        ],
      },
      {
        id: "matches",
        heading: "What does a match report include?",
        paragraphs: [
          "Each match shows the text that matched and the index where it starts. Indexes are zero-based. In Room 12 and room 4, the digits 12 start after Room and a space, which is index 5. The digit 4 starts at index 17.",
          "Parentheses create groups. Named groups are listed by name. The tester caps the list at 50 matches and marks the result truncated when the text has more. The sample text itself can be up to 100,000 characters. A longer paste is rejected.",
        ],
      },
      {
        id: "safety",
        heading: "What should you avoid in a test pattern?",
        paragraphs: [
          "An empty pattern is rejected. An invalid pattern returns That pattern is not valid, plus the browser’s syntax message. Fix the pattern. The page does not auto-correct it.",
          "A pattern with nested quantifiers can be slow even on a short sample. If the page struggles, shorten the sample and simplify the pattern. Do not paste secrets you do not want on screen. The test runs locally, but the text is still visible in the tab.",
          "A match index counts characters from 0. The word Room is indexes 0 through 3, the space is index 4, and 12 starts at index 5. If your editor counts from 1, add one when you compare the two displays. The tester does not rewrite the sample to highlight matches in place.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the pattern without slashes",
        body: "Type \\d+, not /\\d+/. The slashes are a JavaScript literal, not part of the pattern this box expects.",
      },
      {
        title: "Turn on only the flags you need",
        body: "g lists every match. i ignores case. m, s, and u change anchors, the dot, and Unicode handling.",
      },
      {
        title: "Paste a realistic sample",
        body: "Use text that should match and text that should not. A sample of only digits will not show you a false match.",
      },
      {
        title: "Read the index and the groups",
        body: "The index is where the match starts. Groups show what each pair of parentheses captured.",
      },
    ],
    examples: [
      {
        title: "Digits in a sentence",
        body: "\\d+ with g on Room 12 and room 4 returns two matches: 12 at index 5, and 4 at index 17. room has no digits, so it is not a match.",
      },
      {
        title: "An invalid pattern",
        body: "A lone opening bracket is not a valid pattern. The page says that pattern is not valid and includes the syntax message. It does not return a partial match.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Slashes are not part of the pattern",
        body: "Copying /\\d+/g from code includes the slashes. This tester wants the pattern and the flags in separate controls.",
      },
      {
        heading: "Fifty matches is the cap",
        body: "A long list stops at 50 and is marked truncated. Narrow the sample or the pattern if you need a later match.",
      },
    ],
    faqs: [
      {
        question: "Where are the numbers in Room 12 and room 4?",
        answer:
          "\\d+ with the g flag matches 12 at index 5 and 4 at index 17. That is two matches.",
      },
      {
        question: "Which flags can I use?",
        answer:
          "g, i, m, s, and u. Any other letter is rejected.",
      },
      {
        question: "How long can the pattern and the text be?",
        answer:
          "The pattern can be 300 characters. The sample can be 100,000 characters. The match list stops at 50.",
      },
      {
        question: "Does the tester fix a broken pattern?",
        answer:
          "No. An empty pattern asks you to enter one. An invalid pattern returns the syntax error.",
      },
      {
        question: "Is the sample uploaded?",
        answer:
          "No. The test runs in the browser.",
      },
    ],
    cta: {
      before: "To try a JavaScript pattern against a sample, use the",
      linkLabel: "Regex Tester",
      href: "/tools/regex-tester",
      after: ". It lists matches, indexes, and groups.",
    },
    alsoSee: [
      {
        before: "If you need to swap text after the pattern works, see",
        linkLabel: "How to find and replace text",
        href: "/guides/how-to-find-and-replace-text",
        after: ".",
      },
      {
        before: "Patterns often clean structured text. See",
        linkLabel: "What is JSON?",
        href: "/guides/what-is-json",
        after: ".",
      },
    ],
  },
  "how-to-generate-a-password": {
    intro:
      "A generated password is a random string from the character types you select. The Password Generator uses the browser’s crypto.getRandomValues. Length can be 8 to 64. The default is 16. Uppercase, lowercase, and digits, with ambiguous characters left in, use a set of 62 characters. A 16-character password from that set is about 95.27 bits. The page rounds that estimate to 95 and labels it Strong.",
    why:
      "A short word is easy to guess even when it looks personal. A longer random password from a large set is harder to guess by trying combinations. This page creates the password in the browser. It does not store it, and it does not check whether that exact string has appeared in a breach. You still have to save it in a place you control.",
    stepsHeading: "How to generate a password",
    sections: [
      {
        id: "charset",
        heading: "How is the character set built?",
        paragraphs: [
          "Uppercase adds A through Z. Lowercase adds a through z. Digits add 0 through 9. Symbols add !@#$%^&*()-_=+[]{};:,.? which is 23 characters. You need at least one set. The page refuses to generate from an empty pool.",
          "Exclude ambiguous characters removes O, 0, I, l, and 1 from the letter and digit sets. Symbols are not filtered by that switch. With uppercase, lowercase, and digits, and ambiguous characters excluded, the set is smaller than 62, so the bit estimate drops for the same length.",
        ],
      },
      {
        id: "bits",
        heading: "What does the bit estimate mean?",
        paragraphs: [
          "Bits are the length times the base-2 log of the set size. They describe the size of the pool, not a promise about a particular website. For length 16 and a set of 62, the estimate is about 95.27. The page shows 95 and the label Strong.",
          "The label uses the estimate before rounding. Under 50 is Short. Under 80 is Moderate. 80 or more is Strong. A Short label means the pool is small for the length you chose. It is not a report that the password was found in a breach.",
        ],
      },
      {
        id: "use",
        heading: "What should you do with the result?",
        paragraphs: [
          "Each press draws a new password. Do not expect the same string twice. Copy it into a password manager or another store you trust. The generator does not remember the previous value after you leave the page.",
          "The strength checker is a different tool. It rates a password you type, using the kinds of characters it sees. The generator rates the password from the sets you selected before the string exists. Neither page looks up breaches. A hash of the password is a third, separate task.",
        ],
      },
    ],
    steps: [
      {
        title: "Set the length",
        body: "Use a whole number from 8 to 64. The default is 16. A blank or a fraction is rejected.",
      },
      {
        title: "Select at least one character type",
        body: "Letters, digits, and symbols can be combined. Turn off a type only if a site refuses those characters.",
      },
      {
        title: "Decide whether to drop ambiguous characters",
        body: "That option removes O, 0, I, l, and 1 so the password is easier to read aloud. It also shrinks the set.",
      },
      {
        title: "Generate and store it",
        body: "Read the set size and the bit estimate, then copy the password into your own store. This page does not keep it.",
      },
    ],
    examples: [
      {
        title: "16 characters, letters and digits",
        body: "Uppercase, lowercase, and digits, with ambiguous characters still allowed, use 62 characters. Length 16 is about 95.27 bits. The page shows 95 bits and Strong. The password itself is random, so this guide does not print one.",
      },
      {
        title: "The symbol set",
        body: "Adding symbols includes !@#$%^&*()-_=+[]{};:,.? and raises the set size above 62 when letters and digits are also on. The bit estimate rises with the set size. Ambiguous filtering does not remove those symbols.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "The label is not a breach check",
        body: "Strong means the pool estimate is at least 80 bits. It does not mean a site will accept the password, and it does not mean the string is absent from a leak.",
      },
      {
        heading: "A new click is a new password",
        body: "Do not refresh hoping to see the same value. Copy it before you leave the page.",
      },
    ],
    faqs: [
      {
        question: "How long can the password be?",
        answer:
          "From 8 to 64 characters. The default length is 16. The length must be a whole number.",
      },
      {
        question: "Why does 16 letters and digits show 95 bits?",
        answer:
          "That selection uses 62 characters. Length times the base-2 log of 62 is about 95.27. The page rounds the display to 95 and labels it Strong because the estimate is at least 80.",
      },
      {
        question: "Which characters count as ambiguous?",
        answer:
          "O, 0, I, l, and 1 are removed from the letter and digit sets when that option is on. The 23 symbols stay.",
      },
      {
        question: "Will the page show the same password again?",
        answer:
          "No. Each generation draws a new string with crypto.getRandomValues. This guide does not publish a sample password for that reason.",
      },
      {
        question: "Is the password uploaded?",
        answer:
          "No. Generation runs in the browser. The page does not store the password or check a breach list.",
      },
    ],
    cta: {
      before: "To create a random password from the sets you select, use the",
      linkLabel: "Password Generator",
      href: "/tools/password-generator",
      after: ". It stays in the browser.",
    },
    alsoSee: [
      {
        before: "To rate a password you already have, read",
        linkLabel: "How to rate a password",
        href: "/guides/how-to-rate-a-password",
        after: ".",
      },
      {
        before: "A hash is a different tool. See",
        linkLabel: "How to hash text",
        href: "/guides/how-to-hash-text",
        after: ".",
      },
    ],
  },
  "how-to-create-a-utm-url": {
    intro:
      "A UTM URL is a destination address plus campaign tags in the query string. The UTM Builder adds utm_source, utm_medium, utm_campaign, utm_term, and utm_content when those boxes are filled. example.com/page?ref=nav with source newsletter, medium email, and campaign spring sale becomes https://example.com/page?ref=nav&utm_source=newsletter&utm_medium=email&utm_campaign=spring+sale. Blank tags are left off. The page does not record a visit.",
    why:
      "Analytics tools can group visits when the links share the same tags. A newsletter and a paid ad can point at the same page and still be told apart. Building the query by hand is easy to mistype. The builder keeps tags that are already on the URL and adds https:// when you omit the scheme.",
    stepsHeading: "How to create a UTM URL",
    sections: [
      {
        id: "fields",
        heading: "Which tags does the builder add?",
        paragraphs: [
          "Source, medium, and campaign are the three tags most reports expect. Term and content are optional. A blank box is skipped, so you do not get an empty utm_term= on the end. Values are trimmed. A campaign of spring sale is encoded as spring+sale.",
          "Existing query parameters stay. ref=nav remains beside the new tags. The builder uses the URL standard search parameters, so a tag you already had is replaced if you set that same tag again.",
        ],
      },
      {
        id: "url",
        heading: "What does the builder accept as the page address?",
        paragraphs: [
          "A full URL with http or https is used as typed. example.com/page receives https:// because no scheme was present. An empty box says Enter a website URL. A string that still is not a URL says Enter a valid website URL.",
          "The result is a link you can copy. Opening it later is what a browser does. This page does not call the site, does not shorten the link, and does not tell you how many people clicked it.",
        ],
      },
      {
        id: "names",
        heading: "How should the tag values be chosen?",
        paragraphs: [
          "Use the same spelling every time you mean the same campaign. Newsletter and newsletter are different sources to a tool that matches the text exactly. Spaces become plus signs in the query. Decide the names before you build a set of links.",
          "Put the tags on the final destination, not on a link that immediately redirects and drops the query string. If a shortener or a login wall strips the query, the tags never arrive. Read the finished URL before you send it.",
          "utm_source, utm_medium, and utm_campaign are ordinary query parameters. They are not a special kind of link by themselves. A reader who copies only the path, or a site that canonicalizes the URL and drops the query, removes the campaign labels. Check the address you will actually publish, including the question mark and everything after it.",
          "The builder replaces a tag when you set it again. If the destination already contains utm_source=old, typing a new source overwrites old. Other parameters, such as ref=nav, stay. Read the result once after you fill the boxes so you notice an overwrite.",
          "Campaign names with an ampersand or a question mark are encoded in the query. Leave those characters out of the name unless you want them as part of the label. The page does not treat a second question mark as a new URL.",
        ],
      },
    ],
    steps: [
      {
        title: "Enter the destination",
        body: "Include the path. A scheme is optional. example.com/page becomes an https URL.",
      },
      {
        title: "Fill the tags you need",
        body: "Source, medium, and campaign cover a normal campaign link. Leave term and content blank if you are not using them.",
      },
      {
        title: "Read the full URL",
        body: "Check that older parameters such as ref are still there and that the campaign text encoded the way you expect.",
      },
      {
        title: "Copy it into the message or ad",
        body: "The builder does not publish the link or count clicks.",
      },
    ],
    examples: [
      {
        title: "A newsletter link that already has a query",
        body: "example.com/page?ref=nav, source newsletter, medium email, and campaign spring sale produces https://example.com/page?ref=nav&utm_source=newsletter&utm_medium=email&utm_campaign=spring+sale.",
      },
      {
        title: "A blank optional tag",
        body: "Leaving term and content empty omits utm_term and utm_content. The URL is not padded with empty parameters.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Spelling is the report",
        body: "Email and email are different mediums if you use both. Pick one spelling and keep it.",
      },
      {
        heading: "The builder does not track anyone",
        body: "It only writes a URL. Your analytics tool sees the tags if the visitor’s request still includes them.",
      },
    ],
    faqs: [
      {
        question: "What does a space in the campaign become?",
        answer:
          "spring sale is encoded as spring+sale in utm_campaign. The other tags are encoded the same way.",
      },
      {
        question: "Do I have to type https://?",
        answer:
          "No. example.com/page is saved as an https URL. A URL that already has a scheme keeps that scheme.",
      },
      {
        question: "What happens to ref=nav?",
        answer:
          "It stays on the URL. New UTM tags are added beside it.",
      },
      {
        question: "Are empty tags included?",
        answer:
          "No. A blank source, medium, campaign, term, or content is omitted.",
      },
      {
        question: "Does this page record the click?",
        answer:
          "No. It builds the URL in the browser and does not contact the destination.",
      },
    ],
    cta: {
      before: "To add campaign tags to a destination, use the",
      linkLabel: "UTM Builder",
      href: "/tools/utm-builder",
      after: ". Blank fields are left off the URL.",
    },
    alsoSee: [
      {
        before: "To see how a finished URL is split into parts, read",
        linkLabel: "How to read a URL",
        href: "/guides/how-to-read-a-url",
        after: ".",
      },
      {
        before: "Spaces and reserved characters are covered in",
        linkLabel: "How to percent-encode a URL",
        href: "/guides/how-to-percent-encode-a-url",
        after: ".",
      },
    ],
  },
  "how-to-clean-and-compare-text": {
    intro:
      "Cleaning text means removing noise before you compare two drafts. The Text Diff tool compares an original with a modified copy by lines or by words. Hello world against Hello there, in words mode, marks Hello and its trailing space as unchanged, there as added, and world as removed. The counts are 1 added, 1 removed, and 1 unchanged. Each side can be up to 200,000 characters and 4,000 tokens.",
    why:
      "Two paragraphs can look the same and still differ by a word. A diff shows the changed tokens instead of asking you to scan both boxes. Duplicate lines, extra whitespace, and unsorted lists make that comparison noisy. Clean those first when the difference you care about is the wording, not the spacing.",
    stepsHeading: "How to clean and compare text",
    sections: [
      {
        id: "diff",
        heading: "What does the diff show?",
        paragraphs: [
          "Words mode splits on whitespace and compares those tokens. Lines mode compares whole lines. The result is a list of equal, added, and removed pieces, plus counts. Hello world and Hello there share the token Hello. there is an addition. world is a removal.",
          "The comparison does not decide which draft is better. It only shows what changed. If both sides are identical, you get equal text and zero added or removed tokens.",
        ],
      },
      {
        id: "clean",
        heading: "What should you clean before a diff?",
        paragraphs: [
          "Line breaks inside a wrapped paragraph show up as changes even when the words match. Join those lines first if you are comparing prose. Duplicate lines and extra blank lines do the same thing in lines mode. Remove duplicates or collapse whitespace when they are not part of the edit you want to see.",
          "Sorting a list changes the order, which is a real difference. Sort both sides the same way only when order does not matter. Otherwise you will hide a reorder or invent one.",
        ],
      },
      {
        id: "limits",
        heading: "What are the size limits?",
        paragraphs: [
          "Each side must stay under 200,000 characters. Above that, the page says to keep each side under 200,000 characters so the comparison stays responsive. Each side must also stay within 4,000 tokens for the mode you picked. A long page of words can hit the token cap before the character cap.",
          "The work runs in the browser. Do not paste passwords or other secrets into a diff you are sharing on a screen. The tool does not upload the text, but it does display it.",
          "Whitespace that differs only by a double space can show up as a changed token in words mode. Collapse those spaces first when you care about words and not about spacing. The diff will not ignore whitespace for you.",
        ],
      },
    ],
    steps: [
      {
        title: "Decide what a change means",
        body: "Use words for prose and lines for lists, code, or logs. The same edit looks different in the two modes.",
      },
      {
        title: "Clean only the noise you do not care about",
        body: "Join wrapped lines, drop duplicate lines, or trim whitespace when those are not the edit under review.",
      },
      {
        title: "Paste the original and the modified text",
        body: "Keep the sides under 200,000 characters and 4,000 tokens each.",
      },
      {
        title: "Read the added and removed counts",
        body: "Then read the hunks. A count of 1 added and 1 removed can be a single replaced word, as with world and there.",
      },
    ],
    examples: [
      {
        title: "One replaced word",
        body: "Hello world versus Hello there in words mode leaves Hello unchanged, adds there, and removes world. The counts are 1 added, 1 removed, and 1 unchanged.",
      },
      {
        title: "A line-wrap that is not a rewrite",
        body: "A sentence split across two lines differs in lines mode even when the words match. Join the line breaks, then compare again if you wanted a word diff.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Words mode and lines mode answer different questions",
        body: "A wrapped paragraph looks heavily changed by lines and lightly changed by words. Pick the mode that matches the edit.",
      },
      {
        heading: "The token cap is 4,000",
        body: "Shorten the input or split it when the page says the comparison handles up to 4,000 tokens.",
      },
    ],
    faqs: [
      {
        question: "What changes between Hello world and Hello there?",
        answer:
          "In words mode, Hello is unchanged, there is added, and world is removed. The counts are 1 added, 1 removed, and 1 unchanged.",
      },
      {
        question: "How large can each side be?",
        answer:
          "Up to 200,000 characters and 4,000 tokens. A longer side is rejected.",
      },
      {
        question: "Should I remove line breaks first?",
        answer:
          "Yes, if the breaks come from wrapping and you want to compare words. Leave them if the line structure is the thing that changed.",
      },
      {
        question: "Does the diff rank the drafts?",
        answer:
          "No. It marks equal, added, and removed text. It does not score grammar or style.",
      },
      {
        question: "Is the text uploaded?",
        answer:
          "No. The comparison runs in the browser.",
      },
    ],
    cta: {
      before: "To compare two drafts by words or lines, use the",
      linkLabel: "Text Diff tool",
      href: "/tools/text-diff",
      after: ". Each side stays in the browser.",
    },
    alsoSee: [
      {
        before: "To join wrapped lines before a comparison, see",
        linkLabel: "How to remove line breaks",
        href: "/guides/how-to-remove-line-breaks",
        after: ".",
      },
      {
        before: "To check length after a cleanup, see",
        linkLabel: "How to count characters",
        href: "/guides/how-to-count-characters",
        after: ".",
      },
    ],
  },
  "how-to-scan-a-qr-code": {
    intro:
      "To read a QR code on this site, start the camera or upload a PNG, JPG, or WebP image. The scanner decodes the first code it finds, then stops the camera. It does not open a link by itself. If the text looks like a URL, an Open link control appears and you choose whether to use it. Frames and uploaded images are decoded in the tab.",
    why:
      "A code can contain a URL, a Wi-Fi setting, or plain text. Opening it automatically would follow whatever was encoded. Reading it first lets you copy the text, check the address, or ignore it. Upload still works when the camera is blocked.",
    stepsHeading: "How to read a QR code",
    sections: [
      {
        id: "camera",
        heading: "When does the camera turn on?",
        paragraphs: [
          "The camera stays off until you press Start camera. The browser then asks for permission. Facing the rear camera is requested when the device has one. Stop camera ends the stream. Leaving the page stops it too.",
          "If permission is denied, the page says you can still upload an image. If no camera is found, it says to upload an image. If the browser has no camera API, it says to upload an image. None of those cases decode a code from the room on their own.",
        ],
      },
      {
        id: "image",
        heading: "How does an image upload work?",
        paragraphs: [
          "The file control accepts JPEG, PNG, and WebP. The image is drawn to a canvas in the tab and passed to the decoder. A photo with no QR code says No QR code was found in that image. A file that is not a readable image says that file could not be read as an image.",
          "The scan returns the first code in the frame or the file. It does not list every code on a sheet. Crop the image to one code if several are visible and you need a specific one.",
        ],
      },
      {
        id: "result",
        heading: "What should you do with the text?",
        paragraphs: [
          "The result is shown as text you can copy. A value that looks like a URL gets an Open link control with a new tab. You press it. The scanner does not navigate by itself. A code that is not a URL has no open control.",
          "Creating a code is a different page. The generator accepts up to 1,200 characters, uses error correction level M, a margin of 2, and a width of 320, and downloads a PNG. Scanning that PNG should return the text you encoded, as long as the image is clear.",
          "A blurry photo, a code that is cut off, or a heavy glare can fail even when you can see a pattern. The error is still No QR code was found in that image. Move closer or crop tighter and try the file again. The scanner does not guess a partial code.",
        ],
      },
    ],
    steps: [
      {
        title: "Choose camera or file",
        body: "Press Start camera only if you want the camera on. Otherwise upload a PNG, JPG, or WebP.",
      },
      {
        title: "Hold one code in view",
        body: "The scanner stops at the first code it decodes. Crop a busy image down to the code you want.",
      },
      {
        title: "Read the text",
        body: "Copy it if you need to keep it. Check a URL before you open it.",
      },
      {
        title: "Open a link only on purpose",
        body: "Use the Open link control when you trust the address. Reset clears the result and the file name.",
      },
    ],
    examples: [
      {
        title: "A link inside a code",
        body: "If the decoded text is a URL, the page shows the full text and an Open link control. Nothing is opened until you use that control.",
      },
      {
        title: "A photo with no code",
        body: "Uploading an image that has no QR code clears any old result and says No QR code was found in that image.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "The camera is opt-in",
        body: "Opening the page does not start the camera. Press Start camera, and allow permission if you want a live scan.",
      },
      {
        heading: "The first code wins",
        body: "A sheet of codes returns one result. Crop to the code you mean to read.",
      },
    ],
    faqs: [
      {
        question: "Does the scanner open links automatically?",
        answer:
          "No. It shows the text. If the text looks like a URL, you can press Open link. Until then the page stays put.",
      },
      {
        question: "Which image types work?",
        answer:
          "JPEG, PNG, and WebP. Upload works even when the camera is blocked.",
      },
      {
        question: "What if permission is denied?",
        answer:
          "The page says camera permission was denied and that you can still upload an image.",
      },
      {
        question: "Can it read several codes in one picture?",
        answer:
          "It returns the first code it finds, then stops. Crop the image if you need a different code.",
      },
      {
        question: "Are frames uploaded?",
        answer:
          "No. Frames after Start camera, and a PNG, JPG, or WebP you choose, are decoded in this tab.",
      },
    ],
    cta: {
      before: "To decode a code from the camera or an image, use the",
      linkLabel: "QR Code Scanner",
      href: "/tools/qr-code-scanner",
      after: ". It waits for you to start the camera.",
    },
    alsoSee: [
      {
        before: "Campaign links are ordinary URLs. See",
        linkLabel: "How to create a UTM URL",
        href: "/guides/how-to-create-a-utm-url",
        after: ".",
      },
      {
        before: "To split a decoded address into parts, read",
        linkLabel: "How to read a URL",
        href: "/guides/how-to-read-a-url",
        after: ".",
      },
    ],
  },
  "how-to-convert-hex-to-rgb": {
    intro:
      "A hex color stores red, green, and blue as base-16 pairs. #336699 is red 51, green 102, and blue 153, which is rgb(51, 102, 153). The same color is hsl(210, 50%, 40%), and the short form #369 is the same color. #fff is #ffffff, which is rgb(255, 255, 255). The converter accepts 3-digit, 6-digit, and 8-digit hex, with or without a #.",
    why:
      "Design tools, CSS, and image editors do not all show the same notation. Converting the hex lets you paste the form the next tool expects. The page also shows HSL, which is useful when you want to talk about hue and lightness. It does not accept color names such as red.",
    stepsHeading: "How to convert a hex color to RGB",
    sections: [
      {
        id: "pairs",
        heading: "How do the hex pairs become channel numbers?",
        paragraphs: [
          "A 6-digit hex is three pairs: rr, gg, and bb. Each pair is a base-16 number from 00 to ff, which is 0 to 255 in decimal. 33 is 51, 66 is 102, and 99 is 153. That is why #336699 is rgb(51, 102, 153).",
          "A 3-digit hex repeats each digit. #369 is #336699. #fff is #ffffff. An 8-digit hex adds an alpha pair. The page reports whether alpha is present and shows both rgb() and rgba() forms.",
        ],
      },
      {
        id: "hsl",
        heading: "What else does the page return?",
        paragraphs: [
          "#336699 is also hsl(210, 50%, 40%). Hue, saturation, and lightness are derived from the same red, green, and blue channels. They are a different way to write the color, not a different color.",
          "The word red is rejected. The message says to use 3-digit, 6-digit, or 8-digit hex, with or without #. Named CSS colors and rgb() input are outside this converter. Paste the hex.",
        ],
      },
      {
        id: "use",
        heading: "How should you use the result?",
        paragraphs: [
          "Copy rgb(51, 102, 153) into CSS when a field wants the function form. Copy #336699 when it wants hex. The short form #369 is safe in CSS for this color because it expands to the same channels.",
          "Contrast is a separate question. Two hex values can be converted and still fail a contrast check. Use the contrast checker when the color will sit on text. This converter does not score readability.",
          "Eight-digit hex adds alpha as the last pair. ff at the end is fully opaque, and 00 is fully transparent. The page shows rgba() and hsla() when that pair is present. A 6-digit color such as #336699 has no alpha pair, so alpha stays 1.",
          "Channel order is red, then green, then blue. #336699 is red 51, green 102, and blue 153. Reading the pairs from the left avoids swapping a CSS value. The short form repeats digits. It does not mean the missing digits are zero.",
          "Copy the form the next field expects. A CSS color property accepts both #336699 and rgb(51, 102, 153). A design tool that wants only hex will not accept the rgb function. The converter shows both so you can pick the one that fits.",
          "Lowercase and uppercase hex digits are the same value. #ff0000 and #FF0000 are both red 255, green 0, and blue 0. The page normalizes the hex it shows. Paste either case.",
        ],
      },
    ],
    steps: [
      {
        title: "Paste the hex",
        body: "Include # or leave it off. Use 3, 6, or 8 hex digits. Other lengths are rejected.",
      },
      {
        title: "Read the red, green, and blue numbers",
        body: "Each channel is an integer from 0 to 255. #336699 is 51, 102, and 153.",
      },
      {
        title: "Copy the CSS form you need",
        body: "The page shows hex, short hex when one exists, rgb, rgba, hsl, and hsla.",
      },
      {
        title: "Check contrast separately if the color is for text",
        body: "Conversion does not tell you whether the color is readable on a background.",
      },
    ],
    examples: [
      {
        title: "#336699",
        body: "The page returns rgb(51, 102, 153), hsl(210, 50%, 40%), and the short hex #369. Alpha is 1, so the color is fully opaque.",
      },
      {
        title: "#fff",
        body: "#fff expands to #ffffff and rgb(255, 255, 255). The three f digits are repeated, not interpreted as a 3-digit number.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Color names are not hex",
        body: "red, white, and similar words are rejected. Paste #ff0000 or another hex value instead.",
      },
      {
        heading: "3 digits are repeated, not padded with zeros",
        body: "#369 becomes #336699, not #369000. Each digit is doubled.",
      },
    ],
    faqs: [
      {
        question: "What is #336699 in RGB?",
        answer:
          "rgb(51, 102, 153). The pairs 33, 66, and 99 are 51, 102, and 153 in decimal. The HSL form is hsl(210, 50%, 40%).",
      },
      {
        question: "Is #369 the same color?",
        answer:
          "Yes. A 3-digit hex repeats each digit, so #369 is #336699.",
      },
      {
        question: "What does #fff become?",
        answer:
          "#ffffff and rgb(255, 255, 255).",
      },
      {
        question: "Can I type the word red?",
        answer:
          "No. The page asks for 3-digit, 6-digit, or 8-digit hex, with or without #.",
      },
      {
        question: "Does the conversion leave the browser?",
        answer:
          "No. The hex is parsed in this tab.",
      },
    ],
    cta: {
      before: "To turn hex into RGB and HSL, use the",
      linkLabel: "Hex to RGB converter",
      href: "/tools/hex-to-rgb",
      after: ". It accepts 3-digit, 6-digit, and 8-digit hex.",
    },
    alsoSee: [
      {
        before: "To pick a color another way, read",
        linkLabel: "How to pick a color",
        href: "/guides/how-to-pick-a-color",
        after: ".",
      },
      {
        before: "For text on a background, see",
        linkLabel: "How to check color contrast",
        href: "/guides/how-to-check-color-contrast",
        after: ".",
      },
    ],
  },
};
