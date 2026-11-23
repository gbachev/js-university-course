import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { startApp } = await import(
    process.env.SOLUTIONS ? '../solutions/01-start-app.js' : './01-start-app.js'
);

// A small app: JSON on /me, and on /stream an answer that never ends.
function handler(req, res) {
    if (req.url === '/stream') {
        res.writeHead(200, { 'Content-Type': 'text/event-stream' });
        res.write('data: hello\n\n');
        return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ path: req.url }));
}

// Fails the test when `promise` takes longer than `ms`.
function within(promise, ms, message) {
    let timer;
    const timeout = new Promise((resolve, reject) => {
        timer = setTimeout(() => reject(new Error(message)), ms);
    });
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

test('resolves with a localhost url on a real port, and the app answers there', async (t) => {
    const app = await startApp(handler);
    t.after(() => app.close());

    assert.match(app.url, /^http:\/\/localhost:\d+$/);
    assert.notEqual(new URL(app.url).port, '0');
    const response = await fetch(`${app.url}/me`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { path: '/me' });
});

test('two apps get two different free ports', async (t) => {
    const first = await startApp(handler);
    t.after(() => first.close());
    const second = await startApp(handler);
    t.after(() => second.close());

    assert.notEqual(first.url, second.url);
    assert.equal((await fetch(`${second.url}/me`)).status, 200);
});

test('close() stops the server: a request after it fails', async () => {
    const app = await startApp(handler);
    await app.close();

    await assert.rejects(fetch(`${app.url}/me`), TypeError);
});

test('close() does not wait for a request that is still open', async (t) => {
    const app = await startApp(handler);
    // After the test we end our request ourselves, so the server can stop even
    // when close() waits for it.
    const controller = new AbortController();
    let closing;
    t.after(async () => {
        controller.abort();
        await (closing ?? app.close());
    });

    const response = await fetch(`${app.url}/stream`, { signal: controller.signal });
    assert.equal(response.status, 200);
    closing = app.close();
    await within(closing, 1000, 'close() is still waiting after 1 second');
});
