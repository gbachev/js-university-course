export function groupBy(items, getKey) {
    const groups = {};
    for (const item of items) {
        const key = getKey(item);
        groups[key] ??= [];
        groups[key].push(item);
    }
    return groups;
}
