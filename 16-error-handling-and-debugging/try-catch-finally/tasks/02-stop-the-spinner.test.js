import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { saveAddress } = await import(
    process.env.SOLUTIONS ? '../solutions/02-stop-the-spinner.js' : './02-stop-the-spinner.js'
);

test('a valid address is saved', () => {
    const form = { saving: false };
    assert.equal(saveAddress(form, '{"city":"Sofia"}'), 'Saved Sofia');
});

test('the spinner stops after a valid address', () => {
    const form = { saving: false };
    saveAddress(form, '{"city":"Sofia"}');
    assert.equal(form.saving, false);
});

test('a broken address gives a message', () => {
    const form = { saving: false };
    assert.equal(saveAddress(form, '{city: Sofia}'), 'Invalid address');
});

test('the spinner stops after a broken address', () => {
    const form = { saving: false };
    saveAddress(form, '{city: Sofia}');
    assert.equal(form.saving, false);
});

test('the spinner stops after several saves in a row', () => {
    const form = { saving: false };
    saveAddress(form, 'not json');
    saveAddress(form, '{"city":"Plovdiv"}');
    saveAddress(form, '');
    assert.equal(form.saving, false);
});
