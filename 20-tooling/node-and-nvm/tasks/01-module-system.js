// Task 1: CommonJS or ES module?
// Lecture: Node and NVM
//
// Write moduleSystem(fileName, packageType), which answers the question Node asks
// before it runs a file. fileName is a name like 'app.js', packageType is the "type"
// field of the nearest package.json: 'module', 'commonjs' or undefined when the field
// is missing. Return 'module' for an ES module and 'commonjs' for CommonJS. The
// extension comes first: .mjs and .cjs ignore the type field. A .js file without a
// type field counts as CommonJS here.
//
// Examples:
//   moduleSystem('app.js', 'module')      // 'module'
//   moduleSystem('report.cjs', 'module')  // 'commonjs'
//   moduleSystem('app.js', undefined)     // 'commonjs'
//
// Run the tests: npm test -- 20-tooling/node-and-nvm

export function moduleSystem(fileName, packageType) {
    // Your code here
}
