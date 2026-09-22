"use client";

import { ErrorState } from "@/components/system/ErrorState";
import "./globals.css";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col antialiased">
        <main className="flex-1">
          <ErrorState
            title="The site could not be loaded"
            onRetry={retry}
            digest={error.digest}
          />
        </main>
      </body>
    </html>
  );
}
