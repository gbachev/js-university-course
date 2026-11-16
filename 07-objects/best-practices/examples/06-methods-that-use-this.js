// A regular method (not an arrow function) when the method needs this.
const user = {
    name: 'John',
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(user.greet()); // Hi, I'm John
