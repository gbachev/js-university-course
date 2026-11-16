const map = new Map();
map.set('a', 1);
map.set('b', 2);

const obj = Object.fromEntries(map);
const newMap = new Map(Object.entries(obj));

console.log(obj); // { a: 1, b: 2 }
console.log(newMap); // Map(2) { 'a' => 1, 'b' => 2 }
