import type { ToolContent } from "./tool-content.ts";
export const paintContent: ToolContent = {
  about:
    "Plan wall, ceiling, room and exterior paint quantities locally, with explicit coverage assumptions and available-container choices.",
  howTo: [
    "Choose a project and units, then enter measured surfaces and any unpainted openings.",
    "Set coverage per coat, coats and wastage; optionally enter paint and container prices.",
    "Select actual available container sizes and press Calculate. Review the itemized assumptions before copying, exporting or printing.",
  ],
  examples: [
    {
      title: "Four walls, two coats",
      body: "48 − 3.39 = 44.61 m². × 2 ÷ 10 × 1.10 = 9.8142 L, displayed as 9.81 L. A selected 10 L container covers this unrounded requirement.",
    },
  ],
  explanation:
    "Geometry is converted to metres, paint to litres. Openings are deducted once and net wall area never falls below zero. Coats and wastage apply before display rounding. Container optimization is based only on selected sizes.",
  limitations:
    "Coverage defaults and colours are estimates. No brand affiliation or retailer availability is implied. Primer, labour, preparation and equipment are not included. Different products and colours need separate purchase plans.",
  faqs: [
    {
      question: "How much paint do I need?",
      answer:
        "Net area × coats ÷ coverage gives litres before waste. Add your chosen waste percentage, then choose actual available containers covering the unrounded amount.",
    },
    {
      question: "How do I calculate wall area?",
      answer:
        "Multiply width by height and quantity. Enter unequal walls separately; a rectangular room uses 2 × (length + width) × height.",
    },
    {
      question: "Should I subtract doors and windows?",
      answer:
        "Subtract openings you will not paint, once each. Doors and Windows project mode instead adds the faces you intend to paint.",
    },
    {
      question: "How much paint do I need for a room?",
      answer:
        "Enter room length, width and height, deduct its openings and choose whether to include its ceiling. Four walls are counted once.",
    },
    {
      question: "Can I calculate several rooms together?",
      answer:
        "Yes. Multiple Rooms shows each room and a combined estimate. Only combine rooms using the same paint and colour; otherwise calculate separate purchase plans.",
    },
    {
      question: "How do I calculate ceiling paint?",
      answer:
        "Choose Ceiling and enter length and width. For a sloped ceiling use the actual sloped surface dimensions, or split it into measured pieces.",
    },
    {
      question: "Is two coats always enough?",
      answer:
        "No. Two is the default estimate. Use the product's instructions and the surface/colour change to choose the number of coats; custom whole-number counts up to 100 are supported.",
    },
    {
      question: "What coverage should I use?",
      answer:
        "Use per-coat coverage for the actual product and surface. The editable 10 m²/L and 350 ft²/US gal defaults are different planning estimates, not branded specifications.",
    },
    {
      question: "How much wastage should I allow?",
      answer:
        "Compare the offered 0%, 5%, 10% and 15% allowances. The default is 10%; choose a realistic value for your application method and project rather than treating it as a guarantee.",
    },
    {
      question: "Are US and Imperial gallons the same?",
      answer:
        "No. One US gallon is 3.785411784 litres; one Imperial gallon is 4.54609 litres. Choose the correct output and price basis.",
    },
    {
      question: "Does the cost include labour or primer?",
      answer:
        "No. Cost covers paint volume or the fully priced selected containers. Labour, primer, preparation and equipment are excluded; enter quotes in the selected currency.",
    },
    {
      question: "How are containers recommended?",
      answer:
        "Only checked sizes are considered. The optimizer minimizes excess first, then cost if all selected sizes are priced, then container count. It does not check retailer availability and supports up to 5,000 L.",
    },
    {
      question: "Are these official Dulux HEX colours?",
      answer:
        "No. All explorer HEX values are editable editorial approximations. Even the verified reference 81YY 87/031 has no official HEX match supplied here. Verify using regional cards and physical samples.",
    },
    {
      question: "Can I download, copy or print the estimate?",
      answer:
        "Yes. Calculate first to unlock Copy Results, a generated PDF and a print window. Clipboard or popup permissions can block an action; selectable results text remains available.",
    },
    {
      question: "Does the calculator save my room measurements?",
      answer:
        "No. Paint measurements and estimates stay in this tab; this tool does not upload them or write them to localStorage. Closing or reloading the tab clears them.",
    },
  ],
  article: {
    title:
      "Paint Calculator: How to Calculate How Much Paint You Need for Any Room",
    intro:
      "Before buying paint, separate three decisions: what surface you will cover, which product will cover it and which containers you can actually buy. This guide follows the calculator's arithmetic and explains where a measurement ends and a product-specific assumption begins. Use the worked example to check the method, then replace its dimensions and planning coverage with your own. The result should be a useful shopping plan, not an unexplained number of tins.",
    sections: [
      {
        heading: "What is a paint calculator?",
        paragraphs: [
          "A paint calculator turns measurements into a practical quantity of paint. It separates the surface you intend to cover from the number of times you cover it, then adds a chosen allowance for waste. That distinction matters: a 20 m² wall still has 20 m² of physical area after two coats, but it requires enough paint for 40 m² of application. This tool also compares container combinations, so a precise requirement does not become an impossible shopping quantity. It is a planning aid, not a survey or coverage guarantee.",
        ],
      },
      {
        heading: "How much paint do I need?",
        paragraphs: [
          "Start with the net paintable area, multiply it by the number of coats and divide by coverage per coat. Apply wastage to that volume, rather than rounding each wall up along the way. For four walls each 4 m wide and 3 m high, gross area is 48 m². Subtract 3.39 m² of openings to get 44.61 m². Two coats make 89.22 m² of application. At an estimated 10 m²/L, that is 8.922 L before waste and 9.8142 L with 10% added. The two-decimal display is 9.81 L; the purchase plan must still cover the unrounded quantity.",
        ],
      },
      {
        heading: "Calculate wall area without counting twice",
        paragraphs: [
          "For a rectangular wall, multiply width by height. Use the quantity field only when several walls really share those dimensions. Two 4 m walls and two 3 m walls should be entered as two rows with quantity two, not four walls of the longest width. Measure the actual painted height, excluding a tiled section if it will remain untouched. Split an irregular outline into non-overlapping rectangles and enter those pieces separately. A triangle can be represented using its base and half its perpendicular height. Use a sketch to avoid counting alcoves twice.",
        ],
      },
      {
        heading: "Subtract doors and windows sensibly",
        paragraphs: [
          "Deduct openings that will not receive the wall paint. A 0.9 m by 2.1 m door removes 1.89 m²; a 1.5 m by 1 m window removes another 1.5 m². Enter each opening once, even if a wall row represents several identical walls. This calculator prevents a negative net wall area, but a zero result after large deductions is a reason to check your measurements. Window reveals, frames and door edges may still need painting; estimate those surfaces separately in the correct product. In Doors and Windows mode, the entered faces are added as paintable surfaces rather than subtracted from a wall.",
        ],
      },
      {
        heading: "Estimate an entire room or several rooms",
        paragraphs: [
          "For a rectangular room, wall area is twice length plus twice width, multiplied by height. The room mode creates those four walls automatically; do not add the same walls again as individual surfaces. Openings belong to their own room, so an oversized deduction in one room cannot erase another room's area. Add each room separately in Multiple Rooms mode and inspect both its contribution and the combined total. Combining quantities is useful only when you will use the same paint and colour. A bedroom and hallway with different finishes need separate estimates even if their measurements were taken at the same time.",
        ],
      },
      {
        heading: "Include the ceiling only when needed",
        paragraphs: [
          "A flat rectangular ceiling uses length multiplied by width. Ceiling mode estimates that surface alone, while the room checkbox adds it to the four walls once. Leave the checkbox off if the ceiling is not part of the job. Sloping ceilings need their actual sloped dimensions, not merely the floor footprint. Beams and complicated recesses are better broken into measured pieces. If the ceiling paint differs from the wall paint, calculate it separately so the optimizer does not treat incompatible tins as interchangeable. Check whether a stain-blocking or specialist primer is needed; those products are outside this topcoat estimate.",
        ],
      },
      {
        heading: "Interior versus exterior surfaces",
        paragraphs: [
          "The geometry does not change when a wall is outside, but the coating system and working conditions do. Exterior masonry may have texture, porosity or weather damage that affects consumption. Interior washable wall paint is not automatically suitable outdoors, and a masonry product is not automatically suitable for woodwork. Select Exterior Walls to organize the project, then replace the coverage estimate with the figure for the actual exterior product and surface. The calculator does not infer a weather forecast, drying window or preparation system. Check the current technical instructions and plan safe access before buying material for high or awkward areas.",
        ],
      },
      {
        heading: "Read paint coverage correctly",
        paragraphs: [
          "Coverage is an area per volume for one coat. This tool offers editable starting estimates of 10 m² per litre and 350 ft² per US gallon; those are not equivalent rates and neither is a universal paint specification. Switching the coverage basis loads its own estimate, so review it before calculating. Manufacturer figures may be quoted as a range or an upper limit under particular conditions. Rough or absorbent surfaces can use more paint than a smooth sealed sample. Choose a defensible rate from the product information rather than the most optimistic number, and keep primer calculations separate from the finish coats.",
        ],
      },
      {
        heading: "Choose coats and a waste allowance",
        paragraphs: [
          "Two coats are a convenient starting point, not a promise of adequate opacity. A strong colour change, repaired patches or a particular product specification can require a different approach. Use the one-to-four presets or enter a custom whole number for the project you are planning. Wastage adds a percentage to the calculated volume for handling and application losses; it does not improve coverage or replace a missing coat. Compare 5%, 10% and 15% to see the effect, then choose deliberately. An extra tin for future touch-ups is a separate purchasing decision, and stored paint must remain suitable for later use.",
        ],
      },
      {
        heading: "Calculate paint cost and containers",
        paragraphs: [
          "Enter a price in the same volume unit shown by the output selector: litres, US gallons or Imperial gallons. Changing units does not convert a retailer's quoted price. One US gallon is exactly 3.785411784 L; one Imperial gallon is 4.54609 L. Select only container sizes actually offered for your finish and colour. The optimizer first minimizes excess above the unrounded requirement, then compares total price when every selected size is priced, and finally prefers fewer containers. That is not a cheapest-at-any-excess shopping strategy. Labour, equipment, preparation and primer are excluded, and no retailer stock or current price is assumed.",
        ],
      },
      {
        heading: "Choose colours in the actual room",
        paragraphs: [
          "A screen colour can look different across a whole wall. Lighting, surrounding finishes and the sheen of the paint all affect the impression. Use the sample-wall preview to explore a direction, then obtain physical samples before committing to a full quantity. Compare samples beside your furnishings in daylight and lamplight. The HEX editor is useful for a digital mood board, not for ordering an exact paint match. Keep the selected product name, finish and regional colour reference with your measurements so the final purchase is unambiguous.",
        ],
      },
      {
        heading: "Dulux paints and regional colour charts",
        paragraphs: [
          "Dulux Paints are a reference point for many decorating projects, but product ranges and colour availability differ between markets. Someone searching for Color Card Dulux or Colour Card Dulux needs the current regional card, not an unlabeled image reposted elsewhere. The same caution applies to a Dulux Paints Color Chart, Colour Chart Paint Dulux or Dulux Colour Chart Paint: confirm the source, finish and market before ordering. If a retailer uses ICI Dulux branding, identify the actual current product rather than inferring a formulation from the name. This independent calculator has no Dulux affiliation and does not supply manufacturer mixing formulas.",
        ],
      },
      {
        heading: "Dulux Painters White and coded whites",
        paragraphs: [
          "A request for Dulux Painters White still needs a confirmed local reference. Do not assume that two whites with similar names, or a colour pictured on two websites, are identical. The explorer's white is an editorial approximation rather than an official digital match. The reference 81YY 87/031 does appear in Dulux Pakistan's official children's-bedroom inspiration, but that does not establish a universal HEX value, finish or available pack size. Ask the supplier to identify the exact colour card and product. Test the chosen white against nearby cream, grey and timber finishes, where differences are often easier to notice than on a screen.",
        ],
      },
      {
        heading: "Weathershield exterior paint planning",
        paragraphs: [
          "For Dulux Paint Weathershield projects, first identify the exact product and substrate. Dulux's UK Weathershield guide distinguishes exterior masonry finishes from products intended for wood, metal and other surfaces; the range name alone is not enough to select a coating system. A search for Weathershield Paint Exterior should therefore lead to the relevant regional product instructions rather than a single assumed coverage figure. Enter that product's rate into the calculator and keep undercoat or preparation materials on a separate list. We do not transfer a UK product's performance claim, drying time or guarantee to a similarly named product sold elsewhere.",
        ],
      },
      {
        heading: "EasyClean and washable interior finishes",
        paragraphs: [
          "EasyClean Paint can be relevant when the priority is a washable interior finish. Dulux Arabia describes EasyClean as an interior emulsion with washability features; that is a regional product description, not a claim that every mark will disappear from every wall. Check the local instructions for application, curing and cleaning before treating a newly decorated surface. Do not substitute specifications from a different regional EasyClean or Easycare range. This calculator deliberately keeps coverage editable rather than assigning a branded rate. A washable topcoat also does not solve moisture ingress, unstable plaster or an unsuitable base, which need attention before the finish is applied.",
        ],
      },
      {
        heading: "Irish Green, Ivory Beige, Misty Rose and Rich Navy",
        paragraphs: [
          "Use Irish Green Colour as a starting direction for a green scheme, not proof of a particular manufacturer's formula. Ivory Beige suggests a warmer neutral direction, while a Misty Rose Color idea can be tested beside cool and warm lighting. Rich Navy can provide a deeper contrast, but compare a physical sample with your trim before choosing the whole-room balance. These are design examples in the explorer, with editable approximate HEX values. Names alone do not verify a Dulux Colours Paint reference or its availability. If you use two colours, measure their separate areas and calculate each purchase independently instead of pooling all the litres.",
        ],
      },
      {
        heading: "Honeycomb hexagon wall paint ideas",
        paragraphs: [
          "A Honeycomb Hexagon Wall Paint design introduces a second problem after total wall area: how much of each colour the pattern occupies. Sketch the layout, decide whether lines between shapes remain the base colour and estimate each painted region without overlapping it. A few tester pots may be useful for a trial, but the calculator cannot infer pattern proportions from a description. Enter the area assigned to each colour as a separate estimate and use actual available small-container sizes. Allow time for masking and follow the product's instructions before applying tape to a fresh coat. The explorer's honeycomb gold is a digital suggestion, not a branded shade match.",
        ],
      },
      {
        heading: "Stucco filler and textured surfaces",
        paragraphs: [
          "Stucco Filler is a preparation term, not a coverage setting for finish paint. Identify the repair material and follow its instructions for compatibility, drying and overcoating. A filler-covered patch can behave differently from the surrounding finish, and texture increases the complexity of predicting consumption. The calculator does not estimate filler volume, crack repair or render thickness. Where the surface is irregular, use the coating manufacturer's guidance or a measured trial area to choose a realistic topcoat rate. Keep the filler, primer and topcoat quantities on separate lines of your budget rather than assuming a larger paint allowance will fix a preparation problem.",
        ],
      },
      {
        heading: "Common measuring and buying mistakes",
        paragraphs: [
          "The most expensive mistakes are often small ambiguities repeated across a project: inches entered as feet, four walls counted twice, openings deducted from every repeated row or a price per tin treated as a price per litre. Review the itemized breakdown before buying. A zero net area after deductions deserves attention even though the arithmetic is safely clamped. Do not round a requirement down and then assume a container combination is sufficient; the optimizer uses the unrounded number. Check the selected sizes with the retailer, keep different finishes separate and record the product details alongside the estimate. No calculation can confirm stock that has not been checked.",
        ],
      },
      {
        heading: "FAQs and the final purchase check",
        paragraphs: [
          "The questions below explain the practical limits of the estimate, including coat counts, gallon conversions and container selection. For an unusual surface or a complicated colour change, product-specific instructions matter more than a generic rule of thumb. Before purchasing, confirm the measurements, product, colour, finish, per-coat coverage and recommended system. Save the results as a PDF or copy the text into your project notes so another person can review the assumptions. For help checking dimensions, use the [Unit Converter](/tools/unit-converter) or [Square Footage Calculator](/tools/square-footage-calculator); the [Percentage Calculator](/tools/percentage-calculator) can independently check an allowance.",
        ],
      },
    ],
  },
};
