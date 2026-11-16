// Keys can be strings (with spaces or dashes too), numbers and symbols.
const symId = Symbol('id');

let obj = {
    'user name': 'johndoe',
    'first-name': 'John',
    'last-name': 'Doe',
    'address': '123 Main St',
    age: 30,
    100: 'a number key',
    [symId]: 12345
};

console.log(obj['user name']); // johndoe
console.log(obj['first-name']); // John
console.log(obj[100]); // a number key - the number 100 became the key '100'
console.log(obj[symId]); // 12345
