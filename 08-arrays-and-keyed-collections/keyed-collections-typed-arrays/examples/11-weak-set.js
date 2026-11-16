const weakSet = new WeakSet();

let obj = { id: 123 };
weakSet.add(obj);

console.log(weakSet.has(obj)); // true

obj = null; // The object can be garbage collected, and removed from the set
