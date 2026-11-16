# Currying and Partial Application

Code for the lecture *Currying and Partial Application* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-two-shapes.js` - one cart function, curried by hand and partially applied
- `examples/02-curry-helper.js` - a generic `curry()` that waits for `fn.length` arguments
- `examples/03-explicit-arity.js` - where `fn.length` falls short, and an explicit arity
- `examples/04-bind-partial-application.js` - `bind()` is partial application, not currying
- `examples/05-partial-helper.js` - a small `partial()` helper with rest and spread
- `examples/06-configure-once.js` - a price formatter and a filter predicate we configure once
- `examples/07-event-handlers.html` - a factory that returns click handlers (browser)

Run one with `node 23-functional-and-advanced-techniques/currying-and-partial-application/examples/01-two-shapes.js` from the repository folder. For the browser example, run `npm run serve` and open `23-functional-and-advanced-techniques/currying-and-partial-application/examples/07-event-handlers.html` from the address it prints.

## Tasks
1. **Filters that read like a sentence** (`tasks/01-where.js`) - a hand-curried `where(field)(value)` test for `filter()`
2. **Fix the first arguments** (`tasks/02-partial.js`) - a `partial()` helper and a logger configured once with it
3. **The curry helper** (`tasks/03-curry.js`) - a `curry()` that respects an explicit arity

Run the tests with `npm test -- 23-functional-and-advanced-techniques/currying-and-partial-application`. They fail until the task is solved. Compare with `solutions/` after you try.
