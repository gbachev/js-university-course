import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { timeStep } = await import(
    process.env.SOLUTIONS ? '../solutions/01-time-a-step.js' : './01-time-a-step.js'
);

test('it returns what the step returns', () => {
    assert.equal(timeStep('count', () => [1, 2, 3].length), 3);
    assert.deepEqual(timeStep('titles', () => ['Dune', 'Emma']), ['Dune', 'Emma']);
});

test('it records a start mark with the name of the step', () => {
    timeStep('sort', () => 'sorted');
    assert.equal(performance.getEntriesByName('sort-start', 'mark').length, 1);
});

test('it records a measure with the name of the step', () => {
    timeStep('unique', () => 'unique');
    const measures = performance.getEntriesByName('unique', 'measure');
    assert.equal(measures.length, 1);
    assert.equal(typeof measures[0].duration, 'number');
});

test('the step runs once, between the mark and the measure', () => {
    let calls = 0;
    timeStep('save', () => {
        calls += 1;
        assert.equal(performance.getEntriesByName('save-start', 'mark').length, 1);
        assert.equal(performance.getEntriesByName('save', 'measure').length, 0);
    });
    assert.equal(calls, 1);
});

test('when the step throws, the error reaches us and the measure is still recorded', () => {
    assert.throws(
        () => timeStep('broken import', () => {
            throw new Error('Bad row');
        }),
        { message: 'Bad row' },
    );
    assert.equal(performance.getEntriesByName('broken import', 'measure').length, 1);
});
