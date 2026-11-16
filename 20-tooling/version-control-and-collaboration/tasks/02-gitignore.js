// Task 2: Does Git ignore it?
// Lecture: Version Control and Collaboration
//
// Write isIgnored(path, patterns), a small version of what Git does with .gitignore.
// path is a file path from the project root, like 'node_modules/vite/package.json'.
// patterns are the lines of .gitignore. We support three kinds of lines: a name with a
// slash at the end ('dist/') matches a folder of that name anywhere in the path, a
// name without one ('.env') matches a file or folder of that name anywhere, and
// '*.log' matches any name that ends in .log. Empty lines and lines starting with #
// are skipped. Return true when any pattern matches.
//
// Examples:
//   isIgnored('node_modules/vite/package.json', ['node_modules/'])   // true
//   isIgnored('src/books.js', ['node_modules/', 'dist/'])             // false
//   isIgnored('logs/npm-debug.log', ['*.log'])                        // true
//
// Run the tests: npm test -- 20-tooling/version-control-and-collaboration

export function isIgnored(path, patterns) {
    // Your code here
}
