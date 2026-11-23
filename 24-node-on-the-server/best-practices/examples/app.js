// The books API with the habits of the section, in order. createApp() never listens:
// 01-server.js starts it on the port from the config, 02-check-the-app.js on a free one.
import cors from 'cors';
import express from 'express';

const isText = (value) => typeof value === 'string' && value.trim() !== '';

export function createApp(config) {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const app = express();

    app.disable('x-powered-by');
    app.use(cors({ origin: config.origins }));
    app.use(express.json({ limit: '10kb' }));

    app.get('/books', (req, res) => {
        res.set('Cache-Control', 'public, max-age=60');
        res.json(books);
    });

    app.post('/books', (req, res) => {
        const { key, title, author } = req.body ?? {};

        if (!isText(key) || !isText(title) || !isText(author)) {
            return res.status(400).json({ error: 'key, title and author must be non-empty strings' });
        }
        if (books.some((book) => book.key === key)) {
            return res.status(409).json({ error: `A book with the key ${key} already exists` });
        }
        const book = { key, title, author };
        books.push(book);
        res.status(201).location(`/books/${key}`).json(book);
    });

    app.get('/health', (req, res) => {
        res.set('Cache-Control', 'no-store');
        res.json({ status: 'ok' });
    });

    app.use((req, res) => {
        res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
    });

    app.use((err, req, res, next) => {
        if (res.headersSent) {
            return next(err);
        }
        if (err.type === 'entity.parse.failed') {
            return res.status(400).json({ error: 'The body is not valid JSON' });
        }
        if (err.status >= 400 && err.status < 500) {
            return res.status(err.status).json({ error: err.message });
        }
        console.error(err);
        res.status(500).json({ error: 'Something went wrong on our side' });
    });

    return app;
}
