# Events Basics

Code for the lecture *Events Basics* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-add-remove-listener.html` - the same function added twice runs once, and only the same reference removes it
- `examples/02-event-object.html` - `type`, `target`, `currentTarget` and `timeStamp` of a click
- `examples/03-prevent-default.html` - a link and a form that do not leave the page
- `examples/04-options-object.html` - the `once` option, and one `AbortController` that removes two listeners
- `examples/05-on-properties.html` - a second `onclick` replaces the first
- `examples/06-this-in-listener.html` - `this` in a regular and in an arrow listener
- `examples/07-domcontentloaded-and-load.html` - a deferred script, then `DOMContentLoaded`, then `load`

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`. Example 6 is a classic script, not a module, so `this` at its top level is `window`.

## Tasks
1. **Read more, in place** (`tasks/01-read-more.js`) - stop a "Read more" link from jumping while it shows the description
2. **Welcome only once** (`tasks/02-welcome-once.js`) - greet the reader on the first click only, with the `once` option
3. **Lock the list** (`tasks/03-lock-the-list.js`) - switch off two buttons at once with an `AbortController`

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
