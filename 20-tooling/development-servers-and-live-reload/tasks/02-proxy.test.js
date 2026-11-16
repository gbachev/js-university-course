import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { proxyTarget } = await import(
    process.env.SOLUTIONS ? '../solutions/02-proxy.js' : './02-proxy.js'
);

const proxy = { '/api': 'http://localhost:3000' };

test('an API path goes to the backend', () => {
    assert.equal(proxyTarget('/api/books', proxy), 'http://localhost:3000/api/books');
});

test('the query string goes along', () => {
    assert.equal(
        proxyTarget('/api/books?q=dune', proxy),
        'http://localhost:3000/api/books?q=dune',
    );
});

test('our own files stay with the dev server', () => {
    assert.equal(proxyTarget('/src/main.js', proxy), null);
    assert.equal(proxyTarget('/', proxy), null);
});

test('the prefix has to be at the start', () => {
    assert.equal(proxyTarget('/docs/api/books', proxy), null);
});

test('with several prefixes, the first that fits wins', () => {
    const twoBackends = {
        '/api/covers': 'http://localhost:4000',
        '/api': 'http://localhost:3000',
    };
    assert.equal(
        proxyTarget('/api/covers/1.jpg', twoBackends),
        'http://localhost:4000/api/covers/1.jpg',
    );
    assert.equal(proxyTarget('/api/books', twoBackends), 'http://localhost:3000/api/books');
});

test('no proxy config sends nothing anywhere', () => {
    assert.equal(proxyTarget('/api/books', {}), null);
});
