// Task 2: Shake the tree
// Lecture: Bundlers
//
// Tree-shaking keeps only the exports someone imports. Write treeShake(exportsByFile,
// imports). exportsByFile maps each file to the names it exports, like
// { 'format.js': ['formatPrice', 'formatWeight'] }. imports is a list of import
// statements, like { from: 'format.js', names: ['formatPrice'] }. Return a new object
// with the same files, each with only the exports that some import uses, in the
// order of exportsByFile. A file whose exports nobody uses gets an empty array.
// Do not change exportsByFile.
//
// Examples:
//   treeShake({ 'format.js': ['formatPrice', 'formatWeight'] },
//       [{ from: 'format.js', names: ['formatPrice'] }])
//   // { 'format.js': ['formatPrice'] }
//
// Run the tests: npm test -- 20-tooling/bundlers

export function treeShake(exportsByFile, imports) {
    // Your code here
}
