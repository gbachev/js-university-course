import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createOrderLine } = await import(
    process.env.SOLUTIONS ? '../solutions/01-order-line.js' : './01-order-line.js'
);

test('the total is the price times the quantity', () => {
    assert.equal(createOrderLine('Hat', 15, 2).total(), 30);
});

test('the description names the item, the quantity and the total', () => {
    assert.equal(createOrderLine('Hat', 15, 2).describe(), 'Hat x 2 = 30 EUR');
});

test('a changed quantity gives the new total and description', () => {
    const line = createOrderLine('Book', 12, 1);
    line.quantity = 3;
    assert.equal(line.total(), 36);
    assert.equal(line.describe(), 'Book x 3 = 36 EUR');
});

test('a changed price gives the new total', () => {
    const line = createOrderLine('Lamp', 40, 2);
    line.price = 35;
    assert.equal(line.total(), 70);
});

test('a quantity of 0 gives a total of 0', () => {
    assert.equal(createOrderLine('Hat', 15, 0).describe(), 'Hat x 0 = 0 EUR');
});
