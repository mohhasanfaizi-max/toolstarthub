export const PASSWORD_STRENGTH_MAX = 256;
export const PASSWORD_SYMBOLS = "!@#$%^&*()-_=+[]{};:,.?";

export type PasswordStrengthLabel = "Short" | "Moderate" | "Strong";

export type PasswordStrength =
  | {
      ok: true;
      length: number;
      charsetSize: number;
      bits: number;
      label: PasswordStrengthLabel;
      classes: string[];
    }
  | { ok: false; error: string };

export function checkPasswordStrength(password: string): PasswordStrength {
  if (password.length === 0) return { ok: false, error: "Enter a password." };
  if (password.length > PASSWORD_STRENGTH_MAX) {
    return { ok: false, error: `Enter a password of ${PASSWORD_STRENGTH_MAX} characters or fewer.` };
  }

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = [...password].some((character) => PASSWORD_SYMBOLS.includes(character));
  const other = new Set([...password].filter((character) => !/[A-Za-z0-9]/.test(character) && !PASSWORD_SYMBOLS.includes(character)));

  let charsetSize = 0;
  const classes: string[] = [];
  if (hasUpper) {
    charsetSize += 26;
    classes.push("Uppercase");
  }
  if (hasLower) {
    charsetSize += 26;
    classes.push("Lowercase");
  }
  if (hasNumber) {
    charsetSize += 10;
    classes.push("Numbers");
  }
  if (hasSymbol) {
    charsetSize += PASSWORD_SYMBOLS.length;
    classes.push("Symbols");
  }
  if (other.size > 0) {
    charsetSize += other.size;
    classes.push("Other");
  }

  const bits = password.length * Math.log2(charsetSize);
  const label: PasswordStrengthLabel = bits < 50 ? "Short" : bits < 80 ? "Moderate" : "Strong";
  return { ok: true, length: password.length, charsetSize, bits, label, classes };
}
