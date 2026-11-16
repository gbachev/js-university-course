# Best Practices

Code for the lecture *Best Practices* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-tap-keeps-the-pipeline.js` - log inside a pipeline with `tap()` instead of a step that returns nothing
- `examples/02-iterable-collection.js` - a private `Set` behind a generator `[Symbol.iterator]()`
- `examples/03-lazy-chain.js` - iterator helpers stop after the matches we need
- `examples/04-close-in-finally.js` - a `try/finally` in a generator closes the file on a `break`

Run one with `node 23-functional-and-advanced-techniques/best-practices/examples/01-tap-keeps-the-pipeline.js` from the repository folder.
