// The whole app in the order that works: a logger first, express.json() before the routes
// that read the body, the books router, and a JSON 404 for everything else last.
// Start it from the repository folder; every request prints a line in this terminal:
//   curl http://localhost:3000/books/dune
//   curl http://localhost:3000/authors
// Stop it with Ctrl+C.
import express from 'express';
import { booksRouter } from './books-router.js';

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url); // GET /books/dune
    next();
});

app.use(express.json());

app.use('/books', booksRouter);

app.use((req, res) => {
    res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
