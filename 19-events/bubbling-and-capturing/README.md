# Bubbling and Capturing

Code for the lecture *Bubbling and Capturing* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-one-click-many-listeners.html` - one click bubbles from the button up to `body`
- `examples/02-capture-phase.html` - capture listeners run first, on the way down, with `eventPhase`
- `examples/03-remove-needs-capture-flag.html` - `removeEventListener()` needs the same capture flag
- `examples/04-stop-propagation.html` - `stopPropagation()` and `stopImmediatePropagation()`
- `examples/05-stopping-hides-clicks.html` - a stopped click never reaches the menu and the counter on `document`
- `examples/06-prevent-default-vs-stop-propagation.html` - a checkbox shows that the two do different things
- `examples/07-focus-does-not-bubble.html` - `focus` does not bubble, `focusin` does (click into the search box)

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`.

## Tasks
1. **Mark read, and count it** (`tasks/01-mark-read.js`) - drop a `stopPropagation()` that hides clicks from the click counter
2. **The click trail** (`tasks/02-click-trail.js`) - let the list hear a click first, in the capture phase, and still remove its listener
3. **The active field** (`tasks/03-active-field.js`) - highlight the focused field with one pair of listeners on the form

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
