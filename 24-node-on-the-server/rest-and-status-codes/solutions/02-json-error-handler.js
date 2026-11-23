import express from 'express';

export function createApp(books, errors) {
    const app = express();

    app.use(express.json({ limit: '1kb' }));

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
        res.status(201).location(`/books/${key}`).json(book);
    });

    // A bug on purpose: the prices server is not there.
    app.get('/books/stats', async () => {
        throw new Error('Connection to prices.internal:5432 refused');
    });

    app.use((req, res) => {
        res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
    });

    // Four parameters, so Express knows it handles errors. Last, after everything else.
    app.use((err, req, res, next) => {
        if (res.headersSent) {
            return next(err);
        }
        if (err.status >= 400 && err.status < 500) {
            return res.status(err.status).json({ error: err.message });
        }
        errors.push(err);
        res.status(500).json({ error: 'Something went wrong on our side' });
    });

    return app;
}
