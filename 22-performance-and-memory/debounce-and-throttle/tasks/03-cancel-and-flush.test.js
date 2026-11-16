import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { debounce } = await import(
    process.env.SOLUTIONS ? '../solutions/03-cancel-and-flush.js' : './03-cancel-and-flush.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function setup(t) {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const saved = [];
    const save = debounce((text) => saved.push(text), 1000);
    return { saved, save };
}

test('it still debounces: one run, after the delay, with the last arguments', (t) => {
    const { saved, save } = setup(t);
    save('D');
    save('Dune');
    t.mock.timers.tick(999);
    assert.deepEqual(saved, []);
    t.mock.timers.tick(1);
    assert.deepEqual(saved, ['Dune']);
});

test('cancel() stops the pending run', (t) => {
    const { saved, save } = setup(t);
    save('Emma');
    save.cancel();
    t.mock.timers.tick(5000);
    assert.deepEqual(saved, []);
});

test('flush() runs the pending call right away, and only once', (t) => {
    const { saved, save } = setup(t);
    save('Du');
    save('Dune');
    save.flush();
    assert.deepEqual(saved, ['Dune']);
    t.mock.timers.tick(5000);
    assert.deepEqual(saved, ['Dune']);
});

test('with nothing pending, cancel() and flush() do nothing', (t) => {
    const { saved, save } = setup(t);
    save.flush();
    save.cancel();
    assert.deepEqual(saved, []);
    save('Dune');
    t.mock.timers.tick(1000);
    save.flush();
    assert.deepEqual(saved, ['Dune']);
});

test('after cancel() or flush(), new calls work as usual', (t) => {
    const { saved, save } = setup(t);
    save('Emma');
    save.cancel();
    save('Ulysses');
    save.flush();
    save('Dracula');
    t.mock.timers.tick(1000);
    assert.deepEqual(saved, ['Ulysses', 'Dracula']);
});
