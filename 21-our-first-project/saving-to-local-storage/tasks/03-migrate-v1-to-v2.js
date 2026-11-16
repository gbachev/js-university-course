// Task 3: From version 1 to version 2
// Lecture: Saving to localStorage
//
// Version 2 of our app replaces read: true/false with status: 'done' or 'to-read' and
// saves under 'reading-list:v2'. Write migrateBooks(storage), which runs once on start
// and returns the books to use. When v2 is saved, it returns those books and touches
// nothing. Otherwise, when v1 holds a list (an array), it turns each read into a
// status (the other properties stay), saves the result as v2, removes v1 and returns
// it. With nothing saved it returns []. Broken v1 JSON also gives [], and v1 stays
// where it is.
// storage has getItem(), setItem() and removeItem(), like localStorage.
//
// Examples:
//   v1: '[{"key":"d1","title":"Dune","read":true}]'
//   migrateBooks(storage)   // [{ key: 'd1', title: 'Dune', status: 'done' }]
//   // and now v2 holds that list as JSON, and v1 is gone
//
// Run the tests: npm test -- 21-our-first-project/saving-to-local-storage

export const OLD_KEY = 'reading-list:v1';
export const NEW_KEY = 'reading-list:v2';

export function migrateBooks(storage) {
    // Your code here
}
