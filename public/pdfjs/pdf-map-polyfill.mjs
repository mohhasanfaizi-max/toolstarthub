function install(constructor) {
  if (typeof constructor.prototype.getOrInsertComputed === "function") {
    return;
  }
  Object.defineProperty(constructor.prototype, "getOrInsertComputed", {
    configurable: true,
    writable: true,
    value(key, callback) {
      if (this.has(key)) {
        return this.get(key);
      }
      const value = callback(key);
      this.set(key, value);
      return value;
    },
  });
}

install(Map);
install(WeakMap);
