export function deepClone(value, copies = new WeakMap()) {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    if (value instanceof Date) {
        return new Date(value.getTime());
    }
    // Seen it before: a cycle or a shared object, so we reuse its copy.
    if (copies.has(value)) {
        return copies.get(value);
    }
    const copy = Array.isArray(value) ? [] : {};
    copies.set(value, copy);
    for (const [key, item] of Object.entries(value)) {
        copy[key] = deepClone(item, copies);
    }
    return copy;
}
