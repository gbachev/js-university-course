import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countByKind } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-count-the-objects.js'
        : './02-count-the-objects.js'
);

test('counts plain objects and primitives', () => {
    assert.deepEqual(countByKind(['Anna', 30, { city: 'Sofia' }]), {
        objects: 1,
        primitives: 2,
    });
});

test('arrays and dates are objects', () => {
    assert.deepEqual(countByKind([['a'], new Date('2026-11-16'), true]), {
        objects: 2,
        primitives: 1,
    });
});

test('null is a primitive', () => {
    assert.deepEqual(countByKind([null, undefined]), { objects: 0, primitives: 2 });
});

test('a function is an object', () => {
    assert.deepEqual(countByKind([function () {}]), { objects: 1, primitives: 0 });
});

test('an empty array has no objects and no primitives', () => {
    assert.deepEqual(countByKind([]), { objects: 0, primitives: 0 });
});
