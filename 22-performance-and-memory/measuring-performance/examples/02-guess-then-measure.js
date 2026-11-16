// We guess the sort is slow, then time both steps with console.time().
// The times differ by machine and by run: compare orders of magnitude.
const books = Array.from({ length: 10000 }, (_, i) => ({
    key: `/works/OL${i % 8000}W`,
    title: `Book ${(i * 7919) % 10000}`,
}));

function uniqueByKey(list) {
    return list.filter(
        (book, i) => list.findIndex((b) => b.key === book.key) === i,
    );
}

function sortByTitle(list) {
    return [...list].sort((a, b) => a.title.localeCompare(b.title));
}

console.time('unique');
const unique = uniqueByKey(books);
console.timeEnd('unique'); // unique: 171.154ms

console.time('sort');
const sorted = sortByTitle(unique);
console.timeEnd('sort'); // sort: 9.858ms

console.log(sorted.length); // 8000
