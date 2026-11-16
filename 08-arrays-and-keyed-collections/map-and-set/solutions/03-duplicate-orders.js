export function findDuplicates(orderIds) {
    const seen = new Set();
    const duplicates = new Set();

    for (const id of orderIds) {
        if (seen.has(id)) {
            // A Set adds the id only the first time we find it again.
            duplicates.add(id);
        } else {
            seen.add(id);
        }
    }

    return [...duplicates];
}
