// Task 1: Which Host reaches the server?
// Lecture: Project Setup
//
// In vite.config.js, an entry of server.proxy is either a string, the address of the
// server, or an object such as { target: 'http://localhost:3000', changeOrigin: false }.
// Vite turns the string form into { target, changeOrigin: true }. When changeOrigin is
// on, the proxy rewrites the Host header to the host of target; when it is off or not
// given, the Host header the browser sent goes on as it is.
//
// Write proxyHost(entry, browserHost). browserHost is the Host header of the browser's
// request, like 'localhost:5173'. Return the Host header the server receives. The host
// of a target is what new URL(target).host gives, so 'http://localhost:3000' has the
// host 'localhost:3000'. Do not change entry.
//
// Examples:
//   proxyHost('http://localhost:3000', 'localhost:5173')                    'localhost:3000'
//   proxyHost({ target: 'http://localhost:3000', changeOrigin: false },
//       'localhost:5173')                                                   'localhost:5173'
//   proxyHost({ target: 'http://localhost:3000' }, 'localhost:5173')       'localhost:5173'
//
// Run the tests: npm test -- 25-our-second-project/project-setup

export function proxyHost(entry, browserHost) {
    // Your code here
}
