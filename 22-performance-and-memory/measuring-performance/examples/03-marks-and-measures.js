// The User Timing API keeps the results as data: marks, measures and entries.
// The durations differ by machine and by run.
const books = Array.from({ length: 10000 }, (_, i) => ({
    key: `/works/OL${i % 8000}W`,
    title: `Book ${(i * 7919) % 10000}`,
}));

function uniqueByKey(list) {
    return list.filter(
        (book, i) => list.findIndex((b) => b.key === book.key) === i,
    );
}

function uniqueByKeyFast(list) {
    const seen = new Set();
    return list.filter((book) => {
        if (seen.has(book.key)) {
            return false;
        }
        seen.add(book.key);
        return true;
    });
}

performance.mark('slow-start');
uniqueByKey(books);
performance.mark('slow-end');
performance.measure('unique (findIndex)', 'slow-start', 'slow-end');

performance.mark('fast-start');
uniqueByKeyFast(books);
performance.measure('unique (Set)', 'fast-start');

for (const entry of performance.getEntriesByType('measure')) {
    console.log(entry.name, entry.duration.toFixed(1));
}
// unique (findIndex) 170.7
// unique (Set) 1.4

const [slow] = performance.getEntriesByName('unique (findIndex)');
const [fast] = performance.getEntriesByName('unique (Set)');
console.log(`${Math.round(slow.duration / fast.duration)}x faster`);
// 121x faster
