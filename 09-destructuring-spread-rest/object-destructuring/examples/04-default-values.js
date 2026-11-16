// A default value for a property that is missing.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

const { phone = 'N/A' } = user;

console.log(phone); // N/A
