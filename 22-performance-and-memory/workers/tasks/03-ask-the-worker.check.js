import { check, equal, ok, source } from '/lib/browser-check.js';

const { askWorker } = await import(source('03-ask-the-worker.js'));

// The worker sits in tasks/, next to this file, for our code and the solution alike.
const createWorker = () => new Worker(new URL('./03-ask-the-worker.worker.js', import.meta.url));

// Gives up after a second, so a promise that never settles shows up as a failing check.
function withTimeout(promise) {
    return Promise.race([
        promise,
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('no answer after one second')), 1000);
        }),
    ]);
}

await check('askWorker() returns a promise', () => {
    const worker = createWorker();
    const answer = askWorker(worker, [1]);
    ok(answer instanceof Promise, 'expected a Promise');
    worker.terminate();
});

await check('the promise resolves with the result of the worker', async () => {
    const worker = createWorker();
    equal(await withTimeout(askWorker(worker, [25, 20])), 45);
    worker.terminate();
});

await check('two questions in a row get their own answers', async () => {
    const worker = createWorker();
    equal(await withTimeout(askWorker(worker, [10, 5])), 15);
    equal(await withTimeout(askWorker(worker, [1, 2, 3])), 6);
    worker.terminate();
});

await check('an error answer rejects with an Error', async () => {
    const worker = createWorker();
    let caught;
    try {
        await withTimeout(askWorker(worker, [25, 'twenty']));
    } catch (error) {
        caught = error;
    }
    ok(caught instanceof Error, 'expected the promise to reject with an Error');
    equal(caught.message, 'Every price must be a number');
    worker.terminate();
});

await check('no listener stays on the worker after the answer', async () => {
    const worker = createWorker();
    let listeners = 0;
    const add = worker.addEventListener.bind(worker);
    const remove = worker.removeEventListener.bind(worker);
    worker.addEventListener = (type, listener, options) => {
        listeners += 1;
        // a listener added with { once: true } goes away by itself after one event
        add(type, options?.once ? (event) => { listeners -= 1; listener(event); } : listener, options);
    };
    worker.removeEventListener = (type, listener, options) => {
        listeners -= 1;
        remove(type, listener, options);
    };
    await withTimeout(askWorker(worker, [2, 2]));
    equal(listeners, 0, `expected no listeners left, found ${listeners}`);
    worker.terminate();
});
