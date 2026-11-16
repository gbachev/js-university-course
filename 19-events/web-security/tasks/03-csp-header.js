// Task 3: Build the CSP header
// Lecture: Web Security Basics
//
// Our server keeps its Content Security Policy as an object: each key is a directive,
// each value a list of sources. Write buildCsp(policy) that returns the header value:
// the directives in the object's order, separated by '; ', each one its name and its
// sources separated by spaces. The keywords self, none, unsafe-inline, unsafe-eval
// and strict-dynamic go in single quotes, other sources (hosts, data:) as they are. A
// directive with an empty list is just its name, and an empty object gives ''. Since
// unsafe-inline in script-src would let injected inline code run again, that one
// throws an Error instead.
//
// Examples:
//   buildCsp({ 'script-src': ['self'] })                  // "script-src 'self'"
//   buildCsp({ 'img-src': ['self', 'data:'], 'object-src': ['none'] })
//   // "img-src 'self' data:; object-src 'none'"
//   buildCsp({ 'script-src': ['self', 'unsafe-inline'] }) // throws an Error
//
// Run the tests: npm test -- 19-events/web-security

export function buildCsp(policy) {
    // Your code here
}
