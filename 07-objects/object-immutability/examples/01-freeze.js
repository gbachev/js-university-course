// Object.freeze(): no new properties, no deletes, no new values.
// Our example files are modules, which run in strict mode, so every failed change
// throws a TypeError. Outside strict mode the changes would fail silently.
const user = {
    name: 'John'
};

Object.freeze(user);

try {
    user.name = 'Jane'; // fails
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
}

try {
    user.age = 25; // fails
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot add property age, object is not extensible
}

try {
    delete user.name; // fails
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot delete property 'name' of #<Object>
}

console.log(user); // { name: 'John' }
