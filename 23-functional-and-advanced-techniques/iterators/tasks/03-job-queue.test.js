import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { jobQueue } = await import(
    process.env.SOLUTIONS ? '../solutions/03-job-queue.js' : './03-job-queue.js'
);

const jobs = ['email', 'resize', 'backup'];

test('next() hands out the jobs in order, then done: true', () => {
    const queue = jobQueue(jobs, []);
    assert.deepEqual(queue.next(), { value: 'email', done: false });
    assert.deepEqual(queue.next(), { value: 'resize', done: false });
    assert.deepEqual(queue.next(), { value: 'backup', done: false });
    assert.deepEqual(queue.next(), { value: undefined, done: true });
});

test('the queue is its own iterator, so it is used up after one pass', () => {
    const queue = jobQueue(jobs, []);
    assert.equal(queue[Symbol.iterator](), queue);
    assert.deepEqual([...queue], jobs);
    assert.deepEqual([...queue], []);
});

test('it carries on from where next() left off', () => {
    const queue = jobQueue(jobs, []);
    queue.next();
    assert.deepEqual([...queue], ['resize', 'backup']);
});

test('a break in for...of closes the queue', () => {
    const log = [];
    const done = [];
    for (const job of jobQueue(jobs, log)) {
        done.push(job);
        if (job === 'resize') break;
    }
    assert.deepEqual(done, ['email', 'resize']);
    assert.deepEqual(log, ['closed']);
});

test('destructuring the first job closes the queue', () => {
    const log = [];
    const [first] = jobQueue(jobs, log);
    assert.equal(first, 'email');
    assert.deepEqual(log, ['closed']);
});

test('a loop that reads every job does not call return()', () => {
    const log = [];
    for (const job of jobQueue(jobs, log)) {
        assert.equal(typeof job, 'string');
    }
    assert.deepEqual(log, []);
});
