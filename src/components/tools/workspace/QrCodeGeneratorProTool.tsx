"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/Button";
import { ColorInput } from "@/components/tools/ColorInput";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { RangeField } from "@/components/tools/RangeField";
import {
  ToolActions,
  ToolChoiceGroup,
  ToolError,
  ToolField,
  ToolPanel,
  ToolPrivacyNote,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { parseCssColor } from "@/lib/tools/color";
import { encodeQrPayload, type QrKind } from "@/lib/tools/qr-payload";

type Ecc = "L" | "M" | "Q" | "H";

export function QrCodeGeneratorProTool() {
  const [kind, setKind] = useState<QrKind>("text");
  const [text, setText] = useState("");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState<"WPA" | "WEP" | "nopass">("WPA");
  const [hidden, setHidden] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dark, setDark] = useState("#0b1f3a");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(320);
  const [margin, setMargin] = useState(2);
  const [ecc, setEcc] = useState<Ecc>("M");
  const [dataUrl, setDataUrl] = useState("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function generate() {
    const payload = encodeQrPayload({
      kind,
      text,
      ssid,
      password,
      security,
      hidden,
      email,
      subject,
      body,
      phone,
      firstName,
      lastName,
    });
    if (!payload.ok) {
      setError(payload.error);
      setDataUrl("");
      setBlob(null);
      return;
    }

    const fg = parseCssColor(dark);
    const bg = parseCssColor(light);
    if (!fg.ok) {
      setError(fg.error);
      return;
    }
    if (!bg.ok) {
      setError(bg.error);
      return;
    }
    if (fg.color.hex === bg.color.hex) {
      setError("Foreground and background colors need to be different.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const url = await QRCode.toDataURL(payload.text, {
        errorCorrectionLevel: ecc,
        margin,
        width: size,
        color: { dark: fg.color.hex, light: bg.color.hex },
      });
      setDataUrl(url);
      const response = await fetch(url);
      setBlob(await response.blob());
    } catch {
      setError("That content could not be turned into a QR code. Try shorter text.");
      setDataUrl("");
      setBlob(null);
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    setKind("text");
    setText("");
    setSsid("");
    setPassword("");
    setSecurity("WPA");
    setHidden(false);
    setEmail("");
    setSubject("");
    setBody("");
    setPhone("");
    setFirstName("");
    setLastName("");
    setDark("#0b1f3a");
    setLight("#ffffff");
    setSize(320);
    setMargin(2);
    setEcc("M");
    setDataUrl("");
    setBlob(null);
    setError("");
  }

  return (
    <ToolPanel>
      <ToolChoiceGroup
        legend="QR type"
        name="qr-kind"
        value={kind}
        onChange={setKind}
        options={[
          { id: "text", label: "Text / URL" },
          { id: "wifi", label: "Wi-Fi" },
          { id: "email", label: "Email" },
          { id: "phone", label: "Phone" },
          { id: "sms", label: "SMS" },
          { id: "vcard", label: "Contact" },
        ]}
        columns="grid gap-2 sm:grid-cols-3"
      />

      <div className="mt-6 space-y-4">
        {kind === "text" ? (
          <ToolField id="qr-pro-text" label="Text or URL">
            <textarea
              id="qr-pro-text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={4}
              className={`${toolControlClass} min-h-24 resize-y`}
              placeholder="https://example.com"
            />
          </ToolField>
        ) : null}

        {kind === "wifi" ? (
          <>
            <ToolField id="wifi-ssid" label="Network name (SSID)">
              <input id="wifi-ssid" value={ssid} onChange={(event) => setSsid(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolChoiceGroup
              legend="Security"
              name="wifi-security"
              value={security}
              onChange={setSecurity}
              options={[
                { id: "WPA", label: "WPA/WPA2" },
                { id: "WEP", label: "WEP" },
                { id: "nopass", label: "No password" },
              ]}
              columns="grid gap-2 sm:grid-cols-3"
            />
            {security !== "nopass" ? (
              <ToolField id="wifi-password" label="Password">
                <input
                  id="wifi-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={toolControlClass}
                  autoComplete="off"
                />
              </ToolField>
            ) : null}
            <label className="flex min-h-11 items-center gap-2 text-sm">
              <input type="checkbox" checked={hidden} onChange={(event) => setHidden(event.target.checked)} />
              Hidden network
            </label>
          </>
        ) : null}

        {kind === "email" ? (
          <>
            <ToolField id="qr-email" label="Email">
              <input id="qr-email" value={email} onChange={(event) => setEmail(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-subject" label="Subject (optional)">
              <input id="qr-subject" value={subject} onChange={(event) => setSubject(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="qr-body" label="Body (optional)">
              <textarea id="qr-body" value={body} onChange={(event) => setBody(event.target.value)} rows={3} className={`${toolControlClass} resize-y`} />
            </ToolField>
          </>
        ) : null}

        {kind === "phone" ? (
          <ToolField id="qr-phone" label="Phone number">
            <input id="qr-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className={toolControlClass} autoComplete="off" />
          </ToolField>
        ) : null}

        {kind === "sms" ? (
          <>
            <ToolField id="qr-sms-phone" label="Phone number">
              <input id="qr-sms-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-sms-body" label="Message (optional)">
              <textarea id="qr-sms-body" value={body} onChange={(event) => setBody(event.target.value)} rows={3} className={`${toolControlClass} resize-y`} />
            </ToolField>
          </>
        ) : null}

        {kind === "vcard" ? (
          <>
            <ToolField id="qr-first" label="First name">
              <input id="qr-first" value={firstName} onChange={(event) => setFirstName(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-last" label="Last name">
              <input id="qr-last" value={lastName} onChange={(event) => setLastName(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-vcard-phone" label="Phone (optional)">
              <input id="qr-vcard-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-vcard-email" label="Email (optional)">
              <input id="qr-vcard-email" value={email} onChange={(event) => setEmail(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
          </>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ColorInput id="qr-fg" label="Foreground" value={dark} onChange={setDark} />
        <ColorInput id="qr-bg" label="Background" value={light} onChange={setLight} />
        <RangeField id="qr-size" label="Size" min={128} max={640} step={8} value={size} suffix="px" onChange={setSize} />
        <RangeField id="qr-margin" label="Quiet zone" min={0} max={8} value={margin} onChange={setMargin} />
      </div>

      <div className="mt-4">
        <ToolChoiceGroup
          legend="Error correction"
          name="qr-ecc"
          value={ecc}
          onChange={setEcc}
          options={[
            { id: "L", label: "L (7%)" },
            { id: "M", label: "M (15%)" },
            { id: "Q", label: "Q (25%)" },
            { id: "H", label: "H (30%)" },
          ]}
          columns="grid gap-2 sm:grid-cols-4"
        />
      </div>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void generate()} disabled={busy}>
            {busy ? "Generating…" : "Generate"}
          </Button>
          <DownloadButton blob={blob} fileName="qr-code.png" label="Download PNG" />
          <Button type="button" variant="ghost" onClick={reset}>
            Reset
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {dataUrl ? (
          <figure className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted p-4">
            {/* Local data URL preview; next/image is not suitable here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dataUrl} alt="Generated QR code" className="mx-auto max-h-80 w-auto max-w-full" />
          </figure>
        ) : null}
      </div>

      <ToolPrivacyNote>
        The QR code is generated in your browser. Wi-Fi passwords and other fields are not stored or sent to a server.
      </ToolPrivacyNote>
    </ToolPanel>
  );
}
