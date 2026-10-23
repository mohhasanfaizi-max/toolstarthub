/**
 * pdf.js 6 calls Map.prototype.getOrInsertComputed. Browsers that do not
 * ship that method throw while rendering, and the tools report a generic
 * failure. Install the method before the library loads.
 */
export function ensurePdfJsRuntime(): void {
  installGetOrInsertComputed(Map);
  installGetOrInsertComputed(WeakMap);
}

function installGetOrInsertComputed(constructor: MapConstructor | WeakMapConstructor): void {
  const prototype = constructor.prototype as Map<unknown, unknown> & {
    getOrInsertComputed?: (key: unknown, callback: (key: unknown) => unknown) => unknown;
  };
  if (typeof prototype.getOrInsertComputed === "function") {
    return;
  }
  Object.defineProperty(prototype, "getOrInsertComputed", {
    configurable: true,
    writable: true,
    value(this: Map<unknown, unknown>, key: unknown, callback: (key: unknown) => unknown) {
      if (this.has(key)) {
        return this.get(key);
      }
      const value = callback(key);
      this.set(key, value);
      return value;
    },
  });
}
