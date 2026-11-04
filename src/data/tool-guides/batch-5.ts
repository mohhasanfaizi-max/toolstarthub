import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-05T00:00:00Z";

const banner: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-make-a-youtube-banner",
    title: "How to Make a YouTube Banner at 2560 × 1440 That Fits Every Screen",
    primaryKeyword: "youtube banner maker",
    secondaryKeywords: ["youtube channel art size", "youtube banner safe area", "2560x1440 banner", "youtube banner template", "youtube banner under 6 mb"],
    toolSlug: "youtube-banner-maker",
    siblingToolSlugs: ["image-resizer", "image-compressor", "css-gradient-generator"],
    metaTitle: "How to Make a YouTube Banner: 2560×1440 and Safe Area",
    metaDescription:
      "Design a 2560 × 1440 YouTube banner in your browser with templates, text, shapes, logos and a 1546 × 423 safe-area guide. Export a PNG or JPG under 6 MB.",
    excerpt:
      "A YouTube banner is cropped differently on TVs, desktops and phones. This guide shows how to build one at 2560 × 1440, keep the important parts in the safe area and export under 6 MB.",
    relatedArticles: ["how-to-resize-an-image", "how-to-write-a-css-gradient", "how-to-compress-an-image-without-losing-quality"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open YouTube Banner Maker, pick one of the 15 templates or start from a plain background, then edit the text, shapes, photos and logo on the 2560 × 1440 canvas. Keep your channel name and key message inside the centred 1546 × 423 safe-area guide, then export a PNG or JPG. The file is named youtube-banner-2560x1440 and is kept under 6 MB, and the guide lines are never part of the export.",
    why:
      "YouTube shows the same banner image in very different shapes. A TV can show nearly the whole 2560 × 1440 picture, while a phone may show only a thin strip through the middle. If your name or upload schedule sits near the edge, some viewers will never see it. Designing on the full canvas with the safe area marked lets you place decoration across the whole image and keep the words where every device can show them.",
    sections: [
      {
        id: "size",
        heading: "What size does the banner maker use?",
        paragraphs: [
          "The canvas is fixed at 2560 × 1440 pixels, the full banner size. You do not need to set a size or resize afterwards, because every export comes out at exactly that resolution.",
          "In the middle of the canvas the tool can draw a 1546 × 423 safe-area guide. That rectangle is the part most likely to stay visible on every screen. The guide is only a visual help while you work. It is never drawn into the exported file, and the status line after export reminds you that the safe-area guide is not included.",
        ],
        table: {
          caption: "The two sizes that matter",
          headers: ["Area", "Size in pixels", "What to put there"],
          rows: [
            ["Full canvas", "2560 × 1440", "Background colours, gradients, photos and decoration"],
            ["Safe area (centred)", "1546 × 423", "Channel name, tagline, schedule and logo"],
          ],
        },
      },
      {
        id: "templates",
        heading: "Which templates can I start from?",
        paragraphs: [
          "There are 15 templates: Gold Studio, Sunrise Vlog, Tech Grid, Neon Arena, Minimal Mono, Warm Kitchen, Fitness Bold, Podcast Wave, Ocean Calm, Chalkboard, Soft Blush, Vinyl Night, Clean Business, Forest Trail and Retro Pop. Each one is a set of ordinary layers, so after you load it you can change any colour, word or shape just as if you had added it yourself.",
          "Choose a template by mood rather than by exact content. A cooking channel might start from Warm Kitchen, but Chalkboard or Soft Blush may suit it as well once the text is changed. Because nothing is locked, a template is a quick starting layout, not a fixed design.",
        ],
      },
      {
        id: "layers",
        heading: "What can I add to the canvas?",
        paragraphs: [
          "Five kinds of layer can be added: Text, Rectangle, Circle, Image and Logo. Images and logos can be PNG, JPG, WebP, GIF or SVG files of up to 15 MB each.",
          "A photo added as an Image is fitted to the canvas, which suits full background pictures. A file added as a Logo is fitted to 300 pixels and placed near the left side of the safe area, which is a sensible starting point for a channel mark next to the name.",
          "The background itself can be a solid colour or a gradient. A gradient has a From colour, a To colour and an Angle from 0 to 360 degrees, so you can run it left to right, top to bottom or on a diagonal.",
        ],
        table: {
          caption: "Layer types and their main settings",
          headers: ["Layer", "Main settings"],
          rows: [
            ["Text", "Font (Sans, Serif, Mono, Condensed), weight (Regular, Semibold, Bold), size 12 to 400, alignment, colour"],
            ["Rectangle", "Solid or gradient fill, corner radius 0 to 300"],
            ["Circle", "Solid or gradient fill"],
            ["Image", "PNG, JPG, WebP, GIF or SVG up to 15 MB, fitted to the canvas"],
            ["Logo", "Same file types, fitted to 300 px near the left of the safe area"],
          ],
        },
      },
      {
        id: "editing",
        heading: "How do I move, resize and arrange layers?",
        paragraphs: [
          "Drag a layer to move it, and drag its gold corner handle to resize it. For exact placement, every layer also has X, Y, W and H fields, so you can type a position and size in pixels.",
          "Every layer has an opacity setting from 0.1 to 1, a Duplicate button that makes a copy offset by 40 pixels, and a Delete button. Text wraps inside its box, so making a text layer narrower moves words onto a new line rather than shrinking them.",
          "The layers list controls stacking. Move a layer forward or back to put it above or below others, and use show or hide to switch a layer off without deleting it. Hiding is useful for comparing two versions of a tagline.",
        ],
      },
      {
        id: "shortcuts",
        heading: "Which keyboard shortcuts work?",
        paragraphs: [
          "The editor keeps 60 steps of history. Ctrl+Z or ⌘+Z undoes a change, and Ctrl+Shift+Z, ⌘+Shift+Z or Ctrl+Y redoes it. Ctrl+D or ⌘+D duplicates the selected layer, Delete removes it, and Esc clears the selection.",
          "The arrow keys nudge the selected layer. Holding Shift with an arrow moves it 50 pixels at a time, which is handy for lining text up with the edge of the safe area.",
        ],
        table: {
          caption: "Shortcuts in the banner editor",
          headers: ["Keys", "Action"],
          rows: [
            ["Ctrl/⌘ + Z", "Undo (up to 60 steps)"],
            ["Ctrl/⌘ + Shift + Z or Ctrl + Y", "Redo"],
            ["Ctrl/⌘ + D", "Duplicate the selected layer"],
            ["Delete", "Remove the selected layer"],
            ["Arrow keys", "Nudge; with Shift, move 50 px"],
            ["Esc", "Deselect"],
          ],
        },
      },
      {
        id: "export",
        heading: "How does export keep the file under 6 MB?",
        paragraphs: [
          "Export offers PNG or JPG and aims to stay within a 6 MB limit. If you choose PNG and the result is larger than 6 MB, the tool switches to JPG automatically and tries quality 0.92, then 0.85, 0.75, 0.65 and 0.5 until the file fits.",
          "If even the lowest quality is still too big, export stops with a message asking you to remove or shrink large photos. In practice that means replacing a very detailed photo with a smaller one, or using a gradient instead of a photo behind the text.",
          "The downloaded file is called youtube-banner-2560x1440.png or youtube-banner-2560x1440.jpg, and the status line shows its size.",
        ],
      },
    ],
    stepsHeading: "How do I make a banner step by step?",
    steps: [
      { title: "Pick a starting point", body: "Load a template that matches your channel’s mood, or keep the plain background and set a solid colour or gradient." },
      { title: "Turn on the safe-area guide", body: "Show the centred 1546 × 423 guide so you can see where the important content must sit." },
      { title: "Write your text", body: "Edit or add Text layers for the channel name and tagline. Choose a font, weight, size and colour that read well against the background." },
      { title: "Add a logo or photo", body: "Use Logo for a channel mark and Image for a background picture. Files can be up to 15 MB." },
      { title: "Fine-tune placement", body: "Drag, resize or type X, Y, W and H values. Use the arrow keys for small nudges and the layers list to change order." },
      { title: "Export and upload", body: "Choose PNG or JPG, export, and upload youtube-banner-2560x1440 to your channel. Check the preview on a phone and a computer." },
    ],
    examples: [
      { title: "A cooking channel", body: "Start from Warm Kitchen, change the title to the channel name, add a Logo layer, and keep the line about new recipes every Friday inside the safe area. A large food photo can fill the rest of the canvas." },
      { title: "A gaming channel with a photo background", body: "A detailed screenshot as a PNG may come out above 6 MB. The tool then switches to JPG and lowers the quality step by step until it fits, so the file still uploads." },
      { title: "A minimal business banner", body: "Clean Business or Minimal Mono with a two-colour gradient at an angle of 90 and one bold line of text gives a calm look that stays readable on small phones." },
    ],
    notesHeading: "What should I watch out for?",
    notes: [
      { heading: "Designs are not saved", body: "The tool does not use localStorage, so closing or reloading the page loses the design. Export before you leave, and keep the source photos if you may want to edit later." },
      { heading: "Your images stay local", body: "Everything is drawn in your browser. Photos and logos you add are not uploaded to a server." },
      { heading: "The guide is a guide", body: "The safe area is the most reliable visible region, but always check your channel on more than one device after uploading." },
    ],
    faqs: [
      { question: "Why does my channel name get cut off on phones?", answer: "Phones show a narrow strip through the middle of the banner. Move the name inside the 1546 × 423 safe-area guide and it will stay visible." },
      { question: "Will the dotted safe-area box show in my banner?", answer: "No. The guide is never exported. The status line after export confirms that it is not included." },
      { question: "I chose PNG, so why is my banner file a JPG?", answer: "The PNG was larger than 6 MB, so the tool switched to JPG and lowered quality from 0.92 down to 0.5 until the file fitted." },
      { question: "What does “Remove or shrink large photos” mean?", answer: "Even a JPG at quality 0.5 was over 6 MB. Delete a large photo or replace it with a smaller or simpler image, then export again." },
      { question: "Can I use an SVG logo?", answer: "Yes. Logo and Image layers accept PNG, JPG, WebP, GIF and SVG files up to 15 MB." },
      { question: "How big can text be?", answer: "Text size goes from 12 to 400 pixels on the 2560 × 1440 canvas, with Regular, Semibold or Bold weight." },
      { question: "How do I place a layer at an exact position?", answer: "Type values into the X, Y, W and H fields for that layer instead of dragging." },
      { question: "How many times can I undo?", answer: "The editor keeps 60 steps of history for undo and redo." },
      { question: "Can I come back tomorrow and keep editing?", answer: "No. Designs are not stored in the browser, so export the file before you close the page." },
      { question: "Can I make a rounded rectangle behind my text?", answer: "Yes. Add a Rectangle, give it a solid or gradient fill, and set a corner radius between 0 and 300." },
    ],
    faqMax: 10,
    cta: { before: "Design your channel art with the free", linkLabel: "YouTube Banner Maker", href: "/tools/youtube-banner-maker", after: "." },
    alsoSee: [
      { before: "Shrink a large photo first with the", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
      { before: "Plan colour blends with the", linkLabel: "CSS Gradient Generator", href: "/tools/css-gradient-generator", after: "." },
    ],
  },
};

const partialPressure: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-partial-pressure",
    title: "How to Calculate Partial Pressure with Dalton’s Law and the Ideal Gas Law",
    primaryKeyword: "partial pressure calculator",
    secondaryKeywords: ["dalton's law of partial pressures", "mole fraction partial pressure", "partial pressure formula", "total pressure of a gas mixture", "p = nrt/v"],
    toolSlug: "partial-pressure-calculator",
    siblingToolSlugs: ["unit-converter", "significant-figures-calculator", "percentage-calculator"],
    metaTitle: "How to Calculate Partial Pressure: Dalton’s Law Guide",
    metaDescription:
      "Find a gas’s partial pressure from mole fraction, moles in a mixture, the sum of partials or P = nRT/V. Results in atm, kPa, Pa, bar and mmHg with steps.",
    excerpt:
      "Partial pressure is the share of a mixture’s pressure that comes from one gas. This guide covers the four ways the calculator finds it, the units and worked examples.",
    relatedArticles: ["how-to-convert-units", "how-to-calculate-percentage", "how-to-find-the-mean-median-and-mode"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: the partial pressure of a gas is its mole fraction times the total pressure, P = X × P(total). Open the Partial Pressure Calculator, pick one of four modes (mole fraction × total, gas mixture in moles, total from partials, or the ideal gas law P = nRT/V), enter your values and press Calculate. The result is shown with its working steps and, in most modes, in atm, kPa, Pa, bar and mmHg.",
    why:
      "In a mixture of gases that do not react, each gas pushes on the container walls as if it were alone. Dalton’s law says the total pressure is the sum of those separate pressures. Chemistry homework, diving gas planning and breathing gas questions all come back to this idea, and the arithmetic is easy to slip on when units change or a percentage is used where a fraction is needed.",
    sections: [
      {
        id: "modes",
        heading: "Which calculation modes are there?",
        paragraphs: [
          "The calculator has four modes. Choose the one that matches the numbers you already have.",
        ],
        table: {
          caption: "The four modes and their inputs",
          headers: ["Mode", "You enter", "You get"],
          rows: [
            ["Mole fraction × total", "Mole fraction X (0 to 1) and total pressure", "Partial pressure of that gas"],
            ["Gas mixture (moles)", "Moles of two or more gases and total pressure", "Each gas’s mole fraction and partial pressure"],
            ["Total from partials", "Two or more partial pressures", "Total pressure"],
            ["Ideal gas P = nRT/V", "Moles, temperature and volume", "Pressure of the gas"],
          ],
        },
      },
      {
        id: "fraction",
        heading: "How does the mole fraction mode work?",
        paragraphs: [
          "Enter the mole fraction X and the total pressure, and the tool multiplies them. X must be between 0 and 1 and the total must be above 0.",
          "A common mistake is typing a percentage, such as 21 for 21% oxygen. Any X above 1 is rejected with a message telling you to divide a percentage by 100 first, so 21% becomes 0.21.",
        ],
      },
      {
        id: "mixture",
        heading: "How do I work out partial pressures for a whole mixture?",
        paragraphs: [
          "Gas mixture mode starts with two rows, N₂ and O₂, and you can add more gases. Enter the moles of each gas and the total pressure. The tool adds the moles, divides each gas’s moles by that sum to get its mole fraction X, and multiplies each X by the total pressure.",
          "The result lists every gas with its X and its partial pressure, so you can check that the fractions add up to 1 and the partials add up to the total. At least two gases are needed, because a single gas would simply have the whole pressure.",
        ],
      },
      {
        id: "sum",
        heading: "How do I find the total pressure from partial pressures?",
        paragraphs: [
          "Total from partials mode is Dalton’s law in its plainest form. Enter at least two partial pressures in the same unit and the tool adds them up. This is the mode to use when a question gives you the pressure of each gas and asks for the total.",
        ],
      },
      {
        id: "ideal",
        heading: "How does the ideal gas mode calculate pressure?",
        paragraphs: [
          "Ideal gas mode uses P = nRT/V with R = 8.314462618 J/(mol·K). Enter the amount in moles, the temperature and the volume.",
          "Temperature can be in kelvin or degrees Celsius. Celsius is converted by adding 273.15, and the result must be above 0 K. Volume can be in litres, which are divided by 1,000 to give cubic metres, or entered directly in m³. With n in moles, T in kelvin and V in m³, the formula gives pressure in pascals, which the tool then converts to the other units.",
          "This mode is useful for finding the partial pressure of one gas from its own amount, because in an ideal mixture each gas behaves as if it filled the container alone.",
        ],
      },
      {
        id: "units",
        heading: "Which pressure units are supported?",
        paragraphs: [
          "Five units are available: atm, kPa, Pa, bar and mmHg. The tool uses 1 atm = 101,325 Pa and 1 mmHg = 101,325 ÷ 760 Pa. Apart from mixture mode, the answer is shown converted into all five units so you can copy whichever one your question asks for.",
        ],
        table: {
          caption: "Unit values used by the calculator",
          headers: ["Unit", "Value in pascals"],
          rows: [
            ["1 atm", "101,325 Pa"],
            ["1 kPa", "1,000 Pa"],
            ["1 bar", "100,000 Pa"],
            ["1 mmHg", "101,325 ÷ 760 Pa (about 133.32 Pa)"],
          ],
        },
      },
      {
        id: "display",
        heading: "How are inputs read and results shown?",
        paragraphs: [
          "Commas are removed from what you type, so 101,325 is read as 101325. Negative values are rejected. Results are shown to six significant figures, and very large or very small numbers (1e9 or more, or below 1e-4) switch to exponential notation.",
          "Every result comes with the steps used to reach it. Calculate runs the sum, Copy result copies it, and Clear empties the form.",
        ],
      },
      {
        id: "which-mode",
        heading: "Which mode should I pick for a textbook problem?",
        paragraphs: [
          "Read the question for the quantities it gives. If it states a percentage or fraction of a gas and a total pressure, use mole fraction × total, remembering to turn the percentage into a fraction. If it lists the moles or amounts of several gases in one container with a total pressure, use gas mixture mode, which saves you working out every fraction by hand.",
          "If it gives the pressure of each gas and asks what the container reads, use total from partials. If it gives an amount in moles, a temperature and a volume, use the ideal gas mode, then compare the result with other gases in the same container if the question goes on to ask about a mixture.",
          "Many multi-part questions use two modes in a row. For example, you might find one gas’s pressure with P = nRT/V and then add it to the others in total from partials.",
        ],
      },
      {
        id: "checking",
        heading: "How can I check that an answer makes sense?",
        paragraphs: [
          "A partial pressure can never be larger than the total pressure, and in a mixture the partial pressures should add back up to the total. In gas mixture mode the mole fractions should also add up to 1, give or take rounding.",
          "For the ideal gas mode, a useful reference is that one mole at 0 °C in about 22.4 litres sits close to 1 atm. If your answer is thousands of times larger or smaller, check whether a volume in litres was entered as m³ or a Celsius temperature as kelvin.",
        ],
      },
    ],
    stepsHeading: "How do I use the calculator step by step?",
    steps: [
      { title: "Choose a mode", body: "Pick mole fraction × total, gas mixture, total from partials or the ideal gas law." },
      { title: "Pick units", body: "Select atm, kPa, Pa, bar or mmHg for pressure, and K or °C and L or m³ in ideal gas mode." },
      { title: "Enter your values", body: "Use fractions between 0 and 1, not percentages, and positive numbers only." },
      { title: "Press Calculate", body: "Read the answer and the steps underneath it." },
      { title: "Copy or clear", body: "Use Copy result to paste the answer elsewhere, or Clear to start again." },
    ],
    examples: [
      { title: "Oxygen in air at sea level", body: "X = 0.21 and total = 1 atm gives 0.21 atm, which the tool also shows as about 21.28 kPa and about 159.6 mmHg." },
      { title: "A nitrogen and oxygen mixture", body: "3 mol N₂ and 1 mol O₂ at 2 atm total: X is 0.75 and 0.25, so the partial pressures are 1.5 atm and 0.5 atm." },
      { title: "Adding partials", body: "0.78 atm + 0.21 atm + 0.01 atm gives a total pressure of 1 atm." },
      { title: "One mole at 0 °C in 22.4 L", body: "T becomes 273.15 K and V becomes 0.0224 m³. P = 1 × 8.314462618 × 273.15 ÷ 0.0224, about 101,388 Pa, which is just over 1 atm." },
    ],
    notesHeading: "What are the limits of these results?",
    notes: [
      { heading: "Ideal behaviour is assumed", body: "Dalton’s law and P = nRT/V describe ideal gases. Real gases at high pressure or low temperature can differ." },
      { heading: "Keep units consistent", body: "In total from partials mode, enter every value in the same unit, because the tool adds the numbers as typed." },
      { heading: "Six significant figures", body: "Round the displayed answer to the precision your question or data supports." },
    ],
    faqs: [
      { question: "What happens if I type 21 for 21% oxygen?", answer: "Mole fraction must be between 0 and 1. Divide a percentage by 100 first, so 21% becomes 0.21." },
      { question: "What value of R does the ideal gas mode use?", answer: "It uses R = 8.314462618 J/(mol·K), with temperature in kelvin and volume in cubic metres." },
      { question: "Can I enter the temperature in Celsius?", answer: "Yes. Choose °C and the tool adds 273.15. The result has to be above 0 K." },
      { question: "Can I enter volume in litres?", answer: "Yes. Litres are divided by 1,000 to give cubic metres before the formula is applied." },
      { question: "How many gases can the mixture mode handle?", answer: "It needs at least two. It starts with N₂ and O₂ rows and you can add more." },
      { question: "Does the mixture mode need mole fractions?", answer: "No. Enter moles for each gas and the total pressure, and the tool works out each mole fraction for you." },
      { question: "What does 1 mmHg equal in this tool?", answer: "101,325 ÷ 760 pascals, so 760 mmHg equals exactly 1 atm." },
      { question: "Why is my answer shown like 2.5e-5?", answer: "Values below 1e-4 or at least 1e9 are shown in exponential notation to keep them readable." },
      { question: "Can I type numbers with thousands separators?", answer: "Yes. Commas are stripped, so 101,325 is read as 101325." },
      { question: "Can a partial pressure be negative?", answer: "No. Negative inputs are rejected because amounts and pressures cannot be below zero." },
    ],
    faqMax: 10,
    cta: { before: "Work through your gas problem with the free", linkLabel: "Partial Pressure Calculator", href: "/tools/partial-pressure-calculator", after: "." },
    alsoSee: [
      { before: "Convert other units with the", linkLabel: "Unit Converter", href: "/tools/unit-converter", after: "." },
      { before: "Round answers with the", linkLabel: "Significant Figures Calculator", href: "/tools/significant-figures-calculator", after: "." },
    ],
  },
};

const fantasy: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-calculate-fantasy-points",
    title: "How to Calculate Fantasy Points for Cricket, Football and Basketball",
    primaryKeyword: "fantasy points calculator",
    secondaryKeywords: ["fantasy cricket points", "fantasy football points", "fantasy basketball points", "custom fantasy scoring", "fantasy points breakdown"],
    toolSlug: "fantasy-point-calculator",
    siblingToolSlugs: ["average-calculator", "percentage-calculator", "random-number-generator"],
    metaTitle: "How to Calculate Fantasy Points: Cricket, Football, NBA",
    metaDescription:
      "Total a player’s fantasy points from match stats for cricket, football or basketball. Edit and save your league’s scoring rules and copy a full breakdown.",
    excerpt:
      "Fantasy points are each stat times its points value, added up. This guide explains the default rules for three sports, how to match your league and worked examples.",
    relatedArticles: ["how-to-find-the-mean-median-and-mode", "how-to-calculate-percentage", "how-to-generate-a-random-number"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: fantasy points are the sum of each stat multiplied by its points value. Open the Fantasy Point Calculator, choose cricket, football (soccer) or basketball, type the player’s stats, and read the total and the line-by-line breakdown. The built-in values are illustrative, not any platform’s official scoring, so edit the rules to match your league and save them for next time.",
    why:
      "Every fantasy league scores a little differently, and adding up a busy match by hand is slow and easy to get wrong. A breakdown that shows each stat, its count and its points lets you check a platform’s total, settle an argument in a private league, or test how a rule change would affect a player before your league votes on it.",
    sections: [
      {
        id: "formula",
        heading: "How is a fantasy total calculated?",
        paragraphs: [
          "For each rule, the tool multiplies the quantity you enter by that rule’s points and adds the results together. The total is rounded to two decimal places, which matters for sports with fractional values such as 1.2 points per rebound.",
          "Counts must be 0 or more. A blank count is skipped rather than treated as an error, so you only need to fill in the stats that actually happened.",
        ],
      },
      {
        id: "cricket",
        heading: "What are the default cricket points?",
        paragraphs: [
          "The cricket rules reward batting, bowling and fielding. Boundaries earn a bonus on top of the runs they score, so a four is 4 runs plus a 1-point bonus.",
        ],
        table: {
          caption: "Default cricket scoring",
          headers: ["Stat", "Points"],
          rows: [
            ["Run", "1"],
            ["Four (bonus)", "1"],
            ["Six (bonus)", "2"],
            ["Wicket", "25"],
            ["Maiden over", "8"],
            ["Catch", "8"],
            ["Stumping or run out", "12"],
            ["Duck", "minus 2"],
          ],
        },
      },
      {
        id: "football",
        heading: "What are the default football points?",
        paragraphs: [
          "Football (soccer) rules mix attacking and defensive actions, with deductions for cards and own goals.",
        ],
        table: {
          caption: "Default football scoring",
          headers: ["Stat", "Points"],
          rows: [
            ["Goal", "5"],
            ["Assist", "3"],
            ["Clean sheet", "4"],
            ["Shot on target", "1"],
            ["Save", "1"],
            ["Yellow card", "minus 1"],
            ["Red card", "minus 3"],
            ["Own goal", "minus 2"],
          ],
        },
      },
      {
        id: "basketball",
        heading: "What are the default basketball points?",
        paragraphs: [
          "Basketball rules use decimals, which is why totals are rounded to two places.",
        ],
        table: {
          caption: "Default basketball scoring",
          headers: ["Stat", "Points"],
          rows: [
            ["Point", "1"],
            ["Rebound", "1.2"],
            ["Assist", "1.5"],
            ["Steal", "3"],
            ["Block", "3"],
            ["Turnover", "minus 1"],
          ],
        },
      },
      {
        id: "custom",
        heading: "How do I match my league’s scoring?",
        paragraphs: [
          "Open Edit scoring rules to change any value. The points fields move in steps of 0.1, so you can set rules such as 0.5 points per run or 1.25 per rebound.",
          "Save custom rules stores your rules in this browser, separately for each sport, with up to 60 rules per sport. They come back the next time you open the tool on the same browser. Reset to defaults puts the built-in values back if you want to start again.",
          "Because the defaults are only illustrative, it is worth copying your platform’s published scoring into the editor before relying on totals for anything that matters.",
        ],
      },
      {
        id: "breakdown",
        heading: "What does the breakdown show?",
        paragraphs: [
          "Under the total, a table lists each stat with the count you entered, its points value and the points it produced. Copy breakdown copies that list so you can paste it into a group chat or spreadsheet, and Clear stats empties the counts without touching your rules.",
        ],
      },
      {
        id: "compare",
        heading: "How do I compare two players fairly?",
        paragraphs: [
          "Score both players with the same rules and the same match, then compare the breakdowns line by line rather than only the totals. A bowler’s total can be driven almost entirely by wickets at 25 points each, while a batter’s builds up from runs and boundary bonuses, so the breakdown shows where each player’s value comes from.",
          "Over several matches, record each total and then find the average. One big match can make a player look stronger than they usually are, and an average across games gives a steadier picture for picking a captain or a transfer.",
        ],
      },
      {
        id: "rule-test",
        heading: "How can I test a league rule change before voting on it?",
        paragraphs: [
          "Score a few recent matches with your current rules and copy each breakdown. Then edit the rule in question, such as raising the points for a clean sheet from 4 to 6, and score the same stats again. The difference shows exactly how many points the change would add for each player, and which positions would gain the most.",
          "When the vote is over, either save the new rules or press Reset to defaults and enter your league’s final values. Because the saved rules are kept per sport, changing football scoring does not affect your cricket or basketball rules.",
        ],
      },
      {
        id: "entering",
        heading: "How should I enter stats from a scorecard?",
        paragraphs: [
          "Work through the scorecard in the same order as the rules list. For a cricket batter, enter the runs scored, then the number of fours and sixes, because the boundary bonus is separate from the runs. For a bowler, enter wickets and maiden overs. Add catches, stumpings and run outs from the fielding section.",
          "For football, take goals, assists, shots on target, saves and cards from the match report, and enter 1 for a clean sheet if your league awards one. For basketball, copy points, rebounds, assists, steals, blocks and turnovers from the box score. Anything that did not happen can stay blank.",
          "After entering everything, scan the breakdown table. A row with an unexpected count, such as 50 fours instead of 5, is easy to spot there and fix before you copy the result.",
        ],
      },
      {
        id: "platforms",
        heading: "Why does my platform show a different total?",
        paragraphs: [
          "Fantasy platforms often add rules this tool does not include by default, such as bonuses for milestones, strike rate or economy rate, playing in the starting line-up, or a captain multiplier. Some also use different values for the same stat. Add the missing rules in the editor, or adjust the values, until the breakdown matches the platform’s published scoring.",
          "If a difference remains, compare the stat counts. Official totals sometimes use corrected scorecards that are updated after the match ends.",
        ],
      },
      {
        id: "privacy",
        heading: "Is anything I enter sent online?",
        paragraphs: [
          "No. The totals are worked out in your browser, and saved rules are kept in this browser’s local storage only. Player stats you type are not stored once you clear them or close the page.",
        ],
      },
    ],
    stepsHeading: "How do I score a player step by step?",
    steps: [
      { title: "Choose the sport", body: "Pick cricket, football (soccer) or basketball." },
      { title: "Check the rules", body: "Open Edit scoring rules and change any value that differs from your league, then save them." },
      { title: "Enter the stats", body: "Type the count for each stat the player recorded. Leave the rest blank." },
      { title: "Read the total", body: "The total and the breakdown update, rounded to two decimals." },
      { title: "Copy or clear", body: "Copy breakdown to share it, or Clear stats to score the next player." },
    ],
    examples: [
      { title: "A batter’s innings", body: "45 runs with 5 fours, 2 sixes and 1 catch: 45 + 5 + (2 × 2) + 8 = 62 points." },
      { title: "A bowler’s spell", body: "3 wickets and 1 maiden: (3 × 25) + 8 = 83 points." },
      { title: "A forward’s match", body: "1 goal, 1 assist, 3 shots on target and 1 yellow card: 5 + 3 + 3 minus 1 = 10 points." },
      { title: "A basketball stat line", body: "24 points, 8 rebounds, 6 assists, 2 steals, 1 block and 3 turnovers: 24 + 9.6 + 9 + 6 + 3 minus 3 = 48.6 points." },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      { heading: "Not official scoring", body: "The defaults do not copy any fantasy platform. Use your league’s own rules for real results." },
      { heading: "Saved rules are per browser", body: "Custom rules live in this browser’s storage. Another device or a cleared browser starts with the defaults." },
      { heading: "Bonuses are separate", body: "For cricket boundaries, enter the runs and the number of fours and sixes. The bonus is added on top of the runs." },
    ],
    faqs: [
      { question: "Is a six worth 8 points in the default cricket rules?", answer: "A six adds 6 runs at 1 point each plus a 2-point bonus, so it is worth 8 points in total when you enter both the runs and the six." },
      { question: "Why is my basketball total a decimal?", answer: "Rebounds score 1.2 and assists 1.5 by default, so totals can have decimals. They are rounded to two places." },
      { question: "Do I need to fill in every stat?", answer: "No. Blank counts are skipped, so enter only what the player recorded." },
      { question: "Can I enter a negative count?", answer: "No. Counts must be 0 or more. Deductions come from rules with negative points, such as a red card." },
      { question: "Do my edited rules follow me to another device?", answer: "No. They are kept in this browser’s local storage, separately for each sport, and are not sent anywhere. Another device starts with the defaults." },
      { question: "How many rules can one sport have?", answer: "Up to 60 rules per sport can be saved." },
      { question: "How do I undo my rule changes?", answer: "Press Reset to defaults to restore the built-in values for that sport." },
      { question: "Can I use half points?", answer: "Yes. Rule values move in steps of 0.1, so 0.5 or 1.5 points work." },
      { question: "How is a duck scored?", answer: "In the default cricket rules a duck is minus 2 points. Enter 1 for that stat when the batter is out for zero." },
      { question: "Does Clear stats delete my scoring rules?", answer: "No. It only empties the stat counts. Your rules stay as they are." },
    ],
    faqMax: 10,
    cta: { before: "Score your players with the free", linkLabel: "Fantasy Point Calculator", href: "/tools/fantasy-point-calculator", after: "." },
    alsoSee: [
      { before: "Find a player’s average over several matches with the", linkLabel: "Average Calculator", href: "/tools/average-calculator", after: "." },
      { before: "Pick a random draft order with the", linkLabel: "Random Number Generator", href: "/tools/random-number-generator", after: "." },
    ],
  },
};

const graduation: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-find-graduation-year-by-birthday",
    title: "How to Find a Child’s Graduation Year from Their Birthday",
    primaryKeyword: "graduation year by birthday",
    secondaryKeywords: ["what year will my child graduate", "school cutoff date", "school starting age", "class of year calculator", "school entry year"],
    toolSlug: "graduation-calculator-by-birthday",
    siblingToolSlugs: ["age-calculator", "date-difference-calculator", "gpa-calculator"],
    metaTitle: "Find Graduation Year by Birthday: Cutoffs and Entry Age",
    metaDescription:
      "Work out when a child starts school and graduates from their date of birth, entry age, cutoff date and years of study. See every milestone with ages.",
    excerpt:
      "A graduation year depends on the birthday, the school cutoff date and the entry age. This guide explains how the calculator applies each rule, with worked examples.",
    relatedArticles: ["how-to-calculate-age", "how-to-count-days-between-dates", "how-to-calculate-gpa"],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a child starts school in the first year in which their age on the cutoff date reaches the entry age, and graduates when the last school year ends. Open the Graduation Calculator by Birthday, enter the date of birth, check the entry age (5 by default), the cutoff (1 September), the school year months and the number of school years (13), and read the timeline. A child born on 15 October 2020 starts in 2026 and finishes school in 2039 with the defaults.",
    why:
      "Two children born a few weeks apart can end up a full school year apart. The cutoff date decides it, and rules differ between countries, states and school systems. Seeing the entry year, graduation year and age at each milestone helps with planning childcare, savings, moves and conversations about starting school early or late.",
    sections: [
      {
        id: "inputs",
        heading: "What does the calculator ask for?",
        paragraphs: [
          "The only required input is the date of birth. Everything else has a default you can change to match the local school system.",
        ],
        table: {
          caption: "Inputs and their defaults",
          headers: ["Input", "Default", "Allowed range"],
          rows: [
            ["Entry age", "5", "2 to 10"],
            ["Cutoff date", "1 September", "Any day of the year"],
            ["School year", "September to June", "Any start and end month, but not the same month"],
            ["School years", "13", "1 to 20"],
            ["Further study", "4 years", "0 to 10"],
          ],
        },
      },
      {
        id: "entry",
        heading: "How is the school entry year worked out?",
        paragraphs: [
          "The tool checks each year in turn and picks the first one in which the child’s age on the cutoff date is at least the entry age. With an entry age of 5 and a 1 September cutoff, a child must have turned 5 by 1 September of the year they start.",
          "That is why the cutoff matters so much. A child born on 31 August turns 5 just in time and starts that year, while a child born on 2 September waits until the following year and becomes one of the oldest in the class.",
        ],
      },
      {
        id: "graduation",
        heading: "How is the graduation year worked out?",
        paragraphs: [
          "The graduation year is the entry year plus the number of school years, minus one. If the school year ends in an earlier month than it starts, as September to June does, the last year finishes in the following calendar year, so one more year is added.",
          "With the defaults, entry in 2026 plus 13 school years gives 2038, and because June comes before September the graduation lands in June 2039. Further study is then added on top: 4 more years gives 2043.",
          "Milestones are labelled with academic years such as 2038–39 and with the child’s age, so you can see how old they will be at each stage.",
        ],
      },
      {
        id: "current",
        heading: "What if the child is already in school?",
        paragraphs: [
          "Tick Use the student’s current level when the child has started, skipped or repeated a year. Enter the start year of the current academic year (between 1900 and 2200) and the year number they are in now, from 1 up to the number of school years.",
          "The timeline then counts forward from where the child actually is, rather than from the date of birth, so a student who repeated a year gets the right graduation date.",
        ],
      },
      {
        id: "edge",
        heading: "How are leap-day birthdays and cutoffs handled?",
        paragraphs: [
          "A child born on 29 February is treated as reaching their birthday on 1 March in years that are not leap years. If you set the cutoff to 29 February, it falls back to 28 February in common years.",
          "The tool also refuses a school year that starts and ends in the same month, because it could not tell which calendar year the year finishes in.",
        ],
      },
      {
        id: "output",
        heading: "What does the result show?",
        paragraphs: [
          "The result is a list of milestones with academic-year labels and ages, followed by a list of the assumptions used, such as the entry age and cutoff. Copy timeline copies the whole thing so you can paste it into notes or a message.",
        ],
      },
      {
        id: "planning",
        heading: "How can the timeline help with planning?",
        paragraphs: [
          "Knowing the entry year tells you when childcare costs may drop and when school applications or registration usually open. Knowing the school graduation year and the age at that point gives a target date for an education savings plan, and the further-study milestone shows how long support may be needed after that.",
          "Families thinking about a move can run the calculator twice with each school system’s entry age and cutoff. If the two results differ by a year, that is worth discussing with the new school early, because it affects which class the child joins.",
          "For siblings, run each child separately and compare the timelines. Overlapping years at university, for example, can matter for budgeting.",
        ],
      },
      {
        id: "compare",
        heading: "How do I compare an early or late start?",
        paragraphs: [
          "Change the entry age by one year and read the timeline again. Lowering it from 5 to 4 moves every milestone a year earlier, while raising it to 6 moves them a year later. The ages shown at each milestone make the effect clear, for example whether the child would finish school at 17 or 18.",
          "If the child is already enrolled, the current-level option is more reliable than adjusting the entry age, because it starts from the year they are actually in.",
        ],
      },
      {
        id: "cutoff-pick",
        heading: "Which cutoff date should I use?",
        paragraphs: [
          "Use the date your school or education authority publishes for school entry. The default of 1 September matches a September start, but some systems use a date earlier or later in the year, and some use the first day of the school year itself. If you set a school year from January to December, the cutoff usually sits near the start of that year too.",
          "When you cannot find the official date, run the calculator with the two most likely cutoffs. If both give the same entry year, the choice does not matter for your child. If they differ, the timeline shows exactly what is at stake, and you know to confirm the rule with the school.",
        ],
      },
    ],
    stepsHeading: "How do I find a graduation year step by step?",
    steps: [
      { title: "Enter the date of birth", body: "Type the child’s birthday." },
      { title: "Set the local rules", body: "Change the entry age, cutoff date and school year months if your school system differs from the defaults." },
      { title: "Set the length of study", body: "Choose the number of school years (13 by default) and any further study (4 by default)." },
      { title: "Add the current level if needed", body: "For a child already in school, tick the option and enter the current academic start year and year number." },
      { title: "Read and copy", body: "Check the milestones, ages and assumptions, then use Copy timeline." },
    ],
    examples: [
      { title: "An autumn birthday", body: "Born 15 October 2020 with the defaults: age 4 on 1 September 2025, so entry is 2026. 2026 + 13 minus 1 = 2038, plus 1 for a June finish, gives school graduation in 2039 and further study finished in 2043." },
      { title: "A spring birthday", body: "Born 10 March 2020 with the defaults: already 5 on 1 September 2025, so entry is 2025 and school graduation is 2038." },
      { title: "A different cutoff", body: "Change the cutoff to a date after the child’s birthday and they may qualify a year earlier. Try both dates when you are unsure which rule your school uses." },
    ],
    notesHeading: "What should I check before relying on the result?",
    notes: [
      { heading: "Local rules decide", body: "Entry ages and cutoffs vary by country, state and school. Confirm them with the school or education authority." },
      { heading: "Plans can change", body: "Early entry, repeated years or a change of country can move the dates. Use the current-level option to update the timeline." },
      { heading: "Further study is an estimate", body: "The 4-year default is a common degree length, not a rule. Set it to match the course in mind." },
    ],
    faqs: [
      { question: "Why does my child start a year later than a friend born the same year?", answer: "The cutoff date. If your child’s birthday falls after the cutoff, they have not reached the entry age on that date and start the following year." },
      { question: "What entry age does the calculator assume?", answer: "Five by default. You can set any age from 2 to 10." },
      { question: "Can I use a January to December school year?", answer: "Yes. Set the start and end months. Only a year that starts and ends in the same month is refused." },
      { question: "Why is a year added to the graduation year?", answer: "When the school year ends in an earlier month than it starts, such as September to June, the final year finishes in the next calendar year." },
      { question: "How do I account for a child who repeated a year?", answer: "Tick Use the student’s current level and enter the current academic start year and year number." },
      { question: "What happens with a 29 February birthday?", answer: "In non-leap years the birthday counts as reached on 1 March." },
      { question: "Can I add university or college?", answer: "Yes. Further study adds 0 to 10 years after school, 4 by default." },
      { question: "How many school years can I enter?", answer: "Between 1 and 20. The default is 13." },
      { question: "What does a label like 2038–39 mean?", answer: "It is the academic year that starts in 2038 and ends in 2039." },
      { question: "Can I share the timeline?", answer: "Use Copy timeline to copy the milestones and assumptions, then paste them wherever you like." },
    ],
    faqMax: 10,
    cta: { before: "Plan your child’s school years with the free", linkLabel: "Graduation Calculator by Birthday", href: "/tools/graduation-calculator-by-birthday", after: "." },
    alsoSee: [
      { before: "Check an exact age with the", linkLabel: "Age Calculator", href: "/tools/age-calculator", after: "." },
      { before: "Count the time to a date with the", linkLabel: "Date Difference Calculator", href: "/tools/date-difference-calculator", after: "." },
    ],
  },
};

export const batch5Guides: ToolGuide[] = [banner, partialPressure, fantasy, graduation];
