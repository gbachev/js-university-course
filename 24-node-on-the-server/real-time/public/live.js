// Listens to GET /events with EventSource and adds every new book to the list.
const status = document.querySelector('#status');
const list = document.querySelector('#books');
const events = new EventSource('/events');

events.onmessage = (event) => {
    status.textContent = event.data;
};

events.addEventListener('book-added', (event) => {
    const book = JSON.parse(event.data);
    const item = document.createElement('li');
    item.textContent = `${event.lastEventId}. ${book.title} by ${book.author}`;
    list.append(item);
});

events.onerror = () => {
    status.textContent = `Connection lost, readyState ${events.readyState}`;
};
