const userMap = new Map();
userMap.set('john', { role: 'admin' });
userMap.set('jane', { role: 'editor' });

console.log(JSON.stringify(userMap)); // {}
console.log(JSON.stringify([...userMap]));
// [["john",{"role":"admin"}],["jane",{"role":"editor"}]]

const obj = Object.fromEntries(userMap);
const newMap = new Map(Object.entries(obj));

console.log(obj.jane); // { role: 'editor' }
console.log(newMap.get('john')); // { role: 'admin' }
