// A property that does not exist gives undefined.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

const { phone } = user;
console.log(phone); // undefined
