// An arrow function keeps the this of the scope it was created in.
const john = {
    name: 'John Doe',
    makeGreeter() {
        return () => `Hi, I am ${this.name}`;
    }
};
const jane = { name: 'Jane Doe' };

const greet = john.makeGreeter();
console.log(greet()); // Hi, I am John Doe
console.log(greet.call(jane)); // Hi, I am John Doe
console.log(greet.bind(jane)()); // Hi, I am John Doe
