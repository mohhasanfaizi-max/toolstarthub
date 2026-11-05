import type { ToolFaq } from "./tool-content.ts";

/**
 * Extra English FAQs for tool pages that had only three, written around the
 * questions people ask search engines and AI assistants ("how do I…",
 * "what is…"). They are appended after the tool's own FAQs, so they show on
 * the page and in its FAQPage structured data.
 */
export const extraToolFaqs: Record<string, ToolFaq[]> = {
  "percentage-change-calculator": [
    {
      question: "What is the formula for percentage change?",
      answer:
        "Percentage change = (new value − original value) ÷ original value × 100. A positive result is an increase and a negative result is a decrease.",
    },
    {
      question: "Why is a rise from 80 to 100 not the same as a drop from 100 to 80?",
      answer:
        "The change is divided by the starting number. 20 out of 80 is a 25% rise, while 20 out of 100 is a 20% drop.",
    },
    {
      question: "How do I measure the percent change from an old value to a new one?",
      answer:
        "Subtract old from new, divide by the old value, multiply by 100 for the percent change.",
    },
    {
      question: "What does a negative percent change mean?",
      answer:
        "The new value is lower than the original—a decrease.",
    },
    {
      question: "How is percent change different from percentage points?",
      answer:
        "Percent change is relative to the start value; percentage points are an absolute difference between two percents.",
    },
    {
      question: "Can I compare this month’s revenue to last month’s?",
      answer:
        "Yes—use last month as original and this month as new.",
    },
    {
      question: "Why does going up and then back down look asymmetric?",
      answer:
        "A rise from 80→100 is +25%, but 100→80 is −20% because the bases differ.",
    },
    {
      question: "How do I express a change from 50 to 75?",
      answer:
        "(75−50)/50 = 0.5 → 50% increase.",
    },
    {
      question: "What if both values are negative?",
      answer:
        "The same formula applies, but interpret signs carefully for debt or temperature contexts.",
    },
    {
      question: "How should I present percent change in a report?",
      answer:
        "State both absolute values and the percent so readers see scale, not only the rate.",
    },
    {
      question: "Does the tool accept decimals?",
      answer:
        "Yes—use decimals for precise finance or science figures.",
    },
    {
      question: "How do I reverse a known percent change to find the start?",
      answer:
        "Divide the new value by (1 + change as a decimal) when the change was an increase.",
    },
    {
      question: "When is percentage-point language clearer?",
      answer:
        "When comparing rates (unemployment 5%→6% is +1 point, not +20% change) to avoid confusion.",
    },
    {
      question: "Can tiny base values make huge percents?",
      answer:
        "Yes—small denominators inflate percent change; show absolute deltas too.",
    },
    {
      question: "How do marketers misuse percent change?",
      answer:
        "By picking a flattering baseline or mixing points with percent—always check the base.",
    },
    {
      question: "Is week-over-week the same formula?",
      answer:
        "Yes—only the two numbers you compare change, not the math.",
    },
    {
      question: "Does percent-change math leave the browser?",
      answer:
        "Calculation on this page is meant to stay in the session.",
    }],
  "discount-calculator": [
    {
      question: "How do I calculate a discount?",
      answer:
        "Multiply the price by the discount percent and divide by 100 to get the amount off, then subtract it from the price. 25% off $80 is $20 off, so you pay $60.",
    },
    {
      question: "Are two discounts of 20% the same as 40% off?",
      answer:
        "No. A second 20% is taken from the already reduced price, so 20% off and then another 20% off is 36% off in total, not 40%.",
    },
    {
      question: "How do I work out a percent-off price quickly?",
      answer:
        "Multiply price by the percent, divide by 100 for the amount off, then subtract from the price.",
    },
    {
      question: "What is the difference between discount rate and discount amount?",
      answer:
        "Rate is the percent; amount is currency off. Both appear in a clear receipt breakdown.",
    },
    {
      question: "Is stacking 20% then another 20% the same as 40% off?",
      answer:
        "No. The second discount applies to the already-reduced price, so the combined cut is less than 40%.",
    },
    {
      question: "How do I find what percent off I received?",
      answer:
        "Divide amount saved by the original price and multiply by 100.",
    },
    {
      question: "How do I find the price before a discount?",
      answer:
        "Divide the discounted price by (1 − rate) when the rate is known.",
    },
    {
      question: "Can I enter a discount with decimals like 12.5%?",
      answer:
        "Yes when the tool accepts decimal percents. Watch rounding on the final cent.",
    },
    {
      question: "Is tax folded into the discounted total automatically?",
      answer:
        "Usually it discounts the entered price only. Apply tax in a separate step if needed.",
    },
    {
      question: "Is buy one get one free the same as 50% off everything?",
      answer:
        "Only when both items share the same price and the free item is the full value. Mixed prices differ.",
    },
    {
      question: "Why does my receipt differ by a cent?",
      answer:
        "Stores round per line or after tax differently. Match their rounding rules for exact cents.",
    },
    {
      question: "What price do I see when the discount rate is zero?",
      answer:
        "The original price with zero saved.",
    },
    {
      question: "Can I model coupon plus percentage off?",
      answer:
        "Apply them in the same order the store does—sequence changes the total.",
    },
    {
      question: "Should shipping be discounted too?",
      answer:
        "Only if the offer says so. Often shipping is excluded from percent-off promos.",
    },
    {
      question: "How do employee discounts usually work?",
      answer:
        "Policies vary—some exclude sale items. Use the posted rules, not a generic stack.",
    },
    {
      question: "Can I compare two competing discount offers?",
      answer:
        "Compute final payables for both carts including tax and shipping.",
    },
    {
      question: "Are my price inputs stored after calculating?",
      answer:
        "Figures stay in the page session only.",
    }],
  "character-counter": [
    {
      question: "Do spaces count as characters?",
      answer:
        "Yes, in the main total. The counter also shows a second total without spaces, which some forms and assignments ask for.",
    },
    {
      question: "How many characters is an emoji?",
      answer:
        "On this page a single emoji counts as one Unicode character. Some apps count certain emoji as two or more, so their limit can differ slightly.",
    },
    {
      question: "How do I count characters in a pasted draft?",
      answer:
        "Paste the text and read the live totals for characters, characters without spaces, words, and lines.",
    },
    {
      question: "Do spaces count toward the main character total?",
      answer:
        "Yes in the main total. Use the without-spaces figure when a form excludes them.",
    },
    {
      question: "How does this page count an emoji?",
      answer:
        "A single emoji usually counts as one Unicode character here. Some platforms count multi-codepoint emoji differently.",
    },
    {
      question: "Are line breaks counted as characters?",
      answer:
        "Often yes—each newline can add to the character total. Check both totals if a limit is strict.",
    },
    {
      question: "Can I count only a selected paragraph?",
      answer:
        "Paste just that paragraph, or trim the draft before checking the counter.",
    },
    {
      question: "What is the difference between characters and bytes?",
      answer:
        "Characters are Unicode units; bytes depend on encoding (UTF-8 may use multiple bytes per character).",
    },
    {
      question: "Do HTML tags count if I paste markup?",
      answer:
        "Yes—every character in the paste counts, including < and >. Strip tags first if you only need visible text.",
    },
    {
      question: "How many characters fit a typical SMS segment?",
      answer:
        "Classic SMS limits are around 160 GSM characters; Unicode can lower that. Confirm with your carrier tool.",
    },
    {
      question: "Is there a soft limit on paste size?",
      answer:
        "Very large pastes can slow the tab. Count chapter-sized chunks when needed.",
    },
    {
      question: "Why do Word and this counter disagree slightly?",
      answer:
        "Word may treat breaks, fields, or hidden characters differently. Prefer the limit owner’s official counter when it matters.",
    },
    {
      question: "Can I track Twitter or LinkedIn limits here?",
      answer:
        "Use the character total as a guide, then confirm against each network’s current limit and link shortening rules.",
    },
    {
      question: "Do multiple spaces between words all count?",
      answer:
        "Yes in the main total. The without-spaces mode ignores them for that second figure.",
    },
    {
      question: "Are sentences counted separately?",
      answer:
        "Some modes show sentence estimates. Treat them as approximate when abbreviations confuse the splitter.",
    },
    {
      question: "What counts as a word here?",
      answer:
        "Runs of non-space characters. Hyphenation and punctuation rules can differ from a publisher’s style guide.",
    },
    {
      question: "Is my text uploaded while counting?",
      answer:
        "Counting runs in the browser; nothing is kept as a permanent server copy.",
    }],
  "case-converter": [
    {
      question: "What is the difference between title case and sentence case?",
      answer:
        "Title case capitalizes the first letter of each word, as in a headline. Sentence case capitalizes only the first letter of each sentence, as in normal writing.",
    },
    {
      question: "What are camelCase, snake_case, and kebab-case?",
      answer:
        "They are naming styles used in code. camelCase joins words with capitals (myVariableName), snake_case uses underscores (my_variable_name), and kebab-case uses hyphens (my-variable-name).",
    },
    {
      question: "How do I switch a paragraph between title case and sentence case?",
      answer:
        "Paste the text, pick the target case, and copy the result. Review brand names that need fixed capitals.",
    },
    {
      question: "How do camelCase, snake_case, and kebab-case differ in practice?",
      answer:
        "camelCase joins words with capitals (myVar), snake_case uses underscores (my_var), kebab-case uses hyphens (my-var).",
    },
    {
      question: "When is kebab-case preferred?",
      answer:
        "URL slugs and many CSS class names favor hyphens. Avoid spaces in those contexts.",
    },
    {
      question: "Does sentence case keep the pronoun I capital?",
      answer:
        "English sentence case should keep I capitalized even mid-sentence. Spot-check after conversion.",
    },
    {
      question: "How are digits and punctuation treated?",
      answer:
        "They usually stay in place while letters change case. Separators in identifiers may be rewritten by some modes.",
    },
    {
      question: "Can camelCase identifiers become snake_case?",
      answer:
        "Yes when an identifier mode is available—it splits on capitals then joins with underscores.",
    },
    {
      question: "Why might a brand name lose its capitals in Title Case?",
      answer:
        "Naive title casers treat every word alike. Re-apply brand spelling manually after conversion.",
    },
    {
      question: "Do paragraph line breaks survive conversion?",
      answer:
        "Typically yes. If a mode collapses whitespace, paste back into a structured editor afterward.",
    },
    {
      question: "Is there a practical limit on paste size?",
      answer:
        "Very large pastes can slow the tab. Convert chapter-sized chunks when needed.",
    },
    {
      question: "How well does conversion work outside English?",
      answer:
        "Letter casing rules differ by locale. Results are best for simple Latin scripts; review other languages carefully.",
    },
    {
      question: "What is PascalCase versus camelCase?",
      answer:
        "PascalCase capitalizes the first letter of every word including the first (MyVar); camelCase leaves the first word lower (myVar).",
    },
    {
      question: "Should constant names use SCREAMING_SNAKE_CASE?",
      answer:
        "Many style guides do for constants. Convert then confirm your project’s lint rules.",
    },
    {
      question: "Will converting case change meaning in German or Turkish?",
      answer:
        "Possibly—those languages have casing rules a simple converter may miss. Have a native reader verify.",
    },
    {
      question: "Can I lowercase an entire document for comparison?",
      answer:
        "Yes—lowercase both sides before a diff when you want case-insensitive comparison.",
    },
    {
      question: "Is my text uploaded during conversion?",
      answer:
        "Case changes run in the browser; nothing is kept as a server-side document store.",
    }],
  "lorem-ipsum-generator": [
    {
      question: "What does lorem ipsum mean?",
      answer:
        "Lorem ipsum is scrambled Latin used as placeholder text. It looks like real copy, so a layout can be judged without readers focusing on the words.",
    },
    {
      question: "When should I use placeholder text?",
      answer:
        "Use it for mockups, templates, and font tests. Replace it with real copy before a page goes live, because placeholder text tells visitors nothing.",
    },
    {
      question: "How do I fill a mockup with classic placeholder copy?",
      answer:
        "Choose words, sentences, or paragraphs, set a count, generate, then paste into the design.",
    },
    {
      question: "Can I generate just a few words for a button label?",
      answer:
        "Yes—use words mode with a small count so the label stays short.",
    },
    {
      question: "Why does placeholder Latin look scrambled?",
      answer:
        "It is intentionally pseudo-Latin filler so reviewers focus on layout, not meaning.",
    },
    {
      question: "Should client demos ship with lorem still visible?",
      answer:
        "No—replace with real copy before launch so SEO and accessibility match the product.",
    },
    {
      question: "How do I get paragraph breaks instead of one block?",
      answer:
        "Use paragraphs mode so the generator inserts separate blocks you can style.",
    },
    {
      question: "Can I regenerate until the rhythm looks right?",
      answer:
        "Yes—generate again for a fresh sample; vary length until the layout feels balanced.",
    },
    {
      question: "Does placeholder text need to be unique every time?",
      answer:
        "For screenshots maybe; for layout tests repeated lorem is usually fine.",
    },
    {
      question: "How should writers hand off real copy over lorem?",
      answer:
        "Drop final strings into the same slots and delete leftover placeholder phrases.",
    },
    {
      question: "Is lorem better than repeating “text text text”?",
      answer:
        "Yes—varied word lengths stress wrapping and spacing more realistically.",
    },
    {
      question: "Can I generate lorem in another language?",
      answer:
        "This classic generator is Latin-style; use a localized filler tool for other languages.",
    },
    {
      question: "What count should I use for a hero section?",
      answer:
        "A short sentence or two usually suffices; long paragraphs belong in body mockups.",
    },
    {
      question: "Does generating lorem create copyright risk?",
      answer:
        "Standard lorem snippets are widely treated as filler; still avoid pasting third-party prose unlabeled.",
    },
    {
      question: "How do wireframe tools typically use this output?",
      answer:
        "Designers paste blocks into text layers to judge hierarchy before content is ready.",
    },
    {
      question: "Should QA test forms filled with lorem?",
      answer:
        "Useful for length/overflow; also test realistic names and emails before release.",
    },
    {
      question: "Does the generator fetch paragraphs from the web?",
      answer:
        "Generation is meant to run locally from built-in samples in the page session.",
    }],
  "image-resizer": [
    {
      question: "How do I resize an image without stretching it?",
      answer:
        "Keep the aspect ratio locked and change only the width or the height. The other side is calculated so the picture keeps its proportions.",
    },
    {
      question: "Does resizing an image reduce its file size?",
      answer:
        "Usually, yes. Fewer pixels means less data to store. For the smallest file, resize first and then compress the result.",
    },
  ],
  "image-cropper": [
    {
      question: "What aspect ratio should I crop to?",
      answer:
        "Use 1:1 for profile pictures and square posts, 16:9 for video thumbnails and widescreen banners, and 4:3 for many slides and older displays. Free lets you choose any shape.",
    },
    {
      question: "Does cropping reduce image quality?",
      answer:
        "No. Cropping removes the pixels outside the frame and keeps the pixels inside it, so the area you keep is not blurred.",
    },
  ],
  "image-converter": [
    {
      question: "Should I use PNG or JPG?",
      answer:
        "Use JPG for photos, where a smaller file matters more than perfect edges. Use PNG for logos, screenshots, text, and anything that needs a transparent background.",
    },
    {
      question: "Why did my transparent background turn white?",
      answer:
        "JPG cannot store transparency, so transparent pixels are filled with a background color when you convert PNG to JPG. White is the default, and you can choose another color.",
    },
  ],
  "base64-encoder": [
    {
      question: "What is Base64 used for?",
      answer:
        "Base64 turns bytes into plain letters, digits, + and /, so data can travel through systems that expect text, such as email attachments, data URLs, and some API fields.",
    },
    {
      question: "Why is Base64 text longer than the original?",
      answer:
        "Every 3 bytes become 4 characters, so Base64 output is about one third larger than the input.",
    },
    {
      question: "How do I encode text to Base64 in the browser?",
      answer:
        "Paste or type the text, run encode, and copy the result. Decode the same way when you need the original back.",
    },
    {
      question: "When is Base64 better than shipping raw bytes?",
      answer:
        "When a transport only allows text—data URLs, some JSON fields, or legacy APIs—not as a security control.",
    },
    {
      question: "Which characters show up in standard Base64?",
      answer:
        "A–Z, a–z, 0–9, plus, and slash, with = padding. URL-safe variants swap some symbols.",
    },
    {
      question: "Why does encoded text end with equals signs?",
      answer:
        "Padding marks incomplete final byte groups. Decoders expect them for standard Base64.",
    },
    {
      question: "Is encoding with Base64 a form of encryption?",
      answer:
        "No. Anyone can decode it. Use real encryption when confidentiality matters.",
    },
    {
      question: "Can I protect a password by Base64-encoding it?",
      answer:
        "No. It only obscures bytes. Hash or encrypt passwords with proper algorithms instead.",
    },
    {
      question: "Why does the encoded string grow versus the input?",
      answer:
        "Every 3 bytes become 4 characters—about a 33% size increase before padding.",
    },
    {
      question: "Will spaces or line wraps break decoding?",
      answer:
        "Often yes. Paste clean Base64 without wraps unless your decoder tolerates them.",
    },
    {
      question: "What does a Base64 data URL look like?",
      answer:
        "A URL that embeds file bytes as Base64 after a media-type prefix, useful for small inline assets.",
    },
    {
      question: "How does UTF-8 change the encoded result?",
      answer:
        "Non-ASCII characters become multi-byte UTF-8 first, so the Base64 differs from Latin-1 assumptions.",
    },
    {
      question: "What happens if the Base64 string is invalid?",
      answer:
        "Decode fails or yields garbage. Check alphabet, padding, and accidental truncation.",
    },
    {
      question: "Do JWT parts use Base64?",
      answer:
        "Yes—JWT parts are Base64URL encodings of JSON and signatures, not encryption by themselves.",
    },
    {
      question: "Should large payloads be compressed before encoding?",
      answer:
        "For large payloads, compress then encode to shrink the text form. Tiny strings rarely benefit.",
    },
    {
      question: "How large a string can I encode here?",
      answer:
        "Stay within browser memory comfort. Extremely large pastes may slow the tab.",
    },
    {
      question: "Does encoding leave my machine?",
      answer:
        "Encoding and decoding run locally in the page session.",
    }],
  "uuid-generator": [
    {
      question: "What is a UUID v4?",
      answer:
        "A UUID is a 128-bit identifier written as 36 characters, such as 123e4567-e89b-42d3-a456-426614174000. Version 4 fills almost all of those bits at random.",
    },
    {
      question: "Can two random UUIDs be the same?",
      answer:
        "In theory, yes, but with 122 random bits the chance is so small that UUID v4 values are treated as unique in practice.",
    },
  ],
  "url-encoder": [
    {
      question: "What does %20 mean in a URL?",
      answer:
        "%20 is the percent-encoded form of a space. Percent-encoding writes a character as % followed by its byte value in hexadecimal.",
    },
    {
      question: "What is the difference between encodeURI and encodeURIComponent?",
      answer:
        "encodeURI leaves characters such as / ? & and = alone so a whole address still works. encodeURIComponent escapes them too, which is what you want for a single query value. This tool uses encodeURIComponent.",
    },
  ],
  "timestamp-converter": [
    {
      question: "What is a Unix timestamp?",
      answer:
        "A Unix timestamp is the number of seconds since 00:00:00 UTC on January 1, 1970. Many systems store it in milliseconds instead, which is the same value times 1,000.",
    },
    {
      question: "How can I tell if a timestamp is in seconds or milliseconds?",
      answer:
        "Current timestamps in seconds have 10 digits, while timestamps in milliseconds have 13. Pick the matching unit before you convert.",
    },
  ],
  "utm-builder": [
    {
      question: "What are UTM parameters?",
      answer:
        "UTM parameters are tags added to a link, such as utm_source, utm_medium, and utm_campaign, that tell analytics tools where a visit came from.",
    },
    {
      question: "Which UTM parameters are required?",
      answer:
        "Source, medium, and campaign are the usual minimum. Term and content are optional and help tell keywords or ad versions apart.",
    },
  ],
  "unit-converter": [
    {
      question: "How do I convert Celsius to Fahrenheit?",
      answer:
        "Multiply the Celsius value by 9/5 and add 32. For example, 20 °C is 20 × 9 ÷ 5 + 32 = 68 °F.",
    },
    {
      question: "How many centimeters are in an inch?",
      answer:
        "One inch is exactly 2.54 centimeters, so 12 inches (one foot) is 30.48 centimeters.",
    },
  ],
  "slug-generator": [
    {
      question: "What is a URL slug?",
      answer:
        "A slug is the readable part of a web address that names a page, such as how-to-make-bread in example.com/blog/how-to-make-bread.",
    },
    {
      question: "What makes a good slug for SEO?",
      answer:
        "Keep it short, lowercase, and descriptive, with words separated by hyphens. Avoid dates or filler words if the page may be updated later.",
    },
    {
      question: "How do I turn a post title into a URL slug?",
      answer:
        "Paste the title, generate, then copy the hyphenated lowercase slug into your CMS.",
    },
    {
      question: "Should dates go inside the slug?",
      answer:
        "Optional—dates help uniqueness but make URLs longer; many blogs omit them.",
    },
    {
      question: "How do I handle stop words like “the” and “and”?",
      answer:
        "Some generators drop them; keep them if they carry meaning for the topic.",
    },
    {
      question: "Can I edit the slug after generating it?",
      answer:
        "Yes—shorten or clarify before publishing; changing later can break links.",
    },
    {
      question: "What characters are usually stripped from slugs?",
      answer:
        "Punctuation, symbols, and emoji are removed or replaced; letters/numbers/hyphens remain.",
    },
    {
      question: "How do non-Latin titles become slugs?",
      answer:
        "Depending on settings they transliterate, percent-encode, or keep Unicode—match your CMS.",
    },
    {
      question: "Why prefer hyphens over spaces or underscores?",
      answer:
        "Hyphens are the web convention search engines and humans read easily.",
    },
    {
      question: "How long is too long for a slug?",
      answer:
        "Keep roughly under 50–60 characters when you can; front-load important words.",
    },
    {
      question: "Should product SKUs appear in the slug?",
      answer:
        "Only if users search that way; otherwise prefer readable names.",
    },
    {
      question: "Can two articles accidentally share one slug?",
      answer:
        "Yes—CMSs usually enforce uniqueness; append a short suffix if needed.",
    },
    {
      question: "How do I slugify a headline with a colon or dash?",
      answer:
        "Colons become separators or disappear; avoid double hyphens in the final path.",
    },
    {
      question: "Is a slug the full URL?",
      answer:
        "No—it is the path segment after your domain (and maybe category folders).",
    },
    {
      question: "Should I include keyword stuffing in slugs?",
      answer:
        "No—one clear phrase beats a long chain of repeated keywords.",
    },
    {
      question: "How do redirects relate to slug changes?",
      answer:
        "If you rename a live slug, add a 301 from the old path so links keep working.",
    },
    {
      question: "Does slug generation upload my title?",
      answer:
        "Generation on this page is intended to stay in the browser session.",
    }],
  "hex-to-rgb": [
    {
      question: "How do I convert a hex color to RGB?",
      answer:
        "Split the six digits into three pairs and convert each pair from hexadecimal to a number from 0 to 255. #FF8000 is red 255, green 128, blue 0.",
    },
    {
      question: "What does an 8-digit hex color mean?",
      answer:
        "The last two digits are the alpha channel, which sets opacity. #FF000080 is red at about 50% opacity.",
    },
    {
      question: "How do I turn a hex color into RGB channel values?",
      answer:
        "Enter the hex (with or without #), convert, and read the R, G, and B channels for CSS or design tools.",
    },
    {
      question: "Do I need to type the leading hash mark?",
      answer:
        "Usually optional—both #336699 and 336699 should parse. Follow the field hint if one form is required.",
    },
    {
      question: "What does an 8-digit hex color include beyond RGB?",
      answer:
        "The extra pair is alpha (opacity). RGB output may show a separate alpha channel.",
    },
    {
      question: "Is the short form #369 equal to #336699?",
      answer:
        "Yes—3-digit hex expands by doubling each digit (#369 → #336699).",
    },
    {
      question: "What RGB values does #ffffff map to?",
      answer:
        "White: rgb(255, 255, 255).",
    },
    {
      question: "Can I type a CSS color keyword such as crimson?",
      answer:
        "Name support varies. Prefer hex or rgb() when you need exact control.",
    },
    {
      question: "How do I convert RGB numbers back into hex?",
      answer:
        "Use a companion RGB-to-hex mode or reverse the channels into two-digit hex pairs.",
    },
    {
      question: "Why might a hex string be rejected?",
      answer:
        "Wrong length, non-hex characters, or missing digits. Stick to 3, 6, or 8 hex digits.",
    },
    {
      question: "Are hex color codes case-sensitive?",
      answer:
        "No—#ABC and #abc are the same. Style guides may still prefer lowercase.",
    },
    {
      question: "How do designers pair this with contrast checks?",
      answer:
        "Convert brand hex to RGB/HSL, then test text contrast against backgrounds.",
    },
    {
      question: "Does hex↔RGB conversion change the perceived color?",
      answer:
        "Hex and sRGB RGB represent the same sRGB color; displays still vary.",
    },
    {
      question: "Can I paste hex tokens from Figma or Sketch?",
      answer:
        "Yes—copy the hex token and convert for hand-off to developers.",
    },
    {
      question: "What about wide-gamut or Display P3 colors?",
      answer:
        "This converter targets classic hex/sRGB. Wide-gamut workflows need specialized tools.",
    },
    {
      question: "Should I keep a trailing alpha of FF when opaque?",
      answer:
        "FF means fully opaque. You can drop to 6-digit hex when opacity is full.",
    },
    {
      question: "Does hex conversion leave my browser session?",
      answer:
        "Conversion runs locally in the page session.",
    }],
  "color-picker": [
    {
      question: "What is the difference between HEX, RGB, and HSL?",
      answer:
        "They describe the same color in different ways. HEX and RGB give red, green, and blue amounts. HSL gives hue, saturation, and lightness, which is easier to adjust by hand.",
    },
    {
      question: "How do I use a picked color in CSS?",
      answer:
        "Copy the value and paste it into a CSS property, for example color: #1E90FF; or background: rgb(30, 144, 255);.",
    },
  ],
  "html-encoder": [
    {
      question: "What are HTML entities?",
      answer:
        "HTML entities are codes such as &lt; for < and &amp; for & that let a page show those characters as text instead of reading them as markup.",
    },
    {
      question: "When should I encode HTML?",
      answer:
        "Encode text when you want to display code on a page, or when user input is shown inside HTML, so tags appear as text instead of running.",
    },
    {
      question: "How do I escape HTML so tags show as plain text?",
      answer:
        "Paste the markup, encode to entities, and place the result where you need literal tags visible.",
    },
    {
      question: "What are HTML character entities used for?",
      answer:
        "They represent reserved characters like <, >, &, and quotes so browsers do not treat them as markup.",
    },
    {
      question: "When should I encode HTML rather than sanitize it?",
      answer:
        "Encode when you must display source as text. Sanitize when you allow a safe HTML subset to render.",
    },
    {
      question: "Why encode ampersands with special care?",
      answer:
        "& starts entities; a bare & in text should become &amp; to keep HTML valid.",
    },
    {
      question: "Can I reverse entities back into editable markup?",
      answer:
        "Yes—decode reverses common entities so you can edit the original characters again.",
    },
    {
      question: "How can blogs publish code samples safely?",
      answer:
        "Escape the sample HTML/XML inside <pre><code> (or a highlighter that escapes for you).",
    },
    {
      question: "Do attribute quotes need entity encoding?",
      answer:
        "Yes when the quote matches the attribute delimiter—use &quot; or &apos; as appropriate.",
    },
    {
      question: "Is escaping alone enough to stop every XSS risk?",
      answer:
        "No. Context matters (HTML, attributes, JS, URLs). Use framework-safe APIs and CSP too.",
    },
    {
      question: "Which entity codes appear most often in samples?",
      answer:
        "&lt; &gt; &amp; &quot; and &nbsp; show up constantly in escaped samples.",
    },
    {
      question: "Should entire documents be escaped for HTML email?",
      answer:
        "Sometimes for embedding samples; for sending HTML email use a proper MIME HTML part instead.",
    },
    {
      question: "How do Markdown renderers treat escaped HTML?",
      answer:
        "Markdown may pass raw HTML through. Escape when you need literal tags in the rendered page.",
    },
    {
      question: "Can a browser expand entities without a decode button?",
      answer:
        "Yes—HTML parsers expand entities when rendering. Encoded source still shows as text if double-escaped.",
    },
    {
      question: "Why would a decoder refuse my pasted string?",
      answer:
        "Broken entity syntax or unsupported sequences. Fix &…; forms and retry.",
    },
    {
      question: "Is HTML entity encoding the same as percent-encoding?",
      answer:
        "No. Percent-encoding is for URLs; HTML entities are for markup text.",
    },
    {
      question: "When is a rich-text editor safer than hand escaping?",
      answer:
        "When non-authors publish content—editors apply context-aware escaping for you.",
    }],
  "html-minifier": [
    {
      question: "Does minifying HTML improve page speed?",
      answer:
        "It makes the file smaller, which can help a little, especially without compression. Servers that already use gzip or Brotli see a smaller gain.",
    },
    {
      question: "What does an HTML minifier remove?",
      answer:
        "This one removes comments and collapses spaces between tags, while leaving the contents of pre, textarea, script, and style unchanged.",
    },
    {
      question: "How do I minify HTML before uploading a page?",
      answer:
        "Paste the HTML, run minify, and save the compact file. Keep a readable source in version control.",
    },
    {
      question: "Does shrinking HTML usually help load times?",
      answer:
        "It can shrink transfer size slightly. Combine with compression (gzip/br) and image optimization for bigger wins.",
    },
    {
      question: "What kinds of bytes does an HTML minifier drop?",
      answer:
        "Extra whitespace, comments, and sometimes optional quotes or tags—depending on aggressiveness.",
    },
    {
      question: "Will HTML comments vanish after minifying?",
      answer:
        "Most comments are stripped. Preserve license headers manually if you must keep them.",
    },
    {
      question: "Can aggressive minify break pre or textarea content?",
      answer:
        "Aggressive whitespace removal can. Prefer safer presets around those elements.",
    },
    {
      question: "Does this pass also compress inline CSS and JS?",
      answer:
        "Some tools do light passes; dedicated CSS/JS minifiers are better for scripts and styles.",
    },
    {
      question: "Why might adjacent links look stuck together afterward?",
      answer:
        "Removed spaces between tags can join visible words. Keep space where text nodes need it.",
    },
    {
      question: "Can attribute quotes disappear during minify?",
      answer:
        "Advanced minifiers might. Spot-check attributes that contain spaces.",
    },
    {
      question: "Are spaces inside quoted attribute values preserved?",
      answer:
        "They should be. If a value looks wrong, compare against your source.",
    },
    {
      question: "Is the size savings counted in raw bytes?",
      answer:
        "Yes—compare source and minified byte lengths (and again after gzip).",
    },
    {
      question: "What is a practical maximum paste size here?",
      answer:
        "Huge pages may slow the tab. Minify templates in a build pipeline for large sites.",
    },
    {
      question: "Is minifying still useful when gzip already runs?",
      answer:
        "Yes, modestly—smaller input still helps, but gzip already collapses repeated whitespace.",
    },
    {
      question: "Should I minify HTML during local development?",
      answer:
        "Usually no—debug readable HTML, minify in CI or before deploy.",
    },
    {
      question: "Can invalid HTML still go through a minifier?",
      answer:
        "Yes, which can hide problems. Validate important templates separately.",
    },
    {
      question: "Does HTML minify upload my markup to a server?",
      answer:
        "Processing is intended to stay in the browser session.",
    }],
  "css-minifier": [
    {
      question: "Why minify CSS?",
      answer:
        "A smaller stylesheet downloads faster. Minifying removes comments and spare whitespace without changing what the rules do.",
    },
    {
      question: "Can I un-minify CSS later?",
      answer:
        "You can reformat it, but removed comments are gone. Keep your original, readable file and publish the minified copy.",
    },
    {
      question: "How do I minify a stylesheet before publish?",
      answer:
        "Paste the CSS, run minify, and copy the compact output. Keep the readable source in version control.",
    },
    {
      question: "Will minifying remove every comment?",
      answer:
        "Most comments are stripped. Important license headers may need to be preserved manually if required.",
    },
    {
      question: "Is calc() usually safe after minifying?",
      answer:
        "Yes when whitespace inside calc() is handled carefully. Spot-check complex expressions after minify.",
    },
    {
      question: "Does minification change colors or shorten values?",
      answer:
        "Some minifiers shorten hex colors or zero values. Compare a visual pass if your pipeline is aggressive.",
    },
    {
      question: "Are url() paths rewritten?",
      answer:
        "Paths inside url() should stay intact. Broken paths usually mean a bad paste, not intentional rewrites.",
    },
    {
      question: "Why can spacing around combinators matter?",
      answer:
        "Removing a required space can change selectors like div :first-child. Review selectors after minify.",
    },
    {
      question: "Is the final semicolon before a closing brace dropped when minifying?",
      answer:
        "Often the final semicolon before } is optional and may be dropped. That is normal CSS.",
    },
    {
      question: "Does this combine duplicate rules?",
      answer:
        "Simple minifiers usually do not merge selectors. Use a dedicated optimizer if you need that.",
    },
    {
      question: "Is there a practical size limit for pasting CSS to minify?",
      answer:
        "Stay within browser comfort. Split huge bundles if the tab slows.",
    },
    {
      question: "Does minify validate my CSS?",
      answer:
        "No—invalid CSS can still compress. Lint separately before production.",
    },
    {
      question: "Should I minify during development?",
      answer:
        "Keep readable CSS while editing; minify as a build or publish step.",
    },
    {
      question: "Can source maps recover the original?",
      answer:
        "Only if your build pipeline emits maps. This page alone does not create source maps.",
    },
    {
      question: "Will vendor prefixes be removed?",
      answer:
        "Minify should keep prefixes it sees. It does not invent missing prefixes.",
    },
    {
      question: "Is minified CSS harder to debug in DevTools?",
      answer:
        "Yes. Debug with source files or maps, then ship the minified asset.",
    },
    {
      question: "Does minifying upload my stylesheet?",
      answer:
        "Processing stays in the page session.",
    }],
  "password-generator": [
    {
      question: "How long should a password be?",
      answer:
        "Longer is stronger. Many security guides suggest at least 12 to 16 characters for important accounts, with a different password for each site.",
    },
    {
      question: "Is it safe to use an online password generator?",
      answer:
        "This one creates the password in your browser with crypto.getRandomValues and does not send or store it. Save it in a password manager rather than in a note.",
    },
    {
      question: "How do I create a strong random password here?",
      answer:
        "Set length and character classes, generate, then copy into a password manager—not a chat log.",
    },
    {
      question: "Should I include symbols in every password?",
      answer:
        "Symbols raise entropy when the site allows them. Skip only if a form rejects them.",
    },
    {
      question: "How do I avoid look-alike characters?",
      answer:
        "Enable an “exclude ambiguous” option (0/O, 1/l/I) when you must read the password aloud.",
    },
    {
      question: "Can I generate a passphrase of random words instead?",
      answer:
        "Use a passphrase mode if offered; otherwise prefer a long random character string.",
    },
    {
      question: "How many passwords can I mint in one sitting?",
      answer:
        "Generate as needed, but store them in a manager rather than a notes file.",
    },
    {
      question: "Is a longer password always stronger?",
      answer:
        "Length helps a lot when the characters stay unpredictable—avoid keyboard walks.",
    },
    {
      question: "Should I reuse a generated password on two sites?",
      answer:
        "Never reuse. Create a unique password per account.",
    },
    {
      question: "What length works for most modern sites?",
      answer:
        "Sixteen or more characters with mixed classes is a solid default when allowed.",
    },
    {
      question: "Can the generator guarantee a digit and a symbol?",
      answer:
        "Many tools force at least one of each selected class—check the options.",
    },
    {
      question: "How should I store the result safely?",
      answer:
        "Paste into a reputable password manager and enable its autofill; do not email it.",
    },
    {
      question: "Does refreshing the page create a new password?",
      answer:
        "A new generate click does; do not rely on reload alone if the field still shows the old value.",
    },
    {
      question: "Are pronounceable passwords weaker?",
      answer:
        "They can be if the pattern is guessable—prefer fully random when security matters most.",
    },
    {
      question: "What if a site caps password length at 12?",
      answer:
        "Use the maximum allowed with full character variety, and enable 2FA.",
    },
    {
      question: "Should shared team accounts use one generated password?",
      answer:
        "Prefer a shared vault entry with audit logging over a password pasted in Slack.",
    },
    {
      question: "Does generating a password upload it somewhere?",
      answer:
        "Generation on this page is intended to stay in the browser session.",
    }],
  "pdf-merger": [
    {
      question: "How do I combine PDF files into one?",
      answer:
        "Add two or more PDFs, put them in the order you want, then merge and download the single combined file.",
    },
    {
      question: "Does merging PDFs reduce quality?",
      answer:
        "No. Pages are copied into the new file as they are, so text and images are not re-compressed.",
    },
  ],
  "pdf-splitter": [
    {
      question: "How do I extract pages from a PDF?",
      answer:
        "Enter the pages you want, such as 1-3,6, and download a new PDF that holds only those pages. The original file is not changed.",
    },
    {
      question: "Can I split a PDF into separate files?",
      answer:
        "Each run creates one new PDF from the pages you choose. Repeat with a different range for each file you need.",
    },
  ],
  "pdf-page-counter": [
    {
      question: "How do I check how many pages a PDF has?",
      answer:
        "Open the file here and the page count appears without uploading it. Blank pages and covers are included in the count.",
    },
    {
      question: "Can I count pages in several PDFs?",
      answer:
        "Count them one after another. Each file is read on your device and is not uploaded.",
    },
  ],
  "image-color-analyzer": [
    {
      question: "How do I find the main colors in an image?",
      answer:
        "Upload a JPG, PNG, or WebP and choose how many colors to list, from 3 to 10. Similar pixels are grouped and each color shows its share.",
    },
    {
      question: "Can I get the hex code of a color in a photo?",
      answer:
        "Yes. Each listed color can be copied as HEX or RGB, ready for a design tool or CSS.",
    },
  ],
  "qr-code-generator-pro": [
    {
      question: "How do I make a QR code for Wi-Fi?",
      answer:
        "Choose Wi-Fi, enter the network name, the password, and the security type, then download the code. Phones that scan it can join without typing the password.",
    },
    {
      question: "Can I change the colors of a QR code?",
      answer:
        "Yes, but keep strong contrast, with a dark pattern on a light background, so cameras can still read it. Test the code before you print it.",
    },
    {
      question: "How do I create a QR code for a website URL?",
      answer:
        "Paste the HTTPS link, choose size and error correction, then download the PNG or SVG.",
    },
    {
      question: "When should I pick a higher error-correction level?",
      answer:
        "Use higher levels when the code will be small, printed roughly, or partly covered by a logo.",
    },
    {
      question: "Can I encode plain text instead of a link?",
      answer:
        "Yes—switch to text mode for short notes, codes, or instructions.",
    },
    {
      question: "How do I make a contact QR from name and phone?",
      answer:
        "Fill the vCard/contact fields, generate, and test the scan on a phone before printing.",
    },
    {
      question: "Will a logo in the center still scan?",
      answer:
        "Often yes at high error correction with enough quiet zone—always test real devices.",
    },
    {
      question: "How large should a printed QR be on a flyer?",
      answer:
        "Aim for at least ~2 cm (about 0.8 in) square for phone cameras in good light.",
    },
    {
      question: "Can I use brand colors for modules and background?",
      answer:
        "Yes if contrast stays strong; light modules on light backgrounds fail to scan.",
    },
    {
      question: "What is the quiet zone around a QR code?",
      answer:
        "The blank margin that must stay clear of text or graphics so scanners can lock on.",
    },
    {
      question: "Should marketing use static or dynamic codes?",
      answer:
        "Static is simple and offline-friendly; dynamic (via a redirect service) helps if the destination may change.",
    },
    {
      question: "How do I test a Wi-Fi QR before guests arrive?",
      answer:
        "Scan with a second phone on cellular data off to confirm network join works.",
    },
    {
      question: "Can QR codes store very long URLs?",
      answer:
        "They can, but dense codes scan poorly—prefer short links when possible.",
    },
    {
      question: "Do matte and glossy prints scan differently?",
      answer:
        "Glare on glossy stock can block reads; matte usually scans more reliably.",
    },
    {
      question: "How should event badges use QR codes?",
      answer:
        "Print large enough, keep contrast high, and place away from fold lines.",
    },
    {
      question: "What file format is best for print vendors?",
      answer:
        "SVG or high-resolution PNG; avoid tiny compressed JPEGs.",
    },
    {
      question: "Does generating a QR upload my Wi-Fi password?",
      answer:
        "Generation on this page is meant to stay in the browser session.",
    }],
  "random-number-generator": [
    {
      question: "How do I pick a random number between 1 and 10?",
      answer:
        "Set the minimum to 1 and the maximum to 10, keep integers selected, and generate. Each whole number in the range has the same chance.",
    },
    {
      question: "How do I draw numbers without repeats?",
      answer:
        "Turn on unique mode. It works for integers, and the count cannot be larger than the number of values in the range.",
    },
    {
      question: "How do I pick one random integer inside a min–max range?",
      answer:
        "Enter the inclusive bounds, generate, and copy the result for your draw or game.",
    },
    {
      question: "Can I draw several unique numbers for a raffle?",
      answer:
        "Enable unique/no-repeat mode, set how many picks you need, then generate the set.",
    },
    {
      question: "When is allowing duplicates the right choice?",
      answer:
        "Dice-like rolls and with-replacement sampling; use unique mode for raffles without replacement.",
    },
    {
      question: "How do I generate a random number for a classroom picker?",
      answer:
        "Set the range to your roster size (or map names to numbers) and generate fairly in front of the class.",
    },
    {
      question: "Are browser random draws suitable for high-stakes lotteries?",
      answer:
        "No—use certified drawing processes for money or legal lotteries.",
    },
    {
      question: "Can I set the same minimum and maximum?",
      answer:
        "That only yields that single value; widen the range if you need variety.",
    },
    {
      question: "How do negative bounds work?",
      answer:
        "Min can be below zero; the tool picks uniformly across the inclusive integer range.",
    },
    {
      question: "What if I need a random decimal between 0 and 1?",
      answer:
        "Use a decimal mode if offered, or scale an integer draw—avoid claiming crypto security.",
    },
    {
      question: "How should streamers show a fair giveaway pick?",
      answer:
        "Show the range and result on screen, and consider recording the draw.",
    },
    {
      question: "Does refreshing change the last number automatically?",
      answer:
        "Only a new generate action should; do not treat a stale field as a fresh draw.",
    },
    {
      question: "Can I exclude a number that already won?",
      answer:
        "Narrow the range or switch to unique multi-draw so winners are not reused.",
    },
    {
      question: "How do apps differ from this page for randomness?",
      answer:
        "OS APIs may offer stronger CSPRNG options; this page is for everyday casual picks.",
    },
    {
      question: "What range is too wide for a quick UI draw?",
      answer:
        "Extremely huge spans can be awkward to display—keep bounds practical for your use case.",
    },
    {
      question: "Should I seed the generator for reproducible drills?",
      answer:
        "Only if a seed option exists and you need repeatable classroom demos; unseeded is fine for casual use.",
    },
    {
      question: "Does picking a number upload my range settings?",
      answer:
        "Generation is intended to stay in the browser session.",
    }],
  "pdf-to-text": [
    {
      question: "How do I copy text from a PDF?",
      answer:
        "Open the PDF here to extract its text layer, then copy or download the text. The file stays on your device.",
    },
    {
      question: "Why does a scanned PDF give no text?",
      answer:
        "A scanned page is a picture of text with no text layer to read. It needs OCR (optical character recognition), which this tool does not run.",
    },
  ],
  "pdf-metadata": [
    {
      question: "How do I see who created a PDF?",
      answer:
        "Open the file and read the Author, Creator, and Producer fields, along with the creation and modification dates, when the document includes them.",
    },
    {
      question: "Should I remove metadata before sharing a PDF?",
      answer:
        "If the fields show a name, a company, or software you would rather not share, clearing them is a sensible step. Text inside the pages is not changed.",
    },
  ],
  "text-to-pdf": [
    {
      question: "How do I turn a text file into a PDF?",
      answer:
        "Paste the text, choose A4 or Letter, the font size, margins, and page numbers, then create and download the PDF.",
    },
    {
      question: "Why do some characters show as a question mark?",
      answer:
        "The PDF uses the Helvetica font, which cannot draw every script or emoji. Characters it cannot draw are replaced with ?.",
    },
  ],
  "markdown-to-html": [
    {
      question: "What is Markdown?",
      answer:
        "Markdown is a plain-text format where symbols mark formatting, such as # for a heading, ** for bold, and - for a list item. It is easy to write and converts cleanly to HTML.",
    },
    {
      question: "Does this support tables and code blocks?",
      answer:
        "Yes. Simple tables, fenced code blocks, headings, lists, links, images, and quotes are converted.",
    },
    {
      question: "How do I turn a Markdown draft into HTML?",
      answer:
        "Paste the Markdown, convert, then copy the HTML into your CMS, email, or static page.",
    },
    {
      question: "Do headings become h1–h6 tags?",
      answer:
        "Yes—# through ###### map to the matching heading levels in the output.",
    },
    {
      question: "How are Markdown links rendered?",
      answer:
        "[text](url) becomes an <a href> tag. Add titles only if your dialect supports them.",
    },
    {
      question: "What about images written in Markdown?",
      answer:
        "![alt](src) becomes <img>. Ensure the src URL is reachable in the target site.",
    },
    {
      question: "Are fenced code blocks wrapped in pre and code?",
      answer:
        "Typically yes, often with a language class when you label the fence.",
    },
    {
      question: "How do unordered lists convert?",
      answer:
        "Hyphen or asterisk list markers become ul/li structures.",
    },
    {
      question: "Will blockquotes survive conversion?",
      answer:
        "Lines starting with > usually become <blockquote> elements.",
    },
    {
      question: "Can I preview the HTML visually on the page?",
      answer:
        "If a preview pane exists, use it; otherwise paste into a local HTML file to check.",
    },
    {
      question: "Does front matter (YAML) convert?",
      answer:
        "Most simple converters ignore or pass it through—strip front matter before converting.",
    },
    {
      question: "How do I keep inline code looking monospace?",
      answer:
        "Backticks become <code>; pair with CSS for the monospace look.",
    },
    {
      question: "Are task-list checkboxes supported?",
      answer:
        "Only if the engine implements GFM task lists; otherwise they stay as plain text.",
    },
    {
      question: "What if my Markdown uses footnotes?",
      answer:
        "Footnote support varies—confirm or convert footnotes manually.",
    },
    {
      question: "Should I sanitize the HTML before publishing?",
      answer:
        "Yes when the Markdown comes from untrusted authors—sanitize or use a safe renderer.",
    },
    {
      question: "Can I convert a whole README at once?",
      answer:
        "Yes—paste the file contents; review relative links afterward.",
    },
    {
      question: "Does Markdown-to-HTML upload my draft?",
      answer:
        "Conversion on this page is meant to stay in the browser session.",
    }],
  "html-to-markdown": [
    {
      question: "Why convert HTML to Markdown?",
      answer:
        "Markdown is easier to edit and review than HTML, and many documentation sites, wikis, and note apps use it.",
    },
    {
      question: "Does the conversion keep links and images?",
      answer:
        "Yes. Links become [text](url) and images become ![alt](src). Scripts, styles, and embedded frames are skipped.",
    },
    {
      question: "How do I convert an HTML fragment into Markdown?",
      answer:
        "Paste the HTML, convert, and copy the Markdown. Review lists, links, and tables afterward.",
    },
    {
      question: "Why bother converting HTML into Markdown form?",
      answer:
        "Markdown is easier to edit in repos and CMSs; conversion helps migrate old HTML content.",
    },
    {
      question: "Does the converter keep hyperlinks and images?",
      answer:
        "Usually yes as [text](url) and ![alt](src). Missing href/src values need a manual fix.",
    },
    {
      question: "What happens to embedded script and style tags?",
      answer:
        "They are typically dropped because Markdown has no safe equivalent for raw scripts.",
    },
    {
      question: "Are generic div and span wrappers kept as markup?",
      answer:
        "Often flattened away. Semantic tags (headings, lists, emphasis) matter more.",
    },
    {
      question: "Why might every ordered item render as 1.?",
      answer:
        "Some engines emit 1. for each item and renumber on render. Others write incremental numbers.",
    },
    {
      question: "Do nested lists keep their indentation levels?",
      answer:
        "Good converters indent nested ul/ol. Fix indentation if a level looks flat.",
    },
    {
      question: "Is emphasis inside table cells preserved?",
      answer:
        "When tables are supported, emphasis markers should remain inside cells—verify complex tables.",
    },
    {
      question: "What if an anchor tag is missing its href?",
      answer:
        "You may get bare text or an empty link. Add URLs before publishing.",
    },
    {
      question: "Are HTML entities turned into ordinary characters?",
      answer:
        "Often yes (&amp; → &). Re-escape if you need literal entity text.",
    },
    {
      question: "Is whitespace inside fenced code blocks kept?",
      answer:
        "<pre><code> content should keep indentation; report bugs if a fence collapses spaces.",
    },
    {
      question: "Do HTML comments survive the Markdown conversion?",
      answer:
        "Usually removed. Keep important notes outside the HTML before converting.",
    },
    {
      question: "Can I convert an entire saved web page dump?",
      answer:
        "You can paste it, but navigation chrome and scripts will clutter results—trim to the article body first.",
    },
    {
      question: "Do complex HTML tables always survive intact?",
      answer:
        "Simple tables fare better than merged cells. Complex layouts may need manual Markdown tables.",
    },
    {
      question: "Does HTML-to-Markdown send markup to a remote server?",
      answer:
        "Conversion on this page is meant to run locally in the session.",
    }],
  "text-diff": [
    {
      question: "What is a diff?",
      answer:
        "A diff is a list of the differences between two versions of a text: what was added, what was removed, and what stayed the same.",
    },
    {
      question: "Should I use line mode or word mode?",
      answer:
        "Use line mode for code, lists, and files where whole lines change. Use word mode when a sentence was edited in place.",
    },
  ],
  "duplicate-line-remover": [
    {
      question: "How do I remove duplicates from a list?",
      answer:
        "Paste the list with one item per line and run the tool. The first copy of each line is kept in its original order and later repeats are dropped.",
    },
    {
      question: "Can it ignore differences in case or spaces?",
      answer:
        "Yes. Turn on the case and trim options so lines such as Apple and apple, or lines with extra spaces, count as the same.",
    },
    {
      question: "How do I drop repeated lines from a list?",
      answer:
        "Paste one item per line, run the remover, and copy the deduped list. First occurrences usually keep their order.",
    },
    {
      question: "Which copy is kept when a line repeats?",
      answer:
        "Typically the first. Later identical lines are removed.",
    },
    {
      question: "Does removing duplicates also reorder the lines?",
      answer:
        "Not by default. Deduping preserves encounter order unless you also sort.",
    },
    {
      question: "How can I dedupe a list of email addresses line by line?",
      answer:
        "Paste one address per line; enable case-insensitive matching if needed, then dedupe.",
    },
    {
      question: "Is there a way to inspect which lines were dropped as repeats?",
      answer:
        "Some UIs highlight removals; otherwise compare counts before and after or diff the two lists.",
    },
    {
      question: "How are empty lines treated during dedupe?",
      answer:
        "Consecutive blanks may collapse depending on options. Decide whether empty lines are meaningful.",
    },
    {
      question: "Does the remover operate on words inside a single line?",
      answer:
        "Line removers operate per line, not per word. Split words to lines first if that is the goal.",
    },
    {
      question: "Can whole CSV rows be deduped as lines?",
      answer:
        "Yes if each row is one line and equality is exact. Quoted commas still count as part of the line.",
    },
    {
      question: "Is there a practical paste size for duplicate removal?",
      answer:
        "Very large lists may slow the tab. Chunk when needed.",
    },
    {
      question: "Can trim-on-match alter spaces on the lines I keep?",
      answer:
        "Trim options affect matching and may strip edge spaces on kept lines—read the toggle labels.",
    },
    {
      question: "Why might near-identical lines both survive dedupe?",
      answer:
        "Hidden spaces, different Unicode lookalikes, or case differences can separate them. Enable normalize options.",
    },
    {
      question: "Can I dedupe while ignoring case?",
      answer:
        "Yes when a case-insensitive mode exists—Apple and apple count as one.",
    },
    {
      question: "Should I sort before removing duplicates?",
      answer:
        "Only if you want sorted output. Sorting is separate from uniqueness.",
    },
    {
      question: "Do Windows and Unix line endings affect matches?",
      answer:
        "Normalize endings first so the same text does not diverge on CR characters.",
    },
    {
      question: "Is my list uploaded during dedupe?",
      answer:
        "Deduping runs in the browser session.",
    }],
  "whitespace-remover": [
    {
      question: "How do I remove double spaces from text?",
      answer:
        "Turn on the option that collapses repeated spaces. Runs of spaces inside each line become a single space.",
    },
    {
      question: "How do I delete empty lines?",
      answer:
        "Use remove blank lines to drop every empty line, or collapse blank lines to keep one empty line between paragraphs.",
    },
  ],
  "line-sorter": [
    {
      question: "How do I sort a list alphabetically?",
      answer:
        "Paste one item per line and choose A to Z, or Z to A for reverse order. Lines that are equal keep their original order.",
    },
    {
      question: "How do I sort lines by number?",
      answer:
        "Choose numeric ascending or descending. Each line is sorted by the number at its start, so 2 comes before 10.",
    },
    {
      question: "How do I alphabetize a pasted list of lines?",
      answer:
        "Paste one item per line, choose ascending A–Z, sort, then copy the result.",
    },
    {
      question: "Can I sort case-insensitively so a and A group together?",
      answer:
        "Use a case-insensitive option when available so letter case does not scramble order.",
    },
    {
      question: "How do I put the longest lines first?",
      answer:
        "Some sorters offer length order; otherwise sort in a spreadsheet by LEN().",
    },
    {
      question: "Will blank lines stay in place after sorting?",
      answer:
        "Depends on settings—many tools keep or drop empties; pick the behavior you need.",
    },
    {
      question: "How do I sort a grocery list without duplicates?",
      answer:
        "Sort, then remove duplicate lines (or use a combined sort+unique mode).",
    },
    {
      question: "Can I sort by the second word on each line?",
      answer:
        "This page sorts whole lines. Split columns elsewhere if you need field-based sorts.",
    },
    {
      question: "Why do numbers sort as 10 before 2?",
      answer:
        "That is lexicographic order. Choose numeric sort when you need 2 before 10.",
    },
    {
      question: "How do I reverse a previously sorted list?",
      answer:
        "Run a descending / reverse sort, or reverse the line order without recomparing keys.",
    },
    {
      question: "Does locale affect alphabetical order?",
      answer:
        "Yes—accent and locale rules differ. Results may vary from another OS dictionary order.",
    },
    {
      question: "Can I sort CSV rows here?",
      answer:
        "Only if each row is one line and you accept whole-line order—not true CSV column sort.",
    },
    {
      question: "What happens to leading spaces on a line?",
      answer:
        "They can change order. Trim lines first when whitespace should not matter.",
    },
    {
      question: "Is the original paste kept after I sort?",
      answer:
        "Copy the output; undo locally if you still have the source. Keep a backup for big lists.",
    },
    {
      question: "How should I sort version strings like 1.10 vs 1.9?",
      answer:
        "Plain alpha/numeric sorts misfire on versions—use a version-aware tool for semver.",
    },
    {
      question: "Can I shuffle lines randomly instead of sorting?",
      answer:
        "Use a shuffle/randomize mode if present; otherwise sort is deterministic.",
    },
    {
      question: "Does line sorting send my list to a server?",
      answer:
        "Sorting on this page is intended to stay in the browser session.",
    }],
  "ai-prompt-generator": [
    {
      question: "What makes a good AI prompt?",
      answer:
        "Say what you want, who it is for, the tone, the format, and the length. A clear goal and an example of the output usually help more than extra adjectives.",
    },
    {
      question: "Can I use the prompt in ChatGPT, Gemini, or Claude?",
      answer:
        "Yes. The result is plain text you can paste into any chat assistant. Different models may still answer the same prompt differently.",
    },
    {
      question: "How do I turn a vague topic into a usable AI prompt?",
      answer:
        "Enter the topic, add audience and format constraints, then copy the structured prompt into your model of choice.",
    },
    {
      question: "What belongs in a strong prompt besides the topic?",
      answer:
        "Goal, audience, tone, length, must-include facts, and what to avoid. Specificity beats adjectives.",
    },
    {
      question: "Will the generated prompt work in ChatGPT, Gemini, or Claude?",
      answer:
        "Yes—prompts are plain text. Paste into any chat model and adjust for that product’s quirks.",
    },
    {
      question: "Should I include examples inside the prompt?",
      answer:
        "Few-shot examples help when format is strict (JSON, tables). Keep them short and representative.",
    },
    {
      question: "Does this page call an AI model by itself?",
      answer:
        "Preset assembly is local; any Generate with AI control follows the availability and privacy note on the page.",
    },
    {
      question: "How long should a finished prompt be?",
      answer:
        "Long enough to constrain the task, short enough to skim. Cut fluff that does not change the output.",
    },
    {
      question: "How do system instructions differ from the user ask?",
      answer:
        "System instructions set role and rules; user prompts state the task. Many UIs merge them into one box.",
    },
    {
      question: "How do I ask for JSON or a table?",
      answer:
        "State the schema or column list explicitly and forbid extra commentary when you need clean parseable output.",
    },
    {
      question: "Why do vague adjectives hurt results?",
      answer:
        "Words like “engaging” leave the model guessing. Replace them with measurable requirements.",
    },
    {
      question: "Can I reuse one template across tasks?",
      answer:
        "Yes—keep slots for topic, audience, and constraints. Fill slots per task instead of rewriting from scratch.",
    },
    {
      question: "How do I keep secrets out of prompts?",
      answer:
        "Omit secrets and PII. Use placeholders, then fill real values in a private environment.",
    },
    {
      question: "What does chaining several prompts mean?",
      answer:
        "Running focused prompts in sequence—outline, then draft, then edit—often beats one giant ask.",
    },
    {
      question: "Is it useful to list things the model should avoid?",
      answer:
        "Brief negative constraints help (“no hype”, “no medical advice”). Prefer positive specs when possible.",
    },
    {
      question: "How do I debug a prompt that got worse?",
      answer:
        "Diff recent changes, remove conflicting instructions, and test one variable at a time.",
    },
    {
      question: "When should I stop tweaking and edit the draft?",
      answer:
        "When further prompt edits only shuffle wording. Finish polish in a normal editor.",
    }],
  "prompt-to-image": [
    {
      question: "How do I write a good image prompt?",
      answer:
        "Start with the subject, then add the setting, lighting, camera or art style, color palette, mood, and aspect ratio. Be specific about what matters and leave out the rest.",
    },
    {
      question: "What is a negative prompt?",
      answer:
        "A negative prompt lists things that should stay out of the image, such as text, extra fingers, or blur. Not every image model reads one.",
    },
    {
      question: "How do I structure subject, style, and lighting in one prompt?",
      answer:
        "Lead with the subject, then style, lighting, and composition so the model prioritizes what matters most.",
    },
    {
      question: "Should I put camera angle near the start or the end?",
      answer:
        "Put framing early if angle is critical; bury optional flourishes later so they do not override the subject.",
    },
    {
      question: "How can I ask for photorealism without looking plastic?",
      answer:
        "Mention natural skin texture, soft light, and real-world lens cues instead of only “8k ultra realistic.”",
    },
    {
      question: "When should I use short prompts versus long ones?",
      answer:
        "Short prompts explore ideas; longer ones lock details once you know what works.",
    },
    {
      question: "How do I keep text out of the generated scene?",
      answer:
        "Say “no text, no watermark, no logos” in the negative prompt and avoid quoting signs in the main prompt.",
    },
    {
      question: "Can I specify a color palette for brand work?",
      answer:
        "Yes—name hex-inspired colors or palette words (muted teal, warm sand) so outputs stay on-brand.",
    },
    {
      question: "How do I request a plain studio background?",
      answer:
        "Say “seamless studio backdrop” or “solid light-gray background” and ban busy scenes in the negative prompt.",
    },
    {
      question: "What belongs in a reusable prompt checklist?",
      answer:
        "Subject, action, setting, style, lighting, lens/framing, and a short negative list.",
    },
    {
      question: "How should teams share winning prompts?",
      answer:
        "Store templates with variables (subject, color) in a shared doc so results stay consistent.",
    },
    {
      question: "Does adding “award-winning” usually help?",
      answer:
        "Rarely—prefer concrete visual terms over vague praise words.",
    },
    {
      question: "How do I describe materials like glass or metal clearly?",
      answer:
        "Name the material and its finish (brushed aluminum, frosted glass) plus how light hits it.",
    },
    {
      question: "Can I combine illustration and photo styles?",
      answer:
        "Yes, but pick a dominant style; mixed cues can confuse the model.",
    },
    {
      question: "Why might hands look wrong even with a careful prompt?",
      answer:
        "Hands are a known weak spot—simplify poses or crop tighter when quality matters.",
    },
    {
      question: "Should NSFW filters change how I write prompts?",
      answer:
        "Follow each model’s policy; avoid prohibited content rather than trying to jailbreak wording.",
    },
    {
      question: "Does this prompt builder render the final image?",
      answer:
        "It helps you write the prompt; you paste it into your chosen image model separately.",
    }],
  "prompt-to-video": [
    {
      question: "How do I write a prompt for an AI video?",
      answer:
        "Describe one shot: the subject, the action, the setting, the camera move, the lens, the light, and the length. Short, concrete prompts usually work better than long stories.",
    },
    {
      question: "Which video models can use these prompts?",
      answer:
        "The output is plain text, so you can paste it into any text-to-video tool. Each model follows camera and timing directions in its own way.",
    },
    {
      question: "How do I describe motion so clips feel intentional?",
      answer:
        "State subject action, camera move, and pacing (slow push-in, quick pan) in plain language.",
    },
    {
      question: "Should one prompt cover the whole story or one shot?",
      answer:
        "One shot per prompt is clearer; chain shots with a short storyboard for longer narratives.",
    },
    {
      question: "How do I keep lighting consistent across cuts?",
      answer:
        "Repeat the same time-of-day and light quality words in every shot prompt.",
    },
    {
      question: "Can I specify duration inside the prompt text?",
      answer:
        "Some models honor “5-second clip”; others use UI duration—follow the model’s controls.",
    },
    {
      question: "How do I reduce flicker between frames?",
      answer:
        "Ask for stable lighting and smooth motion; avoid rapid style changes mid-prompt.",
    },
    {
      question: "What camera verbs work well for AI video?",
      answer:
        "Dolly, tracking shot, orbit, handheld, and static tripod are clearer than vague “cinematic.”",
    },
    {
      question: "How should sound be handled in a video prompt?",
      answer:
        "Describe diegetic sounds only if the model supports audio; otherwise plan sound in post.",
    },
    {
      question: "Can I adapt a still-image prompt into a video prompt?",
      answer:
        "Reuse subject and style, then add motion and camera direction the still prompt lacked.",
    },
    {
      question: "How do I avoid morphing faces mid-clip?",
      answer:
        "Keep identity cues short and consistent; avoid conflicting age/hair descriptions.",
    },
    {
      question: "Should I mention resolution and fps every time?",
      answer:
        "If the UI sets them, skip; if not, state target fps and resolution once.",
    },
    {
      question: "How do product demos differ from narrative clips?",
      answer:
        "Demos emphasize clear product motion and readable labels; narratives emphasize emotion and beats.",
    },
    {
      question: "What is a useful negative list for video?",
      answer:
        "No text overlays, no watermark, no jumpy cuts, no extra limbs—adjust per model.",
    },
    {
      question: "How do I iterate after a weak first render?",
      answer:
        "Change one variable (motion, lens, or lighting) per retry so you learn what worked.",
    },
    {
      question: "Can prompts request specific transitions?",
      answer:
        "Some models ignore transition words; cut in an editor when precision matters.",
    },
    {
      question: "Does this page generate the video file for me?",
      answer:
        "It helps you craft the prompt; generation happens in your video model or app.",
    }],
  "ai-article-detector": [
    {
      question: "Are AI detectors accurate?",
      answer:
        "No detector can prove who wrote a text. Pattern-based scores can flag human writing and miss edited AI writing, so treat any result as a prompt to review, not as evidence.",
    },
    {
      question: "What patterns does this tool look at?",
      answer:
        "It reports sentence length, how varied the vocabulary is, and repeated phrases, so you can see where a draft sounds flat or repetitive.",
    },
    {
      question: "How do writing-pattern checks work on a draft?",
      answer:
        "They look for statistical regularities common in model output—even pacing, stock transitions, and low burstiness—not a proof of authorship.",
    },
    {
      question: "Why avoid treating the result as a percentage score?",
      answer:
        "A single percent implies false precision. Pattern notes are more honest than a fake certainty number.",
    },
    {
      question: "Can careful human writing look even to a checker?",
      answer:
        "Yes. Formal reports and edited marketing copy can trigger similar signals. Use results as a review prompt, not a verdict.",
    },
    {
      question: "What should I do if patterns look AI-like?",
      answer:
        "Rewrite transitions, vary sentence length, and add specific details only you know. Then re-check.",
    },
    {
      question: "Does analyzing text upload my draft?",
      answer:
        "Local checks stay in the browser; any optional AI analyze step follows the on-page privacy note.",
    },
    {
      question: "Are detector scores enough for school discipline cases?",
      answer:
        "No tool is definitive. Institutions should combine process evidence with human review, not detectors alone.",
    },
    {
      question: "Which cues does this page highlight in a draft?",
      answer:
        "Things like repetitive openers, uniform paragraph length, and generic phrasing—signals to investigate, not proof.",
    },
    {
      question: "Can I check one paragraph at a time?",
      answer:
        "Yes. Smaller samples can show which sections feel most templated.",
    },
    {
      question: "Will heavy editing after AI drafting clear all signals?",
      answer:
        "Often it reduces them, but some structure can remain. Human judgment still matters.",
    },
    {
      question: "Should I paste confidential client text into a checker?",
      answer:
        "Prefer not to. Use sample or redacted text when exploring patterns.",
    },
    {
      question: "Do code blocks affect the reading?",
      answer:
        "Mixed content can skew cues. Check prose separately from code when possible.",
    },
    {
      question: "Is a human label a guarantee of authorship?",
      answer:
        "No. Labels are heuristic. Treat them as coaching, not certification.",
    },
    {
      question: "How is this different from a plagiarism checker?",
      answer:
        "Plagiarism tools match known sources. Pattern checks estimate style regularity without claiming a source match.",
    },
    {
      question: "Can multiple languages be analyzed the same way?",
      answer:
        "Support varies. English-centric heuristics may misread other languages.",
    },
    {
      question: "What is a healthy workflow after a flag?",
      answer:
        "Revise for voice and specifics, cite sources, and keep drafts that show your process.",
    }],
  "ai-article-compressor": [
    {
      question: "How do I shorten an article without losing meaning?",
      answer:
        "Cut wordy phrases first, then repeated points, then whole sentences that do not add anything. Compare the result with the original before you use it.",
    },
    {
      question: "Which compression level should I choose?",
      answer:
        "Light only swaps wordy phrases. Medium also drops repeats. Strong can skip sentences that start the same way, so check it more carefully.",
    },
    {
      question: "How do I shorten a long draft while keeping the point?",
      answer:
        "Paste the article, pick a compression level, and review the shorter version for missing facts before you publish.",
    },
    {
      question: "Which compression strength should I try first?",
      answer:
        "Begin with a light pass for polish, then try a stronger level only if you still need fewer words.",
    },
    {
      question: "Will compression remove citations and quotes?",
      answer:
        "Aggressive modes may drop or shorten them. Re-check sources and restore quotes you must keep.",
    },
    {
      question: "Can I compress one section instead of the whole piece?",
      answer:
        "Yes—paste only that section, compress, then splice it back into the full draft.",
    },
    {
      question: "Does a shorter draft always read better?",
      answer:
        "Not always. Over-compression can sound abrupt. Prefer clarity over the lowest word count.",
    },
    {
      question: "Will detectors treat compressed text as human-written?",
      answer:
        "No reliable guarantee. Compression changes length and phrasing, not authorship proof.",
    },
    {
      question: "How should I handle technical terms during compression?",
      answer:
        "Skim the output for jargon that was dropped or altered. Put critical terms back manually.",
    },
    {
      question: "Is there a word-count target I should aim for?",
      answer:
        "Match the channel limit (newsletter, abstract, social). Compress iteratively until you hit it without losing claims.",
    },
    {
      question: "Can bullet lists survive compression?",
      answer:
        "Often they flatten into paragraphs. Reformat lists afterward if structure matters.",
    },
    {
      question: "Does the tool invent new facts to fill gaps?",
      answer:
        "It should not invent research. Still verify every number and name against your source draft.",
    },
    {
      question: "What if the compressed version changes my tone?",
      answer:
        "Edit a few sentences by hand after compression, or try a milder level.",
    },
    {
      question: "Should I compress before or after editing for SEO?",
      answer:
        "Usually edit structure and keywords first, then compress so SEO phrases are less likely to vanish.",
    },
    {
      question: "Can I use it on translated text?",
      answer:
        "Yes, but meaning drift risk rises. Have a bilingual reader check the result.",
    },
    {
      question: "How large an article can I paste?",
      answer:
        "Stay within the on-page limit. Split very long pieces into chapters if needed.",
    },
    {
      question: "Is the compressed text stored after I leave?",
      answer:
        "It stays in the page session only unless you copy it elsewhere.",
    }],
  "tip-calculator": [
    {
      question: "How do I calculate a 20% tip?",
      answer:
        "Multiply the bill by 0.20. On a $45 bill, the tip is $9 and the total is $54. An easy check is 10% (move the decimal point) times two.",
    },
    {
      question: "How do I split a bill with a tip?",
      answer:
        "Add the tip to the bill, then divide the total by the number of people. The calculator shows the tip, the total, and the amount per person.",
    },
  ],
  "sales-tax-calculator": [
    {
      question: "How do I calculate sales tax?",
      answer:
        "Multiply the price by the tax rate and divide by 100, then add the result to the price. $50 at 8% is $4 tax, so the total is $54.",
    },
    {
      question: "How do I find the price before tax?",
      answer:
        "Divide the total by 1 plus the rate as a decimal. A $54 total at 8% tax is 54 ÷ 1.08 = $50 before tax.",
    },
    {
      question: "How do I compute total price after adding sales tax?",
      answer:
        "Enter the net price and tax rate percent; add the tax amount to get the gross total.",
    },
    {
      question: "How do I back out the pre-tax amount from a receipt total?",
      answer:
        "Divide the gross by (1 + rate as a decimal) to recover the net price.",
    },
    {
      question: "Why must I type the rate myself?",
      answer:
        "Rates vary by location and product; the calculator does not look up jurisdictions.",
    },
    {
      question: "Can I use the tool for restaurant checks before tip?",
      answer:
        "Yes for tax on the meal; add tip separately unless local rules differ.",
    },
    {
      question: "How do multi-item carts usually apply tax?",
      answer:
        "Many registers tax the discounted subtotal; match your POS policy for line vs order rounding.",
    },
    {
      question: "What rate do I use for mixed taxable and exempt items?",
      answer:
        "Split the cart—tax only the taxable lines at the correct rate.",
    },
    {
      question: "Is sales tax the same as VAT inclusive pricing?",
      answer:
        "No—VAT is often embedded; this tool models add-on sales tax common in the US.",
    },
    {
      question: "How should invoices show tax for clients?",
      answer:
        "List net, rate, tax amount, and gross so the charge is transparent.",
    },
    {
      question: "Can I calculate tax on shipping alone?",
      answer:
        "If shipping is taxable where you sell, run shipping as its own amount at that rate.",
    },
    {
      question: "What if my city and state stack different rates?",
      answer:
        "Enter the combined rate your locality requires, or calculate each layer if bases differ.",
    },
    {
      question: "How do coupons change the taxable base?",
      answer:
        "Often tax applies after store coupons; marketplace rules vary—follow your nexus guidance.",
    },
    {
      question: "Should I round tax to two decimal places?",
      answer:
        "Yes for currency; follow your ledger’s rounding (per line vs on subtotal).",
    },
    {
      question: "Can digital goods need a different rate?",
      answer:
        "Sometimes—product taxability differs; confirm before using a general merchandise rate.",
    },
    {
      question: "How do I sanity-check an 8.25% example?",
      answer:
        "Tax ≈ price × 0.0825; total ≈ price × 1.0825.",
    },
    {
      question: "Does sales-tax math leave the browser?",
      answer:
        "Calculation on this page is meant to stay in the session.",
    }],
  "date-difference-calculator": [
    {
      question: "How do I count the days between two dates?",
      answer:
        "Choose the start and end dates and calculate. The total days are the exact count, and weeks and years, months, and days describe the same span.",
    },
    {
      question: "Is the end date included in the count?",
      answer:
        "The count is the number of days from the start date to the end date, so the start day itself is not added. Add 1 if you need to include both days.",
    },
    {
      question: "How do I measure the span between two calendar dates?",
      answer:
        "Pick start and end dates, then read total days plus the years/months/days breakdown.",
    },
    {
      question: "Does the total include both the first and last calendar days?",
      answer:
        "Usually the count is the difference from start to end without double-counting the start day—add 1 if you need inclusive days.",
    },
    {
      question: "How do leap days change a February-spanning difference?",
      answer:
        "Leap years add February 29. Spans that cross Feb 29 gain an extra day.",
    },
    {
      question: "Why can total days and the months breakdown disagree with a 30-day rule?",
      answer:
        "Total days is exact; months vary in length so month breakdowns are calendar-aware, not fixed 30-day blocks.",
    },
    {
      question: "Do clock times matter in a date-only difference?",
      answer:
        "Date-only mode ignores clock time. Datetime tools may floor or round differently.",
    },
    {
      question: "How can I exclude weekends from a date span?",
      answer:
        "Use a business-day tool or subtract weekends (and holidays if required) from the total.",
    },
    {
      question: "What happens if I reverse start and end dates?",
      answer:
        "Many calculators swap or show a negative/absolute span—read the on-page behavior.",
    },
    {
      question: "Do these calculators treat leap years as 366 days?",
      answer:
        "They follow the calendar, so leap years have 366 days.",
    },
    {
      question: "Where does the “30-day month” shortcut come from?",
      answer:
        "It is a rough average for estimates. Exact tools use real month lengths.",
    },
    {
      question: "How can I express someone’s age as a day count?",
      answer:
        "Set birth date as start and today (or another date) as end, then read total days.",
    },
    {
      question: "Should project day counts treat the kickoff day as day one?",
      answer:
        "Clarify with stakeholders. Inclusive counting differs from pure date subtraction.",
    },
    {
      question: "How should I compare dates when the two ends use different zones?",
      answer:
        "Prefer UTC calendar dates for both ends when zones differ, or you may shift the civil day.",
    },
    {
      question: "What does an “average month” length mean on a results panel?",
      answer:
        "A convenience metric using ~30.44 days; not the same as calendar months.",
    },
    {
      question: "Do public holidays change a raw day difference?",
      answer:
        "Raw day counts ignore holidays. Business-day modes need a holiday calendar.",
    },
    {
      question: "What date input formats does the calculator accept?",
      answer:
        "Use the format the picker accepts, or ISO-style YYYY-MM-DD when typing is allowed.",
    }],
  "find-and-replace": [
    {
      question: "How do I replace a word everywhere in a text?",
      answer:
        "Enter the word to find and its replacement, choose Replace all, and copy the result. Turn on case-sensitive search if capitals matter.",
    },
    {
      question: "Does find and replace support regular expressions?",
      answer:
        "No. It matches the exact text you type. For pattern matching, test the pattern in the Regex Tester first.",
    },
    {
      question: "How do I swap one phrase for another across a draft?",
      answer:
        "Paste the text, enter find and replacement strings, choose replace-all or first-only, then copy the result.",
    },
    {
      question: "When is a plain text replace safer than regex?",
      answer:
        "Use plain replace for fixed words and spellings. Reach for regex only when you need patterns you can test first.",
    },
    {
      question: "How can I clear every match without putting new text in?",
      answer:
        "Leave the replacement empty (or use an explicit delete mode) so each match is removed.",
    },
    {
      question: "Why might a short token alter longer words around it?",
      answer:
        "Substring matches hit inside bigger words. Prefer whole-word options or add boundaries when available.",
    },
    {
      question: "Should I enable case-sensitive matching for names?",
      answer:
        "Yes when capitals matter (names, code identifiers). Leave it off for casual prose cleanup.",
    },
    {
      question: "How do I update only the first hit in the paste?",
      answer:
        "Use replace-first / replace-once instead of replace-all, then review before further passes.",
    },
    {
      question: "What is a careful workflow for a long document?",
      answer:
        "Copy a backup, replace in small sections, and diff before/after so mistakes are easy to undo.",
    },
    {
      question: "Can a replace pass standardize spelling variants in a draft?",
      answer:
        "Yes for known variants (color/colour). Keep a checklist of brand spellings you must not alter.",
    },
    {
      question: "How do newline characters change what gets matched?",
      answer:
        "A pattern that spans lines may miss unless multiline mode exists. Normalize breaks first when needed.",
    },
    {
      question: "Is an in-browser replace enough for production codebases?",
      answer:
        "For quick edits maybe; for repos prefer editor/project-wide tools with preview and VCS.",
    },
    {
      question: "How can I keep hyperlinks intact during a bulk swap?",
      answer:
        "Exclude URL-heavy sections or use more specific find strings than bare tokens like http.",
    },
    {
      question: "What does a rejected paste usually signal?",
      answer:
        "Empty find text, oversized paste, or unsupported control characters—adjust and retry.",
    },
    {
      question: "Can I run find-and-replace across an entire project from here?",
      answer:
        "This page handles one paste. Use an IDE or CLI for multi-file projects.",
    },
    {
      question: "How should localization teams apply glossary swaps?",
      answer:
        "Replace glossary terms carefully after locking already-translated segments you must keep.",
    },
    {
      question: "Does a text replace rewrite invisible rich-text marks?",
      answer:
        "It changes the characters you match. Rich-text formatting outside the plain paste is not preserved.",
    }],
  "remove-line-breaks": [
    {
      question: "How do I remove line breaks from text copied from a PDF?",
      answer:
        "Paste the text and choose the option that keeps paragraph breaks. Single line breaks inside a paragraph become spaces, and blank lines between paragraphs stay.",
    },
    {
      question: "What is the difference between replacing and removing line breaks?",
      answer:
        "Replacing turns each break into a space so words stay apart. Removing deletes the break, which joins the end of one line to the start of the next.",
    },
  ],
  "add-line-numbers": [
    {
      question: "How do I number lines in text?",
      answer:
        "Paste the text, set the starting number and the separator, such as a period and a space, then add numbers and copy the result.",
    },
    {
      question: "Are empty lines numbered?",
      answer:
        "Yes. Every real line break starts a new numbered line, including empty lines and a trailing empty line at the end.",
    },
    {
      question: "How do I number every line in a pasted draft?",
      answer:
        "Paste the text, choose a starting number if needed, and copy the numbered output. Use it for reviews, scripts, or shared logs.",
    },
    {
      question: "What separator appears between the number and the text?",
      answer:
        "Most modes use a period, colon, or tab. Pick one that will not confuse later sorting or code indentation.",
    },
    {
      question: "Do blank lines receive numbers too?",
      answer:
        "Yes when empty-line numbering is on. Turn it off if blank lines should stay unmarked.",
    },
    {
      question: "Can I start numbering at a value other than 1?",
      answer:
        "Yes—set the start index (including 0) before copying. Useful for appendices or continued sections.",
    },
    {
      question: "Will numbering break indented code?",
      answer:
        "Numbers sit before the line content. Indentation on the rest of the line stays, but some parsers may treat the prefix as part of the text.",
    },
    {
      question: "How do I strip numbers I already added?",
      answer:
        "Remove the leading digits and separator with find-and-replace, or paste into a clean editor and re-export without numbers.",
    },
    {
      question: "Is zero-padding like 01, 02 available?",
      answer:
        "Depends on the mode. If padding is off, numbers stay unpadded—add padding yourself if your style guide requires it.",
    },
    {
      question: "Can numbering cover just part of a longer paste?",
      answer:
        "Number the whole paste, then keep the range you need, or split the selection into its own paste first.",
    },
    {
      question: "Do CRLF and LF endings change how many lines I get?",
      answer:
        "The tool splits on the breaks it recognizes. Normalize endings first if counts look off across machines.",
    },
    {
      question: "Why number lines before a peer review?",
      answer:
        "Reviewers can cite line numbers instead of quoting long passages. It speeds comments in email or chat.",
    },
    {
      question: "Does adding numbers alter UTF-8 characters?",
      answer:
        "No—only prefixes are added. Characters in the body stay the same.",
    },
    {
      question: "Can numbering restart after each heading?",
      answer:
        "Not automatically. Split by section, number each block from 1, then recombine.",
    },
    {
      question: "Is this the same as a word processor line gutter?",
      answer:
        "No. Gutter numbers are display-only. This writes numbers into the text itself.",
    },
    {
      question: "What happens to spaces at the end of a line?",
      answer:
        "They usually remain after the number prefix. Trim if your downstream parser is strict.",
    },
    {
      question: "Are my drafts uploaded when I number lines?",
      answer:
        "Numbering runs in the browser session; nothing is stored as a permanent server copy.",
    }],
  "json-to-csv": [
    {
      question: "How do I open JSON in Excel?",
      answer:
        "Convert the JSON array to CSV here, download data.csv, and open that file in Excel or Google Sheets. Each object becomes a row and each key becomes a column.",
    },
    {
      question: "What happens to nested objects?",
      answer:
        "Nested objects are not flattened into extra columns. Flatten them first if you need each nested field in its own column.",
    },
    {
      question: "How do I turn a JSON array into a CSV file?",
      answer:
        "Paste a JSON array of objects, convert, then download or copy the CSV for Excel or Sheets.",
    },
    {
      question: "What JSON shapes convert cleanly to rows?",
      answer:
        "An array of flat objects with shared keys works best. Deep nesting usually needs flattening first.",
    },
    {
      question: "How are column headers chosen from the objects?",
      answer:
        "Headers typically come from object keys in first-seen order across the array.",
    },
    {
      question: "Can I convert a single JSON object?",
      answer:
        "Many converters wrap one object as a one-row table; an array of objects is clearer.",
    },
    {
      question: "What delimiter does the CSV use?",
      answer:
        "Comma is the default. Some tools offer semicolon or tab for locale-specific Excel.",
    },
    {
      question: "How do boolean and null values appear in cells?",
      answer:
        "Booleans often become true/false text; nulls become empty cells—confirm before importing.",
    },
    {
      question: "Can arrays inside a field become multiple columns?",
      answer:
        "Usually they stringify into one cell. Expand them beforehand if you need separate columns.",
    },
    {
      question: "Why might Excel show garbled characters?",
      answer:
        "Missing UTF-8 BOM or wrong import encoding. Re-import as UTF-8 or save with a BOM if needed.",
    },
    {
      question: "How do I convert only a subset of keys?",
      answer:
        "Trim the JSON to the fields you want before converting, or delete columns after import.",
    },
    {
      question: "Does order of objects in the array matter?",
      answer:
        "Yes—row order follows the array order unless you sort later in a spreadsheet.",
    },
    {
      question: "What if keys differ across objects?",
      answer:
        "Missing keys usually become blank cells for that row; extra keys add columns.",
    },
    {
      question: "Can I go back from CSV to JSON afterward?",
      answer:
        "Use a CSV-to-JSON tool; round-trips may lose type info (everything becomes strings).",
    },
    {
      question: "Is there a size limit for pasted JSON?",
      answer:
        "Very large pastes can slow the tab—split big datasets or convert offline.",
    },
    {
      question: "Should I validate JSON before converting?",
      answer:
        "Yes—fix syntax errors first so you do not export a partial or empty CSV.",
    },
    {
      question: "Does JSON-to-CSV upload my dataset?",
      answer:
        "Conversion on this page is meant to stay in the browser session.",
    }],
  "csv-to-json": [
    {
      question: "How do I convert a spreadsheet to JSON?",
      answer:
        "Save or export the sheet as CSV with a header row, paste it here, and convert. Each row becomes an object that uses the headers as keys.",
    },
    {
      question: "Are numbers converted to JSON numbers?",
      answer:
        "No. CSV has no data types, so every cell becomes a JSON string, such as \"42\", and an empty cell becomes an empty string. Convert numbers in your own code if you need them.",
    },
    {
      question: "How do I turn a CSV export into JSON objects?",
      answer:
        "Paste CSV with a header row, convert, and copy the JSON array. Each row becomes one object keyed by headers.",
    },
    {
      question: "Why do quoted commas not create new CSV columns?",
      answer:
        "CSV quoting keeps commas inside a cell from splitting columns. Broken quotes split fields incorrectly.",
    },
    {
      question: "How do I write a quote character inside a quoted CSV field?",
      answer:
        "Standard CSV doubles them (\"\"). A single bare quote often means a malformed row.",
    },
    {
      question: "How are blank CSV cells represented after conversion to JSON?",
      answer:
        "Usually an empty string. Some workflows prefer null—adjust after conversion if needed.",
    },
    {
      question: "What goes wrong when a CSV field never closes its quote?",
      answer:
        "Parsers may merge following rows into one field or fail. Fix quoting in the spreadsheet and re-export.",
    },
    {
      question: "Do I need a header row to get JSON objects with keys?",
      answer:
        "For object-shaped JSON, yes. Without headers you get arrays of arrays instead.",
    },
    {
      question: "Will tab-separated values convert like CSV if the delimiter matches?",
      answer:
        "If the tool accepts a tab delimiter option, yes. Otherwise replace tabs carefully or export as CSV.",
    },
    {
      question: "How do postal codes with leading zeros stay intact in JSON?",
      answer:
        "Keep those columns as strings. Numeric coercion would drop leading zeros.",
    },
    {
      question: "Does JSON usually shrink a flat table compared with CSV?",
      answer:
        "Often larger because keys repeat. CSV can be denser for flat tables.",
    },
    {
      question: "Will a flat spreadsheet become nested JSON automatically?",
      answer:
        "Not automatically from a flat sheet. Post-process or use a richer export format.",
    },
    {
      question: "Which text encoding is safest for CSV that becomes JSON?",
      answer:
        "UTF-8 is safest for web JSON. Re-export if accents look corrupted.",
    },
    {
      question: "What size CSV pastes are realistic in a browser tab?",
      answer:
        "Large files may strain memory. Split or convert server-side for huge datasets.",
    },
    {
      question: "Why might JSON object counts not match spreadsheet rows?",
      answer:
        "Embedded newlines inside quoted fields or blank trailing rows often explain mismatches.",
    },
    {
      question: "Is it safer to leave date cells as JSON strings?",
      answer:
        "Usually yes unless you deliberately parse them into a typed format your API expects.",
    },
    {
      question: "Does CSV-to-JSON conversion send the sheet to a server?",
      answer:
        "Conversion runs locally in the browser session.",
    }],
  "regex-tester": [
    {
      question: "What does the g flag do in a regex?",
      answer:
        "The g (global) flag finds every match instead of stopping at the first one. Without it, only the first match is shown.",
    },
    {
      question: "What is a capture group?",
      answer:
        "Parentheses in a pattern create a capture group, which saves the part of the match inside them. (\\d{4})-(\\d{2}) captures the year and the month separately.",
    },
  ],
  "hash-generator": [
    {
      question: "What is SHA-256 used for?",
      answer:
        "SHA-256 creates a fixed 64-character fingerprint of data. It is used to check that a file or message has not changed, and in digital signatures.",
    },
    {
      question: "Should I hash passwords with SHA-256?",
      answer:
        "Not on its own. Password storage should use a slow, salted algorithm such as bcrypt, scrypt, or Argon2, because plain SHA-256 can be guessed very quickly.",
    },
    {
      question: "How do I create a SHA-256 digest of some text?",
      answer:
        "Paste or type the text, choose SHA-256, and copy the hex digest. Keep the original if you still need it.",
    },
    {
      question: "Is hashing the same thing as encrypting data?",
      answer:
        "No. Hashes are one-way fingerprints. Encryption is designed to be reversed with a key.",
    },
    {
      question: "Can I recover the original message from the digest?",
      answer:
        "Not practically for SHA-256. You can only compare hashes or try guessing inputs.",
    },
    {
      question: "What is SHA-256 commonly used for in practice?",
      answer:
        "Integrity checks, content addressing, and signing workflows—not for storing passwords by itself.",
    },
    {
      question: "Should passwords be stored as plain SHA-256 digests?",
      answer:
        "No. Use a slow password KDF (Argon2, bcrypt, scrypt) with unique salts.",
    },
    {
      question: "Will the same input always produce the same digest?",
      answer:
        "Yes for a given algorithm with no key. Any tiny input change yields a different hash.",
    },
    {
      question: "Why does an empty input still show a hash value?",
      answer:
        "The empty string has a defined digest. Clear the output if you did not mean to hash anything.",
    },
    {
      question: "Does picking a longer digest hide the text better?",
      answer:
        "Length is about collision resistance, not secrecy. Hashes are not concealment.",
    },
    {
      question: "How do checksums help verify a download?",
      answer:
        "Compare the published digest to one you compute locally to detect corruption or tampering.",
    },
    {
      question: "What does a hash collision mean for files?",
      answer:
        "Two different inputs sharing one digest. Strong algorithms make accidental collisions vanishingly rare.",
    },
    {
      question: "Is MD5 appropriate for security-sensitive checks?",
      answer:
        "Avoid MD5 for security. It can still appear in legacy checksum contexts with caution.",
    },
    {
      question: "Can two different files share one SHA-256 digest?",
      answer:
        "In theory via collision; in practice for honest files it means they are the same content.",
    },
    {
      question: "What is HMAC used for compared with a plain digest?",
      answer:
        "A keyed hash that authenticates a message with a secret—different from a plain digest.",
    },
    {
      question: "Should I hash production secrets in a browser tab?",
      answer:
        "Prefer not for production secrets. Use local trusted tooling when confidentiality matters.",
    },
    {
      question: "Does generating a hash upload my text anywhere?",
      answer:
        "Hashing on this page is meant to stay in the browser session.",
    }],
  "javascript-minifier": [
    {
      question: "How do I minify JavaScript online?",
      answer:
        "Paste valid JavaScript into the minifier, press Minify, then copy the shorter output. The source is parsed with Terser in the browser and is not executed.",
    },
    {
      question: "Does minifying JavaScript make it run faster?",
      answer:
        "It mainly reduces download size by removing whitespace and shortening names. Runtime speed is usually unchanged unless the smaller file loads noticeably sooner.",
    },
    {
      question: "Will TypeScript minify here?",
      answer:
        "No. TypeScript syntax is rejected with a parser error. Compile or strip types to plain JavaScript first.",
    },
    {
      question: "What is mangling in a minifier?",
      answer:
        "Mangling renames local variables to shorter identifiers where it is safe. It is part of how Terser shrinks the file after parsing.",
    },
    {
      question: "Can minification break my code?",
      answer:
        "It can if the code relies on Function.toString(), dynamic property names that were renamed, or invalid syntax the parser cannot read. Test the output before you deploy.",
    },
    {
      question: "Does this tool evaluate my expressions while minifying?",
      answer:
        "Constant-expression evaluation is turned off here so user expressions are not run during the minify pass.",
    },
    {
      question: "How large a script can I paste?",
      answer:
        "Very large files are rejected so the tab stays responsive. Split bundles or minify during your build for multi-megabyte inputs.",
    },
    {
      question: "Is source-map generation included?",
      answer:
        "No. This page returns minified text only. Generate source maps in your bundler when you need them.",
    },
    {
      question: "Should I minify code I still edit by hand?",
      answer:
        "Keep a readable source file for editing. Minify only the copy you ship to browsers.",
    },
    {
      question: "What happens on a syntax error?",
      answer:
        "You see a parser error instead of output. The tool does not attempt to repair broken JavaScript.",
    },
    {
      question: "Does minifying remove console.log calls?",
      answer:
        "Not by default on this page. Dropping console calls is a separate compress option in some build pipelines.",
    },
    {
      question: "Can I minify ES modules with import and export?",
      answer:
        "Modern syntax the parser understands can minify. If the parser version rejects a newer feature, compile that feature down first.",
    },
    {
      question: "Is the original formatting recoverable?",
      answer:
        "No. Minification discards whitespace and comments. Keep the original file under version control.",
    },
    {
      question: "Why use a parser instead of deleting spaces myself?",
      answer:
        "Blind find-and-replace can break strings and regexes. A parser knows where whitespace is safe to remove.",
    },
    {
      question: "Does minify change license comments?",
      answer:
        "Important license banners may be stripped unless a build tool is configured to keep them. Check the output when a license header must remain.",
    },
    {
      question: "Is my JavaScript uploaded for minification?",
      answer:
        "No. Terser runs in this tab. The source is not posted to a server or saved in local storage.",
    },
  ],
  "color-contrast-checker": [
    {
      question: "How do I check color contrast for accessibility?",
      answer:
        "Enter a foreground color and a background color, then read the contrast ratio and the AA/AAA marks for normal and large text. The math follows WCAG 2 relative luminance.",
    },
    {
      question: "What contrast ratio do I need for body text?",
      answer:
        "WCAG AA needs at least 4.5:1 for normal text. AAA needs 7:1. Large text has lower thresholds of 3:1 for AA and 4.5:1 for AAA.",
    },
    {
      question: "What counts as large text in WCAG?",
      answer:
        "Large text is at least 18 point regular or 14 point bold, roughly 24px regular or 18.66px bold. The checker reports large-text results separately from normal text.",
    },
    {
      question: "Does a pass mean the whole page is accessible?",
      answer:
        "No. Contrast is only one requirement. Focus order, labels, keyboard use, and motion settings still matter.",
    },
    {
      question: "Can I test a gradient background?",
      answer:
        "The ratio uses two solid colors. For a gradient, test text against the lightest and darkest stops that sit behind the letters.",
    },
    {
      question: "Why is black on white 21:1?",
      answer:
        "That is the maximum contrast between pure black and pure white in the WCAG formula. No pair of sRGB colors scores higher.",
    },
    {
      question: "Do link colors need their own check?",
      answer:
        "Yes. Check link text against the page background, and check visited or hover styles if they change the color.",
    },
    {
      question: "How do I fix a failing pair?",
      answer:
        "Darken the text, lighten the background, or both, then recheck. Small HEX tweaks near the threshold often recover a pass.",
    },
    {
      question: "Does opacity change the ratio?",
      answer:
        "The checker uses the solid colors you enter. If the real UI blends with a layer behind, sample the blended result or test the effective colors.",
    },
    {
      question: "Are brand colors exempt from contrast rules?",
      answer:
        "No. Brand guidelines still need a readable pair for text. Keep a darker or lighter brand variant for body copy when the primary swatch fails.",
    },
    {
      question: "Can icons use a lower ratio?",
      answer:
        "UI component contrast guidance differs from text. When an icon carries meaning without a text label, aim for clear contrast against its background.",
    },
    {
      question: "Does the tool read colors from my CSS file?",
      answer:
        "No. You paste or pick the two colors. It does not crawl a stylesheet.",
    },
    {
      question: "What color formats are accepted?",
      answer:
        "HEX values and the picker are the usual inputs. A color the parser rejects produces no ratio until you correct it.",
    },
    {
      question: "Should charts use the same thresholds?",
      answer:
        "Text on charts should still meet text contrast. Adjacent data colors also need enough separation so viewers can tell series apart.",
    },
    {
      question: "Is contrast checking done on a server?",
      answer:
        "No. The calculation runs in the browser from the two colors you provide.",
    },
    {
      question: "Why did two similar greys fail?",
      answer:
        "Low luminance difference yields a low ratio. Pairs such as #777 on #999 often fall well under 4.5:1 for normal text.",
    },
  ],
  "box-shadow-generator": [
    {
      question: "How do I create a CSS box-shadow?",
      answer:
        "Adjust offset, blur, spread, color, and opacity in the generator, then copy the box-shadow declaration into your stylesheet. The preview uses the same values.",
    },
    {
      question: "What does blur radius do?",
      answer:
        "Blur softens the edge of the shadow. Zero blur makes a hard edge; larger blur makes a softer, wider falloff.",
    },
    {
      question: "What does spread radius do?",
      answer:
        "Spread grows or shrinks the shadow before blur is applied. Positive spread expands it; negative spread pulls it in.",
    },
    {
      question: "How do horizontal and vertical offsets work?",
      answer:
        "Positive X moves the shadow right; positive Y moves it down. Negative values move it left or up.",
    },
    {
      question: "When should I use an inset shadow?",
      answer:
        "Use inset for pressed buttons, wells, or inner highlights. The shadow draws inside the box instead of outside.",
    },
    {
      question: "Can this generator build multiple layered shadows?",
      answer:
        "It writes one shadow at a time. Copy each layer and join them with commas in CSS if you need a stack.",
    },
    {
      question: "Why are my values whole pixels?",
      answer:
        "Offsets, blur, and spread are rounded to whole pixels in the copied CSS so the declaration stays tidy and predictable.",
    },
    {
      question: "How do I make a soft card shadow?",
      answer:
        "Start with a small Y offset, a large blur, slight spread, and low opacity, such as 0 8px 24px with about 20% opacity.",
    },
    {
      question: "Does box-shadow affect layout size?",
      answer:
        "No. Shadows paint outside the box and do not change the element's width or height in normal flow.",
    },
    {
      question: "Can I animate a box-shadow?",
      answer:
        "Yes, with CSS transitions or animations on the box-shadow property. Prefer animating opacity or elevation tokens when performance matters.",
    },
    {
      question: "How is opacity applied in the output?",
      answer:
        "Opacity is built into the color as RGBA in the copied rule, matching the preview.",
    },
    {
      question: "Will a shadow follow border-radius?",
      answer:
        "Yes. The shadow follows the curve of the box's border radius in modern browsers.",
    },
    {
      question: "What color should a neutral shadow use?",
      answer:
        "A dark blue-grey at low opacity often looks more natural than pure black. Adjust to match the page background.",
    },
    {
      question: "Does the preview match every element on my site?",
      answer:
        "The preview is a sample box. Font size, width, and neighboring elements on your page can change how strong the shadow feels.",
    },
    {
      question: "Is the CSS uploaded when I copy it?",
      answer:
        "No. Generation stays in the browser. Copying only writes to your clipboard when you choose.",
    },
    {
      question: "How do I remove a shadow later?",
      answer:
        "Set box-shadow: none; on the element, or remove the declaration from the rule.",
    },
  ],
  "word-to-pdf": [
    {
      question: "How do I convert a Word document to PDF in the browser?",
      answer:
        "Choose a .docx file, start the conversion, then download the PDF. The file is processed in the browser and is not uploaded to Tools Star Hub for storage.",
    },
    {
      question: "Does .doc (old Word) work the same as .docx?",
      answer:
        "The tool expects modern .docx. An older .doc file is often rejected. Open it in Word or LibreOffice and save as .docx first.",
    },
    {
      question: "Will the PDF match my Word layout exactly?",
      answer:
        "Complex layouts, unusual fonts, and embedded objects may shift. Review the PDF after conversion when pixel-perfect print layout matters.",
    },
    {
      question: "Are fonts embedded in the PDF?",
      answer:
        "Embedding depends on what the converter can access in the browser. Missing fonts may fall back to substitutes and change line breaks.",
    },
    {
      question: "Can I convert several Word files at once?",
      answer:
        "Convert one document at a time on this page. Batch conversion belongs in a desktop app or a dedicated batch service.",
    },
    {
      question: "Does conversion need Microsoft Word installed?",
      answer:
        "No. The browser-based converter does not require the Word desktop app.",
    },
    {
      question: "What happens to images inside the document?",
      answer:
        "Images included in the .docx are carried into the PDF when the converter can read them. Very large images may be resampled.",
    },
    {
      question: "Are comments and tracked changes kept?",
      answer:
        "Conversion focuses on the document body. Review comments and tracked changes in Word before you convert if you need a clean deliverable.",
    },
    {
      question: "Can I password-protect the PDF here?",
      answer:
        "This page converts to a standard PDF download. Add a password in a PDF editor afterward if you need one.",
    },
    {
      question: "Is my document stored on a server?",
      answer:
        "No. The Word file is not kept on Tools Star Hub after you convert. Work stays in the browser session.",
    },
    {
      question: "Why is the PDF larger or smaller than the .docx?",
      answer:
        "PDF and Word package images and fonts differently. Size alone does not mean pages were dropped.",
    },
    {
      question: "Do headers and footers survive conversion?",
      answer:
        "They usually appear when the converter supports them. Check the first and last pages after download.",
    },
    {
      question: "Can I edit the PDF after converting?",
      answer:
        "You can open it in a PDF editor. For major text edits, change the Word source and convert again.",
    },
    {
      question: "What if conversion fails?",
      answer:
        "Try re-saving the file as .docx, remove unusual add-ins content, and convert again. A corrupted archive inside the .docx will also fail.",
    },
    {
      question: "Does this tool print the document?",
      answer:
        "It builds a PDF file for download. Printing is optional afterward from your PDF viewer.",
    },
    {
      question: "Is there a page limit?",
      answer:
        "Very large documents may hit browser memory limits. Split huge files or convert on the desktop if the tab runs out of memory.",
    },
  ],

  "ai-text-humanizer": [
    {
      question: "How does an AI text humanizer work?",
      answer:
        "It rewrites phrasing, rhythm, and word choice so the draft reads more like everyday writing while trying to keep your meaning. Results vary by model and by how stiff or repetitive the original text was.",
    },
    {
      question: "When should I use a humanizer instead of rewriting myself?",
      answer:
        "Use it when you need a faster first pass on stiff AI drafts, product blurbs, or translated copy. Always review the output yourself for facts, tone, and claims before you publish.",
    },
    {
      question: "Will humanizing change technical terms or brand names?",
      answer:
        "It may soften surrounding sentences, but you should check that product names, numbers, and jargon stay exact. Re-paste any term the rewrite mangled before you ship the text.",
    },
    {
      question: "Can I humanize only one paragraph of a longer article?",
      answer:
        "Yes. Paste just that paragraph, run the tool, then drop the result back into the full draft. Shorter chunks are easier to review and less likely to drift off-topic.",
    },
    {
      question: "Does a humanizer fix grammar and spelling too?",
      answer:
        "It often smooths awkward phrasing, but it is not a dedicated proofreader. Run a spell check afterward if the draft will go to customers or a teacher.",
    },
    {
      question: "Is humanized text the same as original writing?",
      answer:
        "No. It is still derived from your source draft. Schools and publishers may treat heavy AI editing under their own policies, so follow those rules when they apply.",
    },
    {
      question: "Why does the rewrite sometimes sound flatter than the original?",
      answer:
        "Humanizers often prefer plain words and shorter sentences. If you need punchier marketing voice, keep a few of your original phrases or edit the result by hand.",
    },
    {
      question: "How long can the pasted text be?",
      answer:
        "Browser tools usually work best on a few hundred to a few thousand words at a time. Very long articles may need chunking so the rewrite stays coherent.",
    },
    {
      question: "Does the tool store my draft after I leave the page?",
      answer:
        "This page is built for on-page rewriting; treat anything sensitive as private and avoid pasting secrets. Clear the box when you are done if you share the device.",
    },
    {
      question: "Can I use it for emails and LinkedIn posts?",
      answer:
        "Yes, for tone cleanup on short professional copy. Still verify names, dates, and offers so the smoother wording does not invent details you did not write.",
    },
    {
      question: "What is the difference between humanize and paraphrase?",
      answer:
        "Paraphrase focuses on saying the same idea with different words. Humanize additionally targets patterns that sound machine-generated, such as repetitive cadence or stock transitions.",
    },
    {
      question: "Will detectors always label humanized text as human?",
      answer:
        "No. Detectors are imperfect and update often. Do not rely on any rewrite tool as a guarantee that content will pass a specific detector.",
    },
    {
      question: "Should I humanize academic citations and quotes?",
      answer:
        "Leave quoted material and citation strings alone. Rewrite only the surrounding explanation so you do not alter someone else’s exact words.",
    },
    {
      question: "Does running humanize twice improve the result?",
      answer:
        "A second pass can soften leftover stock phrases, but it can also wash out voice. Compare both versions and keep the clearer one.",
    },
    {
      question: "Can the humanizer invent facts I never wrote?",
      answer:
        "Rewrites sometimes fill gaps with plausible wording. Check every number, claim, and proper noun against your source before publishing.",
    },
    {
      question: "Is there an offline way to soften AI phrasing?",
      answer:
        "Yes: cut filler openers, vary sentence length, replace vague adjectives with specifics, and read the draft aloud. Those edits often beat a second automated pass.",
    },
  ],
  "average-calculator": [
    {
      question: "How do I calculate the mean of a list of numbers?",
      answer:
        "Add every value, then divide by how many values you entered. That quotient is the arithmetic mean, which most people simply call the average.",
    },
    {
      question: "What is the difference between mean, median, and mode?",
      answer:
        "The mean is the sum divided by the count. The median is the middle value after sorting. The mode is the value that appears most often.",
    },
    {
      question: "When should I use the median instead of the mean?",
      answer:
        "Use the median when a few extreme values would pull the mean up or down, such as incomes or house prices. The middle value is less sensitive to outliers.",
    },
    {
      question: "Can I paste numbers separated by commas or spaces?",
      answer:
        "Yes. The calculator accepts common separators so you can paste from a spreadsheet cell list or a quick note. Invalid tokens are usually ignored or flagged.",
    },
    {
      question: "Does order matter when I calculate an average?",
      answer:
        "Not for the mean. Order matters for finding the median because the list must be sorted first, but the final median does not care how you typed the rows.",
    },
    {
      question: "How do I average percentages correctly?",
      answer:
        "If each percentage came from the same-sized group, a simple mean is fine. If group sizes differ, weight each percentage by its group size instead of averaging the percents alone.",
    },
    {
      question: "What happens if I include zero in the list?",
      answer:
        "Zero still counts as a value. It lowers the mean and can become the mode if it appears most often. Do not drop zeros unless they were empty cells you meant to skip.",
    },
    {
      question: "Can this calculator find a weighted average?",
      answer:
        "This page focuses on unweighted mean, median, and mode. For grades or portfolio weights, multiply each value by its weight, sum those products, then divide by the total weight.",
    },
    {
      question: "Why is my mean a long decimal?",
      answer:
        "Division often produces repeating decimals. Round only for display; keep full precision if you will feed the result into another calculation.",
    },
    {
      question: "How many numbers can I enter at once?",
      answer:
        "Small classroom or spreadsheet lists work well in the browser. Extremely large datasets belong in a spreadsheet or statistics package.",
    },
    {
      question: "Is the average always between the smallest and largest values?",
      answer:
        "Yes for the arithmetic mean of real numbers. If your result sits outside that range, a separator or sign was probably misread.",
    },
    {
      question: "What is a bimodal dataset?",
      answer:
        "It is a set with two different values tied for most frequent. Some tools report both modes; others say there is no single mode.",
    },
    {
      question: "Do negative numbers work in an average calculator?",
      answer:
        "Yes. Losses, temperatures, and signed scores are valid inputs. The mean can be negative when negatives dominate the sum.",
    },
    {
      question: "How is average used in everyday decisions?",
      answer:
        "People average test scores, monthly spending, commute times, and sports stats to summarize a list in one number. Pair it with the range when outliers matter.",
    },
    {
      question: "Should blank lines count toward the average?",
      answer:
        "No. Empty entries are not numbers. Remove blanks before calculating so the count matches the values you actually measured.",
    },
    {
      question: "Can I compare two averages from different sample sizes?",
      answer:
        "You can compare the numbers, but the smaller sample is noisier. Note the counts beside each average so readers do not over-read a tiny group.",
    },
  ],
  "compound-interest-calculator": [
    {
      question: "What inputs do I need for a compound interest estimate?",
      answer:
        "You typically need a starting balance, an annual rate, a compounding frequency, a time span, and optional regular contributions. The calculator compounds the balance over each period you choose.",
    },
    {
      question: "How does annual percentage yield relate to the stated rate?",
      answer:
        "APY reflects compounding within a year, so it can be higher than the nominal annual rate when interest is added more than once a year. Compare APYs when offers use different compounding schedules.",
    },
    {
      question: "Should I enter the rate as 5 or 0.05?",
      answer:
        "Most consumer calculators expect a percent such as 5 for five percent. If a field asks for a decimal rate, it will say so; entering the wrong form will skew every period.",
    },
    {
      question: "What is the difference between starting balance and contribution?",
      answer:
        "The starting balance is money already invested. Contributions are amounts you add on a schedule. Both can earn interest after they are in the account, depending on timing rules.",
    },
    {
      question: "Does more frequent compounding always grow faster?",
      answer:
        "Yes for the same nominal rate, more frequent compounding grows a little faster, but the gap between daily and continuous is often small. Rate and time still dominate the result.",
    },
    {
      question: "Can I model withdrawing money with this calculator?",
      answer:
        "Many growth calculators assume deposits only. For drawdowns, use a loan or retirement withdrawal tool, or enter negative contributions only if the page explicitly supports them.",
    },
    {
      question: "Why does doubling the rate not exactly double the final balance?",
      answer:
        "Interest earns interest, so growth is exponential in the rate and time, not a straight line. Fees, contribution timing, and compounding frequency also change the path.",
    },
    {
      question: "How long does it take money to double with compound interest?",
      answer:
        "A rough rule of 72 divides 72 by the annual percent rate for an approximate doubling time. The calculator’s timeline is more precise when contributions or odd rates are involved.",
    },
    {
      question: "Are taxes and fees included in the projection?",
      answer:
        "Typical online estimators show gross growth before taxes, account fees, or early-withdrawal penalties. Subtract those separately when you need a take-home estimate.",
    },
    {
      question: "What compounding frequency should I pick for a savings account?",
      answer:
        "Match the bank’s stated schedule—daily, monthly, or quarterly. If you are unsure, monthly is a common middle ground for rough planning, then confirm on the account disclosure.",
    },
    {
      question: "Can compound interest work against me on debt?",
      answer:
        "Yes. Credit cards and some loans add interest on unpaid balances, so debt can grow the same way savings do. Paying more than the minimum reduces the balance that compounds.",
    },
    {
      question: "Why do two calculators disagree slightly on the same inputs?",
      answer:
        "They may round differently, apply contributions at the start versus end of a period, or treat the last partial period another way. Read each tool’s assumptions under the result.",
    },
    {
      question: "Is past market return a safe rate to enter?",
      answer:
        "No. Historical averages are not guarantees. For planning, try a few conservative rates and treat the chart as a scenario, not a promise.",
    },
    {
      question: "How do I include an employer match in the estimate?",
      answer:
        "Add the match to your contribution amount for periods when it applies, or raise the starting balance if the match is a one-time deposit. Keep the match rules in mind so you do not overstate it.",
    },
    {
      question: "Does inflation change the calculator’s output?",
      answer:
        "The raw balance is usually in today’s dollars of contribution, not inflation-adjusted buying power. For real growth, subtract an inflation assumption after you see the nominal total.",
    },
    {
      question: "When is simple interest a better model than compound interest?",
      answer:
        "Some short-term notes and classroom examples pay simple interest only. If interest is never added to the balance during the term, use a simple-interest formula instead.",
    },
  ],
  "cron-expression-generator": [
    {
      question: "What is a cron expression used for?",
      answer:
        "A cron expression is a compact schedule string that tells a job runner when to fire—hourly backups, nightly reports, or weekly cleanups. Each field narrows minutes, hours, days, months, and weekdays.",
    },
    {
      question: "How many fields does a standard cron expression have?",
      answer:
        "Classic Unix cron uses five fields: minute, hour, day of month, month, and day of week. Some systems add a sixth seconds field; this generator focuses on the common five-field form.",
    },
    {
      question: "What does an asterisk mean in cron?",
      answer:
        "An asterisk means every value in that field. `* * * * *` would mean every minute. Narrow other fields when you only want a specific hour or weekday.",
    },
    {
      question: "How do I run a job every day at 9:00?",
      answer:
        "Use `0 9 * * *` for minute 0 of hour 9 on every day of the month and every weekday. Confirm the server’s timezone so 9:00 is the clock you intend.",
    },
    {
      question: "What is the difference between day-of-month and day-of-week?",
      answer:
        "Day-of-month picks calendar dates such as the 1st. Day-of-week picks Sunday through Saturday. Setting both can mean “either” or “both,” depending on the cron implementation.",
    },
    {
      question: "Can I use names like MON instead of numbers?",
      answer:
        "Some cron flavors accept short day or month names; others require numbers only. If this generator rejects a name, switch to numeric fields for wider compatibility.",
    },
    {
      question: "How do step values like */15 work?",
      answer:
        "A step runs every N units within the field. `*/15` in the minute field means minutes 0, 15, 30, and 45. Combine ranges and steps only when your cron dialect allows it.",
    },
    {
      question: "Why should I avoid scheduling everything at midnight?",
      answer:
        "Many jobs default to 00:00, which creates load spikes. Offset non-urgent tasks by a few minutes or hours so servers and APIs are less likely to contend.",
    },
    {
      question: "Does cron use the server timezone or UTC?",
      answer:
        "It uses whatever timezone the scheduler process sees, often the machine’s local zone unless you configure UTC. Document the zone next to the expression in your runbook.",
    },
    {
      question: "How do I express “weekdays only” in cron?",
      answer:
        "Set the day-of-week field to Monday through Friday (commonly `1-5` when Sunday is 0). Keep day-of-month as `*` unless you also need a calendar constraint.",
    },
    {
      question: "What happens if my cron job runs longer than the interval?",
      answer:
        "A second instance may start while the first is still running unless you add locking. Use a mutex, flock, or a queue worker so overlapping runs do not corrupt data.",
    },
    {
      question: "Can I test a cron expression before deploying it?",
      answer:
        "Yes. Generate the string here, then confirm next-run times in your platform’s cron UI or a dry-run linter. Always verify on a staging job before production.",
    },
    {
      question: "Why was my six-field expression rejected?",
      answer:
        "This tool targets five-field Unix cron. Platforms that want seconds need a different dialect. Drop the seconds field or use that platform’s native scheduler syntax.",
    },
    {
      question: "How do lists and ranges appear in a field?",
      answer:
        "Lists use commas (`1,15`) and ranges use hyphens (`9-17`). You can combine them when the daemon supports it, such as `1,15,20-22`.",
    },
    {
      question: "Is crontab the only place cron expressions appear?",
      answer:
        "No. CI systems, Kubernetes CronJobs, cloud schedulers, and app frameworks reuse similar strings. Always check that product’s field count and Sunday numbering.",
    },
    {
      question: "Should secrets go inside a cron command line?",
      answer:
        "Prefer environment files or a secret manager. Crontab and process lists can expose commands to other users on the host.",
    },
  ],
  "favicon-generator": [
    {
      question: "What size should a favicon be?",
      answer:
        "Classic favicons are 16×16 and 32×32 pixels. Many sites also ship 180×180 for Apple touch icons. Generating a few square PNGs covers most browsers and home-screen bookmarks.",
    },
    {
      question: "What file formats work for favicons?",
      answer:
        "ICO bundles multiple sizes in one file; PNG works well for modern browsers. SVG favicons are supported in some browsers but not all, so keep a PNG or ICO fallback.",
    },
    {
      question: "How do I add a favicon to my website?",
      answer:
        "Upload the icon files to your site root or asset folder, then link them in the HTML head with `rel=\"icon\"` (and `apple-touch-icon` when you ship a 180px PNG).",
    },
    {
      question: "Why does my new favicon not show up?",
      answer:
        "Browsers cache favicons aggressively. Hard-refresh, try a private window, or bump the file name or query string after you replace the icon.",
    },
    {
      question: "Should a favicon be a logo or a letter?",
      answer:
        "Either works if it stays readable at 16 pixels. Busy logos turn to mush; a simple mark or monogram usually survives the tiny tab size better.",
    },
    {
      question: "Do I need a separate dark-mode favicon?",
      answer:
        "Optional but helpful. Light glyphs disappear on light tabs; some sites ship alternate icons or choose colors with contrast on both themes.",
    },
    {
      question: "Can I make a favicon from a large PNG?",
      answer:
        "Yes. Start from a sharp square image, then downscale. Upscaling a tiny source stays blurry, so keep a high-resolution master.",
    },
    {
      question: "What is the difference between favicon.ico and apple-touch-icon?",
      answer:
        "`favicon.ico` covers browser tabs and bookmarks. The Apple touch icon is the larger home-screen icon on iOS. Many generators export both from one design.",
    },
    {
      question: "Will a transparent background work?",
      answer:
        "Often yes for PNG icons. On some tabs transparency shows the browser chrome through the mark, so test light and dark UI before you ship.",
    },
    {
      question: "How many favicon sizes do I really need?",
      answer:
        "A solid baseline is 16, 32, and 180 pixels plus an ICO or PNG for `rel=\"icon\"`. Progressive web apps may add more icons via the web manifest.",
    },
    {
      question: "Can emoji work as a favicon?",
      answer:
        "You can render an emoji to a square canvas and export PNG sizes. Check clarity at 16px; not every emoji stays recognizable that small.",
    },
    {
      question: "Does the generator upload my logo to a server?",
      answer:
        "This page builds icons in the browser from what you provide. Prefer non-confidential artwork if you are unsure about any network path on your device.",
    },
    {
      question: "Why was my hex color rejected?",
      answer:
        "Favicon color fields usually expect a full hex such as `#ffffff`. Shorthand or missing `#` can fail validation depending on the form.",
    },
    {
      question: "Should the favicon match my Open Graph image?",
      answer:
        "They share brand colors, but OG images are large social previews and favicons are tiny tab marks. Design each for its size instead of reusing one file for both.",
    },
    {
      question: "Can I change favicons per environment?",
      answer:
        "Yes. Staging sites often use a different color or badge so tabs are not confused with production. Point each environment’s head tags at its own icon files.",
    },
    {
      question: "Do search engines use my favicon in results?",
      answer:
        "Some search result layouts show a favicon beside the site name. Keep the file crawlable, square, and stable so crawlers can pick it up.",
    },
  ],
  "gitignore-generator": [
    {
      question: "What does a .gitignore file do?",
      answer:
        "It tells Git which files and folders to leave untracked, such as dependencies, build output, and local env files. Patterns keep secrets and clutter out of commits.",
    },
    {
      question: "Where should I put .gitignore in a repository?",
      answer:
        "Place a root `.gitignore` at the top of the project so rules apply everywhere. You can add nested ignore files in subfolders for package-specific exceptions.",
    },
    {
      question: "How do I ignore node_modules in Git?",
      answer:
        "Add a `node_modules/` line (with the trailing slash for the folder). Regenerate or paste that pattern from a Node template if you are starting a new app.",
    },
    {
      question: "What is the difference between a slash at the start and the end of a pattern?",
      answer:
        "A leading slash anchors the pattern to the folder that contains the ignore file. A trailing slash marks a directory. `build/` ignores build directories; `/build` is root-only.",
    },
    {
      question: "Can I un-ignore a file that matches a broader rule?",
      answer:
        "Yes. Use `!` negation patterns after the broad ignore, such as ignoring `dist/*` then `!dist/.gitkeep`. Order matters; later rules can re-include.",
    },
    {
      question: "Why is a file still tracked after I added it to .gitignore?",
      answer:
        "Git only ignores untracked paths. If the file was already committed, remove it from the index with `git rm --cached` while keeping the working copy, then commit.",
    },
    {
      question: "Should .env files be ignored?",
      answer:
        "Yes in almost every app that stores secrets there. Commit an `.env.example` with placeholder keys instead of real credentials.",
    },
    {
      question: "How do OS junk files get ignored?",
      answer:
        "Templates often include `.DS_Store`, `Thumbs.db`, and editor swap files. Add a Global or operating-system template so those never clutter reviews.",
    },
    {
      question: "Can one .gitignore cover multiple languages?",
      answer:
        "Yes. Stack templates—for example Node plus Python plus a custom section—so monorepos ignore each ecosystem’s artifacts without fighting.",
    },
    {
      question: "Do ignore patterns support globs?",
      answer:
        "Yes. `*` matches within a path segment and `**` can match across folders in modern Git. Test tricky globs with `git check-ignore -v` on a sample path.",
    },
    {
      question: "What should I not put in .gitignore?",
      answer:
        "Do not ignore source you intend to share, lockfiles your team relies on, or CI config. Ignoring `package-lock.json` by accident is a common footgun.",
    },
    {
      question: "How do I ignore all files of one extension?",
      answer:
        "Use a pattern like `*.log` or `*.tmp`. Be careful with `*.js` in mixed projects; you might hide source. Prefer build output folders when possible.",
    },
    {
      question: "Is .gitignore the same as .git/info/exclude?",
      answer:
        "Both use the same pattern syntax, but `exclude` is local to your clone and is not committed. Use `.gitignore` for rules the whole team should share.",
    },
    {
      question: "Will the generator commit the file for me?",
      answer:
        "No. It builds the text for you to save as `.gitignore` and commit yourself. That keeps review control in your normal Git workflow.",
    },
    {
      question: "How do I comment lines inside .gitignore?",
      answer:
        "Start a line with `#` for a comment. Blank lines are fine for grouping templates such as dependencies, build, and secrets.",
    },
    {
      question: "Can ignored files still be sent to a remote another way?",
      answer:
        "Yes—zip uploads, Docker build contexts, or misconfigured CI can still include them. Keep a separate deploy allowlist when secrets are nearby.",
    },
  ],
  "image-to-pdf": [
    {
      question: "How do I convert images to a PDF in the browser?",
      answer:
        "Add one or more JPG, PNG, or similar files, set page size and fit options, then download the PDF. The pages follow the order you arranged in the list.",
    },
    {
      question: "Which image formats can become a PDF?",
      answer:
        "Common formats such as JPG, PNG, and WebP usually work. If a format fails, convert it to JPG or PNG first, then build the PDF.",
    },
    {
      question: "Can I rearrange pages before downloading?",
      answer:
        "Yes when the tool shows a sortable list. Drag images into the order you want so the PDF matches that sequence.",
    },
    {
      question: "What is the difference between fit and fill on a page?",
      answer:
        "Fit keeps the whole image visible and may leave margins. Fill covers the page and may crop edges. Pick fit for documents and fill for full-bleed photos.",
    },
    {
      question: "Will large photos be downscaled in the PDF?",
      answer:
        "Very large images may be resized so the file stays manageable. Check the tool note under the preview if a size limit applied.",
    },
    {
      question: "Does PNG transparency stay transparent in the PDF?",
      answer:
        "Transparency is often flattened onto a white background in simple converters. Export a JPG with a background if you need a guaranteed opaque page.",
    },
    {
      question: "Can I mix portrait and landscape images?",
      answer:
        "Yes. Each image becomes its own page with its orientation unless you force a single page size that rotates or letterboxes content.",
    },
    {
      question: "Is Image to PDF the same as scanning a paper document?",
      answer:
        "No. This builds a PDF from existing image files. A scanner creates those images first; you can still combine phone photos of pages here afterward.",
    },
    {
      question: "How many photos can one PDF hold before the browser struggles?",
      answer:
        "Browser memory sets a practical ceiling. Dozens of phone photos usually work; hundreds of high-resolution shots may need several smaller PDFs.",
    },
    {
      question: "What page sizes are typical for photo PDFs?",
      answer:
        "A4 and Letter are common for printing. Square or custom sizes help photo books; match the size your printer or client expects.",
    },
    {
      question: "Will text inside a photo be selectable in the PDF?",
      answer:
        "Not by default. A photo of text is still an image. You need OCR in another tool if you want searchable text.",
    },
    {
      question: "Can I password-protect the PDF this page creates?",
      answer:
        "This converter focuses on building pages from images. Add a password later in a PDF editor if you need one.",
    },
    {
      question: "Why is my PDF much larger than the photos?",
      answer:
        "Uncompressed embedding and high pixel counts inflate size. Compress the PDF afterward or shrink images before conversion.",
    },
    {
      question: "Do EXIF camera details stay in the PDF?",
      answer:
        "Many converters strip or ignore photo metadata when embedding. Do not rely on this flow to preserve EXIF.",
    },
    {
      question: "Can I convert a single screenshot to PDF?",
      answer:
        "Yes. Upload one image and download a one-page PDF—useful for receipts and error messages you need to archive.",
    }
  ],
  "loan-calculator": [
    {
      question: "What inputs does a loan payment calculator need?",
      answer:
        "Principal, annual interest rate, and term length are the core fields. Some pages also take fees or extra payments to refine the schedule.",
    },
    {
      question: "How does a longer term change my monthly payment?",
      answer:
        "Spreading the same principal over more months lowers the payment but usually raises total interest. Compare both payment and lifetime interest before choosing.",
    },
    {
      question: "What is amortization in plain language?",
      answer:
        "It is the schedule that splits each payment into interest and principal. Early payments are interest-heavy; later ones retire more principal.",
    },
    {
      question: "Does this calculator include taxes and insurance?",
      answer:
        "Most simple loan calculators show principal and interest only. Mortgages often need separate tax and insurance estimates for a full PITI figure.",
    },
    {
      question: "How do extra payments affect payoff?",
      answer:
        "Extra principal shortens the term and cuts interest if the lender applies it correctly. Confirm there is no prepayment penalty on your contract.",
    },
    {
      question: "What is the difference between fixed and variable rates?",
      answer:
        "Fixed rates stay the same for the term. Variable rates can move with an index, so the payment estimate here is only a snapshot at today’s rate.",
    },
    {
      question: "Should I enter APR or the nominal interest rate?",
      answer:
        "Use the rate the tool’s label asks for. APR folds in some fees for comparison shopping; the amortization formula often uses the note rate.",
    },
    {
      question: "Can I model a zero-interest loan?",
      answer:
        "Yes when the rate field accepts 0. The payment is then principal divided by the number of months, aside from any separate fees.",
    },
    {
      question: "Why does the first month’s interest look large?",
      answer:
        "Interest is charged on the full starting balance. As principal falls, the interest portion of each fixed payment shrinks.",
    },
    {
      question: "How accurate is an online loan estimate?",
      answer:
        "It is a planning figure, not a lender quote. Origination fees, credit-based pricing, and escrow can change what you actually pay.",
    },
    {
      question: "Can I use this for auto loans and personal loans?",
      answer:
        "Yes for standard amortizing loans. Dealer add-ons, balloon payments, or interest-only periods need a different model.",
    },
    {
      question: "What happens if I round the payment up?",
      answer:
        "Paying a few dollars more each month accelerates principal reduction. Recalculate the payoff date after you pick a rounded amount.",
    },
    {
      question: "Does biweekly payment scheduling change the math?",
      answer:
        "Biweekly plans can create thirteen “monthly” equivalents per year. Convert carefully so you do not understate how much you send annually.",
    },
    {
      question: "How do loan fees change the monthly payment?",
      answer:
        "Fees added to principal raise the amount financed and the payment. Fees paid in cash at closing may not change the monthly figure.",
    },
    {
      question: "Is a lower payment always better?",
      answer:
        "Not if it comes from a much longer term with far more interest. Balance cash-flow comfort against total cost.",
    },
    {
      question: "When should I talk to a lender instead of a calculator?",
      answer:
        "When credit issues, cosigners, variable income, or special programs apply. Underwriting rules beat generic formulas.",
    }
  ],
  "meta-tag-generator": [
    {
      question: "What are meta tags used for?",
      answer:
        "They describe a page to browsers and crawlers—title, description, robots rules, and social preview fields. Good tags help snippets and link previews look intentional.",
    },
    {
      question: "How long should a meta description be?",
      answer:
        "Aim for about 150–160 characters so search snippets are less likely to truncate. Write for humans first; packing keywords alone rarely helps.",
    },
    {
      question: "Should the HTML title match the visible page heading?",
      answer:
        "They can share wording, but they are different elements. The title sits in the document head for tabs and search results, while the H1 is the on-page heading readers see.",
    },
    {
      question: "What does a canonical meta or link tag do?",
      answer:
        "It points crawlers at the preferred URL when similar pages exist. Use it to consolidate signals on the main version of the content.",
    },
    {
      question: "Should every page have unique meta tags?",
      answer:
        "Yes whenever possible. Duplicate titles and descriptions make snippets harder to tell apart and can look careless in search results.",
    },
    {
      question: "What robots values are common?",
      answer:
        "`index, follow` is the default-friendly choice. `noindex` keeps a page out of search results; use it for thank-you pages and thin admin screens.",
    },
    {
      question: "Do Open Graph tags replace standard meta description?",
      answer:
        "No. OG tags mainly drive social previews. Keep both a normal description and `og:title` / `og:description` when you care about shares.",
    },
    {
      question: "Can I generate Twitter Card tags here too?",
      answer:
        "Many generators output Twitter fields alongside Open Graph. Confirm the card type your site actually supports before pasting.",
    },
    {
      question: "Why was a character rejected in my title?",
      answer:
        "Some fields disallow raw characters that must be escaped in HTML, or they enforce length limits. Encode ampersands and keep titles concise.",
    },
    {
      question: "Does generating tags publish them to my site?",
      answer:
        "No. The tool writes markup for you to paste into your theme, CMS, or SEO plugin. Nothing goes live until you deploy that HTML.",
    },
    {
      question: "Should brand name go at the start or end of the title?",
      answer:
        "Often at the end after a separator so the unique page topic appears first in truncated tabs. Test how your brand looks in a real SERP preview.",
    },
    {
      question: "Are meta keywords still useful for Google?",
      answer:
        "Mainstream search engines have long ignored meta keywords for ranking. Focus on title, description, and clear on-page content instead.",
    },
    {
      question: "What is og:url for?",
      answer:
        "It declares the canonical social URL for the share. Keep it absolute (https) so platforms do not guess the wrong path.",
    },
    {
      question: "Can multilingual sites use different meta per language?",
      answer:
        "Yes. Each language URL should carry its own title and description, plus proper `hreflang` elsewhere in the head.",
    },
    {
      question: "How do I preview tags after installing them?",
      answer:
        "Use an Open Graph debugger or this site’s preview tool on the live URL. Cache delays mean you may need a scrape refresh.",
    },
    {
      question: "Should thin utility pages get noindex?",
      answer:
        "Often yes for login walls, cart steps, and filtered faceted URLs that create duplicates. Keep indexable pages to ones you want ranking.",
    }
  ],
  "open-graph-preview": [
    {
      question: "What does an Open Graph preview show?",
      answer:
        "It reads OG and related meta tags to approximate how a link card may appear—title, description, and image. Platforms can still override or crop differently.",
    },
    {
      question: "Why do I need a public URL for the preview?",
      answer:
        "The checker fetches the page like a social crawler would. Localhost and private IPs are blocked because remote fetchers cannot reach them.",
    },
    {
      question: "What if my preview image is wrong?",
      answer:
        "Confirm `og:image` is absolute, publicly reachable, and large enough. Then refresh the platform’s cache after you fix the tag.",
    },
    {
      question: "Does the preview download my whole website?",
      answer:
        "It requests the URL you enter to read head tags, not to mirror the site. Still avoid pasting non-public staging links that expose secrets.",
    },
    {
      question: "Why did the check time out?",
      answer:
        "Slow servers, blocked bots, or network filters can prevent a timely response. Retry later or test headers with a simpler static page.",
    },
    {
      question: "Is Open Graph only for Facebook?",
      answer:
        "OG started at Facebook but many apps reuse the same tags. LinkedIn, Slack, and others read similar fields with their own quirks.",
    },
    {
      question: "What size should og:image be for a clean card?",
      answer:
        "A landscape image around 1200×630 (about 1.91:1) is a widely compatible target. Avoid tiny images that platforms reject.",
    },
    {
      question: "Can HTTPS pages still fail the preview?",
      answer:
        "Yes—certificate problems, bot walls, or missing tags still break cards. View source and confirm the OG tags are in the initial HTML.",
    },
    {
      question: "Do query parameters change the preview?",
      answer:
        "If the server returns different meta for different query strings, cards can diverge. Prefer clean canonical URLs for sharing.",
    },
    {
      question: "Why is the title truncated on mobile shares?",
      answer:
        "Apps reserve limited space. Keep `og:title` concise so the important words survive cropping.",
    },
    {
      question: "Should og:description match the meta description?",
      answer:
        "They can match, but you may tune OG copy for social tone while keeping the search description more factual.",
    },
    {
      question: "How do I force Facebook to refresh a card?",
      answer:
        "Use Meta’s Sharing Debugger scrape tool after you update tags. Other platforms have their own clear-cache endpoints.",
    },
    {
      question: "Can JavaScript-injected meta tags be read?",
      answer:
        "Many crawlers only see the first HTML response. Put critical OG tags in server-rendered HTML, not only in client-side scripts.",
    },
    {
      question: "What does a missing og:image look like?",
      answer:
        "Platforms may pick a random on-page image or show a blank card. Explicit `og:image` tags prevent that surprise.",
    },
    {
      question: "Is this preview identical to Instagram or X?",
      answer:
        "No. Each network crops and styles cards differently. Treat this as a diagnostic for tags, not a pixel-perfect mock of every app.",
    },
    {
      question: "Do I need og:type on every page?",
      answer:
        "Setting `website` or `article` helps consumers classify the object. It is small markup with clearer intent for scrapers.",
    }
  ],
  "password-strength-checker": [
    {
      question: "How does a password strength checker score a password?",
      answer:
        "It estimates entropy from length and character variety, then labels weak through strong. It does not prove a password is unguessable in the real world.",
    },
    {
      question: "Is a longer password always stronger?",
      answer:
        "Length helps a lot, especially with random words or characters. A long but predictable phrase can still be weak if it is famous or personal.",
    },
    {
      question: "Why are digits-only passwords rated poorly?",
      answer:
        "Ten digits give a tiny character pool. Attackers try numeric patterns quickly, so short PINs fail most strength rubrics.",
    },
    {
      question: "Does this tool check Have I Been Pwned or leak lists?",
      answer:
        "Not unless a page explicitly says it queries an online breach API. Local scoring alone does not know whether your password already leaked.",
    },
    {
      question: "Should I include symbols in every password?",
      answer:
        "Symbols expand the search space when the password is otherwise random. A long passphrase of unrelated words can also be strong without dense symbols.",
    },
    {
      question: "What is password entropy in bits?",
      answer:
        "It is a rough measure of how many guesses a random attacker might need. Higher bits generally mean harder brute force, assuming true randomness.",
    },
    {
      question: "Is “Strong” enough for a bank login?",
      answer:
        "Use a unique password or passphrase plus multi-factor authentication. Strength labels are guidance, not a substitute for MFA.",
    },
    {
      question: "Why does adding a space change the score?",
      answer:
        "Spaces count as another character class in some pools, raising entropy slightly. More important is overall length and unpredictability.",
    },
    {
      question: "Can the checker see my password after I leave?",
      answer:
        "This page is built to rate what you type locally. Still avoid entering production passwords on shared computers.",
    },
    {
      question: "How is strength checking different from generating a password?",
      answer:
        "Checking rates a candidate you already chose. A generator creates a fresh random secret so you are not reusing old patterns.",
    },
    {
      question: "Are password tips the same for passphrases?",
      answer:
        "Passphrases rely on several unrelated words and enough length. Avoid famous quotes and keyboard walks even if the phrase is long.",
    },
    {
      question: "Why might two checkers disagree?",
      answer:
        "They use different dictionaries, entropy models, and banned-list heuristics. Treat disagreement as a signal to lengthen or randomize further.",
    },
    {
      question: "Should I reuse a strong password across sites?",
      answer:
        "No. A leak on one site would expose the others. Use a password manager to store unique secrets.",
    },
    {
      question: "Do composition rules like “one uppercase” guarantee strength?",
      answer:
        "Mandatory patterns can make passwords predictable. Modern guidance favors length and uniqueness over rigid complexity theater.",
    },
    {
      question: "Can common substitutions like @ for a fool checkers?",
      answer:
        "Often those tricks are in attacker dictionaries. Randomness beats leetspeak on a weak base word.",
    },
    {
      question: "When should I change a password immediately?",
      answer:
        "Change it after a breach notice, phishing, or shared-device exposure—even if the checker still called it strong.",
    }
  ],
  "pdf-compressor": [
    {
      question: "How do I compress a PDF for email?",
      answer:
        "Open the file in the compressor, choose a compression level, and download the smaller result. Then confirm it is under your mail host’s attachment limit.",
    },
    {
      question: "Will compressing a PDF always reduce quality?",
      answer:
        "Image-heavy PDFs may lose some visual fidelity at stronger settings. Text-based PDFs often shrink with little visible change when streams are optimized.",
    },
    {
      question: "Why did my PDF barely get smaller?",
      answer:
        "It may already be optimized, or mostly text with little redundant data. Scanned photo pages shrink more than digitally created text PDFs.",
    },
    {
      question: "Is PDF compression lossless?",
      answer:
        "It depends on the mode. Some optimizations preserve content exactly; stronger modes recompress images and are lossy. Read the option label before you choose.",
    },
    {
      question: "Will text stay searchable after compression?",
      answer:
        "Often yes if the tool keeps the text layer. Extreme image flattening can turn pages into pictures and remove searchability.",
    },
    {
      question: "What is a good size target for Gmail attachments?",
      answer:
        "Stay comfortably under the common 25 MB cap, including encoding overhead. When still too large, split the PDF or share a link instead.",
    },
    {
      question: "Can I compress a password-protected PDF?",
      answer:
        "Usually you must unlock it first. Protected files block rewriting until the password is supplied in a tool that supports it.",
    },
    {
      question: "Should I split or compress a huge PDF?",
      answer:
        "Try compression first for email. Split by sections when recipients only need part of the document or when compression plateaus.",
    },
    {
      question: "Why is the output sometimes larger?",
      answer:
        "Re-encoding can add overhead if images were already tiny or if metadata grew. Keep the original when that happens.",
    },
    {
      question: "How large a PDF can the browser open?",
      answer:
        "Memory limits vary by device. Very large scanned books may fail in-tab; try fewer pages or a desktop app then.",
    },
    {
      question: "Does compression remove PDF metadata?",
      answer:
        "Not always. Use a metadata tool if you need authors, titles, or hidden fields cleared separately.",
    },
    {
      question: "Is compressing the same as converting to PDF/A?",
      answer:
        "No. PDF/A is an archival standard with stricter rules. Compression only aims to reduce bytes.",
    },
    {
      question: "Can I compress PDFs made from phone photos?",
      answer:
        "Yes, and they often shrink a lot because camera images are large. Lower image quality settings help when readability remains acceptable.",
    },
    {
      question: "Will forms and annotations survive compression?",
      answer:
        "Simple optimizers keep them; aggressive rewrite modes might not. Spot-check interactive fields after compressing.",
    },
    {
      question: "How many times should I recompress the same file?",
      answer:
        "Once is usually enough. Repeated lossy passes can degrade scans without much more size savings.",
    }
  ],
  "qr-code-scanner": [
    {
      question: "How do I scan a QR code from an image file?",
      answer:
        "Choose the image that contains the code, wait for the decoder to finish, then open or copy the result. A sharp, well-lit crop of just the square usually works better than a busy full-page photo.",
    },
    {
      question: "Can I scan a QR code with my phone camera in the browser?",
      answer:
        "Yes on phones that allow camera access in the tab. Grant permission when asked, point the camera at the code, and keep the square steady until the payload appears.",
    },
    {
      question: "Why won’t my QR code scan?",
      answer:
        "Blur, glare, low contrast, a bent print, or a cropped corner are the usual causes. Retake the photo closer, flatten the paper, and avoid reflections on glossy screens.",
    },
    {
      question: "What kinds of QR payloads can this tool read?",
      answer:
        "Most codes carry a URL, plain text, Wi-Fi setup, or contact data. The scanner shows the raw string so you can decide whether to open a link or copy the text.",
    },
    {
      question: "Is scanning a QR code safe?",
      answer:
        "Treat unknown codes like unknown links. Read the decoded URL before you open it, and skip short links you do not trust. The scanner itself only decodes; it does not visit the site for you.",
    },
    {
      question: "Do I need an app store QR reader?",
      answer:
        "Not for a one-off scan. A browser tool is enough when you already have a photo or can use the phone camera in the tab. Dedicated apps help if you scan many codes every day.",
    },
    {
      question: "Can damaged or partially covered codes still work?",
      answer:
        "QR codes include error correction, so a small stain or corner loss may still decode. Large tears or missing finder squares usually fail and need a cleaner capture.",
    },
    {
      question: "What resolution should my photo have?",
      answer:
        "Enough pixels for the modules to stay distinct. A modern phone photo is fine; a tiny thumbnail or heavy compression that blurs black and white squares is not.",
    },
    {
      question: "Does the scanner work offline after the page loads?",
      answer:
        "Decoding runs in the browser once scripts are ready. Camera or file access still needs the device permissions you already granted, but the image is not uploaded to finish a scan.",
    },
    {
      question: "Why did it find text that is not a website?",
      answer:
        "Many codes store plain text, phone numbers, or Wi-Fi credentials instead of https links. Copy the string and use it in the right place rather than forcing it into a browser address bar.",
    },
    {
      question: "Can I scan several codes from one photo?",
      answer:
        "If more than one code is visible, the tool reports what it finds in that frame. Cropping to a single square is the surest way to control which payload you get.",
    },
    {
      question: "How is a QR code different from a barcode?",
      answer:
        "Classic barcodes are usually one-dimensional lines for product SKUs. QR codes are two-dimensional squares that hold longer strings such as URLs or contact cards.",
    },
    {
      question: "Will dark mode or a colored QR still scan?",
      answer:
        "High-contrast dark modules on a light background scan most reliably. Low-contrast brand colors or inverted designs often need a higher-contrast reprint.",
    },
    {
      question: "Does printing size matter?",
      answer:
        "Yes. Tiny prints on glossy stickers can fail when the camera cannot resolve each module. Larger prints with quiet space around the square scan more consistently.",
    },
    {
      question: "What should I do after a successful scan?",
      answer:
        "Copy the payload, verify the destination, then open it only if it matches what you expect. For Wi-Fi or contact codes, paste into the matching settings screen instead of a browser.",
    }
  ],
  "text-repeater": [
    {
      question: "How do I repeat a word or sentence many times?",
      answer:
        "Paste the text, set how many copies you want, choose a separator such as a newline or comma, then generate and copy the result. The tool joins the copies in order without changing the original wording.",
    },
    {
      question: "What separator should I use between repeats?",
      answer:
        "Use a newline when each copy should sit on its own row, a comma or space for inline lists, and a custom string when you need a tag between items. Empty separators mash copies together with no gap.",
    },
    {
      question: "Is there a maximum repeat count?",
      answer:
        "Very large counts can freeze the tab because the joined string grows in memory. Start with a modest number, copy what you need, and increase only if the browser stays responsive.",
    },
    {
      question: "Can I repeat multi-line blocks?",
      answer:
        "Yes. Paste the whole block as the source text. Each repeat includes every line you pasted, then the separator you chose is inserted between those full copies.",
    },
    {
      question: "Does repeating change spaces inside my text?",
      answer:
        "No. Characters inside each copy stay as you typed them. Only the separator between copies is added by the tool.",
    },
    {
      question: "How is this different from lorem ipsum?",
      answer:
        "Lorem ipsum invents placeholder Latin. The repeater duplicates the exact string you supply, which is better for test data, stress tests, and patterned lists.",
    },
    {
      question: "Can I build a numbered list with the repeater?",
      answer:
        "Not automatically. Repeat the line first, then number the lines in another tool, or include the number inside the source text if every copy should share the same label.",
    },
    {
      question: "Why would a form reject a huge repeated string?",
      answer:
        "Many forms cap length. If paste fails, lower the count or split the output across fields. The repeater does not enforce remote form limits.",
    },
    {
      question: "Does the tool trim my text before repeating?",
      answer:
        "It keeps leading and trailing spaces inside the source unless you remove them yourself. Trim first if you do not want padded copies.",
    },
    {
      question: "Can I repeat emoji or non-English text?",
      answer:
        "Yes. Unicode characters repeat the same way as Latin letters. Confirm the destination app accepts the characters after you paste.",
    },
    {
      question: "Is repeating useful for load testing?",
      answer:
        "Developers sometimes paste long repeated strings into inputs to check truncation and performance. Keep counts reasonable so the browser tab remains usable.",
    },
    {
      question: "What happens if the count is zero?",
      answer:
        "A zero or empty count should yield no copies. Use at least 1 when you want the original text once in the output box.",
    },
    {
      question: "Can separators include tabs?",
      answer:
        "If the UI allows a custom separator, a tab character works for spreadsheet-friendly columns. Otherwise repeat with newlines and split later.",
    },
    {
      question: "Will HTML tags inside the text be escaped?",
      answer:
        "The repeater treats tags as plain characters. Paste carefully into rich editors that might interpret markup after you copy the result.",
    },
    {
      question: "How do I stop mid-generation if the count is too high?",
      answer:
        "Cancel or refresh the tab if the page becomes unresponsive. Choose a smaller count next time and build the list in chunks.",
    },
    {
      question: "Does the repeater store my phrases?",
      answer:
        "No. Work stays in the page session for the copy you generate. Clear the box when you finish if the text is sensitive.",
    }
  ],
  "time-calculator": [
    {
      question: "How do I add hours and minutes together?",
      answer:
        "Enter each duration, choose add, and read the normalized total. Minutes at 60 or more roll into hours so the result stays in a readable hours-and-minutes form.",
    },
    {
      question: "How do I subtract one time length from another?",
      answer:
        "Put the larger duration first when you expect a positive remainder, then subtract. Negative results mean the second length was longer than the first.",
    },
    {
      question: "Can I mix hours, minutes, and seconds?",
      answer:
        "Use the fields the calculator exposes for each unit. Convert awkward values into the supported units first if a field is missing.",
    },
    {
      question: "How do I convert minutes into hours?",
      answer:
        "Divide total minutes by 60 for whole hours and keep the remainder as minutes. The calculator does that normalization when totals spill past 59 minutes.",
    },
    {
      question: "Is this a clock for time zones?",
      answer:
        "No. It adds and subtracts durations. For clock times across cities, use a time zone converter instead.",
    },
    {
      question: "Can I calculate a work shift length?",
      answer:
        "Yes for simple elapsed duration when you already know the hours and minutes worked. It does not punch a start clock or apply break rules by itself.",
    },
    {
      question: "What if I only know decimal hours?",
      answer:
        "Convert decimal hours to minutes first (multiply the fraction by 60), then enter hours and minutes. Example: 1.5 hours is 1 hour 30 minutes.",
    },
    {
      question: "Does the calculator handle days?",
      answer:
        "When totals grow past 24 hours, some modes show extra hours rather than calendar days. Split into days manually if you need day counts.",
    },
    {
      question: "Why do two time tools disagree?",
      answer:
        "Rounding, whether seconds are kept, and whether negatives are allowed differ by product. Match unit precision before comparing.",
    },
    {
      question: "Can I add a list of lap times?",
      answer:
        "Add them one after another or sum offline then enter the combined hours and minutes. There is no separate lap table on this page.",
    },
    {
      question: "Is overtime math included?",
      answer:
        "No payroll rules are applied. Compute the raw duration here, then apply overtime multipliers in your payroll sheet.",
    },
    {
      question: "How precise are the results?",
      answer:
        "Results follow whole minutes or seconds based on the inputs you type. Fractional seconds are not the focus of this simple duration tool.",
    },
    {
      question: "Can I use it for cooking timers?",
      answer:
        "Yes for summing prep and cook blocks. It will not ring an alarm; copy the total into a separate timer app if you need a countdown.",
    },
    {
      question: "What does a negative duration mean?",
      answer:
        "It means you subtracted a longer span from a shorter one. Swap the operands or treat the absolute value as the shortfall.",
    },
    {
      question: "Does daylight saving change duration math?",
      answer:
        "Duration addition ignores civil clock jumps. DST matters for wall-clock schedules, not for pure hour-minute arithmetic.",
    },
    {
      question: "Are my duration numbers stored?",
      answer:
        "They stay in the browser for the session. Nothing is sent to finish the add or subtract.",
    }
  ],
  "image-to-text": [
    {
      question: "How does image-to-text OCR work in the browser?",
      answer:
        "The page loads a recognition engine, reads pixels from your image locally when possible, and proposes plain text you can copy. Quality depends on sharpness, contrast, and language support.",
    },
    {
      question: "What image formats work best for OCR?",
      answer:
        "PNG and JPEG photos of flat documents work well. Extremely compressed social-media screenshots and skewed phone photos need a straighter, sharper retake.",
    },
    {
      question: "How can I improve OCR accuracy?",
      answer:
        "Use even lighting, avoid shadows, fill the frame with the text, and crop distractions. Higher contrast black text on white usually beats colorful backgrounds.",
    },
    {
      question: "Does OCR keep the original layout?",
      answer:
        "Most browser OCR returns a reading-order text stream, not a perfect page layout. Expect to reapply columns or tables after you paste.",
    },
    {
      question: "Can it read handwriting?",
      answer:
        "Printed text is far more reliable. Neat handwriting sometimes works; cursive and faint pencil often fail and should be typed instead.",
    },
    {
      question: "Is my photo uploaded for OCR?",
      answer:
        "This tool is designed to process in the browser after model files load. Prefer a clear local file and check the on-page privacy note if you need a strict offline guarantee.",
    },
    {
      question: "Why are some letters swapped?",
      answer:
        "Similar shapes such as O/0 and I/l confuse OCR. Proofread numbers and names carefully before you rely on the text.",
    },
    {
      question: "Can I OCR a PDF with this tool?",
      answer:
        "This page expects an image. Convert PDF pages to images first, or use a dedicated PDF text tool when the file already contains a text layer.",
    },
    {
      question: "Does rotation matter?",
      answer:
        "Upside-down or sideways pages often fail. Rotate the image upright before running OCR.",
    },
    {
      question: "How large can the image be?",
      answer:
        "Very large photos may be resized for memory limits. If text becomes soft after resize, crop to the paragraph you need and run again.",
    },
    {
      question: "Can OCR extract text from screenshots of apps?",
      answer:
        "Yes when fonts are clear. UI chrome, icons, and overlapping windows reduce accuracy, so crop to the text region.",
    },
    {
      question: "What languages can it recognize?",
      answer:
        "Support depends on the loaded language data. English is the common default; other languages need matching trained data on the page.",
    },
    {
      question: "Is OCR the same as a live camera translator?",
      answer:
        "OCR copies text from a still image. Live translation apps add continuous camera frames and machine translation on top.",
    },
    {
      question: "Should I compress the image before OCR?",
      answer:
        "Mild compression is fine. Heavy compression that blurs edges hurts recognition more than it helps upload size.",
    },
    {
      question: "What should I do with the extracted text?",
      answer:
        "Copy it into your editor, fix mistakes, then save. Sensitive documents should be cleared from the page when you finish.",
    }
  ],
  "jwt-decoder": [
    {
      question: "What are the three parts of a JWT?",
      answer:
        "A typical JWT has a header, a payload, and a signature, separated by dots. Each of the first two parts is Base64URL-encoded JSON when the token is well formed.",
    },
    {
      question: "How do I decode a JWT without verifying it?",
      answer:
        "Paste the token into the decoder to read the header and payload claims. Decoding alone does not prove the signature is valid or that you should trust the token.",
    },
    {
      question: "What is the difference between decoding and verifying a JWT?",
      answer:
        "Decoding shows the claims. Verifying checks the signature with a secret or public key so you know the token was not altered. This page focuses on readable decode output.",
    },
    {
      question: "What does the alg header mean?",
      answer:
        "It names the signing algorithm the issuer intended, such as HS256 or RS256. Treat unexpected alg values as a red flag before you accept a token in production code.",
    },
    {
      question: "Can I edit claims inside a JWT here?",
      answer:
        "The decoder is for inspection. Changing claims requires resigning with a key you control; unsigned edits will fail verification on any serious API.",
    },
    {
      question: "Why do expiration times look like large numbers?",
      answer:
        "JWT timestamps are usually Unix seconds. Convert them with a timestamp tool to see local date and time.",
    },
    {
      question: "Is it safe to paste production JWTs?",
      answer:
        "Avoid pasting live session tokens into any shared screen. Prefer expired fixtures or redacted samples when you only need to understand structure.",
    },
    {
      question: "What if the token has only two segments?",
      answer:
        "Some unsigned or incomplete strings lack a signature section. The tool may still show readable parts, but such tokens should not be treated as authenticated.",
    },
    {
      question: "Do spaces or line breaks break a JWT?",
      answer:
        "Yes. Paste the compact three-part string without wrapping spaces. Copy carefully from logs that insert breaks.",
    },
    {
      question: "What are common JWT claims?",
      answer:
        "iss, sub, aud, exp, nbf, and iat appear often. Custom claims vary by issuer; read your API docs for meanings.",
    },
    {
      question: "Can a JWT carry roles or permissions?",
      answer:
        "Yes as custom claims, but size and privacy matter. Do not stuff secrets into payloads because anyone who can decode can read them.",
    },
    {
      question: "Why is Base64URL used instead of plain Base64?",
      answer:
        "URL-safe alphabets avoid + and / characters that break query strings. Padding rules also differ slightly from classic Base64.",
    },
    {
      question: "Does decoding require the signing secret?",
      answer:
        "No. The header and payload are only encoded, not encrypted, in a standard signed JWT. The secret is required to verify, not to read.",
    },
    {
      question: "What does kid mean in the header?",
      answer:
        "Key ID hints which key from a JWKS set should verify the signature. It does not by itself authenticate the token.",
    },
    {
      question: "How should developers use this decoder day to day?",
      answer:
        "Paste a failing token, confirm exp and aud, and compare claims with API expectations before digging into signature code.",
    }
  ],
  "mortgage-calculator": [
    {
      question: "How do I estimate a monthly mortgage payment?",
      answer:
        "Enter the loan amount after down payment, the interest rate, and the term in years. The calculator applies standard amortization to estimate principal and interest for each month.",
    },
    {
      question: "Does this mortgage estimate include taxes and insurance?",
      answer:
        "Many simple calculators show principal and interest only. Add property tax, insurance, and HOA dues separately if you need a full housing budget.",
    },
    {
      question: "How does a larger down payment change the payment?",
      answer:
        "It lowers the amount financed, which lowers principal and interest. It can also avoid private mortgage insurance when you reach the lender’s equity threshold.",
    },
    {
      question: "What loan term should I model first?",
      answer:
        "Thirty-year fixed loans are a common U.S. starting point; fifteen-year terms raise the monthly payment but cut total interest. Compare both with the same rate assumptions.",
    },
    {
      question: "How do extra principal payments help?",
      answer:
        "Extra amounts reduce the balance sooner, so less interest accrues over the life of the loan. Confirm your lender applies prepayments to principal.",
    },
    {
      question: "Is APR the same as the interest rate I should type?",
      answer:
        "APR includes certain fees annualized. For amortization of the note rate, use the loan’s interest rate unless your worksheet says otherwise.",
    },
    {
      question: "Can I model an adjustable-rate mortgage here?",
      answer:
        "This page is built around a fixed-rate style payment. ARM estimates need rate-cap assumptions a basic fixed calculator does not include.",
    },
    {
      question: "Why is the first month mostly interest?",
      answer:
        "Early amortization schedules apply more of each payment to interest because the balance is highest. The principal share grows later in the term.",
    },
    {
      question: "How accurate is an online mortgage estimate?",
      answer:
        "It is a planning figure, not a lender commitment. Quotes vary with credit, points, escrow, and underwriting.",
    },
    {
      question: "What is PMI and when does it appear?",
      answer:
        "Private mortgage insurance often applies when the down payment is small. It raises the monthly cost until you reach the required equity.",
    },
    {
      question: "Can I use this for investment property loans?",
      answer:
        "You can explore principal and interest with the same math, but investment rates, reserves, and tax treatment differ. Talk with a lender for investment quotes.",
    },
    {
      question: "How do discount points affect the payment?",
      answer:
        "Buying points lowers the rate and usually the payment, in exchange for cash at closing. Run the calculator at both rates to compare.",
    },
    {
      question: "What happens if I round the payment up?",
      answer:
        "Paying a little extra each month acts like a small prepayment and can shorten the schedule. Confirm the servicer allocates the surplus to principal.",
    },
    {
      question: "Does biweekly mortgage payment change the math?",
      answer:
        "Twenty-six half-payments per year equal thirteen full payments, which can cut interest if the servicer applies them that way. Ask before relying on a biweekly plan.",
    },
    {
      question: "When should I talk to a mortgage lender?",
      answer:
        "Use the calculator to set a budget range, then get a Loan Estimate for fees, escrow, and underwriting rules a webpage cannot know.",
    }
  ],
  "url-parser": [
    {
      question: "What parts of a URL does a parser show?",
      answer:
        "A typical breakdown lists the protocol, host, port when present, path, query string, and fragment. Seeing each piece separately makes debugging redirects and tracking parameters easier.",
    },
    {
      question: "How do I read query parameters from a link?",
      answer:
        "Paste the full URL and inspect the query section. Each key and value pair is listed so you can spot duplicates, empty values, or encoding issues.",
    },
    {
      question: "What is the difference between a path and a query string?",
      answer:
        "The path points to a resource on the host, such as /tools/url-parser. The query string starts after ? and carries extra parameters the page or API can read.",
    },
    {
      question: "Why does the fragment not go to the server in many apps?",
      answer:
        "The #fragment is mainly for the browser. Many servers never receive it, so analytics that rely on hashes need client-side handling.",
    },
    {
      question: "Can I parse URLs that use international domain names?",
      answer:
        "Yes when the browser or parser supports punycode hosts. If a hostname looks like xn--, it is the ASCII form of an internationalized domain.",
    },
    {
      question: "What does percent-encoding in a URL mean?",
      answer:
        "Special characters are written as % followed by hex so the link stays valid. A space may appear as %20; decoding shows the readable character again.",
    },
    {
      question: "How do I check a UTM campaign link?",
      answer:
        "Paste the tagged URL and read utm_source, utm_medium, and utm_campaign in the query list. Fix typos there before you share the link widely.",
    },
    {
      question: "Why was my relative path rejected?",
      answer:
        "Parsers that expect an absolute URL need a scheme and host. Add https:// and the domain, or use a tool mode that accepts relative paths if available.",
    },
    {
      question: "Do ports appear for https links?",
      answer:
        "Port 443 is the default for https and is often omitted. A non-default port shows explicitly after the host.",
    },
    {
      question: "Can two query keys with the same name both appear?",
      answer:
        "Yes. Some APIs repeat keys; the parser should surface each occurrence so you do not assume only the last value matters.",
    },
    {
      question: "Is username:password in a URL still common?",
      answer:
        "Embedded credentials are discouraged and often stripped by browsers. Prefer proper auth headers or login flows instead of user:pass@host links.",
    },
    {
      question: "How is this different from decoding a single parameter?",
      answer:
        "A URL parser splits the whole link. A percent-decoder focuses on one encoded string without requiring a full absolute URL.",
    },
    {
      question: "Will parsing change the original link?",
      answer:
        "Inspection tools show structure without rewriting your clipboard unless you copy a rebuilt URL. The source string stays intact until you edit it.",
    },
    {
      question: "Why do marketing links look so long?",
      answer:
        "Trackers append many query parameters. Parsing helps you separate the destination path from the tracking clutter.",
    },
    {
      question: "Are pasted URLs uploaded to finish parsing?",
      answer:
        "This page parses in the browser. Nothing needs a server round-trip just to list host, path, and query parts.",
    }
  ],
  "age-calculator": [
    {
      question: "How do I calculate age in years, months, and days?",
      answer:
        "Enter the birth date and the as-of date. The calculator counts completed years, then leftover months and days using calendar rules rather than a flat 365-day year.",
    },
    {
      question: "Can I find age on a specific past date?",
      answer:
        "Yes. Set the second date to that day to see how old someone was then. Useful for historical records and eligibility checks.",
    },
    {
      question: "Why do leap years change total days?",
      answer:
        "February 29 adds an extra day in leap years, so the day count between two dates is not years × 365. The tool accounts for those calendar days.",
    },
    {
      question: "How is age calculated for a February 29 birthday?",
      answer:
        "Conventions vary by country and policy. Many tools treat non-leap years as February 28 or March 1 for the anniversary; read the on-page note for this calculator’s rule.",
    },
    {
      question: "Can parents use this for school cutoff ages?",
      answer:
        "Yes as a planning aid. Always confirm the school’s official cutoff date and local rules, which may differ from a general age count.",
    },
    {
      question: "Does the calculator include the end date as a full day?",
      answer:
        "Age usually counts completed time up to the as-of date. A birthday on the as-of date typically means that year has just been completed.",
    },
    {
      question: "Why is my result one day off from another site?",
      answer:
        "Time zones, inclusive counting, and leap-day policies differ. Match both dates and the leap-day rule before comparing.",
    },
    {
      question: "Can I calculate age for pets the same way?",
      answer:
        "Chronological age uses the same date math. Pet “human year” charts are separate marketing formulas, not calendar age.",
    },
    {
      question: "Is time of day required?",
      answer:
        "Most age tools use whole calendar dates. Hours and minutes rarely matter unless a policy defines age at a precise instant.",
    },
    {
      question: "How do I check retirement or benefit eligibility age?",
      answer:
        "Compute chronological age here, then apply the program’s age rules and required documents. Eligibility is legal, not just arithmetic.",
    },
    {
      question: "What if I only know the birth year?",
      answer:
        "You need at least a month and day for exact age. With only a year you can estimate a range, not an exact years-months-days result.",
    },
    {
      question: "Can future as-of dates show upcoming age?",
      answer:
        "Yes when the tool allows future dates. That helps plan birthdays and age-gated events ahead of time.",
    },
    {
      question: "Does DST affect age in days?",
      answer:
        "Not for date-only calculators. Daylight saving changes clock time, not the calendar date difference.",
    },
    {
      question: "Are birth dates stored after I calculate?",
      answer:
        "Values stay in the browser session for the calculation. Clear the fields if the dates are sensitive.",
    }
  ],
  "credit-card-payoff-calculator": [
    {
      question: "How do I estimate months to pay off a credit card?",
      answer:
        "Enter the balance, APR, and the fixed amount you can pay each month. The calculator projects how balances shrink until the card reaches zero.",
    },
    {
      question: "What monthly payment clears a card in a set time?",
      answer:
        "Choose a target payoff horizon when the tool supports it, or raise the payment until the schedule fits your deadline. Higher payments cut months and interest.",
    },
    {
      question: "Why is the minimum payment a trap?",
      answer:
        "Minimums are often a small percent of the balance plus interest, so payoff can stretch for years. Paying more than the minimum is what shortens the schedule.",
    },
    {
      question: "Does APR compounding change the estimate?",
      answer:
        "Card issuers may use daily periodic rates. A monthly model is a close planning estimate, not a statement replica.",
    },
    {
      question: "How do new purchases affect payoff plans?",
      answer:
        "New charges raise the balance and interest. Freeze discretionary spending on that card while you follow a payoff schedule.",
    },
    {
      question: "Should I include fees in the balance?",
      answer:
        "Start from the current statement balance that interest will apply to. Add known pending fees if you want a conservative plan.",
    },
    {
      question: "What if I only pay interest each month?",
      answer:
        "The principal barely moves and payoff never arrives. The calculator shows why fixed principal-chipping payments matter.",
    },
    {
      question: "Can I model a 0% intro APR period?",
      answer:
        "Approximate by using 0% for the promo months, then switch to the go-to rate for the remaining balance. Watch the promo end date on your card.",
    },
    {
      question: "How much interest will I pay overall?",
      answer:
        "Sum of interest across the projected months. Compare that total with a faster payment plan to see savings.",
    },
    {
      question: "Is biweekly credit card payment better?",
      answer:
        "Paying half twice a month can reduce average balance slightly if the issuer posts promptly. Confirm posting rules on your account.",
    },
    {
      question: "How do balance transfers change the math?",
      answer:
        "A lower transfer APR can cut interest, but transfer fees add to principal. Model fee plus new rate before you move a balance.",
    },
    {
      question: "Why do payoff dates slip in real life?",
      answer:
        "Missed payments, late fees, and new purchases extend the schedule. Recalculate whenever the balance or payment changes.",
    },
    {
      question: "Can I pay off multiple cards with this tool?",
      answer:
        "Model one card at a time, or move to a debt payoff tool that ranks several balances. Keep each APR accurate.",
    },
    {
      question: "When should I call the issuer instead?",
      answer:
        "For hardship plans, disputed charges, or exact payoff quotes. Online estimates guide budgets; servicers give official figures.",
    }
  ],
  "debt-payoff-calculator": [
    {
      question: "How do I choose between avalanche and snowball?",
      answer:
        "Avalanche targets the highest APR first to minimize interest. Snowball clears the smallest balance first for quick wins. Pick the method you will stick with.",
    },
    {
      question: "What inputs does a multi-debt payoff plan need?",
      answer:
        "Each debt’s balance, APR, and minimum payment, plus any extra monthly amount you can apply above the minimums.",
    },
    {
      question: "How is the extra payment applied each month?",
      answer:
        "Minimums go to every debt; the extra hits the current target debt. When that debt is gone, its minimum rolls into the next target.",
    },
    {
      question: "Will avalanche always cost less interest?",
      answer:
        "Usually yes if you follow it consistently. Snowball can still win in practice when motivation keeps you paying.",
    },
    {
      question: "Can I include student loans and cards together?",
      answer:
        "Yes for planning if rates and minimums are accurate. Federal loan programs may have separate repayment rules worth reading alongside the math.",
    },
    {
      question: "What if a debt has a 0% promotional rate?",
      answer:
        "Keep it in the list with the promo APR and end date in mind. Redirect extras before the rate jumps if the balance will remain.",
    },
    {
      question: "How do I estimate total interest across all debts?",
      answer:
        "Run the schedule for your chosen method and sum interest lines. Compare avalanche versus snowball totals before you commit.",
    },
    {
      question: "Should I pause investing to pay debt faster?",
      answer:
        "That depends on rates, employer matches, and risk tolerance. The calculator shows payoff speed; a planner helps with the tradeoff.",
    },
    {
      question: "What happens when I add a new loan mid-plan?",
      answer:
        "Recalculate with the new balance and minimum. Old timelines no longer apply once the debt stack changes.",
    },
    {
      question: "Can settlement offers be modeled here?",
      answer:
        "Not precisely. Settlements change principal and credit outcomes outside simple amortization. Use lender paperwork for those scenarios.",
    },
    {
      question: "How large should my emergency fund be while paying debt?",
      answer:
        "Many advisors keep a small cash buffer so a flat tire does not reload the cards. Exact size is personal.",
    },
    {
      question: "Do minimum payments change as balances fall?",
      answer:
        "Issuers often recompute minimums. Using today’s minimums is a common estimate; update when statements change.",
    },
    {
      question: "Is paying every two weeks the same as monthly extra?",
      answer:
        "Not always. Align the model with how your paycheck and due dates actually land so cash flow stays realistic.",
    },
    {
      question: "When is talking to a nonprofit credit counselor useful?",
      answer:
        "When interest feels unmanageable or you’re juggling collections. A counselor can review options a spreadsheet cannot.",
    }
  ],
  "fuel-cost-calculator": [
    {
      question: "How do I estimate gas cost for a road trip?",
      answer:
        "Enter distance, your vehicle’s fuel economy, and the price per gallon or liter. The tool multiplies fuel needed by price to estimate cost.",
    },
    {
      question: "Should I use MPG or L/100 km?",
      answer:
        "Match the unit to your region and owner’s manual. Mixing units without converting will skew the cost.",
    },
    {
      question: "How do I handle a round trip?",
      answer:
        "Double the one-way distance, or enter each leg if economy differs. Returning with a loaded car may use slightly more fuel.",
    },
    {
      question: "Does city versus highway MPG matter?",
      answer:
        "Yes. Use a blended figure that matches your route, or run two estimates and weight them by miles in each condition.",
    },
    {
      question: "Can I compare two cars on the same trip?",
      answer:
        "Run the calculator once per vehicle with each MPG and the same distance and fuel price. The difference is your comparison.",
    },
    {
      question: "What fuel price should I type?",
      answer:
        "Use a recent local average or the station you expect to visit. Prices change daily, so refresh before a long trip.",
    },
    {
      question: "How do I estimate cost per mile?",
      answer:
        "Divide total fuel cost by distance. That figure helps compare driving with other transport modes.",
    },
    {
      question: "Does idling or traffic show up in the estimate?",
      answer:
        "Simple distance ÷ economy models miss heavy idle time. Add a buffer for congested cities.",
    },
    {
      question: "Can electric vehicles use this fuel tool?",
      answer:
        "Not for kWh charging math. Use an EV cost estimator with electricity rates instead of gasoline price.",
    },
    {
      question: "How accurate is manufacturer MPG?",
      answer:
        "Window-sticker values are standardized tests. Real drivers often see lower MPG; use your trip computer when possible.",
    },
    {
      question: "What if I only know fuel cost for a past fill?",
      answer:
        "Divide that cost by miles since the last fill for a real cost-per-mile, then scale to the new distance.",
    },
    {
      question: "Do rooftop cargo boxes change the result?",
      answer:
        "They hurt highway MPG. Lower the economy input a few percent if you drive with extra drag.",
    },
    {
      question: "Can I include oil and tires in trip cost?",
      answer:
        "This calculator focuses on fuel. Add maintenance and tolls separately for a full trip budget.",
    },
    {
      question: "Are my trip distances uploaded?",
      answer:
        "No. Distance and price stay in the browser for the estimate.",
    }
  ],
  "gpa-calculator": [
    {
      question: "How do I calculate a semester GPA?",
      answer:
        "Enter each course’s grade and credit hours. The tool weights grade points by credits and divides by total credits.",
    },
    {
      question: "What is the difference between GPA and weighted GPA?",
      answer:
        "Some schools add extra points for honors or AP classes. Confirm whether your calculator mode matches your transcript scale.",
    },
    {
      question: "Can I mix letter grades and percentages?",
      answer:
        "Only if you convert them with your school’s official map first. Do not invent conversions that your registrar does not use.",
    },
    {
      question: "How do failed courses affect GPA?",
      answer:
        "An F usually contributes zero grade points while still counting credits attempted, which lowers the average. Retake policies vary by school.",
    },
    {
      question: "What is cumulative GPA versus term GPA?",
      answer:
        "Term GPA covers one semester. Cumulative GPA folds all graded credits to date. Enter prior totals carefully when combining.",
    },
    {
      question: "Do pass/fail classes count in GPA?",
      answer:
        "Often they count toward earned credits but not the GPA average. Follow your catalog; omit them if they are excluded.",
    },
    {
      question: "How many decimal places do schools report?",
      answer:
        "Many show two or three decimals and have their own rounding rules. Use the registrar’s number for official applications.",
    },
    {
      question: "Can I project GPA if I earn an A next term?",
      answer:
        "Yes by adding planned courses with expected grades to your current totals. Treat it as a forecast, not a promise.",
    },
    {
      question: "What if credits are listed as units or hours?",
      answer:
        "Use whatever numeric weight your school uses consistently. Mixing quarter and semester hours without conversion will distort GPA.",
    },
    {
      question: "Does this match every international scale?",
      answer:
        "No. Scales differ widely. Convert only with an official credential-evaluation method when applying across systems.",
    },
    {
      question: "How do I fix a typo that skews the result?",
      answer:
        "Recheck each grade and credit field. A single wrong credit hour can move GPA more than one letter grade change.",
    },
    {
      question: "Should repeated courses replace old grades?",
      answer:
        "Only when school policy says so. Some replace, some average both. Model the policy you actually have.",
    },
    {
      question: "Can high school GPA use the same tool?",
      answer:
        "Yes if the letter-to-point map matches. Weighted high school scales need the weighted mode or manual points.",
    },
    {
      question: "Are my grades stored on a server?",
      answer:
        "They remain in the browser for the session. Clear the form when you finish if privacy matters.",
    }
  ],
  "aspect-ratio-calculator": [
    {
      question: "What is a common aspect ratio for YouTube videos?",
      answer:
        "16:9 is the standard widescreen ratio for most YouTube uploads and TV. Older 4:3 content still appears, but 16:9 is the default planning size.",
    },
    {
      question: "How do I get a 1:1 square crop size?",
      answer:
        "Set the ratio to 1:1 and enter the width you want; the height matches. Useful for profile images and many social posts.",
    },
    {
      question: "Can I solve for width when I know height and ratio?",
      answer:
        "Yes. Enter the known side and the ratio pair, then read the missing side the calculator returns.",
    },
    {
      question: "What ratio should I use for Instagram Stories?",
      answer:
        "9:16 vertical is the usual full-screen story and Reel frame. Confirm current platform docs if you need safe margins.",
    },
    {
      question: "Does aspect ratio change file size by itself?",
      answer:
        "No. Ratio is shape, not megabytes. Pixel count and compression decide file size after you resize.",
    },
    {
      question: "How do filmmakers talk about 2.39:1?",
      answer:
        "It is a wide cinema scope ratio. You can enter 2.39 and 1 as the ratio sides to plan letterboxing.",
    },
    {
      question: "Why do phones show black bars on some videos?",
      answer:
        "The video’s ratio does not match the screen. Letterboxing or pillarboxing fills the unused edges.",
    },
    {
      question: "Can I use ratios with three numbers like 16:9:1?",
      answer:
        "This tool expects two sides. Reduce multi-part specs to width:height before entering them.",
    },
    {
      question: "How precise should decimal sides be?",
      answer:
        "Two or three decimals are usually enough for layout. Extreme precision rarely changes visible crop decisions.",
    },
    {
      question: "Is DPI the same as aspect ratio?",
      answer:
        "No. DPI is print resolution. Aspect ratio is only the relationship between width and height.",
    },
    {
      question: "How do I match a photo to a frame ratio?",
      answer:
        "Compute the frame’s ratio, then crop the photo to that shape so it prints without stretching.",
    },
    {
      question: "What happens if I swap width and height?",
      answer:
        "You invert the orientation—landscape becomes portrait. Enter sides in the order that matches the orientation you want.",
    },
    {
      question: "Can this replace an image resizer?",
      answer:
        "It only does the math. Use a resizer or cropper afterward to change actual pixels.",
    },
    {
      question: "Are ratio inputs stored after I leave?",
      answer:
        "They stay in the browser for the session. Nothing is sent just to compute the missing side.",
    }
  ],
  "business-days-calculator": [
    {
      question: "How does a business-day counter treat weekdays only?",
      answer:
        "Enter the start and end dates and choose whether weekends count. The tool skips Saturday and Sunday by default in Western calendars.",
    },
    {
      question: "Do holidays get removed automatically?",
      answer:
        "Only if you supply them or the tool has a holiday list enabled. An empty holiday list means only weekends are skipped.",
    },
    {
      question: "Is the start date included in the count?",
      answer:
        "Inclusive and exclusive modes differ. Match the convention in your contract—many SLAs define business days carefully.",
    },
    {
      question: "Can I count business days for shipping ETA?",
      answer:
        "Yes. Carriers often quote transit in business days. Still watch order cut-off times on the calendar clock.",
    },
    {
      question: "How do regional weekends change the result?",
      answer:
        "Some regions treat Friday–Saturday as weekend. Only custom weekend settings capture that; the default assumes Sat–Sun.",
    },
    {
      question: "What if my end date falls on a holiday?",
      answer:
        "Policies either move to the next business day or exclude that day. Align the tool with the written rule you must follow.",
    },
    {
      question: "Can HR use this for leave requests?",
      answer:
        "As a draft count, yes. Final leave balances follow the employee handbook, which may count calendar days instead.",
    },
    {
      question: "Why do two business-day tools disagree?",
      answer:
        "Inclusive ends, holiday calendars, and timezone date boundaries cause off-by-one results. Compare settings, not just outputs.",
    },
    {
      question: "How far ahead can I project?",
      answer:
        "As far as the date fields allow. Long spans still need updated holiday lists each year.",
    },
    {
      question: "Does this know bank holidays in my country?",
      answer:
        "Not unless configured. Add national holidays manually for legal or banking deadlines.",
    },
    {
      question: "Can I exclude company shutdown weeks?",
      answer:
        "Treat those dates like holidays in the exclusion list so they do not count as working days.",
    },
    {
      question: "Is today day zero or day one?",
      answer:
        "It depends on whether you count remaining days until a deadline or elapsed days since a start. Read the mode labels.",
    },
    {
      question: "How should contracts define business days?",
      answer:
        "Spell out weekend days, holiday calendars, and time-of-day cutoffs. Ambiguous definitions create disputes a calculator cannot settle.",
    },
    {
      question: "Are the dates I enter uploaded?",
      answer:
        "No. Counting runs in the browser for the session.",
    }
  ],
  "hourly-wage-calculator": [
    {
      question: "How many hours per week should I assume for a salary?",
      answer:
        "Forty hours is a common full-time assumption in the U.S. Use your real scheduled hours if you work a different standard week.",
    },
    {
      question: "How do I estimate yearly pay from an hourly rate?",
      answer:
        "Multiply hourly rate × hours per week × weeks per year. Many planners use 52 weeks; unpaid time off may call for fewer weeks.",
    },
    {
      question: "How is time-and-a-half overtime modeled?",
      answer:
        "Overtime hours are often paid at 1.5× the regular rate. Enter overtime hours separately when the tool supports that field.",
    },
    {
      question: "Does this show take-home pay after taxes?",
      answer:
        "No. It converts between hourly and salary figures before tax. Use a paycheck estimator for withholding.",
    },
    {
      question: "What weeks-per-year value fits teachers?",
      answer:
        "Academic contracts may pay over fewer duty weeks. Use the weeks your contract actually covers, not a generic 52.",
    },
    {
      question: "Can I compare two job offers with different units?",
      answer:
        "Convert both to annual or both to hourly with the same hours and weeks assumptions, then compare apples to apples.",
    },
    {
      question: "How do bonuses change the conversion?",
      answer:
        "Add expected bonus into annual pay before dividing into an hourly equivalent if you want a fully loaded rate.",
    },
    {
      question: "Should contractors use the same hours assumption?",
      answer:
        "Contractors often bill fewer guaranteed hours and cover benefits themselves. Inflating hours can understate the needed rate.",
    },
    {
      question: "What about double-time holidays?",
      answer:
        "Some workplaces pay 2× on holidays. Model those hours at the higher multiplier when estimating a paycheck period.",
    },
    {
      question: "Is salary divided by 2,080 always right?",
      answer:
        "2,080 is 40×52. It is a rule of thumb, not law. Shift work and part-time schedules need custom hours.",
    },
    {
      question: "How do unpaid lunch breaks affect hourly math?",
      answer:
        "If you are unpaid for lunch, do not count those hours as worked when converting salary to an hourly rate.",
    },
    {
      question: "Can I reverse a job posting that only lists salary?",
      answer:
        "Yes—divide by your assumed annual hours to see an implied hourly rate for budgeting.",
    },
    {
      question: "Do tips belong in base hourly conversion?",
      answer:
        "Keep base wage and tips separate unless you intentionally want a blended earning rate.",
    },
    {
      question: "Are wage numbers stored on a server?",
      answer:
        "They remain in the browser session for the conversion.",
    }
  ],
  "json-formatter": [
    {
      question: "How do I pretty-print JSON in the browser?",
      answer:
        "Paste the JSON, run format, and copy the indented result. Pretty printing adds whitespace so objects and arrays are easier to read.",
    },
    {
      question: "How do I minify JSON for an API payload?",
      answer:
        "Use the minify action to strip unnecessary whitespace while keeping valid structure. Smaller payloads transfer faster.",
    },
    {
      question: "Why is my JSON invalid?",
      answer:
        "Trailing commas, single quotes, or unquoted keys are common issues. The validator points near the first syntax error.",
    },
    {
      question: "Can I format JSON5 or JavaScript objects?",
      answer:
        "Strict JSON forbids comments and trailing commas. Convert those features away before a standard formatter will accept the text.",
    },
    {
      question: "Does sorting keys change meaning?",
      answer:
        "For most APIs, key order does not matter. Sorted keys help humans diff two payloads visually.",
    },
    {
      question: "How large a file can I paste?",
      answer:
        "Browser memory sets a practical limit. Extremely large documents may freeze the tab—split them or use a desktop editor.",
    },
    {
      question: "Is formatted JSON the same data as minified JSON?",
      answer:
        "Yes when both parse successfully. Only whitespace and optional key ordering differ.",
    },
    {
      question: "Can I validate without changing indentation?",
      answer:
        "Use validate-only when available. It checks syntax without rewriting your paste.",
    },
    {
      question: "What about UTF-8 characters in strings?",
      answer:
        "JSON supports Unicode escapes and literal UTF-8 in strings. Keep the file encoding consistent with your API.",
    },
    {
      question: "Why did escape sequences look wrong after format?",
      answer:
        "Formatters preserve string contents; if escapes were already wrong, pretty printing will not invent correct ones.",
    },
    {
      question: "How do I compare two JSON responses?",
      answer:
        "Format both, then diff in an editor. Minified one-liners hide structural changes.",
    },
    {
      question: "Can comments survive formatting?",
      answer:
        "Standard JSON has no comments. They must be removed or the parse fails.",
    },
    {
      question: "Is this safe for secrets in JSON?",
      answer:
        "Treat pasted tokens like production secrets. Clear the box when finished; prefer redacted samples.",
    },
    {
      question: "Does formatting upload my payload?",
      answer:
        "No. Parsing and formatting run locally in the page.",
    }
  ],
  "morse-code": [
    {
      question: "How do I decode Morse back into English?",
      answer:
        "Paste a well-spaced Morse string into decode mode. Letter gaps and word separators must be consistent or the parser will reject pieces.",
    },
    {
      question: "What character separates Morse words on this tool?",
      answer:
        "A slash is commonly used between words in text form. Match the separator shown in the tool’s examples.",
    },
    {
      question: "Can I encode numbers in Morse?",
      answer:
        "Yes. Digits 0–9 have standard International Morse patterns and mix freely with letters in call signs.",
    },
    {
      question: "Why is my Morse rejected as malformed?",
      answer:
        "Too many dots in a row or missing letter spaces usually cause rejection. Fix spacing before decoding again.",
    },
    {
      question: "Is American Morse supported?",
      answer:
        "This page targets International Morse. American Morse differs and will not round-trip cleanly here.",
    },
    {
      question: "Can I practice with prosigns?",
      answer:
        "Some procedural signs exist for radio. Support varies; stick to letters and digits when learning the basics.",
    },
    {
      question: "Does the tool play audio tones?",
      answer:
        "Visual encode/decode is the focus here. Use a dedicated audio trainer if you need dit-dah sound practice.",
    },
    {
      question: "How should beginners write Morse in chat?",
      answer:
        "Use dots and dashes with clear spaces. Avoid fancy Unicode dashes that parsers do not recognize.",
    },
    {
      question: "Can Morse hide a password securely?",
      answer:
        "No. It is an encoding, not encryption. Anyone with a chart can read it.",
    },
    {
      question: "Why do lowercase and uppercase match?",
      answer:
        "Morse has no case. Input is normalized so “sos” and “SOS” encode the same.",
    },
    {
      question: "What punctuation is commonly supported?",
      answer:
        "Period, comma, and question mark appear in many charts. Unsupported marks are skipped or flagged.",
    },
    {
      question: "How do I share homework answers in Morse?",
      answer:
        "Encode, copy the string, and keep separators intact. Teachers should publish which chart they grade against.",
    },
    {
      question: "Is learning Morse still useful?",
      answer:
        "Amateur radio, accessibility hobbies, and history classes still use it even when licenses no longer require a test.",
    },
    {
      question: "Are my Morse strings uploaded?",
      answer:
        "Encoding and decoding stay in the browser.",
    }
  ],
  "number-to-words": [
    {
      question: "How do I convert a check amount into words?",
      answer:
        "Enter the number and copy the words onto the check’s amount line. Follow your bank’s rules for cents and the word “only” if required.",
    },
    {
      question: "Which English style does the tool use?",
      answer:
        "It follows a common American-style wording for whole numbers. Hyphenation of tens may differ slightly from UK style guides.",
    },
    {
      question: "Can I convert negative numbers?",
      answer:
        "Support depends on the tool mode. Accounting documents often write negatives specially—confirm before relying on the output.",
    },
    {
      question: "What about very large numbers with many zeros?",
      answer:
        "Stay inside the documented range. Extremely large values may be rejected to keep wording accurate.",
    },
    {
      question: "How are hundreds and thousands joined?",
      answer:
        "Standard English inserts words like hundred and thousand at place boundaries. Read the full phrase before copying.",
    },
    {
      question: "Will ordinal words like 21st work?",
      answer:
        "This converter targets cardinal numbers (twenty-one), not ordinals (twenty-first). Add ordinal endings manually if needed.",
    },
    {
      question: "Can I use it for invoice line items?",
      answer:
        "Yes for clarity in some locales. Pair digits and words when fraud resistance matters.",
    },
    {
      question: "Why did leading zeros disappear?",
      answer:
        "Numeric value ignores decorative leading zeros. Format codes or IDs that need zeros should stay as text elsewhere.",
    },
    {
      question: "Does it spell currency names?",
      answer:
        "Usually it spells the number only. Add “dollars” or your currency name yourself unless a money mode exists.",
    },
    {
      question: "How do decimals appear in words?",
      answer:
        "Some modes say “point” then digits; others require separate major/minor units. Check the sample output for your mode.",
    },
    {
      question: "Is British “and” before tens included?",
      answer:
        "American wording often omits “and” (two hundred five). Expect style differences versus UK legal writing.",
    },
    {
      question: "Can classrooms use this for place-value drills?",
      answer:
        "Yes—students convert both directions when a reverse mode exists, then compare with the answer key.",
    },
    {
      question: "What if my locale uses spaces as thousand separators?",
      answer:
        "Enter a plain number without grouping marks, or strip spaces first so parsing stays unambiguous.",
    },
    {
      question: "Are numbers stored after conversion?",
      answer:
        "They remain in the page session only.",
    }
  ]
};
