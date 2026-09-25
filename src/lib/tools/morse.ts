const LETTERS: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
};

const CODES = new Map(Object.entries(LETTERS).map(([letter, code]) => [code, letter]));

export type MorseResult = { ok: true; text: string; morse: string } | { ok: false; error: string };

export function textToMorse(raw: string): MorseResult {
  const trimmed = raw.trim();
  if (trimmed === "") return { ok: false, error: "Enter text to convert." };
  const words = trimmed.toUpperCase().split(/\s+/);
  const encoded: string[] = [];
  for (const word of words) {
    const letters: string[] = [];
    for (const character of word) {
      const code = LETTERS[character];
      if (!code) return { ok: false, error: `"${character}" is not supported. Use A-Z and 0-9.` };
      letters.push(code);
    }
    encoded.push(letters.join(" "));
  }
  const morse = encoded.join(" / ");
  return { ok: true, text: words.join(" "), morse };
}

export function morseToText(raw: string): MorseResult {
  const trimmed = raw.trim().replace(/\/\s*$/, "").trim();
  if (trimmed === "") return { ok: false, error: "Enter Morse code to convert." };
  if (/[^.\-\s/]/.test(trimmed)) return { ok: false, error: "Morse code can use only dots, dashes, spaces, and /." };
  const words = trimmed.split("/");
  const decoded: string[] = [];
  for (const word of words) {
    const compact = word.trim().replace(/\s+/g, " ");
    if (compact === "") return { ok: false, error: "A word separator is missing letters." };
    let text = "";
    for (const code of compact.split(" ")) {
      const letter = CODES.get(code);
      if (!letter) return { ok: false, error: `"${code}" is not a supported Morse letter.` };
      text += letter;
    }
    decoded.push(text);
  }
  return { ok: true, text: decoded.join(" "), morse: decoded.map((word) => [...word].map((letter) => LETTERS[letter]).join(" ")).join(" / ") };
}
