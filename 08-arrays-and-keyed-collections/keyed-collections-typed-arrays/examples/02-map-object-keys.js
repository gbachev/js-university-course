const map = new Map();
const obj1 = { id: 1 };
const obj2 = { id: 1 };

map.set(obj1, 'value');

console.log(map.get(obj2)); // undefined - different reference
console.log(map.get(obj1)); // value
