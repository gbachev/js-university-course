import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { once } = await import(
    process.env.SOLUTIONS ? '../solutions/03-pay-once.js' : './03-pay-once.js'
);

test('the first call runs fn and returns its result', () => {
    const pay = once((amount) => 'Charged ' + amount);
    assert.equal(pay(20), 'Charged 20');
});

test('fn runs only once, however often we call', () => {
    let charges = 0;
    const pay = once(() => {
        charges++;
    });
    pay();
    pay();
    pay();
    assert.equal(charges, 1);
});

test('later calls return the first result, even with other arguments', () => {
    const pay = once((amount) => 'Charged ' + amount);
    pay(20);
    assert.equal(pay(99), 'Charged 20');
});

test('all arguments reach fn', () => {
    const pay = once((amount, currency) => `Charged ${amount} ${currency}`);
    assert.equal(pay(20, 'EUR'), 'Charged 20 EUR');
});

test('two functions from once() run separately', () => {
    const first = once(() => 'first');
    const second = once(() => 'second');
    assert.equal(first(), 'first');
    assert.equal(second(), 'second');
});
