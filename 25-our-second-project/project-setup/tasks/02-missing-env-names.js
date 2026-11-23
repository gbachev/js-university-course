// Task 2: What does .env still need?
// Lecture: Project Setup
//
// .env.example lists the names of the settings, and each of us copies it to .env. When
// .env.example gets a new name later, an old .env does not have it yet.
//
// Write missingEnvNames(exampleText, envText). Both are the text of a file with one
// NAME=value per line. Return an array of the names that have a line in exampleText but
// none in envText, in the order of exampleText. The name is the text before the first =,
// without the spaces around it. Blank lines, lines that start with # and lines without
// an = hold no name. A name with an empty value, like COOKIE_SECURE=, still has a line,
// so it is not missing. Lines may end with \n or \r\n.
//
// Examples:
//   missingEnvNames('PORT=3000\nDATABASE_PATH=./data/job-tracker.db\n', 'PORT=4000\n')
//   // ['DATABASE_PATH']
//   missingEnvNames('# The port\nPORT=3000\nCOOKIE_SECURE=\n', 'COOKIE_SECURE=\nPORT=3000\n')
//   // []
//
// Run the tests: npm test -- 25-our-second-project/project-setup

export function missingEnvNames(exampleText, envText) {
    // Your code here
}
