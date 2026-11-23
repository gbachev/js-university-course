// The books API with a cache policy per route, and the files of ../public. From this folder:
//   node 01-server.js
// Then open http://localhost:3000 or call it with curl -i. Stop it with Ctrl+C.
import { join } from 'node:path';
import express from 'express';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];
const publicDir = join(import.meta.dirname, '..', 'public');

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url, req.headers['if-none-match'] ?? '');
    next();
});

app.use('/assets', express.static(join(publicDir, 'assets'), { maxAge: '1y', immutable: true }));
app.use(express.static(publicDir));

app.get('/books', (req, res) => {
    res.set('Cache-Control', 'public, max-age=60');
    res.json(books);
});

app.get('/me/books', (req, res) => {
    res.set('Cache-Control', 'private, no-cache');
    res.json(books.slice(0, 1));
});

app.get('/health', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.json({ status: 'ok' });
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
