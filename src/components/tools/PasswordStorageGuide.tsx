import Link from "next/link";

const rows = [
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
];

export function PasswordStorageGuide() {
  return (
    <section aria-labelledby="password-organize-heading" className="mt-14">
      <h2 id="password-organize-heading" className="text-xl font-semibold tracking-tight text-foreground">
        Password manager vs spreadsheet vs password book
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
        This page is a password tool: it can create a secure password or passphrase and a blank offline password log.
        It is not a password manager, password vault, account tracker, or encrypted vault. Use the comparison below to
        choose how you will keep logins after you generate them.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="min-w-[40rem] w-full text-left text-sm">
          <caption className="sr-only">
            Comparison of a password manager, a spreadsheet, a paper password book, and browser saved passwords
          </caption>
          <thead className="bg-muted/60 text-foreground">
            <tr>
              <th scope="col" className="px-3 py-2 font-semibold">Option</th>
              <th scope="col" className="px-3 py-2 font-semibold">Best for</th>
              <th scope="col" className="px-3 py-2 font-semibold">Where it lives</th>
              <th scope="col" className="px-3 py-2 font-semibold">Main risk</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {rows.map((row) => (
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
      <h3 className="mt-8 text-base font-semibold text-foreground">How to organise accounts and passwords</h3>
      <ol className="mt-3 max-w-3xl list-decimal space-y-2 ps-5 text-sm leading-6 text-muted-foreground">
        <li>Generate a unique password or passphrase for each account on this page.</li>
        <li>Save it in a reputable password manager when you can. That is the safest everyday password storage.</li>
        <li>If you need a password list, password template, or login tracker, download the CSV or print the password book above. Fill in the site, username, a hint, the date changed, and whether 2FA is on.</li>
        <li>Keep recovery codes offline. Do not paste live passwords into a shared Google Sheet, a chat, or an email.</li>
        <li>
          Check a password you already use with the{" "}
          <Link href="/tools/password-strength-checker" className="font-medium text-accent hover:underline">
            Password Strength Checker
          </Link>
          . To move a string to your phone, use the QR code on this page or the{" "}
          <Link href="/tools/qr-code-generator" className="font-medium text-accent hover:underline">
            QR Code Generator
          </Link>
          , then delete the image.
        </li>
      </ol>
    </section>
  );
}
