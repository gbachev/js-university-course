import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { propertySource } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-own-or-inherited.js'
        : './01-own-or-inherited.js'
);

test('a property of the object itself is own', () => {
    assert.equal(propertySource({ name: 'John' }, 'name'), 'own');
});

test('toString comes from Object.prototype, so it is inherited', () => {
    assert.equal(propertySource({ name: 'John' }, 'toString'), 'inherited');
});

test('a property that is nowhere in the chain is missing', () => {
    assert.equal(propertySource({ name: 'John' }, 'age'), 'missing');
});

test('an own property with the value undefined is still own', () => {
    assert.equal(propertySource({ nickname: undefined }, 'nickname'), 'own');
});

test('an own toString is own, not inherited', () => {
    const product = {
        toString() {
            return 'Hat';
        },
    };
    assert.equal(propertySource(product, 'toString'), 'own');
});

test('a property found one link up the chain is inherited', () => {
    const defaults = { theme: 'light' };
    const settings = Object.create(defaults);
    assert.equal(propertySource(settings, 'theme'), 'inherited');
});
