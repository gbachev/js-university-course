// Task 3: Ask the worker
// Lecture: Workers
//
// Talking to a worker with message events gets messy when we only want one answer. Write
// askWorker(worker, data): it posts data to the worker and returns a Promise of the
// answer. Our worker answers { ok: true, result } or { ok: false, error }: the promise
// resolves with result, or rejects with new Error(error). Each call listens for one
// answer only, so a second askWorker() after the first one has its own answer, and no
// listener stays behind (the { once: true } option of addEventListener helps).
//
// Examples:
//   const worker = new Worker('./03-ask-the-worker.worker.js');
//   await askWorker(worker, [25, 20])        // 45
//   await askWorker(worker, [25, 'twenty'])  // rejects: Error: Every price must be a number
//
// Open the page: npm run serve, then
// 22-performance-and-memory/workers/tasks/03-ask-the-worker.html

export function askWorker(worker, data) {
    // Your code here
}
