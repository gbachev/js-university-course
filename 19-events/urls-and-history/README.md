# URLs and the History API

Code for the lecture *URLs and the History API* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
Examples 01-04 run in Node, examples 05-06 in the browser.

- `examples/01-url-parts.js` - the parts of a `URL` object, and writing them
- `examples/02-resolve-and-validate.js` - resolving relative addresses against a base, the `TypeError` for an invalid one, and `URL.canParse()`
- `examples/03-search-params.js` - `get()`, `getAll()`, `set()`, `append()`, `delete()`, iterating and the encoded query string
- `examples/04-glued-vs-built.js` - a glued query string breaks on `&`, a built one does not
- `examples/05-history.html` - `pushState()` and `replaceState()` change the address without a reload, and the button fires `popstate`
- `examples/06-router.html` - the tiny router of the lecture; the network panel shows no page loads

Run a Node example with `node 19-events/urls-and-history/examples/01-url-parts.js` from the repository folder. For the browser examples, run `npm run serve`, open a page from the address it prints and look at the console. The lecture's `location.search = ...` snippet reloads the page, so it has no example of its own.

## Tasks
1. **Read the filters** (`tasks/01-read-the-filters.js`) - read a search address into `{ query, page, tags }` with `URLSearchParams`
2. **Build the search URL** (`tasks/02-build-the-search-url.js`) - build a search address from form fields, leaving out the empty ones
3. **A tiny router** (`tasks/03-tiny-router.js`) - switch views with `pushState()` on link clicks and render again on `popstate` (browser)

Run the tests of tasks 1 and 2 with `npm test -- 19-events/urls-and-history`. Task 3 runs in the browser: run `npm run serve`, open the task page and read the checks at the bottom of it. The tests and checks fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of the task page to run its checks against the solution.
