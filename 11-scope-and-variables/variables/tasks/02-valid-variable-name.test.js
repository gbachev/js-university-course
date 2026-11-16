import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isValidVariableName } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-valid-variable-name.js'
        : './02-valid-variable-name.js'
);

test('names made of letters are valid', () => {
    assert.equal(isValidVariableName('userName'), true);
    assert.equal(isValidVariableName('x'), true);
});

test('names can start with _ or $ and contain digits', () => {
    assert.equal(isValidVariableName('$token'), true);
    assert.equal(isValidVariableName('_config1'), true);
});

test('a name that starts with a digit is not valid', () => {
    assert.equal(isValidVariableName('1stUser'), false);
});

test('a name with a space or a dash is not valid', () => {
    assert.equal(isValidVariableName('user name'), false);
    assert.equal(isValidVariableName('user-name'), false);
});

test('a reserved word is not valid', () => {
    assert.equal(isValidVariableName('class'), false);
    assert.equal(isValidVariableName('let'), false);
});

test('an empty name is not valid', () => {
    assert.equal(isValidVariableName(''), false);
});
