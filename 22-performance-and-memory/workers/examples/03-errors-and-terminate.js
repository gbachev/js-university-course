// An error in the worker arrives as an error event, and terminate() stops the worker.
const worker = new Worker('sort-worker.js');

worker.onmessage = (event) => {
    console.log(event.data.length);
};

worker.addEventListener('error', (event) => {
    console.log('Worker failed:', event.message);
});

worker.postMessage(null);
setTimeout(() => worker.terminate(), 1000);
// Worker failed: Uncaught TypeError: Cannot read properties of null (reading 'toSorted')
// (Chrome's wording)
