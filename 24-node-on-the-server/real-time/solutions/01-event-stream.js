import express from 'express';

export function createApp() {
    const books = [
        { title: 'Dune', author: 'Frank Herbert' },
        { title: 'Emma', author: 'Jane Austen' },
    ];
    const app = express();

    app.use(express.json());

    app.get('/events', (req, res) => {
        res.set('Content-Type', 'text/event-stream');
        res.set('Cache-Control', 'no-cache');
        // write(), not send(): send() would end the response after one message.
        res.write(`data: ${books.length} books\n\n`);
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
