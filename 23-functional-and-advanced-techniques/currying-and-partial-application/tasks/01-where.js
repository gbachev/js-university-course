// Task 1: Filters that read like a sentence
// Lecture: Currying and Partial Application
//
// Our bookshop filters its lists by one field at a time. Write where(field), curried by
// hand as a chain of arrow functions: where(field) returns a function that takes a value,
// and that one returns a test for filter(). The test gets an item and returns true when
// item[field] is strictly equal (===) to the value, so 2001 and '2001' do not match.
// An item without the field does not match. We can configure a test once and reuse it.
//
// Examples:
//   const byJane = where('author')('Jane Doe');
//   byJane({ title: 'Emma', author: 'Jane Doe' })    // true
//   books.filter(where('year')(1965))                // the books from 1965
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/currying-and-partial-application

export const where = (field) => {
    // Your code here
};
