import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createPriceCache } = await import(
    process.env.SOLUTIONS ? '../solutions/03-price-cache.js' : './03-price-cache.js'
);

function countingCalculate() {
    const calls = [];
    const calculate = (product) => {
        calls.push(product.id);
        return product.price * 1.2;
    };
    return { calls, calculate };
}

test('it returns the calculated price', () => {
    const priceOf = createPriceCache((product) => product.price * 2);
    assert.equal(priceOf({ id: 1, price: 25 }), 50);
});

test('the second time, the price comes from the cache', () => {
    const { calls, calculate } = countingCalculate();
    const priceOf = createPriceCache(calculate);
    const lamp = { id: 1, price: 25 };
    assert.equal(priceOf(lamp), 30);
    assert.equal(priceOf(lamp), 30);
    assert.deepEqual(calls, [1]);
});

test('every product is calculated once', () => {
    const { calls, calculate } = countingCalculate();
    const priceOf = createPriceCache(calculate);
    const lamp = { id: 1, price: 25 };
    const mug = { id: 2, price: 10 };
    priceOf(lamp);
    priceOf(mug);
    priceOf(lamp);
    priceOf(mug);
    assert.deepEqual(calls, [1, 2]);
});

test('two objects with the same fields are two products', () => {
    const { calls, calculate } = countingCalculate();
    const priceOf = createPriceCache(calculate);
    priceOf({ id: 1, price: 25 });
    priceOf({ id: 1, price: 25 });
    assert.deepEqual(calls, [1, 1]);
});

test('a price of 0 is cached too', () => {
    const { calls, calculate } = countingCalculate();
    const priceOf = createPriceCache(calculate);
    const freeBookmark = { id: 3, price: 0 };
    assert.equal(priceOf(freeBookmark), 0);
    assert.equal(priceOf(freeBookmark), 0);
    assert.deepEqual(calls, [3]);
});

test('each cache keeps its own prices', () => {
    const lamp = { id: 1, price: 25 };
    const withTax = createPriceCache((product) => product.price * 1.2);
    const onSale = createPriceCache((product) => product.price / 2);
    assert.equal(withTax(lamp), 30);
    assert.equal(onSale(lamp), 12.5);
});

test('a product must be an object, like every WeakMap key', () => {
    const priceOf = createPriceCache((product) => product.price);
    assert.throws(() => priceOf('lamp'), TypeError);
});
