# Passive Event Listeners

Code for the lecture *Passive Event Listeners* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-passive-ignores-prevent-default.html` - a passive listener cannot cancel the wheel
- `examples/02-passive-by-default.html` - a `wheel` listener on `window` is passive without being asked
- `examples/03-scroll-not-cancelable.html` - the `scroll` event cannot be canceled
- `examples/04-swipe-gallery.html` - a swipe gallery with a `{ passive: false }` `touchmove` listener
- `examples/05-touch-action.html` - the same gallery with `touch-action: pan-y` and passive listeners only

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`. Examples 4 and 5 need touch: open DevTools, turn on the device toolbar and swipe the list sideways.

## Tasks
1. **Track reading, smoothly** (`tasks/01-track-reading.js`) - we mark two listeners that never cancel the scroll as passive
2. **A zoom that zooms** (`tasks/02-map-zoom.js`) - a Ctrl + wheel zoom on `document` that really cancels the page zoom

The tasks run in the browser too. Run `npm run serve`, open the task page (the `.html` file with the same name) and read the checks at the bottom of it. They fail until the task is solved: we write our code in the `.js` file and reload. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
