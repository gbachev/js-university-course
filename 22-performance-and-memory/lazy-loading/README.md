# Lazy Loading

Code for the lecture *Lazy Loading* (section 22, Performance and Memory) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-lazy-images-and-iframes.html` - `loading="lazy"` on covers and an iframe (with `store-map.html`)
- `examples/02-eager-lcp-image.html` - the book of the month stays eager, with `fetchpriority="high"`, `width` and `height`
- `examples/03-infinite-scroll.html` - load the next page of books with an `IntersectionObserver` and a sentinel (with `03-infinite-scroll.js`)
- `examples/04-lazy-import.html` - `import()` loads `export.js` on `pointerenter` or on the first click (with `04-lazy-import.js`)

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and watch the Network panel and the console. The covers in `examples/covers/` and `examples/images/` are small SVG files, so the examples need no photos.

## Tasks
1. **Which covers to load** (`tasks/01-which-covers-to-load.js`) - work out which covers overlap the screen and its margin
2. **Load the module once** (`tasks/02-load-the-module-once.js`) - start a download once, share its promise, and try again after a failure
3. **Lazy covers** (`tasks/03-lazy-covers.js`) - copy `data-src` into `src` with an `IntersectionObserver` when a cover comes near (browser)

Tasks 1 and 2 run with `npm test -- 22-performance-and-memory/lazy-loading`. Task 3 runs in the browser: run `npm run serve`, open `tasks/03-lazy-covers.html` and read the checks at the bottom of it. They fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of the page to run the solution.
