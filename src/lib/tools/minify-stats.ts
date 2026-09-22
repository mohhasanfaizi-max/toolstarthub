export type MinifyResult =
  | { ok: true; output: string }
  | { ok: false; error: string };

const MAX_SOURCE = 400_000;

export function minifyStats(before: string, after: string) {
  const beforeCount = before.length;
  const afterCount = after.length;
  const reduction =
    beforeCount === 0 ? 0 : ((beforeCount - afterCount) / beforeCount) * 100;
  return { beforeCount, afterCount, reduction };
}

export { MAX_SOURCE };
