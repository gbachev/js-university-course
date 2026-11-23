import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { shouldRefuse } = await import(
    process.env.SOLUTIONS ? '../solutions/03-should-refuse.js' : './03-should-refuse.js'
);

// A request to our server on http://localhost:3000, unless the test says otherwise.
function request(method, origin, { protocol = 'http', host = 'localhost:3000' } = {}) {
    return { method, protocol, host, headers: origin === undefined ? {} : { origin } };
}

test('a write from our own origin goes on', () => {
    for (const method of ['POST', 'PUT', 'PATCH', 'DELETE']) {
        assert.equal(shouldRefuse(request(method, 'http://localhost:3000')), false, method);
    }
});

test('a write from another site is refused, whatever the method', () => {
    for (const method of ['POST', 'PUT', 'PATCH', 'DELETE']) {
        assert.equal(shouldRefuse(request(method, 'https://evil.example')), true, method);
    }
});

test('GET, HEAD and OPTIONS are never refused', () => {
    for (const method of ['GET', 'HEAD', 'OPTIONS']) {
        assert.equal(shouldRefuse(request(method, 'https://evil.example')), false, method);
    }
});

test('a request without an Origin header goes on', () => {
    assert.equal(shouldRefuse(request('POST')), false);
    assert.equal(shouldRefuse(request('DELETE')), false);
});

test('the origin null is refused', () => {
    assert.equal(shouldRefuse(request('POST', 'null')), true);
});

test('the same host on another port is another origin', () => {
    assert.equal(shouldRefuse(request('POST', 'http://localhost:8080')), true);
    assert.equal(shouldRefuse(request('POST', 'http://localhost')), true);
});

test('http is another origin than https', () => {
    const ours = { protocol: 'https', host: 'app.example.com' };

    assert.equal(shouldRefuse(request('POST', 'https://app.example.com', ours)), false);
    assert.equal(shouldRefuse(request('POST', 'http://app.example.com', ours)), true);
});

test('a sibling subdomain is the same site but another origin', () => {
    const ours = { protocol: 'https', host: 'app.example.com' };

    assert.equal(shouldRefuse(request('POST', 'https://blog.example.com', ours)), true);
});

test('a name that only starts or ends like ours is refused', () => {
    assert.equal(shouldRefuse(request('POST', 'http://localhost:3000.evil.example')), true);
    assert.equal(shouldRefuse(request('POST', 'http://localhost:300')), true);
    assert.equal(shouldRefuse(request('POST', 'http://evil.localhost:3000')), true);
});
