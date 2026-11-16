const weakSet = new WeakSet();

let obj = { id: 123 };
weakSet.add(obj);

console.log(weakSet.has(obj)); // true

obj = null; // The object and its entry can now be collected
