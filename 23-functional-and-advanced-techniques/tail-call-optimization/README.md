# Tail Call Optimization (TCO)

Code for the lecture *Tail Call Optimization (TCO)* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-recursion-and-the-stack.js` - a recursive sum that overflows the call stack at 100,000
- `examples/02-tail-call.js` - the same sum as a tail call, which still overflows in Node
- `examples/03-loop.js` - the tail-recursive sum rewritten as a loop
- `examples/04-trampoline.js` - a trampoline keeps the recursive shape without growing the stack
- `examples/05-count-comments.js` - plain recursion for replies that nest only a few levels

Run one with `node 23-functional-and-advanced-techniques/tail-call-optimization/examples/01-recursion-and-the-stack.js` from the repository folder.

## Tasks
1. **A long order history** (`tasks/01-order-history.js`) - rewrite a recursive total of linked orders as a loop
2. **Build a trampoline** (`tasks/02-trampoline.js`) - a `trampoline()` that runs 100,000 thunks
3. **Replies we cannot trust** (`tasks/03-count-replies.js`) - count deeply nested replies with a loop and an array

Run the tests with `npm test -- 23-functional-and-advanced-techniques/tail-call-optimization`. They fail until the task is solved. Compare with `solutions/` after you try.
