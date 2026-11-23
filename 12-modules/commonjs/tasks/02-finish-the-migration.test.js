import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadTexts } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-finish-the-migration.js'
        : './02-finish-the-migration.js'
);

test('German gives the German texts', () => {
    assert.equal(loadTexts('de').checkout, 'Zur Kasse');
    assert.equal(loadTexts('de').emptyCart, 'Ihr Warenkorb ist leer');
});

test('English gives the English texts', () => {
    assert.equal(loadTexts('en').checkout, 'Checkout');
    assert.equal(loadTexts('en').emptyCart, 'Your cart is empty');
});

test('a language we do not have falls back to English', () => {
    assert.equal(loadTexts('fr').checkout, 'Checkout');
    assert.equal(loadTexts(undefined).checkout, 'Checkout');
});

test('every call for the same language returns the same object', () => {
    assert.equal(loadTexts('de'), loadTexts('de'));
    assert.equal(loadTexts('fr'), loadTexts('en'));
});
