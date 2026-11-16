export function getTitles(results) {
    // Spread needs an iterable; Array.from() also works on array-like objects.
    return Array.from(results, title => title.trim());
}
