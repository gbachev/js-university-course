// Task 1: The coverage column
// Lecture: Testing Setup
//
// A coverage report shows, for each file, the share of lines (or statements,
// branches, functions) the tests ran. Write coveragePercent(covered, total), which
// returns that share as a number from 0 to 100 with at most two decimals, cut off and
// not rounded, as the report does: 6 of 7 lines is 85.71, and 13 of 14 is 92.85, not
// 92.86. A file with nothing to cover (total 0) counts as 100.
//
// Examples:
//   coveragePercent(6, 7)      // 85.71
//   coveragePercent(10, 11)    // 90.9
//   coveragePercent(0, 0)      // 100
//
// Run the tests: npm test -- 20-tooling/testing-setup

export function coveragePercent(covered, total) {
    // Your code here
}
