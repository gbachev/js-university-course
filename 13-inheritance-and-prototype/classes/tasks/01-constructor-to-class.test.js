import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Subscription } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-constructor-to-class.js'
        : './01-constructor-to-class.js'
);

test('a subscription stores its plan and monthly price', () => {
    const basic = new Subscription('basic', 5);
    assert.equal(basic.plan, 'basic');
    assert.equal(basic.pricePerMonth, 5);
});

test('the methods still work', () => {
    const premium = new Subscription('premium', 12);
    assert.equal(premium.yearlyPrice(), 144);
    assert.equal(premium.label(), 'premium: 12 EUR per month');
});

test('the methods are shared on the prototype', () => {
    const basic = new Subscription('basic', 5);
    assert.equal(Object.hasOwn(basic, 'label'), false);
    assert.equal(typeof Subscription.prototype.label, 'function');
});

test('the methods are not enumerable', () => {
    assert.deepEqual(Object.keys(Subscription.prototype), []);
});

test('for...in lists only the own data', () => {
    const keys = [];
    for (const key in new Subscription('basic', 5)) {
        keys.push(key);
    }
    assert.deepEqual(keys, ['plan', 'pricePerMonth']);
});

test('calling it without new throws a TypeError that says so', () => {
    assert.throws(() => Subscription('basic', 5), {
        name: 'TypeError',
        message: /without 'new'/
    });
});
