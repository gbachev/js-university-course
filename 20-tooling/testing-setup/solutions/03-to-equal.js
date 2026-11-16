function isObject(value) {
    return typeof value === 'object' && value !== null;
}

export function isEqual(a, b) {
    if (Object.is(a, b)) {
        return true;
    }
    if (!isObject(a) || !isObject(b) || Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }
    // For arrays, the keys are the indexes, so the same check covers both.
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    return keysA.every((key) => Object.hasOwn(b, key) && isEqual(a[key], b[key]));
}
