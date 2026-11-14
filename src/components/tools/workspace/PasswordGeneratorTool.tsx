"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import {
  generatePassphrase,
  generatePassword,
  parsePassphraseWordCount,
  parsePasswordLength,
  PASSPHRASE_DEFAULT_WORDS,
  PASSPHRASE_MAX_WORDS,
  PASSPHRASE_MIN_WORDS,
  PASSWORD_DEFAULT,
  PASSWORD_MAX,
  PASSWORD_MIN,
} from "@/lib/tools/password";
import { passwordLogCsvTemplate, passwordLogPrintHtml } from "@/lib/tools/password-log";
import { useTx } from "@/i18n/tool-text";

type Mode = "password" | "passphrase";

export function PasswordGeneratorTool() {
  const tx = useTx();
  const [mode, setMode] = useState<Mode>("password");
  const [length, setLength] = useState(String(PASSWORD_DEFAULT));
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
  const [wordCount, setWordCount] = useState(String(PASSPHRASE_DEFAULT_WORDS));
  const [separator, setSeparator] = useState<" " | "-">("-");
  const [capitalize, setCapitalize] = useState(true);
  const [addNumber, setAddNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [meta, setMeta] = useState<{ bits: number; charsetSize: number; strengthLabel: string }>();
  const [error, setError] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [qrError, setQrError] = useState("");
  const [qrBusy, setQrBusy] = useState(false);

  function applyResult(next: ReturnType<typeof generatePassword>) {
    if (!next.ok) {
      setError(next.error);
      setPassword("");
      setMeta(undefined);
      setQrUrl("");
      return;
    }
    setError("");
    setQrUrl("");
    setQrError("");
    setPassword(next.password);
    setMeta({
      bits: next.bits,
      charsetSize: next.charsetSize,
      strengthLabel: next.strengthLabel,
    });
  }

  function generate() {
    if (mode === "passphrase") {
      const parsed = parsePassphraseWordCount(wordCount);
      if (!parsed.ok) {
        setError(parsed.error);
        setPassword("");
        setMeta(undefined);
        setQrUrl("");
        return;
      }
      applyResult(
        generatePassphrase({
          words: parsed.value,
          separator,
          capitalize,
          addNumber,
        }),
      );
      return;
    }
    const parsed = parsePasswordLength(length);
    if (!parsed.ok) {
      setError(parsed.error);
      setPassword("");
      setMeta(undefined);
      setQrUrl("");
      return;
    }
    applyResult(
      generatePassword({
        length: parsed.value,
        uppercase,
        lowercase,
        numbers,
        symbols,
        excludeAmbiguous,
      }),
    );
  }

  async function showQr() {
    if (!password) return;
    setQrBusy(true);
    setQrError("");
    try {
      const url = await QRCode.toDataURL(password, {
        errorCorrectionLevel: "M",
        margin: 2,
        width: 240,
      });
      setQrUrl(url);
    } catch {
      setQrError("The QR code could not be created in this browser.");
      setQrUrl("");
    } finally {
      setQrBusy(false);
    }
  }

  function printPasswordBook() {
    const popup = window.open("", "_blank", "noopener,noreferrer,width=800,height=900");
    if (!popup) {
      setError("Allow pop-ups to open the printable password book, or download the CSV instead.");
      return;
    }
    popup.document.write(passwordLogPrintHtml());
    popup.document.close();
  }

  const csvBlob = new Blob([passwordLogCsvTemplate()], { type: "text/csv;charset=utf-8" });
  const meterWidth = meta ? Math.max(8, Math.min(100, Math.round((meta.bits / 120) * 100))) : 0;
  const meterColor =
    meta?.strengthLabel === "Strong"
      ? "bg-emerald-600"
      : meta?.strengthLabel === "Moderate"
        ? "bg-amber-500"
        : "bg-rose-600";

  return (
    <ToolPanel>
      <fieldset>
        <legend className="text-sm font-medium text-foreground">{tx("Password type")}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <ModeOption
            checked={mode === "password"}
            onChange={() => setMode("password")}
            label={tx("Random password")}
            hint={tx("Letters, numbers, and symbols")}
          />
          <ModeOption
            checked={mode === "passphrase"}
            onChange={() => setMode("passphrase")}
            label={tx("Memorable passphrase")}
            hint={tx("Random words that are easier to type")}
          />
        </div>
      </fieldset>

      {mode === "password" ? (
        <>
          <ToolField
            id="password-length"
            label={tx("Length")}
            hint={tx(`From ${PASSWORD_MIN} to ${PASSWORD_MAX} characters.`)}
          >
            <input
              id="password-length"
              inputMode="numeric"
              value={length}
              onChange={(event) => setLength(event.target.value)}
              className={toolControlClass}
            />
          </ToolField>
          <fieldset className="mt-4">
            <legend className="text-sm font-medium text-foreground">{tx("Character types")}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <Option checked={uppercase} onChange={setUppercase} label={tx("Uppercase letters")} />
              <Option checked={lowercase} onChange={setLowercase} label={tx("Lowercase letters")} />
              <Option checked={numbers} onChange={setNumbers} label={tx("Numbers")} />
              <Option checked={symbols} onChange={setSymbols} label={tx("Symbols")} />
              <Option
                checked={excludeAmbiguous}
                onChange={setExcludeAmbiguous}
                label={tx("Exclude ambiguous characters (O, 0, I, l, 1)")}
              />
            </div>
          </fieldset>
        </>
      ) : (
        <>
          <ToolField
            id="passphrase-words"
            label={tx("Number of words")}
            hint={tx(`From ${PASSPHRASE_MIN_WORDS} to ${PASSPHRASE_MAX_WORDS} words, drawn from a 2,048-word list.`)}
          >
            <input
              id="passphrase-words"
              inputMode="numeric"
              value={wordCount}
              onChange={(event) => setWordCount(event.target.value)}
              className={toolControlClass}
            />
          </ToolField>
          <ToolField id="passphrase-separator" label={tx("Word separator")}>
            <select
              id="passphrase-separator"
              value={separator}
              onChange={(event) => setSeparator(event.target.value === " " ? " " : "-")}
              className={toolControlClass}
            >
              <option value="-">{tx("Hyphen (correct-horse-battery)")}</option>
              <option value=" ">{tx("Space (correct horse battery)")}</option>
            </select>
          </ToolField>
          <fieldset className="mt-4">
            <legend className="text-sm font-medium text-foreground">{tx("Passphrase options")}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <Option checked={capitalize} onChange={setCapitalize} label={tx("Capitalize each word")} />
              <Option checked={addNumber} onChange={setAddNumber} label={tx("Add a random digit at the end")} />
            </div>
          </fieldset>
        </>
      )}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={generate}>{tx("Generate")}</Button>
          <CopyButton value={password} />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setPassword("");
              setMeta(undefined);
              setError("");
              setQrUrl("");
              setQrError("");
            }}
          >{tx("Clear")}</Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{tx(error)}</ToolError> : null}
        {password ? (
          <ToolOutput label={tx(mode === "passphrase" ? "Generated passphrase" : "Generated password")}>
            <p className="break-all font-mono text-lg font-semibold">{password}</p>
            {meta ? (
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div>
                  <p className="mb-1 font-medium text-foreground">
                    {tx(`Strength: ${meta.strengthLabel}`)}
                  </p>
                  <div
                    className="h-2 overflow-hidden rounded-full bg-muted"
                    role="meter"
                    aria-label={tx("Estimated password strength")}
                    aria-valuemin={0}
                    aria-valuemax={120}
                    aria-valuenow={Math.round(meta.bits)}
                    aria-valuetext={tx(`${meta.strengthLabel}, about ${meta.bits.toFixed(0)} bits`)}
                  >
                    <div className={`h-full ${meterColor}`} style={{ width: `${meterWidth}%` }} />
                  </div>
                </div>
                <p>{tx(`Length: ${password.length}`)}</p>
                <p>
                  {mode === "passphrase"
                    ? tx(`Word list size: ${meta.charsetSize}`)
                    : tx(`Character set size: ${meta.charsetSize}`)}
                </p>
                <p>{tx(`Estimated entropy: ${meta.bits.toFixed(0)} bits (${meta.strengthLabel})`)}</p>
                <p>{tx("This meter is an estimate from length and the size of the random pool. It is not a guarantee of security.")}</p>
              </div>
            ) : null}
            <div className="mt-4 rounded-2xl border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
              <p>
                {tx("Optional QR code: encode this password so you can scan it with your phone. Anyone who sees the code can read the password. Generate it on this device only, then close or clear this page.")}
              </p>
              <div className="mt-3">
                <Button type="button" variant="secondary" onClick={() => void showQr()} disabled={qrBusy}>
                  {qrBusy ? tx("Creating QR code…") : tx("Show QR code for phone transfer")}
                </Button>
              </div>
              {qrError ? <ToolError>{tx(qrError)}</ToolError> : null}
              {qrUrl ? (
                <p className="mt-3">
                  <img src={qrUrl} alt={tx("QR code of the generated password")} width={160} height={160} className="rounded-lg border border-border bg-white p-1" />
                </p>
              ) : null}
            </div>
          </ToolOutput>
        ) : null}
      </div>

      <section aria-labelledby="password-log-heading" className="mt-8 rounded-2xl border border-border p-4 sm:p-5">
        <h2 id="password-log-heading" className="text-lg font-semibold tracking-tight text-foreground">
          {tx("Free offline password log template")}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {tx("Download a CSV password spreadsheet (opens in Excel and Google Sheets) or print a blank password book. Columns are site, username, hint, date changed, 2FA, and notes. This is not a password manager, encrypted vault, or offline password app.")}
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {tx("Prefer a reputable password manager. If you keep a paper password book or a private file, store a hint rather than the live password, and do not put passwords in a shared Google Sheet, email, or chat.")}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <DownloadButton
            blob={csvBlob}
            fileName="password-log-template.csv"
            label={tx("Download CSV template")}
          />
          <Button type="button" variant="secondary" onClick={printPasswordBook}>
            {tx("Print a password book")}
          </Button>
        </div>
      </section>

      <ToolPrivacyNote>
        {tx("Passwords and passphrases are created with crypto.getRandomValues in your browser. They are not stored, logged, or sent to a server. QR codes are also built on this device.")}
      </ToolPrivacyNote>
    </ToolPanel>
  );
}

function Option({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  const tx = useTx();
  return (
    <label className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      {tx(label)}
    </label>
  );
}

function ModeOption({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  hint: string;
}) {
  return (
    <label className="flex min-h-11 cursor-pointer items-start gap-2 rounded-xl border border-border px-3 py-2 text-sm has-[:checked]:border-accent">
      <input type="radio" name="password-mode" checked={checked} onChange={onChange} className="mt-1" />
      <span>
        <span className="font-medium text-foreground">{label}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span>
      </span>
    </label>
  );
}
