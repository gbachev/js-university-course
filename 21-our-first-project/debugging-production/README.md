# Debugging in Production

Code for the lecture *Debugging in Production* (section 21, Our First Project) of the JavaScript course at gbachev.com.

The lecture follows one bug through an imagined release 1.1.0 of the Reading List, which adds the day each book was added. That release is not in [`reading-list/`](../reading-list): the examples and tasks here hold its code on their own.

## Examples
- `examples/01-report.html` with `examples/01-report.js` and `examples/01-report-page.js` - the lecture's `report.js` reporter, unchanged, with breadcrumbs and two buttons that break the page; a fake `sendBeacon()` shows each report on the page instead of sending it
- `examples/02-invalid-date.js` - `new Date(undefined)` is an invalid date, and its `toISOString()` throws a `RangeError`
- `examples/03-reproduce-old-data.js` - a list saved in the shape of 1.0.0 passes `isBook()` and breaks `addedText()` of 1.1.0
- `examples/04-the-fix.js` - `addedText()` of 1.1.1, which returns an empty string for a book without `addedAt`

The page runs in the browser: we start `npm run serve` from the repository folder, open `21-our-first-project/debugging-production/examples/01-report.html` and open the console. The Node examples run with `node 21-our-first-project/debugging-production/examples/02-invalid-date.js` from the repository folder.

The lecture's `vite.config.js` (with `define` and `sourcemap: 'hidden'`) and the release commands (`npm version`, `npm run build`, removing the `.map` files) are for reading only: they belong to a real Vite project with its own git repository, and `npm version` commits and tags, so we do not run them in this repository.

## Tasks
1. **Old saved books** (`tasks/01-old-saved-books.js`) - fix the `addedText()` of 1.1.0 so the failing old-data test passes
2. **The last five steps** (`tasks/02-breadcrumbs.js`) - a breadcrumb buffer that keeps only the last few actions
3. **A report without personal data** (`tasks/03-safe-report.js`) - build the error report with no query string or hash in the address and at most five breadcrumbs

Run the tests with `npm test -- 21-our-first-project/debugging-production` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
