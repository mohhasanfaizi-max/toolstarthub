import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const formats: ToolGuide = {
  article: toolGuideArticle({
    slug: "webp-vs-png-vs-jpg",
    title: "WebP vs PNG vs JPG: Which Image Format Should You Use?",
    primaryKeyword: "webp vs png vs jpg",
    secondaryKeywords: ["webp vs jpg", "png vs jpg", "best image format for web", "lossy vs lossless", "image format with transparency"],
    toolSlug: "image-converter",
    siblingToolSlugs: ["image-compressor", "image-resizer"],
    metaTitle: "WebP vs PNG vs JPG: Which Image Format to Use",
    metaDescription:
      "Compare WebP, PNG and JPG by compression, transparency, quality and support, with clear rules for photos, logos, screenshots and websites.",
    excerpt:
      "JPG, PNG and WebP each store pixels differently. This guide compares how they compress, which ones keep transparency and which to pick for photos, graphics and web pages.",
    relatedArticles: ["how-to-convert-jpg-to-png-and-png-to-jpg", "how-to-compress-an-image-without-losing-quality", "how-to-resize-an-image"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: use JPG for photographs where a small file matters more than perfect detail, PNG for logos, screenshots, line art and anything that needs a transparent background, and WebP when you control a website and want the smallest file in either style, because WebP can be lossy like JPG or lossless like PNG and it supports transparency in both modes. If a form or app accepts only JPG or PNG, pick whichever of those two matches the picture.",
    why:
      "The wrong format can make a page slow, blur the text in a screenshot, or turn a transparent logo into a white box. Knowing what each format keeps and what it throws away lets you choose once and avoid saving the same picture three times. It also explains why converting a blurry JPG to PNG does not make it sharp again.",
    sections: [
      {
        id: "difference",
        heading: "What is the main difference between JPG, PNG and WebP?",
        paragraphs: [
          "The difference is how each format compresses pixels. JPG (also written JPEG) uses lossy compression: it discards detail the eye is unlikely to miss, mostly fine colour variation, and the amount discarded depends on the quality setting. PNG uses lossless compression: every pixel comes back exactly as it was saved, so the file is larger for photos but perfect for sharp edges.",
          "WebP, developed by Google, offers both. Lossy WebP behaves like a more efficient JPG, and lossless WebP behaves like a more efficient PNG. Google’s WebP documentation states that lossless WebP files are 26% smaller than PNGs and lossy WebP files are 25–34% smaller than comparable JPEGs at equivalent quality. Those are averages from Google’s own tests, so your images may save more or less.",
        ],
        table: {
          caption: "JPG, PNG and WebP at a glance",
          headers: ["Feature", "JPG", "PNG", "WebP"],
          rows: [
            ["Compression", "Lossy", "Lossless", "Lossy or lossless"],
            ["Transparency", "No", "Yes (alpha channel)", "Yes, in both modes"],
            ["Animation", "No", "Not in standard PNG", "Yes"],
            ["Best for", "Photos", "Logos, screenshots, text, line art", "Web images of any kind"],
            ["Re-saving", "Loses a little more each time", "No loss", "Lossless mode: no loss"],
          ],
        },
      },
      {
        id: "photos",
        heading: "Which format is best for photos?",
        paragraphs: [
          "For photographs, a lossy format nearly always wins. A phone photo saved as PNG can be several times larger than the same photo as a good-quality JPG, and most people cannot see the difference on screen. JPG at a quality around 80 is a sensible starting point for sharing and uploading.",
          "If the photo is going on your own website, lossy WebP usually gives the same look at a smaller size. Keep an original copy, though. Every time a JPG is edited and saved again, a little more detail is lost, so edit from the original and export once at the end.",
        ],
      },
      {
        id: "graphics",
        heading: "Which format is best for logos, screenshots and text?",
        paragraphs: [
          "Use PNG, or lossless WebP on the web. JPG compression creates faint blocks and halos, called artefacts, around hard edges. They are hard to notice in a photo of a beach but obvious around black text on a white background, thin lines in a chart or the outline of a logo.",
          "A screenshot of a spreadsheet saved as PNG keeps every character crisp, and because it has large areas of flat colour it often compresses well. The same screenshot as JPG may be smaller but the letters can look smudged.",
        ],
      },
      {
        id: "transparency",
        heading: "Which formats keep a transparent background?",
        paragraphs: [
          "PNG and WebP can store an alpha channel, which records how see-through each pixel is. JPG cannot. When a transparent PNG is converted to JPG, every transparent pixel must be given a solid colour.",
          "The Tools Star Hub Image Converter handles this with a background colour setting. It defaults to white, and you can type any hex colour, for example #000000 for black, so a logo meant for a dark page does not end up on a white rectangle. Converting JPG to PNG cannot add transparency back: the old background simply becomes opaque pixels in a lossless file.",
        ],
      },
      {
        id: "support",
        heading: "Can every browser and app open WebP?",
        paragraphs: [
          "All current major browsers display WebP, and MDN’s image format guide lists it as broadly supported. The gaps are elsewhere: some older desktop software, upload forms and print services still accept only JPG or PNG. Government and job application portals are a common example.",
          "That is why a practical workflow keeps JPG or PNG as the master copy and makes WebP versions for the web, rather than converting everything to WebP and finding a form that refuses it later.",
        ],
      },
      {
        id: "size",
        heading: "Does converting between formats make a file smaller?",
        paragraphs: [
          "Sometimes, but not always. A photo converted from PNG to JPG usually shrinks a lot. A JPG converted to PNG usually grows, because PNG stores every pixel exactly, including the artefacts the JPG already created. Converting cannot recover detail that was thrown away.",
          "If your goal is a smaller file rather than a different format, a compressor is the better tool. The Image Compressor can save as JPG, PNG or WebP with a quality slider from 10 to 100, starting at 80, and shows the original size, the new size and the percentage change. Its PNG output is lossless, so the slider does not change PNG encoding.",
        ],
      },
    ],
    stepsHeading: "How do I choose and convert the right format step by step?",
    steps: [
      { title: "Decide what the image is", body: "A photo with gradients and texture leans to JPG or lossy WebP. Text, icons, charts or flat colour lean to PNG or lossless WebP." },
      { title: "Check where it will be used", body: "If an upload form lists accepted formats, follow that list. If it is your own website, WebP is usually available." },
      { title: "Check for transparency", body: "If the image needs a see-through background, rule out JPG." },
      { title: "Convert JPG and PNG", body: "Open the Image Converter, choose JPG → PNG or PNG → JPG, set a background colour for transparent pixels when going to JPG, and download the result." },
      { title: "Compress or make WebP", body: "Use the Image Compressor to pick JPG, PNG or WebP output, adjust quality and compare the sizes before you download." },
    ],
    examples: [
      { title: "A product photo for an online shop", body: "The camera file is a large JPG. Resize it to the width the shop displays, then save it as JPG or WebP at quality 80 in the compressor. Compare the preview at full size; if edges look soft, raise quality to 85 and check the size again." },
      { title: "A company logo with a transparent background", body: "Keep the PNG. If a supplier insists on JPG, convert PNG → JPG and type the brand background colour as the fill, for example #0B3D2E, so the logo sits on the right colour instead of white." },
      { title: "A screenshot for a help article", body: "Save as PNG for crisp text. If the page is on your own site and size matters, try WebP output in the compressor and compare the text at 100% zoom." },
    ],
    notesHeading: "What should I avoid when choosing a format?",
    notes: [
      { heading: "Repeated JPG saves", body: "Each re-save of a lossy JPG loses a little more. Work from the original and export the final JPG once." },
      { heading: "Expecting PNG to fix blur", body: "Converting a blurry or blocky JPG to PNG keeps the blur and blocks. Only a better original can fix them." },
      { heading: "Forgetting the fallback", body: "If you serve WebP on a site, keep a JPG or PNG copy for places that do not accept WebP, such as some email tools and forms." },
    ],
    faqs: [
      { question: "Is WebP better than JPG?", answer: "For web pages it usually gives a smaller file at similar visible quality. Google reports lossy WebP is 25–34% smaller than comparable JPEGs. JPG remains the safer choice where an app or form accepts only JPG." },
      { question: "Is PNG higher quality than JPG?", answer: "PNG is lossless, so it never discards detail. For photos the visible difference from a good JPG is often small while the PNG file is much larger." },
      { question: "Why does my transparent logo get a white background as JPG?", answer: "JPG has no transparency, so transparent pixels must be filled. The Image Converter fills them with white unless you choose another colour." },
      { question: "Should I use WebP for everything?", answer: "Use it for images on sites you control, but keep JPG or PNG masters. Some upload portals, print shops and older programs still do not accept WebP." },
      { question: "Does converting JPG to PNG improve quality?", answer: "No. The PNG stores the JPG’s pixels exactly, including any blur or blocks, and is usually a larger file." },
      { question: "Which format is best for screenshots with text?", answer: "PNG or lossless WebP. Lossy formats can leave halos around letters and thin lines." },
      { question: "What quality setting should I use for JPG or WebP photos?", answer: "Start around 80, check the preview at full size and change in steps of 5. The compressor shows the new size so you can balance both." },
      { question: "Can WebP be animated?", answer: "Yes. WebP supports animation as well as lossy, lossless and transparent images, which is why it is used as a smaller alternative to GIF." },
      { question: "Can the Image Converter make WebP files?", answer: "No. It converts between JPG and PNG. To save a WebP file, use the Image Compressor, which offers JPG, PNG and WebP output." },
      { question: "Which format do passport and job portals usually want?", answer: "Most ask for JPG, sometimes PNG, with a size and pixel limit. Always follow the portal’s own instructions." },
    ],
    faqMax: 10,
    cta: { before: "Switch a picture between JPG and PNG with the free", linkLabel: "Image Converter", href: "/tools/image-converter", after: "." },
    alsoSee: [
      { before: "Save a smaller JPG, PNG or WebP with the", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
      { before: "Change pixel dimensions first with the", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
      { before: "Read the full conversion walkthrough in", linkLabel: "How to Convert JPG to PNG and PNG to JPG", href: "/guides/how-to-convert-jpg-to-png-and-png-to-jpg", after: "." },
    ],
    sources: [
      { label: "An image format for the Web (Google WebP)", href: "https://developers.google.com/speed/webp" },
      { label: "Image file type and format guide (MDN)", href: "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types" },
    ],
  },
};

const kb100: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-reduce-image-size-to-100kb",
    title: "How to Reduce Image Size to 100KB (or 50KB) for Online Forms",
    primaryKeyword: "reduce image size to 100kb",
    secondaryKeywords: ["compress image to 50kb", "reduce photo size in kb", "image size under 100kb", "resize photo for online form", "compress jpg to 100kb"],
    toolSlug: "image-compressor",
    siblingToolSlugs: ["image-resizer", "image-cropper"],
    metaTitle: "Reduce Image Size to 100KB or 50KB for Forms",
    metaDescription:
      "Get a photo or signature under 100KB or 50KB for an online form by resizing pixels first, then lowering JPG quality, without making it unreadable.",
    excerpt:
      "Application portals often reject files over 100KB or 50KB. This guide shows the two levers that control file size, pixel dimensions and quality, and the order to use them in.",
    relatedArticles: ["how-to-compress-an-image-without-losing-quality", "how-to-resize-an-image", "webp-vs-png-vs-jpg"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: to get a photo under 100KB, first resize it to the pixel size the form needs, often somewhere between 600 and 1200 pixels on the long side, then save it as JPG and lower the quality until the file size drops below the limit. Open the Image Resizer, set the width with the aspect ratio locked and download a JPG, then open the Image Compressor, choose JPG and move the quality slider down from 80 in small steps while watching the compressed size. For 50KB, use smaller dimensions rather than very low quality.",
    why:
      "Exam boards, visa portals, job sites and university applications often set strict limits such as 20–50KB for a signature and 50–100KB or 200KB for a photo. A modern phone photo can be 3–5MB, so it needs to shrink by 95% or more. If you only drag the quality down, the photo turns blotchy and may be rejected anyway. Changing pixel dimensions first gets you most of the way with almost no visible loss.",
    sections: [
      {
        id: "levers",
        heading: "What decides an image’s file size in KB?",
        paragraphs: [
          "Two things matter most: the number of pixels and how strongly they are compressed. A 4000 × 3000 photo has 12 million pixels. Resized to 1000 × 750 it has 750,000, which is one sixteenth as many, and the file usually shrinks by a similar large factor before you touch quality at all.",
          "Compression is the second lever. For JPG and WebP, a lower quality setting stores less colour detail. PNG is lossless, so for photos it is usually the wrong choice when you need a small file. Busy pictures such as foliage or patterned clothing need more bytes than a face on a plain wall, so two photos of the same dimensions can produce quite different sizes.",
        ],
        table: {
          caption: "Which lever to use",
          headers: ["Situation", "Use first", "Why"],
          rows: [
            ["Photo is several MB", "Resize pixels", "Removes most of the bytes with little visible change"],
            ["Already the right pixel size", "Lower JPG quality", "Fine-tunes the last few KB"],
            ["Saved as PNG", "Save as JPG instead", "PNG keeps every pixel and stays large for photos"],
            ["Still too big at quality 50", "Resize smaller again", "Very low quality looks blocky"],
          ],
        },
      },
      {
        id: "dimensions",
        heading: "What pixel size should I use for a 100KB or 50KB limit?",
        paragraphs: [
          "Always check the form first. Many portals state both a pixel size and a KB range, and some reject files that are too small as well as too large. If only a KB limit is given, a long side of about 1000 pixels is a reasonable starting point for 100KB and about 600 pixels for 50KB. These are starting points rather than rules, because content affects size.",
          "In the Image Resizer, keep Lock aspect ratio on so the face is not stretched. Type the width and the height updates itself. Output width and height can be from 1 to 8192 pixels, and you can choose JPG, PNG or WebP output; choose JPG for forms unless told otherwise.",
        ],
      },
      {
        id: "quality",
        heading: "How do I lower quality without ruining the photo?",
        paragraphs: [
          "In the Image Compressor, choose JPG as the output format. The slider runs from 10 to 100 and starts at 80. After each change the tool shows the compressed size and the percentage change compared with the original, so you can stop as soon as you are under the limit.",
          "Move down in steps of about 5. Look at the preview each time, especially eyes, hair edges and any text. If you reach about 50 and the file is still too large, go back to the resizer and make the image smaller rather than pushing quality to 20, where blocks and colour bands become obvious. The compressor keeps the same pixel dimensions, so it will not resize for you.",
        ],
      },
      {
        id: "signature",
        heading: "How do I get a signature scan under 20KB or 50KB?",
        paragraphs: [
          "Signatures are mostly white paper with thin dark strokes. Crop tightly around the signature in the Image Cropper first so you are not storing a page of empty paper. Then resize to the width the form asks for, often a few hundred pixels, and save as JPG.",
          "Because the picture is simple, it compresses well. A tightly cropped 400-pixel-wide signature often fits under 20KB at a moderate quality. Check that the strokes stay continuous and readable.",
        ],
      },
      {
        id: "kb",
        heading: "Is 100KB the same as 100,000 bytes?",
        paragraphs: [
          "Not always. Some systems count 1KB as 1,000 bytes and others as 1,024 bytes, so a 100KB limit could mean 100,000 or 102,400 bytes. The Tools Star Hub compressor shows sizes using 1,024 bytes per KB. To be safe, aim a few KB under the limit, for example 95KB for a 100KB cap.",
        ],
      },
      {
        id: "check",
        heading: "How can I tell whether the result will be accepted?",
        paragraphs: [
          "Before uploading, compare three numbers against the form: the pixel dimensions, the file size and the format. The compressor shows the dimensions, the original size, the compressed size and the change in percent, and the downloaded file name ends in .jpg when you choose JPG. If a form also gives a minimum, such as 20KB to 100KB, make sure the result has not gone below it.",
          "Then look at the picture itself at 100% zoom. Faces should show clear eyes and edges, and any document text should be readable without guessing. A photo that passes the size check but is too blurry for an officer to identify you can still be rejected by a human reviewer later, which costs more time than redoing it now.",
          "If a portal compresses or crops after upload, upload once and view its preview. Some systems show the crop they will use, which is a chance to fix framing before you submit.",
        ],
      },
      {
        id: "batch",
        heading: "What if I need several photos at the same size?",
        paragraphs: [
          "Do them one at a time with the same settings. Write down the width you used in the resizer and the quality that worked in the compressor, then repeat those numbers for each photo. Because photos differ in detail, check each final size; a photo with a busy background may need a quality five points lower than a plain one to reach the same limit.",
        ],
      },
    ],
    stepsHeading: "How do I reduce a photo to 100KB step by step?",
    steps: [
      { title: "Read the form’s rules", body: "Note the KB range, the pixel size if given, and the accepted formats, usually JPG." },
      { title: "Crop if needed", body: "Use the Image Cropper to remove empty background or to match a shape such as 1:1." },
      { title: "Resize the pixels", body: "In the Image Resizer, keep Lock aspect ratio on, set the width (for example 1000 for 100KB), choose JPG and download." },
      { title: "Compress to the limit", body: "Open the resized file in the Image Compressor, choose JPG and lower quality from 80 in steps of 5 until the compressed size is a little under the limit." },
      { title: "Check and upload", body: "View the preview at full size, confirm faces and text are clear, download and upload." },
    ],
    examples: [
      { title: "A 4.2MB phone photo to under 100KB", body: "The photo is 4032 × 3024. Resizing to 1000 pixels wide with the ratio locked gives 1000 × 750. Compressing that as JPG at quality 80 shows the new size; if it is above 95KB, try 75, then 70, until it fits. Exact sizes depend on the picture." },
      { title: "A portrait for a 50KB limit", body: "Resize the long side to about 600 pixels and save as JPG. If quality 70 still gives 60KB, reduce the width to 500 rather than dropping quality below 50." },
      { title: "A PNG screenshot that must be under 100KB", body: "Change the output format to JPG in the compressor. A photo-like PNG often shrinks dramatically as JPG. If the image has fine text, check that letters remain readable." },
    ],
    notesHeading: "What mistakes cause uploads to fail?",
    notes: [
      { heading: "Too small as well as too big", body: "Some portals set a minimum such as 10KB or a minimum pixel size. Very aggressive compression can fall below it." },
      { heading: "Wrong format", body: "A WebP file may be rejected even if it is small. Use JPG unless the form lists other formats." },
      { heading: "Editing the original", body: "Keep the original photo. Start again from it if you need a different size later, instead of compressing an already compressed copy." },
    ],
    faqs: [
      { question: "How do I make a photo exactly 100KB?", answer: "You rarely need exactly 100KB. Aim just under the limit, such as 90–98KB, by resizing first and then adjusting JPG quality." },
      { question: "Why is my photo still large after compressing?", answer: "The pixel dimensions are probably still large. The compressor keeps the same dimensions, so resize the image first." },
      { question: "What quality setting gets a photo under 50KB?", answer: "It depends on dimensions and content. Resize to about 600 pixels on the long side first, then try JPG quality around 70 and adjust." },
      { question: "Should I save a form photo as PNG or JPG?", answer: "JPG, unless the form asks for PNG. PNG is lossless and is usually much larger for photographs." },
      { question: "Does reducing KB change the photo’s pixel size?", answer: "Lowering quality does not. Resizing does. Use both: resize for pixels, compress for the final KB." },
      { question: "Will a 100KB photo look blurry?", answer: "Not usually at sensible dimensions. A 1000-pixel-wide JPG at quality 70–80 is clear on screen." },
      { question: "Is 1KB 1,000 or 1,024 bytes?", answer: "Both are used. The compressor uses 1,024 bytes per KB. Stay a few KB under the limit so either rule passes." },
      { question: "How do I shrink a scanned signature for a form?", answer: "Crop tightly, resize to the requested width, save as JPG and lower quality while checking the strokes stay readable." },
      { question: "Are my photos uploaded to Tools Star Hub?", answer: "No. The resizer and compressor work in your browser, and the file is not sent to the site." },
      { question: "What is the largest image the compressor accepts?", answer: "JPG, PNG or WebP files up to 25MB and 8192 pixels per side." },
    ],
    faqMax: 10,
    cta: { before: "Bring a photo under the limit with the free", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
    alsoSee: [
      { before: "Set the pixel width first with the", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
      { before: "Trim empty background with the", linkLabel: "Image Cropper", href: "/tools/image-cropper", after: "." },
      { before: "Compare formats in", linkLabel: "WebP vs PNG vs JPG", href: "/guides/webp-vs-png-vs-jpg", after: "." },
    ],
    sources: [
      { label: "Choose the right image format (web.dev)", href: "https://web.dev/articles/choose-the-right-image-format" },
    ],
  },
};

const passport: ToolGuide = {
  article: toolGuideArticle({
    slug: "passport-and-visa-photo-sizes-explained",
    title: "Passport and Visa Photo Sizes Explained in Pixels and Inches",
    primaryKeyword: "passport photo size in pixels",
    secondaryKeywords: ["passport photo size", "2x2 photo in pixels", "visa photo size", "35x45 mm in pixels", "digital passport photo requirements"],
    toolSlug: "image-resizer",
    siblingToolSlugs: ["image-cropper", "image-compressor"],
    metaTitle: "Passport and Visa Photo Sizes in Pixels and Inches",
    metaDescription:
      "Convert passport and visa photo sizes between millimetres, inches and pixels, understand DPI, and prepare a digital photo that meets the stated rules.",
    excerpt:
      "Photo rules mix millimetres, inches, pixels and kilobytes. This guide explains how they relate, how DPI turns print size into pixels and how to crop and resize a compliant copy.",
    relatedArticles: ["how-to-resize-an-image", "how-to-crop-an-image", "how-to-reduce-image-size-to-100kb"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a printed passport photo is described in millimetres or inches, and a digital one in pixels and kilobytes. To turn a print size into pixels, multiply inches by the DPI (dots per inch): a 2 × 2 inch photo at 300 DPI is 600 × 600 pixels, and a 35 × 45 mm photo at 300 DPI is about 413 × 531 pixels. For an online application, follow the issuing country’s own digital rules. The UK, for example, asks for a digital photo at least 600 pixels wide and 750 pixels tall and between 50KB and 10MB.",
    why:
      "Rejected photos delay applications. The rules come from each government, they change, and they mix units that do not obviously match. Knowing how millimetres, inches, DPI and pixels relate lets you read any requirement and check your file before you submit it, instead of guessing.",
    sections: [
      {
        id: "units",
        heading: "How do millimetres, inches and pixels relate?",
        paragraphs: [
          "One inch is exactly 25.4 millimetres. Pixels have no physical size on their own; a printer decides how many to put in each inch. That number is the DPI or PPI. At 300 DPI, a common photo print density, one inch holds 300 pixels.",
          "So pixels = inches × DPI, and inches = millimetres ÷ 25.4. A 35 mm width is 35 ÷ 25.4 = 1.378 inches, which at 300 DPI is 413 pixels. A 45 mm height is 1.772 inches, or 531 pixels. At 600 DPI the same print needs twice as many pixels on each side.",
        ],
        table: {
          caption: "Common print sizes converted to pixels",
          headers: ["Print size", "Inches", "Pixels at 300 DPI", "Pixels at 600 DPI"],
          rows: [
            ["2 × 2 in (51 × 51 mm)", "2 × 2", "600 × 600", "1200 × 1200"],
            ["35 × 45 mm", "1.378 × 1.772", "413 × 531", "827 × 1063"],
            ["33 × 48 mm", "1.299 × 1.890", "390 × 567", "780 × 1134"],
            ["50 × 70 mm", "1.969 × 2.756", "591 × 827", "1181 × 1654"],
          ],
        },
        after: "Values are rounded to the nearest pixel. The print size you need comes from the issuing authority, not from this table.",
      },
      {
        id: "countries",
        heading: "Which sizes do countries use?",
        paragraphs: [
          "Sizes differ by country and by document. The United States uses a 2 × 2 inch photo for passports. Many countries in Europe and elsewhere use 35 × 45 mm. Some visas use other sizes again. Rules for head size, background colour, glasses and expression vary too.",
          "For UK online applications, GOV.UK states the digital photo must be clear, in focus, in colour, unaltered by software, at least 600 pixels wide and 750 pixels tall, and between 50KB and 10MB. It must be taken against a plain, light-coloured background, and if taken on your own device you should not crop it, because cropping is done for you. That last point shows why you must read the specific rules: a crop that helps one portal can break another.",
        ],
      },
      {
        id: "resize",
        heading: "How do I resize a photo to an exact pixel size?",
        paragraphs: [
          "First get the shape right, then set the size. If the portal wants a square 600 × 600 image, crop to 1:1 with the Image Cropper, which offers Free, 1:1, 4:3 and 16:9 ratios. For a 35 × 45 mm shape, use Free and drag the box to roughly a 7:9 shape.",
          "Then open the Image Resizer. With Lock aspect ratio on, typing the width sets the matching height. If the crop was not exactly the right shape, turn the lock off and type both values, but only for small adjustments, because larger changes stretch the face. Choose JPG output unless the portal asks otherwise.",
        ],
      },
      {
        id: "dpi",
        heading: "Do I need to set DPI for a digital photo?",
        paragraphs: [
          "Usually not. Online systems check pixel dimensions and file size. DPI only matters when the image is printed, because it decides how large the pixels appear on paper. A 600 × 600 file prints at 2 × 2 inches at 300 DPI or at 1 × 1 inch at 600 DPI; the pixels are the same either way.",
          "If you are printing at home, print at 100% scale with no fit-to-page option so the printer does not resize the photo.",
        ],
      },
      {
        id: "head",
        heading: "How do head-size rules work with pixels?",
        paragraphs: [
          "Many photo rules specify how much of the frame the head must fill, for example a range of heights from chin to crown, measured in millimetres or as a share of the photo height. To check it in pixels, scale the measurement the same way as the photo. If a 45 mm tall photo must show a head between 29 mm and 34 mm, that is roughly 64% to 76% of the height, so in a 531-pixel-tall image the head should be about 340 to 400 pixels tall. These numbers are an illustration of the method; use the exact figures in the rules you are following.",
          "This is why you crop before you resize. Cropping decides how large the head is relative to the frame. Resizing only changes the pixel count, and the proportions stay the same.",
        ],
      },
      {
        id: "quality",
        heading: "What makes a digital photo fail even at the right size?",
        paragraphs: [
          "Size is only one check. Photos are commonly rejected for shadows on the face or background, uneven lighting, a background that is not plain, glare on glasses, a tilted head or an expression that is not neutral. GOV.UK also lists red eye, other objects or people in the frame and hair covering the eyes.",
          "Heavy compression can cause a rejection too, because blocky skin and blurred edges make a face harder to verify. If you need to meet a KB range, change pixel dimensions within the allowed range before lowering quality, and keep the original photo so you can start again if a portal asks for a different size.",
        ],
      },
    ],
    stepsHeading: "How do I prepare a digital passport photo step by step?",
    steps: [
      { title: "Read the official rules", body: "Find the issuing authority’s page and note pixel size, KB range, background, and whether you may crop." },
      { title: "Take a compliant photo", body: "Plain light background, even lighting, facing the camera, neutral expression, as the rules describe." },
      { title: "Crop if allowed", body: "Use the Image Cropper at 1:1 for square photos or Free for other shapes, keeping the head centred." },
      { title: "Resize to the pixel size", body: "In the Image Resizer, keep the ratio locked, type the width and download a JPG." },
      { title: "Check the file size", body: "If the KB is outside the allowed range, adjust quality in the Image Compressor and check again." },
    ],
    examples: [
      { title: "A 2 × 2 inch photo for printing", body: "Crop at 1:1, then resize to 600 × 600 pixels. Printed at 300 DPI it measures 2 × 2 inches." },
      { title: "A 35 × 45 mm photo", body: "35 ÷ 25.4 × 300 ≈ 413 and 45 ÷ 25.4 × 300 ≈ 531. Crop to that shape, resize to 413 × 531 and print at 300 DPI." },
      { title: "A UK online application", body: "Use an uncropped photo from your device that is at least 600 × 750 pixels and between 50KB and 10MB, as GOV.UK requires. A typical phone photo already meets the pixel minimum." },
    ],
    notesHeading: "What should I watch out for?",
    notes: [
      { heading: "Editing is often forbidden", body: "Many rules ban altering the photo beyond simple cropping and resizing. Do not retouch, filter or change the background." },
      { heading: "Rules change", body: "Always check the official page on the day you apply, because sizes and file limits are updated." },
      { heading: "Privacy", body: "The cropper and resizer run in your browser and do not upload your photo to Tools Star Hub." },
    ],
    faqs: [
      { question: "How many pixels is a 2 × 2 inch photo?", answer: "At 300 DPI it is 600 × 600 pixels. At 600 DPI it is 1200 × 1200 pixels." },
      { question: "How many pixels is 35 × 45 mm?", answer: "About 413 × 531 pixels at 300 DPI, using pixels = mm ÷ 25.4 × DPI." },
      { question: "What DPI should a passport photo be?", answer: "300 DPI is the common print density. For online uploads, pixel dimensions and file size matter, not the DPI value stored in the file." },
      { question: "What are the UK digital passport photo rules?", answer: "GOV.UK asks for at least 600 × 750 pixels, 50KB to 10MB, in colour, in focus and unaltered, against a plain light background." },
      { question: "Can I crop my photo for an online passport application?", answer: "It depends. GOV.UK says not to crop a photo from your own device. Other portals ask for an exact crop. Follow the specific rules." },
      { question: "Why does my resized photo look stretched?", answer: "The aspect ratio lock was off and the width and height changed by different amounts. Crop to the right shape first, then resize with the lock on." },
      { question: "Can I use the same file for different countries?", answer: "Usually not. Sizes, head position and file limits differ, so prepare a separate copy for each." },
      { question: "Should a passport photo be JPG or PNG?", answer: "Most portals ask for JPG. Use PNG only if the rules list it." },
      { question: "How do I print a passport photo at the right size?", answer: "Print at 100% with fit-to-page off, using the DPI you designed for, such as 300." },
      { question: "Is 600 × 600 enough for a US-style 2 × 2 photo?", answer: "It prints at 2 × 2 inches at 300 DPI. Online applications may have their own pixel range, so check the official requirement." },
    ],
    faqMax: 10,
    cta: { before: "Set an exact pixel size with the free", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
    alsoSee: [
      { before: "Crop to a square or custom shape with the", linkLabel: "Image Cropper", href: "/tools/image-cropper", after: "." },
      { before: "Fit a file-size limit using", linkLabel: "How to Reduce Image Size to 100KB", href: "/guides/how-to-reduce-image-size-to-100kb", after: "." },
      { before: "Check proportions with the", linkLabel: "Aspect Ratio Calculator", href: "/tools/aspect-ratio-calculator", after: "." },
    ],
    sources: [
      { label: "Get a passport photo: digital photos (GOV.UK)", href: "https://www.gov.uk/photos-for-passports" },
    ],
  },
};

const social: ToolGuide = {
  article: toolGuideArticle({
    slug: "instagram-and-facebook-image-sizes",
    title: "Instagram and Facebook Image Sizes: Ratios, Pixels and How to Crop",
    primaryKeyword: "social media image sizes",
    secondaryKeywords: ["instagram image size", "instagram aspect ratio", "facebook link image size", "1080 x 1350", "1200 x 630"],
    toolSlug: "image-cropper",
    siblingToolSlugs: ["image-resizer", "open-graph-preview"],
    metaTitle: "Instagram and Facebook Image Sizes and Ratios",
    metaDescription:
      "Instagram keeps photos 320–1080 px wide between 1.91:1 and 3:4. Facebook link images work best at 1200 × 630. See the pixel sizes and how to crop for each.",
    excerpt:
      "Instagram and Facebook crop or rescale images that do not fit their rules. This guide lists the published widths and ratios and shows how to crop and resize before you post.",
    relatedArticles: ["how-to-crop-an-image", "how-to-resize-an-image", "how-to-check-an-open-graph-preview"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: Instagram keeps a photo at its original resolution when it is between 320 and 1080 pixels wide and its aspect ratio is between 1.91:1 (landscape) and 3:4 (portrait), so 1080 × 1080 for square, 1080 × 566 for the widest landscape and 1080 × 1440 for the tallest portrait all fit. For a link shared on Facebook, Meta recommends an image of at least 1200 × 630 pixels, close to a 1.91:1 ratio. Crop to the ratio first with the Image Cropper, then set the width with the Image Resizer.",
    why:
      "If a picture does not match the platform’s ratio, the platform crops it for you, often cutting off heads, product edges or text. If it is too small it is enlarged and looks soft; if it is huge it is scaled down, sometimes with extra compression. Preparing the crop and size yourself keeps control of what people see.",
    sections: [
      {
        id: "instagram",
        heading: "What image sizes does Instagram support?",
        paragraphs: [
          "According to Instagram’s Help Center, photos are uploaded at up to 1080 pixels wide. When a photo is between 320 and 1080 pixels wide, Instagram keeps its original resolution as long as the aspect ratio is between 1.91:1 and 3:4, which at 1080 wide means a height between 566 and 1440 pixels. Photos with an unsupported ratio are cropped to fit a supported one. Lower-resolution photos are enlarged to 320 wide, and higher-resolution photos are reduced to 1080 wide.",
          "So uploading a 4000-pixel photo gains nothing: it is resized to 1080. Uploading a 600-pixel photo is kept at 600 but will look softer on large phones than a 1080 one. Aim for exactly 1080 wide.",
        ],
        table: {
          caption: "Instagram photo sizes at 1080 pixels wide",
          headers: ["Shape", "Ratio", "Pixels", "Within Instagram’s range?"],
          rows: [
            ["Square", "1:1", "1080 × 1080", "Yes"],
            ["Widest landscape", "1.91:1", "1080 × 566", "Yes"],
            ["Portrait", "4:5", "1080 × 1350", "Yes"],
            ["Tallest portrait", "3:4", "1080 × 1440", "Yes"],
            ["Widescreen video frame", "16:9", "1080 × 608", "Yes (between 1.91:1 and 1:1)"],
            ["Phone-screen portrait", "9:16", "1080 × 1920", "No, taller than 3:4, so it is cropped in the feed"],
          ],
        },
      },
      {
        id: "facebook",
        heading: "What size should a Facebook link image be?",
        paragraphs: [
          "When you share a web page on Facebook, the preview image comes from the page’s og:image tag. Meta’s developer documentation sets a minimum of 200 × 200 pixels and a maximum file size of 8MB, recommends at least 1200 × 630 pixels for high-resolution screens, and says images of at least 600 × 315 display as large link previews. Smaller images still appear, but as a small thumbnail beside the link.",
          "Meta also asks you to keep images as close to 1.91:1 as possible so the full image shows without cropping. 1200 ÷ 630 is about 1.905, which is why 1200 × 630 is the usual target.",
        ],
      },
      {
        id: "crop",
        heading: "How do I crop to an exact social media ratio?",
        paragraphs: [
          "The Image Cropper has preset ratios of Free, 1:1, 4:3 and 16:9. Use 1:1 for square posts and 16:9 for widescreen frames. For 4:5, 1.91:1 or 3:4, choose Free and drag the handles, watching the crop size shown in pixels. The box can be moved with a mouse, a finger or the arrow keys.",
          "After cropping, the shape may be close but not exact, for example 1083 × 1352. The Image Resizer fixes that: turn off Lock aspect ratio and type 1080 × 1350. A difference of a few pixels causes no visible stretching. For exact work, use the Aspect Ratio Calculator to find the height for any width.",
        ],
      },
      {
        id: "safe",
        heading: "Where should I place text and faces?",
        paragraphs: [
          "Keep important content away from the edges. Profile grids and some feeds show a cropped version of your post, so a centred subject survives better than one in a corner. For link images, avoid putting small text near the borders, since some placements trim the image.",
          "Use large, short text. A headline that is easy to read at 1200 pixels wide may be unreadable in a phone feed where the image is shown at a third of that.",
        ],
      },
      {
        id: "x",
        heading: "What about X and other platforms?",
        paragraphs: [
          "X, LinkedIn and other networks publish their own recommendations and change them from time to time. For link previews, most of them read the same Open Graph tags as Facebook, so a 1200 × 630 og:image is a widely used starting point. Check each platform’s current help page for in-feed photo posts, and preview shared links with the Open Graph Preview tool before posting.",
        ],
      },
      {
        id: "quality",
        heading: "How do I keep images sharp after uploading?",
        paragraphs: [
          "Upload at exactly the target width so the platform does not need to rescale it much, and avoid saving the file several times in a row as JPG. For graphics with text, a PNG export keeps letters crisp before upload, and the platform will apply its own compression afterwards either way.",
          "Start from the largest original you have. Enlarging a small image to 1080 pixels adds pixels but no detail, so a 500-pixel picture stretched to 1080 still looks soft. If your only copy is small, a square or portrait post shown smaller in the feed hides that better than a wide one.",
          "Finally, check colour and contrast on a phone. Thin light text over a photo can disappear once the image is scaled down, so add a solid or semi-transparent panel behind it.",
        ],
      },
      {
        id: "workflow",
        heading: "What is a quick workflow for one image across both platforms?",
        paragraphs: [
          "Start with the original photo and make one crop per destination rather than one compromise crop. In the Image Cropper, choose 1:1 for a square Instagram post and export, then reopen the original, choose Free and drag to roughly 4:5 for a portrait post. For a Facebook link image, choose Free again and aim for 1.91:1, then resize to 1200 × 630 in the Image Resizer.",
          "Name each file by platform and shape, such as post-square.jpg and link-1200x630.jpg, so the right version is uploaded each time.",
        ],
      },
    ],
    stepsHeading: "How do I prepare an image for Instagram or Facebook step by step?",
    steps: [
      { title: "Choose the shape", body: "Square 1:1, portrait 4:5 or landscape 1.91:1 for Instagram; 1.91:1 for Facebook link images." },
      { title: "Crop", body: "Open the Image Cropper, pick 1:1 or 16:9 or use Free, and frame the subject away from the edges." },
      { title: "Resize", body: "In the Image Resizer, set 1080 wide for Instagram or 1200 × 630 for a link image, and choose JPG." },
      { title: "Check the result", body: "View it small, as on a phone, to confirm text is readable." },
      { title: "Preview links", body: "For a shared web page, check the og:image with the Open Graph Preview tool." },
    ],
    examples: [
      { title: "A landscape holiday photo as a 4:5 post", body: "The photo is 4000 × 3000. Crop with Free to a portrait 4:5 area, for example 2400 × 3000, then resize to 1080 × 1350." },
      { title: "A blog banner for Facebook shares", body: "Crop a wide image to about 1.91:1 and resize to 1200 × 630. Facebook shows it as a large preview because it is above 600 × 315." },
      { title: "A 9:16 phone screenshot in the feed", body: "9:16 is taller than Instagram’s 3:4 limit, so the feed would crop it. Crop to 3:4 yourself and resize to 1080 × 1440 so you choose what stays." },
    ],
    notesHeading: "What are the common mistakes?",
    notes: [
      { heading: "Uploading huge files", body: "Instagram reduces anything wider than 1080 pixels, so larger uploads only take longer." },
      { heading: "Ignoring the ratio", body: "Out-of-range ratios are cropped automatically, which may remove part of the subject." },
      { heading: "Changing link images without a new URL", body: "Facebook caches images by URL. Meta advises using a new image URL when you replace an og:image." },
    ],
    faqs: [
      { question: "What is the best Instagram photo size?", answer: "1080 pixels wide with a ratio between 1.91:1 and 3:4, such as 1080 × 1080, 1080 × 1350 or 1080 × 1440." },
      { question: "Why does Instagram crop my photo?", answer: "Its ratio is outside 1.91:1 to 3:4. Instagram crops it to fit a supported ratio." },
      { question: "Does Instagram reduce image resolution?", answer: "Photos wider than 1080 pixels are resized to 1080 wide, and photos narrower than 320 are enlarged to 320." },
      { question: "What size is a Facebook link preview image?", answer: "Meta recommends at least 1200 × 630 pixels, ratio close to 1.91:1, under 8MB." },
      { question: "Why is my Facebook link image tiny?", answer: "Images smaller than 600 × 315 pixels show as a small thumbnail rather than a large preview." },
      { question: "How do I crop to 4:5?", answer: "Use Free in the Image Cropper, drag to roughly 4:5, then resize to 1080 × 1350 in the Image Resizer." },
      { question: "Is 1080 × 1920 OK for an Instagram feed post?", answer: "Its 9:16 ratio is taller than the 3:4 limit, so the feed would crop it. Use 1080 × 1440 or 1080 × 1350 instead." },
      { question: "Should social images be JPG or PNG?", answer: "JPG suits photos. PNG suits graphics with sharp text. Both are accepted by Instagram and Facebook." },
      { question: "Do the cropper and resizer upload my photos?", answer: "No. Both work in your browser and do not send the image to Tools Star Hub." },
      { question: "How do I update an image Facebook has cached?", answer: "Use a new image URL and refresh the share with Meta’s Sharing Debugger, as its documentation describes." },
    ],
    faqMax: 10,
    cta: { before: "Frame your post with the free", linkLabel: "Image Cropper", href: "/tools/image-cropper", after: "." },
    alsoSee: [
      { before: "Set 1080 or 1200 pixels wide with the", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
      { before: "Check a link preview with the", linkLabel: "Open Graph Preview", href: "/tools/open-graph-preview", after: "." },
      { before: "Learn crop basics in", linkLabel: "How to Crop an Image", href: "/guides/how-to-crop-an-image", after: "." },
    ],
    sources: [
      { label: "Image resolution of photos you share on Instagram (Instagram Help Center)", href: "https://help.instagram.com/1631821640426723" },
      { label: "Images in link shares (Meta for Developers)", href: "https://developers.facebook.com/docs/sharing/webmasters/images/" },
    ],
  },
};

const thumbnail: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-make-a-youtube-thumbnail-that-matches-your-banner",
    title: "How to Make a YouTube Thumbnail That Matches Your Banner",
    primaryKeyword: "youtube thumbnail size",
    secondaryKeywords: ["youtube thumbnail dimensions", "1280 x 720 thumbnail", "youtube thumbnail aspect ratio", "matching channel art", "thumbnail file size limit"],
    toolSlug: "youtube-banner-maker",
    siblingToolSlugs: ["image-resizer", "image-compressor"],
    metaTitle: "YouTube Thumbnail Size and Matching Your Banner",
    metaDescription:
      "YouTube recommends 16:9 thumbnails, at least 640 px wide, in JPG or PNG. Design one on a 2560 × 1440 canvas that matches your banner, then size it to upload.",
    excerpt:
      "Your banner and thumbnails are both 16:9, so you can design them with the same colours, fonts and canvas. This guide covers YouTube’s published thumbnail rules and a matching workflow.",
    relatedArticles: ["how-to-make-a-youtube-banner", "how-to-resize-an-image", "how-to-reduce-image-size-to-100kb"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a YouTube video thumbnail should be 16:9, at least 640 pixels wide, and a JPG or PNG. YouTube’s help page recommends uploading as large as possible, up to 3840 × 2160, with a file limit of 50MB on desktop and 2MB from mobile. Because a YouTube banner is also 16:9 at 2560 × 1440, you can design a matching thumbnail in YouTube Banner Maker using the same template colours and fonts, export it, and resize it with the Image Resizer if you need a smaller file such as 1280 × 720.",
    why:
      "Viewers often see your thumbnails before they ever visit your channel page. When thumbnails share the colours, typeface and logo of your banner, the channel looks consistent and people learn to recognise your videos in a crowded feed. Reusing one canvas size for both saves time and keeps the brand exact.",
    sections: [
      {
        id: "rules",
        heading: "What are YouTube’s thumbnail size and file rules?",
        paragraphs: [
          "YouTube Help says custom thumbnails should be as large as possible because they are also used as the preview in the embedded player. It recommends 3840 × 2160 pixels for videos and 2160 × 3840 for Shorts, with a minimum width of 640 pixels for videos, uploaded as JPG or PNG. For videos it asks for a 16:9 ratio, for Shorts 9:16 and for podcast playlists 1:1.",
          "File limits depend on the device: 2MB for video thumbnails uploaded from mobile, and 50MB on desktop for video, Shorts and podcast thumbnails. Custom thumbnails require a verified account, and Shorts thumbnails can only be added in YouTube Studio on a computer.",
        ],
        table: {
          caption: "YouTube thumbnail rules from YouTube Help",
          headers: ["Item", "Videos", "Shorts"],
          rows: [
            ["Aspect ratio", "16:9", "9:16"],
            ["Recommended size", "3840 × 2160", "2160 × 3840"],
            ["Minimum", "640 pixels wide", "640 pixels tall"],
            ["Formats", "JPG or PNG", "JPG or PNG"],
            ["File limit", "2MB mobile, 50MB desktop", "50MB desktop"],
          ],
        },
      },
      {
        id: "same-shape",
        heading: "Why can a banner canvas be used for a thumbnail?",
        paragraphs: [
          "2560 × 1440 and 1280 × 720 are both exactly 16:9: 2560 ÷ 1440 = 1.777… and so is 1280 ÷ 720. YouTube Banner Maker always exports at 2560 × 1440, so a design made on its canvas is already the right shape for a video thumbnail and is well above the 640-pixel minimum.",
          "The difference is where the important content goes. A banner must keep text inside the narrow 1546 × 423 safe area because phones crop it. A thumbnail is shown whole, so you can use the full canvas: turn off the safe-area guide or ignore it, and make text much larger, filling roughly a third to a half of the height.",
        ],
      },
      {
        id: "workflow",
        heading: "How do I make a matching thumbnail in the banner maker?",
        paragraphs: [
          "Open the template you used for your banner so the background, colours and fonts are identical. Move the channel name out of the way or delete it, add one short headline of three to five words, and drag it large across the canvas. Add a photo layer for your face or the subject of the video; uploaded images stay in your browser and must be under 15MB.",
          "Use the same logo layer in the same corner on every thumbnail. Undo and redo (Ctrl/⌘+Z and Ctrl/⌘+Shift+Z), Duplicate (Ctrl/⌘+D) and arrow-key nudging make it quick to build several variants. When you are happy, download as PNG or JPG. The banner maker keeps exports under 6MB and switches to JPG if a PNG would be too large.",
        ],
      },
      {
        id: "size",
        heading: "Do I need to resize the thumbnail before uploading?",
        paragraphs: [
          "From a computer, usually not: a 2560 × 1440 export under 6MB is well inside the 50MB desktop limit. From a phone, the limit is 2MB, so a large PNG may be refused.",
          "To get under 2MB, open the export in the Image Resizer, keep the ratio locked and set 1280 wide for 1280 × 720, a long-standing common thumbnail size that stays above the minimum. Save as JPG. If it is still too large, lower quality in the Image Compressor and watch the size.",
        ],
      },
      {
        id: "readable",
        heading: "What makes a thumbnail readable at small sizes?",
        paragraphs: [
          "Thumbnails are often shown only a few centimetres wide. Use few words, heavy weights, strong contrast between text and background and one clear focal point. Check your design by zooming the banner maker out until the canvas is about the size of a phone thumbnail. If you cannot read it, neither can viewers.",
          "Avoid putting key text in the bottom-right corner, where YouTube overlays the video length on many layouts.",
        ],
      },
      {
        id: "system",
        heading: "How do I build a simple thumbnail style system?",
        paragraphs: [
          "Decide a few fixed rules and repeat them. Pick one or two brand colours from your banner, one headline font weight, a fixed logo corner and a consistent position for the subject, such as a face on the left third and text on the right. Keeping these the same lets viewers spot your videos at a glance, and it makes every new thumbnail faster to produce.",
          "Vary one thing per video: the headline and the photo. If you run several series, give each series an accent colour while keeping the rest of the system the same. The banner maker’s templates, duplicate shortcut and undo history make this quick, because you can copy a finished design and change only the parts that differ.",
          "Save your final exports with clear names, such as the video title and date, so you can reuse layouts later. The banner maker does not store designs on a server, so the exported file is your record.",
        ],
      },
      {
        id: "test",
        heading: "How can I compare two thumbnail ideas?",
        paragraphs: [
          "Make two versions that differ in one way only, such as the headline or the photo, and look at both side by side at small size next to other thumbnails in your niche. The one you recognise faster is usually the clearer design. YouTube Studio also shows impressions and click-through rate for each video, which gives real data over time; change one element at a time so you know what made the difference.",
        ],
      },
    ],
    stepsHeading: "How do I create a matching thumbnail step by step?",
    steps: [
      { title: "Open your banner template", body: "Start from the same template or saved colours you used for your channel banner." },
      { title: "Use the whole canvas", body: "Ignore the safe-area guide and place a large headline and a subject photo across the 16:9 frame." },
      { title: "Keep brand elements fixed", body: "Put the logo in the same corner and use the same fonts on every thumbnail." },
      { title: "Export", body: "Download as PNG or JPG at 2560 × 1440." },
      { title: "Resize for mobile uploads", body: "If uploading from a phone, resize to 1280 × 720 JPG so the file stays under 2MB, then upload in YouTube Studio." },
    ],
    examples: [
      { title: "Desktop upload", body: "Export a 2560 × 1440 PNG of about 3MB. It is 16:9, above 640 wide and under 50MB, so it can be uploaded as it is." },
      { title: "Mobile upload", body: "The same PNG is over 2MB. Resize to 1280 × 720 JPG; a design with flat colours and text is typically well under 2MB, and the compressor shows the exact size." },
      { title: "A series look", body: "Duplicate the headline layer for episode numbers, keep the background and logo unchanged, and export each episode so the series is instantly recognisable." },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      { heading: "Verification", body: "YouTube allows custom thumbnails only on verified accounts." },
      { heading: "Community Guidelines", body: "YouTube can reject thumbnails and issue strikes for content that breaks its guidelines." },
      { heading: "Vertical videos", body: "YouTube Help notes that vertical videos with 16:9 custom thumbnails may show an auto-generated 4:5 thumbnail on some pages." },
    ],
    faqs: [
      { question: "What size should a YouTube thumbnail be?", answer: "16:9 and as large as possible. YouTube recommends 3840 × 2160 and requires at least 640 pixels wide." },
      { question: "Is 1280 × 720 still a good thumbnail size?", answer: "Yes. It is 16:9 and above the 640-pixel minimum, and it is small enough to stay under the 2MB mobile limit as a JPG." },
      { question: "What file formats can a YouTube thumbnail use?", answer: "YouTube Help lists image formats such as JPG and PNG." },
      { question: "What is the thumbnail file size limit?", answer: "2MB for video thumbnails uploaded from mobile and 50MB from desktop." },
      { question: "Can I export a thumbnail directly from the banner maker?", answer: "Yes. Its 2560 × 1440 canvas is 16:9, so the PNG or JPG export already fits a video thumbnail." },
      { question: "Should I keep thumbnail text inside the banner safe area?", answer: "No. The safe area is for banners. Thumbnails are shown whole, so use the full canvas with large text." },
      { question: "Why can’t I upload a custom thumbnail?", answer: "Custom thumbnails require a verified YouTube account, and limits can depend on channel history." },
      { question: "What size is a Shorts thumbnail?", answer: "YouTube recommends 9:16, such as 2160 × 3840, at least 640 pixels tall, added in YouTube Studio on a computer." },
      { question: "How do I make my thumbnail match my channel art?", answer: "Reuse the same template, colours, fonts and logo position as your banner." },
      { question: "Are my images uploaded when I design a thumbnail?", answer: "No. YouTube Banner Maker runs in your browser and images you add are not uploaded." },
    ],
    faqMax: 10,
    cta: { before: "Design a matching 16:9 thumbnail and banner with the free", linkLabel: "YouTube Banner Maker", href: "/tools/youtube-banner-maker", after: "." },
    alsoSee: [
      { before: "Make a 1280 × 720 copy with the", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
      { before: "Get under 2MB with the", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
      { before: "Plan your banner in", linkLabel: "How to Make a YouTube Banner", href: "/guides/how-to-make-a-youtube-banner", after: "." },
    ],
    sources: [
      { label: "Add custom thumbnails on YouTube (YouTube Help)", href: "https://support.google.com/youtube/answer/72431" },
    ],
  },
};

const pdfEmail: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-reduce-pdf-size-for-email",
    title: "How to Reduce PDF Size for Email Attachments",
    primaryKeyword: "reduce pdf size for email",
    secondaryKeywords: ["pdf too large to email", "compress pdf for gmail", "email attachment size limit", "make pdf smaller", "shrink scanned pdf"],
    toolSlug: "pdf-compressor",
    siblingToolSlugs: ["pdf-splitter", "image-compressor"],
    metaTitle: "Reduce PDF Size for Email Attachments",
    metaDescription:
      "Gmail allows 25MB of attachments on personal accounts. Learn why PDFs get large and how to shrink, split or rebuild one so it fits in an email.",
    excerpt:
      "A PDF too big to attach usually contains large scanned images. This guide explains attachment limits, what each compression level does and when splitting is the better fix.",
    relatedArticles: ["how-to-work-with-pdfs-in-your-browser", "how-to-split-a-pdf", "how-to-convert-images-to-pdf"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: personal Gmail accounts allow 25MB of attachments per message, and work accounts follow limits set by an administrator, so a PDF must fit under the limit of both the sender and the receiver. Open the PDF Compressor, try Balanced first because it keeps text and vector drawings, and compare the output size. If it barely changes, the file is probably full of scanned images; use Strong compression, which turns each page into a JPEG, or split the PDF into parts with the PDF Splitter and send them separately.",
    why:
      "Large attachments bounce, fill mailboxes and are slow to open on phones. Many receiving servers set lower limits than the sender’s, so a 24MB file can leave Gmail and still be rejected by the recipient. Shrinking it before sending avoids the back-and-forth and makes the document easier to read.",
    sections: [
      {
        id: "limits",
        heading: "What is the email attachment size limit?",
        paragraphs: [
          "Gmail Help states that personal Gmail accounts have a 25MB attachment limit, and for work and school accounts the Google Workspace administrator sets sending and receiving limits. If attachments exceed the limit, Gmail replaces them with a Google Drive link. Other services publish their own limits, and company mail servers often accept less.",
          "Email also encodes attachments in a way that adds roughly a third to their size in transit, which is one reason a file close to the limit can still fail. A practical target is well under the limit, for example 10MB or less, which also makes the file kinder to recipients on mobile data.",
        ],
      },
      {
        id: "why-large",
        heading: "Why is my PDF so large?",
        paragraphs: [
          "Text and vector drawings take very little space. Images take a lot. A PDF made by scanning paper or by saving phone photos as pages is mostly full-resolution pictures, often several megabytes per page. Embedded fonts, duplicated images and leftover objects from editing add more.",
          "That is why compression results vary so widely. A 40-page report exported from a word processor may already be compact, while a 6-page scan can be 30MB.",
        ],
      },
      {
        id: "presets",
        heading: "What do the PDF Compressor’s levels do?",
        paragraphs: [
          "The tool offers three levels. Low compression / higher quality rewrites the PDF with object streams; page content stays as text and vectors, and the size often drops only a little. Balanced copies pages into a new PDF and drops unused objects, keeping text and vectors, but compression is not guaranteed. Strong compression renders each page to a JPEG and rebuilds the file; selectable text and vector drawings are replaced by images.",
          "After processing, the result shows the original and output sizes and says whether the file is smaller, larger or a similar size. If the output is not smaller, keep the original.",
        ],
        table: {
          caption: "PDF Compressor levels",
          headers: ["Level", "Keeps selectable text", "Best for", "Page limit"],
          rows: [
            ["Low compression / higher quality", "Yes", "Documents made from text", "80 pages"],
            ["Balanced", "Yes", "Edited or exported PDFs with leftovers", "80 pages"],
            ["Strong compression", "No, pages become images", "Scans and photo-heavy PDFs", "40 pages"],
          ],
        },
        after: "Files can be up to 20MB. Larger or longer PDFs should be split first.",
      },
      {
        id: "split",
        heading: "When is splitting better than compressing?",
        paragraphs: [
          "If a document must keep selectable, searchable text, or if Strong compression makes small print hard to read, splitting is safer. The PDF Splitter can extract page ranges into separate files, so a 30MB application pack can go as three emails of about 10MB each, with clear names like part-1-of-3.",
          "Splitting is also useful when the recipient only needs some pages. Sending pages 1–4 of a contract instead of all 60 is smaller and clearer.",
        ],
      },
      {
        id: "source",
        heading: "Can I make the PDF smaller before it is created?",
        paragraphs: [
          "Yes, and this often works best. If you are building a PDF from photos, resize and compress the photos first, then combine them with the Image to PDF tool. A 4000-pixel phone photo is far more detail than a page on screen needs; around 1500–2000 pixels on the long side keeps text on a document photo readable.",
          "When exporting from a word processor, choose a smaller or standard-quality PDF option if it offers one.",
        ],
      },
      {
        id: "alternatives",
        heading: "What if the PDF still will not fit?",
        paragraphs: [
          "Use a link instead of an attachment. Gmail itself switches large attachments to a Google Drive link, and most email services offer a similar cloud option. A link avoids attachment limits completely, though the recipient needs permission to open it, so check sharing settings before sending.",
          "Another option is to send only what the reader needs. Extract the relevant pages, or convert a long text document into a lean PDF from its source file. For a scanned pack, rescanning at a lower resolution, such as 150 to 200 DPI for ordinary text, often produces a far smaller file than compressing a 600 DPI scan afterwards.",
          "Whatever you do, open the final file before sending. Check that every page is present, in order and readable, especially signatures, stamps and small print. A smaller file that is missing a page or has unreadable figures causes more delay than a large one.",
        ],
      },
      {
        id: "check",
        heading: "How do I check the size before attaching?",
        paragraphs: [
          "The compressor shows the output size after processing. On a computer you can also see file size in your file manager’s details or properties view. Compare it with the limit and remember to add up all attachments, because limits usually apply to the whole message, not to each file.",
        ],
      },
      {
        id: "privacy",
        heading: "Is it safe to compress private documents?",
        paragraphs: [
          "Contracts, IDs and medical letters often end up as email attachments. The PDF Compressor processes the file locally in your browser, so the document is not uploaded to a server for compression. The email you send afterwards is still handled by your mail provider, so follow your organisation’s rules for sending personal or confidential information, and consider a protected sharing link when the document is sensitive.",
        ],
      },
    ],
    stepsHeading: "How do I shrink a PDF for email step by step?",
    steps: [
      { title: "Check the limit", body: "Find the sender and recipient limits and aim well below the lower one." },
      { title: "Try Balanced", body: "Open the PDF Compressor, keep Balanced and process the file. Compare the output size." },
      { title: "Use Strong for scans", body: "If the file is a scan and Balanced barely helps, try Strong and check that small text is still readable." },
      { title: "Split if needed", body: "If it is still too big, or text must stay selectable, extract page ranges with the PDF Splitter." },
      { title: "Send and name clearly", body: "Attach the smaller file or parts, named in order so the recipient knows what to expect." },
    ],
    examples: [
      { title: "A 22MB scanned lease of 12 pages", body: "Balanced shows a similar size because the pages are images. Strong renders each page as a JPEG and typically produces a much smaller file; check signatures and small print before sending." },
      { title: "A 9MB exported report", body: "Balanced keeps the text selectable. If the result is only slightly smaller, the report is probably fine to send as it is, since it is already under common limits." },
      { title: "A 30MB, 50-page photo portfolio", body: "Strong works on up to 40 pages, so split it into two parts first, compress each, and send them as two emails." },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      { heading: "Strong removes text", body: "After Strong compression, text cannot be selected, searched or copied, because each page is an image." },
      { heading: "Protected PDFs", body: "Password-protected files may not open for compression. Remove protection with the owner’s permission first." },
      { heading: "Privacy", body: "The compressor works in your browser and does not post the file to a server." },
    ],
    faqs: [
      { question: "What is Gmail’s attachment size limit?", answer: "25MB for personal accounts. Work and school limits are set by the administrator." },
      { question: "Why did my PDF hardly get smaller?", answer: "It is probably made of scanned images, or it is already compact. Try Strong compression for scans, or split the file." },
      { question: "Does compressing a PDF reduce quality?", answer: "Low and Balanced keep text and vectors. Strong turns pages into JPEG images, which can soften small print." },
      { question: "Will text still be searchable after compression?", answer: "Yes with Low or Balanced. No with Strong, because each page becomes an image." },
      { question: "How large a PDF can the compressor open?", answer: "Up to 20MB. Low and Balanced handle up to 80 pages and Strong up to 40." },
      { question: "What if the output is larger than the original?", answer: "Keep the original. The result clearly shows when the output is larger or a similar size." },
      { question: "Should I split or compress?", answer: "Compress when quality stays acceptable. Split when text must stay selectable or the file is still too big." },
      { question: "Why was my email rejected even under 25MB?", answer: "The recipient’s server may have a lower limit, and attachments grow in transit because of encoding." },
      { question: "How do I make a smaller PDF from phone photos?", answer: "Resize and compress the photos first, then combine them with the Image to PDF tool." },
      { question: "Is my PDF uploaded when I compress it?", answer: "No. Compression runs in your browser and the file is not posted to a server." },
    ],
    faqMax: 10,
    cta: { before: "Make an attachment smaller with the free", linkLabel: "PDF Compressor", href: "/tools/pdf-compressor", after: "." },
    alsoSee: [
      { before: "Send it in parts with the", linkLabel: "PDF Splitter", href: "/tools/pdf-splitter", after: "." },
      { before: "Rebuild a scan from smaller photos with", linkLabel: "Image to PDF", href: "/tools/image-to-pdf", after: "." },
      { before: "Learn page ranges in", linkLabel: "How to Split a PDF", href: "/guides/how-to-split-a-pdf", after: "." },
    ],
    sources: [
      { label: "Send attachments with your Gmail message (Gmail Help)", href: "https://support.google.com/mail/answer/6584" },
    ],
  },
};

export const batch7Guides: ToolGuide[] = [formats, kb100, passport, social, thumbnail, pdfEmail];
