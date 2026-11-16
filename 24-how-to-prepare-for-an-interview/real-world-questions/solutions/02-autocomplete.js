export function createAutocomplete(fetch, onResults, wait = 300) {
    const cache = new Map();
    let controller = null;
    let timer;

    async function suggest(text) {
        controller?.abort();
        const query = text.trim().toLowerCase();
        if (query === '') {
            onResults([]);
            return;
        }
        if (cache.has(query)) {
            onResults(cache.get(query));
            return;
        }
        controller = new AbortController();
        const { signal } = controller;
        try {
            const response = await fetch(`/api/books?q=${encodeURIComponent(query)}`, {
                signal,
            });
            const results = await response.json();
            cache.set(query, results);
            if (!signal.aborted) {
                onResults(results);
            }
        } catch (error) {
            // An aborted request is expected: a newer query replaced it.
            if (error.name !== 'AbortError') {
                throw error;
            }
        }
    }

    return function type(text) {
        clearTimeout(timer);
        timer = setTimeout(() => suggest(text), wait);
    };
}
