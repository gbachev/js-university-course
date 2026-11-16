# 23. Functional and Advanced Techniques

Currying, composition and memoization, the iteration protocols, generators and async iterators, and what to do when recursion goes too deep.

1. Section Overview (no code)
2. [Currying and Partial Application](currying-and-partial-application) - `curry()`, `partial()`, `bind()` and functions we configure once
3. [Function Composition](function-composition) - `pipe()`, `compose()`, unary steps, point-free style and `tap()`
4. [Memoization](memoization) - caching results in a `Map` or a `WeakMap`, with a size limit, for pure functions only
5. [Iterators](iterators) - the iteration protocols, `Symbol.iterator`, `return()` and lazy iterator helpers
6. [Generators (function\*)](generators) - `yield`, endless sequences, `return()`, `throw()`, `finally` and `yield*`
7. [Async Iterators and for await...of](async-iterators) - async generators, paginated data and `Array.fromAsync`
8. [Tail Call Optimization (TCO)](tail-call-optimization) - tail calls, why we cannot count on TCO, loops and trampolines
9. [Best Practices](best-practices) - when these techniques help and when a plain function serves us better
10. Section Review (no code)
