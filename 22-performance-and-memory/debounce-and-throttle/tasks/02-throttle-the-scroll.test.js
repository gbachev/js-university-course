import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { throttle } = await import(
    process.env.SOLUTIONS ? '../solutions/02-throttle-the-scroll.js' : './02-throttle-the-scroll.js'
);

// The tests fake setTimeout and Date, so Date.now() moves with the fake clock.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
// Each run is saved with the time since the test started, like '200 at 300'.
const START = Date.UTC(2026, 10, 16);

function setup(t) {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: START });
    const runs = [];
    const elapsed = () => Date.now() - START;
    const logScroll = throttle((y) => runs.push(`${y} at ${elapsed()}`), 300);

    // One big tick() fires a timer with Date.now() already at the end of the tick,
    // so we move the clock one millisecond at a time.
    const advance = (ms) => {
        for (let i = 0; i < ms; i++) {
            t.mock.timers.tick(1);
        }
    };
    // calls logScroll(y) at the fake time `at`
    const scrollAt = (at, y) => {
        advance(at - elapsed());
        logScroll(y);
    };
    return { runs, logScroll, advance, scrollAt };
}

test('the first call runs right away', (t) => {
    const { runs, logScroll } = setup(t);
    logScroll(0);
    assert.deepEqual(runs, ['0 at 0']);
});

test('calls spaced wider than the interval all run at once', (t) => {
    const { runs, scrollAt } = setup(t);
    scrollAt(0, 0);
    scrollAt(300, 120);
    scrollAt(700, 240);
    assert.deepEqual(runs, ['0 at 0', '120 at 300', '240 at 700']);
});

test('a call that comes too soon runs when the interval is over', (t) => {
    const { runs, scrollAt, advance } = setup(t);
    scrollAt(0, 0);
    scrollAt(100, 100);
    assert.deepEqual(runs, ['0 at 0']);
    advance(200);
    assert.deepEqual(runs, ['0 at 0', '100 at 300']);
});

test('a newer call replaces the waiting one, and the last position arrives', (t) => {
    const { runs, scrollAt, advance } = setup(t);
    for (const y of [0, 100, 200, 400, 450]) {
        scrollAt(y, y);
    }
    advance(1000);
    assert.deepEqual(runs, ['0 at 0', '200 at 300', '450 at 600']);
});

test('a steady stream keeps a steady beat', (t) => {
    const { runs, scrollAt, advance } = setup(t);
    for (let at = 0; at <= 1000; at += 50) {
        scrollAt(at, at);
    }
    advance(1000);
    assert.deepEqual(runs, ['0 at 0', '250 at 300', '550 at 600', '850 at 900', '1000 at 1200']);
});

test('it returns true when fn runs right away and false when the call waits', (t) => {
    const { logScroll, advance } = setup(t);
    assert.equal(logScroll(0), true);
    assert.equal(logScroll(100), false);
    // the waiting call runs at 300 ms, so the next one may run right away at 600 ms
    advance(600);
    assert.equal(logScroll(600), true);
});
