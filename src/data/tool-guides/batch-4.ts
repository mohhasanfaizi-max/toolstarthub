import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-04T22:00:00Z";

const qrPro: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-make-a-custom-qr-code",
    title: "How to Make a Custom QR Code for Wi-Fi, Contacts and More",
    primaryKeyword: "custom qr code",
    secondaryKeywords: ["wifi qr code", "vcard qr code", "email qr code", "sms qr code", "qr code colors and error correction"],
    toolSlug: "qr-code-generator-pro",
    siblingToolSlugs: ["qr-code-generator", "color-contrast-checker", "image-to-pdf"],
    metaTitle: "How to Make a Custom QR Code: Wi-Fi, vCard, Colours",
    metaDescription:
      "Create QR codes for Wi-Fi, contacts, email, phone and SMS with custom colours, size, quiet zone and error correction. Download a PNG made in your browser.",
    excerpt:
      "A custom QR code can join a Wi-Fi network, save a contact or start an email. This guide explains each content type, the design settings and how to keep codes scannable.",
    relatedArticles: ["how-to-make-a-qr-code", "how-to-scan-a-qr-code", "how-to-check-color-contrast"],
    category: "seo-utilities",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open QR Code Generator Pro, choose what the code should do (Text / URL, Wi-Fi, Email, Phone, SMS or Contact), fill in the fields, then set the colours, size, quiet zone and error correction level. Generate the code, check the preview, and download qr-code.png. The code is made in your browser, so Wi-Fi passwords and contact details are not sent anywhere.",
    why:
      "A plain QR code holding a web address covers many needs, but structured codes do more. A Wi-Fi code lets guests join a network without typing a long password, a contact code saves your details in one scan, and email or SMS codes open a pre-filled message. Custom colours let the code match a menu, poster or business card without hurting readability.",
    sections: [
      {
        id: "types",
        heading: "What kinds of QR code can I make?",
        paragraphs: [
          "The tool offers six content types. Each one builds the text inside the code in the standard format phones recognise, so the scanning app knows what action to offer.",
        ],
        table: {
          caption: "QR content types and what a scan does",
          headers: ["Type", "Fields", "What the phone offers"],
          rows: [
            ["Text / URL", "Any text or a web address", "Open the link or show the text"],
            ["Wi-Fi", "Network name, security type, password, hidden network", "Join the network"],
            ["Email", "Address, optional subject and body", "Start a new email"],
            ["Phone", "Phone number", "Call the number"],
            ["SMS", "Phone number, optional message", "Start a text message"],
            ["Contact", "First and last name, optional phone and email", "Save a new contact"],
          ],
        },
        after:
          "Content is limited to 1,200 characters. Longer content makes a denser code that is harder to scan, so the tool asks you to shorten it.",
      },
      {
        id: "wifi",
        heading: "How do I make a Wi-Fi QR code?",
        paragraphs: [
          "Choose Wi-Fi, type the network name exactly as it appears on your router, choose the security type and enter the password. WPA/WPA2 covers most modern home and office networks, WEP is for very old equipment, and No password is for open networks. Tick the hidden network option if your router does not broadcast its name.",
          "Special characters in the name or password, such as semicolons, commas, colons and quotation marks, are escaped automatically in the standard Wi-Fi format, so a password like Cafe;2026 still works. Case matters, so copy the password exactly.",
          "Print the code for guests, put it in a frame by the door, or add it to a welcome sheet for a rental. Anyone who scans it can see and use the password, so only share it where that is acceptable, and consider a separate guest network.",
        ],
      },
      {
        id: "contact",
        heading: "How does a contact QR code work?",
        paragraphs: [
          "The Contact type creates a vCard 3.0 entry, the format address books use to exchange contacts. You need at least a first or last name, and you can add a phone number and an email address. When scanned, most phones show a preview and offer to save the contact.",
          "It suits business cards, name badges at events and the back page of a portfolio. Keep it short: a name, one number and one email make a code that is quick to scan even when printed small.",
        ],
      },
      {
        id: "email-sms-phone",
        heading: "What about email, phone and SMS codes?",
        paragraphs: [
          "An Email code holds a mailto link with the address and, if you add them, a subject and message body. It is handy for feedback forms on posters, support desks and event registration, because the person only has to press send.",
          "A Phone code holds a tel link. Spaces, brackets and hyphens are removed from the number when the code is built, and a leading plus sign is kept, so international numbers work. Numbers need between 7 and 20 characters.",
          "An SMS code opens a text message to the number you enter, with an optional message already written, which is useful for opt-in keywords or quick replies.",
        ],
      },
      {
        id: "colours",
        heading: "Can I change the colours of a QR code?",
        paragraphs: [
          "Yes. Set the foreground, which is the colour of the dark modules, and the background. The defaults are a deep navy on white. The two colours must be different, and the tool will not generate a code where they match.",
          "Scanners need strong contrast, and most expect a dark pattern on a light background. A dark brand colour on white or a pale tint usually works well. Light codes on dark backgrounds, or two mid-tone colours, often fail on some phones. If unsure, check the pair with the Color Contrast Checker and test with more than one phone.",
        ],
      },
      {
        id: "size-margin",
        heading: "What size and quiet zone should I choose?",
        paragraphs: [
          "Size sets the width of the downloaded PNG, from 128 to 640 pixels, with 320 as the default. Choose larger sizes for print so the image stays crisp when scaled, and smaller ones for screens.",
          "The quiet zone is the empty border around the code, set from 0 to 8 modules, with 2 as the default. Scanners use it to find where the code starts. If the code will sit on a busy background or near other graphics, increase it. Setting it to 0 is only safe when the design already leaves clear space around the code.",
        ],
      },
      {
        id: "error-correction",
        heading: "Which error correction level is best?",
        paragraphs: [
          "Error correction adds redundant data so a code can still be read when part of it is dirty, scratched or covered.",
        ],
        table: {
          caption: "Error correction levels",
          headers: ["Level", "Approximate damage it can recover from", "Good for"],
          rows: [
            ["L", "About 7%", "Clean screens, maximum content"],
            ["M (default)", "About 15%", "Most everyday uses"],
            ["Q", "About 25%", "Printed items that get handled"],
            ["H", "About 30%", "Outdoor signs, labels that may get worn"],
          ],
        },
        after:
          "Higher levels make the pattern denser for the same content. If a long Wi-Fi or contact code looks crowded, use a lower level or shorten the content.",
      },
      {
        id: "static",
        heading: "Can I edit a QR code after printing it?",
        paragraphs: [
          "No. These are static codes: the content is stored in the pattern itself, so there is no account, no tracking and no expiry, but also no way to change what it does later. If the Wi-Fi password changes or a phone number moves, generate a new code and replace the printed one.",
          "For a web address you may want to update later, point the code at a page on your own site that you control, and change that page instead.",
        ],
      },
      {
        id: "testing",
        heading: "How do I test a QR code before printing?",
        paragraphs: [
          "Scan the preview with at least two phones, ideally one iPhone and one Android device, using their built-in camera apps. Check that the action is right: the correct network joins, the contact saves with the right name, or the email opens with the subject you set.",
          "Then print a test copy at the real size and scan it from a normal distance and in the lighting where it will be used. Codes on glossy surfaces or behind glass can reflect light, so test those in place.",
        ],
      },
      {
        id: "vs-basic",
        heading: "How is this different from the basic QR Code Generator?",
        paragraphs: [
          "The basic QR Code Generator is the quickest way to turn text or a link into a code. The Pro version adds the structured types for Wi-Fi, email, phone, SMS and contacts, plus control over colours, quiet zone and error correction. Both build codes in your browser and download a PNG.",
        ],
      },
    ],
    stepsHeading: "How to make a custom QR code",
    steps: [
      { title: "Choose a type", body: "Pick Text / URL, Wi-Fi, Email, Phone, SMS or Contact." },
      { title: "Fill in the details", body: "Enter the fields for that type. Required fields are checked before the code is made." },
      { title: "Adjust the design", body: "Set foreground and background colours, size, quiet zone and error correction." },
      { title: "Generate and download", body: "Check the preview, scan it with a phone, then download qr-code.png." },
    ],
    examples: [
      { title: "Guest Wi-Fi at a café", body: "Network name CafeGuest, WPA/WPA2, password Latte;2026, level Q, printed on table cards. Guests scan and join without asking staff for the password." },
      { title: "A business card contact", body: "First name, last name, a mobile number and a work email at size 640 and level M, placed on the back of a card in the company's dark blue on white." },
      { title: "A feedback poster", body: "An Email code addressed to the support team with the subject “Store feedback”, so shoppers only need to write their message and send it." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "PNG download", body: "The code downloads as a PNG image named qr-code.png." },
      { heading: "Content limit", body: "Up to 1,200 characters of encoded content." },
      { heading: "Contrast first", body: "Keep a dark pattern on a light background for reliable scanning." },
      { heading: "Static codes", body: "Generate a new code if the details change." },
    ],
    faqs: [
      { question: "What can QR Code Generator Pro encode?", answer: "Text or URLs, Wi-Fi logins, email, phone numbers, SMS messages and vCard contacts." },
      { question: "Do Wi-Fi QR codes work with hidden networks?", answer: "Yes. Tick the hidden network option so phones know to look for a network that does not broadcast its name." },
      { question: "Is my Wi-Fi password sent anywhere?", answer: "No. The code is built in your browser and the fields are not stored or sent to a server." },
      { question: "Which vCard version does the contact code use?", answer: "vCard 3.0, with name, and optionally one phone number and one email address." },
      { question: "Why will the tool not use my two colours?", answer: "The foreground and background must be different colours. Choose a dark pattern on a light background for best results." },
      { question: "What is the quiet zone?", answer: "The blank border around the code, from 0 to 8 modules. Scanners use it to find the code's edges." },
      { question: "Which error correction level should I use?", answer: "M suits most uses. Choose Q or H for printed codes that may get scuffed, and L for maximum content on clean screens." },
      { question: "How large can the downloaded image be?", answer: "The PNG can be from 128 to 640 pixels wide." },
      { question: "Do these QR codes expire?", answer: "No. They are static codes with the content stored in the pattern, so they work as long as the content is valid." },
      { question: "Can I track scans of the code?", answer: "No. Static codes have no tracking. Use a link with campaign parameters if you need analytics on a web page." },
    ],
    faqMax: 10,
    cta: { before: "Design your code with the free", linkLabel: "QR Code Generator Pro", href: "/tools/qr-code-generator-pro", after: "." },
    alsoSee: [
      { before: "For a quick link code, use the", linkLabel: "QR Code Generator", href: "/tools/qr-code-generator", after: "." },
      { before: "Check your colours with the", linkLabel: "Color Contrast Checker", href: "/tools/color-contrast-checker", after: "." },
    ],
  },
};

const pdfToText: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-copy-text-out-of-a-pdf",
    title: "How to Copy Text Out of a PDF as Plain Text",
    primaryKeyword: "pdf to text",
    secondaryKeywords: ["extract text from pdf", "pdf to txt", "copy text from pdf", "pdf text extractor online", "scanned pdf text"],
    toolSlug: "pdf-to-text",
    siblingToolSlugs: ["image-to-text", "pdf-splitter", "pdf-page-counter"],
    metaTitle: "PDF to Text: How to Copy Text Out of a PDF Locally",
    metaDescription:
      "Pull selectable text out of a PDF page by page, copy it or save a .txt file. Learn page ranges, why scans come out empty, and how layout is handled.",
    excerpt:
      "PDF to Text reads the text layer of a PDF and gives you plain text with page markers. This guide covers page choices, layout, scanned files and limits.",
    relatedArticles: ["how-to-read-text-from-a-photo", "how-to-split-a-pdf", "how-to-work-with-pdfs-in-your-browser"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open PDF to Text, add a PDF of up to 80 pages and 20 MB, choose All pages, one page, or a page range such as 1-3,5, and press extract. The selectable text appears with a --- Page N --- marker before each page, ready to copy or download as a .txt file named after your PDF. Scanned pages with no text layer come out empty, because this tool does not do OCR.",
    why:
      "Copying from a PDF reader often brings broken line breaks, stray hyphens or one column at a time. Extracting the text layer into plain text gives you something you can paste into an email, a document, a spreadsheet or a translation tool, and edit freely.",
    sections: [
      {
        id: "how-it-works",
        heading: "How does PDF to Text extract the words?",
        paragraphs: [
          "Most PDFs created from a word processor, a website or a design app contain a text layer: each word is stored as characters with a position on the page. The tool reads those characters with a PDF engine running in your browser and puts them back into lines.",
          "Pieces of text that sit at roughly the same height are joined into one line, from left to right, and lines are ordered from the top of the page to the bottom. A space is inserted where there is a visible gap between two pieces. Repeated spaces and tabs are collapsed to one.",
        ],
      },
      {
        id: "pages",
        heading: "Can I extract only some pages?",
        paragraphs: [
          "Yes. There are three modes. All pages extracts the whole document. Selected page takes a single page number. Page range accepts the same syntax as the PDF Splitter, such as 1-3,5,8-10, and extracts pages in the order you type them.",
        ],
        table: {
          caption: "Page choice modes",
          headers: ["Mode", "Example", "Pages extracted"],
          rows: [
            ["All pages", "—", "Every page, in order"],
            ["Selected page", "4", "Page 4 only"],
            ["Page range", "1-3,5", "Pages 1, 2, 3 and 5"],
            ["Page range", "10,1-2", "Page 10, then 1 and 2"],
          ],
        },
        after:
          "Ranges must go from low to high and stay within the document, and a page listed twice is extracted once. A progress bar shows which page is being read.",
      },
      {
        id: "scanned",
        heading: "Why is the output empty for a scanned PDF?",
        paragraphs: [
          "A scanned page is a photograph of paper. It looks like text to you, but the file only holds an image, with no characters to read. The tool tells you how many pages had no extractable text and reminds you that scanned or image-only PDFs need optical character recognition (OCR), which it does not include.",
          "For those pages, convert them to images with the PDF to JPG tool and run the images through Image to Text, which recognises printed words in photos. Check the recognised text carefully, since OCR can misread characters.",
        ],
      },
      {
        id: "layout",
        heading: "Will the layout and formatting be kept?",
        paragraphs: [
          "Only the words and line order are kept. Fonts, bold and italic, colours, images and tables become plain text. A table comes out as rows of words separated by spaces, which you may need to tidy before pasting into a spreadsheet.",
          "Multi-column layouts are the trickiest case. Because lines are built from text at the same height across the page, two columns side by side can be merged into one line. If that happens, extract a single page at a time and rearrange the text, or copy each column from a PDF reader.",
        ],
      },
      {
        id: "markers",
        heading: "What are the page markers in the output?",
        paragraphs: [
          "Each page starts with a line such as --- Page 3 ---. The markers make it easy to find where a quote came from or to cite a page number. A page with no text still gets its marker followed by an empty line, so you can see which pages were images. If you do not want the markers, delete them with the Find and Replace tool or by hand.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits?",
        paragraphs: [
          "The tool reads PDFs with up to 80 pages and up to 20 MB. For a longer document, split it with the PDF Splitter and extract each part. Password-protected files cannot be opened, and damaged files show an error.",
        ],
      },
      {
        id: "characters",
        heading: "Why do some characters look wrong?",
        paragraphs: [
          "Occasionally a PDF uses a font that maps its characters in an unusual way. The text looks fine on screen but extracts as odd symbols or missing letters. That is a property of how the file was made, not something an extractor can always fix. Ligatures such as fi or fl, and hyphens at line ends, may also need light clean-up.",
          "If the extracted text of an important document is garbled, treat the page as an image and use OCR instead.",
        ],
      },
      {
        id: "uses",
        heading: "What can I do with the extracted text?",
        paragraphs: [
          "Common uses include quoting a report in an article, pasting contract clauses into an email, feeding text into a translation or summary tool, counting words for a submission, searching a long document, and reusing your own old PDFs when the original files are lost.",
          "The Copy text button places everything on your clipboard. Download .txt saves a plain text file with the same name as your PDF, so report.pdf becomes report.txt.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my PDF uploaded?",
        paragraphs: [
          "No. The PDF is opened and read inside your browser tab, and the text never leaves your device. That makes the tool suitable for contracts, statements and internal documents.",
        ],
      },
      {
        id: "check-layer",
        heading: "How can I tell whether a PDF has selectable text?",
        paragraphs: [
          "Open the PDF in any reader and try to highlight a sentence with your cursor. If individual words highlight, the file has a text layer and extraction should work. If the whole page highlights as one block, or nothing highlights at all, the page is most likely an image of text, such as a scan or a photo saved as a PDF.",
          "For image-only pages, render the page as a picture with PDF to JPG and run that image through Image to Text, which reads the letters from the picture instead of a stored layer.",
        ],
      },
      {
        id: "cleanup",
        heading: "How do I clean up the extracted text?",
        paragraphs: [
          "Text pulled from PDFs often has line breaks at the end of every printed line, hyphens where words were split, and repeated headers or page numbers. Paste the result into Find and Replace to remove repeated footer text or to join broken lines, and use the Word Counter to check the length once it is tidy.",
          "Columns, tables and text boxes are the trickiest layouts. Expect to reorder a few lines by hand when a page has two columns or side notes.",
        ],
      },
    ],
    stepsHeading: "How to extract text from a PDF",
    steps: [
      { title: "Add a PDF", body: "Choose a file of up to 80 pages and 20 MB. The name, size and page count are shown." },
      { title: "Choose pages", body: "Select All pages, a single page, or type a range such as 1-3,5." },
      { title: "Extract", body: "Press extract and watch the progress bar as each page is read." },
      { title: "Copy or download", body: "Use Copy text, or Download .txt to save a file named after your PDF." },
    ],
    examples: [
      { title: "Quoting a report", body: "Pages 12 to 14 of a 40-page report are extracted with the range 12-14, and a paragraph is pasted into an article with the page marker noted for the citation." },
      { title: "A scanned letter", body: "A two-page scan extracts with both pages empty and a note that OCR is needed. The pages are converted to JPG and read with Image to Text instead." },
      { title: "Word count for a submission", body: "An essay PDF is extracted in full, the page markers are removed, and the text is pasted into a word counter." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Text layer only", body: "Scans need OCR, which this tool does not include." },
      { heading: "Plain text", body: "Formatting, images and table structure are not kept." },
      { heading: "Columns", body: "Side-by-side columns may merge into single lines." },
      { heading: "Limits", body: "Up to 80 pages and 20 MB per PDF." },
    ],
    faqs: [
      { question: "Can PDF to Text read scanned documents?", answer: "No. It reads the text layer only. Scanned pages come out empty and need OCR, for example with Image to Text." },
      { question: "How do I extract text from just one page?", answer: "Choose Selected page and enter the page number, or type that number as a page range." },
      { question: "Does the output keep bold text and tables?", answer: "No. The output is plain text. Formatting is dropped and tables become rows of words." },
      { question: "What do the --- Page N --- lines mean?", answer: "They mark where each page's text begins, so you can see which page a passage came from." },
      { question: "Why are two columns mixed together?", answer: "Lines are built from text at the same height, so side-by-side columns can merge. Extract and tidy one page at a time." },
      { question: "What file name does the download use?", answer: "The .txt file takes your PDF's name, so invoice.pdf becomes invoice.txt." },
      { question: "How many pages can I extract?", answer: "PDFs of up to 80 pages and 20 MB. Split longer files first." },
      { question: "Can I extract text from a password-protected PDF?", answer: "No. Unlock a file you own first, then extract from the unprotected copy." },
      { question: "Why do some characters come out strange?", answer: "Some PDFs map fonts unusually, so the stored characters differ from what you see. Use OCR for those pages." },
      { question: "Is the text sent to a server?", answer: "No. Extraction runs in your browser and the PDF stays on your device." },
    ],
    faqMax: 10,
    cta: { before: "Pull text from your file with the free", linkLabel: "PDF to Text", href: "/tools/pdf-to-text", after: " tool." },
    alsoSee: [
      { before: "For scans and photos, use", linkLabel: "Image to Text", href: "/tools/image-to-text", after: "." },
      { before: "Break up long files with the", linkLabel: "PDF Splitter", href: "/tools/pdf-splitter", after: "." },
    ],
  },
};

const pdfMetadata: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-view-and-remove-pdf-metadata",
    title: "How to View and Remove PDF Metadata Before You Share",
    primaryKeyword: "remove pdf metadata",
    secondaryKeywords: ["view pdf metadata", "pdf author field", "pdf properties", "clear pdf title and author", "pdf metadata viewer"],
    toolSlug: "pdf-metadata",
    siblingToolSlugs: ["pdf-page-counter", "pdf-compressor", "pdf-to-text"],
    metaTitle: "How to View and Remove PDF Metadata (Author, Title)",
    metaDescription:
      "See a PDF's title, author, keywords, creator, producer and dates, then download a copy with those fields cleared. What it removes and what it cannot.",
    excerpt:
      "PDF files carry hidden properties such as the author's name and the software used. This guide shows how to read them and clear the standard fields in a copy.",
    relatedArticles: ["how-to-count-pdf-pages", "how-to-copy-text-out-of-a-pdf", "how-to-work-with-pdfs-in-your-browser"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open PDF Metadata, add a PDF (up to 80 pages and 20 MB), and the tool lists its Title, Author, Subject, Keywords, Creator, Producer, Creation date and Modification date. Press Remove metadata to build a copy with Title, Author, Subject, Keywords, Creator and Producer cleared, then download it as yourfile-cleaned.pdf. Your original file is not changed, and nothing is uploaded.",
    why:
      "Metadata travels with a PDF wherever it goes. It can reveal the name on the computer that made the file, the company it came from, a draft title or the software used. Checking and clearing these fields before you send a CV, a quote or a public document avoids sharing details you never meant to include.",
    sections: [
      {
        id: "what-is",
        heading: "What is PDF metadata?",
        paragraphs: [
          "Metadata is information about a document rather than in it. PDFs keep a set of standard properties, often called the document Info fields, that PDF readers show under Document Properties. They are filled in automatically by the app that created or last saved the file, and sometimes by the author.",
          "These fields are useful for search engines and document libraries, but they are easy to forget. A file exported from a template may still carry the template author's name, or a title from a different project.",
        ],
      },
      {
        id: "fields",
        heading: "Which fields does the tool show?",
        paragraphs: [
          "After loading, the tool lists the file name, size and page count, followed by eight fields. Empty fields are shown as a dash.",
        ],
        table: {
          caption: "PDF Info fields",
          headers: ["Field", "What it usually contains"],
          rows: [
            ["Title", "A document title, sometimes an old file name"],
            ["Author", "The person or account that created the file"],
            ["Subject", "A short description"],
            ["Keywords", "Search terms set by the author"],
            ["Creator", "The app the document was written in"],
            ["Producer", "The software that produced the PDF"],
            ["Creation date", "When the PDF was first created"],
            ["Modification date", "When it was last changed"],
          ],
        },
        after:
          "Dates are shown in a standard international format in UTC, for example 2026-03-14T09:30:00.000Z, so they read the same wherever you are.",
      },
      {
        id: "remove",
        heading: "What does Remove metadata change?",
        paragraphs: [
          "Removing metadata builds a fresh PDF, copies every page into it, and sets Title, Author, Subject, Keywords, Creator and Producer to empty. You then download that copy as the original name with -cleaned added, so report.pdf becomes report-cleaned.pdf.",
          "Because the copy is a new document, its creation and modification dates reflect when the cleaned file was made rather than the original dates. The pages themselves, including text, images and layout, are the same as in the original.",
        ],
      },
      {
        id: "not-forensic",
        heading: "Does removing metadata make a PDF anonymous?",
        paragraphs: [
          "No, and it is important to be clear about that. Clearing the standard Info fields removes the most common identifying details, but this is not a forensic sanitiser. Page content can still contain names in headers, footers or signatures. Annotations, comments, embedded files and images can carry their own information, and photos inside a PDF can have their own camera data.",
          "For documents where anonymity really matters, such as whistleblowing or legal disclosures, use specialist redaction and sanitisation software and have someone review the result.",
        ],
      },
      {
        id: "when",
        heading: "When should I check PDF metadata?",
        paragraphs: [
          "Before sending a CV or cover letter, check the Author field so it shows your name, not a previous employer or a shared computer account. Before publishing a report or white paper, make sure the Title is right, since search engines and browsers may show it as the document's name.",
          "Before sending a quote or contract made from a template, check Title and Subject for details of a previous client. Freelancers and agencies often find old client names in these fields.",
        ],
      },
      {
        id: "seo",
        heading: "Does PDF metadata matter for search engines?",
        paragraphs: [
          "Search engines can index PDFs, and some use the Title field when showing a result. A clear, accurate title helps people recognise the document. If you want a good title in a public PDF, set it in the app that creates the file, since this tool reads and clears fields but does not edit them.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits and errors?",
        paragraphs: [
          "The tool opens PDFs with up to 80 pages and up to 20 MB. Password-protected files cannot be opened and show a message asking you to unlock them first. A file with no Info fields at all shows a note that no standard fields were found, which is common for PDFs made by some online converters.",
        ],
      },
      {
        id: "workflow",
        heading: "How does this fit with other PDF steps?",
        paragraphs: [
          "Clear metadata as the last step, after merging, splitting or compressing, because other tools may write their own Producer value into the files they create. Then open the cleaned copy once more in the tool to confirm the fields are empty.",
          "If you also need the file smaller, compress first with the PDF Compressor and clean the result. To check how many pages you are sending, the page count appears as soon as the file loads.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my PDF uploaded?",
        paragraphs: [
          "No. The fields are read in your browser tab and the cleaned copy is built there too. The PDF is not sent to Tools Star Hub.",
        ],
      },
      {
        id: "sources",
        heading: "Where does PDF metadata come from?",
        paragraphs: [
          "Most metadata is written automatically. A word processor typically puts the name from its account or licence into Author, the document's title or first heading into Title, and its own name into Creator. The software that turns the document into a PDF records itself as Producer, and both dates are stamped when the file is made or saved.",
          "Some fields are filled in by people. Document Properties dialogs in office apps let authors type a subject and keywords, which then travel into the PDF. Templates and copied files pass these values along, which is how old names and titles end up in new documents.",
        ],
      },
      {
        id: "compare",
        heading: "How do I confirm the cleaning worked?",
        paragraphs: [
          "Load the downloaded -cleaned.pdf back into the tool. Title, Author, Subject, Keywords, Creator and Producer should now show as dashes, while the page count matches the original. The dates will show the time the cleaned copy was created. Opening Document Properties in your usual PDF reader is a second check, since it reads the same fields.",
        ],
      },
      {
        id: "batch",
        heading: "Can I clean several PDFs at once?",
        paragraphs: [
          "The tool works on one file at a time. For a handful of files, load each one, remove metadata and download the cleaned copy before moving to the next. Reset clears the current file so you can start fresh. If you are merging the files anyway, merge first and clean the single merged PDF once.",
        ],
      },
    ],
    stepsHeading: "How to view and remove PDF metadata",
    steps: [
      { title: "Add a PDF", body: "Choose a file of up to 80 pages and 20 MB. Its fields appear straight away." },
      { title: "Review the fields", body: "Check Title, Author, Subject, Keywords, Creator, Producer and the two dates." },
      { title: "Remove metadata", body: "Press Remove metadata to build a copy with the text fields cleared." },
      { title: "Download and check", body: "Download yourfile-cleaned.pdf, then load it again to confirm the fields are empty." },
    ],
    examples: [
      { title: "A CV with the wrong author", body: "A CV made on a work laptop shows the company's IT account as Author. The cleaned copy has no Author, so the employer's name is no longer attached to the file." },
      { title: "A quote made from a template", body: "The Title field still reads “Proposal for Previous Client Ltd”. Removing metadata clears it before the quote goes to a new client." },
      { title: "A public report", body: "Before publishing, the team checks that Producer and Creator show nothing internal, then uploads the cleaned file." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "View and clear only", body: "Fields can be read and cleared, not edited." },
      { heading: "New dates", body: "The cleaned copy carries dates from when it was made." },
      { heading: "Not anonymous", body: "Page content, annotations and embedded files are not cleaned." },
      { heading: "Original unchanged", body: "A separate -cleaned.pdf copy is downloaded." },
    ],
    faqs: [
      { question: "What metadata does a PDF contain?", answer: "Standard Info fields such as Title, Author, Subject, Keywords, Creator, Producer, Creation date and Modification date." },
      { question: "Which fields does Remove metadata clear?", answer: "Title, Author, Subject, Keywords, Creator and Producer are set to empty in the downloaded copy." },
      { question: "Why does the cleaned PDF have new dates?", answer: "The copy is built as a new document, so its dates show when the cleaned file was made." },
      { question: "Can I edit the title or author instead of clearing them?", answer: "No. The tool reads and clears fields. Set a new title in the app that creates the PDF." },
      { question: "Does it change the pages?", answer: "No. Every page is copied as it is, with the same text, images and layout." },
      { question: "Will this make my PDF completely anonymous?", answer: "No. Names in the page content, annotations, embedded files and images are not removed. It is not a forensic sanitiser." },
      { question: "What is the cleaned file called?", answer: "Your original name with -cleaned added, for example report-cleaned.pdf." },
      { question: "Why are the dates shown with a Z at the end?", answer: "Dates are shown in UTC in a standard international format. The Z means UTC." },
      { question: "Can I check a password-protected PDF?", answer: "No. Protected files cannot be opened. Unlock a file you own first." },
      { question: "Is my document uploaded to read its metadata?", answer: "No. Everything happens in your browser and the file stays on your device." },
    ],
    faqMax: 10,
    cta: { before: "Check your file with the free", linkLabel: "PDF Metadata", href: "/tools/pdf-metadata", after: " tool." },
    alsoSee: [
      { before: "Shrink the file first with the", linkLabel: "PDF Compressor", href: "/tools/pdf-compressor", after: "." },
      { before: "Count pages with the", linkLabel: "PDF Page Counter", href: "/tools/pdf-page-counter", after: "." },
    ],
  },
};

const textToPdf: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-text-to-pdf",
    title: "How to Convert Plain Text to a PDF",
    primaryKeyword: "text to pdf",
    secondaryKeywords: ["convert txt to pdf", "plain text to pdf", "make a pdf from text", "notes to pdf", "text file to pdf online"],
    toolSlug: "text-to-pdf",
    siblingToolSlugs: ["word-to-pdf", "pdf-merger", "word-counter"],
    metaTitle: "How to Convert Text to PDF: Page Size, Font & Margins",
    metaDescription:
      "Paste plain text, add a title, pick A4 or Letter, margins, font size, line spacing and page numbers, then download a PDF. What happens to special characters.",
    excerpt:
      "Turn notes, logs or a draft into a clean, paged PDF. This guide covers every layout option and explains how quotes, dashes and other characters are handled.",
    relatedArticles: ["how-to-turn-a-word-document-into-a-pdf", "how-to-merge-pdf-files", "how-to-count-characters"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open Text to PDF, paste up to 100,000 characters of plain text, add an optional title, and choose A4 or Letter, a margin, a font size from 8 to 24, a line spacing and whether to number pages. Press Create PDF and download text.pdf. Lines wrap to the page, blank lines are kept, and the PDF is built in your browser using the Helvetica font.",
    why:
      "A PDF looks the same on every device and prints predictably, which a pasted block of text in an email does not. Converting text to PDF is handy for meeting notes, a short letter, a list for printing, a log you need to attach to a ticket, or a draft you want someone to read without editing.",
    sections: [
      {
        id: "options",
        heading: "What layout options can I choose?",
        paragraphs: [
          "All settings sit beside the text box and apply to the whole document.",
        ],
        table: {
          caption: "Text to PDF settings",
          headers: ["Setting", "Choices", "Default"],
          rows: [
            ["Page size", "A4 or Letter", "A4"],
            ["Margin", "None, small (18 pt) or medium (36 pt)", "Medium"],
            ["Font size", "8 to 24 points, whole numbers", "12"],
            ["Line spacing", "1.0, 1.15, 1.5 or 2.0", "1.5"],
            ["Page numbers", "On or off", "On"],
            ["Title", "Optional text at the top", "Empty"],
          ],
        },
        after:
          "A point is 1/72 of an inch, so a medium margin is half an inch, about 12.7 mm, and a small margin is a quarter of an inch.",
      },
      {
        id: "title",
        heading: "How does the title look?",
        paragraphs: [
          "If you type a title, it appears at the top of the first page in a slightly larger size: four points bigger than your body text, up to a maximum of 18 points. With 12-point text the title is 16 points; with 16-point text or more it stays at 18. Leave the title empty and the text simply starts at the top margin.",
        ],
      },
      {
        id: "page-numbers",
        heading: "How are page numbers shown?",
        paragraphs: [
          "When page numbers are on, each page gets a centred footer such as 1 / 3, showing the page and the total. Turn them off for a single-page note or when the PDF will be merged into a larger document that has its own numbering.",
        ],
      },
      {
        id: "characters",
        heading: "What happens to special characters?",
        paragraphs: [
          "The PDF uses Helvetica, a standard font that every PDF reader has, so no font file needs to be embedded. Helvetica's character set covers English and most Western European letters, including accents such as é, ü and ñ, but not every Unicode character.",
          "Some common characters are swapped for close equivalents. Curly quotes become straight quotes, en and em dashes become a hyphen, and the single ellipsis character becomes three dots. Any other character the font cannot draw, such as emoji, Arabic, Chinese or many symbols, is replaced with a question mark. The tool tells you how many characters were replaced so nothing changes silently.",
          "If your text is mostly in a script Helvetica cannot show, this tool is not the right choice. Write it in a word processor with a suitable font and use Word to PDF, or export to PDF from that app.",
        ],
      },
      {
        id: "wrapping",
        heading: "How are lines and paragraphs handled?",
        paragraphs: [
          "Long lines wrap at word boundaries to fit between the margins. A single word too long for one line, such as a long URL or file path, is broken across lines rather than running off the page. Your own line breaks are respected, and blank lines are kept, so paragraphs separated by an empty line stay separated.",
          "When text reaches the bottom margin it continues on a new page. The status line tells you how many pages were created.",
        ],
      },
      {
        id: "plain",
        heading: "Can I use bold, headings or Markdown?",
        paragraphs: [
          "No. Everything is set in regular Helvetica at one size, apart from the optional title. Markdown symbols such as # or ** are printed as typed. For formatted documents, write in a word processor and use Word to PDF, or convert Markdown to HTML and print that from your browser.",
        ],
      },
      {
        id: "readability",
        heading: "Which settings make text easiest to read?",
        paragraphs: [
          "For printed notes, 11 or 12 points with 1.5 spacing and a medium margin is comfortable. For a dense log or code listing, try 9 or 10 points with 1.15 spacing and a small margin to fit more on each page. For something people will annotate by hand, 2.0 spacing leaves room between lines.",
          "Choose Letter for readers in the United States and Canada and A4 almost everywhere else, so the file prints without scaling.",
        ],
      },
      {
        id: "limits",
        heading: "Is there a length limit?",
        paragraphs: [
          "Yes, 100,000 characters per PDF. That is roughly 15,000 to 20,000 words. Check your length with the Word Counter if you are close. For longer material, split it into parts, convert each one, and combine them with the PDF Merger.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my text uploaded?",
        paragraphs: [
          "No. The PDF is drawn in your browser tab and downloaded straight from there, so private notes stay on your device.",
        ],
      },
      {
        id: "vs-print",
        heading: "Why not just print to PDF from a text editor?",
        paragraphs: [
          "Printing to PDF works, but the result depends on the editor, the operating system and the print settings, and many text editors print in a small monospaced font with no wrapping control. This tool gives you the same predictable layout every time, with clear controls for margins, font size, spacing and page numbers, and it works the same on a phone as on a computer.",
        ],
      },
      {
        id: "page-count",
        heading: "How can I control how many pages I get?",
        paragraphs: [
          "Font size, line spacing and margins all change how much fits on a page. Going from 12 points to 10 points fits noticeably more words per line and more lines per page. Changing line spacing from 1.5 to 1.15 fits roughly a quarter more lines. Switching from medium to small margins widens the text area on every side.",
          "If you need a document to fit on one page, start by reducing line spacing, then margins, and only then the font size, since text below 9 points becomes hard to read when printed. Press Create PDF after each change and check the page count in the status line.",
        ],
      },
      {
        id: "code",
        heading: "Can I use it for code or data files?",
        paragraphs: [
          "Yes, as long as you accept a proportional font. Helvetica is not monospaced, so columns that line up in a code editor will not line up in the PDF. Indentation with spaces is kept, but alignment of comments or tables built from spaces will drift. For short snippets and logs that is usually fine. For data that must stay aligned, convert it into a real table in a spreadsheet and export that to PDF.",
        ],
      },
      {
        id: "share",
        heading: "How do I share or combine the finished PDF?",
        paragraphs: [
          "Rename text.pdf to something descriptive before sending it, such as the meeting date or project name. If the text is one part of a larger pack, for example a cover note to go in front of scanned receipts, create the note here and then put it first when you combine the files in the PDF Merger. Turning page numbers off for the note avoids a confusing 1 / 1 footer in the middle of a merged document.",
        ],
      },
    ],
    stepsHeading: "How to convert text to PDF",
    steps: [
      { title: "Paste your text", body: "Add up to 100,000 characters and, if you like, a title." },
      { title: "Set the layout", body: "Pick page size, margin, font size, line spacing and page numbers." },
      { title: "Create the PDF", body: "Press Create PDF and read the page count and any replaced-character note." },
      { title: "Download", body: "Save text.pdf, or press Clear to start again." },
    ],
    examples: [
      { title: "Meeting notes", body: "Notes pasted from a notes app, titled “Team sync, 4 November”, become a two-page A4 PDF with page numbers, ready to attach to an email." },
      { title: "An error log", body: "A 900-line log at 9 points, 1.0 spacing and small margins fits on far fewer pages, and long file paths break cleanly instead of being cut off." },
      { title: "Text with emoji", body: "A message containing two emoji is converted and the tool reports 2 replaced characters, each shown as a question mark in the PDF." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "One font", body: "Helvetica only, with a larger title as the only style change." },
      { heading: "Character set", body: "Non-Western scripts and emoji become question marks." },
      { heading: "Plain text", body: "Markdown and HTML are printed as typed, not formatted." },
      { heading: "Fixed file name", body: "The download is named text.pdf. Rename it after saving." },
    ],
    faqs: [
      { question: "Which font does the PDF use?", answer: "Helvetica, a standard PDF font, for both the title and the body text." },
      { question: "Why did some characters turn into question marks?", answer: "Helvetica cannot draw them. Emoji, many symbols and non-Latin scripts are replaced, and the tool shows how many were changed." },
      { question: "Why are my curly quotes straight in the PDF?", answer: "Curly quotes are converted to straight ones, and en and em dashes to hyphens, so they print reliably." },
      { question: "How big is the title?", answer: "Four points larger than the body text, up to 18 points." },
      { question: "Can I turn off page numbers?", answer: "Yes. Untick page numbers and the footer is left empty." },
      { question: "Will a long URL run off the page?", answer: "No. Words too long for one line are broken across lines." },
      { question: "Are blank lines kept?", answer: "Yes. Empty lines in your text become empty lines in the PDF." },
      { question: "What is the smallest and largest font size?", answer: "8 to 24 points. Values are rounded to whole numbers." },
      { question: "Can I convert a .txt file directly?", answer: "Open the file, copy its contents and paste them into the text box." },
      { question: "What name does the text PDF download with?", answer: "text.pdf. You can rename it once it is saved." },
    ],
    faqMax: 10,
    cta: { before: "Make your PDF with the free", linkLabel: "Text to PDF", href: "/tools/text-to-pdf", after: " tool." },
    alsoSee: [
      { before: "For formatted documents, use", linkLabel: "Word to PDF", href: "/tools/word-to-pdf", after: "." },
      { before: "Combine parts with the", linkLabel: "PDF Merger", href: "/tools/pdf-merger", after: "." },
    ],
  },
};

const mdToHtml: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-markdown-to-html",
    title: "How to Convert Markdown to HTML (and What Gets Converted)",
    primaryKeyword: "markdown to html",
    secondaryKeywords: ["convert markdown to html", "md to html", "markdown table to html", "markdown converter", "markdown code block html"],
    toolSlug: "markdown-to-html",
    siblingToolSlugs: ["html-to-markdown", "html-minifier", "html-encoder"],
    metaTitle: "How to Convert Markdown to HTML: Syntax & Safe Links",
    metaDescription:
      "Turn Markdown into HTML: headings, lists, tables, code, links and images. See which syntax is supported, how links are filtered and why raw HTML is escaped.",
    excerpt:
      "Paste Markdown and get clean HTML you can drop into a page or CMS. This guide lists exactly which Markdown features are supported and which are not.",
    relatedArticles: ["how-to-convert-html-to-markdown", "how-to-minify-html", "how-to-escape-html"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open Markdown to HTML, paste up to 400,000 characters of Markdown, and press Convert. You get HTML source code for headings, paragraphs, lists, blockquotes, tables, code blocks, links, images, bold and italic text. Copy it with Copy HTML or download converted.html. Raw HTML in your Markdown is escaped rather than passed through, and only safe link types become real links.",
    why:
      "Markdown is quick to write, but websites, emails and many CMS fields need HTML. Converting by hand is slow and easy to get wrong, especially for tables and code. A converter that produces predictable, safe HTML lets you write in Markdown and paste the result wherever HTML is expected.",
    sections: [
      {
        id: "supported",
        heading: "Which Markdown syntax is supported?",
        paragraphs: [
          "The converter handles the core Markdown most people use day to day.",
        ],
        table: {
          caption: "Markdown to HTML mapping",
          headers: ["Markdown", "HTML"],
          rows: [
            ["Lines starting with # to ######", "h1 to h6"],
            ["Blank-line separated text", "p, with single line breaks as br"],
            ["Lines starting with -, * or +", "ul with li"],
            ["1. item", "ol with li"],
            ["> quote", "blockquote"],
            ["``` fences", "pre and code"],
            ["`code`", "inline code"],
            ["**bold** or __bold__", "strong"],
            ["*italic* or _italic_", "em"],
            ["[text](url)", "a href"],
            ["![alt](src)", "img"],
            ["---, *** or ___", "hr"],
            ["Pipe tables", "table, thead, tbody"],
          ],
        },
        after:
          "A single newline inside a paragraph becomes a line break, which matches how many people expect notes to look, though it differs from some Markdown tools that join such lines.",
      },
      {
        id: "unsupported",
        heading: "What is not supported?",
        paragraphs: [
          "Nested lists are not supported, so indented sub-items are not turned into lists inside lists. Strikethrough with ~~ is not converted. Table column alignment colons are accepted in the divider row but ignored, so every column uses default alignment. Link and image titles in quotes are ignored. Footnotes, task lists and definition lists are not handled.",
          "Knowing this up front saves surprises: if your document relies on nested lists, flatten them or add the extra HTML afterwards.",
        ],
      },
      {
        id: "code",
        heading: "How are code blocks converted?",
        paragraphs: [
          "Text between triple-backtick fences becomes a pre element containing a code element. If you add a language after the opening fence, such as ```js, the code element gets class=\"language-js\", which is the convention syntax highlighters like Prism and highlight.js look for. The code inside is escaped, so characters like < and & display correctly instead of being read as HTML.",
        ],
      },
      {
        id: "tables",
        heading: "How do I write a table that converts?",
        paragraphs: [
          "Write a header row with cells separated by pipes, then a divider row made of dashes, then the data rows. The divider row is required; without it the lines are treated as an ordinary paragraph. The first row becomes the table header and the rest go into the body.",
        ],
      },
      {
        id: "links",
        heading: "Which links become real links?",
        paragraphs: [
          "For safety, only some link targets are allowed: web addresses starting with http:// or https://, mailto: links, site paths starting with /, and page anchors starting with #. Anything else is shown as plain text instead of a link.",
          "That means javascript:, data: and vbscript: links, which can be used to run code, are never turned into links. Protocol-relative addresses starting with // and relative paths like page.html are also shown as text, so write them as full URLs or site paths if you want them clickable.",
        ],
      },
      {
        id: "raw-html",
        heading: "What happens to HTML inside my Markdown?",
        paragraphs: [
          "Raw HTML is escaped, not passed through. If your Markdown contains a div or a script tag, the output shows it as visible text. This keeps the result safe to paste into a page even if the Markdown came from someone else, but it means you cannot mix custom HTML into the source. Add those pieces after converting.",
        ],
      },
      {
        id: "output",
        heading: "Is the result shown as a preview?",
        paragraphs: [
          "No. The output is HTML source text in a box, not a rendered page. The tool never runs the HTML on the page. Paste it into your site, email builder or CMS HTML view to see how it looks. If you need it smaller for production, run it through the HTML Minifier.",
        ],
      },
      {
        id: "use-cases",
        heading: "When is this useful?",
        paragraphs: [
          "Common uses include turning a README section into a web page, preparing a blog post written in a Markdown editor for a CMS that only accepts HTML, building simple HTML emails, and converting documentation snippets for a help centre. The Example button loads a sample covering most features, which is a quick way to check how a construct converts.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my Markdown sent anywhere?",
        paragraphs: [
          "No. Conversion happens in your browser, so drafts and internal documentation are not uploaded.",
        ],
      },
      {
        id: "paragraph-rules",
        heading: "How does the converter decide where paragraphs start?",
        paragraphs: [
          "A blank line ends one block and starts the next. Lines that begin with a heading marker, a list marker, a quote marker, a fence or a horizontal rule start their own block. Everything else is gathered into a paragraph, with each line break inside it turned into a br element.",
          "If two paragraphs merge into one, check that there is a truly empty line between them. A line containing only spaces counts as empty, but a line with a stray character does not.",
        ],
      },
      {
        id: "emphasis",
        heading: "How do I combine bold, italic and code?",
        paragraphs: [
          "Wrap text in two asterisks or two underscores for bold, and one asterisk or one underscore for italic. Inline code uses single backticks, and anything inside backticks is shown literally, so asterisks inside code are not turned into emphasis. That makes backticks the easiest way to show symbols like * or _ in a sentence.",
          "Links and images can sit inside paragraphs, list items, quotes and table cells. Images are written with an exclamation mark before the brackets, and the text in the square brackets becomes the alt text, which screen readers announce, so describe the image rather than leaving it empty.",
        ],
      },
      {
        id: "cms",
        heading: "How do I paste the result into a CMS?",
        paragraphs: [
          "Most content management systems have a separate HTML or code view. Switch to that view before pasting, otherwise the editor may show the tags as text. In WordPress, use a Custom HTML block or the code editor. In email builders, look for an HTML block or source mode.",
          "Because the output contains only content elements without wrapping html, head or body tags, it slots into an existing page or template. Your site's stylesheet controls how the headings, tables and code look.",
        ],
      },
      {
        id: "round-trip",
        heading: "Can I convert the HTML back to Markdown later?",
        paragraphs: [
          "Yes. HTML to Markdown turns the common elements back into Markdown syntax. A round trip will not always be identical, because both tools normalise things: for example, every ordered list item comes back as 1., and the line-break style may change. Keep your original Markdown as the source you edit.",
        ],
      },
      {
        id: "escaping",
        heading: "How do I show Markdown symbols literally?",
        paragraphs: [
          "Put them inside backticks as inline code, or inside a fenced code block for several lines. Text in code is escaped and never treated as formatting, so a line such as # not a heading inside a fence stays exactly as typed in the HTML output.",
        ],
      },
    ],
    stepsHeading: "How to convert Markdown to HTML",
    steps: [
      { title: "Paste Markdown", body: "Add up to 400,000 characters, or press Example to load a sample." },
      { title: "Convert", body: "Press Convert to generate the HTML source." },
      { title: "Check the output", body: "Look for any links shown as text or features that are not supported." },
      { title: "Copy or download", body: "Use Copy HTML or download converted.html. Clear empties both boxes." },
    ],
    examples: [
      { title: "A heading and list", body: "“## Steps” followed by three “- ” lines becomes an h2 and a ul with three li elements." },
      { title: "A code fence with a language", body: "A block opened with ```python becomes <pre><code class=\"language-python\">, with any < characters escaped." },
      { title: "A blocked link", body: "[Click](javascript:alert(1)) is shown as plain text, while [Docs](https://example.com/docs) becomes a normal link." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Flat lists only", body: "Indented sub-items are not nested." },
      { heading: "No raw HTML", body: "Embedded HTML is escaped and shown as text." },
      { heading: "Safe links", body: "Only http(s), mailto, / and # targets become links." },
      { heading: "Source output", body: "You get HTML code, not a live preview." },
    ],
    faqs: [
      { question: "Does the converter support nested lists?", answer: "No. Indented sub-items are not turned into nested lists. Flatten them or add the nesting by hand afterwards." },
      { question: "Why is my link shown as plain text?", answer: "Only links starting with http://, https://, mailto:, / or # are allowed. Relative paths, // addresses and javascript: or data: links stay as text." },
      { question: "Can I include HTML tags in my Markdown?", answer: "They are escaped, so they appear as visible text rather than working as HTML." },
      { question: "Does it add a language class to code blocks?", answer: "Yes. ```js becomes class=\"language-js\" on the code element." },
      { question: "Why didn't my table convert?", answer: "A pipe table needs a divider row of dashes under the header. Without it the lines are treated as a paragraph." },
      { question: "Are table alignment colons used?", answer: "No. They are accepted in the divider row but ignored." },
      { question: "Is strikethrough supported?", answer: "No. Text wrapped in ~~ is left as typed." },
      { question: "Does a single line break become a br?", answer: "Yes. Within a paragraph each newline becomes <br />." },
      { question: "Does the output include html and body tags?", answer: "No. You get the converted content only, ready to paste into an existing page." },
      { question: "Can I see what the HTML looks like?", answer: "The tool shows source code, not a preview. Paste it into a page or CMS to view it." },
    ],
    faqMax: 10,
    cta: { before: "Convert your text with the free", linkLabel: "Markdown to HTML", href: "/tools/markdown-to-html", after: " tool." },
    alsoSee: [
      { before: "Going the other way? Use", linkLabel: "HTML to Markdown", href: "/tools/html-to-markdown", after: "." },
      { before: "Shrink the output with the", linkLabel: "HTML Minifier", href: "/tools/html-minifier", after: "." },
    ],
  },
};

const htmlToMd: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-html-to-markdown",
    title: "How to Convert HTML to Markdown Cleanly",
    primaryKeyword: "html to markdown",
    secondaryKeywords: ["convert html to markdown", "html to md", "web page to markdown", "html table to markdown", "html converter for docs"],
    toolSlug: "html-to-markdown",
    siblingToolSlugs: ["markdown-to-html", "html-encoder", "find-and-replace"],
    metaTitle: "How to Convert HTML to Markdown: Tags, Tables & Limits",
    metaDescription:
      "Paste HTML and get Markdown: headings, links, images, lists, code, quotes and tables. See which tags are dropped and what to tidy afterwards.",
    excerpt:
      "Move content from a web page or CMS into Markdown for docs, a README or a static site. This guide explains each conversion rule and the limits to expect.",
    relatedArticles: ["how-to-convert-markdown-to-html", "how-to-escape-html", "how-to-find-and-replace-text"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open HTML to Markdown, paste up to 400,000 characters of HTML, and press Convert. Headings, paragraphs, bold and italic text, links, images, lists, blockquotes, code and tables become Markdown. Scripts, styles and embedded frames are removed with their content, comments are dropped, and other tags such as div and span disappear while their text is kept. Copy the result or download converted.md.",
    why:
      "Markdown is easier to read, edit and version than HTML. Teams moving a help centre to a docs site, writers pulling a published post into a Markdown editor, and developers turning a web page into a README all need HTML turned into tidy Markdown without retyping it.",
    sections: [
      {
        id: "mapping",
        heading: "How are HTML tags converted?",
        paragraphs: [
          "Each supported tag maps to its usual Markdown form.",
        ],
        table: {
          caption: "HTML to Markdown mapping",
          headers: ["HTML", "Markdown"],
          rows: [
            ["h1 to h6", "Lines starting with # to ######"],
            ["p", "Text separated by a blank line"],
            ["br", "Two spaces and a line break"],
            ["hr", "---"],
            ["strong, b", "**bold**"],
            ["em, i", "*italic*"],
            ["code", "`inline code`"],
            ["pre", "``` fenced block"],
            ["blockquote", "> quoted lines"],
            ["a", "[text](href)"],
            ["img", "![alt](src)"],
            ["ul / ol", "Items starting with - or 1."],
            ["table", "Pipe table with a header row"],
          ],
        },
        after:
          "HTML entities such as &amp;, &lt; and &nbsp; are decoded into the characters they stand for, so the Markdown reads naturally.",
      },
      {
        id: "removed",
        heading: "What gets removed?",
        paragraphs: [
          "script, style, iframe, object, embed and noscript elements are skipped along with everything inside them, so tracking code, CSS and embedded players do not end up in your Markdown. HTML comments are dropped too.",
          "Any other tag the converter does not map, such as div, span, section or article, is removed but its text is kept. Classes, IDs and inline styles disappear with the tags, which is usually what you want when moving to Markdown.",
        ],
      },
      {
        id: "lists",
        heading: "How are lists handled?",
        paragraphs: [
          "Unordered list items start with “- ”. Ordered list items all start with “1. ”, which Markdown renderers number automatically, so the output shows 1, 2, 3 when rendered. Nested lists are not indented, so sub-items appear at the same level as their parents. Re-indent them by hand if the hierarchy matters.",
        ],
      },
      {
        id: "tables",
        heading: "How are tables converted?",
        paragraphs: [
          "Tables become pipe tables. The row of th cells is used as the header, or the first row if there are no th cells, and a divider row is added below it. Cell text is kept but formatting inside cells, such as bold or links, is not, and merged cells are not represented. Very complex tables may need tidying after conversion.",
        ],
      },
      {
        id: "links-images",
        heading: "What happens to links and images?",
        paragraphs: [
          "A link becomes [text](href) using the href exactly as written. A link with no href becomes [text](#). An image becomes ![alt](src) with its alt text, so missing alt text leaves the brackets empty, which is a good reminder to add descriptions for accessibility.",
          "Relative URLs such as /blog/post or ../img/photo.png are kept as they are. If the Markdown will live somewhere else, use Find and Replace to turn them into full URLs.",
        ],
      },
      {
        id: "whitespace",
        heading: "Why does the spacing change?",
        paragraphs: [
          "Outside pre blocks, runs of spaces, tabs and line breaks are collapsed into single spaces, the same way a browser displays HTML. Indentation from your source file therefore does not carry over. Inside pre blocks whitespace is preserved, so code keeps its layout in the fenced block.",
        ],
      },
      {
        id: "source",
        heading: "Where do I get the HTML from?",
        paragraphs: [
          "Most CMS editors have an HTML or code view you can copy from. In a browser you can view a page's source, or use the developer tools to copy just the element containing the article, which avoids menus and footers. Pasting only the main content gives the cleanest Markdown.",
        ],
      },
      {
        id: "after",
        heading: "What should I check after converting?",
        paragraphs: [
          "Skim the result for nested lists that lost their indentation, tables that need tidying, and leftover text from navigation or buttons that were inside the HTML you copied. Render it with your Markdown tool, or convert it back with Markdown to HTML to compare.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my HTML uploaded?",
        paragraphs: [
          "No. The HTML is parsed and converted in your browser tab, so private pages and drafts stay on your device.",
        ],
      },
      {
        id: "why-md",
        heading: "Why move content from HTML to Markdown?",
        paragraphs: [
          "Markdown files are plain text, so they work well with version control. Changes show up as readable line differences, reviews are easier, and the same file can be rendered by static site generators, documentation platforms and code hosting sites. Writers also find Markdown quicker to edit than HTML because there are no closing tags to manage.",
          "Moving a knowledge base or a set of blog posts into Markdown also makes the content less tied to a particular CMS, since almost every publishing tool can import it.",
        ],
      },
      {
        id: "headings",
        heading: "How are headings and emphasis written?",
        paragraphs: [
          "An h1 becomes a single # followed by a space and the heading text, an h2 becomes ##, and so on down to ###### for h6. Bold text from strong or b tags is wrapped in double asterisks, and italic text from em or i tags in single asterisks. Inline code tags become backtick spans.",
          "Because these are the most widely supported Markdown forms, the output renders consistently across common Markdown tools without needing extensions.",
        ],
      },
      {
        id: "quotes-code",
        heading: "How are blockquotes and code blocks written?",
        paragraphs: [
          "Every line of a blockquote is prefixed with > and a space, so multi-line quotes stay together when rendered. A pre element becomes a fenced block with three backticks above and below, and its content keeps the original spacing, so indentation in code samples is preserved.",
          "If the original HTML marked up a code block with a language class, add the language name after the opening backticks yourself to get syntax highlighting in your Markdown renderer.",
        ],
      },
      {
        id: "cms-export",
        heading: "How do I convert many pages from a CMS?",
        paragraphs: [
          "The tool handles one paste at a time, up to 400,000 characters, which is enough for a long article or several shorter ones pasted together. For a full site migration with hundreds of pages, a scripted export is more practical, but for a few dozen pages copying each article's HTML and converting it here is quick and lets you check each result as you go.",
        ],
      },
      {
        id: "images",
        heading: "What should I do about images?",
        paragraphs: [
          "Image references keep their original src, so they still point at wherever the images are hosted. If you are moving to a new site, download the images, store them with your Markdown files, and update the paths. Find and Replace can change a whole folder path in one step, for example replacing an old uploads URL with a new relative folder.",
        ],
      },
      {
        id: "email-html",
        heading: "Can I convert HTML emails?",
        paragraphs: [
          "You can, but email HTML is often built from nested layout tables, so the result may be a series of pipe tables rather than clean paragraphs. For newsletters, copy just the content area, or expect to remove table markup from the Markdown afterwards. Inline styles and tracking images in the email disappear or turn into plain image references.",
        ],
      },
    ],
    stepsHeading: "How to convert HTML to Markdown",
    steps: [
      { title: "Paste HTML", body: "Add up to 400,000 characters, or press Example to see a sample." },
      { title: "Convert", body: "Press Convert to produce the Markdown." },
      { title: "Tidy up", body: "Fix nested lists, complex tables and any stray navigation text." },
      { title: "Copy or download", body: "Use Copy Markdown or download converted.md. Clear empties both boxes." },
    ],
    examples: [
      { title: "A blog post", body: "An article with an h2, two paragraphs, a bold phrase and a link becomes “## Heading”, two blank-line separated paragraphs, **bold** and [link](url)." },
      { title: "A page with tracking code", body: "Script and style blocks in the pasted HTML are removed entirely, leaving only the readable content." },
      { title: "A product table", body: "A table with a th header row becomes a pipe table with the same columns, ready for a README." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Flat lists", body: "Nested lists lose their indentation." },
      { heading: "Plain cells", body: "Formatting inside table cells is not kept." },
      { heading: "URLs unchanged", body: "Relative links stay relative." },
      { heading: "Copy the content area", body: "Paste the main article only for the cleanest result." },
    ],
    faqs: [
      { question: "What happens to script and style tags?", answer: "They are removed along with everything inside them, as are iframe, object, embed and noscript." },
      { question: "Are div and span tags kept?", answer: "No. The tags are dropped but their text stays in the Markdown." },
      { question: "Why are all my numbered items 1.?", answer: "Every ordered item is written as 1. and Markdown renderers number them automatically when displayed." },
      { question: "Are nested lists indented?", answer: "No. Sub-items appear at the same level as their parent items." },
      { question: "Is bold text inside table cells kept?", answer: "No. Cell text is kept but formatting inside cells is lost." },
      { question: "What if a link has no href?", answer: "It becomes [text](#)." },
      { question: "Are HTML entities decoded?", answer: "Yes. Entities like &amp; and &nbsp; become the characters they represent." },
      { question: "Is whitespace in code blocks preserved?", answer: "Yes. Inside pre blocks spacing is kept; elsewhere it is collapsed." },
      { question: "Are HTML comments kept?", answer: "No. Comments are dropped from the output." },
      { question: "Can I convert a whole web page?", answer: "Yes, but menus and footers come along as text. Copy just the main content for a cleaner result." },
    ],
    faqMax: 10,
    cta: { before: "Convert your page with the free", linkLabel: "HTML to Markdown", href: "/tools/html-to-markdown", after: " tool." },
    alsoSee: [
      { before: "Going the other way? Use", linkLabel: "Markdown to HTML", href: "/tools/markdown-to-html", after: "." },
      { before: "Fix URLs in bulk with", linkLabel: "Find and Replace", href: "/tools/find-and-replace", after: "." },
    ],
  },
};

export const batch4Guides: ToolGuide[] = [qrPro, pdfToText, pdfMetadata, textToPdf, mdToHtml, htmlToMd];
