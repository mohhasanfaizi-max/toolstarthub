"use client";

import { ErrorState } from "@/components/system/ErrorState";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <ErrorState onRetry={retry} digest={error.digest} />;
}
