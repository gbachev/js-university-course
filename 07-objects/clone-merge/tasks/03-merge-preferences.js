// Task 3: Merge the preferences
// Lecture: Object Cloning and Merging
//
// Our app's preferences have groups, like { display: { theme: 'light', fontSize: 14 } }.
// Spread alone replaces a whole group, so a user who changed only the theme loses the
// default fontSize. Write mergePreferences(defaults, overrides): it returns a new
// object where each group of the overrides is merged into the same group of the
// defaults, so the settings the user did not touch stay. A value that is not an
// object (a string, a number, a boolean) is simply replaced. Groups only go one level
// deep, and neither argument may change.
//
// Examples:
//   mergePreferences(
//       { display: { theme: 'light', fontSize: 14 }, language: 'en' },
//       { display: { theme: 'dark' } }
//   )
//   // { display: { theme: 'dark', fontSize: 14 }, language: 'en' }
//
// Run the tests: npm test -- 07-objects/clone-merge

export function mergePreferences(defaults, overrides) {
    // Your code here
}
