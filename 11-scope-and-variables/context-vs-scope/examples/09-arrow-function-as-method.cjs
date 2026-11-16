// This file ends in .cjs, so Node runs it as a plain CommonJS script, like the code in
// the lecture. The arrow function takes this from the top level of the file, which here
// is module.exports, an empty object, so this.name is undefined. In an ES module the
// top-level this is undefined, and this.name would throw a TypeError instead.
const user = {
    name: 'John',
    greet: () => console.log(this.name)
};

user.greet(); // undefined, the arrow function does not bind its own `this`
