import express from 'express';

export function allowOrigins(origins) {
    return (req, res, next) => {
        const origin = req.headers.origin;

        if (origins.includes(origin)) {
            res.set('Access-Control-Allow-Origin', origin);
        }
        // The answer depends on the Origin header, so caches keep one copy per origin.
        res.vary('Origin');

        if (req.method === 'OPTIONS') {
            res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE');
            res.set('Access-Control-Allow-Headers', 'Content-Type');
            res.set('Access-Control-Max-Age', '600');
            return res.status(204).end();
        }
        next();
    };
}

export function createApp(origins) {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const app = express();

    app.use(allowOrigins(origins));
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

    return app;
}
