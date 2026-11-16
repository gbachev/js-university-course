import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { trampoline, countdownStep } = await import(
    process.env.SOLUTIONS ? '../solutions/02-trampoline.js' : './02-trampoline.js'
);

test('returns a function', () => {
    assert.equal(typeof trampoline(countdownStep), 'function');
});

test('a result that is not a function comes back as it is', () => {
    assert.equal(trampoline((a, b) => a + b)(2, 3), 5);
    assert.deepEqual(trampoline(() => ['Dune'])(), ['Dune']);
});

test('runs the thunks until it gets a value', () => {
    assert.equal(trampoline(countdownStep)(3), 'liftoff after 3 steps');
    assert.equal(trampoline(countdownStep)(0), 'liftoff after 0 steps');
});

test('passes all the arguments to fn', () => {
    assert.equal(trampoline(countdownStep)(2, 10), 'liftoff after 12 steps');
});

test('handles 100,000 steps without a RangeError', () => {
    assert.equal(trampoline(countdownStep)(100_000), 'liftoff after 100000 steps');
});

test('a sum written with thunks works for 100,000 items', () => {
    const sumPrices = (prices, index = 0, acc = 0) =>
        index === prices.length
            ? acc
            : () => sumPrices(prices, index + 1, acc + prices[index]);
    const prices = Array.from({ length: 100_000 }, () => 3);
    assert.equal(trampoline(sumPrices)(prices), 300_000);
});
