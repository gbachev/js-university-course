// size-worker.js: answers with the size of the buffer it got.
self.onmessage = (event) => {
    self.postMessage(event.data.byteLength);
};
