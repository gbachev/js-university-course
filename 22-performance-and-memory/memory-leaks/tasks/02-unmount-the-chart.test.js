import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { mountChart } = await import(
    process.env.SOLUTIONS ? '../solutions/02-unmount-the-chart.js' : './02-unmount-the-chart.js'
);

// Node has EventTarget too, so a plain EventTarget plays the window here. The container is
// a small object with the two things mountChart uses: textContent and remove().
function createContainer() {
    return {
        textContent: '',
        removed: false,
        remove() {
            this.removed = true;
        },
    };
}

const resize = (target) => target.dispatchEvent(new Event('resize'));

test('a resize shows the number of points', () => {
    const target = new EventTarget();
    const chart = createContainer();
    mountChart(target, chart, [3, 5, 8]);
    resize(target);
    assert.equal(chart.textContent, '3 points');
});

test('unmount() removes the container', () => {
    const chart = createContainer();
    const unmount = mountChart(new EventTarget(), chart, [3, 5, 8]);
    unmount();
    assert.equal(chart.removed, true);
});

test('after unmount() a resize does not touch the container', () => {
    const target = new EventTarget();
    const chart = createContainer();
    const unmount = mountChart(target, chart, new Array(100_000).fill(0));
    unmount();
    resize(target);
    assert.equal(chart.textContent, '');
});

test('unmounting one chart leaves the other charts listening', () => {
    const target = new EventTarget();
    const sales = createContainer();
    const visits = createContainer();
    const unmountSales = mountChart(target, sales, [1, 2]);
    mountChart(target, visits, [1, 2, 3, 4]);
    unmountSales();
    resize(target);
    assert.equal(sales.textContent, '');
    assert.equal(visits.textContent, '4 points');
});
