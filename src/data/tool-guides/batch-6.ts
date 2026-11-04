import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const unemployment: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-estimate-unemployment-benefits",
    title: "How to Estimate Unemployment Benefits in California, New York, Texas and Florida",
    primaryKeyword: "unemployment benefits calculator",
    secondaryKeywords: ["weekly benefit amount", "base period wages", "high quarter wages", "how much unemployment will i get", "maximum unemployment benefit"],
    toolSlug: "unemployment-benefits-calculator",
    siblingToolSlugs: ["paycheck-estimator", "hourly-wage-calculator", "savings-goal-calculator"],
    metaTitle: "Estimate Unemployment Benefits: CA, NY, TX and FL",
    metaDescription:
      "Estimate a weekly unemployment benefit, claim total and number of weeks from four quarters of wages, using the published rules for CA, NY, TX and FL.",
    excerpt:
      "Unemployment benefits are worked out from the wages in your base period. This guide explains how the calculator applies each supported state’s formula, limits and sources.",
    relatedArticles: ["what-a-paycheck-estimate-includes", "how-much-to-save-for-a-goal", "how-to-convert-salary-to-hourly"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: most states base unemployment pay on your wages in a base period of four quarters, usually your highest-paid quarter. Open the Unemployment Benefits Calculator, choose California, New York, Texas or Florida, enter your wages for each of the four base-period quarters, and press Estimate benefits. You get a weekly amount, a claim total, the number of weeks and the steps behind them. Only those four states are supported, and the state agency makes the final decision.",
    why:
      "Losing a job makes budgeting urgent, and the benefit rules are written in legal language with tables, minimums and caps. An estimate based on the state’s own published formula gives you a realistic weekly figure to plan with while your claim is processed, and the steps show which rule produced it.",
    sections: [
      {
        id: "states",
        heading: "Which states does the calculator cover?",
        paragraphs: [
          "Four states are supported: California, New York, Texas and Florida. Every other state, and the District of Columbia, is listed as Not supported yet. For those, the tool points you to the state agency’s own estimator instead of guessing.",
          "Each supported state uses figures read from the agency’s own pages or the state law, and the sources were last checked on 2 November 2026.",
        ],
        table: {
          caption: "Supported states and their sources",
          headers: ["State", "Agency", "Sources used"],
          rows: [
            ["California", "Employment Development Department (EDD)", "EDD UI Benefit Calculator page; EDD publications DE 1101BT5 and DE 8714B"],
            ["New York", "New York State Department of Labor", "dol.ny.gov page p832 on how the weekly benefit is calculated; dol.ny.gov/mbr; form IA 318.2"],
            ["Texas", "Texas Workforce Commission (TWC)", "twc.texas.gov eligibility and benefit amounts page"],
            ["Florida", "FloridaCommerce Reemployment Assistance", "floridajobs.org claimant FAQs; Florida Statutes section 443.111"],
          ],
        },
      },
      {
        id: "inputs",
        heading: "What wages do I enter?",
        paragraphs: [
          "Enter your gross wages for each of the four quarters in your base period. For all four states the standard base period is the first four of the last five completed calendar quarters before you claim. California and New York also have an alternate base period for people who do not qualify on the standard one.",
          "A blank quarter counts as 0, and dollar signs and commas are removed, so $12,000 is read as 12000. The calculator does not add any dependent allowance, because none of the four states pays one.",
        ],
      },
      {
        id: "output",
        heading: "What does the estimate show?",
        paragraphs: [
          "The result has three numbers. The weekly amount is what the formula gives, raised to the state’s minimum if it falls below it and capped at the maximum if it is above. The claim total is the most the claim can pay. The number of weeks is the smaller of the state’s maximum weeks and the claim total divided by the weekly amount, rounded down.",
          "Each estimate lists its steps, so you can see the high quarter, the qualifying checks and the limit that applied. Copy estimate copies it and Clear empties the form.",
        ],
      },
      {
        id: "california",
        heading: "How is California’s benefit estimated?",
        paragraphs: [
          "You qualify with a high quarter of at least $1,300, or with a high quarter of at least $900 and total base-period wages of at least 1.25 times the high quarter.",
          "When the high quarter is below $1,833, the weekly amount comes from the EDD benefit table. Above that, it is the high quarter divided by 26, rounded up. The weekly amount runs from $40 to $450, for up to 26 weeks, and the claim total is the smaller of 26 times the weekly amount and half of your base-period wages.",
        ],
      },
      {
        id: "new-york",
        heading: "How is New York’s benefit estimated?",
        paragraphs: [
          "For 2026, you need wages in at least two quarters, a high quarter of at least $3,500, and total wages of at least 1.5 times the high quarter. If the high quarter is $19,118 or more, the other three quarters must add up to at least $9,559.",
          "If you had wages in fewer than four quarters and a high quarter above $4,000, the weekly amount is the average of your two highest quarters divided by 26, with a floor of $143. Otherwise, a high quarter above $3,575 is divided by 26, again with a floor of $143, and a lower high quarter is divided by 25. The result is rounded down and kept between $140 and $869.",
          "The claim total is 26 times the weekly amount, and the first week is an unpaid waiting week. The $869 maximum applies from 6 October 2025 and the $140 minimum applies after 5 January 2026.",
        ],
      },
      {
        id: "texas",
        heading: "How is Texas’s benefit estimated?",
        paragraphs: [
          "The weekly amount is the high quarter divided by 25, rounded to the nearest dollar, and kept between $76 and $619. The claim total is the smaller of 26 times the weekly amount and 27% of base-period wages. Benefits can be paid for up to 26 weeks within a 52-week benefit year.",
          "These figures apply to claims from 4 October 2026.",
        ],
      },
      {
        id: "florida",
        heading: "How is Florida’s benefit estimated?",
        paragraphs: [
          "You need wages in at least two quarters, at least $3,400 in total, and total wages of at least 1.5 times the high quarter. The weekly amount is the high quarter divided by 26, rounded down, and kept between $32 and $275.",
          "The claim total is the smaller of 25% of base-period wages and $3,300, rounded down. The number of weeks is set each year between 12 and 23, and it is 12 weeks for claims in 2025 and 2026.",
        ],
        table: {
          caption: "Weekly limits and maximum weeks by state",
          headers: ["State", "Weekly minimum", "Weekly maximum", "Maximum weeks"],
          rows: [
            ["California", "$40", "$450", "26"],
            ["New York", "$140", "$869", "26"],
            ["Texas", "$76", "$619", "26"],
            ["Florida", "$32", "$275", "12 (2025 and 2026 claims)"],
          ],
        },
      },
    ],
    stepsHeading: "How do I get an estimate step by step?",
    steps: [
      { title: "Pick your state", body: "Choose California, New York, Texas or Florida. For any other state, use that state agency’s estimator." },
      { title: "Find your quarterly wages", body: "Use pay stubs or tax forms to total your gross pay for each quarter of the base period." },
      { title: "Enter the four quarters", body: "Type each quarter’s wages. Leave a quarter blank if you earned nothing in it." },
      { title: "Press Estimate benefits", body: "Read the weekly amount, the claim total, the number of weeks and the steps." },
      { title: "Copy and confirm", body: "Copy estimate for your records, then file your claim with the state, which decides the real amount." },
    ],
    examples: [
      { title: "California, $12,000 a quarter", body: "The high quarter of $12,000 ÷ 26 rounds up to $462, which is capped at $450. The total is the smaller of 26 × $450 = $11,700 and half of $48,000, so $11,700 over 26 weeks." },
      { title: "New York, $13,000 a quarter", body: "Wages in all four quarters and a high quarter above $3,575, so $13,000 ÷ 26 = $500 a week. The total is 26 × $500 = $13,000, with an unpaid first week." },
      { title: "Texas, uneven quarters", body: "Quarters of $6,000, $5,000, $4,000 and $3,000: $6,000 ÷ 25 = $240 a week. The total is the smaller of $6,240 and 27% of $18,000 ($4,860), so $4,860, which lasts 20 full weeks." },
      { title: "Florida, $7,800 a quarter", body: "$7,800 ÷ 26 = $300, capped at $275. The total is the smaller of 25% of $31,200 and $3,300, so $3,300 over 12 weeks." },
    ],
    notesHeading: "What should I know before relying on the estimate?",
    notes: [
      { heading: "The state decides", body: "This is an estimate from the published formula. Your eligibility, separation reason, work search and any other income are judged by the state agency." },
      { heading: "Amounts before tax", body: "The figures are gross weekly benefits. Unemployment benefits may be taxable income." },
      { heading: "Rules change", body: "Minimums, maximums and weeks are set by law and can change. The tool shows when its sources were last checked." },
    ],
    faqs: [
      { question: "Can I estimate benefits for Ohio or another state?", answer: "Not yet. Only California, New York, Texas and Florida are supported. Use your state agency’s own estimator." },
      { question: "What is a high quarter?", answer: "The quarter in your base period with the most wages. All four supported states use it to set the weekly amount." },
      { question: "Which quarters count as my base period?", answer: "Normally the first four of the last five completed calendar quarters. California and New York also have an alternate base period." },
      { question: "What is the most California pays per week?", answer: "$450, for up to 26 weeks, according to the EDD figures the tool uses." },
      { question: "Why is my New York total one week short of what I expected?", answer: "New York’s first week is an unpaid waiting week, so the first payment covers the second week." },
      { question: "Why does Florida pay only 12 weeks?", answer: "Florida sets the number of weeks each year between 12 and 23. For 2025 and 2026 claims it is 12 weeks." },
      { question: "Why do my weeks come out below 26 in Texas?", answer: "The Texas total is capped at 27% of base-period wages, so uneven or low earnings can run out before 26 weeks." },
      { question: "Do I get extra money for dependents?", answer: "Not in these four states. None of them pays a dependent allowance, so the tool does not add one." },
      { question: "Can I type wages with a dollar sign?", answer: "Yes. Dollar signs and commas are removed before the numbers are used." },
      { question: "How current are the figures?", answer: "The state sources were last checked on 2 November 2026. Texas figures apply to claims from 4 October 2026." },
    ],
    faqMax: 10,
    cta: { before: "Estimate your weekly benefit with the free", linkLabel: "Unemployment Benefits Calculator", href: "/tools/unemployment-benefits-calculator", after: "." },
    alsoSee: [
      { before: "Compare it with your old take-home pay using the", linkLabel: "Paycheck Estimator", href: "/tools/paycheck-estimator", after: "." },
      { before: "Plan a cash buffer with the", linkLabel: "Savings Goal Calculator", href: "/tools/savings-goal-calculator", after: "." },
    ],
  },
};

const santa: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-draw-names-for-secret-santa",
    title: "How to Draw Names for Secret Santa Online with Exclusions",
    primaryKeyword: "secret santa generator",
    secondaryKeywords: ["secret santa name draw", "secret santa exclusions", "secret santa with couples", "printable secret santa cards", "gift exchange organizer"],
    toolSlug: "secret-santa-generator",
    siblingToolSlugs: ["random-number-generator", "qr-code-generator", "password-generator"],
    metaTitle: "How to Draw Names for Secret Santa with Exclusions",
    metaDescription:
      "Draw Secret Santa names for 3 to 200 people, block couples with one-way or mutual rules, set a budget, and reveal, copy or print each card privately.",
    excerpt:
      "A good Secret Santa draw never gives anyone their own name and respects who should not draw whom. This guide covers participants, rules, budgets, cards and privacy.",
    relatedArticles: ["how-to-generate-a-random-number", "how-to-make-a-qr-code", "how-to-generate-a-password"],
    category: "seo-utilities",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the Secret Santa Generator, add at least 3 names, add any rules such as couples who should not draw each other, set the event name, date and budget, and press Generate Secret Santa. Pairings stay hidden until you reveal them one at a time, and each person’s message can be copied or printed as a card. Everything runs in your browser, and the pairings are never saved or sent anywhere.",
    why:
      "Drawing names from a hat breaks down when people are remote, when someone pulls their own name, or when partners keep drawing each other. A generator that handles rules, hides the result and writes each person’s message saves the organiser a lot of awkward redraws and keeps the surprise intact.",
    sections: [
      {
        id: "people",
        heading: "How do I add participants?",
        paragraphs: [
          "Type one name and press Add, or paste several names into the box, one per line, and add them all at once. Blank lines are dropped and extra spaces are tidied. You need at least 3 people, and the tool supports up to 200. Each name can be up to 60 characters.",
          "Every person gets a hidden internal ID, so two people with the same name are kept apart. The tool warns you when names repeat and labels them (1) and (2), but adding a surname initial makes the cards clearer.",
          "Each person can also have a wishlist with gift ideas, favourite categories, hobbies and interests, preferred colours, things they would rather not receive, and links. A wishlist appears only on the card of the person who draws its owner. There is an optional email field, but this version never sends email.",
        ],
      },
      {
        id: "rules",
        heading: "How do exclusion rules work?",
        paragraphs: [
          "A one-way rule stops the first person drawing the second, but the second may still draw the first. A mutual rule blocks both directions, which suits couples and siblings. Nobody can draw their own name in any case, so there is no need for a rule for that.",
          "Before drawing, the tool checks the rules. It stops you if a rule points at someone who has been removed, if someone is excluded from everyone else so they have nobody to give to, or if everyone is excluded from one person so nobody can give them a gift.",
        ],
        table: {
          caption: "One-way and mutual rules",
          headers: ["Rule", "Blocks", "Typical use"],
          rows: [
            ["One-way: Sam will not draw Alex", "Sam giving to Alex only", "Sam bought for Alex last year"],
            ["Mutual: Sam and Alex", "Sam giving to Alex and Alex giving to Sam", "Couples, siblings, flatmates"],
          ],
        },
      },
      {
        id: "draw",
        heading: "How is the draw made fair?",
        paragraphs: [
          "The draw uses the browser’s cryptographic random number source when it is available. It shuffles the order, deals first with the people who have the fewest allowed recipients, and tries recipients in random order, backing up when it reaches a dead end.",
          "If that search runs long, the tool switches to a matching method that is guaranteed to find a valid set of pairings if one exists. Every result is then checked again against the rules before it is shown. If no valid draw is possible, you are asked to remove or relax an exclusion.",
          "Drawing again replaces the current pairings with a completely new draw.",
        ],
      },
      {
        id: "event",
        heading: "What event details can I add?",
        paragraphs: [
          "You can set an event name, gift exchange date, currency (USD, GBP, EUR, AED, CAD or AUD), minimum and maximum budget, gift theme, event description and wishlist instructions. Budgets must be 0 or more, and the minimum cannot be higher than the maximum.",
          "The budget is written as a range such as $20 to $40, as up to $40 when only a maximum is set, or as at least $20 when only a minimum is set.",
        ],
      },
      {
        id: "message",
        heading: "How do the messages and placeholders work?",
        paragraphs: [
          "Each giver gets a message built from an editable template. The default greets the giver, names the event and the recipient, and lists the budget and exchange date.",
          "The template can use {giver}, {recipient}, {event}, {budget}, {date}, {theme}, {description} and {wishlist}. If a line’s placeholder has no value, such as no budget, that line is dropped, so the message never says Gift budget followed by nothing. Restore default message brings back the original text.",
        ],
      },
      {
        id: "reveal",
        heading: "How do I share each pairing privately?",
        paragraphs: [
          "Pairings are hidden after the draw. Reveal one giver at a time, then Copy message or Print card for that person, and hide it again. On a shared screen anyone nearby can see a revealed pairing, so this is not the same as private delivery.",
          "Print all cards prints one card per page, and choosing Save as PDF in the print dialog gives a separate PDF page per person. The organiser can also download an organiser CSV or organiser PDF listing every giver, recipient, wishlist, event, budget and date. Those files show all pairings, so keep them to yourself.",
        ],
      },
      {
        id: "invite",
        heading: "What goes in the invitation?",
        paragraphs: [
          "Before the draw, the tool builds an invitation from your event details, such as the event name, date, budget, theme, description and wishlist instructions. It contains no pairings, so you can send it to the whole group by any chat or email app. Copy invitation puts it on your clipboard.",
          "Sending the invitation first gives people time to share wishlists. Add what they send to their participant entry, and each wishlist then appears on the card of whoever draws that person.",
        ],
      },
      {
        id: "remote",
        heading: "How do I run a draw for a remote group?",
        paragraphs: [
          "Because the tool never sends anything itself, the organiser shares each result. Reveal one giver, use Copy message, paste it into a private chat with that person, then hide it and move to the next. Doing this alone, without screen sharing, keeps the pairings secret from everyone, including other participants.",
          "If you would rather not know who has whom, ask someone outside the exchange to run the draw and send the messages, or print the cards and fold them without reading.",
        ],
      },
    ],
    stepsHeading: "How do I run a Secret Santa draw step by step?",
    steps: [
      { title: "Add everyone", body: "Type names one at a time or paste a list with one name per line." },
      { title: "Add wishlists if you like", body: "Fill in gift ideas, hobbies, colours and things to avoid for anyone who shared them." },
      { title: "Set the rules", body: "Add mutual rules for couples and one-way rules for anything else." },
      { title: "Fill in the event", body: "Add the event name, date, currency, budget and theme, and copy the invitation to send before the draw." },
      { title: "Generate and share", body: "Press Generate Secret Santa, then reveal, copy or print each card in turn." },
    ],
    examples: [
      { title: "A family of six with two couples", body: "Add mutual rules for each couple. The draw then pairs everyone with someone outside their own couple, and nobody draws themselves." },
      { title: "An office exchange of 40 people", body: "Paste 40 names, set a budget of 15 to 25 in your currency, and use Print all cards to hand out one folded card per person." },
      { title: "An impossible set of rules", body: "In a group of 3 where one person is excluded from both others, the tool explains that they have nobody to give to before you can draw." },
    ],
    notesHeading: "What happens to the data?",
    notes: [
      { heading: "Pairings are not saved", body: "Closing or reloading the page discards the draw. Copy or print the cards before you leave." },
      { heading: "Only settings are remembered", body: "The browser saves the event settings and message template in localStorage. Names, emails, wishlists and pairings are never saved, never put in the page address and never sent anywhere. Delete saved settings removes them." },
      { heading: "Organiser files show everything", body: "The CSV and PDF downloads contain every pairing. Store them privately." },
    ],
    faqs: [
      { question: "What is the smallest group I can draw for?", answer: "Three people. With only two, each would simply draw the other." },
      { question: "Can my partner and I be kept apart?", answer: "Yes. Add a mutual rule between you, and neither of you can draw the other." },
      { question: "What is the difference between a one-way and a mutual rule?", answer: "One-way blocks only the first person drawing the second. Mutual blocks both directions." },
      { question: "Why does the draw say no valid pairings exist?", answer: "Your rules leave no way to give everyone a recipient. Remove or relax an exclusion and draw again." },
      { question: "Can two people have the same name?", answer: "Yes. Each person has a hidden ID, and duplicates are labelled (1) and (2), though a surname initial is clearer." },
      { question: "Does the generator email people their recipient?", answer: "No. This version never sends email. Copy each message or print the cards to share them." },
      { question: "Will I lose the pairings if I refresh?", answer: "Yes. Pairings are never saved, so copy or print them first." },
      { question: "Which currencies can I use for the budget?", answer: "USD, GBP, EUR, AED, CAD and AUD." },
      { question: "Can I add a wishlist for each person?", answer: "Yes. Gift ideas, categories, hobbies, colours, things to avoid and links appear on the card of whoever draws that person." },
      { question: "How do I make a PDF card for each person?", answer: "Use Print all cards and choose Save as PDF in the print dialog. Each card prints on its own page." },
    ],
    faqMax: 10,
    cta: { before: "Run your gift exchange with the free", linkLabel: "Secret Santa Generator", href: "/tools/secret-santa-generator", after: "." },
    alsoSee: [
      { before: "Pick a random order for opening gifts with the", linkLabel: "Random Number Generator", href: "/tools/random-number-generator", after: "." },
      { before: "Share a wishlist link as a code with the", linkLabel: "QR Code Generator", href: "/tools/qr-code-generator", after: "." },
    ],
  },
};

const urdu: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-translate-urdu-news-into-english",
    title: "How to Translate Urdu News into English Drafts an Editor Can Check",
    primaryKeyword: "urdu news translator",
    secondaryKeywords: ["urdu to english news translation", "translate urdu article", "urdu news in english", "news translation fact check", "english news draft from urdu"],
    toolSlug: "urdu-news-translator",
    siblingToolSlugs: ["ai-article-compressor", "ai-text-humanizer", "word-counter"],
    metaTitle: "How to Translate Urdu News into English Drafts",
    metaDescription:
      "Turn a pasted Urdu news story into Brief, Medium and Full English drafts with a title, permalink, meta fields, a facts table and a fact check to review.",
    excerpt:
      "The Urdu News Translator turns one Urdu story into three English versions and checks them against the source. This guide explains each output, the checks and the limits.",
    relatedArticles: ["how-to-shorten-an-article", "how-to-rewrite-stock-phrasing", "how-to-count-characters"],
    category: "ai-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: paste the Urdu news story into the Urdu News Translator and press Translate. You get a title, permalink and meta title, plus Brief, Medium and Full English versions, each with a subtitle, body and meta description, a table of the facts used and a verification list. Review the checks, edit what needs fixing, press Approve, and then copy. The results are drafts only, and an editor must review the English before publishing.",
    why:
      "Newsrooms and bloggers that cover Pakistan often need English versions of Urdu reports quickly. Machine translation is fast but can change a number, upgrade a claim into a fact, or drop a sentence. This tool asks for strict, source-only translation and then checks the drafts against the Urdu, so an editor spends time on real problems rather than rereading everything line by line.",
    sections: [
      {
        id: "versions",
        heading: "What are Brief, Medium and Full?",
        paragraphs: [
          "Brief is at most two sentences and 40 words, with the key facts of who, what, when and where and no quotations. Medium is at most 100 words and includes the key facts plus the main quote and key date or figure when the Urdu has them. Full translates every sentence without dropping any.",
          "Lengths are upper limits, not targets. If the Urdu story is short, Brief and Medium can be as short as the facts allow, and may even match Full. When the story is 25 words or fewer, Brief uses the first two sentences of Full, and when it is 60 words or fewer, Medium uses Full.",
        ],
        table: {
          caption: "The three English versions",
          headers: ["Version", "Length", "Content"],
          rows: [
            ["Brief", "Up to 2 sentences and 40 words", "Who, what, when, where; no quotes"],
            ["Medium", "Up to 100 words", "Key facts, main quote, key date or figure"],
            ["Full", "Every sentence", "Complete translation"],
          ],
        },
      },
      {
        id: "rules",
        heading: "What rules does the translation follow?",
        paragraphs: [
          "The model is told to use only facts written in the Urdu and not to add, guess or infer background. Names, numbers, dates, places, amounts and quotes come from the Urdu, and numbers are not rounded, currencies are not converted and dates are not changed. Quotations stay quotations.",
          "Attribution verbs are kept faithful, so claimed stays claimed and alleged stays alleged rather than being upgraded to confirmed. Unclear words are marked in [brackets] instead of guessed. Urdu digits and Arabic-Indic digits are converted to Western digits, and the English is written as neutral news copy.",
        ],
      },
      {
        id: "glossary",
        heading: "How does the glossary keep names consistent?",
        paragraphs: [
          "The tool has a built-in glossary of Pakistani people, parties, places and institutions with fixed English spellings, such as Imran Khan, Shehbaz Sharif and Maryam Nawaz. When a glossary name appears in the Urdu, the English spelling in the glossary must be used. The page shows how many glossary matches it found in your text.",
          "After translation, a check flags any glossary name that is in the Urdu but missing from the English, so spelling variants are caught before publishing.",
        ],
      },
      {
        id: "seo",
        heading: "How are the title, permalink and meta fields made?",
        paragraphs: [
          "The title is a news headline in title case, kept within 70 characters. The meta title adds | Tools Star Hub when it fits within 60 characters, uses the title alone when only that fits, and otherwise cuts the title on a whole word without ending on a number or a small word. Each meta description stays within 155 characters and adds no new facts.",
          "The permalink is a lowercase ASCII slug built from the title, with small words, dates and non-Latin characters removed, and a length of up to 60 characters. Each field has its own copy button and shows its character count against the limit.",
        ],
      },
      {
        id: "checks",
        heading: "What does the verification list check?",
        paragraphs: [
          "After translation, the drafts are checked in two ways. Code checks look for numbers in the English that are not in the Urdu, numbers from the Urdu that are missing from Full, bracketed unclear words, quotations in Brief, a Full version under 70% of the Urdu word count, and lengths outside the Brief and Medium ranges or the title and meta limits.",
          "A separate fact check asks the model to compare the Urdu with each version and report only real problems: a changed name, number, date, place or amount, an added fact, a changed or dropped quote, a change in meaning, or a sentence missing from Full. Style and shorter length are not reported. Errors, warnings and passes appear in the verification list, and the facts table shows each person, place, number, date and quote with its English and Urdu form and which versions include it.",
        ],
      },
      {
        id: "expand",
        heading: "What do Expand news and Humanize do?",
        paragraphs: [
          "Expand news builds a fuller article with a headline, an intro paragraph and body paragraphs from the selected version, using only the Urdu. It may restore facts from the Urdu that the shorter version left out, but it must not add anything the Urdu does not say.",
          "Humanize is optional. It rewrites the selected body, or the expanded body, so it reads more naturally, with varied sentence lengths and plain wording, while keeping every fact, name, number, date, quote and attribution verb. The title, subtitle, permalink and meta fields stay as they are, and a reply that is not English is rejected.",
        ],
      },
      {
        id: "approve",
        heading: "Why do I have to approve before copying?",
        paragraphs: [
          "Each field can be copied on its own at any time, but Copy and Copy all stay off until you press Approve. Approval is cleared again if you edit the text or choose a different version, so the package you copy is always the one you last reviewed.",
        ],
      },
    ],
    stepsHeading: "How do I translate a story step by step?",
    steps: [
      { title: "Paste the Urdu story", body: "Paste the article into the Urdu news box. It must be under 8,000 characters." },
      { title: "Press Translate", body: "Wait for the title, permalink, meta title, three versions and facts table." },
      { title: "Read the verification list", body: "Fix every error and look at every warning, comparing with the Urdu where needed." },
      { title: "Expand or humanize if needed", body: "Use Expand news for a longer article or Humanize for smoother wording, then check again." },
      { title: "Approve and copy", body: "Press Approve, then use Copy for the selected version or Copy all for the full package." },
    ],
    examples: [
      { title: "A short report", body: "A three-sentence Urdu item of about 40 words may produce a Brief of two sentences and a Medium identical to Full, with an info note explaining why." },
      { title: "A disputed claim", body: "If the Urdu says a minister claimed an amount, the English keeps claimed. A version that said confirmed would be a meaning problem for the fact check to report." },
      { title: "A number written in words", body: "If Full contains a figure the code cannot find in the Urdu digits, it shows a check prompt noting the number may be written in words in the Urdu, so the editor confirms it." },
    ],
    notesHeading: "What are the limits and privacy rules?",
    notes: [
      { heading: "Text is sent to an AI model", body: "Translate, Expand news and Humanize send the Urdu article and English draft to Google’s Gemini API through Tools Star Hub. The text is not saved by the site. On the free tier, Google may use it to improve its products, so avoid pasting confidential material." },
      { heading: "Usage limits", body: "Each request is limited to 8,000 characters of Urdu and 16,000 characters of English draft, and about 20 requests per 15 minutes are allowed." },
      { heading: "Drafts, not publication copy", body: "Checks reduce risk but do not replace an editor who reads Urdu. Always review before publishing." },
    ],
    faqs: [
      { question: "How long can the pasted Urdu article be?", answer: "Under 8,000 characters. Longer articles are rejected with a message asking you to shorten them." },
      { question: "Why are Brief and Medium sometimes the same as Full?", answer: "Lengths are limits, not targets. For stories of 60 words or fewer, Medium uses Full, and for 25 words or fewer, Brief uses Full’s first two sentences." },
      { question: "What do words in square brackets mean?", answer: "The model was unsure of that word. Confirm it against the Urdu before publishing." },
      { question: "Will the English keep Urdu digits?", answer: "No. Urdu and Arabic-Indic digits are converted to Western digits 0 to 9." },
      { question: "Why can’t I press Copy all yet?", answer: "Copy and Copy all stay off until you press Approve. Editing or changing version clears the approval." },
      { question: "Does the tool add background to the story?", answer: "No. It is told to use only facts in the Urdu and not to add or infer background." },
      { question: "What happens if I send too many requests?", answer: "After about 20 requests in 15 minutes, you are asked to wait a few minutes and try again." },
      { question: "How is the permalink built?", answer: "From the title, in lowercase ASCII with small words, dates and non-Latin characters removed, up to 60 characters." },
      { question: "Does Humanize change the headline?", answer: "No. It rewrites only the body. The title, subtitle, permalink and meta fields stay the same." },
      { question: "Is my article stored after translation?", answer: "Not by Tools Star Hub. It is sent to Google’s Gemini API, which may use free-tier text to improve its products." },
    ],
    faqMax: 10,
    cta: { before: "Turn your Urdu story into English drafts with the free", linkLabel: "Urdu News Translator", href: "/tools/urdu-news-translator", after: "." },
    alsoSee: [
      { before: "Shorten an English article with the", linkLabel: "AI Article Compressor", href: "/tools/ai-article-compressor", after: "." },
      { before: "Count words in your draft with the", linkLabel: "Word Counter", href: "/tools/word-counter", after: "." },
    ],
  },
};

export const batch6Guides: ToolGuide[] = [unemployment, santa, urdu];
