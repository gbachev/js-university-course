import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/02-health-route.js' : './02-health-route.js'
);

const ready = await start(createApp({ ready: true }));
const starting = await start(createApp({ ready: false }));
after(() => Promise.all([ready.close(), starting.close()]));

test('a ready app answers 200 { status: "ok" }', async () => {
    const response = await fetch(`${ready.url}/health`);

    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.deepEqual(await response.json(), { status: 'ok' });
});

test('an app that is not ready answers 503 { status: "starting" }', async () => {
    const response = await fetch(`${starting.url}/health`);

    assert.equal(response.status, 503);
    assert.match(response.headers.get('content-type'), /^application\/json/);
    assert.deepEqual(await response.json(), { status: 'starting' });
});

test('both answers carry Cache-Control: no-store', async () => {
    const okResponse = await fetch(`${ready.url}/health`);
    const startingResponse = await fetch(`${starting.url}/health`);

    assert.equal(okResponse.status, 200);
    assert.equal(okResponse.headers.get('cache-control'), 'no-store');
    assert.equal(startingResponse.status, 503);
    assert.equal(startingResponse.headers.get('cache-control'), 'no-store');
});

test('the X-Powered-By header is gone', async () => {
    const response = await fetch(`${ready.url}/health`);

    assert.equal(response.status, 200);
    assert.equal(response.headers.get('x-powered-by'), null);
});
