import type { ToolContent } from "./tool-content.ts";

export const youtubeBannerContent: ToolContent = {
  about:
    "This YouTube banner maker builds channel art at the full 2560 × 1440 pixel size inside your browser. Start from one of 15 original templates or a blank colour, then add text, photos, a logo, rectangles, circles and gradients. A dashed 1546 × 423 guide marks the strip that stays visible on phones, desktops and TVs. The guide helps you place names and slogans, and it is never drawn into the downloaded file. Nothing you upload leaves your device, because the editing and the export both run on a canvas element in the page.",
  howTo: [
    "Pick a template from the Templates panel, or keep the default and change its background colour or gradient.",
    "Select a layer by tapping or clicking it on the canvas or in the Layers list. Drag it to move it, and drag the gold corner square to resize it.",
    "Edit the selected layer in the side panel: text, font, weight, size, alignment, colour, fill, gradient, corner radius, opacity and exact position.",
    "Add your own pieces with Text, Rectangle, Circle, Image or Logo. Reorder layers with the arrows and hide any layer with the dot button.",
    "Keep important words and faces inside the dashed safe area, then choose PNG or JPG and press Download 2560 × 1440.",
  ],
  features: [
    "Export at 2560 × 1440, the size YouTube recommends for channel banners, with the file kept at or below 6 MB.",
    "A 1546 × 423 safe-area overlay that you can switch on or off and that never appears in the export.",
    "15 original starter layouts covering gaming, vlogs, cooking, music, education, fitness, business and more.",
    "Layers with reorder, hide, duplicate and delete, plus undo, redo and a reset back to the chosen template.",
    "Mouse, pen and touch dragging through pointer events, a zoom slider from 50% to 300%, and keyboard shortcuts.",
  ],
  examples: [
    {
      title: "A gaming channel in five minutes",
      body: "Load Neon Arena, change the title to the channel name, change the tagline to the real stream days, and drag a transparent PNG logo to the left side of the safe area. The neon slash sits behind the text, so the name stays readable on a phone.",
    },
    {
      title: "Using a photo as the background",
      body: "Start from Minimal Mono, press Image and choose a landscape photo. The photo is scaled to fit the full canvas. Use the down arrow in the Layers list to send it below the title, then lower its opacity so the words stand out.",
    },
    {
      title: "Keeping a file under 6 MB",
      body: "A detailed photo exported as PNG can be larger than 6 MB at this size. When that happens the tool switches to JPG and lowers the quality step by step until the file fits, and the status line tells you which format and size you received.",
    },
  ],
  explanation:
    "The editor keeps your design as a list of layers drawn in order from bottom to top over a background fill. Every change, from a colour pick to a drag, produces a new version of that list, and up to 60 versions are kept so undo and redo can step through them. The preview canvas is always the true 2560 × 1440 size and is only scaled down with CSS, so what you see is what you export.",
  sections: [
    {
      heading: "Calculation method",
      paragraphs: [
        "The safe area is centred on the canvas. Its left edge sits at (2560 − 1546) ÷ 2 = 507 pixels and its top edge at (1440 − 423) ÷ 2 = 508.5 pixels. Anything inside that box is visible on every device class YouTube supports. Wider strips appear on desktop and the whole image can appear on TV, so the outer area is a good place for texture, colour and photo detail rather than words.",
        "Pointer positions are converted from screen pixels to canvas pixels by dividing by the displayed width and height and multiplying by 2560 and 1440. That keeps dragging accurate at any zoom level and on any screen. Gradients use the CSS angle convention, where 90 degrees runs left to right and 180 degrees runs top to bottom.",
        "Text wraps inside each text box. The tool measures each word with the browser's font metrics and starts a new line when the next word would pass the box width. Line spacing is 1.2 times the font size.",
        "On export the design is drawn again on a fresh canvas with no guide, no selection outline and no resize handle. A PNG is tried first when you choose PNG. If it is over 6 MB, or if you chose JPG, the tool encodes JPG at quality 0.92 and steps down through 0.85, 0.75, 0.65 and 0.5 until the file is 6 MB or smaller.",
      ],
    },
    {
      heading: "Designing for small screens",
      paragraphs: [
        "On a phone the banner is shown as a thin strip, roughly the safe area, so a name in large letters reads better than a sentence. A tagline of four to six words is usually enough. High contrast between text and background matters more than font choice at that size.",
        "Logos with transparent backgrounds look cleaner than logos on a white box. If your logo is a JPG with a white background, place it on a light area of the design or redraw it as a PNG first. The Logo button scales any image to fit a 300-pixel square and places it near the left edge of the safe area.",
      ],
    },
    {
      heading: "Choosing colours and type",
      paragraphs: [
        "Pick one strong background colour or a two-colour gradient and one accent colour, then use the accent sparingly for a bar, a ring or a single word. Light text on a dark background reads well at small sizes, and so does near-black text on a pale background. Mid-tone text on a mid-tone background is the combination most likely to disappear on a phone.",
        "Bold or semibold weights hold up better than regular weight when the banner is shrunk. The Condensed option fits longer names on one line, and the Serif option suits cooking, travel and education channels that want a calmer look.",
      ],
    },
    {
      heading: "Privacy and local processing",
      paragraphs: [
        "Images are read with the browser's FileReader and kept in memory as data URLs. They are not sent to Tools Star Hub or any other server. Closing or reloading the tab clears the design, so download a copy before you leave.",
      ],
    },
  ],
  tips: [
    "Check the design at 50% zoom. If the name is still easy to read, it will usually read well on a phone.",
    "Use the arrow keys for small moves and hold Shift for 50-pixel steps when lining up text with the guide.",
    "Duplicate a text layer with Ctrl or ⌘ + D to build a second line in the same style.",
    "Upload the PNG or JPG in YouTube Studio under Customisation, then Branding, and preview each device size there before publishing.",
  ],
  limitations:
    "The editor has no rotation, crop, filters, custom font upload or saved projects, and the design is lost when the tab closes. Browser fonts differ slightly between systems, so text can wrap a little differently on another computer. Very large photos can make older phones slow. YouTube can change its banner sizes or file limits, so confirm the current figures in YouTube Help before you upload.",
  faqs: [
    { question: "What size does the YouTube banner maker export?", answer: "It always exports 2560 × 1440 pixels, which is the channel banner size YouTube recommends. The safe-area guide is not part of the file." },
    { question: "What is the 1546 × 423 safe area?", answer: "It is the centred strip that stays visible on every device, including phones. Keep your channel name, logo and any short message inside it so nothing is cut off." },
    { question: "Is the safe-area guide included in my download?", answer: "No. The guide is only drawn on the preview. The export is rendered again on a clean canvas without the guide, selection outline or handles." },
    { question: "Why did my PNG download as a JPG?", answer: "A PNG of a detailed photo can be over 6 MB at this size. The tool switches to JPG and lowers quality step by step until the file fits under 6 MB, and the status line explains what happened." },
    { question: "Are my images uploaded anywhere?", answer: "No. Images are read and drawn inside your browser tab. Nothing is sent to a server, and closing the tab removes them." },
    { question: "Can I use it on a phone or tablet?", answer: "Yes. Dragging and resizing work with touch, the side panel moves under the canvas on narrow screens, and the zoom slider helps with precise placement." },
    { question: "Which keyboard shortcuts are available?", answer: "Ctrl or ⌘ + Z undoes, Ctrl or ⌘ + Shift + Z or Ctrl + Y redoes, Ctrl or ⌘ + D duplicates, Delete or Backspace removes the selected layer, arrow keys nudge it and Escape clears the selection." },
    { question: "Can I save a design and come back later?", answer: "Not yet. The design lives only in the open tab. Download a PNG or JPG when you finish, and keep your source images so you can rebuild it." },
    { question: "Can I use the templates on a commercial channel?", answer: "Yes. The templates are original layouts made for this tool from shapes, gradients and text. Make sure any photo or logo you add is yours or licensed for your use." },
  ],
};

export const partialPressureContent: ToolContent = {
  about:
    "This partial pressure calculator applies Dalton's law in four ways. It can turn a mole fraction and a total pressure into a partial pressure, split a total pressure across a mixture of gases from their amounts in moles, add separate partial pressures to get a total, or find the pressure of a single gas from the ideal gas law. Every answer is shown in atm, kPa, Pa, bar and mmHg, with the working written out step by step so you can check it against a textbook or a lab sheet.",
  howTo: [
    "Choose a mode: mole fraction × total, gas mixture, total from partials, or ideal gas.",
    "Enter the values for that mode. Mole fractions are decimals from 0 to 1, amounts are in moles, and temperatures can be kelvin or degrees Celsius.",
    "Pick the pressure unit you are working in. The result is converted to the other four units automatically.",
    "Press Calculate, read the steps, and use Copy result to paste the answer and working into notes. Clear empties every field.",
  ],
  features: [
    "Dalton's law from a mole fraction, with a check that rejects fractions below 0 or above 1.",
    "A mixture mode for up to 10 gases that computes each mole fraction and confirms the fractions add to 1.",
    "Total pressure from up to 10 partial pressures.",
    "Ideal gas pressure from n, T and V with kelvin or Celsius and litres or cubic metres.",
    "Exact conversions between atm, kPa, Pa, bar and mmHg.",
  ],
  examples: [
    {
      title: "Oxygen in dry air at sea level",
      body: "Dry air is about 20.95% oxygen by volume, so its mole fraction is about 0.2095. At a total pressure of 1 atm, P(O₂) = 0.2095 × 1 atm = 0.2095 atm, which is 21.23 kPa or 159.2 mmHg.",
    },
    {
      title: "A three-gas cylinder",
      body: "A cylinder at 200 kPa holds 3.0 mol of nitrogen, 1.5 mol of oxygen and 0.5 mol of argon, 5.0 mol in total. The mole fractions are 0.60, 0.30 and 0.10, so the partial pressures are 120 kPa, 60 kPa and 20 kPa. They add back to 200 kPa.",
    },
    {
      title: "Gas collected over water",
      body: "Hydrogen is collected over water at 25 °C with a total pressure of 755.0 mmHg. Water's vapour pressure at 25 °C is about 23.8 mmHg, so the dry hydrogen pressure is 755.0 − 23.8 = 731.2 mmHg. Use the total-from-partials mode in reverse by checking that 731.2 + 23.8 returns 755.0 mmHg.",
    },
    {
      title: "Ideal gas pressure in a flask",
      body: "0.500 mol of gas at 25 °C in a 10.0 L flask: T = 298.15 K and V = 0.0100 m³, so P = 0.500 × 8.314462618 × 298.15 ÷ 0.0100 = 123,948 Pa, about 124.0 kPa or 1.223 atm.",
    },
  ],
  explanation:
    "Dalton's law of partial pressures says that in a mixture of gases that do not react, each gas pushes on the container walls as if it were alone, and the total pressure is the sum of those separate pushes. Because pressure in an ideal mixture is proportional to the number of molecules, each gas's share of the total pressure equals its share of the moles.",
  sections: [
    {
      heading: "Calculation method",
      paragraphs: [
        "Mole fraction mode uses Pᵢ = Xᵢ × P_total. The fraction must be at least 0 and no more than 1, and the total pressure must be greater than zero.",
        "Mixture mode first adds the moles: n_total = n₁ + n₂ + … . Each mole fraction is Xᵢ = nᵢ ÷ n_total, and each partial pressure is Xᵢ × P_total. The tool also adds the fractions and shows the sum, which should be 1 apart from rounding.",
        "Total mode uses P_total = P₁ + P₂ + … + Pₙ, with every value in the same unit.",
        "Ideal gas mode uses P = nRT ÷ V with R = 8.314462618 J/(mol·K). Celsius is converted with T(K) = T(°C) + 273.15, litres are divided by 1,000 to get cubic metres, and the answer comes out in pascals before conversion.",
        "Unit conversion goes through pascals: 1 atm = 101,325 Pa, 1 bar = 100,000 Pa, 1 kPa = 1,000 Pa and 1 mmHg = 101,325 ÷ 760 Pa, about 133.322 Pa. Results are rounded to six significant figures for display only.",
      ],
    },
    {
      heading: "Mole fraction validation",
      paragraphs: [
        "A mole fraction is a ratio of part to whole, so it cannot be negative and cannot exceed 1. If you type a percentage such as 21 instead of 0.21, the calculator stops and asks for a decimal rather than returning a partial pressure 21 times larger than the total. In mixture mode the fractions are computed from the moles, so they always add to 1 and you do not have to normalise them yourself.",
      ],
    },
    {
      heading: "Worked example: breathing gas at depth",
      paragraphs: [
        "A diver breathes air at 30 metres of seawater, where the absolute pressure is about 4.0 bar. With an oxygen fraction of 0.21, P(O₂) = 0.21 × 4.0 = 0.84 bar, and with a nitrogen fraction of 0.79, P(N₂) = 0.79 × 4.0 = 3.16 bar. The two add back to 4.0 bar. This is the same calculation dive planners use to check oxygen exposure, although real dive planning needs proper training, tables or a dive computer, not a web calculator.",
      ],
    },
    {
      heading: "Common mistakes to avoid",
      paragraphs: [
        "Mixing units is the most frequent error: adding a value in kPa to a value in mmHg gives a meaningless total. Another is using Celsius directly in P = nRT/V, which can even give a negative pressure. A third is forgetting that a gas collected over water is wet, so the measured total includes water vapour.",
      ],
    },
    {
      heading: "When Dalton's law works well",
      paragraphs: [
        "The law is very accurate for gases at ordinary pressures and temperatures, such as air, breathing mixtures, combustion gases and most classroom problems. It becomes less exact at high pressure or low temperature, where molecules take up a noticeable share of the volume and attract one another, and for gases that react, dissolve or condense.",
      ],
    },
  ],
  tips: [
    "Convert percentages to decimals before using mole fraction mode: 78% becomes 0.78.",
    "For gas collected over water, subtract the water vapour pressure at the measured temperature from the total.",
    "Keep every partial pressure in the same unit before adding them.",
    "Use kelvin in your own notes as well, because P = nRT/V only works with absolute temperature.",
  ],
  limitations:
    "The calculator assumes ideal gases that do not react with each other. It does not apply van der Waals or other real-gas corrections, it does not look up vapour pressures, and it does not handle gas solubility in liquids (Henry's law). Results are shown to six significant figures, which can be more precision than your measurements support, so round the final answer to match your data.",
  faqs: [
    { question: "What is partial pressure?", answer: "It is the pressure one gas in a mixture would exert if it filled the whole container alone at the same temperature." },
    { question: "What is the formula for partial pressure?", answer: "Pᵢ = Xᵢ × P_total, where Xᵢ is the gas's mole fraction. You can also add every partial pressure to get the total: P_total = P₁ + P₂ + … ." },
    { question: "How do I find a mole fraction?", answer: "Divide the moles of one gas by the total moles of all gases. The mixture mode does this for you and shows each fraction." },
    { question: "Why does the calculator reject a mole fraction of 21?", answer: "A mole fraction must be between 0 and 1. If you mean 21%, enter 0.21." },
    { question: "Which pressure units are supported?", answer: "atm, kPa, Pa, bar and mmHg. Torr is effectively the same as mmHg for everyday work, since 1 torr is exactly 101,325 ÷ 760 Pa." },
    { question: "Can I use Celsius in the ideal gas mode?", answer: "Yes. Choose °C and the tool adds 273.15 before calculating. Temperatures at or below absolute zero are rejected." },
    { question: "What value of R does the tool use?", answer: "8.314462618 J/(mol·K), the exact SI value defined since 2019, with volume in cubic metres and pressure in pascals." },
    { question: "Does Dalton's law work for real gases?", answer: "It is a close approximation at everyday pressures. At high pressure or near condensation, real-gas behaviour causes small differences that this tool does not model." },
    { question: "How many gases can I add?", answer: "Up to 10 in the mixture and total modes, which covers almost every homework, lab and diving problem." },
  ],
};
