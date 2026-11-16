// Task 1: Follow the imports
// Lecture: Bundlers
//
// A bundler starts at the entry file and follows every import. Write
// collectModules(imports, entry). imports maps each of our files to the list of what
// it imports, in order, like { 'main.js': ['date-fns', 'cart.js'], 'cart.js': [] }.
// A name with no entry of its own, such as 'date-fns', is a package: it goes into the
// result but has no imports to follow. Return every file the entry needs, each once,
// in the order we meet it: the entry first, and each file's imports followed fully,
// one after the other, before we move on to the next import (depth first). Files can
// import each other in a circle.
//
// Examples:
//   collectModules({ 'main.js': ['cart.js', 'format.js'], 'cart.js': [],
//       'format.js': [] }, 'main.js')
//   // ['main.js', 'cart.js', 'format.js']
//
// Run the tests: npm test -- 20-tooling/bundlers

export function collectModules(imports, entry) {
    // Your code here
}
