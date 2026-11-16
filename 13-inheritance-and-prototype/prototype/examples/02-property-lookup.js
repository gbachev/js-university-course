// A lookup starts on the object and climbs the chain until it finds the property.
const user = {
    name: 'John Doe',
    email: 'john@example.com'
};

console.log(user.name); // John Doe
console.log(user.toString()); // [object Object]
console.log(user.age); // undefined
