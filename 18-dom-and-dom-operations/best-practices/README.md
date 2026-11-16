# Best Practices

Code for the lecture *Best Practices* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
Every example is the shop page of *How to Select Elements* with one snippet, in a `.js` file with the same name.

- `examples/01-run-after-the-tree.html` - a script in the `head` with `defer` runs once the tree exists
- `examples/02-select-once.html` - find a container once, search inside it by a hook, and check for `null`
- `examples/03-text-content.html` - search text goes in with `textContent`, not `innerHTML`
- `examples/04-build-off-the-page.html` - `innerHTML +=` in a loop against rows built first and inserted in one call
- `examples/05-observe-then-stop.html` - an `IntersectionObserver` that disconnects once every product has shown
- `examples/06-load-settings.html` - stored settings load through one function with defaults

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console.
