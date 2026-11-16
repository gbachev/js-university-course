export function markReachable(heap, roots) {
    const marked = new Set();
    const toVisit = [...roots];

    while (toVisit.length > 0) {
        const name = toVisit.pop();
        if (marked.has(name)) {
            continue; // already marked: this is how we get out of a cycle
        }
        marked.add(name);
        toVisit.push(...(heap[name] ?? []));
    }

    return [...marked].sort();
}
