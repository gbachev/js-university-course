// Destructuring right in the function parameters.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

function greet({ name, email }) {
    console.log(`Hello ${name}, your email is ${email}`);
}

greet(user); // Hello John, your email is john@example.com
