import express from 'express';

export function createApp(books) {
    const app = express();

    app.use(express.json());

    function notFound(req, res) {
        res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }

    app.get('/books/:key', (req, res) => {
        const book = books.find((item) => item.key === req.params.key);

        if (!book) {
            return notFound(req, res);
        }
        res.json(book);
    });

    app.put('/books/:key', (req, res) => {
        const index = books.findIndex((book) => book.key === req.params.key);
        const { title, author } = req.body ?? {};

        if (index === -1) {
            return notFound(req, res);
        }
        if (!title || !author) {
            return res.status(400).json({ error: 'title and author are required' });
        }
        books[index] = { key: req.params.key, title, author };
        res.json(books[index]);
    });

    app.patch('/books/:key', (req, res) => {
        const book = books.find((item) => item.key === req.params.key);
        const { title, author } = req.body ?? {};

        if (!book) {
            return notFound(req, res);
        }
        if (title) {
            book.title = title;
        }
        if (author) {
            book.author = author;
        }
        res.json(book);
    });

    app.delete('/books/:key', (req, res) => {
        const index = books.findIndex((book) => book.key === req.params.key);

        if (index === -1) {
            return notFound(req, res);
        }
        books.splice(index, 1);
        res.status(204).end();
    });

    return app;
}
