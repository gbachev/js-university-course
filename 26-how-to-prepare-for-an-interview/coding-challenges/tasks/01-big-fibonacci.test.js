import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { fib } = await import(
    process.env.SOLUTIONS ? '../solutions/01-big-fibonacci.js' : './01-big-fibonacci.js'
);

test('the first numbers are 0, 1, 1, 2, 3, 5, 8 as BigInts', () => {
    assert.deepEqual(
        [0, 1, 2, 3, 4, 5, 6].map((n) => fib(n)),
        [0n, 1n, 1n, 2n, 3n, 5n, 8n],
    );
});

test('fib(10) is 55n', () => {
    assert.equal(fib(10), 55n);
});

test('fib(90) is exact, past the safe integer limit', () => {
    assert.equal(fib(90), 2880067194370816120n);
});

test('fib(10000) works without a stack overflow and has 2090 digits', () => {
    const digits = fib(10000).toString();
    assert.equal(digits.length, 2090);
    assert.equal(digits.slice(0, 20), '33644764876431783266');
});

test('a negative or a decimal position throws a RangeError', () => {
    assert.throws(() => fib(-1), RangeError);
    assert.throws(() => fib(2.5), RangeError);
});
