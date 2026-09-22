import Link from "next/link";

export function ToolPrivacyNote() {
  return (
    <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
      This tool runs in your browser. Inputs, files and generated values stay on
      this device. Favorites and recently used tools, if you use them, store only
      tool names in local storage — never passwords, documents or QR contents. See
      the{" "}
      <Link href="/privacy" className="font-medium text-accent hover:underline">
        privacy policy
      </Link>
      .
    </p>
  );
}
