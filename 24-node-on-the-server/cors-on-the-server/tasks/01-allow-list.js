// Task 1: CORS by hand, with an allow-list
// Lecture: CORS from the Server Side
//
// createApp(origins) below builds the books API and mounts allowOrigins(origins) first.
// The routes are done. Write allowOrigins(origins): it returns a middleware that lets the
// pages of the listed origins, such as ['http://localhost:8080'], read our answers.
//
// For every request:
//   - when the Origin header is on the list, set Access-Control-Allow-Origin to that origin
//     (never '*');
//   - when it is not on the list, or there is no Origin header (curl, a test, another
//     server), set no Access-Control-Allow-Origin and let the request through: the
//     answer is the usual 200 with the books;
//   - in both cases add Origin to the Vary header.
//
// For a preflight, an OPTIONS request, answer at once with 204 and no body, and never
// pass it on to the routes. Besides the headers above, send:
//   Access-Control-Allow-Methods   GET, POST and DELETE (in any order, others are fine)
//   Access-Control-Allow-Headers   Content-Type
//   Access-Control-Max-Age         600
//
// The rest must keep working: GET /books answers 200 and POST /books answers 201, both
// with Access-Control-Allow-Origin for an origin on the list.
//
// Examples (origins: ['http://localhost:8080']):
//   GET /books      Origin: http://localhost:8080   200, Access-Control-Allow-Origin: http://localhost:8080
//   GET /books      Origin: https://evil.example    200, no Access-Control-Allow-Origin
//   OPTIONS /books  Origin: http://localhost:8080   204, the headers above
//
// Run the tests: npm test -- 24-node-on-the-server/cors-on-the-server

import express from 'express';

export function allowOrigins(origins) {
    return (req, res, next) => {
        // Your code here
        next();
    };
}

export function createApp(origins) {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const app = express();

    app.use(allowOrigins(origins));
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
