export type YMD = { year: number; month: number; day: number };

export function parseIsoDate(raw: string): YMD | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw.trim());
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) return null;
  return { year, month, day };
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInMonth(year: number, month: number): number {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

/**
 * Completed years of age on a date. A 29 February birthday is treated as
 * reached on 1 March in common years (the calculator states this assumption).
 */
export function ageOn(birth: YMD, on: YMD): number {
  let age = on.year - birth.year;
  let bMonth = birth.month;
  let bDay = birth.day;
  if (bMonth === 2 && bDay === 29 && !isLeapYear(on.year)) {
    bMonth = 3;
    bDay = 1;
  }
  if (on.month < bMonth || (on.month === bMonth && on.day < bDay)) age -= 1;
  return age;
}

export type GraduationInput = {
  birth: string;
  entryAge: number;
  cutoffMonth: number;
  cutoffDay: number;
  startMonth: number;
  endMonth: number;
  schoolYears: number;
  furtherYears: number;
  /** Optional current-level mode: the start year of the current academic year and the year number (1 = first). */
  current?: { academicStartYear: number; yearNumber: number } | null;
};

export type Milestone = { label: string; academicYear: string; date: string; age: number | null };
export type GraduationResult =
  | { ok: true; entryYear: number; schoolGraduationYear: number; furtherGraduationYear: number | null; milestones: Milestone[]; assumptions: string[] }
  | { ok: false; error: string };

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function academicYearLabel(startYear: number, startMonth: number, endMonth: number): string {
  return endMonth < startMonth ? `${startYear}–${String(startYear + 1).slice(-2)}` : String(startYear);
}

/** Calendar year in which an academic year that starts in startYear ends. */
export function academicEndYear(startYear: number, startMonth: number, endMonth: number): number {
  return endMonth < startMonth ? startYear + 1 : startYear;
}

export function calculateGraduation(input: GraduationInput): GraduationResult {
  const birth = parseIsoDate(input.birth);
  if (!birth) return { ok: false, error: "Enter a valid date of birth." };
  const ints: Array<[number, string, number, number]> = [
    [input.entryAge, "entry age", 2, 10],
    [input.cutoffMonth, "cutoff month", 1, 12],
    [input.startMonth, "school year start month", 1, 12],
    [input.endMonth, "school year end month", 1, 12],
    [input.schoolYears, "number of school years", 1, 20],
    [input.furtherYears, "years of further study", 0, 10],
  ];
  for (const [value, label, min, max] of ints) {
    if (!Number.isInteger(value) || value < min || value > max) return { ok: false, error: `The ${label} must be a whole number from ${min} to ${max}.` };
  }
  if (input.endMonth === input.startMonth) return { ok: false, error: "The school year cannot start and end in the same month." };
  // A 29 February cutoff is allowed; in common years it falls back to 28 February.
  if (input.cutoffDay < 1 || input.cutoffDay > (input.cutoffMonth === 2 ? 29 : daysInMonth(2001, input.cutoffMonth))) {
    return { ok: false, error: "The cutoff day does not exist in that month." };
  }
  const cutoffFor = (year: number): YMD => ({
    year,
    month: input.cutoffMonth,
    day: Math.min(input.cutoffDay, daysInMonth(year, input.cutoffMonth)),
  });

  let entryYear: number;
  if (input.current) {
    const { academicStartYear, yearNumber } = input.current;
    if (!Number.isInteger(academicStartYear) || academicStartYear < 1900 || academicStartYear > 2200) return { ok: false, error: "Enter the start year of the current academic year." };
    if (!Number.isInteger(yearNumber) || yearNumber < 1 || yearNumber > input.schoolYears) return { ok: false, error: `The current year number must be from 1 to ${input.schoolYears}.` };
    entryYear = academicStartYear - (yearNumber - 1);
  } else {
    entryYear = birth.year;
    while (ageOn(birth, cutoffFor(entryYear)) < input.entryAge) entryYear += 1;
  }

  const lastSchoolStart = entryYear + input.schoolYears - 1;
  const schoolGraduationYear = academicEndYear(lastSchoolStart, input.startMonth, input.endMonth);
  const lastFurtherStart = lastSchoolStart + input.furtherYears;
  const furtherGraduationYear = input.furtherYears > 0 ? academicEndYear(lastFurtherStart, input.startMonth, input.endMonth) : null;
  const ageAt = (year: number, month: number) => ageOn(birth, { year, month, day: daysInMonth(year, month) });

  const milestones: Milestone[] = [
    {
      label: "Starts first school year",
      academicYear: academicYearLabel(entryYear, input.startMonth, input.endMonth),
      date: `${MONTHS[input.startMonth - 1]} ${entryYear}`,
      age: ageOn(birth, { year: entryYear, month: input.startMonth, day: 1 }),
    },
    {
      label: "Final school year begins",
      academicYear: academicYearLabel(lastSchoolStart, input.startMonth, input.endMonth),
      date: `${MONTHS[input.startMonth - 1]} ${lastSchoolStart}`,
      age: ageOn(birth, { year: lastSchoolStart, month: input.startMonth, day: 1 }),
    },
    {
      label: "Expected school graduation",
      academicYear: academicYearLabel(lastSchoolStart, input.startMonth, input.endMonth),
      date: `${MONTHS[input.endMonth - 1]} ${schoolGraduationYear}`,
      age: ageAt(schoolGraduationYear, input.endMonth),
    },
  ];
  if (furtherGraduationYear !== null) {
    milestones.push({
      label: "Expected completion of further study",
      academicYear: academicYearLabel(lastFurtherStart, input.startMonth, input.endMonth),
      date: `${MONTHS[input.endMonth - 1]} ${furtherGraduationYear}`,
      age: ageAt(furtherGraduationYear, input.endMonth),
    });
  }
  const assumptions = [
    input.current
      ? "Entry year is worked back from the current year you entered, assuming no repeated or skipped years."
      : `The child must be ${input.entryAge} on or before ${MONTHS[input.cutoffMonth - 1]} ${input.cutoffDay} of the year they start.`,
    `Each school year runs ${MONTHS[input.startMonth - 1]} to ${MONTHS[input.endMonth - 1]}${input.endMonth < input.startMonth ? " and spans two calendar years" : ""}.`,
    `${input.schoolYears} school years${input.furtherYears ? ` followed by ${input.furtherYears} years of further study without a gap` : ""}.`,
    "A 29 February birthday counts as reached on 1 March in non-leap years. Ages are completed years at the end of the graduation month.",
  ];
  return { ok: true, entryYear, schoolGraduationYear, furtherGraduationYear, milestones, assumptions };
}
