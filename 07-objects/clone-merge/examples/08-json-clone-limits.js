// The JSON copy keeps only what JSON can hold.
let sym = Symbol('unique');
let original = {
    person: {
        greet: function () {
            return 'Hello';
        },
        name: 'John Doe',
        age: undefined,
        [sym]: 'unique',
        lastModified: new Date('2025-03-15T12:00:00.000Z'),
        RegExp: new RegExp('abc')
    }
};
let copy = JSON.parse(JSON.stringify(original));

console.log(original);
// {
//   person: {
//     greet: [Function: greet],
//     name: 'John Doe',
//     age: undefined,
//     lastModified: 2025-03-15T12:00:00.000Z,
//     RegExp: /abc/,
//     [Symbol(unique)]: 'unique'
//   }
// }
console.log(copy);
// {
//   person: {
//     name: 'John Doe',
//     lastModified: '2025-03-15T12:00:00.000Z',
//     RegExp: {}
//   }
// }
// greet, age and the symbol key are gone, the date is a string, the RegExp an empty object.
