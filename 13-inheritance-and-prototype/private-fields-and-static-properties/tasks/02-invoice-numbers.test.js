import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Invoice } = await import(
    process.env.SOLUTIONS ? '../solutions/02-invoice-numbers.js' : './02-invoice-numbers.js'
);

test('the first invoice gets number 1', () => {
    const first = new Invoice('Jane Doe', 49);
    assert.equal(first.number, 1);
    assert.equal(first.code, 'INV-1');
});

test('every new invoice gets the next number', () => {
    const a = new Invoice('Jane Doe', 49);
    const b = new Invoice('John Doe', 25);
    const c = new Invoice('Anna Smith', 12);
    assert.equal(b.number, a.number + 1);
    assert.equal(c.number, b.number + 1);
});

test('the code joins the prefix and the number', () => {
    const invoice = new Invoice('Jane Doe', 49);
    assert.equal(invoice.code, `INV-${invoice.number}`);
});

test('the prefix belongs to the class, not to the invoice', () => {
    const invoice = new Invoice('Jane Doe', 49);
    assert.equal(Invoice.prefix, 'INV');
    assert.equal(invoice.prefix, undefined);
});

test('the counter is not reachable from outside', () => {
    assert.equal(Invoice.nextNumber, undefined);
    assert.deepEqual(Object.keys(Invoice), ['prefix']);
});
