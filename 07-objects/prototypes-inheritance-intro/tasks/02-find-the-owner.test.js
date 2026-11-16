import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findOwner } = await import(
    process.env.SOLUTIONS ? '../solutions/02-find-the-owner.js' : './02-find-the-owner.js'
);

function createChain() {
    const defaults = { theme: 'light', language: 'en', notifications: true };
    const team = Object.create(defaults);
    team.language = 'de';
    const user = Object.create(team);
    user.theme = 'dark';
    return { defaults, team, user };
}

test('an own property belongs to the object itself', () => {
    const { user } = createChain();
    assert.equal(findOwner(user, 'theme'), user);
});

test('finds a property one link up the chain', () => {
    const { team, user } = createChain();
    assert.equal(findOwner(user, 'language'), team);
});

test('finds a property two links up the chain', () => {
    const { defaults, user } = createChain();
    assert.equal(findOwner(user, 'notifications'), defaults);
});

test('a property that nobody in the chain has gives null', () => {
    const { user } = createChain();
    assert.equal(findOwner(user, 'fontSize'), null);
});

test('toString is found on Object.prototype', () => {
    assert.equal(findOwner({ name: 'Anna' }, 'toString'), Object.prototype);
});
