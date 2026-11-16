// Task 2: Do we need a polyfill?
// Lecture: Transpilers
//
// babel-plugin-polyfill-corejs3 adds a polyfill when one of our targets lacks a
// feature our code uses. Write needsPolyfill(supportedSince, targets).
// supportedSince tells from which version each browser has the feature, like
// { chrome: 117, firefox: 119, safari: 17.4 } for Object.groupBy. targets is our
// Browserslist list, like ['chrome 109', 'firefox 160']. Return true when at least
// one target is older than its browser's version, or is a browser missing from
// supportedSince (we know nothing about it, so we polyfill). Otherwise return false.
//
// Examples:
//   const groupBy = { chrome: 117, firefox: 119, safari: 17.4 };
//   needsPolyfill(groupBy, ['chrome 157', 'firefox 160'])   // false
//   needsPolyfill(groupBy, ['chrome 157', 'chrome 109'])    // true
//
// Run the tests: npm test -- 20-tooling/transpilers

export function needsPolyfill(supportedSince, targets) {
    // Your code here
}
