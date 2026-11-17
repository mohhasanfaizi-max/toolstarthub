"use client";

import { useRef, useState } from "react";
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
import {
  QR_LOGO_MAX_BYTES,
  QR_LOGO_TYPES,
  canvasToPngBlob,
  createQrMatrix,
  effectiveQrEcc,
  isWellFormedSvg,
  paintQrToCanvas,
  qrMatrixToSvg,
  svgToBlob,
} from "@/lib/tools/qr-render";
import { useTx } from "@/i18n/tool-text";

type Ecc = "L" | "M" | "Q" | "H";

type LogoState = {
  name: string;
  dataUrl: string;
  image: HTMLImageElement;
};

function isAllowedLogo(file: File): boolean {
  return (
    file.size <= QR_LOGO_MAX_BYTES &&
    (QR_LOGO_TYPES as readonly string[]).includes(file.type)
  );
}

function loadImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("logo-load"));
    image.src = dataUrl;
  });
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("logo-read"));
    };
    reader.onerror = () => reject(new Error("logo-read"));
    reader.readAsDataURL(file);
  });
}

export function QrCodeGeneratorProTool() {
  const tx = useTx();
  const logoInputRef = useRef<HTMLInputElement>(null);
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
  const [logo, setLogo] = useState<LogoState | null>(null);
  const [dataUrl, setDataUrl] = useState("");
  const [pngBlob, setPngBlob] = useState<Blob | null>(null);
  const [svgBlob, setSvgBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function clearPreview() {
    setDataUrl("");
    setPngBlob(null);
    setSvgBlob(null);
  }

  async function onLogoChange(file: File | undefined) {
    if (!file) {
      setLogo(null);
      return;
    }
    if (!isAllowedLogo(file)) {
      setError("The logo must be a PNG, JPG, or WebP under 1 MB.");
      setLogo(null);
      if (logoInputRef.current) logoInputRef.current.value = "";
      return;
    }
    try {
      const url = await readFileAsDataUrl(file);
      const image = await loadImage(url);
      setLogo({ name: file.name, dataUrl: url, image });
      setError("");
    } catch {
      setError("That logo could not be opened.");
      setLogo(null);
      if (logoInputRef.current) logoInputRef.current.value = "";
    }
  }

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
      clearPreview();
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
      const usedEcc = effectiveQrEcc(ecc, Boolean(logo));
      const renderOptions = {
        margin,
        width: size,
        dark: fg.color.hex,
        light: bg.color.hex,
      };
      const modules = createQrMatrix(payload.text, usedEcc);
      const svg = qrMatrixToSvg(modules, renderOptions, logo?.dataUrl);
      if (!isWellFormedSvg(svg)) {
        throw new Error("invalid-svg");
      }
      const canvas = document.createElement("canvas");
      paintQrToCanvas(canvas, modules, renderOptions, logo?.image ?? null);
      const [png, url] = await Promise.all([
        canvasToPngBlob(canvas),
        Promise.resolve(canvas.toDataURL("image/png")),
      ]);
      setDataUrl(url);
      setPngBlob(png);
      setSvgBlob(svgToBlob(svg));
    } catch {
      setError("That content could not be turned into a QR code. Try shorter text.");
      clearPreview();
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
    setLogo(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
    clearPreview();
    setError("");
  }

  return (
    <ToolPanel>
      <ToolChoiceGroup
        legend={tx("QR type")}
        name="qr-kind"
        value={kind}
        onChange={setKind}
        options={[
          { id: "text", label: tx("Text / URL") },
          { id: "wifi", label: tx("Wi-Fi") },
          { id: "email", label: tx("Email") },
          { id: "phone", label: tx("Phone") },
          { id: "sms", label: tx("SMS") },
          { id: "vcard", label: tx("Contact") },
        ]}
        columns="grid gap-2 sm:grid-cols-3"
      />

      <div className="mt-6 space-y-4">
        {kind === "text" ? (
          <ToolField id="qr-pro-text" label={tx("Text or URL")}>
            <textarea
              id="qr-pro-text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={4}
              className={`${toolControlClass} min-h-24 resize-y`}
              placeholder={tx("https://example.com")}
            />
          </ToolField>
        ) : null}

        {kind === "wifi" ? (
          <>
            <ToolField id="wifi-ssid" label={tx("Network name (SSID)")}>
              <input id="wifi-ssid" value={ssid} onChange={(event) => setSsid(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolChoiceGroup
              legend={tx("Security")}
              name="wifi-security"
              value={security}
              onChange={setSecurity}
              options={[
                { id: "WPA", label: tx("WPA/WPA2") },
                { id: "WEP", label: tx("WEP") },
                { id: "nopass", label: tx("No password") },
              ]}
              columns="grid gap-2 sm:grid-cols-3"
            />
            {security !== "nopass" ? (
              <ToolField id="wifi-password" label={tx("Password")}>
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
              <input type="checkbox" checked={hidden} onChange={(event) => setHidden(event.target.checked)} />{tx("Hidden network")}</label>
          </>
        ) : null}

        {kind === "email" ? (
          <>
            <ToolField id="qr-email" label={tx("Email")}>
              <input id="qr-email" value={email} onChange={(event) => setEmail(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-subject" label={tx("Subject (optional)")}>
              <input id="qr-subject" value={subject} onChange={(event) => setSubject(event.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="qr-body" label={tx("Body (optional)")}>
              <textarea id="qr-body" value={body} onChange={(event) => setBody(event.target.value)} rows={3} className={`${toolControlClass} resize-y`} />
            </ToolField>
          </>
        ) : null}

        {kind === "phone" ? (
          <ToolField id="qr-phone" label={tx("Phone number")}>
            <input id="qr-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className={toolControlClass} autoComplete="off" />
          </ToolField>
        ) : null}

        {kind === "sms" ? (
          <>
            <ToolField id="qr-sms-phone" label={tx("Phone number")}>
              <input id="qr-sms-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-sms-body" label={tx("Message (optional)")}>
              <textarea id="qr-sms-body" value={body} onChange={(event) => setBody(event.target.value)} rows={3} className={`${toolControlClass} resize-y`} />
            </ToolField>
          </>
        ) : null}

        {kind === "vcard" ? (
          <>
            <ToolField id="qr-first" label={tx("First name")}>
              <input id="qr-first" value={firstName} onChange={(event) => setFirstName(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-last" label={tx("Last name")}>
              <input id="qr-last" value={lastName} onChange={(event) => setLastName(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-vcard-phone" label={tx("Phone (optional)")}>
              <input id="qr-vcard-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
            <ToolField id="qr-vcard-email" label={tx("Email (optional)")}>
              <input id="qr-vcard-email" value={email} onChange={(event) => setEmail(event.target.value)} className={toolControlClass} autoComplete="off" />
            </ToolField>
          </>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ColorInput id="qr-fg" label={tx("Foreground")} value={dark} onChange={setDark} />
        <ColorInput id="qr-bg" label={tx("Background")} value={light} onChange={setLight} />
        <RangeField id="qr-size" label={tx("Size")} min={128} max={640} step={8} value={size} suffix="px" onChange={setSize} />
        <RangeField id="qr-margin" label={tx("Quiet zone")} min={0} max={8} value={margin} onChange={setMargin} />
      </div>

      <div className="mt-4">
        <ToolChoiceGroup
          legend={tx("Error correction")}
          name="qr-ecc"
          value={logo ? "H" : ecc}
          onChange={setEcc}
          options={[
            { id: "L", label: "L (7%)" },
            { id: "M", label: "M (15%)" },
            { id: "Q", label: "Q (25%)" },
            { id: "H", label: "H (30%)" },
          ]}
        columns="grid gap-2 sm:grid-cols-4"
        />
        {logo ? (
          <p className="mt-2 text-sm text-muted-foreground">{tx("Error correction is set to H while a logo is present.")}</p>
        ) : null}
      </div>

      <ToolField
        id="qr-logo"
        label={tx("Logo (optional)")}
        hint={tx("Add a square PNG, JPG, or WebP. It stays on this device. Error correction is raised to H, and the logo is limited to about 20% of the code.")}
      >
        <input
          id="qr-logo"
          ref={logoInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          data-testid="qr-logo"
          className={toolControlClass}
          onChange={(event) => void onLogoChange(event.target.files?.[0])}
        />
        {logo ? (
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{logo.name}</span>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setLogo(null);
                if (logoInputRef.current) logoInputRef.current.value = "";
              }}
            >
              {tx("Remove logo")}
            </Button>
          </div>
        ) : null}
      </ToolField>
      {logo ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground" data-testid="qr-logo-warning" role="status">
          {tx("A logo covers part of the code, so always test-scan the result with a phone before you print or share it.")}
        </p>
      ) : null}

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={() => void generate()} disabled={busy}>
            {tx(busy ? "Generating…" : "Generate")}
          </Button>
          <DownloadButton blob={pngBlob} fileName="qr-code.png" label={tx("Download PNG")} />
          <DownloadButton blob={svgBlob} fileName="qr-code.svg" label={tx("Download SVG")} />
          <Button type="button" variant="ghost" onClick={reset}>{tx("Reset")}</Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{tx(error)}</ToolError> : null}
        {dataUrl ? (
          <figure className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted p-4">
            {/* Local data URL preview; next/image is not suitable here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dataUrl} alt={tx("Generated QR code")} className="mx-auto max-h-80 w-auto max-w-full" data-testid="qr-pro-preview" />
          </figure>
        ) : null}
      </div>

      <ToolPrivacyNote>{tx("The QR code is generated in your browser. Wi-Fi passwords, logos, and other fields are not stored or sent to a server.")}</ToolPrivacyNote>
    </ToolPanel>
  );
}
