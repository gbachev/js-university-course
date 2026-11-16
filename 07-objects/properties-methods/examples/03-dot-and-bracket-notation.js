// Dot notation and bracket notation read and change the same property.
let user = {
    name: 'Jane'
};

console.log(user.name); // Jane
console.log(user['name']); // Jane

user.name = 'John';
console.log(user.name); // John
