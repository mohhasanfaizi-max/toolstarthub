export function publicAiError(error: unknown): string {
  const status = typeof error === "object" && error && "status" in error ? Number(error.status) : 0;
  if (status === 404 || status === 400) return "The AI model is unavailable right now. Try again later.";
  if (status === 429) return "The AI service is busy. Wait a minute and try again.";
  return "The AI request could not be completed. Try again later.";
}
