import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-04T20:00:00Z";

const htmlMinifier: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-minify-html",
    title: "How to Minify HTML Without Breaking Your Page",
    primaryKeyword: "minify html",
    secondaryKeywords: ["html minifier online", "remove html comments", "compress html whitespace", "reduce html file size", "minified html pre tag"],
    toolSlug: "html-minifier",
    siblingToolSlugs: ["css-minifier", "javascript-minifier", "html-encoder"],
    metaTitle: "How to Minify HTML: Comments, Whitespace and Safe Tags",
    metaDescription:
      "Strip comments and collapse whitespace in HTML while pre, textarea, script and style stay untouched. What minifying saves, what it skips, and how to test the result.",
    excerpt:
      "Minifying HTML removes comments and extra spaces so the markup is smaller. This guide explains exactly what the minifier changes, which blocks it leaves alone, and how to check nothing broke.",
    relatedArticles: ["how-to-minify-css", "how-to-minify-javascript", "how-to-escape-html"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: paste your markup into the HTML Minifier and press Minify. It deletes HTML comments, squeezes runs of spaces, tabs and line breaks inside tags and text down to a single space, and drops whitespace-only gaps between tags that contain a line break. The contents of pre, textarea, script and style blocks are copied exactly as written. The result appears next to your source with before and after character counts and the percentage saved, ready to copy.",
    why:
      "Hand-written and template-generated HTML is full of indentation, blank lines and developer comments. Browsers ignore most of it, but every character is still downloaded. Minifying trims that weight from pages, email templates and HTML snippets, and it hides notes you never meant visitors to read in the page source.",
    sections: [
      {
        id: "what-is",
        heading: "What does it mean to minify HTML?",
        paragraphs: [
          "Minifying means rewriting code so it does exactly the same job with fewer characters. For HTML, most of the savings come from whitespace that only exists to make the source readable: indentation before each tag, line breaks between elements, and spaces lined up inside long attribute lists.",
          "It is not the same as compression. Servers usually compress pages with gzip or Brotli on the way to the browser, and that already shrinks repeated whitespace very well. Minifying happens before that step and makes the uncompressed file smaller too, which helps with parsing, cache size and any place where compression is not applied, such as some inline snippets and email bodies.",
        ],
      },
      {
        id: "changes",
        heading: "What exactly does this minifier change?",
        paragraphs: [
          "The tool reads your markup one piece at a time and applies a short, predictable set of rules. Knowing them makes it easy to predict the output.",
        ],
        table: {
          caption: "How each part of the HTML is treated",
          headers: ["Part of the markup", "What happens"],
          rows: [
            ["Comments such as <!-- note -->", "Removed completely"],
            ["Spaces and line breaks inside a tag", "Collapsed to one space, and removed before the closing > or />"],
            ["Quoted attribute values", "Kept exactly, including any spaces inside the quotes"],
            ["Text between tags", "Runs of whitespace become one space"],
            ["Whitespace-only gaps that contain a line break", "Removed"],
            ["Contents of pre, textarea, script and style", "Copied unchanged"],
          ],
        },
        after:
          "Tag names, attribute order, quotes and entities are not rewritten, and nothing is added. The output is also trimmed at the start and end.",
      },
      {
        id: "protected",
        heading: "Why are pre, textarea, script and style left alone?",
        paragraphs: [
          "In a pre element or a textarea, whitespace is part of the content. Collapsing it would change how code samples, poems or default form text look. Script and style blocks contain JavaScript and CSS, where line breaks and spacing can matter and where HTML rules do not apply.",
          "So the minifier copies everything between the opening tag and its matching closing tag as it is. If you want those inline scripts or styles smaller too, run them separately through the JavaScript Minifier or the CSS Minifier and paste the results back in.",
        ],
      },
      {
        id: "inline-spaces",
        heading: "Can minifying change how my page looks?",
        paragraphs: [
          "It can in one specific case. When two inline elements, such as links, buttons or spans, sit on separate lines with nothing but whitespace between them, the browser normally shows a small space there. The minifier removes whitespace-only gaps that include a line break, so those elements may end up touching.",
          "The fix is simple. Put a real space or a character between them on the same line, or control the gap with CSS margin or a flex gap instead of relying on source formatting. Block elements such as div, p and section are not affected, because their layout does not depend on that whitespace.",
          "Conditional comments for very old versions of Internet Explorer are also comments, so they are removed. Few sites still need them, but check before minifying legacy templates.",
        ],
      },
      {
        id: "savings",
        heading: "How much smaller will my HTML get?",
        paragraphs: [
          "It depends on how the source was written. Deeply indented templates and pages with many comments shrink noticeably, while markup that is already compact barely changes. The tool shows the character count before and after and the reduction as a percentage, so you can see the real effect on your own file instead of guessing.",
          "The counts are characters, not bytes. For plain English markup they are nearly the same, but text in other scripts can take more than one byte per character once saved, so the byte saving can differ slightly.",
        ],
      },
      {
        id: "when",
        heading: "When should I minify HTML, and when not?",
        paragraphs: [
          "Minify the copy you publish, not the copy you edit. Keep the readable source in your project or version control and minify as a final step, whether by hand with this tool or in a build process. Minified HTML is hard to review and almost impossible to diff line by line.",
          "It is most useful for static pages, landing pages, HTML email templates, embed snippets and widgets that you paste into another system. If your site already runs a framework build that minifies output, running it again here adds little.",
        ],
      },
      {
        id: "testing",
        heading: "How do I check that the minified HTML still works?",
        paragraphs: [
          "Open the original and minified versions side by side in a browser and compare them, paying attention to spacing between inline links, buttons and icons. Test any forms, since textarea defaults should be unchanged. Run your inline scripts and check the browser console for errors.",
          "Remember that the minifier does not validate HTML. If the source has an unclosed quote or a missing closing tag, the output will carry the same problem. Fix the source first, then minify again.",
        ],
      },
      {
        id: "privacy-limits",
        heading: "Is there a size limit, and is my code uploaded?",
        paragraphs: [
          "The tool accepts up to 400,000 characters at a time, which keeps the browser tab responsive. That is enough for most single pages and templates. The work happens in your browser, so the markup is not sent to a server, which matters when you are working on unreleased pages or internal tools.",
        ],
      },
    ],
    stepsHeading: "How to minify HTML online",
    steps: [
      { title: "Paste your HTML", body: "Paste a full document or a fragment into the HTML source box. Press Example to load a short sample with a comment and a pre block." },
      { title: "Press Minify", body: "The minified markup appears in the output box, with the before and after character counts and the reduction." },
      { title: "Review the output", body: "Check that inline elements still have the spacing you expect and that protected blocks look the same." },
      { title: "Copy and publish", body: "Use Copy to place the result on your clipboard, then paste it into your file, CMS or email platform. Clear resets both boxes." },
    ],
    examples: [
      { title: "A template full of comments", body: "A page header with indented navigation and several <!-- section --> notes is minified. The comments disappear, the indentation goes, and the links stay in the same order with the same attributes." },
      { title: "A code sample in a pre block", body: "A tutorial page has a pre element with indented code. Everything around it is collapsed, but the lines inside the pre block keep their exact spacing, so the sample still reads correctly." },
      { title: "Two buttons on separate lines", body: "Two inline buttons sat on separate lines and showed a small gap. After minifying they touch. Adding a CSS gap on their container restores the spacing without depending on whitespace." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Keep the original", body: "Minifying is one-way in practice. Save the readable version and treat the minified copy as a build output." },
      { heading: "Inline CSS and JavaScript", body: "Style and script contents are not minified here. Use the matching tools for those blocks." },
      { heading: "Not a validator", body: "Broken markup stays broken. The tool assumes the HTML is already correct." },
      { heading: "Escaping is different", body: "If you need to show HTML as text on a page, you need escaping, not minifying. The HTML Encoder does that." },
    ],
    faqs: [
      { question: "Does the HTML Minifier remove comments?", answer: "Yes. Every <!-- ... --> comment is removed, including conditional comments used by very old Internet Explorer versions." },
      { question: "Will it change the content of pre or textarea tags?", answer: "No. Text inside pre and textarea, and code inside script and style, is copied exactly as written." },
      { question: "Does it minify inline CSS and JavaScript?", answer: "No. Script and style contents are left untouched. Minify them separately with the CSS Minifier and JavaScript Minifier." },
      { question: "Why are my links touching after minifying?", answer: "Whitespace-only gaps containing a line break are removed. Add a space on the same line or use CSS spacing between inline elements." },
      { question: "Does it remove quotes from attributes or optional closing tags?", answer: "No. Attributes, quotes and tags are kept as written. Only whitespace inside tags is tidied." },
      { question: "Are spaces inside attribute values kept?", answer: "Yes. Anything inside single or double quotes, such as a class list or an alt text, is copied without change." },
      { question: "Is the reduction measured in bytes?", answer: "It is measured in characters. For most English markup that is close to bytes, but it can differ for other scripts." },
      { question: "What is the maximum input size?", answer: "Up to 400,000 characters per run. Split very large files or minify them in a build process." },
      { question: "Is minifying HTML still worth it with gzip?", answer: "The gain is smaller once a server compresses pages, but it still trims the uncompressed file and removes comments you do not want public." },
      { question: "Is my HTML uploaded anywhere?", answer: "No. The markup is processed in your browser tab and is not sent to Tools Star Hub." },
    ],
    faqMax: 10,
    cta: { before: "Trim your markup with the free", linkLabel: "HTML Minifier", href: "/tools/html-minifier", after: "." },
    alsoSee: [
      { before: "For stylesheets, use the", linkLabel: "CSS Minifier", href: "/tools/css-minifier", after: "." },
      { before: "For scripts, try the", linkLabel: "JavaScript Minifier", href: "/tools/javascript-minifier", after: "." },
    ],
  },
};

const cssMinifier: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-minify-css",
    title: "How to Minify CSS and What It Actually Removes",
    primaryKeyword: "minify css",
    secondaryKeywords: ["css minifier online", "compress css", "remove css comments", "reduce stylesheet size", "minified css calc spaces"],
    toolSlug: "css-minifier",
    siblingToolSlugs: ["html-minifier", "javascript-minifier", "css-gradient-generator"],
    metaTitle: "How to Minify CSS: Comments, Spaces and calc() Safety",
    metaDescription:
      "Remove CSS comments and needless spaces while strings, url() values and calc() operators stay safe. What changes, what does not, and how to check the result.",
    excerpt:
      "A CSS minifier strips comments and spacing the browser does not need. Here is what this one removes, what it protects, and the one selector pattern to watch.",
    relatedArticles: ["how-to-minify-html", "how-to-minify-javascript", "how-to-write-a-css-gradient"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: paste your stylesheet into the CSS Minifier and press Minify. It removes every /* comment */, collapses whitespace, and drops spaces around braces, semicolons, colons, commas and the > and ~ combinators. Quoted strings and url() values are copied exactly, and spaces around + and - are kept so calc() keeps working. You get the minified CSS with before and after character counts and the percentage saved.",
    why:
      "Stylesheets block page rendering until they arrive, so their size matters more than many other files. Formatting, comments and section dividers make CSS pleasant to maintain but add weight. Minifying strips that out for the published copy while you keep the readable source.",
    sections: [
      {
        id: "what-is",
        heading: "What is CSS minification?",
        paragraphs: [
          "CSS minification rewrites a stylesheet into the shortest text that still means the same thing to the browser. The selectors, properties and values stay the same. What disappears is the human layer: indentation, line breaks, spaces after colons and comments explaining the code.",
          "Some minifiers go further and rewrite values, such as shortening colours or merging rules. This tool deliberately does not. It only removes characters that are safe to remove, which makes the output easy to trust and easy to compare with the source.",
        ],
      },
      {
        id: "rules",
        heading: "Which characters does the CSS Minifier remove?",
        paragraphs: [
          "The minifier walks through the stylesheet character by character and decides whether each gap of whitespace is needed. The rules are short.",
        ],
        table: {
          caption: "What the minifier does with each part of a stylesheet",
          headers: ["Input", "Output"],
          rows: [
            ["/* any comment */", "Removed"],
            ["Spaces next to { } ; : , > ~", "Removed"],
            ["Spaces around + and -", "Kept as a single space"],
            ["Space between two words, such as margin: 0 auto", "Kept as a single space"],
            ["Strings in quotes", "Copied unchanged"],
            ["Contents of url( ... )", "Copied unchanged"],
          ],
        },
        after:
          "Nothing else is rewritten. The final semicolon in a rule, colour formats, units and the order of rules all stay as you wrote them.",
      },
      {
        id: "calc",
        heading: "Will minifying break calc() or media queries?",
        paragraphs: [
          "No, and that is by design. In calc(), the + and - operators must have spaces on both sides, so calc(1rem + 2px) is valid but calc(1rem+2px) is not. The minifier always keeps a space around plus and minus signs for that reason.",
          "Media queries keep the spaces they need between words, so @media screen and (min-width: 768px) becomes @media screen and (min-width:768px). The space after a closing bracket before a word is kept too, which protects queries that chain several conditions with and.",
        ],
      },
      {
        id: "selectors",
        heading: "Is there any selector I should double-check?",
        paragraphs: [
          "Yes, one. Spaces before a colon are removed, which is right for properties but matters in a selector such as div :first-child, where the space means any first child inside a div. After minifying it becomes div:first-child, which means a div that is itself a first child.",
          "If you rely on that pattern, write it explicitly as div *:first-child. The star keeps the meaning and survives minification. Ordinary selectors such as a:hover, .nav > li and h1, h2 are not affected.",
        ],
      },
      {
        id: "comments",
        heading: "What happens to licence comments?",
        paragraphs: [
          "All comments are removed, including ones that start with /*! which some build tools treat as important licence notices. If a library you ship requires its licence header to stay, paste the header back at the top of the minified file, or keep it in a separate notice file as the licence allows.",
        ],
      },
      {
        id: "savings",
        heading: "How much can CSS minification save?",
        paragraphs: [
          "Well-commented, nicely indented stylesheets often lose a large share of their characters, while CSS that is already compact changes very little. The tool reports the before and after character counts and the reduction, so you see the actual figure for your file.",
          "Servers that send CSS with gzip or Brotli compression already shrink repeated whitespace, so the transfer saving is smaller than the character saving. Minifying still reduces the file browsers must parse and cache, and it removes notes you would rather not publish.",
        ],
      },
      {
        id: "workflow",
        heading: "Where does minifying fit in a CSS workflow?",
        paragraphs: [
          "Edit the readable stylesheet, test it, and minify only the version you deploy. If your project already uses a bundler or framework that minifies CSS automatically, you do not need this step for those files.",
          "The tool is handy for everything outside that pipeline: a theme stylesheet for a CMS, CSS pasted into a page builder, a snippet in an email template, or a quick check of how large a third-party stylesheet really is once the comments are gone.",
          "After minifying, load the page with the new file and look at the parts that use media queries, calc() and complex selectors. If anything looks different, compare the relevant rule in the source and output side by side.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits and privacy details?",
        paragraphs: [
          "You can minify up to 400,000 characters in one run. The minifier does not check that the CSS is valid, so a missing brace in the source will still be missing in the output. Processing happens in your browser, and the stylesheet is not uploaded.",
        ],
      },
      {
        id: "vs-compression",
        heading: "Is minifying CSS the same as gzip compression?",
        paragraphs: [
          "No. Minifying edits the text of the stylesheet itself, while gzip and Brotli are applied by the server when the file is sent and undone by the browser when it arrives. The two work well together. Minifying removes characters that never needed to exist, and compression then packs what is left.",
          "Because compression already handles repeated spaces well, comments are often the bigger win from minifying. Long explanatory comments, change logs at the top of a file and commented-out rules are all sent to every visitor unless they are removed.",
        ],
      },
      {
        id: "before-after",
        heading: "What does a stylesheet look like before and after?",
        paragraphs: [
          "A typical rule written for readability spreads one selector and three declarations over five lines, with indentation, a space after every colon and a comment above it. After minifying, the same rule is a single line: the selector, an opening brace, the declarations separated by semicolons and a closing brace.",
          "Multiple selectors joined with commas lose the spaces after each comma, and child combinators such as .menu > li become .menu>li. Values with several parts, like 1px solid #ddd or 0 auto, keep one space between each part, because the browser needs those spaces to tell the parts apart.",
          "The order of every rule is the same as in the source. That matters, because in CSS a later rule can override an earlier one with the same specificity, and changing the order could change how the page looks.",
        ],
      },
      {
        id: "readability",
        heading: "Can I turn minified CSS back into readable code?",
        paragraphs: [
          "Not exactly. Comments are gone for good, and line breaks have to be guessed. Code editors and browser developer tools can reformat minified CSS with indentation again, which is good enough to read it, but your original notes and grouping will not come back. That is why the readable source should always be the file you edit.",
        ],
      },
    ],
    stepsHeading: "How to minify CSS online",
    steps: [
      { title: "Paste the stylesheet", body: "Paste CSS into the source box, or press Example to load a sample with a comment, a url() value and a media query." },
      { title: "Press Minify", body: "The compact CSS appears in the output box along with the character counts and reduction." },
      { title: "Check sensitive spots", body: "Look at calc() expressions, url() paths and any selector with a space before a colon." },
      { title: "Copy the result", body: "Copy the output into your production file. Keep the readable version for future edits." },
    ],
    examples: [
      { title: "A small rule with a comment", body: "/* layout */ .hero { color: #2563eb; margin: 0 auto; } becomes .hero{color:#2563eb;margin:0 auto;}. The comment is gone and the space inside 0 auto is kept." },
      { title: "A calc() value in a media query", body: "@media screen and (min-width: 768px) { .hero { padding: calc(1rem + 2px); } } becomes @media screen and (min-width:768px){.hero{padding:calc(1rem + 2px);}}. The spaces around + survive, so the value still works." },
      { title: "A background image path with spaces", body: "background: url(“/images/hero image.png”) keeps the quoted path exactly, because strings and url() contents are never changed." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "No value rewriting", body: "Colours, units and shorthand properties are left as written. Shorten them yourself if you want extra savings." },
      { heading: "No rule merging", body: "Duplicate selectors are not combined, so the cascade behaves exactly as before." },
      { heading: "Licence headers", body: "Re-add any licence comment you are required to keep." },
      { heading: "Pair with HTML", body: "Inline style blocks inside HTML are not minified by the HTML Minifier, so run them here first." },
    ],
    faqs: [
      { question: "Does the CSS Minifier remove all comments?", answer: "Yes. Every /* ... */ comment is removed, including /*! licence comments." },
      { question: "Is calc() safe after minifying?", answer: "Yes. Spaces around + and - are always kept, which calc() needs." },
      { question: "Does it change colours or shorten values?", answer: "No. Values are kept as written. Only comments and unnecessary whitespace are removed." },
      { question: "Are url() paths changed?", answer: "No. Everything inside url( ... ) and inside quoted strings is copied exactly." },
      { question: "Why did div :first-child change meaning?", answer: "Spaces before a colon are removed. Write div *:first-child to keep the descendant meaning." },
      { question: "Does it remove the last semicolon in a rule?", answer: "No. Semicolons are kept, so the output stays easy to compare with the source." },
      { question: "Does it combine duplicate rules?", answer: "No. Rules stay in the same order, so the cascade is unchanged." },
      { question: "How large a stylesheet can I paste?", answer: "Up to 400,000 characters at once." },
      { question: "Does it validate my CSS?", answer: "No. Errors in the source, such as a missing brace, will remain in the output." },
      { question: "Is my CSS sent to a server?", answer: "No. Minification runs in your browser tab." },
    ],
    faqMax: 10,
    cta: { before: "Shrink your stylesheet with the free", linkLabel: "CSS Minifier", href: "/tools/css-minifier", after: "." },
    alsoSee: [
      { before: "Minify markup with the", linkLabel: "HTML Minifier", href: "/tools/html-minifier", after: "." },
      { before: "Build gradients to paste in with the", linkLabel: "CSS Gradient Generator", href: "/tools/css-gradient-generator", after: "." },
    ],
  },
};

const jsMinifier: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-minify-javascript",
    title: "How to Minify JavaScript Safely in Your Browser",
    primaryKeyword: "minify javascript",
    secondaryKeywords: ["javascript minifier online", "terser online", "compress js", "shorten variable names js", "reduce js file size"],
    toolSlug: "javascript-minifier",
    siblingToolSlugs: ["html-minifier", "css-minifier", "json-formatter"],
    metaTitle: "How to Minify JavaScript: Terser, Mangling and Safety",
    metaDescription:
      "Minify JavaScript with Terser in your browser: comments removed, local names shortened, top-level names kept. What changes, what stays and how to test it.",
    excerpt:
      "JavaScript minification removes comments and whitespace and shortens local names. This guide explains the conservative Terser settings the tool uses and how to check the output.",
    relatedArticles: ["how-to-minify-html", "how-to-minify-css", "what-is-json"],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: paste your script into the JavaScript Minifier and press Minify. It runs Terser in your browser to remove comments and whitespace, apply safe compression, and shorten local variable and function names. Top-level names are kept, so code that other scripts call by name still works. If the code has a syntax error, the tool shows the error instead of producing output.",
    why:
      "JavaScript is often the heaviest part of a web page, and the browser has to download and parse all of it before it can run. Minifying cuts the size of scripts you publish, such as widgets, bookmarklets, small libraries and inline snippets, without changing what they do.",
    sections: [
      {
        id: "what-is",
        heading: "What does minifying JavaScript do?",
        paragraphs: [
          "A JavaScript minifier parses your code into a syntax tree, then prints it back out in the shortest form it can. Whitespace and comments are dropped, and simple rewrites shorten the code, for example by joining consecutive variable declarations or removing code that can never run.",
          "Mangling is the other big saving. Local variables and function parameters only matter inside their scope, so a long name like totalPriceWithTax can become a single letter. The program behaves the same, but the text is much shorter.",
        ],
      },
      {
        id: "settings",
        heading: "Which Terser settings does this tool use?",
        paragraphs: [
          "The tool uses Terser, a widely used JavaScript minifier, with settings chosen to stay on the safe side.",
        ],
        table: {
          caption: "Minifier settings and their effect",
          headers: ["Setting", "What it means for your code"],
          rows: [
            ["Compression on, with conservative options", "Safe rewrites only. Constant expressions are not pre-evaluated and functions are not inlined"],
            ["Mangling on", "Local variable and parameter names are shortened"],
            ["Script mode, not module", "Top-level names are kept as written"],
            ["Comments off", "All comments are removed from the output"],
            ["No source map", "The output is a single block of minified code"],
          ],
        },
        after:
          "Because evaluation, variable reduction and inlining are turned off, the output stays closer to your original structure. You give up a little size in exchange for predictable results.",
      },
      {
        id: "top-level",
        heading: "Why are top-level names not shortened?",
        paragraphs: [
          "In a classic script, a function or variable declared at the top level becomes global. Other scripts, inline onclick handlers or your own HTML may call it by name. If the minifier renamed initGallery to a, those callers would break.",
          "So the tool treats code as a script and leaves top-level names alone, while still shortening everything inside functions. If you want global names shortened too, wrap the code in a function or move it into a module build process where you control what is exported.",
        ],
      },
      {
        id: "errors",
        heading: "What happens if my code has a syntax error?",
        paragraphs: [
          "Terser has to understand the code before it can shorten it. If parsing fails, for example because of a missing bracket or an unfinished string, the tool shows the error message and does not produce output. That is useful in itself: it is a quick way to spot a typo before you deploy.",
          "Code written for a specific build tool, such as TypeScript type annotations or JSX, is not plain JavaScript. Compile it first, then minify the compiled output.",
        ],
      },
      {
        id: "comments",
        heading: "Will licence comments be kept?",
        paragraphs: [
          "No. All comments are removed, including licence headers. If the code you ship requires a notice, add it back to the top of the minified file by hand.",
        ],
      },
      {
        id: "debugging",
        heading: "How do I debug minified JavaScript?",
        paragraphs: [
          "Minified code is hard to read and the tool does not produce a source map, which is the file browsers use to map minified code back to the original. Keep the readable source alongside the minified copy. When something fails, reproduce the bug with the original file first.",
          "Browser developer tools can pretty-print minified code, which restores line breaks but not the original names. For anything you maintain long term, a build pipeline with source maps is the better fit, and this tool is ideal for quick, one-off jobs.",
        ],
      },
      {
        id: "testing",
        heading: "How do I test the minified script?",
        paragraphs: [
          "Swap the minified file into a test page, open the browser console and use every feature the script provides. Watch for errors that mention undefined names, which usually means some code was relying on a local name from outside its scope.",
          "Compare the before and after character counts the tool shows to decide whether the saving is worth it. Small scripts may shrink only slightly, while heavily commented code with long names gains the most.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my JavaScript uploaded?",
        paragraphs: [
          "No. Terser runs inside your browser tab, so the code is not sent to a server. That makes the tool suitable for internal scripts and unreleased features. The input limit is 400,000 characters per run.",
        ],
      },
      {
        id: "mangling-example",
        heading: "What does name mangling look like in practice?",
        paragraphs: [
          "Consider a function called formatPrice that takes a parameter named amountInCents and stores an intermediate value in a variable named dollars. After minifying, the function is still called formatPrice, because it is declared at the top level, but its parameter and its local variable become single letters such as n and t.",
          "Property names are not mangled. If your code reads order.totalAmount, that stays order.totalAmount, because objects may come from an API, another script or JSON data where the original name is required. Strings are never changed either.",
          "This is why mangling is safe for ordinary code. The only names that change are ones that can only be seen inside their own function.",
        ],
      },
      {
        id: "when-not",
        heading: "When should I not use an online minifier?",
        paragraphs: [
          "For large applications with many files, a build tool that bundles, minifies and produces source maps is the better choice, because it repeats the same steps every time you release and keeps debugging possible. Frameworks usually do this automatically for production builds.",
          "The online tool shines for smaller jobs: a script tag on a static site, a snippet for a tag manager, a widget you hand to a client, a userscript, or simply seeing how much smaller a file could be before deciding whether to set up a build process.",
        ],
      },
      {
        id: "eval-note",
        heading: "Why are some optimisations turned off?",
        paragraphs: [
          "Aggressive options can occasionally change behaviour in unusual code, such as scripts that rely on a function's exact length, its text, or side effects in an unexpected order. Turning off evaluation, variable reduction and inlining avoids those edge cases. The output may be a few characters longer than the most aggressive settings would give, but it is far less likely to surprise you.",
        ],
      },
      {
        id: "inline",
        heading: "Can I minify a script that sits inside an HTML page?",
        paragraphs: [
          "Yes. Copy the code from between the script tags, minify it here, and paste the result back. The HTML Minifier leaves script contents untouched, so doing this step separately is how you shrink inline scripts as well as the markup around them.",
        ],
      },
    ],
    stepsHeading: "How to minify JavaScript online",
    steps: [
      { title: "Paste your script", body: "Paste plain JavaScript into the source box, or press Example to load a short sample." },
      { title: "Press Minify", body: "Terser processes the code in your browser. The result appears with character counts and the reduction." },
      { title: "Read any error", body: "If parsing fails, fix the reported problem in your source and minify again." },
      { title: "Copy and test", body: "Copy the output, drop it into a test page, and check the console while you use the features." },
    ],
    examples: [
      { title: "A helper function with comments", body: "A function with a doc comment and a long local variable name becomes one line. The comment is gone, the local variable becomes a single letter, and the function keeps its original name because it is top level." },
      { title: "A snippet with a missing bracket", body: "Pasting code with an unclosed brace shows a parse error instead of output, pointing you to the mistake before it reaches production." },
      { title: "A bookmarklet", body: "A short script meant to run from a browser bookmark is minified so it fits more easily into the bookmark address." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Plain JavaScript only", body: "Compile TypeScript or JSX first, then minify the output." },
      { heading: "No source map", body: "Keep the original file for debugging." },
      { heading: "Globals stay readable", body: "Top-level names are not mangled, by design." },
      { heading: "JSON is different", body: "To compact JSON data rather than code, use the JSON Formatter." },
    ],
    faqs: [
      { question: "What engine does the JavaScript Minifier use?", answer: "It uses Terser, running in your browser, with compression and name mangling turned on." },
      { question: "Are top-level function names renamed?", answer: "No. The code is treated as a classic script, so top-level names are kept and only local names are shortened." },
      { question: "Does it remove comments?", answer: "Yes. All comments, including licence headers, are removed." },
      { question: "Does it generate a source map?", answer: "No. Keep your original source for debugging." },
      { question: "What happens if my code has an error?", answer: "The tool shows the parse error and produces no output until the code is fixed." },
      { question: "Can I minify TypeScript or JSX?", answer: "Not directly. Compile them to plain JavaScript first, then minify the result." },
      { question: "Does it inline functions or pre-calculate constants?", answer: "No. Inlining and evaluation are turned off to keep the output close to the original logic." },
      { question: "How much JavaScript can I minify in one go?", answer: "Up to 400,000 characters per run." },
      { question: "Will minified code run faster?", answer: "It mainly downloads and parses faster. Run-time speed is usually about the same." },
      { question: "Is my code sent anywhere?", answer: "No. Minification happens locally in your browser." },
    ],
    faqMax: 10,
    cta: { before: "Shrink your scripts with the free", linkLabel: "JavaScript Minifier", href: "/tools/javascript-minifier", after: "." },
    alsoSee: [
      { before: "Minify stylesheets with the", linkLabel: "CSS Minifier", href: "/tools/css-minifier", after: "." },
      { before: "Minify markup with the", linkLabel: "HTML Minifier", href: "/tools/html-minifier", after: "." },
    ],
  },
};

const imageToPdf: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-images-to-pdf",
    title: "How to Convert JPG and PNG Images to One PDF",
    primaryKeyword: "convert images to pdf",
    secondaryKeywords: ["jpg to pdf", "png to pdf", "combine images into pdf", "image to pdf a4", "photos to pdf online"],
    toolSlug: "image-to-pdf",
    siblingToolSlugs: ["pdf-merger", "image-compressor", "image-resizer"],
    metaTitle: "How to Convert Images to PDF: JPG, PNG, A4 or Letter",
    metaDescription:
      "Turn up to 20 JPG or PNG images into one PDF in your browser. Choose A4, Letter or original size, orientation, margins and fit, then download images.pdf.",
    excerpt:
      "Combine photos, scans and screenshots into a single PDF. This guide covers page sizes, orientation, margins and fit modes, and how large images are handled.",
    relatedArticles: ["how-to-merge-pdf-files", "how-to-compress-an-image-without-losing-quality", "how-to-work-with-pdfs-in-your-browser"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the Image to PDF tool, add up to 20 JPG or PNG files, put them in the order you want, pick a page size (A4, Letter or Original), orientation, margin and fit, then press the convert button and download images.pdf. Each image becomes one page, and everything is built in your browser, so the pictures are not uploaded.",
    why:
      "PDF is the format most forms, offices and portals expect. Turning a set of phone photos of receipts, scanned pages or screenshots into a single PDF makes them easier to send, print and archive than a loose pile of image files.",
    sections: [
      {
        id: "inputs",
        heading: "Which images can I convert to PDF?",
        paragraphs: [
          "The tool accepts JPG and PNG files, up to 20 images per PDF. Each image can be up to 8192 pixels on its longest side. Other formats such as WebP, HEIC or GIF are not accepted directly; convert them to JPG or PNG first with the Image Converter.",
          "Once added, images appear in a list. You can move them up or down and remove any you do not need, and that order becomes the page order in the PDF.",
        ],
      },
      {
        id: "page-size",
        heading: "Should I pick A4, Letter or Original page size?",
        paragraphs: [
          "A4 and Letter create standard paper pages, which is what you want if the PDF will be printed or submitted to an office. A4 is the usual size in most of the world, and Letter is common in the United States and Canada.",
          "Original makes each page match its image, so a wide screenshot gets a wide page and a tall photo gets a tall page. Image pixels are treated as PDF points, very small images are given a minimum page size, and very large ones are scaled so the longest side is at most 1440 points.",
        ],
        table: {
          caption: "Page size options",
          headers: ["Option", "Page dimensions", "Best for"],
          rows: [
            ["A4", "595 × 842 points (210 × 297 mm)", "Printing and forms outside North America"],
            ["Letter", "612 × 792 points (8.5 × 11 in)", "Printing and forms in the US and Canada"],
            ["Original", "Follows each image, longest side up to 1440 points", "Screenshots, artwork, mixed shapes"],
          ],
        },
      },
      {
        id: "orientation-fit",
        heading: "How do orientation, margins and fit work together?",
        paragraphs: [
          "Orientation can be portrait, landscape or auto. Auto turns a page to landscape when the image is wider than it is tall, so every picture uses the page well.",
          "Margins can be none, small (18 points, about 6 mm) or medium (36 points, about 13 mm). Small or medium margins look tidier when printed and keep content away from the printer's edge.",
          "Fit decides how the image sits inside the space. Fit shows the whole image as large as possible, which can leave blank bands. Fill covers the whole area and crops whatever spills over. Original keeps the image at its natural size, and if that would not fit, it falls back to fit so nothing is cut off.",
        ],
      },
      {
        id: "quality",
        heading: "Will converting reduce image quality?",
        paragraphs: [
          "Images up to 2000 pixels on their longest side are placed in the PDF as they are. Larger images are scaled down so the longest side is 2000 pixels and saved as high-quality JPEG, with a white background behind any transparent areas. That keeps the PDF a manageable size while text and detail stay sharp enough to read and print.",
          "If you need a smaller PDF still, compress or resize the images before adding them, or run the finished file through the PDF Compressor.",
        ],
      },
      {
        id: "transparent",
        heading: "What happens to transparent PNG images?",
        paragraphs: [
          "Smaller PNG files are embedded as PNG, so their transparency is kept and the page background shows through. PNG files larger than 2000 pixels are converted to JPEG during downsampling, and transparent areas become white. For logos and diagrams with transparency, keep them under that size if the transparent look matters.",
        ],
      },
      {
        id: "use-cases",
        heading: "What are common reasons to turn images into a PDF?",
        paragraphs: [
          "Expense claims are a classic case: photograph each receipt, then send one PDF instead of many attachments. Students combine photos of handwritten notes, and landlords or applicants send a single file of ID pages and documents.",
          "Designers use Original size to share a set of screens or artwork without white borders, while anyone printing photos usually prefers A4 or Letter with a small margin.",
        ],
      },
      {
        id: "privacy",
        heading: "Are my images uploaded?",
        paragraphs: [
          "No. Reading the images, resizing any large ones and assembling the PDF all happen in your browser tab. That matters for receipts, IDs and other private documents. The finished file downloads as images.pdf.",
        ],
      },
      {
        id: "prepare",
        heading: "How should I prepare photos before converting?",
        paragraphs: [
          "Good results start with good photos. Shoot documents in even light, flat on a table, with the camera directly above so the page is not skewed. Crop away the table and background with the Image Cropper, which also makes each page cleaner when printed.",
          "If your phone saves photos as HEIC, convert them to JPG with the Image Converter. Very large phone photos are fine, since the tool downsamples anything over 2000 pixels, but resizing them first with the Image Resizer can make the process quicker on older devices.",
        ],
      },
      {
        id: "send",
        heading: "How do I make the PDF small enough to email?",
        paragraphs: [
          "Most email services limit attachments to around 20 to 25 MB, and many upload forms set lower limits. Because large images are already reduced to 2000 pixels on their longest side, a PDF of a handful of photos is usually well within that. For many high-detail images, compress them first with the Image Compressor, or compress the finished file with the PDF Compressor.",
          "Choosing A4 or Letter instead of Original does not change file size much, since the image data is the same. What matters is the number of images and how much detail each one contains.",
        ],
      },
      {
        id: "pages-check",
        heading: "How do I check the finished PDF?",
        paragraphs: [
          "Open images.pdf and scroll through every page. Check that the order is correct, that nothing important was cropped if you chose fill, and that margins look right if you plan to print. If a page is wrong, change the setting or the order and build the PDF again. It takes only a moment because everything runs locally.",
        ],
      },
      {
        id: "order-tip",
        heading: "How do I keep a multi-page scan in order?",
        paragraphs: [
          "Name or photograph pages in sequence, then add them in one go and check the list before building. If a page lands in the wrong place, move it up or down rather than starting again. The list order is exactly the page order you will see in images.pdf.",
        ],
      },
    ],
    stepsHeading: "How to convert images to a PDF",
    steps: [
      { title: "Add your images", body: "Choose up to 20 JPG or PNG files. Each must be 8192 pixels or less on its longest side." },
      { title: "Set the order", body: "Move images up or down in the list. The first image becomes page one." },
      { title: "Choose page options", body: "Pick A4, Letter or Original size, then orientation, margin and fit." },
      { title: "Create and download", body: "Build the PDF and download images.pdf to your device." },
    ],
    examples: [
      { title: "Receipts for an expense claim", body: "Six phone photos of receipts are added, set to A4, auto orientation, small margin and fit. The result is a six-page PDF with each receipt fully visible." },
      { title: "A set of app screenshots", body: "Ten screenshots of different shapes are converted with Original size and no margin, so each page matches its screenshot with no white borders." },
      { title: "A full-bleed photo page", body: "A landscape photo is placed on a Letter page with no margin and fill, so it covers the whole page and the edges are trimmed." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Formats", body: "Only JPG and PNG are accepted. Convert other formats first." },
      { heading: "Limits", body: "Up to 20 images, each up to 8192 pixels on the longest side." },
      { heading: "One image per page", body: "Each image becomes exactly one page." },
      { heading: "Add more later", body: "To join this PDF with other PDFs, use the PDF Merger." },
    ],
    faqs: [
      { question: "How many images can I put in one PDF?", answer: "Up to 20 JPG or PNG images per PDF, one image per page." },
      { question: "Can I convert HEIC or WebP to PDF?", answer: "Not directly. Convert them to JPG or PNG with the Image Converter first." },
      { question: "Can I change the page order?", answer: "Yes. Move images up or down in the list before you build the PDF." },
      { question: "What page sizes are available?", answer: "A4, Letter, or Original, which sizes each page to its image." },
      { question: "What does auto orientation do?", answer: "It makes a page landscape when the image is wider than it is tall, and portrait otherwise." },
      { question: "What is the difference between fit and fill?", answer: "Fit shows the whole image and may leave blank space. Fill covers the area and crops the overflow." },
      { question: "Are large photos resized?", answer: "Yes. Images over 2000 pixels on the longest side are scaled to 2000 pixels and saved as high-quality JPEG." },
      { question: "Is PNG transparency kept?", answer: "For PNGs up to 2000 pixels, yes. Larger PNGs are converted to JPEG on a white background." },
      { question: "What is the maximum image size?", answer: "Each image can be up to 8192 pixels on its longest side." },
      { question: "Do my images leave my device during conversion?", answer: "No. The PDF is created in your browser and downloaded as images.pdf." },
    ],
    faqMax: 10,
    cta: { before: "Combine your pictures with the free", linkLabel: "Image to PDF", href: "/tools/image-to-pdf", after: " tool." },
    alsoSee: [
      { before: "Join finished PDFs with the", linkLabel: "PDF Merger", href: "/tools/pdf-merger", after: "." },
      { before: "Shrink photos first with the", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
    ],
  },
};

const pdfMerger: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-merge-pdf-files",
    title: "How to Merge PDF Files Into One Document",
    primaryKeyword: "merge pdf files",
    secondaryKeywords: ["combine pdf files", "pdf merger online", "join pdfs", "merge pdf in browser", "reorder pdf files before merging"],
    toolSlug: "pdf-merger",
    siblingToolSlugs: ["pdf-splitter", "image-to-pdf", "pdf-compressor"],
    metaTitle: "How to Merge PDF Files: Order, Limits and Privacy",
    metaDescription:
      "Combine 2 to 10 PDF files into one merged.pdf in your browser. Set the order, check the page and size limits, and learn what to do with locked PDFs.",
    excerpt:
      "Merging PDFs joins several documents into one file in the order you choose. This guide covers limits, ordering, password-protected files and what is kept.",
    relatedArticles: ["how-to-split-a-pdf", "how-to-convert-images-to-pdf", "how-to-count-pdf-pages"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the PDF Merger, add between 2 and 10 PDF files, arrange them in the order you want, and press merge. The pages of each file are copied, one file after another, into a single merged.pdf that you download. Each file can be up to 20 MB, the combined total can be up to 80 pages, and the whole job runs in your browser.",
    why:
      "Applications, reports and contracts often arrive as several separate PDFs, while the person receiving them wants one file. Merging puts a cover letter, a form and its attachments into a single document that is easier to send, review and archive.",
    sections: [
      {
        id: "how-it-works",
        heading: "How does merging PDFs work?",
        paragraphs: [
          "The merger opens each PDF you add, copies all of its pages in their existing order, and appends them to a new document. The pages themselves are not re-rendered or converted to images, so text stays selectable and the quality is the same as in the originals.",
          "The order of the files in the list decides the order in the final document. File one's pages come first, then file two's, and so on.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits for merging?",
        paragraphs: [
          "Limits keep the tool fast and reliable in a browser tab, especially on phones.",
        ],
        table: {
          caption: "PDF Merger limits",
          headers: ["Limit", "Value"],
          rows: [
            ["Number of files", "2 to 10"],
            ["Size of each file", "Up to 20 MB"],
            ["Total pages across all files", "Up to 80"],
            ["Password-protected PDFs", "Not supported"],
            ["Output", "One file named merged.pdf"],
          ],
        },
        after:
          "If you have more than 80 pages in total, merge in two rounds: combine the first group, then merge that result with the rest, keeping each round under the page limit. You can check page counts beforehand with the PDF Page Counter.",
      },
      {
        id: "order",
        heading: "How do I put the files in the right order?",
        paragraphs: [
          "After adding files, use the move up and move down controls in the list. Think of the final document from the first page: a cover letter or summary usually goes first, followed by the main document and then appendices.",
          "If you need to change the order of pages within a single file, or drop a few pages, use the PDF Splitter first to extract exactly the pages you want, then merge the results.",
        ],
      },
      {
        id: "locked",
        heading: "Can I merge password-protected PDFs?",
        paragraphs: [
          "No. Encrypted PDFs cannot be opened to copy their pages, so the tool rejects them with a message. If the file is yours, open it in a PDF reader that knows the password and save or print an unprotected copy, then add that copy.",
          "Only remove protection from documents you are allowed to change. Some files are locked deliberately by their sender.",
        ],
      },
      {
        id: "images",
        heading: "What if some of my documents are photos?",
        paragraphs: [
          "The merger accepts PDFs only. Convert JPG or PNG photos and scans to PDF first with the Image to PDF tool, then add that PDF to the merge list alongside your other documents.",
        ],
      },
      {
        id: "size",
        heading: "Will the merged PDF be large?",
        paragraphs: [
          "Roughly, the merged file is about the size of the inputs added together, because pages are copied rather than recompressed. Scanned documents with large page images make big files. If the result is too large to email or upload, run it through the PDF Compressor.",
        ],
      },
      {
        id: "use-cases",
        heading: "When is merging PDFs most useful?",
        paragraphs: [
          "Job and visa applications often ask for a single upload containing several documents. Accountants receive a month of invoices that are easier to review as one file. Teachers combine worksheets, and teams join chapters written by different people into one report.",
          "In each case, the merger keeps every page as it was, so signatures, stamps and layouts look exactly as in the originals.",
        ],
      },
      {
        id: "privacy",
        heading: "Are my PDFs uploaded to a server?",
        paragraphs: [
          "No. Files are read and merged inside your browser tab and the result is saved straight to your device. That is important for contracts, medical letters and financial statements that should not leave your computer.",
        ],
      },
      {
        id: "bookmarks",
        heading: "What is kept from the original PDFs?",
        paragraphs: [
          "The visible content of every page is kept exactly: text, images, vector graphics, page size and orientation. A merged document can therefore mix A4 and Letter pages, or portrait and landscape pages, just as the originals did.",
          "Document-level extras that belong to a whole file rather than to a page, such as the outline of bookmarks shown in a reader's sidebar, are generally not carried across when pages are copied into a new document. If your readers rely on bookmarks, add them again in a desktop PDF editor after merging.",
        ],
      },
      {
        id: "names",
        heading: "How should I name and check the merged file?",
        paragraphs: [
          "The download is always called merged.pdf, so rename it to something your recipient will recognise, such as the applicant's name and the document type. A clear name helps when the file ends up in a folder with many others.",
          "Before sending, open the file and check the page count. It should equal the page counts of the inputs added together. The PDF Page Counter gives you a quick total if the document is long.",
        ],
      },
      {
        id: "mobile",
        heading: "Can I merge PDFs on a phone?",
        paragraphs: [
          "Yes. The tool runs in mobile browsers as well as on a computer. On a phone, pick the files from your downloads or files app, arrange them, and save the merged file back to the same place. The page and size limits keep the job light enough for most phones to handle without running out of memory.",
          "Very large scanned PDFs take more memory, so if a merge fails on an older phone, try fewer files at a time or compress the inputs first.",
        ],
      },
      {
        id: "troubleshoot",
        heading: "What if a file will not merge?",
        paragraphs: [
          "A clear message tells you which file caused the problem. Password protection is the most common reason. A damaged or incomplete download is the next most likely, and downloading the file again usually fixes it. If a file is not really a PDF, for example a Word document renamed to end in .pdf, convert it properly with the Word to PDF tool first.",
        ],
      },
      {
        id: "planning",
        heading: "How do I plan a merge with many documents?",
        paragraphs: [
          "Start by listing the documents in the order the reader expects. Check each file opens, note its page count, and add up the total. If it is over 80 pages or more than 10 files, group them into batches that each fit the limits, merge each batch, and then merge the batch results.",
          "Remove pages you do not need before merging rather than after. Splitting out only the relevant pages keeps the final document shorter and easier to read, and it keeps you comfortably inside the page limit.",
        ],
      },
      {
        id: "quality-check",
        heading: "Does merging change text or links inside pages?",
        paragraphs: [
          "No. Because each page is copied rather than redrawn, selectable text stays selectable and searchable in the merged file, and the layout of every page is identical to its source. Forms and signatures that were already flattened into the page look the same as before.",
        ],
      },
    ],
    stepsHeading: "How to merge PDF files",
    steps: [
      { title: "Add the PDFs", body: "Choose between 2 and 10 PDF files, each up to 20 MB, with no more than 80 pages in total." },
      { title: "Arrange the order", body: "Move files up or down so they appear in the order you want in the final document." },
      { title: "Merge", body: "Press merge. The pages of every file are copied into one new PDF." },
      { title: "Download", body: "Save merged.pdf, then open it and check the page order." },
    ],
    examples: [
      { title: "A job application", body: "A cover letter, a CV and two certificates are merged in that order into one file for an upload form that accepts a single PDF." },
      { title: "Monthly invoices", body: "Eight invoice PDFs of two or three pages each are merged into one file of under 30 pages for the accountant." },
      { title: "Too many pages", body: "Three reports total 110 pages. The first two are merged, then the result is merged with the third after splitting it so each round stays within 80 pages." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "PDFs only", body: "Convert images with Image to PDF before merging." },
      { heading: "No locked files", body: "Password-protected PDFs are rejected." },
      { heading: "Whole files", body: "Every page of each file is included. Split first if you need only some pages." },
      { heading: "Check the result", body: "Open merged.pdf and scroll through before you send it." },
    ],
    faqs: [
      { question: "How many PDFs can I merge at once?", answer: "Between 2 and 10 files in a single merge." },
      { question: "Is there a page limit?", answer: "Yes. The combined total is up to 80 pages." },
      { question: "How large can each file be?", answer: "Each PDF can be up to 20 MB." },
      { question: "Can I change the order of the files?", answer: "Yes. Move files up or down in the list before merging." },
      { question: "Can I merge only certain pages?", answer: "Not directly. Extract the pages with the PDF Splitter first, then merge those files." },
      { question: "Does merging reduce quality?", answer: "No. Pages are copied, not re-rendered, so text and images look the same." },
      { question: "Can I merge password-protected PDFs?", answer: "No. Remove protection from files you own first, then merge the unprotected copies." },
      { question: "Can I add JPG or PNG files?", answer: "No, only PDFs. Convert images with the Image to PDF tool first." },
      { question: "What is the merged file called?", answer: "It downloads as merged.pdf." },
      { question: "Are my files uploaded?", answer: "No. Merging happens entirely in your browser." },
    ],
    faqMax: 10,
    cta: { before: "Combine your documents with the free", linkLabel: "PDF Merger", href: "/tools/pdf-merger", after: "." },
    alsoSee: [
      { before: "Pull out pages with the", linkLabel: "PDF Splitter", href: "/tools/pdf-splitter", after: "." },
      { before: "Shrink the result with the", linkLabel: "PDF Compressor", href: "/tools/pdf-compressor", after: "." },
    ],
  },
};

const pdfSplitter: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-split-a-pdf",
    title: "How to Split a PDF and Extract the Pages You Need",
    primaryKeyword: "split a pdf",
    secondaryKeywords: ["extract pdf pages", "pdf splitter online", "split pdf by page range", "remove pages from pdf", "reorder pdf pages"],
    toolSlug: "pdf-splitter",
    siblingToolSlugs: ["pdf-merger", "pdf-page-counter", "pdf-to-jpg"],
    metaTitle: "How to Split a PDF: Page Ranges and Extracting Pages",
    metaDescription:
      "Extract pages from a PDF with ranges like 1-3,5,8-10 or by ticking pages. Learn how ordering works, the limits, and how to save split.pdf privately.",
    excerpt:
      "Splitting a PDF lets you keep only the pages you need in a new file. This guide explains page ranges, ordering rules, limits and practical uses.",
    relatedArticles: ["how-to-merge-pdf-files", "how-to-count-pdf-pages", "how-to-convert-pdf-pages-to-jpg"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the PDF Splitter, add one PDF (up to 80 pages and 20 MB), then either type the pages you want, such as 1-3,5,8-10, or tick them in the page list. Press split and download split.pdf, a new file containing only those pages. The original is not changed, and the work happens in your browser.",
    why:
      "Often you only need part of a document: one chapter, a signed page, a single invoice from a batch, or a form without its instructions. Splitting saves you from sending a long file when a short one will do, and it is the first step in removing or rearranging pages.",
    sections: [
      {
        id: "what-split-means",
        heading: "What does splitting a PDF do here?",
        paragraphs: [
          "This tool extracts. You choose which pages to keep, and it builds one new PDF called split.pdf containing those pages. Pages are copied, not re-rendered, so text stays selectable and quality is unchanged.",
          "It does not cut a file into many separate files in one go. To make several pieces, run it once per piece with a different page range each time.",
        ],
      },
      {
        id: "ranges",
        heading: "How do I write a page range?",
        paragraphs: [
          "Type page numbers and ranges separated by commas. A range uses a hyphen between the first and last page. Spaces are fine.",
        ],
        table: {
          caption: "Page range examples",
          headers: ["You type", "Pages in split.pdf"],
          rows: [
            ["1-3", "1, 2, 3"],
            ["1-3,5,8-10", "1, 2, 3, 5, 8, 9, 10"],
            ["7", "7 only"],
            ["5,1-2", "5, 1, 2 (in the order typed)"],
            ["2,2,3", "2, 3 (repeats are dropped)"],
            ["5-3", "Error: ranges must go from low to high"],
          ],
        },
        after:
          "Page numbers must exist in the document. Asking for page 12 in a 10-page file shows an error so you can correct it before anything is created.",
      },
      {
        id: "order",
        heading: "Can I reorder pages while splitting?",
        paragraphs: [
          "Yes, with a typed range. Pages appear in split.pdf in the order you type them, so 5,1-4 moves page five to the front. Each page is included once, so typing a page twice does not duplicate it.",
          "Ticking pages in the checkbox list is quicker for picking scattered pages, but it always writes them in ascending page order. Use typing when the order matters.",
        ],
      },
      {
        id: "remove",
        heading: "How do I delete pages from a PDF?",
        paragraphs: [
          "Select every page except the ones you want to remove. For a 12-page file where pages 4 and 9 should go, type 1-3,5-8,10-12. The resulting split.pdf is the document without those pages.",
          "To check how many pages a file has before writing a range, use the PDF Page Counter, or simply look at the page list the splitter shows once the file is loaded.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits?",
        paragraphs: [
          "The splitter takes one PDF at a time, up to 80 pages and 20 MB. Password-protected files cannot be opened. If your document is longer, a desktop PDF editor is better suited to the job, or you can work with an unprotected copy split into smaller parts elsewhere.",
        ],
      },
      {
        id: "combine",
        heading: "How do splitting and merging work together?",
        paragraphs: [
          "Splitting and merging are two halves of rearranging documents. Extract the pages you need from several files with the splitter, then join the results in any order with the PDF Merger. That lets you build a new document from pieces of others, for example a report with selected pages from three sources.",
        ],
      },
      {
        id: "use-cases",
        heading: "When is splitting a PDF useful?",
        paragraphs: [
          "Common reasons include sending only the signed page of a contract, pulling one invoice from a combined statement, removing blank scanned pages, sharing a single chapter from a manual, or uploading only the pages a form asks for when there is a size limit.",
          "If you need a page as an image rather than a PDF, for a slide or a social post, convert it with the PDF to JPG tool instead.",
        ],
      },
      {
        id: "privacy",
        heading: "Is my PDF uploaded?",
        paragraphs: [
          "No. The file is read and the new PDF is built in your browser tab, then saved directly to your device. Your original file is left as it was.",
        ],
      },
      {
        id: "ranges-tips",
        heading: "What are some tips for writing page ranges?",
        paragraphs: [
          "Write ranges from the lowest page number to the highest, separate pieces with commas, and avoid leaving a trailing comma at the end, which counts as an empty range and shows an error. Spaces around commas and hyphens are ignored, so 1 - 3, 5 works as well as 1-3,5.",
          "For reverse order, list pages individually, such as 5,4,3,2,1. Ranges themselves always count upward, so a reversed range like 5-1 is rejected with a message telling you to put the lower page first.",
        ],
      },
      {
        id: "checkbox-vs-typed",
        heading: "Should I tick pages or type a range?",
        paragraphs: [
          "Ticking is easiest when you can see the pages you want and they are scattered, such as pages 2, 7 and 11 in a short file. Ticking writes the matching range into the box for you, always in ascending order.",
          "Typing is faster for long runs of pages, such as 1-40, and it is the only way to change page order. You can also start by ticking pages, then edit the typed range to rearrange them before you split.",
        ],
      },
      {
        id: "scans",
        heading: "How do I tidy a scanned document?",
        paragraphs: [
          "Scanners often add blank backs of pages or put a page in the wrong place. Load the scan, note the blank page numbers from the page list, and type a range that skips them. If a page is out of order, type the pages in the correct sequence. The result is a clean copy you can send or archive, while the original scan stays untouched as a backup.",
        ],
      },
      {
        id: "errors",
        heading: "What do the error messages mean?",
        paragraphs: [
          "If you ask for a page number higher than the document has, the tool tells you which part of the range is out of bounds. An empty piece, such as two commas in a row, asks you to remove the empty range. Text that is not a page number, like a letter, is reported as invalid. In each case nothing is created until the range is fixed, so you never download a file with the wrong pages.",
          "If the file itself will not open, it is either password-protected or damaged. Unlock a file you own in a PDF reader, or download a fresh copy, and then try again.",
        ],
      },
      {
        id: "pieces",
        heading: "How do I break a long PDF into several parts?",
        paragraphs: [
          "Run the splitter once for each part. For a 60-page document you want in three equal parts, split with 1-20 and save the file, then load the original again and use 21-40, then 41-60. Rename each split.pdf as you go, for example part-1, part-2 and part-3, so the downloads do not overwrite or confuse each other.",
        ],
      },
      {
        id: "quality",
        heading: "Does the split file keep text searchable?",
        paragraphs: [
          "Yes. Pages are copied as they are, so selectable text stays selectable and searchable, and images keep their original resolution. The file size of split.pdf is usually close to the share of the original that those pages took up.",
        ],
      },
    ],
    stepsHeading: "How to split a PDF",
    steps: [
      { title: "Add one PDF", body: "Choose a PDF of up to 80 pages and 20 MB." },
      { title: "Choose pages", body: "Type a range such as 1-3,5,8-10, or tick pages in the list." },
      { title: "Split", body: "Press split to create a new PDF with only those pages." },
      { title: "Download split.pdf", body: "Save the file and open it to confirm the pages and their order." },
    ],
    examples: [
      { title: "One page from a contract", body: "A 14-page contract has the signatures on page 14. Typing 14 creates a one-page split.pdf to send back." },
      { title: "Removing blank pages", body: "A scanned 10-page document has blank pages 4 and 8. Typing 1-3,5-7,9-10 keeps everything else." },
      { title: "Moving a summary to the front", body: "A report ends with a summary on page 20. Typing 20,1-19 puts it first in the new file." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "One output file", body: "Each run creates a single split.pdf. Repeat for more pieces." },
      { heading: "Typed order wins", body: "Typed ranges keep your order; ticked pages are always ascending." },
      { heading: "No duplicates", body: "A page included twice appears once." },
      { heading: "Low to high ranges", body: "Write 3-5, not 5-3." },
    ],
    faqs: [
      { question: "How do I extract specific pages from a PDF?", answer: "Type the pages, for example 1-3,5,8-10, or tick them in the list, then press split and download split.pdf." },
      { question: "Can I split a PDF into several files at once?", answer: "No. Each run creates one file. Run it again with a different range for each piece." },
      { question: "Does the page order follow what I type?", answer: "Yes. Typed pages appear in the order you type them. Ticked pages are written in ascending order." },
      { question: "Can I duplicate a page?", answer: "No. Repeated pages are included only once." },
      { question: "Why does 5-3 give an error?", answer: "Ranges must go from the lower to the higher page number. Write 3-5, or type 5,4,3 for reverse order." },
      { question: "How do I remove pages from a PDF?", answer: "Select all the pages except the ones you want removed, then split." },
      { question: "What is the page limit?", answer: "Up to 80 pages per PDF, and the file can be up to 20 MB." },
      { question: "Can I split a password-protected PDF?", answer: "No. Protected files cannot be opened by the tool." },
      { question: "Does splitting reduce quality?", answer: "No. Pages are copied as they are, so text and images are unchanged." },
      { question: "Is my file uploaded?", answer: "No. Splitting happens in your browser and the original is not modified." },
    ],
    faqMax: 10,
    cta: { before: "Pick out pages with the free", linkLabel: "PDF Splitter", href: "/tools/pdf-splitter", after: "." },
    alsoSee: [
      { before: "Join files back together with the", linkLabel: "PDF Merger", href: "/tools/pdf-merger", after: "." },
      { before: "Check page counts with the", linkLabel: "PDF Page Counter", href: "/tools/pdf-page-counter", after: "." },
    ],
  },
};

export const batch3Guides: ToolGuide[] = [htmlMinifier, cssMinifier, jsMinifier, imageToPdf, pdfMerger, pdfSplitter];
