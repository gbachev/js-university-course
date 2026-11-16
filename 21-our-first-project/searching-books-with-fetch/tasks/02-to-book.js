// Task 2: Books with missing details
// Lecture: Searching Books with Fetch
//
// Below is toBook() from api.js. It shows only the first author and keeps a missing
// title as undefined. Change it: one author stays as it is, two authors become
// 'Kevin J. Anderson and Brian Herbert', and three or more become the first one with
// the count of the others, like 'Margaret Weis and 2 others'. A missing or empty
// author_name gives 'Unknown author', and a missing title gives 'Untitled'. A missing
// year or cover is still null.
//
// Examples:
//   toBook({ key: '/works/OL1W', title: 'Dune', author_name: ['Frank Herbert'] })
//   // { key: '/works/OL1W', title: 'Dune', author: 'Frank Herbert',
//   //   year: null, coverId: null }
//   toBook({ key: '/works/OL2W', author_name: [] })
//   // { key: '/works/OL2W', title: 'Untitled', author: 'Unknown author', ... }
//
// Run the tests: npm test -- 21-our-first-project/searching-books-with-fetch

// Copied from reading-list/src/api.js, with export added for the tests.
export const toBook = (doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Unknown author',
    year: doc.first_publish_year ?? null,
    coverId: doc.cover_i ?? null,
});
