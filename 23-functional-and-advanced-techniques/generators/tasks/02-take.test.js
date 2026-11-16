import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { take } = await import(
    process.env.SOLUTIONS ? '../solutions/02-take.js' : './02-take.js'
);

function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

test('takes the first values of an array', () => {
    assert.deepEqual([...take(['Dune', 'Emma', 'Ulysses'], 2)], ['Dune', 'Emma']);
});

test('works on an endless generator', () => {
    assert.deepEqual([...take(fibonacci(), 5)], [0, 1, 1, 2, 3]);
});

test('with a shorter source it yields everything there is', () => {
    assert.deepEqual([...take(new Set(['js', 'css']), 5)], ['js', 'css']);
});

test('a count of 0 or less yields nothing and reads nothing', () => {
    let reads = 0;
    function* counted() {
        while (true) {
            reads++;
            yield reads;
        }
    }
    assert.deepEqual([...take(counted(), 0)], []);
    assert.deepEqual([...take(counted(), -2)], []);
    assert.equal(reads, 0);
});

test('reads no more values from the source than it hands out', () => {
    let reads = 0;
    function* orders() {
        while (true) {
            reads++;
            yield `ORD-${reads}`;
        }
    }
    assert.deepEqual([...take(orders(), 3)], ['ORD-1', 'ORD-2', 'ORD-3']);
    assert.equal(reads, 3);
});

test('stopping early closes the source generator', () => {
    const log = [];
    function* readLines() {
        try {
            yield 'line 1';
            yield 'line 2';
            yield 'line 3';
        } finally {
            log.push('close file');
        }
    }
    assert.deepEqual([...take(readLines(), 2)], ['line 1', 'line 2']);
    assert.deepEqual(log, ['close file']);
});
