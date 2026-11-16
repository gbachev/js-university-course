// The delete operator removes a property.
let user = {
    name: 'John',
    age: 30,
    email: 'john.doe@example.com'
};

delete user.email;

console.log(user.email); // undefined
console.log(user); // { name: 'John', age: 30 }
