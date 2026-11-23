// Task 1: The right Cache-Control for each route
// Lecture: HTTP Caching: Cache-Control, ETag and 304
//
// createApp() below answers three routes, with no Cache-Control header yet. Give each
// route its own header with res.set():
//
//   GET /books      the same list for everyone: any cache, the browser's or a CDN's, may
//                   reuse it for 300 seconds without asking us:  public, max-age=300
//   GET /me/books   one user's books: only that user's browser may store them, and it
//                   asks us before every use:                     private, no-cache
//   GET /health     never stored anywhere:                       no-store
//
// The tests split each header at the commas and compare the directives in any order and
// any case. Each route must have exactly the directives above, no more and no fewer.
//
// The answers stay as they are, and Express's own ETag stays on: a GET /books or
// GET /me/books that sends its ETag back in If-None-Match gets 304 Not Modified, with
// no body.
//
// Run the tests: npm test -- 24-node-on-the-server/http-caching

import express from 'express';

export function createApp() {
    const books = [
        { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
        { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    ];
    const app = express();

    app.get('/books', (req, res) => {
        res.json(books);
    });

    app.get('/me/books', (req, res) => {
        res.json(books.slice(0, 1));
    });

    app.get('/health', (req, res) => {
        res.json({ status: 'ok' });
    });

    return app;
}
