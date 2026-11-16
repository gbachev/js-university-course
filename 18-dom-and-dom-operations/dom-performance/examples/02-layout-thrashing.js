// Read, write, read, write: every read forces a new layout. Read all, then write all.
const list = document.querySelector('ul');
for (let i = 1; i <= 1000; i++) {
    const row = document.createElement('li');
    row.textContent = `Book ${i}`;
    list.append(row);
}
const rows = [...list.children];

let start = performance.now();
for (const row of rows) {
    const height = row.offsetHeight; // read: forces layout
    row.style.height = `${height + 4}px`; // write: layout is stale
}
const thrashing = performance.now() - start;

start = performance.now();
const heights = rows.map((row) => row.offsetHeight);
rows.forEach((row, i) => {
    row.style.height = `${heights[i] + 4}px`;
});
const batched = performance.now() - start;

console.log(`${Math.round(thrashing / batched)}x faster`);
// 200x faster (your number will differ by machine and browser)
