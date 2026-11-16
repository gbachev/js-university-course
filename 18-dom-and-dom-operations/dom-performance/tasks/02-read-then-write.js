// Task 2: Read all, then write all
// Lecture: DOM Performance: Reflows, Repaints and DocumentFragment
//
// growRows(rows, extra) makes every row extra pixels taller than it is now. rows is an
// array of elements. It works, but it reads offsetHeight and sets style.height in turn,
// so every read forces a new layout: layout thrashing. Change it to read the height of
// every row first, and only then write all the new heights. The rows must end up just
// as tall as before. Write the heights before growRows() returns (no
// requestAnimationFrame here).
//
// Examples:
//   growRows([...list.children], 4);   // every row is 4 pixels taller
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/dom-performance/tasks/02-read-then-write.html

export function growRows(rows, extra) {
    for (const row of rows) {
        const height = row.offsetHeight;
        row.style.height = `${height + extra}px`;
    }
}
