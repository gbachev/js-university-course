import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { pipe, compose } = await import(
    process.env.SOLUTIONS ? '../solutions/01-pipe-and-compose.js' : './01-pipe-and-compose.js'
);

const trim = (s) => s.trim();
const upper = (s) => s.toUpperCase();
const addVat = (price) => price * 1.2;
const minusFive = (price) => price - 5;

test('pipe passes the output of one step to the next', () => {
    assert.equal(pipe(trim, upper)('  dune '), 'DUNE');
});

test('pipe runs the steps left to right', () => {
    assert.equal(pipe(minusFive, addVat)(20), 18);
    assert.equal(pipe(addVat, minusFive)(20), 19);
});

test('compose runs the steps right to left', () => {
    assert.equal(compose(addVat, minusFive)(20), 18);
    assert.equal(compose(upper, trim)('  dune '), 'DUNE');
});

test('both take any number of steps', () => {
    const steps = [trim, upper, (s) => `${s}!`, (s) => s.length];
    assert.equal(pipe(...steps)(' sale '), 5);
    assert.equal(compose(...steps.reverse())(' sale '), 5);
});

test('with no steps, both return the value unchanged', () => {
    assert.equal(pipe()('Emma'), 'Emma');
    assert.equal(compose()('Emma'), 'Emma');
});

test('the same pipeline can run on many values', () => {
    const shout = pipe(trim, upper);
    assert.deepEqual(['  dune', 'emma  '].map(shout), ['DUNE', 'EMMA']);
});
