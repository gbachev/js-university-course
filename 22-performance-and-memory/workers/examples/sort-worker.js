// sort-worker.js: runs on a thread of its own and answers with the sorted books.
self.addEventListener('message', (event) => {
    const books = event.data;
    const sorted = books.toSorted(
        (a, b) => a.title.localeCompare(b.title)
    );
    self.postMessage(sorted);
});
