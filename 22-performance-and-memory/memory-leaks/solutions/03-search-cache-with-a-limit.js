export function createCachedSearch(find, maxResults) {
    const results = new Map();

    function search(query) {
        if (results.has(query)) {
            const found = results.get(query);
            // set it again, so it moves to the end: the most recently used
            results.delete(query);
            results.set(query, found);
            return found;
        }
        if (results.size === maxResults) {
            // a Map keeps insertion order, so the first key is the one used longest ago
            results.delete(results.keys().next().value);
        }
        const found = find(query);
        results.set(query, found);
        return found;
    }

    return { search, size: () => results.size };
}
