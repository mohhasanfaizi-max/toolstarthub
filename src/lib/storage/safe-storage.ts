export type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

export function getLocalStorage(): StorageLike | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }

    const probe = "__tsh_probe__";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readJson<T>(
  storage: StorageLike | null,
  key: string,
): T | undefined {
  if (!storage) {
    return undefined;
  }

  try {
    const raw = storage.getItem(key);
    if (!raw) {
      return undefined;
    }
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

export function writeJson(
  storage: StorageLike | null,
  key: string,
  value: unknown,
): boolean {
  if (!storage) {
    return false;
  }

  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function memoryStorage(initial: Record<string, string> = {}): StorageLike {
  const data = new Map(Object.entries(initial));

  return {
    getItem(key) {
      return data.has(key) ? (data.get(key) as string) : null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
  };
}
