// Task 2: Which rules win?
// Lecture: Linters and Formatters
//
// ESLint's flat config is an array, and later entries override earlier ones. Write
// finalRules(configs), which takes such an array and returns one object with the rule
// settings that win. Entries without a rules field, like globalIgnores(...), are
// skipped. A rule's setting is a severity ('off', 'warn' or 'error') or an array with
// the severity first and options after it, like ['error', 2]: in the result we keep
// only the severity. Do not change the given configs.
//
// Examples:
//   finalRules([
//       { rules: { eqeqeq: 'warn', indent: ['error', 2] } },
//       { rules: { eqeqeq: 'error' } },
//       { rules: { indent: 'off' } },
//   ])
//   // { eqeqeq: 'error', indent: 'off' }
//
// Run the tests: npm test -- 20-tooling/linters-and-formatters

export function finalRules(configs) {
    // Your code here
}
