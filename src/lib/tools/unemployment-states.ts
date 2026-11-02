/**
 * State unemployment insurance rules used by the calculator. Only states whose
 * figures were read from the state agency's own published pages are included.
 * Every entry lists its source and the date it was last checked.
 */
export type StateRule = {
  code: "CA" | "NY" | "TX" | "FL";
  name: string;
  agency: string;
  method: string;
  basePeriod: string;
  minWeekly: number;
  maxWeekly: number;
  dependents: string;
  duration: string;
  maxWeeks: number;
  effectiveDate: string;
  sourceUrls: string[];
  lastChecked: string;
};

export const SUPPORTED_STATES: StateRule[] = [
  {
    code: "CA",
    name: "California",
    agency: "Employment Development Department (EDD)",
    method:
      "Weekly amount comes from EDD's benefit table for the highest-paid base-period quarter. From $1,833 of high-quarter wages the table equals the high quarter ÷ 26, rounded up to a whole dollar. To qualify you need $1,300 in the high quarter, or $900 in the high quarter with total base-period wages of at least 1.25 times that quarter. The claim total is the lesser of 26 × the weekly amount or half of base-period wages.",
    basePeriod: "First four of the last five completed calendar quarters (alternate base period: last four completed quarters).",
    minWeekly: 40,
    maxWeekly: 450,
    dependents: "No dependent allowance.",
    duration: "Up to 26 weeks of regular benefits.",
    maxWeeks: 26,
    effectiveDate: "Claims beginning on or after January 2, 2005 (current benefit table)",
    sourceUrls: [
      "https://edd.ca.gov/en/unemployment/UI-Calculator/",
      "https://edd.ca.gov/siteassets/files/pdf_pub_ctr/de1101bt5.pdf",
      "https://edd.ca.gov/siteassets/files/pdf_pub_ctr/de8714b.pdf",
    ],
    lastChecked: "2026-11-02",
  },
  {
    code: "NY",
    name: "New York",
    agency: "New York State Department of Labor",
    method:
      "With wages in all four base-period quarters: high quarter ÷ 26 when the high quarter is over $3,575 (not less than $143), otherwise high quarter ÷ 25. With wages in only two or three quarters and a high quarter over $4,000: the average of the two highest quarters ÷ 26. To qualify (claims filed in 2026) you need wages in at least two quarters, at least $3,500 in one quarter, and total wages of at least 1.5 times the high quarter (if the high quarter is $19,118 or more, at least $9,559 in the other three quarters).",
    basePeriod: "Basic base period: first four of the last five completed calendar quarters (alternate: last four completed quarters).",
    minWeekly: 140,
    maxWeekly: 869,
    dependents: "No dependent allowance.",
    duration: "Up to 26 weeks of total unemployment. The first week is an unpaid waiting week.",
    maxWeeks: 26,
    effectiveDate: "Maximum $869 from October 6, 2025; minimum $140 for claims effective after January 5, 2026",
    sourceUrls: [
      "https://dol.ny.gov/how-your-weekly-unemployment-insurance-benefit-payment-calculated-p832",
      "https://dol.ny.gov/mbr",
      "https://forms.labor.ny.gov/UI/IA318.2.pdf",
    ],
    lastChecked: "2026-11-02",
  },
  {
    code: "TX",
    name: "Texas",
    agency: "Texas Workforce Commission (TWC)",
    method:
      "Weekly amount is the highest-paid base-period quarter ÷ 25, rounded to the nearest dollar. The claim total is the lesser of 26 × the weekly amount or 27% of base-period wages.",
    basePeriod: "First four of the last five completed calendar quarters before the claim's effective date.",
    minWeekly: 76,
    maxWeekly: 619,
    dependents: "No dependent allowance.",
    duration: "Up to 26 weeks within a 52-week benefit year.",
    maxWeeks: 26,
    effectiveDate: "Claims effective October 4, 2026 or later",
    sourceUrls: ["https://www.twc.texas.gov/programs/unemployment-benefits/eligibility-benefit-amounts"],
    lastChecked: "2026-11-02",
  },
  {
    code: "FL",
    name: "Florida",
    agency: "FloridaCommerce Reemployment Assistance",
    method:
      "Weekly amount is the highest-paid base-period quarter ÷ 26, rounded down to a whole dollar. To qualify you need wages in at least two quarters, at least $3,400 in the base period, and total wages of at least 1.5 times the high quarter. The claim total is the lesser of 25% of base-period wages or $3,300.",
    basePeriod: "First four of the last five completed calendar quarters.",
    minWeekly: 32,
    maxWeekly: 275,
    dependents: "No dependent allowance.",
    duration: "12 weeks for 2025 and 2026 claims (set yearly from the state unemployment rate, 12 to 23 weeks).",
    maxWeeks: 12,
    effectiveDate: "2025 and 2026 claims",
    sourceUrls: [
      "https://www.floridajobs.org/Reemployment-Assistance-Service-Center/reemployment-assistance/claimants/claimant-faqs-(new)",
      "https://www.flsenate.gov/Laws/Statutes/2026/443.111",
    ],
    lastChecked: "2026-11-02",
  },
];

/** States and DC not yet verified. The calculator says so instead of guessing. */
export const UNSUPPORTED_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "Colorado", "Connecticut", "Delaware", "District of Columbia",
  "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

/** California EDD benefit table rows below $1,833 of high-quarter wages (DE 1101BT5). [lowest wage, weekly amount] */
export const CA_LOW_TABLE: Array<[number, number]> = [
  [900, 40], [949, 41], [975, 42], [1001, 43], [1027, 44], [1053, 45], [1079, 46], [1118, 47], [1144, 48],
  [1170, 49], [1196, 50], [1222, 51], [1248, 52], [1287, 53], [1313, 54], [1339, 55], [1365, 56], [1404, 57],
  [1430, 58], [1456, 59], [1495, 60], [1521, 61], [1547, 62], [1586, 63], [1612, 64], [1638, 65], [1677, 66],
  [1703, 67], [1742, 68], [1768, 69], [1807, 70], [1833, 71],
];
