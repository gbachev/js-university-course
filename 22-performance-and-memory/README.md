# 22. Performance and Memory

How to find what makes code slow or hungry for memory, and how to fix it: measuring, garbage collection, leaks, workers, debounce and throttle, and lazy loading.

1. Section Overview (no code)
2. [Measuring Performance](measuring-performance) - `performance.now()`, `console.time()`, marks and measures
3. [Garbage Collection](garbage-collection) - reachability, mark-and-sweep, and `WeakMap` for data about objects we do not own
4. [Memory Leaks](memory-leaks) - forgotten timers and listeners, detached nodes, closures, accidental globals and unbounded caches
5. [Workers](workers) - heavy work on a thread of its own with `postMessage()`, and shared workers
6. [Debounce and Throttle](debounce-and-throttle) - run a handler once after a pause, at most once per interval, or once per frame
7. [Lazy Loading](lazy-loading) - `loading="lazy"`, `IntersectionObserver` and `import()` when the user needs it
8. [Best Practices](best-practices) - clean up what we start, debounce input, keep the LCP image eager
9. Section Review (no code)
