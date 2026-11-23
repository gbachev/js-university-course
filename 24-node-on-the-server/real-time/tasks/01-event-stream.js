// Task 1: An event stream of the book count
// Lecture: Real-Time: WebSockets and Server-Sent Events
//
// POST /books is done. Add GET /events, an event stream that tells a page how many books
// the server has. For every client it:
//
//   - answers 200 with  Content-Type: text/event-stream; charset=utf-8  (Express adds the
//     charset when we set text/event-stream with res.set()) and  Cache-Control: no-cache;
//   - sends no Content-Length;
//   - writes its first message at once, exactly "data: 2 books" and a blank line, which is
//     'data: 2 books\n\n'. The number is the count of books at that moment, so a client
//     that connects after one POST gets 'data: 3 books\n\n';
//   - keeps the response open: after the first message nothing else arrives for 300 ms,
//     and the stream does not end.
//
// Run the tests: npm test -- 24-node-on-the-server/real-time

import express from 'express';

export function createApp() {
    const books = [
        { title: 'Dune', author: 'Frank Herbert' },
        { title: 'Emma', author: 'Jane Austen' },
    ];
    const app = express();

    app.use(express.json());

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
