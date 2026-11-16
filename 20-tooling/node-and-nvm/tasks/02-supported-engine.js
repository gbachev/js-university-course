// Task 2: Is this Node supported?
// Lecture: Node.js and nvm
//
// npm compares our Node version with the engines field and warns with EBADENGINE when
// it does not fit. Write isSupported(nodeVersion, engine). nodeVersion is what
// node --version prints, like 'v24.22.3'. engine is a range like '>=24' or '>=22.12'
// or '>=22.12.1': a lowest version where the minor and patch may be left out (they
// count as 0). Return true when nodeVersion is that version or newer.
//
// Examples:
//   isSupported('v24.22.3', '>=24')       // true
//   isSupported('v22.22.2', '>=24')       // false
//   isSupported('v22.9.0', '>=22.12')     // false
//
// Run the tests: npm test -- 20-tooling/node-and-nvm

export function isSupported(nodeVersion, engine) {
    // Your code here
}
