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
        // Express keeps an ETag we set, and req.fresh compares it with If-None-Match.
        res.set('ETag', `"v${book.version}"`);
        if (req.fresh) {
            return res.status(304).end();
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
