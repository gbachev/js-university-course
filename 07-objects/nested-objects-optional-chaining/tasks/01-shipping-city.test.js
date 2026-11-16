import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getShippingCity } = await import(
    process.env.SOLUTIONS ? '../solutions/01-shipping-city.js' : './01-shipping-city.js'
);

test('returns the city of a complete order', () => {
    const order = { id: 1, customer: { name: 'Anna', address: { city: 'Sofia' } } };
    assert.equal(getShippingCity(order), 'Sofia');
});

test('an order without a customer gives Unknown', () => {
    assert.equal(getShippingCity({ id: 2 }), 'Unknown');
});

test('a customer without an address gives Unknown', () => {
    assert.equal(getShippingCity({ id: 3, customer: { name: 'Ben' } }), 'Unknown');
});

test('an address without a city gives Unknown', () => {
    const order = { id: 4, customer: { name: 'Ben', address: { street: '1 Elm St' } } };
    assert.equal(getShippingCity(order), 'Unknown');
});

test('a customer set to null gives Unknown', () => {
    assert.equal(getShippingCity({ id: 5, customer: null }), 'Unknown');
});
