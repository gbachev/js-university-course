// The books API with the status codes of the lecture: 201 with a Location header, 204,
// 400, 404 and 409, a JSON 404 for unknown paths, and an error handler that answers
// broken JSON with 400 and our own bugs with 500, without the stack trace.
// A module: example 01 starts it on port 3000, example 02 calls it with fetch().
import express from 'express';

const books = [
    { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
    { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    { key: 'persuasion', title: 'Persuasion', author: 'Jane Austen' },
];

export const app = express();

app.use(express.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:key', (req, res) => {
    const book = books.find((item) => item.key === req.params.key);

    if (!book) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    res.json(book);
});

app.post('/books', (req, res) => {
    const { key, title, author } = req.body ?? {};

    if (!key || !title || !author) {
        return res.status(400).json({ error: 'key, title and author are required' });
    }
    if (books.some((book) => book.key === key)) {
        return res.status(409).json({ error: `A book with the key ${key} already exists` });
    }
    const book = { key, title, author };
    books.push(book);
    res.status(201).location(`/books/${key}`).json(book);
});

app.put('/books/:key', (req, res) => {
    const index = books.findIndex((book) => book.key === req.params.key);
    const { title, author } = req.body ?? {};

    if (index === -1) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    if (!title || !author) {
        return res.status(400).json({ error: 'title and author are required' });
    }
    books[index] = { key: req.params.key, title, author };
    res.json(books[index]);
});

app.patch('/books/:key', (req, res) => {
    const book = books.find((item) => item.key === req.params.key);
    const { title, author } = req.body ?? {};

    if (!book) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    if (title) {
        book.title = title;
    }
    if (author) {
        book.author = author;
    }
    res.json(book);
});

app.delete('/books/:key', (req, res) => {
    const index = books.findIndex((book) => book.key === req.params.key);

    if (index === -1) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    books.splice(index, 1);
    res.status(204).end();
});

// A route that fails on purpose, to see what our error handler does with a bug.
app.get('/broken', async () => {
    throw new Error('The database is down');
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
