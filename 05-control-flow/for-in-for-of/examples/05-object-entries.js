const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
};

for (const [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
    // Outputs title: The Great Gatsby, author: F. Scott Fitzgerald, year: 1925 (one per line)
}
