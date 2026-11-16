// Task 3: A report without personal data
// Lecture: Debugging in Production
//
// Write buildReport(error, page) that returns the report our error handler sends.
// page is { href, version, browser, breadcrumbs }. The report has six fields: message
// (String(error)), stack (the error's stack, undefined when there is none), url (the
// page address without its query string and #hash, where emails and other personal
// data sometimes hide), version, browser, and breadcrumbs (only the last five, as a
// new array). The error can be null or a plain string, as event.error and
// event.reason can be: the function must not throw then.
//
// Examples:
//   buildReport(new RangeError('Invalid time value'), {
//       href: 'https://johndoe.github.io/reading-list/?email=jane@example.com',
//       version: '1.1.0', browser: 'Mozilla/5.0 ...', breadcrumbs: ['start'] })
//   // { message: 'RangeError: Invalid time value', stack: 'RangeError: ...',
//   //   url: 'https://johndoe.github.io/reading-list/', version: '1.1.0',
//   //   browser: 'Mozilla/5.0 ...', breadcrumbs: ['start'] }
//
// Run the tests: npm test -- 21-our-first-project/debugging-production

export function buildReport(error, page) {
    // Your code here
}
