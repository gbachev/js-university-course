// Task 3: What lint-staged runs
// Lecture: Version Control and Collaboration
//
// lint-staged maps file patterns to commands, like
// { '*.js': ['eslint --fix', 'prettier --write'], '*.{json,md}': 'prettier --write' }.
// A value is one command or an array of them. Write commandsFor(stagedFiles, config):
// it returns an array with one { command, files } object per command that has
// something to do, where files are the staged files whose name matches the pattern.
// '*.js' matches names ending in .js, '*.{json,md}' names ending in .json or .md, in
// any folder. Keep the order of the config, and of the commands inside each pattern.
// A pattern no staged file matches runs nothing.
//
// Examples:
//   commandsFor(['src/stats.js', 'README.md'], {
//       '*.js': ['eslint --fix', 'prettier --write'],
//       '*.{json,md}': 'prettier --write',
//   })
//   // [{ command: 'eslint --fix', files: ['src/stats.js'] },
//   //  { command: 'prettier --write', files: ['src/stats.js'] },
//   //  { command: 'prettier --write', files: ['README.md'] }]
//
// Run the tests: npm test -- 20-tooling/version-control-and-collaboration

export function commandsFor(stagedFiles, config) {
    // Your code here
}
