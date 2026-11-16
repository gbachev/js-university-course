// The lecture's try-storage.js, run against the app's own storage.js.
import { loadBooks, STORAGE_KEY } from '../../reading-list/src/storage.js';

// A stand-in that always returns the same saved text.
const saved = (text) => ({ getItem: () => text });

const dune = '{"key":"d1","title":"Dune","read":false}';
const noKey = '{"title":"Emma","read":true}';

console.log(STORAGE_KEY); // reading-list:v1
console.log(loadBooks(saved(null))); // []
console.log(loadBooks(saved('{broken'))); // []
console.log(loadBooks(saved(`[${dune}]`)));
// [ { key: 'd1', title: 'Dune', read: false } ]
console.log(loadBooks(saved(`[${dune},${noKey}]`))); // []
