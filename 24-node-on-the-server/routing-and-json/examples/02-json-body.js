// express.json() and the routes that change the books: POST, PUT, PATCH and DELETE.
// The books live in an array, so every restart starts from the same three.
// Start it from the repository folder and call it with curl, for example:
//   curl -i http://localhost:3000/books -H "Content-Type: application/json" \
//       -d '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}'
//   curl -i -X DELETE http://localhost:3000/books/dune
// Stop it with Ctrl+C.
import express from 'express';

const books = [
    { key: 'dune', title: 'Dune', author: 'Frank Herbert' },
    { key: 'emma', title: 'Emma', author: 'Jane Austen' },
    { key: 'persuasion', title: 'Persuasion', author: 'Jane Austen' },
];

const app = express();

app.use(express.json());

app.post('/books', (req, res) => {
    const { key, title, author } = req.body ?? {};

    if (!key || !title || !author) {
        return res.status(400).json({ error: 'key, title and author are required' });
    }
    const book = { key, title, author };
    books.push(book);
    res.status(201).json(book);
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

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
