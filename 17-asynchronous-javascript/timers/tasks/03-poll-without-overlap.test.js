import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { pollUntilShipped } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-poll-without-overlap.js'
        : './03-poll-without-overlap.js'
);

// A fake server: each check answers after 1.5 seconds with the next status in the list.
// It records when each check started (the fake clock starts at 0) and how many
// checks were waiting at once.
function fakeServer(statuses) {
    const server = { started: [], waiting: 0, mostWaiting: 0 };
    let next = 0;
    server.checkStatus = (onAnswer) => {
        server.started.push(Date.now());
        server.waiting++;
        server.mostWaiting = Math.max(server.mostWaiting, server.waiting);
        const status = statuses[next] ?? 'shipped';
        next++;
        setTimeout(() => {
            server.waiting--;
            onAnswer(status);
        }, 1500);
    };
    return server;
}

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function run(t, statuses, ms) {
    t.mock.timers.enable({ apis: ['setTimeout', 'setInterval', 'Date'] });
    const server = fakeServer(statuses);
    const shipped = [];
    pollUntilShipped(server.checkStatus, (checks) => shipped.push(checks));
    // Small steps, so the timers set by other timers run on time too.
    for (let time = 0; time < ms; time += 100) {
        t.mock.timers.tick(100);
    }
    return { server, shipped };
}

test('a new check never starts while another one is waiting', (t) => {
    const { server } = run(t, ['packing', 'packing', 'shipped'], 10000);
    assert.equal(server.mostWaiting, 1);
});

test('checks start 1 second after the previous answer', (t) => {
    const { server } = run(t, ['packing', 'packing', 'shipped'], 10000);
    assert.deepEqual(server.started, [1000, 3500, 6000]);
});

test('onShipped gets the number of checks', (t) => {
    const { shipped } = run(t, ['packing', 'packing', 'shipped'], 10000);
    assert.deepEqual(shipped, [3]);
});

test('an order that is already shipped needs one check', (t) => {
    const { server, shipped } = run(t, ['shipped'], 10000);
    assert.deepEqual(server.started, [1000]);
    assert.deepEqual(shipped, [1]);
});

test('polling stops once the order is shipped', (t) => {
    const { server } = run(t, ['packing', 'shipped'], 20000);
    assert.equal(server.started.length, 2);
});
