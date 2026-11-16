import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { once } = await import(
    process.env.SOLUTIONS ? '../solutions/05-fix-once.js' : './05-fix-once.js'
);

test('the first call runs fn and returns its result', () => {
    const placeOrder = once((orderId) => `Order ${orderId} placed`);
    assert.equal(placeOrder(42), 'Order 42 placed');
});

test('later calls do not run fn again and return the first result', () => {
    const save = mock.fn((orderId) => orderId);
    const placeOrder = once(save);
    placeOrder(42);
    assert.equal(placeOrder(43), 42);
    assert.equal(placeOrder(44), 42);
    assert.equal(save.mock.callCount(), 1);
});

test('fn gets the this of the call', () => {
    const checkout = {
        cartId: 'c-1',
        place: once(function () {
            return this.cartId;
        }),
    };
    assert.equal(checkout.place(), 'c-1');
});

test('a fn that calls the wrapper again still runs once', () => {
    let runs = 0;
    const placeOrder = once(() => {
        runs += 1;
        placeOrder();
        return 'placed';
    });
    assert.equal(placeOrder(), 'placed');
    assert.equal(runs, 1);
});
