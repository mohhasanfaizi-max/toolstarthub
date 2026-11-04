import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const md5Sha: ToolGuide = {
  article: toolGuideArticle({
    slug: "md5-vs-sha-256",
    title: "MD5 vs SHA-256: Which Hash Should You Use?",
    primaryKeyword: "md5 vs sha256",
    secondaryKeywords: ["is md5 secure", "sha-256 hash", "md5 collision", "difference between md5 and sha256", "checksum sha256"],
    toolSlug: "hash-generator",
    siblingToolSlugs: ["password-generator", "base64-encoder"],
    metaTitle: "MD5 vs SHA-256: Differences and Which Hash to Use",
    metaDescription: "MD5 makes a 128-bit hash with known collision attacks; SHA-256 makes a 256-bit hash and is the safer default. See where MD5 still appears and how to check.",
    excerpt: "MD5 and SHA-256 both turn data into a fixed-length fingerprint, but only one is still trusted for security. This guide explains the differences with real hash values.",
    relatedArticles: ["common-json-errors-and-how-to-fix-them", "regex-cheat-sheet-email-phone-url", "json-vs-xml-vs-yaml"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: use SHA-256. MD5 produces a 128-bit hash (32 hex characters) and has known collision attacks, so RFC 6151 says it is not prudent to use MD5 when collision resistance is required, such as for digital signatures or certificates. SHA-256, defined by NIST in FIPS 180-4, produces a 256-bit hash (64 hex characters) and has no practical collision attack. MD5 still turns up as a quick checksum in older systems, but it should not protect anything an attacker might tamper with. The Hash Generator offers SHA-256, SHA-384 and SHA-512 through the browser's Web Crypto API, and deliberately does not offer MD5.",
    why: "Hashes are used to check downloads, detect duplicate files, sign software and store fingerprints of data. Choosing a weak one can let a forged file pass as genuine. Knowing the difference also helps you read older documentation that still lists MD5 checksums and decide how far to trust them.",
    sections: [
      {
        id: "what",
        heading: "What is a hash function?",
        paragraphs: ["A hash function turns input of any length into a fixed-length output called a digest. The same input always gives the same digest, and a tiny change gives a completely different one. The text hello hashes to 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824 with SHA-256, while Hello, with a capital H, gives 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969.", "A cryptographic hash should make three things impractical: finding an input for a given digest, finding a second input with the same digest as a known one, and finding any two inputs with the same digest. The last property, collision resistance, is the one MD5 has lost."],
      },
      {
        id: "compare",
        heading: "How do MD5 and SHA-256 compare?",
        paragraphs: ["The table shows the main differences. Digest lengths come from the algorithms' definitions; the security status follows RFC 6151 for MD5 and FIPS 180-4 for SHA-256."],
        table: { caption: "MD5 vs SHA-256", headers: ["Property", "MD5", "SHA-256"], rows: [["Digest size", "128 bits", "256 bits"], ["Hex length", "32 characters", "64 characters"], ["Hash of hello", "5d41402abc4b2a76b9719d911017c592", "2cf24dba…938b9824"], ["Collision resistance", "Broken; practical attacks published", "No practical attack known"], ["Standard", "RFC 1321, updated by RFC 6151", "NIST FIPS 180-4"], ["In browser Web Crypto", "Not available", "Available"]] },
      },
      {
        id: "broken",
        heading: "Why is MD5 considered broken?",
        paragraphs: ["Researchers have shown how to build two different inputs with the same MD5 digest. Once collisions can be made on demand, an attacker can prepare a harmless file and a harmful one that share a hash, get the harmless one approved or signed, and swap in the other. RFC 6151 replaced MD5's security considerations for this reason.", "The RFC also notes that the attacks affect some uses more than others. Using MD5 inside HMAC for message authentication was not immediately broken by the published attacks, but new designs should not choose MD5 at all."],
      },
      {
        id: "still",
        heading: "Where is MD5 still used?",
        paragraphs: ["You will still see MD5 checksums next to downloads, in older databases and in tools that detect duplicate files. For catching accidental corruption, such as a file damaged during a copy, MD5 still notices the change. What it cannot do is prove that nobody tampered with the file on purpose.", "If a download page offers both MD5 and SHA-256 values, check the SHA-256 one. If it only offers MD5, treat the check as protection against accidents, and prefer a signed release or an official SHA-256 checksum when the file matters."],
      },
      {
        id: "sha2",
        heading: "What about SHA-384 and SHA-512?",
        paragraphs: ["SHA-384 and SHA-512 belong to the same SHA-2 family as SHA-256, defined in FIPS 180-4. They give longer digests, 96 and 128 hex characters. For most checksums and fingerprints, SHA-256 is the common choice because it is widely supported and its 64-character value is easier to compare.", "MDN's documentation for the Web Crypto digest function lists SHA-1, SHA-256, SHA-384 and SHA-512 as the supported algorithms, and warns that SHA-1 should not be used in cryptographic applications. MD5 is not part of the API, which is why the Hash Generator offers only the SHA-2 options."],
      },
      {
        id: "passwords",
        heading: "Should I hash passwords with MD5 or SHA-256?",
        paragraphs: ["Neither on its own. Both are designed to be fast, which helps attackers try billions of guesses. Passwords should be stored with a slow, salted password-hashing function such as Argon2, bcrypt or scrypt, using a well-maintained library.", "Use SHA-256 for data fingerprints, checksums and building blocks inside protocols, not as a direct password store."],
      },
      {
        id: "verify",
        heading: "How do I compare two hashes reliably?",
        paragraphs: ["Compare the whole value, not just the first and last few characters. Copying both values into a text editor on separate lines, or pasting one into your browser's find box while viewing the other, makes a mismatch easy to spot. Watch for extra spaces or line breaks that slipped in while copying, because the Hash Generator hashes exactly the text you give it, including whitespace.", "If the values differ, do not assume the published hash is wrong. Download the file again from the official source and re-check. A mismatch can mean a corrupted download, a different version of the file, or a file that has been changed. Only use the file once the SHA-256 values match exactly."],
      },
      {
        id: "migrate",
        heading: "How do I move an old system from MD5 to SHA-256?",
        paragraphs: ["Start by listing where MD5 is used and why. Checksums published for downloads can usually switch straight to SHA-256 by publishing the new value alongside the old one for a while. Database columns that store MD5 fingerprints need to grow from 32 to 64 characters and be recalculated from the original data.", "Anything security-related, such as signatures, tokens or certificate fingerprints, should move first, because that is where collisions do real harm. Passwords stored as MD5 hashes need a different plan: re-hash them with a proper password-hashing function when each user next signs in, rather than switching to plain SHA-256.", "Document the change. Anyone verifying files needs to know which algorithm the published value uses, so label checksums clearly, for example SHA-256 followed by the value."],
      },
      {
        id: "lengths",
        heading: "How can I tell which algorithm made a hash?",
        paragraphs: ["The length is the main clue. A 32-character hex value is usually MD5, 40 characters suggests SHA-1, 64 characters suggests SHA-256, 96 characters SHA-384 and 128 characters SHA-512. The length alone cannot prove the algorithm, because other functions share some of these sizes, so check the documentation that came with the value.", "If you have the original data, hash it with each candidate algorithm and see which result matches. This is a quick way to confirm which function a system uses before migrating it."],
      },
    ],
    stepsHeading: "How do I check a file or text with SHA-256?",
    steps: [{"title": "Get the published hash", "body": "Copy the SHA-256 value from the official source, such as the vendor's download page."}, {"title": "Hash your copy", "body": "Paste the text into the Hash Generator and choose SHA-256, or use your operating system's checksum command for a file."}, {"title": "Compare every character", "body": "The two 64-character values must match exactly. One different character means different data."}, {"title": "Do not fall back to MD5 for security", "body": "If only MD5 is offered, treat it as a corruption check, not proof of authenticity."}],
    examples: [{"title": "One letter changes everything", "body": "hello and Hello give completely different SHA-256 values, so even a small edit is obvious."}, {"title": "MD5 checksum on an old download", "body": "5d41402abc4b2a76b9719d911017c592 is the MD5 of hello: it catches corruption but cannot prove the file was not swapped."}, {"title": "Choosing a longer digest", "body": "SHA-512 produces a 128-character value when a protocol or policy asks for it."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Hashing is not encryption", "body": "A hash cannot be reversed to get the input back; encryption is designed to be reversed with a key."}, {"heading": "Encoding matters", "body": "The digest is of the exact bytes. Different line endings or a trailing space give a different hash."}, {"heading": "Case of hex", "body": "Hex digests are usually lowercase, but uppercase and lowercase represent the same value."}, {"heading": "Local processing", "body": "The Hash Generator runs in the browser using Web Crypto."}],
    faqs: [{"question": "Is MD5 still safe for checksums?", "answer": "For spotting accidental corruption it still works. For proving a file has not been deliberately altered, use SHA-256 or a signed release."}, {"question": "How long is a SHA-256 hash?", "answer": "256 bits, written as 64 hexadecimal characters."}, {"question": "How long is an MD5 hash?", "answer": "128 bits, written as 32 hexadecimal characters."}, {"question": "What is a hash collision?", "answer": "Two different inputs that produce the same digest. Practical collisions exist for MD5 but not for SHA-256."}, {"question": "Which SHA-2 variant should I pick?", "answer": "SHA-256 for most uses. Choose SHA-384 or SHA-512 when a protocol, policy or tool specifically asks for the longer digest."}, {"question": "Why doesn't the Hash Generator offer MD5?", "answer": "It uses the browser's Web Crypto API, which supports the SHA family and not MD5, and MD5 should not be used for new security work."}, {"question": "Is SHA-1 better than MD5?", "answer": "SHA-1 also has practical collision attacks and MDN warns against using it in cryptographic applications. Use SHA-256 instead."}, {"question": "Does a longer hash mean more security?", "answer": "Generally a longer digest from a sound algorithm resists collisions better, but the algorithm's design matters as much as the length."}, {"question": "Can two files have the same SHA-256 hash?", "answer": "In theory yes, because the output is fixed-length, but no one has found a SHA-256 collision in practice."}, {"question": "What is HMAC?", "answer": "A way to combine a hash with a secret key to authenticate a message. Modern HMACs use SHA-256 or another SHA-2 function."}],
    faqMax: 10,
    cta: { before: "Generate a SHA-256, SHA-384 or SHA-512 hash in the ", linkLabel: "Hash Generator", href: "/tools/hash-generator", after: "." },
    alsoSee: [{"before": "To create strong passwords, use the ", "linkLabel": "Password Generator", "href": "/tools/password-generator", "after": "."}, {"before": "To encode binary data as text, use the ", "linkLabel": "Base64 Encoder", "href": "/tools/base64-encoder", "after": "."}, {"before": "For data format basics, read ", "linkLabel": "JSON vs XML vs YAML", "href": "/guides/json-vs-xml-vs-yaml", "after": "."}],
    sources: [{"label": "RFC 6151 – Updated Security Considerations for MD5", "href": "https://www.rfc-editor.org/rfc/rfc6151"}, {"label": "MDN – SubtleCrypto: digest() method", "href": "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest"}],
  },
};

const titleLen: ToolGuide = {
  article: toolGuideArticle({
    slug: "title-tag-length",
    title: "Title Tag Length: How Many Characters Does Google Show?",
    primaryKeyword: "title tag length",
    secondaryKeywords: ["meta title length", "seo title length", "how long should a title tag be", "title tag characters", "google title truncation"],
    toolSlug: "meta-tag-generator",
    siblingToolSlugs: ["word-counter", "open-graph-preview"],
    metaTitle: "Title Tag Length: How Many Characters Google Shows",
    metaDescription: "Google sets no character limit for title tags but truncates long titles to fit the screen. Learn a practical length, what to put first and how to write the tag.",
    excerpt: "There is no official character count for title tags. This guide explains what Google actually says, why titles get cut off and how to write ones that survive truncation.",
    relatedArticles: ["open-graph-image-size", "how-to-write-a-url-slug", "how-to-change-text-case"],
    category: "seo-utilities",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: Google does not set a character limit for the title element. Its Search Central documentation says there is no limit on how long a <title> can be, but the title link is truncated in search results as needed, typically to fit the device width. Because the cut-off depends on screen width and the pixel width of the letters, no character count is exact. A practical habit is to keep the important words in roughly the first 50–60 characters, put the main topic first and the brand last, and avoid long boilerplate. Write the tag in the Meta Tag Generator and count it with the Word Counter.",
    why: "The title is often the first thing a searcher reads. If the useful part is cut off, the result looks vague and fewer people click. Understanding how truncation works lets you write titles that read well at any length instead of chasing a magic number.",
    sections: [
      {
        id: "google",
        heading: "What does Google say about title length?",
        paragraphs: ["Google's guide to influencing title links asks for titles that are unique, descriptive and concise. It recommends avoiding vague titles such as Home, avoiding unnecessarily long or verbose text, and avoiding keyword stuffing and repeated boilerplate across pages.", "On length, it is explicit: there is no limit on how long a <title> element can be, but the displayed title link is truncated as needed to fit the device. So a long title is not penalised for its length, but the end of it may not be seen."],
      },
      {
        id: "why-cut",
        heading: "Why do titles get cut off at different lengths?",
        paragraphs: ["Search results have a fixed width, and letters have different widths. A title full of wide capitals such as W and M fills the space faster than one with narrow letters such as i and l. A phone screen also shows less text than a desktop.", "That is why character counts quoted online vary. Treat any number as a guide to where truncation often starts, not a rule. The safest approach is to make sure the first part of the title makes sense on its own."],
      },
      {
        id: "rewrite",
        heading: "Can Google change my title?",
        paragraphs: ["Yes. Google says it looks at several sources, including the <title> element, main headings and other prominent text, when generating a title link. It may choose different text when a title is missing, too long, stuffed with keywords or does not describe the page well.", "You cannot force a title link, but you can make your <title> the best candidate: describe the page accurately, match the main heading and keep it concise."],
      },
      {
        id: "structure",
        heading: "How should I structure a title tag?",
        paragraphs: ["Put the main topic first, then a detail that sets the page apart, then the brand. For example, Title Tag Length: How Many Characters Google Shows puts the search topic first and the question second. Google suggests separating a brand with a delimiter such as a hyphen, colon or pipe.", "Keep titles unique. If many pages share a template, make the part that varies come first, so the pages are easy to tell apart in results and browser tabs."],
        table: { caption: "Title patterns", headers: ["Page type", "Pattern", "Example"], rows: [["Tool page", "Tool name – what it does | Brand", "Word Counter – Count Words and Characters | Tools Star Hub"], ["Guide", "Topic: specific question", "Title Tag Length: How Many Characters Google Shows"], ["Product", "Product name, key spec – Brand", "Name, size and colour – Store name"], ["Home page", "Brand: what the site offers", "Brand: short description of the site"]] },
      },
      {
        id: "count",
        heading: "How do I check the length of my title?",
        paragraphs: ["Paste the title into the Word Counter to see the character count, including spaces. Read the first 50 or so characters on their own and ask whether they still describe the page. If not, move the important words forward.", "The Meta Tag Generator accepts a title of up to 200 characters and writes the <title> element along with the description, canonical, robots and Open Graph tags, so you can copy one ready-made block into your page head."],
      },
      {
        id: "description",
        heading: "How long should the meta description be?",
        paragraphs: ["Meta descriptions are also truncated to fit the screen, and Google may show a different snippet drawn from the page. Write a clear summary of the page in a sentence or two, with the most useful detail first. The Meta Tag Generator accepts descriptions up to 500 characters, but shorter, specific summaries are easier to read in results."],
      },
      {
        id: "mistakes",
        heading: "What are common title tag mistakes?",
        paragraphs: ["The most common problems are the ones Google lists: titles that are missing, vague, very long or repeated across many pages. A site that gives every page the same title, or the same long brand slogan, makes its results hard to tell apart, and Google is more likely to choose its own text.", "Keyword stuffing is another frequent issue: repeating the same phrase or listing many variations in one title. It reads badly to people and does not help. Write the title for the person scanning the results page, using the words they would use, once.", "Finally, check that the title matches the page. If the title promises a calculator and the page is an article, or the title mentions last year's date on a page that has been updated, searchers may skip it or leave quickly."],
      },
      {
        id: "tabs",
        heading: "Where else does the title appear?",
        paragraphs: ["The same <title> appears in browser tabs, bookmarks and history, and is often used as the default text when someone shares a link without Open Graph tags. In a crowded tab bar only the first few words are visible, which is another reason to put the distinguishing words first.", "Social platforms usually prefer og:title when it exists. The Meta Tag Generator writes both from the same title field by default, so they stay consistent unless you choose to give the social title a different wording. You can check the shared result with the Open Graph Preview once the page is live.", "When you update an old page, review its title too. Titles written years ago often carry dated wording, a different product name or a year that no longer applies. A fresh, accurate title that matches the current page is one of the simplest improvements you can make, and it costs nothing to change."],
      },
    ],
    stepsHeading: "How do I write a good title tag?",
    steps: [{"title": "Name the topic", "body": "Start with the words a searcher would use for this page."}, {"title": "Add a distinguishing detail", "body": "A question, number or benefit that separates this page from similar ones."}, {"title": "Add the brand last", "body": "Use a hyphen, colon or pipe before the brand name, or skip it if the title is already long."}, {"title": "Generate the tag", "body": "Enter the title in the Meta Tag Generator and copy the HTML into the page head."}],
    examples: [{"title": "Vague", "body": "Home – a title that tells searchers nothing about the page."}, {"title": "Too long", "body": "A title listing every keyword and city, which gets truncated and may be rewritten."}, {"title": "Clear", "body": "Title Tag Length: How Many Characters Google Shows – topic first, question second, readable when cut."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "No official number", "body": "Google states there is no length limit; truncation depends on the device."}, {"heading": "Match the heading", "body": "Keep the title consistent with the page's main heading."}, {"heading": "One title per page", "body": "Every page should have its own unique <title>."}, {"heading": "Language", "body": "Write the title in the same language and script as the page content."}],
    faqs: [{"question": "Is there a maximum title tag length for SEO?", "answer": "Google says there is no limit on the <title> element, though it truncates the displayed title to fit the screen."}, {"question": "Why do SEO tools say 60 characters?", "answer": "It is a rule of thumb for where truncation often starts on desktop. It is not an official limit."}, {"question": "Does a long title hurt rankings?", "answer": "Google does not state a length penalty, but long, keyword-stuffed titles are more likely to be rewritten or cut off."}, {"question": "Should the brand go first or last?", "answer": "Usually last, so the page topic is read first. A home page is an exception where the brand naturally leads."}, {"question": "What separator should I use before the brand?", "answer": "Google mentions a hyphen, colon or pipe. Pick one and use it consistently."}, {"question": "Is the title tag the same as the H1?", "answer": "No. The title goes in the page head and appears in search results and tabs; the H1 is the main heading on the page. They should agree."}, {"question": "Does Google use the og:title tag?", "answer": "Google lists several sources it can use for title links. Open Graph titles are mainly for social sharing previews."}, {"question": "How do I count pixels instead of characters?", "answer": "There is no single pixel limit published by Google, so test by reading the first part of the title and checking it in results after indexing."}, {"question": "Should every page have a different title?", "answer": "Yes. Google recommends unique titles so results for different pages are easy to tell apart."}, {"question": "Can I put emojis in a title tag?", "answer": "You can, but they may not display and take up space. Use them only if they genuinely help."}],
    faqMax: 10,
    cta: { before: "Write your title, description and social tags in the ", linkLabel: "Meta Tag Generator", href: "/tools/meta-tag-generator", after: "." },
    alsoSee: [{"before": "To count characters, use the ", "linkLabel": "Word Counter", "href": "/tools/word-counter", "after": "."}, {"before": "To check social previews, read ", "linkLabel": "Open Graph image size", "href": "/guides/open-graph-image-size", "after": "."}, {"before": "To write the page URL, read ", "linkLabel": "how to write a URL slug", "href": "/guides/how-to-write-a-url-slug", "after": "."}],
    sources: [{"label": "Google Search Central – Influencing your title links in search results", "href": "https://developers.google.com/search/docs/appearance/title-link"}],
  },
};

const ogImage: ToolGuide = {
  article: toolGuideArticle({
    slug: "open-graph-image-size",
    title: "Open Graph Image Size: 1200 × 630 and How to Test Your Preview",
    primaryKeyword: "og image size",
    secondaryKeywords: ["open graph image size", "facebook link preview image size", "og:image dimensions", "1200x630 image", "1.91:1 aspect ratio"],
    toolSlug: "open-graph-preview",
    siblingToolSlugs: ["meta-tag-generator", "image-resizer"],
    metaTitle: "Open Graph Image Size: 1200 × 630 and How to Test It",
    metaDescription: "Use an og:image of at least 1200 × 630 pixels at a 1.91:1 ratio and under 8 MB, as Meta recommends. Learn how to add the tag and test your link preview.",
    excerpt: "The image that appears when someone shares your link comes from the og:image tag. This guide covers the recommended size, file limits and how to check what your page shows.",
    relatedArticles: ["title-tag-length", "instagram-and-facebook-image-sizes", "webp-vs-png-vs-jpg"],
    category: "seo-utilities",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: make your Open Graph image 1200 × 630 pixels. Meta's sharing documentation for Facebook says to use images of at least 1200 × 630 pixels for the best display on high-resolution devices, at least 600 × 315 pixels as a minimum for larger link previews, and to keep close to a 1.91:1 aspect ratio to avoid cropping. The absolute minimum is 200 × 200 pixels and the file must not exceed 8 MB. Point the og:image tag at an absolute https URL, then check the result with the Open Graph Preview, which reads the title, description, image and Twitter card from a public page.",
    why: "A link with a clear image stands out in feeds and chats; a link with a missing or cropped image looks broken. Getting the size and tag right once means every share of the page shows the picture you chose.",
    sections: [
      {
        id: "what",
        heading: "What is an Open Graph image?",
        paragraphs: ["The Open Graph protocol, described at ogp.me, lets a page describe itself with meta tags such as og:title, og:type, og:image and og:url. Social platforms and chat apps read these tags when a link is shared and build a preview card.", "og:image holds the address of the picture for that card. If it is missing, a platform may pick another image from the page or show none at all."],
      },
      {
        id: "size",
        heading: "What size should the image be?",
        paragraphs: ["Meta's Facebook guidance gives clear numbers, summarised below. Other platforms publish their own rules and can crop differently, so 1200 × 630 at 1.91:1 is a sensible shared starting point rather than a universal guarantee."],
        table: { caption: "Facebook og:image guidance (Meta for Developers)", headers: ["Requirement", "Value"], rows: [["Recommended size", "At least 1200 × 630 pixels"], ["Minimum for large previews", "600 × 315 pixels"], ["Absolute minimum", "200 × 200 pixels"], ["Aspect ratio", "As close to 1.91:1 as possible"], ["Maximum file size", "8 MB"]] },
      },
      {
        id: "safe",
        heading: "How do I keep important content from being cropped?",
        paragraphs: ["Keep text and logos away from the edges. Different apps show the card at different sizes and some crop to a square or a slightly different ratio, so a centred design with a margin around the key content holds up best.", "Use large, short text. A preview is often shown at a few hundred pixels wide on a phone, so fine print disappears. A headline of a few words and a clear visual work better than a full paragraph."],
      },
      {
        id: "tag",
        heading: "How do I add the og:image tag?",
        paragraphs: ["Add a meta tag in the page head: <meta property=\"og:image\" content=\"https://www.example.com/share.jpg\">. Use an absolute https URL, because the platform fetches the image from its own servers and cannot resolve a relative path.", "The Meta Tag Generator writes og:image alongside og:title, og:description, og:url and og:type, plus optional Twitter card tags, so all the sharing tags are created together. Make sure the image URL is public and not blocked by a login or firewall."],
      },
      {
        id: "test",
        heading: "How do I test the preview?",
        paragraphs: ["Enter the page's public URL in the Open Graph Preview and press Check preview. It requests the page, reads up to 512 KiB, and shows the title, description, image address and Twitter card it found, along with the final address after any redirects.", "If a field says Not found, the tag is missing from the HTML the server returns. The tool stops after 8 seconds and rejects private or local addresses, so test the live public page rather than a local development server. A listed image may still fail to display if the image host blocks outside requests."],
      },
      {
        id: "cache",
        heading: "Why does an old image still show after I changed it?",
        paragraphs: ["Platforms cache previews. Meta's documentation explains that its crawler fetches and caches the image the first time content is shared, so a changed image may not appear straight away for a URL that has already been shared.", "Giving the new image a new file name makes the change clear to any cache. Some platforms also offer their own debugging tools to refresh a cached preview."],
      },
      {
        id: "format",
        heading: "Which file format should I use for the share image?",
        paragraphs: ["JPG is a good choice for photographs because it keeps files small. PNG suits graphics with sharp text, logos and flat colours, because it avoids the blurry edges JPG compression can add around letters. Whichever you choose, keep the file comfortably under the 8 MB limit; a share image of a few hundred kilobytes loads faster for crawlers and for people on slow connections.", "Export at exactly 1200 × 630 pixels rather than relying on the platform to scale a much larger image. If your design tool exports at double size for high-density screens, resize it down before uploading, then check the result is still sharp at the size it will appear in a feed."],
      },
      {
        id: "extra",
        heading: "What other image tags can help?",
        paragraphs: ["The Open Graph protocol defines optional structured properties for images, such as og:image:width, og:image:height and og:image:alt. Width and height let a platform know the size before it downloads the file, and alt text describes the image for people who cannot see it. These are optional, but they cost little to add.", "If your page has several og:image tags, platforms may choose the first one or let the person sharing pick. For predictable results, give each page one main image."],
      },
      {
        id: "checklist",
        heading: "What should I check before publishing?",
        paragraphs: ["Before a page goes live, confirm that the image URL opens in a private browser window without signing in, that the file is the size you expect, and that the page's HTML includes og:image, og:title and og:description. Then run the public address through the Open Graph Preview and compare the fields it found with what you intended.", "If the preview shows Not found for a tag you added, the page may be serving a cached version or the tag may be added by JavaScript after load. Crawlers usually read the HTML the server sends, so make sure the tags are in that HTML.", "Repeat the check whenever you redesign the page template, change the image host or move the site to a new domain. These changes often break image URLs without anyone noticing, because the page itself still looks fine in a browser. A quick test with the preview tool after each change catches the problem before people start sharing broken links."],
      },
    ],
    stepsHeading: "How do I set up a share image?",
    steps: [{"title": "Design at 1200 × 630", "body": "Create the image at 1.91:1 with key content in the centre."}, {"title": "Save and resize", "body": "Export as JPG or PNG under 8 MB. Use the Image Resizer to hit the exact size."}, {"title": "Add the tags", "body": "Generate og:image and related tags in the Meta Tag Generator and add them to the page head."}, {"title": "Check the live page", "body": "Run the public URL through the Open Graph Preview and confirm the image address and text."}],
    examples: [{"title": "Standard share card", "body": "1200 × 630 pixels, 1.91:1, headline in the centre third."}, {"title": "Small image", "body": "A 400 × 400 logo meets the 200 × 200 minimum but is below 600 × 315, so it may appear as a small thumbnail rather than a large card."}, {"title": "Relative path", "body": "content=\"/share.jpg\" may not load for crawlers; use the full https URL."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Platforms differ", "body": "Only Facebook's published numbers are shown here; check each platform's own documentation."}, {"heading": "Public URL only", "body": "The preview tool and social crawlers cannot reach local or private addresses."}, {"heading": "File type", "body": "JPG suits photos and PNG suits graphics with text; keep the file small enough to load quickly."}, {"heading": "Twitter card fields", "body": "The preview tool also reports twitter:card and related tags if the page has them."}],
    faqs: [{"question": "What is the best og:image size?", "answer": "1200 × 630 pixels, which meets Meta's recommendation for Facebook and keeps the 1.91:1 ratio."}, {"question": "What is the minimum og:image size?", "answer": "Meta lists 200 × 200 pixels as the minimum allowed, and 600 × 315 as the minimum for larger link previews."}, {"question": "What is the maximum file size for an og:image?", "answer": "Meta's documentation says the image file must not exceed 8 MB."}, {"question": "Can I use a square image?", "answer": "You can, but on Facebook a square image may be cropped or shown small. A 1.91:1 image displays fully."}, {"question": "Should the og:image URL be absolute?", "answer": "Yes. Use a full https address so crawlers can fetch it."}, {"question": "Can I use WebP for og:image?", "answer": "Support varies by platform. JPG and PNG are the safest choices for share images."}, {"question": "Why is my preview showing the wrong image?", "answer": "The tag may be missing, the image blocked, or the platform may be showing a cached version from an earlier share."}, {"question": "Do I need a different image for each page?", "answer": "Not required, but page-specific images make shared links easier to recognise."}, {"question": "Does the Open Graph Preview show the image itself?", "answer": "It shows the image address and fields it found; the image host may still block display."}, {"question": "What does 1.91:1 mean?", "answer": "The width is 1.91 times the height, for example 1200 × 630 or 600 × 315."}],
    faqMax: 10,
    cta: { before: "Check what your page shares with the ", linkLabel: "Open Graph Preview", href: "/tools/open-graph-preview", after: "." },
    alsoSee: [{"before": "To write the tags, use the ", "linkLabel": "Meta Tag Generator", "href": "/tools/meta-tag-generator", "after": "."}, {"before": "To size the image, use the ", "linkLabel": "Image Resizer", "href": "/tools/image-resizer", "after": "."}, {"before": "For post image sizes, read ", "linkLabel": "Instagram and Facebook image sizes", "href": "/guides/instagram-and-facebook-image-sizes", "after": "."}],
    sources: [{"label": "Meta for Developers – Images in link shares", "href": "https://developers.facebook.com/docs/sharing/webmasters/images/"}, {"label": "The Open Graph protocol", "href": "https://ogp.me/"}],
  },
};

const qrDynamic: ToolGuide = {
  article: toolGuideArticle({
    slug: "dynamic-vs-static-qr-codes",
    title: "Dynamic QR Codes vs Static QR Codes: What Is the Difference?",
    primaryKeyword: "dynamic vs static qr code",
    secondaryKeywords: ["static qr code", "dynamic qr code", "do qr codes expire", "can you edit a qr code", "free qr code that never expires"],
    toolSlug: "qr-code-generator-pro",
    siblingToolSlugs: ["qr-code-generator", "url-parser"],
    metaTitle: "Dynamic vs Static QR Codes: Differences, Pros and Cons",
    metaDescription: "A static QR code stores its content directly and never expires; a dynamic one stores a short link a service redirects. Learn which to use before you print.",
    excerpt: "Static and dynamic QR codes scan the same way but work differently behind the scenes. This guide explains how each one works, when each makes sense and what to check before printing.",
    relatedArticles: ["how-to-make-a-qr-code", "how-to-make-a-custom-qr-code", "how-to-write-a-url-slug"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: a static QR code stores its content, such as a URL, Wi-Fi details or a contact card, directly in the pattern. It works without any service, never expires and cannot be changed after printing. A dynamic QR code stores a short redirect link run by a QR service; the service sends scanners to a destination you can edit later and can count scans, but the code stops working if the service, subscription or domain ends. Use static codes for fixed content and anything you want to keep working for years. The QR Code Generator Pro makes static codes for text, URLs, Wi-Fi, email, phone, SMS and vCard contacts, with colour and error-correction controls.",
    why: "QR codes end up on packaging, posters, menus and business cards that cannot be reprinted cheaply. Choosing the wrong type can mean a code that breaks when a subscription lapses, or one you cannot update when a link changes. Understanding the trade-off before printing avoids both problems.",
    sections: [
      {
        id: "static",
        heading: "How does a static QR code work?",
        paragraphs: ["A QR code is a pattern that encodes data. In a static code, the data is the final content. A Wi-Fi code, for example, contains text such as WIFI:T:WPA;S:Cafe;P:Password;; and a phone's camera reads it directly to join the network. A URL code contains the full address.", "Because nothing sits between the scanner and the content, a static code keeps working as long as the content is valid: the Wi-Fi password is unchanged, or the web page still exists at that address. There is no account, no scan limit and no expiry."],
      },
      {
        id: "dynamic",
        heading: "How does a dynamic QR code work?",
        paragraphs: ["A dynamic code is technically a static code too: it contains a short URL on the QR service's domain. When someone scans it, the service looks up where that short link should go and redirects the browser. You change the destination in the service's dashboard without changing the printed code.", "Because every scan passes through the service, it can record counts, times and rough locations. That is useful for marketing, but it also means the service sees each scan, and the code depends on the service staying online."],
      },
      {
        id: "compare",
        heading: "How do static and dynamic QR codes compare?",
        paragraphs: ["The main differences are summarised below."],
        table: { caption: "Static vs dynamic QR codes", headers: ["Feature", "Static", "Dynamic"], rows: [["Content stored in code", "The content itself", "A short redirect link"], ["Edit after printing", "No", "Yes, in the service dashboard"], ["Expiry", "Never expires", "Stops if the service or plan ends"], ["Scan tracking", "No", "Usually yes"], ["Works offline", "Yes for text, Wi-Fi and contacts", "Needs internet for the redirect"], ["Cost", "Free to create", "Often a subscription"], ["Privacy", "No third party sees scans", "Service logs each scan"]] },
      },
      {
        id: "edit",
        heading: "Can I update a static code without reprinting?",
        paragraphs: ["Not the code itself, but you can plan for change. If you encode a URL on your own domain, such as a dedicated page for a product or event, you can later change what that page shows or redirect it on your own server. You get the flexibility of a dynamic code without relying on a QR service.", "Choose a short, stable address with a clear slug, and keep the domain registered. The shorter the URL, the less data the code holds and the simpler the pattern, which makes it easier to scan."],
      },
      {
        id: "capacity",
        heading: "How much can a static code hold?",
        paragraphs: ["QR codes come in 40 versions of increasing size, as Denso Wave, the inventor of the QR code, explains. More data means a denser pattern. The QR Code Generator Pro keeps encoded text to 1,200 characters so codes stay readable.", "Error correction adds redundancy so a code still scans when partly dirty or damaged. Denso Wave describes four levels; the tool offers all four, L, M, Q and H, from lowest to highest, and starts on M (15%), which Denso Wave says is the level most often selected. Higher levels make the pattern denser, so balance damage resistance against size."],
      },
      {
        id: "safety",
        heading: "Are dynamic QR codes riskier to scan?",
        paragraphs: ["For scanners, any QR code that opens a link should be checked like any other link: look at the address the phone shows before opening it. A redirect hides the final destination until the scan, which is why some people prefer codes that show a recognisable domain.", "For owners, the main risk is losing control. If the service closes, changes its pricing or the account is lost, every printed dynamic code can stop working or be pointed elsewhere."],
      },
      {
        id: "choose",
        heading: "Which type should I choose?",
        paragraphs: ["Choose a static code when the content is fixed or when you want the code to keep working without any account: Wi-Fi details, contact cards, phone numbers, plain text and links to pages you control. Static codes also suit anything printed in large quantities or kept for years, such as product packaging, equipment labels and signs.", "A dynamic code can make sense for a short campaign where you expect to change the destination often and want scan counts, and where you accept paying for the service while the code is in use. Before buying, check what happens to codes when the plan ends, whether you can export or redirect them, and who owns the short-link domain.", "Many people get most of the benefit by combining the two ideas: a static code pointing at a short page on their own website. They can update that page or redirect it themselves, and their own analytics show how many visits came from the code."],
      },
      {
        id: "print",
        heading: "What should I check before printing a QR code?",
        paragraphs: ["Scan the downloaded PNG with at least two different phones, from the distance people will actually stand. Print a test copy at the final size, because a code that scans on screen can fail when printed small or on a glossy surface.", "Keep the quiet zone, the blank margin around the code, intact; the generator lets you set it. Use dark modules on a light background with strong contrast, and avoid placing the code over a busy photo. If a logo will cover part of the code, choose a higher error-correction level and test again."],
      },
      {
        id: "content",
        heading: "What content types can a static code hold?",
        paragraphs: ["The QR Code Generator Pro covers the common types: plain text or a URL, Wi-Fi network details, an email with a pre-filled subject and body, a phone number to call, an SMS with a pre-filled message and a vCard 3.0 contact card. Each is formatted so phone cameras recognise it and offer the right action, such as joining the network or saving the contact."],
      },
    ],
    stepsHeading: "How do I create a static QR code that lasts?",
    steps: [{"title": "Pick the type", "body": "In the QR Code Generator Pro choose text/URL, Wi-Fi, email, phone, SMS or contact."}, {"title": "Enter stable content", "body": "Use a URL you control or details that will not change soon."}, {"title": "Set colours and error correction", "body": "Keep strong contrast; choose M for most uses or Q/H for codes that may get dirty."}, {"title": "Download and test", "body": "Download the PNG and scan it with several phones before printing."}],
    examples: [{"title": "Café Wi-Fi", "body": "A static Wi-Fi code lets guests join without typing the password; reprint only if the password changes."}, {"title": "Business card", "body": "A static vCard code saves your contact details directly, even without internet."}, {"title": "Marketing poster", "body": "A static code to a page on your own domain lets you update the page without reprinting the poster."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Static codes do not expire", "body": "The pattern itself has no expiry date; only the content it points to can go out of date."}, {"heading": "Check the destination", "body": "A static URL code breaks if the web page is removed."}, {"heading": "Contrast matters", "body": "Dark modules on a light background scan most reliably."}, {"heading": "Privacy", "body": "Static codes are generated in the browser and contents are not stored by the tool."}],
    faqs: [{"question": "Do static QR codes expire?", "answer": "No. The content is stored in the pattern, so the code keeps working as long as that content is valid."}, {"question": "Do dynamic QR codes expire?", "answer": "They work only while the redirect service runs them. If a subscription ends or the service shuts down, they can stop working."}, {"question": "Can I track scans of a static QR code?", "answer": "Not from the code itself. If it links to your website, your site's analytics can count visits to that page."}, {"question": "Can I change where a static QR code goes?", "answer": "Not the encoded address, but you can change or redirect the page at that address if you control the domain."}, {"question": "Are dynamic QR codes free?", "answer": "Some services offer free tiers, but many charge for editing, tracking or keeping codes active."}, {"question": "Can a Wi-Fi QR code be dynamic?", "answer": "Not in practice. Wi-Fi codes are read directly by the phone, so they need the network details stored in the code."}, {"question": "Does the QR Code Generator Pro make dynamic codes?", "answer": "No. It makes static codes, so there is no service in between and nothing to expire."}, {"question": "Which error-correction level should I use?", "answer": "M suits most printed codes. Choose Q or H for codes that may be dirty, damaged or have a logo placed over them."}, {"question": "Why is my QR code hard to scan?", "answer": "Too much data, low contrast, a small print size or a missing quiet zone are the usual causes."}, {"question": "Do I need internet to scan a static code?", "answer": "Not for text, Wi-Fi or contact codes. A URL code needs internet to open the page."}],
    faqMax: 10,
    cta: { before: "Create a static QR code with colour and error-correction controls in the ", linkLabel: "QR Code Generator Pro", href: "/tools/qr-code-generator-pro", after: "." },
    alsoSee: [{"before": "For a basic URL code, read ", "linkLabel": "how to make a QR code", "href": "/guides/how-to-make-a-qr-code", "after": "."}, {"before": "To style your code, read ", "linkLabel": "how to make a custom QR code", "href": "/guides/how-to-make-a-custom-qr-code", "after": "."}, {"before": "To check a link before encoding it, use the ", "linkLabel": "URL Parser", "href": "/tools/url-parser", "after": "."}],
    sources: [{"label": "Denso Wave – QR Code error correction feature", "href": "https://www.qrcode.com/en/about/error_correction.html"}, {"label": "Denso Wave – Information capacity and versions of QR Code", "href": "https://www.qrcode.com/en/about/version.html"}],
  },
};

const speechWpm: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-many-words-is-a-5-minute-speech",
    title: "How Many Words Is a 5-Minute Speech?",
    primaryKeyword: "words per minute speech",
    secondaryKeywords: ["how many words in a 5 minute speech", "speaking rate words per minute", "how long is a 1000 word speech", "presentation words per minute", "speech length calculator"],
    toolSlug: "word-counter",
    siblingToolSlugs: ["percentage-calculator", "case-converter"],
    metaTitle: "How Many Words Is a 5-Minute Speech? (Words per Minute)",
    metaDescription: "A 5-minute speech is roughly 500–800 words, depending on pace. See a words-per-minute table for 1 to 20 minutes and learn how to time your own speaking rate.",
    excerpt: "Speaking pace decides how many words fit in a time slot. This guide gives typical words-per-minute ranges, a table for 1 to 20 minutes and a way to time your own pace.",
    relatedArticles: ["title-tag-length", "how-to-change-text-case", "how-to-remove-extra-spaces-from-text"],
    category: "text-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: a 5-minute speech is usually about 500 to 800 words. Slide presentations tend to run at about 100–125 words per minute, which gives 500–625 words in five minutes, while audiobooks are recommended at 150–160 words per minute, which gives 750–800. Most speakers land somewhere between. To size your own speech, count the draft in the Word Counter, read one minute aloud at your natural pace, then divide the word count by your words per minute. Note that the Word Counter's reading time uses 225 words per minute for silent reading, which is faster than speaking.",
    why: "Wedding toasts, conference talks, class presentations and video scripts all come with a time limit. Writing too much leads to rushing or cutting lines on the spot. Writing to a word budget, based on your real pace, makes the delivery calmer and keeps you on time.",
    sections: [
      {
        id: "rates",
        heading: "What is a typical speaking rate?",
        paragraphs: ["Speaking rates vary by person, language and situation. The figures below are summarised in Wikipedia's words-per-minute article, with references: audiobooks are recommended at 150–160 words per minute, the range people comfortably hear and say words, and slide presentations tend to be closer to 100–125 words per minute.", "Reading aloud from a text can be faster. Research cited in the same article measured an average of 184 ± 29 words per minute for reading aloud across 17 languages. A speech for an audience usually needs pauses, emphasis and time for slides, so it runs slower than plain reading."],
      },
      {
        id: "table",
        heading: "How many words fit in each time slot?",
        paragraphs: ["Multiply the minutes by a speaking rate. The table uses three common paces: a slow, presentation pace of 110 words per minute, a moderate pace of 130 and a brisk, audiobook-like pace of 155."],
        table: { caption: "Approximate speech length by time", headers: ["Minutes", "At 110 wpm", "At 130 wpm", "At 155 wpm"], rows: [["1", "110", "130", "155"], ["2", "220", "260", "310"], ["3", "330", "390", "465"], ["5", "550", "650", "775"], ["7", "770", "910", "1,085"], ["10", "1,100", "1,300", "1,550"], ["15", "1,650", "1,950", "2,325"], ["20", "2,200", "2,600", "3,100"]] },
      },
      {
        id: "own",
        heading: "How do I find my own words per minute?",
        paragraphs: ["Choose a passage of your draft, set a timer for one minute and read it aloud as you would on the day, with pauses. Mark where you stopped and count those words with the Word Counter. That number is your words per minute.", "Repeat it two or three times and take the average, because the first reading is often faster or slower than usual. Then divide your full draft's word count by that rate to get the speaking time, or multiply your time limit by the rate to get a word budget."],
      },
      {
        id: "reading",
        heading: "Why is the Word Counter's reading time shorter than my speech?",
        paragraphs: ["The Word Counter estimates reading time at 225 words per minute and rounds up to whole minutes, so any text up to 225 words shows 1 minute and 226 words shows 2. That suits silent reading of an article or email.", "Speaking is slower. A 650-word speech shows 3 minutes of reading time but takes about 5 minutes to deliver at 130 words per minute. Use the word count, not the reading time, when you plan a talk."],
      },
      {
        id: "adjust",
        heading: "What changes how long a speech takes?",
        paragraphs: ["Pauses for laughter or applause, audience questions, slide transitions, demonstrations and stories with dialogue all add time. Nervous speakers often speed up, so a speech that took five minutes in practice can take four on stage.", "Leave a margin. Aim for about 90 percent of your time limit, so a 5-minute slot gets a script that runs about four and a half minutes at your measured pace. If you need to cut, remove whole points rather than speeding up."],
      },
      {
        id: "formats",
        heading: "How long should common speeches be?",
        paragraphs: ["Event organisers usually set the limit, so ask first. As a planning guide, convert the limit into words using your pace: a 3-minute toast at 130 words per minute is about 390 words, and a 10-minute talk is about 1,300. Short events often favour fewer, stronger points over a longer script."],
      },
      {
        id: "script",
        heading: "Should I write a full script or notes?",
        paragraphs: ["A full script makes timing easy because you can count every word, but reading it word for word can sound flat. Many speakers write the full script to plan the length, rehearse it until they know it well, then speak from short notes on the day. The word count still guides the length, even if the final wording changes.", "If you do use notes, time several run-throughs. Speaking from notes often adds extra words and asides, so a talk planned at 650 words may run closer to 700 in practice. Trim the script until your rehearsals fit comfortably inside the limit."],
      },
      {
        id: "video",
        heading: "Does the same rule work for video scripts?",
        paragraphs: ["Yes. Voiceovers and video scripts are planned the same way: measure your recorded pace, multiply by the target length and leave room for pauses and on-screen moments without narration. A 60-second video at 150 words per minute holds about 150 words, but if several seconds show a product or a title card with no voice, the script needs fewer.", "Record a quick test and check its length before polishing the script. Hearing it back also shows where long sentences make you rush or stumble."],
      },
      {
        id: "languages",
        heading: "Do speaking rates differ between languages?",
        paragraphs: ["They do. Languages pack different amounts of meaning into a word, so words per minute is not directly comparable across languages. The reading-aloud study summarised on Wikipedia measured rates in 17 languages and found clear differences between them. If you speak in a language other than English, measure your own pace in that language rather than relying on English figures."],
      },
      {
        id: "slides",
        heading: "How many slides fit in a five-minute talk?",
        paragraphs: ["There is no fixed rule, because some slides need a sentence and others need a minute of explanation. A practical way to plan is to give each main point a word budget rather than a slide count. If a five-minute talk at 120 words per minute has about 600 words and three main points, each point gets around 170 words after a short opening and closing.", "Then rehearse with the slides, not just the script. Clicking through, pointing at a chart or waiting for an animation all add seconds, and those seconds add up quickly in a short talk. If rehearsal runs long, remove a slide rather than talking faster."],
      },
    ],
    stepsHeading: "How do I write a speech to a time limit?",
    steps: [{"title": "Measure your pace", "body": "Read one minute aloud and count the words in the Word Counter."}, {"title": "Set a word budget", "body": "Multiply the time limit by your words per minute, then take about 90 percent."}, {"title": "Draft and count", "body": "Write the speech and check the total in the Word Counter as you edit."}, {"title": "Rehearse with a timer", "body": "Read the full speech aloud and adjust until it fits with a little room to spare."}],
    examples: [{"title": "Five-minute class presentation", "body": "At 120 wpm, five minutes is 600 words; aim for about 540 to leave room for slides."}, {"title": "Three-minute wedding toast", "body": "At 130 wpm, three minutes is 390 words; about 350 allows for laughter."}, {"title": "A 1,000-word script", "body": "At 130 wpm it takes about 7 minutes 40 seconds; at 155 wpm about 6 minutes 27 seconds."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Rates vary", "body": "Published ranges are averages; your own measured pace is the best guide."}, {"heading": "Reading time is not speaking time", "body": "The Word Counter's reading time uses 225 words per minute."}, {"heading": "Count spoken words", "body": "Remove stage directions and slide notes before counting."}, {"heading": "Rehearse aloud", "body": "Silent reading of your draft will underestimate the time."}],
    faqs: [{"question": "How many words is a 3-minute speech?", "answer": "About 330 to 465 words, depending on pace. At 130 words per minute it is about 390."}, {"question": "How many words is a 10-minute speech?", "answer": "About 1,100 to 1,550 words, or roughly 1,300 at 130 words per minute."}, {"question": "How long is a 500-word speech?", "answer": "About 3 to 4.5 minutes: roughly 3 minutes 14 seconds at 155 wpm and 4 minutes 33 seconds at 110 wpm."}, {"question": "How long does a 1,000-word speech take?", "answer": "About 6.5 to 9 minutes, depending on pace."}, {"question": "What is a good speaking pace for presentations?", "answer": "Wikipedia's summary puts slide presentations at about 100–125 words per minute for a comfortable pace."}, {"question": "How fast do audiobook narrators speak?", "answer": "Audiobooks are recommended at about 150–160 words per minute."}, {"question": "Why does my speech run longer on stage?", "answer": "Pauses, audience reactions and slides add time; some speakers also slow down under lights. Rehearse with a timer and leave a margin."}, {"question": "Should I count words or characters for a speech?", "answer": "Words. Speaking pace is measured in words per minute."}, {"question": "Does the Word Counter estimate speaking time?", "answer": "It estimates silent reading time at 225 words per minute. Divide the word count by your speaking rate for speech time."}, {"question": "How do I cut a speech that is too long?", "answer": "Remove whole sections or examples rather than trimming words everywhere, then re-time it."}],
    faqMax: 10,
    cta: { before: "Count your draft and plan its length with the ", linkLabel: "Word Counter", href: "/tools/word-counter", after: "." },
    alsoSee: [{"before": "To fix capitalisation in a script, use the ", "linkLabel": "Text Case Converter", "href": "/tools/case-converter", "after": "."}, {"before": "To tidy pasted text, read ", "linkLabel": "how to remove extra spaces from text", "href": "/guides/how-to-remove-extra-spaces-from-text", "after": "."}, {"before": "To change case quickly, read ", "linkLabel": "how to change text case", "href": "/guides/how-to-change-text-case", "after": "."}],
    sources: [{"label": "Wikipedia – Words per minute (speech and listening)", "href": "https://en.wikipedia.org/wiki/Words_per_minute"}],
  },
};

const santaRules: ToolGuide = {
  article: toolGuideArticle({
    slug: "secret-santa-rules-and-gift-ideas",
    title: "Secret Santa Rules and Gift Ideas by Budget",
    primaryKeyword: "secret santa rules",
    secondaryKeywords: ["how does secret santa work", "secret santa budget", "secret santa gift ideas", "office secret santa rules", "secret santa exclusions"],
    toolSlug: "secret-santa-generator",
    siblingToolSlugs: ["random-number-generator", "percentage-calculator"],
    metaTitle: "Secret Santa Rules and Gift Ideas by Budget",
    metaDescription: "Simple Secret Santa rules for families, friends and offices: set a budget and date, draw names fairly, add exclusions and pick gifts at each price point.",
    excerpt: "A good Secret Santa needs a few clear rules. This guide covers the budget, the draw, exclusions, wishlists and the reveal, plus gift ideas at common price points.",
    relatedArticles: ["how-to-draw-names-for-secret-santa", "percentage-points-vs-percent", "how-to-calculate-a-discount"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro: "Quick answer: in Secret Santa each person in a group is randomly assigned one other person to buy a gift for, and the giver's identity usually stays secret until the exchange. Good rules are simple: agree a budget range and an exchange date, draw names so nobody gets themselves, exclude pairs such as couples if you want, ask everyone for a short wishlist, and decide whether givers are revealed. The Secret Santa Generator handles 3 to 200 participants, blocks self-draws, applies one-way or mutual exclusions, and lets you set a budget, currency, date and message template. It runs in the browser and does not store assignments.",
    why: "Most Secret Santa problems come from unclear expectations: one person spends far more than everyone else, someone draws their partner, or a gift misses the mark. A short set of rules agreed in advance keeps the exchange fair and fun.",
    sections: [
      {
        id: "how",
        heading: "How does Secret Santa work?",
        paragraphs: ["Wikipedia describes Secret Santa as a tradition in which members of a group are randomly assigned a person to whom they give a gift, with the giver's identity either kept secret or revealed at the end. Every person gives exactly one gift and receives exactly one.", "The draw can be done with names in a hat, but that makes it easy for someone to draw themselves and hard to apply exclusions. A generator does the draw in one step and checks that every rule is met."],
      },
      {
        id: "rules",
        heading: "What rules should every group agree?",
        paragraphs: ["Agree these before you draw. Put them in the invitation or message so nobody has to ask later."],
        table: { caption: "Core Secret Santa rules", headers: ["Rule", "Why it matters", "Example"], rows: [["Budget range", "Keeps gifts fair", "$20–$30"], ["Exchange date", "Gives everyone a deadline", "December 18 at the office lunch"], ["Keep it secret", "Preserves the surprise", "Do not tell anyone who you drew"], ["Wishlist", "Helps givers choose", "Three ideas and one thing to avoid"], ["Exclusions", "Avoids awkward pairings", "Couples do not draw each other"], ["Reveal", "Sets expectations", "Guess the giver at the party, or stay anonymous"]] },
      },
      {
        id: "budget",
        heading: "How do I set the budget?",
        paragraphs: ["Pick a range that everyone can afford without feeling pressured, and state it clearly with a minimum and maximum. The Secret Santa Generator accepts both values and a currency (USD, GBP, EUR, AED, CAD or AUD) and checks that the minimum is not higher than the maximum.", "In a workplace, a modest budget keeps it inclusive. In families, some groups set one higher budget for adults and run a separate draw for children. Whatever you choose, ask people to stay within it rather than overspending to impress."],
      },
      {
        id: "exclusions",
        heading: "How do exclusions work?",
        paragraphs: ["An exclusion stops one person from drawing another. In the generator a rule is one-way, so a mutual rule for a couple is two rules: A cannot draw B and B cannot draw A. Nobody can draw their own name in any case, so you never need a self-exclusion.", "Too many exclusions can make a draw impossible. The generator reports clear errors, for example when someone is excluded from everyone else and has nobody to give to, so you can remove a rule and draw again."],
      },
      {
        id: "wishlists",
        heading: "Should participants share wishlists?",
        paragraphs: ["Yes, short ones help. Ask for a few gift ideas, favourite categories, hobbies or colours, and anything to avoid such as allergies or items they already have. The generator includes wishlist fields for each participant and a box for wishlist instructions in the event settings.", "Keep wishlists specific but flexible. Three options at different prices within the budget give the giver a real choice while still keeping an element of surprise."],
      },
      {
        id: "ideas",
        heading: "What are good gift ideas at each budget?",
        paragraphs: ["These ideas work across most groups. Adjust them to the wishlist and to local prices."],
        table: { caption: "Gift ideas by budget", headers: ["Budget", "Ideas"], rows: [["Under $10 / £10", "Quality chocolate, a mug, a notebook, a plant cutting, a puzzle book"], ["$10–$25 / £10–£20", "A board or card game, a scented candle, a good pen set, a cookbook, cosy socks"], ["$25–$50 / £20–£40", "A small speaker, a desk organiser, a hobby kit, a framed print, a gift card for a favourite shop"], ["Any budget", "A homemade treat, a handwritten voucher for a favour, a curated playlist with a small gift"]] },
      },
      {
        id: "office",
        heading: "What extra rules help in an office Secret Santa?",
        paragraphs: ["Make it optional. Some people cannot afford it, do not celebrate or simply prefer not to take part, and nobody should feel pressured. Announce the exchange early with a clear sign-up deadline, and keep the budget modest so everyone who wants to join can.", "Agree that gifts should suit a workplace: nothing offensive, nothing too personal and nothing that could embarrass the recipient when opened in front of colleagues. Encourage people to check the wishlist for allergies and dietary needs, especially for food gifts.", "Plan the exchange itself. Decide whether gifts are opened together at a lunch or handed over privately, and make a plan for anyone who is away on the day, such as leaving the gift on their desk."],
      },
      {
        id: "message",
        heading: "How do I send each person their assignment?",
        paragraphs: ["Assignments work best when each giver hears only their own match. The Secret Santa Generator includes a message template with placeholders, {giver}, {event}, {recipient}, {budget} and {date}, which are filled in for each person so you can copy a ready-written message into email or chat.", "Send messages one by one to each giver. Because the generator does not store the draw, copy or save the results before you close the page, and keep any full list somewhere only the organiser can see."],
      },
      {
        id: "problems",
        heading: "What if the draw keeps failing?",
        paragraphs: ["If the generator cannot find a valid set of assignments, the exclusions are usually too tight. A small group where many people exclude each other can leave someone with no allowed recipient. Remove the least important exclusions first, or add more participants, and draw again.", "Also check for simple causes: a participant entered twice under slightly different names, or an exclusion added in the wrong direction. Reviewing the participant list and the exclusion rules line by line usually shows the problem quickly. Once the draw succeeds, the generator has already checked that nobody has their own name and that every exclusion is respected."],
      },
    ],
    stepsHeading: "How do I run a Secret Santa draw?",
    steps: [{"title": "Add participants", "body": "Enter at least 3 names, up to 200, each up to 60 characters."}, {"title": "Set the event", "body": "Add the event name, exchange date, budget range, currency and any theme or instructions."}, {"title": "Add exclusions", "body": "Block pairs who should not draw each other, using two rules for a mutual exclusion."}, {"title": "Draw and share privately", "body": "Generate assignments and share each one only with its giver, using the message template."}],
    examples: [{"title": "Office of 12", "body": "Budget $15–$25, exchange at the team lunch, no exclusions, givers revealed by guessing."}, {"title": "Family with couples", "body": "Eight adults with four mutual exclusions so partners do not draw each other."}, {"title": "Friends online", "body": "Ten friends in different cities, budget £20–£30, gifts posted to arrive by the exchange date."}],
    notesHeading: "What should I keep in mind?",
    notes: [{"heading": "Minimum group size", "body": "The generator needs at least 3 participants."}, {"heading": "Assignments are not saved", "body": "Copy or share each assignment before closing the page; the draw is not stored."}, {"heading": "Duplicate names", "body": "Add a surname or initial so people with the same first name are easy to tell apart."}, {"heading": "Fair draw", "body": "The generator uses the browser's secure random source and verifies every rule before showing results."}],
    faqs: [{"question": "What is the usual Secret Santa budget?", "answer": "There is no standard. Groups often choose a small fixed range, such as $20–$30, that everyone can afford."}, {"question": "Should the budget be a range or a fixed amount?", "answer": "A range is easier to meet because prices rarely match an exact number."}, {"question": "How do I stop couples drawing each other?", "answer": "Add two exclusions, one in each direction, before you draw."}, {"question": "What if someone drops out after the draw?", "answer": "Run the draw again without them, or ask the person who drew them to give to the dropout's recipient instead."}, {"question": "Can Secret Santa work for a remote team?", "answer": "Yes. Share addresses privately or agree on digital gifts, and set the date early enough for delivery."}, {"question": "How do I keep the draw secret from the organiser?", "answer": "Share each assignment directly with its giver and avoid reading the full list."}, {"question": "What should a wishlist include?", "answer": "A few ideas within budget, interests or colours they like, and anything to avoid."}, {"question": "Is it fine to give a gift card?", "answer": "Yes, especially if the wishlist mentions a favourite shop. Some groups prefer physical gifts, so check the rules."}, {"question": "When should the giver be revealed?", "answer": "Agree in advance. Some groups reveal at the exchange, some never do."}, {"question": "How far in advance should I draw names?", "answer": "Two to three weeks gives people time to shop and, for remote groups, to post gifts."}],
    faqMax: 10,
    cta: { before: "Draw names with exclusions and a budget in the ", linkLabel: "Secret Santa Generator", href: "/tools/secret-santa-generator", after: "." },
    alsoSee: [{"before": "For step-by-step draw instructions, read ", "linkLabel": "how to draw names for Secret Santa", "href": "/guides/how-to-draw-names-for-secret-santa", "after": "."}, {"before": "To work out a sale price within your budget, read ", "linkLabel": "how to calculate a discount", "href": "/guides/how-to-calculate-a-discount", "after": "."}, {"before": "To pick a random winner for a game, use the ", "linkLabel": "Random Number Generator", "href": "/tools/random-number-generator", "after": "."}],
    sources: [{"label": "Wikipedia – Secret Santa", "href": "https://en.wikipedia.org/wiki/Secret_Santa"}],
  },
};

export const batch11Guides: ToolGuide[] = [md5Sha, titleLen, ogImage, qrDynamic, speechWpm, santaRules];
