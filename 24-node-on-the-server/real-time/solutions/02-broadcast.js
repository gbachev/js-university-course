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
