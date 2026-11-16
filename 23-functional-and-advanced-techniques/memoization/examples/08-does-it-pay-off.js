// Measuring: a heavy search pays off, a single multiplication does not.
// The timings come from one run in Node 22 and vary by machine and run.
function memoize(fn) {
    const cache = new Map();

    return (arg) => {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        const result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}

const books = Array.from({ length: 100_000 }, (_, i) => ({
    title: `Book ${i}`,
    author: `Author ${i % 500}`,
}));

const findByAuthor = memoize((author) => books.filter((book) => book.author === author));

function timeIt(label, run) {
    const start = performance.now();
    run();
    const ms = performance.now() - start;
    console.log(`${label}: ${ms.toFixed(3)} ms`);
}

timeIt('first search', () => findByAuthor('Author 9'));
// first search: 0.830 ms
timeIt('same search', () => findByAuthor('Author 9'));
// same search: 0.015 ms

const withVat = (price) => price * 1.2;
const memoWithVat = memoize(withVat);

timeIt('plain', () => {
    for (let i = 0; i < 1_000_000; i++) withVat(i % 1000);
});
// plain: 1.855 ms
timeIt('memoized', () => {
    for (let i = 0; i < 1_000_000; i++) memoWithVat(i % 1000);
});
// memoized: 10.532 ms
