// Task 1: Pass or fail?
// Lecture: Linters and Formatters
//
// A CI run fails when ESLint exits with code 1. Write lintExitCode(problems,
// maxWarnings). problems is the list ESLint found, each like
// { line: 9, rule: 'eqeqeq', severity: 'error' } or with severity 'warning'.
// Return 1 when there is at least one error, otherwise 0. maxWarnings works like the
// --max-warnings option: when it is given and there are more warnings than that, the
// result is 1 too. When it is left out, warnings alone never fail.
//
// Examples:
//   lintExitCode([{ line: 12, rule: 'no-console', severity: 'warning' }])      // 0
//   lintExitCode([{ line: 12, rule: 'no-console', severity: 'warning' }], 0)   // 1
//
// Run the tests: npm test -- 20-tooling/linters-and-formatters

export function lintExitCode(problems, maxWarnings) {
    // Your code here
}
