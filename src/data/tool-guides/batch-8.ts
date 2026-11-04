import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const scans: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-combine-scanned-pages-into-one-pdf",
    title: "How to Combine Scanned Pages into One PDF",
    primaryKeyword: "combine scanned pages into pdf",
    secondaryKeywords: ["scan multiple pages into one pdf", "phone scans to pdf", "merge scanned images", "scanned document pdf", "put photos of pages in one pdf"],
    toolSlug: "image-to-pdf",
    siblingToolSlugs: ["image-cropper", "pdf-compressor", "pdf-merger"],
    metaTitle: "Combine Scanned Pages into One PDF",
    metaDescription: "Turn separate scans or phone photos of pages into one ordered PDF. Learn how to crop, order, size and check scanned pages before you send them.",
    excerpt: "Scanners and phones often save each page as its own image. This guide shows how to tidy those pages and combine them into one PDF that reads in the right order.",
    relatedArticles: ["how-to-convert-images-to-pdf", "how-to-merge-pdf-files", "how-to-reduce-pdf-size-for-email"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: save each scanned page as a JPG or PNG, crop away the desk or scanner bed, then add all pages to the Image to PDF tool. Put them in reading order with the Move up and Move down buttons, choose A4 or Letter with Fit to page, and click to build the PDF. The tool takes up to 20 images, makes one page per image and downsamples images whose longest edge is over 2,000 pixels. If your scanner already produced separate PDF files, combine those with the PDF Merger instead.",
    why: "A single file is easier to email, upload to a portal and keep in order than a folder of page images called IMG_4021, IMG_4022 and so on. Many application forms accept only one document per field, so a five-page bank statement or a signed contract usually has to arrive as one PDF.",
    sections: [
      {
        id: "images-or-pdfs",
        heading: "Are my scans images or PDFs?",
        paragraphs: ["Check the file extension before you start. Phone scanning apps and many flatbed scanners can save as JPG, PNG or PDF. If you have .jpg or .png files, use Image to PDF. If you already have several .pdf files, one per page or one per batch, use the PDF Merger, which joins PDFs without turning them back into images.", "Some scanners save HEIC or TIFF files. The Image to PDF tool accepts JPG and PNG only, so convert those first, for example by exporting as JPG from your photo app."],
      },
      {
        id: "prepare",
        heading: "How should I prepare scanned pages?",
        paragraphs: ["Crop each page to its edges. Phone photos usually include a table, fingers or shadows, and those borders waste space and look untidy when printed. The Image Cropper lets you drag a free crop or nudge it with the arrow keys, and exports JPG, PNG or WebP; choose JPG or PNG for this job.", "Keep every page the same way up. Rotate sideways photos in your phone’s gallery before adding them, because the PDF page shows the image as it is stored. Shoot or scan in even light, flat on, so text lines are straight and readable."],
      },
      {
        id: "settings",
        heading: "Which page settings work best for scans?",
        paragraphs: ["Page size: A4 is the default and matches most documents outside North America; Letter suits US paperwork; Original / auto makes each page match its image shape. Orientation: Auto chooses portrait or landscape for each image, which is useful when a document mixes portrait pages with a landscape table. Margin: None, Small or Medium; Small is the default. Fit: Fit to page shows the whole page without cutting, Fill page fills the page and may crop edges, and Original size keeps the image’s own scale.", "For scans of paper documents, Fit to page with a Small or None margin is usually right, because it keeps every edge of the page visible."],
        table: { caption: "Image to PDF options for scanned pages", headers: ["Setting", "Options", "Good choice for scans"], rows: [["Page size", "A4, Letter, Original / auto", "A4 or Letter to match the paper"], ["Orientation", "Portrait, Landscape, Auto", "Auto"], ["Margin", "None, Small, Medium", "Small (default) or None"], ["Image fit", "Fit to page, Fill page, Original size", "Fit to page"]] },
        after: "Defaults are A4, Auto orientation, Small margin and Fit to page, which suit most scanned documents.",
      },
      {
        id: "order",
        heading: "How do I get the pages in the right order?",
        paragraphs: ["Images appear in the list in the order you add them. Name your files with leading zeros, such as page-01.jpg to page-12.jpg, so your file picker sorts them correctly, then select them all at once. If one is out of place, use Move up or Move down beside it, or Remove it and add it again.", "Before building, scan down the list and check page numbers printed on the document itself. It is much quicker to fix order now than to split and rebuild the PDF later."],
      },
      {
        id: "size",
        heading: "Why is my scanned PDF so large, and what can I do?",
        paragraphs: ["Each page is a full picture, so size grows with the number of pages and their resolution. The tool already reduces images whose longest side is over 2,000 pixels before embedding, which keeps text readable while limiting size. If the result is still too big for an upload limit, run it through the PDF Compressor; Strong compression is designed for image-heavy PDFs like scans.", "Saving pages as JPG instead of PNG before you add them also usually makes a smaller PDF, because JPG suits photographs of paper with uneven shading."],
      },
      {
        id: "quality",
        heading: "How do I get clear scans with a phone?",
        paragraphs: ["Lay the page flat on a dark, plain surface so the edges stand out, and hold the phone directly above it rather than at an angle. Turn off the flash if it makes a bright spot on glossy paper, and use daylight or two lamps from opposite sides to avoid shadows from your hand and phone.", "Take the photo at the camera’s normal resolution. A modern phone photo is often 4,000 pixels or more on the long side, which the tool reduces to 2,000 pixels before embedding. That is still enough detail for ordinary printed text, so there is no need to use special high-resolution modes, which only make the files slower to handle.", "Zoom in on each photo before adding it. If small print or a signature is blurred, retake that page now; a blurred page cannot be fixed later by compression or conversion."],
      },
      {
        id: "check-final",
        heading: "What should I check before sending the combined PDF?",
        paragraphs: ["Open the downloaded file and page through it once. Confirm the page count matches the original document, that no page is upside down, and that the first page is the one the reader expects to see. If you need to change anything, the quickest fix is usually to adjust the list in Image to PDF and build the file again, since it takes only seconds.", "Rename images.pdf to something meaningful, such as lease-signed-2026-11.pdf, before you attach or upload it."],
      },
      {
        id: "names",
        heading: "How should I name the final file?",
        paragraphs: ["Use a name that says what the document is and when it is from, such as passport-application-2026-11.pdf. Portals often show only the file name to the person reviewing it, so a clear name helps them confirm they have the right document without opening it."],
      },
    ],
    stepsHeading: "How do I combine scans into one PDF step by step?",
    steps: [{"title": "Collect the pages", "body": "Save every scan as JPG or PNG and name them in order with leading zeros."}, {"title": "Crop and rotate", "body": "Trim the background around each page and make sure all pages are upright."}, {"title": "Add all images", "body": "Open Image to PDF and add up to 20 images in one go."}, {"title": "Check the order", "body": "Use Move up and Move down until the list matches the page numbers."}, {"title": "Choose settings and build", "body": "Pick A4 or Letter, Auto orientation and Fit to page, then create and download the PDF."}, {"title": "Review the file", "body": "Open the PDF and page through it before you send it."}],
    examples: [{"title": "A four-page signed contract", "body": "Photograph each page flat, crop to the paper, add page-01 to page-04, keep A4 and Fit to page and download one 4-page PDF to return to the sender."}, {"title": "A mixed document with a landscape table", "body": "Leave orientation on Auto. Portrait pages become portrait PDF pages and the wide table photo becomes a landscape page, so nothing is shrunk sideways."}, {"title": "Twenty-six receipt photos", "body": "The tool accepts up to 20 images, so build two PDFs of 20 and 6 pages, then join them in the PDF Merger."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Text is not searchable", "body": "Pages made from images are pictures of text. To select or search text you would need OCR, which this tool does not perform."}, {"heading": "Privacy", "body": "Images are combined in your browser and are not uploaded to a server."}, {"heading": "Image limit", "body": "Use up to 20 images per PDF; combine larger sets in batches."}],
    faqs: [{"question": "Can I combine phone photos of documents into one PDF?", "answer": "Yes. Save them as JPG or PNG, add them to Image to PDF, order them and download one PDF."}, {"question": "How many scanned pages can I combine at once?", "answer": "Up to 20 images per PDF. For more pages, build several PDFs and join them with the PDF Merger."}, {"question": "How do I change the page order of my scans?", "answer": "Use the Move up and Move down buttons next to each image in the list before creating the PDF."}, {"question": "Should I use A4 or Letter for scans?", "answer": "Match the original paper. A4 is the default; choose Letter for US documents."}, {"question": "What fit setting keeps the whole scanned page visible?", "answer": "Fit to page. Fill page can crop edges to fill the sheet."}, {"question": "Can I combine scans that are already PDFs?", "answer": "Yes, but use the PDF Merger for PDF files. Image to PDF accepts JPG and PNG images."}, {"question": "Why is my combined scan PDF large?", "answer": "Every page is an image. Crop, save as JPG, or compress the result with the PDF Compressor."}, {"question": "Can I mix portrait and landscape scans?", "answer": "Yes. With Auto orientation each page follows its own image shape."}, {"question": "Can I search the text in a PDF made from scans?", "answer": "Not without OCR, because each page is stored as an image."}, {"question": "Are my scanned pages uploaded anywhere?", "answer": "No. The PDF is built locally in your browser."}],
    faqMax: 10,
    cta: { before: "Combine your scanned pages with the free", linkLabel: "Image to PDF", href: "/tools/image-to-pdf", after: "." },
    alsoSee: [{"before": "Trim backgrounds first with the", "linkLabel": "Image Cropper", "href": "/tools/image-cropper", "after": "."}, {"before": "Join scanned PDF files with the", "linkLabel": "PDF Merger", "href": "/tools/pdf-merger", "after": "."}, {"before": "Read the basics in", "linkLabel": "How to Convert Images to PDF", "href": "/guides/how-to-convert-images-to-pdf", "after": "."}],
    sources: [{"label": "PDF family format description (Library of Congress)", "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000030.shtml"}],
  },
};

const extractPage: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-extract-one-page-from-a-pdf",
    title: "How to Extract One Page from a PDF",
    primaryKeyword: "extract page from pdf",
    secondaryKeywords: ["save one page of a pdf", "extract single page pdf", "pull a page out of a pdf", "separate one pdf page", "save pdf page as new file"],
    toolSlug: "pdf-splitter",
    siblingToolSlugs: ["pdf-page-counter", "pdf-to-jpg"],
    metaTitle: "Extract One Page from a PDF as a New File",
    metaDescription: "Save a single page, or a few chosen pages, from a PDF as a new file. Learn how page numbers work, how to pick pages and what is kept in the copy.",
    excerpt: "Need only page 7 of a long report? This guide shows how to copy just that page into a new PDF, how printed and actual page numbers differ, and when an image is better.",
    relatedArticles: ["how-to-split-a-pdf", "how-to-convert-pdf-pages-to-jpg", "how-to-merge-pdf-files"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: open the PDF in the PDF Splitter, type the single page number, for example 7, in the Pages box or tick page 7 in the page grid, then select Create PDF and Download PDF. You get a new one-page file called split.pdf, and the original is not changed. Page numbers start at 1 and count the physical pages in the file, which can differ from the numbers printed on the pages. The tool opens PDFs of up to 80 pages.",
    why: "Sending one page instead of a whole document keeps attachments small, avoids sharing unrelated or private pages, and makes it obvious what the recipient should look at. Typical cases are a single invoice from a monthly statement, a signature page or one certificate from a bundle.",
    sections: [
      {
        id: "numbers",
        heading: "Which page number should I type?",
        paragraphs: ["The splitter counts pages from the first sheet of the file, starting at 1. A report that has a cover, a contents page and an introduction numbered i to iv may print 1 on what is really page 7 of the file. Use the number your PDF viewer shows in its page box, or count from the cover, rather than the number printed in the footer.", "After you load the file, the tool shows its total page count. If you type a number larger than that, it explains that the page is outside the PDF and shows how many pages it has."],
      },
      {
        id: "pick",
        heading: "Should I type the page or tick it?",
        paragraphs: ["Both produce the same result. Typing is fastest when you already know the number. The Or pick pages grid shows a checkbox for every page and is handy when you are counting, or when you want to choose two or three scattered pages by clicking.", "The Pages box accepts single pages, commas and ranges: 7 gives one page; 2,5 gives two pages; 4-6 gives three. The output keeps pages in the order you list them, and a page listed twice is included once."],
        table: { caption: "Pages box entries and what you get", headers: ["You type", "Pages in the new PDF"], rows: [["7", "Page 7 only"], ["1,7", "Pages 1 and 7"], ["4-6", "Pages 4, 5 and 6"], ["9,2", "Page 9, then page 2"], ["3,3", "Page 3 once"]] },
      },
      {
        id: "kept",
        heading: "What is kept in the extracted page?",
        paragraphs: ["The splitter copies the selected page into a new PDF with pdf-lib, so the page content is the same: text stays selectable when it was selectable before, and vector drawings stay sharp. Nothing is rasterised.", "Document-level extras, such as bookmarks pointing to other pages, may not carry over in a useful way, because those other pages are no longer present. Check the new file in a viewer before you send it.", "Page size and orientation are also copied, so a landscape page stays landscape and an A4 page stays A4. Form fields and comments that belong to the page may behave differently in the new file, so if the page contains a fillable form, test it in your PDF reader after extracting."],
      },
      {
        id: "image",
        heading: "When should I save the page as an image instead?",
        paragraphs: ["A PDF page is best when the recipient needs to print, sign or copy text. An image is better when you want to post the page on social media, put it in a presentation or show it in a chat preview. For that, use PDF to JPG, which renders pages as pictures.", "If you need the page as a file to edit, an image will not help: you would need the original document or an editing tool."],
      },
      {
        id: "limits",
        heading: "What if my PDF is long or locked?",
        paragraphs: ["The splitter handles PDFs with up to 80 pages. For a longer file, check its length first with the PDF Page Counter, then use desktop software for the first cut. Encrypted or password-protected PDFs may not open; ask the owner for an unlocked copy.", "Everything runs in your browser, so the file is not uploaded. This matters when the page is from a bank statement, medical letter or contract."],
      },
      {
        id: "order-detail",
        heading: "Does ticking pages keep the order I want?",
        paragraphs: ["Ticking boxes in the grid always writes the selection into the Pages box in ascending order, such as 2,9. If you need a different order, type it yourself, for example 9,2, and the new PDF will follow the typed order exactly. This is useful when a recipient wants the signature page first and the cover second.", "You can mix both: tick the pages to check you have the right ones, then edit the Pages box to reorder them before you select Create PDF."],
      },
      {
        id: "errors",
        heading: "What do the splitter’s error messages mean?",
        paragraphs: ["If the box is empty, the tool asks you to enter pages such as 1-3,5,8-10. A range written backwards, such as 6-4, is rejected with a message to put the lower page first. A word or symbol that is not a page number, such as p7, is reported as not a page number, and 0 is rejected because page numbers start at 1. Each message names the part that is wrong, so you can fix only that part.", "A trailing comma, as in 7, counts as an empty range and is flagged too. Remove it and try again."],
      },
      {
        id: "several",
        heading: "How do I extract several single pages as separate files?",
        paragraphs: ["The splitter creates one PDF per run. To save page 3 and page 8 as two separate files, type 3, create and download, rename the file, then type 8 and repeat. Renaming each download right away stops the browser from adding numbers like split (1).pdf, which are easy to mix up later."],
      },
      {
        id: "privacy-pages",
        heading: "Why extract a page instead of sending the whole file?",
        paragraphs: ["Long documents often contain details the recipient does not need, such as account numbers on other pages of a statement, personal notes in an appendix or pricing in a contract schedule. Extracting just the requested page shares less personal information and makes it obvious which page matters.", "It also makes review faster. A landlord asking for proof of address can open a one-page PDF straight away, while a 40-page download may be skipped or misread. If the request is for several pages, list them all in one run, such as 1,5-6, so they arrive together in one small file."],
      },
    ],
    stepsHeading: "How do I extract one page step by step?",
    steps: [{"title": "Find the real page number", "body": "Check your viewer’s page box to get the physical page number of the page you want."}, {"title": "Open the PDF Splitter", "body": "Add the PDF file. The tool shows its name, size and page count."}, {"title": "Enter the page", "body": "Type the number in Pages, or tick it in the Or pick pages grid."}, {"title": "Create and download", "body": "Select Create PDF, then Download PDF to save split.pdf."}, {"title": "Rename and check", "body": "Rename the file to something descriptive and open it to confirm it is the right page."}],
    examples: [{"title": "One invoice from a 12-page statement", "body": "The invoice footer says page 1, but it is the fifth sheet in the file. Type 5, create the PDF and rename split.pdf to invoice-march.pdf."}, {"title": "A signature page and the cover", "body": "Type 1,14 to make a two-page PDF with the cover first and the signed page second."}, {"title": "A page needed as a picture", "body": "Extract page 3 to its own PDF for records, then use PDF to JPG if you also need an image to paste into a slide."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Original unchanged", "body": "The source PDF is never edited; a new file is created."}, {"heading": "Page limit", "body": "The splitter opens PDFs of up to 80 pages."}, {"heading": "File name", "body": "Downloads are called split.pdf, so rename them to avoid overwriting earlier extracts."}],
    faqs: [{"question": "How do I save just one page of a PDF?", "answer": "Type that page number in the PDF Splitter’s Pages box, create the PDF and download it."}, {"question": "Why did I get the wrong page?", "answer": "Printed page numbers can differ from the file’s physical page numbers. Count from the first sheet of the file."}, {"question": "Can I extract two pages that are not next to each other?", "answer": "Yes. Separate them with a comma, for example 2,9."}, {"question": "Does extracting a page change the original PDF?", "answer": "No. The original stays as it was and a new PDF is downloaded."}, {"question": "Is the text still selectable after extracting a page?", "answer": "Yes, if it was selectable in the original, because the page is copied rather than turned into an image."}, {"question": "What is the extracted file called?", "answer": "split.pdf. Rename it after downloading."}, {"question": "Can I extract a page from a 200-page PDF?", "answer": "The splitter opens PDFs of up to 80 pages, so a longer file needs another tool first."}, {"question": "Can I put the extracted pages in a different order?", "answer": "Yes. The new PDF follows the order you type, such as 9,2."}, {"question": "How do I get one PDF page as a JPG?", "answer": "Use PDF to JPG, which renders pages as images."}, {"question": "Is the PDF uploaded when I extract a page?", "answer": "No. The page is copied locally in your browser."}],
    faqMax: 10,
    cta: { before: "Save a single page with the free", linkLabel: "PDF Splitter", href: "/tools/pdf-splitter", after: "." },
    alsoSee: [{"before": "Check how many pages a file has with the", "linkLabel": "PDF Page Counter", "href": "/tools/pdf-page-counter", "after": "."}, {"before": "Turn a page into an image with", "linkLabel": "PDF to JPG", "href": "/tools/pdf-to-jpg", "after": "."}, {"before": "Learn range syntax in", "linkLabel": "How to Split a PDF", "href": "/guides/how-to-split-a-pdf", "after": "."}],
    sources: [{"label": "PDF family format description (Library of Congress)", "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000030.shtml"}],
  },
};

const pdfa: ToolGuide = {
  article: toolGuideArticle({
    slug: "what-is-pdf-a-and-when-you-need-it",
    title: "What Is PDF/A and When You Need It",
    primaryKeyword: "what is pdf/a",
    secondaryKeywords: ["pdf/a vs pdf", "pdf/a-1b", "pdf for archiving", "pdf/a requirements", "long-term preservation pdf"],
    toolSlug: "pdf-metadata",
    siblingToolSlugs: ["pdf-compressor", "text-to-pdf"],
    metaTitle: "What Is PDF/A? Archive PDFs Explained",
    metaDescription: "PDF/A is the ISO 19005 family of PDF formats for long-term preservation. Learn what it forbids, what A, B and U levels mean and when you need it.",
    excerpt: "Courts, archives and some government portals ask for PDF/A. This guide explains what makes a PDF an archival PDF, the versions and levels, and how to check a file.",
    relatedArticles: ["how-to-view-and-remove-pdf-metadata", "how-to-convert-text-to-pdf", "how-to-reduce-pdf-size-for-email"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: PDF/A is a family of ISO standards, ISO 19005, for PDFs meant to be kept and displayed the same way for many years. It restricts features that can break over time: audio and video are forbidden, JavaScript and file launches are prohibited, fonts must be embedded, colours must be device-independent, encryption is not allowed and standards-based metadata is required. You need it when an archive, court or records system asks for it. A normal PDF is not PDF/A just because it opens today, and our PDF Metadata tool can show a file’s Producer and Creator fields as a clue, but it does not validate PDF/A conformance.",
    why: "An ordinary PDF can depend on fonts installed on the computer, links to external content or encryption that may become unreadable. PDF/A removes those dependencies so the file is self-contained, which is why record keepers rely on it for documents that must stay readable long after the software that made them is gone.",
    sections: [
      {
        id: "definition",
        heading: "What does PDF/A mean?",
        paragraphs: ["The Library of Congress describes PDF/A as a family of ISO standards for constrained forms of PDF intended to be suitable for long-term preservation of page-oriented documents. Its primary purpose is to preserve a document’s static visual appearance over time, independent of the tools and systems used to create, store or render it. To do that, it aims for device independence, self-containment and self-documentation.", "In other words, PDF/A is still a PDF. It opens in normal PDF readers. The difference is what it is not allowed to contain."],
      },
      {
        id: "rules",
        heading: "What does PDF/A forbid or require?",
        paragraphs: ["For PDF/A-1, PDF/A-2 and PDF/A-3, the Library of Congress lists these constraints: no audio or video; no 3D artwork; no JavaScript or executable file launches; all fonts embedded and legally embeddable; colour spaces specified in a device-independent way; no encryption; and standards-based metadata required.", "The no-encryption rule surprises people. A password-protected PDF cannot be PDF/A, so if a portal asks for PDF/A, do not lock the file."],
        table: { caption: "Key PDF/A constraints (PDF/A-1 to PDF/A-3)", headers: ["Feature", "PDF/A"], rows: [["Audio and video", "Forbidden"], ["3D artwork", "Forbidden"], ["JavaScript and file launches", "Prohibited"], ["Fonts", "All embedded"], ["Colour", "Device-independent colour spaces"], ["Encryption", "Not allowed"], ["Metadata", "Standards-based metadata required"]] },
      },
      {
        id: "versions",
        heading: "What are PDF/A-1, -2, -3 and -4?",
        paragraphs: ["PDF/A-1 (ISO 19005-1:2005) is based on PDF 1.4. PDF/A-2 (ISO 19005-2:2011) is based on PDF 1.7 and allows embedding PDF/A-compliant attachments. PDF/A-3 adds one major feature: embedding files in any format. PDF/A-4 is based on PDF 2.0, drops the A, B and U levels and introduces profiles, including PDF/A-4f for embedded files and PDF/A-4e for engineering documents.", "If a requirement just says PDF/A without a version, ask which one is accepted. Many systems name a specific part, such as PDF/A-1b or PDF/A-2b."],
      },
      {
        id: "levels",
        heading: "What do the letters A, B and U mean?",
        paragraphs: ["In PDF/A-1, -2 and -3, conformance level A satisfies all requirements of the standard. Levels B and U are lower: they still guarantee visual appearance but are less demanding about structural or semantic properties. The Library of Congress notes that level B is the level typically used for PDF/A files created from scanned pages.", "The PDF Association uses the names Accessible, Basic and Unicode for these levels. Level A is not the same as the separate accessibility standard PDF/UA, so an A-level file is not automatically fully accessible."],
      },
      {
        id: "check",
        heading: "How can I tell whether a PDF is PDF/A?",
        paragraphs: ["Real conformance needs a validator, which tests the file against the standard. Without one, you can look for clues. Open the file in the PDF Metadata tool to see Title, Author, Subject, Keywords, Creator, Producer and dates. The Producer often names the program that wrote the file and some converters mention PDF/A there, but that is a clue, not proof.", "Many desktop PDF readers show a banner when a file claims PDF/A conformance. If your workflow requires it, create the file with software that has an explicit PDF/A export or save option and validate the result."],
      },
      {
        id: "why-orgs",
        heading: "Why do archives and courts ask for PDF/A?",
        paragraphs: ["Record keepers have to open documents decades after they were created, on software that does not exist yet. A file that relies on a font installed on one office computer, on a script, or on a password that someone has forgotten may become unreadable or display differently. PDF/A’s rules remove those dependencies, so the file carries everything needed to show each page.", "That is also why PDF/A is mainly about appearance. It guarantees that pages look the same when opened later; it does not by itself make text searchable or make a document accessible to screen readers."],
      },
      {
        id: "tradeoffs",
        heading: "Does PDF/A have downsides?",
        paragraphs: ["Files can be larger, because every font used must be embedded instead of relying on fonts installed on the reader’s computer. Some features are not available, such as encryption, embedded video and, before PDF/A-4, JavaScript, so interactive forms and protected documents need a different approach.", "For everyday sharing, an ordinary PDF is usually fine. Choose PDF/A when the document is a record that must be kept, or when a recipient explicitly requires it."],
      },
      {
        id: "metadata-role",
        heading: "Why does metadata matter for PDF/A?",
        paragraphs: ["PDF/A requires standards-based metadata, so a file describes itself: what it is, who made it and with which tool. Fields such as Title and Author help archives catalogue documents, and Producer records the software that wrote the file. Use the PDF Metadata tool to read these fields and correct obvious problems, such as an empty Title or a leftover author name, in the original document before exporting to PDF/A again."],
      },
      {
        id: "scans-pdfa",
        heading: "Can a scanned document be PDF/A?",
        paragraphs: ["Yes. A scan saved as PDF/A keeps each page as an image inside a file that follows the archival rules, and the Library of Congress notes that level B is the level typically used for PDF/A files made from scanned pages. Adding OCR text is possible in some software but is a separate step; without it, the archival copy looks right but cannot be searched.", "If you are building a scanned PDF yourself in the browser, the result is an ordinary PDF. Convert it to PDF/A with software that offers that option when an archive needs it."],
      },
    ],
    stepsHeading: "How do I prepare a PDF/A file step by step?",
    steps: [{"title": "Confirm the version", "body": "Ask the archive, court or portal which PDF/A part and level it accepts."}, {"title": "Export from the source", "body": "In your word processor or scanner software, choose a PDF/A save or export option."}, {"title": "Avoid forbidden features", "body": "Do not add passwords, video, audio or scripts."}, {"title": "Inspect metadata", "body": "Open the file in the PDF Metadata tool to check the Title, Author, Creator and Producer fields."}, {"title": "Validate", "body": "Run the file through a PDF/A validator if the submission requires proof of conformance."}],
    examples: [{"title": "A court filing", "body": "The court’s rules ask for PDF/A. Export the brief as PDF/A from the word processor, leave it unencrypted and validate it before uploading."}, {"title": "A scanned archive box", "body": "Scanned letters saved as PDF/A at level B keep their appearance; there is no text structure unless OCR is added."}, {"title": "A metadata check", "body": "Opening a file in the PDF Metadata tool shows the Producer field naming the converter. That helps you trace how the file was made but does not confirm PDF/A."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Not a validator", "body": "The PDF Metadata tool reads standard document information fields; it does not test PDF/A conformance."}, {"heading": "Stripping metadata", "body": "Clearing metadata can remove information an archive expects, so do not strip a file that must remain PDF/A."}, {"heading": "Compression", "body": "Rewriting a PDF with a general compressor can change its structure; recheck conformance afterwards."}],
    faqs: [{"question": "What is the difference between PDF and PDF/A?", "answer": "PDF/A is a restricted form of PDF for long-term preservation. It bans features such as encryption, JavaScript and audio, and requires embedded fonts."}, {"question": "Which ISO standard defines PDF/A?", "answer": "ISO 19005, published in several parts for PDF/A-1, -2, -3 and -4."}, {"question": "Can a PDF/A file have a password?", "answer": "No. Encryption is not allowed in PDF/A."}, {"question": "What does the b in PDF/A-1b mean?", "answer": "Level B, a basic conformance level that guarantees visual appearance. It is common for scanned pages."}, {"question": "Is PDF/A-3 different from PDF/A-2?", "answer": "PDF/A-3 adds the ability to embed files of any format."}, {"question": "Is PDF/A the same as an accessible PDF?", "answer": "No. Level A is not the same as PDF/UA, the accessibility standard."}, {"question": "Can I open a PDF/A file in a normal PDF reader?", "answer": "Yes. PDF/A files are PDFs and open in standard readers."}, {"question": "Does the PDF Metadata tool check PDF/A compliance?", "answer": "No. It shows document fields like Producer, which can be a clue, but it is not a validator."}, {"question": "Should I remove metadata from a PDF/A file?", "answer": "Usually not, because PDF/A requires standards-based metadata."}, {"question": "When do I need PDF/A?", "answer": "When an archive, court, records system or employer requires it for long-term storage."}],
    faqMax: 10,
    cta: { before: "Inspect a PDF’s document fields with the free", linkLabel: "PDF Metadata", href: "/tools/pdf-metadata", after: "." },
    alsoSee: [{"before": "Make a simple PDF with", "linkLabel": "Text to PDF", "href": "/tools/text-to-pdf", "after": "."}, {"before": "Learn about document fields in", "linkLabel": "How to View and Remove PDF Metadata", "href": "/guides/how-to-view-and-remove-pdf-metadata", "after": "."}, {"before": "Shrink files with the", "linkLabel": "PDF Compressor", "href": "/tools/pdf-compressor", "after": "."}],
    sources: [{"label": "PDF/A Family, PDF for Long-term Preservation (Library of Congress)", "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml"}],
  },
};

const points: ToolGuide = {
  article: toolGuideArticle({
    slug: "percentage-points-vs-percent",
    title: "Percentage Increase vs Percentage Points",
    primaryKeyword: "percentage points vs percent",
    secondaryKeywords: ["percentage point difference", "what is a percentage point", "percent change vs percentage point change", "interest rate rise percentage points", "basis points"],
    toolSlug: "percentage-change-calculator",
    siblingToolSlugs: ["percentage-calculator", "discount-calculator"],
    metaTitle: "Percentage Points vs Percent: The Difference",
    metaDescription: "A rise from 4% to 5% is 1 percentage point but a 25% increase. Learn when to use each term, how to calculate both and how to avoid misleading claims.",
    excerpt: "News reports, bank rates and election results mix up percent and percentage points. This guide explains the difference with worked numbers you can check in the calculator.",
    relatedArticles: ["how-to-calculate-percentage-change", "how-to-calculate-a-discount"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: a percentage point is the simple difference between two percentages, while a percent change compares that difference with the starting value. If an interest rate goes from 4% to 5%, it rose by 1 percentage point, but by 25% in relative terms, because 1 is a quarter of 4. To get the percent change, enter 4 as the Original value and 5 as the New value in the Percentage Change Calculator: it shows a 25% increase with a difference of 1. That difference is the change in percentage points.",
    why: "Both statements about the rate are true, but they sound very different. Mixing them up makes a small change look dramatic, or a large one look minor. Getting the term right matters in loan and savings rates, tax rates, test pass rates, polling and any report comparing two percentages.",
    sections: [
      {
        id: "definitions",
        heading: "What is the difference between a percent and a percentage point?",
        paragraphs: ["A percent is a rate per hundred: 5% means 5 out of every 100. OpenStax Prealgebra defines percent the same way, as a ratio whose denominator is 100. When you compare two percentages, there are two ways to describe the gap.", "The absolute change subtracts one from the other, and its unit is percentage points. The relative change divides that difference by the starting value and multiplies by 100, and its unit is percent. From 4% to 5% the absolute change is 5 − 4 = 1 percentage point; the relative change is 1 ÷ 4 × 100 = 25%."],
      },
      {
        id: "formula",
        heading: "How do I calculate both?",
        paragraphs: ["Percentage-point change = new percentage − old percentage. Percent change = (new − old) ÷ old × 100. The calculator applies the second formula: it subtracts the original from the new value, divides by the original and multiplies by 100, and it also shows the plain difference. When both of your inputs are percentages, that difference is the percentage-point change.", "Enter the numbers without the % sign, for example 4 and 5. If the original value is 0, a percent change cannot be calculated, and the tool explains that; a change in percentage points from 0% is still just the new value."],
        table: { caption: "Worked comparisons", headers: ["Old rate", "New rate", "Percentage points", "Percent change"], rows: [["4%", "5%", "+1", "+25%"], ["20%", "15%", "−5", "−25%"], ["0.5%", "0.75%", "+0.25", "+50%"], ["50%", "51%", "+1", "+2%"], ["10%", "20%", "+10", "+100%"]] },
      },
      {
        id: "which",
        heading: "Which one should I use?",
        paragraphs: ["Use percentage points when you are describing how far a rate moved, such as a mortgage rate, an unemployment rate or a vote share. Saying the rate rose 1 percentage point is clear and cannot be misread.", "Use percent change when you want the size of the move relative to where it started, such as how much more interest you will pay. A rise from 4% to 5% means 25% more interest on the same balance for the same period, which is the figure that matters for a budget."],
      },
      {
        id: "misleading",
        heading: "How can the two be used to mislead?",
        paragraphs: ["Relative changes on small starting values look huge. If a risk rises from 1 in 1,000 to 2 in 1,000, that is a 100% increase but only 0.1 percentage points. Both are correct; quoting only the 100% hides how small the actual risk is.", "The reverse also happens. A pass rate falling from 80% to 72% is an 8-point drop but a 10% decrease; a report saying the rate fell 8% would understate the relative change and confuse readers. When precision matters, give both numbers and the starting value."],
      },
      {
        id: "basis",
        heading: "What are basis points?",
        paragraphs: ["Finance often uses basis points to avoid ambiguity. One basis point is one hundredth of a percentage point, so 100 basis points equal 1 percentage point. A central bank raising rates by 25 basis points has raised them by 0.25 percentage points.", "To find the percent change for a basis-point move, convert to percentage points first. A move from 4.50% to 4.75% is 25 basis points, or 0.25 points; entering 4.5 and 4.75 into the calculator shows a 5.5555555556% increase, which you would round to about 5.56%."],
      },
      {
        id: "reading",
        heading: "How do I read a headline correctly?",
        paragraphs: ["Look for the unit. If a headline says unemployment rose 2%, check whether it means 2 percentage points, for example from 4% to 6%, or 2% relative, for example from 4% to 4.08%. Those describe very different economies. Good reporting usually says points or percentage points for the first and percent for the second.", "If only one number is given, find the starting and ending values in the article and compute both yourself. Two subtractions and one division are enough to see what really changed."],
      },
      {
        id: "money",
        heading: "How does the difference affect real money?",
        paragraphs: ["Take a 200,000 loan balance. At 4% simple annual interest the yearly interest is 8,000; at 5% it is 10,000. The rate moved 1 percentage point, but the interest bill grew by 2,000, which is exactly 25% of 8,000. The percent change tells you how much more you pay; the percentage-point change tells you how far the rate moved.", "The same logic works for tax. If a sales tax goes from 8% to 10%, the rate rose 2 percentage points, and the tax on every purchase rose 25%. On a 50 purchase, tax goes from 4 to 5. Enter 8 and 10 in the calculator to confirm the 25% increase, or 4 and 5 to see the same relative change on the money itself."],
      },
      {
        id: "small-large",
        heading: "Why does the same point change mean different things?",
        paragraphs: ["A 1-point move is large relative to a small rate and small relative to a big one. From 2% to 3% is a 50% increase; from 80% to 81% is only 1.25%. The calculator shows this clearly if you try both pairs: the difference is 1 in each case, but the percent change is very different.", "That is why it helps to state the starting value along with the change. A 1-point rise from 2% and a 1-point rise from 80% are different stories, and readers need the starting point to understand which one you are telling."],
      },
      {
        id: "survey",
        heading: "How should I write about polls and surveys?",
        paragraphs: ["Polls report shares of people, so changes between polls are naturally in percentage points. If support moves from 42% to 45%, write that it rose 3 points. Saying it rose 3% would suggest 42% to about 43.3%, which is a different result. Also mention the poll’s margin of error when it is given, because a 3-point move can be within it."],
      },
    ],
    stepsHeading: "How do I find both changes step by step?",
    steps: [{"title": "Write down both percentages", "body": "For example, an old rate of 4% and a new rate of 5%."}, {"title": "Subtract for points", "body": "5 − 4 = 1 percentage point."}, {"title": "Open the calculator", "body": "Enter 4 as the Original value and 5 as the New value."}, {"title": "Read the percent change", "body": "The result shows a 25% increase and a difference of 1."}, {"title": "Report clearly", "body": "Say the rate rose 1 percentage point, a 25% increase."}],
    examples: [{"title": "A savings rate cut", "body": "A savings account drops from 3% to 2.25%. The difference is −0.75 percentage points, and the calculator shows a 25% decrease, so interest earned falls by a quarter."}, {"title": "An election result", "body": "A party’s vote share grows from 30% to 36%: up 6 percentage points, a 20% increase on its previous share."}, {"title": "A test pass rate", "body": "Pass rates rise from 60% to 75%. That is 15 percentage points, or a 25% relative increase."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Zero start", "body": "Percent change from 0 cannot be calculated; describe the move in percentage points instead."}, {"heading": "Rounding", "body": "The calculator keeps many decimal places; round sensibly when you report."}, {"heading": "Ratios versus rates", "body": "Percentage points apply only when both values are percentages; for prices or counts, use percent change."}],
    faqs: [{"question": "What is a percentage point?", "answer": "The arithmetic difference between two percentages, such as 5% minus 4% = 1 percentage point."}, {"question": "Is a rise from 4% to 5% a 1% or 25% increase?", "answer": "Both descriptions exist: it is 1 percentage point and a 25% relative increase."}, {"question": "How do I calculate percentage-point change?", "answer": "Subtract the old percentage from the new one."}, {"question": "How do I calculate percent change between two percentages?", "answer": "Divide the difference by the old percentage and multiply by 100."}, {"question": "What is a basis point?", "answer": "One hundredth of a percentage point; 100 basis points equal 1 percentage point."}, {"question": "Why do news reports use percentage points?", "answer": "Because it describes a change in a rate without ambiguity."}, {"question": "Can percent change be bigger than the percentage-point change?", "answer": "Yes, whenever the starting percentage is below 100, such as 4% to 5% giving 25%."}, {"question": "What does the calculator show for 20% to 15%?", "answer": "A 25% decrease with a difference of −5, which is 5 percentage points."}, {"question": "Can I use percentage points for prices?", "answer": "No. Prices are not percentages, so use percent change."}, {"question": "Why can’t I get a percent change from 0%?", "answer": "Dividing by a starting value of 0 is undefined, so only the point change makes sense."}],
    faqMax: 10,
    cta: { before: "Get the relative change in seconds with the free", linkLabel: "Percentage Change Calculator", href: "/tools/percentage-change-calculator", after: "." },
    alsoSee: [{"before": "Find a percent of a number with the", "linkLabel": "Percentage Calculator", "href": "/tools/percentage-calculator", "after": "."}, {"before": "See the formula in", "linkLabel": "How to Calculate Percentage Change", "href": "/guides/how-to-calculate-percentage-change", "after": "."}, {"before": "Work out sale prices with the", "linkLabel": "Discount Calculator", "href": "/tools/discount-calculator", "after": "."}],
    sources: [{"label": "Understand Percent (OpenStax Prealgebra 2e)", "href": "https://openstax.org/books/prealgebra-2e/pages/6-1-understand-percent"}],
  },
};

const weighted: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-weighted-average",
    title: "How to Calculate Weighted Average",
    primaryKeyword: "weighted average formula",
    secondaryKeywords: ["weighted mean", "weighted average grade", "weighted average example", "weighted vs simple average", "calculate weighted score"],
    toolSlug: "average-calculator",
    siblingToolSlugs: ["gpa-calculator", "percentage-calculator"],
    metaTitle: "Weighted Average Formula with Examples",
    metaDescription: "Multiply each value by its weight, add the results and divide by the total weight. Worked examples for grades and prices, plus a quick way to check them.",
    excerpt: "A simple average treats every number equally. A weighted average lets some count more. This guide shows the formula, worked examples and a way to check it using a mean calculator.",
    relatedArticles: ["how-to-calculate-percentage-change", "how-to-calculate-a-discount"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: weighted average = (value₁ × weight₁ + value₂ × weight₂ + …) ÷ (weight₁ + weight₂ + …). For a course where homework scores 80 and counts 20%, the midterm scores 90 and counts 30%, and the final scores 70 and counts 50%, the weighted average is (80×20 + 90×30 + 70×50) ÷ 100 = 78. The Average Calculator finds a simple mean, but you can check a weighted average with it by repeating each value by its whole-number weight: enter 80 twice, 90 three times and 70 five times, and the mean is 78.",
    why: "Many real averages are weighted: course grades, GPA, a shop’s average selling price, portfolio returns and survey results. Using a simple average where weights apply gives the wrong answer, often by a lot. In the example, the simple average of 80, 90 and 70 is 80, two points higher than the true weighted grade.",
    sections: [
      {
        id: "formula",
        heading: "What is the weighted average formula?",
        paragraphs: ["Multiply each value by its weight, add those products and divide by the sum of the weights. Weights can be percentages, credits, quantities or any measure of importance. If the weights are percentages that add up to 100, dividing by 100 is the same as multiplying each value by its decimal weight and adding: 0.2×80 + 0.3×90 + 0.5×70 = 16 + 27 + 35 = 78.", "OpenStax Introductory Statistics uses the same idea when it finds the mean of a frequency table: each value is multiplied by how often it occurs, and the products are divided by the total frequency. Frequencies are simply weights."],
      },
      {
        id: "simple",
        heading: "How is it different from a simple average?",
        paragraphs: ["A simple average, or arithmetic mean, adds the values and divides by how many there are, so every value has a weight of 1. The Average Calculator does this: it accepts up to 1,000 numbers separated by commas, spaces or new lines and shows the mean, the median and the mode.", "A simple average is right when every value counts equally, such as daily temperatures. A weighted average is right when some values represent more, such as a test worth half the grade or a product you sold more of."],
        table: { caption: "Simple vs weighted for the same scores", headers: ["Item", "Score", "Weight", "Score × weight"], rows: [["Homework", "80", "20", "1,600"], ["Midterm", "90", "30", "2,700"], ["Final", "70", "50", "3,500"], ["Total", "", "100", "7,800"]] },
        after: "Weighted average = 7,800 ÷ 100 = 78. Simple average = (80 + 90 + 70) ÷ 3 = 80.",
      },
      {
        id: "repeat",
        heading: "How can I use the average calculator for a weighted average?",
        paragraphs: ["When weights are whole numbers or can be scaled to them, repeat each value as many times as its weight. Weights of 20%, 30% and 50% scale to 2, 3 and 5. Enter 80, 80, 90, 90, 90, 70, 70, 70, 70, 70: the tool reports a mean of 78, a median of 75 and a mode of 70. Only the mean is the weighted average; the median and mode describe the repeated list.", "This works because repeating a value is the same as multiplying it by a weight. It is practical for small weights. For weights such as 3.7 or 12.5%, multiply all weights by the same factor to make whole numbers, or use the formula directly."],
      },
      {
        id: "gpa",
        heading: "Is GPA a weighted average?",
        paragraphs: ["Yes. GPA weights each course’s grade points by its credits. The GPA Calculator does exactly this: it multiplies each course’s points by its credits, adds them and divides by total credits. A 4-credit A- counts more than a 3-credit A.", "So for credit-weighted grades on a 4.0 scale, the GPA Calculator is the easier tool, while the formula or the repeat method handles other weights."],
      },
      {
        id: "mistakes",
        heading: "What mistakes should I avoid?",
        paragraphs: ["Do not divide by the number of items instead of the total weight. With weights 2, 3 and 5, divide by 10, not 3. Make sure percentage weights add up to 100; if a syllabus lists 20%, 30% and 40%, the missing 10% may be a part you have not entered yet.", "Do not average averages without weights. If one class of 10 students averages 70 and another of 30 averages 90, the combined average is (10×70 + 30×90) ÷ 40 = 85, not 80."],
      },
      {
        id: "missing",
        heading: "How do I find the score I need on a final?",
        paragraphs: ["Rearrange the formula. If you have 80 on homework (20%) and 90 on the midterm (30%) and want 85 overall, you need 0.2×80 + 0.3×90 + 0.5×F = 85, so 16 + 27 + 0.5F = 85 and F = 84. Check it by entering 80, 80, 90, 90, 90 and five 84s: the mean is 85.", "If the required score is above 100, the target is not reachable with the remaining weight."],
      },
      {
        id: "portfolio",
        heading: "How is a weighted average used for money?",
        paragraphs: ["Investors use weighted averages for returns. If 6,000 is in a fund that returned 5% and 4,000 in one that returned 10%, the portfolio return is (6,000×5 + 4,000×10) ÷ 10,000 = 7%. The simple average of 5% and 10% is 7.5%, which overstates the result because less money was in the better fund.", "Shops use the same idea for average cost. Buying 100 units at 3 and 50 units at 4 gives an average cost of (300 + 200) ÷ 150 ≈ 3.33 per unit. In both cases the weights are amounts of money or quantities, and you divide by their total."],
      },
      {
        id: "check-sum",
        heading: "How can I sanity-check my answer?",
        paragraphs: ["A weighted average always falls between the smallest and largest values. If your scores are 70, 80 and 90 and you get 95, a step went wrong. It also leans toward the values with the most weight: with half the weight on 70, the answer should be nearer 70 than the simple average is.", "If all the weights are equal, the weighted and simple averages must match. Testing your method on equal weights first is a quick way to catch a formula mistake."],
      },
      {
        id: "survey-weights",
        heading: "Where else do weighted averages appear?",
        paragraphs: ["Survey researchers weight responses so a sample matches the population, inflation indexes weight prices by how much households spend on each item, and teachers weight categories in a gradebook. In every case the method is the same: values multiplied by weights, summed and divided by total weight."],
      },
    ],
    stepsHeading: "How do I calculate a weighted average step by step?",
    steps: [{"title": "List values and weights", "body": "Write each score or price with its weight, such as 80 at 20%."}, {"title": "Multiply", "body": "Multiply each value by its weight."}, {"title": "Add the products", "body": "Add all the products together."}, {"title": "Add the weights", "body": "Find the total weight, for example 100."}, {"title": "Divide", "body": "Divide the product total by the weight total."}, {"title": "Check", "body": "For whole-number weights, enter each value repeated by its weight in the Average Calculator and compare the mean."}],
    examples: [{"title": "Average price paid", "body": "You bought 3 items at 2 and 1 item at 6. Weighted average = (3×2 + 1×6) ÷ 4 = 3. Entering 2, 2, 2, 6 in the calculator also gives a mean of 3, while the simple average of 2 and 6 is 4."}, {"title": "Two class averages", "body": "10 students averaged 70 and 30 averaged 90: (700 + 2,700) ÷ 40 = 85."}, {"title": "Course grade", "body": "Homework 80 at 20%, midterm 90 at 30%, final 70 at 50%: weighted average 78."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Weights must be non-negative", "body": "A negative weight has no meaning for an average of scores or prices."}, {"heading": "Large weights", "body": "The repeat method is limited by the calculator’s 1,000-number limit; use the formula for large counts."}, {"heading": "Rounding", "body": "Round only the final answer, not each product."}],
    faqs: [{"question": "What is the weighted average formula?", "answer": "Sum of value × weight, divided by the sum of the weights."}, {"question": "What is the difference between a mean and a weighted mean?", "answer": "A mean gives every value equal weight; a weighted mean lets some values count more."}, {"question": "Do weights have to add up to 100?", "answer": "No. Divide by whatever they add up to. Percentages that add to 100 make the arithmetic simpler."}, {"question": "Can the Average Calculator do weighted averages?", "answer": "Not directly, but repeating each value by a whole-number weight gives the weighted mean."}, {"question": "Is GPA a weighted average?", "answer": "Yes. Grade points are weighted by credits, which the GPA Calculator handles."}, {"question": "Why is my weighted average lower than the simple average?", "answer": "The lower values carry more weight, as when a low final counts 50%."}, {"question": "How do I average two group averages?", "answer": "Weight each average by its group size, then divide by the total size."}, {"question": "How do I find the score needed to reach a target average?", "answer": "Rearrange the formula and solve for the unknown score."}, {"question": "Can I use decimal weights?", "answer": "Yes in the formula. For the repeat method, scale them to whole numbers first."}, {"question": "What happens if the weights are all equal?", "answer": "The weighted average equals the simple average."}],
    faqMax: 10,
    cta: { before: "Check your numbers with the free", linkLabel: "Average Calculator", href: "/tools/average-calculator", after: "." },
    alsoSee: [{"before": "Weight grades by credits with the", "linkLabel": "GPA Calculator", "href": "/tools/gpa-calculator", "after": "."}, {"before": "Convert weights to percentages with the", "linkLabel": "Percentage Calculator", "href": "/tools/percentage-calculator", "after": "."}, {"before": "Compare changes in", "linkLabel": "How to Calculate Percentage Change", "href": "/guides/how-to-calculate-percentage-change", "after": "."}],
    sources: [{"label": "Measures of the Center of the Data (OpenStax Introductory Statistics 2e)", "href": "https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data"}],
  },
};

const cumulative: ToolGuide = {
  article: toolGuideArticle({
    slug: "cumulative-gpa-vs-semester-gpa",
    title: "Cumulative GPA vs Semester GPA",
    primaryKeyword: "cumulative gpa calculation",
    secondaryKeywords: ["how to calculate cumulative gpa", "semester gpa", "term gpa vs cumulative gpa", "raise cumulative gpa", "combine gpa with credits"],
    toolSlug: "gpa-calculator",
    siblingToolSlugs: ["average-calculator", "percentage-calculator"],
    metaTitle: "Cumulative GPA vs Semester GPA Explained",
    metaDescription: "Semester GPA covers one term; cumulative GPA covers every graded credit. Learn to combine them by credits, with worked examples you can check in the calculator.",
    excerpt: "Your transcript shows a term GPA and an overall GPA. This guide explains how each is calculated, why you cannot just average them and how to project your cumulative GPA.",
    relatedArticles: ["how-to-calculate-weighted-average", "how-to-calculate-percentage-change"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: semester GPA is the credit-weighted average of grade points for one term, while cumulative GPA is the credit-weighted average across every term so far. To combine them, multiply each GPA by its credits, add the results and divide by total credits. With a 3.2 cumulative GPA over 45 credits and a 3.8 semester over 15 credits, the new cumulative GPA is (3.2×45 + 3.8×15) ÷ 60 = 3.35. In the GPA Calculator, tick Numeric points on two rows and enter 3.2 with 45 credits and 3.8 with 15 credits to get 3.35.",
    why: "Students track cumulative GPA for scholarships, honours, probation rules and applications, but they usually see one term at a time. Knowing how a semester moves the overall figure helps you set realistic targets and spot when a single strong term cannot change much late in a degree.",
    sections: [
      {
        id: "semester",
        heading: "How is semester GPA calculated?",
        paragraphs: ["Each course’s letter grade is converted to grade points, multiplied by its credits, and the products are added and divided by the term’s total credits. On the calculator’s 4.0 map, A is 4.0, A- 3.7, B+ 3.3, B 3.0, B- 2.7, C+ 2.3, C 2.0, C- 1.7, D+ 1.3, D 1.0, D- 0.7 and F 0.", "The calculator’s starting rows show this: A in a 3-credit course, B in a 3-credit course and A- in a 4-credit course give (12 + 9 + 14.8) ÷ 10 = 3.58 GPA over 10 credits, with 35.8 total grade points."],
      },
      {
        id: "cumulative",
        heading: "How is cumulative GPA calculated?",
        paragraphs: ["Cumulative GPA uses the same formula across all graded courses taken so far: total grade points ÷ total credits. You do not need every old course. Your transcript’s cumulative GPA and total credits already summarise them, because GPA × credits gives the total grade points.", "That is why the calculator’s Numeric points option is useful: one row can stand for all past terms, entered as the cumulative GPA with all past credits, and another row for the new term."],
        table: { caption: "Combining terms by credits", headers: ["Term", "GPA", "Credits", "Grade points"], rows: [["Previous terms", "3.20", "45", "144.0"], ["This semester", "3.80", "15", "57.0"], ["Cumulative", "3.35", "60", "201.0"]] },
      },
      {
        id: "average-trap",
        heading: "Why can’t I just average my semester GPAs?",
        paragraphs: ["Terms usually have different credit loads. If you earned 3.0 over 12 credits and 4.0 over 3 credits, the simple average is 3.5, but the correct cumulative GPA is (36 + 12) ÷ 15 = 3.2. The light term counts for less because it had fewer credits.", "Averaging semester GPAs gives the right answer only when every term had the same number of credits."],
      },
      {
        id: "projection",
        heading: "How much can one semester raise my GPA?",
        paragraphs: ["The more credits you already have, the less one term moves the result. With 30 credits at 3.0, a 15-credit 4.0 term lifts you to (90 + 60) ÷ 45 = 3.33. With 90 credits at 3.0, the same term gives (270 + 60) ÷ 105 ≈ 3.14.", "To see the effect before grades come out, enter your current cumulative GPA and credits on one row, then your expected course grades on new rows using Add course. Changing one expected grade shows how sensitive the result is."],
      },
      {
        id: "school-rules",
        heading: "Do schools calculate GPA differently?",
        paragraphs: ["Yes. College Board notes that high schools use different grading scales and that colleges may recalculate GPA by removing non-core courses or adjusting weighting for AP and honours classes. Some schools exclude pass/fail courses or replace a repeated course’s grade instead of averaging both attempts.", "The calculator uses one common 4.0 map with plus and minus grades. If your school uses another map, such as A+ worth 4.3 or no minus grades, tick Numeric points and enter the points your school assigns. Numeric points must be from 0 to 4.0 on this scale."],
      },
      {
        id: "target",
        heading: "How do I find the GPA I need this term to hit a target?",
        paragraphs: ["Rearrange the formula. Target total points = target GPA × total credits after the term. Subtract the points you already have, then divide by the new term’s credits. With 45 credits at 3.2 (144 points) and a 15-credit term, reaching a 3.4 cumulative GPA needs 3.4 × 60 = 204 total points, so 204 − 144 = 60 points this term, or 60 ÷ 15 = 4.0.", "If the required term GPA is above 4.0, the target cannot be reached in one term on this scale; you need more terms. Try the calculation with 30 future credits instead of 15 to see how many terms it would take."],
      },
      {
        id: "transcript",
        heading: "Where do I find the numbers on my transcript?",
        paragraphs: ["Most transcripts list, for each term, the attempted and earned credits, the GPA hours or quality hours, the quality points or grade points, and the term GPA, followed by the same figures for the cumulative total. GPA hours are the credits that count toward GPA, which can be fewer than credits earned if some courses were pass/fail or transferred in.", "Use GPA hours, not total credits earned, when you combine terms. Using total credits can make your calculation drift away from the registrar’s figure."],
      },
      {
        id: "repeats",
        heading: "What happens when I retake a course?",
        paragraphs: ["Policies differ. Some schools replace the earlier grade with the new one, some average both attempts, and some count both in the GPA while showing both on the transcript. If your school replaces the grade, subtract the old course’s points and credits from your totals before adding the new attempt, otherwise the course will be counted twice in your projection.", "Ask your registrar or check the academic catalogue for the exact rule."],
      },
      {
        id: "high-school",
        heading: "Is cumulative GPA the same in high school?",
        paragraphs: ["The idea is the same, but high schools often count each class equally or by a credit value such as 0.5 or 1.0 per term, and many add extra points for honours or AP courses. College Board describes overall GPA as the average of class grades and gives the example (4.0 + 4.0 + 4.0 + 3.0 + 2.0) ÷ 5 = 3.4 for three A grades, a B and a C. If every class has the same credit, entering each with 1 credit in the GPA Calculator reproduces that simple average.", "Weighted high school GPAs can exceed 4.0. This calculator caps grade points at 4.0, so it gives the unweighted version."],
      },
    ],
    stepsHeading: "How do I update my cumulative GPA step by step?",
    steps: [{"title": "Find your totals", "body": "From your transcript, note the cumulative GPA and the total graded credits."}, {"title": "Add a summary row", "body": "In the GPA Calculator, tick Numeric points and enter the cumulative GPA with those credits."}, {"title": "Add this term", "body": "Enter each new course as a letter and its credits, or the semester GPA as a numeric row with the term’s credits."}, {"title": "Read the result", "body": "The GPA on this 4.0 map is your new cumulative GPA; total credits and grade points are shown too."}, {"title": "Check school rules", "body": "Confirm whether your school excludes or replaces any grades."}],
    examples: [{"title": "A first-year student", "body": "Fall: 3.4 over 15 credits. Spring: 3.0 over 12 credits. Cumulative = (51 + 36) ÷ 27 ≈ 3.22."}, {"title": "Raising a low start", "body": "After 24 credits at 2.5, a 15-credit term at 3.5 gives (60 + 52.5) ÷ 39 ≈ 2.88."}, {"title": "Checking with letters", "body": "A in 3 credits, B in 3 and A- in 4 give a semester GPA of 3.58 over 10 credits."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Scale", "body": "The calculator uses a 4.0 map; weighted honours scales above 4.0 are not supported."}, {"heading": "Credits", "body": "Use graded credits only; pass/fail credits usually do not count in GPA."}, {"heading": "Official GPA", "body": "Your registrar’s calculation is the official one."}],
    faqs: [{"question": "What is the difference between semester and cumulative GPA?", "answer": "Semester GPA covers one term; cumulative GPA covers all graded terms so far."}, {"question": "How do I calculate cumulative GPA from semester GPAs?", "answer": "Multiply each semester GPA by its credits, add them and divide by total credits."}, {"question": "Can I average my semester GPAs?", "answer": "Only if every semester had the same credits; otherwise weight by credits."}, {"question": "How do I enter my old GPA in the GPA Calculator?", "answer": "Tick Numeric points, enter the cumulative GPA as the grade and total past credits as credits."}, {"question": "Why did a 4.0 semester barely raise my GPA?", "answer": "With many credits already earned, one term is a small share of the total."}, {"question": "What is a total grade point?", "answer": "GPA multiplied by credits, or the sum of each course’s points × credits."}, {"question": "Does the calculator support A+ as 4.3?", "answer": "No. Its letter map tops out at 4.0; enter other values as numeric points up to 4.0."}, {"question": "Do pass/fail classes count toward cumulative GPA?", "answer": "Usually not, but check your school’s policy."}, {"question": "Do colleges use my school’s cumulative GPA?", "answer": "Many recalculate it with their own rules, according to College Board."}, {"question": "What is a good cumulative GPA?", "answer": "It depends on the goal; check the requirements of the scholarship, programme or employer."}],
    faqMax: 10,
    cta: { before: "Combine terms in seconds with the free", linkLabel: "GPA Calculator", href: "/tools/gpa-calculator", after: "." },
    alsoSee: [{"before": "Understand weighting in", "linkLabel": "How to Calculate Weighted Average", "href": "/guides/how-to-calculate-weighted-average", "after": "."}, {"before": "Average plain numbers with the", "linkLabel": "Average Calculator", "href": "/tools/average-calculator", "after": "."}, {"before": "Turn scores into percentages with the", "linkLabel": "Percentage Calculator", "href": "/tools/percentage-calculator", "after": "."}],
    sources: [{"label": "How to Convert Your GPA to a 4.0 Scale (College Board BigFuture)", "href": "https://bigfuture.collegeboard.org/plan-for-college/college-basics/how-to-convert-gpa-4.0-scale"}],
  },
};

export const batch8Guides: ToolGuide[] = [scans, extractPage, pdfa, points, weighted, cumulative];
