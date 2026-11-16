import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { cartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-bundle-total.js' : './02-bundle-total.js'
);

test('adds the prices of plain products', () => {
    assert.equal(cartTotal([{ name: 'Pen', price: 3 }, { name: 'Book', price: 12 }]), 15);
});

test('an empty cart costs 0', () => {
    assert.equal(cartTotal([]), 0);
});

test('a bundle costs what its items cost', () => {
    const cart = [
        { name: 'Pen', price: 3 },
        {
            name: 'Desk set',
            items: [{ name: 'Lamp', price: 20 }, { name: 'Mug', price: 7 }],
        },
    ];
    assert.equal(cartTotal(cart), 30);
});

test('bundles inside bundles are counted at every level', () => {
    const cart = [
        {
            name: 'Office box',
            items: [
                { name: 'Stapler', price: 9 },
                {
                    name: 'Desk set',
                    items: [
                        { name: 'Lamp', price: 20 },
                        { name: 'Notes', items: [{ name: 'Pad', price: 2 }] },
                    ],
                },
            ],
        },
    ];
    assert.equal(cartTotal(cart), 31);
});

test('a bundle with no items costs 0', () => {
    const cart = [{ name: 'Empty box', items: [] }, { name: 'Pen', price: 3 }];
    assert.equal(cartTotal(cart), 3);
});

test('the cart is not changed', () => {
    const cart = [{ name: 'Desk set', items: [{ name: 'Lamp', price: 20 }] }];
    cartTotal(cart);
    assert.deepEqual(cart, [{ name: 'Desk set', items: [{ name: 'Lamp', price: 20 }] }]);
});
