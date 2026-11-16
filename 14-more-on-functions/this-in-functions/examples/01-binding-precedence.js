// call() on a method wins over the object before the dot.
const john = {
    name: 'John Doe',
    greet() {
        return `Hi, I am ${this.name}`;
    }
};
const jane = { name: 'Jane Doe' };

console.log(john.greet()); // Hi, I am John Doe
console.log(john.greet.call(jane)); // Hi, I am Jane Doe
