let attempts = 0; // we reassign it, so let
attempts++;
console.log(attempts); // 1

const user = { name: 'John' };
user.name = 'Jane'; // allowed - we do not change the reference
console.log(user.name); // Jane

try {
    user = { name: 'Jane Doe' }; // TypeError - a new reference
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}
