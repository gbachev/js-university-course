const weakMap = new WeakMap();

let user = { name: 'John' };
weakMap.set(user, 'cached result');

console.log(weakMap.get(user)); // cached result

user = null; // The object is no longer reachable

// undefined - user is null now, so we look up the key null. The object and its value
// are removed by the garbage collector at some point, and we cannot see when.
console.log(weakMap.get(user)); // undefined
