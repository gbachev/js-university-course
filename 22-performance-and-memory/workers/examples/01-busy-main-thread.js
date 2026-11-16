// Sorting 200,000 books on the main thread: the Like click has to wait.
// The times come from the machine we measured on, so yours will differ.
const books = Array.from({ length: 200000 }, (_, i) => ({
    id: i,
    title: `Book ${Math.random().toString(36).slice(2, 10)}`,
}));

let start = 0;
const ms = () => Math.round(performance.now() - start);

document.querySelector('#like').addEventListener('click', () => {
    console.log(`Like handled at ${ms()} ms`);
});

document.querySelector('#sort').addEventListener('click', () => {
    start = performance.now();
    const sorted = books.toSorted(
        (a, b) => a.title.localeCompare(b.title)
    );
    console.log(`Sorted at ${ms()} ms`);
});
// Sorted at 160 ms
// Like handled at 161 ms
