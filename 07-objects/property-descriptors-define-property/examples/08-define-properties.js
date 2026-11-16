// Object.defineProperties() defines several properties in one call.
const user = {};

Object.defineProperties(user, {
    age: {
        value: 30,
        writable: true
    },
    email: {
        value: 'bob@example.com',
        writable: false
    }
});

console.log(user.age, user.email); // 30 bob@example.com
console.log(Object.getOwnPropertyDescriptor(user, 'email'));
// {
//   value: 'bob@example.com',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
