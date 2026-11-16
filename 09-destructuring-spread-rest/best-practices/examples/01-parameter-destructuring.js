// Good: destructure the properties we need right in the parameters.
function greet({ name, email }) {
    console.log(`Hello ${name}, your email is ${email}`);
}

const user = { name: 'John', age: 30, email: 'john@example.com' };

greet(user); // Hello John, your email is john@example.com
