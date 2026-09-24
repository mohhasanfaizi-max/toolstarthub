import { parseNumber, roundTo } from "./numbers.ts";

export type AreaUnit = "feet" | "meters";

export type AreaRoomInput = { lengthRaw: string; widthRaw: string; unit: AreaUnit };

export type AreaRoom = { index: number; squareFeet: number; squareMeters: number };

export type SquareFootageResult =
  | { ok: true; rooms: AreaRoom[]; squareFeet: number; squareMeters: number }
  | { ok: false; error: string };

const SQM_PER_SQFT = 0.09290304;
const MAX_SIDE = 1_000_000;

export function calculateSquareFootage(rooms: AreaRoomInput[]): SquareFootageResult {
  const filled = rooms.filter((room) => room.lengthRaw.trim() !== "" || room.widthRaw.trim() !== "");
  if (filled.length === 0) return { ok: false, error: "Enter a length and width for at least one room." };

  const rows: AreaRoom[] = [];
  let squareFeet = 0;
  let squareMeters = 0;
  for (let index = 0; index < filled.length; index += 1) {
    const room = filled[index];
    const length = parseNumber(room.lengthRaw, { field: "length", allowNegative: false });
    if (!length.ok) return { ok: false, error: `Room ${index + 1}: ${length.error}` };
    const width = parseNumber(room.widthRaw, { field: "width", allowNegative: false });
    if (!width.ok) return { ok: false, error: `Room ${index + 1}: ${width.error}` };
    if (length.value > MAX_SIDE || width.value > MAX_SIDE) {
      return { ok: false, error: `Room ${index + 1}: enter a smaller length or width.` };
    }
    const area = length.value * width.value;
    const feet = room.unit === "feet" ? area : area / SQM_PER_SQFT;
    const meters = room.unit === "meters" ? area : area * SQM_PER_SQFT;
    if (!Number.isFinite(feet) || !Number.isFinite(meters)) {
      return { ok: false, error: "This combination is too large to calculate." };
    }
    squareFeet += feet;
    squareMeters += meters;
    rows.push({ index: index + 1, squareFeet: roundTo(feet, 2), squareMeters: roundTo(meters, 2) });
  }

  return {
    ok: true,
    rooms: rows,
    squareFeet: roundTo(squareFeet, 2),
    squareMeters: roundTo(squareMeters, 2),
  };
}
