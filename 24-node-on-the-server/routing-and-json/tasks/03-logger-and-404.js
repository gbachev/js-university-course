// Task 3: A logger and a JSON 404
// Lecture: Routing and JSON APIs
//
// createApp(books, log) below already reads JSON bodies and has two routes. Add two
// middleware functions, each in the right place:
//
// 1. A logger that runs for EVERY request, before anything can answer it. It adds one
//    line to the log array the app was given: the method, a space, and req.url (the
//    path with its query string), then lets the request go on.
//      log after GET /books?limit=1 and POST /books: ['GET /books?limit=1', 'POST /books']
//    Requests that end in a 404 or in a 400 for broken JSON are logged too. (For the
//    broken JSON, Express also prints a SyntaxError in the test output: that is expected.)
//
// 2. A 404 handler for every request no route answered. It answers 404 with JSON:
//      { "error": "No route for <method> <path>" }
//    where <path> is req.path, without the query string:
//      GET /authors?x=1  404 { "error": "No route for GET /authors" }
//      DELETE /books     404 { "error": "No route for DELETE /books" }
//
// The two routes must keep working: GET /books answers 200 with the books, and
// POST /books still answers 201 with the new book.
//
// Run the tests: npm test -- 24-node-on-the-server/routing-and-json

import express from 'express';

export function createApp(books, log) {
    const app = express();

    // Your code here: the logger and the 404 handler, each in its place

    app.use(express.json());

    app.get('/books', (req, res) => {
        res.json(books);
    });

    app.post('/books', (req, res) => {
        const { key, title, author } = req.body ?? {};

        if (!key || !title || !author) {
            return res.status(400).json({ error: 'key, title and author are required' });
        }
        const book = { key, title, author };
        books.push(book);
        res.status(201).json(book);
    });

    return app;
}
