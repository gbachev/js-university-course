const map = new Map();

map.set('user', { name: 'John' });
map.set('isAdmin', true);
map.set('cart', []);
map.set({ id: 1 }, 'first record');

console.log(map.get('user')); // { name: 'John' }
console.log(map.has('isAdmin')); // true
console.log(map.size); // 4

map.delete('cart');
console.log(map.get('cart')); // undefined
console.log(map.size); // 3

map.clear();
console.log(map.size); // 0
