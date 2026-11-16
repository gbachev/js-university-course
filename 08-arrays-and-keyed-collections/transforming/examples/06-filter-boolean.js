const mixed = [0, 1, false, 2, '', 3];
const truthy = mixed.filter(Boolean);

console.log(truthy); // [ 1, 2, 3 ]
