import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { buildCsp } = await import(
    process.env.SOLUTIONS ? '../solutions/03-csp-header.js' : './03-csp-header.js'
);

test('the policy from the lecture', () => {
    assert.equal(buildCsp({ 'script-src': ['self'] }), "script-src 'self'");
});

test('several directives come in the object order, separated by "; "', () => {
    const policy = {
        'default-src': ['self'],
        'img-src': ['self', 'data:', 'https://covers.example'],
        'object-src': ['none'],
    };
    assert.equal(
        buildCsp(policy),
        "default-src 'self'; img-src 'self' data: https://covers.example; " +
            "object-src 'none'",
    );
});

test('keywords get single quotes, hosts do not', () => {
    assert.equal(
        buildCsp({ 'script-src': ['self', 'strict-dynamic', 'https://cdn.example'] }),
        "script-src 'self' 'strict-dynamic' https://cdn.example",
    );
    assert.equal(buildCsp({ 'img-src': ['self', '*'] }), "img-src 'self' *");
});

test('a directive with an empty list is just its name', () => {
    assert.equal(
        buildCsp({ 'default-src': ['self'], 'upgrade-insecure-requests': [] }),
        "default-src 'self'; upgrade-insecure-requests",
    );
});

test('an empty policy gives an empty string', () => {
    assert.equal(buildCsp({}), '');
});

test('unsafe-inline in script-src throws an error', () => {
    assert.throws(() => buildCsp({ 'script-src': ['self', 'unsafe-inline'] }), Error);
});

test('unsafe-inline in style-src is allowed', () => {
    assert.equal(
        buildCsp({ 'style-src': ['self', 'unsafe-inline'] }),
        "style-src 'self' 'unsafe-inline'",
    );
});
