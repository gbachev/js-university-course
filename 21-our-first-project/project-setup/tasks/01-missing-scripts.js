// Task 1: Missing scripts
// Lecture: Project Setup
//
// create-vite writes the dev, build and preview scripts, and we add test, lint and
// format. Write missingScripts(pkg, required): pkg is the object we get from
// JSON.parse() of a package.json, required is an array of script names. It returns
// the names from required that pkg.scripts does not have, in the order of required.
// A package.json without a "scripts" field is missing all of them.
//
// Examples:
//   missingScripts({ scripts: { dev: 'vite', build: 'vite build' } }, ['dev', 'test'])
//   // ['test']
//   missingScripts({ name: 'reading-list' }, ['dev', 'lint'])   // ['dev', 'lint']
//
// Run the tests: npm test -- 21-our-first-project/project-setup

export function missingScripts(pkg, required) {
    // Your code here
}
