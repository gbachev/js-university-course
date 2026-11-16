// Task 1: Read a .browserslistrc file
// Lecture: Transpilers
//
// Babel, Autoprefixer and the other tools read our targets from a .browserslistrc
// file. Write readBrowserslistrc(text), which takes the text of the file and returns
// its queries as an array of strings, in order. A line may hold several queries
// separated by commas. Spaces around a query do not count, empty lines are skipped,
// and a # starts a comment that runs to the end of its line.
//
// Examples:
//   readBrowserslistrc('> 0.5%\nlast 2 versions\nnot dead\n')
//   // ['> 0.5%', 'last 2 versions', 'not dead']
//   readBrowserslistrc('defaults, not chrome 109  # no Windows 7\n')
//   // ['defaults', 'not chrome 109']
//
// Run the tests: npm test -- 20-tooling/transpilers

export function readBrowserslistrc(text) {
    // Your code here
}
