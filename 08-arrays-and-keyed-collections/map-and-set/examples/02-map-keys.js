const map = new Map();
const obj1 = { id: 1 };
const obj2 = { id: 1 };

map.set(1, 'number one');
map.set(obj1, 'value');
map.set(NaN, 'not a number');

console.log(map.get('1')); // undefined - no type conversion
console.log(map.get(obj2)); // undefined - different reference
console.log(map.get(NaN)); // not a number
console.log(NaN !== NaN); // true
