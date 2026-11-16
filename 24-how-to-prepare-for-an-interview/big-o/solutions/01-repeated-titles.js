export function repeatedTitles(titles) {
    const seen = new Set();
    const repeated = new Set();
    for (const title of titles) {
        if (seen.has(title)) {
            repeated.add(title);
        }
        seen.add(title);
    }
    // A Set keeps insertion order: the order of the first repeats.
    return [...repeated];
}
