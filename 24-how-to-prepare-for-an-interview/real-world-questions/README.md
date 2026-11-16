# Real-world Questions

Code for the lecture *Real-world Questions* (section 24, How to Prepare for an Interview) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-event-delegation.html` - one click listener on the list handles the buttons of every item (browser)
- `examples/02-autocomplete-core.js` - the cache and the abort of an autocomplete, with a stand-in server
- `examples/03-combobox-markup.html` - the markup of an accessible autocomplete: `combobox`, `listbox` and an `aria-live` status (browser)

Run the Node example with `node 24-how-to-prepare-for-an-interview/real-world-questions/examples/02-autocomplete-core.js` from the repository folder. For the browser examples, run `npm run serve`, open the page from the address it prints and look at the console.

## Tasks
1. **Close without leaks** (`tasks/01-close-without-leaks.js`) - make a view stop its timer and remove its listener when it closes
2. **The autocomplete core** (`tasks/02-autocomplete.js`) - debounce, cache and abort stale requests, against a fake server
3. **One listener for the list** (`tasks/03-book-actions.html`) - rewrite per-button listeners as event delegation (browser)

Run the tests of tasks 1 and 2 with `npm test -- 24-how-to-prepare-for-an-interview/real-world-questions`. Task 3 runs in the browser: run `npm run serve`, open the task page and read the checks at the bottom of it. They fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of the task page to run its checks against the solution.
