import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { proxyHost } = await import(
    process.env.SOLUTIONS ? '../solutions/01-proxy-host.js' : './01-proxy-host.js'
);

test('the short form rewrites Host to the target', () => {
    assert.equal(proxyHost('http://localhost:3000', 'localhost:5173'), 'localhost:3000');
});

test('changeOrigin: false keeps the Host of the browser', () => {
    const entry = { target: 'http://localhost:3000', changeOrigin: false };

    assert.equal(proxyHost(entry, 'localhost:5173'), 'localhost:5173');
});

test('an object without changeOrigin keeps the Host of the browser', () => {
    assert.equal(proxyHost({ target: 'http://localhost:3000' }, 'localhost:5173'), 'localhost:5173');
});

test('changeOrigin: true in an object rewrites Host too', () => {
    const entry = { target: 'http://127.0.0.1:4000', changeOrigin: true };

    assert.equal(proxyHost(entry, 'localhost:5173'), '127.0.0.1:4000');
});

test('the host of a target leaves out the path and a default port', () => {
    assert.equal(proxyHost('https://api.example.com:443/v1', 'localhost:5173'), 'api.example.com');
});

test('the entry stays as it was', () => {
    const on = Object.freeze({ target: 'http://localhost:3000', changeOrigin: true });
    const unset = Object.freeze({ target: 'http://localhost:3000' });

    assert.equal(proxyHost(on, 'localhost:5173'), 'localhost:3000');
    assert.equal(proxyHost(unset, 'localhost:5173'), 'localhost:5173');
    assert.deepEqual(unset, { target: 'http://localhost:3000' });
});
