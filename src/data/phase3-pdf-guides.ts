import type { GuideContent } from "./guide-content.ts";

export const phase3PdfGuides: Record<string, GuideContent> = {
  "how-to-count-pdf-pages": {
    intro:
      "A PDF page count is the number of pages stored in the file, including a cover and any blank pages. The Page Counter opens the PDF in the browser and reads that count. It does not guess from the file size. A file that is not a PDF, an empty file, or a file over 20 MB is rejected. A password-protected PDF is reported as password-protected, and you need to unlock it before the count can run.",
    why:
      "Split, merge, and print settings depend on the page count. A blank page still counts, so a file that looks like a short letter can be longer than the text you remember. Counting first avoids a merge that exceeds the page cap, or a print job that includes a cover you did not want. The count is the document’s page list, not the number of sheets of paper after duplex printing.",
    stepsHeading: "How to count the pages in a PDF",
    sections: [
      {
        id: "what-counts",
        heading: "What does the counter include?",
        paragraphs: [
          "The tool loads the PDF and reads the page count from the document. Every page in that list counts, including a cover, a blank page, and a page with only an image. It does not skip pages that look empty, because emptiness is not stored as a separate flag the counter checks.",
          "The result is a number of pages, not a preview of each page. If you need to drop a range such as pages 1 through 3 and page 5, use the splitter after you know the count. The counter itself does not select pages.",
        ],
      },
      {
        id: "limits",
        heading: "Which files are rejected?",
        paragraphs: [
          "The file must be a PDF by type or by a .pdf name, and it must not be empty. Files larger than 20 MB are rejected so the browser tab stays usable. A file that does not look like a PDF internally can fail with a message that it could not be read, or that it may be damaged.",
          "Password protection stops the load. The message names the file and says it is password-protected and to unlock it first. The page does not ask for the password and does not bypass it. A document with no pages says the file has no pages.",
        ],
      },
      {
        id: "next",
        heading: "How does the count affect other PDF tools?",
        paragraphs: [
          "Merge accepts up to 10 PDFs and 80 pages combined. Split has its own page cap. Knowing the count tells you whether a merge will fit before you add the files. The page counter itself is not limited to 40 pages. The 40-page cap belongs to tools that render pages, such as strong compression and PDF to JPG.",
          "The file stays in the browser. Counting pages does not upload the PDF to Tools Star Hub. Close the tab when you are done if the document is sensitive. The count is not saved as an account history.",
        ],
      },
    ],
    steps: [
      {
        title: "Choose a PDF of 20 MB or smaller",
        body: "The name should end in .pdf, or the browser should identify it as a PDF. An empty file is rejected.",
      },
      {
        title: "Let the page load the document",
        body: "The count comes from the PDF structure. A damaged file fails instead of returning a guess.",
      },
      {
        title: "Read the page count",
        body: "Blank pages and a cover are included. Duplex printing is a printer setting and can use fewer sheets than this count.",
      },
      {
        title: "Unlock a protected file before you retry",
        body: "A password-protected PDF stops with a message to unlock it first. This page does not collect the password.",
      },
    ],
    examples: [
      {
        title: "A file the tool can open",
        body: "The result is the document’s page count. A three-page PDF that includes a blank last page reports 3, because the blank page is still a page.",
      },
      {
        title: "A protected or oversized file",
        body: "Over 20 MB is rejected before the count. A password-protected file is named in the error and is not unlocked by the counter.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "File size is not a page count",
        body: "A small PDF can have many pages of text, and a large one can have a single scanned image. Read the count.",
      },
      {
        heading: "Blank pages count",
        body: "Removing a blank page is an edit. The counter will not drop it for you.",
      },
    ],
    faqs: [
      {
        question: "Does a blank page count?",
        answer:
          "Yes. The counter reads the pages stored in the PDF, including a cover and blank pages.",
      },
      {
        question: "What is the file size limit?",
        answer:
          "20 MB. A larger PDF is rejected so the browser tab stays usable.",
      },
      {
        question: "Can it open a password-protected PDF?",
        answer:
          "No. The message says the file is password-protected and to unlock it first. The page does not ask for the password.",
      },
      {
        question: "Is the counter limited to 40 pages?",
        answer:
          "No. The 40-page cap is for tools that render pages, such as strong compression. The counter reads the document’s page count.",
      },
      {
        question: "Is the PDF uploaded?",
        answer:
          "No. The file is opened in the browser to read the page count.",
      },
    ],
    cta: {
      before: "To read the page count stored in a PDF, use the",
      linkLabel: "PDF Page Counter",
      href: "/tools/pdf-page-counter",
      after: ". Files stay in the browser and must be 20 MB or smaller.",
    },
    alsoSee: [
      {
        before: "Merge, split, and compress limits are covered in",
        linkLabel: "How to work with PDFs in your browser",
        href: "/guides/how-to-work-with-pdfs-in-your-browser",
        after: ".",
      },
      {
        before: "Turning a document into a PDF is a separate step. See",
        linkLabel: "How to turn a Word document into a PDF",
        href: "/guides/how-to-turn-a-word-document-into-a-pdf",
        after: ".",
      },
    ],
  },
  "how-to-work-with-pdfs-in-your-browser": {
    intro:
      "Browser PDF tools on this site open the file in the tab. A PDF must be 20 MB or smaller. Merge combines up to 10 PDFs and 80 pages in the order you add them, and it copies pages without resizing them. Light and balanced compression keep text and vectors. Strong compression renders each page as a JPEG, replaces selectable text, and handles up to 40 pages. The other rewrite presets handle up to 80 pages.",
    why:
      "Uploading a contract or a statement to an unknown server is a separate decision from shrinking or joining the file. Doing the work in the browser keeps the bytes on the machine you are using. The limits are there so the tab stays responsive. A tool that refuses a 90-page merge is telling you to split the job, not guessing at the content.",
    stepsHeading: "How to work with PDFs in the browser",
    sections: [
      {
        id: "open",
        heading: "What does every PDF tool check first?",
        paragraphs: [
          "The file should be a PDF, it should not be empty, and it should be 20 MB or smaller. The bytes are also checked for a PDF signature. A damaged file can fail with a message that it could not be read. A password-protected file fails until you unlock it. These tools do not ask for the password.",
          "Page counts matter after the file opens. The page counter reads the stored pages, including blanks. Rendering tools, including PDF to JPG and strong compression, stop at 40 pages. Plan a split before you send a longer file to those tools.",
        ],
      },
      {
        id: "merge-split",
        heading: "How do merge and split behave?",
        paragraphs: [
          "Merge needs at least two PDFs and accepts up to 10. The combined page count must be 80 or fewer. Pages are copied in the order of the files and appended. They are not scaled to a single paper size. A letter page and a smaller page stay their own sizes.",
          "One file does not need merging, and the merge tool says so. Split takes one PDF and a page selection. Use the page count first if you are not sure which numbers to type. A reversed range is rejected.",
        ],
      },
      {
        id: "compress",
        heading: "What is the difference between compression levels?",
        paragraphs: [
          "Low compression rewrites the PDF with object streams. Page content stays as vectors and text, and the size often drops only a little. Balanced copies pages into a new PDF and drops unused objects. Text and vectors are kept. Compression is not guaranteed at either of those levels.",
          "Strong compression renders each page to a JPEG and rebuilds the file. Selectable text and vector drawings are replaced by images. It handles up to 40 pages. Use it when a smaller file matters more than selecting text later. Light and balanced stop at 80 pages.",
        ],
      },
    ],
    steps: [
      {
        title: "Stay within 20 MB",
        body: "Every PDF tool here rejects a larger file. Compress or split elsewhere only if you accept that other tool’s handling of the file.",
      },
      {
        title: "Count pages before a merge or a render",
        body: "Merge allows 80 combined pages. Strong compression and PDF to JPG allow 40 pages.",
      },
      {
        title: "Pick a compression level on purpose",
        body: "Light and balanced keep text selectable. Strong replaces pages with JPEG images.",
      },
      {
        title: "Check the downloaded file",
        body: "Open it and confirm the page order, the text selection, and the page count. The original file is not overwritten in place by these tools.",
      },
    ],
    examples: [
      {
        title: "Two short PDFs",
        body: "Merge copies every page from the first file, then every page from the second. Two 3-page files become a 6-page PDF if both open. The pages keep the sizes they already had.",
      },
      {
        title: "Strong compression",
        body: "A file of 40 pages or fewer can be rebuilt from JPEG page images. The text will not select afterward. A 41-page file is over that cap and needs a different preset or a split.",
      },
    ],
    notesHeading: "Common mistakes",
    notes: [
      {
        heading: "Strong compression removes selectable text",
        body: "The page becomes a picture. Use light or balanced when you still need to search or copy the words.",
      },
      {
        heading: "Merge does not resize pages",
        body: "Mixed page sizes stay mixed. The tool copies pages in order. It does not scale them onto one sheet size.",
      },
    ],
    faqs: [
      {
        question: "How large can a PDF be?",
        answer:
          "20 MB. Larger files are rejected so the browser tab stays usable.",
      },
      {
        question: "How many PDFs can I merge?",
        answer:
          "Up to 10, with 80 pages combined. You need at least two files. Pages are copied in file order and are not resized.",
      },
      {
        question: "Which compression keeps the text selectable?",
        answer:
          "Light and balanced. They keep vectors and text. Strong compression renders pages as JPEG images and handles up to 40 pages.",
      },
      {
        question: "Can these tools open a password-protected PDF?",
        answer:
          "No. Unlock the file first. The tools do not ask for the password.",
      },
      {
        question: "Is the PDF uploaded?",
        answer:
          "No. Merge, split, count, and compress run in the browser.",
      },
    ],
    cta: {
      before: "To shrink a PDF with a preset you can see, use the",
      linkLabel: "PDF Compressor",
      href: "/tools/pdf-compressor",
      after: ". Light and balanced keep text. Strong compression rasterizes pages.",
    },
    alsoSee: [
      {
        before: "Counting pages before a merge is covered in",
        linkLabel: "How to count the pages in a PDF",
        href: "/guides/how-to-count-pdf-pages",
        after: ".",
      },
      {
        before: "Image files have a different kind of compression. See",
        linkLabel: "How to compress an image without losing quality",
        href: "/guides/how-to-compress-an-image-without-losing-quality",
        after: ".",
      },
    ],
  },
};
