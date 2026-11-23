// The ETag that res.json() sends with each value of the etag setting. Runs on its own.
import express from 'express';
import { start } from '../../lib/start.js';

for (const setting of ['weak', 'strong', false]) {
    const app = express();
    app.set('etag', setting);
    app.get('/books', (req, res) => {
        res.json([{ title: 'Dune', author: 'Frank Herbert' }]);
    });

    const server = await start(app);
    const response = await fetch(`${server.url}/books`);
    await response.text();
    await server.close();

    console.log(setting, response.headers.get('etag'));
}
// weak W/"2b-Yag+6gzK3nQ2hcRRKzT53qWxNNU"
// strong "2b-Yag+6gzK3nQ2hcRRKzT53qWxNNU"
// false null
