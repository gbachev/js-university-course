import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { describeFunction } = await import(
    process.env.SOLUTIONS ? '../solutions/01-describe-function.js' : './01-describe-function.js'
);

function calcTotal(items, currency) {}

test('shows the name and the number of parameters', () => {
    assert.equal(describeFunction(calcTotal), 'calcTotal(2)');
});

test('an arrow function gets the name of its variable', () => {
    const applyDiscount = (price) => price * 0.9;
    assert.equal(describeFunction(applyDiscount), 'applyDiscount(1)');
});

test('a bound function shows its bound name', () => {
    assert.equal(describeFunction(calcTotal.bind(null)), 'bound calcTotal(2)');
});

test('a function with an empty name shows as anonymous', () => {
    const plugins = [() => {}];
    assert.equal(describeFunction(plugins[0]), 'anonymous(0)');
});

test('defaults and rest parameters count as length counts them', () => {
    function createOrder(items, currency = 'EUR', note) {}
    function logAll(level, ...messages) {}
    assert.equal(describeFunction(createOrder), 'createOrder(1)');
    assert.equal(describeFunction(logAll), 'logAll(1)');
});
