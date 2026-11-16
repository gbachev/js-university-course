export function countReferences(heap, roots) {
    const counts = {};
    for (const name of Object.keys(heap)) {
        counts[name] = 0;
    }
    for (const name of roots) {
        counts[name] += 1;
    }
    for (const references of Object.values(heap)) {
        for (const name of references) {
            counts[name] += 1;
        }
    }
    return counts;
}
