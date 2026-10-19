import type { GuideContent } from "./guide-content.ts";

/**
 * Expanded English bodies for the short developer and text guides.
 * getGuideContent prefers this map. Titles, slugs, and meta stay in articles.ts.
 */
export const phase3TextGuides: Record<string, GuideContent> = {
  "how-to-hash-text": {
    intro:
      "A hash is a fixed-length fingerprint of the text you paste. The Hash Generator offers SHA-256, SHA-384, and SHA-512 through Web Crypto in the browser. SHA-256 of the letters abc is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad. The same text and the same algorithm always return that same lowercase hex. The page cannot turn the hex back into the original text.",
    why:
      "A hash is useful when you need to check that a snippet has not changed. Change one character and the hex changes. MD5 and SHA-1 are not offered here. They are legacy hashes and a poor choice for a new integrity check. This page does not encrypt the text, store a password, or look up breaches.",
    stepsHeading: "How to hash text",
    sections: [
      {
        id: "which-algorithm",
        heading: "What do SHA-256, SHA-384, and SHA-512 change?",
        paragraphs: [
          "SHA-256 is 64 hex characters, which is 32 bytes. SHA-384 is 96 hex characters. SHA-512 is 128 hex characters. A longer digest is a longer fingerprint of the same UTF-8 bytes. It is not a different kind of secret, and it is not reversible on this page.",
          "SHA-256 of hello is 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824. SHA-256 of an empty box is e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. Empty text is allowed. That value is the hash of no bytes, not an error message.",
        ],
      },
      {
        id: "encoding",
        heading: "Which bytes does the hash actually use?",
        paragraphs: [
          "The page encodes the text as UTF-8 before hashing. A trailing space, a different line ending, or an accented letter changes the bytes, so the hex changes. If you copied the text from a document, check for a space at the end before you decide two hashes disagree.",
          "Pasting the characters of a file hashes those characters, not the file bytes on disk. A PDF or an image is not plain text. Hashing a filename is not the same as hashing the file. Compare the full hex. Two different texts can share a short prefix by chance.",
        ],
      },
      {
        id: "not-encryption",
        heading: "How is a hash different from encryption and Base64?",
        paragraphs: [
          "Encryption is meant to be reversed with a key. A hash on this page is one way. Base64 is also reversible. It is an encoding, not a fingerprint. Use Base64 when you need ASCII that can be decoded later. Use a hash when you need to check that two copies match.",
          "This generator does not add a salt, and it does not compare the text with a breach list. Do not treat the hex as a stored password. If you need a new password, use a generator. If you want to rate a password you already typed, use the strength checker. Neither of those pages is a hash of the password.",
        ],
      },
    ],
    steps: [
      {
        title: "Paste the exact text",
        body: "Include the spaces and line breaks you want counted. The box can be empty. An empty box still produces a hash of no bytes.",
      },
      {
        title: "Choose SHA-256, SHA-384, or SHA-512",
        body: "SHA-256 is the usual choice for a short integrity check. The other two only change the length of the hex.",
      },
      {
        title: "Press Create hash",
        body: "The work runs in this browser tab with Web Crypto. The hex is lowercase. If this browser has no Web Crypto, the page says so and does not invent a result.",
      },
      {
        title: "Copy the full hex",
        body: "Compare every character with the other copy. A matching prefix is not enough.",
      },
    ],
    examples: [
      {
        title: "SHA-256 of abc",
        body: "The letters abc, with no quotes and no trailing space, hash to ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad. That is 64 hex characters.",
      },
      {
        title: "SHA-256 of hello",
        body: "hello hashes to 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824. Add a space, or change the capital letter, and the hex will not match.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "A space is part of the input",
        body: "abc and abc with a trailing space are different texts. Hash both sides the same way before you call them a mismatch.",
      },
      {
        heading: "The hex is not a password",
        body: "The page does not salt the text, and it does not check whether the text has appeared in a breach. It only fingerprints what you pasted.",
      },
    ],
    faqs: [
      {
        question: "Can I reverse a SHA-256 hash on this page?",
        answer:
          "No. The Hash Generator only turns text into hex. It has no key and no reverse step. Base64 can be decoded. A hash cannot.",
      },
      {
        question: "Why is the empty box still a hash?",
        answer:
          "Empty text is zero bytes, and SHA-256 of zero bytes is e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. The page does not treat an empty box as an error.",
      },
      {
        question: "Does a longer algorithm hide the text better?",
        answer:
          "No. SHA-384 and SHA-512 only produce a longer fingerprint. None of the three algorithms encrypts the text or stores it.",
      },
      {
        question: "Will the same text always match?",
        answer:
          "Yes, for the same algorithm and the same UTF-8 bytes. A different line ending or a trailing space is a different input.",
      },
      {
        question: "Is the text sent to a server?",
        answer:
          "Hashing runs in your browser with Web Crypto. Tools Star Hub does not receive the text as part of creating the hash.",
      },
    ],
    cta: {
      before: "To fingerprint a snippet with SHA-256, SHA-384, or SHA-512, use the",
      linkLabel: "Hash Generator",
      href: "/tools/hash-generator",
      after: ". It runs in the browser and returns lowercase hex.",
    },
    alsoSee: [
      {
        before: "If you need reversible ASCII instead of a fingerprint, read",
        linkLabel: "What is Base64?",
        href: "/guides/what-is-base64",
        after: ".",
      },
      {
        before: "For a new password, see",
        linkLabel: "How to generate a password",
        href: "/guides/how-to-generate-a-password",
        after: ".",
      },
    ],
  },
  "how-to-convert-json-to-csv": {
    intro:
      "JSON becomes CSV on this page only when the text is an array of objects. The JSON to CSV tool reads the keys as the header row and writes one CSV row per object. [{\"name\":\"Ada\",\"id\":1},{\"name\":\"Lin\",\"id\":2}] becomes a header of name,id and two data rows, Ada,1 and Lin,2. A single object, an empty array, or an array of numbers is rejected.",
    why:
      "Spreadsheets expect a header and rows. JSON often arrives as an array of records. Converting that shape locally lets you open the result in a spreadsheet without uploading the text. Nested values are not flattened into extra columns. They are written as JSON text inside one cell.",
    stepsHeading: "How to turn a JSON array into CSV",
    sections: [
      {
        id: "shape",
        heading: "What shape of JSON does the converter accept?",
        paragraphs: [
          "The text must be valid JSON, and the top value must be an array. Each item must be an object, not an array, a string, or null. An empty array fails with the message that there are no rows to convert. An object with no keys fails because there is nothing to put in a header.",
          "Keys are collected in the order they first appear. A later object can add a new column. A missing key becomes an empty cell. null and undefined also become empty cells. true and false become the words true and false. A number is written as its digits.",
        ],
      },
      {
        id: "quoting",
        heading: "When does a cell get quotes?",
        paragraphs: [
          "A cell is wrapped in double quotes when it contains a comma, a double quote, or a line break. A double quote inside the cell is doubled. That is ordinary CSV escaping, so a spreadsheet can tell the comma belongs to the cell and not to the column break.",
          "A nested object or array is passed through JSON.stringify and then escaped if needed. The converter does not invent columns for street and city inside an address object. If you need those as separate columns, reshape the JSON first so each field is a top-level key.",
        ],
      },
      {
        id: "limits",
        heading: "What will the converter refuse?",
        paragraphs: [
          "Comments, single-quoted keys, and trailing commas are not JSON, so the page says the text is not valid JSON. A top-level object such as {\"name\":\"Ada\"} is valid JSON and still fails, because the converter asks for an array of objects.",
          "The result is text you can copy. It does not open a spreadsheet for you, and it does not send the JSON to a server. If the records are already CSV, use the CSV to JSON tool in the other direction.",
        ],
      },
    ],
    steps: [
      {
        title: "Paste an array of objects",
        body: "The first character after any surrounding space should be an opening bracket. Format the JSON first if you are not sure it parses.",
      },
      {
        title: "Check that every item is an object",
        body: "A number, a string, null, or a nested array in the top list stops the conversion and names the item number.",
      },
      {
        title: "Read the header",
        body: "The first row is the keys, in first-seen order. Later keys are added to the right. Missing keys stay blank.",
      },
      {
        title: "Copy the CSV",
        body: "Quoted cells already follow the comma and quote rules. Open the text in a spreadsheet if you want to check the columns.",
      },
    ],
    examples: [
      {
        title: "Two flat records",
        body: "The array [{\"name\":\"Ada\",\"id\":1},{\"name\":\"Lin\",\"id\":2}] converts to name,id followed by Ada,1 and Lin,2. The tool reports 2 rows and the columns name and id.",
      },
      {
        title: "A comma inside a name",
        body: "A name such as Ada, Lin is written as a quoted cell, with the comma kept inside the quotes. The header stays a single name column.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "A lone object is not a table",
        body: "Wrap one record in brackets if you want one data row. {\"name\":\"Ada\"} is valid JSON and still not the shape this converter accepts.",
      },
      {
        heading: "Nested fields stay in one cell",
        body: "An address object becomes JSON text in that column. It does not split into street and city columns.",
      },
    ],
    faqs: [
      {
        question: "Why does an empty array fail?",
        answer:
          "There are no objects to read keys from, so there is no header. The page says the array is empty and there are no rows to convert.",
      },
      {
        question: "What happens to a missing key?",
        answer:
          "The column still exists if some other object has that key. The missing value is an empty cell.",
      },
      {
        question: "Are nested objects expanded?",
        answer:
          "No. A nested object or array is placed in one cell as JSON text, then quoted if the cell contains a comma, quote, or line break.",
      },
      {
        question: "Do I need a spreadsheet?",
        answer:
          "No. The page returns CSV text. A spreadsheet is only a way to check the columns after you copy the result.",
      },
      {
        question: "Does the conversion leave the browser?",
        answer:
          "No. The JSON to CSV tool parses and writes the text in this tab.",
      },
    ],
    cta: {
      before: "To turn an array of objects into a header and rows, use the",
      linkLabel: "JSON to CSV converter",
      href: "/tools/json-to-csv",
      after: ". It keeps the work in the browser.",
    },
    alsoSee: [
      {
        before: "If the text will not parse, start with",
        linkLabel: "What is JSON?",
        href: "/guides/what-is-json",
        after: ".",
      },
      {
        before: "To go the other way, see",
        linkLabel: "how to convert CSV to JSON",
        href: "/guides/how-to-convert-csv-to-json",
        after: ".",
      },
    ],
  },
  "how-to-remove-line-breaks": {
    intro:
      "To remove line breaks, paste the text and choose what should happen to each break. Replace line breaks with spaces turns Hello and world on two lines into Hello world. Remove line breaks joins them into Helloworld. Keep paragraph breaks leaves a blank line between paragraphs and joins the lines inside each paragraph with spaces. An empty box is rejected.",
    why:
      "Copied paragraphs often arrive with a break after every line. That is hard to edit and it inflates a line count. Joining lines, or joining only the lines inside a paragraph, makes the text readable again without retyping it. The change stays in the browser.",
    stepsHeading: "How to remove line breaks",
    sections: [
      {
        id: "three-modes",
        heading: "Which of the three modes should you use?",
        paragraphs: [
          "Replace line breaks with spaces is the usual choice for a wrapped paragraph. Every run of line breaks becomes one space, repeated spaces and tabs collapse, and the result is trimmed. Hello followed by a line break and world becomes Hello world.",
          "Remove line breaks deletes the breaks and does not insert a space. Hello and world become Helloworld. Use that only when the break was not standing in for a space, such as a word split across two lines with no hyphen you want to keep.",
          "Keep paragraph breaks splits the text on a blank line, which is two or more line breaks. Inside each block, single breaks become spaces. The blocks are joined again with a blank line. A single break inside a paragraph is not kept as its own line.",
        ],
      },
      {
        id: "endings",
        heading: "What counts as a line break?",
        paragraphs: [
          "Windows line endings, old Mac carriage returns, and ordinary newline characters are all treated as line breaks before the mode runs. You do not pick a line-ending style. The page normalizes them first.",
          "Spaces that were already between words stay. The space mode also collapses runs of spaces and tabs that appear after the breaks are replaced. It does not delete a single space between words.",
        ],
      },
      {
        id: "after",
        heading: "What should you check after the join?",
        paragraphs: [
          "Read the joins. A line that ended with a hyphen may now contain a hyphen in the middle of a sentence. A list that used one item per line becomes one sentence in the space mode. If you needed the list, do not use that mode.",
          "Empty input fails with Paste some text first. Whitespace alone is also empty after trimming. The page does not invent a paragraph. If you also need a character count, count the text after you join it, because the breaks themselves are characters.",
        ],
      },
    ],
    steps: [
      {
        title: "Paste the text",
        body: "The box cannot be blank. A file that is only line breaks is treated as empty.",
      },
      {
        title: "Pick a mode",
        body: "Use spaces for wrapped prose, remove when you truly want the characters pushed together, and paragraph mode when blank lines should stay.",
      },
      {
        title: "Run it and read the joins",
        body: "Look for missing spaces, leftover hyphens, and lists that collapsed into one line.",
      },
      {
        title: "Copy the result",
        body: "The original stays in the box until you clear it. Copy only the output you checked.",
      },
    ],
    examples: [
      {
        title: "Two words on two lines",
        body: "Hello followed by a newline and world becomes Hello world in the space mode. The remove mode returns Helloworld, with no space added.",
      },
      {
        title: "A blank line between paragraphs",
        body: "Keep paragraph breaks leaves the blank line between two blocks and joins any single line breaks inside each block with spaces. One trailing blank line does not create an extra empty paragraph.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Remove is not the same as replace with spaces",
        body: "Remove deletes the break. It does not put a space where the break was. Words that sat on separate lines will stick together.",
      },
      {
        heading: "A list is a list of lines",
        body: "The space mode turns one item per line into one paragraph. Keep the breaks if the line structure matters.",
      },
    ],
    faqs: [
      {
        question: "What does Hello on two lines become?",
        answer:
          "With Replace line breaks with spaces, Hello and world become Hello world. With Remove line breaks, they become Helloworld.",
      },
      {
        question: "Does a blank line survive?",
        answer:
          "Only in Keep paragraph breaks. That mode splits on two or more line breaks and joins the pieces with a blank line. The other two modes do not keep paragraph gaps.",
      },
      {
        question: "Why does an empty box fail?",
        answer:
          "The page asks you to paste some text first. A box that is only spaces or line breaks is empty after trimming.",
      },
      {
        question: "Are Windows line endings handled?",
        answer:
          "Yes. Carriage return plus newline, a lone carriage return, and a newline are all treated as line breaks before the mode runs.",
      },
      {
        question: "Does the text leave the browser?",
        answer:
          "No. The line-break tool rewrites the text in this tab.",
      },
    ],
    cta: {
      before: "To join lines, drop breaks, or keep paragraph gaps, use the",
      linkLabel: "Remove Line Breaks tool",
      href: "/tools/remove-line-breaks",
      after: ". It runs in the browser.",
    },
    alsoSee: [
      {
        before: "For duplicate lines, whitespace, and a side-by-side comparison, read",
        linkLabel: "How to clean and compare text",
        href: "/guides/how-to-clean-and-compare-text",
        after: ".",
      },
      {
        before: "To see how breaks affect a count, see",
        linkLabel: "How to count characters",
        href: "/guides/how-to-count-characters",
        after: ".",
      },
    ],
  },
  "how-to-count-characters": {
    intro:
      "The Character Counter counts Unicode characters, including spaces, and shows a second total with spaces removed. It also shows words and lines. Hi there is 8 characters, 7 without spaces, 2 words, and 1 line. The letter A followed by a grinning-face emoji is 2 characters. Counts update as you type, and the text stays in the browser.",
    why:
      "Forms, bios, and titles often cap the number of characters, not the number of words. A space counts toward that cap on this page. An emoji counts as one character here, even when it is drawn from more than one code unit in older systems. Counting before you paste avoids a rejected form.",
    stepsHeading: "How to count characters",
    sections: [
      {
        id: "what-counts",
        heading: "What does the character total include?",
        paragraphs: [
          "Characters are Unicode code points. A space is a character. A line break is a character. a b is 3 characters and 2 characters without spaces. one and two on separate lines is 7 characters, 6 without spaces, 2 words, and 2 lines.",
          "The without-spaces total removes every whitespace character, including line breaks and tabs, and then counts what remains. It is not a count of letters only. Digits and punctuation stay.",
        ],
      },
      {
        id: "words-lines",
        heading: "How are words and lines counted?",
        paragraphs: [
          "A word is a run of non-space characters. Hi there is 2 words. Punctuation stuck to a word stays with that word. The page does not count sentences. The Word Counter is the page that also reports sentences, paragraphs, and a reading time.",
          "Lines are splits on a newline. An empty box is 0 lines. Text with no newline is 1 line. A trailing newline adds a line because the split still produces an extra piece. If you joined lines first, count again, because the line total will drop.",
        ],
      },
      {
        id: "limits",
        heading: "Where do character counts disagree?",
        paragraphs: [
          "Some sites count UTF-16 code units, so one emoji can count as two. This page counts code points, so A and a grinning-face emoji is 2. A limit on another site may still disagree. If a form rejects the text, compare its rule with this count before you assume the text is short enough.",
          "The counter does not trim the box for you. Leading and trailing spaces are included in the character total. Clear them if the limit should ignore them. The copy button copies the character total, not the text.",
          "A form that says 280 characters and a form that says 280 characters excluding spaces are different tests. Match the row to the rule you were given. If you are checking a title and a body, count them separately. Pasting both into one box adds the space or line break between them.",
        ],
      },
    ],
    steps: [
      {
        title: "Paste or type the text",
        body: "The totals update on each change. You do not press a count button.",
      },
      {
        title: "Read Characters for the cap",
        body: "That number includes spaces and line breaks. Use it when a form says characters.",
      },
      {
        title: "Read Characters without spaces when spaces are free",
        body: "That total drops whitespace and keeps everything else, including punctuation.",
      },
      {
        title: "Check words and lines only if you need them",
        body: "Words are runs of non-space text. Lines follow newline characters. Sentences are not counted here.",
      },
    ],
    examples: [
      {
        title: "Hi there",
        body: "Hi there is 8 characters, 7 without spaces, 2 words, and 1 line. The space is the difference between the two character totals.",
      },
      {
        title: "A letter and an emoji",
        body: "A followed by a grinning-face emoji is 2 characters and 2 characters without spaces. It is 1 word. This page counts the emoji as one Unicode character.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Spaces count in the main total",
        body: "A 100-character limit on this counter includes spaces. The without-spaces figure is the other row, and it is smaller.",
      },
      {
        heading: "An emoji is one character here",
        body: "Do not assume every other form uses the same rule. Some counters treat one emoji as two units.",
      },
    ],
    faqs: [
      {
        question: "Does a space count as a character?",
        answer:
          "Yes, in the Characters total. Characters without spaces leaves it out. a b is 3 characters and 2 without spaces.",
      },
      {
        question: "How is an emoji counted?",
        answer:
          "As one Unicode character. A and a grinning-face emoji is 2 characters on this page.",
      },
      {
        question: "Are sentences counted?",
        answer:
          "No. This page shows characters, characters without spaces, words, and lines. The Word Counter adds sentences, paragraphs, and reading time.",
      },
      {
        question: "What is a line?",
        answer:
          "A piece split on a newline. Text with no newline is 1 line. An empty box is 0 lines. one and two on two lines is 2 lines and 7 characters.",
      },
      {
        question: "Is the text uploaded?",
        answer:
          "No. Counts update in the browser as you type.",
      },
    ],
    cta: {
      before: "To count characters, spaces, words, and lines as you type, use the",
      linkLabel: "Character Counter",
      href: "/tools/character-counter",
      after: ". The text stays in the browser.",
    },
    alsoSee: [
      {
        before: "For sentences and reading time, the related cleanup guide is",
        linkLabel: "How to clean and compare text",
        href: "/guides/how-to-clean-and-compare-text",
        after: ", which also points at the Word Counter.",
      },
      {
        before: "If line breaks are inflating the count, see",
        linkLabel: "How to remove line breaks",
        href: "/guides/how-to-remove-line-breaks",
        after: ".",
      },
    ],
  },
  "what-is-base64": {
    intro:
      "Base64 is a way to write binary data, or any UTF-8 text, with a limited set of ASCII characters. It is an encoding, not encryption. The Base64 encoder turns Hi into SGk=. Decoding SGk= returns Hi. The same page turns héllo into aMOpbGxv, because the accented letter takes more than one UTF-8 byte. Anyone can reverse the text. A password encoded this way is not hidden.",
    why:
      "Some systems want a single line of ASCII for a small payload, a data URL, or a token part. Base64 does that without keeping the original bytes as raw binary. It also makes the text longer. Use it when a format asks for Base64. Do not use it as a substitute for a password hash or encryption.",
    stepsHeading: "How to encode or decode Base64",
    sections: [
      {
        id: "what-it-is",
        heading: "What does Base64 actually change?",
        paragraphs: [
          "The encoder turns the text into UTF-8 bytes, then writes those bytes as Base64. Hi is the bytes for H and i, which encode to SGk=. The trailing equals sign is padding so the length fits the Base64 rules. hello encodes to aGVsbG8=.",
          "héllo encodes to aMOpbGxv. The é is two UTF-8 bytes, so the result is not the same as a naive one-byte-per-letter conversion. Decoding uses the same path in reverse and returns the original text, including the accent.",
        ],
      },
      {
        id: "not-secret",
        heading: "Why is Base64 not a secret?",
        paragraphs: [
          "Decoding does not need a key. SGk= is Hi to anyone with a decoder, including this page. Whitespace in the encoded text is stripped before decoding, so a line break inside SGk= still decodes to Hi. That convenience is not protection.",
          "A hash is different. SHA-256 of a password cannot be decoded on the Hash Generator. Base64 of a password can. If the goal is a fingerprint, use a hash. If the goal is a new password, use the password generator.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits on this page?",
        paragraphs: [
          "The encoder and decoder accept up to 750,000 characters. A larger paste is rejected. Invalid Base64 fails to decode instead of returning a guess. The page does not add a line wrap of its own.",
          "Encoding a file is not the same as pasting its filename. This tool encodes the text in the box. It does not read a PDF or an image from disk unless you paste text. The work stays in the browser.",
          "Base64 is longer than the original bytes. Four Base64 characters represent three bytes, with padding when the byte length is not a multiple of three. That growth is normal. It is not a sign that the text was encrypted or compressed.",
          "A data URL puts a prefix such as data:text/plain;base64, in front of the encoded text. This page encodes or decodes the box only. It does not add that prefix, and it does not strip one for you. Paste the Base64 portion by itself when you want a decode.",
        ],
      },
    ],
    steps: [
      {
        title: "Choose encode or decode",
        body: "Encode when you have ordinary text and need Base64. Decode when you already have Base64 and need the text back.",
      },
      {
        title: "Paste the text",
        body: "For encode, the characters are read as UTF-8. For decode, spaces and line breaks in the Base64 are ignored.",
      },
      {
        title: "Read the output",
        body: "Hi encodes to SGk=. Decoding that value returns Hi. If decode fails, the input is not valid Base64.",
      },
      {
        title: "Do not treat the result as hidden",
        body: "Anyone can decode it. Use encryption or a real access control if the text must stay private.",
      },
    ],
    examples: [
      {
        title: "Hi",
        body: "Encoding Hi returns SGk=. Decoding SGk= returns Hi. A space inside the encoded form, such as SG k=, still decodes to Hi because whitespace is stripped.",
      },
      {
        title: "An accented word",
        body: "héllo encodes to aMOpbGxv. The accented letter is why the result is longer than a one-byte-per-letter guess. Decoding returns héllo.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Padding is part of the encoding",
        body: "The equals signs at the end of SGk= are padding. Do not delete them before you decode, unless you know the decoder you will use restores them.",
      },
      {
        heading: "It is not encryption",
        body: "There is no key. Encoding a password with Base64 does not protect it.",
      },
    ],
    faqs: [
      {
        question: "What is the Base64 for Hi?",
        answer:
          "SGk=. Decoding SGk= returns Hi. Whitespace inside the encoded text is removed before decoding.",
      },
      {
        question: "Is Base64 encryption?",
        answer:
          "No. It is a reversible encoding. Anyone can decode it. A hash such as SHA-256 is one way. Base64 is not.",
      },
      {
        question: "Why is héllo not a simple letter mapping?",
        answer:
          "The page encodes UTF-8 bytes. é is more than one byte, so héllo becomes aMOpbGxv.",
      },
      {
        question: "How much text can I paste?",
        answer:
          "Up to 750,000 characters for encode or decode. A longer paste is rejected.",
      },
      {
        question: "Does encoding upload the text?",
        answer:
          "No. The Base64 tool runs in the browser.",
      },
    ],
    cta: {
      before: "To encode or decode a snippet, use the",
      linkLabel: "Base64 encoder",
      href: "/tools/base64-encoder",
      after: ". It treats the text as UTF-8 and does not encrypt it.",
    },
    alsoSee: [
      {
        before: "For a one-way fingerprint instead, read",
        linkLabel: "How to hash text",
        href: "/guides/how-to-hash-text",
        after: ".",
      },
      {
        before: "Base64 often shows up next to structured text. See",
        linkLabel: "What is JSON?",
        href: "/guides/what-is-json",
        after: ".",
      },
    ],
  },
};
