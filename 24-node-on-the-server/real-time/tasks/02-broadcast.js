// Task 2: Broadcast a new book
// Lecture: Real-Time: WebSockets and Server-Sent Events
//
// GET /events is done: it sends 'data: 2 books\n\n' and keeps every open client in the set
// clients. POST /books adds the book but tells nobody. Change only POST /books, so that
// after it adds a book, every client with an open GET /events gets this one message:
//
//   event: book-added
//   id: 3
//   data: {"title":"Ubik","author":"Philip K. Dick"}
//
// and a blank line, which is
// 'event: book-added\nid: 3\ndata: {"title":"Ubik","author":"Philip K. Dick"}\n\n'.
//
//   - id is the number of books after the new one is added: 3 for the first POST, 4 for
//     the next;
//   - data is the new book as JSON, with only its title and author, in that order;
//   - POST still answers 201 with { "title": ..., "author": ... };
//   - a POST without a title or an author still answers 400 with
//     { "error": "A book needs a title and an author" } and sends no message at all.
//
// Run the tests: npm test -- 24-node-on-the-server/real-time

import express from 'express';

export function createApp() {
    const books = [
        { title: 'Dune', author: 'Frank Herbert' },
        { title: 'Emma', author: 'Jane Austen' },
    ];
    const clients = new Set();
    const app = express();

    app.use(express.json());

    app.get('/events', (req, res) => {
        res.set('Content-Type', 'text/event-stream');
        res.set('Cache-Control', 'no-cache');
        res.write(`data: ${books.length} books\n\n`);

        clients.add(res);
        req.on('close', () => {
            clients.delete(res);
        });
    });

    app.post('/books', (req, res) => {
        const { title, author } = req.body ?? {};
        if (!title || !author) {
            return res.status(400).json({ error: 'A book needs a title and an author' });
        }

        books.push({ title, author });
        res.status(201).json({ title, author });
    });

    return app;
}
