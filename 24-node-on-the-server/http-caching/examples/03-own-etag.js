// Our own strong ETag from a version number, checked with req.fresh before we build the
// body. Runs on its own on a free port and prints what a client with the ETag gets.
import express from 'express';
import { start } from '../../lib/start.js';

const books = [{ title: 'Dune', author: 'Frank Herbert' }];
let version = 1;

const app = express();
app.use(express.json());

app.get('/books', (req, res) => {
    res.set('ETag', `"books-v${version}"`);
    if (req.fresh) {
        return res.status(304).end();
    }
    res.json(books);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    version += 1;
    res.status(201).json(req.body);
});

const server = await start(app);
const url = `${server.url}/books`;
const ask = (etag) => fetch(url, { cache: 'no-cache', headers: { 'If-None-Match': etag } });

const first = await fetch(url);
console.log(first.status, first.headers.get('etag')); // 200 "books-v1"

const same = await ask('"books-v1"');
console.log(same.status, same.headers.get('etag')); // 304 "books-v1"

await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Emma', author: 'Jane Austen' }),
});

const after = await ask('"books-v1"');
console.log(after.status, after.headers.get('etag')); // 200 "books-v2"

await server.close();
