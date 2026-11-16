import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addFullName } = await import(
    process.env.SOLUTIONS ? '../solutions/03-full-name.js' : './03-full-name.js'
);

test('reading fullName gives the first and the last name', () => {
    const person = addFullName({ firstName: 'John', lastName: 'Doe' });
    assert.equal(person.fullName, 'John Doe');
});

test('fullName follows changes to firstName and lastName', () => {
    const person = addFullName({ firstName: 'John', lastName: 'Doe' });
    person.lastName = 'Smith';
    assert.equal(person.fullName, 'John Smith');
});

test('assigning fullName sets firstName and lastName', () => {
    const person = addFullName({ firstName: 'John', lastName: 'Doe' });
    person.fullName = 'Jane Smith';
    assert.equal(person.firstName, 'Jane');
    assert.equal(person.lastName, 'Smith');
    assert.equal(person.fullName, 'Jane Smith');
});

test('fullName is not listed by Object.keys()', () => {
    const person = addFullName({ firstName: 'John', lastName: 'Doe' });
    assert.deepEqual(Object.keys(person), ['firstName', 'lastName']);
});

test('returns the person we pass in', () => {
    const person = { firstName: 'John', lastName: 'Doe' };
    assert.equal(addFullName(person), person);
});
