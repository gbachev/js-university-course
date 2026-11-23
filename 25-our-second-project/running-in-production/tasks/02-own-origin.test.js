import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';

// Our code from this folder, or the solution with npm run test:solutions.
const { ownOrigin } = await import(process.env.SOLUTIONS ? '../solutions/02-own-origin.js' : './02-own-origin.js');

// A request object shaped like the one node:http gives a handler.
const request = (headers, encrypted = false) => ({ headers, socket: { encrypted } });

test('a plain http request without a proxy gives http and the host with its port', () => {
    assert.equal(ownOrigin(request({ host: 'localhost:3000' }), false), 'http://localhost:3000');
});

test('a TLS connection gives https', () => {
    assert.equal(ownOrigin(request({ host: 'app.example.com' }, true), false), 'https://app.example.com');
});

test("trusting the proxy, its X-Forwarded-Proto wins over the connection's http", () => {
    const req = request({ host: 'app.example.com', 'x-forwarded-proto': 'https' });

    assert.equal(ownOrigin(req, true), 'https://app.example.com');
});

test('without trust, X-Forwarded-Proto is ignored, since any client can send it', () => {
    const req = request({ host: 'app.example.com', 'x-forwarded-proto': 'https' });

    assert.equal(ownOrigin(req, false), 'http://app.example.com');
});

test('trusting the proxy but with no header, the connection decides', () => {
    assert.equal(ownOrigin(request({ host: 'localhost:3000' }), true), 'http://localhost:3000');
});

test('a list from several proxies gives its first value, trimmed', () => {
    const req = request({ host: 'app.example.com', 'x-forwarded-proto': ' https , http' });

    assert.equal(ownOrigin(req, true), 'https://app.example.com');
});

test("behind a proxy, the browser's https Origin matches only with trust", async (t) => {
    let trust = false;
    const server = createServer((req, res) => {
        const allowed = req.headers.origin === ownOrigin(req, trust);
        res.writeHead(allowed ? 201 : 403).end();
    }).listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    t.after(() => server.close());

    const { port } = server.address();
    const post = () =>
        fetch(`http://localhost:${port}/api/auth/signup`, {
            method: 'POST',
            headers: { Origin: `https://localhost:${port}`, 'X-Forwarded-Proto': 'https' },
        });

    assert.equal((await post()).status, 403);
    trust = true;
    assert.equal((await post()).status, 201);
});
