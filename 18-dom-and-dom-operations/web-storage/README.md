# Web Storage: localStorage and sessionStorage

Code for the lecture *Web Storage: localStorage and sessionStorage* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is a small page with one snippet, in a `.js` file with the same name.

- `examples/01-four-methods.html` - `setItem()`, `getItem()`, `removeItem()`, `clear()` and `length`
- `examples/02-strings-only.html` - a number and an object come back as strings
- `examples/03-json.html` - `JSON.stringify()` on the way in, `JSON.parse()` on the way out
- `examples/04-loading-safely.html` - load the reading list with a default and a `try...catch`
- `examples/05-quota.html` - six MiB is past the limit, and `setItem()` throws a `QuotaExceededError`
- `examples/06-storage-event.html` - the `storage` event tells the other tabs about a change

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. All the pages of the server share one origin, so they share one `localStorage`: example 1 clears it first, and example 4 starts by removing its key, like a first visit. DevTools shows the saved keys under **Application > Local Storage**. Example 6 needs the page open in two tabs.

## Tasks
1. **Count the visits** (`tasks/01-count-the-visits.js`) - fix a visit counter that gives 11 on the second visit
2. **Remember the theme** (`tasks/02-remember-the-theme.js`) - save the theme and load it back, with a default for a first visit and for edited values
3. **Load the list safely** (`tasks/03-load-the-list-safely.js`) - fix a reading list that breaks on a missing key, broken JSON or a full store

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
