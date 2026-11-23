// Task 1: Read the filters
// Lecture: URLs and the History API
//
// The book search keeps its filters in the address, so a shared link opens the same
// results. Write readFilters(address), which takes a full address and returns
// { query, page, tags }: query is the q parameter ('' when it is missing), page is the
// page parameter as a number (1 when it is missing or not a whole number above 0), and
// tags holds every tag parameter, in order ([] when there is none).
//
// Examples:
//   readFilters('https://books.example.com/search?q=dune&page=2&tag=sci-fi&tag=classic')
//   // { query: 'dune', page: 2, tags: ['sci-fi', 'classic'] }
//   readFilters('https://books.example.com/search')
//   // { query: '', page: 1, tags: [] }
//
// Run the tests: npm test -- 19-events/urls-and-history

export function readFilters(address) {
    // Your code here
}
