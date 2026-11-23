// The same books API with the cors package in place of allow-origins.js. From this folder:
//   node 02-server-with-cors.js
// Stop it with Ctrl+C.
import express from 'express';
import cors from 'cors';
import { readConfig } from './config.js';

const config = readConfig(process.env);
const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];

const app = express();

app.use(cors({ origin: config.origins, maxAge: 600 }));
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
