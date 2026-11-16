import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { previewName } = await import(
    process.env.SOLUTIONS ? '../solutions/03-rename-a-copy.js' : './03-rename-a-copy.js'
);

test('the preview has the new name and the same email', () => {
    const user = { name: 'Jane', email: 'jane@example.com' };
    assert.deepEqual(previewName(user, 'Janet'), {
        name: 'Janet',
        email: 'jane@example.com',
    });
});

test('the original user keeps the old name', () => {
    const user = { name: 'Jane', email: 'jane@example.com' };
    previewName(user, 'Janet');
    assert.deepEqual(user, { name: 'Jane', email: 'jane@example.com' });
});

test('the preview is a new object, not the user we passed in', () => {
    const user = { name: 'John', email: 'john@example.com' };
    assert.notEqual(previewName(user, 'Johnny'), user);
});
