import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { repeatOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/02-repeat-order.js' : './02-repeat-order.js'
);

function createOrder() {
    return {
        id: 1,
        total: 30,
        address: { street: '1 Elm St', city: 'Sofia' },
        items: [{ name: 'Hat', quantity: 2 }],
    };
}

test('the copy has the same values as the old order', () => {
    assert.deepEqual(repeatOrder(createOrder()), createOrder());
});

test('the copy is a new object', () => {
    const old = createOrder();
    assert.notEqual(repeatOrder(old), old);
});

test('changing the city of the copy keeps the old city', () => {
    const old = createOrder();
    const copy = repeatOrder(old);
    copy.address.city = 'Varna';
    assert.equal(old.address.city, 'Sofia');
});

test('changing an item of the copy keeps the old items', () => {
    const old = createOrder();
    const copy = repeatOrder(old);
    copy.items[0].quantity = 5;
    assert.equal(old.items[0].quantity, 2);
});
