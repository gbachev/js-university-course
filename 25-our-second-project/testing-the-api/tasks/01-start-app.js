// Task 1: Start the app on a free port
// Lecture: Testing the API
//
// Our tests call the real server over HTTP, so each test starts one. Write
// startApp(handler), where handler is a request listener such as
// (req, res) => { ... }, the function http.createServer() takes.
// startApp(handler) must:
// - create a server with createServer(handler) from node:http and listen on
//   port 0, so the system picks any free port and tests never fight over one.
// - resolve with an object { url, close }:
//   - url is `http://localhost:${port}`, with the real port from server.address()
//     (never 0), so a test can fetch() it.
//   - close() returns a promise. Once it resolves, the server is stopped and a
//     request to url fails.
//   - close() must not wait for requests that are still open (a stream that
//     never ends, for example): server.closeAllConnections() ends them.
// server.address() is safest to read once the server's 'listening' event has
// fired, as 24-node-on-the-server/lib/start.js does.
//
// Examples:
//   const app = await startApp((req, res) => res.end('Hi'));
//   app.url                                   'http://localhost:53124' (any free port)
//   await (await fetch(app.url)).text()       'Hi'
//   await app.close()                         resolves; fetch(app.url) now rejects
//
// Run the tests: npm test -- 25-our-second-project/testing-the-api

import { createServer } from 'node:http';

export function startApp(handler) {
    // Your code here
}
