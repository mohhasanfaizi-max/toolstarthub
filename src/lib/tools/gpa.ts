import { parseNumber, roundTo } from "./numbers.ts";

export const GPA_SCALE = [
  { letter: "A", points: 4 },
  { letter: "A-", points: 3.7 },
  { letter: "B+", points: 3.3 },
  { letter: "B", points: 3 },
  { letter: "B-", points: 2.7 },
  { letter: "C+", points: 2.3 },
  { letter: "C", points: 2 },
  { letter: "C-", points: 1.7 },
  { letter: "D+", points: 1.3 },
  { letter: "D", points: 1 },
  { letter: "D-", points: 0.7 },
  { letter: "F", points: 0 },
] as const;

const LETTERS = new Map(GPA_SCALE.map((row) => [row.letter, row.points]));

export type GpaCourseInput = {
  gradeRaw: string;
  creditsRaw: string;
  numeric: boolean;
};

export type GpaResult =
  | { ok: true; courses: number; totalCredits: number; totalPoints: number; gpa: number }
  | { ok: false; error: string };

export function calculateGpa(courses: GpaCourseInput[]): GpaResult {
  const filled = courses.filter((course) => course.gradeRaw.trim() !== "" || course.creditsRaw.trim() !== "");
  if (filled.length === 0) return { ok: false, error: "Enter at least one course." };

  let totalCredits = 0;
  let totalPoints = 0;
  for (let index = 0; index < filled.length; index += 1) {
    const course = filled[index];
    const credits = parseNumber(course.creditsRaw, { field: "credits", allowNegative: false });
    if (!credits.ok) return { ok: false, error: `Course ${index + 1}: ${credits.error}` };
    if (credits.value > 1000) return { ok: false, error: `Course ${index + 1}: enter fewer credits.` };

    let points = 0;
    if (course.numeric) {
      const grade = parseNumber(course.gradeRaw, { field: "grade points", allowNegative: false });
      if (!grade.ok) return { ok: false, error: `Course ${index + 1}: ${grade.error}` };
      if (grade.value > 4) return { ok: false, error: `Course ${index + 1}: enter grade points from 0 to 4.0 on this scale.` };
      points = grade.value;
    } else {
      const letter = course.gradeRaw.trim().toUpperCase();
      const mapped = LETTERS.get(letter as (typeof GPA_SCALE)[number]["letter"]);
      if (mapped === undefined) {
        return { ok: false, error: `Course ${index + 1}: "${course.gradeRaw.trim() || "blank"}" is not on the 4.0 letter map.` };
      }
      points = mapped;
    }

    totalCredits += credits.value;
    totalPoints += points * credits.value;
  }

  if (totalCredits <= 0) return { ok: false, error: "Enter credits greater than 0 on at least one course." };
  if (!Number.isFinite(totalPoints)) return { ok: false, error: "This combination is too large to calculate." };

  return {
    ok: true,
    courses: filled.length,
    totalCredits: roundTo(totalCredits, 2),
    totalPoints: roundTo(totalPoints, 4),
    gpa: roundTo(totalPoints / totalCredits, 2),
  };
}
