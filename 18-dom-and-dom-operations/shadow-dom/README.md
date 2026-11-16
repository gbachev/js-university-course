# Shadow DOM

Code for the lecture *Shadow DOM* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is the cards page of the lecture with one snippet, in a `.js` file with the same name.

- `examples/01-attach-shadow.html` - `attachShadow()` and a title that `document.querySelector()` cannot find
- `examples/02-open-vs-closed.html` - a closed root hides from `shadowRoot`, and a second root throws
- `examples/03-styles-stay-inside.html` - page and shadow styles stay on their side, inherited properties flow in
- `examples/04-custom-element.html` - a minimal `book-card` custom element with `connectedCallback()`
- `examples/05-slots.html` - the default slot and a named slot show the card's own children
- `examples/06-host-styles.html` - `:host` and `:host(.sale)` style the card itself

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console.

## Tasks
1. **A price tag** (`tasks/01-price-tag.js`) - put a price in a shadow root so the page styles cannot change its look
2. **The book-card element** (`tasks/02-book-card.js`) - finish a custom element that shows a book's name and author in its shadow root

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
