// Task 3: A feature or a fallback
// Lecture: Dynamic Loading
//
// The shop loads its optional features on demand. loadFeature(path, fallback) loads
// the module at path (relative to this file) and returns a promise of its module
// namespace object. When the module fails to load, because the file is missing or
// because it throws while it runs, the promise must give the fallback instead of
// being rejected, so the page can go on without the feature. The tests load the
// modules in the folder 03-load-feature/ and a file that does not exist.
// .then() and .catch() return a new promise that gives whatever our function returns,
// so we return import(...).catch(...).
//
// Examples:
//   const guide = await loadFeature('./03-load-feature/size-guide.js', null);
//   guide.sizeGuideText()      // 'S: 36-38, M: 40-42, L: 44-46'
//   await loadFeature('./03-load-feature/missing.js', null)    // null
//
// Run the tests: npm test -- 12-modules/dynamic-loading

export function loadFeature(path, fallback) {
    return import(path);
}
