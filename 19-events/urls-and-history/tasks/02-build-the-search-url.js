// Task 2: Build the search URL
// Lecture: URLs and the History API
//
// A search form gives us its fields as an object. Write buildSearchUrl(base, fields),
// which returns the full address of the search as a string: base with every field as a
// query parameter, in the order of the object. Leave out fields that are '', null or
// undefined. Spaces and & in a value must not break the address, so build the query
// string instead of gluing it. With no fields left, the address has no ?.
//
// Examples:
//   buildSearchUrl('https://books.example.com/search', { q: 'rock & roll', page: 2, sort: '' })
//   // 'https://books.example.com/search?q=rock+%26+roll&page=2'
//   buildSearchUrl('https://books.example.com/search', { q: '' })
//   // 'https://books.example.com/search'
//
// Run the tests: npm test -- 19-events/urls-and-history

export function buildSearchUrl(base, fields) {
    // Your code here
}
