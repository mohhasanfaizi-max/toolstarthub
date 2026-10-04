/**
 * When each guide first went public and when its text last changed.
 *
 * Taken from the repository history (the commit that first published the
 * guide, and the last commit that changed its title or body). An explicit
 * `publishedAt` on the article still wins for the published date.
 * Update the `modified` date when a guide's content is edited.
 */
export type GuideDates = { published: string; modified: string };

export const guideDates: Record<string, GuideDates> = {
  "how-a-home-price-estimate-works": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-a-loan-payment-is-calculated": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-a-mortgage-payment-is-estimated": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-compound-interest-works": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-long-to-pay-off-a-credit-card": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-much-to-save-for-a-goal": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-add-hours-and-minutes": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-add-line-numbers": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-add-sales-tax": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-build-an-ai-prompt": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-calculate-a-tip": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-calculate-age": { published: "2026-09-22T14:37:10Z", modified: "2026-09-22T14:37:10Z" },
  "how-to-calculate-an-aspect-ratio": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-calculate-gpa": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-calculate-percentage": { published: "2026-09-22T14:37:10Z", modified: "2026-09-22T14:37:10Z" },
  "how-to-calculate-square-footage": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-check-an-open-graph-preview": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-check-color-contrast": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-clean-and-compare-text": { published: "2026-09-22T14:37:10Z", modified: "2026-09-24T16:40:00Z" },
  "how-to-click-faster": { published: "2026-10-04T18:15:30Z", modified: "2026-10-04T18:15:30Z" },
  "how-to-compare-renting-and-buying": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-compress-an-image-without-losing-quality": { published: "2026-09-22T14:37:10Z", modified: "2026-09-24T16:40:00Z" },
  "how-to-convert-csv-to-json": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-hex-to-rgb": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-json-to-csv": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-roman-numerals": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-salary-to-hourly": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-text-to-morse-code": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-time-zones": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-convert-units": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-count-business-days": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-count-characters": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-count-days-between-dates": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-count-pdf-pages": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-create-a-utm-url": { published: "2026-09-22T14:37:10Z", modified: "2026-09-22T14:37:10Z" },
  "how-to-escape-html": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-estimate-a-car-loan-payment": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-estimate-fuel-cost": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-find-and-replace-text": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-find-dominant-colors": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-find-the-mean-median-and-mode": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-generate-a-password": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-generate-a-random-number": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-generate-lorem-ipsum": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-hash-text": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-make-a-simple-favicon": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-percent-encode-a-url": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-pick-a-color": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-plan-a-debt-payoff": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-rate-a-password": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-read-a-cron-expression": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-read-a-jwt": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-read-a-unix-timestamp": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-read-a-url": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-read-text-from-a-photo": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-remove-line-breaks": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-repeat-a-word-or-line": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-rewrite-stock-phrasing": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-scan-a-qr-code": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-shorten-an-article": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-test-a-regular-expression": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-turn-a-number-into-words": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-turn-a-word-document-into-a-pdf": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-work-with-pdfs-in-your-browser": { published: "2026-09-22T14:37:10Z", modified: "2026-09-24T16:40:00Z" },
  "how-to-write-a-box-shadow": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-write-a-css-gradient": { published: "2026-09-27T06:54:31Z", modified: "2026-10-04T15:28:30Z" },
  "how-to-write-a-gitignore-file": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-write-a-video-prompt": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-write-an-image-prompt": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "how-to-write-meta-tags": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "what-a-paycheck-estimate-includes": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "what-a-writing-pattern-check-can-tell-you": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "what-is-a-uuid": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "what-is-base64": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
  "what-is-json": { published: "2026-09-22T14:37:10Z", modified: "2026-09-24T16:40:00Z" },
  "what-is-robots-txt": { published: "2026-09-27T06:54:31Z", modified: "2026-09-27T06:54:31Z" },
};

export function getGuideDates(
  slug: string,
  publishedAt?: string,
): { published?: string; modified?: string } {
  const dates = guideDates[slug];
  const published = publishedAt ?? dates?.published;
  let modified = dates?.modified ?? published;
  if (published && modified && modified < published) {
    modified = published;
  }
  return { published, modified };
}
