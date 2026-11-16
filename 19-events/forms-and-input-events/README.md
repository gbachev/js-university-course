# Forms and Input Events

Code for the lecture *Forms and Input Events* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-submit-event.html` - one `submit` listener, and `requestSubmit()` that stops at a required field
- `examples/02-reading-values.html` - `form.elements`, `FormData`, `getAll()` and `Object.fromEntries()`
- `examples/03-input-vs-change.html` - `input` on every keystroke, `change` when the value is committed
- `examples/04-keyboard-events.html` - `key`, `code` and `shiftKey` of a key press
- `examples/05-slash-shortcut.html` - "/" jumps to the title box
- `examples/06-constraint-validation.html` - `checkValidity()`, `validity` and `validationMessage`
- `examples/07-set-custom-validity.html` - our own rule with `setCustomValidity()`

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`. Examples 3, 4, 5 and 7 wait for us: the page says what to type or press. The browser writes `validationMessage` in our own language, so its text may differ from the comment.

## Tasks
1. **Add a book with FormData** (`tasks/01-add-book-form.js`) - read a submitted form with `FormData`, tags included, and reset it
2. **Search as we type** (`tasks/02-live-search.js`) - filter the list on `input`, and clear it with Escape
3. **Our own validation messages** (`tasks/03-validation-messages.js`) - show our messages on submit and mark a duplicate title with `setCustomValidity()`

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
