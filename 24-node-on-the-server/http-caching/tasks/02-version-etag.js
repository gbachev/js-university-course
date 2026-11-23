// Task 2: Our own ETag from a version number
// Lecture: HTTP Caching: Cache-Control, ETag and 304
//
// Every book has a version, and PATCH /books/:key raises it by 1. The routes are done, but
// GET /books/:key still sends the weak ETag that Express makes from the body. Change only
// GET /books/:key, so that for a book it knows:
//
//   - it sends a strong ETag made of a v and the version, in double quotes, with no W/:
//     the book with version 1 gets  ETag: "v1",  and after one PATCH  ETag: "v2";
//   - when the request's If-None-Match matches that ETag, it answers 304 Not Modified
//     with no body. If-None-Match may hold the ETag alone ("v1"), in a list separated
//     by commas ("v0", "v1"), or with W/ in front (W/"v1"): all three match;
//   - otherwise it answers 200 with the book as JSON, version included, so an old ETag
//     gets the changed book after a PATCH;
//   - an unknown key still gets 404 and { "error": "No book with the key hobbit" }.
//
// Run the tests: npm test -- 24-node-on-the-server/http-caching

import express from 'express';

export function createApp() {
    const books = [
        { key: 'dune', title: 'Dune', author: 'Frank Herbert', version: 1 },
        { key: 'emma', title: 'Emma', author: 'Jane Austen', version: 1 },
    ];
    const app = express();

    app.use(express.json());

    app.get('/books/:key', (req, res) => {
        const book = books.find((item) => item.key === req.params.key);

        if (!book) {
            return res.status(404).json({ error: `No book with the key ${req.params.key}` });
        }
        res.json(book);
    });

    app.patch('/books/:key', (req, res) => {
        const book = books.find((item) => item.key === req.params.key);
        const { title } = req.body ?? {};

        if (!book) {
            return res.status(404).json({ error: `No book with the key ${req.params.key}` });
        }
        if (title) {
            book.title = title;
        }
        book.version += 1;
        res.json(book);
    });

    return app;
}
