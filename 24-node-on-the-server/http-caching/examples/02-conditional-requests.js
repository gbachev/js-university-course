// What Node's fetch() gets when it asks again with the ETag of its first answer. Node's
// fetch() has no HTTP cache, so the 304 reaches our code. Runs on its own on a free port.
import express from 'express';
import { start } from '../../lib/start.js';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];
let requests = 0;

const app = express();

app.get('/books', (req, res) => {
    requests += 1;
    res.set('Cache-Control', 'public, max-age=60');
    res.json(books);
});

const server = await start(app);
const url = `${server.url}/books`;

const first = await fetch(url);
const etag = first.headers.get('etag');
console.log(first.status, etag, (await first.text()).length); // 200 W/"53-dUin9zkXsYn5hm1vRrPZ7w1uHKc" 83

const again = await fetch(url, { cache: 'no-cache', headers: { 'If-None-Match': etag } });
console.log(again.status, (await again.text()).length); // 304 0

const reload = await fetch(url, { headers: { 'If-None-Match': etag } });
console.log(reload.status, (await reload.text()).length); // 200 83

books.push({ title: 'Ubik', author: 'Philip K. Dick' });
const changed = await fetch(url, { cache: 'no-cache', headers: { 'If-None-Match': etag } });
console.log(changed.status, changed.headers.get('etag')); // 200 W/"7e-EccRU6/29PkXQFsFptHcNfa5Fco"

console.log(requests); // 4

await server.close();
