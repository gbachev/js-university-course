import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { deepFreeze } = await import(
    process.env.SOLUTIONS ? '../solutions/03-deep-freeze.js' : './03-deep-freeze.js'
);

function createPrices() {
    return {
        currency: 'EUR',
        shipping: {
            standard: 5,
            express: { price: 15, days: 1 },
        },
    };
}

test('returns the object we pass in, frozen', () => {
    const prices = createPrices();
    assert.equal(deepFreeze(prices), prices);
    assert.equal(Object.isFrozen(prices), true);
});

test('a nested object is frozen too', () => {
    const prices = deepFreeze(createPrices());
    assert.equal(Object.isFrozen(prices.shipping), true);
    assert.throws(() => {
        prices.shipping.standard = 0;
    }, TypeError);
});

test('an object two levels deep is frozen too', () => {
    const prices = deepFreeze(createPrices());
    assert.equal(Object.isFrozen(prices.shipping.express), true);
    assert.throws(() => {
        prices.shipping.express.price = 1;
    }, TypeError);
});

test('the values stay the same', () => {
    assert.deepEqual(deepFreeze(createPrices()), createPrices());
});

test('a null value stays null and does not break the freeze', () => {
    const prices = createPrices();
    prices.coupon = null;
    deepFreeze(prices);
    assert.equal(prices.coupon, null);
    assert.equal(Object.isFrozen(prices.shipping), true);
});
