// Task 3: Resources, not verbs
// Lecture: REST Conventions and Status Codes
//
// createApp(books) below works, but its paths are verbs and every answer is 200, even
// when nothing was found. Rewrite it in the REST style of the lecture. The app keeps
// express.json() and works on the books array it was given. It answers:
//
//   GET /books/:key     200 with the book (JSON)
//                       404 { error: <any text> } (JSON) when no book has that key
//
//   PUT /books/:key     replaces the book: 200 with { key, title, author } (JSON), where
//                       key comes from the path and title and author from the body.
//                       Other fields of the body, a key among them, are left out. The
//                       book in the books array is replaced, at the same place.
//                       404 { error: <any text> } (JSON) when no book has that key
//                       400 { error: <any text> } (JSON) when title or author is missing
//                       or an empty string. The book stays as it was.
//
//   PATCH /books/:key   changes only the title and the author it gets, when they are not
//                       empty: 200 with the whole book (JSON).
//                       404 { error: <any text> } (JSON) when no book has that key
//
//   DELETE /books/:key  204 with an empty body, and the book is gone from the books
//                       404 { error: <any text> } (JSON) when no book has that key
//
// The old paths are gone: GET /getBook, POST /updateBook and POST /removeBook answer 404.
//
// Examples:
//   PUT /books/dune { "title": "Dune", "author": "F. Herbert" }   200
//   PUT /books/dune { "title": "Dune" }                            400
//   PATCH /books/emma { "title": "Emma." }                         200, the author stays
//   DELETE /books/hobbit                                           404
//
// Run the tests: npm test -- 24-node-on-the-server/rest-and-status-codes

import express from 'express';

export function createApp(books) {
    const app = express();

    app.use(express.json());

    // Rewrite these routes

    app.get('/getBook', (req, res) => {
        const book = books.find((item) => item.key === req.query.key);
        res.json(book ?? { error: 'Not found' });
    });

    app.post('/updateBook', (req, res) => {
        const { key, title, author } = req.body ?? {};
        const book = books.find((item) => item.key === key);

        if (!book) {
            return res.json({ error: 'Not found' });
        }
        if (title) {
            book.title = title;
        }
        if (author) {
            book.author = author;
        }
        res.json(book);
    });

    app.post('/removeBook', (req, res) => {
        const index = books.findIndex((book) => book.key === req.body?.key);

        if (index !== -1) {
            books.splice(index, 1);
        }
        res.json({ removed: index !== -1 });
    });

    return app;
}
