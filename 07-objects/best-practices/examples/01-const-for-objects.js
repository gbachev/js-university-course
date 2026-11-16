// const fixes the reference, not the contents of the object.
const user = { name: 'John' };
user.name = 'Jane'; // allowed - we do not change the reference

console.log(user.name); // Jane

try {
    user = { name: 'John Doe' }; // error - we try to assign a new reference
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}
