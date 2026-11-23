import express from 'express';

export function createApp(books, log) {
    const app = express();

    app.use((req, res, next) => {
        log.push(`${req.method} ${req.url}`);
        next();
    });

    app.use(express.json());

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
        res.status(201).json(book);
    });

    app.use((req, res) => {
        res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
    });

    return app;
}
