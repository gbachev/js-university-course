// Object.defineProperties() defines several properties in one call.
const user = {};

Object.defineProperties(user, {
    age: {
        value: 30,
        writable: true
    },
    email: {
        value: 'john.doe@example.com',
        writable: false
    }
});

console.log(user.age, user.email); // 30 john.doe@example.com
console.log(Object.getOwnPropertyDescriptor(user, 'email'));
// {
//   value: 'john.doe@example.com',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
