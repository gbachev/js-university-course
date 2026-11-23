// Express tells an error handler from other middleware by its number of parameters,
// fn.length. With four, it gets the errors. With three, Express skips it for errors and
// calls it for ordinary requests instead, as (req, res, next) under the wrong names.
// Runs on its own: it starts on a free port, calls itself and stops.
import express from 'express';
import { start } from '../../lib/start.js';

function withoutNext(err, req, res) {
    res.status(500).json({ error: 'Answered by withoutNext' });
}

function withNext(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: 'Answered by withNext' });
}

console.log(withoutNext.length, withNext.length); // 3 4

const app = express();

app.get('/broken', () => {
    throw new Error('The database is down');
});

app.use(withoutNext);
app.use(withNext);

const server = await start(app);

// The error of /broken skips withoutNext, and withNext answers it.
const broken = await fetch(`${server.url}/broken`);
console.log(broken.status, await broken.json()); // 500 { error: 'Answered by withNext' }

// No route matches, so withoutNext runs as ordinary middleware: its "res" is next,
// res.status() throws a TypeError, and withNext answers that error.
const other = await fetch(`${server.url}/authors`);
console.log(other.status, await other.json()); // 500 { error: 'Answered by withNext' }

await server.close();
