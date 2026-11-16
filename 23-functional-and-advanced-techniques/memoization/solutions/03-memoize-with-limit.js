export function memoizeWithLimit(fn, maxSize = 100) {
    const cache = new Map();

    return (arg) => {
        if (cache.has(arg)) {
            // move the key to the end: it is now the most recently used
            const result = cache.get(arg);
            cache.delete(arg);
            cache.set(arg, result);
            return result;
        }
        if (cache.size === maxSize) {
            // the first key of a Map is the least recently used one
            cache.delete(cache.keys().next().value);
        }
        const result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}
