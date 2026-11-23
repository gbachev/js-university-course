import express from 'express';

export function createApp() {
    const books = [
        { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
        { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    ];
    const app = express();

    app.get('/books', (req, res) => {
        // The same for everyone, so shared caches may keep it too.
        res.set('Cache-Control', 'public, max-age=300');
        res.json(books);
    });

    app.get('/me/books', (req, res) => {
        // One user's data: only their browser stores it, and it checks with us each time.
        res.set('Cache-Control', 'private, no-cache');
        res.json(books.slice(0, 1));
    });

    app.get('/health', (req, res) => {
        res.set('Cache-Control', 'no-store');
        res.json({ status: 'ok' });
    });

    return app;
}
