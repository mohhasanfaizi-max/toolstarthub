# Paint source and specification notes

Official pages opened during implementation:
- https://www.dulux.co.uk/en/expert-help/dulux-weathershield-paint-range — distinguishes exterior masonry, wood/metal and multi-surface products. Article cites the distinctions, not an unconditional lifespan or universal coverage.
- https://www.duluxarabia.com/en/products/easyclean — identifies EasyClean as an interior emulsion with washability. Article does not transplant regional rates to the defaults or promise stain removal/health benefits.
- https://www.dulux.com.pk/en/colour-inspiration/inspiring-decorating-ideas-children-s-bedrooms-0 — explicitly includes 81YY 87/031. This verifies the reference, NOT its HEX or market-wide availability.

All explorer HEX values were deliberately chosen editorial approximations. No other supplied colour name was verified as a regional Dulux product/code. Each is labelled approximate; obtain a physical regional colour card/sample. No Dulux affiliation or ICI corporate-history claim is made.

## Brief discrepancies / review decisions
- 9.8142 L rounds to **9.81 L**, not 9.82 L at two decimals. Container optimization uses the unrounded amount.
- Requested meta description exceeds the existing 160-character limit. The shorter 159-character version retains the surfaces and coverage/coats/wastage/cost intent; no check exception was added. Exact measured length is recorded in review evidence.
- Ali subsequently supplied the exact fifteen FAQ questions; these replace the initial drafted questions in the same order, with concise answers grounded in calculator arithmetic and the verified regional manufacturer sources. The 10×10-room answer explicitly assumes feet, 8 ft walls, no openings/ceiling and 10 m²/L.
- Existing pdf-lib and text-to-PDF layout are reused for a genuine downloadable, paginated PDF. This is not a fake PDF or merely a Print button. Non-Latin project names may be replaced by the existing standard-font export sanitizer; selectable text and browser Print preserve the original text.
- Container objective is lexicographic: least excess, then cost when ALL selected prices are known, then fewest tins. Cheapest-at-any-excess is a different objective and is not claimed. Optimizer supports up to 5,000 L; coats accept 1–100 whole numbers.
- No retailer availability is assumed. Users explicitly select supported candidate sizes; no sizes are selected by default.
- Initial publication was held because the attached owner message concerned PrayerZTime. Ali subsequently approved resuming the Paint brief with “go head” ([pt442u]); push only feat/paint-calculator after passing gates. No PR, main merge or production deployment is included.
