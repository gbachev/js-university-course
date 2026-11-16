// Destructuring into variables we declared before needs parentheses.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

let userName, userAge;

({ name: userName, age: userAge } = user);

console.log(userName); // John
console.log(userAge); // 30
