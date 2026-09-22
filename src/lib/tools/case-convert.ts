export const CASE_MODES = [
  "upper",
  "lower",
  "title",
  "sentence",
  "camel",
  "pascal",
  "snake",
  "kebab",
] as const;

export type CaseMode = (typeof CASE_MODES)[number];

export const CASE_MODE_LABELS: Record<CaseMode, string> = {
  upper: "UPPERCASE",
  lower: "lowercase",
  title: "Title Case",
  sentence: "Sentence case",
  camel: "camelCase",
  pascal: "PascalCase",
  snake: "snake_case",
  kebab: "kebab-case",
};

export function convertCase(input: string, mode: CaseMode): string {
  switch (mode) {
    case "upper":
      return input.toLocaleUpperCase("en-US");
    case "lower":
      return input.toLocaleLowerCase("en-US");
    case "title":
      return toTitleCase(input);
    case "sentence":
      return toSentenceCase(input);
    case "camel":
      return toCamelOrPascal(input, false);
    case "pascal":
      return toCamelOrPascal(input, true);
    case "snake":
      return words(input).map((word) => word.toLocaleLowerCase("en-US")).join("_");
    case "kebab":
      return words(input).map((word) => word.toLocaleLowerCase("en-US")).join("-");
    default: {
      const exhaustive: never = mode;
      return exhaustive;
    }
  }
}

function words(input: string): string[] {
  return (
    input
      .normalize("NFKD")
      .replace(/\p{M}/gu, "")
      .match(/[\p{L}\p{N}]+/gu) ?? []
  );
}

function toTitleCase(input: string): string {
  return input.replace(/[\p{L}\p{N}]+/gu, (word) => {
    const [first = "", ...rest] = Array.from(word.toLocaleLowerCase("en-US"));
    return `${first.toLocaleUpperCase("en-US")}${rest.join("")}`;
  });
}

function toSentenceCase(input: string): string {
  const lower = input.toLocaleLowerCase("en-US");
  return lower.replace(/(^\s*|[.!?…]\s+)(\p{L})/gu, (match, prefix: string, letter: string) => {
    return `${prefix}${letter.toLocaleUpperCase("en-US")}`;
  });
}

function toCamelOrPascal(input: string, pascal: boolean): string {
  return words(input)
    .map((word, index) => {
      const lower = word.toLocaleLowerCase("en-US");
      const [first = "", ...rest] = Array.from(lower);
      if (index === 0 && !pascal) {
        return `${first}${rest.join("")}`;
      }
      return `${first.toLocaleUpperCase("en-US")}${rest.join("")}`;
    })
    .join("");
}
