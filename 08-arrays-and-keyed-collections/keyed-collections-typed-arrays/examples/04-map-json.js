const userMap = new Map();
userMap.set('george', { age: 30, role: 'admin' });
userMap.set('anna', { age: 25, role: 'editor' });

const json = JSON.stringify([...userMap]);
console.log(json);
// [["george",{"age":30,"role":"admin"}],["anna",{"age":25,"role":"editor"}]]

console.log(JSON.stringify(userMap)); // {}
