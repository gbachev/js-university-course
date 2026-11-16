// Dot notation works only for keys that are valid identifiers.
let obj = {
    'user name': 'johndoe',
    'first-name': 'John',
    'last-name': 'Doe',
    'address': '123 Main St',
    age: 30,
    100: 'a number key'
};

// These lines do not even run, they are syntax errors:
// obj.user name
// obj.100
// obj.'100'

// obj.first-name is read as obj.first minus name. In Node there is no variable called
// name, so we get an error; in a browser script window.name exists and we get NaN.
try {
    console.log(obj.first-name);
} catch (error) {
    console.log(error.name + ': ' + error.message); // ReferenceError: name is not defined
}

// Bracket notation works for every key.
console.log(obj['user name']); // johndoe
console.log(obj['first-name']); // John
console.log(obj[100]); // a number key
