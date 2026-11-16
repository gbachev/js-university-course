// The same sort in a worker: the main thread only copies the books and stays free.
// The times come from the machine we measured on, so yours will differ.
const books = Array.from({ length: 200000 }, (_, i) => ({
    id: i,
    title: `Book ${Math.random().toString(36).slice(2, 10)}`,
}));

let start = 0;
const ms = () => Math.round(performance.now() - start);

const worker = new Worker(
    new URL('./sort-worker.js', import.meta.url),
    { type: 'module' }
);

worker.addEventListener('message', (event) => {
    console.log(`Sorted at ${ms()} ms`, event.data.length);
});

document.querySelector('#like').addEventListener('click', () => {
    console.log(`Like handled at ${ms()} ms`);
});

document.querySelector('#sort').addEventListener('click', () => {
    start = performance.now();
    worker.postMessage(books);
    console.log(`Copied at ${ms()} ms`);
});
// Copied at 28 ms
// Like handled at 31 ms
// Sorted at 194 ms 200000
