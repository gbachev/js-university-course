// What cors() sends with each kind of origin option, and with credentials. Runs on its own:
// for each option it starts an app on a free port, sends GET /books from Node with an
// Origin header, prints the status and three headers (null when a header is missing)
// and stops the app.
import express from 'express';
import cors from 'cors';
import { start } from '../../lib/start.js';

async function ask(options, origin) {
    const app = express();
    app.use(cors(options));
    app.get('/books', (req, res) => {
        res.json([{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
    });

    const server = await start(app);
    const response = await fetch(`${server.url}/books`, { headers: { Origin: origin } });
    await response.text();
    await server.close();

    console.log(
        response.status,
        response.headers.get('access-control-allow-origin'),
        response.headers.get('access-control-allow-credentials'),
        response.headers.get('vary'),
    );
}

const page = 'http://localhost:8080';
const other = 'https://evil.example';

await ask(undefined, other); // 200 * null null
await ask({ origin: page }, other); // 200 http://localhost:8080 null Origin
await ask({ origin: [page, 'http://localhost:5173'] }, page); // 200 http://localhost:8080 null Origin
await ask({ origin: [page, 'http://localhost:5173'] }, other); // 200 null null Origin

const isOurs = (origin, callback) => callback(null, origin === page);
await ask({ origin: isOurs }, page); // 200 http://localhost:8080 null Origin

await ask({ origin: page, credentials: true }, page); // 200 http://localhost:8080 true Origin
await ask({ credentials: true }, page); // 200 * true null
