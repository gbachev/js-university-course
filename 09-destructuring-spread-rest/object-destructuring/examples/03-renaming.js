// A colon gives the variable a different name than the property.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

const { name: userName, email: userEmail } = user;

console.log(userName); // John
console.log(userEmail); // john@example.com
