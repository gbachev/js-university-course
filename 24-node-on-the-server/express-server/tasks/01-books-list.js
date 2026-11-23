// Task 1: The books list
// Lecture: An HTTP Server with Express
//
// Write createApp(books), which builds an Express app and returns it, without calling
// listen() (the tests start it). The app answers two routes with JSON:
//   GET /books        the books array it was given
//   GET /books/count  { count: <the number of books> }
// Every other method and path keeps Express's own 404.
//
// Examples:
//   GET /books        200 [{ "title": "Dune", "author": "Frank Herbert" }, ...]
//   GET /books/count  200 { "count": 3 }
//   POST /books       404
//
// Run the tests: npm test -- 24-node-on-the-server/express-server

import express from 'express';

export function createApp(books) {
    const app = express();

    // Your code here

    return app;
}
