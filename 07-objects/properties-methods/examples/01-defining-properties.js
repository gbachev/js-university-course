// Properties are key-value pairs. With the ES6 shorthand, { name } is { name: name }.
let user = {
    name: 'John',
    age: 30
};

let name = 'Bob';

let user1 = {
    name: name
};

let user2 = { name }; // same as { name: name }

console.log(user); // { name: 'John', age: 30 }
console.log(user1); // { name: 'Bob' }
console.log(user2); // { name: 'Bob' }
