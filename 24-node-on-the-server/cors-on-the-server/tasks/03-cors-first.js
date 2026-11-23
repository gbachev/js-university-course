// Task 3: cors() in the right place
// Lecture: CORS from the Server Side
//
// The app below works from curl, yet a page on http://localhost:8080 cannot read a single
// answer: cors() is mounted after the routes and after the JSON 404. Move things so that:
//
//   - GET /books from that origin answers 200 with Access-Control-Allow-Origin;
//   - POST /books with a JSON body answers 201 with the new book and
//     Access-Control-Allow-Origin, so express.json() still reads the body;
//   - a POST /books with broken JSON gets the 400 of express.json() with
//     Access-Control-Allow-Origin, so the page can read that error too;
//   - a preflight (OPTIONS /books) gets 204 with Access-Control-Allow-Origin and
//     Access-Control-Allow-Methods;
//   - a path with no route still gets the JSON 404 { "error": "No route for GET /authors" },
//     and it has Access-Control-Allow-Origin too, so the page can read the error.
//
// Change only the order: the options of cors() and the routes stay as they are.
//
// Run the tests: npm test -- 24-node-on-the-server/cors-on-the-server

import express from 'express';
import cors from 'cors';

export function createApp() {
    const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
    const app = express();

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

    app.use((req, res) => {
        res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
    });

    app.use(cors({ origin: 'http://localhost:8080' }));

    return app;
}
