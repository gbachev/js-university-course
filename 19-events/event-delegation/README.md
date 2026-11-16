# Event Delegation

Code for the lecture *Event Delegation* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-listener-per-item.html` - a listener per button misses the book we add later
- `examples/02-one-listener-on-parent.html` - one listener on the list, and `closest()` to find the button
- `examples/03-elements-added-later.html` - the list's listener also removes a book added later
- `examples/04-staying-inside-the-list.html` - `closest()` walks past the list, so we check `list.contains()`
- `examples/05-routing-with-data-action.html` - one listener for two actions, read from `data-action`
- `examples/06-focusin.html` - highlighting the row with focus through `focusin` and `focusout`

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`.

## Tasks
1. **One listener for the list** (`tasks/01-one-listener.js`) - replace a listener per Remove button with one on the list
2. **The cart buttons** (`tasks/02-cart-actions.js`) - route the "+", "-" and "Remove" buttons of a shop cart by `data-action`

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
