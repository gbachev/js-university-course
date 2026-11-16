# What Is the DOM?

Code for the lecture *What Is the DOM?* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-document-object.html` - `document` and its shortcuts to the main elements
- `examples/02-child-nodes.html` - `childNodes`, `nodeType` and `nodeName`, whitespace text nodes included
- `examples/03-table-tbody.html` - the browser adds the `tbody` our markup leaves out
- `examples/04-live-title.html` - the DOM is live: a new `document.title` shows in the tab at once
- `examples/05-script-in-head.html` - a script in the `head` runs before the `body` exists

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Examples 1 to 4 load their code from the `.js` file with the same name, with `defer`.

## Tasks
1. **Count the elements** (`tasks/01-count-elements.js`) - count the element children of a list, skipping text and comment nodes
2. **The book titles** (`tasks/02-book-titles.js`) - read the titles of a reading list from the text nodes inside its `li` elements
3. **A title with a count** (`tasks/03-title-with-count.js`) - show the number of books in the tab title

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
