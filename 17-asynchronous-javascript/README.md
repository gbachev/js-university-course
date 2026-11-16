# 17. Asynchronous JavaScript

How JavaScript waits without blocking: the event loop, timers, callbacks, promises and their combinators, async/await and the Fetch API.

1. Section Overview (no code)
2. [The JavaScript Concurrency Model](concurrency-model) - the call stack, run-to-completion, the task and microtask queues
3. [Synchronous vs Asynchronous Code](synchronous-vs-asynchronous) - blocking code, code that runs later, and why an async result cannot be returned
4. [Timers: setTimeout and setInterval](timers) - delaying, repeating and cancelling code, and polling without overlap
5. [Callbacks and Callback Hell](callbacks-and-callback-hell) - error-first callbacks, the pyramid of doom and inversion of control
6. [Promises](promises) - creating promises, `then`, `catch`, `finally`, chaining and promisifying
7. [Promise Combinators](promise-combinators) - `Promise.all`, `allSettled`, `any`, `race` and `withResolvers`
8. [async and await](async-await) - async functions, `await` with `try...catch`, sequential vs parallel, top-level `await`
9. [The Fetch API](fetch-api) - GET and POST requests, `response.ok`, cancelling and timeouts
10. [Event Loop Deep Dive](event-loop-deep-dive) - ordering puzzles, `queueMicrotask`, rendering and the Node.js phases
11. [Best Practices](best-practices) - no floating promises, parallel work, polling with `await` and short tasks
12. Section Review (no code)
