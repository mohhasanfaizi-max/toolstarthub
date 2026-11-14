import Link from "next/link";
import { localizePath, type Locale } from "@/i18n/config";

const copy = {
  en: {
    heading: "Password manager vs spreadsheet vs password book",
    intro:
      "This page is a password tool: it can create a secure password or passphrase and a blank offline password log. It is not a password manager, password vault, account tracker, or encrypted vault. Use the comparison below to choose how you will keep logins after you generate them.",
    caption: "Comparison of a password manager, a spreadsheet, a paper password book, and browser saved passwords",
    option: "Option",
    bestFor: "Best for",
    stores: "Where it lives",
    risk: "Main risk",
    organize: "How to organise accounts and passwords",
    steps: [
      "Generate a unique password or passphrase for each account on this page.",
      "Save it in a reputable password manager when you can. That is the safest everyday password storage.",
      "If you need a password list, password template, or login tracker, download the CSV or print the password book above. Fill in the site, username, a hint, the date changed, and whether 2FA is on.",
      "Keep recovery codes offline. Do not paste live passwords into a shared Google Sheet, a chat, or an email.",
    ],
    check: "Check a password you already use with the",
    strength: "Password Strength Checker",
    move: ". To move a string to your phone, use the QR code on this page or the",
    qr: "QR Code Generator",
    delete: ", then delete the image.",
    rows: [
      {
        option: "Reputable password manager",
        bestFor: "Most people and households",
        stores: "Encrypted vault on your devices, often with a cloud backup you control",
        risk: "You must remember one strong master password and turn on 2FA",
      },
      {
        option: "Spreadsheet (Excel or Google Sheets)",
        bestFor: "A private inventory of accounts, hints, and 2FA notes",
        stores: "A file or a cloud document you manage yourself",
        risk: "A shared Google Sheet or an email attachment can leak live passwords. Prefer hints.",
      },
      {
        option: "Paper password book",
        bestFor: "Offline backup kept in a locked place",
        stores: "A printed log with site, username, hint, and 2FA",
        risk: "Anyone who finds the book can read it. Do not carry live passwords in a bag.",
      },
      {
        option: "Browser saved passwords",
        bestFor: "Convenience on a device you already lock",
        stores: "The browser profile on that device",
        risk: "A shared or unlocked computer can expose the list. Use a manager for important accounts.",
      },
    ],
  },
  es: {
    heading: "Gestor de contraseñas, hoja de cálculo o libretita de contraseñas",
    intro:
      "Esta página es una herramienta de contraseñas: puede crear una contraseña o frase de contraseña segura y una plantilla de registro offline en blanco. No es un gestor de contraseñas, una bóveda, un rastreador de cuentas ni una caja fuerte cifrada. Usa la comparación siguiente para decidir cómo guardar tus accesos después de generarlos.",
    caption: "Comparación entre un gestor de contraseñas, una hoja de cálculo, una libretita de papel y las contraseñas del navegador",
    option: "Opción",
    bestFor: "Ideal para",
    stores: "Dónde se guarda",
    risk: "Riesgo principal",
    organize: "Cómo organizar cuentas y contraseñas",
    steps: [
      "Genera en esta página una contraseña o frase distinta para cada cuenta.",
      "Cuando puedas, guárdala en un gestor de contraseñas de confianza. Es la forma más segura de almacenar contraseñas a diario.",
      "Si necesitas una lista, una plantilla o un registro de accesos, descarga el CSV o imprime la libretita de arriba. Anota el sitio, el usuario, una pista, la fecha del cambio y si la 2FA está activa.",
      "Guarda los códigos de recuperación sin conexión. No pegues la contraseña real en una hoja de Google compartida, un chat o un correo.",
    ],
    check: "Comprueba una contraseña que ya uses con el",
    strength: "comprobador de contraseñas",
    move: ". Para pasarla al teléfono, usa el código QR de esta página o el",
    qr: "generador de códigos QR",
    delete: ", y después borra la imagen.",
    rows: [
      {
        option: "Gestor de contraseñas de confianza",
        bestFor: "La mayoría de las personas y hogares",
        stores: "Una bóveda cifrada en tus dispositivos, a menudo con una copia en la nube que controlas tú",
        risk: "Debes recordar una contraseña maestra fuerte y activar la 2FA",
      },
      {
        option: "Hoja de cálculo (Excel o Google Sheets)",
        bestFor: "Un inventario privado de cuentas, pistas y notas de 2FA",
        stores: "Un archivo o un documento en la nube que gestionas tú",
        risk: "Una hoja de Google compartida o un adjunto de correo puede filtrar contraseñas reales. Mejor una pista.",
      },
      {
        option: "Libretita de contraseñas en papel",
        bestFor: "Una copia de seguridad offline guardada bajo llave",
        stores: "Un registro impreso con sitio, usuario, pista y 2FA",
        risk: "Quien encuentre la libreta puede leerla. No lleves contraseñas reales en el bolso.",
      },
      {
        option: "Contraseñas guardadas del navegador",
        bestFor: "La comodidad en un dispositivo que ya bloqueas",
        stores: "El perfil del navegador en ese dispositivo",
        risk: "Un ordenador compartido o desbloqueado puede exponer la lista. Usa un gestor para las cuentas importantes.",
      },
    ],
  },
} as const;

export function PasswordStorageGuide({ locale = "en" }: { locale?: Locale }) {
  const text = locale === "es" ? copy.es : copy.en;
  const strengthHref = localizePath("/tools/password-strength-checker", locale);
  const qrHref = localizePath("/tools/qr-code-generator", locale);
  return (
    <section aria-labelledby="password-organize-heading" className="mt-14">
      <h2 id="password-organize-heading" className="text-xl font-semibold tracking-tight text-foreground">
        {text.heading}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{text.intro}</p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="min-w-[40rem] w-full text-left text-sm">
          <caption className="sr-only">{text.caption}</caption>
          <thead className="bg-muted/60 text-foreground">
            <tr>
              <th scope="col" className="px-3 py-2 font-semibold">{text.option}</th>
              <th scope="col" className="px-3 py-2 font-semibold">{text.bestFor}</th>
              <th scope="col" className="px-3 py-2 font-semibold">{text.stores}</th>
              <th scope="col" className="px-3 py-2 font-semibold">{text.risk}</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {text.rows.map((row) => (
              <tr key={row.option} className="border-t border-border">
                <th scope="row" className="px-3 py-2 font-medium text-foreground">{row.option}</th>
                <td className="px-3 py-2">{row.bestFor}</td>
                <td className="px-3 py-2">{row.stores}</td>
                <td className="px-3 py-2">{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-8 text-base font-semibold text-foreground">{text.organize}</h3>
      <ol className="mt-3 max-w-3xl list-decimal space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
        {text.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
        <li>
          {text.check}{" "}
          <Link href={strengthHref} className="font-medium text-accent hover:underline">
            {text.strength}
          </Link>
          {text.move}{" "}
          <Link href={qrHref} className="font-medium text-accent hover:underline">
            {text.qr}
          </Link>
          {text.delete}
        </li>
      </ol>
    </section>
  );
}
