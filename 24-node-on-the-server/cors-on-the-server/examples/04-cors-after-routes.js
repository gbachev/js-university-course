// cors() in the wrong place: after the routes. Runs on its own: it starts the app on a free
// port, sends what a page on http://localhost:8080 would send for a JSON POST, prints what
// came back and stops the app.
import express from 'express';
import cors from 'cors';
import { start } from '../../lib/start.js';

const books = [{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }];
const app = express();

app.use(express.json());
app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).json(req.body);
});
app.use(cors({ origin: 'http://localhost:8080' }));

const server = await start(app);
const origin = 'http://localhost:8080';

// The preflight: no route answers OPTIONS, so it reaches cors().
const preflight = await fetch(`${server.url}/books`, {
    method: 'OPTIONS',
    headers: {
        Origin: origin,
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'content-type',
    },
});
console.log(preflight.status, preflight.headers.get('access-control-allow-origin'));
// 204 http://localhost:8080

// The POST itself: the route answers before cors() runs.
const created = await fetch(`${server.url}/books`, {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'emma', title: 'Emma', author: 'Jane Austen' }),
});
console.log(created.status, created.headers.get('access-control-allow-origin'));
// 201 null
console.log(books.length); // 2

await server.close();
