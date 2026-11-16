import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { removeItem } = await import(
    process.env.SOLUTIONS ? '../solutions/02-remove-item.js' : './02-remove-item.js'
);

function createCart() {
    return {
        owner: 'Jane Doe',
        items: [
            { name: 'Pen', price: 3 },
            { name: 'Lamp', price: 20 },
        ],
    };
}

test('the returned cart no longer has the item', () => {
    const updated = removeItem(createCart(), 'Pen');
    assert.deepEqual(updated, { owner: 'Jane Doe', items: [{ name: 'Lamp', price: 20 }] });
});

test('the old cart keeps all its items', () => {
    const cart = createCart();
    removeItem(cart, 'Pen');
    assert.deepEqual(cart, createCart());
});

test('returns a new cart with a new items array', () => {
    const cart = createCart();
    const updated = removeItem(cart, 'Pen');
    assert.notEqual(updated, cart);
    assert.notEqual(updated.items, cart.items);
});

test('an unknown name gives a new cart with the same items', () => {
    const cart = createCart();
    const updated = removeItem(cart, 'Mug');
    assert.deepEqual(updated, createCart());
    assert.notEqual(updated, cart);
});
