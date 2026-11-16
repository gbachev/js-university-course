# Context vs Scope

Code for the lecture *Context vs Scope* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-scope.js` - a function sees the variables around it, not the ones inside other functions
- `examples/02-context.js` - in a method call, `this` is the object before the dot
- `examples/03-scope-does-not-depend-on-the-call.js` - `call` and `apply` change `this`, never the variables a function sees
- `examples/04-standalone-call.js` - in strict mode, `this` in a plain call is `undefined`
- `examples/05-method-in-a-variable.js` - a method stored in a variable loses its `this`
- `examples/06-constructor-call.js` - with `new`, `this` is the new object
- `examples/07-call-apply-bind.js` - setting `this` with `call`, `apply` and `bind`
- `examples/08-event-handlers.html` - in an event handler, `this` is the element (browser)
- `examples/09-arrow-function-as-method.cjs` - an arrow function as a method has no `this` of its own
- `examples/10-nested-function.cjs` - a regular inner function does not get the `this` of the method
- `examples/11-nested-arrow-function.js` - an inner arrow function does

Run one with `node 11-scope-and-variables/context-vs-scope/examples/01-scope.js` from the repository folder. For the browser example, run `npm run serve`, open `11-scope-and-variables/context-vs-scope/examples/08-event-handlers.html` from the address it prints and click the button. Examples 9 and 10 end in `.cjs`, so Node runs them as plain scripts, where they log `undefined` like in the lecture: in an ES module the top-level `this` is `undefined`, so `this.name` in example 9 throws a `TypeError`, and in strict mode `inner()` gets `undefined` as `this`, so `this.value` in example 10 throws too.

## Tasks
1. **The lost greeting** (`tasks/01-lost-greeting.js`) - return a method that keeps its object when it is called on its own
2. **The order labels** (`tasks/02-order-labels.js`) - fix a `map()` callback that has the wrong `this`

Run the tests with `npm test -- 11-scope-and-variables/context-vs-scope`. They fail until the task is solved. Compare with `solutions/` after you try.
