// Renaming and a default value at the same time.
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

const { country: userCountry = 'Unknown' } = user;

console.log(userCountry); // Unknown
