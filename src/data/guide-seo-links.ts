// SEO pass (Nov 2026): extra in-context internal links and authoritative outbound sources for guides.
// Every outbound URL was checked with curl and returned HTTP 200 before it was added.
export type GuideSource = { label: string; href: string };
export type GuideAlsoSee = { before: string; linkLabel: string; href: string; after?: string };

/** Related guide slugs, filled to three for guides that had fewer. Replaces the article's list. */
export const guideRelatedArticleOverrides: Record<string, string[]> = {
  "how-to-calculate-percentage": [
    "how-to-calculate-percentage-change",
    "how-to-calculate-a-discount",
    "how-to-calculate-partial-pressure"
  ],
  "what-is-json": [
    "how-to-convert-csv-to-json",
    "how-to-read-a-jwt",
    "how-to-convert-json-to-csv"
  ],
  "how-to-create-a-utm-url": [
    "how-to-read-a-url",
    "how-to-write-a-url-slug",
    "how-to-check-an-open-graph-preview"
  ],
  "how-to-calculate-age": [
    "how-to-find-graduation-year-by-birthday",
    "how-to-count-days-between-dates",
    "how-to-count-business-days"
  ],
  "how-to-work-with-pdfs-in-your-browser": [
    "how-to-merge-pdf-files",
    "how-to-view-and-remove-pdf-metadata",
    "how-to-convert-text-to-pdf"
  ],
  "how-to-clean-and-compare-text": [
    "how-to-count-characters",
    "how-to-remove-duplicate-lines",
    "how-to-remove-extra-spaces-from-text"
  ],
  "how-to-calculate-a-tip": [
    "how-to-calculate-percentage",
    "how-to-calculate-fantasy-points",
    "how-to-estimate-fuel-cost"
  ],
  "how-to-convert-hex-to-rgb": [
    "how-to-pick-a-color",
    "how-to-convert-jpg-to-png-and-png-to-jpg",
    "how-to-convert-markdown-to-html"
  ],
  "how-to-count-pdf-pages": [
    "how-to-work-with-pdfs-in-your-browser",
    "how-to-convert-pdf-pages-to-jpg",
    "how-to-split-a-pdf"
  ],
  "how-to-add-sales-tax": [
    "how-to-calculate-a-tip",
    "how-to-calculate-percentage",
    "how-to-add-hours-and-minutes"
  ],
  "how-to-convert-units": [
    "how-to-convert-salary-to-hourly",
    "how-to-convert-text-to-morse-code",
    "how-to-convert-roman-numerals"
  ],
  "how-to-count-days-between-dates": [
    "how-to-calculate-age",
    "how-to-count-business-days",
    "how-to-find-graduation-year-by-birthday"
  ],
  "how-to-count-characters": [
    "how-to-clean-and-compare-text",
    "how-to-count-pdf-pages",
    "how-to-remove-extra-spaces-from-text"
  ],
  "how-to-pick-a-color": [
    "how-to-convert-hex-to-rgb",
    "how-to-find-dominant-colors",
    "how-to-convert-jpg-to-png-and-png-to-jpg"
  ],
  "how-to-find-dominant-colors": [
    "how-to-pick-a-color",
    "how-to-convert-hex-to-rgb",
    "how-to-convert-jpg-to-png-and-png-to-jpg"
  ],
  "how-to-scan-a-qr-code": [
    "how-to-make-a-custom-qr-code",
    "how-to-read-text-from-a-photo",
    "how-to-make-a-qr-code"
  ],
  "how-to-generate-a-random-number": [
    "what-is-a-uuid",
    "how-to-turn-a-number-into-words",
    "how-to-add-line-numbers"
  ],
  "how-to-estimate-fuel-cost": [
    "how-to-convert-units",
    "how-to-compare-renting-and-buying",
    "how-to-estimate-unemployment-benefits"
  ],
  "how-to-calculate-an-aspect-ratio": [
    "how-to-calculate-square-footage",
    "how-to-resize-an-image",
    "how-a-home-price-estimate-works"
  ],
  "how-to-percent-encode-a-url": [
    "what-is-base64",
    "how-to-create-a-utm-url",
    "how-to-escape-html"
  ],
  "how-to-read-a-unix-timestamp": [
    "how-to-count-days-between-dates",
    "how-to-read-a-cron-expression",
    "how-to-read-a-jwt"
  ],
  "how-to-escape-html": [
    "what-is-json",
    "what-is-base64",
    "how-to-percent-encode-a-url"
  ],
  "how-to-check-color-contrast": [
    "how-to-convert-hex-to-rgb",
    "how-to-pick-a-color",
    "how-to-translate-urdu-news-into-english"
  ],
  "how-to-write-a-css-gradient": [
    "how-to-pick-a-color",
    "how-to-convert-hex-to-rgb",
    "how-to-write-a-box-shadow"
  ],
  "how-to-write-a-box-shadow": [
    "how-to-write-a-css-gradient",
    "how-to-write-a-gitignore-file",
    "how-to-minify-css"
  ],
  "how-to-convert-json-to-csv": [
    "what-is-json",
    "how-to-convert-csv-to-json",
    "how-to-convert-time-zones"
  ],
  "how-to-convert-csv-to-json": [
    "what-is-json",
    "how-to-convert-json-to-csv",
    "how-to-convert-markdown-to-html"
  ],
  "how-to-test-a-regular-expression": [
    "what-is-json",
    "how-to-read-a-cron-expression",
    "how-to-minify-javascript"
  ],
  "how-to-hash-text": [
    "what-is-a-uuid",
    "how-to-read-a-unix-timestamp",
    "how-to-test-a-regular-expression"
  ],
  "how-to-generate-lorem-ipsum": [
    "how-to-repeat-a-word-or-line",
    "how-to-sort-lines-of-text",
    "how-to-build-an-ai-prompt"
  ],
  "how-to-find-and-replace-text": [
    "how-to-test-a-regular-expression",
    "how-to-change-text-case",
    "how-to-remove-duplicate-lines"
  ],
  "how-to-remove-line-breaks": [
    "how-to-clean-and-compare-text",
    "how-to-remove-duplicate-lines",
    "how-to-sort-lines-of-text"
  ],
  "how-to-add-line-numbers": [
    "how-to-sort-lines-of-text",
    "how-to-turn-a-number-into-words",
    "how-to-remove-line-breaks"
  ],
  "how-to-turn-a-number-into-words": [
    "how-to-add-line-numbers",
    "how-to-generate-a-random-number",
    "how-to-convert-roman-numerals"
  ],
  "how-to-convert-text-to-morse-code": [
    "how-to-convert-markdown-to-html",
    "how-to-convert-roman-numerals",
    "how-to-change-text-case"
  ],
  "how-to-convert-roman-numerals": [
    "how-to-convert-text-to-morse-code",
    "how-to-turn-a-number-into-words",
    "how-to-add-line-numbers"
  ],
  "how-to-generate-a-password": [
    "what-is-a-uuid",
    "how-to-hash-text",
    "how-to-generate-a-random-number"
  ],
  "how-to-build-an-ai-prompt": [
    "how-to-write-an-image-prompt",
    "how-to-write-a-video-prompt",
    "how-to-generate-lorem-ipsum"
  ],
  "how-to-write-a-video-prompt": [
    "how-to-write-an-image-prompt",
    "how-to-build-an-ai-prompt",
    "how-to-write-a-box-shadow"
  ],
  "how-to-shorten-an-article": [
    "what-a-writing-pattern-check-can-tell-you",
    "how-to-translate-urdu-news-into-english",
    "how-to-minify-javascript"
  ],
  "how-to-add-hours-and-minutes": [
    "how-to-count-days-between-dates",
    "how-to-convert-time-zones",
    "how-to-calculate-partial-pressure"
  ],
  "how-to-read-a-cron-expression": [
    "how-to-read-a-unix-timestamp",
    "how-to-convert-time-zones",
    "how-to-test-a-regular-expression"
  ],
  "how-to-rewrite-stock-phrasing": [
    "how-to-shorten-an-article",
    "what-a-writing-pattern-check-can-tell-you",
    "how-to-build-an-ai-prompt"
  ],
  "how-to-find-the-mean-median-and-mode": [
    "how-to-calculate-gpa",
    "how-to-calculate-percentage",
    "how-to-find-graduation-year-by-birthday"
  ],
  "how-to-read-text-from-a-photo": [
    "how-to-compress-an-image-without-losing-quality",
    "how-to-crop-an-image",
    "how-to-resize-an-image"
  ],
  "how-to-turn-a-word-document-into-a-pdf": [
    "how-to-work-with-pdfs-in-your-browser",
    "how-to-convert-text-to-pdf",
    "how-to-convert-images-to-pdf"
  ],
  "how-to-make-a-simple-favicon": [
    "how-to-compress-an-image-without-losing-quality",
    "how-to-resize-an-image",
    "how-to-make-a-qr-code"
  ],
  "how-to-repeat-a-word-or-line": [
    "how-to-generate-lorem-ipsum",
    "how-to-clean-and-compare-text",
    "how-to-remove-line-breaks"
  ],
  "how-to-write-meta-tags": [
    "what-is-robots-txt",
    "how-to-create-a-utm-url",
    "how-to-check-an-open-graph-preview"
  ],
  "how-to-check-an-open-graph-preview": [
    "how-to-write-meta-tags",
    "how-to-read-a-url",
    "how-to-write-a-url-slug"
  ],
  "how-to-write-a-gitignore-file": [
    "what-is-robots-txt",
    "how-to-write-a-css-gradient",
    "how-to-write-a-box-shadow"
  ],
  "how-to-rate-a-password": [
    "how-to-generate-a-password",
    "how-to-hash-text",
    "how-to-draw-names-for-secret-santa"
  ],
  "how-compound-interest-works": [
    "how-much-to-save-for-a-goal",
    "how-a-home-price-estimate-works",
    "how-long-to-pay-off-a-credit-card"
  ],
  "how-a-loan-payment-is-calculated": [
    "how-a-mortgage-payment-is-estimated",
    "how-to-estimate-a-car-loan-payment",
    "how-compound-interest-works"
  ],
  "how-a-mortgage-payment-is-estimated": [
    "how-a-loan-payment-is-calculated",
    "how-to-estimate-a-car-loan-payment",
    "what-a-paycheck-estimate-includes"
  ],
  "how-to-estimate-a-car-loan-payment": [
    "how-a-loan-payment-is-calculated",
    "how-a-mortgage-payment-is-estimated",
    "how-to-estimate-unemployment-benefits"
  ],
  "how-a-home-price-estimate-works": [
    "how-a-mortgage-payment-is-estimated",
    "what-a-paycheck-estimate-includes",
    "how-to-calculate-an-aspect-ratio"
  ],
  "how-to-compare-renting-and-buying": [
    "how-a-mortgage-payment-is-estimated",
    "how-to-estimate-fuel-cost",
    "significant-figures-calculator"
  ],
  "how-to-plan-a-debt-payoff": [
    "how-long-to-pay-off-a-credit-card",
    "how-a-home-price-estimate-works",
    "how-to-compare-renting-and-buying"
  ],
  "how-long-to-pay-off-a-credit-card": [
    "how-to-plan-a-debt-payoff",
    "how-to-calculate-gpa",
    "how-to-calculate-a-discount"
  ],
  "how-much-to-save-for-a-goal": [
    "how-compound-interest-works",
    "how-to-estimate-unemployment-benefits",
    "how-to-calculate-a-discount"
  ],
  "how-to-convert-salary-to-hourly": [
    "what-a-paycheck-estimate-includes",
    "how-long-to-pay-off-a-credit-card",
    "how-to-convert-units"
  ],
  "what-a-paycheck-estimate-includes": [
    "how-to-convert-salary-to-hourly",
    "how-a-home-price-estimate-works",
    "how-to-estimate-a-car-loan-payment"
  ],
  "how-to-calculate-gpa": [
    "how-to-calculate-fantasy-points",
    "how-to-calculate-square-footage",
    "how-to-calculate-age"
  ],
  "how-to-calculate-square-footage": [
    "how-to-calculate-fantasy-points",
    "how-to-calculate-a-tip",
    "how-to-calculate-an-aspect-ratio"
  ],
  "how-to-count-business-days": [
    "how-to-count-days-between-dates",
    "how-to-calculate-age",
    "significant-figures-calculator"
  ],
  "what-is-base64": [
    "how-to-read-a-jwt",
    "how-to-percent-encode-a-url",
    "how-to-escape-html"
  ],
  "what-is-a-uuid": [
    "how-to-generate-a-random-number",
    "how-to-remove-duplicate-lines",
    "how-to-read-a-unix-timestamp"
  ],
  "how-to-read-a-jwt": [
    "what-is-base64",
    "how-to-read-a-unix-timestamp",
    "how-to-convert-json-to-csv"
  ],
  "what-is-robots-txt": [
    "significant-figures-calculator",
    "how-to-copy-text-out-of-a-pdf",
    "how-to-convert-text-to-pdf"
  ],
  "how-to-read-a-url": [
    "how-to-create-a-utm-url",
    "how-to-check-an-open-graph-preview",
    "how-to-scan-a-qr-code"
  ],
  "how-to-write-an-image-prompt": [
    "how-to-write-a-video-prompt",
    "how-to-write-meta-tags",
    "how-to-build-an-ai-prompt"
  ],
  "what-a-writing-pattern-check-can-tell-you": [
    "how-to-translate-urdu-news-into-english",
    "how-to-shorten-an-article",
    "how-to-check-color-contrast"
  ],
  "how-to-convert-time-zones": [
    "how-to-convert-html-to-markdown",
    "how-to-convert-hex-to-rgb",
    "how-to-convert-json-to-csv"
  ],
  "how-to-click-faster": [
    "how-to-make-a-qr-code",
    "how-to-test-a-regular-expression",
    "how-to-find-the-mean-median-and-mode"
  ]
};

/** Contextual "also see" links for guides that had none. */
export const guideExtraAlsoSee: Record<string, GuideAlsoSee[]> = {
  "how-to-count-days-between-dates": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Age Calculator",
      "href": "/tools/age-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Calculate Percentage Change (Increase and Decrease)",
      "href": "/guides/how-to-calculate-percentage-change",
      "after": "."
    }
  ],
  "how-to-pick-a-color": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Hex to RGB",
      "href": "/tools/hex-to-rgb",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Make a YouTube Banner at 2560 × 1440 That Fits Every Screen",
      "href": "/guides/how-to-make-a-youtube-banner",
      "after": "."
    }
  ],
  "how-to-find-dominant-colors": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Color Picker",
      "href": "/tools/color-picker",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Crop an Image to a Square, 4:3 or 16:9 Frame",
      "href": "/guides/how-to-crop-an-image",
      "after": "."
    }
  ],
  "how-to-generate-a-random-number": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "UUID Generator",
      "href": "/tools/uuid-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Generate a Password in the Browser",
      "href": "/guides/how-to-generate-a-password",
      "after": "."
    }
  ],
  "how-to-calculate-an-aspect-ratio": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Square Footage Calculator",
      "href": "/tools/square-footage-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Calculate Partial Pressure with Dalton’s Law and the Ideal Gas Law",
      "href": "/guides/how-to-calculate-partial-pressure",
      "after": "."
    }
  ],
  "how-to-percent-encode-a-url": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "URL Parser",
      "href": "/tools/url-parser",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write One CSS Box Shadow",
      "href": "/guides/how-to-write-a-box-shadow",
      "after": "."
    }
  ],
  "how-to-read-a-unix-timestamp": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Time Zone Converter",
      "href": "/tools/time-zone-converter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write a .gitignore File",
      "href": "/guides/how-to-write-a-gitignore-file",
      "after": "."
    }
  ],
  "how-to-escape-html": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "HTML Minifier",
      "href": "/tools/html-minifier",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Convert HTML to Markdown Cleanly",
      "href": "/guides/how-to-convert-html-to-markdown",
      "after": "."
    }
  ],
  "how-to-check-color-contrast": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Color Picker",
      "href": "/tools/color-picker",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to List the Dominant Colors in an Image",
      "href": "/guides/how-to-find-dominant-colors",
      "after": "."
    }
  ],
  "how-to-write-a-css-gradient": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Color Picker",
      "href": "/tools/color-picker",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write a .gitignore File",
      "href": "/guides/how-to-write-a-gitignore-file",
      "after": "."
    }
  ],
  "how-to-write-a-box-shadow": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "CSS Gradient Generator",
      "href": "/tools/css-gradient-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write a Video Prompt Without Rendering a Clip",
      "href": "/guides/how-to-write-a-video-prompt",
      "after": "."
    }
  ],
  "how-to-convert-csv-to-json": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "JSON to CSV",
      "href": "/tools/json-to-csv",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Convert HTML to Markdown Cleanly",
      "href": "/guides/how-to-convert-html-to-markdown",
      "after": "."
    }
  ],
  "how-to-generate-lorem-ipsum": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Word Counter",
      "href": "/tools/word-counter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Generate a Random Number",
      "href": "/guides/how-to-generate-a-random-number",
      "after": "."
    }
  ],
  "how-to-find-and-replace-text": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Regex Tester",
      "href": "/tools/regex-tester",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to List the Dominant Colors in an Image",
      "href": "/guides/how-to-find-dominant-colors",
      "after": "."
    }
  ],
  "how-to-add-line-numbers": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Find and Replace",
      "href": "/tools/find-and-replace",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Remove Duplicate Lines from a List or Text",
      "href": "/guides/how-to-remove-duplicate-lines",
      "after": "."
    }
  ],
  "how-to-turn-a-number-into-words": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Roman Numeral Converter",
      "href": "/tools/roman-numeral-converter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Sort Lines of Text Alphabetically, by Number or by Length",
      "href": "/guides/how-to-sort-lines-of-text",
      "after": "."
    }
  ],
  "how-to-convert-text-to-morse-code": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Roman Numeral Converter",
      "href": "/tools/roman-numeral-converter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Remove Extra Spaces, Tabs and Blank Lines from Text",
      "href": "/guides/how-to-remove-extra-spaces-from-text",
      "after": "."
    }
  ],
  "how-to-convert-roman-numerals": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Number to Words Converter",
      "href": "/tools/number-to-words",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Change Text Case: Upper, Lower, Title, camelCase and More",
      "href": "/guides/how-to-change-text-case",
      "after": "."
    }
  ],
  "how-to-build-an-ai-prompt": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Prompt to Image Generator",
      "href": "/tools/prompt-to-image",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Generate a Password in the Browser",
      "href": "/guides/how-to-generate-a-password",
      "after": "."
    }
  ],
  "how-to-write-a-video-prompt": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Prompt to Image Generator",
      "href": "/tools/prompt-to-image",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write Meta Tags",
      "href": "/guides/how-to-write-meta-tags",
      "after": "."
    }
  ],
  "how-to-shorten-an-article": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "AI Article Detector",
      "href": "/tools/ai-article-detector",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Compress an Image Without Losing Quality",
      "href": "/guides/how-to-compress-an-image-without-losing-quality",
      "after": "."
    }
  ],
  "how-to-add-hours-and-minutes": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Date Difference Calculator",
      "href": "/tools/date-difference-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Add Sales Tax to a Price",
      "href": "/guides/how-to-add-sales-tax",
      "after": "."
    }
  ],
  "how-to-read-a-cron-expression": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Unix Timestamp Converter",
      "href": "/tools/timestamp-converter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Read a JWT Without Treating It as Verified",
      "href": "/guides/how-to-read-a-jwt",
      "after": "."
    }
  ],
  "how-to-rewrite-stock-phrasing": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "AI Article Compressor",
      "href": "/tools/ai-article-compressor",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write a Video Prompt Without Rendering a Clip",
      "href": "/guides/how-to-write-a-video-prompt",
      "after": "."
    }
  ],
  "how-to-find-the-mean-median-and-mode": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "GPA Calculator",
      "href": "/tools/gpa-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Click Faster: Average CPS, Jitter and Butterfly Clicking",
      "href": "/guides/how-to-click-faster",
      "after": "."
    }
  ],
  "how-to-read-text-from-a-photo": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "PDF to Text",
      "href": "/tools/pdf-to-text",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Read a QR Code from the Camera or an Image",
      "href": "/guides/how-to-scan-a-qr-code",
      "after": "."
    }
  ],
  "how-to-turn-a-word-document-into-a-pdf": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Text to PDF",
      "href": "/tools/text-to-pdf",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Copy Text Out of a PDF as Plain Text",
      "href": "/guides/how-to-copy-text-out-of-a-pdf",
      "after": "."
    }
  ],
  "how-to-make-a-simple-favicon": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Image Resizer",
      "href": "/tools/image-resizer",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Make a YouTube Banner at 2560 × 1440 That Fits Every Screen",
      "href": "/guides/how-to-make-a-youtube-banner",
      "after": "."
    }
  ],
  "how-to-repeat-a-word-or-line": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Lorem Ipsum Generator",
      "href": "/tools/lorem-ipsum-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Add Line Numbers",
      "href": "/guides/how-to-add-line-numbers",
      "after": "."
    }
  ],
  "how-to-write-meta-tags": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Robots.txt Generator",
      "href": "/tools/robots-txt-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write an Image Prompt Without Creating an Image",
      "href": "/guides/how-to-write-an-image-prompt",
      "after": "."
    }
  ],
  "how-to-check-an-open-graph-preview": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Meta Tag Generator",
      "href": "/tools/meta-tag-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Create a UTM URL",
      "href": "/guides/how-to-create-a-utm-url",
      "after": "."
    }
  ],
  "how-to-write-a-gitignore-file": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Robots.txt Generator",
      "href": "/tools/robots-txt-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Minify HTML Without Breaking Your Page",
      "href": "/guides/how-to-minify-html",
      "after": "."
    }
  ],
  "how-to-rate-a-password": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Password Generator",
      "href": "/tools/password-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Check Contrast Between Two Colors",
      "href": "/guides/how-to-check-color-contrast",
      "after": "."
    }
  ],
  "how-compound-interest-works": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Savings Goal Calculator",
      "href": "/tools/savings-goal-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How a Loan Payment Is Calculated",
      "href": "/guides/how-a-loan-payment-is-calculated",
      "after": "."
    }
  ],
  "how-to-estimate-a-car-loan-payment": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Loan Calculator",
      "href": "/tools/loan-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Estimate a Fuel Cost",
      "href": "/guides/how-to-estimate-fuel-cost",
      "after": "."
    }
  ],
  "how-a-home-price-estimate-works": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Mortgage Calculator",
      "href": "/tools/mortgage-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How Compound Interest Grows Your Money",
      "href": "/guides/how-compound-interest-works",
      "after": "."
    }
  ],
  "how-to-compare-renting-and-buying": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Mortgage Calculator",
      "href": "/tools/mortgage-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Add or Subtract Hours and Minutes",
      "href": "/guides/how-to-add-hours-and-minutes",
      "after": "."
    }
  ],
  "how-much-to-save-for-a-goal": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Compound Interest Calculator",
      "href": "/tools/compound-interest-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Add Sales Tax to a Price",
      "href": "/guides/how-to-add-sales-tax",
      "after": "."
    }
  ],
  "how-to-convert-salary-to-hourly": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Paycheck Estimator",
      "href": "/tools/paycheck-estimator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Convert Text to Morse Code",
      "href": "/guides/how-to-convert-text-to-morse-code",
      "after": "."
    }
  ],
  "what-a-paycheck-estimate-includes": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Hourly Wage Calculator",
      "href": "/tools/hourly-wage-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Estimate Unemployment Benefits in California, New York, Texas and Florida",
      "href": "/guides/how-to-estimate-unemployment-benefits",
      "after": "."
    }
  ],
  "how-to-calculate-square-footage": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Unit Converter",
      "href": "/tools/unit-converter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Calculate a GPA",
      "href": "/guides/how-to-calculate-gpa",
      "after": "."
    }
  ],
  "how-to-count-business-days": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Date Difference Calculator",
      "href": "/tools/date-difference-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Count the Pages in a PDF",
      "href": "/guides/how-to-count-pdf-pages",
      "after": "."
    }
  ],
  "what-is-a-uuid": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Hash Generator",
      "href": "/tools/hash-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Read a Cron Expression",
      "href": "/guides/how-to-read-a-cron-expression",
      "after": "."
    }
  ],
  "how-to-read-a-jwt": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Base64 Encoder",
      "href": "/tools/base64-encoder",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Turn CSV into JSON",
      "href": "/guides/how-to-convert-csv-to-json",
      "after": "."
    }
  ],
  "what-is-robots-txt": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "URL Parser",
      "href": "/tools/url-parser",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Rate a Password",
      "href": "/guides/how-to-rate-a-password",
      "after": "."
    }
  ],
  "how-to-read-a-url": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "UTM Builder",
      "href": "/tools/utm-builder",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Write a URL Slug That People and Search Engines Can Read",
      "href": "/guides/how-to-write-a-url-slug",
      "after": "."
    }
  ],
  "how-to-write-an-image-prompt": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "AI Prompt Generator",
      "href": "/tools/ai-prompt-generator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Convert PDF Pages to JPG Images",
      "href": "/guides/how-to-convert-pdf-pages-to-jpg",
      "after": "."
    }
  ],
  "what-a-writing-pattern-check-can-tell-you": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Word Counter",
      "href": "/tools/word-counter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Check an Open Graph Preview",
      "href": "/guides/how-to-check-an-open-graph-preview",
      "after": "."
    }
  ],
  "how-to-convert-time-zones": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Unix Timestamp Converter",
      "href": "/tools/timestamp-converter",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Turn CSV into JSON",
      "href": "/guides/how-to-convert-csv-to-json",
      "after": "."
    }
  ],
  "how-to-click-faster": [
    {
      "before": "For a closely related task, try the",
      "linkLabel": "Average Calculator",
      "href": "/tools/average-calculator",
      "after": "."
    },
    {
      "before": "You may also find this walkthrough useful:",
      "linkLabel": "How to Calculate a GPA",
      "href": "/guides/how-to-calculate-gpa",
      "after": "."
    }
  ]
};

/** One or two official or reference sources per guide. */
export const guideSources: Record<string, GuideSource[]> = {
  "how-to-calculate-percentage": [
    {
      "label": "Understand percent (OpenStax Prealgebra 2e)",
      "href": "https://openstax.org/books/prealgebra-2e/pages/6-1-understand-percent"
    }
  ],
  "how-to-compress-an-image-without-losing-quality": [
    {
      "label": "Image file type and format guide (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
    },
    {
      "label": "Optimize images (web.dev)",
      "href": "https://web.dev/learn/images"
    }
  ],
  "what-is-json": [
    {
      "label": "RFC 8259: The JSON Data Interchange Format (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc8259"
    },
    {
      "label": "JSON (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
    }
  ],
  "how-to-create-a-utm-url": [
    {
      "label": "Collect campaign data with custom URLs (Google Analytics Help)",
      "href": "https://support.google.com/analytics/answer/10917952"
    }
  ],
  "how-to-calculate-age": [
    {
      "label": "Date (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
    }
  ],
  "how-to-work-with-pdfs-in-your-browser": [
    {
      "label": "PDF family format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000030.shtml"
    }
  ],
  "how-to-clean-and-compare-text": [
    {
      "label": "diff (GNU Diffutils manual)",
      "href": "https://www.gnu.org/software/diffutils/manual/diffutils.html"
    }
  ],
  "how-to-calculate-a-tip": [
    {
      "label": "Topic 761: Tips, withholding and reporting (IRS)",
      "href": "https://www.irs.gov/taxtopics/tc761"
    }
  ],
  "how-to-convert-hex-to-rgb": [
    {
      "label": "<color> data type (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    },
    {
      "label": "CSS Color Module Level 4 (W3C)",
      "href": "https://www.w3.org/TR/css-color-4/"
    }
  ],
  "how-to-count-pdf-pages": [
    {
      "label": "PDF 1.7 / ISO 32000-1 format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml"
    }
  ],
  "how-to-add-sales-tax": [
    {
      "label": "Sales tax (Investopedia)",
      "href": "https://www.investopedia.com/terms/s/salestax.asp"
    }
  ],
  "how-to-convert-units": [
    {
      "label": "SI units (NIST)",
      "href": "https://www.nist.gov/pml/owm/metric-si/si-units"
    },
    {
      "label": "Unit conversion (NIST)",
      "href": "https://www.nist.gov/pml/owm/metric-si/unit-conversion"
    }
  ],
  "how-to-count-days-between-dates": [
    {
      "label": "Date (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
    }
  ],
  "how-to-count-characters": [
    {
      "label": "String length (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length"
    }
  ],
  "how-to-pick-a-color": [
    {
      "label": "<color> data type (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    }
  ],
  "how-to-find-dominant-colors": [
    {
      "label": "Canvas API (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
    }
  ],
  "how-to-scan-a-qr-code": [
    {
      "label": "QR code history and standards (DENSO WAVE)",
      "href": "https://www.qrcode.com/en/about/"
    }
  ],
  "how-to-generate-a-random-number": [
    {
      "label": "Crypto.getRandomValues() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
    }
  ],
  "how-to-estimate-fuel-cost": [
    {
      "label": "Fuel economy guide (fueleconomy.gov)",
      "href": "https://www.fueleconomy.gov/"
    }
  ],
  "how-to-calculate-an-aspect-ratio": [
    {
      "label": "aspect-ratio (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio"
    }
  ],
  "how-to-percent-encode-a-url": [
    {
      "label": "Percent-encoding (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding"
    },
    {
      "label": "URL Standard (WHATWG)",
      "href": "https://url.spec.whatwg.org/"
    }
  ],
  "how-to-read-a-unix-timestamp": [
    {
      "label": "Date.now() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now"
    }
  ],
  "how-to-escape-html": [
    {
      "label": "Character reference (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/Character_reference"
    },
    {
      "label": "HTML Standard: named character references (WHATWG)",
      "href": "https://html.spec.whatwg.org/multipage/named-characters.html"
    }
  ],
  "how-to-check-color-contrast": [
    {
      "label": "Understanding WCAG contrast minimum (W3C)",
      "href": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
    }
  ],
  "how-to-write-a-css-gradient": [
    {
      "label": "linear-gradient() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient"
    },
    {
      "label": "CSS Images Module Level 3 (W3C)",
      "href": "https://www.w3.org/TR/css-images-3/"
    }
  ],
  "how-to-write-a-box-shadow": [
    {
      "label": "box-shadow (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow"
    }
  ],
  "how-to-convert-json-to-csv": [
    {
      "label": "RFC 4180: CSV format (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc4180"
    }
  ],
  "how-to-convert-csv-to-json": [
    {
      "label": "RFC 4180: CSV format (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc4180"
    },
    {
      "label": "RFC 8259: JSON (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc8259"
    }
  ],
  "how-to-test-a-regular-expression": [
    {
      "label": "Regular expressions guide (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
    }
  ],
  "how-to-hash-text": [
    {
      "label": "SubtleCrypto.digest() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest"
    },
    {
      "label": "Secure Hash Standard FIPS 180-4 (NIST)",
      "href": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
    }
  ],
  "how-to-generate-lorem-ipsum": [
    {
      "label": "Lorem ipsum (Wikipedia)",
      "href": "https://en.wikipedia.org/wiki/Lorem_ipsum"
    }
  ],
  "how-to-find-and-replace-text": [
    {
      "label": "String.prototype.replaceAll() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll"
    }
  ],
  "how-to-remove-line-breaks": [
    {
      "label": "white-space (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/white-space"
    }
  ],
  "how-to-add-line-numbers": [
    {
      "label": "<ol>: ordered list element (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
    }
  ],
  "how-to-turn-a-number-into-words": [
    {
      "label": "English numerals (Wikipedia)",
      "href": "https://en.wikipedia.org/wiki/English_numerals"
    }
  ],
  "how-to-convert-text-to-morse-code": [
    {
      "label": "International Morse code, ITU-R M.1677 (ITU)",
      "href": "https://www.itu.int/rec/R-REC-M.1677-1-200910-I/"
    }
  ],
  "how-to-convert-roman-numerals": [
    {
      "label": "Roman numerals (Wikipedia)",
      "href": "https://en.wikipedia.org/wiki/Roman_numerals"
    }
  ],
  "how-to-generate-a-password": [
    {
      "label": "NIST SP 800-63B Digital Identity Guidelines",
      "href": "https://pages.nist.gov/800-63-4/sp800-63b.html"
    },
    {
      "label": "Use strong passwords (CISA)",
      "href": "https://www.cisa.gov/secure-our-world/use-strong-passwords"
    }
  ],
  "how-to-build-an-ai-prompt": [
    {
      "label": "Prompt design strategies (Google AI for Developers)",
      "href": "https://aistudio.google.com/docs/prompting-strategies"
    }
  ],
  "how-to-write-a-video-prompt": [
    {
      "label": "Prompt design strategies (Google AI for Developers)",
      "href": "https://aistudio.google.com/docs/prompting-strategies"
    }
  ],
  "how-to-shorten-an-article": [
    {
      "label": "Concise writing (Purdue OWL)",
      "href": "https://owl.purdue.edu/owl/general_writing/academic_writing/conciseness/index.html"
    }
  ],
  "how-to-add-hours-and-minutes": [
    {
      "label": "Time measurement (NIST)",
      "href": "https://www.nist.gov/pml/time-and-frequency-division"
    }
  ],
  "how-to-read-a-cron-expression": [
    {
      "label": "crontab(5) manual page (man7.org)",
      "href": "https://man7.org/linux/man-pages/man5/crontab.5.html"
    }
  ],
  "how-to-rewrite-stock-phrasing": [
    {
      "label": "Plain language guide (digital.gov)",
      "href": "https://digital.gov/guides/plain-language"
    }
  ],
  "how-to-find-the-mean-median-and-mode": [
    {
      "label": "Measures of central tendency (NIST/SEMATECH e-Handbook)",
      "href": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm"
    }
  ],
  "how-to-read-text-from-a-photo": [
    {
      "label": "Tesseract OCR documentation",
      "href": "https://tesseract-ocr.github.io/"
    }
  ],
  "how-to-turn-a-word-document-into-a-pdf": [
    {
      "label": "Save or convert to PDF (Microsoft Support)",
      "href": "https://support.microsoft.com/en-us/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps"
    }
  ],
  "how-to-make-a-simple-favicon": [
    {
      "label": "Define a favicon to show in search results (Google Search Central)",
      "href": "https://developers.google.com/search/docs/appearance/favicon-in-search"
    }
  ],
  "how-to-repeat-a-word-or-line": [
    {
      "label": "String.prototype.repeat() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"
    }
  ],
  "how-to-write-meta-tags": [
    {
      "label": "Meta tags Google supports (Google Search Central)",
      "href": "https://developers.google.com/search/docs/crawling-indexing/special-tags"
    },
    {
      "label": "Control your title links (Google Search Central)",
      "href": "https://developers.google.com/search/docs/appearance/title-link"
    }
  ],
  "how-to-check-an-open-graph-preview": [
    {
      "label": "The Open Graph protocol",
      "href": "https://ogp.me/"
    }
  ],
  "how-to-write-a-gitignore-file": [
    {
      "label": "gitignore documentation (Git)",
      "href": "https://git-scm.com/docs/gitignore"
    }
  ],
  "how-to-rate-a-password": [
    {
      "label": "NIST SP 800-63B Digital Identity Guidelines",
      "href": "https://pages.nist.gov/800-63-4/sp800-63b.html"
    }
  ],
  "how-compound-interest-works": [
    {
      "label": "Compound interest calculator (Investor.gov, SEC)",
      "href": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
    }
  ],
  "how-a-loan-payment-is-calculated": [
    {
      "label": "Amortization (Investopedia)",
      "href": "https://www.investopedia.com/terms/a/amortization.asp"
    }
  ],
  "how-a-mortgage-payment-is-estimated": [
    {
      "label": "Buying a home (U.S. Department of Housing and Urban Development)",
      "href": "https://www.hud.gov/topics/buying_a_home"
    }
  ],
  "how-to-estimate-a-car-loan-payment": [
    {
      "label": "Amortization (Investopedia)",
      "href": "https://www.investopedia.com/terms/a/amortization.asp"
    }
  ],
  "how-a-home-price-estimate-works": [
    {
      "label": "Buying a home (U.S. Department of Housing and Urban Development)",
      "href": "https://www.hud.gov/topics/buying_a_home"
    }
  ],
  "how-to-compare-renting-and-buying": [
    {
      "label": "Home buying programs (USA.gov)",
      "href": "https://www.usa.gov/buying-home-programs"
    }
  ],
  "how-to-plan-a-debt-payoff": [
    {
      "label": "Amortization (Investopedia)",
      "href": "https://www.investopedia.com/terms/a/amortization.asp"
    }
  ],
  "how-long-to-pay-off-a-credit-card": [
    {
      "label": "Annual percentage rate (Investopedia)",
      "href": "https://www.investopedia.com/terms/a/apr.asp"
    }
  ],
  "how-much-to-save-for-a-goal": [
    {
      "label": "Saving and investing (Investor.gov, SEC)",
      "href": "https://www.investor.gov/introduction-investing"
    }
  ],
  "how-to-convert-salary-to-hourly": [
    {
      "label": "Salary finder (CareerOneStop, U.S. Department of Labor)",
      "href": "https://www.careeronestop.org/Toolkit/Wages/find-salary.aspx"
    }
  ],
  "what-a-paycheck-estimate-includes": [
    {
      "label": "Tax Withholding Estimator (IRS)",
      "href": "https://www.irs.gov/individuals/tax-withholding-estimator"
    }
  ],
  "how-to-calculate-gpa": [
    {
      "label": "How to convert your GPA to a 4.0 scale (College Board BigFuture)",
      "href": "https://bigfuture.collegeboard.org/plan-for-college/get-started/how-to-convert-gpa-4.0-scale"
    }
  ],
  "how-to-calculate-square-footage": [
    {
      "label": "Unit conversion (NIST)",
      "href": "https://www.nist.gov/pml/owm/metric-si/unit-conversion"
    }
  ],
  "how-to-count-business-days": [
    {
      "label": "Federal holidays (U.S. Office of Personnel Management)",
      "href": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"
    }
  ],
  "what-is-base64": [
    {
      "label": "Base64 (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/Base64"
    },
    {
      "label": "RFC 4648: Base16, Base32 and Base64 encodings (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc4648"
    }
  ],
  "what-is-a-uuid": [
    {
      "label": "RFC 9562: Universally Unique IDentifiers (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc9562"
    },
    {
      "label": "Crypto.randomUUID() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID"
    }
  ],
  "how-to-read-a-jwt": [
    {
      "label": "RFC 7519: JSON Web Token (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc7519"
    }
  ],
  "what-is-robots-txt": [
    {
      "label": "Introduction to robots.txt (Google Search Central)",
      "href": "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
    },
    {
      "label": "RFC 9309: Robots Exclusion Protocol (IETF)",
      "href": "https://www.rfc-editor.org/rfc/rfc9309"
    }
  ],
  "how-to-read-a-url": [
    {
      "label": "What is a URL? (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
    },
    {
      "label": "URL Standard (WHATWG)",
      "href": "https://url.spec.whatwg.org/"
    }
  ],
  "how-to-write-an-image-prompt": [
    {
      "label": "Imagen prompt guide (Google AI for Developers)",
      "href": "https://aistudio.google.com/docs/imagen"
    }
  ],
  "what-a-writing-pattern-check-can-tell-you": [
    {
      "label": "Creating helpful, reliable, people-first content (Google Search Central)",
      "href": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
    }
  ],
  "how-to-convert-time-zones": [
    {
      "label": "Intl.DateTimeFormat (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"
    },
    {
      "label": "Time zone database (IANA)",
      "href": "https://www.iana.org/time-zones"
    }
  ],
  "how-to-click-faster": [
    {
      "label": "Element: click event (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event"
    }
  ],
  "significant-figures-calculator": [
    {
      "label": "Guide for the Use of the SI, rounding numbers (NIST SP 811)",
      "href": "https://www.nist.gov/pml/special-publication-811"
    }
  ],
  "how-to-calculate-percentage-change": [
    {
      "label": "Understand percent (OpenStax Prealgebra 2e)",
      "href": "https://openstax.org/books/prealgebra-2e/pages/6-1-understand-percent"
    }
  ],
  "how-to-calculate-a-discount": [
    {
      "label": "Understand percent (OpenStax Prealgebra 2e)",
      "href": "https://openstax.org/books/prealgebra-2e/pages/6-1-understand-percent"
    }
  ],
  "how-to-change-text-case": [
    {
      "label": "text-transform (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-transform"
    }
  ],
  "how-to-write-a-url-slug": [
    {
      "label": "URL structure best practices (Google Search Central)",
      "href": "https://developers.google.com/search/docs/crawling-indexing/url-structure"
    }
  ],
  "how-to-remove-duplicate-lines": [
    {
      "label": "Set (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
    }
  ],
  "how-to-remove-extra-spaces-from-text": [
    {
      "label": "String.prototype.trim() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim"
    }
  ],
  "how-to-resize-an-image": [
    {
      "label": "Responsive images (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
    }
  ],
  "how-to-crop-an-image": [
    {
      "label": "Canvas drawImage() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage"
    }
  ],
  "how-to-convert-jpg-to-png-and-png-to-jpg": [
    {
      "label": "Image file type and format guide (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
    }
  ],
  "how-to-convert-pdf-pages-to-jpg": [
    {
      "label": "PDF.js (Mozilla)",
      "href": "https://mozilla.github.io/pdf.js/"
    }
  ],
  "how-to-make-a-qr-code": [
    {
      "label": "About QR codes (DENSO WAVE)",
      "href": "https://www.qrcode.com/en/about/"
    }
  ],
  "how-to-sort-lines-of-text": [
    {
      "label": "Array.prototype.sort() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
    },
    {
      "label": "Intl.Collator (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator"
    }
  ],
  "how-to-minify-html": [
    {
      "label": "Minification (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/Minification"
    }
  ],
  "how-to-minify-css": [
    {
      "label": "Minify CSS (Chrome for Developers)",
      "href": "https://developer.chrome.com/docs/lighthouse/performance/unminified-css"
    }
  ],
  "how-to-minify-javascript": [
    {
      "label": "Minification (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/Minification"
    }
  ],
  "how-to-convert-images-to-pdf": [
    {
      "label": "PDF 1.7 / ISO 32000-1 format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml"
    }
  ],
  "how-to-merge-pdf-files": [
    {
      "label": "PDF 1.7 / ISO 32000-1 format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml"
    },
    {
      "label": "pdf-lib documentation",
      "href": "https://pdf-lib.js.org/"
    }
  ],
  "how-to-split-a-pdf": [
    {
      "label": "PDF 1.7 / ISO 32000-1 format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml"
    }
  ],
  "how-to-make-a-custom-qr-code": [
    {
      "label": "About QR codes (DENSO WAVE)",
      "href": "https://www.qrcode.com/en/about/"
    }
  ],
  "how-to-copy-text-out-of-a-pdf": [
    {
      "label": "PDF.js (Mozilla)",
      "href": "https://mozilla.github.io/pdf.js/"
    }
  ],
  "how-to-view-and-remove-pdf-metadata": [
    {
      "label": "PDF 1.7 / ISO 32000-1 format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml"
    }
  ],
  "how-to-convert-text-to-pdf": [
    {
      "label": "PDF 1.7 / ISO 32000-1 format description (Library of Congress)",
      "href": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml"
    }
  ],
  "how-to-convert-markdown-to-html": [
    {
      "label": "CommonMark specification",
      "href": "https://spec.commonmark.org/"
    }
  ],
  "how-to-convert-html-to-markdown": [
    {
      "label": "CommonMark specification",
      "href": "https://spec.commonmark.org/"
    }
  ],
  "how-to-make-a-youtube-banner": [
    {
      "label": "Manage your channel banner (YouTube Help)",
      "href": "https://support.google.com/youtube/answer/2657964"
    }
  ],
  "how-to-calculate-partial-pressure": [
    {
      "label": "Gas mixtures and Dalton's law (OpenStax Chemistry 2e)",
      "href": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"
    },
    {
      "label": "NIST Chemistry WebBook",
      "href": "https://webbook.nist.gov/chemistry/"
    }
  ],
  "how-to-calculate-fantasy-points": [
    {
      "label": "Fantasy Premier League official rules",
      "href": "https://fantasy.premierleague.com/help/rules"
    }
  ],
  "how-to-find-graduation-year-by-birthday": [
    {
      "label": "Compulsory school attendance by state (NCES)",
      "href": "https://nces.ed.gov/programs/statereform/tab5_1.asp"
    }
  ],
  "how-to-estimate-unemployment-benefits": [
    {
      "label": "Find unemployment benefits (CareerOneStop, U.S. Department of Labor)",
      "href": "https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/find-unemployment-benefits.aspx"
    }
  ],
  "how-to-draw-names-for-secret-santa": [
    {
      "label": "Crypto.getRandomValues() (MDN)",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
    }
  ],
  "how-to-translate-urdu-news-into-english": [
    {
      "label": "Urdu (Wikipedia)",
      "href": "https://en.wikipedia.org/wiki/Urdu"
    }
  ]
};
