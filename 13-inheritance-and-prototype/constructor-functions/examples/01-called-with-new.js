// A constructor function is an ordinary function we call with new.
function Person(name, email) {
    this.name = name;
    this.email = email;
}

const johnDoe = new Person('John Doe', 'john@example.com');

console.log(johnDoe.name); // John Doe
console.log(johnDoe instanceof Person); // true
console.log(typeof Person); // function
