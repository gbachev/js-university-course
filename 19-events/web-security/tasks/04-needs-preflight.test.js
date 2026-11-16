import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { needsPreflight } = await import(
    process.env.SOLUTIONS ? '../solutions/04-needs-preflight.js' : './04-needs-preflight.js'
);

test('a plain GET goes out at once', () => {
    assert.equal(needsPreflight(), false);
    assert.equal(needsPreflight({ method: 'GET' }), false);
});

test('a POST with JSON, as in The Fetch API, needs a preflight', () => {
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json' } };
    assert.equal(needsPreflight(options), true);
});

test('a POST like a plain form needs none, with or without a charset', () => {
    const textPost = { method: 'POST', headers: { 'Content-Type': 'text/plain' } };
    assert.equal(needsPreflight(textPost), false);
    const formPost = {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    };
    assert.equal(needsPreflight(formPost), false);
});

test('PUT and DELETE need a preflight, HEAD does not', () => {
    assert.equal(needsPreflight({ method: 'PUT' }), true);
    assert.equal(needsPreflight({ method: 'DELETE' }), true);
    assert.equal(needsPreflight({ method: 'HEAD' }), false);
});

test('a header outside the safe four, like Authorization, needs a preflight', () => {
    assert.equal(needsPreflight({ headers: { Authorization: 'Bearer 123' } }), true);
});

test('header names and the Content-Type value count in any case', () => {
    const json = { method: 'POST', headers: { 'content-type': 'application/json' } };
    const text = { method: 'POST', headers: { 'Content-Type': 'Text/Plain' } };
    assert.equal(needsPreflight(json), true);
    assert.equal(needsPreflight(text), false);
    assert.equal(needsPreflight({ headers: { accept: 'application/json' } }), false);
});
