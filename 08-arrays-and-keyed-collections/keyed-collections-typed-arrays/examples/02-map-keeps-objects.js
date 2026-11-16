const cache = new Map();

let user = { name: 'John' };
cache.set(user, 'cached result');

user = null;

console.log(cache.size); // 1
console.log([...cache.keys()]); // [ { name: 'John' } ]
