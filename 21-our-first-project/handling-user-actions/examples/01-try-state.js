// The lecture's try-state.js, run against the app's own state.js.
import { addBook, removeBook, toggleRead } from '../../reading-list/src/state.js';

const dune = { key: 'dune', title: 'Dune', author: 'Frank Herbert' };
const before = [];
const after = addBook(before, dune);

console.log(before.length, after.length); // 0 1
console.log(after[0].read, dune.read); // false undefined

const marked = toggleRead(after, 'dune');
console.log(after[0].read, marked[0].read); // false true

console.log(addBook(marked, dune) === marked); // true
console.log(removeBook(marked, 'dune'), marked.length); // [] 1
