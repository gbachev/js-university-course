import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { applySavedDiscount } = await import(
    process.env.SOLUTIONS ? '../solutions/03-saved-discount.js' : './03-saved-discount.js'
);

test('applies the discount the saved key picks', () => {
    assert.equal(applySavedDiscount('{"discount":"tenPercent"}', 80), 72);
    assert.equal(applySavedDiscount('{"discount":"blackFriday"}', 80), 40);
    assert.equal(applySavedDiscount('{"discount":"none"}', 80), 80);
});

test('an unknown key leaves the price as it is', () => {
    assert.equal(applySavedDiscount('{"discount":"summer"}', 80), 80);
});

test('saved code is never run', () => {
    const saved = JSON.stringify({ discount: 'globalThis.hacked = true; none' });
    assert.equal(applySavedDiscount(saved, 80), 80);
    assert.equal(globalThis.hacked, undefined);
});

test('a key every object inherits is not a discount', () => {
    assert.equal(applySavedDiscount('{"discount":"toString"}', 80), 80);
});
