export function sortBy(items, getValue) {
    // sort() changes the array it sorts, so we sort a copy.
    return [...items].sort((a, b) => getValue(a) - getValue(b));
}
