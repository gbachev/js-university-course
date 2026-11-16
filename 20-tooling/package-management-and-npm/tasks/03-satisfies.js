// Task 3: Does the version fit the range?
// Lecture: Package Management and npm
//
// Write satisfies(version, range), the check npm makes before it installs a version.
// version is 'MAJOR.MINOR.PATCH', range is one of three forms: '^5.1.10' accepts
// 5.1.10 and newer up to the next major, '~5.1.10' accepts 5.1.10 and newer up to the
// next minor, and '5.1.10' accepts only that version. Below 1.0.0 the caret is
// stricter: '^0.4.2' stops before 0.5.0. Return true or false.
//
// Examples:
//   satisfies('5.2.0', '^5.1.10')    // true
//   satisfies('6.0.0', '^5.1.10')    // false
//   satisfies('5.2.0', '~5.1.10')    // false
//   satisfies('0.5.0', '^0.4.2')     // false
//
// Run the tests: npm test -- 20-tooling/package-management-and-npm

export function satisfies(version, range) {
    // Your code here
}
