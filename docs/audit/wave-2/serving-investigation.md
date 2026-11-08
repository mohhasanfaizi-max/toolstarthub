# Item 1 investigation — recorded before source changes

Source: actual saved wave-1 successful local route response, copied verbatim as JSON values to evidence/off-wave1-saved-mapped-response.json. Live raw OFF search attempted twice in wave 2: HTTP 503 with upstream anonymous/high-demand notice; stopped. No rate-limit/auth bypass. Raw serving_quantity is not retained by the old mapper and cannot be recovered: NEEDS OWNER for original raw-field provenance. No serving_quantity value is invented.

## Exact existing path
- route mapper copies serving_size (or the fallback “100 g (as listed per 100 g)”) into label, fixes servingGrams=100, copies energy-kcal_100g (or ambiguous energy-kcal fallback), proteins/carbohydrates/fat_100g, optional fiber and micro values. Required macros missing => excludes product; zero is accepted. numberFrom also currently turns empty strings into zero.
- scaleFood: serving factor=selected count; g/ml factor=amount/servingGrams. Logged grams=servingGrams*factor; calories/macros=factor*food values rounded to 1 decimal. Both g and ml use mass arithmetic, implicitly assuming 1ml=1g; no density is available.
- UI addFood passes selected amount and unit to scaleFood and stores the resulting snapshot; saveEditedEntry reconstructs unknown OFF foods from that snapshot (not a refreshed API product). totalsFromEntries sums stored numbers. alma.ts defines nutrient/reference units and calculator math; it does not interpret package servings.

## Six distinct real saved product records
| Saved product ID | Product | Displayed label | Intended g if parsable | Old kcal at 1 serving | Consistent kcal | Difference kcal | Relative overstatement |
|---|---|---|---:|---:|---:|---:|---:|
| off-3017620422003-nutella | Nutella | 100 g (as listed per 100 g) | 100 | 539 | 539.0 | 0.0 | 0.0 |
| off-3017620425035-nutella | Nutella | 33 | 100 | 539 | 539.0 | 0.0 | 0.0 |
| off-3017620429484-nutella | Nutella | 15g | 15.0 | 539 | 80.85 | 458.15 | 566.67 |
| off-8000500426494-nutella-plant-based | Nutella Plant-Based | 15 gram | 15.0 | 534 | 80.1 | 453.9 | 566.67 |
| off-80176800-nutella | Nutella | 1 portion (40 g) | 40.0 | 533.33 | 213.332 | 319.998 | 150.0 |
| off-8000500310427-biscuits-nutella-biscuits-noisettes-et-cacao-x22-304g | Biscuits NUTELLA Biscuits Noisettes et Cacao x22 - 304g | 1 portion (13.8 g) | 13.8 | 515 | 71.07 | 443.93 | 624.64 |

**Confirmed:** Nutella record ending 3017620429484 displays 15g but logs 100g and 539 kcal for “1 serving”; 15g of this listed 539 kcal/100g is 80.85 kcal, displayed 80.9. Old value is 6.6667× intended energy (+458.15 kcal, +566.67%). First record has a fallback 100g label and correctly logs 539 kcal for that stated basis. A numeric label “33” has no unit and cannot be assumed grams; use 100g fallback.

The saved results contain both explicit original serving_size labels (15g, 15 gram, 1 portion (40 g), 1 portion (13.8 g)) and an absent/blank-size fallback. Because old mapper generated this fallback only for absent/blank serving_size, its exact source spelling is unknown but lack of a usable size is established. Raw serving_quantity presence/values are unknown, so synthetic quantity tests must be clearly marked synthetic, not real-product observations.

## Planned bounded correction
Parse a positive, unambiguous gram serving or explicitly gram-unit serving_quantity; otherwise use an exact 100 g label and 100g basis. Multiply every retained nutrient by servingGrams/100. Require explicit per-100g energy/macros; do not mix ambiguous energy with per-100g macros. Do not change the sample catalog/custom foods/storage schema. Prevent the UI from mass-converting packaged entries entered in ml without density. Existing historic diary snapshots remain untouched.

## Saved-data proposal (not implemented)
Old stored OFF serving entries may contain values for 100g when the user meant a smaller labelled serving. Stored snapshots contain the logged grams/nutrients, not the original package label/serving_quantity, so automatic correction cannot reliably determine intent. Ask Ali to approve an opt-in review/export workflow: list historical OFF entries; show stored amounts; let user confirm intended grams from their own label; preview changes and require explicit confirmation per entry. Never recalculate whole diary silently.

## Primary schema clarification before implementation
Read OFF's primary Product-Nutrition schema:
https://openfoodfacts.github.io/documentation/docs/Product-Opener/schemas/schemas/product_nutrition/
It explicitly defines `_100g` as per 100g **or per 100ml for liquids**, and weight nutrients (including sodium/vitamins/minerals) in normalized grams. The old mapper copies these micronutrient grams directly into Alma mg/µg fields: a second confirmed basis/unit mismatch. Convert normalized grams to Alma mg/µg when mapping new results; never stored entries.

**Conflict with requested fallback:** relabelling an explicitly volume-based product as 100g would invent density. Until Ali approves a genuine volume-basis model, exclude clearly volume-based products from mapped search results (rather than log false grams), explain this in the packaged-results UI, and mark volume support NEEDS OWNER. Non-volume unparseable/missing servings still use exactly “100 g”. This is a conservative accuracy exception, not an assumed 1ml=1g conversion. Generic OFF rows with no mass/volume metadata remain limited by source completeness; check package labels.
