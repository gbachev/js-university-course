import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadTexts } = await import(
    process.env.SOLUTIONS ? '../solutions/02-load-texts.js' : './02-load-texts.js'
);

test('a language from the list loads its texts', async () => {
    assert.equal((await loadTexts('de')).checkout, 'Zur Kasse');
    assert.equal((await loadTexts('fr')).checkout, 'Commander');
    assert.equal((await loadTexts('en')).checkout, 'Checkout');
});

test('a language we do not have loads the English texts', async () => {
    assert.equal((await loadTexts('es')).checkout, 'Checkout');
    assert.equal((await loadTexts('')).checkout, 'Checkout');
});

test('a path in the input never reaches import()', async () => {
    assert.equal((await loadTexts('admin')).checkout, 'Checkout');
    assert.equal((await loadTexts('../02-load-texts/admin')).checkout, 'Checkout');
});

test('loading the same language twice gives the same module', async () => {
    assert.equal(await loadTexts('de'), await loadTexts('de'));
});
