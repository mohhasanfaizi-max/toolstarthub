"use client";

import { ErrorState } from "@/components/system/ErrorState";

// The root layout passes children through, so this boundary (which replaces
// everything below it, including the section document) renders its own
// <html> and <body>.
export default function ErrorPage({
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
          <ErrorState onRetry={retry} digest={error.digest} />
        </main>
      </body>
    </html>
  );
}
