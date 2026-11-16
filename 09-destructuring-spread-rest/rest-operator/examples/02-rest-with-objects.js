// Rest with objects: the remaining own properties go into a new object.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    country: 'USA'
};

const { name, ...rest } = user;

console.log(name); // John
console.log(rest); // { age: 30, email: 'john@example.com', country: 'USA' }
