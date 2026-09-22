export function moveItem<T>(items: T[], from: number, to: number): T[] {
  if (
    from === to ||
    from < 0 ||
    to < 0 ||
    from >= items.length ||
    to >= items.length
  ) {
    return items;
  }

  const next = [...items];
  const [item] = next.splice(from, 1);
  if (item === undefined) {
    return items;
  }
  next.splice(to, 0, item);
  return next;
}

export function removeAt<T>(items: T[], index: number): T[] {
  if (index < 0 || index >= items.length) {
    return items;
  }
  return items.filter((_, current) => current !== index);
}
