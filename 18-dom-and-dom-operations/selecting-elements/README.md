# How to Select Elements

Code for the lecture *How to Select Elements* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is the shop page of the lecture with one snippet, in a `.js` file with the same name.

- `examples/01-query-selector.html` - `querySelector()` and `querySelectorAll()` with CSS selectors
- `examples/02-when-nothing-matches.html` - no match gives `null` or an empty list, and the error comes when we use it
- `examples/03-live-vs-static.html` - a live `HTMLCollection` next to a static `NodeList`
- `examples/04-looping.html` - `forEach()`, `for...of` and `Array.from()` on the two collections
- `examples/05-closest-and-matches.html` - `closest()` walks up from an element, `matches()` tests it
- `examples/06-walking-the-tree.html` - `parentElement`, `children` and the sibling properties
- `examples/07-dataset.html` - `data-*` attributes through `dataset`, always strings

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console.

## Tasks
1. **The price of a product** (`tasks/01-price-of-a-product.js`) - find a product by its `data-product-id` and read its price as a number
2. **Names on sale** (`tasks/02-names-on-sale.js`) - collect the names of the products on sale into an array
3. **Which product?** (`tasks/03-which-product.js`) - fix a function that finds the product of an Add button only when the button is a direct child

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
