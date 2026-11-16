// The second argument defines own properties with descriptors.
const userMethods = {
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

const john = Object.create(userMethods, {
    name: {
        value: 'John Doe',
        enumerable: true
    },
    id: {
        value: 42
    }
});

console.log(john.greet()); // Hi, I'm John Doe
console.log(john.id); // 42
console.log(Object.keys(john)); // [ 'name' ]
console.log(JSON.stringify(john)); // {"name":"John Doe"}

// This file is a module, so it runs in strict mode and the failed write throws.
// Outside strict mode the write fails silently.
try {
    john.id = 7;
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot assign to read only property 'id' of object '#<Object>'
}

console.log(john.id); // 42
