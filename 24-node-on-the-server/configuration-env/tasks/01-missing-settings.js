// Task 1: Which settings are missing?
// Lecture: Configuration with process.env
//
// Write missingSettings(env, names). env is an object like process.env: every value is a
// string, and a name that is not set is not there at all. names is an array of the names
// the server needs.
//
// Return an array of the names from names that are missing in env, in the order of names.
// A name counts as missing when env does not have it, or when its value is an empty
// string: a line like BOOKS_API_KEY= in a .env file gives ''. A value of '0' or 'false' is
// set. When nothing is missing, return an empty array.
//
// Read only the env you were given, never process.env, and do not change env or names.
//
// Examples:
//   missingSettings({ PORT: '3000' }, ['PORT', 'BOOKS_API_KEY'])          ['BOOKS_API_KEY']
//   missingSettings({ PORT: '', DEBUG: '0' }, ['DEBUG', 'PORT', 'HOST'])  ['PORT', 'HOST']
//   missingSettings({ PORT: '3000' }, ['PORT'])                           []
//
// Run the tests: npm test -- 24-node-on-the-server/configuration-env

export function missingSettings(env, names) {
    // Your code here
}
