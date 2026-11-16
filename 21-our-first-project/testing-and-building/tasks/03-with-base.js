// Task 3: Paths for a subfolder
// Lecture: Testing and Building
//
// With base: '/reading-list/', Vite writes every URL in dist/index.html with the
// subfolder in front. Write withBase(path, base) that does the same for one URL: a
// path that starts with / gets base in front of it, with exactly one / between the
// two, whether base ends with / or not. A base of '/' changes nothing. Full URLs
// (starting with http:// or https://) and relative paths (without a / at the start)
// stay as they are, since they do not point to the root of the domain.
//
// Examples:
//   withBase('/assets/index-DMkG4l_N.js', '/reading-list/')
//   // '/reading-list/assets/index-DMkG4l_N.js'
//   withBase('/favicon.svg', '/')                          // '/favicon.svg'
//   withBase('https://covers.openlibrary.org/b/id/1-S.jpg', '/reading-list/')
//   // unchanged
//
// Run the tests: npm test -- 21-our-first-project/testing-and-building

export function withBase(path, base) {
    // Your code here
}
