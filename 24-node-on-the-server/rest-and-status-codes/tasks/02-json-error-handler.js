// Task 2: A JSON error handler
// Lecture: REST Conventions and Status Codes
//
// createApp(books, errors) below already has its routes and a JSON 404. Errors still get
// Express's own HTML pages: try broken JSON, a body over 1 KB, or GET /books/stats.
// Express also prints them in the test output until our handler answers them.
// Add an error-handling middleware, in the right place, so that every error is answered
// with JSON instead:
//
// 1. Errors from express.json() have err.status between 400 and 499: 400 for broken
//    JSON, 413 for a body over the 1 KB limit of this app. Answer with that status and
//    { "error": <any text> }. Do not add these to the errors array.
//
// 2. Any other error is our bug. Add it to the errors array the app was given, and answer
//    500 with { "error": <any text> }. The answer must not show the error's message or
//    its stack trace: the client gets neither "prices.internal" nor a line of the stack.
//
// Every answer of the handler has Content-Type: application/json.
// The rest must keep working: GET /books answers 200 with the books, POST /books still
// answers 201, and an unknown path still gets the JSON 404 of the app.
//
// Examples:
//   POST /books with the body {"key":            400 { "error": "..." }
//   POST /books with a 2 KB JSON body            413 { "error": "..." }
//   GET /books/stats                             500 { "error": "..." }, errors has 1 item
//
// Run the tests: npm test -- 24-node-on-the-server/rest-and-status-codes

import express from 'express';

export function createApp(books, errors) {
    const app = express();

    app.use(express.json({ limit: '1kb' }));

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
        res.status(201).location(`/books/${key}`).json(book);
    });

    // A bug on purpose: the prices server is not there.
    app.get('/books/stats', async () => {
        throw new Error('Connection to prices.internal:5432 refused');
    });

    app.use((req, res) => {
        res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
    });

    // Your code here: the error handler

    return app;
}
