import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { openOrdersView } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-close-without-leaks.js'
        : './01-close-without-leaks.js'
);

// Node has EventTarget too, so a plain EventTarget stands in for the window.
// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function setup(t) {
    t.mock.timers.enable({ apis: ['setInterval'] });
    return { win: new EventTarget(), render: mock.fn() };
}

function renders(render, what) {
    return render.mock.calls.filter((call) => call.arguments[0] === what).length;
}

test('the open view refreshes every second and lays out on resize', (t) => {
    const { win, render } = setup(t);
    openOrdersView(win, render);
    t.mock.timers.tick(3000);
    win.dispatchEvent(new Event('resize'));
    assert.equal(renders(render, 'refresh'), 3);
    assert.equal(renders(render, 'layout'), 1);
});

test('after close() the timer stops', (t) => {
    const { win, render } = setup(t);
    const close = openOrdersView(win, render);
    t.mock.timers.tick(2000);
    close();
    t.mock.timers.tick(10000);
    assert.equal(renders(render, 'refresh'), 2);
});

test('after close() a resize renders nothing', (t) => {
    const { win, render } = setup(t);
    const close = openOrdersView(win, render);
    close();
    win.dispatchEvent(new Event('resize'));
    assert.equal(renders(render, 'layout'), 0);
});

test('opening and closing the view five times leaves nothing behind', (t) => {
    const { win, render } = setup(t);
    for (let visit = 0; visit < 5; visit++) {
        openOrdersView(win, render)();
    }
    win.dispatchEvent(new Event('resize'));
    t.mock.timers.tick(5000);
    assert.equal(render.mock.callCount(), 0);
});

test('calling close() twice does no harm', (t) => {
    const { win, render } = setup(t);
    const close = openOrdersView(win, render);
    close();
    assert.doesNotThrow(() => close());
});

test('closing one view leaves another open view working', (t) => {
    const { win, render } = setup(t);
    const closeFirst = openOrdersView(win, render);
    const other = mock.fn();
    openOrdersView(win, other);
    closeFirst();
    win.dispatchEvent(new Event('resize'));
    assert.equal(renders(other, 'layout'), 1);
    assert.equal(renders(render, 'layout'), 0);
});
