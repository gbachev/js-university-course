// A cache with a size limit: the oldest entry goes when the cache is full.
const books = ['Dune', 'Emma', 'Ulysses', 'Dracula'];
const results = new Map();
const MAX_RESULTS = 100;

function search(query) {
    if (results.has(query)) {
        return results.get(query);
    }
    if (results.size === MAX_RESULTS) {
        // a Map keeps insertion order, so the first key is the oldest
        results.delete(results.keys().next().value);
    }
    const found = books.filter((title) => title.includes(query));
    results.set(query, found);
    return found;
}

for (let i = 0; i < 1000; i++) {
    search(`query ${i}`);
}

console.log(search('D')); // [ 'Dune', 'Dracula' ]
console.log(results.size); // 100
