import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';

// Our code from this folder, or the solution with npm run test:solutions.
const { shutDown } = await import(process.env.SOLUTIONS ? '../solutions/03-shut-down.js' : './03-shut-down.js');

// A stand-in for the database: it remembers whether close() was called.
function fakeDb() {
    return {
        open: true,
        close() {
            this.open = false;
        },
    };
}

// A server whose /slow answer waits 200 ms, then reports whether the database was
// still open at that moment. Every other path answers at once.
async function startServer(db) {
    const server = createServer((req, res) => {
        const answer = () => res.end(JSON.stringify({ dbOpen: db.open }));
        if (req.url === '/slow') {
            setTimeout(answer, 200);
        } else {
            answer();
        }
    }).listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    return { server, url: `http://localhost:${server.address().port}` };
}

// Fails the test when `promise` takes longer than `ms`.
function within(promise, ms, message) {
    let timer;
    const timeout = new Promise((resolve, reject) => {
        timer = setTimeout(() => reject(new Error(message)), ms);
    });
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

test('resolves after the server stops and the database closes', async () => {
    const db = fakeDb();
    const { server } = await startServer(db);

    await within(shutDown(server, db), 2000, 'shutDown() never resolved');

    assert.equal(server.listening, false);
    assert.equal(db.open, false);
});

test('a request in progress gets its answer, with the database still open', async () => {
    const db = fakeDb();
    const { server, url } = await startServer(db);

    // Connection: close, so the connection ends with this answer instead of
    // waiting for its next request.
    const response = fetch(`${url}/slow`, { headers: { Connection: 'close' } });
    // Let the request reach the server before we shut down.
    await new Promise((resolve) => setTimeout(resolve, 50));
    const closing = shutDown(server, db);

    const answer = await response;
    assert.equal(answer.status, 200);
    assert.deepEqual(await answer.json(), { dbOpen: true });
    await within(closing, 2000, 'shutDown() never resolved');
    assert.equal(db.open, false);
});

test('the database stays open until the open request has finished', async () => {
    const db = fakeDb();
    const { server, url } = await startServer(db);

    // Connection: close, so the connection ends with this answer instead of
    // waiting for its next request.
    const response = fetch(`${url}/slow`, { headers: { Connection: 'close' } });
    await new Promise((resolve) => setTimeout(resolve, 50));
    const closing = shutDown(server, db);

    await new Promise((resolve) => setTimeout(resolve, 50));
    assert.equal(db.open, true, 'the database closed while a request was still in progress');
    await response;
    await within(closing, 2000, 'shutDown() never resolved');
    assert.equal(db.open, false, 'the database was never closed');
});

test('after shutDown() starts, new connections are refused', async () => {
    const db = fakeDb();
    const { server, url } = await startServer(db);

    const closing = shutDown(server, db);

    await assert.rejects(fetch(url, { headers: { Connection: 'close' } }));
    await within(closing, 2000, 'shutDown() never resolved');
});

test('an idle keep-alive connection does not hold the shutdown up', async () => {
    const db = fakeDb();
    const { server, url } = await startServer(db);

    // fetch() keeps the connection open for the next request once this one is done.
    await (await fetch(url)).text();

    await within(shutDown(server, db), 1000, 'shutDown() waited for an idle connection');
    assert.equal(db.open, false);
});

test('rejects when the server is not running, and leaves the database alone', async () => {
    const db = fakeDb();
    const server = createServer();

    await assert.rejects(shutDown(server, db), { code: 'ERR_SERVER_NOT_RUNNING' });
    assert.equal(db.open, true);
});
