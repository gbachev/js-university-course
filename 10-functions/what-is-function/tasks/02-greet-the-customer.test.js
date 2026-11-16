import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { greetCustomer } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-greet-the-customer.js'
        : './02-greet-the-customer.js'
);

test('a name written properly is greeted as it is', () => {
    assert.equal(greetCustomer('Anna'), 'Hello, Anna!');
});

test('a lowercase name gets an uppercase first letter', () => {
    assert.equal(greetCustomer('george'), 'Hello, George!');
});

test('the rest of the name becomes lowercase', () => {
    assert.equal(greetCustomer('mARIA'), 'Hello, Maria!');
});

test('the spaces around the name are removed', () => {
    assert.equal(greetCustomer('  luna '), 'Hello, Luna!');
});

test('a one-letter name works too', () => {
    assert.equal(greetCustomer('j'), 'Hello, J!');
});
