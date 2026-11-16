import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getDeliveryLabel } = await import(
    process.env.SOLUTIONS ? '../solutions/01-delivery-label.js' : './01-delivery-label.js'
);

test('the label has the name, the zip code and the city', () => {
    const order = {
        id: 1001,
        customer: { name: 'Jane Doe', address: { city: 'Sofia', zip: '1000' } },
    };

    assert.equal(getDeliveryLabel(order), 'Jane Doe, 1000 Sofia');
});

test('other properties of the order are not on the label', () => {
    const order = {
        id: 1002,
        total: 79.5,
        customer: {
            name: 'John Smith',
            email: 'john@example.com',
            address: { street: '5 Vitosha Blvd', city: 'Plovdiv', zip: '4000' },
        },
    };

    assert.equal(getDeliveryLabel(order), 'John Smith, 4000 Plovdiv');
});

test('a customer from another city gets their own label', () => {
    const order = {
        id: 1003,
        customer: { name: 'Maria Lopez', address: { city: 'Varna', zip: '9000' } },
    };

    assert.equal(getDeliveryLabel(order), 'Maria Lopez, 9000 Varna');
});
