import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { updateProfile } = await import(
    process.env.SOLUTIONS ? '../solutions/01-update-profile.js' : './01-update-profile.js'
);

test('adds a field the profile did not have', () => {
    assert.deepEqual(updateProfile({ name: 'Anna' }, 'city', 'Sofia'), {
        name: 'Anna',
        city: 'Sofia',
    });
});

test('changes a field the profile already had', () => {
    assert.deepEqual(updateProfile({ name: 'Anna', city: 'Sofia' }, 'city', 'Varna'), {
        name: 'Anna',
        city: 'Varna',
    });
});

test('works for a field name with a dash', () => {
    const profile = updateProfile({ name: 'Anna' }, 'phone-number', '555-0100');
    assert.equal(profile['phone-number'], '555-0100');
});

test('null removes the field instead of storing it', () => {
    const profile = updateProfile({ name: 'Anna', city: 'Sofia' }, 'city', null);
    assert.deepEqual(profile, { name: 'Anna' });
    assert.equal('city' in profile, false);
});

test('changes the profile we pass in and returns it', () => {
    const profile = { name: 'Anna' };
    assert.equal(updateProfile(profile, 'age', 30), profile);
    assert.equal(profile.age, 30);
});
