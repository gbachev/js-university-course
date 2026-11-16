const map = new Map();
map.set(NaN, 'value');

console.log(map.get(NaN)); // value
console.log(NaN !== NaN); // true
