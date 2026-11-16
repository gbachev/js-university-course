// Task 2: Load the module once
// Lecture: Lazy Loading
//
// Our export button loads its code with import() on pointerenter and again on click.
// Write createLazyLoader(load): load is a function that starts a download and returns a
// promise (like () => import('./export.js')). createLazyLoader returns get(): the first
// call starts load() and returns its promise, and every later call returns the same
// promise without loading again. If the download fails, the promise rejects as usual, but
// the next get() tries load() again, so one bad network moment does not break the button.
//
// Examples:
//   const getExport = createLazyLoader(() => import('./export.js'));
//   getExport();   // starts the download
//   getExport();   // the same promise, nothing downloads
//
// Run the tests: npm test -- 22-performance-and-memory/lazy-loading

export function createLazyLoader(load) {
    // Your code here
}
