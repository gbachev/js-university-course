import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { memoize } = await import(
    process.env.SOLUTIONS ? '../solutions/01-memoize.js' : './01-memoize.js'
);

function countingCarrier(prices) {
    const carrier = (postcode) => {
        carrier.calls++;
        return prices[postcode];
    };
    carrier.calls = 0;
    return carrier;
}

test('returns the result of fn', () => {
    const quote = memoize((postcode) => (postcode === '1000' ? 5 : 9));
    assert.equal(quote('1000'), 5);
    assert.equal(quote('4000'), 9);
});

test('calls fn only once for the same argument', () => {
    const carrier = countingCarrier({ 1000: 5 });
    const quote = memoize(carrier);
    quote('1000');
    quote('1000');
    assert.equal(quote('1000'), 5);
    assert.equal(carrier.calls, 1);
});

test('keeps a separate result for every argument', () => {
    const carrier = countingCarrier({ 1000: 5, 4000: 9 });
    const quote = memoize(carrier);
    assert.equal(quote('1000'), 5);
    assert.equal(quote('4000'), 9);
    assert.equal(quote('1000'), 5);
    assert.equal(carrier.calls, 2);
});

test('remembers results like 0 and undefined too', () => {
    const carrier = countingCarrier({ 1000: 0 });
    const quote = memoize(carrier);
    assert.equal(quote('1000'), 0);
    assert.equal(quote('1000'), 0);
    assert.equal(quote('9999'), undefined);
    assert.equal(quote('9999'), undefined);
    assert.equal(carrier.calls, 2);
});

test('two memoized functions have their own caches', () => {
    const vat = memoize((price) => price * 1.2);
    const double = memoize((price) => price * 2);
    assert.equal(vat(10), 12);
    assert.equal(double(10), 20);
});
