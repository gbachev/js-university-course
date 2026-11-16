export function createTickets(count, prefix) {
    // We only need the index, so the value parameter is _.
    return Array.from({ length: count }, (_, i) => prefix + '-' + (i + 1));
}
