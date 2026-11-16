try {
    const response = await fetch("http://localhost:3001/books");
    const books = await response.json();
    console.log(books[0].title);
} catch (error) {
    console.log(error.name, error.message);
}
// With 01-api.js running:
// TypeError Failed to fetch
// With 03-api-allows-our-origin.js running:
// Dune
