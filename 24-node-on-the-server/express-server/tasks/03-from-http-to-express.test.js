import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createHttpServer, createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-from-http-to-express.js' : './03-from-http-to-express.js'
);

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];

const servers = {
    http: await start(createHttpServer()),
    express: await start(createApp()),
};
after(() => Promise.all(Object.values(servers).map((server) => server.close())));

for (const [name, server] of Object.entries(servers)) {
    test(`${name}: GET / answers 200 with the name and version`, async () => {
        const response = await fetch(`${server.url}/`);

        assert.equal(response.status, 200);
        assert.match(response.headers.get('content-type'), /^application\/json/);
        assert.deepEqual(await response.json(), { name: 'Books API', version: 1 });
    });

    test(`${name}: GET /books answers 200 with the books`, async () => {
        const response = await fetch(`${server.url}/books`);

        assert.equal(response.status, 200);
        assert.match(response.headers.get('content-type'), /^application\/json/);
        assert.deepEqual(await response.json(), books);
    });

    test(`${name}: an unknown path and an unknown method answer 404`, async () => {
        const unknownPath = await fetch(`${server.url}/authors`);
        const unknownMethod = await fetch(`${server.url}/books`, { method: 'DELETE' });

        assert.equal(unknownPath.status, 404);
        assert.equal(unknownMethod.status, 404);
    });
}

test('express: a query string does not change the route', async () => {
    const response = await fetch(`${servers.express.url}/books?sort=title`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), books);
});
