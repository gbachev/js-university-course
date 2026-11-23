// The books API with the CORS headers written by hand, in allow-origins.js. From this folder:
//   node 01-server-by-hand.js
//   CORS_ORIGINS=http://localhost:5173 node 01-server-by-hand.js
// Stop it with Ctrl+C.
import express from 'express';
import { readConfig } from './config.js';
import { allowOrigins } from './allow-origins.js';

const config = readConfig(process.env);
const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];

const app = express();

app.use(allowOrigins(config.origins));
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

app.listen(config.port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on http://localhost:${config.port} for ${config.origins.join(', ')}`);
});
