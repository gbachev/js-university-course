# DOM Performance Tips (Reflows, Repaints, DocumentFragment)

Code for the lecture *DOM Performance Tips (Reflows, Repaints, DocumentFragment)* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is the reading list page of the lecture with one snippet, in a `.js` file with the same name.

- `examples/01-forced-layout.html` - reading `offsetHeight` after two writes forces a layout on the spot
- `examples/02-layout-thrashing.html` - 1000 rows timed: read, write, read, write against read all, then write all
- `examples/03-document-fragment.html` - build rows in a `DocumentFragment` and insert them at once
- `examples/04-toggle-a-class.html` - one class switches the look of every row
- `examples/05-request-animation-frame.html` - a progress bar that grows with `requestAnimationFrame()` and `transform`

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. The number in example 2 differs by machine and browser.

## Tasks
1. **Insert once** (`tasks/01-insert-once.js`) - change a function that appends rows one by one so the list changes only once
2. **Read all, then write all** (`tasks/02-read-then-write.js`) - fix a loop that makes rows taller with layout thrashing
3. **Compact mode** (`tasks/03-compact-mode.js`) - switch a compact look with one class instead of inline styles on every row

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
