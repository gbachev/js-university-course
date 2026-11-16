import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { changeQuantity } = await import(
    process.env.SOLUTIONS ? '../solutions/03-change-quantity.js' : './03-change-quantity.js'
);

function createCart() {
    return {
        owner: 'Jane Doe',
        items: [
            { name: 'Pen', price: 3, quantity: 1 },
            { name: 'Lamp', price: 20, quantity: 2 },
        ],
    };
}

test('the returned cart has the new quantity', () => {
    const updated = changeQuantity(createCart(), 'Pen', 4);
    assert.deepEqual(updated, {
        owner: 'Jane Doe',
        items: [
            { name: 'Pen', price: 3, quantity: 4 },
            { name: 'Lamp', price: 20, quantity: 2 },
        ],
    });
});

test('the old cart, its items and the item objects do not change', () => {
    const cart = createCart();
    changeQuantity(cart, 'Pen', 4);
    assert.deepEqual(cart, createCart());
});

test('the cart, the items array and the changed item are new objects', () => {
    const cart = createCart();
    const updated = changeQuantity(cart, 'Pen', 4);
    assert.notEqual(updated, cart);
    assert.notEqual(updated.items, cart.items);
    assert.notEqual(updated.items[0], cart.items[0]);
});

test('an unknown name gives a new cart with the same items', () => {
    const cart = createCart();
    const updated = changeQuantity(cart, 'Mug', 3);
    assert.deepEqual(updated, createCart());
    assert.notEqual(updated, cart);
});

test('the same arguments always give the same result', () => {
    const cart = createCart();
    assert.deepEqual(changeQuantity(cart, 'Lamp', 5), changeQuantity(cart, 'Lamp', 5));
});
