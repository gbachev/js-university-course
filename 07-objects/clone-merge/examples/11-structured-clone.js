// structuredClone() is the native deep clone of the browser and Node 17+.
let original = {
    person: {
        name: 'John Doe'
    },
    list: [1, 2, 3]
};
let copy = structuredClone(original);

copy.person.name = 'Jane Doe';
console.log(original.person.name); // John Doe
console.log(original.list); // [ 1, 2, 3 ]

// It throws on functions.
try {
    structuredClone({ greet: function () {} });
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // DataCloneError: function () {} could not be cloned.
}
