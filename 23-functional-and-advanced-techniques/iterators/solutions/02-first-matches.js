export function firstMatches(items, test, count) {
    return items.values().filter(test).take(count).toArray();
}
