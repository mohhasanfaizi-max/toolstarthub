export const LOREM_MODES = ["paragraphs", "sentences", "words"] as const;
export type LoremMode = (typeof LOREM_MODES)[number];

export const LOREM_LIMITS: Record<LoremMode, { min: number; max: number; defaultValue: number }> = {
  paragraphs: { min: 1, max: 20, defaultValue: 3 },
  sentences: { min: 1, max: 50, defaultValue: 5 },
  words: { min: 1, max: 500, defaultValue: 50 },
};

const WORD_BANK = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "in",
  "reprehenderit",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
  "phasellus",
  "fermentum",
  "ultricies",
  "nisl",
  "vitae",
  "elementum",
  "curabitur",
  "blandit",
  "tempus",
  "porttitor",
  "mauris",
  "urna",
  "ultrices",
  "gravida",
  "dictum",
  "fusce",
  "vehicula",
  "lectus",
  "auctor",
  "quam",
  "finibus",
  "libero",
  "tincidunt",
  "integer",
  "feugiat",
  "scelerisque",
  "varius",
  "nam",
  "pretium",
  "tellus",
  "orci",
  "rhoncus",
  "aenean",
  "posuere",
  "luctus",
  "maximus",
  "donec",
  "congue",
  "sapien",
  "quisque",
  "efficitur",
  "erat",
  "viverra",
  "neque",
  "accumsan",
  "justo",
  "hac",
  "habitasse",
  "platea",
  "dictumst",
  "praesent",
  "tristique",
  "senectus",
  "netus",
  "malesuada",
  "fames",
  "turpis",
  "egestas",
  "suscipit",
  "dignissim",
  "convallis",
  "pellentesque",
  "habitant",
  "morbi",
  "semper",
  "bibendum",
  "sodales",
  "interdum",
  "vestibulum",
  "facilisis",
  "volutpat",
  "condimentum",
  "hendrerit",
  "lacinia",
  "pulvinar",
  "metus",
  "placerat",
  "fringilla",
  "risus",
  "nullam",
  "sollicitudin",
  "aliquet",
  "imperdiet",
  "nunc",
];

const OPENING = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export type LoremResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

export type RandomFn = () => number;

export function generateLorem(
  mode: LoremMode,
  quantityRaw: string,
  random: RandomFn = cryptoRandom,
): LoremResult {
  const limits = LOREM_LIMITS[mode];
  const trimmed = quantityRaw.trim();
  if (trimmed === "") {
    return { ok: false, error: "Enter a quantity." };
  }

  const quantity = Number(trimmed);
  if (!Number.isInteger(quantity)) {
    return { ok: false, error: "Enter a whole number." };
  }

  if (quantity < limits.min || quantity > limits.max) {
    return {
      ok: false,
      error: `Choose between ${limits.min} and ${limits.max} ${mode}.`,
    };
  }

  if (mode === "words") {
    return { ok: true, output: capitalizeSentence(takeWords(quantity, random).join(" ")) + "." };
  }

  if (mode === "sentences") {
    return { ok: true, output: buildSentences(quantity, random, true).join(" ") };
  }

  const paragraphs = Array.from({ length: quantity }, (_, index) => {
    const sentenceCount = 3 + Math.floor(random() * 4);
    return buildSentences(sentenceCount, random, index === 0).join(" ");
  });

  return { ok: true, output: paragraphs.join("\n\n") };
}

function buildSentences(count: number, random: RandomFn, classicOpening: boolean): string[] {
  return Array.from({ length: count }, (_, index) => {
    if (classicOpening && index === 0) {
      return OPENING;
    }
    const length = 6 + Math.floor(random() * 9);
    return capitalizeSentence(takeWords(length, random).join(" ")) + ".";
  });
}

function takeWords(count: number, random: RandomFn): string[] {
  return Array.from({ length: count }, () => WORD_BANK[Math.floor(random() * WORD_BANK.length)] ?? "lorem");
}

function capitalizeSentence(value: string): string {
  const [first = "", ...rest] = Array.from(value);
  return `${first.toLocaleUpperCase("en-US")}${rest.join("")}`;
}

function cryptoRandom(): number {
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint32Array(1);
    crypto.getRandomValues(bytes);
    return bytes[0] / 2 ** 32;
  }

  throw new Error("A secure random source is not available in this browser.");
}
