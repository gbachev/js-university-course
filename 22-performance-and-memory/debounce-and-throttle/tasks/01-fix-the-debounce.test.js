import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { debounce } = await import(
    process.env.SOLUTIONS ? '../solutions/01-fix-the-debounce.js' : './01-fix-the-debounce.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function setup(t, delay = 300) {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const queries = [];
    const search = debounce((query) => queries.push(query), delay);
    return { queries, search };
}

test('one call runs once, after the delay', (t) => {
    const { queries, search } = setup(t);
    search('Dune');
    t.mock.timers.tick(299);
    assert.deepEqual(queries, []);
    t.mock.timers.tick(1);
    assert.deepEqual(queries, ['Dune']);
});

test('a burst of calls runs once, with the arguments of the last call', (t) => {
    const { queries, search } = setup(t);
    search('D');
    search('Du');
    search('Dune');
    t.mock.timers.tick(1000);
    assert.deepEqual(queries, ['Dune']);
});

test('every call moves the run to delay ms after it', (t) => {
    const { queries, search } = setup(t);
    search('D');
    t.mock.timers.tick(200);
    search('Du');
    t.mock.timers.tick(200);
    assert.deepEqual(queries, [], 'nothing should run 200 ms after the last call');
    t.mock.timers.tick(100);
    assert.deepEqual(queries, ['Du']);
});

test('two bursts with a pause between them run twice', (t) => {
    const { queries, search } = setup(t);
    search('Du');
    search('Dune');
    t.mock.timers.tick(300);
    search('Em');
    search('Emma');
    t.mock.timers.tick(300);
    assert.deepEqual(queries, ['Dune', 'Emma']);
});

test('all the arguments of the last call are passed on', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const saves = [];
    const save = debounce((id, text) => saves.push(`${id}: ${text}`), 500);
    save(7, 'Dra');
    save(7, 'Dracula');
    t.mock.timers.tick(500);
    assert.deepEqual(saves, ['7: Dracula']);
});
