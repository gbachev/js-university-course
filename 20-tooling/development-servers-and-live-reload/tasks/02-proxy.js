// Task 2: Where does the proxy send it?
// Lecture: Development Servers and Live Reload
//
// server.proxy in vite.config.js maps a path prefix to a backend, like
// { '/api': 'http://localhost:3000' }. Write proxyTarget(path, proxy): when path
// starts with one of the prefixes, return the backend address with the whole path
// added to it, as the dev server forwards it. When no prefix fits, return null: the
// dev server answers that request itself. Check the prefixes in the order of the
// object and use the first that fits.
//
// Examples:
//   proxyTarget('/api/books', { '/api': 'http://localhost:3000' })
//   // 'http://localhost:3000/api/books'
//   proxyTarget('/src/main.js', { '/api': 'http://localhost:3000' })   // null
//
// Run the tests: npm test -- 20-tooling/development-servers-and-live-reload

export function proxyTarget(path, proxy) {
    // Your code here
}
