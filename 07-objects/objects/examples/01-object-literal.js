// An object: properties are key-value pairs, and a value can be a function.
let user = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello!');
    }
};

console.log(user.name); // John
user.greet(); // Hello!
