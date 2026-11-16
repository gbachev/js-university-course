import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { hasRole } = await import(
    process.env.SOLUTIONS ? '../solutions/03-in-the-family.js' : './03-in-the-family.js'
);

function createRoles() {
    const member = { canRead: true };
    const editor = { __proto__: member, canEdit: true };
    const guest = { canRead: false };
    const jane = { __proto__: editor, name: 'Jane Doe' };
    return { member, editor, guest, jane };
}

test('finds the role one link up', () => {
    const { editor, jane } = createRoles();
    assert.equal(hasRole(jane, editor), true);
});

test('finds the role two links up', () => {
    const { member, jane } = createRoles();
    assert.equal(hasRole(jane, member), true);
});

test('a role from another chain is not in the family', () => {
    const { guest, jane } = createRoles();
    assert.equal(hasRole(jane, guest), false);
});

test('the direction matters', () => {
    const { member, jane } = createRoles();
    assert.equal(hasRole(member, jane), false);
});

test('an object is not a role of itself', () => {
    const { editor } = createRoles();
    assert.equal(hasRole(editor, editor), false);
});
