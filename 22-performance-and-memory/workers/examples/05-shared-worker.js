// Every tab that opens this page connects to the same shared worker.
const list = new SharedWorker(
    new URL('./list-worker.js', import.meta.url),
    { type: 'module' }
);

list.port.addEventListener('message', (event) => {
    console.log('Reading list:', event.data);
});
list.port.start();

list.port.postMessage('Dune');
// Reading list: ['Dune']
// in a second tab, both tabs log: Reading list: ['Dune', 'Dune']
