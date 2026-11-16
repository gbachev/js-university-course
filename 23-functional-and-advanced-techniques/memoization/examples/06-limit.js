// A size limit: a Map keeps insertion order, so its first key is the oldest.
function memoizeWithLimit(fn, maxSize = 100) {
    const cache = new Map();

    return (arg) => {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        if (cache.size === maxSize) {
            // the first key of a Map is the oldest one
            cache.delete(cache.keys().next().value);
        }
        const result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}

let calls = 0;
const slugify = memoizeWithLimit((title) => {
    calls++;
    return title.toLowerCase().replaceAll(' ', '-');
}, 2);

slugify('Dune');
slugify('Jane Eyre');
slugify('Emma'); // the cache is full: 'Dune' goes
slugify('Dune'); // computed again
console.log(calls); // 4
