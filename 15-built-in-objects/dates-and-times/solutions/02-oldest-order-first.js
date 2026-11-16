export function sortByPlacedAt(orders) {
    // Subtracting two dates gives the difference in milliseconds.
    return [...orders].sort((a, b) => a.placedAt - b.placedAt);
}
