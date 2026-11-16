# DOM Manipulation

Code for the lecture *DOM Manipulation* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is the reading list page of the lecture with one snippet, in a `.js` file with the same name.

- `examples/01-create-and-insert.html` - `createElement()`, then `append()`, `prepend()`, `before()` and `after()`
- `examples/02-move-remove-replace.html` - inserting moves a node, `remove()`, `replaceWith()` and `replaceChildren()`
- `examples/03-inner-html-xss.html` - a title typed by a user is safe with `textContent` and runs code with `innerHTML`
- `examples/04-inner-html-in-a-loop.html` - `innerHTML +=` rebuilds the list and throws the old rows away
- `examples/05-class-list.html` - `classList.add()`, `remove()`, `contains()` and `toggle()`
- `examples/06-attributes-vs-properties.html` - the `value` attribute holds the default, the property the current value
- `examples/07-template.html` - fill a copy of a `template` for each book with `cloneNode(true)`

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Example 3 shows an alert on purpose: that is the attacker's code running.

## Tasks
1. **Render from a template** (`tasks/01-render-from-a-template.js`) - fill a template for each book and replace what the list showed before
2. **Mark as read** (`tasks/02-mark-as-read.js`) - toggle the read class of a book and keep its status text in step
3. **Keep the rows** (`tasks/03-keep-the-rows.js`) - fix a function that adds rows with `innerHTML +=` and so loses ticked checkboxes and lets markup in

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
