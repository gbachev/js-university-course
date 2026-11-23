# Web Components: Custom Elements in Depth

Code for the lecture *Web Components: Custom Elements in Depth* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is a page with one snippet of the lecture, in a `.js` file with the same name.

- `examples/01-lifecycle-and-upgrade.html` - the `book-card` in the page before it is defined, the upgrade, and the order of the lifecycle callbacks
- `examples/02-attributes-vs-properties.html` - the `price` property reflects to the `price` attribute, which is always a string
- `examples/03-clean-up.html` - a `sale-badge` clears its timer in `disconnectedCallback()`, and a move calls both callbacks
- `examples/04-form-associated.html` - a `copies-field` that takes part in `FormData` and in `form.reset()`

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console.

## Tasks
1. **A rating that follows its attribute** (`tasks/01-rating-attribute.js`) - watch the `value` attribute with `observedAttributes` and render the stars again when it changes
2. **Clean up on remove** (`tasks/02-clean-up-on-remove.js`) - stop the timer of a counter when it leaves the page
3. **A form-associated rating field** (`tasks/03-form-field.js`) - make a rating field part of its form's data and reset

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
