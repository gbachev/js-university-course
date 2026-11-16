const order = { id: 7, items: ['book'] };

const shallow = { ...order };
const deep = structuredClone(order);

order.items.push('pen');
console.log(shallow.items); // [ 'book', 'pen' ]
console.log(deep.items); // [ 'book' ]
