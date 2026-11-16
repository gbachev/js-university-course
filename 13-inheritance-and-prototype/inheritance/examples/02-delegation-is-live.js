// Objects delegate, so a method added to the prototype later reaches them all.
const person = {
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

const johnDoe = { __proto__: person, name: 'John Doe' };
const janeDoe = { __proto__: person, name: 'Jane Doe' };

console.log(johnDoe.greet === janeDoe.greet); // true

person.farewell = function () {
    return `Bye from ${this.name}`;
};

console.log(janeDoe.farewell()); // Bye from Jane Doe
