// Runs in the page from npm run serve, on port 8080, and calls the books API on port 3000:
// another origin. Each line also goes to the console.
const api = 'http://localhost:3000';
const output = document.querySelector('#output');

function show(line) {
    console.log(line);
    const item = document.createElement('li');
    item.textContent = line;
    output.append(item);
}

try {
    const response = await fetch(`${api}/books`);
    const books = await response.json();
    show(`GET /books: ${response.status}, ${books.length} books`);
} catch (error) {
    show(`GET /books: ${error.name} ${error.message}`);
}

// A JSON body, so the browser sends a preflight first.
try {
    const response = await fetch(`${api}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: `emma-${Date.now()}`, title: 'Emma', author: 'Jane Austen' }),
    });
    const book = await response.json();
    show(`POST /books: ${response.status}, ${book.title}`);
} catch (error) {
    show(`POST /books: ${error.name} ${error.message}`);
}
