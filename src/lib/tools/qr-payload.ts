import { QR_MAX_LENGTH, validateQrText } from "./qr.ts";

export type QrKind = "text" | "wifi" | "email" | "phone" | "sms" | "vcard";

export type QrPayloadInput = {
  kind: QrKind;
  text?: string;
  ssid?: string;
  password?: string;
  security?: "WPA" | "WEP" | "nopass";
  hidden?: boolean;
  email?: string;
  subject?: string;
  body?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

export function encodeQrPayload(
  input: QrPayloadInput,
): { ok: true; text: string } | { ok: false; error: string } {
  if (input.kind === "text") {
    return validateQrText(input.text ?? "");
  }
  if (input.kind === "wifi") {
    return encodeWifi(input);
  }
  if (input.kind === "email") {
    return encodeEmail(input);
  }
  if (input.kind === "phone") {
    return encodePhone(input.phone ?? "");
  }
  if (input.kind === "sms") {
    return encodeSms(input);
  }
  return encodeVcard(input);
}

function encodeWifi(
  input: QrPayloadInput,
): { ok: true; text: string } | { ok: false; error: string } {
  const ssid = (input.ssid ?? "").trim();
  if (ssid === "") {
    return { ok: false, error: "Enter a network name (SSID)." };
  }
  const security = input.security ?? "WPA";
  const password = input.password ?? "";
  if (security !== "nopass" && password.trim() === "") {
    return { ok: false, error: "Enter the Wi-Fi password, or choose no password." };
  }
  const hidden = input.hidden ? "H:true;" : "";
  const passwordPart = security === "nopass" ? "" : `P:${escapeWifi(password)};`;
  return finish(`WIFI:T:${security};S:${escapeWifi(ssid)};${passwordPart}${hidden};`);
}

function encodeEmail(
  input: QrPayloadInput,
): { ok: true; text: string } | { ok: false; error: string } {
  const email = (input.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  const params = new URLSearchParams();
  if ((input.subject ?? "").trim()) {
    params.set("subject", input.subject?.trim() ?? "");
  }
  if ((input.body ?? "").trim()) {
    params.set("body", input.body?.trim() ?? "");
  }
  const query = params.toString();
  return finish(`mailto:${email}${query ? `?${query}` : ""}`);
}

function encodePhone(raw: string): { ok: true; text: string } | { ok: false; error: string } {
  const phone = raw.trim();
  if (!/^\+?[0-9 ()-]{7,20}$/.test(phone)) {
    return { ok: false, error: "Enter a phone number, with digits and optional + ( )." };
  }
  return finish(`tel:${phone.replace(/[ ()-]/g, "")}`);
}

function encodeSms(
  input: QrPayloadInput,
): { ok: true; text: string } | { ok: false; error: string } {
  const phone = encodePhone(input.phone ?? "");
  if (!phone.ok) {
    return phone;
  }
  const number = phone.text.slice(4);
  const body = (input.body ?? "").trim();
  return finish(body ? `SMSTO:${number}:${body}` : `SMSTO:${number}`);
}

function encodeVcard(
  input: QrPayloadInput,
): { ok: true; text: string } | { ok: false; error: string } {
  const first = (input.firstName ?? "").trim();
  const last = (input.lastName ?? "").trim();
  if (first === "" && last === "") {
    return { ok: false, error: "Enter a first or last name for the contact." };
  }
  const full = [first, last].filter(Boolean).join(" ");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVcard(last)};${escapeVcard(first)};;;`,
    `FN:${escapeVcard(full)}`,
  ];
  if ((input.phone ?? "").trim()) {
    const phone = encodePhone(input.phone ?? "");
    if (!phone.ok) {
      return phone;
    }
    lines.push(`TEL:${phone.text.slice(4)}`);
  }
  if ((input.email ?? "").trim()) {
    const email = encodeEmail({ kind: "email", email: input.email });
    if (!email.ok) {
      return email;
    }
    lines.push(`EMAIL:${(input.email ?? "").trim()}`);
  }
  lines.push("END:VCARD");
  return finish(lines.join("\n"));
}

function escapeWifi(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/([;,:"])/g, "\\$1");
}

function escapeVcard(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function finish(text: string): { ok: true; text: string } | { ok: false; error: string } {
  if (text.length > QR_MAX_LENGTH) {
    return {
      ok: false,
      error: `Keep QR content to ${QR_MAX_LENGTH} characters so the code stays readable.`,
    };
  }
  return { ok: true, text };
}
