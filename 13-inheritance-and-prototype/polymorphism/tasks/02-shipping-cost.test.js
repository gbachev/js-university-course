import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Product, PhysicalProduct, DigitalProduct, OversizedProduct, totalShipping } =
    await import(
        process.env.SOLUTIONS ? '../solutions/02-shipping-cost.js' : './02-shipping-cost.js'
    );

test('a physical product of up to one kilogram costs the base price', () => {
    assert.equal(new PhysicalProduct('Desk lamp', 25, 1).shippingCost(), 5);
    assert.equal(new PhysicalProduct('Pen', 2, 0.1).shippingCost(), 5);
});

test('every started kilogram over the first adds 1', () => {
    assert.equal(new PhysicalProduct('Kettle', 30, 2.5).shippingCost(), 7);
});

test('a digital product ships for free', () => {
    assert.equal(new DigitalProduct('JS course', 49).shippingCost(), 0);
});

test('an oversized product adds 25 to the physical cost', () => {
    assert.equal(new OversizedProduct('Sofa', 400, 3).shippingCost(), 32);
});

test('totalShipping adds up a mixed cart', () => {
    const cart = [
        new PhysicalProduct('Desk lamp', 25, 1),
        new DigitalProduct('JS course', 49),
        new OversizedProduct('Sofa', 400, 3)
    ];
    assert.equal(totalShipping(cart), 37);
});

test('a product type without its own shippingCost throws', () => {
    class GiftCard extends Product {}
    assert.throws(() => new GiftCard('Gift card', 50).shippingCost(), {
        message: 'GiftCard must implement shippingCost()'
    });
});
