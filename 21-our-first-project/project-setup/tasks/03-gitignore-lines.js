// Task 3: Add to .gitignore
// Lecture: Project Setup
//
// echo "coverage" >> .gitignore adds the line again every time we run it. Write
// addIgnoreLines(text, lines): text is the content of a .gitignore file, lines is an
// array of entries like 'coverage'. It returns the new text with the entries that are
// not a line of text yet added at the end, one per line, in order. An entry that is
// already there is not added again, and one listed twice is added once. The lines of
// text, blank lines and comments included, stay as they are. The result ends with a
// newline, also when text did not, and an empty text gets no blank first line.
//
// Examples:
//   addIgnoreLines('node_modules\ndist\n', ['coverage'])
//   // 'node_modules\ndist\ncoverage\n'
//   addIgnoreLines('node_modules\ncoverage\n', ['coverage'])
//   // 'node_modules\ncoverage\n'
//
// Run the tests: npm test -- 21-our-first-project/project-setup

export function addIgnoreLines(text, lines) {
    // Your code here
}
