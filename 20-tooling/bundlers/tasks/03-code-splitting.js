// Task 3: Split off the checkout
// Lecture: Bundlers
//
// With import() a bundler puts a file, and everything only it needs, into a separate
// chunk. Write splitChunks(modules, entry). modules maps each file to its static
// imports and its dynamic import() calls, like
// { 'main.js': { imports: ['cart.js'], dynamic: ['checkout.js'] } }. A name missing
// from modules is a package with no imports. Return { main, chunks }: main lists the
// files the entry needs through static imports (entry first, depth first, each once,
// as in task 1). chunks has one array per dynamic import of the main files, going
// through main in order: the file and what it needs through static imports, minus
// the files already in main. A chunk that ends up empty is left out, and dynamic
// imports inside a chunk can be ignored.
//
// Examples:
//   splitChunks({
//       'main.js': { imports: ['cart.js'], dynamic: ['checkout.js'] },
//       'cart.js': { imports: [], dynamic: [] },
//       'checkout.js': { imports: ['cart.js'], dynamic: [] },
//   }, 'main.js')
//   // { main: ['main.js', 'cart.js'], chunks: [['checkout.js']] }
//
// Run the tests: npm test -- 20-tooling/bundlers

export function splitChunks(modules, entry) {
    // Your code here
}
