import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { watchStock } = await import(
    process.env.SOLUTIONS ? '../solutions/01-stop-the-stock-watch.js' : './01-stop-the-stock-watch.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.

test('it reads the stock once every second', (t) => {
    t.mock.timers.enable({ apis: ['setInterval'] });
    const lamp = { title: 'Desk lamp', stock: 4 };
    const watch = watchStock(lamp, (product) => product.stock);
    t.mock.timers.tick(999);
    assert.deepEqual(watch.history, []);
    t.mock.timers.tick(2001);
    assert.deepEqual(watch.history, [4, 4, 4]);
    watch.stop();
});

test('after stop() the stock is not read any more', (t) => {
    t.mock.timers.enable({ apis: ['setInterval'] });
    let reads = 0;
    const watch = watchStock({ title: 'Mug' }, () => {
        reads += 1;
        return 10;
    });
    t.mock.timers.tick(2000);
    watch.stop();
    t.mock.timers.tick(5000);
    assert.equal(reads, 2);
    assert.deepEqual(watch.history, [10, 10]);
});

test('stopping one watch leaves the others running', (t) => {
    t.mock.timers.enable({ apis: ['setInterval'] });
    const lamp = watchStock({ stock: 4 }, (product) => product.stock);
    const mug = watchStock({ stock: 9 }, (product) => product.stock);
    t.mock.timers.tick(1000);
    lamp.stop();
    t.mock.timers.tick(2000);
    assert.deepEqual(lamp.history, [4]);
    assert.deepEqual(mug.history, [9, 9, 9]);
    mug.stop();
});

test('calling stop() twice does no harm', (t) => {
    t.mock.timers.enable({ apis: ['setInterval'] });
    const watch = watchStock({ stock: 1 }, (product) => product.stock);
    watch.stop();
    assert.doesNotThrow(() => watch.stop());
    t.mock.timers.tick(3000);
    assert.deepEqual(watch.history, []);
});
