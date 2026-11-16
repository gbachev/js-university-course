# Best Practices

Code for the lecture *Best Practices* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-abort-on-close.html` - one `AbortController` for the open panel, aborted on close
- `examples/02-delegate-with-closest.html` - delegating with `closest()` and `list.contains()`
- `examples/03-submit-and-formdata.html` - a `submit` listener that reads the form with `FormData`
- `examples/04-small-listeners.html` - the listener finds the item, a plain function does the work

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`.
