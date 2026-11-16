import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { curry } = await import(
    process.env.SOLUTIONS ? '../solutions/03-curry.js' : './03-curry.js'
);

const lineTotal = (price, quantity, discount) => price * quantity - discount;

const shippingCost = (weightKg, country, express = false) => {
    const base = country === 'BG' ? weightKg * 2 : weightKg * 5;
    return express ? base + 10 : base;
};

test('takes the arguments one call at a time', () => {
    assert.equal(curry(lineTotal)(20)(3)(5), 55);
});

test('accepts several arguments in one call', () => {
    const total = curry(lineTotal);
    assert.equal(total(20, 3)(5), 55);
    assert.equal(total(20)(3, 5), 55);
    assert.equal(total(20, 3, 5), 55);
});

test('a partly filled function can be reused', () => {
    const forBook = curry(lineTotal)(20);
    assert.equal(forBook(2)(0), 40);
    assert.equal(forBook(3)(5), 55);
});

test('without an arity it waits for fn.length arguments', () => {
    const shipping = curry(shippingCost);
    assert.equal(shipping(2)('BG'), 4);
});

test('with an explicit arity it waits for the default parameter too', () => {
    const shipping = curry(shippingCost, 3);
    assert.equal(typeof shipping(2)('BG'), 'function');
    assert.equal(shipping(2)('BG')(true), 14);
    assert.equal(shipping(2, 'DE')(false), 10);
});

test('does not call fn before it has enough arguments', () => {
    let calls = 0;
    const counted = curry((a, b) => {
        calls++;
        return a + b;
    });
    const addFive = counted(5);
    assert.equal(calls, 0);
    assert.equal(addFive(1), 6);
    assert.equal(calls, 1);
});
