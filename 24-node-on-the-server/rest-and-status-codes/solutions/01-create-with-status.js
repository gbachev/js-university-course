import express from 'express';

export function createApp(books) {
    const app = express();

    app.use(express.json());

    app.post('/books', (req, res) => {
        const { key, title, author } = req.body ?? {};

        if (!key || !title || !author) {
            return res.status(400).json({ error: 'key, title and author are required' });
        }
        if (books.some((book) => book.key === key)) {
            return res.status(409).json({ error: `A book with the key ${key} already exists` });
        }
        const book = { key, title, author };
        books.push(book);
        res.status(201).location(`/books/${key}`).json(book);
    });

    app.get('/books/:key', (req, res) => {
        const book = books.find((item) => item.key === req.params.key);

        if (!book) {
            return res.status(404).json({ error: `No book with the key ${req.params.key}` });
        }
        res.json(book);
    });

    return app;
}
