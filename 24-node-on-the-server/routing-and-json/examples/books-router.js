// The books routes grouped in a router. The paths are relative to where the app mounts it:
// with app.use('/books', booksRouter), '/' is /books and '/:key' is /books/:key.
// Example 04 mounts it. This file is a module, not a server: it does not run on its own.
import express from 'express';

const books = [
    { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
    { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    { key: 'persuasion', title: 'Persuasion', author: 'Jane Austen' },
];

export const booksRouter = express.Router();

booksRouter.get('/', (req, res) => {
    res.json(books);
});

booksRouter.get('/:key', (req, res) => {
    const book = books.find((item) => item.key === req.params.key);

    if (!book) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    res.json(book);
});

booksRouter.post('/', (req, res) => {
    const { key, title, author } = req.body ?? {};

    if (!key || !title || !author) {
        return res.status(400).json({ error: 'key, title and author are required' });
    }
    const book = { key, title, author };
    books.push(book);
    res.status(201).json(book);
});

booksRouter.delete('/:key', (req, res) => {
    const index = books.findIndex((book) => book.key === req.params.key);

    if (index === -1) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    books.splice(index, 1);
    res.status(204).end();
});
