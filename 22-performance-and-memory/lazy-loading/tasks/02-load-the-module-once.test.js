import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createLazyLoader } = await import(
    process.env.SOLUTIONS ? '../solutions/02-load-the-module-once.js' : './02-load-the-module-once.js'
);

// A fake download: it counts its calls and answers with a module object,
// or fails for the calls listed in failOn (1 is the first call).
function fakeLoad(failOn = []) {
    const loader = {
        calls: 0,
        load() {
            loader.calls += 1;
            if (failOn.includes(loader.calls)) {
                return Promise.reject(new Error('Network error'));
            }
            return Promise.resolve({ toCsv: () => 'title,author' });
        },
    };
    return loader;
}

test('get() returns a promise of the loaded module', async () => {
    const loader = fakeLoad();
    const get = createLazyLoader(loader.load);
    const module = await get();
    assert.equal(module.toCsv(), 'title,author');
});

test('nothing loads before the first get()', () => {
    const loader = fakeLoad();
    createLazyLoader(loader.load);
    assert.equal(loader.calls, 0);
});

test('later calls return the same promise and load nothing', async () => {
    const loader = fakeLoad();
    const get = createLazyLoader(loader.load);
    const first = get();
    const second = get();
    assert.equal(first, second);
    await first;
    await get();
    assert.equal(loader.calls, 1);
});

test('a failed download rejects', async () => {
    const loader = fakeLoad([1]);
    const get = createLazyLoader(loader.load);
    await assert.rejects(get(), { message: 'Network error' });
});

test('after a failure, the next get() tries again', async () => {
    const loader = fakeLoad([1]);
    const get = createLazyLoader(loader.load);
    await assert.rejects(get(), { message: 'Network error' });
    const module = await get();
    assert.equal(module.toCsv(), 'title,author');
    assert.equal(loader.calls, 2);
});
