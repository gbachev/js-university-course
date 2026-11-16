// Object.seal(): values can change, but no properties are added or deleted.
const user = {
    name: 'John'
};

Object.seal(user);
user.name = 'Jane'; // allowed

try {
    delete user.name; // fails
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot delete property 'name' of #<Object>
}

try {
    user.age = 25; // fails
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot add property age, object is not extensible
}

console.log(user); // { name: 'Jane' }
