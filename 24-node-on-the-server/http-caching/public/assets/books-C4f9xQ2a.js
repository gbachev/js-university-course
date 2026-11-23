// A "hashed" file, named the way vite build names its files. Asks for /me/books twice:
// the second time the browser sends If-None-Match, the server answers 304, and fetch()
// hands our code the stored copy with the status 200.
const output = document.querySelector('#output');

for (const round of [1, 2]) {
    const response = await fetch('/me/books');
    const books = await response.json();

    const item = document.createElement('li');
    item.textContent = `Round ${round}: ${response.status}, ${books.length} books`;
    output.append(item);
}
