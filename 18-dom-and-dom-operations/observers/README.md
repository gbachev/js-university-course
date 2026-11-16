# MutationObserver & IntersectionObserver

Code for the lecture *MutationObserver & IntersectionObserver* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is the inbox page of the lecture with one snippet, in a `.js` file with the same name.

- `examples/01-mutation-observer.html` - a `MutationObserver` reports the rows a widget adds and removes
- `examples/02-what-to-observe.html` - `subtree`, `attributeFilter` and `attributeOldValue`
- `examples/03-callbacks-are-microtasks.html` - the observer callback runs after the script, before the timer
- `examples/04-polling.html` - checking with `setInterval()` whether the last notification shows
- `examples/05-intersection-observer.html` - mark each notification as seen once half of it shows
- `examples/06-threshold-and-ratio.html` - `threshold` and `intersectionRatio` while the script scrolls the page

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Examples 4 and 5 wait for us to scroll down. Example 6 scrolls for us: it waits two frames between the scroll lines, which the lecture runs one by one in the console.

## Tasks
1. **Count the unread** (`tasks/01-count-the-unread.js`) - keep an unread counter in step with the notifications a widget adds, removes and marks as seen
2. **Mark as seen** (`tasks/02-mark-as-seen.js`) - mark each notification as seen once half of it shows, and stop watching it

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
