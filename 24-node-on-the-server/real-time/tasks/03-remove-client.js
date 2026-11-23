// Task 3: Forget a client that left
// Lecture: Real-Time: WebSockets and Server-Sent Events
//
// GET /events adds every client to the set clients, and POST /books writes the new book to
// all of them, but nobody ever removes a client. Writing to one that left fails quietly,
// and the set only grows. Change only GET /events, so that it removes the client from
// clients as soon as its connection closes:
//
//   - GET /stats answers { "clients": 2 } with two streams open, { "clients": 1 } within
//     half a second after one of them closes, and { "clients": 0 } after both close;
//   - a POST /books after the first one left still reaches the client that stayed, with
//     'event: book-added\nid: 3\ndata: {"title":"Ubik","author":"Philip K. Dick"}\n\n'.
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
    });

    app.get('/stats', (req, res) => {
        res.json({ clients: clients.size });
    });

    app.post('/books', (req, res) => {
        const { title, author } = req.body ?? {};
        if (!title || !author) {
            return res.status(400).json({ error: 'A book needs a title and an author' });
        }

        const book = { title, author };
        books.push(book);
        const message = `event: book-added\nid: ${books.length}\ndata: ${JSON.stringify(book)}\n\n`;
        for (const client of clients) {
            client.write(message);
        }
        res.status(201).json(book);
    });

    return app;
}
