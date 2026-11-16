import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { unwrap } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-unwrap-the-price.js'
        : './01-unwrap-the-price.js'
);

test('a Number wrapper object gives back its number', () => {
    assert.equal(unwrap(new Number(19.99)), 19.99);
});

test('the value we get back is a primitive, not an object', () => {
    assert.equal(typeof unwrap(new Number(5)), 'number');
});

test('a plain number comes back as it is', () => {
    assert.equal(unwrap(5), 5);
});

test('a String wrapper object gives back its string', () => {
    assert.equal(unwrap(new String('EUR')), 'EUR');
});

test('a plain string comes back as it is', () => {
    assert.equal(unwrap('EUR'), 'EUR');
});
