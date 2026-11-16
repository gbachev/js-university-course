// postMessage() copies its argument: a function cannot be copied, a buffer can be moved.
const worker = new Worker('size-worker.js');
worker.onmessage = (event) => {
    console.log(`Worker got ${event.data} bytes`);
};

try {
    worker.postMessage({ title: 'Dune', format: () => 'Dune' });
} catch (error) {
    console.log(error.name); // DataCloneError
}

const buffer = new ArrayBuffer(8 * 1024 * 1024);
console.log(buffer.byteLength); // 8388608

worker.postMessage(buffer, [buffer]);
console.log(buffer.byteLength); // 0
console.log(buffer.detached); // true
// Worker got 8388608 bytes
