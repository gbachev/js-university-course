import express from 'express';

export function createApp(books) {
    const app = express();
    const router = express.Router();

    router.get('/', (req, res) => {
        res.json(books);
    });

    router.post('/', (req, res) => {
        const { key, title, author } = req.body ?? {};

        if (!key || !title || !author) {
            return res.status(400).json({ error: 'key, title and author are required' });
        }
        const book = { key, title, author };
        books.push(book);
        res.status(201).json(book);
    });

    router.delete('/:key', (req, res) => {
        const index = books.findIndex((book) => book.key === req.params.key);

        if (index === -1) {
            return res.status(404).json({ error: `No book with the key ${req.params.key}` });
        }
        books.splice(index, 1);
        res.status(204).end();
    });

    app.use(express.json());
    app.use('/books', router);

    return app;
}
