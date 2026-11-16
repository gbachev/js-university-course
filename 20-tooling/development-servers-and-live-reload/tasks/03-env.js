// Task 3: What reaches our code from .env
// Lecture: Development Servers and Live Reload
//
// Vite reads .env and exposes only the names that start with VITE_ in
// import.meta.env. Write exposedEnv(text), which takes the text of a .env file and
// returns an object with only the VITE_ variables. Each line is NAME=value. The value
// is everything after the first =, so it can contain = itself. Spaces around a line
// do not count, and empty lines and lines starting with # are skipped. When a name
// appears twice, the last one wins.
//
// Examples:
//   exposedEnv('VITE_COVERS_URL=https://covers.openlibrary.org\nDB_HOST=localhost\n')
//   // { VITE_COVERS_URL: 'https://covers.openlibrary.org' }
//
// Run the tests: npm test -- 20-tooling/development-servers-and-live-reload

export function exposedEnv(text) {
    // Your code here
}
