import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { start } from '../../lib/start.js';

// Our code from this folder, or the solution with npm run test:solutions.
const { createApp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-hashed-assets.js' : './03-hashed-assets.js'
);

const server = await start(createApp());
after(() => server.close());

const asset = '/assets/books-C4f9xQ2a.js';

// The directives of a Cache-Control header, in lower case and sorted.
function directives(response) {
    const value = response.headers.get('cache-control');
    assert.ok(value, 'no Cache-Control header');
    return value
        .split(',')
        .map((directive) => directive.trim().toLowerCase())
        .sort();
}

test('the hashed file: public, max-age=31536000, immutable', async () => {
    const response = await fetch(`${server.url}${asset}`);

    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /javascript/);
    assert.deepEqual(directives(response), ['immutable', 'max-age=31536000', 'public']);
    assert.match(await response.text(), /fetch\('\/me\/books'\)/);
});

test('/ and /index.html keep public, max-age=0, with no immutable', async () => {
    for (const path of ['/', '/index.html']) {
        const response = await fetch(`${server.url}${path}`);

        assert.equal(response.status, 200, `${path} does not answer 200`);
        assert.match(response.headers.get('content-type'), /html/);
        assert.deepEqual(directives(response), ['max-age=0', 'public'], `${path}`);
        await response.text();
    }
});

test('a missing file under /assets gets 404', async () => {
    const response = await fetch(`${server.url}/assets/books-B0ld0ld0.js`);

    assert.equal(response.status, 404);
    await response.text();
});

test('the hashed file answers 304, with no body, to its own ETag', async () => {
    const first = await fetch(`${server.url}${asset}`);
    await first.text();
    const etag = first.headers.get('etag');
    assert.ok(etag, 'no ETag');

    // cache: 'no-cache' keeps Node's fetch() from adding Cache-Control: no-cache.
    const again = await fetch(`${server.url}${asset}`, {
        cache: 'no-cache',
        headers: { 'If-None-Match': etag },
    });
    assert.equal(again.status, 304);
    assert.equal(await again.text(), '');
});
