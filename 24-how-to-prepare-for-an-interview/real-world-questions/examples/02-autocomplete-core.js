// A stand-in for the server: it answers after 100 ms, ranks titles that start with
// the query first, and stops when the signal aborts.
const titles = ['Children of Dune', 'Dune', 'Dune Messiah', 'Emma'];
let requests = 0;

function searchTitles(query, signal) {
    requests++;
    return new Promise((resolve, reject) => {
        const id = setTimeout(() => {
            const hits = titles.filter(
                (title) => title.toLowerCase().includes(query),
            );
            const rank = (title) =>
                title.toLowerCase().startsWith(query) ? 0 : 1;
            resolve(hits.toSorted((a, b) => rank(a) - rank(b)));
        }, 100);
        signal.addEventListener('abort', () => {
            clearTimeout(id);
            reject(signal.reason);
        });
    });
}

const cache = new Map();
let controller = null;

async function suggest(query) {
    controller?.abort();
    const key = query.trim().toLowerCase();
    if (cache.has(key)) {
        return cache.get(key);
    }
    controller = new AbortController();
    const results = await searchTitles(key, controller.signal);
    cache.set(key, results);
    return results;
}

suggest('du').catch((error) => console.log(error.name)); // AbortError
console.log(await suggest('dune'));
// [ 'Dune', 'Dune Messiah', 'Children of Dune' ]
console.log(await suggest('Dune '));
// [ 'Dune', 'Dune Messiah', 'Children of Dune' ]
console.log(requests); // 2
