import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { appSymbol } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-shared-app-symbol.js'
        : './02-shared-app-symbol.js'
);

test('the result is a symbol', () => {
    assert.equal(typeof appSymbol('cart'), 'symbol');
});

test('the same name gives the same symbol', () => {
    assert.equal(appSymbol('cart'), appSymbol('cart'));
});

test('different names give different symbols', () => {
    assert.notEqual(appSymbol('cart'), appSymbol('checkout'));
});

test('the symbol is in the global registry under app. and the name', () => {
    assert.equal(Symbol.keyFor(appSymbol('cart')), 'app.cart');
});

test('it is the same symbol as Symbol.for() gives in any other file', () => {
    assert.equal(appSymbol('user'), Symbol.for('app.user'));
});
