// bind() gives 'bound greet', new Function() gives 'anonymous', an arrow in an array ''.
function greet() {
    return `Hi, I am ${this.name}`;
}
const greetJohn = greet.bind({ name: 'John Doe' });
const double = new Function('x', 'return x * 2');
const handlers = [() => {}];

console.log(greetJohn.name); // bound greet
console.log(double.name); // anonymous
console.log(handlers[0].name === ''); // true

