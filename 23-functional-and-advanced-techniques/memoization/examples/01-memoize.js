// memoize() keeps a Map of results in its closure, so a repeated search is free.
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

let calls = 0;

function booksByAuthor(author) {
    calls++;
    return books.filter((book) => book.author === author);
}

const findByAuthor = memoize(booksByAuthor);

console.log(findByAuthor('Author 7').length); // 200
console.log(findByAuthor('Author 7').length); // 200
console.log(findByAuthor('Author 8').length); // 200
console.log(calls); // 2
