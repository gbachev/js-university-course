import express from 'express';

export function createApp(books) {
    const app = express();

    app.get('/books', (req, res) => {
        res.json(books);
    });

    app.get('/books/count', (req, res) => {
        res.json({ count: books.length });
    });

    return app;
}
