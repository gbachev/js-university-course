// Task 1: Run the pending migrations
// Lecture: A Database with SQLite
//
// Write runMigrations(db, files), a migration runner like migrate() in the app's
// db.js. Instead of reading a folder, it gets the files as an array of
// { name, sql }, like { name: '001-create-users.sql', sql: 'CREATE TABLE ...' }.
// db has the four methods of better-sqlite3 that migrate() uses:
//   db.pragma('user_version', { simple: true })   the number of the last migration run
//   db.pragma(`user_version = ${version}`)         records a new number
//   db.exec(sql)                                   runs the SQL of one file
//   db.transaction(fn)                             returns a function that runs fn all
//                                                  or nothing: if fn throws, every
//                                                  change fn made is undone and the
//                                                  error is thrown again
//
// The rules:
// - Only names that end in .sql are migrations. Leave the others out.
// - Each name starts with its number. Run the files in the order of that number, so
//   2-add-notes.sql runs before 10-add-index.sql. Throw an Error for a .sql name that
//   does not start with a number.
// - Skip every file whose number is not greater than the current user_version.
// - Run each file and record its number in one transaction, so a file that fails
//   leaves the database as it was before that file.
// - Return the names of the files we ran, in order. Do not change the files array.
//
// Example, on a new database (user_version 0):
//   runMigrations(db, [
//       { name: '002-create-sessions.sql', sql: 'CREATE TABLE sessions (...)' },
//       { name: '001-create-users.sql', sql: 'CREATE TABLE users (...)' },
//   ])
//   ['001-create-users.sql', '002-create-sessions.sql'], and user_version is 2
//
// Run the tests: npm test -- 25-our-second-project/database

export function runMigrations(db, files) {
    // Your code here
}
