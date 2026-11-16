// Task 3: Count the keys
// Lecture: Symbol
//
// Our debug tool shows how many keys an object has, and Object.keys() alone misses
// the symbol keys. Write countKeys(obj): it returns an object with two counts,
// visible for the keys Object.keys() lists, and hidden for the symbol keys, which
// Object.getOwnPropertySymbols() lists.
//
// Examples:
//   const user = { name: 'Ada', [Symbol('id')]: 7 };
//   countKeys(user)   // { visible: 1, hidden: 1 }
//   countKeys({})     // { visible: 0, hidden: 0 }
//
// Run the tests: npm test -- 06-types/symbol

export function countKeys(obj) {
    // Your code here
}
