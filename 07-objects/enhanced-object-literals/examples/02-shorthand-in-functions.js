// The shorthand is handy when a function returns an object.
function createUser(name, age) {
    return { name, age };
}

console.log(createUser('Jane', 25)); // { name: 'Jane', age: 25 }
