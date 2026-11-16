// Task 2: Titles from the search results
// Lecture: Array-Like Objects and Array.from()
//
// An old search service sends its results as an array-like object, not an array:
// { 0: ' Dune ', 1: 'Emma  ', length: 2 }. The titles come with extra spaces around
// them. The function getTitles(results) should return a real array with the titles,
// each one without the spaces around it. Right now it throws a TypeError. Fix it.
// No results ({ length: 0 }) give an empty array.
//
// Examples:
//   getTitles({ 0: ' Dune ', 1: 'Emma  ', length: 2 })   // [ 'Dune', 'Emma' ]
//   getTitles({ length: 0 })                            // []
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/array-like-objects

export function getTitles(results) {
    return [...results].map(title => title.trim());
}
