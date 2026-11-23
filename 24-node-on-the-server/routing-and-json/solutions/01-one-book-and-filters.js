import express from 'express';

export function createApp(books) {
    const app = express();

    app.get('/books/:key', (req, res) => {
        const book = books.find((item) => item.key === req.params.key);

        if (!book) {
            return res.status(404).json({ error: `No book with the key ${req.params.key}` });
        }
        res.json(book);
    });

    app.get('/books', (req, res) => {
        const { author, limit } = req.query;
        let result = books;

        if (author !== undefined) {
            if (typeof author !== 'string') {
                return res.status(400).json({ error: 'Give author only once' });
            }
            result = result.filter((book) => book.author === author);
        }

        if (limit !== undefined) {
            const count = Number(limit);
            if (!Number.isInteger(count) || count < 1) {
                return res.status(400).json({ error: 'limit must be a whole number from 1' });
            }
            result = result.slice(0, count);
        }

        res.json(result);
    });

    return app;
}
