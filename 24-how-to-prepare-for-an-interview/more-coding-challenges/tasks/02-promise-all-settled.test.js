import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { promiseAllSettled } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-promise-all-settled.js'
        : './02-promise-all-settled.js'
);

function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

function fail(reason, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(reason)), ms);
    });
}

test('returns a promise', () => {
    const result = promiseAllSettled([]);
    assert.ok(result instanceof Promise);
});

test('an empty array resolves to an empty array', async () => {
    assert.deepEqual(await promiseAllSettled([]), []);
});

test('fulfilled items give their values, in input order', async () => {
    const results = await promiseAllSettled([later('product', 30), later('reviews', 10)]);
    assert.deepEqual(results, [
        { status: 'fulfilled', value: 'product' },
        { status: 'fulfilled', value: 'reviews' },
    ]);
});

test('a rejected item gives its reason and the others still come in', async () => {
    const results = await promiseAllSettled([
        later('product', 30),
        fail('stock is down', 10),
    ]);
    assert.deepEqual(results[0], { status: 'fulfilled', value: 'product' });
    assert.equal(results[1].status, 'rejected');
    assert.equal(results[1].reason.message, 'stock is down');
});

test('it never rejects, even when every item fails', async () => {
    const results = await promiseAllSettled([
        fail('no stock', 10),
        fail('no reviews', 5),
    ]);
    assert.deepEqual(
        results.map((result) => result.status),
        ['rejected', 'rejected'],
    );
});

test('plain values count as fulfilled', async () => {
    const results = await promiseAllSettled([42, later('reviews', 5), null]);
    assert.deepEqual(results, [
        { status: 'fulfilled', value: 42 },
        { status: 'fulfilled', value: 'reviews' },
        { status: 'fulfilled', value: null },
    ]);
});
