// Task 2: Is our Node new enough?
// Lecture: Project Setup
//
// Vitest 5 needs Node 22.12 or newer. Write meetsNodeVersion(version, minimum):
// version is what `node --version` prints, like 'v22.11.0', and minimum is a version
// like '22.12' or '22.12.0' (a missing part counts as 0). It returns true when version
// is the same as minimum or newer. Compare the parts as numbers, major first: as
// strings, '9' comes after '12', so 'v22.9.0' would look newer than '22.12'.
//
// Examples:
//   meetsNodeVersion('v26.1.0', '22.12')    // true
//   meetsNodeVersion('v22.12.0', '22.12')   // true
//   meetsNodeVersion('v22.9.0', '22.12')    // false
//
// Run the tests: npm test -- 21-our-first-project/project-setup

export function meetsNodeVersion(version, minimum) {
    // Your code here
}
