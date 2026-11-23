// One book by its key with a route parameter, and a filtered list with the query string.
// Start it from the repository folder and call it with curl:
//   curl http://localhost:3000/books/dune
//   curl "http://localhost:3000/books?author=Jane%20Austen&limit=1"
// Stop it with Ctrl+C.
import express from 'express';

const books = [
    { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
    { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    { key: 'persuasion', title: 'Persuasion', author: 'Jane Austen' },
];

const app = express();

app.get('/books/:key', (req, res) => {
    const book = books.find((item) => item.key === req.params.key);

    if (!book) {
        return res.status(404).json({ error: `No book with the key ${req.params.key}` });
    }
    res.json(book);
});

app.get('/books', (req, res) => {
    const { author, limit } = req.query;
    let result = books;

    if (author !== undefined) {
        if (typeof author !== 'string') {
            return res.status(400).json({ error: 'Give author only once' });
        }
        result = result.filter((book) => book.author === author);
    }

    if (limit !== undefined) {
        const count = Number(limit);
        if (!Number.isInteger(count) || count < 1) {
            return res.status(400).json({ error: 'limit must be a whole number from 1' });
        }
        result = result.slice(0, count);
    }

    res.json(result);
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
