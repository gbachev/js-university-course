# Accessibility Basics

Code for the lecture *Accessibility Basics* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-native-elements.html` - a `<button>` is in the Tab order and answers Enter, a `div` is not
- `examples/02-div-as-button.html` - `role="button"`, `tabIndex = 0` and a `keydown` listener make a `div` work like a button
- `examples/03-focus-visible.html` - `outline: none` hides the focus, `:focus-visible` shows a clear ring
- `examples/04-focus-after-remove.html` - after removing a row we move the focus to the next one, or to the heading
- `examples/05-accessible-names.html` - names from a `<label>` and from `aria-label`
- `examples/06-aria-live.html` - a polite live region announces the book we added
- `examples/07-hidden-vs-aria-hidden.html` - `hidden` removes an element for everyone, `aria-hidden="true"` only for screen readers

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page with code loads it from the `.js` file with the same name, with `defer`. Examples 1, 2 and 4 wait for us: the page says what to press. Examples 3, 5 and 7 have no code: we press Tab, or look at the Accessibility tab of DevTools.

## Tasks
1. **A div that works like a button** (`tasks/01-keyboard-button.js`) - give a `div` the button role, put it in the Tab order and press it with Enter and Space
2. **Keep the focus in place** (`tasks/02-focus-after-remove.js`) - after removing a row, move the focus to the next row, the previous row or the heading
3. **Name it and say it** (`tasks/03-add-and-announce.js`) - name each new "Remove" button and announce the added book in a live region

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
