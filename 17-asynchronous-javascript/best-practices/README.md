# Best Practices

Code for the lecture *Best Practices* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-never-leave-a-promise-floating.js` - a floating promise loses its error, an awaited one lands in `catch` (ends with exit code 1 on purpose)
- `examples/02-run-independent-work-in-parallel.js` - the user first, then the orders and messages together with `Promise.all()`
- `examples/03-poll-with-await.js` - polling as a loop with `await`, one check at a time
- `examples/04-keep-each-task-short.js` - a long loop split into chunks so a click gets in

Run one with `node 17-asynchronous-javascript/best-practices/examples/01-never-leave-a-promise-floating.js` from the repository folder.
