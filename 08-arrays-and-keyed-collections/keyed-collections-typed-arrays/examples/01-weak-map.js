const weakMap = new WeakMap();

let user = { name: 'John' };
weakMap.set(user, 'cached result');

console.log(weakMap.get(user)); // cached result

user = null; // The object is no longer reachable

console.log(weakMap.get(user)); // undefined - we passed null
