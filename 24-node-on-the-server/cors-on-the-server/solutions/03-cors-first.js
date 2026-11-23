import express from 'express';
import cors from 'cors';

export function createApp() {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const app = express();

    // First: it adds its headers to every answer and ends a preflight with 204.
    app.use(cors({ origin: 'http://localhost:8080' }));
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
